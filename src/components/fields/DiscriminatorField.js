import React from "react";
import PropTypes from "prop-types";

import {
  getDefaultFormState,
  checkDiscriminator,
  prefixClass,
  isMultipleSchema,
  classNames,
  isOneOfSchema,
  retrieveSchema
} from "../../utils";
import TagSelector from "../widgets/TagSelector";
import { getOneAnyOfPath } from "../../validationUtils";
import { DefaultTemplate } from "./SchemaField";

const CHAR_THRESHOLD = 120;

export function generateFormDataForMultipleSchema(schema, index, caseOf) {
  if (isMultipleSchema(schema)) {
    const _schema = schema.oneOf ? schema.oneOf[index] : schema.anyOf[index];

    return {
      $$__case: index,
      $$__case_of: caseOf,
      value: generateFormDataForMultipleSchema(
        _schema,
        0,
        getMultipleSchemaType(_schema)
      )
    };
  }
  return computeInitialValue(schema);
}

const getMultipleSchemaType = schema =>
  schema && schema.hasOwnProperty("oneOf") ? "oneOf" : "anyOf";

function computeInitialValue(schema) {
  if (schema.type === "object") {
    return {};
  } else if (schema.type === "array") {
    return [];
  } else if (schema && isMultipleSchema(schema)) {
    return generateFormDataForMultipleSchema(
      schema,
      0,
      getMultipleSchemaType(schema)
    );
  } else {
    return undefined;
  }
}

function getInitialFormData(schema, index, caseOf) {
  let initialFormData = {
    $$__case: index,
    $$__case_of: caseOf,
    value: computeInitialValue(schema)
  };
  return initialFormData;
}

function getMultipleLabel(schema) {
  if (schema.hasOwnProperty("anyOf")) {
    return "Any Of";
  }
  if (schema.hasOwnProperty("oneOf")) {
    return "One Of";
  }
}

function getEvenOddClass(depth) {
  return depth % 2 === 0 ? "even" : "odd";
}

class DiscriminatorField extends React.Component {
  state;
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      checked: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { schema, formData, parentPath, required, fromDiscriminator } = props;

    /**
     * Fixes {@link https://github.com/apimatic/apimatic-dx-portal/issues/426}
     * When both anyOf and oneOf exists then pick oneOf as currently there is
     * limited support in docgen side
     * 🙌🙌🙌
     */
    if (schema.oneOf && schema.anyOf) {
      delete schema.anyOf;
    }

    const initialSchema = schema.oneOf || schema.anyOf;
    const initialSchemaIndex =
      formData && formData.$$__case ? formData.$$__case : 0;
    const data = formData || {};
    const caseOf = getMultipleSchemaType(schema);
    const newState = {
      formState: formData
        ? {
            ...state.formState,
            [getOneAnyOfPath(parentPath, data)]: formData
          }
        : {},
      selectedSchema: {
        index: initialSchemaIndex,
        schema: initialSchema[initialSchemaIndex]
      },
      caseOf,
      optional: fromDiscriminator ? false : !required
    };

