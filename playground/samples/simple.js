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
