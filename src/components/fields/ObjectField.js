import React, { Component } from "react";
import PropTypes from "prop-types";
import MapField from "./MapField";
import { prefixClass as pfx } from "../../utils";
import { toErrorList } from "../../validate";
import CodeMirror from "react-codemirror2";
import "codemirror/mode/javascript/javascript";

// import "codemirror/lib/codemirror.css";
// import "./../../../playground/style.css";

import {
  orderProperties,
  retrieveSchema,
  getDefaultRegistry,
  getDefaultFormState,
  deepEquals
} from "../../utils";
import { CheveronIcon } from "../Icons";

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

const viewJsonButtonStyle = {
  color: "#2C6EFA",
  fontSize: "12px",
  cursor: "pointer",
  background: "#fff",
  border: "none",
  float: "right"
};

const viewJsonButtonWrapper = {
  height: "17px",
  marginBottom: "10px"
};

function renderErrorSchema(errorSchema) {
  let errorList = toErrorList(errorSchema);
  return (
    <ul>{errorList.map((key, index) => <li key={index}>{key.stack}</li>)}</ul>
  );
}

function IconBtn(props) {
  const { type = "default", icon, className, ...otherProps } = props;
  return (
    <button
      type="button"
      className={pfx(`btn btn-${type}`) + " " + className}
      {...otherProps}
    >
      {props.children}
    </button>
  );
}

function renderViewJsonButton(props) {
  let { formJsonError, errorSchema, toggleEditView, showEditView } = props;
  let disableViewJsonButton =
    formJsonError || Object.keys(errorSchema).length !== 0;

  return (
    <div style={viewJsonButtonWrapper}>
      {disableViewJsonButton ? (
        <button
          className={pfx("view-json-button")}
          style={viewJsonButtonStyle}
          disabled
        >
          {showEditView ? "View Form" : "View JSON"}
        </button>
      ) : (
        <button
          className={pfx("view-json-button")}
          style={viewJsonButtonStyle}
          onClick={toggleEditView}
        >
          {showEditView ? "View Form" : "View JSON"}
        </button>
      )}
    </div>
  );
}

function DefaultObjectFieldTemplate(props) {
  const {
    TitleField,
    DescriptionField,
    nullify,
    onNullifyChange,
    disabled,
    collapse,
    toggleCollapse
  } = props;

  let canEditJson =
    nullify &&
    !props.disableFormJsonEdit &&
    !props.uiSchema.disableFieldJsonEdit;

  let canCollapse =
    props.properties &&
    props.properties.length > 0 &&
    !props.disableFormJsonEdit &&
    !props.uiSchema.disableFieldJsonEdit;

  return (
    <fieldset>
      {canEditJson && renderViewJsonButton(props)}

      <div className="rjsf-element">
        <div className="rjsf-element-header rjsf-element-left">
          {(props.uiSchema["ui:title"] ||
            props.title ||
            props.schema.indexAsTitle) && (
            <div className="rjsf-element-header-title">
              <TitleField
                id={`${props.idSchema.$id}__title`}
                title={
                  props.title ||
                  props.uiSchema["ui:title"] ||
                  props.schema.indexAsTitle
                }
                required={props.schema.indexAsTitle ? false : props.required}
                formContext={props.formContext}
                nullify={nullify}
                onNullifyChange={onNullifyChange}
                disabled={disabled}
              />
            </div>
          )}

          {canCollapse && (
            <div className="rjsf-element-toggle-button-wrapper">
              <IconBtn
                tabIndex="-1"
                onClick={toggleCollapse}
                className="btn toggle-button"
              >
                {collapse ? (
                  <CheveronIcon width={14} rotate={180} />
                ) : (
                  <CheveronIcon width={14} />
                )}
              </IconBtn>
            </div>
          )}
        </div>

        <div className="rjsf-element-content rjsf-element-right">
          <div className="rjsf-element-description">
            {props.description && (
              <DescriptionField
                id={`${props.idSchema.$id}__description`}
                description={props.description}
                formContext={props.formContext}
              />
            )}
          </div>
        </div>
      </div>

      <div className="rjsf-element-data">
        {props.showEditView && canEditJson ? (
          <div>
            <CodeMirror
              value={props.formJson}
              onChange={props.onJsonChange}
              options={cmOptions}
            />
            <div className={pfx("editor-validation-errors")}>
              {props.formJsonError && (
                <ul>
                  <li>Could not parse JSON. Syntax error.</li>
                </ul>
              )}
              {Object.keys(props.errorSchema).length !== 0 &&
                renderErrorSchema(props.errorSchema)}
            </div>
          </div>
        ) : (
          (!collapse || !canCollapse) &&
          props.properties.map(prop => prop.content)
        )}
      </div>
    </fieldset>
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
    this.state.collapse = true;
    this.toggleEditView = this.toggleEditView.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.getStateFromProps(nextProps));
  }

  isJsonString(str) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
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
        this.isJsonString(this.state.formJson) &&
        deepEquals(nextProps.formData, this.state.formJson)
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
    this.setState({
      formJsonError: false,
      showEditView: false
    });

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
    this.setState(state => ({
      showEditView: !state.showEditView
    }));
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
      registry = getDefaultRegistry(),
      disableFormJsonEdit
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
      registry,
      disableFormJsonEdit
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

  toggleCollapse() {
    this.setState((prevState, props) => {
      return {
        ...prevState,
        collapse: !prevState.collapse
      };
    });
  }

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
      collapse: this.state.collapse,
      toggleCollapse: this.toggleCollapse,
      toggleEditView: this.toggleEditView,
      onJsonChange: this.onJsonChange,
      formJson: this.state.formJson,
      formJsonError: this.state.formJsonError,
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
              disableFormJsonEdit={templateProps.disableFormJsonEdit}
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
