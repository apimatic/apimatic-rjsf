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
          body: {
            id: "letter_editable",
            title: "body",
            type: "object",
            properties: {
              color: {
                description:
                  "Set this key to `true` if you would like to print in color. Set to `false` if you would like to print in black and white.",
                type: "boolean",
                dataTypeDisplayText: "boolean",
                paramType: null,
                title: "Color",
                typeCombinatorTypes: null
              },
              to: {
                description:
                  "Must either be an address ID or an inline object with correct address parameters. If an object is used, an address will be created, corrected, and standardized for free whenever possible using our US Address Verification engine (if it is a US address), and returned back with an ID. Depending on your [Print & Mail Edition](https://dashboard.lob.com/#/settings/editions), US addresses may also be run through [National Change of Address (NCOA)](https://lob.com/docs#ncoa). Non-US addresses will be standardized into uppercase only. If a US address used does not meet your accountâ€™s [US Mail strictness setting](https://dashboard.lob.com/#/settings/account), the request will fail. [Lob Guide: Verification of Mailing Addresses](https://www.lob.com/guides#mailing_addresses)",
                oneOf: [
                  {
                    type: "string",
                    pattern: "^adr_[a-zA-Z0-9]+$"
                  },
                  {
                    oneOf: [
                      {
                        id: "inline_address_us",
                        title: "inline_address_us",
                        type: "object",
                        properties: {
                          address_line1: {
                            type: "string",
                            maxLength: 64
                          },
                          address_city: {
                            type: "string",
                            maxLength: 200
                          },
                          address_state: {
                            description: "2 letter state short-name code",
                            type: "string",
                            pattern: "^[a-zA-Z]{2}$"
                          },
                          address_zip: {
                            description:
                              "Must follow the ZIP format of `12345` or ZIP+4 format of `12345-1234`.",
                            type: "string",
                            pattern: "^\\d{5}(-\\d{4})?$"
                          },
                          name: {
                            description:
                              "Either `name` or `company` is required, you may also add both. Must be no longer than 40 characters. If both `name` and `company` are provided, they will be printed on two separate lines above the rest of the address.",
                            type: "string",
                            maxLength: 40
                          },
                          company: {
                            description:
                              "Either `name` or `company` is required, you may also add both. Must be no longer than 40 characters. If both `name` and `company` are provided, they will be printed on two separate lines above the rest of the address. This field can be used for any secondary recipient information which is not part of the actual mailing address (Company Name, Department, Attention Line, etc).",
                            type: "string",
                            maxLength: 40
                          },
                          address_line2: {
                            type: "string",
                            maxLength: 64
                          },
                          description: {
                            description:
                              "An internal description that identifies this resource. Must be no longer than 255 characters.",
                            type: "string",
                            maxLength: 255
                          },
                          phone: {
                            description:
                              "Must be no longer than 40 characters.",
                            type: "string",
                            maxLength: 40
                          },
                          email: {
                            description:
                              "Must be no longer than 100 characters.",
                            type: "string",
                            maxLength: 100
                          },
                          address_country: {
                            title: "AddressCountry2",
                            example: "US",
                            "x-enum-elements": [
                              {
                                name: "US",
                                description: ""
                              }
                            ],
                            type: "string",
                            enum: ["US"]
                          },
                          metadata: {
                            id: "metadata",
                            title: "metadata",
                            description:
                              'Use metadata to store custom information for tagging and labeling back to your internal systems. Must be an object with up to 20 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters `"` and `\\`. Nested objects are not supported. See [Metadata](#section/Metadata) for more information.',
                            example: {
                              type: "object",
                              properties: {
                                customer_id: {
                                  type: "string",
                                  example: "987654"
                                },
                                campaign: {
                                  type: "string",
                                  example: "NEWYORK2015"
                                }
                              }
                            },
                            type: "object",
                            properties: {
                              metadata: {
                                type: "object"
                              }
                            },
                            maxProperties: 20
                          }
                        },
                        required: [
                          "address_line1",
                          "address_city",
                          "address_state",
                          "address_zip",
                          "name",
                          "company"
                        ]
                      },
                      {
                        id: "inline_address_intl",
                        title: "inline_address_intl",
                        type: "object",
                        properties: {
                          address_line1: {
                            type: "string",
                            maxLength: 200
                          },
                          address_city: {
                            type: "string",
                            maxLength: 200
                          },
                          address_state: {
                            type: "string",
                            maxLength: 200
                          },
                          address_zip: {
                            description: "Optional postal code.",
                            type: "string",
                            maxLength: 40
                          },
                          name: {
                            description:
                              "Either `name` or `company` is required, you may also add both. Must be no longer than 40 characters. If both `name` and `company` are provided, they will be printed on two separate lines above the rest of the address.",
                            type: "string",
                            maxLength: 40
                          },
                          company: {
                            description:
                              "Either `name` or `company` is required, you may also add both. Must be no longer than 40 characters. If both `name` and `company` are provided, they will be printed on two separate lines above the rest of the address. This field can be used for any secondary recipient information which is not part of the actual mailing address (Company Name, Department, Attention Line, etc).",
                            type: "string",
                            maxLength: 40
                          },
                          address_country: {
                            title: "country_extended",
                            description:
                              "Must be a 2 letter country short-name code (ISO 3166). Does not accept `US`, `AS`, `PR`, `FM`, `GU`, `MH`, `MP`, `PW`, or `VI`. For these addresses, please use the US verification API. Also does not accept `PS`, which is not currently supported.",
                            example: "AD",
                            "x-enum-elements": [
                              {
                                name: "AD",
                                description: ""
                              },
                              {
                                name: "AE",
                                description: ""
                              },
                              {
                                name: "AF",
                                description: ""
                              },
                              {
                                name: "AG",
                                description: ""
                              },
                              {
                                name: "AI",
                                description: ""
                              },
                              {
                                name: "AL",
                                description: ""
                              },
                              {
                                name: "AN",
                                description: ""
                              },
                              {
                                name: "AO",
                                description: ""
                              },
                              {
                                name: "AQ",
                                description: ""
                              },
                              {
                                name: "AR",
                                description: ""
                              },
                              {
                                name: "AT",
                                description: ""
                              },
                              {
                                name: "AU",
                                description: ""
                              },
                              {
                                name: "AW",
                                description: ""
                              },
                              {
                                name: "AZ",
                                description: ""
                              },
                              {
                                name: "BA",
                                description: ""
                              },
                              {
                                name: "BB",
                                description: ""
                              },
                              {
                                name: "BD",
                                description: ""
                              },
                              {
                                name: "BE",
                                description: ""
                              },
                              {
                                name: "BF",
                                description: ""
                              },
                              {
                                name: "BG",
                                description: ""
                              },
                              {
                                name: "BH",
                                description: ""
                              },
                              {
                                name: "BI",
                                description: ""
                              },
                              {
                                name: "BJ",
                                description: ""
                              },
                              {
                                name: "BM",
                                description: ""
                              },
                              {
                                name: "BN",
                                description: ""
                              },
                              {
                                name: "BO",
                                description: ""
                              },
                              {
                                name: "BQ",
                                description: ""
                              },
                              {
                                name: "BR",
                                description: ""
                              },
                              {
                                name: "BS",
                                description: ""
                              },
                              {
                                name: "BT",
                                description: ""
                              },
                              {
                                name: "BW",
                                description: ""
                              },
                              {
                                name: "BY",
                                description: ""
                              },
                              {
                                name: "BZ",
                                description: ""
                              },
                              {
                                name: "CA",
                                description: ""
                              },
                              {
                                name: "CD",
                                description: ""
                              },
                              {
                                name: "CG",
                                description: ""
                              },
                              {
                                name: "CH",
                                description: ""
                              },
                              {
                                name: "CI",
                                description: ""
                              },
                              {
                                name: "CK",
                                description: ""
                              },
                              {
                                name: "CL",
                                description: ""
                              },
                              {
                                name: "CM",
                                description: ""
                              },
                              {
                                name: "CN",
                                description: ""
                              },
                              {
                                name: "CO",
                                description: ""
                              },
                              {
                                name: "CR",
                                description: ""
                              },
                              {
                                name: "CS",
                                description: ""
                              },
                              {
                                name: "CU",
                                description: ""
                              },
                              {
                                name: "CV",
                                description: ""
                              },
                              {
                                name: "CW",
                                description: ""
                              },
                              {
                                name: "CY",
                                description: ""
                              },
                              {
                                name: "CZ",
                                description: ""
                              },
                              {
                                name: "DE",
                                description: ""
                              },
                              {
                                name: "DJ",
                                description: ""
                              },
                              {
                                name: "DK",
                                description: ""
                              },
                              {
                                name: "DM",
                                description: ""
                              },
                              {
                                name: "DO",
                                description: ""
                              },
                              {
                                name: "DZ",
                                description: ""
                              },
                              {
                                name: "EC",
                                description: ""
                              },
                              {
                                name: "EE",
                                description: ""
                              },
                              {
                                name: "EG",
                                description: ""
                              },
                              {
                                name: "EH",
                                description: ""
                              },
                              {
                                name: "ER",
                                description: ""
                              },
                              {
                                name: "ES",
                                description: ""
                              },
                              {
                                name: "ET",
                                description: ""
                              },
                              {
                                name: "FI",
                                description: ""
                              },
                              {
                                name: "FJ",
                                description: ""
                              },
                              {
                                name: "FK",
                                description: ""
                              },
                              {
                                name: "FO",
                                description: ""
                              },
                              {
                                name: "FR",
                                description: ""
                              },
                              {
                                name: "GA",
                                description: ""
                              },
                              {
                                name: "GB",
                                description: ""
                              },
                              {
                                name: "GD",
                                description: ""
                              },
                              {
                                name: "GE",
                                description: ""
                              },
                              {
                                name: "GH",
                                description: ""
                              },
                              {
                                name: "GI",
                                description: ""
                              },
                              {
                                name: "GL",
                                description: ""
                              },
                              {
                                name: "GM",
                                description: ""
                              },
                              {
                                name: "GN",
                                description: ""
                              },
                              {
                                name: "GQ",
                                description: ""
                              },
                              {
                                name: "GR",
                                description: ""
                              },
                              {
                                name: "GS",
                                description: ""
                              },
                              {
                                name: "GT",
                                description: ""
                              },
                              {
                                name: "GW",
                                description: ""
                              },
                              {
                                name: "GY",
                                description: ""
                              },
                              {
                                name: "HK",
                                description: ""
                              },
                              {
                                name: "HN",
                                description: ""
                              },
                              {
                                name: "HR",
                                description: ""
                              },
                              {
                                name: "HT",
                                description: ""
                              },
                              {
                                name: "HU",
                                description: ""
                              },
                              {
                                name: "ID",
                                description: ""
                              },
                              {
                                name: "IE",
                                description: ""
                              },
                              {
                                name: "IL",
                                description: ""
                              },
                              {
                                name: "IN",
                                description: ""
                              },
                              {
                                name: "IO",
                                description: ""
                              },
                              {
                                name: "IQ",
                                description: ""
                              },
                              {
                                name: "IR",
                                description: ""
                              },
                              {
                                name: "IS",
                                description: ""
                              },
                              {
                                name: "IT",
                                description: ""
                              },
                              {
                                name: "JM",
                                description: ""
                              },
                              {
                                name: "JO",
                                description: ""
                              },
                              {
                                name: "JP",
                                description: ""
                              },
                              {
                                name: "KE",
                                description: ""
                              },
                              {
                                name: "KG",
                                description: ""
                              },
                              {
                                name: "KH",
                                description: ""
                              },
                              {
                                name: "KI",
                                description: ""
                              },
                              {
                                name: "KM",
                                description: ""
                              },
                              {
                                name: "KN",
                                description: ""
                              },
                              {
                                name: "KP",
                                description: ""
                              },
                              {
                                name: "KR",
                                description: ""
                              },
                              {
                                name: "KW",
                                description: ""
                              },
                              {
                                name: "KY",
                                description: ""
                              },
                              {
                                name: "KZ",
                                description: ""
                              },
                              {
                                name: "LA",
                                description: ""
                              },
                              {
                                name: "LB",
                                description: ""
                              },
                              {
                                name: "LC",
                                description: ""
                              },
                              {
                                name: "LI",
                                description: ""
                              },
                              {
                                name: "LK",
                                description: ""
                              },
                              {
                                name: "LR",
                                description: ""
                              },
                              {
                                name: "LS",
                                description: ""
                              },
                              {
                                name: "LT",
                                description: ""
                              },
                              {
                                name: "LU",
                                description: ""
                              },
                              {
                                name: "LV",
                                description: ""
                              },
                              {
                                name: "LY",
                                description: ""
                              },
                              {
                                name: "MA",
                                description: ""
                              },
                              {
                                name: "MC",
                                description: ""
                              },
                              {
                                name: "MD",
                                description: ""
                              },
                              {
                                name: "ME",
                                description: ""
                              },
                              {
                                name: "MG",
                                description: ""
                              },
                              {
                                name: "MK",
                                description: ""
                              },
                              {
                                name: "ML",
                                description: ""
                              },
                              {
                                name: "MM",
                                description: ""
                              },
                              {
                                name: "MN",
                                description: ""
                              },
                              {
                                name: "MO",
                                description: ""
                              },
                              {
                                name: "MR",
                                description: ""
                              },
                              {
                                name: "MS",
                                description: ""
                              },
                              {
                                name: "MT",
                                description: ""
                              },
                              {
                                name: "MU",
                                description: ""
                              },
                              {
                                name: "MV",
                                description: ""
                              },
                              {
                                name: "MW",
                                description: ""
                              },
                              {
                                name: "MX",
                                description: ""
                              },
                              {
                                name: "MY",
                                description: ""
                              },
                              {
                                name: "MZ",
                                description: ""
                              },
                              {
                                name: "NA",
                                description: ""
                              },
                              {
                                name: "NE",
                                description: ""
                              },
                              {
                                name: "NF",
                                description: ""
                              },
                              {
                                name: "NG",
                                description: ""
                              },
                              {
                                name: "NI",
                                description: ""
                              },
                              {
                                name: "NL",
                                description: ""
                              },
                              {
                                name: "NO",
                                description: ""
                              },
                              {
                                name: "NP",
                                description: ""
                              },
                              {
                                name: "NR",
                                description: ""
                              },
                              {
                                name: "NU",
                                description: ""
                              },
                              {
                                name: "NZ",
                                description: ""
                              },
                              {
                                name: "OM",
                                description: ""
                              },
                              {
                                name: "PA",
                                description: ""
                              },
                              {
                                name: "PE",
                                description: ""
                              },
                              {
                                name: "PG",
                                description: ""
                              },
                              {
                                name: "PH",
                                description: ""
                              },
                              {
                                name: "PK",
                                description: ""
                              },
                              {
                                name: "PL",
                                description: ""
                              },
                              {
                                name: "PN",
                                description: ""
                              },
                              {
                                name: "PT",
                                description: ""
                              },
                              {
                                name: "PY",
                                description: ""
                              },
                              {
                                name: "QA",
                                description: ""
                              },
                              {
                                name: "RO",
                                description: ""
                              },
                              {
                                name: "RS",
                                description: ""
                              },
                              {
                                name: "RU",
                                description: ""
                              },
                              {
                                name: "RW",
                                description: ""
                              },
                              {
                                name: "SA",
                                description: ""
                              },
                              {
                                name: "SB",
                                description: ""
                              },
                              {
                                name: "SC",
                                description: ""
                              },
                              {
                                name: "SD",
                                description: ""
                              },
                              {
                                name: "SE",
                                description: ""
                              },
                              {
                                name: "SG",
                                description: ""
                              },
                              {
                                name: "SH",
                                description: ""
                              },
                              {
                                name: "SI",
                                description: ""
                              },
                              {
                                name: "SK",
                                description: ""
                              },
                              {
                                name: "SL",
                                description: ""
                              },
                              {
                                name: "SM",
                                description: ""
                              },
                              {
                                name: "SN",
                                description: ""
                              },
                              {
                                name: "SO",
                                description: ""
                              },
                              {
                                name: "SR",
                                description: ""
                              },
                              {
                                name: "SS",
                                description: ""
                              },
                              {
                                name: "ST",
                                description: ""
                              },
                              {
                                name: "SV",
                                description: ""
                              },
                              {
                                name: "SX",
                                description: ""
                              },
                              {
                                name: "SY",
                                description: ""
                              },
                              {
                                name: "SZ",
                                description: ""
                              },
                              {
                                name: "TC",
                                description: ""
                              },
                              {
                                name: "TD",
                                description: ""
                              },
                              {
                                name: "TG",
                                description: ""
                              },
                              {
                                name: "TH",
                                description: ""
                              },
                              {
                                name: "TJ",
                                description: ""
                              },
                              {
                                name: "TK",
                                description: ""
                              },
                              {
                                name: "TL",
                                description: ""
                              },
                              {
                                name: "TM",
                                description: ""
                              },
                              {
                                name: "TN",
                                description: ""
                              },
                              {
                                name: "TO",
                                description: ""
                              },
                              {
                                name: "TR",
                                description: ""
                              },
                              {
                                name: "TT",
                                description: ""
                              },
                              {
                                name: "TV",
                                description: ""
                              },
                              {
                                name: "TW",
                                description: ""
                              },
                              {
                                name: "TZ",
                                description: ""
                              },
                              {
                                name: "UA",
                                description: ""
                              },
                              {
                                name: "UG",
                                description: ""
                              },
                              {
                                name: "UY",
                                description: ""
                              },
                              {
                                name: "UZ",
                                description: ""
                              },
                              {
                                name: "VA",
                                description: ""
                              },
                              {
                                name: "VC",
                                description: ""
                              },
                              {
                                name: "VE",
                                description: ""
                              },
                              {
                                name: "VG",
                                description: ""
                              },
                              {
                                name: "VN",
                                description: ""
                              },
                              {
                                name: "VU",
                                description: ""
                              },
                              {
                                name: "WS",
                                description: ""
                              },
                              {
                                name: "YE",
                                description: ""
                              },
                              {
                                name: "ZA",
                                description: ""
                              },
                              {
                                name: "ZM",
                                description: ""
                              },
                              {
                                name: "ZW",
                                description: ""
                              }
                            ],
                            type: "string",
                            enum: [
                              "AD",
                              "AE",
                              "AF",
                              "AG",
                              "AI",
                              "AL",
                              "AN",
                              "AO",
                              "AQ",
                              "AR",
                              "AT",
                              "AU",
                              "AW",
                              "AZ",
                              "BA",
                              "BB",
                              "BD",
                              "BE",
                              "BF",
                              "BG",
                              "BH",
                              "BI",
                              "BJ",
                              "BM",
                              "BN",
                              "BO",
                              "BQ",
                              "BR",
                              "BS",
                              "BT",
                              "BW",
                              "BY",
                              "BZ",
                              "CA",
                              "CD",
                              "CG",
                              "CH",
                              "CI",
                              "CK",
                              "CL",
                              "CM",
                              "CN",
                              "CO",
                              "CR",
                              "CS",
                              "CU",
                              "CV",
                              "CW",
                              "CY",
                              "CZ",
                              "DE",
                              "DJ",
                              "DK",
                              "DM",
                              "DO",
                              "DZ",
                              "EC",
                              "EE",
                              "EG",
                              "EH",
                              "ER",
                              "ES",
                              "ET",
                              "FI",
                              "FJ",
                              "FK",
                              "FO",
                              "FR",
                              "GA",
                              "GB",
                              "GD",
                              "GE",
                              "GH",
                              "GI",
                              "GL",
                              "GM",
                              "GN",
                              "GQ",
                              "GR",
                              "GS",
                              "GT",
                              "GW",
                              "GY",
                              "HK",
                              "HN",
                              "HR",
                              "HT",
                              "HU",
                              "ID",
                              "IE",
                              "IL",
                              "IN",
                              "IO",
                              "IQ",
                              "IR",
                              "IS",
                              "IT",
                              "JM",
                              "JO",
                              "JP",
                              "KE",
                              "KG",
                              "KH",
                              "KI",
                              "KM",
                              "KN",
                              "KP",
                              "KR",
                              "KW",
                              "KY",
                              "KZ",
                              "LA",
                              "LB",
                              "LC",
                              "LI",
                              "LK",
                              "LR",
                              "LS",
                              "LT",
                              "LU",
                              "LV",
                              "LY",
                              "MA",
                              "MC",
                              "MD",
                              "ME",
                              "MG",
                              "MK",
                              "ML",
                              "MM",
                              "MN",
                              "MO",
                              "MR",
                              "MS",
                              "MT",
                              "MU",
                              "MV",
                              "MW",
                              "MX",
                              "MY",
                              "MZ",
                              "NA",
                              "NE",
                              "NF",
                              "NG",
                              "NI",
                              "NL",
                              "NO",
                              "NP",
                              "NR",
                              "NU",
                              "NZ",
                              "OM",
                              "PA",
                              "PE",
                              "PG",
                              "PH",
                              "PK",
                              "PL",
                              "PN",
                              "PT",
                              "PY",
                              "QA",
                              "RO",
                              "RS",
                              "RU",
                              "RW",
                              "SA",
                              "SB",
                              "SC",
                              "SD",
                              "SE",
                              "SG",
                              "SH",
                              "SI",
                              "SK",
                              "SL",
                              "SM",
                              "SN",
                              "SO",
                              "SR",
                              "SS",
                              "ST",
                              "SV",
                              "SX",
                              "SY",
                              "SZ",
                              "TC",
                              "TD",
                              "TG",
                              "TH",
                              "TJ",
                              "TK",
                              "TL",
                              "TM",
                              "TN",
                              "TO",
                              "TR",
                              "TT",
                              "TV",
                              "TW",
                              "TZ",
                              "UA",
                              "UG",
                              "UY",
                              "UZ",
                              "VA",
                              "VC",
                              "VE",
                              "VG",
                              "VN",
                              "VU",
                              "WS",
                              "YE",
                              "ZA",
                              "ZM",
                              "ZW"
                            ]
                          },
                          address_line2: {
                            type: "string",
                            maxLength: 200
                          },
                          description: {
                            description:
                              "An internal description that identifies this resource. Must be no longer than 255 characters.",
                            type: "string",
                            maxLength: 255
                          },
                          phone: {
                            description:
                              "Must be no longer than 40 characters.",
                            type: "string",
                            maxLength: 40
                          },
                          email: {
                            description:
                              "Must be no longer than 100 characters.",
                            type: "string",
                            maxLength: 100
                          },
                          metadata: {
                            id: "metadata",
                            title: "metadata",
                            description:
                              'Use metadata to store custom information for tagging and labeling back to your internal systems. Must be an object with up to 20 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters `"` and `\\`. Nested objects are not supported. See [Metadata](#section/Metadata) for more information.',
                            example: {
                              type: "object",
                              properties: {
                                customer_id: {
                                  type: "string",
                                  example: "987654"
                                },
                                campaign: {
                                  type: "string",
                                  example: "NEWYORK2015"
                                }
                              }
                            },
                            type: "object",
                            properties: {
                              metadata: {
                                type: "object"
                              }
                            },
                            maxProperties: 20
                          }
                        },
                        required: [
                          "address_line1",
                          "address_city",
                          "address_state",
                          "address_zip",
                          "name",
                          "company",
                          "address_country"
                        ]
                      }
                    ]
                  }
                ],
                dataTypeDisplayText: "LetterEditableTo",
                dataTypeLink: "/java/models/enumerations/object",
                paramType: null,
                title: "To",
                typeCombinatorTypes: [
                  {
                    DataType: "String",
                    LinkTo: null,
                    ContainsSubTypes: false,
                    SubTypes: null,
                    Type: "typecombinatortype"
                  },
                  {
                    DataType: "LetterEditableToCase1",
                    LinkTo: "$m/LetterEditableToCase1",
                    ContainsSubTypes: true,
                    SubTypes: [
                      {
                        DataType: "InlineAddressUs",
                        LinkTo: "$m/inline_address_us",
                        ContainsSubTypes: false,
                        SubTypes: null,
                        Type: "typecombinatortype"
                      },
                      {
                        DataType: "InlineAddressIntl",
                        LinkTo: "$m/inline_address_intl",
                        ContainsSubTypes: false,
                        SubTypes: null,
                        Type: "typecombinatortype"
                      }
                    ],
                    Type: "typecombinatortype"
                  }
                ]
              },
              from: {
                description:
                  "Must either be an address ID or an inline object with correct address parameters. Must be a US address unless using a `custom_envelope`. All addresses will be standardized into uppercase without being modified by verification.",
                oneOf: [
                  {
                    type: "string",
                    pattern: "^adr_[a-zA-Z0-9]+$"
                  },
                  {
                    oneOf: [
                      {
                        id: "inline_address_us",
                        title: "inline_address_us",
                        type: "object",
                        properties: {
                          address_line1: {
                            type: "string",
                            maxLength: 64
                          },
                          address_city: {
                            type: "string",
                            maxLength: 200
                          },
                          address_state: {
                            description: "2 letter state short-name code",
                            type: "string",
                            pattern: "^[a-zA-Z]{2}$"
                          },
                          address_zip: {
                            description:
                              "Must follow the ZIP format of `12345` or ZIP+4 format of `12345-1234`.",
                            type: "string",
                            pattern: "^\\d{5}(-\\d{4})?$"
                          },
                          name: {
                            description:
                              "Either `name` or `company` is required, you may also add both. Must be no longer than 40 characters. If both `name` and `company` are provided, they will be printed on two separate lines above the rest of the address.",
                            type: "string",
                            maxLength: 40
                          },
                          company: {
                            description:
                              "Either `name` or `company` is required, you may also add both. Must be no longer than 40 characters. If both `name` and `company` are provided, they will be printed on two separate lines above the rest of the address. This field can be used for any secondary recipient information which is not part of the actual mailing address (Company Name, Department, Attention Line, etc).",
                            type: "string",
                            maxLength: 40
                          },
                          address_line2: {
                            type: "string",
                            maxLength: 64
                          },
                          description: {
                            description:
                              "An internal description that identifies this resource. Must be no longer than 255 characters.",
                            type: "string",
                            maxLength: 255
                          },
                          phone: {
                            description:
                              "Must be no longer than 40 characters.",
                            type: "string",
                            maxLength: 40
                          },
                          email: {
                            description:
                              "Must be no longer than 100 characters.",
                            type: "string",
                            maxLength: 100
                          },
                          address_country: {
                            title: "AddressCountry2",
                            example: "US",
                            "x-enum-elements": [
                              {
                                name: "US",
                                description: ""
                              }
                            ],
                            type: "string",
                            enum: ["US"]
                          },
                          metadata: {
                            id: "metadata",
                            title: "metadata",
                            description:
                              'Use metadata to store custom information for tagging and labeling back to your internal systems. Must be an object with up to 20 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters `"` and `\\`. Nested objects are not supported. See [Metadata](#section/Metadata) for more information.',
                            example: {
                              type: "object",
                              properties: {
                                customer_id: {
                                  type: "string",
                                  example: "987654"
                                },
                                campaign: {
                                  type: "string",
                                  example: "NEWYORK2015"
                                }
                              }
                            },
                            type: "object",
                            properties: {
                              metadata: {
                                type: "object"
                              }
                            },
                            maxProperties: 20
                          }
                        },
                        required: [
                          "address_line1",
                          "address_city",
                          "address_state",
                          "address_zip",
                          "name",
                          "company"
                        ]
                      },
                      {
                        id: "inline_address_intl",
                        title: "inline_address_intl",
                        type: "object",
                        properties: {
                          address_line1: {
                            type: "string",
                            maxLength: 200
                          },
                          address_city: {
                            type: "string",
                            maxLength: 200
                          },
                          address_state: {
                            type: "string",
                            maxLength: 200
                          },
                          address_zip: {
                            description: "Optional postal code.",
                            type: "string",
                            maxLength: 40
                          },
                          name: {
                            description:
                              "Either `name` or `company` is required, you may also add both. Must be no longer than 40 characters. If both `name` and `company` are provided, they will be printed on two separate lines above the rest of the address.",
                            type: "string",
                            maxLength: 40
                          },
                          company: {
                            description:
                              "Either `name` or `company` is required, you may also add both. Must be no longer than 40 characters. If both `name` and `company` are provided, they will be printed on two separate lines above the rest of the address. This field can be used for any secondary recipient information which is not part of the actual mailing address (Company Name, Department, Attention Line, etc).",
                            type: "string",
                            maxLength: 40
                          },
                          address_country: {
                            title: "country_extended",
                            description:
                              "Must be a 2 letter country short-name code (ISO 3166). Does not accept `US`, `AS`, `PR`, `FM`, `GU`, `MH`, `MP`, `PW`, or `VI`. For these addresses, please use the US verification API. Also does not accept `PS`, which is not currently supported.",
                            example: "AD",
                            "x-enum-elements": [
                              {
                                name: "AD",
                                description: ""
                              },
                              {
                                name: "AE",
                                description: ""
                              },
                              {
                                name: "AF",
                                description: ""
                              },
                              {
                                name: "AG",
                                description: ""
                              },
                              {
                                name: "AI",
                                description: ""
                              },
                              {
                                name: "AL",
                                description: ""
                              },
                              {
                                name: "AN",
                                description: ""
                              },
                              {
                                name: "AO",
                                description: ""
                              },
                              {
                                name: "AQ",
                                description: ""
                              },
                              {
                                name: "AR",
                                description: ""
                              },
                              {
                                name: "AT",
                                description: ""
                              },
                              {
                                name: "AU",
                                description: ""
                              },
                              {
                                name: "AW",
                                description: ""
                              },
                              {
                                name: "AZ",
                                description: ""
                              },
                              {
                                name: "BA",
                                description: ""
                              },
                              {
                                name: "BB",
                                description: ""
                              },
                              {
                                name: "BD",
                                description: ""
                              },
                              {
                                name: "BE",
                                description: ""
                              },
                              {
                                name: "BF",
                                description: ""
                              },
                              {
                                name: "BG",
                                description: ""
                              },
                              {
                                name: "BH",
                                description: ""
                              },
                              {
                                name: "BI",
                                description: ""
                              },
                              {
                                name: "BJ",
                                description: ""
                              },
                              {
                                name: "BM",
                                description: ""
                              },
                              {
                                name: "BN",
                                description: ""
                              },
                              {
                                name: "BO",
                                description: ""
                              },
                              {
                                name: "BQ",
                                description: ""
                              },
                              {
                                name: "BR",
                                description: ""
                              },
                              {
                                name: "BS",
                                description: ""
                              },
                              {
                                name: "BT",
                                description: ""
                              },
                              {
                                name: "BW",
                                description: ""
                              },
                              {
                                name: "BY",
                                description: ""
                              },
                              {
                                name: "BZ",
                                description: ""
                              },
                              {
                                name: "CA",
                                description: ""
                              },
                              {
                                name: "CD",
                                description: ""
                              },
                              {
                                name: "CG",
                                description: ""
                              },
                              {
                                name: "CH",
                                description: ""
                              },
                              {
                                name: "CI",
                                description: ""
                              },
                              {
                                name: "CK",
                                description: ""
                              },
                              {
                                name: "CL",
                                description: ""
                              },
                              {
                                name: "CM",
                                description: ""
                              },
                              {
                                name: "CN",
                                description: ""
                              },
                              {
                                name: "CO",
                                description: ""
                              },
                              {
                                name: "CR",
                                description: ""
                              },
                              {
                                name: "CS",
                                description: ""
                              },
                              {
                                name: "CU",
                                description: ""
                              },
                              {
                                name: "CV",
                                description: ""
                              },
                              {
                                name: "CW",
                                description: ""
                              },
                              {
                                name: "CY",
                                description: ""
                              },
                              {
                                name: "CZ",
                                description: ""
                              },
                              {
                                name: "DE",
                                description: ""
                              },
                              {
                                name: "DJ",
                                description: ""
                              },
                              {
                                name: "DK",
                                description: ""
                              },
                              {
                                name: "DM",
                                description: ""
                              },
                              {
                                name: "DO",
                                description: ""
                              },
                              {
                                name: "DZ",
                                description: ""
                              },
                              {
                                name: "EC",
                                description: ""
                              },
                              {
                                name: "EE",
                                description: ""
                              },
                              {
                                name: "EG",
                                description: ""
                              },
                              {
                                name: "EH",
                                description: ""
                              },
                              {
                                name: "ER",
                                description: ""
                              },
                              {
                                name: "ES",
                                description: ""
                              },
                              {
                                name: "ET",
                                description: ""
                              },
                              {
                                name: "FI",
                                description: ""
                              },
                              {
                                name: "FJ",
                                description: ""
                              },
                              {
                                name: "FK",
                                description: ""
                              },
                              {
                                name: "FO",
                                description: ""
                              },
                              {
                                name: "FR",
                                description: ""
                              },
                              {
                                name: "GA",
                                description: ""
                              },
                              {
                                name: "GB",
                                description: ""
                              },
                              {
                                name: "GD",
                                description: ""
                              },
                              {
                                name: "GE",
                                description: ""
                              },
                              {
                                name: "GH",
                                description: ""
                              },
                              {
                                name: "GI",
                                description: ""
                              },
                              {
                                name: "GL",
                                description: ""
                              },
                              {
                                name: "GM",
                                description: ""
                              },
                              {
                                name: "GN",
                                description: ""
                              },
                              {
                                name: "GQ",
                                description: ""
                              },
                              {
                                name: "GR",
                                description: ""
                              },
                              {
                                name: "GS",
                                description: ""
                              },
                              {
                                name: "GT",
                                description: ""
                              },
                              {
                                name: "GW",
                                description: ""
                              },
                              {
                                name: "GY",
                                description: ""
                              },
                              {
                                name: "HK",
                                description: ""
                              },
                              {
                                name: "HN",
                                description: ""
                              },
                              {
                                name: "HR",
                                description: ""
                              },
                              {
                                name: "HT",
                                description: ""
                              },
                              {
                                name: "HU",
                                description: ""
                              },
                              {
                                name: "ID",
                                description: ""
                              },
                              {
                                name: "IE",
                                description: ""
                              },
                              {
                                name: "IL",
                                description: ""
                              },
                              {
                                name: "IN",
                                description: ""
                              },
                              {
                                name: "IO",
                                description: ""
                              },
                              {
                                name: "IQ",
                                description: ""
                              },
                              {
                                name: "IR",
                                description: ""
                              },
                              {
                                name: "IS",
                                description: ""
                              },
                              {
                                name: "IT",
                                description: ""
                              },
                              {
                                name: "JM",
                                description: ""
                              },
                              {
                                name: "JO",
                                description: ""
                              },
                              {
                                name: "JP",
                                description: ""
                              },
                              {
                                name: "KE",
                                description: ""
                              },
                              {
                                name: "KG",
                                description: ""
                              },
                              {
                                name: "KH",
                                description: ""
                              },
                              {
                                name: "KI",
                                description: ""
                              },
                              {
                                name: "KM",
                                description: ""
                              },
                              {
                                name: "KN",
                                description: ""
                              },
                              {
                                name: "KP",
                                description: ""
                              },
                              {
                                name: "KR",
                                description: ""
                              },
                              {
                                name: "KW",
                                description: ""
                              },
                              {
                                name: "KY",
                                description: ""
                              },
                              {
                                name: "KZ",
                                description: ""
                              },
                              {
                                name: "LA",
                                description: ""
                              },
                              {
                                name: "LB",
                                description: ""
                              },
                              {
                                name: "LC",
                                description: ""
                              },
                              {
                                name: "LI",
                                description: ""
                              },
                              {
                                name: "LK",
                                description: ""
                              },
                              {
                                name: "LR",
                                description: ""
                              },
                              {
                                name: "LS",
                                description: ""
                              },
                              {
                                name: "LT",
                                description: ""
                              },
                              {
                                name: "LU",
                                description: ""
                              },
                              {
                                name: "LV",
                                description: ""
                              },
                              {
                                name: "LY",
                                description: ""
                              },
                              {
                                name: "MA",
                                description: ""
                              },
                              {
                                name: "MC",
                                description: ""
                              },
                              {
                                name: "MD",
                                description: ""
                              },
                              {
                                name: "ME",
                                description: ""
                              },
                              {
                                name: "MG",
                                description: ""
                              },
                              {
                                name: "MK",
                                description: ""
                              },
                              {
                                name: "ML",
                                description: ""
                              },
                              {
                                name: "MM",
                                description: ""
                              },
                              {
                                name: "MN",
                                description: ""
                              },
                              {
                                name: "MO",
                                description: ""
                              },
                              {
                                name: "MR",
                                description: ""
                              },
                              {
                                name: "MS",
                                description: ""
                              },
                              {
                                name: "MT",
                                description: ""
                              },
                              {
                                name: "MU",
                                description: ""
                              },
                              {
                                name: "MV",
                                description: ""
                              },
                              {
                                name: "MW",
                                description: ""
                              },
                              {
                                name: "MX",
                                description: ""
                              },
                              {
                                name: "MY",
                                description: ""
                              },
                              {
                                name: "MZ",
                                description: ""
                              },
                              {
                                name: "NA",
                                description: ""
                              },
                              {
                                name: "NE",
                                description: ""
                              },
                              {
                                name: "NF",
                                description: ""
                              },
                              {
                                name: "NG",
                                description: ""
                              },
                              {
                                name: "NI",
                                description: ""
                              },
                              {
                                name: "NL",
                                description: ""
                              },
                              {
                                name: "NO",
                                description: ""
                              },
                              {
                                name: "NP",
                                description: ""
                              },
                              {
                                name: "NR",
                                description: ""
                              },
                              {
                                name: "NU",
                                description: ""
                              },
                              {
                                name: "NZ",
                                description: ""
                              },
                              {
                                name: "OM",
                                description: ""
                              },
                              {
                                name: "PA",
                                description: ""
                              },
                              {
                                name: "PE",
                                description: ""
                              },
                              {
                                name: "PG",
                                description: ""
                              },
                              {
                                name: "PH",
                                description: ""
                              },
                              {
                                name: "PK",
                                description: ""
                              },
                              {
                                name: "PL",
                                description: ""
                              },
                              {
                                name: "PN",
                                description: ""
                              },
                              {
                                name: "PT",
                                description: ""
                              },
                              {
                                name: "PY",
                                description: ""
                              },
                              {
                                name: "QA",
                                description: ""
                              },
                              {
                                name: "RO",
                                description: ""
                              },
                              {
                                name: "RS",
                                description: ""
                              },
                              {
                                name: "RU",
                                description: ""
                              },
                              {
                                name: "RW",
                                description: ""
                              },
                              {
                                name: "SA",
                                description: ""
                              },
                              {
                                name: "SB",
                                description: ""
                              },
                              {
                                name: "SC",
                                description: ""
                              },
                              {
                                name: "SD",
                                description: ""
                              },
                              {
                                name: "SE",
                                description: ""
                              },
                              {
                                name: "SG",
                                description: ""
                              },
                              {
                                name: "SH",
                                description: ""
                              },
                              {
                                name: "SI",
                                description: ""
                              },
                              {
                                name: "SK",
                                description: ""
                              },
                              {
                                name: "SL",
                                description: ""
                              },
                              {
                                name: "SM",
                                description: ""
                              },
                              {
                                name: "SN",
                                description: ""
                              },
                              {
                                name: "SO",
                                description: ""
                              },
                              {
                                name: "SR",
                                description: ""
                              },
                              {
                                name: "SS",
                                description: ""
                              },
                              {
                                name: "ST",
                                description: ""
                              },
                              {
                                name: "SV",
                                description: ""
                              },
                              {
                                name: "SX",
                                description: ""
                              },
                              {
                                name: "SY",
                                description: ""
                              },
                              {
                                name: "SZ",
                                description: ""
                              },
                              {
                                name: "TC",
                                description: ""
                              },
                              {
                                name: "TD",
                                description: ""
                              },
                              {
                                name: "TG",
                                description: ""
                              },
                              {
                                name: "TH",
                                description: ""
                              },
                              {
                                name: "TJ",
                                description: ""
                              },
                              {
                                name: "TK",
                                description: ""
                              },
                              {
                                name: "TL",
                                description: ""
                              },
                              {
                                name: "TM",
                                description: ""
                              },
                              {
                                name: "TN",
                                description: ""
                              },
                              {
                                name: "TO",
                                description: ""
                              },
                              {
                                name: "TR",
                                description: ""
                              },
                              {
                                name: "TT",
                                description: ""
                              },
                              {
                                name: "TV",
                                description: ""
                              },
                              {
                                name: "TW",
                                description: ""
                              },
                              {
                                name: "TZ",
                                description: ""
                              },
                              {
                                name: "UA",
                                description: ""
                              },
                              {
                                name: "UG",
                                description: ""
                              },
                              {
                                name: "UY",
                                description: ""
                              },
                              {
                                name: "UZ",
                                description: ""
                              },
                              {
                                name: "VA",
                                description: ""
                              },
                              {
                                name: "VC",
                                description: ""
                              },
                              {
                                name: "VE",
                                description: ""
                              },
                              {
                                name: "VG",
                                description: ""
                              },
                              {
                                name: "VN",
                                description: ""
                              },
                              {
                                name: "VU",
                                description: ""
                              },
                              {
                                name: "WS",
                                description: ""
                              },
                              {
                                name: "YE",
                                description: ""
                              },
                              {
                                name: "ZA",
                                description: ""
                              },
                              {
                                name: "ZM",
                                description: ""
                              },
                              {
                                name: "ZW",
                                description: ""
                              }
                            ],
                            type: "string",
                            enum: [
                              "AD",
                              "AE",
                              "AF",
                              "AG",
                              "AI",
                              "AL",
                              "AN",
                              "AO",
                              "AQ",
                              "AR",
                              "AT",
                              "AU",
                              "AW",
                              "AZ",
                              "BA",
                              "BB",
                              "BD",
                              "BE",
                              "BF",
                              "BG",
                              "BH",
                              "BI",
                              "BJ",
                              "BM",
                              "BN",
                              "BO",
                              "BQ",
                              "BR",
                              "BS",
                              "BT",
                              "BW",
                              "BY",
                              "BZ",
                              "CA",
                              "CD",
                              "CG",
                              "CH",
                              "CI",
                              "CK",
                              "CL",
                              "CM",
                              "CN",
                              "CO",
                              "CR",
                              "CS",
                              "CU",
                              "CV",
                              "CW",
                              "CY",
                              "CZ",
                              "DE",
                              "DJ",
                              "DK",
                              "DM",
                              "DO",
                              "DZ",
                              "EC",
                              "EE",
                              "EG",
                              "EH",
                              "ER",
                              "ES",
                              "ET",
                              "FI",
                              "FJ",
                              "FK",
                              "FO",
                              "FR",
                              "GA",
                              "GB",
                              "GD",
                              "GE",
                              "GH",
                              "GI",
                              "GL",
                              "GM",
                              "GN",
                              "GQ",
                              "GR",
                              "GS",
                              "GT",
                              "GW",
                              "GY",
                              "HK",
                              "HN",
                              "HR",
                              "HT",
                              "HU",
                              "ID",
                              "IE",
                              "IL",
                              "IN",
                              "IO",
                              "IQ",
                              "IR",
                              "IS",
                              "IT",
                              "JM",
                              "JO",
                              "JP",
                              "KE",
                              "KG",
                              "KH",
                              "KI",
                              "KM",
                              "KN",
                              "KP",
                              "KR",
                              "KW",
                              "KY",
                              "KZ",
                              "LA",
                              "LB",
                              "LC",
                              "LI",
                              "LK",
                              "LR",
                              "LS",
                              "LT",
                              "LU",
                              "LV",
                              "LY",
                              "MA",
                              "MC",
                              "MD",
                              "ME",
                              "MG",
                              "MK",
                              "ML",
                              "MM",
                              "MN",
                              "MO",
                              "MR",
                              "MS",
                              "MT",
                              "MU",
                              "MV",
                              "MW",
                              "MX",
                              "MY",
                              "MZ",
                              "NA",
                              "NE",
                              "NF",
                              "NG",
                              "NI",
                              "NL",
                              "NO",
                              "NP",
                              "NR",
                              "NU",
                              "NZ",
                              "OM",
                              "PA",
                              "PE",
                              "PG",
                              "PH",
                              "PK",
                              "PL",
                              "PN",
                              "PT",
                              "PY",
                              "QA",
                              "RO",
                              "RS",
                              "RU",
                              "RW",
                              "SA",
                              "SB",
                              "SC",
                              "SD",
                              "SE",
                              "SG",
                              "SH",
                              "SI",
                              "SK",
                              "SL",
                              "SM",
                              "SN",
                              "SO",
                              "SR",
                              "SS",
                              "ST",
                              "SV",
                              "SX",
                              "SY",
                              "SZ",
                              "TC",
                              "TD",
                              "TG",
                              "TH",
                              "TJ",
                              "TK",
                              "TL",
                              "TM",
                              "TN",
                              "TO",
                              "TR",
                              "TT",
                              "TV",
                              "TW",
                              "TZ",
                              "UA",
                              "UG",
                              "UY",
                              "UZ",
                              "VA",
                              "VC",
                              "VE",
                              "VG",
                              "VN",
                              "VU",
                              "WS",
                              "YE",
                              "ZA",
                              "ZM",
                              "ZW"
                            ]
                          },
                          address_line2: {
                            type: "string",
                            maxLength: 200
                          },
                          description: {
                            description:
                              "An internal description that identifies this resource. Must be no longer than 255 characters.",
                            type: "string",
                            maxLength: 255
                          },
                          phone: {
                            description:
                              "Must be no longer than 40 characters.",
                            type: "string",
                            maxLength: 40
                          },
                          email: {
                            description:
                              "Must be no longer than 100 characters.",
                            type: "string",
                            maxLength: 100
                          },
                          metadata: {
                            id: "metadata",
                            title: "metadata",
                            description:
                              'Use metadata to store custom information for tagging and labeling back to your internal systems. Must be an object with up to 20 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters `"` and `\\`. Nested objects are not supported. See [Metadata](#section/Metadata) for more information.',
                            example: {
                              type: "object",
                              properties: {
                                customer_id: {
                                  type: "string",
                                  example: "987654"
                                },
                                campaign: {
                                  type: "string",
                                  example: "NEWYORK2015"
                                }
                              }
                            },
                            type: "object",
                            properties: {
                              metadata: {
                                type: "object"
                              }
                            },
                            maxProperties: 20
                          }
                        },
                        required: [
                          "address_line1",
                          "address_city",
                          "address_state",
                          "address_zip",
                          "name",
                          "company",
                          "address_country"
                        ]
                      }
                    ]
                  }
                ],
                dataTypeDisplayText: "LetterEditableFrom",
                dataTypeLink: "/java/models/enumerations/object",
                paramType: null,
                title: "From",
                typeCombinatorTypes: [
                  {
                    DataType: "String",
                    LinkTo: null,
                    ContainsSubTypes: false,
                    SubTypes: null,
                    Type: "typecombinatortype"
                  },
                  {
                    DataType: "LetterEditableFromCase1",
                    LinkTo: "$m/LetterEditableFromCase1",
                    ContainsSubTypes: true,
                    SubTypes: [
                      {
                        DataType: "InlineAddressUs",
                        LinkTo: "$m/inline_address_us",
                        ContainsSubTypes: false,
                        SubTypes: null,
                        Type: "typecombinatortype"
                      },
                      {
                        DataType: "InlineAddressIntl",
                        LinkTo: "$m/inline_address_intl",
                        ContainsSubTypes: false,
                        SubTypes: null,
                        Type: "typecombinatortype"
                      }
                    ],
                    Type: "typecombinatortype"
                  }
                ]
              },
              file: {
                description:
                  'Notes:\n- HTML merge variables should not include delimiting whitespace.\n- All pages of a supplied PDF file must be sized at 8.5"x11", while supplied HTML will be rendered and trimmed to as many 8.5"x11" pages as necessary.\n- For design specifications, please see our [PDF](https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_template.pdf) and [HTML](#section/HTML-Examples) templates.\n- If a `custom_envelope` is used, follow [this template](https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_custom_envelope.pdf).\n- For domestic destinations, the file limit is 60 pages single-sided or 120 pages double-sided. For international destinations, the file limit is 6 pages single-sided or 12 pages double-sided. PDFs that surpass the file limit will error, while HTML that renders more pages than the file limit will be trimmed.\n- Any letters over 6 pages single-sided or 12 pages double-sided will be placed in a [flat envelope](https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_flat_template.pdf) instead of the standard double window envelope.\n\nSee [pricing](https://lob.com/pricing/print-mail#compare) for extra costs incurred.',
                oneOf: [
                  {
                    type: "string",
                    maxLength: 10000,
                    pattern: "<"
                  },
                  {
                    type: "string",
                    pattern: "^tmpl_[a-zA-Z0-9]+$"
                  },
                  {
                    type: "string",
                    pattern:
                      "^https://[-a-zA-Z0-9@:%._+~#=/]{1,256}.(html?|pdf|png|jpg)$"
                  },
                  {
                    type: "string",
                    pattern:
                      "^(?!https://)[a-zA-Z0-9@:%._+~#=/]{1,256}.(html?|pdf)$"
                  }
                ],
                dataTypeDisplayText: "LetterEditableFile",
                dataTypeLink: "/java/models/enumerations/object",
                paramType: null,
                title: "File",
                typeCombinatorTypes: [
                  {
                    DataType: "String",
                    LinkTo: null,
                    ContainsSubTypes: false,
                    SubTypes: null,
                    Type: "typecombinatortype"
                  },
                  {
                    DataType: "String",
                    LinkTo: null,
                    ContainsSubTypes: false,
                    SubTypes: null,
                    Type: "typecombinatortype"
                  },
                  {
                    DataType: "String",
                    LinkTo: null,
                    ContainsSubTypes: false,
                    SubTypes: null,
                    Type: "typecombinatortype"
                  },
                  {
                    DataType: "String",
                    LinkTo: null,
                    ContainsSubTypes: false,
                    SubTypes: null,
                    Type: "typecombinatortype"
                  }
                ]
              },
              description: {
                description:
                  "An internal description that identifies this resource. Must be no longer than 255 characters.<br>**Constraints**: *Maximum Length*: `255`",
                type: "string",
                maxLength: 255,
                dataTypeDisplayText: "String",
                paramType: null,
                title: "Description",
                typeCombinatorTypes: null
              },
              metadata: {
                id: "metadata",
                title: "Metadata",
                description:
                  'Use metadata to store custom information for tagging and labeling back to your internal systems. Must be an object with up to 20 key-value pairs. Keys must be at most 40 characters and values must be at most 500 characters. Neither can contain the characters `"` and `\\`. Nested objects are not supported. See [Metadata](#section/Metadata) for more information.',
                example: {
                  type: "object",
                  properties: {
                    customer_id: {
                      type: "string",
                      example: "987654"
                    },
                    campaign: {
                      type: "string",
                      example: "NEWYORK2015"
                    }
                  }
                },
                type: "object",
                properties: {
                  metadata: {
                    type: "object",
                    dataTypeDisplayText: "Object",
                    dataTypeLink: "/java/models/enumerations/object",
                    paramType: null,
                    title: "Metadata",
                    typeCombinatorTypes: null
                  }
                },
                maxProperties: 20,
                dataTypeDisplayText: "Metadata",
                dataTypeLink: "/java/models/structures/metadata",
                paramType: null,
                typeCombinatorTypes: null
              },
              merge_variables: {
                description:
                  'You can input a merge variable payload object to your template to render dynamic content. For example, if you have a template like: `{{variable_name}}`, pass in `{"variable_name": "Harry"}` to render `Harry`. `merge_variables` must be an object. Any type of value is accepted as long as the object is valid JSON; you can use `strings`, `numbers`, `booleans`, `arrays`, `objects`, or `null`. The max length of the object is 25,000 characters. If you call `JSON.stringify` on your object, it can be no longer than 25,000 characters. Your variable names cannot contain any whitespace or any of the following special characters: `!`, `"`, `#`, `%`, `&`, `\'`, `(`, `)`, `*`, `+`, `,`, `/`, `;`, `<`, `=`, `>`, `@`, `[`, `\\`, `]`, `^`, `` ` ``, `{`, `|`, `}`, `~`. More instructions can be found in [our guide to using html and merge variables](https://lob.com/resources/guides/general/using-html-and-merge-variables). Depending on your [Merge Variable strictness](https://dashboard.lob.com/#/settings/account) setting, if you define variables in your HTML but do not pass them here, you will either receive an error or the variable will render as an empty string.',
                type: "object",
                dataTypeDisplayText: "Object",
                dataTypeLink: "/java/models/enumerations/object",
                paramType: null,
                title: "MergeVariables",
                typeCombinatorTypes: null
              },
              send_date: {
                description:
                  "A timestamp in ISO 8601 format which specifies a date after the current time and up to 180 days in the future to send the letter off for production. Setting a send date overrides the default [cancellation window](#section/Cancellation-Windows) applied to the mailpiece. Until the `send_date` has passed, the mailpiece can be canceled. If a date in the format `2017-11-01` is passed, it will evaluate to midnight UTC of that date (`2017-11-01T00:00:00.000Z`). If a datetime is passed, that exact time will be used. A `send_date` passed with no time zone will default to UTC, while a `send_date` passed with a time zone will be converted to UTC.",
                anyOf: [
                  {
                    type: "string",
                    format: "date-time"
                  },
                  {
                    type: "string",
                    format: "date"
                  }
                ],
                dataTypeDisplayText: "LetterEditableSendDate",
                dataTypeLink: "/java/models/enumerations/object",
                paramType: null,
                title: "SendDate",
                typeCombinatorTypes: [
                  {
                    DataType: "LocalDateTime",
                    LinkTo: null,
                    ContainsSubTypes: false,
                    SubTypes: null,
                    Type: "typecombinatortype"
                  },
                  {
                    DataType: "LocalDate",
                    LinkTo: null,
                    ContainsSubTypes: false,
                    SubTypes: null,
                    Type: "typecombinatortype"
                  }
                ]
              },
              mail_type: {
                title: "MailType",
                description:
                  "A string designating the mail postage type:\n* `usps_first_class` - (default)\n* `usps_standard` - a [cheaper option](https://lob.com/pricing/print-mail#compare) which is\nless predictable and takes longer to deliver. `usps_standard` cannot be used with `4x6`\npostcards or for any postcards sent outside of the United States.<br>**Default**: `MailTypeEnum.USPS_FIRST_CLASS`",
                example: "usps_first_class",
                "x-enum-elements": [
                  {
                    name: "usps_first_class",
                    description: ""
                  },
                  {
                    name: "usps_standard",
                    description: ""
                  }
                ],
                type: "string",
                enum: ["usps_first_class", "usps_standard"],
                dataTypeDisplayText: "MailTypeEnum",
                dataTypeLink: "/java/models/enumerations/mail-type",
                paramType: null,
                typeCombinatorTypes: null
              },
              double_sided: {
                description:
                  "Set this attribute to `true` for double sided printing, or `false` for for single sided printing. Defaults to `true`.<br>**Default**: `true`",
                type: "boolean",
                default: true,
                dataTypeDisplayText: "Boolean",
                paramType: null,
                title: "DoubleSided",
                typeCombinatorTypes: null
              },
              address_placement: {
                title: "AddressPlacement",
                description:
                  "Specifies the location of the address information that will show through the double-window envelope. To see how this will impact your letter design, view our letter template.\n  * `top_first_page` - (default) print address information at the top of your provided first page\n  * `insert_blank_page` - insert a blank address page at the beginning of your file (you will be charged for the extra page)\n  * `bottom_first_page_center` - **(deprecation planned within a few months)** print address information at the bottom center of your provided first page\n  * `bottom_first_page` - print address information at the bottom of your provided first page<br>**Default**: `AddressPlacementEnum.TOP_FIRST_PAGE`",
                example: "top_first_page",
                "x-enum-elements": [
                  {
                    name: "top_first_page",
                    description: ""
                  },
                  {
                    name: "insert_blank_page",
                    description: ""
                  },
                  {
                    name: "bottom_first_page_center",
                    description: ""
                  },
                  {
                    name: "bottom_first_page",
                    description: ""
                  }
                ],
                type: "string",
                enum: [
                  "top_first_page",
                  "insert_blank_page",
                  "bottom_first_page_center",
                  "bottom_first_page"
                ],
                dataTypeDisplayText: "AddressPlacementEnum",
                dataTypeLink: "/java/models/enumerations/address-placement",
                paramType: null,
                typeCombinatorTypes: null
              },
              return_envelope: {
                description:
                  "Indicates if a return envelope is requested for the letter. The value corresponding to this field is by default a boolean. But if the account is signed up for custom return envelopes, the value is of type string and is `no_9_single_window` for a standard return envelope and a custom `return_envelope_id` for non-standard return envelopes.\n\nTo include a return envelope with your letter, set to `true` and specify the `perforated_page`. See [pricing](https://www.lob.com/pricing/print-mail#compare) for extra costs incurred.",
                oneOf: [
                  {
                    type: "boolean"
                  },
                  {
                    type: "string"
                  }
                ],
                dataTypeDisplayText: "LetterEditableReturnEnvelope",
                dataTypeLink: "/java/models/enumerations/object",
                paramType: null,
                title: "ReturnEnvelope",
                typeCombinatorTypes: [
                  {
                    DataType: "boolean",
                    LinkTo: null,
                    ContainsSubTypes: false,
                    SubTypes: null,
                    Type: "typecombinatortype"
                  },
                  {
                    DataType: "String",
                    LinkTo: null,
                    ContainsSubTypes: false,
                    SubTypes: null,
                    Type: "typecombinatortype"
                  }
                ]
              },
              perforated_page: {
                description:
                  "Required if `return_envelope` is `true`. The number of the page that should be perforated for use with the return envelope. Must be greater than or equal to `1`. The blank page added by `address_placement=insert_blank_page` will be ignored when considering the perforated page number. To see how perforation will impact your letter design, view our [perforation guide](https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_perf_template.pdf).",
                type: "integer",
                dataTypeDisplayText: "Integer",
                paramType: null,
                title: "PerforatedPage",
                typeCombinatorTypes: null
              },
              custom_envelope: {
                id: "CustomEnvelope",
                title: "CustomEnvelope",
                description:
                  "A nested custom envelope object containing more information about the custom envelope used or `null` if a custom envelope was not used.\n\nAccepts an envelope ID for any customized envelope with available inventory. If no inventory is available for the specified ID, the letter will not be sent, and an error will be returned. If the letter has more than 6 sheets, it will be sent in a blank flat envelope. Custom envelopes may be created and ordered from the dashboard. This feature is exclusive to certain customers. Upgrade to the appropriate [Print & Mail Edition](https://dashboard.lob.com/#/settings/editions) to gain access.",
                type: "object",
                properties: {
                  id: {
                    description:
                      "The unique identifier of the custom envelope used.<br>**Constraints**: *Maximum Length*: `40`",
                    type: "string",
                    maxLength: 40,
                    dataTypeDisplayText: "String",
                    paramType: null,
                    title: "Id",
                    typeCombinatorTypes: null
                  },
                  url: {
                    description: "The url of the envelope asset used.",
                    type: "string",
                    dataTypeDisplayText: "String",
                    paramType: null,
                    title: "Url",
                    typeCombinatorTypes: null
                  },
                  object: {
                    title: "Object",
                    example: "envelope",
                    "x-enum-elements": [
                      {
                        name: "envelope",
                        description: ""
                      }
                    ],
                    type: "string",
                    enum: ["envelope"],
                    dataTypeDisplayText: "Object7Enum",
                    dataTypeLink: "/java/models/enumerations/object-7",
                    paramType: null,
                    typeCombinatorTypes: null
                  }
                },
                required: ["id", "url", "object"],
                dataTypeDisplayText: "CustomEnvelope",
                dataTypeLink: "/java/models/structures/custom-envelope",
                paramType: null,
                typeCombinatorTypes: null
              },
              extra_service: {
                title: "ExtraService",
                description:
                  "Add an extra service to your letter. See [pricing](https://www.lob.com/pricing/print-mail#compare) for extra costs incurred.\n  * `certified` - track and confirm delivery for domestic destinations. An extra sheet (1 PDF page single-sided or 2 PDF pages double-sided) is added to the beginning of your letter for address and barcode information. See here for templates: [#10 envelope](https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_certified_template.pdf) and [flat envelope](https://s3-us-west-2.amazonaws.com/public.lob.com/assets/templates/letter_certified_flat_template.pdf) (used for letters over 6 pages single-sided or 12 pages double-sided). You will not be charged for this extra sheet.\n  * `certified_return_receipt` - request an electronic copy of the recipient's signature to prove delivery of your certified letter\n  * `registered` - provides tracking and confirmation for international addresses",
                example: "certified",
                "x-enum-elements": [
                  {
                    name: "certified",
                    description: ""
                  },
                  {
                    name: "certified_return_receipt",
                    description: ""
                  },
                  {
                    name: "registered",
                    description: ""
                  }
                ],
                type: "string",
                enum: [
                  "certified",
                  "certified_return_receipt",
                  "registered",
                  null
                ],
                dataTypeDisplayText: "ExtraService1Enum",
                dataTypeLink: "/java/models/enumerations/extra-service-1",
                paramType: null,
                typeCombinatorTypes: null
              },
              cards: {
                description:
                  "A single-element array containing an existing card id in a string format. See [cards](#tag/Cards) for more information.<br>**Constraints**: *Minimum Items*: `0`, *Maximum Items*: `1`, *Pattern*: `^card_[a-zA-Z0-9]+$`",
                type: "array",
                items: {
                  type: "string",
                  pattern: "^card_[a-zA-Z0-9]+$",
                  dataTypeDisplayText: "String"
                },
                minItems: 0,
                maxItems: 1,
                dataTypeDisplayText: "List<String>",
                paramType: null,
                title: "Cards",
                typeCombinatorTypes: null
              },
              billing_group_id: {
                description:
                  "An optional string with the billing group ID to tag your usage with. Is used for billing purposes. Requires special activation to use. See [Billing Group API](https://lob.github.io/lob-openapi/#tag/Billing-Groups) for more information.",
                type: "string",
                dataTypeDisplayText: "String",
                paramType: null,
                title: "BillingGroupId",
                typeCombinatorTypes: null
              }
            },
            required: ["color", "to", "from", "file"],
            dataTypeDisplayText: "LetterEditable",
            dataTypeLink: "/java/models/structures/letter-editable",
            paramType: "Body",
            typeCombinatorTypes: null
          },
          "Idempotency-Key-Header": {
            description:
              "A string of no longer than 256 characters that uniquely identifies this resource. For more help integrating idempotency keys, refer to our [implementation guide](https://www.lob.com/guides#idempotent_request).<br>**Constraints**: *Maximum Length*: `256`",
            example: "026e7634-24d7-486c-a0bb-4a17fd0eebc5",
            type: "string",
            maxLength: 256,
            dataTypeDisplayText: "String",
            paramType: "Header",
            title: "idempotencyKeyHeader",
            typeCombinatorTypes: null
          },
          idempotency_key_param: {
            description:
              "A string of no longer than 256 characters that uniquely identifies this resource. For more help integrating idempotency keys, refer to our [implementation guide](https://www.lob.com/guides#idempotent_request).<br>**Constraints**: *Maximum Length*: `256`",
            example: "026e7634-24d7-486c-a0bb-4a17fd0eebc5",
            type: "string",
            maxLength: 256,
            dataTypeDisplayText: "String",
            paramType: "Query",
            title: "idempotencyKeyParam",
            typeCombinatorTypes: null
          }
        },
        required: ["body"]
      }
    },
    required: ["args"]
  },
  formData: {}
};
