module.exports = {
  schema: {
    title: "My form",
    description: "My description",
    type: "string"
  },
  formData: ""
};

module.exports = {
  schema: {
    value: {
      oneOf: [
        {
          type: "number"
        },
        {
          type: "boolean"
        }
      ]
    }
  },
  formData: ""
};

module.exports = {
  schema: {
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
  },
  formData: {
    session: {
      offerDinner: true
    }
  }
};
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
            type: "boolean"
          },
          isAtEndpointLevel: {
            type: "boolean"
          },
          hasDiscriminator: {
            type: "boolean"
          },
          Array: {
            type: "array",
            items: {
              type: "number"
            }
          },
          "Simple oneOf Fields": {
            oneOf: [
              {
                type: "number"
              },
              {
                type: "boolean"
              }
            ]
          },
          "Simple oneOf Array": {
            oneOf: [
              {
                type: "array",
                items: {
                  type: "number"
                }
              },
              {
                type: "array",
                items: {
                  type: "boolean"
                }
              }
            ]
          },
          "Simple number array + boolean": {
            oneOf: [
              {
                type: "array",
                items: {
                  type: "number"
                }
              },
              {
                type: "boolean"
              }
            ]
          },
          "Simple boolean array + number": {
            oneOf: [
              {
                type: "array",
                items: {
                  type: "number"
                }
              },
              {
                type: "boolean"
              }
            ]
          },
          "Simple Object": {
            oneOf: [
              {
                type: "object",
                additionalProperties: {
                  type: "number"
                }
              },
              {
                type: "object",
                additionalProperties: {
                  type: "boolean"
                }
              }
            ]
          },
          "Simple Object + boolean": {
            oneOf: [
              {
                type: "object",
                additionalProperties: {
                  type: "number"
                }
              },
              {
                type: "boolean"
              }
            ]
          }
        },
        required: [
          "isPrimitiveType",
          "isAtEndpointLevel",
          "hasDiscriminator",
          "value"
        ]
      }
    },
    required: ["args"]
  },
  formData: {}
};

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
          // "Array":{
          //   "type": "array",
          //   "items": {
          //     "type": "number"
          //   }
          // },
          // "Simple oneOf Array": {
          //   "oneOf": [
          //     {
          //       "type": "array",
          //       "items": {
          //         "type": "number"
          //       }
          //     },
          //     {
          //       "type": "array",
          //       "items": {
          //         "type": "boolean"
          //       }
          //     }
          //   ]
          // },
          // "Simple boolean array + number": {
          //   "oneOf": [{
          //       "type": "array",
          //       "items": {
          //         "type": "number"
          //       }
          //     },
          //     {
          //       "type": "boolean"
          //     }
          //   ]
          // },
          // "send_oneof_inner_arrayOfMap_flag": {
          //   "oneOf": [{
          //       "type": "array",
          //       "items": {
          //         "type": "object",
          //         "additionalProperties": {
          //           "type": "number"
          //         }
          //       }
          //     },
          //     {
          //       "type": "array",
          //       "items": {
          //         "type": "object",
          //         "additionalProperties": {
          //           "type": "boolean"
          //         }
          //       }
          //     }
          //   ]
          // },
          // "send_oneof_mapOfArray": {
          //   "type": "object",
          //   "additionalProperties": {
          //     "oneOf": [
          //       {
          //         "type": "number"
          //       },
          //       {
          //         "type": "boolean"
          //       }
          //     ]
          //   }
          // },
          // "send_oneof_inner_mapOfArray": {
          //   "oneOf": [
          //     {
          //       "type": "object",
          //       "additionalProperties": {
          //         "type": "array",
          //         "items": {
          //           "type": "number"
          //         }
          //       }
          //     },
          //     {
          //       "type": "object",
          //       "additionalProperties": {
          //         "type": "array",
          //         "items": {
          //           "type": "boolean"
          //         }
          //       }
          //     }
          //   ]
          // },
          send_oneof_arrayOfMap_flag_of_mixed_arrayOfMap_flag: {
            description: "",
            type: "array",
            items: {
              type: "object",
              additionalProperties: {
                oneOf: [
                  {
                    type: "array",
                    items: {
                      type: "object",
                      additionalProperties: {
                        type: "number"
                      }
                    }
                  },
                  {
                    type: "boolean"
                  }
                ]
              }
            }
          }
        },

        required: []
      }
    },
    required: ["args"]
  },
  formData: {
    args: {
      send_oneof_arrayOfMap_flag_of_mixed_arrayOfMap_flag: [
        {
          key0: [
            {
              key0sadds: 12331321321
            },
            {
              asdasdd: 32444224424
            }
          ],
          key2: true
        }
      ]
    }
  }
};

