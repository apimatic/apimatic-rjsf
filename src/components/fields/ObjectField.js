import React, { Component } from "react";
import PropTypes from "prop-types";
import MapField from "./MapField";
import { prefixClass as pfx } from "../../utils";
import CodeMirror from "react-codemirror2";
import "codemirror/mode/javascript/javascript";

// import "codemirror/lib/codemirror.css";

import {
  orderProperties,
  retrieveSchema,
  getDefaultRegistry,
  getDefaultFormState,
  deepEquals
} from "../../utils";

const cmOptions = {
  theme: "default",
  height: "auto",
  viewportMargin: Infinity,
  mode: {
    name: "javascript",
    json: true,
    statementIndent: 2
  },
  lineNumbers: true,
  lineWrapping: true,
  indentWithTabs: false,
  tabSize: 2
};

const ViewJsonButtonStyle = {
  color: "red",
  fontWeight: "bold",
  cursor: "pointer",
  float: "right"
};

function DefaultObjectFieldTemplate(props) {
  const {
    TitleField,
    DescriptionField,
    nullify,
    onNullifyChange,
    disabled
  } = props;
  return (
    <div>
      <p style={ViewJsonButtonStyle} onClick={() => props.toggleEditView()}>
        View Json
      </p>
      {props.showEditView ? (
        <CodeMirror
          value={props.formJson}
          onChange={props.onJsonChange}
          options={cmOptions}
        />
      ) : (
        <fieldset>
          {(props.uiSchema["ui:title"] || props.title) && (
            <TitleField
              id={`${props.idSchema.$id}__title`}
              title={props.title || props.uiSchema["ui:title"]}
              required={props.required}
              formContext={props.formContext}
              nullify={nullify}
              onNullifyChange={onNullifyChange}
              disabled={disabled}
            />
          )}
          {props.description && (
            <DescriptionField
              id={`${props.idSchema.$id}__description`}
              description={props.description}
              formContext={props.formContext}
            />
          )}
          {props.properties.map(prop => prop.content)}
        </fieldset>
      )}
    </div>
  );
}

class ObjectField extends Component {
  static defaultProps = {
    uiSchema: {},
    formData: {},
    errorSchema: {},
    idSchema: {},
    required: false,
    disabled: false,
    readonly: false
  };

