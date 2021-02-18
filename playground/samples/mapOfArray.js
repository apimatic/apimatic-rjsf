module.exports = {
  schema: {
    title: "Endpoint Arguments",
    type: "object",
    additionalProperties: false,
    properties: {
      args: {
        id: "endpoint_7C26ABBCDB1F9",
        title: "endpoint_7C26ABBCDB1F9",
        type: "object",
        properties: {
          MapOfArrayParam: {
            type: "object",
            additionalProperties: {
              description: "",
              type: "array",
              items: { type: "string" }
            },
            dataTypeDisplayText: "map<array<String>>",
            paramType: "Body"
          }
        },
        required: ["MapOfArrayParam"]
      }
    },
    required: ["args"]
  },
  uiSchema: {},
  formData: {}
};
