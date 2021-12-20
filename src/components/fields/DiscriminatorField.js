import React from "react";
import PropTypes from "prop-types";
import {
  getDefaultFormState,
  checkDiscriminator,
  prefixClass
} from "../../utils";
import TagSelector from "../widgets/TagSelector";

class DiscriminatorField extends React.Component {
  state;
  constructor(props) {
    super(props);
    const altSchema = props.schema.oneOf || props.schema.anyOf;
    this.state = {
      selectedSchema: {
        index: 0,
        schema: altSchema[0]
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

  renderSchema = header => {
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

    return (
      <fieldset
        className={prefixClass(
          `${this.props.isEven ? "odd" : "even"} depth_${this.props.depth +
            1} discriminator-field-child`
        )}
      >
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
            depth={this.props.depth + 2}
            isEven={this.props.depth % 2 === 0}
            header={header}
          />
        ) : (
          <p>schema or formdata not available</p>
        )}
      </fieldset>
    );
  };

  selectOnChange = e => {
    const { onChange, options, definitions, formData } = this.props;
    console.log(options);
    this.setState({
      selectedSchema: e
    });

    let defaultFormState;
    if (e.schema.type === "object") {
      defaultFormState = getDefaultFormState(
        e.schema,
        {
          $$__case: e.index,
          value: {}
        },
        definitions,
        e.index
      );
    } else if (e.schema.type === "array") {
      defaultFormState = getDefaultFormState(
        e.schema,
        {
          $$__case: e.index,
          value: []
        },
        definitions,
        e.index
      );
    } else if (e.schema && e.schema.hasOwnProperty("oneOf" || "anyOf")) {
      defaultFormState = getDefaultFormState(
        e.schema,
        {
          ...formData,
          value: {
            $$__case: 0,
            value: undefined
          }
        },
        definitions,
        e.index
      );
    } else {
      defaultFormState = getDefaultFormState(
        e.schema,
        {
          $$__case: e.index,
          value: undefined
        },
        definitions,
        e.index
      );
    }

    onChange(
      defaultFormState,
      {
        validate: true
      },
      e.index
    );
  };

  render() {
    const { schema } = this.props;
    const { selectedSchema } = this.state;
    const altSchema = schema.oneOf || schema.anyOf;

    const selectOptions = altSchema.reduce((optionList, schema, index) => {
      const label = schema.title ? schema.title : `Option ${index + 1}`;
      optionList.push({
        label,
        value: {
          index: index,
          schema: schema
        }
      });
      return optionList;
    }, []);

    const header = (
      <TagSelector
        value={selectedSchema}
        title="anyof"
        options={selectOptions}
        onChange={this.selectOnChange}
      />
    );

    return (
      <fieldset
        className={prefixClass(
          `field ${this.props.isEven ? "even" : "odd"} depth_${
            this.props.depth
          } discriminator-field`
        )}
      >
        {/* {selectedSchema.schema.type !== "array" &&
          selectedSchema.schema.type !== "object" &&
          header} */}
        {header}
        {this.renderSchema()}
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
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
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
