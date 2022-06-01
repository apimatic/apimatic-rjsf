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
          isPrimitiveType: {
            type: "boolean",
            dataTypeDisplayText: "Boolean",
            dataTypeMarkdown: null,
            paramType: "Query",
            title: "isPrimitiveType",
            typeCombinatorTypes: null
          },
          isAtEndpointLevel: {
            type: "boolean",
            dataTypeDisplayText: "Boolean",
            dataTypeMarkdown: null,
            paramType: "Query",
            title: "isAtEndpointLevel",
            typeCombinatorTypes: null
          },
          hasDiscriminator: {
            type: "boolean",
            dataTypeDisplayText: "Boolean",
            dataTypeMarkdown: null,
            paramType: "Query",
            title: "hasDiscriminator",
            typeCombinatorTypes: null
          },
          session: {
            description: "Course session",
            example: [
              {
                startsAt: "startsAtDummy",
                endsAt: "endsAtDummy",
                offerDinner: true
              }
            ],
            oneOf: [
              {
                type: "array",
                items: {
                  $ref: "#/ModelSchemas/Morning",
                  dataTypeDisplayText: "Morning"
                }
              },
              {
                type: "array",
                items: {
                  $ref: "#/ModelSchemas/Evening",
                  dataTypeDisplayText: "Evening"
                }
              }
            ],
            dataTypeMarkdown:
              "* OneOf\r\n  * [array&lt;Morning&gt;]($m/Morning)\r\n  * [array&lt;Evening&gt;]($m/Evening)\r\n",
            paramType: "Body",
            title: "session",
            typeCombinatorTypes: [
              {
                DataType: "array<Morning>",
                LinkTo: "$m/Morning",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "array<Evening>",
                LinkTo: "$m/Evening",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              }
            ]
          }
        },
        required: [
          "isPrimitiveType",
          "isAtEndpointLevel",
          "hasDiscriminator",
          "session"
        ]
      }
    },
    required: ["args"]
  },
  formData: {
    args: {}
  },
  definitions: {
    Morning: {
      id: "Morning",
      title: "Morning",
      description: "Course morning session",
      type: "object",
      properties: {
        startsAt: {
          description: "Session start time",
          type: "string"
        },
        endsAt: {
          description: "Session end time",
          type: "string"
        },
        offerTeaBreak: {
          description: "Offer tea break during session",
          type: "boolean"
        }
      },
      required: ["startsAt", "endsAt", "offerTeaBreak"]
    },
    Evening: {
      id: "Evening",
      title: "Evening",
      description: "Course evening session",
      type: "object",
      properties: {
        startsAt: {
          description: "Session start time",
          type: "string"
        },
        endsAt: {
          description: "Session end time",
          type: "string"
        },
        offerDinner: {
          description: "Offer dinner during session",
          type: "boolean"
        }
      },
      required: ["startsAt", "endsAt", "offerDinner"]
    },
    Noon: {
      id: "Noon",
      title: "Noon",
      description: "Course noon session",
      type: "object",
      properties: {
        startsAt: {
          description: "Session start time",
          type: "string"
        },
        endsAt: {
          description: "Session end time",
          type: "string"
        },
        offerLunch: {
          description: "Offer lunch during session",
          type: "boolean"
        }
      },
      required: ["startsAt", "endsAt", "offerLunch"]
    },
    ServerResponse: {
      id: "ServerResponse",
      title: "ServerResponse",
      type: "object",
      properties: {
        passed: {
          type: "boolean"
        },
        Message: {
          type: "string"
        },
        input: {
          type: "object",
          additionalProperties: {
            type: "object"
          }
        }
      },
      required: ["passed"]
    }
  }
};
