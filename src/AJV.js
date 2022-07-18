import Ajv from "ajv";

export class AJV {
  static ajv;
  static initializeAJV(definitions) {
    const ajv = new Ajv({
      errorDataPath: "property",
      allErrors: true,
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

    ajv.addSchema(definitions, "ModelSchemas");

    return ajv;
  }

  static getInstance() {
    if (AJV.ajv) {
      return AJV.ajv;
    }
  }

  static setInstance(definitions) {
    AJV.ajv = AJV.initializeAJV(definitions);
  }
}
