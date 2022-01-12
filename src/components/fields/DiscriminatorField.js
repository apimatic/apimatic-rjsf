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
  return undefined;
}

const getMultipleSchemaType = schema =>
  schema && schema.hasOwnProperty("oneOf") ? "oneOf" : "anyOf";

function getInitialFormData(schema, index, caseOf) {
  let initialFormData = {
    $$__case: index,
    $$__case_of: caseOf,
    value: undefined
  };

  if (schema.type === "object") {
    initialFormData = {
      ...initialFormData,
      value: {}
    };
  } else if (schema.type === "array") {
    initialFormData = {
      ...initialFormData,
      value: []
    };
  } else if (schema && isMultipleSchema(schema)) {
    initialFormData = {
      ...initialFormData,
      value: generateFormDataForMultipleSchema(
        schema,
        0,
        getMultipleSchemaType(schema)
      )
    };
  }
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

  static getDerivedStateFromProps(props) {
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
    const caseOf = getMultipleSchemaType(schema);

    return {
      selectedSchema: {
        index: initialSchemaIndex,
        schema: initialSchema[initialSchemaIndex]
      },
      collapse: false,
      caseOf
    };
  }

  onDiscriminatorChange = () => {
    const { onChange, formData } = this.props;

    return (value, options, schemaIndex) => {
      let newFormData;

      if (checkDiscriminator(formData)) {
        newFormData = {
          ...formData,
          $$__case: this.state.selectedSchema.index,
          value
        };
      } else {
        newFormData = {
          ...formData,
          value
        };
      }
      onChange(
        newFormData,
        {
          validate: false
        },
        this.state.selectedSchema.index
      );
    };
  };

  renderSchema = (isObject, childDepth) => {
    const {
      disabled,
      errorSchema,
      formData,
      idPrefix,
      idSchema,
      onBlur,
      onFocus,
      registry,
      uiSchema
    } = this.props;
    const _SchemaField = registry.fields.SchemaField;

    const classes = isObject
      ? prefixClass(
          `${getEvenOddClass(
            childDepth
          )} depth_${childDepth} discriminator-field-child-object`
        )
      : prefixClass(
          `${getEvenOddClass(
            childDepth
          )} depth_${childDepth} discriminator-field-child`
        );
    return (
      <fieldset className={classes}>
        {" "}
        {this.state && formData ? (
          <_SchemaField
            schema={this.state.selectedSchema.schema}
            uiSchema={uiSchema}
            errorSchema={errorSchema}
            idSchema={idSchema}
            idPrefix={idPrefix}
            formData={formData.value}
            onChange={this.onDiscriminatorChange()}
            onBlur={onBlur}
            onFocus={onFocus}
            registry={registry}
            disabled={disabled}
            schemaIndex={this.state.selectedSchema.index}
            depth={childDepth}
            isEven={childDepth % 2 === 0}
            // Flag for detecting discriminator in child level
            fromDiscriminator={true}
            // Title will set in boolean fields
            anyOfTitle={this.props.schema.title || this.props.anyOfTitle}
          />
        ) : (
          <p>schema or formdata not available</p>
        )}
      </fieldset>
    );
  };

  selectOnChange = value => {
    const { onChange, definitions } = this.props;
    this.setState({
      selectedSchema: value
    });

    let defaultFormState = getDefaultFormState(
      value.schema,
      getInitialFormData(value.schema, value.index, this.state.caseOf),
      definitions,
      value.index
    );

    onChange(
      defaultFormState,
      {
        validate: true
      },
      value.index
    );
  };

  render() {
    const { schema, fromMap } = this.props;
    const { selectedSchema } = this.state;
    const multipleSchema = schema.oneOf || schema.anyOf;

    const selectOptions = multipleSchema.reduce((optionList, schema, index) => {
      const label = schema.title
        ? schema.title
        : getMultipleLabel(schema) || schema.type;

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
      this.state.selectedSchema.schema.hasOwnProperty("oneOf") ||
      this.state.selectedSchema.schema.hasOwnProperty("anyOf");
    const isObject =
      this.state.selectedSchema.schema.type === "array" ||
      this.state.selectedSchema.schema.type === "object" ||
      isOneOfOrAnyOf;
    const depth = fromMap ? this.props.depth + 1 : this.props.depth;
    const childDepth = depth + 1;

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
        {this.renderSchema(isObject, childDepth)}
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
