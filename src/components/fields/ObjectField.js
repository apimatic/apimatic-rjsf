import React, { Component } from "react";
import PropTypes from "prop-types";
import MapField from "./MapField";
import { classNames, prefixClass as pfx } from "../../utils";
import { toErrorList } from "../../validate";
import CodeMirror from "react-codemirror2";
import DataType from "../fields/DataType";
import "codemirror/mode/javascript/javascript";

// import "codemirror/lib/codemirror.css";
// import "./../../../playground/style.css";

import {
  orderProperties,
  retrieveSchema,
  getDefaultRegistry,
  getDefaultFormState,
  deepEquals,
} from "../../utils";
import { ChevronIcon, JsonIcon } from "../Icons";

const cmOptions = {
  theme: "default",
  height: "auto",
  viewportMargin: Infinity,
  mode: {
    name: "javascript",
    json: true,
    statementIndent: 2,
  },
  lineNumbers: true,
  lineWrapping: true,
  indentWithTabs: false,
  tabSize: 2,
};

const READONLY_INFO_MESSAGE =
  "All properties in this object are Response Only. Response Only means that it may be sent as a part of the response but should not be sent as part of the request";

// const viewJsonButtonStyle = {
//   color: "#2C6EFA",
//   fontSize: "12px",
//   cursor: "pointer",
//   background: "#fff",
//   border: "none",
//   float: "right"
// };

// const viewJsonButtonWrapper = {
//   height: "17px",
//   marginBottom: "10px"
// };

function renderErrorSchema(errorSchema) {
  let errorList = toErrorList(errorSchema);
  return (
    <ul>
      {errorList.map((key, index) => (
        <li key={index}>{key.stack}</li>
      ))}
    </ul>
  );
}

function IconBtn(props) {
  const { type = "default", icon, className, ...otherProps } = props;
  return (
    <button
      type="button"
      className={pfx(`btn btn-${type}`) + " " + className}
      {...otherProps}>
      <span className={pfx("tooltip")} />
      {props.children}
    </button>
  );
}

function renderViewJsonButton(props) {
  let { formJsonError, errorSchema, toggleEditView, showEditView } = props;
  let disableViewJsonButton =
    formJsonError || Object.keys(errorSchema).length !== 0;

  return disableViewJsonButton ? (
    <IconBtn className={pfx("btn json-button json-button-disabled")} disabled>
      <JsonIcon />
    </IconBtn>
  ) : (
    <IconBtn
      onClick={toggleEditView}
      className={pfx(`btn json-button ${showEditView ? "form-view" : ""}`)}>
      <JsonIcon />
    </IconBtn>
  );

  /* 
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
      }
      </div>
      )} */
}

function DefaultOnlyProperties(props) {
  return props.properties.map(prop => prop.content);
}