module.exports = {
  schema: {
    value: {
      oneOf: [
        {
          type: "number"
        },
        {
          type: "boolean"
        }
      ]
    }
  },
  formData: ""
};

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
            type: "boolean"
          },
          isAtEndpointLevel: {
            type: "boolean"
          },
          hasDiscriminator: {
            type: "boolean"
          },
          nestedObject: {
            id: "nestedObject",
            title: "nestedObject",
            type: "object",
            properties: {
              nested_object_oneOf: {
                oneOf: [
                  {
                    type: "object",
                    additionalProperties: {
                      type: "array",
                      items: {
                        type: "number"
                      }
                    }
                  },
                  {
                    type: "object",
                    additionalProperties: {
                      type: "array",
                      items: {
                        type: "boolean"
                      }
                    }
                  }
                ]
              }
            }
          },
          send_oneof_arrayOfMap_flag_of_mixed_arrayOfMap_flag: {
            description: "",
            type: "array",
            items: {
              type: "object",
              additionalProperties: {
                oneOf: [
                  {
                    type: "array",
                    items: {
                      type: "object",
                      additionalProperties: {
                        type: "number"
                      }
                    }
                  },
                  {
                    type: "boolean"
                  }
                ]
              }
            }
          },
          send_oneof_inner_mapOfArray: {
            oneOf: [
              {
                type: "object",
                additionalProperties: {
                  type: "array",
                  items: {
                    type: "number"
                  }
                }
              },
              {
                type: "object",
                additionalProperties: {
                  type: "array",
                  items: {
                    type: "boolean"
                  }
                }
              }
            ]
          },
          session: {
            description: "Course session",
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
                required: ["startsAt", "endsAt", "offerDinner", "offerTeaBreak"]
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
    // session: {
    //   offerDinner: true
    // }
  }
};

