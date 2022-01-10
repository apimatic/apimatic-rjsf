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
          Authorization: {
            description: "Bearer AccessToken",
            type: "string",
            dataTypeDisplayText: "string",
            paramType: "Header",
            title: "authorization"
          },
          body: {
            id: "GET_DATA_REQUEST_BODY_FILTERS",
            title: "body",
            type: "object",
            properties: {
              filters: {
                type: "array",
                items: {
                  id: "Filters1",
                  title: "Filters1",
                  type: "object",
                  properties: {
                    expression: {
                      title: "Expression",
                      example: "eq",
                      "x-enum-elements": [
                        {
                          name: "eq",
                          description: ""
                        },
                        {
                          name: "ne",
                          description: ""
                        },
                        {
                          name: "in",
                          description: ""
                        },
                        {
                          name: "not_in",
                          description: ""
                        },
                        {
                          name: "like",
                          description: ""
                        },
                        {
                          name: "ilike",
                          description: ""
                        },
                        {
                          name: "not_like",
                          description: ""
                        },
                        {
                          name: "not_ilike",
                          description: ""
                        },
                        {
                          name: "not_rlike",
                          description: ""
                        },
                        {
                          name: "rlike",
                          description: ""
                        },
                        {
                          name: "gt",
                          description: ""
                        },
                        {
                          name: "ge",
                          description: ""
                        },
                        {
                          name: "lt",
                          description: ""
                        },
                        {
                          name: "le",
                          description: ""
                        },
                        {
                          name: "between",
                          description: ""
                        }
                      ],
                      type: "string",
                      enum: [
                        "eq",
                        "ne",
                        "in",
                        "not_in",
                        "like",
                        "ilike",
                        "not_like",
                        "not_ilike",
                        "not_rlike",
                        "rlike",
                        "gt",
                        "ge",
                        "lt",
                        "le",
                        "between"
                      ],
                      dataTypeDisplayText: "Models.ExpressionEnum?",
                      dataTypeLink:
                        "/net-standard-library/models/enumerations/expression",
                      paramType: null
                    },
                    field: {
                      type: "string",
                      dataTypeDisplayText: "string",
                      paramType: null,
                      title: "Field"
                    },
                    value: {
                      type: "string",
                      dataTypeDisplayText: "string",
                      paramType: null,
                      title: "MValue"
                    },
                    values: {
                      type: "array",
                      items: {
                        type: "string",
                        dataTypeDisplayText: "string"
                      },
                      dataTypeDisplayText: "List<string>",
                      paramType: null,
                      title: "Values"
                    }
                  },
                  dataTypeDisplayText: "Filters 1",
                  dataTypeLink:
                    "/net-standard-library/models/structures/filters-1"
                },
                dataTypeDisplayText: "List<Models.Filters1>",
                dataTypeLink:
                  "/net-standard-library/models/structures/filters-1",
                paramType: null,
                title: "Filters"
              },
              returns: {
                type: "array",
                items: {
                  type: "string",
                  dataTypeDisplayText: "string"
                },
                dataTypeDisplayText: "List<string>",
                paramType: null,
                title: "Returns"
              }
            },
            dataTypeDisplayText: "Models.GETDATAREQUESTBODYFILTERS",
            dataTypeLink:
              "/net-standard-library/models/structures/get-data-request-body-filters",
            paramType: "Body"
          }
        },
        required: ["Authorization", "body"]
      }
    },
    required: ["args"]
  },
  formData: {
    args: {}
  }
};
