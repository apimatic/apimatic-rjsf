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
      tasks: {
        type: "object",
        title: "Tasks",
        properties: {
          title: {
            type: "string",
            title: "Title",
            description: "A sample title"
          },
          details: {
            type: "string",
            title: "Task details",
            description: "Enter the task details"
          },
          done: {
            type: "boolean",
            title: "Done?",
            default: false
          },
          tasks: {
            type: "object",
            title: "Tasks",
            properties: {
              title: {
                type: "string",
                title: "Title",
                description: "A sample title"
              },
              details: {
                type: "string",
                title: "Task details",
                description: "Enter the task details"
              },
              done: {
                type: "boolean",
                title: "Done?",
                default: false
              }
            }
          }
        }
      }
    }
  },
  uiSchema: {},
  formData: {
    title: "My current tasks",
    tasks: {
      title: "My second task",
      details:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      done: false
    }
  }
};
