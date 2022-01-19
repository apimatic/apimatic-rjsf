import { expect } from "chai";
import Ajv from "ajv";

import {
  getOneAnyOfPath,
  getType,
  TYPE_ENUM,
  validateSchema
} from "../src/validationUtils";

const ajv = new Ajv({
  errorDataPath: "property",
  allErrors: true
});
// add custom formats
ajv.addFormat(
  "data-url",
  /^data:([a-z]+\/[a-z0-9-+.]+)?;name=(.*);base64,(.*)$/
);
ajv.addFormat(
  "color",
  /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/
);

const schema = {
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

const originalFormData = {
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

describe("file: validationUtils_test.js", () => {
  describe("function: validateSchema", () => {
    it("initial render", () => {
      const response = validateSchema({}, {}, {}, ajv);
      expect(response).equal(undefined);
    });

    it("invalid schema", () => {
      const response = validateSchema(undefined, {}, {}, ajv);
      expect(response).equal(undefined);
    });

    it("invalid form data", () => {
      const response = validateSchema({}, undefined, {}, ajv);
      expect(response).equal(undefined);
    });

    it("invalid original form data", () => {
      const response = validateSchema({}, {}, undefined, ajv);
      expect(response).equal(undefined);
    });

    it("send oneof simple: with undefined", () => {
      const formData = {
        args: {
          isPrimitiveType: false,
          isAtEndpointLevel: false,
          hasDiscriminator: false,
          session: {
            startsAt: undefined,
            endsAt: undefined,
            offerDinner: undefined
          }
        }
      };
      validateSchema(schema, formData, originalFormData, ajv);
      const errors = ajv.errors;
      const startsAtErr = errors.find(err => err.dataPath.includes("startsAt"));
      const endAtErr = errors.find(err => err.dataPath.includes("endsAt"));
      const offerDinnerErr = errors.find(err =>
        err.dataPath.includes("offerDinner")
      );

      expect(startsAtErr.keyword).equals("required");
      expect(endAtErr.keyword).equals("required");
      expect(offerDinnerErr.keyword).equals("required");
    });

    it("send oneof simple: with wrong types", () => {
      const formData = {
        args: {
          isPrimitiveType: false,
          isAtEndpointLevel: false,
          hasDiscriminator: false,
          session: {
            startsAt: 321,
            endsAt: 123,
            offerDinner: "Yes"
          }
        }
      };

      validateSchema(schema, formData, originalFormData, ajv);
      const errors = ajv.errors;
      const startsAtErr = errors.find(err => err.dataPath.includes("startsAt"));
      const endAtErr = errors.find(err => err.dataPath.includes("endsAt"));
      const offerDinnerErr = errors.find(err =>
        err.dataPath.includes("offerDinner")
      );

      expect(startsAtErr.message).equals("should be string");
      expect(endAtErr.message).equals("should be string");
      expect(offerDinnerErr.message).equals("should be boolean");
    });
  });

  describe("function: getType", () => {
    it("get other type", () => {
      const type = getType({});
      expect(type).equals(TYPE_ENUM.OTHER);
    });

    it("get array type", () => {
      const type = getType({
        type: "array"
      });
      expect(type).equals(TYPE_ENUM.ARRAY);
    });

    it("get object type", () => {
      const type = getType({
        additionalProperties: {}
      });
      expect(type).equals(TYPE_ENUM.OBJECT);
    });

    it("if node is null", () => {
      const type = getType(null);
      expect(type).equals(TYPE_ENUM.OTHER);
    });

    it("if node is undefined", () => {
      const type = getType(undefined);
      expect(type).equals(TYPE_ENUM.OTHER);
    });
  });

  describe("function: getOneAnyOfPath", () => {
    it("empty path with object case", () => {
      const path = getOneAnyOfPath("", {
        $$__case: 0,
        $$__case_of: "oneOf"
      });

      expect(path).equals("oneOf/0");
    });

    it("existing path with object case", () => {
      const path = getOneAnyOfPath("property", {
        $$__case: 0,
        $$__case_of: "oneOf"
      });

      expect(path).equals("property/oneOf/0");
    });
  });
});