module.exports = {
  // schema: {
  //   title: "Endpoint Arguments",
  //   type: "object",
  //   additionalProperties: false,
  //   properties: {
  //     args: {
  //       id: "endpoint_7C26ABBCDB1F9",
  //       title: "endpoint_7C26ABBCDB1F9",
  //       type: "object",
  //       properties: {
  //         // isPrimitiveType: {
  //         //   type: "boolean"
  //         // },
  //         // isAtEndpointLevel: {
  //         //   type: "boolean"
  //         // },
  //         // hasDiscriminator: {
  //         //   type: "boolean"
  //         // },
  //         value: {
  //           oneOf: [{
  //               type: "number"
  //             },
  //             {
  //               type: "boolean"
  //             }
  //           ]
  //         }
  //       },
  //       required: [
  //         // "isPrimitiveType",
  //         // "isAtEndpointLevel",
  //         // "hasDiscriminator",
  //         "value"
  //       ]
  //     }
  //   },
  //   required: ["args"]
  // },
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
          simpleCase: {
            id: "SimpleCase",
            title: "simpleCase",
            example: {
              scalarValue: true
            },
            type: "object",
            properties: {
              scalarValue: {
                oneOf: [
                  {
                    type: "number"
                  },
                  {
                    type: "boolean"
                  }
                ],
                dataTypeDisplayText: "OneOfScalarValue",
                paramType: null,
                title: "ScalarValue"
              }
            },
            required: ["scalarValue"],
            dataTypeDisplayText: "SimpleCase",
            dataTypeLink: "/java/models/structures/simple-case",
            paramType: "Body"
          }
        },
        required: [
          "isPrimitiveType",
          "isAtEndpointLevel",
          "hasDiscriminator",
          "simpleCase"
        ]
      }
    },
    required: ["args"]
  },
  // schema: {
  //   "title": "Endpoint Arguments",
  //   "type": "object",
  //   "additionalProperties": false,
  //   "properties": {
  //     "args": {
  //       "id": "endpoint_7C26ABBCDB1F9",
  //       "title": "endpoint_7C26ABBCDB1F9",
  //       "type": "object",
  //       "properties": {
  //         "isPrimitiveType": {
  //           "type": "boolean"
  //         },
  //         "isAtEndpointLevel": {
  //           "type": "boolean"
  //         },
  //         "hasDiscriminator": {
  //           "type": "boolean"
  //         },
  //         "value": {
  //           "description": "",
  //           "type": "array",
  //           "items": {
  //             "oneOf": [{
  //                 "type": "number"
  //               },
  //               {
  //                 "type": "boolean"
  //               }
  //             ]
  //           }
  //         }
  //       },
  //       "required": [
  //         "isPrimitiveType",
  //         "isAtEndpointLevel",
  //         "hasDiscriminator",
  //         "value"
  //       ]
  //     }
  //   },
  //   "required": [
  //     "args"
  //   ]
  // },

  formData: {
    args: {
      simpleCase: {
        scalarValue: {
          $$__case: 1,
          value: true
        }
      }
    }
  }
};

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
            paramType: "Header",
            title: "authorization",
            typeCombinatorTypes: null
          },
          body: {
            oneOf: [
              {
                id: "AlertChannels_AwsS3_Create_Schema",
                title: "AlertChannels_AwsS3_Create_Schema",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$"
                  },
                  type: {
                    example: "AwsS3",
                    type: "string",
                    enum: ["AwsS3"]
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1
                  },
                  data: {
                    id: "Data",
                    title: "Data",
                    type: "object",
                    properties: {
                      s3CrossAccountCredentials: {
                        id: "S3CrossAccountCredentials",
                        title: "S3CrossAccountCredentials",
                        type: "object",
                        properties: {
                          externalId: {
                            type: "string",
                            minLength: 1
                          },
                          roleArn: {
                            type: "string",
                            pattern:
                              "^arn:aws(-[a-zA-Z]+)?:iam:([a-zA-Z0-9-_]+)?:([0-9]{12}):([a-zA-Z0-9_-]+)([/:][a-zA-Z0-9_-]+)*$"
                          },
                          bucketArn: {
                            type: "string",
                            pattern:
                              "^arn:aws(-[a-zA-Z]+)?:s3:([a-zA-Z0-9-_]+)?:([0-9]{12})?:([a-zA-Z0-9_-]+)([/:][a-zA-Z0-9_-]+)*$"
                          }
                        },
                        required: ["externalId", "roleArn", "bucketArn"]
                      }
                    },
                    required: ["s3CrossAccountCredentials"]
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "AlertChannels_CiscoSparkWebhook_Create_Schema",
                title: "AlertChannels_CiscoSparkWebhook_Create_Schema",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$"
                  },
                  type: {
                    example: "CiscoSparkWebhook",
                    type: "string",
                    enum: ["CiscoSparkWebhook"]
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1
                  },
                  data: {
                    id: "Data1",
                    title: "Data1",
                    type: "object",
                    properties: {
                      webhook: {
                        type: "string",
                        pattern:
                          "^https://(api.ciscospark|webexapis).com/v1/webhooks/incoming([/][a-zA-Z0-9#-_]+)+$"
                      }
                    },
                    required: ["webhook"]
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "AlertChannels_CloudwatchEb_Create_Schema",
                title: "AlertChannels_CloudwatchEb_Create_Schema",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$"
                  },
                  type: {
                    example: "CloudwatchEb",
                    type: "string",
                    enum: ["CloudwatchEb"]
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1
                  },
                  data: {
                    id: "Data2",
                    title: "Data2",
                    type: "object",
                    properties: {
                      eventBusArn: {
                        type: "string",
                        pattern:
                          "^arn:aws(-[a-zA-Z]+)?:events:([a-zA-Z0-9]{1}[a-zA-Z0-9-]+[a-zA-Z0-9]{1}):([0-9]{12}):([a-zA-Z0-9_-]+)([/:][a-zA-Z0-9_-]+)?$"
                      },
                      issueGrouping: {
                        title: "Group Issues by",
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
                        enum: ["Events", "Resources"]
                      }
                    },
                    required: ["eventBusArn"]
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "AlertChannels_Datadog_Create_Schema",
                title: "AlertChannels_Datadog_Create_Schema",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$"
                  },
                  type: {
                    example: "Datadog",
                    type: "string",
                    enum: ["Datadog"]
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1
                  },
                  data: {
                    id: "Data3",
                    title: "Data3",
                    type: "object",
                    properties: {
                      datadogType: {
                        title: "Datadog Service",
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
                        enum: ["Logs Detail", "Logs Summary", "Events Summary"]
                      },
                      datadogSite: {
                        title: "Datadog Site",
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
                        enum: ["com", "eu"]
                      },
                      apiKey: {
                        type: "string",
                        minLength: 1
                      }
                    },
                    required: ["datadogType", "datadogSite", "apiKey"]
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "AlertChannels_EmailUser_Create_Schema",
                title: "AlertChannels_EmailUser_Create_Schema",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$"
                  },
                  type: {
                    example: "EmailUser",
                    type: "string",
                    enum: ["EmailUser"]
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1
                  },
                  data: {
                    id: "Data25",
                    title: "Data25",
                    type: "object",
                    properties: {
                      channelProps: {
                        id: "ChannelProps",
                        title: "ChannelProps",
                        type: "object",
                        properties: {
                          recipients: {
                            description: "a list of email addresses",
                            type: "array",
                            items: {
                              type: "object"
                            }
                          }
                        },
                        required: ["recipients"]
                      }
                    }
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "AlertChannels_GcpPubsub_Create_Schema",
                title: "AlertChannels_GcpPubsub_Create_Schema",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$"
                  },
                  type: {
                    example: "GcpPubsub",
                    type: "string",
                    enum: ["GcpPubsub"]
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1
                  },
                  data: {
                    id: "Data5",
                    title: "Data5",
                    type: "object",
                    properties: {
                      credentials: {
                        id: "Credentials",
                        title: "Credentials",
                        type: "object",
                        properties: {
                          clientId: {
                            type: "string",
                            minLength: 1
                          },
                          privateKeyId: {
                            type: "string",
                            minLength: 1
                          },
                          clientEmail: {
                            type: "string",
                            minLength: 1,
                            pattern:
                              "^[\\w!#$%&’*+/=?`{|}~^-]+(?:\\.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$"
                          },
                          privateKey: {
                            type: "string",
                            minLength: 1
                          }
                        },
                        required: [
                          "clientId",
                          "privateKeyId",
                          "clientEmail",
                          "privateKey"
                        ]
                      },
                      projectId: {
                        type: "string"
                      },
                      topicId: {
                        type: "string"
                      },
                      issueGrouping: {
                        title: "Group Issues by",
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
                        enum: ["Events", "Resources"]
                      }
                    },
                    required: ["credentials", "projectId", "topicId"]
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "AlertChannels_IbmQradar_Create_Schema",
                title: "AlertChannels_IbmQradar_Create_Schema",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$"
                  },
                  type: {
                    example: "IbmQradar",
                    type: "string",
                    enum: ["IbmQradar"]
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1
                  },
                  data: {
                    id: "Data6",
                    title: "Data6",
                    type: "object",
                    properties: {
                      qradarCommType: {
                        title: "Communication Type",
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
                        enum: ["HTTPS", "HTTPS Self Signed Cert"]
                      },
                      qradarHostUrl: {
                        type: "string",
                        minLength: 1,
                        pattern: ".+[a-zA-Z0-9]$"
                      },
                      qradarHostPort: {
                        type: "number",
                        minimum: 0,
                        maximum: 65535
                      }
                    },
                    required: ["qradarCommType", "qradarHostUrl"]
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "AlertChannels_Jira_Create_Schema",
                title: "AlertChannels_Jira_Create_Schema",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$"
                  },
                  type: {
                    example: "Jira",
                    type: "string",
                    enum: ["Jira"]
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1
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
                              "[a-zA-Z0-9]\\.(atlassian\\.net|jira\\.com)$"
                          },
                          projectId: {
                            type: "string"
                          },
                          issueType: {
                            type: "string"
                          },
                          username: {
                            type: "string"
                          },
                          apiToken: {
                            type: "string"
                          },
                          jiraType: {
                            title: "Jira Type",
                            example: "JIRA_CLOUD",
                            "x-enum-elements": [
                              {
                                name: "JIRA_CLOUD",
                                description: ""
                              }
                            ],
                            type: "string",
                            enum: ["JIRA_CLOUD"]
                          },
                          issueGrouping: {
                            title: "Group Issues by",
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
                            enum: ["Events", "Resources"]
                          },
                          customTemplateFile: {
                            type: "string",
                            format: "data-url"
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
                            pattern: "[A-Za-z0-9\\/\\-&?_.=:]+"
                          },
                          projectId: {
                            type: "string"
                          },
                          issueType: {
                            type: "string"
                          },
                          username: {
                            type: "string"
                          },
                          password: {
                            type: "string"
                          },
                          jiraType: {
                            title: "Jira Type1",
                            example: "JIRA_SERVER",
                            "x-enum-elements": [
                              {
                                name: "JIRA_SERVER",
                                description: ""
                              }
                            ],
                            type: "string",
                            enum: ["JIRA_SERVER"]
                          },
                          issueGrouping: {
                            title: "Group Issues by",
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
                            enum: ["Events", "Resources"]
                          },
                          customTemplateFile: {
                            type: "string",
                            format: "data-url"
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
                    ]
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "AlertChannels_MicrosoftTeams_Create_Schema",
                title: "AlertChannels_MicrosoftTeams_Create_Schema",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$"
                  },
                  type: {
                    example: "MicrosoftTeams",
                    type: "string",
                    enum: ["MicrosoftTeams"]
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1
                  },
                  data: {
                    id: "Data7",
                    title: "Data7",
                    type: "object",
                    properties: {
                      teamsUrl: {
                        type: "string",
                        pattern:
                          "^https://[a-zA-Z0-9-_\\.]*(outlook|webhook).office.com/webhook[a-zA-Z0-9#-_]*([/][a-zA-Z0-9#-_]+)+$"
                      }
                    },
                    required: ["teamsUrl"]
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "AlertChannels_NewRelicInsights_Create_Schema",
                title: "AlertChannels_NewRelicInsights_Create_Schema",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$"
                  },
                  type: {
                    example: "NewRelicInsights",
                    type: "string",
                    enum: ["NewRelicInsights"]
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1
                  },
                  data: {
                    id: "Data8",
                    title: "Data8",
                    type: "object",
                    properties: {
                      insertKey: {
                        type: "string",
                        minLength: 1
                      },
                      accountId: {
                        type: "number"
                      }
                    },
                    required: ["insertKey", "accountId"]
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "AlertChannels_PagerDutyApi_Create_Schema",
                title: "AlertChannels_PagerDutyApi_Create_Schema",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$"
                  },
                  type: {
                    example: "PagerDutyApi",
                    type: "string",
                    enum: ["PagerDutyApi"]
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1
                  },
                  data: {
                    id: "Data9",
                    title: "Data9",
                    type: "object",
                    properties: {
                      apiIntgKey: {
                        type: "string",
                        minLength: 1
                      }
                    },
                    required: ["apiIntgKey"]
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "AlertChannels_ServiceNowRest_Create_Schema",
                title: "AlertChannels_ServiceNowRest_Create_Schema",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$"
                  },
                  type: {
                    example: "ServiceNowRest",
                    type: "string",
                    enum: ["ServiceNowRest"]
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1
                  },
                  data: {
                    id: "Data10",
                    title: "Data10",
                    type: "object",
                    properties: {
                      userName: {
                        type: "string",
                        minLength: 1
                      },
                      password: {
                        type: "string",
                        minLength: 1
                      },
                      instanceUrl: {
                        type: "string",
                        pattern:
                          "^https://[A-Za-z0-9]+[.]{1}service-now[.]{1}com/?$"
                      },
                      issueGrouping: {
                        title: "Group Issues by",
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
                        enum: ["Events", "Resources"]
                      },
                      customTemplateFile: {
                        type: "string",
                        format: "data-url"
                      }
                    },
                    required: ["userName", "password", "instanceUrl"]
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "AlertChannels_SlackChannel_Create_Schema",
                title: "AlertChannels_SlackChannel_Create_Schema",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$"
                  },
                  type: {
                    example: "SlackChannel",
                    type: "string",
                    enum: ["SlackChannel"]
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1
                  },
                  data: {
                    id: "Data11",
                    title: "Data11",
                    type: "object",
                    properties: {
                      slackUrl: {
                        type: "string",
                        pattern:
                          "^https://hooks.slack.com([/][a-zA-Z0-9#-_]+)+$"
                      }
                    },
                    required: ["slackUrl"]
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "AlertChannels_SplunkHec_Create_Schema",
                title: "AlertChannels_SplunkHec_Create_Schema",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$"
                  },
                  type: {
                    example: "SplunkHec",
                    type: "string",
                    enum: ["SplunkHec"]
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1
                  },
                  data: {
                    id: "Data12",
                    title: "Data12",
                    type: "object",
                    properties: {
                      hecToken: {
                        type: "string",
                        minLength: 1
                      },
                      host: {
                        type: "string",
                        minLength: 1
                      },
                      port: {
                        type: "number",
                        minimum: 0,
                        maximum: 65536
                      },
                      eventData: {
                        id: "Event Data",
                        title: "Event Data",
                        type: "object",
                        properties: {
                          index: {
                            type: "string",
                            minLength: 1
                          },
                          source: {
                            type: "string",
                            minLength: 1
                          }
                        },
                        required: ["index", "source"]
                      },
                      channel: {
                        type: "string",
                        minLength: 1
                      },
                      ssl: {
                        type: "boolean"
                      }
                    },
                    required: ["hecToken", "host", "port", "eventData"]
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "AlertChannels_VictorOps_Create_Schema",
                title: "AlertChannels_VictorOps_Create_Schema",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$"
                  },
                  type: {
                    example: "VictorOps",
                    type: "string",
                    enum: ["VictorOps"]
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1
                  },
                  data: {
                    id: "Data13",
                    title: "Data13",
                    type: "object",
                    properties: {
                      intgUrl: {
                        type: "string",
                        maxLength: 2083,
                        pattern:
                          "^https:\\/\\/alert.victorops.com\\/integrations\\/generic\\/([0-9]+)\\/alert\\/[a-zA-Z0-9-._~!$&'()*+%,;=:@]+\\/[a-zA-Z0-9-._~!$&'()*+%,;=:@]+$"
                      }
                    },
                    required: ["intgUrl"]
                  }
                },
                required: ["name", "type", "enabled", "data"]
              },
              {
                id: "AlertChannels_Webhook_Create_Schema",
                title: "AlertChannels_Webhook_Create_Schema",
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    minLength: 1,
                    pattern: "(?!^ +$)^.+$"
                  },
                  type: {
                    example: "Webhook",
                    type: "string",
                    enum: ["Webhook"]
                  },
                  enabled: {
                    type: "number",
                    minimum: 0,
                    maximum: 1
                  },
                  data: {
                    id: "Data14",
                    title: "Data14",
                    type: "object",
                    properties: {
                      webhookUrl: {
                        type: "string",
                        pattern: "https:\\/\\/[A-Za-z0-9\\/\\-&?_.=:]+"
                      }
                    },
                    required: ["webhookUrl"]
                  }
                },
                required: ["name", "type", "enabled", "data"]
              }
            ],
            dataTypeDisplayText: "CreateAlertChannelsBody",
            dataTypeLink: "/java/models/containers/create-alert-channels-body",
            paramType: "Body",
            title: "body",
            typeCombinatorTypes: [
              {
                DataType: "AlertChannelsAwsS3CreateSchema",
                LinkTo: "$m/AlertChannels_AwsS3_Create_Schema",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "AlertChannelsCiscoSparkWebhookCreateSchema",
                LinkTo: "$m/AlertChannels_CiscoSparkWebhook_Create_Schema",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "AlertChannelsCloudwatchEbCreateSchema",
                LinkTo: "$m/AlertChannels_CloudwatchEb_Create_Schema",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "AlertChannelsDatadogCreateSchema",
                LinkTo: "$m/AlertChannels_Datadog_Create_Schema",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "AlertChannelsEmailUserCreateSchema",
                LinkTo: "$m/AlertChannels_EmailUser_Create_Schema",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "AlertChannelsGcpPubsubCreateSchema",
                LinkTo: "$m/AlertChannels_GcpPubsub_Create_Schema",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "AlertChannelsIbmQradarCreateSchema",
                LinkTo: "$m/AlertChannels_IbmQradar_Create_Schema",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "AlertChannelsJiraCreateSchema",
                LinkTo: "$m/AlertChannels_Jira_Create_Schema",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "AlertChannelsMicrosoftTeamsCreateSchema",
                LinkTo: "$m/AlertChannels_MicrosoftTeams_Create_Schema",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "AlertChannelsNewRelicInsightsCreateSchema",
                LinkTo: "$m/AlertChannels_NewRelicInsights_Create_Schema",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "AlertChannelsPagerDutyApiCreateSchema",
                LinkTo: "$m/AlertChannels_PagerDutyApi_Create_Schema",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "AlertChannelsServiceNowRestCreateSchema",
                LinkTo: "$m/AlertChannels_ServiceNowRest_Create_Schema",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "AlertChannelsSlackChannelCreateSchema",
                LinkTo: "$m/AlertChannels_SlackChannel_Create_Schema",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "AlertChannelsSplunkHecCreateSchema",
                LinkTo: "$m/AlertChannels_SplunkHec_Create_Schema",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "AlertChannelsVictorOpsCreateSchema",
                LinkTo: "$m/AlertChannels_VictorOps_Create_Schema",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              },
              {
                DataType: "AlertChannelsWebhookCreateSchema",
                LinkTo: "$m/AlertChannels_Webhook_Create_Schema",
                ContainsSubTypes: false,
                SubTypes: null,
                Type: "typecombinatortype"
              }
            ]
          }
        },
        required: ["Authorization", "body"]
      }
    },
    required: ["args"]
  },
  formData: {
    //   args: {
    //     Authorization: "Authorization8",
    //     body: {
    //       $$__case: 7,
    //       $$__case_of: "oneOf",
    //       value: {
    //         data: {
    //           $$__case: 0,
    //           $$__case_of: "oneOf",
    //           value: {}
    //         }
    //       }
    //     }
    //   }
  }
};
