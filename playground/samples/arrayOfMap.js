module.exports = {
  schema: {
    title: "Endpoint Arguments_1",
    type: "object",
    additionalProperties: false,
    properties: {
      args: {
        id: "endpoint_7C26ABBCDB1F9",
        title: "endpoint_7C26ABBCDB1F9",
        type: "object",
        properties: {
          ArrayOfMapParam: {
            example: [{ string1: "test1" }, { string2: "test2" }],
            type: "array",
            items: {
              example: [{ string1: "test1" }, { string2: "test2" }],
              type: "object",
              additionalProperties: { type: "string" },
            },
            dataTypeDisplayText: "array<map<String>>",
            paramType: "Body",
          },
        },
        required: ["ArrayOfMapParam"],
      },
    },
    required: ["args"],
  },
  uiSchema: {},
  formData: {},
};
