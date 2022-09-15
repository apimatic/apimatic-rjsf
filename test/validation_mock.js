export const schema = {
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
        session: {
          description: "Course session",
          example: {
            startsAt: "startsAtDummy",
            endsAt: "endsAtDummy",
            offerDinner: true
          },
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
    }
  },
  required: ["args"]
};

export const origninalFormData1 = {
  args: {
    isPrimitiveType: false,
    isAtEndpointLevel: false,
    hasDiscriminator: false,
    session: {
      $$__case: 0,
      $$__case_of: "oneOf",
      value: {
        startsAt: "startsAtDummy",
        endsAt: "endsAtDummy",
        offerTeaBreak: true
      }
    }
  }
};

export const originalFormData = {
  args: {
    isPrimitiveType: false,
    isAtEndpointLevel: false,
    hasDiscriminator: false,
    session: {
      $$__case: 1,
      $$__case_of: "oneOf",
      value: {
        startsAt: "startsAtDummy",
        endsAt: "endsAtDummy",
        offerDinner: true
      }
    }
  }
};

// function getNestedValue
export const GET_NESTED_VALUE_VARIABLES = {
  INITIAL_RENDER: "initial render",
  NESTED_DATA: "get possible paths in nested oneOf or anyOf",
  NESTED_3D_DATA: "get possible paths in 3d nesting oneOf or anyOf"
};

export const GET_NESTED_VALUE_DATA = {
  [GET_NESTED_VALUE_VARIABLES.INITIAL_RENDER]: {},
  [GET_NESTED_VALUE_VARIABLES.NESTED_DATA]: {
    $$__case: 0,
    $$__case_of: "oneOf",
    value: [
      {
        $$__case: 0,
        $$__case_of: "oneOf",
        value: {
          $$__case: 0,
          $$__case_of: "oneOf",
          value: {
            $$__case: 0,
            $$__case_of: "anyOf",
            value: ["helllo", "hi"]
          }
        }
      },
      {
        $$__case: 1,
        $$__case_of: "oneOf",
        value: {
          $$__case: 0,
          $$__case_of: "oneOf",
          value: {
            $$__case: 1,
            $$__case_of: "anyOf"
          }
        }
      }
    ]
  },
  [GET_NESTED_VALUE_VARIABLES.NESTED_3D_DATA]: {
    $$__case: 0,
    $$__case_of: "oneOf",
    value: [
      {
        $$__case: 0,
        $$__case_of: "oneOf",
        value: {
          $$__case: 0,
          $$__case_of: "oneOf",
          value: {
            $$__case: 0,
            $$__case_of: "anyOf",
            value: [
              {
                $$__case: 0,
                $$__case_of: "oneOf",
                value: {
                  $$__case: 0,
                  $$__case_of: "oneOf",
                  value: {
                    $$__case: 0,
                    $$__case_of: "anyOf",
                    value: ["helllo", "hi"]
                  }
                }
              },
              {
                $$__case: 1,
                $$__case_of: "oneOf",
                value: {
                  $$__case: 0,
                  $$__case_of: "oneOf",
                  value: {
                    $$__case: 1,
                    $$__case_of: "anyOf"
                  }
                }
              }
            ]
          }
        }
      },
      {
        $$__case: 1,
        $$__case_of: "oneOf",
        value: {
          $$__case: 0,
          $$__case_of: "oneOf",
          value: {
            $$__case: 1,
            $$__case_of: "anyOf"
          }
        }
      }
    ]
  }
};

// function getSelectedFormDataFieldPath
export const GET_SELECTED_FORM_DATA_FIELD_PATH_VARIABLES = {
  INITIAL_RENDER: "initial render",
  WITH_DATA: "with some nested data",
  WITH_3D_DATA: "with nested 3d data"
};

export const GET_SELECTED_FORM_DATA_FIELD_PATH_DATA = {
  [GET_SELECTED_FORM_DATA_FIELD_PATH_VARIABLES.INITIAL_RENDER]: {},
  [GET_SELECTED_FORM_DATA_FIELD_PATH_VARIABLES.WITH_DATA]: {
    $$__case: 0,
    $$__case_of: "oneOf",
    value: {
      $$__case: 0,
      $$__case_of: "oneOf",
      value: {
        $$__case: 1,
        $$__case_of: "oneOf",
        value: [
          {
            startsAt: "startsAtDummys",
            endsAt: "endsAtDummy",
            offerDinner: true
          },
          {
            startsAt: "sadadad",
            endsAt: "asdasdsads",
            offerDinner: true
          }
        ]
      }
    }
  },
  [GET_SELECTED_FORM_DATA_FIELD_PATH_VARIABLES.WITH_3D_DATA]:
    GET_NESTED_VALUE_DATA[GET_NESTED_VALUE_VARIABLES.NESTED_3D_DATA]
};

