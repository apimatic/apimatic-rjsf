import React from "react";
import PropTypes from "prop-types";
import {
  getDefaultFormState,
  checkDiscriminator,
  prefixClass,
  isMultipleSchema
} from "../../utils";
import TagSelector from "../widgets/TagSelector";

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
  constructor(props) {
    super(props);
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    const { schema, formData } = props;

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
    const initialSchemaIndex = formData ? formData.$$__case : 0;
    const data = formData || {};
    const caseOf = getMultipleSchemaType(schema);
    const newState = {
      formState: {
        ...state.formState,
        [data.$$__case]: formData
      },
      selectedSchema: {
        index: initialSchemaIndex,
        schema: initialSchema[initialSchemaIndex]
      },
      collapse: false,
      caseOf
    };
    return newState;
  }

  onDiscriminatorChange = () => {
    const { onChange, formData } = this.props;
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
            [selectedSchema.index]: newFormData
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
      idSchema,
      onBlur,
      onFocus,
      registry,
      uiSchema,
      typeCombinatorTypes
    } = this.props;
    const _SchemaField = registry.fields.SchemaField;
    const { selectedSchema, formState } = this.state;

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
    const childDepth = isDiscriminatorChild ? depth + 2 : depth + 1;
    const discriminatorClassName = isDiscriminatorChild
      ? `discriminator-field-child ${getEvenOddClass(
          discriminatorChildFieldsetDepth
        )} depth_${discriminatorChildFieldsetDepth}`
      : "discriminator-field-child-empty";

    let typeCombinatorSubTypes;
    if (typeCombinatorTypes) {
      const selectedSchemaTypeCombinator =
        typeCombinatorTypes[selectedSchema.index];
      typeCombinatorSubTypes = selectedSchemaTypeCombinator.ContainsSubTypes
        ? selectedSchemaTypeCombinator.SubTypes
        : null;
    }

    return (
      <fieldset className={prefixClass(`field  ${discriminatorClassName}`)}>
        <React.Fragment>
          {this.state && formState[selectedSchema.index] ? (
            <_SchemaField
              schema={selectedSchema.schema}
              uiSchema={uiSchema}
              errorSchema={errorSchema}
              idSchema={idSchema}
              idPrefix={idPrefix}
              formData={formState[selectedSchema.index].value}
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
            />
          ) : (
            <p>schema or formdata not available</p>
          )}
        </React.Fragment>
      </fieldset>
    );
  };

  selectOnChange = value => {
    const { onChange, definitions } = this.props;
    const { formState } = this.state;
    this.setState({
      selectedSchema: value
    });

    let defaultFormState = getDefaultFormState(
      value.schema,
      getInitialFormData(value.schema, value.index, this.state.caseOf),
      definitions,
      0
    );

    if (!formState[value.index]) {
      this.setState(st => ({
        ...st,
        formState: {
          ...st.formState,
          [value.index]: defaultFormState
        }
      }));
    }

    onChange(
      formState[value.index] || defaultFormState,
      {
        validate: true
      },
      value.index
    );
  };

  render() {
    const { schema, fromMap, typeCombinatorTypes } = this.props;
    const { selectedSchema } = this.state;
    const multipleSchema = schema.oneOf || schema.anyOf;

    const selectOptions = multipleSchema.reduce((optionList, schema, index) => {
      let type = typeCombinatorTypes && typeCombinatorTypes[index].DataType;

      const label = type ? type : getMultipleLabel(schema) || schema.type;

      optionList.push({
        label,
        value: {
          index: index,
          schema: schema
        }
      });
      return optionList;
    }, []);

    const isOneOfOrAnyOf =
      selectedSchema.schema.hasOwnProperty("oneOf") ||
      selectedSchema.schema.hasOwnProperty("anyOf");
    const isObject =
      selectedSchema.schema.type === "array" ||
      selectedSchema.schema.type === "object" ||
      isOneOfOrAnyOf;
    const depth = fromMap ? this.props.depth + 1 : this.props.depth;

    return (
      <fieldset
        className={prefixClass(
          `field ${getEvenOddClass(depth)} depth_${depth} discriminator-field`
        )}
      >
        <TagSelector
          className={
            isObject
              ? isOneOfOrAnyOf
                ? "anyof-child"
                : "object-child"
              : "object-child"
          }
          value={selectedSchema}
          title={getMultipleLabel(schema)}
          options={selectOptions}
          onChange={this.selectOnChange}
        />
        {this.renderSchema(depth)}
      </fieldset>
    );
  }
}

/* istanbul ignore else */
DiscriminatorField.defaultProps = {
  disabled: false,
  errorSchema: {},
  idSchema: {},
  uiSchema: {}
};

if (process.env.NODE_ENV !== "production") {
  DiscriminatorField.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    baseType: PropTypes.string,
    uiSchema: PropTypes.object,
    idSchema: PropTypes.object,
    formData: PropTypes.any,
    errorSchema: PropTypes.object,
    registry: PropTypes.shape({
      fields: PropTypes.objectOf(PropTypes.func).isRequired,
      definitions: PropTypes.object.isRequired,
      formContext: PropTypes.object.isRequired
    })
  };
}

export default DiscriminatorField;