    return newState;
  }

  onDiscriminatorChange = () => {
    const { onChange, formData, parentPath } = this.props;
    const { selectedSchema } = this.state;

    return (value, options, schemaIndex) => {
      let newFormData;

      if (checkDiscriminator(formData)) {
        newFormData = {
          ...formData,
          $$__case: selectedSchema.index,
          value
        };
      } else {
        newFormData = {
          ...formData,
          value
        };
      }

      this.setState(st => {
        return {
          ...st,
          formState: {
            ...st.formState,
            [getOneAnyOfPath(parentPath, newFormData)]: newFormData
          }
        };
      });
      onChange(
        newFormData,
        {
          validate: false
        },
        this.state.selectedSchema.index
      );
    };
  };

  renderSchemaField = depth => {
    const {
      disabled,
      errorSchema,
      idPrefix,
      onBlur,
      onFocus,
      registry,
      uiSchema,
      typeCombinatorTypes: typeCombinatorTypesFromProps,
      parentPath,
      formData,
      schema
    } = this.props;

    const _SchemaField = registry.fields.SchemaField;
    const { selectedSchema } = this.state;
    const { selectOptions } = this.getSelectOptions();
    const { typeCombinatorTypes = typeCombinatorTypesFromProps } = schema;

    const childIsMap =
      selectedSchema.schema &&
      selectedSchema.schema.type === "object" &&
      selectedSchema.schema.hasOwnProperty("additionalProperties") &&
      selectedSchema.schema.additionalProperties.type !== "object";

    const childIsArray =
      selectedSchema.schema &&
      selectedSchema.schema.type === "array" &&
      selectedSchema.schema.hasOwnProperty("items") &&
      selectedSchema.schema.items.type !== "object";

    const childIsNestedMultipleSchema = isMultipleSchema(selectedSchema.schema);

    const isDiscriminatorChild = !(
      childIsArray ||
      childIsMap ||
      childIsNestedMultipleSchema
    );

    const uiTitle = selectOptions[selectedSchema.index].label;
    const childDepth = isDiscriminatorChild ? depth + 2 : depth + 1;

    let discriminatorObj = undefined;

    let typeCombinatorSubTypes;

    if (typeCombinatorTypes) {
      discriminatorObj = {
        name: schema.discriminator,
        value: typeCombinatorTypes[selectedSchema.index].DiscriminatorValue
      };

      const selectedSchemaTypeCombinator =
        typeCombinatorTypes[selectedSchema.index];

      typeCombinatorSubTypes = selectedSchemaTypeCombinator.ContainsSubTypes
        ? selectedSchemaTypeCombinator.SubTypes
        : null;
    }

    if (!this.state && !formData) {
      return <p>schema or formdata not available</p>;
    }

    return (
      <_SchemaField
        schema={selectedSchema.schema}
        uiSchema={{
          ...uiSchema,
          "ui:title": isOneOfSchema(selectedSchema.schema) ? undefined : uiTitle
        }}
        errorSchema={errorSchema}
        idPrefix={idPrefix}
        formData={formData.value}
        onChange={this.onDiscriminatorChange()}
        onBlur={onBlur}
        onFocus={onFocus}
        registry={registry}
        disabled={disabled}
        schemaIndex={selectedSchema.index}
        depth={childDepth}
        isEven={childDepth % 2 === 0}
        // Flag for detecting discriminator in child level
        fromDiscriminator={true}
        // Title will set in boolean fields
        anyOfTitle={this.props.schema.title || this.props.anyOfTitle}
        typeCombinatorTypes={typeCombinatorSubTypes}
        parentPath={getOneAnyOfPath(parentPath, formData)}
        discriminatorObj={discriminatorObj}
      />
    );
  };

  renderSchema = depth => {
    const { selectedSchema } = this.state;

    const childIsMap =
      selectedSchema.schema &&
      selectedSchema.schema.type === "object" &&
      selectedSchema.schema.hasOwnProperty("additionalProperties") &&
      selectedSchema.schema.additionalProperties.type !== "object";
    const childIsArray =
      selectedSchema.schema &&
      selectedSchema.schema.type === "array" &&
      selectedSchema.schema.hasOwnProperty("items") &&
      selectedSchema.schema.items.type !== "object";
    const childIsNestedMultipleSchema = isMultipleSchema(selectedSchema.schema);
    const isDiscriminatorChild = !(
      childIsArray ||
      childIsMap ||
      childIsNestedMultipleSchema
    );

    const discriminatorChildFieldsetDepth = depth + 1;

    const discriminatorClassName = isDiscriminatorChild
      ? `discriminator-field-child ${getEvenOddClass(
          discriminatorChildFieldsetDepth
        )} depth_${discriminatorChildFieldsetDepth}`
      : "discriminator-field-child-empty";

    const { additionalProperties } = selectedSchema.schema;

    const description =
      additionalProperties && additionalProperties.description;

    return description ? (
      <fieldset className={prefixClass(`field  ${discriminatorClassName}`)}>
        {this.renderSchemaField(depth)}
      </fieldset>
    ) : (
      this.renderSchemaField(depth - 1)
    );
  };

  selectOnChange = (value, initialRender) => {
    const { onChange, parentPath, registry } = this.props;
    const { dxInterface } = registry;
    const { formState, selectedSchema } = this.state;

    // Don't do anything on same item click
    if (!initialRender && selectedSchema.index === value.index) {
      return;
    }

    this.setState({
      selectedSchema: value
    });

    let defaultFormState = getDefaultFormState(
      value.schema,
      getInitialFormData(value.schema, value.index, this.state.caseOf),
      0,
      dxInterface
    );
    const path = getOneAnyOfPath(parentPath, defaultFormState);

    if (!formState[path]) {
      this.setState(st => ({
        ...st,
        formState: {
          ...st.formState,
          [path]: defaultFormState
        }
      }));
    }

    onChange(
      formState[path] || defaultFormState,
      {
        validate: true
      },
      value.index
    );
  };

  toggleCheckbox = () => {
    const { formData, schema, registry, onChange } = this.props;
    const { dxInterface } = registry;

    this.setState(st => {
      const { checked } = st;
      const updatedChecked = !checked;

      const initialSchema = schema.oneOf || schema.anyOf;
      const initialSchemaIndex = formData ? formData.$$__case : 0;
      const defaultFormState = getDefaultFormState(
        initialSchema[initialSchemaIndex],
        getInitialFormData(
          initialSchema[initialSchemaIndex],
          initialSchemaIndex,
          this.state.caseOf
        ),
        0,
        dxInterface
      );

      onChange(
        updatedChecked ? defaultFormState : null,
        {
          validate: true
        },
        initialSchemaIndex
      );
      return { ...st, checked: updatedChecked };
    });
  };

  initializeFormData = () => {
    const { formData, disabled } = this.props;

    if (!formData && !disabled) {
      const { selectOptions } = this.getSelectOptions();
      this.selectOnChange(selectOptions[0].value, true);
    }
  };

  componentDidUpdate = () => {
    this.initializeFormData();
  };

  componentDidMount = () => {
    this.initializeFormData();
  };

  getSelectOptions = () => {
    const {
      schema,
      typeCombinatorTypesFromProps,
      formData,
      registry
    } = this.props;
    const { dxInterface } = registry;
    const { typeCombinatorTypes = typeCombinatorTypesFromProps } = schema;

    const multipleSchema = schema.oneOf || schema.anyOf;

    return multipleSchema.reduce(
      ({ selectOptions, charCounts }, schema, index) => {
        if (schema.hasOwnProperty("$ref")) {
          schema = retrieveSchema(schema, formData, dxInterface);
        }
        if (
          schema.additionalProperties &&
          schema.additionalProperties.hasOwnProperty("$ref")
        ) {
          schema.additionalProperties = retrieveSchema(
            schema.additionalProperties,
            formData,
            dxInterface
          );
        }

        const type = typeCombinatorTypes && typeCombinatorTypes[index].DataType;
        const label = type
          ? type
          : getMultipleLabel(schema) || schema.type || "";

        selectOptions.push({
          label,
          value: {
            index: index,
            schema: schema
          }
        });

        return { selectOptions, charCounts: charCounts + label.length };
      },
      { selectOptions: [], charCounts: 0 }
    );
  };

  render() {
    const {
      schema,
      fromMap,
      fieldProps,
      fromDiscriminator,
      disabled,
      tagsTitle
    } = this.props;
    const { selectedSchema, checked, optional } = this.state;
    const { selectOptions, charCounts } = this.getSelectOptions();

    const isOneOfOrAnyOf =
      selectedSchema.schema.hasOwnProperty("oneOf") ||
      selectedSchema.schema.hasOwnProperty("anyOf");
    const isObject =
      selectedSchema.schema.type === "array" ||
      selectedSchema.schema.type === "object" ||
      isOneOfOrAnyOf;
    const depth = fromMap ? this.props.depth + 1 : this.props.depth;
    const tagSelectorClassName = classNames({
      "anyof-child": isObject && isOneOfOrAnyOf,
      "object-child": !isObject || (isObject && !isOneOfOrAnyOf),
      "select-container": charCounts > CHAR_THRESHOLD
    });

    return (
      <DefaultTemplate
        {...fieldProps}
        nullify={checked}
        required={!optional}
        onNullifyChange={this.toggleCheckbox}
        fromDiscriminator={fromDiscriminator}
      >
        {!optional || (optional && checked && !disabled) ? (
          <fieldset
            className={prefixClass(
              `field ${getEvenOddClass(
                depth
              )} depth_${depth} discriminator-field`
            )}
          >
            <TagSelector
              className={tagSelectorClassName}
              value={selectedSchema}
              title={tagsTitle || getMultipleLabel(schema)}
              options={selectOptions}
              onChange={this.selectOnChange}
            />
            {this.renderSchema(depth)}
          </fieldset>
        ) : null}
      </DefaultTemplate>
    );
  }
}

/* istanbul ignore else */
DiscriminatorField.defaultProps = {
  disabled: false,
  errorSchema: {},
  uiSchema: {}
};

if (process.env.NODE_ENV !== "production") {
  DiscriminatorField.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    baseType: PropTypes.string,
    uiSchema: PropTypes.object,
    formData: PropTypes.any,
    errorSchema: PropTypes.object,
    dxInterface: PropTypes.shape({
      registry: PropTypes.shape({
        widgets: PropTypes.objectOf(
          PropTypes.oneOfType([PropTypes.func, PropTypes.object])
        ).isRequired,
        fields: PropTypes.objectOf(PropTypes.func).isRequired,
        definitions: PropTypes.object.isRequired,
        formContext: PropTypes.object.isRequired
      })
    })
  };
}

export default DiscriminatorField;
