import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  classNames,
  getEvenOdd,
  getEvenOddClass,
  prefixClass as pfx
} from "../../utils";

import { getDefaultFormState, getUiOptions, retrieveSchema } from "../../utils";
import { DeleteIcon, ChevronIcon } from "../Icons";

import DataType from "../fields/DataType";

function MapFieldTitle({
  TitleField,
  title,
  required,
  onNullifyChange,
  nullify,
  disabled,
  fromDiscriminator
}) {
  if (!title) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }
  return (
    <TitleField
      title={title}
      required={required}
      nullify={nullify}
      onNullifyChange={onNullifyChange}
      disabled={disabled}
      fromDiscriminator={fromDiscriminator}
    />
  );
}

function MapFieldDescription({ DescriptionField, description }) {
  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }

  return <DescriptionField description={description} />;
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
  const { depth } = props;
  const btnStyle = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: "bold"
  };
  return (
    <div key={props.index} className={pfx(`${props.className}`)}>
      <div
        className={pfx("map-field-key")}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <IconBtn
          tabIndex="-1"
          onClick={() => props.toggleCollapse(props.key)}
          className={pfx(`btn toggle-button`)}
        >
          {props.collapse ? (
            <ChevronIcon width={14} rotate={-90} />
          ) : (
            <ChevronIcon width={14} />
          )}
        </IconBtn>

        <input
          type="text"
          className={pfx("form-control")}
          onChange={props.onKeyChange}
          value={props.key}
          required
        />
        {props.hasToolbar && props.hasRemove && (
          <div className={pfx("map-item-toolbox")}>
            <IconBtn
              type="danger"
              className={pfx("map-item-remove")}
              tabIndex="-1"
              style={btnStyle}
              disabled={props.disabled || props.readonly}
              onClick={props.onDropKeyClick}
            >
              <DeleteIcon width={14} />
            </IconBtn>
          </div>
        )}
      </div>
      {!props.collapse && (
        <div
          className={pfx(
            classNames({
              "map-field-value-container": true,
              [`depth_${depth}`]: true,
              "even-bg": getEvenOdd(depth),
              "odd-bg": !getEvenOdd(depth)
            })
          )}
        >
          <div className={pfx("flex")} style={{ display: "flex" }}>
            <div
              className={pfx(
                `flex-1 ${props.hasToolbar && props.hasRemove ? "" : ""}`
              )}
              style={{ flex: "1" }}
            >
              {React.cloneElement(props.children, { fromMap: true })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function DefaultNormalMapFieldTemplate(props) {
  const { fromDiscriminator } = props;
  const headerClasses = classNames({
    [pfx("object-header")]: true,
    "position-unset": fromDiscriminator
  });
  const dataType = props.schema.dataTypeDisplayText;
  const markdown = props.schema.dataTypeMarkdown;

  return (
    <fieldset className={pfx(props.className)}>
      <div className={headerClasses}>
        <div
          className={pfx("header-left hand")}
          onClick={props.toggleGroupCollapse}
        >
          <MapFieldTitle
            TitleField={props.TitleField}
            title={props.title}
            required={props.required}
            nullify={props.nullify}
            onNullifyChange={props.onNullifyChange}
            disabled={props.disabled}
            fromDiscriminator={props.fromDiscriminator}
          />
        </div>

        <IconBtn
          tabIndex="-1"
          onClick={props.toggleGroupCollapse}
          className={pfx(`btn toggle-button`)}
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
          type="map-field-type"
          markdown={markdown}
        />

        {props.schema.paramType && (
          <div className={pfx("param-type")}>{props.schema.paramType}</div>
        )}
      </div>

      <MapFieldDescription
        DescriptionField={props.DescriptionField}
        description={
          props.uiSchema["ui:description"] ||
          props.schema.description ||
          props.addPropsSchema.description
        }
      />

      {!props.collapse && (
        <div
          className={pfx(
            classNames({
              "map-item-list-container": true,
              "even-bg": getEvenOdd(props.depth),
              "odd-bg": !getEvenOdd(props.depth)
            })
          )}
        >
          <div className={pfx("map-item-list")}>
            {props.items && props.items.map(p => DefaultMapItem(p))}
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

class MapField extends Component {
  static defaultProps = {
    uiSchema: {},
    formData: [],
    required: false,
    disabled: false,
    readonly: false,
    autofocus: false
  };

  constructor(props) {
    super(props);

    this.state = this.getStateFromProps(props);
    this.state.expandInfo = {};
    this.state.collapse = true;
    this.state.expandAllLevel = props.expandAllLevel;
    this.state.depth = props.depth ? props.depth : 1;
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.toggleGroupCollapse = this.toggleGroupCollapse.bind(this);
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
      expandAll: nextProps.expandAll
    });
  }

  getStateFromProps(nextProps) {
    return {
      originalFormData:
        nextProps.formData === undefined ||
        (nextProps.formData && Object.keys(nextProps.formData).length === 0)
          ? this.state
            ? this.state.originalFormData
            : undefined
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
    return (value, options, schemaIndex) => {
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

  toggleCollapse(key) {
    this.setState(prevState => {
      return {
        ...prevState,
        expandInfo: {
          ...prevState.expandInfo,
          [key]: !prevState.expandInfo[key]
        }
      };
    });
  }

  toggleGroupCollapse() {
    this.setState(prevState => {
      return {
        ...prevState,
        collapse: !prevState.collapse
      };
    });
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
    const { dxInterface } = registry;
    let itemSchema = schema.additionalProperties;
    let newHash = this.state.hash.slice();
    newHash.push({
      k: "key" + index,
      v: getDefaultFormState(itemSchema, undefined, undefined, dxInterface)
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
      !this.props.required &&
      !this.props.fromDiscriminator
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
            undefined,
            this.props.registry.dxInterface
          )
        });
      }
    } else {
      this.props.onChange(undefined);
    }
  };

  additionalFieldSchema = itemSchema => {
    const { schema } = this.props;

    return {
      ...itemSchema,
      description: undefined,
      discriminator: schema.discriminator,
      discriminatorValue: schema.discriminatorValue,
      readOnly: schema.readOnly,
      writeOnly: schema.writeOnly,
      typeCombinatorTypes: schema.typeCombinatorTypes
    };
  };

  render() {
    const {
      schema,
      uiSchema,
      formData,
      errorSchema,
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
      fromDiscriminator,
      typeCombinatorTypes
    } = this.props;
    const title = schema.title || name;
    const { fields, dxInterface } = registry;
    const { TitleField, DescriptionField } = fields;
    const addPropsSchema = retrieveSchema(
      schema.additionalProperties,
      formData,
      dxInterface
    );
    const itemSchema = this.additionalFieldSchema(addPropsSchema);
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
        const collapse = this.state.expandInfo[pair.k] ? false : true;
        const childDepth = depth + 1;

        return this.renderMapFieldItem({
          index,
          key: pair.k,
          itemSchema: itemSchema,
          itemErrorSchema,
          itemData: item,
          itemUiSchema: uiSchema.items,
          autofocus: autofocus && index === 0,
          onBlur,
          onFocus,
          depth: childDepth,
          isEven: getEvenOdd(childDepth),
          collapse,
          typeCombinatorTypes
        });
      }),
      className: `field field-array field-array-of-${
        addPropsSchema.type
      }  ${getEvenOddClass(depth)} depth_${depth}`,
      DescriptionField,
      disabled,
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
      depth,
      isEven: getEvenOdd(depth),
      toggleGroupCollapse: this.toggleGroupCollapse,
      collapse: this.state.collapse,
      fromDiscriminator
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
      itemErrorSchema,
      autofocus,
      onBlur,
      onFocus,
      depth,
      typeCombinatorTypes
    } = props;
    const { disabled, readonly, uiSchema, registry } = this.props;
    const {
      fields: { SchemaField }
    } = registry;
    const { removable } = {
      removable: true,
      ...uiSchema["ui:options"]
    };
    const has = {
      remove: removable && canRemove
    };
    has.toolbar = Object.keys(has).some(key => has[key]);

    const childDepth = depth + 1;
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
          required={this.isItemRequired(itemSchema)}
          onChange={this.onValueChange(index)}
          onBlur={onBlur}
          onFocus={onFocus}
          registry={this.props.registry}
          disabled={this.props.disabled}
          readonly={this.props.readonly}
          autofocus={autofocus}
          depth={childDepth}
          isEven={getEvenOdd(childDepth)}
          typeCombinatorTypes={typeCombinatorTypes}
        />
      ),
      className: "map-item",
      disabled,
      hasToolbar: has.toolbar,
      hasRemove: has.remove,
      key,
      onDropKeyClick: this.onKeyDelete(index),
      onKeyChange: this.onKeyChange({ k: key, v: itemData }, index),
      toggleCollapse: this.toggleCollapse,
      collapse: props.collapse,
      readonly,
      depth
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
    errorSchema: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    formData: PropTypes.object,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    dxInterface: PropTypes.shape({
      registry: PropTypes.shape({
        widgets: PropTypes.objectOf(
          PropTypes.oneOfType([PropTypes.func, PropTypes.object])
        ).isRequired,
        fields: PropTypes.objectOf(PropTypes.func).isRequired,
        definitions: PropTypes.object.isRequired,
        formContext: PropTypes.object.isRequired
      })
    })
  };
}

export default MapField;
