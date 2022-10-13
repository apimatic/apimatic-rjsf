import React from "react";
import PropTypes from "prop-types";

import {
  getDefaultFormState,
  checkDiscriminator,
  prefixClass,
  isMultipleSchema,
  classNames,
  isOneOfSchema,
  retrieveSchema,
  getEvenOddClass,
  getEvenOdd,
  findSchemaDefinition
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

  renderSchema = depth => {
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

    const { fields, dxInterface } = registry;

    const { definitions } = dxInterface;

    const _SchemaField = fields.SchemaField;

    const { selectedSchema } = this.state;

    const { selectOptions } = this.getSelectOptions();

    const { typeCombinatorTypes = typeCombinatorTypesFromProps } = schema;

    const schemaDefination =
      selectedSchema.schema.hasOwnProperty("$ref") &&
      findSchemaDefinition(selectedSchema.schema.$ref, definitions);

    const hasSchemaDefination =
      schemaDefination && schemaDefination.type === "object";

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

    const isDiscriminatorChild =
      !(childIsArray || childIsMap || childIsNestedMultipleSchema) &&
      hasSchemaDefination;

    const uiTitle = selectOptions[selectedSchema.index].label;

    let discriminatorObj = undefined;

    const discriminatorChildFieldsetDepth = depth + 1;

    const childDepth = isDiscriminatorChild ? depth + 2 : depth + 1;

    const discriminatorClassName = classNames({
      field: true,
      "discriminator-field-child": isDiscriminatorChild,
      [getEvenOddClass(discriminatorChildFieldsetDepth)]: isDiscriminatorChild,
      [`depth_${discriminatorChildFieldsetDepth}`]: isDiscriminatorChild,
      ["discriminator-field-child-empty"]: !isDiscriminatorChild,
      "even-bg": getEvenOdd(discriminatorChildFieldsetDepth),
      "odd-bg": !getEvenOdd(discriminatorChildFieldsetDepth)
    });

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

    return (
      <fieldset className={prefixClass(discriminatorClassName)}>
        <React.Fragment>
          {this.state && formData ? (
            <_SchemaField
              schema={selectedSchema.schema}
              uiSchema={{
                ...uiSchema,
                "ui:title": isOneOfSchema(selectedSchema.schema)
                  ? undefined
                  : uiTitle
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
          ) : (
            <p>schema or formdata not available</p>
          )}
        </React.Fragment>
      </fieldset>
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

    const { linkMapper } = dxInterface;

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

        const linkTo = typeCombinatorTypes && typeCombinatorTypes[index].LinkTo;

        const label = type
          ? type
          : getMultipleLabel(schema) || schema.type || "";

        selectOptions.push({
          label,
          value: {
            index: index,
            schema: schema,
            linkTo: linkTo ? linkMapper(linkTo) : null
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
      depth,
      fieldProps,
      fromDiscriminator,
      disabled,
      tagsTitle,
      registry
    } = this.props;
    const { dxInterface } = registry;
    const { renderToolTip } = dxInterface;

    const { selectedSchema, checked, optional } = this.state;

    const { selectOptions, charCounts } = this.getSelectOptions();

    const isOneOfOrAnyOf =
      selectedSchema.schema.hasOwnProperty("oneOf") ||
      selectedSchema.schema.hasOwnProperty("anyOf");
    const isObject =
      selectedSchema.schema.type === "array" ||
      selectedSchema.schema.type === "object" ||
      isOneOfOrAnyOf;
    const tagSelectorClassName = classNames({
      "anyof-child": isObject && isOneOfOrAnyOf,
      "object-child": !isObject || (isObject && !isOneOfOrAnyOf),
      "select-container": charCounts > CHAR_THRESHOLD
    });
    const fieldSetClassNames = classNames({
      field: true,
      [getEvenOddClass(depth)]: true,
      [`depth_${depth}`]: true,
      "discriminator-field": true,
      "even-bg": getEvenOdd(depth),
      "odd-bg": !getEvenOdd(depth)
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
          <fieldset className={prefixClass(fieldSetClassNames)}>
            <TagSelector
              className={tagSelectorClassName}
              value={selectedSchema}
              title={tagsTitle || getMultipleLabel(schema)}
              options={selectOptions}
              onChange={this.selectOnChange}
              renderToolTip={renderToolTip}
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
