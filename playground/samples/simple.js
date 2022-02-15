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
          // isPrimitiveType: {
          //   type: "boolean"
          // },
          // isAtEndpointLevel: {
          //   type: "boolean"
          // },
          // hasDiscriminator: {
          //   type: "boolean"
          // },
          // value: {
          //   oneOf: [{
          //       type: "number"
          //     },
          //     {
          //       type: "boolean"
          //     }
          //   ]
          // },
          // "value1": {
          //   "description": "",
          //   "type": "array",
          //   "items": {
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
          // Array: {
          //   type: "array",
          //   items: {
          //     type: "number"
          //   }
          // },
          // multiLevelOneOf: {
          //   id: "MultiLevelOneOf",
          //   title: "MultiLevelOneOf",
          //   description: "This class contains multi level oneOf case.",
          //   type: "object",
          //   properties: {
          //     scalarValue: {
          //       oneOf: [{
          //           oneOf: [
          //             // {
          //             //   type: "array",
          //             //   items: {
          //             //     type: "boolean"
          //             //   }
          //             // },
          //             {
          //               type: "number"
          //             },
          //             {
          //               type: "boolean"
          //             }
          //           ]
          //         },
          //         {
          //           type: "number"
          //         }
          //       ]
          //     }
          //   },
          //   required: ["scalarValue"]
          // },
          // "multiLevelOneOfNonScalar": {
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
          //         "session": {
          //           "oneOf": [{
          //               "oneOf": [{
          //                   "oneOf": [{
          //                       "oneOf": [{
          //                           "id": "Evening",
          //                           "title": "Evening",
          //                           "description": "Course evening session",
          //                           "type": "object",
          //                           "properties": {
          //                             "startsAt": {
          //                               "description": "Session start time",
          //                               "type": "string"
          //                             },
          //                             "endsAt": {
          //                               "description": "Session end time",
          //                               "type": "string"
          //                             },
          //                             "offerDinner": {
          //                               "description": "Offer dinner during session",
          //                               "type": "boolean"
          //                             }
          //                           },
          //                           "required": [
          //                             "startsAt",
          //                             "endsAt",
          //                             "offerDinner"
          //                           ]
          //                         },
          //                         {
          //                           "type": "boolean"
          //                         }
          //                       ]
          //                     },
          //                     {
          //                       "id": "Noon",
          //                       "title": "Noon",
          //                       "description": "Course noon session",
          //                       "type": "object",
          //                       "properties": {
          //                         "startsAt": {
          //                           "description": "Session start time",
          //                           "type": "string"
          //                         },
          //                         "endsAt": {
          //                           "description": "Session end time",
          //                           "type": "string"
          //                         },
          //                         "offerLunch": {
          //                           "description": "Offer lunch during session",
          //                           "type": "boolean"
          //                         }
          //                       },
          //                       "required": [
          //                         "startsAt",
          //                         "endsAt",
          //                         "offerLunch"
          //                       ]
          //                     }
          //                   ]
          //                 },
          //                 {
          //                   "type": "array",
          //                   "items": {
          //                     "id": "Evening",
          //                     "title": "Evening",
          //                     "description": "Course evening session",
          //                     "type": "object",
          //                     "properties": {
          //                       "startsAt": {
          //                         "description": "Session start time",
          //                         "type": "string"
          //                       },
          //                       "endsAt": {
          //                         "description": "Session end time",
          //                         "type": "string"
          //                       },
          //                       "offerDinner": {
          //                         "description": "Offer dinner during session",
          //                         "type": "boolean"
          //                       }
          //                     },
          //                     "required": [
          //                       "startsAt",
          //                       "endsAt",
          //                       "offerDinner"
          //                     ]
          //                   }
          //                 }
          //               ]
          //             },
          //             {
          //               "id": "Morning",
          //               "title": "Morning",
          //               "description": "Course morning session",
          //               "type": "object",
          //               "properties": {
          //                 "startsAt": {
          //                   "description": "Session start time",
          //                   "type": "string"
          //                 },
          //                 "endsAt": {
          //                   "description": "Session end time",
          //                   "type": "string"
          //                 },
          //                 "offerTeaBreak": {
          //                   "description": "Offer tea break during session",
          //                   "type": "boolean"
          //                 }
          //               },
          //               "required": [
          //                 "startsAt",
          //                 "endsAt",
          //                 "offerTeaBreak"
          //               ]
          //             }
          //           ]
          //         }
          //       },
          //       "required": [
          //         "isPrimitiveType",
          //         "isAtEndpointLevel",
          //         "hasDiscriminator",
          //         "session"
          //       ]
          //     }
          //   },
          //   "required": [
          //     "args"
          //   ]
          // }
          // "scalarValue": {
          //   "oneOf": [{
          //       "type": "number"
          //     },
          //     {
          //       "anyOf": [{
          //           "type": "boolean"
          //         },
          //         {
          //           "type": "integer",
          //         }
          //       ]
          //     }
          //   ]
          // }
          // multiLevelSchema: {
          //   oneOf: [{
          //       oneOf: [{
          //           oneOf: [{
          //               type: "array",
          //               items: {
          //                 oneOf: [{
          //                     oneOf: [{
          //                         oneOf: [{
          //                             type: "array",
          //                             items: {
          //                               type: "number"
          //                             }
          //                           },
          //                           {
          //                             type: "array",
          //                             items: {
          //                               type: "boolean"
          //                             }
          //                           }
          //                         ]
          //                       },
          //                       {
          //                         type: "boolean"
          //                       }
          //                     ]
          //                   },
          //                   {
          //                     type: "number"
          //                   }
          //                 ]
          //               }
          //             },
          //             {
          //               type: "array",
          //               items: {
          //                 type: "boolean"
          //               }
          //             }
          //           ]
          //         },
          //         {
          //           type: "boolean"
          //         }
          //       ]
          //     },
          //     {
          //       type: "number"
          //     }
          //   ]
          // },
          // send_oneof_inner_mapOfArray: {
          //   oneOf: [{
          //       type: "object",
          //       additionalProperties: {
          //         type: "array",
          //         items: {
          //           type: "number"
          //         }
          //       }
          //     },
          //     {
          //       type: "object",
          //       additionalProperties: {
          //         type: "array",
          //         items: {
          //           type: "boolean"
          //         }
          //       }
          //     }
          //   ]
          // },
          // session: {
          //   description: "Course session",
          //   oneOf: [{
          //       id: "Morning",
          //       title: "Morning",
          //       description: "Course morning session",
          //       type: "object",
          //       properties: {
          //         startsAt: {
          //           description: "Session start time",
          //           type: "string"
          //         },
          //         endsAt: {
          //           description: "Session end time",
          //           type: "string"
          //         },
          //         offerTeaBreak: {
          //           description: "Offer tea break during session",
          //           type: "boolean"
          //         }
          //       },
          //       required: ["startsAt", "endsAt", "offerTeaBreak"]
          //     },
          //     {
          //       id: "Evening",
          //       title: "Evening",
          //       description: "Course evening session",
          //       type: "object",
          //       properties: {
          //         startsAt: {
          //           description: "Session start time",
          //           type: "string"
          //         },
          //         endsAt: {
          //           description: "Session end time",
          //           type: "string"
          //         },
          //         offerDinner: {
          //           description: "Offer dinner during session",
          //           type: "boolean"
          //         }
          //       },
          //       required: ["startsAt", "endsAt", "offerDinner", "offerTeaBreak"]
          //     }
          //   ]
          // },
          // "Simple oneOf Fields": {
          //   oneOf: [{
          //       type: "number"
          //     },
          //     {
          //       type: "boolean"
          //     }
          //   ]
          // },
          // send_oneof_inner_arrayOfMap_flag: {
          //   oneOf: [{
          //       type: "array",
          //       items: {
          //         type: "object",
          //         additionalProperties: {
          //           id: "Evening",
          //           title: "Evening",
          //           description: "Course evening session",
          //           type: "object",
          //           properties: {
          //             startsAt: {
          //               description: "Session start time",
          //               type: "string"
          //             },
          //             endsAt: {
          //               description: "Session end time",
          //               type: "string"
          //             },
          //             offerDinner: {
          //               description: "Offer dinner during session",
          //               type: "boolean"
          //             }
          //           },
          //           required: ["startsAt", "endsAt", "offerDinner", "offerTeaBreak"]
          //         }
          //       }
          //     },
          //     {
          //       type: "array",
          //       items: {
          //         type: "object",
          //         additionalProperties: {
          //           type: "boolean"
          //         }
          //       }
          //     }
          //   ]
          // },
          // "Simple oneOf Array": {
          //   oneOf: [{
          //       type: "array",
          //       items: {
          //         type: "number"
          //       }
          //     },
          //     {
          //       type: "array",
          //       items: {
          //         type: "boolean"
          //       }
          //     }
          //   ]
          // },
          // "Simple number array + boolean": {
          //   oneOf: [{
          //       type: "array",
          //       items: {
          //         type: "number"
          //       }
          //     },
          //     {
          //       type: "boolean"
          //     }
          //   ]
          // },
          // "Simple boolean array + number": {
          //   oneOf: [{
          //       type: "array",
          //       items: {
          //         type: "number"
          //       }
          //     },
          //     {
          //       type: "boolean"
          //     }
          //   ]
          // },
          param11: {
            description: "",
            example: [true, 2],
            type: "array",
            items: {
              anyOf: [
                {
                  "x-is-dynamic": true,
                  example: "2",
                  anyOf: [
                    {
                      example: "hello",
                      type: "string"
                    },
                    {
                      example: 3,
                      type: "integer"
                    }
                  ]
                },
                {
                  example: true,
                  type: "boolean"
                },
                {
                  example: {
                    name: "puppy",
                    fangs: "yes",
                    pet_type: "Dog"
                  },
                  anyOf: [
                    {
                      id: "Cat",
                      title: "Cat",
                      example: {
                        name: "hosico",
                        color: "yellow",
                        pet_type: "Cat"
                      },
                      type: "object",
                      properties: {
                        name: {
                          type: "string"
                        },
                        color: {
                          type: "string"
                        },
                        pet_type: {
                          type: "string"
                        }
                      },
                      required: ["name", "color"]
                    },
                    {
                      id: "Dog",
                      example: {
                        name: "puppy",
                        fangs: "yes",
                        pet_type: "Dog"
                      },
                      type: "object",
                      properties: {
                        name: {
                          type: "string"
                        },
                        fangs: {
                          type: "string"
                        },
                        pet_type: {
                          type: "string"
                        }
                      },
                      required: ["name", "fangs"]
                    }
                  ]
                }
              ]
            }
          }
          // "Outer Array": {
          //   "description": "Course session",
          //   "example": [{
          //     "startsAt": "startsAtDummy",
          //     "endsAt": "endsAtDummy",
          //     "offerDinner": true
          //   }],
          //   "type": "array",
          //   "items": {
          //     "oneOf": [{
          //         "id": "Morning",
          //         "title": "Morning",
          //         "description": "Course morning session",
          //         "type": "object",
          //         "properties": {
          //           "startsAt": {
          //             "description": "Session start time",
          //             "type": "string"
          //           },
          //           "endsAt": {
          //             "description": "Session end time",
          //             "type": "string"
          //           },
          //           "offerTeaBreak": {
          //             "description": "Offer tea break during session",
          //             "type": "boolean"
          //           }
          //         },
          //         "required": [
          //           "startsAt",
          //           "endsAt",
          //           "offerTeaBreak"
          //         ]
          //       },
          //       {
          //         "id": "Evening",
          //         "title": "Evening",
          //         "description": "Course evening session",
          //         "type": "object",
          //         "properties": {
          //           "startsAt": {
          //             "description": "Session start time",
          //             "type": "string"
          //           },
          //           "endsAt": {
          //             "description": "Session end time",
          //             "type": "string"
          //           },
          //           "offerDinner": {
          //             "description": "Offer dinner during session",
          //             "type": "boolean"
          //           }
          //         },
          //         "required": [
          //           "startsAt",
          //           "endsAt",
          //           "offerDinner"
          //         ]
          //       }
          //     ]
          //   }
          // }
          // "Simple Object": {
          //   oneOf: [{
          //       type: "object",
          //       additionalProperties: {
          //         type: "number"
          //       }
          //     },
          //     {
          //       type: "object",
          //       additionalProperties: {
          //         type: "boolean"
          //       }
          //     }
          //   ]
          // },
          // "Simple Object + boolean": {
          //   oneOf: [{
          //       type: "object",
          //       additionalProperties: {
          //         type: "number"
          //       }
          //     },
          //     {
          //       type: "boolean"
          //     }
          //   ]
          // },

          // oneof_outer_map: {
          //   type: "object",
          //   additionalProperties: {
          //     oneOf: [
          //       {
          //         type: "number"
          //       },
          //       {
          //         type: "boolean"
          //       }
          //     ]
          //   }
          // }
          // session: {
          //   description: "Course session",
          //   example: {
          //     startsAt: "startsAtDummy",
          //     endsAt: "endsAtDummy",
          //     offerDinner: true
          //   },
          //   oneOf: [
          //     {
          //       id: "Morning",
          //       title: "Morning",
          //       description: "Course morning session",
          //       type: "object",
          //       properties: {
          //         startsAt: {
          //           description: "Session start time",
          //           type: "string"
          //         },
          //         endsAt: {
          //           description: "Session end time",
          //           type: "string"
          //         },
          //         offerTeaBreak: {
          //           description: "Offer tea break during session",
          //           type: "boolean"
          //         }
          //       },
          //       required: ["startsAt", "endsAt", "offerTeaBreak"]
          //     },
          //     {
          //       id: "Evening",
          //       title: "Evening",
          //       description: "Course evening session",
          //       type: "object",
          //       properties: {
          //         startsAt: {
          //           description: "Session start time",
          //           type: "string"
          //         },
          //         endsAt: {
          //           description: "Session end time",
          //           type: "string"
          //         },
          //         offerDinner: {
          //           description: "Offer dinner during session",
          //           type: "boolean"
          //         }
          //       },
          //       required: ["startsAt", "endsAt", "offerDinner"]
          //     }
          //   ],
          //   dataTypeDisplayText: "SendOneofSimpleSession",
          //   dataTypeLink: "/java/models/containers/send-oneof-simple-session",
          //   paramType: "Body",
          //   title: "session",
          //   typeCombinatorTypes: [
          //     {
          //       DataType: "Morning",
          //       LinkTo: "$m/Morning",
          //       ContainsSubTypes: false,
          //       SubTypes: null,
          //       Type: "typecombinatortype"
          //     },
          //     {
          //       DataType: "Evening",
          //       LinkTo: "$m/Evening",
          //       ContainsSubTypes: false,
          //       SubTypes: null,
          //       Type: "typecombinatortype"
          //     }
          //   ]
          // },
          // "Outer array": {
          //   description: "",
          //   type: "array",
          //   items: {
          //     oneOf: [{
          //         type: "number"
          //       },
          //       {
          //         type: "boolean"
          //       }
          //     ]
          //   }
          // },
          // "param10": {
          //   "description": "",
          //   "example": [
          //     true,
          //     2
          //   ],
          //   "type": "array",
          //   "items": {
          //     "oneOf": [{
          //         "example": true,
          //         "type": "boolean"
          //       },

          //     ]
          //   }
          // },
        },
        required: []
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
    additionalQueryParams: null,
    additionalFieldParams: null,
    args: {
      param11: [
        {
          $$__case: 0,
          $$__case_of: "anyOf",
          value: {
            $$__case: 0,
            $$__case_of: "anyOf",
            value: "String8"
          }
        },
        {
          $$__case: 0,
          $$__case_of: "anyOf",
          value: {
            $$__case: 0,
            $$__case_of: "anyOf",
            value: "String9"
          }
        },
        {
          $$__case: 0,
          $$__case_of: "anyOf",
          value: {
            $$__case: 0,
            $$__case_of: "anyOf",
            value: "String0"
          }
        }
      ]
    }
  }
};
