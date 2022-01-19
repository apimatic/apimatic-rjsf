export const schema = {
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
          type: "boolean"
        },
        isAtEndpointLevel: {
          type: "boolean"
        },
        hasDiscriminator: {
          type: "boolean"
        },
        session: {
          description: "Course session",
          example: {
            startsAt: "startsAtDummy",
            endsAt: "endsAtDummy",
            offerDinner: true
          },
          oneOf: [
            {
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
            {
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
};

export const origninalFormData1 = {
  arge: {
    isPrimitiveType: false,
    isAtEndpointLevel: false,
    hasDiscriminator: false,
    session: {
      $$__case: 0,
      value: {
        startsAt: "startsAtDummy",
        endsAt: "endsAtDummy",
        offerTeaBreak: true
      }
    }
  }
};

export const originalFormData = {
  args: {
    isPrimitiveType: false,
    isAtEndpointLevel: false,
    hasDiscriminator: false,
    session: {
      $$__case: 1,
      $$__case_of: "oneOf",
      value: {
        startsAt: "startsAtDummy",
        endsAt: "endsAtDummy",
        offerDinner: true
      }
    }
  }
};