function DefaultObjectFieldTemplate(props) {
  const {
    TitleField,
    DescriptionField,
    nullify,
    onNullifyChange,
    disabled,
    collapse,
    toggleCollapse,
    fromDiscriminator,
  } = props;
  const headerClasses = classNames({
    [pfx("object-header")]: true,
    "position-unset": fromDiscriminator,
  });

  let canEditJson =
    nullify &&
    !props.disableFormJsonEdit &&
    !props.uiSchema.disableFieldJsonEdit;

  let canCollapse =
    props.properties &&
    props.properties.length > 0 &&
    !props.disableFormJsonEdit &&
    !props.uiSchema.disableFieldJsonEdit;

  const dataType = props.schema.dataTypeDisplayText;
  const markdown = props.schema.dataTypeMarkdown;
  const title = props.uiSchema["ui:title"] || props.schema.title || props.title;

  return (
    <fieldset
      className={pfx((props.isEven ? "even" : "odd") + ` depth_${props.depth}`)}
      id={`${props.idSchema.$id}__object`}>
      <div className={headerClasses}>
        <div className={pfx("header-left hand")} onClick={toggleCollapse}>
          {title && (
            <TitleField
              id={`${props.idSchema.$id}__title`}
              title={title}
              required={props.required}
              formContext={props.formContext}
              nullify={nullify}
              onNullifyChange={onNullifyChange}
              disabled={disabled}
              fromDiscriminator={props.fromDiscriminator}
            />
          )}

          {props.required && (props.uiSchema["ui:title"] || props.title) && (
            <div className={pfx("element-required")}>
              {/* <RequiredInfoIcon /> */}
              <span>Required</span>
            </div>
          )}
        </div>

        {canEditJson && renderViewJsonButton(props)}

        {canCollapse && (
          <IconBtn
            tabIndex="-1"
            onClick={toggleCollapse}
            className={pfx(`btn toggle-button`)}>
            {collapse ? (
              <ChevronIcon width={14} rotate={-90} />
            ) : (
              <ChevronIcon width={14} />
            )}
          </IconBtn>
        )}
      </div>

      <div className={pfx("type-container")}>
        <DataType
          title={dataType}
          link={props.schema.dataTypeLink}
          type="object-type"
          markdown={markdown}
        />

        {props.schema.paramType && (
          <div className={pfx("param-type")}>{props.schema.paramType}</div>
        )}
      </div>

      {props.description && (
        <DescriptionField
          id={`${props.idSchema.$id}__description`}
          description={props.description}
          formContext={props.formContext}
        />
      )}

      {(!collapse || !canCollapse) && (
        <div
          className={pfx(
            `element-properties ${props.showEditView ? "json-edit-view" : ""}`
          )}>
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
            props.properties.map(prop => prop.content)
          )}
        </div>
      )}
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
    readonly: false,
  };

  constructor(props) {
    super(props);

    this.state = this.getStateFromProps(props);
    this.state.formJson = JSON.stringify(props.formData, null, 2);
    this.state.formJsonError = false;
    this.state.showEditView = false;
    this.state.collapse = false;
    this.state.isEven = props.isEven || props.levelReversal ? true : false;
    this.state.expandAllLevel = props.expandAllLevel;
    this.state.depth = props.depth ? props.depth : 1;
    this.toggleEditView = this.toggleEditView.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const collapse =
      this.state.depth === this.state.expandAllLevel &&
      this.state.expandAll !== nextProps.expandAll
        ? !nextProps.expandAll
        : this.state.collapse;
    this.setState({
      ...this.getStateFromProps(nextProps),
      collapse,
      expandAllLevel: this.state.expandAllLevel,
      expandAll: nextProps.expandAll,
    });
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
          ? this.state
            ? this.state.originalFormData
            : undefined
          : nextProps.formData,
      formJson:
        this.state &&
        this.isJsonString(this.state.formJson) &&
        deepEquals(nextProps.formData, this.state.formJson)
          ? this.state.formJson
          : JSON.stringify(nextProps.formData, null, 2),
    };
  }

  isRequired(name) {
    const schema = this.props.schema;
    return (
      Array.isArray(schema.required) && schema.required.indexOf(name) !== -1
    );
  }

  onPropertyChange = name => {
    return (value, options, schemaIndex) => {
      let newFormData = {};
      newFormData = {
        ...this.props.formData,
        [name]: value,
      };
      this.props.onChange(newFormData, options, schemaIndex);
    };
  };

  onNullifyChange = () => {
    this.setState({
      formJsonError: false,
      showEditView: false,
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
            undefined,
            this.props.registry.dxInterface
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
      !this.props.required &&
      !this.props.fromDiscriminator
    );
  };

  toggleEditView() {
    this.setState(state => ({
      showEditView: !state.showEditView,
      collapse: false,
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
      disableFormJsonEdit,
      depth,
      isEven,
      expandAllLevel,
      expandAll,
      fromDiscriminator,
      typeCombinatorTypes,
      discriminatorObj = {},
    } = this.props;

    const { fields, formContext, dxInterface } = registry;
    const { SchemaField, TitleField, DescriptionField } = fields;
    const schema = retrieveSchema(this.props.schema, formData, dxInterface);

    const title = name;

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
      disableFormJsonEdit,
      depth,
      isEven,
      expandAllLevel,
      expandAll,
      fromDiscriminator,
      typeCombinatorTypes,
      discriminatorObj,
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
        formJsonError: err,
      };
    });
  };

  toggleCollapse(show = false) {
    this.setState((prevState, props) => {
      return {
        ...prevState,
        collapse: !prevState.collapse,
      };
    });
  }

  renderDynamic(templateProps) {
    const { TitleField, DescriptionField } = templateProps;

    const dataType = templateProps.schema.dataTypeDisplayText;
    const markdown = templateProps.schema.dataTypeMarkdown;

    const title =
      templateProps.uiSchema["ui:title"] ||
      templateProps.schema.title ||
      templateProps.title;
    return (
      <fieldset>
        {title && (
          <TitleField
            id={`${templateProps.idSchema.$id}__title`}
            title={title}
            required={templateProps.required}
            formContext={templateProps.formContext}
            nullify={templateProps.nullify}
            onNullifyChange={this.onNullifyChange}
            disabled={templateProps.disabled}
            fromDiscriminator={templateProps.fromDiscriminator}
          />
        )}

        <div className={pfx("type-container")}>
          <DataType
            title={dataType}
            link={templateProps.schema.dataTypeLink}
            type="object-type"
            markdown={markdown}
          />

          {templateProps.schema.paramType && (
            <div className={pfx("param-type")}>
              {templateProps.schema.paramType}
            </div>
          )}
        </div>

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
                  : "none",
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

  // If object is calling directly from discriminator
  // we need to render properties
  // otherwise we need to render whole object including properties
  getTemplate = () => {
    const { registry, fromDiscriminator } = this.props;
    return registry.ObjectFieldTemplate || fromDiscriminator
      ? DefaultOnlyProperties
      : DefaultObjectFieldTemplate;
  };

  // If object is calling directly from discriminator
  // we need to set isEven as of root level
  getIsEven = () => {
    const { fromDiscriminator } = this.props;
    return fromDiscriminator ? this.state.isEven : !this.state.isEven;
  };

  // If object is calling directly from discriminator
  // we need to set depth as of root level
  getDepth = () => {
    const { fromDiscriminator } = this.props;
    return fromDiscriminator ? this.state.depth : this.state.depth + 1;
  };

  renderObject(templateProps) {
    const { registry = getDefaultRegistry() } = this.props;

    const { dxInterface } = registry;
    const {
      name,
      SchemaField,
      typeCombinatorTypes,
      discriminatorObj,
      schema,
    } = templateProps;
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

    const Template = this.getTemplate();

    const { renderCallOutFallback } = dxInterface;

    const newProps = {
      ...templateProps,
      showEditView: this.state.showEditView,
      collapse: this.state.collapse,
      toggleCollapse: this.toggleCollapse,
      isEven: this.state.isEven,
      depth: this.state.depth,
      expandAll: this.state.expandAll,
      toggleEditView: this.toggleEditView,
      onJsonChange: this.onJsonChange,
      formJson: this.state.formJson,
      formJsonError: this.state.formJsonError,
      properties: checkAllReadOnly(schema)
        ? [
            {
              content: renderCallOutFallback({
                info: "info",
                message: READONLY_INFO_MESSAGE,
              }),
            },
          ]
        : orderedProperties.map(name => {
            let disObj = { ...discriminatorObj };
            if (
              schema.discriminator &&
              name === schema.discriminator &&
              schema.discriminatorValue
            ) {
              disObj.name = name;
              disObj.value = schema.discriminatorValue;
            }

            return {
              content: (
                <SchemaField
                  key={name}
                  name={name}
                  isEven={this.getIsEven()}
                  depth={this.getDepth()}
                  expandAll={this.state.expandAll}
                  expandAllLevel={this.state.expandAllLevel}
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
                  typeCombinatorTypes={typeCombinatorTypes}
                  discriminatorObj={disObj}
                />
              ),
              name,
              readonly: templateProps.readonly,
              disabled: templateProps.disabled || this.shouldDisable(),
              required: templateProps.required,
            };
          }),
    };

    return <Template {...newProps} />;
  }
}

function checkAllReadOnly(schema) {
  const { properties } = schema;
  return Object.values(properties).every(item => item.readOnly);
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
    dxInterface: PropTypes.shape({
      registry: PropTypes.shape({
        widgets: PropTypes.objectOf(
          PropTypes.oneOfType([PropTypes.func, PropTypes.object])
        ).isRequired,
        fields: PropTypes.objectOf(PropTypes.func).isRequired,
        definitions: PropTypes.object.isRequired,
        formContext: PropTypes.object.isRequired,
      }),
    }),
  };
}

export default ObjectField;
