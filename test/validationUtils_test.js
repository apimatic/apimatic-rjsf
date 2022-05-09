import { expect } from "chai";
import Ajv from "ajv";

import {
  getNestedValue,
  getOneAnyOfPath,
  getSelectedFormDataFieldPath,
  getType,
  TYPE_ENUM,
  validateSchema
} from "../src/validationUtils";

import {
  // schema,
  // originalFormData,
  GET_NESTED_VALUE_DATA,
  GET_NESTED_VALUE_VARIABLES,
  GET_SELECTED_FORM_DATA_FIELD_PATH_DATA,
  GET_SELECTED_FORM_DATA_FIELD_PATH_VARIABLES,
  ONEOF_NONSCALAR_ENDPOINTS_VARIABLES,
  ONEOF_NONSCALAR_ENDPOINTS_DATA,
  ONEOF_SCALAR_ENDPOINTS_VARIABLES,
  ONEOF_SCALAR_ENDPOINTS_DATA
} from "./validation_mock";

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

export function getErrorObjects(errors) {
  if (errors) {
    return errors.reduce((prev, err) => {
      const dataPathArr = err.dataPath.split(".");
      prev = { ...prev, [dataPathArr[dataPathArr.length - 1]]: err };
      return prev;
    }, {});
  }

  return {};
}

