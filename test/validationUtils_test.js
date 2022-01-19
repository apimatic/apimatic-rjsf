import { expect } from "chai";
import Ajv from "ajv";

import { getType, TYPE_ENUM, validateSchema } from "../src/validationUtils";
import { schema, originalFormData } from "./validation_mock";

function getErrorObjects(errors) {
  return errors.reduce((prev, err) => {
    const dataPathArr = err.dataPath.split(".");
    prev = { ...prev, [dataPathArr[dataPathArr.length - 1]]: err };
    return prev;
  }, {});
}
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
      const { startsAt, endsAt, offerDinner } = getErrorObjects(errors);

      expect(startsAt.keyword).equals("required");
      expect(endsAt.keyword).equals("required");
      expect(offerDinner.keyword).equals("required");
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
      const { startsAt, endsAt, offerDinner } = getErrorObjects(errors);

      expect(startsAt.message).equals("should be string");
      expect(endsAt.message).equals("should be string");
      expect(offerDinner.message).equals("should be boolean");
    });

    it("send oneof simple: with empty types", () => {
      const formData = {
        args: {
          isPrimitiveType: false,
          isAtEndpointLevel: false,
          hasDiscriminator: false,
          session: {
            startsAt: null,
            endsAt: null,
            offerDinner: null
          }
        }
      };

      validateSchema(schema, formData, originalFormData, ajv);
      const errors = ajv.errors;
      const { startsAt, endsAt, offerDinner } = getErrorObjects(errors);

      expect(startsAt.message).equals("should be string");
      expect(endsAt.message).equals("should be string");
      expect(offerDinner.message).equals("should be boolean");
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

  describe("function: ", () => {});
});
