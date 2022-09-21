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
            dataTypeDisplayText: "String",
            dataTypeMarkdown: null,
            paramType: "Header",
            title: "Authorization",
            typeCombinatorTypes: null
          },
          body: {
            oneOf: [
              {
                id: "AwsS31",
                title: "AwsS31",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$",
                    description:
                      "**Constraints**: *Minimum Length*: `1`, *Pattern*: `(?!^ +$)^.+$`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "name",
                    typeCombinatorTypes: null
                  },
                  type: {
                    example: "AwsS3",
                    type: "string",
                    enum: ["AwsS3"],
                    description: "**Default**: `AwsS3`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "type",
                    typeCombinatorTypes: null
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1,
                    description: "**Constraints**: `>= 0`, `<= 1`",
                    dataTypeDisplayText: "Decimal",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "enabled",
                    typeCombinatorTypes: null
                  },
                  data: {
                    id: "Data",
                    title: "data",
                    type: "object",
                    properties: {
                      s3CrossAccountCredentials: {
                        id: "S3CrossAccountCredentials",
                        title: "s3CrossAccountCredentials",
                        type: "object",
                        properties: {
                          externalId: {
                            type: "string",
                            minLength: 1,
                            description:
                              "**Constraints**: *Minimum Length*: `1`",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "externalId",
                            typeCombinatorTypes: null
                          },
                          roleArn: {
                            type: "string",
                            pattern:
                              "^arn:aws(-[a-zA-Z]+)?:iam:([a-zA-Z0-9-_]+)?:([0-9]{12}):([a-zA-Z0-9_-]+)([/:][a-zA-Z0-9_-]+)*$",
                            description:
                              "**Constraints**: *Pattern*: `^arn:aws(-[a-zA-Z]+)?:iam:([a-zA-Z0-9-_]+)?:([0-9]{12}):([a-zA-Z0-9_-]+)([/:][a-zA-Z0-9_-]+)*$`",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "roleArn",
                            typeCombinatorTypes: null
                          },
                          bucketArn: {
                            type: "string",
                            pattern:
                              "^arn:aws(-[a-zA-Z]+)?:s3:([a-zA-Z0-9-_]+)?:([0-9]{12})?:([a-zA-Z0-9_-]+)([/:][a-zA-Z0-9_-]+)*$",
                            description:
                              "**Constraints**: *Pattern*: `^arn:aws(-[a-zA-Z]+)?:s3:([a-zA-Z0-9-_]+)?:([0-9]{12})?:([a-zA-Z0-9_-]+)([/:][a-zA-Z0-9_-]+)*$`",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "bucketArn",
                            typeCombinatorTypes: null
                          }
                        },
                        required: ["externalId", "roleArn", "bucketArn"],
                        dataTypeDisplayText: "S3 Cross Account Credentials",
                        dataTypeLink:
                          "/http/models/structures/s3-cross-account-credentials",
                        dataTypeMarkdown: null,
                        paramType: null,
                        typeCombinatorTypes: null
                      }
                    },
                    required: ["s3CrossAccountCredentials"],
                    dataTypeDisplayText: "Data",
                    dataTypeLink: "/http/models/structures/data",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "CiscoSparkWebhook1",
                title: "CiscoSparkWebhook1",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$",
                    description:
                      "**Constraints**: *Minimum Length*: `1`, *Pattern*: `(?!^ +$)^.+$`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "name",
                    typeCombinatorTypes: null
                  },
                  type: {
                    example: "CiscoSparkWebhook",
                    type: "string",
                    enum: ["CiscoSparkWebhook"],
                    description: "**Default**: `CiscoSparkWebhook`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "type",
                    typeCombinatorTypes: null
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1,
                    description: "**Constraints**: `>= 0`, `<= 1`",
                    dataTypeDisplayText: "Decimal",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "enabled",
                    typeCombinatorTypes: null
                  },
                  data: {
                    id: "Data1",
                    title: "data",
                    type: "object",
                    properties: {
                      webhook: {
                        type: "string",
                        pattern:
                          "^https://(api.ciscospark|webexapis).com/v1/webhooks/incoming([/][a-zA-Z0-9#-_]+)+$",
                        description:
                          "**Constraints**: *Pattern*: `^https://(api.ciscospark|webexapis).com/v1/webhooks/incoming([/][a-zA-Z0-9#-_]+)+$`",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "webhook",
                        typeCombinatorTypes: null
                      }
                    },
                    required: ["webhook"],
                    dataTypeDisplayText: "Data 1",
                    dataTypeLink: "/http/models/structures/data-1",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "CloudwatchEb1",
                title: "CloudwatchEb1",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$",
                    description:
                      "**Constraints**: *Minimum Length*: `1`, *Pattern*: `(?!^ +$)^.+$`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "name",
                    typeCombinatorTypes: null
                  },
                  type: {
                    example: "CloudwatchEb",
                    type: "string",
                    enum: ["CloudwatchEb"],
                    description: "**Default**: `CloudwatchEb`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "type",
                    typeCombinatorTypes: null
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1,
                    description: "**Constraints**: `>= 0`, `<= 1`",
                    dataTypeDisplayText: "Decimal",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "enabled",
                    typeCombinatorTypes: null
                  },
                  data: {
                    id: "Data2",
                    title: "data",
                    type: "object",
                    properties: {
                      eventBusArn: {
                        type: "string",
                        pattern:
                          "^arn:aws(-[a-zA-Z]+)?:events:([a-zA-Z0-9]{1}[a-zA-Z0-9-]+[a-zA-Z0-9]{1}):([0-9]{12}):([a-zA-Z0-9_-]+)([/:][a-zA-Z0-9_-]+)?$",
                        description:
                          "**Constraints**: *Pattern*: `^arn:aws(-[a-zA-Z]+)?:events:([a-zA-Z0-9]{1}[a-zA-Z0-9-]+[a-zA-Z0-9]{1}):([0-9]{12}):([a-zA-Z0-9_-]+)([/:][a-zA-Z0-9_-]+)?$`",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "eventBusArn",
                        typeCombinatorTypes: null
                      },
                      issueGrouping: {
                        title: "issueGrouping",
                        example: "Events",
                        "x-enum-elements": [
                          {
                            name: "Events",
                            description: ""
                          },
                          {
                            name: "Resources",
                            description: ""
                          }
                        ],
                        type: "string",
                        enum: ["Events", "Resources"],
                        description: "**Default**: `Events`",
                        dataTypeDisplayText: "Group Issues By",
                        dataTypeLink:
                          "/http/models/enumerations/group-issues-by",
                        dataTypeMarkdown: null,
                        paramType: null,
                        typeCombinatorTypes: null
                      }
                    },
                    required: ["eventBusArn"],
                    dataTypeDisplayText: "Data 2",
                    dataTypeLink: "/http/models/structures/data-2",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "Datadog1",
                title: "Datadog1",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$",
                    description:
                      "**Constraints**: *Minimum Length*: `1`, *Pattern*: `(?!^ +$)^.+$`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "name",
                    typeCombinatorTypes: null
                  },
                  type: {
                    example: "Datadog",
                    type: "string",
                    enum: ["Datadog"],
                    description: "**Default**: `Datadog`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "type",
                    typeCombinatorTypes: null
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1,
                    description: "**Constraints**: `>= 0`, `<= 1`",
                    dataTypeDisplayText: "Decimal",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "enabled",
                    typeCombinatorTypes: null
                  },
                  data: {
                    id: "Data3",
                    title: "data",
                    type: "object",
                    properties: {
                      datadogType: {
                        title: "datadogType",
                        example: "Logs Detail",
                        "x-enum-elements": [
                          {
                            name: "Enum_Logs Detail",
                            description: ""
                          },
                          {
                            name: "Enum_Logs Summary",
                            description: ""
                          },
                          {
                            name: "Enum_Events Summary",
                            description: ""
                          }
                        ],
                        type: "string",
                        enum: ["Logs Detail", "Logs Summary", "Events Summary"],
                        description: "**Default**: `Logs Detail`",
                        dataTypeDisplayText: "Datadog Service",
                        dataTypeLink:
                          "/http/models/enumerations/datadog-service",
                        dataTypeMarkdown: null,
                        paramType: null,
                        typeCombinatorTypes: null
                      },
                      datadogSite: {
                        title: "datadogSite",
                        example: "com",
                        "x-enum-elements": [
                          {
                            name: "com",
                            description: ""
                          },
                          {
                            name: "eu",
                            description: ""
                          }
                        ],
                        type: "string",
                        enum: ["com", "eu"],
                        description: "**Default**: `com`",
                        dataTypeDisplayText: "Datadog Site",
                        dataTypeLink: "/http/models/enumerations/datadog-site",
                        dataTypeMarkdown: null,
                        paramType: null,
                        typeCombinatorTypes: null
                      },
                      apiKey: {
                        type: "string",
                        minLength: 1,
                        description: "**Constraints**: *Minimum Length*: `1`",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "apiKey",
                        typeCombinatorTypes: null
                      }
                    },
                    required: ["datadogType", "datadogSite", "apiKey"],
                    dataTypeDisplayText: "Data 3",
                    dataTypeLink: "/http/models/structures/data-3",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "EmailUser1",
                title: "EmailUser1",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$",
                    description:
                      "**Constraints**: *Minimum Length*: `1`, *Pattern*: `(?!^ +$)^.+$`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "name",
                    typeCombinatorTypes: null
                  },
                  type: {
                    example: "EmailUser",
                    type: "string",
                    enum: ["EmailUser"],
                    description: "**Default**: `EmailUser`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "type",
                    typeCombinatorTypes: null
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1,
                    description: "**Constraints**: `>= 0`, `<= 1`",
                    dataTypeDisplayText: "Decimal",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "enabled",
                    typeCombinatorTypes: null
                  },
                  data: {
                    id: "Data19",
                    title: "data",
                    type: "object",
                    properties: {
                      channelProps: {
                        id: "ChannelProps",
                        title: "channelProps",
                        type: "object",
                        properties: {
                          recipients: {
                            description: "a list of email addresses",
                            type: "array",
                            items: {
                              type: "object",
                              dataTypeDisplayText: "Object"
                            },
                            dataTypeDisplayText: "array<Object>",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "recipients",
                            typeCombinatorTypes: null
                          }
                        },
                        required: ["recipients"],
                        dataTypeDisplayText: "Channel Props",
                        dataTypeLink: "/http/models/structures/channel-props",
                        dataTypeMarkdown: null,
                        paramType: null,
                        typeCombinatorTypes: null
                      }
                    },
                    dataTypeDisplayText: "Data 19",
                    dataTypeLink: "/http/models/structures/data-19",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "GcpPubsub1",
                title: "GcpPubsub1",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$",
                    description:
                      "**Constraints**: *Minimum Length*: `1`, *Pattern*: `(?!^ +$)^.+$`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "name",
                    typeCombinatorTypes: null
                  },
                  type: {
                    example: "GcpPubsub",
                    type: "string",
                    enum: ["GcpPubsub"],
                    description: "**Default**: `GcpPubsub`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "type",
                    typeCombinatorTypes: null
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1,
                    description: "**Constraints**: `>= 0`, `<= 1`",
                    dataTypeDisplayText: "Decimal",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "enabled",
                    typeCombinatorTypes: null
                  },
                  data: {
                    id: "Data5",
                    title: "data",
                    type: "object",
                    properties: {
                      credentials: {
                        id: "Credentials",
                        title: "credentials",
                        type: "object",
                        properties: {
                          clientId: {
                            type: "string",
                            minLength: 1,
                            description:
                              "**Constraints**: *Minimum Length*: `1`",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "clientId",
                            typeCombinatorTypes: null
                          },
                          privateKeyId: {
                            type: "string",
                            minLength: 1,
                            description:
                              "**Constraints**: *Minimum Length*: `1`",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "privateKeyId",
                            typeCombinatorTypes: null
                          },
                          clientEmail: {
                            type: "string",
                            minLength: 1,
                            pattern:
                              "^[\\w!#$%&’*+/=?`{|}~^-]+(?:\\.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$",
                            description:
                              "**Constraints**: *Minimum Length*: `1`, *Pattern*: `^[\\w!#$%&’*+/=?`{|}~^-]+(?:\\.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$`",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "clientEmail",
                            typeCombinatorTypes: null
                          },
                          privateKey: {
                            type: "string",
                            minLength: 1,
                            description:
                              "**Constraints**: *Minimum Length*: `1`",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "privateKey",
                            typeCombinatorTypes: null
                          }
                        },
                        required: [
                          "clientId",
                          "privateKeyId",
                          "clientEmail",
                          "privateKey"
                        ],
                        dataTypeDisplayText: "Credentials",
                        dataTypeLink: "/http/models/structures/credentials",
                        dataTypeMarkdown: null,
                        paramType: null,
                        typeCombinatorTypes: null
                      },
                      projectId: {
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "projectId",
                        typeCombinatorTypes: null
                      },
                      topicId: {
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "topicId",
                        typeCombinatorTypes: null
                      },
                      issueGrouping: {
                        title: "issueGrouping",
                        example: "Events",
                        "x-enum-elements": [
                          {
                            name: "Events",
                            description: ""
                          },
                          {
                            name: "Resources",
                            description: ""
                          }
                        ],
                        type: "string",
                        enum: ["Events", "Resources"],
                        description: "**Default**: `Events`",
                        dataTypeDisplayText: "Group Issues By",
                        dataTypeLink:
                          "/http/models/enumerations/group-issues-by",
                        dataTypeMarkdown: null,
                        paramType: null,
                        typeCombinatorTypes: null
                      }
                    },
                    required: ["credentials", "projectId", "topicId"],
                    dataTypeDisplayText: "Data 5",
                    dataTypeLink: "/http/models/structures/data-5",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "IbmQradar1",
                title: "IbmQradar1",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$",
                    description:
                      "**Constraints**: *Minimum Length*: `1`, *Pattern*: `(?!^ +$)^.+$`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "name",
                    typeCombinatorTypes: null
                  },
                  type: {
                    example: "IbmQradar",
                    type: "string",
                    enum: ["IbmQradar"],
                    description: "**Default**: `IbmQradar`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "type",
                    typeCombinatorTypes: null
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1,
                    description: "**Constraints**: `>= 0`, `<= 1`",
                    dataTypeDisplayText: "Decimal",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "enabled",
                    typeCombinatorTypes: null
                  },
                  data: {
                    id: "Data6",
                    title: "data",
                    type: "object",
                    properties: {
                      qradarCommType: {
                        title: "qradarCommType",
                        example: "HTTPS",
                        "x-enum-elements": [
                          {
                            name: "HTTPS",
                            description: ""
                          },
                          {
                            name: "Enum_HTTPS Self Signed Cert",
                            description: ""
                          }
                        ],
                        type: "string",
                        enum: ["HTTPS", "HTTPS Self Signed Cert"],
                        description: "**Default**: `HTTPS`",
                        dataTypeDisplayText: "Communication Type",
                        dataTypeLink:
                          "/http/models/enumerations/communication-type",
                        dataTypeMarkdown: null,
                        paramType: null,
                        typeCombinatorTypes: null
                      },
                      qradarHostUrl: {
                        type: "string",
                        minLength: 1,
                        pattern: ".+[a-zA-Z0-9]$",
                        description:
                          "**Constraints**: *Minimum Length*: `1`, *Pattern*: `.+[a-zA-Z0-9]$`",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "qradarHostUrl",
                        typeCombinatorTypes: null
                      },
                      qradarHostPort: {
                        type: "number",
                        minimum: 0,
                        maximum: 65535,
                        description: "**Constraints**: `>= 0`, `<= 65535`",
                        dataTypeDisplayText: "Decimal",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "qradarHostPort",
                        typeCombinatorTypes: null
                      }
                    },
                    required: ["qradarCommType", "qradarHostUrl"],
                    dataTypeDisplayText: "Data 6",
                    dataTypeLink: "/http/models/structures/data-6",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "Jira1",
                title: "Jira1",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$",
                    description:
                      "**Constraints**: *Minimum Length*: `1`, *Pattern*: `(?!^ +$)^.+$`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "name",
                    typeCombinatorTypes: null
                  },
                  type: {
                    example: "Jira",
                    type: "string",
                    enum: ["Jira"],
                    description: "**Default**: `Jira`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "type",
                    typeCombinatorTypes: null
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1,
                    description: "**Constraints**: `>= 0`, `<= 1`",
                    dataTypeDisplayText: "Decimal",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "enabled",
                    typeCombinatorTypes: null
                  },
                  data: {
                    oneOf: [
                      {
                        id: "JIRA_CLOUD",
                        title: "JIRA_CLOUD",
                        type: "object",
                        properties: {
                          jiraUrl: {
                            type: "string",
                            pattern:
                              "[a-zA-Z0-9]\\.(atlassian\\.net|jira\\.com)$",
                            description:
                              "**Constraints**: *Pattern*: `[a-zA-Z0-9]\\.(atlassian\\.net|jira\\.com)$`",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "jiraUrl",
                            typeCombinatorTypes: null
                          },
                          projectId: {
                            type: "string",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "projectId",
                            typeCombinatorTypes: null
                          },
                          issueType: {
                            type: "string",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "issueType",
                            typeCombinatorTypes: null
                          },
                          username: {
                            type: "string",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "username",
                            typeCombinatorTypes: null
                          },
                          apiToken: {
                            type: "string",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "apiToken",
                            typeCombinatorTypes: null
                          },
                          jiraType: {
                            title: "jiraType",
                            example: "JIRA_CLOUD",
                            "x-enum-elements": [
                              {
                                name: "JIRA_CLOUD",
                                description: ""
                              }
                            ],
                            type: "string",
                            enum: ["JIRA_CLOUD"],
                            description: "**Default**: `JIRA_CLOUD`",
                            dataTypeDisplayText: "Jira Type",
                            dataTypeLink: "/http/models/enumerations/jira-type",
                            dataTypeMarkdown: null,
                            paramType: null,
                            typeCombinatorTypes: null
                          },
                          issueGrouping: {
                            title: "issueGrouping",
                            example: "Events",
                            "x-enum-elements": [
                              {
                                name: "Events",
                                description: ""
                              },
                              {
                                name: "Resources",
                                description: ""
                              }
                            ],
                            type: "string",
                            enum: ["Events", "Resources"],
                            description: "**Default**: `Events`",
                            dataTypeDisplayText: "Group Issues By",
                            dataTypeLink:
                              "/http/models/enumerations/group-issues-by",
                            dataTypeMarkdown: null,
                            paramType: null,
                            typeCombinatorTypes: null
                          },
                          customTemplateFile: {
                            type: "string",
                            format: "data-url",
                            dataTypeDisplayText: "Binary",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "customTemplateFile",
                            typeCombinatorTypes: null
                          }
                        },
                        required: [
                          "jiraUrl",
                          "projectId",
                          "issueType",
                          "username",
                          "apiToken"
                        ]
                      },
                      {
                        id: "JIRA_SERVER",
                        title: "JIRA_SERVER",
                        type: "object",
                        properties: {
                          jiraUrl: {
                            type: "string",
                            pattern: "[A-Za-z0-9\\/\\-&?_.=:]+",
                            description:
                              "**Constraints**: *Pattern*: `[A-Za-z0-9\\/\\-&?_.=:]+`",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "jiraUrl",
                            typeCombinatorTypes: null
                          },
                          projectId: {
                            type: "string",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "projectId",
                            typeCombinatorTypes: null
                          },
                          issueType: {
                            type: "string",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "issueType",
                            typeCombinatorTypes: null
                          },
                          username: {
                            type: "string",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "username",
                            typeCombinatorTypes: null
                          },
                          password: {
                            type: "string",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "password",
                            typeCombinatorTypes: null
                          },
                          jiraType: {
                            title: "jiraType",
                            example: "JIRA_SERVER",
                            "x-enum-elements": [
                              {
                                name: "JIRA_SERVER",
                                description: ""
                              }
                            ],
                            type: "string",
                            enum: ["JIRA_SERVER"],
                            description: "**Default**: `JIRA_SERVER`",
                            dataTypeDisplayText: "Jira Type 1",
                            dataTypeLink:
                              "/http/models/enumerations/jira-type-1",
                            dataTypeMarkdown: null,
                            paramType: null,
                            typeCombinatorTypes: null
                          },
                          issueGrouping: {
                            title: "issueGrouping",
                            example: "Events",
                            "x-enum-elements": [
                              {
                                name: "Events",
                                description: ""
                              },
                              {
                                name: "Resources",
                                description: ""
                              }
                            ],
                            type: "string",
                            enum: ["Events", "Resources"],
                            description: "**Default**: `Events`",
                            dataTypeDisplayText: "Group Issues By",
                            dataTypeLink:
                              "/http/models/enumerations/group-issues-by",
                            dataTypeMarkdown: null,
                            paramType: null,
                            typeCombinatorTypes: null
                          },
                          customTemplateFile: {
                            type: "string",
                            format: "data-url",
                            dataTypeDisplayText: "Binary",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "customTemplateFile",
                            typeCombinatorTypes: null
                          }
                        },
                        required: [
                          "jiraUrl",
                          "projectId",
                          "issueType",
                          "username",
                          "password"
                        ]
                      }
                    ],
                    dataTypeMarkdown:
                      "* OneOf\r\n  * [JIRA CLOUD]($m/JIRA_CLOUD)\r\n  * [JIRA SERVER]($m/JIRA_SERVER)\r\n",
                    paramType: null,
                    title: "data",
                    typeCombinatorTypes: [
                      {
                        DataType: "JIRA CLOUD",
                        LinkTo: "$m/JIRA_CLOUD",
                        ContainsSubTypes: false,
                        SubTypes: null,
                        Type: "typecombinatortype"
                      },
                      {
                        DataType: "JIRA SERVER",
                        LinkTo: "$m/JIRA_SERVER",
                        ContainsSubTypes: false,
                        SubTypes: null,
                        Type: "typecombinatortype"
                      }
                    ]
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "MicrosoftTeams1",
                title: "MicrosoftTeams1",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$",
                    description:
                      "**Constraints**: *Minimum Length*: `1`, *Pattern*: `(?!^ +$)^.+$`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "name",
                    typeCombinatorTypes: null
                  },
                  type: {
                    example: "MicrosoftTeams",
                    type: "string",
                    enum: ["MicrosoftTeams"],
                    description: "**Default**: `MicrosoftTeams`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "type",
                    typeCombinatorTypes: null
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1,
                    description: "**Constraints**: `>= 0`, `<= 1`",
                    dataTypeDisplayText: "Decimal",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "enabled",
                    typeCombinatorTypes: null
                  },
                  data: {
                    id: "Data7",
                    title: "data",
                    type: "object",
                    properties: {
                      teamsUrl: {
                        type: "string",
                        pattern:
                          "^https://[a-zA-Z0-9-_\\.]*(outlook|webhook).office.com/webhook[a-zA-Z0-9#-_]*([/][a-zA-Z0-9#-_]+)+$",
                        description:
                          "**Constraints**: *Pattern*: `^https://[a-zA-Z0-9-_\\.]*(outlook|webhook).office.com/webhook[a-zA-Z0-9#-_]*([/][a-zA-Z0-9#-_]+)+$`",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "teamsUrl",
                        typeCombinatorTypes: null
                      }
                    },
                    required: ["teamsUrl"],
                    dataTypeDisplayText: "Data 7",
                    dataTypeLink: "/http/models/structures/data-7",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "NewRelicInsights1",
                title: "NewRelicInsights1",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$",
                    description:
                      "**Constraints**: *Minimum Length*: `1`, *Pattern*: `(?!^ +$)^.+$`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "name",
                    typeCombinatorTypes: null
                  },
                  type: {
                    example: "NewRelicInsights",
                    type: "string",
                    enum: ["NewRelicInsights"],
                    description: "**Default**: `NewRelicInsights`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "type",
                    typeCombinatorTypes: null
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1,
                    description: "**Constraints**: `>= 0`, `<= 1`",
                    dataTypeDisplayText: "Decimal",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "enabled",
                    typeCombinatorTypes: null
                  },
                  data: {
                    id: "Data8",
                    title: "data",
                    type: "object",
                    properties: {
                      insertKey: {
                        type: "string",
                        minLength: 1,
                        description: "**Constraints**: *Minimum Length*: `1`",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "insertKey",
                        typeCombinatorTypes: null
                      },
                      accountId: {
                        type: "number",
                        dataTypeDisplayText: "Decimal",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "accountId",
                        typeCombinatorTypes: null
                      }
                    },
                    required: ["insertKey", "accountId"],
                    dataTypeDisplayText: "Data 8",
                    dataTypeLink: "/http/models/structures/data-8",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "PagerDutyApi1",
                title: "PagerDutyApi1",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$",
                    description:
                      "**Constraints**: *Minimum Length*: `1`, *Pattern*: `(?!^ +$)^.+$`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "name",
                    typeCombinatorTypes: null
                  },
                  type: {
                    example: "PagerDutyApi",
                    type: "string",
                    enum: ["PagerDutyApi"],
                    description: "**Default**: `PagerDutyApi`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "type",
                    typeCombinatorTypes: null
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1,
                    description: "**Constraints**: `>= 0`, `<= 1`",
                    dataTypeDisplayText: "Decimal",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "enabled",
                    typeCombinatorTypes: null
                  },
                  data: {
                    id: "Data9",
                    title: "data",
                    type: "object",
                    properties: {
                      apiIntgKey: {
                        type: "string",
                        minLength: 1,
                        description: "**Constraints**: *Minimum Length*: `1`",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "apiIntgKey",
                        typeCombinatorTypes: null
                      }
                    },
                    required: ["apiIntgKey"],
                    dataTypeDisplayText: "Data 9",
                    dataTypeLink: "/http/models/structures/data-9",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "ServiceNowRest1",
                title: "ServiceNowRest1",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$",
                    description:
                      "**Constraints**: *Minimum Length*: `1`, *Pattern*: `(?!^ +$)^.+$`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "name",
                    typeCombinatorTypes: null
                  },
                  type: {
                    example: "ServiceNowRest",
                    type: "string",
                    enum: ["ServiceNowRest"],
                    description: "**Default**: `ServiceNowRest`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "type",
                    typeCombinatorTypes: null
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1,
                    description: "**Constraints**: `>= 0`, `<= 1`",
                    dataTypeDisplayText: "Decimal",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "enabled",
                    typeCombinatorTypes: null
                  },
                  data: {
                    id: "Data10",
                    title: "data",
                    type: "object",
                    properties: {
                      userName: {
                        type: "string",
                        minLength: 1,
                        description: "**Constraints**: *Minimum Length*: `1`",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "userName",
                        typeCombinatorTypes: null
                      },
                      password: {
                        type: "string",
                        minLength: 1,
                        description: "**Constraints**: *Minimum Length*: `1`",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "password",
                        typeCombinatorTypes: null
                      },
                      instanceUrl: {
                        type: "string",
                        pattern:
                          "^https://[A-Za-z0-9]+[.]{1}service-now[.]{1}com/?$",
                        description:
                          "**Constraints**: *Pattern*: `^https://[A-Za-z0-9]+[.]{1}service-now[.]{1}com/?$`",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "instanceUrl",
                        typeCombinatorTypes: null
                      },
                      issueGrouping: {
                        title: "issueGrouping",
                        example: "Events",
                        "x-enum-elements": [
                          {
                            name: "Events",
                            description: ""
                          },
                          {
                            name: "Resources",
                            description: ""
                          }
                        ],
                        type: "string",
                        enum: ["Events", "Resources"],
                        description: "**Default**: `Events`",
                        dataTypeDisplayText: "Group Issues By",
                        dataTypeLink:
                          "/http/models/enumerations/group-issues-by",
                        dataTypeMarkdown: null,
                        paramType: null,
                        typeCombinatorTypes: null
                      },
                      customTemplateFile: {
                        type: "string",
                        format: "data-url",
                        dataTypeDisplayText: "Binary",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "customTemplateFile",
                        typeCombinatorTypes: null
                      }
                    },
                    required: ["userName", "password", "instanceUrl"],
                    dataTypeDisplayText: "Data 10",
                    dataTypeLink: "/http/models/structures/data-10",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "SlackChannel1",
                title: "SlackChannel1",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$",
                    description:
                      "**Constraints**: *Minimum Length*: `1`, *Pattern*: `(?!^ +$)^.+$`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "name",
                    typeCombinatorTypes: null
                  },
                  type: {
                    example: "SlackChannel",
                    type: "string",
                    enum: ["SlackChannel"],
                    description: "**Default**: `SlackChannel`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "type",
                    typeCombinatorTypes: null
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1,
                    description: "**Constraints**: `>= 0`, `<= 1`",
                    dataTypeDisplayText: "Decimal",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "enabled",
                    typeCombinatorTypes: null
                  },
                  data: {
                    id: "Data11",
                    title: "data",
                    type: "object",
                    properties: {
                      slackUrl: {
                        type: "string",
                        pattern:
                          "^https://hooks.slack.com([/][a-zA-Z0-9#-_]+)+$",
                        description:
                          "**Constraints**: *Pattern*: `^https://hooks.slack.com([/][a-zA-Z0-9#-_]+)+$`",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "slackUrl",
                        typeCombinatorTypes: null
                      }
                    },
                    required: ["slackUrl"],
                    dataTypeDisplayText: "Data 11",
                    dataTypeLink: "/http/models/structures/data-11",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "SplunkHec1",
                title: "SplunkHec1",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$",
                    description:
                      "**Constraints**: *Minimum Length*: `1`, *Pattern*: `(?!^ +$)^.+$`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "name",
                    typeCombinatorTypes: null
                  },
                  type: {
                    example: "SplunkHec",
                    type: "string",
                    enum: ["SplunkHec"],
                    description: "**Default**: `SplunkHec`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "type",
                    typeCombinatorTypes: null
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1,
                    description: "**Constraints**: `>= 0`, `<= 1`",
                    dataTypeDisplayText: "Decimal",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "enabled",
                    typeCombinatorTypes: null
                  },
                  data: {
                    id: "Data12",
                    title: "data",
                    type: "object",
                    properties: {
                      hecToken: {
                        type: "string",
                        minLength: 1,
                        description: "**Constraints**: *Minimum Length*: `1`",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "hecToken",
                        typeCombinatorTypes: null
                      },
                      host: {
                        type: "string",
                        minLength: 1,
                        description: "**Constraints**: *Minimum Length*: `1`",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "host",
                        typeCombinatorTypes: null
                      },
                      port: {
                        type: "number",
                        minimum: 0,
                        maximum: 65536,
                        description: "**Constraints**: `>= 0`, `<= 65536`",
                        dataTypeDisplayText: "Decimal",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "port",
                        typeCombinatorTypes: null
                      },
                      eventData: {
                        id: "Event Data",
                        title: "eventData",
                        type: "object",
                        properties: {
                          index: {
                            type: "string",
                            minLength: 1,
                            description:
                              "**Constraints**: *Minimum Length*: `1`",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "index",
                            typeCombinatorTypes: null
                          },
                          source: {
                            type: "string",
                            minLength: 1,
                            description:
                              "**Constraints**: *Minimum Length*: `1`",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "source",
                            typeCombinatorTypes: null
                          }
                        },
                        required: ["index", "source"],
                        dataTypeDisplayText: "Event Data",
                        dataTypeLink: "/http/models/structures/event-data",
                        dataTypeMarkdown: null,
                        paramType: null,
                        typeCombinatorTypes: null
                      },
                      channel: {
                        type: "string",
                        minLength: 1,
                        description: "**Constraints**: *Minimum Length*: `1`",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "channel",
                        typeCombinatorTypes: null
                      },
                      ssl: {
                        type: "boolean",
                        dataTypeDisplayText: "Boolean",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "ssl",
                        typeCombinatorTypes: null
                      }
                    },
                    required: ["hecToken", "host", "port", "eventData"],
                    dataTypeDisplayText: "Data 12",
                    dataTypeLink: "/http/models/structures/data-12",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "VictorOps1",
                title: "VictorOps1",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$",
                    description:
                      "**Constraints**: *Minimum Length*: `1`, *Pattern*: `(?!^ +$)^.+$`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "name",
                    typeCombinatorTypes: null
                  },
                  type: {
                    example: "VictorOps",
                    type: "string",
                    enum: ["VictorOps"],
                    description: "**Default**: `VictorOps`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "type",
                    typeCombinatorTypes: null
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1,
                    description: "**Constraints**: `>= 0`, `<= 1`",
                    dataTypeDisplayText: "Decimal",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "enabled",
                    typeCombinatorTypes: null
                  },
                  data: {
                    id: "Data13",
                    title: "data",
                    type: "object",
                    properties: {
                      intgUrl: {
                        type: "string",
                        maxLength: 2083,
                        pattern:
                          "^https:\\/\\/alert.victorops.com\\/integrations\\/generic\\/([0-9]+)\\/alert\\/[a-zA-Z0-9-._~!$&'()*+%,;=:@]+\\/[a-zA-Z0-9-._~!$&'()*+%,;=:@]+$",
                        description:
                          "**Constraints**: *Maximum Length*: `2083`, *Pattern*: `^https:\\/\\/alert.victorops.com\\/integrations\\/generic\\/([0-9]+)\\/alert\\/[a-zA-Z0-9-._~!$&'()*+%,;=:@]+\\/[a-zA-Z0-9-._~!$&'()*+%,;=:@]+$`",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "intgUrl",
                        typeCombinatorTypes: null
                      }
                    },
                    required: ["intgUrl"],
                    dataTypeDisplayText: "Data 13",
                    dataTypeLink: "/http/models/structures/data-13",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "Webhook1",
                title: "Webhook1",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$",
                    description:
                      "**Constraints**: *Minimum Length*: `1`, *Pattern*: `(?!^ +$)^.+$`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "name",
                    typeCombinatorTypes: null
                  },
                  type: {
                    example: "Webhook",
                    type: "string",
                    enum: ["Webhook"],
                    description: "**Default**: `Webhook`",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "type",
                    typeCombinatorTypes: null
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1,
                    description: "**Constraints**: `>= 0`, `<= 1`",
                    dataTypeDisplayText: "Decimal",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "enabled",
                    typeCombinatorTypes: null
                  },
                  data: {
                    id: "Data14",
                    title: "data",
                    type: "object",
                    properties: {
                      webhookUrl: {
                        type: "string",
                        pattern: "https:\\/\\/[A-Za-z0-9\\/\\-&?_.=:]+",
                        description:
                          "**Constraints**: *Pattern*: `https:\\/\\/[A-Za-z0-9\\/\\-&?_.=:]+`",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "webhookUrl",
                        typeCombinatorTypes: null
                      }
                    },
                    required: ["webhookUrl"],
                    dataTypeDisplayText: "Data 14",
                    dataTypeLink: "/http/models/structures/data-14",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  }
                },
                required: ["name", "type", "enabled", "data"]
              }
            ],
            dataTypeMarkdown:
              "* OneOf\r\n  * [Aws S31]($m/AwsS31)\r\n  * [Cisco Spark Webhook 1]($m/CiscoSparkWebhook1)\r\n  * [Cloudwatch Eb 1]($m/CloudwatchEb1)\r\n  * [Datadog 1]($m/Datadog1)\r\n  * [Email User 1]($m/EmailUser1)\r\n  * [Gcp Pubsub 1]($m/GcpPubsub1)\r\n  * [Ibm Qradar 1]($m/IbmQradar1)\r\n  * [Jira 1]($m/Jira1)\r\n  * [Microsoft Teams 1]($m/MicrosoftTeams1)\r\n  * [New Relic Insights 1]($m/NewRelicInsights1)\r\n  * [Pager Duty Api 1]($m/PagerDutyApi1)\r\n  * [Service Now Rest 1]($m/ServiceNowRest1)\r\n  * [Slack Channel 1]($m/SlackChannel1)\r\n  * [Splunk Hec 1]($m/SplunkHec1)\r\n  * [Victor Ops 1]($m/VictorOps1)\r\n  * [Webhook 1]($m/Webhook1)\r\n",
            paramType: "Body",
            title: "body",
            typeCombinatorTypes: [
              {
                DataType: "Aws S31",
                LinkTo: "$m/AwsS31",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "Cisco Spark Webhook 1",
                LinkTo: "$m/CiscoSparkWebhook1",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "Cloudwatch Eb 1",
                LinkTo: "$m/CloudwatchEb1",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "Datadog 1",
                LinkTo: "$m/Datadog1",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "Email User 1",
                LinkTo: "$m/EmailUser1",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "Gcp Pubsub 1",
                LinkTo: "$m/GcpPubsub1",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "Ibm Qradar 1",
                LinkTo: "$m/IbmQradar1",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "Jira 1",
                LinkTo: "$m/Jira1",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "Microsoft Teams 1",
                LinkTo: "$m/MicrosoftTeams1",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "New Relic Insights 1",
                LinkTo: "$m/NewRelicInsights1",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "Pager Duty Api 1",
                LinkTo: "$m/PagerDutyApi1",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "Service Now Rest 1",
                LinkTo: "$m/ServiceNowRest1",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "Slack Channel 1",
                LinkTo: "$m/SlackChannel1",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "Splunk Hec 1",
                LinkTo: "$m/SplunkHec1",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "Victor Ops 1",
                LinkTo: "$m/VictorOps1",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "Webhook 1",
                LinkTo: "$m/Webhook1",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              }
            ]
          }
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
    required: ["args"]
  },
  formData: {
    args: {}
  }
};
