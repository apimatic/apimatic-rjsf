import React from "react";
import PropTypes from "prop-types";
import mergeAllOf from "json-schema-merge-allof";

import DataType from "./DataType";

import {
  isMultiSelect,
  retrieveSchema,
  getDefaultRegistry,
  getUiOptions,
  isFilesArray,
  deepEquals,
  prefixClass as pfx,
  isOneOfSchema,
  prefixClass,
} from "../../utils";
import UnsupportedField from "./UnsupportedField";
import { validateField } from "../../validationUtils";

// const REQUIRED_FIELD_SYMBOL = "*";
const COMPONENT_TYPES = {
  array: "ArrayField",
  boolean: "BooleanField",
  integer: "NumberField",
  number: "NumberField",
  object: "ObjectField",
  string: "StringField",
  discriminator: "DiscriminatorField",
};

const MERGE_ALLOF_OPTIONS = {
  ignoreAdditionalProperties: true,
  resolvers: {
    defaultResolver: function(values) {
      return values.length ? values[0] : "";
    },
    id: function(values) {
      return values.length ? values[0] : "";
    },
    description: function(values) {
      return values.length ? values[0] : "";
    },
    dataTypeLink: function(values) {
      return values.length ? values[0] : "";
    },
    dataTypeDisplayText: function(values) {
      return values.length ? values[0] : "";
    },
  },
};

function getFieldComponent(schema, uiSchema, idSchema, fields) {
  const field = uiSchema["ui:field"];

  if (typeof field === "function") {
    return field;
  }
  if (typeof field === "string" && field in fields) {
    return fields[field];
  }

  const componentName = COMPONENT_TYPES[schema.type];

  if (!componentName && (schema.oneOf || schema.anyOf)) {
    const a = fields["DiscriminatorField"];
    return a;
  }

  if (
    schema.typeCombinatorTypes &&
    schema.type !== "array" &&
    !schema.additionalProperties
  ) {
    return fields["DiscrimatorWrapper"];
  }

  // In case of multiple types, we are going to pick first one
  // according to @saeedjamshaid
  if (Array.isArray(schema.type)) {
    const [type] = schema.type;
    const compName = COMPONENT_TYPES[type];

    schema.type = type;
    return fields[compName];
  }

  return componentName in fields
    ? fields[componentName]
    : () => {
        return (
          <UnsupportedField
            schema={schema}
            idSchema={idSchema}
            reason={`Unknown field type ${schema.type}`}
          />
        );
      };
}

export function Label(props) {
  const { label, id } = props;
  if (!label) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }
  return (
    <label className={pfx("control-label")} htmlFor={id}>
      {/* {required ? label + REQUIRED_FIELD_SYMBOL : label} */}
      <div className="label-text">{label}</div>
    </label>
  );
}

function Help(props) {
  const { help } = props;
  if (!help) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }
  if (typeof help === "string") {
    return <p className={pfx("help-block")}>{help}</p>;
  }
  return <div className={pfx("help-block")}>{help}</div>;
}

