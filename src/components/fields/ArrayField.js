import React, { Component } from "react";
import PropTypes from "prop-types";
import DataType from "../fields/DataType";

import UnsupportedField from "./UnsupportedField";
import {
  getWidget,
  getDefaultFormState,
  getUiOptions,
  isMultiSelect,
  isFilesArray,
  isFixedItems,
  allowAdditionalItems,
  optionsList,
  retrieveSchema,
  toIdSchema,
  getDefaultRegistry,
  prefixClass as pfx
} from "../../utils";
import { ArrowUpIcon, DeleteIcon, ArrowDownIcon, ChevronIcon } from "../Icons";

function ArrayFieldTitle({
  TitleField,
  idSchema,
  title,
  required,
  onNullifyChange,
  nullify,
  disabled,
  onClick
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
      onClick={onClick}
    />
  );
}

function ArrayFieldDescription({ DescriptionField, idSchema, description }) {
  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }
  const id = `${idSchema.$id}__description`;
  return <DescriptionField id={id} description={description} />;
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

// Used in the two templates
function DefaultArrayItem(props) {
  // const isObj = (() => {
  //   try {
  //     return props.children.props.schema.type === "object";
  //   } catch (e) {
  //     return false;
  //   }
  // })();

  const btnStyle = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: "bold"
  };
  const arrayItemWrapper = {
    display: "flex",
    flexDirection: "column"
  };
  return (
    <div
      key={props.index}
      className={pfx(`array-item-wrapper ${props.className}`)}
      style={arrayItemWrapper}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        {/* {!isObj && <label>[{props.index}]</label>} */}
        {props.hasToolbar && (
          <div
            className={pfx("array-item-toolbox")}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <div className={pfx(" btn-group")}>
              {(props.hasMoveUp || props.hasMoveDown) && (
                <IconBtn
                  className={pfx("array-item-move-up")}
                  tabIndex="-1"
                  style={btnStyle}
                  disabled={
                    props.disabled || props.readonly || !props.hasMoveUp
                  }
                  onClick={props.onReorderClick(props.index, props.index - 1)}
                >
                  <ArrowUpIcon width={14} />
                </IconBtn>
              )}

              {(props.hasMoveUp || props.hasMoveDown) && (
                <IconBtn
                  className={pfx("array-item-move-down")}
                  tabIndex="-1"
                  style={btnStyle}
                  disabled={
                    props.disabled || props.readonly || !props.hasMoveDown
                  }
                  onClick={props.onReorderClick(props.index, props.index + 1)}
                >
                  <ArrowDownIcon width={14} />
                </IconBtn>
              )}

              {props.hasRemove && (
                <IconBtn
                  type="danger"
                  className={pfx("array-item-remove")}
                  tabIndex="-1"
                  style={btnStyle}
                  disabled={props.disabled || props.readonly}
                  onClick={props.onDropIndexClick(props.index)}
                >
                  <DeleteIcon width={14} />
                </IconBtn>
              )}
            </div>
          </div>
        )}
      </div>
      <div>{props.children}</div>
    </div>
  );
}