// function validateSchema
// => Oneof-non-scalar-endpoints
export const ONEOF_NONSCALAR_ENDPOINTS_VARIABLES = {
  SEND_MULTILEVEL_ONEOF: "Send Multi Level Oneof",
  SEND_ONEOF_OUTER_ARRAY: "Send Oneof Outer Array",
  SEND_ONEOF_SIMPLE: "Send Oneof Simple",
  SEND_ONEOF_INNER_MAP: "Send Oneof Inner Map",
  SEND_ONEOF_INNER_MIXED_ARRAYS: "Send Oneof Inner Mixed Arrays",
  SEND_ONEOF_OUTER_MAP: "Send Oneof Outer Map",
  SEND_ONEOF_INNER_ARRAY: "Send Oneof Inner Array",
  SEND_ONEOF_INNER_MIXED_MAP: "Send Oneof Inner Mixed Map",
  SEND_ONEOF_CONTAINER_OF_ANYOF: "Send Oneof Conatiner of Anyof"
};

export const ONEOF_NONSCALAR_ENDPOINTS_DATA = {
  [ONEOF_NONSCALAR_ENDPOINTS_VARIABLES.SEND_MULTILEVEL_ONEOF]: {
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
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isPrimitiveType"
            },
            isAtEndpointLevel: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isAtEndpointLevel"
            },
            hasDiscriminator: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "hasDiscriminator"
            },
            session: {
              example: [
                {
                  startsAt: "startsAtDummy",
                  endsAt: "endsAtDummy",
                  offerDinner: true
                }
              ],
              oneOf: [
                {
                  oneOf: [
                    {
                      oneOf: [
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
                        },
                        {
                          type: "array",
                          items: {
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
                        }
                      ]
                    },
                    {
                      id: "Noon",
                      title: "Noon",
                      description: "Course noon session",
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
                        offerLunch: {
                          description: "Offer lunch during session",
                          type: "boolean"
                        }
                      },
                      required: ["startsAt", "endsAt", "offerLunch"]
                    }
                  ]
                },
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
                }
              ],
              dataTypeDisplayText: "OneOfSession",
              paramType: "Body",
              title: "session"
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
    originalFormData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        session: {
          $$__case: 0,
          $$__case_of: "oneOf",
          value: {
            $$__case: 0,
            $$__case_of: "oneOf",
            value: {
              $$__case: 0,
              $$__case_of: "oneOf",
              value: {
                offerDinner: true
              }
            }
          }
        }
      }
    },
    formData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        session: {
          offerDinner: true
        }
      }
    }
  },
  [ONEOF_NONSCALAR_ENDPOINTS_VARIABLES.SEND_ONEOF_OUTER_ARRAY]: {
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
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isPrimitiveType"
            },
            isAtEndpointLevel: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isAtEndpointLevel"
            },
            hasDiscriminator: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "hasDiscriminator"
            },
            session: {
              description: "Course session",
              example: [
                {
                  startsAt: "startsAtDummy",
                  endsAt: "endsAtDummy",
                  offerDinner: true
                }
              ],
              type: "array",
              items: {
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
                ],
                dataTypeDisplayText: "OneOfSession2"
              },
              dataTypeDisplayText: "List<OneOfSession2>",
              paramType: "Body",
              title: "session"
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
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        session: [{}]
      }
    },
    originalFormData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        session: [
          {
            $$__case: 0,
            $$__case_of: "oneOf",
            value: {}
          }
        ]
      }
    }
  },
  [ONEOF_NONSCALAR_ENDPOINTS_VARIABLES.SEND_ONEOF_SIMPLE]: {
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
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isPrimitiveType"
            },
            isAtEndpointLevel: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isAtEndpointLevel"
            },
            hasDiscriminator: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "hasDiscriminator"
            },
            session: {
              description: "Course session",
              example: {
                startsAt: "startsAtDummy",
                endsAt: "endsAtDummy",
                offerDinner: true
              },
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
              ],
              dataTypeDisplayText: "OneOfSession2",
              paramType: "Body",
              title: "session"
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
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        session: {}
      }
    },
    originalFormData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        session: {
          $$__case: 0,
          $$__case_of: "oneOf",
          value: {}
        }
      }
    }
  },
  [ONEOF_NONSCALAR_ENDPOINTS_VARIABLES.SEND_ONEOF_INNER_MAP]: {
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
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isPrimitiveType"
            },
            isAtEndpointLevel: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isAtEndpointLevel"
            },
            hasDiscriminator: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "hasDiscriminator"
            },
            session: {
              description: "Course session",
              example: {
                key1: {
                  startsAt: "startsAtDummy",
                  endsAt: "endsAtDummy",
                  offerDinner: true
                },
                key2: {
                  startsAt: "startsAtDummy",
                  endsAt: "endsAtDummy",
                  offerDinner: true
                }
              },
              oneOf: [
                {
                  title: "Morning",
                  type: "object",
                  additionalProperties: {
                    id: "Morning",
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
                  }
                },
                {
                  title: "Evening",
                  type: "object",
                  additionalProperties: {
                    id: "Evening",
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
                }
              ],
              dataTypeDisplayText: "OneOfSession3",
              paramType: "Body",
              title: "session"
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
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        session: {
          key0: {}
        }
      }
    },
    originalFormData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        session: {
          $$__case: 0,
          $$__case_of: "oneOf",
          value: {
            key0: {}
          }
        }
      }
    }
  },
  [ONEOF_NONSCALAR_ENDPOINTS_VARIABLES.SEND_ONEOF_INNER_MIXED_ARRAYS]: {
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
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isPrimitiveType"
            },
            isAtEndpointLevel: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isAtEndpointLevel"
            },
            hasDiscriminator: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "hasDiscriminator"
            },
            session: {
              description: "Course session",
              example: [
                {
                  startsAt: "startsAtDummy",
                  endsAt: "endsAtDummy",
                  offerTeaBreak: true
                }
              ],
              oneOf: [
                {
                  type: "array",
                  items: {
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
                  }
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
              ],
              dataTypeDisplayText: "OneOfSession4",
              paramType: "Body",
              title: "session"
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
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        session: [{}]
      }
    },
    originalFormData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        session: {
          $$__case: 0,
          $$__case_of: "oneOf",
          value: [{}]
        }
      }
    }
  },
  [ONEOF_NONSCALAR_ENDPOINTS_VARIABLES.SEND_ONEOF_OUTER_MAP]: {
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
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isPrimitiveType"
            },
            isAtEndpointLevel: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isAtEndpointLevel"
            },
            hasDiscriminator: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "hasDiscriminator"
            },
            session: {
              description: "Course session",
              example: {
                key1: {
                  startsAt: "startsAtDummy",
                  endsAt: "endsAtDummy",
                  offerTeaBreak: true
                },
                key2: {
                  startsAt: "startsAtDummy",
                  endsAt: "endsAtDummy",
                  offerDinner: true
                }
              },
              type: "object",
              additionalProperties: {
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
              },
              dataTypeDisplayText: "Map<String, OneOfSession2>",
              paramType: "Body",
              title: "session"
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
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        session: {
          key1: {},
          key2: {
            startsAt: "startsAtDummy",
            endsAt: "endsAtDummy",
            offerDinner: true
          }
        }
      }
    },
    originalFormData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        session: {
          key1: {
            $$__case: 0,
            $$__case_of: "oneOf",
            value: {}
          },
          key2: {
            $$__case: 1,
            value: {
              startsAt: "startsAtDummy",
              endsAt: "endsAtDummy",
              offerDinner: true
            }
          }
        }
      }
    }
  },
  [ONEOF_NONSCALAR_ENDPOINTS_VARIABLES.SEND_ONEOF_INNER_ARRAY]: {
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
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isPrimitiveType"
            },
            isAtEndpointLevel: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isAtEndpointLevel"
            },
            hasDiscriminator: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "hasDiscriminator"
            },
            session: {
              description: "Course session",
              example: [
                {
                  startsAt: "startsAtDummy",
                  endsAt: "endsAtDummy",
                  offerDinner: true
                }
              ],
              oneOf: [
                {
                  type: "array",
                  items: {
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
                  }
                },
                {
                  type: "array",
                  items: {
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
                }
              ],
              dataTypeDisplayText: "OneOfSession5",
              paramType: "Body",
              title: "session"
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
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        session: [{}]
      }
    },
    originalFormData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        session: {
          $$__case: 1,
          $$__case_of: "oneOf",
          value: [{}]
        }
      }
    }
  },
  [ONEOF_NONSCALAR_ENDPOINTS_VARIABLES.SEND_ONEOF_INNER_MIXED_MAP]: {
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
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isPrimitiveType"
            },
            isAtEndpointLevel: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isAtEndpointLevel"
            },
            hasDiscriminator: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "hasDiscriminator"
            },
            session: {
              description: "Course session",
              oneOf: [
                {
                  title: "Morning",
                  type: "object",
                  additionalProperties: {
                    id: "Morning",
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
                  }
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
              ],
              dataTypeDisplayText: "OneOfSession6",
              paramType: "Body",
              title: "session"
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
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        session: {
          key0: {}
        }
      }
    },
    originalFormData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        session: {
          $$__case: 0,
          $$__case_of: "oneOf",
          value: {
            key0: {}
          }
        }
      }
    }
  },
  [ONEOF_NONSCALAR_ENDPOINTS_VARIABLES.SEND_ONEOF_CONTAINER_OF_ANYOF]: {
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
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isPrimitiveType"
            },
            isAtEndpointLevel: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isAtEndpointLevel"
            },
            hasDiscriminator: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "hasDiscriminator"
            },
            session: {
              example: {
                startsAt: "startsAtDummy",
                endsAt: "endsAtDummy",
                offerLunch: true
              },
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
                  anyOf: [
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
                    },
                    {
                      id: "Noon",
                      title: "Noon",
                      description: "Course noon session",
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
                        offerLunch: {
                          description: "Offer lunch during session",
                          type: "boolean"
                        }
                      },
                      required: ["startsAt", "endsAt", "offerLunch"]
                    }
                  ]
                }
              ],
              dataTypeDisplayText: "OneOfSession7",
              paramType: "Body",
              title: "session"
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
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        session: {}
      }
    },
    originalFormData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        session: {
          $$__case: 1,
          value: {
            $$__case: 1,
            $$__case_of: "anyOf",
            value: {}
          }
        }
      }
    }
  }
};