function ErrorList(props) {
  const { errors = [] } = props;
  if (errors.length === 0) {
    return <div />;
  }
  return (
    <div>
      <p />
      <ul className={pfx("error-detail bs-callout bs-callout-info")}>
        {errors.map((error, index) => {
          return (
            <li className={pfx("text-danger")} key={index}>
              {error}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function DefaultTemplate(props) {
  const {
    id,
    classNames,
    label,
    children,
    help,
    description,
    hidden,
    required,
    displayLabel,
    nullify,
    onNullifyChange,
    disabled,
    fromDiscriminator,
    formData,
    schema,
  } = props;
  if (hidden) {
    return children;
  }

  const dataType = props.schema.dataTypeDisplayText
    ? props.schema.dataTypeDisplayText
    : props.schema.type;
  const markdown = props.schema.dataTypeMarkdown;
  const errors = (
    <ErrorList errors={validateField(schema, formData, required, disabled)} />
  );

  return (
    <div className={pfx(classNames)}>
      {displayLabel && (
        <div className={pfx("field-header")}>
          {onNullifyChange && !required ? (
            <legend>
              <label onClick={ev => ev.stopPropagation()}>
                <input
                  type="checkbox"
                  checked={nullify}
                  className={!disabled && nullify ? "checked" : "unchecked"}
                  onChange={onNullifyChange}
                  disabled={disabled}
                />
                <span />
              </label>
              <div className={prefixClass("checkbox-text")}>{label}</div>
            </legend>
          ) : (
            <Label label={label} required={required} id={id} />
          )}

          {!fromDiscriminator && required && (
            <div className={pfx("element-required")}>
              <span>Required</span>
            </div>
          )}
        </div>
      )}

      {displayLabel && (
        <div className={pfx("type-container")}>
          <DataType
            title={dataType}
            link={props.schema.dataTypeLink}
            type="schema"
            markdown={markdown}
          />

          {props.schema.paramType && (
            <div className={pfx("param-type")}>{props.schema.paramType}</div>
          )}
        </div>
      )}

      {displayLabel && description ? description : null}
      {children}
      {onNullifyChange && !nullify ? null : errors}
      {help}
    </div>
  );
}

if (process.env.NODE_ENV !== "production") {
  DefaultTemplate.propTypes = {
    id: PropTypes.string,
    classNames: PropTypes.string,
    label: PropTypes.string,
    children: PropTypes.node.isRequired,
    errors: PropTypes.element,
    rawErrors: PropTypes.arrayOf(PropTypes.string),
    help: PropTypes.element,
    rawHelp: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    description: PropTypes.element,
    rawDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    hidden: PropTypes.bool,
    required: PropTypes.bool,
    readonly: PropTypes.bool,
    displayLabel: PropTypes.bool,
    fields: PropTypes.object,
    formContext: PropTypes.object,
  };
}

DefaultTemplate.defaultProps = {
  hidden: false,
  readonly: false,
  required: false,
  displayLabel: true,
};

function SchemaFieldRender(props) {
  const {
    uiSchema,
    errorSchema,
    idSchema,
    name,
    formData,
    required,
    schemaIndex,
    registry = getDefaultRegistry(),
    anyOfTitle,
    typeCombinatorTypes,
    discriminatorObj = {},
    // flag for direct circular reference in the objects
    directCircularRef,
  } = props;
  const {
    dxInterface,
    fields,
    formContext,
    FieldTemplate = DefaultTemplate,
  } = registry;

  const { name: discriminatorProperty } = discriminatorObj;
  const isDiscriminator =
    discriminatorProperty && discriminatorProperty === name;

  // If direct circular reference, we will not fetch further schema through references
  let schema = directCircularRef
    ? props.schema
    : retrieveSchema(props.schema, formData, dxInterface);

  if (schema.allOf && !schema.typeCombinatorTypes) {
    schema = mergeAllOf(schema, MERGE_ALLOF_OPTIONS);
  }

  const FieldComponent = getFieldComponent(schema, uiSchema, idSchema, fields);
  const { DescriptionField } = fields;
  const disabled = Boolean(
    props.disabled || uiSchema["ui:disabled"] || isDiscriminator
  );
  const readonly = Boolean(props.readonly || uiSchema["ui:readonly"]);
  const autofocus = Boolean(props.autofocus || uiSchema["ui:autofocus"]);
  const _typeCombinatorTypes =
    typeCombinatorTypes || schema.typeCombinatorTypes || null;

  if (
    props.schema.hasOwnProperty("$ref") ||
    (schema.type === "array" && props.schema.items.hasOwnProperty("$ref"))
  ) {
    schema.title = name;
  }

  if (Object.keys(schema).length === 0) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }

  const uiOptions = getUiOptions(uiSchema);
  let { label: displayLabel = true } = uiOptions;
  if (schema.type === "array") {
    displayLabel =
      isMultiSelect(schema, dxInterface) ||
      isFilesArray(schema, uiSchema, dxInterface);
  }
  if (schema.type === "object" && !schema.typeCombinatorTypes) {
    displayLabel = false;
  }
  if (schema.type === "boolean" && !uiSchema["ui:widget"]) {
    displayLabel = false;
  }
  if (uiSchema["ui:field"]) {
    displayLabel = false;
  }

  const { __errors, ...fieldErrorSchema } = errorSchema;

  const { type } = schema;
  const id = idSchema.$id;
  const label =
    uiSchema["ui:title"] || name || props.schema.title || schema.title;
  const description =
    uiSchema["ui:description"] ||
    props.schema.description ||
    schema.description;
  const errors = __errors;
  const help = uiSchema["ui:help"];
  const hidden = uiSchema["ui:widget"] === "hidden";
  const classNames = [
    "form-group",
    "field",
    `field-${type}`,
    errors && errors.length > 0 ? "field-error has-error has-danger" : "",
    schema.oneOf || schema.anyOf ? "discriminator-container" : "",
    uiSchema.classNames,
  ]
    .join(" ")
    .trim();

  const fieldProps = {
    description: (
      <DescriptionField
        id={id + "__description"}
        description={description}
        formContext={formContext}
      />
    ),
    rawDescription: description,
    help: <Help help={help} />,
    rawHelp: typeof help === "string" ? help : undefined,
    errors: <ErrorList errors={errors} />,
    rawErrors: errors,
    id,
    label,
    hidden,
    required,
    disabled,
    readonly,
    displayLabel,
    classNames,
    formContext,
    fields,
    schema,
    uiSchema,
    anyOfTitle,
    discriminatorObj,
    formData,
  };

  // See #439: uiSchema: Don't pass consumed class names to child components
  const field = (
    <FieldComponent
      {...props}
      definitions={dxInterface.definitions}
      schema={schema}
      uiSchema={{ ...uiSchema, classNames: undefined }}
      disabled={disabled}
      readonly={readonly}
      autofocus={autofocus}
      errorSchema={fieldErrorSchema}
      formContext={formContext}
      schemaIndex={schemaIndex}
      typeCombinatorTypes={_typeCombinatorTypes}
      fieldProps={fieldProps}
      discriminatorObj={discriminatorObj}
    />
  );

  return isOneOfSchema(schema) ||
    (!isOneOfSchema(schema) &&
      schema.typeCombinatorTypes &&
      schema.type !== "array") ? (
    field
  ) : (
    <FieldTemplate {...fieldProps}>{field}</FieldTemplate>
  );
}

class SchemaField extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // if schemas are equal idSchemas will be equal as well,
    // so it is not necessary to compare
    return !deepEquals(
      { ...this.props, idSchema: undefined },
      { ...nextProps, idSchema: undefined }
    );
  }

  render() {
    return SchemaFieldRender(this.props);
  }
}

SchemaField.defaultProps = {
  uiSchema: {},
  errorSchema: {},
  idSchema: {},
  disabled: false,
  readonly: false,
  autofocus: false,
};

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  SchemaField.propTypes = {
    schema: PropTypes.object.isRequired,
    uiSchema: PropTypes.object,
    idSchema: PropTypes.object,
    formData: PropTypes.any,
    errorSchema: PropTypes.object,
    schemaIndex: PropTypes.number,
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

export default SchemaField;
