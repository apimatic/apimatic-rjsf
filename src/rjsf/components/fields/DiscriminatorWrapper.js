import React from "react";
import deepClone from "lodash.clonedeep";

import DiscriminatorField from "./DiscriminatorField";

function converToOneOf(sch, { Root }) {
  const schema = deepClone(sch);
  const { typeCombinatorTypes } = schema;

  schema.oneOf = typeCombinatorTypes.map(
    type => Root[type.DataType] || Root[type.ModelSchemaRef]
  );

  return schema;
}

export default function DiscrimatorWrapper(props) {
  const mergedSchema = converToOneOf(props.schema, props.definitions);

  return (
    <DiscriminatorField
      {...props}
      schema={mergedSchema}
      tagsTitle="Select Model"
    />
  );
}