// => Oneof-scaler-endpoints
export const ONEOF_SCALAR_ENDPOINTS_VARIABLES = {
  SEND_ONEOF_INNER_ARRAY: "Scalar endpoints Send Oneof Inner Array",
  SEND_ONEOF_INNER_MAP: "Scalar endpoints Send Oneof Inner Map",
  SEND_ONEOF_OUTER_MAP: "Scalar endpoints Send Oneof Outer Map",
  SEND_ONEOF_SIMPLE: "Scalar endpoints Send Oneof Simple",
  SEND_MULTILEVEL_ONEOF: "Scalar endpoints Send Multi Level Oneof",
  SEND_ONEOF_OUTER_ARRAY: "Scalar endpoints Send Oneof Outer Array",
  SEND_ONEOF_INNER_MIXED_ARRAYS:
    "Scalar endpoints Send Oneof Inner Mixed Arrays",
  SEND_ONEOF_INNER_MIXED_MAP: "Scalar endpoints Send Oneof Inner Mixed Map",
  SEND_ONEOF_CONTAINER_OF_ANYOF:
    "Scalar endpoints Send Oneof Conatiner of Anyof"
};

export const ONEOF_SCALAR_ENDPOINTS_DATA = {
  [ONEOF_SCALAR_ENDPOINTS_VARIABLES.SEND_ONEOF_INNER_ARRAY]: {
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
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isPrimitiveType"
            },
            isAtEndpointLevel: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isAtEndpointLevel"
            },
            hasDiscriminator: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "hasDiscriminator"
            },
            scalarValue: {
              example: [true, false],
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
              ],
              dataTypeDisplayText: "OneOfScalarValue",
              paramType: "Body",
              title: "scalarValue"
            }
          },
          required: [
            "isPrimitiveType",
            "isAtEndpointLevel",
            "hasDiscriminator",
            "scalarValue"
          ]
        }
      },
      required: ["args"]
    },
    formData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        scalarValue: [null]
      }
    },
    originalFormData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        scalarValue: {
          $$__case: 0,
          $$__case_of: "oneOf",
          value: [null]
        }
      }
    }
  },
  [ONEOF_SCALAR_ENDPOINTS_VARIABLES.SEND_ONEOF_INNER_MAP]: {
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
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isPrimitiveType"
            },
            isAtEndpointLevel: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isAtEndpointLevel"
            },
            hasDiscriminator: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "hasDiscriminator"
            },
            scalarValue: {
              example: {
                key1: false,
                key2: false
              },
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
              ],
              dataTypeDisplayText: "OneOfScalarValue1",
              paramType: "Body",
              title: "scalarValue"
            }
          },
          required: [
            "isPrimitiveType",
            "isAtEndpointLevel",
            "hasDiscriminator",
            "scalarValue"
          ]
        }
      },
      required: ["args"]
    },
    formData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        scalarValue: {
          key0: "a"
        }
      }
    },
    originalFormData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        scalarValue: {
          $$__case: 0,
          $$__case_of: "oneOf",
          value: {
            key0: "a"
          }
        }
      }
    }
  },
  [ONEOF_SCALAR_ENDPOINTS_VARIABLES.SEND_ONEOF_OUTER_MAP]: {
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
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isPrimitiveType"
            },
            isAtEndpointLevel: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isAtEndpointLevel"
            },
            hasDiscriminator: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "hasDiscriminator"
            },
            scalarValue: {
              example: {
                key1: false,
                key2: 10.2
              },
              type: "object",
              additionalProperties: {
                oneOf: [
                  {
                    type: "number"
                  },
                  {
                    type: "boolean"
                  }
                ]
              },
              dataTypeDisplayText: "Map<String, OneOfScalarValue2>",
              paramType: "Body",
              title: "scalarValue"
            }
          },
          required: [
            "isPrimitiveType",
            "isAtEndpointLevel",
            "hasDiscriminator",
            "scalarValue"
          ]
        }
      },
      required: ["args"]
    },
    formData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        scalarValue: {
          key1: "a",
          key2: 10.2,
          key0: "a"
        }
      }
    },
    originalFormData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        scalarValue: {
          key1: {
            $$__case: 0,
            $$__case_of: "oneOf",
            value: "a"
          },
          key2: {
            $$__case: 0,
            $$__case_of: "oneOf",
            value: 10.2
          },
          key0: {
            $$__case: 0,
            $$__case_of: "oneOf",
            value: "a"
          }
        }
      }
    }
  },
  [ONEOF_SCALAR_ENDPOINTS_VARIABLES.SEND_ONEOF_SIMPLE]: {
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
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isPrimitiveType"
            },
            isAtEndpointLevel: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isAtEndpointLevel"
            },
            hasDiscriminator: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "hasDiscriminator"
            },
            scalarValue: {
              example: true,
              oneOf: [
                {
                  type: "number"
                },
                {
                  type: "boolean"
                }
              ],
              dataTypeDisplayText: "OneOfScalarValue2",
              paramType: "Body",
              title: "scalarValue"
            }
          },
          required: [
            "isPrimitiveType",
            "isAtEndpointLevel",
            "hasDiscriminator",
            "scalarValue"
          ]
        }
      },
      required: ["args"]
    },
    formData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false
      }
    },
    originalFormData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        scalarValue: {
          $$__case: 0,
          $$__case_of: "oneOf"
        }
      }
    }
  },
  [ONEOF_SCALAR_ENDPOINTS_VARIABLES.SEND_MULTILEVEL_ONEOF]: {
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
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isPrimitiveType"
            },
            isAtEndpointLevel: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isAtEndpointLevel"
            },
            hasDiscriminator: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "hasDiscriminator"
            },
            scalarValue: {
              example: [true, false],
              oneOf: [
                {
                  oneOf: [
                    {
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
                    {
                      type: "boolean"
                    }
                  ]
                },
                {
                  type: "number"
                }
              ],
              dataTypeDisplayText: "OneOfScalarValue3",
              paramType: "Body",
              title: "scalarValue"
            }
          },
          required: [
            "isPrimitiveType",
            "isAtEndpointLevel",
            "hasDiscriminator",
            "scalarValue"
          ]
        }
      },
      required: ["args"]
    },
    formData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        scalarValue: [null]
      }
    },
    originalFormData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        scalarValue: {
          $$__case: 0,
          value: {
            $$__case: 0,
            value: {
              $$__case: 0,
              $$__case_of: "oneOf",
              value: []
            }
          }
        }
      }
    }
  },
  [ONEOF_SCALAR_ENDPOINTS_VARIABLES.SEND_ONEOF_OUTER_ARRAY]: {
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
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isPrimitiveType"
            },
            isAtEndpointLevel: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isAtEndpointLevel"
            },
            hasDiscriminator: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "hasDiscriminator"
            },
            scalarValue: {
              type: "array",
              items: {
                oneOf: [
                  {
                    type: "number"
                  },
                  {
                    type: "boolean"
                  }
                ],
                dataTypeDisplayText: "OneOfScalarValue2"
              },
              dataTypeDisplayText: "List<OneOfScalarValue2>",
              paramType: "Body",
              title: "scalarValue"
            }
          },
          required: [
            "isPrimitiveType",
            "isAtEndpointLevel",
            "hasDiscriminator",
            "scalarValue"
          ]
        }
      },
      required: ["args"]
    },
    formData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        scalarValue: [null]
      }
    },
    originalFormData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        scalarValue: [
          {
            $$__case: 0,
            $$__case_of: "oneOf"
          }
        ]
      }
    }
  },
  [ONEOF_SCALAR_ENDPOINTS_VARIABLES.SEND_ONEOF_INNER_MIXED_ARRAYS]: {
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
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isPrimitiveType"
            },
            isAtEndpointLevel: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isAtEndpointLevel"
            },
            hasDiscriminator: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "hasDiscriminator"
            },
            scalarValue: {
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
              ],
              dataTypeDisplayText: "OneOfScalarValue5",
              paramType: "Body",
              title: "scalarValue"
            }
          },
          required: [
            "isPrimitiveType",
            "isAtEndpointLevel",
            "hasDiscriminator",
            "scalarValue"
          ]
        }
      },
      required: ["args"]
    },
    formData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        scalarValue: [null]
      }
    },
    originalFormData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        scalarValue: {
          $$__case: 0,
          $$__case_of: "oneOf",
          value: [null]
        }
      }
    }
  },
  [ONEOF_SCALAR_ENDPOINTS_VARIABLES.SEND_ONEOF_INNER_MIXED_MAP]: {
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
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isPrimitiveType"
            },
            isAtEndpointLevel: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isAtEndpointLevel"
            },
            hasDiscriminator: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "hasDiscriminator"
            },
            scalarValue: {
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
              ],
              dataTypeDisplayText: "OneOfScalarValue6",
              paramType: "Body",
              title: "scalarValue"
            }
          },
          required: [
            "isPrimitiveType",
            "isAtEndpointLevel",
            "hasDiscriminator",
            "scalarValue"
          ]
        }
      },
      required: ["args"]
    },
    formData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        scalarValue: {}
      }
    },
    originalFormData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        scalarValue: {
          $$__case: 0,
          $$__case_of: "oneOf",
          value: {}
        }
      }
    }
  },
  [ONEOF_SCALAR_ENDPOINTS_VARIABLES.SEND_ONEOF_CONTAINER_OF_ANYOF]: {
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
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isPrimitiveType"
            },
            isAtEndpointLevel: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "isAtEndpointLevel"
            },
            hasDiscriminator: {
              type: "boolean",
              dataTypeDisplayText: "boolean",
              paramType: "Query",
              title: "hasDiscriminator"
            },
            scalarValue: {
              oneOf: [
                {
                  type: "number"
                },
                {
                  anyOf: [
                    {
                      type: "boolean"
                    },
                    {
                      type: "integer"
                    }
                  ]
                }
              ],
              dataTypeDisplayText: "OneOfScalarValue7",
              paramType: "Body",
              title: "scalarValue"
            }
          },
          required: [
            "isPrimitiveType",
            "isAtEndpointLevel",
            "hasDiscriminator",
            "scalarValue"
          ]
        }
      },
      required: ["args"]
    },
    formData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false
      }
    },
    originalFormData: {
      args: {
        isPrimitiveType: false,
        isAtEndpointLevel: false,
        hasDiscriminator: false,
        scalarValue: {
          $$__case: 1,
          $$__case_of: "oneOf",
          value: {
            $$__case: 1,
            $$__case_of: "anyOf"
          }
        }
      }
    }
  }
};