function DefaultFixedArrayFieldTemplate(props) {
  return (
    <fieldset className={pfx(props.className)}>
      <ArrayFieldTitle
        key={`array-field-title-${props.idSchema.$id}`}
        TitleField={props.TitleField}
        idSchema={props.idSchema}
        title={props.uiSchema["ui:title"] || props.title}
        required={props.required}
        nullify={props.nullify}
        onNullifyChange={props.onNullifyChange}
        disabled={props.disabled}
      />

      {(props.uiSchema["ui:description"] || props.schema.description) && (
        <div
          className={pfx("field-description")}
          key={`field-description-${props.idSchema.$id}`}
        >
          {props.uiSchema["ui:description"] ||
            props.schema.description.replace(/<br>/gi, "\n")}
        </div>
      )}

      <div
        className={pfx("row array-item-list")}
        key={`array-item-list-${props.idSchema.$id}`}
      >
        {props.items &&
          props.items.map((item, index) => (
            <DefaultArrayItem
              key={`outer-array-item-${index}`}
              {...item}
              index={index}
            />
          ))}
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

function DefaultNormalArrayFieldTemplate(props) {
  const title =
    props.uiSchema["ui:title"] ||
    props.schema.title ||
    props.itemsSchema.title ||
    props.title;

  const dataType = props.schema.dataTypeDisplayText;

  return (
    <fieldset className={pfx(props.className)}>
      <div className={pfx("object-header")}>
        <div className={pfx("header-left hand")} onClick={props.toggleCollapse}>
          <ArrayFieldTitle
            key={`array-field-title-${props.idSchema.$id}`}
            TitleField={props.TitleField}
            idSchema={props.idSchema}
            title={title}
            required={props.required}
            nullify={props.nullify}
            onNullifyChange={props.onNullifyChange}
            disabled={props.disabled}
            // onClick={props.toggleCollapse}
          />
          {title && props.itemsSchema && props.itemsSchema.required && (
            <div className={pfx("element-required")}>
              <span>Required</span>
            </div>
          )}
        </div>

        <IconBtn
          tabIndex="-1"
          onClick={props.toggleCollapse}
          className={pfx("btn toggle-button")}
        >
          {props.collapse ? (
            <ChevronIcon width={14} rotate={-90} />
          ) : (
            <ChevronIcon width={14} />
          )}
        </IconBtn>
      </div>

      <div className={pfx("type-container")}>
        <DataType
          title={dataType}
          link={props.schema.dataTypeLink}
          type="array-type"
        />

        {props.schema.paramType && (
          <div className={pfx("param-type")}>{props.schema.paramType}</div>
        )}
      </div>

      {(props.uiSchema["ui:description"] ||
        props.schema.description ||
        props.itemsSchema.description) && (
        <ArrayFieldDescription
          key={`array-field-description-${props.idSchema.$id}`}
          DescriptionField={props.DescriptionField}
          idSchema={props.idSchema}
          description={
            props.uiSchema["ui:description"] ||
            props.schema.description ||
            props.itemsSchema.description
          }
        />
      )}

      {!props.collapse && (
        <div className={pfx("array-container")}>
          <div
            className={pfx("row array-item-list")}
            key={`array-item-list-${props.idSchema.$id}`}
          >
            {props.items &&
              props.items.map((item, index) => (
                <DefaultArrayItem
                  key={`inner-array-item-${index}`}
                  {...item}
                  index={index}
                />
              ))}
          </div>

          {props.canAdd && (
            <AddButton
              onClick={props.onAddClick}
              disabled={props.disabled || props.readonly}
            />
          )}
        </div>
      )}
    </fieldset>
  );
}

class ArrayField extends Component {
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
    this.state.collapse = true;
    this.state.expandAllLevel = props.expandAllLevel;
    this.state.depth = props.depth ? props.depth : 1;

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
      expandAllLevel: this.state.expandAllLevel,
      expandAll: nextProps.expandAll,
      collapse
    });
  }

  getStateFromProps(nextProps) {
    return {
      originalFormData:
        nextProps.formData === undefined ||
        (nextProps.formData && nextProps.formData.length === 0)
          ? this.state
            ? this.state.originalFormData
            : undefined
          : nextProps.formData
    };
  }

  get itemTitle() {
    const { schema } = this.props;
    return schema.items.title || schema.items.description || "Item";
  }

  isItemRequired(itemSchema) {
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
      if (schema.maxItems !== undefined) {
        addable = formItems.length < schema.maxItems;
      } else {
        addable = true;
      }
    }
    return addable;
  }

  onAddClick = event => {
    event.preventDefault();
    const { schema, formData, registry = getDefaultRegistry() } = this.props;
    const { definitions } = registry;
    let itemSchema = schema.items;
    if (isFixedItems(schema) && allowAdditionalItems(schema)) {
      itemSchema = schema.additionalItems;
    }
    this.props.onChange(
      [...formData, getDefaultFormState(itemSchema, undefined, definitions)],
      { validate: false }
    );
  };

  onDropIndexClick = index => {
    return event => {
      if (event) {
        event.preventDefault();
      }
      const { formData, onChange } = this.props;
      // refs #195: revalidate to ensure properly reindexing errors
      onChange(
        formData.filter((_, i) => i !== index),
        { validate: true }
      );
    };
  };

  onReorderClick = (index, newIndex) => {
    return event => {
      if (event) {
        event.preventDefault();
        event.target.blur();
      }
      const { formData, onChange } = this.props;
      onChange(
        formData.map((item, i) => {
          if (i === newIndex) {
            return formData[index];
          } else if (i === index) {
            return formData[newIndex];
          } else {
            return item;
          }
        }),
        { validate: true }
      );
    };
  };

  onChangeForIndex = index => {
    return value => {
      const { formData, onChange } = this.props;
      const newFormData = formData.map((item, i) => {
        // We need to treat undefined items as nulls to have validation.
        // See https://github.com/tdegrunt/jsonschema/issues/206
        const jsonValue = typeof value === "undefined" ? null : value;
        return index === i ? jsonValue : item;
      });
      onChange(newFormData, { validate: false });
    };
  };

  onSelectChange = value => {
    this.props.onChange(value, { validate: false });
  };

  shouldDisable = () => {
    return (
      (this.props.formData === undefined ||
        (this.props.formData && this.props.formData.length === 0)) &&
      !this.props.required
    );
  };

  onNullifyChange = () => {
    if (this.shouldDisable()) {
      if (this.state.originalFormData) {
        this.props.onChange(this.state.originalFormData);
      } else {
        this.props.onChange(
          getDefaultFormState(
            this.props.schema,
            undefined,
            this.props.registry.definitions
          )
        );
      }
    } else {
      this.props.onChange(undefined);
    }
  };

  render() {
    const {
      schema,
      uiSchema,
      idSchema,
      registry = getDefaultRegistry()
    } = this.props;
    const { definitions } = registry;
    if (!schema.hasOwnProperty("items")) {
      return (
        <UnsupportedField
          schema={schema}
          idSchema={idSchema}
          reason="Missing items definition"
        />
      );
    }
    if (isFixedItems(schema)) {
      return this.renderFixedArray();
    }
    if (isFilesArray(schema, uiSchema, definitions)) {
      return this.renderFiles();
    }
    if (isMultiSelect(schema, definitions)) {
      return this.renderMultiSelect();
    }
    return this.renderNormalArray();
  }

  toggleCollapse() {
    this.setState((prevState, props) => {
      return {
        ...prevState,
        collapse: !prevState.collapse
      };
    });
  }
  renderNormalArray() {
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
      registry = getDefaultRegistry(),
      formContext,
      onBlur,
      onFocus
    } = this.props;
    const { ArrayFieldTemplate, definitions, fields } = registry;
    const { TitleField, DescriptionField } = fields;
    const itemsSchema = retrieveSchema(schema.items, definitions);
    const title = name;
    // schema.title === undefined && itemsSchema.title === undefined
    //   ? name
    //   : name === undefined
    //     ? schema.title || itemsSchema.title
    //     : name + " (" + (schema.title || itemsSchema.title) + ")";
    const arrayProps = {
      canAdd: this.canAddItem(formData),
      items: formData.map((item, index) => {
        const itemSchema = retrieveSchema(schema.items, definitions, item);
        const itemErrorSchema = errorSchema ? errorSchema[index] : undefined;
        const itemIdPrefix = idSchema.$id + "_" + index;
        const itemIdSchema = toIdSchema(
          itemSchema,
          itemIdPrefix,
          definitions,
          item
        );
        return this.renderArrayFieldItem({
          index,
          depth: this.props.depth,
          isEven: this.props.isEven,
          canMoveUp: index > 0,
          canMoveDown: index < formData.length - 1,
          itemSchema: {
            ...itemSchema,
            description: undefined,
            title: `[${index}]`
          },
          itemIdSchema,
          itemErrorSchema,
          itemData: item,
          itemUiSchema: uiSchema.items,
          autofocus: autofocus && index === 0,
          onBlur,
          onFocus
        });
      }),
      className: `field field-array field-array-of-${itemsSchema.type} ${
        this.props.isEven ? "even" : "odd"
      } depth_${this.props.depth}`,
      collapse: this.state.collapse,
      toggleCollapse: this.toggleCollapse,
      DescriptionField,
      disabled,
      idSchema,
      uiSchema,
      onAddClick: this.onAddClick,
      readonly,
      required,
      schema,
      itemsSchema,
      title,
      TitleField,
      formContext,
      formData,
      onNullifyChange: this.onNullifyChange,
      nullify: formData && formData.length > 0
    };

    // Check if a custom render function was passed in
    const Component = ArrayFieldTemplate || DefaultNormalArrayFieldTemplate;
    return <Component {...arrayProps} />;
  }

  renderMultiSelect() {
    const {
      schema,
      idSchema,
      uiSchema,
      formData,
      disabled,
      readonly,
      autofocus,
      onBlur,
      onFocus,
      registry = getDefaultRegistry()
    } = this.props;
    const items = this.props.formData;
    const { widgets, definitions, formContext } = registry;
    const itemsSchema = retrieveSchema(schema.items, definitions, formData);
    const enumOptions = optionsList(itemsSchema);
    const { widget = "select", ...options } = {
      ...getUiOptions(uiSchema),
      enumOptions
    };
    const Widget = getWidget(schema, widget, widgets);
    return (
      <Widget
        id={idSchema && idSchema.$id}
        multiple
        onChange={this.onSelectChange}
        onBlur={onBlur}
        onFocus={onFocus}
        options={options}
        schema={schema}
        value={items}
        disabled={disabled}
        readonly={readonly}
        formContext={formContext}
        autofocus={autofocus}
      />
    );
  }

  renderFiles() {
    const {
      schema,
      uiSchema,
      idSchema,
      name,
      disabled,
      readonly,
      autofocus,
      onBlur,
      onFocus,
      registry = getDefaultRegistry()
    } = this.props;
    const title =
      schema.title === undefined
        ? name
        : name === undefined
        ? schema.title
        : name + " (" + schema.title + ")";
    const items = this.props.formData;
    const { widgets, formContext } = registry;
    const { widget = "files", ...options } = getUiOptions(uiSchema);
    const Widget = getWidget(schema, widget, widgets);
    return (
      <Widget
        options={options}
        id={idSchema && idSchema.$id}
        multiple
        onChange={this.onSelectChange}
        onBlur={onBlur}
        onFocus={onFocus}
        schema={schema}
        title={title}
        value={items}
        disabled={disabled}
        readonly={readonly}
        formContext={formContext}
        autofocus={autofocus}
      />
    );
  }

  renderFixedArray() {
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
      registry = getDefaultRegistry(),
      onBlur,
      onFocus
    } = this.props;
    const title =
      schema.title === undefined
        ? name
        : name === undefined
        ? schema.title
        : name + " (" + schema.title + ")";
    let items = this.props.formData;
    const { ArrayFieldTemplate, definitions, fields } = registry;
    const { TitleField } = fields;
    const itemSchemas = schema.items.map((item, index) =>
      retrieveSchema(item, definitions, formData[index])
    );
    const additionalSchema = allowAdditionalItems(schema)
      ? retrieveSchema(schema.additionalItems, definitions, formData)
      : null;

    if (!items || items.length < itemSchemas.length) {
      // to make sure at least all fixed items are generated
      items = items || [];
      items = items.concat(new Array(itemSchemas.length - items.length));
    }

    // These are the props passed into the render function
    const arrayProps = {
      canAdd: this.canAddItem(items) && additionalSchema,
      className: "field field-array field-array-fixed-items",
      disabled,
      idSchema,
      formData,
      items: items.map((item, index) => {
        const additional = index >= itemSchemas.length;
        const itemSchema = additional
          ? retrieveSchema(schema.additionalItems, definitions, item)
          : itemSchemas[index];
        const itemIdPrefix = idSchema.$id + "_" + index;
        const itemIdSchema = toIdSchema(
          itemSchema,
          itemIdPrefix,
          definitions,
          item
        );
        const itemUiSchema = additional
          ? uiSchema.additionalItems || {}
          : Array.isArray(uiSchema.items)
          ? uiSchema.items[index]
          : uiSchema.items || {};
        const itemErrorSchema = errorSchema ? errorSchema[index] : undefined;

        return this.renderArrayFieldItem({
          index,
          // indexAsTitle: `[${index}]`,
          canRemove: additional,
          canMoveUp: index >= itemSchemas.length + 1,
          canMoveDown: additional && index < items.length - 1,
          itemSchema: { ...itemSchema, title: `[${index}]` },
          itemData: item,
          itemUiSchema,
          itemIdSchema,
          itemErrorSchema,
          autofocus: autofocus && index === 0,
          onBlur,
          onFocus
        });
      }),
      onAddClick: this.onAddClick,
      readonly,
      required,
      schema,
      uiSchema,
      title,
      TitleField,
      onNullifyChange: this.onNullifyChange,
      nullify: formData && formData.length > 0
    };

    // Check if a custom template template was passed in
    const Template = ArrayFieldTemplate || DefaultFixedArrayFieldTemplate;
    return <Template {...arrayProps} />;
  }

  renderArrayFieldItem(props) {
    const {
      index,
      depth,
      canRemove = true,
      canMoveUp = true,
      canMoveDown = true,
      itemSchema,
      itemData,
      itemUiSchema,
      itemIdSchema,
      itemErrorSchema,
      autofocus,
      onBlur,
      onFocus
    } = props;
    const {
      disabled,
      readonly,
      uiSchema,
      registry = getDefaultRegistry()
    } = this.props;
    const {
      fields: { SchemaField }
    } = registry;
    const { orderable, removable } = {
      orderable: true,
      removable: true,
      ...uiSchema["ui:options"]
    };
    const has = {
      moveUp: orderable && canMoveUp,
      moveDown: orderable && canMoveDown,
      remove: removable && canRemove
    };
    has.toolbar = Object.keys(has).some(key => has[key]);

    return {
      children: (
        <SchemaField
          schema={itemSchema}
          depth={depth + 1}
          isEven={!this.props.isEven}
          index={index}
          uiSchema={itemUiSchema}
          formData={itemData}
          errorSchema={itemErrorSchema}
          idSchema={itemIdSchema}
          required={this.isItemRequired(itemSchema)}
          onChange={this.onChangeForIndex(index)}
          onBlur={onBlur}
          onFocus={onFocus}
          registry={this.props.registry}
          disabled={this.props.disabled}
          readonly={this.props.readonly}
          autofocus={autofocus}
        />
      ),
      className: "array-item",
      disabled,
      hasToolbar: has.toolbar,
      hasMoveUp: has.moveUp,
      hasMoveDown: has.moveDown,
      hasRemove: has.remove,
      index,
      onDropIndexClick: this.onDropIndexClick,
      onReorderClick: this.onReorderClick,
      readonly
    };
  }
}

function AddButton({ onClick, disabled }) {
  return (
    <div>
      <p className={pfx("array-item-add text-right")}>
        <IconBtn
          type="info"
          className={pfx("btn-add")}
          tabIndex="0"
          onClick={onClick}
          disabled={disabled}
        >
          {/* <PlusIcon width={14} /> */}
          Add Item
        </IconBtn>
      </p>
    </div>
  );
}

/* istanbul ignore else */
if (process.env.NODE_ENV !== "production") {
  ArrayField.propTypes = {
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
    formData: PropTypes.array,
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

export default ArrayField;
