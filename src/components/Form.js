import React, { Component } from "react";
import PropTypes from "prop-types";

import { default as DefaultErrorList } from "./ErrorList";
import {
  getDefaultFormState,
  shouldRender,
  toIdSchema,
  setState,
  getDefaultRegistry,
  prefixClass as pfx
} from "../utils";
import validateFormData from "../validate";

export default class Form extends Component {
  static defaultProps = {
    uiSchema: {},
    noValidate: false,
    liveValidate: false,
    safeRenderCompletion: false,
    noHtml5Validate: false,
    ErrorList: DefaultErrorList
  };

  constructor(props) {
    super(props);

    if (
      props.uiSchema &&
      props.uiSchema.renderCodeBlock &&
      typeof props.uiSchema.renderCodeBlock === "function"
    ) {
      window.renderCodeBlock = node => {
        return props.uiSchema.renderCodeBlock({ node });
      };
    }
    window.renderers = props.uiSchema.renderers;
    this.state = this.getStateFromProps(props);
    this.state.expandAll = false;
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.getStateFromProps(nextProps));
  }

  getStateFromProps(props) {
    const state = this.state || {};
    const schema = "schema" in props ? props.schema : this.props.schema;
    const uiSchema = "uiSchema" in props ? props.uiSchema : this.props.uiSchema;
    const edit = typeof props.formData !== "undefined";
    const liveValidate = props.liveValidate || this.props.liveValidate;
    const mustValidate = edit && !props.noValidate && liveValidate;
    const { definitions } = schema;
    const formData = props.dontAssignDefaults
      ? props.formData
      : getDefaultFormState(schema, props.formData, definitions);
    const { errors, errorSchema } = mustValidate
      ? this.validate(formData, schema)
      : {
          errors: state.errors || [],
          errorSchema: state.errorSchema || {}
        };
    const idSchema = toIdSchema(
      schema,
      uiSchema["ui:rootFieldId"],
      definitions,
      formData
    );
    return {
      schema,
      uiSchema,
      idSchema,
      formData,
      edit,
      errors,
      errorSchema
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shouldRender(this, nextProps, nextState);
  }

  validate(formData, schema) {
    const { validate, transformErrors } = this.props;
    return validateFormData(
      formData,
      schema || this.props.schema,
      validate,
      transformErrors
    );
  }

  renderErrors() {
    const { errors, errorSchema, schema, uiSchema } = this.state;
    const { ErrorList, showErrorList, formContext } = this.props;

    if (errors.length && showErrorList != false) {
      return (
        <ErrorList
          errors={errors}
          errorSchema={errorSchema}
          schema={schema}
          uiSchema={uiSchema}
          formContext={formContext}
        />
      );
    }
    return null;
  }

  onChange = (formData, options = { validate: false }) => {
    const mustValidate =
      !this.props.noValidate && (this.props.liveValidate || options.validate);
    let state = { formData };
    if (mustValidate) {
      const { errors, errorSchema } = this.validate(formData);
      state = { ...state, errors, errorSchema };
    }
    setState(this, state, () => {
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    });
  };

  onBlur = (...args) => {
    if (this.props.onBlur) {
      this.props.onBlur(...args);
    }
  };

  onFocus = (...args) => {
    if (this.props.onFocus) {
      this.props.onFocus(...args);
    }
  };

  onSubmit = event => {
    event.preventDefault();

    if (!this.props.noValidate) {
      const { errors, errorSchema } = this.validate(this.state.formData);
      if (Object.keys(errors).length > 0) {
        setState(this, { errors, errorSchema }, () => {
          if (this.props.onError) {
            this.props.onError(errors);
          } else {
            console.error("Form validation failed", errors);
          }
        });
        return;
      }
    }

    if (this.props.onSubmit) {
      this.props.onSubmit({ ...this.state, status: "submitted" });
    }
    this.setState({ errors: [], errorSchema: {} });
  };

  getRegistry() {
    // For BC, accept passed SchemaField and TitleField props and pass them to
    // the "fields" registry one.
    const { fields, widgets } = getDefaultRegistry();
    return {
      fields: { ...fields, ...this.props.fields },
      widgets: { ...widgets, ...this.props.widgets },
      ArrayFieldTemplate: this.props.ArrayFieldTemplate,
      ObjectFieldTemplate: this.props.ObjectFieldTemplate,
      FieldTemplate: this.props.FieldTemplate,
      definitions: this.props.schema.definitions || {},
      formContext: this.props.formContext || {}
    };
  }

  toggleExpandAll = () => {
    this.setState(previousState => ({
      ...previousState,
      expandAll: !previousState.expandAll
    }));
  };

  render() {
    const {
      children,
      safeRenderCompletion,
      id,
      className,
      name,
      method,
      target,
      action,
      autocomplete,
      enctype,
      acceptcharset,
      noHtml5Validate,
      disableFormJsonEdit
    } = this.props;

    const {
      schema,
      uiSchema,
      formData,
      errorSchema,
      idSchema,
      expandAll
    } = this.state;
    const registry = this.getRegistry();
    const _SchemaField = registry.fields.SchemaField;

    return (
      <form
        className={className ? className : "rjsf"}
        id={id}
        name={name}
        method={method}
        target={target}
        action={action}
        autoComplete={autocomplete}
        encType={enctype}
        acceptCharset={acceptcharset}
        noValidate={noHtml5Validate}
        onSubmit={this.onSubmit}
      >
        {this.renderErrors()}

        {uiSchema.expandAllLevel && (
          <div className={pfx("expand-all")}>
            <button onClick={this.toggleExpandAll} type="button">
              {expandAll ? "- Collapse all" : "+ Expand all"}
            </button>
          </div>
        )}
        <_SchemaField
          schema={schema}
          expandAllLevel={uiSchema.expandAllLevel}
          expandAll={expandAll}
          levelReversal={uiSchema && uiSchema.levelReversal ? true : false}
          uiSchema={uiSchema}
          errorSchema={errorSchema}
          idSchema={idSchema}
          formData={formData}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          registry={registry}
          safeRenderCompletion={safeRenderCompletion}
          required={true}
          disableFormJsonEdit={disableFormJsonEdit || false}
        />
        {children ? (
          children
        ) : (
          <p>
            <button type="submit" className={pfx("btn btn-info")}>
              Submit
            </button>
          </p>
        )}
      </form>
    );
  }
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  Form.propTypes = {
    schema: PropTypes.object.isRequired,
    uiSchema: PropTypes.object,
    formData: PropTypes.any,
    widgets: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object])
    ),
    fields: PropTypes.objectOf(PropTypes.func),
    ArrayFieldTemplate: PropTypes.func,
    ObjectFieldTemplate: PropTypes.func,
    FieldTemplate: PropTypes.func,
    ErrorList: PropTypes.func,
    onChange: PropTypes.func,
    onError: PropTypes.func,
    showErrorList: PropTypes.bool,
    onSubmit: PropTypes.func,
    id: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    method: PropTypes.string,
    target: PropTypes.string,
    action: PropTypes.string,
    autocomplete: PropTypes.string,
    enctype: PropTypes.string,
    acceptcharset: PropTypes.string,
    noValidate: PropTypes.bool,
    noHtml5Validate: PropTypes.bool,
    liveValidate: PropTypes.bool,
    validate: PropTypes.func,
    transformErrors: PropTypes.func,
    safeRenderCompletion: PropTypes.bool,
    formContext: PropTypes.object,
    dontAssignDefaults: PropTypes.bool,
    disableFormJsonEdit: PropTypes.bool
  };
}
