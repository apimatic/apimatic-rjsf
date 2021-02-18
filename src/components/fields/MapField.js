import React, { Component } from "react";
import PropTypes from "prop-types";
import { prefixClass as pfx } from "../../utils";

import {
  getDefaultFormState,
  getUiOptions,
  retrieveSchema,
  toIdSchema
} from "../../utils";
import { CloseIcon } from "../Icons";

function MapFieldTitle({
  TitleField,
  idSchema,
  title,
  required,
  onNullifyChange,
  nullify,
  disabled
}) {
  if (!title) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }
  const id = `${idSchema.$id}__title`;
  return (
    <TitleField
      id={id}
      title={title}
      required={required}
      nullify={nullify}
      onNullifyChange={onNullifyChange}
      disabled={disabled}
    />
  );
}

function MapFieldDescription({ DescriptionField, idSchema, description }) {
  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }
  const id = `${idSchema.$id}__description`;
  return <DescriptionField id={id} description={description} />;
}

function IconBtn(props) {
  const { type /* = "default" */, icon, className, ...otherProps } = props;
  return (
    <button
      type="button"
      className={pfx(`btn btn-${type}`) + " " + className + " " + pfx("")}
      {...otherProps}
    >
      {props.children}
    </button>
  );
}

// Used in the two templates
function DefaultMapItem(props) {
  const btnStyle = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: "bold"
  };
  return (
    <div key={props.index} className={pfx(`${props.className}`)}>
      {props.index > 0 && (
        <div
          className="divider"
          style={{ borderTop: "1px solid #e2e5e7", margin: "30px 0" }}
        />
      )}

      <div
        className={pfx("")}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <input
          type="text"
          className={pfx("form-control")}
          onChange={props.onKeyChange}
          value={props.key}
          required
        />
        {props.hasToolbar &&
          props.hasRemove && (
            <div className={pfx("map-item-toolbox")}>
              <IconBtn
                type="danger"
                className={pfx("map-item-remove")}
                tabIndex="-1"
                style={btnStyle}
                disabled={props.disabled || props.readonly}
                onClick={props.onDropKeyClick}
              >
                <CloseIcon width={14} />
              </IconBtn>
            </div>
          )}
      </div>
      <div>
        <div className={pfx("flex")} style={{ display: "flex" }}>
          <div
            className={pfx(
              `flex-1 ${props.hasToolbar && props.hasRemove ? "" : ""}`
            )}
            style={{ flex: "1" }}
          >
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

function DefaultNormalMapFieldTemplate(props) {
  return (
    <fieldset className={pfx(props.className)}>
      <MapFieldTitle
        key={`map-field-title-${props.idSchema.$id}`}
        TitleField={props.TitleField}
        idSchema={props.idSchema}
        title={props.title}
        required={props.required}
        nullify={props.nullify}
        onNullifyChange={props.onNullifyChange}
        disabled={props.disabled}
      />

      <MapFieldDescription
        key={`map-field-description-${props.idSchema.$id}`}
        DescriptionField={props.DescriptionField}
        idSchema={props.idSchema}
        description={
          props.uiSchema["ui:description"] ||
          props.schema.description ||
          props.addPropsSchema.description
        }
      />

      <div
        className={pfx("map-item-list")}
        key={`map-item-list-${props.idSchema.$id}`}
      >
        {props.items && props.items.map(p => DefaultMapItem(p))}
      </div>

      {props.canAdd && (
        <AddButton
          onClick={props.onAddClick}
          disabled={props.disabled || props.readonly}
        />
      )}
    </fieldset>
  );
}

class MapField extends Component {
  static defaultProps = {
    uiSchema: {},
    formData: [],
    idSchema: {},
    required: false,
    disabled: false,
    readonly: false,
    autofocus: false
  };

  constructor(props) {
    super(props);

    this.state = this.getStateFromProps(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.getStateFromProps(nextProps));
  }

  getStateFromProps(nextProps) {
    return {
      originalFormData:
        nextProps.formData === undefined ||
        (nextProps.formData && Object.keys(nextProps.formData).length === 0)
          ? this.state ? this.state.originalFormData : undefined
          : nextProps.formData,
      hash:
        !this.state ||
        (this.state.originalFormData !== nextProps.formData &&
          !this.state.duplication) ||
        this.state.hash.length === 0
          ? Object.keys(nextProps.formData).map(k => ({
              k,
              v: nextProps.formData[k]
            }))
          : this.state.hash
    };
  }

  isItemRequired(itemSchema) {
    /* istanbul ignore if: remove when support is added */
    if (Array.isArray(itemSchema.type)) {
      // While we don't yet support composite/nullable jsonschema types, it's
      // future-proof to check for requirement against these.
      return !itemSchema.type.includes("null");
    }
    // All non-null array item types are inherently required by design
    return itemSchema.type !== "null";
  }

  canAddItem(formItems) {
    const { schema, uiSchema } = this.props;
    let { addable } = getUiOptions(uiSchema);
    if (addable !== false) {
      // if ui:options.addable was not explicitly set to false, we can add
      // another item if we have not exceeded maxItems yet
      if (schema.maxProperties !== undefined) {
        addable = formItems.length < schema.maxProperties;
      } else {
        addable = true;
      }
    }
    return addable;
  }

  getNewFormData(hash) {
    return hash.reduce((result, current) => {
      result[current.k] = current.v;
      return result;
    }, {});
  }

  onValueChange(i) {
    return value => {
      let newHash = this.state.hash.slice();
      newHash[i] = { k: this.state.hash[i].k, v: value };
      this.setState(
        {
          hash: newHash
        },
        () => this.props.onChange(this.getNewFormData(newHash))
      );
    };
  }

  getDuplicateCounts(hash) {
    let counts = {};
    for (var index = 0; index < hash.length; index++) {
      var element = hash[index];
      if (element.k in counts) {
        counts[element.k]++;
      } else {
        counts[element.k] = 1;
      }
    }
    return counts;
  }

  hasDuplicates(hash) {
    let counts = {};
    for (var index = 0; index < hash.length; index++) {
      var element = hash[index];
      if (element.k in counts) {
        return true;
      } else {
        counts[element.k] = true;
      }
    }
    return false;
  }

  onKeyChange(pair, i) {
    return event => {
      let newHash = this.state.hash.slice();
      newHash[i] = { k: event.target.value, v: pair.v };
      this.setState(
        {
          hash: newHash,
          duplication: this.hasDuplicates(newHash)
        },
        () => this.props.onChange(this.getNewFormData(newHash))
      );
    };
  }

  onKeyDelete(index) {
    return event => {
      let newHash = this.state.hash.slice();
      newHash.splice(index, 1);
      this.setState(
        {
          hash: newHash
        },
        () => this.props.onChange(this.getNewFormData(newHash))
      );
    };
  }

  onKeyAdd = () => {
    let index = 0;
    while ("key" + index in this.props.formData) {
      index++;
    }

    const { schema, registry } = this.props;
    const { definitions } = registry;
    let itemSchema = schema.additionalProperties;

    let newHash = this.state.hash.slice();
    newHash.push({
      k: "key" + index,
      v: getDefaultFormState(itemSchema, undefined, definitions)
    });
    this.setState(
      {
        hash: newHash
      },
      () => this.props.onChange(this.getNewFormData(newHash))
    );
  };

  shouldDisable = () => {
    return (
      (this.props.formData === undefined ||
        (this.props.formData &&
          Object.keys(this.props.formData).length === 0)) &&
      !this.props.required
    );
  };

  onNullifyChange = () => {
    if (this.shouldDisable()) {
      if (this.state.originalFormData) {
        this.props.onChange(this.state.originalFormData);
      } else {
        this.props.onChange({
          key0: getDefaultFormState(
            this.props.schema.additionalProperties,
            undefined,
            this.props.registry.definitions
          )
        });
      }
    } else {
      this.props.onChange(undefined);
    }
  };

  render() {
    const {
      schema,
      uiSchema,
      formData,
      errorSchema,
      idSchema,
      name,
      required,
      disabled,
      readonly,
      autofocus,
      registry,
      formContext,
      onBlur,
      onFocus,
      depth,
      isEven
    } = this.props;
    const title =
      schema.title === undefined
        ? name
        : name === undefined ? schema.title : name + " (" + schema.title + ")";
    const { definitions, fields } = registry;
    const { TitleField, DescriptionField } = fields;
    const addPropsSchema = {
      ...this.props.schema,
      ...retrieveSchema(schema.additionalProperties, definitions)
    };
    const itemSchema = { ...addPropsSchema, description: undefined };
    const duplicationCounts = this.getDuplicateCounts(this.state.hash);
    const mapProps = {
      canAdd: this.canAddItem(formData),
      items: this.state.hash.map((pair, index) => {
        const item = pair.v;
        const itemErrorSchema1 = errorSchema ? errorSchema[pair.k] : {};
        const itemErrorSchema =
          duplicationCounts[pair.k] > 1
            ? { ...itemErrorSchema1, __errors: ["Key is duplicated."] }
            : itemErrorSchema1;
        const itemIdPrefix = idSchema.$id + "_" + pair.k;
        const itemIdSchema = toIdSchema(
          itemSchema,
          itemIdPrefix,
          definitions,
          item
        );
        return this.renderMapFieldItem({
          index,
          key: pair.k,
          itemSchema: itemSchema,
          itemIdSchema,
          itemErrorSchema,
          itemData: item,
          itemUiSchema: uiSchema.items,
          autofocus: autofocus && index === 0,
          onBlur,
          onFocus,
          depth,
          isEven
        });
      }),
      className: `field field-array field-array-of-${addPropsSchema.type}  ${
        isEven ? "even" : "odd"
      } depth_${depth}`,
      DescriptionField,
      disabled,
      idSchema,
      uiSchema,
      onAddClick: this.onKeyAdd,
      readonly,
      required,
      schema,
      addPropsSchema,
      title,
      TitleField,
      formContext,
      formData,
      onNullifyChange: this.onNullifyChange,
      nullify: formData && Object.keys(formData).length > 0,
      depth: depth,
      isEven: isEven
    };

    return <DefaultNormalMapFieldTemplate {...mapProps} />;
  }

  renderMapFieldItem(props) {
    const {
      index,
      key,
      canRemove = true,
      itemSchema,
      itemData,
      itemUiSchema,
      itemIdSchema,
      itemErrorSchema,
      autofocus,
      onBlur,
      onFocus,
      depth,
      isEven
    } = props;
    const { disabled, readonly, uiSchema, registry } = this.props;
    const { fields: { SchemaField } } = registry;
    const { removable } = {
      removable: true,
      ...uiSchema["ui:options"]
    };
    const has = {
      remove: removable && canRemove
    };
    has.toolbar = Object.keys(has).some(key => has[key]);

    const schema = itemSchema.title
      ? itemSchema
      : {
          ...itemSchema,
          title: key
        };

    return {
      index,
      children: (
        <SchemaField
          schema={schema}
          uiSchema={itemUiSchema}
          formData={itemData}
          errorSchema={itemErrorSchema}
          idSchema={itemIdSchema}
          required={this.isItemRequired(itemSchema)}
          onChange={this.onValueChange(index)}
          onBlur={onBlur}
          onFocus={onFocus}
          registry={this.props.registry}
          disabled={this.props.disabled}
          readonly={this.props.readonly}
          autofocus={autofocus}
          depth={depth + 1}
          isEven={!isEven}
        />
      ),
      className: "map-item",
      disabled,
      hasToolbar: has.toolbar,
      hasRemove: has.remove,
      key,
      onDropKeyClick: this.onKeyDelete(index),
      onKeyChange: this.onKeyChange({ k: key, v: itemData }, index),
      readonly
    };
  }
}

function AddButton({ onClick, disabled }) {
  return (
    <div className={pfx("row")}>
      <p className={pfx("map-item-add text-right")}>
        <IconBtn
          type="info"
          className={pfx("btn-add")}
          tabIndex="0"
          onClick={onClick}
          disabled={disabled}
        >
          {/* <PlusIcon width={14} /> */}
          Add Property
        </IconBtn>
      </p>
    </div>
  );
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  MapField.propTypes = {
    schema: PropTypes.object.isRequired,
    uiSchema: PropTypes.shape({
      "ui:options": PropTypes.shape({
        addable: PropTypes.bool,
        orderable: PropTypes.bool,
        removable: PropTypes.bool
      })
    }),
    idSchema: PropTypes.object,
    errorSchema: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    formData: PropTypes.object,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
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

export default MapField;
