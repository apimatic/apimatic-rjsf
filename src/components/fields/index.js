import ArrayField from "./ArrayField";
import BooleanField from "./BooleanField";
import AnyOfField from "./MultiSchemaField";
import DescriptionField from "./DescriptionField";
import NumberField from "./NumberField";
import ObjectField from "./ObjectField";
import SchemaField from "./SchemaField";
import StringField from "./StringField";
import TitleField from "./TitleField";
import UnsupportedField from "./UnsupportedField";

export default {
  AnyOfField,
  ArrayField,
  BooleanField,
  DescriptionField,
  NumberField,
  ObjectField,
  OneOfField: AnyOfField,
  SchemaField,
  StringField,
  TitleField,
  UnsupportedField
};