describe("file: validationUtils_test.js", () => {
  describe("function: validateSchema", () => {
    it("initial render", () => {
      const response = validateSchema({}, {}, {}, ajv, true, () => {});
      expect(response).equal(undefined);
    });

    it("invalid schema", () => {
      const response = validateSchema(undefined, {}, {}, ajv, true, () => {});
      expect(response).equal(undefined);
    });

    it("invalid form data", () => {
      const response = validateSchema({}, undefined, {}, ajv, true, () => {});
      expect(response).equal(undefined);
    });

    it("invalid original form data", () => {
      const response = validateSchema({}, {}, undefined, ajv, true, () => {});
      expect(response).equal(undefined);
    });

    describe("OneOf non scalar endpoints", () => {
      const {
        SEND_MULTILEVEL_ONEOF,
        SEND_ONEOF_OUTER_ARRAY,
        SEND_ONEOF_SIMPLE,
        SEND_ONEOF_INNER_MAP,
        SEND_ONEOF_CONTAINER_OF_ANYOF,
        SEND_ONEOF_INNER_ARRAY,
        SEND_ONEOF_INNER_MIXED_ARRAYS,
        SEND_ONEOF_INNER_MIXED_MAP,
        SEND_ONEOF_OUTER_MAP
      } = ONEOF_NONSCALAR_ENDPOINTS_VARIABLES;

      it(SEND_MULTILEVEL_ONEOF, () => {
        const {
          formData,
          schema,
          originalFormData
        } = ONEOF_NONSCALAR_ENDPOINTS_DATA[SEND_MULTILEVEL_ONEOF];
        validateSchema(schema, formData, originalFormData, ajv, true, () => {});
        const { startsAt, endsAt } = getErrorObjects(ajv.errors);

        expect(startsAt.keyword).equals("required");
        expect(endsAt.keyword).equals("required");
      });

      it(SEND_ONEOF_OUTER_ARRAY, () => {
        const {
          formData,
          schema,
          originalFormData
        } = ONEOF_NONSCALAR_ENDPOINTS_DATA[SEND_ONEOF_OUTER_ARRAY];
        validateSchema(schema, formData, originalFormData, ajv, true, () => {});
        const { startsAt, endsAt, offerTeaBreak } = getErrorObjects(ajv.errors);

        expect(startsAt.keyword).equals("required");
        expect(endsAt.keyword).equals("required");
        expect(offerTeaBreak.keyword).equals("required");
      });

      it(SEND_ONEOF_SIMPLE, () => {
        const {
          formData,
          schema,
          originalFormData
        } = ONEOF_NONSCALAR_ENDPOINTS_DATA[SEND_ONEOF_SIMPLE];
        validateSchema(schema, formData, originalFormData, ajv, true, () => {});
        const { startsAt, endsAt, offerTeaBreak } = getErrorObjects(ajv.errors);

        expect(startsAt.keyword).equals("required");
        expect(endsAt.keyword).equals("required");
        expect(offerTeaBreak.keyword).equals("required");
      });

      it(SEND_ONEOF_INNER_MAP, () => {
        const {
          formData,
          schema,
          originalFormData
        } = ONEOF_NONSCALAR_ENDPOINTS_DATA[SEND_ONEOF_INNER_MAP];
        validateSchema(schema, formData, originalFormData, ajv, true, () => {});
        const { startsAt, endsAt, offerTeaBreak } = getErrorObjects(ajv.errors);

        expect(startsAt.keyword).equals("required");
        expect(endsAt.keyword).equals("required");
        expect(offerTeaBreak.keyword).equals("required");
      });

      it(SEND_ONEOF_INNER_MIXED_ARRAYS, () => {
        const {
          formData,
          schema,
          originalFormData
        } = ONEOF_NONSCALAR_ENDPOINTS_DATA[SEND_ONEOF_INNER_MIXED_ARRAYS];
        validateSchema(schema, formData, originalFormData, ajv, true, () => {});
        const { startsAt, endsAt, offerTeaBreak } = getErrorObjects(ajv.errors);

        expect(startsAt.keyword).equals("required");
        expect(endsAt.keyword).equals("required");
        expect(offerTeaBreak.keyword).equals("required");
      });

      it(SEND_ONEOF_OUTER_MAP, () => {
        const {
          formData,
          schema,
          originalFormData
        } = ONEOF_NONSCALAR_ENDPOINTS_DATA[SEND_ONEOF_OUTER_MAP];
        validateSchema(schema, formData, originalFormData, ajv, true, () => {});
        const { startsAt, endsAt, offerTeaBreak } = getErrorObjects(ajv.errors);

        expect(startsAt.keyword).equals("required");
        expect(endsAt.keyword).equals("required");
        expect(offerTeaBreak.keyword).equals("required");
      });

      it(SEND_ONEOF_INNER_ARRAY, () => {
        const {
          formData,
          schema,
          originalFormData
        } = ONEOF_NONSCALAR_ENDPOINTS_DATA[SEND_ONEOF_INNER_ARRAY];
        validateSchema(schema, formData, originalFormData, ajv, true, () => {});
        const { startsAt, endsAt, offerDinner } = getErrorObjects(ajv.errors);

        expect(startsAt.keyword).equals("required");
        expect(endsAt.keyword).equals("required");
        expect(offerDinner.keyword).equals("required");
      });

      it(SEND_ONEOF_INNER_MIXED_MAP, () => {
        const {
          formData,
          schema,
          originalFormData
        } = ONEOF_NONSCALAR_ENDPOINTS_DATA[SEND_ONEOF_INNER_MIXED_MAP];
        validateSchema(schema, formData, originalFormData, ajv, true, () => {});
        const { startsAt, endsAt, offerTeaBreak } = getErrorObjects(ajv.errors);

        expect(startsAt.keyword).equals("required");
        expect(endsAt.keyword).equals("required");
        expect(offerTeaBreak.keyword).equals("required");
      });

      it(SEND_ONEOF_CONTAINER_OF_ANYOF, () => {
        const {
          formData,
          schema,
          originalFormData
        } = ONEOF_NONSCALAR_ENDPOINTS_DATA[SEND_ONEOF_CONTAINER_OF_ANYOF];
        validateSchema(schema, formData, originalFormData, ajv, true, () => {});
        const { startsAt, endsAt, offerLunch } = getErrorObjects(ajv.errors);

        expect(startsAt.keyword).equals("required");
        expect(endsAt.keyword).equals("required");
        expect(offerLunch.keyword).equals("required");
      });
    });

    describe("OneOf scalar endpoints", () => {
      const {
        SEND_MULTILEVEL_ONEOF,
        SEND_ONEOF_OUTER_ARRAY,
        SEND_ONEOF_SIMPLE,
        SEND_ONEOF_INNER_MAP,
        SEND_ONEOF_CONTAINER_OF_ANYOF,
        SEND_ONEOF_INNER_ARRAY,
        SEND_ONEOF_INNER_MIXED_ARRAYS,
        SEND_ONEOF_INNER_MIXED_MAP,
        SEND_ONEOF_OUTER_MAP
      } = ONEOF_SCALAR_ENDPOINTS_VARIABLES;

      it(SEND_MULTILEVEL_ONEOF, () => {
        const {
          formData,
          schema,
          originalFormData
        } = ONEOF_SCALAR_ENDPOINTS_DATA[SEND_MULTILEVEL_ONEOF];
        validateSchema(schema, formData, originalFormData, ajv, true, () => {});
        const errors = getErrorObjects(ajv.errors);

        expect(errors["scalarValue[0]"].keyword).equals("type");
      });

      it(SEND_ONEOF_OUTER_ARRAY, () => {
        const {
          formData,
          schema,
          originalFormData
        } = ONEOF_SCALAR_ENDPOINTS_DATA[SEND_ONEOF_OUTER_ARRAY];
        validateSchema(schema, formData, originalFormData, ajv, true, () => {});
        const errors = getErrorObjects(ajv.errors);

        expect(errors["scalarValue[0]"].keyword).equals("type");
      });

      it(SEND_ONEOF_SIMPLE, () => {
        const {
          formData,
          schema,
          originalFormData
        } = ONEOF_SCALAR_ENDPOINTS_DATA[SEND_ONEOF_SIMPLE];
        validateSchema(schema, formData, originalFormData, ajv, true, () => {});
        const errors = getErrorObjects(ajv.errors);

        expect(errors["scalarValue"].keyword).equals("required");
      });

      it(SEND_ONEOF_INNER_MAP, () => {
        const {
          formData,
          schema,
          originalFormData
        } = ONEOF_SCALAR_ENDPOINTS_DATA[SEND_ONEOF_INNER_MAP];
        validateSchema(schema, formData, originalFormData, ajv, true, () => {});
        const errors = getErrorObjects(ajv.errors);
        expect(errors["scalarValue['key0']"].keyword).equals("type");
      });

      it(SEND_ONEOF_INNER_MIXED_ARRAYS, () => {
        const {
          formData,
          schema,
          originalFormData
        } = ONEOF_SCALAR_ENDPOINTS_DATA[SEND_ONEOF_INNER_MIXED_ARRAYS];
        validateSchema(schema, formData, originalFormData, ajv, true, () => {});
        const errors = getErrorObjects(ajv.errors);
        expect(errors["scalarValue[0]"].keyword).equals("type");
      });

      it(SEND_ONEOF_OUTER_MAP, () => {
        const {
          formData,
          schema,
          originalFormData
        } = ONEOF_SCALAR_ENDPOINTS_DATA[SEND_ONEOF_OUTER_MAP];
        validateSchema(schema, formData, originalFormData, ajv, true, () => {});
        const { key1 } = getErrorObjects(ajv.errors);

        expect(key1.keyword).equals("type");
      });

      it(SEND_ONEOF_INNER_ARRAY, () => {
        const {
          formData,
          schema,
          originalFormData
        } = ONEOF_SCALAR_ENDPOINTS_DATA[SEND_ONEOF_INNER_ARRAY];
        validateSchema(schema, formData, originalFormData, ajv, true, () => {});
        const errors = getErrorObjects(ajv.errors);

        expect(errors["scalarValue[0]"].keyword).equals("type");
      });

      it(SEND_ONEOF_INNER_MIXED_MAP, () => {
        const {
          formData,
          schema,
          originalFormData
        } = ONEOF_SCALAR_ENDPOINTS_DATA[SEND_ONEOF_INNER_MIXED_MAP];
        validateSchema(schema, formData, originalFormData, ajv, true, () => {});
        const errors = getErrorObjects(ajv.errors);

        expect(errors).deep.equals({});
      });

      it(SEND_ONEOF_CONTAINER_OF_ANYOF, () => {
        const {
          formData,
          schema,
          originalFormData
        } = ONEOF_SCALAR_ENDPOINTS_DATA[SEND_ONEOF_CONTAINER_OF_ANYOF];
        validateSchema(schema, formData, originalFormData, ajv, true, () => {});
        const { scalarValue } = getErrorObjects(ajv.errors);

        expect(scalarValue.keyword).equals("required");
      });
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

  describe("function: getNestedValue", () => {
    const {
      INITIAL_RENDER,
      NESTED_DATA,
      NESTED_3D_DATA
    } = GET_NESTED_VALUE_VARIABLES;

    it(INITIAL_RENDER, () => {
      const data = GET_NESTED_VALUE_DATA[INITIAL_RENDER];
      const result = getNestedValue(data, "");
      expect(result).equals("");
    });

    it(NESTED_DATA, () => {
      const data = GET_NESTED_VALUE_DATA[NESTED_DATA];
      const result = getNestedValue(data);
      expect(result).deep.equals([
        "oneOf/0/items/oneOf/0/oneOf/0/anyOf/0",
        "oneOf/0/items/oneOf/1/oneOf/0/anyOf/1"
      ]);
    });

    it(NESTED_3D_DATA, () => {
      const data = GET_NESTED_VALUE_DATA[NESTED_3D_DATA];
      const result = getNestedValue(data);
      expect(result).deep.equals([
        [
          "oneOf/0/items/oneOf/0/oneOf/0/anyOf/0/items/oneOf/0/oneOf/0/anyOf/0",
          "oneOf/0/items/oneOf/0/oneOf/0/anyOf/0/items/oneOf/1/oneOf/0/anyOf/1"
        ],
        "oneOf/0/items/oneOf/1/oneOf/0/anyOf/1"
      ]);
    });
  });

  describe("function: getSelectedFormDataFieldPath", () => {
    const {
      INITIAL_RENDER,
      WITH_DATA,
      WITH_3D_DATA
    } = GET_SELECTED_FORM_DATA_FIELD_PATH_VARIABLES;

    it(INITIAL_RENDER, () => {
      const data = GET_SELECTED_FORM_DATA_FIELD_PATH_DATA[INITIAL_RENDER];
      const { fieldPath, fieldValue } = getSelectedFormDataFieldPath(data);

      expect(fieldPath).equals("");
      expect(fieldValue).equals(undefined);
    });

    it(WITH_DATA, () => {
      const data = GET_SELECTED_FORM_DATA_FIELD_PATH_DATA[WITH_DATA];
      const { fieldPath, fieldValue } = getSelectedFormDataFieldPath(data);

      expect(fieldPath).equals("/oneOf/0/oneOf/0");
      expect(fieldValue).equals("oneOf/1");
    });

    it(WITH_3D_DATA, () => {
      const data = GET_SELECTED_FORM_DATA_FIELD_PATH_DATA[WITH_3D_DATA];
      const { fieldPath, fieldValue } = getSelectedFormDataFieldPath(data);

      expect(fieldPath).equals("");
      expect(fieldValue).deep.equals([
        [
          "oneOf/0/items/oneOf/0/oneOf/0/anyOf/0/items/oneOf/0/oneOf/0/anyOf/0",
          "oneOf/0/items/oneOf/0/oneOf/0/anyOf/0/items/oneOf/1/oneOf/0/anyOf/1"
        ],
        "oneOf/0/items/oneOf/1/oneOf/0/anyOf/1"
      ]);
    });
  });
});
