module.exports = {
  schema: {
    title: "A list of tasks",
    type: "object",
    required: ["title"],
    properties: {
      title: {
        type: "string",
        title: "Task list title",
      },
      emptyNumbers: {
        type: "object",
        additionalProperties: {
          type: "integer",
        },
      },
      numbers: {
        type: "object",
        additionalProperties: {
          type: "integer",
        },
      },
      strings: {
        type: "object",
        additionalProperties: {
          type: "string",
        },
      },
      booleans: {
        type: "object",
        additionalProperties: {
          type: "boolean",
        },
      },
      dates: {
        type: "object",
        additionalProperties: {
          type: "string",
          format: "date-time",
        },
      },
      objects: {
        type: "object",
        additionalProperties: {
          type: "object",
        },
      },
      models: {
        type: "object",
        additionalProperties: {
          type: "object",
          properties: {
            name: {
              type: "string",
            },
            value: {
              type: "number",
            },
          },
          required: ["name", "value"],
        },
      },
    },
  },
  uiSchema: {},
  formData: {
    title: "My current tasks",
    emptyNumbers: {},
    numbers: {
      title: 123,
      details: 444,
      done: -2,
    },
    strings: {
      key: "value value value",
    },
    booleans: {
      key: true,
    },
    dates: {
      key: "2012-12-12T12:00:00Z",
    },
    objects: {
      key: {
        hello: 233,
      },
    },
    models: {
      model: {
        name: "mehdi",
        value: 2341,
      },
    },
  },
};
