module.exports = {
  schema: {
    title: "A list of tasks",
    type: "object",
    required: ["title"],
    properties: {
      title: {
        type: "string",
        title: "Task list title"
      },
      task: {
        type: "object"
      },
      tasks: {
        type: "array",
        items: {
          type: "object"
        }
      }
    }
  },
  uiSchema: {},
  formData: {
    title: "My current tasks",
    tasks: [
      {
        title: "My second task",
        details:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        done: false
      }
    ]
  }
};
