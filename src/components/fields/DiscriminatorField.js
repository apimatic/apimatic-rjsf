import React from "react";
import PropTypes from "prop-types";
import {
  getDefaultFormState,
  checkDiscriminator,
  prefixClass,
  isMultipleSchema
} from "../../utils";
import TagSelector from "../widgets/TagSelector";

export function generateFormDataForMultipleSchema(schema, index) {
  if (isMultipleSchema(schema)) {
    const _schema = schema.oneOf ? schema.oneOf[index] : schema.anyOf[index];
    return {
      $$__case: index,
      value: generateFormDataForMultipleSchema(_schema, 0)
    };
  }
  return undefined;
}

function getInitialFormData(schema, index) {
  let initialFormData = {
    $$__case: index,
    value: undefined
  };

  if (schema.type === "object") {
    initialFormData = {
      ...initialFormData,
      value: {}
    };
  } else if (schema.type === "array") {
    initialFormData = {
      value: []
    };
  } else if (schema && isMultipleSchema(schema)) {
    initialFormData = {
      value: generateFormDataForMultipleSchema(schema, 0)
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
  constructor(props) {
    super(props);
    const { schema, formData } = this.props;
    const initialSchema = schema.oneOf || schema.anyOf;
    const initialSchemaIndex = formData ? formData.$$__case : 0;
    this.state = {
      selectedSchema: {
        index: initialSchemaIndex,
        schema: initialSchema[initialSchemaIndex]
      },
      collapse: false
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
      getInitialFormData(value.schema, value.index),
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

    const isObject =
      this.state.selectedSchema.schema.type === "array" ||
      this.state.selectedSchema.schema.type === "object" ||
      this.state.selectedSchema.schema.hasOwnProperty("oneOf") ||
      this.state.selectedSchema.schema.hasOwnProperty("anyOf");
    const depth = fromMap ? this.props.depth + 1 : this.props.depth;
    const childDepth = depth + 1;

    return (
      <fieldset
        className={prefixClass(
          `field ${getEvenOddClass(depth)} depth_${depth} discriminator-field`
        )}
      >
        <TagSelector
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
