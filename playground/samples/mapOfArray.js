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
              items: {
                id: "Person",
                title: "Person",
                description: "",
                type: "object",
                properties: {
                  ArrayField: {
                    description: "",
                    type: "array",
                    items: {
                      type: "string"
                    }
                  },
                  MapField: {
                    type: "object",
                    additionalProperties: {
                      type: "string"
                    }
                  },
                  ArrayOfMaps: {
                    description: "",
                    type: "array",
                    items: {
                      type: "object",
                      additionalProperties: {
                        type: "string"
                      }
                    }
                  },
                  MapOfArrays: {
                    type: "object",
                    additionalProperties: {
                      description: "",
                      type: "array",
                      items: {
                        type: "string"
                      }
                    }
                  }
                },
                required: [
                  "ArrayField",
                  "MapField",
                  "ArrayOfMaps",
                  "MapOfArrays"
                ]
              }
            }
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