  constructor(props) {
    super(props);

    this.state = this.getStateFromProps(props);
    this.state.formJson = JSON.stringify(props.formData, null, 2);
    this.state.formJsonError = false;
    this.state.showEditView = false;
    this.toggleEditView = this.toggleEditView.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.getStateFromProps(nextProps));
  }

  getStateFromProps(nextProps) {
    return {
      originalFormData:
        nextProps.formData === undefined ||
        Object.keys(nextProps.formData).length === 0
          ? this.state ? this.state.originalFormData : undefined
          : nextProps.formData,
      formJson:
        this.state &&
        deepEquals(nextProps.formData, JSON.parse(this.state.formJson))
          ? this.state.formJson
          : JSON.stringify(nextProps.formData, null, 2)
    };
  }

  isRequired(name) {
    const schema = this.props.schema;
    return (
      Array.isArray(schema.required) && schema.required.indexOf(name) !== -1
    );
  }

  onPropertyChange = name => {
    return (value, options) => {
      const newFormData = { ...this.props.formData, [name]: value };
      this.props.onChange(newFormData, options);
    };
  };

  onNullifyChange = () => {
    if (this.shouldDisable()) {
      if (this.state.originalFormData) {
        this.props.onChange(this.state.originalFormData);
      } else if (!this.props.schema.properties) {
        this.props.onChange({ key: "value" });
      } else {
        this.props.onChange(
          getDefaultFormState(
            this.props.schema,
            this.props.formData,
            this.props.definitions
          )
        );
      }
    } else {
      this.props.onChange(undefined);
    }
  };

  shouldDisable = () => {
    return (
      (this.props.formData === undefined ||
        Object.keys(this.props.formData).length === 0) &&
      !this.props.required
    );
  };

  toggleEditView() {
    this.setState({ showEditView: !this.state.showEditView });
  }

  render() {
    const {
      uiSchema,
      formData,
      errorSchema,
      idSchema,
      name,
      required,
      disabled,
      readonly,
      onBlur,
      onFocus,
      registry = getDefaultRegistry()
    } = this.props;
    const { definitions, fields, formContext } = registry;
    const { SchemaField, TitleField, DescriptionField } = fields;
    const schema = retrieveSchema(this.props.schema, definitions, formData);
    const title =
      schema.title === undefined
        ? name
        : name === undefined ? schema.title : name + " (" + schema.title + ")";
    const description = uiSchema["ui:description"] || schema.description;

    const templateProps = {
      name,
      title: uiSchema["ui:title"] || title,
      description,
      TitleField,
      DescriptionField,
      SchemaField,
      required,
      idSchema,
      uiSchema,
      schema,
      formData,
      formContext,
      disabled,
      onNullifyChange: /* schema.type === "array" ? null :  */ this
        .onNullifyChange,
      nullify: formData && Object.keys(formData).length > 0,
      onBlur,
      onFocus,
      errorSchema,
      readonly,
      registry
    };

    if (schema.properties && Object.keys(schema.properties).length > 0) {
      return this.renderObject(templateProps);
    } else if (schema.additionalProperties) {
      return this.renderMap(templateProps);
    } else {
      return this.renderDynamic(templateProps);
    }
  }

  onJsonChange = (editor, metadata, code) => {
    var err = false;
    var parsed = null;
    try {
      parsed = JSON.parse(code);
    } catch (e) {
      err = true;
    }
    this.setState((prevState, props) => {
      !err && props.onChange(parsed);
      return {
        formJson: code,
        formJsonError: err
      };
    });
  };

  renderDynamic(templateProps) {
    const { TitleField, DescriptionField } = templateProps;

    return (
      <fieldset>
        {(templateProps.uiSchema["ui:title"] || templateProps.title) && (
          <TitleField
            id={`${templateProps.idSchema.$id}__title`}
            title={templateProps.title || templateProps.uiSchema["ui:title"]}
            required={templateProps.required}
            formContext={templateProps.formContext}
            nullify={templateProps.nullify}
            onNullifyChange={this.onNullifyChange}
            disabled={templateProps.disabled}
          />
        )}
        {templateProps.description && (
          <DescriptionField
            id={`${templateProps.idSchema.$id}__description`}
            description={templateProps.description}
            formContext={templateProps.formContext}
          />
        )}
        <div style={{ position: "relative" }}>
          <CodeMirror
            value={this.state.formJson}
            onChange={this.onJsonChange}
            options={cmOptions}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: 100,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(1,1,1,0.3)",
              display:
                templateProps.disabled || this.shouldDisable()
                  ? "block"
                  : "none"
            }}
          />
        </div>
        {this.state.formJsonError && (
          <div>
            <p />
            <ul className={pfx("error-detail bs-callout bs-callout-info")}>
              <li className={pfx("text-danger")}>
                Could not parse JSON. Syntax error.
              </li>
            </ul>
          </div>
        )}
      </fieldset>
    );
  }

  renderMap(templateProps) {
    return <MapField {...templateProps} onChange={this.props.onChange} />;
  }

  renderObject(templateProps) {
    const { name, SchemaField } = templateProps;
    let orderedProperties;

    try {
      const properties = Object.keys(templateProps.schema.properties);
      orderedProperties = orderProperties(
        properties,
        templateProps.uiSchema["ui:order"]
      );
    } catch (err) {
      return (
        <div>
          <p className={pfx("config-error")} style={{ color: "red" }}>
            Invalid {name || "root"} object field configuration:
            <em>{err.message}</em>.
          </p>
          <pre>{JSON.stringify(templateProps.schema)}</pre>
        </div>
      );
    }

    const Template =
      templateProps.registry.ObjectFieldTemplate || DefaultObjectFieldTemplate;

    const newProps = {
      ...templateProps,
      showEditView: this.state.showEditView,
      toggleEditView: this.toggleEditView,
      onJsonChange: this.onJsonChange,
      formJson: this.state.formJson,
      properties: orderedProperties.map(name => {
        return {
          content: (
            <SchemaField
              key={name}
              name={name}
              required={this.isRequired(name)}
              schema={templateProps.schema.properties[name]}
              uiSchema={templateProps.uiSchema[name]}
              errorSchema={templateProps.errorSchema[name]}
              idSchema={templateProps.idSchema[name]}
              formData={templateProps.formData[name]}
              onChange={this.onPropertyChange(name)}
              onBlur={templateProps.onBlur}
              onFocus={templateProps.onFocus}
              registry={templateProps.registry}
              disabled={templateProps.disabled || this.shouldDisable()}
              readonly={templateProps.readonly}
            />
          ),
          name,
          readonly: templateProps.readonly,
          disabled: templateProps.disabled || this.shouldDisable(),
          required: templateProps.required
        };
      })
    };
    return <Template {...newProps} />;
  }
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  ObjectField.propTypes = {
    schema: PropTypes.object.isRequired,
    uiSchema: PropTypes.object,
    errorSchema: PropTypes.object,
    idSchema: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    formData: PropTypes.object,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    registry: PropTypes.shape({
      widgets: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object])
      ).isRequired,
      fields: PropTypes.objectOf(PropTypes.func).isRequired,
      definitions: PropTypes.object.isRequired,
      formContext: PropTypes.object.isRequired
    })
  };
}

export default ObjectField;
