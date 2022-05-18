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
            id: "PierbridgeRateRequest",
            title: "body",
            xml: {
              name: "PierbridgeRateRequest",
              namespace: "https://www.wisetechglobal.com/",
              prefix: "wtg",
              attribute: false,
              wrapped: false
            },
            type: "object",
            properties: {
              UserName: {
                description:
                  "The user name to use when processing the transaction.",
                xml: {
                  name: "UserName",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "UserName",
                typeCombinatorTypes: null
              },
              Carrier: {
                description:
                  "Numeric identifier for the carrier.<br>**Default**: `0`",
                example: 0,
                xml: {
                  name: "Carrier",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "integer",
                dataTypeDisplayText: "int",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Carrier",
                typeCombinatorTypes: null
              },
              ServiceType: {
                description:
                  "Numeric identifier for the carrier service.<br>**Default**: `0`",
                example: 0,
                xml: {
                  name: "ServiceType",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "integer",
                dataTypeDisplayText: "int",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ServiceType",
                typeCombinatorTypes: null
              },
              Receiver: {
                id: "Receiver",
                title: "Receiver",
                description:
                  "Container for the receiver address details associated with the transaction.",
                xml: {
                  name: "Receiver",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  CompanyName: {
                    description:
                      "The company name associated with the address.",
                    xml: {
                      name: "CompanyName",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "CompanyName",
                    typeCombinatorTypes: null
                  },
                  Street: {
                    description: "First line of the address.",
                    xml: {
                      name: "Street",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Street",
                    typeCombinatorTypes: null
                  },
                  Locale: {
                    description: "Second line of the address.",
                    xml: {
                      name: "Locale",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Locale",
                    typeCombinatorTypes: null
                  },
                  Other: {
                    description: "Third line of the address.",
                    xml: {
                      name: "Other",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Other",
                    typeCombinatorTypes: null
                  },
                  City: {
                    description: "City of the address.",
                    xml: {
                      name: "City",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "City",
                    typeCombinatorTypes: null
                  },
                  Region: {
                    description: "The state or region of the address.",
                    xml: {
                      name: "Region",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Region",
                    typeCombinatorTypes: null
                  },
                  RegionName: {
                    description:
                      "The name of the region associated with the address, this value will be automatically added if available.",
                    xml: {
                      name: "RegionName",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "RegionName",
                    typeCombinatorTypes: null
                  },
                  PostalCode: {
                    description:
                      "The postal code or zip associated with the address.",
                    xml: {
                      name: "PostalCode",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "PostalCode",
                    typeCombinatorTypes: null
                  },
                  Country: {
                    description: "The country code for the address.",
                    xml: {
                      name: "Country",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Country",
                    typeCombinatorTypes: null
                  },
                  CountryName: {
                    description:
                      "The name of the country associated with the address, this value will be automatically added if available.",
                    xml: {
                      name: "CountryName",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "CountryName",
                    typeCombinatorTypes: null
                  },
                  Residential: {
                    description:
                      "Indicates whether the address is residential or commercial.<br>**Default**: `false`",
                    xml: {
                      name: "Residential",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Residential",
                    typeCombinatorTypes: null
                  },
                  Phone: {
                    description: "The receiver's phone number.",
                    xml: {
                      name: "Phone",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Phone",
                    typeCombinatorTypes: null
                  },
                  DepartmentName: {
                    description:
                      "Name of the department that the shipment is to be delivered to. Only used for special 'In-building' deliveries.",
                    xml: {
                      name: "DepartmentName",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "DepartmentName",
                    typeCombinatorTypes: null
                  },
                  IDNumber: {
                    description: "Identification number of receiver.",
                    xml: {
                      name: "IDNumber",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "IDNumber",
                    typeCombinatorTypes: null
                  },
                  IDType: {
                    title: "IDType",
                    description: "ID Number Type",
                    example: 1,
                    xml: {
                      name: "IDType",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    "x-enum-elements": [
                      {
                        name: "Enum_1",
                        description: ""
                      },
                      {
                        name: "Enum_2",
                        description: ""
                      },
                      {
                        name: "Enum_3",
                        description: ""
                      },
                      {
                        name: "Enum_4",
                        description: ""
                      }
                    ],
                    type: "integer",
                    enum: [1, 2, 3, 4, null],
                    dataTypeDisplayText: "IDTypeEnum",
                    dataTypeLink: "/java/models/enumerations/id-type",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  },
                  TaxNumber: {
                    description: "Tax identification number of receiver.",
                    xml: {
                      name: "TaxNumber",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "TaxNumber",
                    typeCombinatorTypes: null
                  },
                  TaxType: {
                    title: "TaxType",
                    description: "Tax Number Type",
                    example: 0,
                    xml: {
                      name: "TaxType",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    "x-enum-elements": [
                      {
                        name: "Enum_0",
                        description: ""
                      },
                      {
                        name: "Enum_1",
                        description: ""
                      },
                      {
                        name: "Enum_2",
                        description: ""
                      },
                      {
                        name: "Enum_3",
                        description: ""
                      },
                      {
                        name: "Enum_4",
                        description: ""
                      }
                    ],
                    type: "integer",
                    enum: [0, 1, 2, 3, 4, null],
                    dataTypeDisplayText: "TaxTypeEnum",
                    dataTypeLink: "/java/models/enumerations/tax-type",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  }
                },
                dataTypeDisplayText: "Receiver",
                dataTypeLink: "/java/models/structures/receiver",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              Localization: {
                id: "Localization",
                title: "Localization",
                description:
                  "Container for the additional rate types to be requested by the transaction.",
                xml: {
                  name: "Localization",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  WeightUnits: {
                    description: "Weight units in use by the current user.",
                    xml: {
                      name: "WeightUnits",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "WeightUnits",
                    typeCombinatorTypes: null
                  },
                  DimensionUnits: {
                    description: "Dimension units in use by the current user.",
                    xml: {
                      name: "DimensionUnits",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "DimensionUnits",
                    typeCombinatorTypes: null
                  },
                  CurrencyCode: {
                    description:
                      "ISO currency code in use by the current user.",
                    xml: {
                      name: "CurrencyCode",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "CurrencyCode",
                    typeCombinatorTypes: null
                  },
                  Culture: {
                    description: "Culture code in use by the current user.",
                    xml: {
                      name: "Culture",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Culture",
                    typeCombinatorTypes: null
                  }
                },
                dataTypeDisplayText: "Localization",
                dataTypeLink: "/java/models/structures/localization",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              DisplayRateTypeID: {
                description:
                  "Identifier of the rate used for display to the user.<br>**Default**: `0`",
                xml: {
                  name: "DisplayRateTypeID",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "integer",
                default: 0,
                dataTypeDisplayText: "Integer",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DisplayRateTypeID",
                typeCombinatorTypes: null
              },
              UpdateRateTypeID: {
                description:
                  "Identifier of the rate used to update the host system.<br>**Default**: `0`",
                xml: {
                  name: "UpdateRateTypeID",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "integer",
                default: 0,
                dataTypeDisplayText: "Integer",
                dataTypeMarkdown: null,
                paramType: null,
                title: "UpdateRateTypeID",
                typeCombinatorTypes: null
              },
              OtherRateTypeID: {
                description:
                  "Identifier of any other rate required in the response.<br>**Default**: `0`",
                xml: {
                  name: "OtherRateTypeID",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "integer",
                default: 0,
                dataTypeDisplayText: "Integer",
                dataTypeMarkdown: null,
                paramType: null,
                title: "OtherRateTypeID",
                typeCombinatorTypes: null
              },
              OtherRateTypes: {
                id: "OtherRateTypes",
                title: "OtherRateTypes",
                description:
                  "Container for the additional rate types to be requested by the transaction.",
                xml: {
                  name: "OtherRateTypes",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  RateTypeID: {
                    description:
                      "Identifier of any other rate required in the response.",
                    xml: {
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "array",
                    default: 0,
                    items: {
                      xml: {
                        name: "RateTypeID",
                        attribute: false,
                        wrapped: false
                      },
                      type: "integer",
                      dataTypeDisplayText: "Integer"
                    },
                    dataTypeDisplayText: "List<Integer>",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "RateTypeID",
                    typeCombinatorTypes: null
                  }
                },
                dataTypeDisplayText: "OtherRateTypes",
                dataTypeLink: "/java/models/structures/other-rate-types",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              IsReturn: {
                description:
                  "Identifier to indicate that this is a rate for a return shipment. This flag is only supported by a limited number of carriers.<br>**Default**: `false`",
                xml: {
                  name: "IsReturn",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "IsReturn",
                typeCombinatorTypes: null
              },
              TransactionIdentifier: {
                description:
                  "A unique identifier for the transaction, this value is not used during processing and will be returned in the response.",
                xml: {
                  name: "TransactionIdentifier",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "TransactionIdentifier",
                typeCombinatorTypes: null
              },
              ControlIdentifier: {
                description:
                  "A reference to a control which generated the request, this value is not used during processing and will be returned in the response.",
                xml: {
                  name: "ControlIdentifier",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ControlIdentifier",
                typeCombinatorTypes: null
              },
              DisableValidation: {
                description:
                  "Indicates whether to disable the internal validation rules for this request.<br>**Default**: `false`",
                xml: {
                  name: "DisableValidation",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DisableValidation",
                typeCombinatorTypes: null
              },
              ReverseSenderReceiverAddress: {
                description:
                  "Indicates whether to reverse the addresses past in the Sender and Receiver blocks to effectively process this as a shipment but in reverse. Not to be confused with the return request.<br>**Default**: `false`",
                xml: {
                  name: "ReverseSenderReceiverAddress",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ReverseSenderReceiverAddress",
                typeCombinatorTypes: null
              },
              Batch: {
                description:
                  "Internal node, set by shipments server during Batch processing. Do not use or set.",
                xml: {
                  name: "Batch",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "integer",
                dataTypeDisplayText: "Integer",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Batch",
                typeCombinatorTypes: null
              },
              ISOCurrencyId: {
                description:
                  "The ID of the ISO Currency code in use.<br>**Default**: `0`",
                xml: {
                  name: "ISOCurrencyId",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "integer",
                default: 0,
                dataTypeDisplayText: "Integer",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ISOCurrencyId",
                typeCombinatorTypes: null
              },
              RecordIdentifiers: {
                id: "RecordIdentifiers",
                title: "RecordIdentifiers",
                description: "Outer container for transaction identifiers.",
                xml: {
                  name: "RecordIdentifiers",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  RecordIdentifier: {
                    description: "Inner container for transaction identifiers.",
                    xml: {
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "array",
                    items: {
                      id: "RecordIdentifier",
                      title: "RecordIdentifier",
                      description:
                        "Inner container for transaction identifiers.",
                      xml: {
                        name: "RecordIdentifier",
                        namespace: "https://www.wisetechglobal.com/",
                        prefix: "wtg",
                        attribute: false,
                        wrapped: false
                      },
                      type: "object",
                      properties: {
                        Keys: {
                          id: "Keys",
                          title: "Keys",
                          description:
                            "Container for transaction identifiers to be stored.",
                          xml: {
                            name: "Keys",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "object",
                          properties: {
                            Key1: {
                              description: "Shipment-level record identifier.",
                              xml: {
                                name: "Key1",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Key1",
                              typeCombinatorTypes: null
                            },
                            Key2: {
                              description: "Shipment-level record identifier.",
                              xml: {
                                name: "Key2",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Key2",
                              typeCombinatorTypes: null
                            },
                            Key3: {
                              description: "Shipment-level record identifier.",
                              xml: {
                                name: "Key3",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Key3",
                              typeCombinatorTypes: null
                            },
                            Key4: {
                              description: "Shipment-level record identifier.",
                              xml: {
                                name: "Key4",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Key4",
                              typeCombinatorTypes: null
                            },
                            Key5: {
                              description: "Shipment-level record identifier.",
                              xml: {
                                name: "Key5",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Key5",
                              typeCombinatorTypes: null
                            },
                            Key6: {
                              description: "Shipment-level record identifier.",
                              xml: {
                                name: "Key6",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Key6",
                              typeCombinatorTypes: null
                            }
                          },
                          dataTypeDisplayText: "Keys",
                          dataTypeLink: "/java/models/structures/keys",
                          dataTypeMarkdown: null,
                          paramType: null,
                          typeCombinatorTypes: null
                        }
                      },
                      dataTypeDisplayText: "Record Identifier",
                      dataTypeLink: "/java/models/structures/record-identifier"
                    },
                    dataTypeDisplayText: "List<RecordIdentifier>",
                    dataTypeLink: "/java/models/structures/record-identifier",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "RecordIdentifier",
                    typeCombinatorTypes: null
                  }
                },
                dataTypeDisplayText: "RecordIdentifiers",
                dataTypeLink: "/java/models/structures/record-identifiers",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              BOLHandling: {
                id: "BOLHandling",
                title: "BOLHandling",
                description:
                  "Container to allow handling of BOL to be specified.",
                xml: {
                  name: "BOLHandling",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  Email: {
                    description:
                      "Specifies whether the BOL should be emailed. Defaults to false if not submitted.<br>**Default**: `false`",
                    xml: {
                      name: "Email",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Email",
                    typeCombinatorTypes: null
                  },
                  EmailAddress: {
                    description: "Email address to send the BOL to.",
                    xml: {
                      name: "EmailAddress",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "EmailAddress",
                    typeCombinatorTypes: null
                  }
                },
                dataTypeDisplayText: "BOLHandling",
                dataTypeLink: "/java/models/structures/bol-handling",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              Orders: {
                id: "Orders",
                title: "Orders",
                description:
                  "Container all orders associated with the transaction.",
                xml: {
                  name: "Orders",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  Order: {
                    description: "Container for an individual order.",
                    xml: {
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "array",
                    items: {
                      id: "Order",
                      title: "Order",
                      description: "Container for an individual order.",
                      xml: {
                        name: "Order",
                        namespace: "https://www.wisetechglobal.com/",
                        prefix: "wtg",
                        attribute: false,
                        wrapped: false
                      },
                      type: "object",
                      properties: {
                        OrderID: {
                          description:
                            "Identifier of the order being rated.<br>**Default**: `0`",
                          xml: {
                            name: "OrderID",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "integer",
                          default: 0,
                          dataTypeDisplayText: "Integer",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "OrderID",
                          typeCombinatorTypes: null
                        },
                        PickLists: {
                          id: "PickLists",
                          title: "PickLists",
                          description: "Container all order picklists.",
                          xml: {
                            name: "PickLists",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "object",
                          properties: {
                            PickList: {
                              description:
                                "Container for an individual picklist.",
                              xml: {
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "array",
                              items: {
                                id: "PickList",
                                title: "PickList",
                                description:
                                  "Container for an individual picklist.",
                                xml: {
                                  name: "PickList",
                                  namespace: "https://www.wisetechglobal.com/",
                                  prefix: "wtg",
                                  attribute: false,
                                  wrapped: false
                                },
                                type: "object",
                                properties: {
                                  PickListID: {
                                    description:
                                      "Identifier of the pick list being rated.<br>**Default**: `0`",
                                    xml: {
                                      name: "PickListID",
                                      namespace:
                                        "https://www.wisetechglobal.com/",
                                      prefix: "wtg",
                                      attribute: false,
                                      wrapped: false
                                    },
                                    type: "integer",
                                    default: 0,
                                    dataTypeDisplayText: "Integer",
                                    dataTypeMarkdown: null,
                                    paramType: null,
                                    title: "PickListID",
                                    typeCombinatorTypes: null
                                  }
                                },
                                dataTypeDisplayText: "Pick List",
                                dataTypeLink:
                                  "/java/models/structures/pick-list"
                              },
                              dataTypeDisplayText: "List<PickList>",
                              dataTypeLink: "/java/models/structures/pick-list",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "PickList",
                              typeCombinatorTypes: null
                            }
                          },
                          dataTypeDisplayText: "PickLists",
                          dataTypeLink: "/java/models/structures/pick-lists",
                          dataTypeMarkdown: null,
                          paramType: null,
                          typeCombinatorTypes: null
                        },
                        OrderNumber: {
                          description: "Order number of the order being rated.",
                          xml: {
                            name: "OrderNumber",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "OrderNumber",
                          typeCombinatorTypes: null
                        }
                      },
                      dataTypeDisplayText: "Order",
                      dataTypeLink: "/java/models/structures/order"
                    },
                    dataTypeDisplayText: "List<Order>",
                    dataTypeLink: "/java/models/structures/order",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Order",
                    typeCombinatorTypes: null
                  }
                },
                dataTypeDisplayText: "Orders",
                dataTypeLink: "/java/models/structures/orders",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              SalesOrderNumber: {
                description: "Sales order number of the order being shipped.",
                xml: {
                  name: "SalesOrderNumber",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "SalesOrderNumber",
                typeCombinatorTypes: null
              },
              PurchaseOrderNumber: {
                description:
                  "Purchase order number associated with the transaction.",
                xml: {
                  name: "PurchaseOrderNumber",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "PurchaseOrderNumber",
                typeCombinatorTypes: null
              },
              QuickRate: {
                description:
                  "Indicates whether the quote can be used for shipment or not.<br>**Default**: `false`",
                xml: {
                  name: "QuickRate",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "QuickRate",
                typeCombinatorTypes: null
              },
              InsuranceProvider: {
                description:
                  "Company that is to provide the insurance for the shipment.  Only provide a value if you are using a third party insurer.<br>**Default**: `0`",
                xml: {
                  name: "InsuranceProvider",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "integer",
                default: 0,
                dataTypeDisplayText: "Integer",
                dataTypeMarkdown: null,
                paramType: null,
                title: "InsuranceProvider",
                typeCombinatorTypes: null
              },
              Live: {
                description:
                  "Indicates whether the transaction is a test or live.  Defaults to system configured value if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "Live",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Live",
                typeCombinatorTypes: null
              },
              PackageType: {
                description:
                  "Carrier package (e.g. letter, package, pallet) that is to be shipped.<br>**Default**: `0`",
                xml: {
                  name: "PackageType",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "integer",
                default: 0,
                dataTypeDisplayText: "Integer",
                dataTypeMarkdown: null,
                paramType: null,
                title: "PackageType",
                typeCombinatorTypes: null
              },
              ShipDate: {
                description:
                  "Date the items are to be shipped. Defaults to current date if not submitted.",
                xml: {
                  name: "ShipDate",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ShipDate",
                typeCombinatorTypes: null
              },
              ShipAfterTime: {
                description:
                  "Time after which the carrier may pickup the shipment.",
                xml: {
                  name: "ShipAfterTime",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ShipAfterTime",
                typeCombinatorTypes: null
              },
              ShipBeforeTime: {
                description:
                  "Time before which the carrier may pickup the shipment.",
                xml: {
                  name: "ShipBeforeTime",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ShipBeforeTime",
                typeCombinatorTypes: null
              },
              HistoricRateDate: {
                description:
                  "Date that the Shipment should be rated against if using the Rating Engine.",
                xml: {
                  name: "HistoricRateDate",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "HistoricRateDate",
                typeCombinatorTypes: null
              },
              RequiredDate: {
                description:
                  "Date that the shipment is required to arrive at the receiver.",
                xml: {
                  name: "RequiredDate",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "RequiredDate",
                typeCombinatorTypes: null
              },
              SaturdayDelivery: {
                description:
                  "Indicates whether the shipment is intended for delivery on a Saturday.  Defaults to non-Saturday delivery if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "SaturdayDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "SaturdayDelivery",
                typeCombinatorTypes: null
              },
              SaturdayPickup: {
                description:
                  "Indicates whether the shipment is intended for pickup on a Saturday.  Defaults to non-Saturday pickup if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "SaturdayPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "SaturdayPickup",
                typeCombinatorTypes: null
              },
              SundayPickup: {
                description:
                  "Indicates whether the shipment is intended for pickup on a Sunday.  Defaults to non-Sunday pickup if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "SundayPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "SundayPickup",
                typeCombinatorTypes: null
              },
              AfterHoursDelivery: {
                description:
                  "Indicates whether the shipment will be performed after normal working hours.  Defaults to false if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "AfterHoursDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "AfterHoursDelivery",
                typeCombinatorTypes: null
              },
              CorrectedBOLFee: {
                description:
                  "Indicates whether a corrected Bill Of Lading fee is applicable.  Defaults to false if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "CorrectedBOLFee",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CorrectedBOLFee",
                typeCombinatorTypes: null
              },
              ResidentialFurnitureDelivery: {
                description:
                  "Indicates whether shipment is a residential furniture delivery.  Defaults to false if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "ResidentialFurnitureDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ResidentialFurnitureDelivery",
                typeCombinatorTypes: null
              },
              TarpingSurcharge: {
                description:
                  "Indicates whether a tarping surcharge is applicable to shipment.  Defaults to false if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "TarpingSurcharge",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "TarpingSurcharge",
                typeCombinatorTypes: null
              },
              DeliverOnlyToShipAddress: {
                description:
                  "Indicates that the shipment should only be delivered to the ship address and not be a dirverted to an alternate location.<br>**Default**: `false`",
                xml: {
                  name: "DeliverOnlyToShipAddress",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DeliverOnlyToShipAddress",
                typeCombinatorTypes: null
              },
              DeliverOnlyToAddressee: {
                description:
                  "Indicates that the shipment should only be delivered to the addressee.<br>**Default**: `false`",
                xml: {
                  name: "DeliverOnlyToAddressee",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DeliverOnlyToAddressee",
                typeCombinatorTypes: null
              },
              DryIceForMedicalUse: {
                description:
                  "Indicates Dry Ice in shipment for medical purposes.<br>**Default**: `false`",
                xml: {
                  name: "DryIceForMedicalUse",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DryIceForMedicalUse",
                typeCombinatorTypes: null
              },
              CarbonNeutral: {
                description:
                  "Indicates that the shipment should delivered in a carbon neutral manner.<br>**Default**: `false`",
                xml: {
                  name: "CarbonNeutral",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CarbonNeutral",
                typeCombinatorTypes: null
              },
              Location: {
                description:
                  "Overrides the sender's location to allow rating from any location.<br>**Default**: `0`",
                xml: {
                  name: "Location",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "integer",
                default: 0,
                dataTypeDisplayText: "Integer",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Location",
                typeCombinatorTypes: null
              },
              AccountID: {
                description:
                  "Overrides the sender's account to allow rating using any account.<br>**Default**: `0`",
                xml: {
                  name: "AccountID",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "integer",
                default: 0,
                dataTypeDisplayText: "Integer",
                dataTypeMarkdown: null,
                paramType: null,
                title: "AccountID",
                typeCombinatorTypes: null
              },
              Truckload: {
                description:
                  "Indicates whether this is a truckload shipment.  Defaults to not truckload if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "Truckload",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Truckload",
                typeCombinatorTypes: null
              },
              ShipmentDescription: {
                description: "Description of the shipment's contents.",
                xml: {
                  name: "ShipmentDescription",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ShipmentDescription",
                typeCombinatorTypes: null
              },
              FreightAllKinds: {
                description:
                  "Indicates whether to return FAK carriers.  Defaults to do not return FAK carriers if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "FreightAllKinds",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "FreightAllKinds",
                typeCombinatorTypes: null
              },
              Interline: {
                description:
                  "Indicates whether to return interline carriers.  Defaults to do not return interline carriers if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "Interline",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Interline",
                typeCombinatorTypes: null
              },
              PreferredCarrier: {
                description:
                  "Indicates whether to return only the receiver's preferred carrier.  Defaults to return all carriers if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "PreferredCarrier",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "PreferredCarrier",
                typeCombinatorTypes: null
              },
              PreferredCarrierCode: {
                description:
                  "If provided then only rates for the specified carrier are returned.",
                xml: {
                  name: "PreferredCarrierCode",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "PreferredCarrierCode",
                typeCombinatorTypes: null
              },
              AccessorialCodes: {
                description: "Accessorial codes that apply to the shipment.",
                xml: {
                  name: "AccessorialCodes",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "AccessorialCodes",
                typeCombinatorTypes: null
              },
              LoadingDockDelivery: {
                description:
                  "Indicates whether the address to be delivered to has a loading dock.  Defaults to no loading dock if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "LoadingDockDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "LoadingDockDelivery",
                typeCombinatorTypes: null
              },
              ConstructionSitePickup: {
                description:
                  "Indicates whether the address to be picked up from to is a construction site. Defaults to 'not a construction site' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "ConstructionSitePickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ConstructionSitePickup",
                typeCombinatorTypes: null
              },
              ConstructionSiteDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a construction site. Defaults to 'not a construction site' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "ConstructionSiteDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ConstructionSiteDelivery",
                typeCombinatorTypes: null
              },
              TradeShowPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a trade show. Defaults to 'not a trade show' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "TradeShowPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "TradeShowPickup",
                typeCombinatorTypes: null
              },
              TradeShowDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a trade show. Defaults to 'not a trade show' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "TradeShowDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "TradeShowDelivery",
                typeCombinatorTypes: null
              },
              Security: {
                description:
                  "Indicates whether the shipment requires a security fee.<br>**Default**: `false`",
                xml: {
                  name: "Security",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Security",
                typeCombinatorTypes: null
              },
              PriorDeliveryNotification: {
                description:
                  "Indicates whether the shipment requires a prior delivery notification.<br>**Default**: `false`",
                xml: {
                  name: "PriorDeliveryNotification",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "PriorDeliveryNotification",
                typeCombinatorTypes: null
              },
              Unpack: {
                description:
                  "Indicates whether the shipment requires an unpack delivery fee.<br>**Default**: `false`",
                xml: {
                  name: "Unpack",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Unpack",
                typeCombinatorTypes: null
              },
              HealthInsurance: {
                description:
                  "Indicates whether the shipment requires the package requires a Health Insurance fee.<br>**Default**: `false`",
                xml: {
                  name: "HealthInsurance",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "HealthInsurance",
                typeCombinatorTypes: null
              },
              SpecialDelivery: {
                description:
                  "Indicates whether the shipment requires a special delivery fee.<br>**Default**: `false`",
                xml: {
                  name: "SpecialDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "SpecialDelivery",
                typeCombinatorTypes: null
              },
              ForkliftDelivery: {
                description:
                  "Indicates whether the shipment requires a forklift delivery fee.<br>**Default**: `false`",
                xml: {
                  name: "ForkliftDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ForkliftDelivery",
                typeCombinatorTypes: null
              },
              InsidePickup: {
                description:
                  "Indicates whether the shipment is to be picked up inside.  Defaults to not inside pickup if omitted.<br>**Default**: `false`",
                xml: {
                  name: "InsidePickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "InsidePickup",
                typeCombinatorTypes: null
              },
              InsideDelivery: {
                description:
                  "Indicates whether the shipment is to be delivered inside.  Defaults to not inside delivery if omitted.<br>**Default**: `false`",
                xml: {
                  name: "InsideDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "InsideDelivery",
                typeCombinatorTypes: null
              },
              InsideDeliveryType: {
                description:
                  "Numeric identifer for the type of inside delivery.  Defaults to no inside delivery if not submitted.<br>**Constraints**: *Pattern*: `[1-5]`",
                xml: {
                  name: "InsideDeliveryType",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "integer",
                dataTypeDisplayText: "Integer",
                dataTypeMarkdown: null,
                paramType: null,
                title: "InsideDeliveryType",
                typeCombinatorTypes: null
              },
              LiftGateDelivery: {
                description:
                  "Indicates whether the address to be delivered to requires a lift gate.  Defaults to no lift gate required if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "LiftGateDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "LiftGateDelivery",
                typeCombinatorTypes: null
              },
              LiftGatePickup: {
                description:
                  "Indicates whether the address to be picked up from requires a lift gate.  Defaults to no lift gate required if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "LiftGatePickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "LiftGatePickup",
                typeCombinatorTypes: null
              },
              DoNotBreakDown: {
                description:
                  "Indicates whether the shipment pallets should not be broken down.<br>**Default**: `false`",
                xml: {
                  name: "DoNotBreakDown",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DoNotBreakDown",
                typeCombinatorTypes: null
              },
              DoNotStackPallets: {
                description:
                  "Indicates whether the shipment pallets should not be stacked.<br>**Default**: `false`",
                xml: {
                  name: "DoNotStackPallets",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DoNotStackPallets",
                typeCombinatorTypes: null
              },
              Oversized: {
                description:
                  "Indicates whether the shipment is over-sized or of extreme length.<br>**Default**: `false`",
                xml: {
                  name: "Oversized",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Oversized",
                typeCombinatorTypes: null
              },
              TopLoadOnly: {
                description:
                  "Freight specific top loading only.<br>**Default**: `false`",
                xml: {
                  name: "TopLoadOnly",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "TopLoadOnly",
                typeCombinatorTypes: null
              },
              Food: {
                description:
                  "Indicates whether the shipment contains food produce.<br>**Default**: `false`",
                xml: {
                  name: "Food",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Food",
                typeCombinatorTypes: null
              },
              Poison: {
                description:
                  "Indicates whether the shipment contains poisonous goods.<br>**Default**: `false`",
                xml: {
                  name: "Poison",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Poison",
                typeCombinatorTypes: null
              },
              AppointmentDelivery: {
                description:
                  "Indicates whether an appointment must be made prior to delivery.  Defaults to no appointment needed if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "AppointmentDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "AppointmentDelivery",
                typeCombinatorTypes: null
              },
              AppointmentPickup: {
                description:
                  "Indicates whether an appointment must be made prior to pick up.  Defaults to no appointment needed if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "AppointmentPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "AppointmentPickup",
                typeCombinatorTypes: null
              },
              NineAMDelivery: {
                description:
                  "Indicates whether a shipment should be delivered before 9AM.<br>**Default**: `false`",
                xml: {
                  name: "NineAMDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "NineAMDelivery",
                typeCombinatorTypes: null
              },
              DeliverToDoor: {
                description:
                  "Indicates whether the package should be delivered to door.<br>**Default**: `false`",
                xml: {
                  name: "DeliverToDoor",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DeliverToDoor",
                typeCombinatorTypes: null
              },
              DeliveryWindow: {
                description:
                  "Indicates whether a delivery window has been specified for this shipment.<br>**Default**: `false`",
                xml: {
                  name: "DeliveryWindow",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DeliveryWindow",
                typeCombinatorTypes: null
              },
              DeliveryWindowAfterDate: {
                description:
                  "Indicates the date from which the shipment can be delivered.",
                xml: {
                  name: "DeliveryWindowAfterDate",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DeliveryWindowAfterDate",
                typeCombinatorTypes: null
              },
              DeliveryWindowAfterTime: {
                description:
                  "Indicates the time from which the shipment can be delivered.",
                xml: {
                  name: "DeliveryWindowAfterTime",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DeliveryWindowAfterTime",
                typeCombinatorTypes: null
              },
              DeliveryWindowBeforeDate: {
                description:
                  "Indicates the date after which the shipment should not be delivered.",
                xml: {
                  name: "DeliveryWindowBeforeDate",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DeliveryWindowBeforeDate",
                typeCombinatorTypes: null
              },
              DeliveryWindowBeforeTime: {
                description:
                  "Indicates the time after which the shipment should not be delivered.",
                xml: {
                  name: "DeliveryWindowBeforeTime",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DeliveryWindowBeforeTime",
                typeCombinatorTypes: null
              },
              AuthorizationID: {
                description:
                  "Authorization ID for an associated special service.",
                xml: {
                  name: "AuthorizationID",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "AuthorizationID",
                typeCombinatorTypes: null
              },
              UnloadFreightAtDelivery: {
                description:
                  "Indicates whether the shipment requires unloading on delivery.  Defaults to unloading not required if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "UnloadFreightAtDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "UnloadFreightAtDelivery",
                typeCombinatorTypes: null
              },
              LoadFreightAtPickup: {
                description:
                  "Indicates whether the shipment requires loading on pick up.  Defaults to loading not required if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "LoadFreightAtPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "LoadFreightAtPickup",
                typeCombinatorTypes: null
              },
              WhiteGlove: {
                description:
                  "Indicates whether the shipment requires white glove handling.  Defaults to white glove handling not required if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "WhiteGlove",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "WhiteGlove",
                typeCombinatorTypes: null
              },
              TwoManDelivery: {
                description:
                  "Indicates whether the shipment requires a two man delivery.  Defaults to two man delivery not required if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "TwoManDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "TwoManDelivery",
                typeCombinatorTypes: null
              },
              PalletExchange: {
                description:
                  "Indicates whether the shipment requires pallet exchange.  Defaults to pallet exchange not required if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "PalletExchange",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "PalletExchange",
                typeCombinatorTypes: null
              },
              SortAndSegregate: {
                description:
                  "Indicates whether the shipment requires sorting and segregating.  Defaults to sorting and segregating not required if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "SortAndSegregate",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "SortAndSegregate",
                typeCombinatorTypes: null
              },
              Wholesaler: {
                description:
                  "Indicates whether the shipment requires wholesaling.  Defaults to Wholesaling not required if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "Wholesaler",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Wholesaler",
                typeCombinatorTypes: null
              },
              TobaccoReportingCharge: {
                description:
                  "Indicates whether the shipment requires tobacco reporting charge.  Defaults to tobacco reporting charge not required if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "TobaccoReportingCharge",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "TobaccoReportingCharge",
                typeCombinatorTypes: null
              },
              Bulkhead: {
                description:
                  "Indicates whether the shipment requires bulkhead.  Defaults to bulkhead not required if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "Bulkhead",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Bulkhead",
                typeCombinatorTypes: null
              },
              CallBeforeDelivery: {
                description:
                  "Indicates whether the shipment requires call before delivery, arrival notice, notify charge.  Defaults to call before delivery not required if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "CallBeforeDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CallBeforeDelivery",
                typeCombinatorTypes: null
              },
              HighCostDeliverySurcharge: {
                description:
                  "Indicates whether the shipment requires high cost delivery surcharge.  Defaults to high cost delivery surcharge not required if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "HighCostDeliverySurcharge",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "HighCostDeliverySurcharge",
                typeCombinatorTypes: null
              },
              LimitedAccessDelivery: {
                description:
                  "Indicates whether the shipment requires limited access delivery charge.  Defaults to limited access delivery charge not required if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "LimitedAccessDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "LimitedAccessDelivery",
                typeCombinatorTypes: null
              },
              RemoteLocationSurcharge: {
                description:
                  "Indicates whether the shipment requires remote location surcharge.  Defaults to remote location surcharge not required if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "RemoteLocationSurcharge",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "RemoteLocationSurcharge",
                typeCombinatorTypes: null
              },
              AMDelivery: {
                description:
                  "Indicates whether the shipment is an AM Delivery.  Defaults to false if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "AMDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "AMDelivery",
                typeCombinatorTypes: null
              },
              SingleShipment: {
                description:
                  "Indicates whether the shipment is a single shipment.  Defaults to false if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "SingleShipment",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "SingleShipment",
                typeCombinatorTypes: null
              },
              LimitedAccessPickup: {
                description:
                  "Indicates whether the shipment is to be picked up from a location with limited access.  Defaults to false if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "LimitedAccessPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "LimitedAccessPickup",
                typeCombinatorTypes: null
              },
              AirportPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a airport. Defaults to 'not a airport' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "AirportPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "AirportPickup",
                typeCombinatorTypes: null
              },
              CampPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a camp. Defaults to 'not a camp' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "CampPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CampPickup",
                typeCombinatorTypes: null
              },
              CertifiedPickup: {
                description:
                  "Indicates whether the address to be picked up from to is certified. Defaults to 'not certified' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "CertifiedPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CertifiedPickup",
                typeCombinatorTypes: null
              },
              ChurchPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a church. Defaults to 'not a church' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "ChurchPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ChurchPickup",
                typeCombinatorTypes: null
              },
              CountryClubPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a country club. Defaults to 'not a country club' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "CountryClubPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CountryClubPickup",
                typeCombinatorTypes: null
              },
              CommercialPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a commercial pickup. Defaults to 'not a commercial pickup' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "CommercialPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CommercialPickup",
                typeCombinatorTypes: null
              },
              DockPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a dock. Defaults to 'not a dock' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "DockPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DockPickup",
                typeCombinatorTypes: null
              },
              DeclaredValuePickup: {
                description:
                  "Indicates whether the address to be picked up from to is a declared value pickup. Defaults to 'not a declared value pickup' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "DeclaredValuePickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DeclaredValuePickup",
                typeCombinatorTypes: null
              },
              SchoolPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a school. Defaults to 'not a school' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "SchoolPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "SchoolPickup",
                typeCombinatorTypes: null
              },
              FarmPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a farm. Defaults to 'not a farm' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "FarmPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "FarmPickup",
                typeCombinatorTypes: null
              },
              FlatbedPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a flat bed pickup. Defaults to 'not a flat bed pickup' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "FlatbedPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "FlatbedPickup",
                typeCombinatorTypes: null
              },
              GovernmentSitePickup: {
                description:
                  "Indicates whether the address to be picked up from to is a government site. Defaults to 'not a government site' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "GovernmentSitePickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "GovernmentSitePickup",
                typeCombinatorTypes: null
              },
              GroceryWarehousePickup: {
                description:
                  "Indicates whether the address to be picked up from to is a grocery warehouse. Defaults to 'not a grovery warehouse' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "GroceryWarehousePickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "GroceryWarehousePickup",
                typeCombinatorTypes: null
              },
              HolidayPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a holiday pickup. Defaults to 'not a holiday pickup' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "HolidayPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "HolidayPickup",
                typeCombinatorTypes: null
              },
              HospitalPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a hospital. Defaults to 'not a hospital' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "HospitalPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "HospitalPickup",
                typeCombinatorTypes: null
              },
              HotelPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a hotel. Defaults to 'not a hotel' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "HotelPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "HotelPickup",
                typeCombinatorTypes: null
              },
              MallPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a mail pickup. Defaults to 'not a mail pickup' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "MallPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "MallPickup",
                typeCombinatorTypes: null
              },
              MilitaryInstallationPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a military installation. Defaults to 'not a military installation' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "MilitaryInstallationPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "MilitaryInstallationPickup",
                typeCombinatorTypes: null
              },
              MineSitePickup: {
                description:
                  "Indicates whether the address to be picked up from to is a mine. Defaults to 'not a mine' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "MineSitePickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "MineSitePickup",
                typeCombinatorTypes: null
              },
              NativeAmericanReservationPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a native american reservation. Defaults to 'not a native american reservation' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "NativeAmericanReservationPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "NativeAmericanReservationPickup",
                typeCombinatorTypes: null
              },
              NonBusinessHoursPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a non business hours pickup. Defaults to 'not a non business hours pickup' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "NonBusinessHoursPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "NonBusinessHoursPickup",
                typeCombinatorTypes: null
              },
              NonCommercialPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a non commercial pickup. Defaults to 'not a non commercial pickup' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "NonCommercialPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "NonCommercialPickup",
                typeCombinatorTypes: null
              },
              NursingHomePickup: {
                description:
                  "Indicates whether the address to be picked up from to is a nursing home. Defaults to 'not a nursing home' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "NursingHomePickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "NursingHomePickup",
                typeCombinatorTypes: null
              },
              OversizedPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a oversized pickup. Defaults to 'not a oversized pickup' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "OversizedPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "OversizedPickup",
                typeCombinatorTypes: null
              },
              FairAmusementParkPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a fair, amusements or park. Defaults to 'not a fair, amusements or park' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "FairAmusementParkPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "FairAmusementParkPickup",
                typeCombinatorTypes: null
              },
              PierPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a pier. Defaults to 'not a pier' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "PierPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "PierPickup",
                typeCombinatorTypes: null
              },
              PalletJackPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a pallet jack pickup. Defaults to 'not a pallet jack pickup' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "PalletJackPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "PalletJackPickup",
                typeCombinatorTypes: null
              },
              PrisonPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a prison. Defaults to 'not a prison' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "PrisonPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "PrisonPickup",
                typeCombinatorTypes: null
              },
              ResortPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a resort. Defaults to 'not a resort' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "ResortPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ResortPickup",
                typeCombinatorTypes: null
              },
              SortSegregatePickup: {
                description:
                  "Indicates whether the address to be picked up from to is a sort segregate pickup. Defaults to 'not a sort segregate pickup' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "SortSegregatePickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "SortSegregatePickup",
                typeCombinatorTypes: null
              },
              SelfStoragePickup: {
                description:
                  "Indicates whether the address to be picked up from to is a self storage pickup. Defaults to 'not a self storage pickup' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "SelfStoragePickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "SelfStoragePickup",
                typeCombinatorTypes: null
              },
              UtilitySitePickup: {
                description:
                  "Indicates whether the address to be picked up from to is a utility site. Defaults to 'not a utility site' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "UtilitySitePickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "UtilitySitePickup",
                typeCombinatorTypes: null
              },
              WeekendPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a weekend pickup. Defaults to 'not a weekend pickup' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "WeekendPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "WeekendPickup",
                typeCombinatorTypes: null
              },
              PalletExchangePickup: {
                description:
                  "Indicates whether the address to be picked up from to is a pallet exchange pickup. Defaults to 'not a pallet exchange pickup' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "PalletExchangePickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "PalletExchangePickup",
                typeCombinatorTypes: null
              },
              DockTransferPickup: {
                description:
                  "Indicates whether the address to be picked up from to is a dock transfer pickup. Defaults to 'not a dock transfer pickup' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "DockTransferPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DockTransferPickup",
                typeCombinatorTypes: null
              },
              AirportDelivery: {
                description:
                  "Indicates whether the address to be delivered to is an airport. Defaults to 'not an airport' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "AirportDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "AirportDelivery",
                typeCombinatorTypes: null
              },
              AdvancedCollection: {
                description:
                  "Indicates whether the delivery is an advanced delivery. Defaults to 'not an AdvancedCollection' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "AdvancedCollection",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "AdvancedCollection",
                typeCombinatorTypes: null
              },
              CampDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a camp. Defaults to 'not a camp' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "CampDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CampDelivery",
                typeCombinatorTypes: null
              },
              ChurchDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a church. Defaults to 'not a church' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "ChurchDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ChurchDelivery",
                typeCombinatorTypes: null
              },
              CountryClubDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a country club. Defaults to 'not a country club' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "CountryClubDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CountryClubDelivery",
                typeCombinatorTypes: null
              },
              CommercialDelivery: {
                description:
                  "Indicates whether the address to be delivered to is commercial. Defaults to 'not commercial' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "CommercialDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CommercialDelivery",
                typeCombinatorTypes: null
              },
              DistributionCenterDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a distribution center. Defaults to 'not a distribution center' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "DistributionCenterDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DistributionCenterDelivery",
                typeCombinatorTypes: null
              },
              DeclaredValueDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a declared value delivery. Defaults to 'not a declared value delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "DeclaredValueDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DeclaredValueDelivery",
                typeCombinatorTypes: null
              },
              SchoolDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a school. Defaults to 'not a school' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "SchoolDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "SchoolDelivery",
                typeCombinatorTypes: null
              },
              EmergencyDelivery: {
                description:
                  "Indicates whether the address to be delivered to is an emergency delivery. Defaults to 'not an emergency delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "EmergencyDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "EmergencyDelivery",
                typeCombinatorTypes: null
              },
              FarmDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a farm. Defaults to 'not a farm' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "FarmDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "FarmDelivery",
                typeCombinatorTypes: null
              },
              FlatbedDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a flat bed delivery. Defaults to 'not a flat bed delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "FlatbedDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "FlatbedDelivery",
                typeCombinatorTypes: null
              },
              GovernmentSiteDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a government site. Defaults to 'not a government site' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "GovernmentSiteDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "GovernmentSiteDelivery",
                typeCombinatorTypes: null
              },
              GroceryWarehouseDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a grocery warehouse. Defaults to 'not a grocery warehouse' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "GroceryWarehouseDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "GroceryWarehouseDelivery",
                typeCombinatorTypes: null
              },
              HospitalDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a hospital. Defaults to 'not a hospital' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "HospitalDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "HospitalDelivery",
                typeCombinatorTypes: null
              },
              HotelDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a hotel. Defaults to 'not a hotel' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "HotelDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "HotelDelivery",
                typeCombinatorTypes: null
              },
              MallDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a mall. Defaults to 'not a mall' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "MallDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "MallDelivery",
                typeCombinatorTypes: null
              },
              MilitaryInstallationDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a military installation site. Defaults to 'not a military installation site' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "MilitaryInstallationDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "MilitaryInstallationDelivery",
                typeCombinatorTypes: null
              },
              MineSiteDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a mine site. Defaults to 'not a mine site' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "MineSiteDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "MineSiteDelivery",
                typeCombinatorTypes: null
              },
              NativeAmericanReservationDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a native american reservation. Defaults to 'not a native american reservation' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "NativeAmericanReservationDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "NativeAmericanReservationDelivery",
                typeCombinatorTypes: null
              },
              NonBusinessHoursDelivery: {
                description:
                  "Indicates whether the delivery will be outside of business hours. Defaults to 'inside business hours' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "NonBusinessHoursDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "NonBusinessHoursDelivery",
                typeCombinatorTypes: null
              },
              NonCommercialDelivery: {
                description:
                  "Indicates whether the delivery is not commercial. Defaults to 'commercial' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "NonCommercialDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "NonCommercialDelivery",
                typeCombinatorTypes: null
              },
              NursingHomeDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a nursing home. Defaults to 'not a nursing home' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "NursingHomeDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "NursingHomeDelivery",
                typeCombinatorTypes: null
              },
              OversizedDelivery: {
                description:
                  "Indicates whether the delivery is oversized. Defaults to 'not oversized' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "OversizedDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "OversizedDelivery",
                typeCombinatorTypes: null
              },
              FairAmusementParkDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a fair, amusements or park. Defaults to 'not a fair, amusements or park' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "FairAmusementParkDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "FairAmusementParkDelivery",
                typeCombinatorTypes: null
              },
              PierDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a pier. Defaults to 'not a pier' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "PierDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "PierDelivery",
                typeCombinatorTypes: null
              },
              PalletJackDelivery: {
                description:
                  "Indicates whether a pallet jack is required for delivery. Defaults to 'not a pallet jack is not required' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "PalletJackDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "PalletJackDelivery",
                typeCombinatorTypes: null
              },
              PrisonDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a prison. Defaults to 'not a prison' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "PrisonDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "PrisonDelivery",
                typeCombinatorTypes: null
              },
              ResortDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a resort. Defaults to 'not a resort' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "ResortDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ResortDelivery",
                typeCombinatorTypes: null
              },
              SortSegregateDelivery: {
                description:
                  "Indicates whether the delivery is a sort segration. Defaults to 'not a sort segration' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "SortSegregateDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "SortSegregateDelivery",
                typeCombinatorTypes: null
              },
              SelfStorageDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a self storage facility. Defaults to 'not a self storage facility' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "SelfStorageDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "SelfStorageDelivery",
                typeCombinatorTypes: null
              },
              UtilitySiteDelivery: {
                description:
                  "Indicates whether the address to be delivered to is a utility site. Defaults to 'not a utility site' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "UtilitySiteDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "UtilitySiteDelivery",
                typeCombinatorTypes: null
              },
              PalletExchangeDelivery: {
                description:
                  "Indicates that this is a pallet exchange delivery. Defaults to 'not a pallet exchange delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "PalletExchangeDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "PalletExchangeDelivery",
                typeCombinatorTypes: null
              },
              DockTransferDelivery: {
                description:
                  "Indicates that this is a dock transfer delivery. Defaults to 'not a dock transfer delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "DockTransferDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DockTransferDelivery",
                typeCombinatorTypes: null
              },
              AfterHoursCharge: {
                description:
                  "Indicates that this after hours charge delivery. Defaults to 'not a after hours charge delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "AfterHoursCharge",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "AfterHoursCharge",
                typeCombinatorTypes: null
              },
              AirFreight: {
                description:
                  "Indicates that this is a air freight delivery. Defaults to 'not a air freight delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "AirFreight",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "AirFreight",
                typeCombinatorTypes: null
              },
              AirBag: {
                description:
                  "Indicates that this is a air bag delivery. Defaults to 'not a air bag delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "AirBag",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "AirBag",
                typeCombinatorTypes: null
              },
              ArbitraryCharge: {
                description:
                  "Indicates that this is a arbitrary charge delivery. Defaults to 'not a arbitrary charge delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "ArbitraryCharge",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ArbitraryCharge",
                typeCombinatorTypes: null
              },
              BagLiner: {
                description:
                  "Indicates that this is a bag liner delivery. Defaults to 'not a bag liner delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "BagLiner",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "BagLiner",
                typeCombinatorTypes: null
              },
              BlindShipment: {
                description:
                  "Indicates that this is a blind shipment. Defaults to 'not a blind shipment' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "BlindShipment",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "BlindShipment",
                typeCombinatorTypes: null
              },
              Bobtail: {
                description:
                  "Indicates that this is a bobtail delivery. Defaults to 'not a bobtail delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "Bobtail",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Bobtail",
                typeCombinatorTypes: null
              },
              InBondShipment: {
                description:
                  "Indicates that this is a in bond shipment delivery. Defaults to 'not a in bond shipment delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "InBondShipment",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "InBondShipment",
                typeCombinatorTypes: null
              },
              BeyondIndirectService: {
                description:
                  "Indicates that this is a beyond indirect service delivery. Defaults to 'not a beyond indirect service delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "BeyondIndirectService",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "BeyondIndirectService",
                typeCombinatorTypes: null
              },
              NorthboundCanadianBorderCrossingDocumentHandlingFee: {
                description:
                  "Indicates that this is a northbound canadian border crossing document handling fee delivery. Defaults to 'not a northbound canadian border crossing document handling fee delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "NorthboundCanadianBorderCrossingDocumentHandlingFee",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "NorthboundCanadianBorderCrossingDocumentHandlingFee",
                typeCombinatorTypes: null
              },
              CapacityLoadPup: {
                description:
                  "Indicates that this is a capacity load pup delivery. Defaults to 'not a capacity load pup delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "CapacityLoadPup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CapacityLoadPup",
                typeCombinatorTypes: null
              },
              CapacityLoadTrailer: {
                description:
                  "Indicates that this is a capacity load trailer. Defaults to 'not a capacity load trailer delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "CapacityLoadTrailer",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CapacityLoadTrailer",
                typeCombinatorTypes: null
              },
              ChassisTruck: {
                description:
                  "Indicates that this is a chassis truck delivery. Defaults to 'not a chassis truck delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "ChassisTruck",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ChassisTruck",
                typeCombinatorTypes: null
              },
              ChangeofBOL: {
                description:
                  "Indicates that this is a change of BOL delivery. Defaults to 'not a change of BOL delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "ChangeofBOL",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ChangeofBOL",
                typeCombinatorTypes: null
              },
              Consolidation: {
                description:
                  "Indicates that this is a consolidation delivery. Defaults to 'not a consolidation delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "Consolidation",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Consolidation",
                typeCombinatorTypes: null
              },
              CorrectedBOL: {
                description:
                  "Indicates that this is a corrected BOL delivery. Defaults to 'not a corrected BOL delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "CorrectedBOL",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CorrectedBOL",
                typeCombinatorTypes: null
              },
              CranePermits: {
                description:
                  "Indicates that this is a crane permits delivery. Defaults to 'not a crane permits delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "CranePermits",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CranePermits",
                typeCombinatorTypes: null
              },
              RedelivertoConsignee: {
                description:
                  "Indicates that this is a redeliver to consignee delivery. Defaults to 'not a redeliver to consignee delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "RedelivertoConsignee",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "RedelivertoConsignee",
                typeCombinatorTypes: null
              },
              CrossDock: {
                description:
                  "Indicates that this is a cross dock delivery. Defaults to 'not a cross dock delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "CrossDock",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CrossDock",
                typeCombinatorTypes: null
              },
              DescriptionInspection: {
                description:
                  "Indicates that this is a description inspection delivery. Defaults to 'not a description inspection delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "DescriptionInspection",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DescriptionInspection",
                typeCombinatorTypes: null
              },
              Detention: {
                description:
                  "Indicates that this is a detention delivery. Defaults to 'not a detention delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "Detention",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Detention",
                typeCombinatorTypes: null
              },
              DelayCharge: {
                description:
                  "Indicates that this is a delay charge delivery. Defaults to 'not a delay charge delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "DelayCharge",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DelayCharge",
                typeCombinatorTypes: null
              },
              DriverAssistance: {
                description:
                  "Indicates that this is a driver assistance delivery. Defaults to 'not a driver assistance delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "DriverAssistance",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DriverAssistance",
                typeCombinatorTypes: null
              },
              Drayage: {
                description:
                  "Indicates that this is a drayage delivery. Defaults to 'not a drayage delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "Drayage",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Drayage",
                typeCombinatorTypes: null
              },
              DropPull: {
                description:
                  "Indicates that this is a drop pull delivery. Defaults to 'not a drop pull delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "DropPull",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DropPull",
                typeCombinatorTypes: null
              },
              DryRun: {
                description:
                  "Indicates that this is a dry run delivery. Defaults to 'not a dry run delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "DryRun",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DryRun",
                typeCombinatorTypes: null
              },
              Excessivevalue: {
                description:
                  "Indicates that this delivery has an excessive value. Defaults to 'not an excessive value' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "Excessivevalue",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Excessivevalue",
                typeCombinatorTypes: null
              },
              ExportShipment: {
                description:
                  "Indicates that this is a export shipment delivery. Defaults to 'not a export shipment delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "ExportShipment",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ExportShipment",
                typeCombinatorTypes: null
              },
              FlatTrack: {
                description:
                  "Indicates that this is a flat track delivery. Defaults to 'not a flat track delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "FlatTrack",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "FlatTrack",
                typeCombinatorTypes: null
              },
              ShipmentContainsFood: {
                description:
                  "Indicates that this is delivery contains food. Defaults to 'delivery does not contain food' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "ShipmentContainsFood",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ShipmentContainsFood",
                typeCombinatorTypes: null
              },
              Forklift: {
                description:
                  "Indicates that this is a fork lift delivery. Defaults to 'not a fork lift delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "Forklift",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Forklift",
                typeCombinatorTypes: null
              },
              HawaiianWillCall: {
                description:
                  "Indicates that this is a Hawaiian will call delivery. Defaults to 'not a Hawaiian will call delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "HawaiianWillCall",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "HawaiianWillCall",
                typeCombinatorTypes: null
              },
              HighDockEquipmentNeeded: {
                description:
                  "Indicates that this is a high dock equipment needed delivery. Defaults to 'not a high dock equipment needed delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "HighDockEquipmentNeeded",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "HighDockEquipmentNeeded",
                typeCombinatorTypes: null
              },
              HomeLandSecurity: {
                description:
                  "Indicates that this is a home land security delivery. Defaults to 'not a home land security delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "HomeLandSecurity",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "HomeLandSecurity",
                typeCombinatorTypes: null
              },
              HolidayWeekendService: {
                description:
                  "Indicates that this is a holiday weekend service delivery. Defaults to 'not a holiday weekend service delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "HolidayWeekendService",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "HolidayWeekendService",
                typeCombinatorTypes: null
              },
              ImportShipment: {
                description:
                  "Indicates that this is a import shipment delivery. Defaults to 'not a import shipment delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "ImportShipment",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ImportShipment",
                typeCombinatorTypes: null
              },
              InboundFreight: {
                description:
                  "Indicates that this is a inbound freight delivery. Defaults to 'not a inbound freight delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "InboundFreight",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "InboundFreight",
                typeCombinatorTypes: null
              },
              InterlineShipment: {
                description:
                  "Indicates that this is a interline shipment delivery. Defaults to 'not a interline shipment delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "InterlineShipment",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "InterlineShipment",
                typeCombinatorTypes: null
              },
              InterRegionalShipment: {
                description:
                  "Indicates that this is a inter regional shipment delivery. Defaults to 'not a inter regional shipment delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "InterRegionalShipment",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "InterRegionalShipment",
                typeCombinatorTypes: null
              },
              HandlingandLabeling: {
                description:
                  "Indicates that this is a handling and labeling delivery. Defaults to 'not a handling and labeling delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "HandlingandLabeling",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "HandlingandLabeling",
                typeCombinatorTypes: null
              },
              LiquorPermit: {
                description:
                  "Indicates that this is a liquor permit delivery. Defaults to 'not a liquor permit delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "LiquorPermit",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "LiquorPermit",
                typeCombinatorTypes: null
              },
              DriverLoad: {
                description:
                  "Indicates that this is a driver load delivery. Defaults to 'not a driver load delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "DriverLoad",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DriverLoad",
                typeCombinatorTypes: null
              },
              DriverLoadandCount: {
                description:
                  "Indicates that this is a driver load and count delivery. Defaults to 'not a driver load and count delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "DriverLoadandCount",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DriverLoadandCount",
                typeCombinatorTypes: null
              },
              DriverLoadUnload: {
                description:
                  "Indicates that this is a driver load / unload delivery. Defaults to 'not a driver load / unload delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "DriverLoadUnload",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DriverLoadUnload",
                typeCombinatorTypes: null
              },
              LumperService: {
                description:
                  "Indicates that this is a lumper service delivery. Defaults to 'not a lumper service delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "LumperService",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "LumperService",
                typeCombinatorTypes: null
              },
              Layover: {
                description:
                  "Indicates that this is a layover delivery. Defaults to 'not a layover delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "Layover",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Layover",
                typeCombinatorTypes: null
              },
              MarkingorTagging: {
                description:
                  "Indicates that this is a marking or tagging delivery. Defaults to 'not a marking or tagging delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "MarkingorTagging",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "MarkingorTagging",
                typeCombinatorTypes: null
              },
              NotifyBeforeDelivery: {
                description:
                  "Indicates that this is a notify before delivery. Defaults to 'not a notify before delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "NotifyBeforeDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "NotifyBeforeDelivery",
                typeCombinatorTypes: null
              },
              Over750Under6: {
                description:
                  "Indicates that this is a over 750 under 6 delivery. Defaults to 'not a over 750 under 6 delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "Over750Under6",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Over750Under6",
                typeCombinatorTypes: null
              },
              OilSands: {
                description:
                  "Indicates that this is a oil sands delivery. Defaults to 'not a oil sands delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "OilSands",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "OilSands",
                typeCombinatorTypes: null
              },
              OpenTopTruck: {
                description:
                  "Indicates that this is a open top truck delivery. Defaults to 'not a open top truck delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "OpenTopTruck",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "OpenTopTruck",
                typeCombinatorTypes: null
              },
              OverDimensionFreight: {
                description:
                  "Indicates that this is a over dimension freight delivery. Defaults to 'not a over dimension freight delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "OverDimensionFreight",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "OverDimensionFreight",
                typeCombinatorTypes: null
              },
              Overweight: {
                description:
                  "Indicates that this is a overweight delivery. Defaults to 'not a overweight delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "Overweight",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Overweight",
                typeCombinatorTypes: null
              },
              Pallet: {
                description:
                  "Indicates that this is a pallet delivery. Defaults to 'not a pallet delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "Pallet",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Pallet",
                typeCombinatorTypes: null
              },
              ProtectFromHeat: {
                description:
                  "Indicates that this is a protect from heat delivery. Defaults to 'not a protect from heat delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "ProtectFromHeat",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ProtectFromHeat",
                typeCombinatorTypes: null
              },
              ProtectFromFreezing: {
                description:
                  "Indicates that this is a protect from freezing delivery. Defaults to 'not a protect from freezing delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "ProtectFromFreezing",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ProtectFromFreezing",
                typeCombinatorTypes: null
              },
              ProtectFromFreezingCanada: {
                description:
                  "Indicates that this is a protect from freezing Canada delivery. Defaults to 'not a protect from freezing Canada delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "ProtectFromFreezingCanada",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ProtectFromFreezingCanada",
                typeCombinatorTypes: null
              },
              Permit: {
                description:
                  "Indicates that this is a permit delivery. Defaults to 'not a permit delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "Permit",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Permit",
                typeCombinatorTypes: null
              },
              ProtectiveService: {
                description:
                  "Indicates that this is a protective service delivery. Defaults to 'not a protective service delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "ProtectiveService",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ProtectiveService",
                typeCombinatorTypes: null
              },
              ProtectiveDrumCover: {
                description:
                  "Indicates that this is a protective drum cover delivery. Defaults to 'not a protective drum cover delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "ProtectiveDrumCover",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ProtectiveDrumCover",
                typeCombinatorTypes: null
              },
              ProtectivePalletCover: {
                description:
                  "Indicates that this is a protective pallet cover delivery. Defaults to 'not a protective pallet cover delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "ProtectivePalletCover",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ProtectivePalletCover",
                typeCombinatorTypes: null
              },
              ReconsignmentFee: {
                description:
                  "Indicates that this is a reconsignment fee delivery. Defaults to 'not a reconsignment fee delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "ReconsignmentFee",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ReconsignmentFee",
                typeCombinatorTypes: null
              },
              RefrigeratedVan: {
                description:
                  "Indicates that this is a refrigerated van delivery. Defaults to 'not a refrigerated van delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "RefrigeratedVan",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "RefrigeratedVan",
                typeCombinatorTypes: null
              },
              RegionalShipment: {
                description:
                  "Indicates that this is a regional shipment delivery. Defaults to 'not a regional shipment delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "RegionalShipment",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "RegionalShipment",
                typeCombinatorTypes: null
              },
              RemoveDebris: {
                description:
                  "Indicates that this is a removed debris delivery. Defaults to 'not a removed debris delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "RemoveDebris",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "RemoveDebris",
                typeCombinatorTypes: null
              },
              SecurityInspection: {
                description:
                  "Indicates that this is a security inspection delivery. Defaults to 'not a security inspection delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "SecurityInspection",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "SecurityInspection",
                typeCombinatorTypes: null
              },
              SpecialEquipmentNeeded: {
                description:
                  "Indicates that this is a special equipment needed delivery. Defaults to 'not a special equipment needed delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "SpecialEquipmentNeeded",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "SpecialEquipmentNeeded",
                typeCombinatorTypes: null
              },
              Storage: {
                description:
                  "Indicates that this is a storage delivery. Defaults to 'not a storage delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "Storage",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Storage",
                typeCombinatorTypes: null
              },
              StopOff: {
                description:
                  "Indicates that this is a stop off delivery. Defaults to 'not a stop off delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "StopOff",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "StopOff",
                typeCombinatorTypes: null
              },
              StraightTruck: {
                description:
                  "Indicates that this is a straight truck delivery. Defaults to 'not a straight truck delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "StraightTruck",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "StraightTruck",
                typeCombinatorTypes: null
              },
              TankerTruck: {
                description:
                  "Indicates that this is a tanker truck delivery. Defaults to 'not a tanker truck delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "TankerTruck",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "TankerTruck",
                typeCombinatorTypes: null
              },
              TruckNotUsed: {
                description:
                  "Indicates that this is a truck not used delivery. Defaults to 'not a truck not used delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "TruckNotUsed",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "TruckNotUsed",
                typeCombinatorTypes: null
              },
              TeamCharge: {
                description:
                  "Indicates that this is a team charge delivery. Defaults to 'not a team charge delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "TeamCharge",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "TeamCharge",
                typeCombinatorTypes: null
              },
              TSACertification: {
                description:
                  "Indicates that this is a TSA certification delivery. Defaults to 'not a TSA certification delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "TSACertification",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "TSACertification",
                typeCombinatorTypes: null
              },
              DriverUnload: {
                description:
                  "Indicates that this is a driver unload delivery. Defaults to 'not a driver unload delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "DriverUnload",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DriverUnload",
                typeCombinatorTypes: null
              },
              DriverUnloadandCount: {
                description:
                  "Indicates that this is a driver unload and count delivery. Defaults to 'not a driver unload and count delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "DriverUnloadandCount",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DriverUnloadandCount",
                typeCombinatorTypes: null
              },
              WeekendService: {
                description:
                  "Indicates that this is a weekend service delivery. Defaults to 'not a weekend service delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "WeekendService",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "WeekendService",
                typeCombinatorTypes: null
              },
              WeightInspection: {
                description:
                  "Indicates that this is a weight inspection delivery. Defaults to 'not a weight inspection delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "WeightInspection",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "WeightInspection",
                typeCombinatorTypes: null
              },
              WeightVerification: {
                description:
                  "Indicates that this is a weight verification delivery. Defaults to 'not a weight verification delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "WeightVerification",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "WeightVerification",
                typeCombinatorTypes: null
              },
              ExtraLabor: {
                description:
                  "Indicates that this is a extra labor delivery. Defaults to 'not a extra labor delivery' if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "ExtraLabor",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ExtraLabor",
                typeCombinatorTypes: null
              },
              AddressChangeNotification: {
                description:
                  "Used in conjunction with DispositionMethod for Ancillary Service Endorsements on DHL Global Mail Domestic Label.  Defaults to false if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "AddressChangeNotification",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "AddressChangeNotification",
                typeCombinatorTypes: null
              },
              MeterModeShipment: {
                description:
                  "Set to true when in Parcel Mode and meter needs to be tripped or when in Postage Mode and label needs to be requested.<br>**Default**: `false`",
                xml: {
                  name: "MeterModeShipment",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "MeterModeShipment",
                typeCombinatorTypes: null
              },
              DispositionMethod: {
                title: "DispositionMethod",
                description:
                  "Used for ancillary endorsements.  Uses the carrier default if not submitted.<br>**Default**: `DispositionMethodEnum.ENUM_0`",
                example: 0,
                xml: {
                  name: "DispositionMethod",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                "x-enum-elements": [
                  {
                    name: "Enum_0",
                    description: ""
                  },
                  {
                    name: "Enum_1",
                    description: ""
                  },
                  {
                    name: "Enum_2",
                    description: ""
                  },
                  {
                    name: "Enum_3",
                    description: ""
                  },
                  {
                    name: "Enum_4",
                    description: ""
                  },
                  {
                    name: "Enum_5",
                    description: ""
                  },
                  {
                    name: "Enum_6",
                    description: ""
                  },
                  {
                    name: "Enum_7",
                    description: ""
                  }
                ],
                type: "integer",
                enum: [0, 1, 2, 3, 4, 5, 6, 7],
                dataTypeDisplayText: "DispositionMethodEnum",
                dataTypeLink: "/java/models/enumerations/disposition-method",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              FreightHandlingType: {
                title: "FreightHandlingType",
                description:
                  "Used for setting outer handling unit type for freight shipments.<br>**Default**: `FreightHandlingTypeEnum.ENUM_0`",
                example: 0,
                xml: {
                  name: "FreightHandlingType",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                "x-enum-elements": [
                  {
                    name: "Enum_0",
                    description: ""
                  },
                  {
                    name: "Enum_1",
                    description: ""
                  },
                  {
                    name: "Enum_2",
                    description: ""
                  },
                  {
                    name: "Enum_3",
                    description: ""
                  },
                  {
                    name: "Enum_4",
                    description: ""
                  },
                  {
                    name: "Enum_5",
                    description: ""
                  }
                ],
                type: "integer",
                enum: [0, 1, 2, 3, 4, 5],
                dataTypeDisplayText: "FreightHandlingTypeEnum",
                dataTypeLink: "/java/models/enumerations/freight-handling-type",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              FreightHandlingUnits: {
                description:
                  "The number of freight handling units in the shipment.<br>**Default**: `0`",
                xml: {
                  name: "FreightHandlingUnits",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "integer",
                default: 0,
                dataTypeDisplayText: "Integer",
                dataTypeMarkdown: null,
                paramType: null,
                title: "FreightHandlingUnits",
                typeCombinatorTypes: null
              },
              AlcoholShipment: {
                description:
                  "Used to inform carrier of type of alcohol shipment.  Defaults to none if not submitted.<br>**Default**: `0`",
                xml: {
                  name: "AlcoholShipment",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "integer",
                default: 0,
                dataTypeDisplayText: "Integer",
                dataTypeMarkdown: null,
                paramType: null,
                title: "AlcoholShipment",
                typeCombinatorTypes: null
              },
              ReturnLegPickup: {
                description:
                  "Indicates if an item should be picked up from the recipient and returned to the shipper. Default to false if not submitted.<br>**Default**: `false`",
                xml: {
                  name: "ReturnLegPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ReturnLegPickup",
                typeCombinatorTypes: null
              },
              DefaultWeightUOM: {
                description:
                  "Default weight units of measure for the transaction.",
                xml: {
                  name: "DefaultWeightUOM",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DefaultWeightUOM",
                typeCombinatorTypes: null
              },
              DefaultDimensionsUOM: {
                description:
                  "Default dimensions units of measure for the transaction.",
                xml: {
                  name: "DefaultDimensionsUOM",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DefaultDimensionsUOM",
                typeCombinatorTypes: null
              },
              ConsolidatedShipmentID: {
                description:
                  "The identifier of the consolidated shipment.<br>**Default**: `0`",
                xml: {
                  name: "ConsolidatedShipmentID",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "integer",
                default: 0,
                dataTypeDisplayText: "Integer",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ConsolidatedShipmentID",
                typeCombinatorTypes: null
              },
              DefaultCurrency: {
                description: "Default currency for the transaction.",
                xml: {
                  name: "DefaultCurrency",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DefaultCurrency",
                typeCombinatorTypes: null
              },
              PickupFrom: {
                description:
                  "The time from which the shipment should be picked up from the sender.",
                xml: {
                  name: "PickupFrom",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "PickupFrom",
                typeCombinatorTypes: null
              },
              PickupBefore: {
                description:
                  "The time before which the shipment should be picked up from the sender.",
                xml: {
                  name: "PickupBefore",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "PickupBefore",
                typeCombinatorTypes: null
              },
              InboundShipment: {
                description:
                  "Indicates if the shipment to be rated is an inbound shipment.<br>**Default**: `false`",
                xml: {
                  name: "InboundShipment",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "InboundShipment",
                typeCombinatorTypes: null
              },
              BoLNumber: {
                description:
                  "Bill of Lading number associated with the shipment.",
                xml: {
                  name: "BoLNumber",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "BoLNumber",
                typeCombinatorTypes: null
              },
              ContentType: {
                title: "ContentType",
                description: "Content type of materials in the shipment.",
                example: "Gift",
                xml: {
                  name: "ContentType",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                "x-enum-elements": [
                  {
                    name: "Gift",
                    description: ""
                  },
                  {
                    name: "Documents",
                    description: ""
                  },
                  {
                    name: "Sample",
                    description: ""
                  },
                  {
                    name: "Return",
                    description: ""
                  },
                  {
                    name: "Merchandise",
                    description: ""
                  },
                  {
                    name: "Other",
                    description: ""
                  }
                ],
                type: "string",
                enum: [
                  "Gift",
                  "Documents",
                  "Sample",
                  "Return",
                  "Merchandise",
                  "Other",
                  null
                ],
                dataTypeDisplayText: "ContentTypeEnum",
                dataTypeLink: "/java/models/enumerations/content-type",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              MasterBoL: {
                description:
                  "Indicates whether the shipment is the master shipment when using a master BOL.  Defaults to no regular shipment if not submitted or child shipment if not submitted and a MasterBoLnumber is passed.<br>**Default**: `false`",
                xml: {
                  name: "MasterBoL",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "MasterBoL",
                typeCombinatorTypes: null
              },
              MasterBoLNumber: {
                description:
                  "Master Bill of Lading number associated with the shipment. If the shipment is a child, this must be passed but MasterBoL omitted or set to false.",
                xml: {
                  name: "MasterBoLNumber",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "MasterBoLNumber",
                typeCombinatorTypes: null
              },
              LTLSCAC: {
                description:
                  "SCAC Code of an LTL Carrier that is to be rated for.",
                xml: {
                  name: "LTLSCAC",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "LTLSCAC",
                typeCombinatorTypes: null
              },
              LTLServiceLevel: {
                description: "LTL Service level that is to be rated for.",
                xml: {
                  name: "LTLServiceLevel",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "LTLServiceLevel",
                typeCombinatorTypes: null
              },
              LTLEquipmentType: {
                description: "LTL Equipment type that is to be rated for.",
                xml: {
                  name: "LTLEquipmentType",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "LTLEquipmentType",
                typeCombinatorTypes: null
              },
              LTLAccountCode: {
                description:
                  "LTL Account Code that is to be rated for. If not provided, the default account number from the carrier configuration is used.",
                xml: {
                  name: "LTLAccountCode",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "LTLAccountCode",
                typeCombinatorTypes: null
              },
              CostCenterID: {
                description:
                  "Identifier of the cost center, should pass either this element or the Cost Center Code.<br>**Default**: `0`",
                xml: {
                  name: "CostCenterID",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "integer",
                default: 0,
                dataTypeDisplayText: "Integer",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CostCenterID",
                typeCombinatorTypes: null
              },
              CostCenterCode: {
                description:
                  "Code of the cost center, should pass either this element or the Cost Center ID.",
                xml: {
                  name: "CostCenterCode",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CostCenterCode",
                typeCombinatorTypes: null
              },
              CustomRateEngineKey1: {
                description:
                  "Custom pass through value for Custom Rate Engines.",
                xml: {
                  name: "CustomRateEngineKey1",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CustomRateEngineKey1",
                typeCombinatorTypes: null
              },
              CustomRateEngineKey2: {
                description:
                  "Custom pass through value for Custom Rate Engines.",
                xml: {
                  name: "CustomRateEngineKey2",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CustomRateEngineKey2",
                typeCombinatorTypes: null
              },
              CustomRateEngineKey3: {
                description:
                  "Custom pass through value for Custom Rate Engines.",
                xml: {
                  name: "CustomRateEngineKey3",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CustomRateEngineKey3",
                typeCombinatorTypes: null
              },
              TemperatureService: {
                description:
                  "Indicates the type of temperature service selected for the shipment. Defaults to none if not submitted.<br>**Constraints**: *Pattern*: `[1-3]`",
                xml: {
                  name: "TemperatureService",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "integer",
                dataTypeDisplayText: "Integer",
                dataTypeMarkdown: null,
                paramType: null,
                title: "TemperatureService",
                typeCombinatorTypes: null
              },
              SmartPostAncillaryEndorsement: {
                description:
                  "Indicates the SmartPost Ancillary Endorsement type selected for the shipment.<br>**Constraints**: *Pattern*: `[1-5]`",
                xml: {
                  name: "SmartPostAncillaryEndorsement",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "integer",
                dataTypeDisplayText: "Integer",
                dataTypeMarkdown: null,
                paramType: null,
                title: "SmartPostAncillaryEndorsement",
                typeCombinatorTypes: null
              },
              SmartPostHubID: {
                description:
                  "Indicates the SmartPost Hub ID selected for the shipment. Mandatory for SmartPost.<br>**Default**: `0`",
                xml: {
                  name: "SmartPostHubID",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "integer",
                default: 0,
                dataTypeDisplayText: "Integer",
                dataTypeMarkdown: null,
                paramType: null,
                title: "SmartPostHubID",
                typeCombinatorTypes: null
              },
              ColdChain: {
                description:
                  "Indicates whether the shipment requires a cold chain service. This is for shipment freight level. Note cold chain is available for parcel at package level.<br>**Default**: `false`",
                xml: {
                  name: "ColdChain",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ColdChain",
                typeCombinatorTypes: null
              },
              HolidayDelivery: {
                description:
                  "Indicates whether the shipment requires a holiday delivery service.<br>**Default**: `false`",
                xml: {
                  name: "HolidayDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "HolidayDelivery",
                typeCombinatorTypes: null
              },
              SundayDelivery: {
                description:
                  "Indicates whether the shipment requires a sunday delivery service.<br>**Default**: `false`",
                xml: {
                  name: "SundayDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "SundayDelivery",
                typeCombinatorTypes: null
              },
              WeekendDelivery: {
                description:
                  "Indicates whether the shipment requires a weekend delivery service.<br>**Default**: `false`",
                xml: {
                  name: "WeekendDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "WeekendDelivery",
                typeCombinatorTypes: null
              },
              ExcessDeclaredValue: {
                description:
                  "Excess Declared Value amount.<br>**Default**: `0d`",
                xml: {
                  name: "ExcessDeclaredValue",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "number",
                default: 0,
                dataTypeDisplayText: "Double",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ExcessDeclaredValue",
                typeCombinatorTypes: null
              },
              FirstDelivery: {
                description:
                  "Indicates whether the shipment requires the First Delivery special service.<br>**Default**: `false`",
                xml: {
                  name: "FirstDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "FirstDelivery",
                typeCombinatorTypes: null
              },
              ITARLicenseExemptionNumber: {
                description:
                  "International Trade in Arms Regulations License or Exemption Number of the company sending the shipment.",
                xml: {
                  name: "ITARLicenseExemptionNumber",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ITARLicenseExemptionNumber",
                typeCombinatorTypes: null
              },
              ITARPreDepartureITN: {
                description:
                  "The Internal Transaction Number returned by the Census Bureau.",
                xml: {
                  name: "ITARPreDepartureITN",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ITARPreDepartureITN",
                typeCombinatorTypes: null
              },
              FreeDomicile: {
                description:
                  "Indicates whether the shipment requires the Free Domicile special service.<br>**Default**: `false`",
                xml: {
                  name: "FreeDomicile",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "FreeDomicile",
                typeCombinatorTypes: null
              },
              NoonDelivery: {
                description:
                  "Indicates whether the shipment requires the Noon Delivery special service.<br>**Default**: `false`",
                xml: {
                  name: "NoonDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "NoonDelivery",
                typeCombinatorTypes: null
              },
              PharmacyDelivery: {
                description:
                  "Value indicates shipment is a FedEx pharmacy delivery.<br>**Default**: `false`",
                xml: {
                  name: "PharmacyDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "PharmacyDelivery",
                typeCombinatorTypes: null
              },
              ImportDelivery: {
                description:
                  "Used to indicate whether the package will be delivered from the specified sender address (in a country different than the shipper)",
                xml: {
                  name: "ImportDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ImportDelivery",
                typeCombinatorTypes: null
              },
              ImportDeliveryLabelType: {
                description:
                  "Type of label to be generated for an import delivery.<br>**Default**: `0`",
                xml: {
                  name: "ImportDeliveryLabelType",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "integer",
                default: 0,
                dataTypeDisplayText: "Integer",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ImportDeliveryLabelType",
                typeCombinatorTypes: null
              },
              CommercialInvoiceRemoval: {
                description:
                  "Used to indicate to the carrier to remove the Commercial Invoice from the user's shipment before the shipment is delivered",
                xml: {
                  name: "CommercialInvoiceRemoval",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CommercialInvoiceRemoval",
                typeCombinatorTypes: null
              },
              HoldForPickup: {
                description:
                  "Used to indicate whether the shipment should be held for pickup",
                xml: {
                  name: "HoldForPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "HoldForPickup",
                typeCombinatorTypes: null
              },
              NYCMetro: {
                description:
                  "Use to indicate if delivery location is within New York City metro area",
                xml: {
                  name: "NYCMetro",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "NYCMetro",
                typeCombinatorTypes: null
              },
              TwoHourSpecialDelivery: {
                description:
                  "Indicates whether the shipment requires a two hour special delivery service.",
                xml: {
                  name: "TwoHourSpecialDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "TwoHourSpecialDelivery",
                typeCombinatorTypes: null
              },
              BlanketService: {
                description:
                  "Indicates whether the shipment requires a blanket service.",
                xml: {
                  name: "BlanketService",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "BlanketService",
                typeCombinatorTypes: null
              },
              Stackable: {
                description: "Indicates whether the shipment is stackable.",
                xml: {
                  name: "Stackable",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Stackable",
                typeCombinatorTypes: null
              },
              Turnkey: {
                description: "Indicates whether the shipment is turnkey.",
                xml: {
                  name: "Turnkey",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Turnkey",
                typeCombinatorTypes: null
              },
              BlanketServiceChilled: {
                description:
                  "Indicates whether the shipment requires a chilled blanket service.",
                xml: {
                  name: "BlanketServiceChilled",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "BlanketServiceChilled",
                typeCombinatorTypes: null
              },
              BlanketServiceFrozen: {
                description:
                  "Indicates whether the shipment requires a frozen blanket service.",
                xml: {
                  name: "BlanketServiceFrozen",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "BlanketServiceFrozen",
                typeCombinatorTypes: null
              },
              ProactiveResponse: {
                description:
                  "Service that monitors a shipment for delays and will attempt to reroute is there are delays avoiding failure in service. Typically used for temperature sensitive or life-saving shipments.",
                xml: {
                  name: "ProactiveResponse",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "ProactiveResponse",
                typeCombinatorTypes: null
              },
              LimitedAccessPickupType: {
                description:
                  "Numeric identifer for the type of limited access pickup.  Defaults to no limited access delivery if not submitted.<br>**Default**: `0`",
                xml: {
                  name: "LimitedAccessPickupType",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "integer",
                default: 0,
                dataTypeDisplayText: "Integer",
                dataTypeMarkdown: null,
                paramType: null,
                title: "LimitedAccessPickupType",
                typeCombinatorTypes: null
              },
              LimitedAccessDeliveryType: {
                description:
                  "Numeric identifer for the type of limited access delivery.  Defaults to no limited access delivery if not submitted.<br>**Default**: `0`",
                xml: {
                  name: "LimitedAccessDeliveryType",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "integer",
                default: 0,
                dataTypeDisplayText: "Integer",
                dataTypeMarkdown: null,
                paramType: null,
                title: "LimitedAccessDeliveryType",
                typeCombinatorTypes: null
              },
              DiagnosticSpecimens: {
                description:
                  "Used to indicate whether the shipent contains Biological substances",
                xml: {
                  name: "DiagnosticSpecimens",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DiagnosticSpecimens",
                typeCombinatorTypes: null
              },
              DropAtCarrierFacility: {
                description:
                  "Used to indicate whether the package will be dropped at a carrier facility",
                xml: {
                  name: "DropAtCarrierFacility",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DropAtCarrierFacility",
                typeCombinatorTypes: null
              },
              PickupNotification: {
                description:
                  "Indicates whether the shipment requires a Pickup Notification.",
                xml: {
                  name: "PickupNotification",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "PickupNotification",
                typeCombinatorTypes: null
              },
              CFSDelivery: {
                description:
                  "Indicates whether the shipment requires container freight station delivery.",
                xml: {
                  name: "CFSDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CFSDelivery",
                typeCombinatorTypes: null
              },
              CFSPickup: {
                description:
                  "Indicates whether the shipment requires container freight station pickup.",
                xml: {
                  name: "CFSPickup",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CFSPickup",
                typeCombinatorTypes: null
              },
              ThirdPartyHazardous: {
                id: "ThirdPartyHazardous",
                title: "ThirdPartyHazardous",
                description:
                  "Container for details for processing by an external hazardous compliance system.",
                xml: {
                  name: "ThirdPartyHazardous",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  InUse: {
                    description:
                      "Indicates if the shipment was created using a third party hazardous package.<br>**Default**: `false`",
                    example: false,
                    xml: {
                      name: "InUse",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    dataTypeDisplayText: "boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "InUse",
                    typeCombinatorTypes: null
                  },
                  CarrierID: {
                    description:
                      "Numeric identifier for the carrier.<br>**Default**: `0`",
                    example: 0,
                    xml: {
                      name: "CarrierID",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "integer",
                    dataTypeDisplayText: "int",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "CarrierID",
                    typeCombinatorTypes: null
                  }
                },
                required: ["InUse", "CarrierID"],
                dataTypeDisplayText: "ThirdPartyHazardous",
                dataTypeLink: "/java/models/structures/third-party-hazardous",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              VariableHandlingCharge: {
                id: "VariableHandlingCharge",
                title: "VariableHandlingCharge",
                description: "Container for variable handling charge elements.",
                xml: {
                  name: "VariableHandlingCharge",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  RateType: {
                    description:
                      "Rate type to apply handling charge to. 1 = Account Rates; 2 = List Rates<br>**Constraints**: *Pattern*: `[1-2]`",
                    xml: {
                      name: "RateType",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "integer",
                    dataTypeDisplayText: "Integer",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "RateType",
                    typeCombinatorTypes: null
                  },
                  RateBasis: {
                    description:
                      "Charge basis upon which the handling charge is calculated. 1 = Base Charge; 2 = Net Charge; 3 = Net Charge Excluding Taxes; 4 = Net Freight<br>**Constraints**: *Pattern*: `[1-4]`",
                    xml: {
                      name: "RateBasis",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "integer",
                    dataTypeDisplayText: "Integer",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "RateBasis",
                    typeCombinatorTypes: null
                  },
                  FixedValue: {
                    description:
                      "Fixed value of handling charge.<br>**Default**: `0d`",
                    xml: {
                      name: "FixedValue",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "number",
                    default: 0,
                    dataTypeDisplayText: "Double",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "FixedValue",
                    typeCombinatorTypes: null
                  },
                  PercentageValue: {
                    description:
                      "Percentage value of handling charge.<br>**Default**: `0d`",
                    xml: {
                      name: "PercentageValue",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "number",
                    default: 0,
                    dataTypeDisplayText: "Double",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "PercentageValue",
                    typeCombinatorTypes: null
                  }
                },
                dataTypeDisplayText: "VariableHandlingCharge",
                dataTypeLink:
                  "/java/models/structures/variable-handling-charge",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              Sender: {
                id: "Sender",
                title: "Sender",
                description:
                  "Container to allow the customization of the sender address details associated with the transaction.",
                xml: {
                  name: "Sender",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  SentBy: {
                    description: "Name of the individual sending the shipment.",
                    xml: {
                      name: "SentBy",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "SentBy",
                    typeCombinatorTypes: null
                  },
                  CompanyName: {
                    description:
                      "The company name associated with the address.",
                    xml: {
                      name: "CompanyName",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "CompanyName",
                    typeCombinatorTypes: null
                  },
                  Street: {
                    description: "First line of the address.",
                    xml: {
                      name: "Street",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Street",
                    typeCombinatorTypes: null
                  },
                  Locale: {
                    description: "Second line of the address.",
                    xml: {
                      name: "Locale",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Locale",
                    typeCombinatorTypes: null
                  },
                  Other: {
                    description: "Third line of the address.",
                    xml: {
                      name: "Other",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Other",
                    typeCombinatorTypes: null
                  },
                  City: {
                    description: "City of the address.",
                    xml: {
                      name: "City",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "City",
                    typeCombinatorTypes: null
                  },
                  Region: {
                    description: "The state or region of the address.",
                    xml: {
                      name: "Region",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Region",
                    typeCombinatorTypes: null
                  },
                  RegionName: {
                    description:
                      "The name of the region associated with the address, this value will be automatically added if available.",
                    xml: {
                      name: "RegionName",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "RegionName",
                    typeCombinatorTypes: null
                  },
                  PostalCode: {
                    description:
                      "The postal code or zip associated with the address.",
                    xml: {
                      name: "PostalCode",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "PostalCode",
                    typeCombinatorTypes: null
                  },
                  Country: {
                    description: "The country code for the address.",
                    xml: {
                      name: "Country",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Country",
                    typeCombinatorTypes: null
                  },
                  CountryName: {
                    description:
                      "The name of the country associated with the address, this value will be automatically added if available.",
                    xml: {
                      name: "CountryName",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "CountryName",
                    typeCombinatorTypes: null
                  },
                  Phone: {
                    description:
                      "The phone number associated with the address.",
                    xml: {
                      name: "Phone",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Phone",
                    typeCombinatorTypes: null
                  },
                  Email: {
                    description:
                      "An email address for the individual or company.",
                    xml: {
                      name: "Email",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Email",
                    typeCombinatorTypes: null
                  },
                  JobTitle: {
                    description:
                      "Job title of the individual sending the shipment.",
                    xml: {
                      name: "JobTitle",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "JobTitle",
                    typeCombinatorTypes: null
                  },
                  DepartmentName: {
                    description:
                      "Department name of the individual sending the shipment.",
                    xml: {
                      name: "DepartmentName",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "DepartmentName",
                    typeCombinatorTypes: null
                  },
                  LocationDescription: {
                    description: "Location description of the shipper.",
                    xml: {
                      name: "LocationDescription",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "LocationDescription",
                    typeCombinatorTypes: null
                  },
                  Residential: {
                    description:
                      "Indicates whether the address is residential or commercial.<br>**Default**: `false`",
                    xml: {
                      name: "Residential",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Residential",
                    typeCombinatorTypes: null
                  },
                  LocationTimeZone: {
                    description:
                      "Carrier specific data indicating time zone of sender's location.",
                    xml: {
                      name: "LocationTimeZone",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "LocationTimeZone",
                    typeCombinatorTypes: null
                  },
                  OverrideType: {
                    title: "OverrideType",
                    description:
                      "Indicates what type of override is being used for sender information.  You can override all information, only the nonessential information (e.g. phone, email) or do no overriding.  If you choose none, then all sender information is read from the configuration.",
                    example: "OverrideAll",
                    xml: {
                      name: "OverrideType",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    "x-enum-elements": [
                      {
                        name: "OverrideAll",
                        description: ""
                      },
                      {
                        name: "OverrideNonessential",
                        description: ""
                      },
                      {
                        name: "None",
                        description: ""
                      }
                    ],
                    type: "string",
                    enum: ["OverrideAll", "OverrideNonessential", "None", null],
                    dataTypeDisplayText: "OverrideTypeEnum",
                    dataTypeLink: "/java/models/enumerations/override-type",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  }
                },
                dataTypeDisplayText: "Sender",
                dataTypeLink: "/java/models/structures/sender",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              Notifications: {
                id: "Notifications",
                title: "Notifications",
                description: "Container for email notifications.",
                xml: {
                  name: "Notifications",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  ReceiverShipmentNotification: {
                    description:
                      "Indicates the receiver should be notified when the shipment is shipped.<br>**Default**: `false`",
                    xml: {
                      name: "ReceiverShipmentNotification",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ReceiverShipmentNotification",
                    typeCombinatorTypes: null
                  },
                  SenderShipmentNotification: {
                    description:
                      "Indicates the sender should be notified when the shipment is shipped.<br>**Default**: `false`",
                    xml: {
                      name: "SenderShipmentNotification",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "SenderShipmentNotification",
                    typeCombinatorTypes: null
                  },
                  ShipmentNotificationDetail: {
                    id: "ShipmentNotificationDetail",
                    title: "ShipmentNotificationDetail",
                    description: "Container for shipment notification deails.",
                    xml: {
                      name: "ShipmentNotificationDetail",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "object",
                    properties: {
                      NotificationMethod: {
                        description:
                          "The name of the notification sender. Defaults to shipper company name if not submitted.",
                        xml: {
                          name: "NotificationMethod",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "NotificationMethod",
                        typeCombinatorTypes: null
                      },
                      Sender: {
                        description:
                          "The name of the notification sender. Defaults to shipper company name if not submitted.",
                        xml: {
                          name: "Sender",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Sender",
                        typeCombinatorTypes: null
                      },
                      Subject: {
                        description:
                          "The subject line for the notification. Defaults to carrier default if not submitted.",
                        xml: {
                          name: "Subject",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Subject",
                        typeCombinatorTypes: null
                      },
                      Body: {
                        description:
                          "The body of the notification sent. Defaults to carrier default text if not submitted.",
                        xml: {
                          name: "Body",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Body",
                        typeCombinatorTypes: null
                      },
                      Addresses: {
                        description:
                          "Any additional email addresses that need to be sent to the carrier for the notifcations.",
                        xml: {
                          name: "Addresses",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Addresses",
                        typeCombinatorTypes: null
                      }
                    },
                    dataTypeDisplayText: "ShipmentNotificationDetail",
                    dataTypeLink:
                      "/java/models/structures/shipment-notification-detail",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  },
                  ReceiverDeliveryNotification: {
                    description:
                      "Indicates the receiver should be notified when the shipment is delivered.<br>**Default**: `false`",
                    xml: {
                      name: "ReceiverDeliveryNotification",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ReceiverDeliveryNotification",
                    typeCombinatorTypes: null
                  },
                  SenderDeliveryNotification: {
                    description:
                      "Indicates the sender should be notified when the shipment is delivered.<br>**Default**: `false`",
                    xml: {
                      name: "SenderDeliveryNotification",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "SenderDeliveryNotification",
                    typeCombinatorTypes: null
                  },
                  DeliveryNotificationDetail: {
                    id: "DeliveryNotificationDetail",
                    title: "DeliveryNotificationDetail",
                    description:
                      "Container for shipment delivery notification deails.",
                    xml: {
                      name: "DeliveryNotificationDetail",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "object",
                    properties: {
                      NotificationDeliveryMethod: {
                        title: "NotificationDeliveryMethod",
                        description:
                          "The method that the notification will be sent. If it is not provided it is default to e-mail.",
                        example: 1,
                        xml: {
                          name: "NotificationDeliveryMethod",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        "x-enum-elements": [
                          {
                            name: "Enum_1",
                            description: ""
                          },
                          {
                            name: "Enum_2",
                            description: ""
                          },
                          {
                            name: "Enum_3",
                            description: ""
                          }
                        ],
                        type: "integer",
                        enum: [1, 2, 3, null],
                        dataTypeDisplayText: "NotificationDeliveryMethodEnum",
                        dataTypeLink:
                          "/java/models/enumerations/notification-delivery-method",
                        dataTypeMarkdown: null,
                        paramType: null,
                        typeCombinatorTypes: null
                      },
                      Sender: {
                        description:
                          "The name of the notification sender. Defaults to shipper company name if not submitted.",
                        xml: {
                          name: "Sender",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Sender",
                        typeCombinatorTypes: null
                      },
                      Subject: {
                        description:
                          "The subject line for the notification. Defaults to carrier default if not submitted.",
                        xml: {
                          name: "Subject",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Subject",
                        typeCombinatorTypes: null
                      },
                      Body: {
                        description:
                          "The body of the notification sent. Defaults to carrier default text if not submitted.",
                        xml: {
                          name: "Body",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Body",
                        typeCombinatorTypes: null
                      },
                      Addresses: {
                        description:
                          "Any additional email addresses / phone numbers that need to be sent to the carrier for the notifcations or key words RECEIVER / SENDER to pick the E-Mail / phone number from the data that is already entered.",
                        xml: {
                          name: "Addresses",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Addresses",
                        typeCombinatorTypes: null
                      }
                    },
                    dataTypeDisplayText: "DeliveryNotificationDetail",
                    dataTypeLink:
                      "/java/models/structures/delivery-notification-detail",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  },
                  ReceiverExceptionNotification: {
                    description:
                      "Indicates the receiver should be notified if there is an issue with the shipment.<br>**Default**: `false`",
                    xml: {
                      name: "ReceiverExceptionNotification",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ReceiverExceptionNotification",
                    typeCombinatorTypes: null
                  },
                  SenderExceptionNotification: {
                    description:
                      "Indicates the sender should be notified if there is an issue with the shipment.<br>**Default**: `false`",
                    xml: {
                      name: "SenderExceptionNotification",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "SenderExceptionNotification",
                    typeCombinatorTypes: null
                  },
                  ExceptionNotificationDetail: {
                    id: "ExceptionNotificationDetail",
                    title: "ExceptionNotificationDetail",
                    description:
                      "Container for shipment exception notification deails.",
                    xml: {
                      name: "ExceptionNotificationDetail",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "object",
                    properties: {
                      Sender: {
                        description:
                          "The name of the notification sender. Defaults to shipper company name if not submitted.",
                        xml: {
                          name: "Sender",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Sender",
                        typeCombinatorTypes: null
                      },
                      Subject: {
                        description:
                          "The subject line for the notification. Defaults to carrier default if not submitted.",
                        xml: {
                          name: "Subject",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Subject",
                        typeCombinatorTypes: null
                      },
                      Body: {
                        description:
                          "The body of the notification sent. Defaults to carrier default text if not submitted.",
                        xml: {
                          name: "Body",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Body",
                        typeCombinatorTypes: null
                      },
                      Addresses: {
                        description:
                          "Any additional email addresses that need to be sent to the carrier for the notifcations.",
                        xml: {
                          name: "Addresses",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Addresses",
                        typeCombinatorTypes: null
                      }
                    },
                    dataTypeDisplayText: "ExceptionNotificationDetail",
                    dataTypeLink:
                      "/java/models/structures/exception-notification-detail",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  },
                  ReceiverOnTenderNotification: {
                    description:
                      "Indicates the receiver should be notified when the shipment is tendered.<br>**Default**: `false`",
                    xml: {
                      name: "ReceiverOnTenderNotification",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ReceiverOnTenderNotification",
                    typeCombinatorTypes: null
                  },
                  SenderOnTenderNotification: {
                    description:
                      "Indicates the sender should be notified when the shipment is tendered.<br>**Default**: `false`",
                    xml: {
                      name: "SenderOnTenderNotification",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "SenderOnTenderNotification",
                    typeCombinatorTypes: null
                  },
                  OnTenderNotificationDetail: {
                    id: "OnTenderNotificationDetail",
                    title: "OnTenderNotificationDetail",
                    description:
                      "Container for shipment tendering notification deails.",
                    xml: {
                      name: "OnTenderNotificationDetail",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "object",
                    properties: {
                      Sender: {
                        description:
                          "The name of the notification sender. Defaults to shipper company name if not submitted.",
                        xml: {
                          name: "Sender",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Sender",
                        typeCombinatorTypes: null
                      },
                      Subject: {
                        description:
                          "The subject line for the notification. Defaults to carrier default if not submitted.",
                        xml: {
                          name: "Subject",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Subject",
                        typeCombinatorTypes: null
                      },
                      Body: {
                        description:
                          "The body of the notification sent. Defaults to carrier default text if not submitted.",
                        xml: {
                          name: "Body",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Body",
                        typeCombinatorTypes: null
                      },
                      Addresses: {
                        description:
                          "Any additional email addresses that need to be sent to the carrier for the notifcations.",
                        xml: {
                          name: "Addresses",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Addresses",
                        typeCombinatorTypes: null
                      }
                    },
                    dataTypeDisplayText: "OnTenderNotificationDetail",
                    dataTypeLink:
                      "/java/models/structures/on-tender-notification-detail",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  },
                  PredictNotification: {
                    id: "PredictNotification",
                    title: "PredictNotification",
                    description:
                      "Container for predict email notification deails.",
                    xml: {
                      name: "PredictNotification",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "object",
                    properties: {
                      NotificationDeliveryMethod: {
                        title: "NotificationDeliveryMethod",
                        description:
                          "The method that the notification will be sent. If it is not provided it is default to e-mail.",
                        example: 1,
                        xml: {
                          name: "NotificationDeliveryMethod",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        "x-enum-elements": [
                          {
                            name: "Enum_1",
                            description: ""
                          },
                          {
                            name: "Enum_2",
                            description: ""
                          },
                          {
                            name: "Enum_3",
                            description: ""
                          }
                        ],
                        type: "integer",
                        enum: [1, 2, 3, null],
                        dataTypeDisplayText: "NotificationDeliveryMethodEnum",
                        dataTypeLink:
                          "/java/models/enumerations/notification-delivery-method",
                        dataTypeMarkdown: null,
                        paramType: null,
                        typeCombinatorTypes: null
                      },
                      Addresses: {
                        description:
                          "Any additional email addresses / phone numbers that need to be sent to the carrier for the notifcations or key words RECEIVER / SENDER to pick the E-Mail / phone number from the data that is already entered.",
                        xml: {
                          name: "Addresses",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Addresses",
                        typeCombinatorTypes: null
                      }
                    },
                    dataTypeDisplayText: "PredictNotification",
                    dataTypeLink:
                      "/java/models/structures/predict-notification",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  },
                  OtherShipmentNotifications: {
                    description:
                      "Indicates other should be notified when the shipment is shipped.<br>**Default**: `false`",
                    xml: {
                      name: "OtherShipmentNotifications",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "OtherShipmentNotifications",
                    typeCombinatorTypes: null
                  },
                  OtherDeliveryNotifications: {
                    description:
                      "Indicates other should be notified when the shipment is delivered.<br>**Default**: `false`",
                    xml: {
                      name: "OtherDeliveryNotifications",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "OtherDeliveryNotifications",
                    typeCombinatorTypes: null
                  },
                  OtherExceptionNotifications: {
                    description:
                      "Indicates other should be notified if there is an issue with the shipment.<br>**Default**: `false`",
                    xml: {
                      name: "OtherExceptionNotifications",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "OtherExceptionNotifications",
                    typeCombinatorTypes: null
                  },
                  OtherOnTenderNotifications: {
                    description:
                      "Indicates other should be notified when the shipment is tendered.<br>**Default**: `false`",
                    xml: {
                      name: "OtherOnTenderNotifications",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "OtherOnTenderNotifications",
                    typeCombinatorTypes: null
                  },
                  OtherNotificationDetail: {
                    id: "OtherNotificationDetail",
                    title: "OtherNotificationDetail",
                    description: "Container for other notification details.",
                    xml: {
                      name: "OtherNotificationDetail",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "object",
                    properties: {
                      Sender: {
                        description:
                          "The name of the notification sender. Defaults to shipper company name if not submitted.",
                        xml: {
                          name: "Sender",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Sender",
                        typeCombinatorTypes: null
                      },
                      Subject: {
                        description:
                          "The subject line for the notification. Defaults to carrier default if not submitted.",
                        xml: {
                          name: "Subject",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Subject",
                        typeCombinatorTypes: null
                      },
                      Body: {
                        description:
                          "The body of the notification sent. Defaults to carrier default text if not submitted.",
                        xml: {
                          name: "Body",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Body",
                        typeCombinatorTypes: null
                      },
                      Addresses: {
                        description:
                          "Any additional email addresses that need to be sent to the carrier for the notifcations.",
                        xml: {
                          name: "Addresses",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Addresses",
                        typeCombinatorTypes: null
                      }
                    },
                    dataTypeDisplayText: "OtherNotificationDetail",
                    dataTypeLink:
                      "/java/models/structures/other-notification-detail",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  },
                  SenderPickupRequestConfirmationNotification: {
                    description:
                      "Indicates an email should be sent to the sender when a pickup request is received.<br>**Default**: `false`",
                    xml: {
                      name: "SenderPickupRequestConfirmationNotification",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "SenderPickupRequestConfirmationNotification",
                    typeCombinatorTypes: null
                  },
                  SenderDriverOnRouteNotification: {
                    description:
                      "Indicates an email should be sent to the sender when a driver is on route to a pickup.<br>**Default**: `false`",
                    xml: {
                      name: "SenderDriverOnRouteNotification",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "SenderDriverOnRouteNotification",
                    typeCombinatorTypes: null
                  },
                  SenderPickupSecuredNotification: {
                    description:
                      "Indicates an email should be sent to the sender when a pickup has been loaded.<br>**Default**: `false`",
                    xml: {
                      name: "SenderPickupSecuredNotification",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "SenderPickupSecuredNotification",
                    typeCombinatorTypes: null
                  },
                  SenderPickupExceptionNotification: {
                    description:
                      "Indicates an email should be sent to the sender when a pickup exception occurs.<br>**Default**: `false`",
                    xml: {
                      name: "SenderPickupExceptionNotification",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "SenderPickupExceptionNotification",
                    typeCombinatorTypes: null
                  },
                  ReceiverPickupRequestConfirmationNotification: {
                    description:
                      "Indicates an email should be sent to the receiver when a pickup request is received.<br>**Default**: `false`",
                    xml: {
                      name: "ReceiverPickupRequestConfirmationNotification",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ReceiverPickupRequestConfirmationNotification",
                    typeCombinatorTypes: null
                  },
                  ReceiverDriverOnRouteNotification: {
                    description:
                      "Indicates an email should be sent to the receiver when a driver is on route to a pickup.<br>**Default**: `false`",
                    xml: {
                      name: "ReceiverDriverOnRouteNotification",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ReceiverDriverOnRouteNotification",
                    typeCombinatorTypes: null
                  },
                  ReceiverPickupSecuredNotification: {
                    description:
                      "Indicates an email should be sent to the receiver when a pickup has been loaded.<br>**Default**: `false`",
                    xml: {
                      name: "ReceiverPickupSecuredNotification",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ReceiverPickupSecuredNotification",
                    typeCombinatorTypes: null
                  },
                  ReceiverPickupExceptionNotification: {
                    description:
                      "Indicates an email should be sent to the receiver when a pickup exception occurs.<br>**Default**: `false`",
                    xml: {
                      name: "ReceiverPickupExceptionNotification",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ReceiverPickupExceptionNotification",
                    typeCombinatorTypes: null
                  },
                  OtherPickupRequestConfirmationNotifications: {
                    description:
                      "Indicates an email should be sent to the addresses in the Other EMail Notifications Addresses when a pickup request is received.<br>**Default**: `false`",
                    xml: {
                      name: "OtherPickupRequestConfirmationNotifications",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "OtherPickupRequestConfirmationNotifications",
                    typeCombinatorTypes: null
                  },
                  OtherDriverOnRouteNotifications: {
                    description:
                      "Indicates an email should be sent to the addresses in the Other EMail Notifications Addresses when a driver is on route to a pickup.<br>**Default**: `false`",
                    xml: {
                      name: "OtherDriverOnRouteNotifications",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "OtherDriverOnRouteNotifications",
                    typeCombinatorTypes: null
                  },
                  OtherPickupSecuredNotifications: {
                    description:
                      "Indicates an email should be sent to the addresses in the Other EMail Notifications Addresses when a pickup has been loaded.<br>**Default**: `false`",
                    xml: {
                      name: "OtherPickupSecuredNotifications",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "OtherPickupSecuredNotifications",
                    typeCombinatorTypes: null
                  },
                  OtherPickupExceptionNotifications: {
                    description:
                      "Indicates an email should be sent to the addresses in the Other EMail Notifications Addresses when a pickup exception occurs.<br>**Default**: `false`",
                    xml: {
                      name: "OtherPickupExceptionNotifications",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "OtherPickupExceptionNotifications",
                    typeCombinatorTypes: null
                  }
                },
                dataTypeDisplayText: "Notifications",
                dataTypeLink: "/java/models/structures/notifications",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              ReturnTo: {
                id: "ReturnTo",
                title: "ReturnTo",
                description:
                  "Container for any return address assocaited with the transaction.",
                xml: {
                  name: "ReturnTo",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  Name: {
                    description:
                      "Name of the individual the shipment is to be returned to.",
                    xml: {
                      name: "Name",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Name",
                    typeCombinatorTypes: null
                  },
                  Street: {
                    description: "First line of the address.",
                    xml: {
                      name: "Street",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Street",
                    typeCombinatorTypes: null
                  },
                  City: {
                    description: "City of the address.",
                    xml: {
                      name: "City",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "City",
                    typeCombinatorTypes: null
                  },
                  Region: {
                    description: "The state or region of the address.",
                    xml: {
                      name: "Region",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Region",
                    typeCombinatorTypes: null
                  },
                  PostalCode: {
                    description:
                      "The postal code or zip associated with the address.",
                    xml: {
                      name: "PostalCode",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "PostalCode",
                    typeCombinatorTypes: null
                  },
                  Country: {
                    description: "The country code for the address.",
                    xml: {
                      name: "Country",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Country",
                    typeCombinatorTypes: null
                  },
                  Phone: {
                    description:
                      "The phone number associated with the address.",
                    xml: {
                      name: "Phone",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Phone",
                    typeCombinatorTypes: null
                  },
                  CompanyName: {
                    description:
                      "The company name associated with the address.",
                    xml: {
                      name: "CompanyName",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "CompanyName",
                    typeCombinatorTypes: null
                  },
                  Locale: {
                    description: "Second line of the address.",
                    xml: {
                      name: "Locale",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Locale",
                    typeCombinatorTypes: null
                  },
                  Other: {
                    description: "Third line of the address.",
                    xml: {
                      name: "Other",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Other",
                    typeCombinatorTypes: null
                  },
                  RegionName: {
                    description:
                      "The name of the region associated with the address, this value will be automatically added if available.",
                    xml: {
                      name: "RegionName",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "RegionName",
                    typeCombinatorTypes: null
                  },
                  CountryName: {
                    description:
                      "The name of the country associated with the address, this value will be automatically added if available.",
                    xml: {
                      name: "CountryName",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "CountryName",
                    typeCombinatorTypes: null
                  }
                },
                required: [
                  "Name",
                  "Street",
                  "City",
                  "Region",
                  "PostalCode",
                  "Country",
                  "Phone"
                ],
                dataTypeDisplayText: "ReturnTo",
                dataTypeLink: "/java/models/structures/return-to",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              CODRemittanceAddress: {
                id: "CODRemittanceAddress",
                title: "CODRemittanceAddress",
                description:
                  "Container for the COD remittance address details.",
                xml: {
                  name: "CODRemittanceAddress",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  Name: {
                    description:
                      "Name of the individual the COD Remittance should be sent to.",
                    xml: {
                      name: "Name",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Name",
                    typeCombinatorTypes: null
                  },
                  CompanyName: {
                    description:
                      "The company name associated with the address.",
                    xml: {
                      name: "CompanyName",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "CompanyName",
                    typeCombinatorTypes: null
                  },
                  Street: {
                    description: "First line of the address.",
                    xml: {
                      name: "Street",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Street",
                    typeCombinatorTypes: null
                  },
                  Locale: {
                    description: "Second line of the address.",
                    xml: {
                      name: "Locale",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Locale",
                    typeCombinatorTypes: null
                  },
                  Other: {
                    description: "Third line of the address.",
                    xml: {
                      name: "Other",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Other",
                    typeCombinatorTypes: null
                  },
                  City: {
                    description: "City of the address.",
                    xml: {
                      name: "City",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "City",
                    typeCombinatorTypes: null
                  },
                  Region: {
                    description: "The state or region of the address.",
                    xml: {
                      name: "Region",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Region",
                    typeCombinatorTypes: null
                  },
                  PostalCode: {
                    description:
                      "The postal code or zip associated with the address.",
                    xml: {
                      name: "PostalCode",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "PostalCode",
                    typeCombinatorTypes: null
                  },
                  Country: {
                    description: "The country code for the address.",
                    xml: {
                      name: "Country",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Country",
                    typeCombinatorTypes: null
                  },
                  Phone: {
                    description:
                      "The phone number associated with the address.",
                    xml: {
                      name: "Phone",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Phone",
                    typeCombinatorTypes: null
                  },
                  DepartmentName: {
                    description:
                      "Name of the department associated with the address.",
                    xml: {
                      name: "DepartmentName",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "DepartmentName",
                    typeCombinatorTypes: null
                  }
                },
                dataTypeDisplayText: "CODRemittanceAddress",
                dataTypeLink: "/java/models/structures/cod-remittance-address",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              Billing: {
                id: "Billing",
                title: "Billing",
                description:
                  "Container for billing details associated with the transaction.",
                xml: {
                  name: "Billing",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  PayerType: {
                    description:
                      "The unique numeric identifier for the type of payer.<br>**Default**: `0`",
                    xml: {
                      name: "PayerType",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "integer",
                    default: 0,
                    dataTypeDisplayText: "Integer",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "PayerType",
                    typeCombinatorTypes: null
                  },
                  AccountNumber: {
                    description:
                      "An optional account number associated with the payer.",
                    xml: {
                      name: "AccountNumber",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "AccountNumber",
                    typeCombinatorTypes: null
                  },
                  Name: {
                    description: "Name of the individual sending the shipment.",
                    xml: {
                      name: "Name",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Name",
                    typeCombinatorTypes: null
                  },
                  CompanyName: {
                    description:
                      "The company name associated with the address.",
                    xml: {
                      name: "CompanyName",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "CompanyName",
                    typeCombinatorTypes: null
                  },
                  Street: {
                    description: "First line of the address.",
                    xml: {
                      name: "Street",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Street",
                    typeCombinatorTypes: null
                  },
                  Locale: {
                    description: "Second line of the address.",
                    xml: {
                      name: "Locale",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Locale",
                    typeCombinatorTypes: null
                  },
                  Other: {
                    description: "Third line of the address.",
                    xml: {
                      name: "Other",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Other",
                    typeCombinatorTypes: null
                  },
                  City: {
                    description: "City of the address.",
                    xml: {
                      name: "City",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "City",
                    typeCombinatorTypes: null
                  },
                  Region: {
                    description: "The state or region of the address.",
                    xml: {
                      name: "Region",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Region",
                    typeCombinatorTypes: null
                  },
                  RegionName: {
                    description:
                      "The name of the region associated with the address, this value will be automatically added if available.",
                    xml: {
                      name: "RegionName",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "RegionName",
                    typeCombinatorTypes: null
                  },
                  PostalCode: {
                    description:
                      "The postal code or zip associated with the address.",
                    xml: {
                      name: "PostalCode",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "PostalCode",
                    typeCombinatorTypes: null
                  },
                  Country: {
                    description: "The country code for the address.",
                    xml: {
                      name: "Country",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Country",
                    typeCombinatorTypes: null
                  },
                  Phone: {
                    description:
                      "The phone number associated with the address.",
                    xml: {
                      name: "Phone",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Phone",
                    typeCombinatorTypes: null
                  },
                  Email: {
                    description:
                      "An email address for the individual or company.",
                    xml: {
                      name: "Email",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Email",
                    typeCombinatorTypes: null
                  },
                  CountryName: {
                    description:
                      "The name of the country associated with the address, this value will be automatically added if available.",
                    xml: {
                      name: "CountryName",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "CountryName",
                    typeCombinatorTypes: null
                  }
                },
                dataTypeDisplayText: "Billing",
                dataTypeLink: "/java/models/structures/billing",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              HomeDelivery: {
                id: "HomeDelivery",
                title: "HomeDelivery",
                description: "Container for home delivery details.",
                xml: {
                  name: "HomeDelivery",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  Type: {
                    description:
                      "Type of home delivery required for the shipment.",
                    xml: {
                      name: "Type",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "integer",
                    dataTypeDisplayText: "Integer",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Type",
                    typeCombinatorTypes: null
                  },
                  Date: {
                    description: "Date the shipment is to be home delivered.",
                    xml: {
                      name: "Date",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Date",
                    typeCombinatorTypes: null
                  },
                  Phone: {
                    description:
                      "The phone number associated with the address.",
                    xml: {
                      name: "Phone",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Phone",
                    typeCombinatorTypes: null
                  },
                  Signature: {
                    description:
                      "Indicates whether a signature is required prior to the package being released to the receiver.  Defaults to no signature required if not submitted.<br>**Default**: `false`",
                    xml: {
                      name: "Signature",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Signature",
                    typeCombinatorTypes: null
                  }
                },
                dataTypeDisplayText: "HomeDelivery",
                dataTypeLink: "/java/models/structures/home-delivery",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              International: {
                id: "International",
                title: "International",
                description:
                  "Container for international details associated with the shipment.",
                xml: {
                  name: "International",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  IsInternational: {
                    description:
                      "Indicates whether the package is part of an international shipment.  Defaults to no if omitted.<br>**Default**: `false`",
                    xml: {
                      name: "IsInternational",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "IsInternational",
                    typeCombinatorTypes: null
                  },
                  Duty: {
                    id: "Duty",
                    title: "Duty",
                    description:
                      "Container for duty details assocaited with the transaction.",
                    xml: {
                      name: "Duty",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "object",
                    properties: {
                      PayerType: {
                        description:
                          "Type of payer the shipment's duties and taxes are to be billed to.  Defaults to sender if not submitted.<br>**Default**: `0`",
                        xml: {
                          name: "PayerType",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "integer",
                        default: 0,
                        dataTypeDisplayText: "Integer",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "PayerType",
                        typeCombinatorTypes: null
                      },
                      AccountNumber: {
                        description:
                          "Account number the shipment's duties and taxes are to be billed to.  Defaults to sender's account number if not submitted.",
                        xml: {
                          name: "AccountNumber",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "AccountNumber",
                        typeCombinatorTypes: null
                      },
                      CompanyName: {
                        description:
                          "The company name associated with the address.",
                        xml: {
                          name: "CompanyName",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "CompanyName",
                        typeCombinatorTypes: null
                      },
                      Street: {
                        description: "First line of the address.",
                        xml: {
                          name: "Street",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Street",
                        typeCombinatorTypes: null
                      },
                      Locale: {
                        description: "Second line of the address.",
                        xml: {
                          name: "Locale",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Locale",
                        typeCombinatorTypes: null
                      },
                      Other: {
                        description: "Third line of the address.",
                        xml: {
                          name: "Other",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Other",
                        typeCombinatorTypes: null
                      },
                      City: {
                        description: "City of the address.",
                        xml: {
                          name: "City",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "City",
                        typeCombinatorTypes: null
                      },
                      Region: {
                        description: "The state or region of the address.",
                        xml: {
                          name: "Region",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Region",
                        typeCombinatorTypes: null
                      },
                      RegionName: {
                        description:
                          "The name of the region associated with the address, this value will be automatically added if available.",
                        xml: {
                          name: "RegionName",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "RegionName",
                        typeCombinatorTypes: null
                      },
                      PostalCode: {
                        description:
                          "The postal code or zip associated with the address.",
                        xml: {
                          name: "PostalCode",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "PostalCode",
                        typeCombinatorTypes: null
                      },
                      Country: {
                        description: "The country code for the address.",
                        xml: {
                          name: "Country",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Country",
                        typeCombinatorTypes: null
                      },
                      CountryName: {
                        description:
                          "The name of the country associated with the address, this value will be automatically added if available.",
                        xml: {
                          name: "CountryName",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "CountryName",
                        typeCombinatorTypes: null
                      },
                      Contact: {
                        description:
                          "Name of the person the shipment's duties and taxes are to be billed to.",
                        xml: {
                          name: "Contact",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Contact",
                        typeCombinatorTypes: null
                      }
                    },
                    dataTypeDisplayText: "Duty",
                    dataTypeLink: "/java/models/structures/duty",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  },
                  Broker: {
                    id: "Broker",
                    title: "Broker",
                    description: "Container for broker details.",
                    xml: {
                      name: "Broker",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "object",
                    properties: {
                      BrokerID: {
                        description:
                          "Export broker who will handle the shipment.<br>**Default**: `0`",
                        xml: {
                          name: "BrokerID",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "integer",
                        default: 0,
                        dataTypeDisplayText: "Integer",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "BrokerID",
                        typeCombinatorTypes: null
                      }
                    },
                    dataTypeDisplayText: "Broker",
                    dataTypeLink: "/java/models/structures/broker",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  },
                  AssociateWithReturn: {
                    description:
                      "Indicator that this shipment is to be associated with a return shipment. Defaults to no.<br>**Default**: `false`",
                    xml: {
                      name: "AssociateWithReturn",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "AssociateWithReturn",
                    typeCombinatorTypes: null
                  },
                  CustomsReturnReasonID: {
                    description:
                      "In cases where an International outbound shipment is to associated with a return shipment. This is the customs reason for the outbound shipment.<br>**Default**: `0`",
                    xml: {
                      name: "CustomsReturnReasonID",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "integer",
                    default: 0,
                    dataTypeDisplayText: "Integer",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "CustomsReturnReasonID",
                    typeCombinatorTypes: null
                  },
                  CustomsReturnReasonDescription: {
                    description:
                      "In cases where a standard return reason is not suitable then this field can be populated with a free form reason. Will be ignored unless Customs Return Reason Identifier is set to Other. This is the reason for the outbound shipment.",
                    xml: {
                      name: "CustomsReturnReasonDescription",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "CustomsReturnReasonDescription",
                    typeCombinatorTypes: null
                  },
                  ReceiverIdentificationNumber: {
                    description: "Tax Identification number of the receiver.",
                    xml: {
                      name: "ReceiverIdentificationNumber",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ReceiverIdentificationNumber",
                    typeCombinatorTypes: null
                  },
                  ReceiverIdentificationType: {
                    description: "Tax Identification Type of the receiver.",
                    xml: {
                      name: "ReceiverIdentificationType",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ReceiverIdentificationType",
                    typeCombinatorTypes: null
                  },
                  UltimateDestinationCountry: {
                    description:
                      "Ultimate destination country of the shipment.",
                    xml: {
                      name: "UltimateDestinationCountry",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "UltimateDestinationCountry",
                    typeCombinatorTypes: null
                  },
                  SenderReceiverRelated: {
                    description:
                      "Indicates whether the sender and receiver of the shipment and related.  Defaults to not related if not submitted.<br>**Default**: `false`",
                    xml: {
                      name: "SenderReceiverRelated",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "SenderReceiverRelated",
                    typeCombinatorTypes: null
                  },
                  TotalDutyValue: {
                    description:
                      "Declared total export value.<br>**Default**: `0d`",
                    xml: {
                      name: "TotalDutyValue",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "number",
                    default: 0,
                    dataTypeDisplayText: "Double",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "TotalDutyValue",
                    typeCombinatorTypes: null
                  },
                  TotalDutyValueCurrency: {
                    description:
                      "Currency for the declared total export value.",
                    xml: {
                      name: "TotalDutyValueCurrency",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "TotalDutyValueCurrency",
                    typeCombinatorTypes: null
                  },
                  AESTransactionNumber: {
                    description:
                      "Transaction number of the shipment's online Shipper's Export Declaration (SED) filing.",
                    xml: {
                      name: "AESTransactionNumber",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "AESTransactionNumber",
                    typeCombinatorTypes: null
                  },
                  B13ATransactionNumber: {
                    description:
                      "Transaction number of the shipment's B13A filing.",
                    xml: {
                      name: "B13ATransactionNumber",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "B13ATransactionNumber",
                    typeCombinatorTypes: null
                  },
                  TermsOfSale: {
                    description:
                      "Rights and obligations of each party when it comes to transporting the shipment.<br>**Default**: `0`",
                    xml: {
                      name: "TermsOfSale",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "integer",
                    default: 0,
                    dataTypeDisplayText: "Integer",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "TermsOfSale",
                    typeCombinatorTypes: null
                  },
                  TermsOfSaleConsigneeAccountNumber: {
                    description:
                      "The account number to which the consignee's costs (that are determined by the selected Terms Of Sale) are charged.",
                    xml: {
                      name: "TermsOfSaleConsigneeAccountNumber",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "TermsOfSaleConsigneeAccountNumber",
                    typeCombinatorTypes: null
                  },
                  FreeFormTermsOfSale: {
                    description: "The Terms Of Sale entered by the user.",
                    xml: {
                      name: "FreeFormTermsOfSale",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "FreeFormTermsOfSale",
                    typeCombinatorTypes: null
                  },
                  BookingNumber: {
                    description:
                      "Booking number for the shipment.<br>**Default**: `0`",
                    xml: {
                      name: "BookingNumber",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "integer",
                    default: 0,
                    dataTypeDisplayText: "Integer",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "BookingNumber",
                    typeCombinatorTypes: null
                  },
                  UltimateConsignee: {
                    id: "UltimateConsignee",
                    title: "UltimateConsignee",
                    description:
                      "Container to allow the customization of the ultimate consignee address details associated with the transaction.",
                    xml: {
                      name: "UltimateConsignee",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "object",
                    properties: {
                      Name: {
                        description:
                          "Name of the individual actually receiving the merchandise.",
                        xml: {
                          name: "Name",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Name",
                        typeCombinatorTypes: null
                      },
                      CompanyName: {
                        description:
                          "The company name associated with the address.",
                        xml: {
                          name: "CompanyName",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "CompanyName",
                        typeCombinatorTypes: null
                      },
                      Street: {
                        description: "First line of the address.",
                        xml: {
                          name: "Street",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Street",
                        typeCombinatorTypes: null
                      },
                      Locale: {
                        description: "Second line of the address.",
                        xml: {
                          name: "Locale",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Locale",
                        typeCombinatorTypes: null
                      },
                      Other: {
                        description: "Third line of the address.",
                        xml: {
                          name: "Other",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Other",
                        typeCombinatorTypes: null
                      },
                      City: {
                        description: "City of the address.",
                        xml: {
                          name: "City",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "City",
                        typeCombinatorTypes: null
                      },
                      Region: {
                        description: "The state or region of the address.",
                        xml: {
                          name: "Region",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Region",
                        typeCombinatorTypes: null
                      },
                      RegionName: {
                        description:
                          "The name of the region associated with the address, this value will be automatically added if available.",
                        xml: {
                          name: "RegionName",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "RegionName",
                        typeCombinatorTypes: null
                      },
                      PostalCode: {
                        description:
                          "The postal code or zip associated with the address.",
                        xml: {
                          name: "PostalCode",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "PostalCode",
                        typeCombinatorTypes: null
                      },
                      Country: {
                        description: "The country code for the address.",
                        xml: {
                          name: "Country",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Country",
                        typeCombinatorTypes: null
                      },
                      CountryName: {
                        description:
                          "The name of the country associated with the address, this value will be automatically added if available.",
                        xml: {
                          name: "CountryName",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "CountryName",
                        typeCombinatorTypes: null
                      },
                      Phone: {
                        description:
                          "The phone number associated with the address.",
                        xml: {
                          name: "Phone",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Phone",
                        typeCombinatorTypes: null
                      }
                    },
                    dataTypeDisplayText: "UltimateConsignee",
                    dataTypeLink: "/java/models/structures/ultimate-consignee",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  },
                  FreightForwarder: {
                    id: "FreightForwarder",
                    title: "FreightForwarder",
                    description:
                      "Container to allow the customization of the freight forwarder address details associated with the transaction.",
                    xml: {
                      name: "FreightForwarder",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "object",
                    properties: {
                      Name: {
                        description:
                          "Name of the individual acting as an agent for the exporter in moving cargo to an overseas destination.",
                        xml: {
                          name: "Name",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Name",
                        typeCombinatorTypes: null
                      },
                      CompanyName: {
                        description:
                          "The company name associated with the address.",
                        xml: {
                          name: "CompanyName",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "CompanyName",
                        typeCombinatorTypes: null
                      },
                      Street: {
                        description: "First line of the address.",
                        xml: {
                          name: "Street",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Street",
                        typeCombinatorTypes: null
                      },
                      Locale: {
                        description: "Second line of the address.",
                        xml: {
                          name: "Locale",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Locale",
                        typeCombinatorTypes: null
                      },
                      Other: {
                        description: "Third line of the address.",
                        xml: {
                          name: "Other",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Other",
                        typeCombinatorTypes: null
                      },
                      City: {
                        description: "City of the address.",
                        xml: {
                          name: "City",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "City",
                        typeCombinatorTypes: null
                      },
                      Region: {
                        description: "The state or region of the address.",
                        xml: {
                          name: "Region",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Region",
                        typeCombinatorTypes: null
                      },
                      RegionName: {
                        description:
                          "The name of the region associated with the address, this value will be automatically added if available.",
                        xml: {
                          name: "RegionName",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "RegionName",
                        typeCombinatorTypes: null
                      },
                      PostalCode: {
                        description:
                          "The postal code or zip associated with the address.",
                        xml: {
                          name: "PostalCode",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "PostalCode",
                        typeCombinatorTypes: null
                      },
                      Country: {
                        description: "The country code for the address.",
                        xml: {
                          name: "Country",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Country",
                        typeCombinatorTypes: null
                      },
                      CountryName: {
                        description:
                          "The name of the country associated with the address, this value will be automatically added if available.",
                        xml: {
                          name: "CountryName",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "CountryName",
                        typeCombinatorTypes: null
                      },
                      Phone: {
                        description:
                          "The phone number associated with the address.",
                        xml: {
                          name: "Phone",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Phone",
                        typeCombinatorTypes: null
                      },
                      IdentificationNumber: {
                        description:
                          "Identification number (e.g. EIN, SSN, DUNS) of the individual acting as an agent for the exporter in moving cargo to an overseas destination.",
                        xml: {
                          name: "IdentificationNumber",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "IdentificationNumber",
                        typeCombinatorTypes: null
                      },
                      IdentificationNumberType: {
                        description:
                          "Type of the identification number (e.g. EIN, SSN, DUNS) of the individual acting as an agent for the exporter in moving cargo to an overseas destination.<br>**Default**: `0`",
                        xml: {
                          name: "IdentificationNumberType",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "integer",
                        default: 0,
                        dataTypeDisplayText: "Integer",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "IdentificationNumberType",
                        typeCombinatorTypes: null
                      }
                    },
                    dataTypeDisplayText: "FreightForwarder",
                    dataTypeLink: "/java/models/structures/freight-forwarder",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  },
                  ExportReason: {
                    description:
                      "Reason for exporting the shipment. Defaults to None or the configured value in International Defaults.<br>**Default**: `0`",
                    xml: {
                      name: "ExportReason",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "integer",
                    default: 0,
                    dataTypeDisplayText: "Integer",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ExportReason",
                    typeCombinatorTypes: null
                  },
                  ExportCode: {
                    description: "Code associated with the export reason.",
                    xml: {
                      name: "ExportCode",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ExportCode",
                    typeCombinatorTypes: null
                  },
                  ExportDeclaration: {
                    description:
                      "Declaration associated with the export reason.",
                    xml: {
                      name: "ExportDeclaration",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ExportDeclaration",
                    typeCombinatorTypes: null
                  },
                  IdentificationType: {
                    description:
                      "Export organization identifier type.<br>**Default**: `0`",
                    xml: {
                      name: "IdentificationType",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "integer",
                    default: 0,
                    dataTypeDisplayText: "Integer",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "IdentificationType",
                    typeCombinatorTypes: null
                  },
                  Identifier: {
                    description: "Export organization identifier.",
                    xml: {
                      name: "Identifier",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Identifier",
                    typeCombinatorTypes: null
                  },
                  ExportLicense: {
                    description: "Export license number.",
                    xml: {
                      name: "ExportLicense",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ExportLicense",
                    typeCombinatorTypes: null
                  },
                  ExportLicenseExpires: {
                    description: "Date the export expires.",
                    xml: {
                      name: "ExportLicenseExpires",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ExportLicenseExpires",
                    typeCombinatorTypes: null
                  },
                  ImportLicense: {
                    description: "Import license number.",
                    xml: {
                      name: "ImportLicense",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ImportLicense",
                    typeCombinatorTypes: null
                  },
                  ImportLicenseExpires: {
                    description: "Date the import license expires.",
                    xml: {
                      name: "ImportLicenseExpires",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ImportLicenseExpires",
                    typeCombinatorTypes: null
                  },
                  CanadaExportPermitNumber: {
                    description: "Canadian export permit number.",
                    xml: {
                      name: "CanadaExportPermitNumber",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "CanadaExportPermitNumber",
                    typeCombinatorTypes: null
                  },
                  B13A: {
                    id: "B13A",
                    title: "B13A",
                    description: "Container for B13A details.",
                    xml: {
                      name: "B13A",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "object",
                    properties: {
                      Method: {
                        description:
                          "B13A method type identifier.<br>**Default**: `0`",
                        xml: {
                          name: "Method",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "integer",
                        default: 0,
                        dataTypeDisplayText: "Integer",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Method",
                        typeCombinatorTypes: null
                      },
                      StatementData: {
                        description: "B13A statement data.",
                        xml: {
                          name: "StatementData",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "StatementData",
                        typeCombinatorTypes: null
                      }
                    },
                    dataTypeDisplayText: "B13A",
                    dataTypeLink: "/java/models/structures/b13-a",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  },
                  SED: {
                    id: "SED",
                    title: "SED",
                    description: "Container for SED details.",
                    xml: {
                      name: "SED",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "object",
                    properties: {
                      Method: {
                        description:
                          "Method to be used to submit Shipper's Export Declaration information for this shipment.<br>**Default**: `0`",
                        xml: {
                          name: "Method",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "integer",
                        default: 0,
                        dataTypeDisplayText: "Integer",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Method",
                        typeCombinatorTypes: null
                      },
                      ExemptNumber: {
                        description:
                          "Details why the shipment does not require a Shipper's Export Declaration.",
                        xml: {
                          name: "ExemptNumber",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "ExemptNumber",
                        typeCombinatorTypes: null
                      }
                    },
                    dataTypeDisplayText: "SED",
                    dataTypeLink: "/java/models/structures/sed",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  }
                },
                dataTypeDisplayText: "International",
                dataTypeLink: "/java/models/structures/international",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              Packages: {
                id: "Packages",
                title: "Packages",
                description:
                  "Container for all packages associated with the transaction.",
                xml: {
                  name: "Packages",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  Package: {
                    description:
                      "Container for an individual package associated with the transaction.",
                    xml: {
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "array",
                    items: {
                      id: "Package",
                      title: "Package",
                      description:
                        "Container for an individual package associated with the transaction.",
                      xml: {
                        name: "Package",
                        namespace: "https://www.wisetechglobal.com/",
                        prefix: "wtg",
                        attribute: false,
                        wrapped: false
                      },
                      type: "object",
                      properties: {
                        RecordIdentifiers: {
                          id: "RecordIdentifiers",
                          title: "RecordIdentifiers",
                          description:
                            "Outer container for transaction identifiers.",
                          xml: {
                            name: "RecordIdentifiers",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "object",
                          properties: {
                            RecordIdentifier: {
                              description:
                                "Inner container for transaction identifiers.",
                              xml: {
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "array",
                              items: {
                                id: "RecordIdentifier",
                                title: "RecordIdentifier",
                                description:
                                  "Inner container for transaction identifiers.",
                                xml: {
                                  name: "RecordIdentifier",
                                  namespace: "https://www.wisetechglobal.com/",
                                  prefix: "wtg",
                                  attribute: false,
                                  wrapped: false
                                },
                                type: "object",
                                properties: {
                                  Keys: {
                                    id: "Keys",
                                    title: "Keys",
                                    description:
                                      "Container for transaction identifiers to be stored.",
                                    xml: {
                                      name: "Keys",
                                      namespace:
                                        "https://www.wisetechglobal.com/",
                                      prefix: "wtg",
                                      attribute: false,
                                      wrapped: false
                                    },
                                    type: "object",
                                    properties: {
                                      Key1: {
                                        description:
                                          "Shipment-level record identifier.",
                                        xml: {
                                          name: "Key1",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "Key1",
                                        typeCombinatorTypes: null
                                      },
                                      Key2: {
                                        description:
                                          "Shipment-level record identifier.",
                                        xml: {
                                          name: "Key2",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "Key2",
                                        typeCombinatorTypes: null
                                      },
                                      Key3: {
                                        description:
                                          "Shipment-level record identifier.",
                                        xml: {
                                          name: "Key3",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "Key3",
                                        typeCombinatorTypes: null
                                      },
                                      Key4: {
                                        description:
                                          "Shipment-level record identifier.",
                                        xml: {
                                          name: "Key4",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "Key4",
                                        typeCombinatorTypes: null
                                      },
                                      Key5: {
                                        description:
                                          "Shipment-level record identifier.",
                                        xml: {
                                          name: "Key5",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "Key5",
                                        typeCombinatorTypes: null
                                      },
                                      Key6: {
                                        description:
                                          "Shipment-level record identifier.",
                                        xml: {
                                          name: "Key6",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "Key6",
                                        typeCombinatorTypes: null
                                      }
                                    },
                                    dataTypeDisplayText: "Keys",
                                    dataTypeLink:
                                      "/java/models/structures/keys",
                                    dataTypeMarkdown: null,
                                    paramType: null,
                                    typeCombinatorTypes: null
                                  }
                                },
                                dataTypeDisplayText: "Record Identifier",
                                dataTypeLink:
                                  "/java/models/structures/record-identifier"
                              },
                              dataTypeDisplayText: "List<RecordIdentifier>",
                              dataTypeLink:
                                "/java/models/structures/record-identifier",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "RecordIdentifier",
                              typeCombinatorTypes: null
                            }
                          },
                          dataTypeDisplayText: "RecordIdentifiers",
                          dataTypeLink:
                            "/java/models/structures/record-identifiers",
                          dataTypeMarkdown: null,
                          paramType: null,
                          typeCombinatorTypes: null
                        },
                        ProactiveResponse: {
                          description:
                            "Indicates whether the package requires the Proactive Response special service.<br>**Default**: `false`",
                          xml: {
                            name: "ProactiveResponse",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "ProactiveResponse",
                          typeCombinatorTypes: null
                        },
                        SpecialCare: {
                          id: "SpecialCare",
                          title: "SpecialCare",
                          description:
                            "Outer container for special care details for package.",
                          xml: {
                            name: "SpecialCare",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "object",
                          properties: {
                            Type: {
                              title: "Type",
                              description:
                                "Describes the special care required",
                              example: 1,
                              xml: {
                                name: "Type",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              "x-enum-elements": [
                                {
                                  name: "Enum_1",
                                  description: ""
                                },
                                {
                                  name: "Enum_2",
                                  description: ""
                                },
                                {
                                  name: "Enum_3",
                                  description: ""
                                }
                              ],
                              type: "integer",
                              enum: [1, 2, 3, null],
                              dataTypeDisplayText: "TypeEnum",
                              dataTypeLink: "/java/models/enumerations/type",
                              dataTypeMarkdown: null,
                              paramType: null,
                              typeCombinatorTypes: null
                            },
                            Temperature: {
                              title: "Temperature",
                              description:
                                "Describes the storage temperature for the special care package",
                              example: 1,
                              xml: {
                                name: "Temperature",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              "x-enum-elements": [
                                {
                                  name: "Enum_1",
                                  description: ""
                                },
                                {
                                  name: "Enum_2",
                                  description: ""
                                },
                                {
                                  name: "Enum_4",
                                  description: ""
                                },
                                {
                                  name: "Enum_8",
                                  description: ""
                                },
                                {
                                  name: "Enum_16",
                                  description: ""
                                }
                              ],
                              type: "integer",
                              enum: [1, 2, 4, 8, 16, null],
                              dataTypeDisplayText: "TemperatureEnum",
                              dataTypeLink:
                                "/java/models/enumerations/temperature",
                              dataTypeMarkdown: null,
                              paramType: null,
                              typeCombinatorTypes: null
                            },
                            ExpediteMethod: {
                              title: "ExpediteMethod",
                              description:
                                "Describes the method used to expedite delivery of the special care package",
                              example: 64,
                              xml: {
                                name: "ExpediteMethod",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              "x-enum-elements": [
                                {
                                  name: "Enum_64",
                                  description: ""
                                },
                                {
                                  name: "Enum_128",
                                  description: ""
                                },
                                {
                                  name: "Enum_256",
                                  description: ""
                                }
                              ],
                              type: "integer",
                              enum: [64, 128, 256, null],
                              dataTypeDisplayText: "ExpediteMethodEnum",
                              dataTypeLink:
                                "/java/models/enumerations/expedite-method",
                              dataTypeMarkdown: null,
                              paramType: null,
                              typeCombinatorTypes: null
                            },
                            Instructions: {
                              title: "Instructions",
                              description:
                                "Describes the which contact method to be used to communicate problems delivering the special care package",
                              example: 512,
                              xml: {
                                name: "Instructions",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              "x-enum-elements": [
                                {
                                  name: "Enum_512",
                                  description: ""
                                },
                                {
                                  name: "Enum_1024",
                                  description: ""
                                },
                                {
                                  name: "Enum_2048",
                                  description: ""
                                },
                                {
                                  name: "Enum_4096",
                                  description: ""
                                }
                              ],
                              type: "integer",
                              enum: [512, 1024, 2048, 4096, null],
                              dataTypeDisplayText: "InstructionsEnum",
                              dataTypeLink:
                                "/java/models/enumerations/instructions",
                              dataTypeMarkdown: null,
                              paramType: null,
                              typeCombinatorTypes: null
                            },
                            ReturnToShipper: {
                              description:
                                "Indicates whether a special care package should be returned to shipper if problems arise.<br>**Default**: `false`",
                              xml: {
                                name: "ReturnToShipper",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "boolean",
                              default: false,
                              dataTypeDisplayText: "Boolean",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "ReturnToShipper",
                              typeCombinatorTypes: null
                            },
                            PackageIdentifier: {
                              description:
                                "The identifier of the attached tracking device.",
                              xml: {
                                name: "PackageIdentifier",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "PackageIdentifier",
                              typeCombinatorTypes: null
                            }
                          },
                          dataTypeDisplayText: "SpecialCare",
                          dataTypeLink: "/java/models/structures/special-care",
                          dataTypeMarkdown: null,
                          paramType: null,
                          typeCombinatorTypes: null
                        },
                        LithiumBattery: {
                          description:
                            "Indicates whether the shipment contains a lithium battery.  Defaults to no.<br>**Default**: `false`",
                          xml: {
                            name: "LithiumBattery",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "LithiumBattery",
                          typeCombinatorTypes: null
                        },
                        LithiumBatteryDetails: {
                          id: "LithiumBatteryDetails",
                          title: "LithiumBatteryDetails",
                          description:
                            "Outer container for Lithium Battery details for package.",
                          xml: {
                            name: "LithiumBatteryDetails",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "object",
                          properties: {
                            Material: {
                              title: "Material",
                              description:
                                "Describes the material composition of the battery or cell",
                              example: 1,
                              xml: {
                                name: "Material",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              "x-enum-elements": [
                                {
                                  name: "Enum_1",
                                  description: ""
                                },
                                {
                                  name: "Enum_2",
                                  description: ""
                                }
                              ],
                              type: "integer",
                              enum: [1, 2, null],
                              dataTypeDisplayText: "MaterialEnum",
                              dataTypeLink:
                                "/java/models/enumerations/material",
                              dataTypeMarkdown: null,
                              paramType: null,
                              typeCombinatorTypes: null
                            },
                            Packing: {
                              title: "Packing",
                              description:
                                "Describes the packing arrangement of the battery or cell with respect to other items within the same package",
                              example: 1,
                              xml: {
                                name: "Packing",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              "x-enum-elements": [
                                {
                                  name: "Enum_1",
                                  description: ""
                                },
                                {
                                  name: "Enum_2",
                                  description: ""
                                },
                                {
                                  name: "Enum_3",
                                  description: ""
                                }
                              ],
                              type: "integer",
                              enum: [1, 2, 3, null],
                              dataTypeDisplayText: "PackingEnum",
                              dataTypeLink: "/java/models/enumerations/packing",
                              dataTypeMarkdown: null,
                              paramType: null,
                              typeCombinatorTypes: null
                            }
                          },
                          dataTypeDisplayText: "LithiumBatteryDetails",
                          dataTypeLink:
                            "/java/models/structures/lithium-battery-details",
                          dataTypeMarkdown: null,
                          paramType: null,
                          typeCombinatorTypes: null
                        },
                        Copies: {
                          description:
                            "Indicates the number of additional copies of the package that are to be shipped.  Defaults to zero additional copies if not submitted.<br>**Default**: `0`",
                          xml: {
                            name: "Copies",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "integer",
                          default: 0,
                          dataTypeDisplayText: "Integer",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "Copies",
                          typeCombinatorTypes: null
                        },
                        PackageRequisitionID: {
                          description:
                            "Package Requistion of the package to ship, use this element for better multi piece requisition handling.<br>**Default**: `0`",
                          xml: {
                            name: "PackageRequisitionID",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "integer",
                          default: 0,
                          dataTypeDisplayText: "Integer",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "PackageRequisitionID",
                          typeCombinatorTypes: null
                        },
                        ExternalTrackingID: {
                          description:
                            "Identifier associated with Third Party Tracking.",
                          xml: {
                            name: "ExternalTrackingID",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "ExternalTrackingID",
                          typeCombinatorTypes: null
                        },
                        PackItemID: {
                          description:
                            "Unique numeric identifier for the pack item.<br>**Default**: `0`",
                          xml: {
                            name: "PackItemID",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "integer",
                          default: 0,
                          dataTypeDisplayText: "Integer",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "PackItemID",
                          typeCombinatorTypes: null
                        },
                        ShipperReference: {
                          description:
                            "Primary reference number, which will be printed on the package's label.",
                          xml: {
                            name: "ShipperReference",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "ShipperReference",
                          typeCombinatorTypes: null
                        },
                        PackageReference: {
                          description:
                            "Package reference number, which will be echoed back in the response.",
                          xml: {
                            name: "PackageReference",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "PackageReference",
                          typeCombinatorTypes: null
                        },
                        CustomerPackageReference: {
                          description:
                            "Customer Package Reference number, which will be echoed back in the response.",
                          xml: {
                            name: "CustomerPackageReference",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "CustomerPackageReference",
                          typeCombinatorTypes: null
                        },
                        ReferenceOne: {
                          description: "First additional reference number.",
                          xml: {
                            name: "ReferenceOne",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "ReferenceOne",
                          typeCombinatorTypes: null
                        },
                        ReceiverName: {
                          description:
                            "The name of for the receiver of the package.",
                          xml: {
                            name: "ReceiverName",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "ReceiverName",
                          typeCombinatorTypes: null
                        },
                        ReceiverPhone: {
                          description:
                            "The phone number for the receiver of the package.",
                          xml: {
                            name: "ReceiverPhone",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "ReceiverPhone",
                          typeCombinatorTypes: null
                        },
                        ReceiverEmail: {
                          description:
                            "The email address for the receiver of the package.",
                          xml: {
                            name: "ReceiverEmail",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "ReceiverEmail",
                          typeCombinatorTypes: null
                        },
                        PackageType: {
                          description:
                            "Carrier package (e.g. letter, package, pallet) that is to be rated for.<br>**Default**: `0`",
                          xml: {
                            name: "PackageType",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "integer",
                          default: 0,
                          dataTypeDisplayText: "Integer",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "PackageType",
                          typeCombinatorTypes: null
                        },
                        ServiceType: {
                          description:
                            "Numeric identifier for the carrier service which is required only when rating PB stamps.<br>**Default**: `0`",
                          xml: {
                            name: "ServiceType",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "integer",
                          default: 0,
                          dataTypeDisplayText: "Integer",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "ServiceType",
                          typeCombinatorTypes: null
                        },
                        ReceiverCountry: {
                          description:
                            "The country code for the country of receipt of the package, which is required only when rating PB stamps.",
                          xml: {
                            name: "ReceiverCountry",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "ReceiverCountry",
                          typeCombinatorTypes: null
                        },
                        ReceiverPostalCode: {
                          description:
                            "The destination postal code of the package which is required only when rating PB stamps to certain international destinations.",
                          xml: {
                            name: "ReceiverPostalCode",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "ReceiverPostalCode",
                          typeCombinatorTypes: null
                        },
                        SenderName: {
                          description:
                            "The name for the sender of the package.",
                          xml: {
                            name: "SenderName",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "SenderName",
                          typeCombinatorTypes: null
                        },
                        SenderPhone: {
                          description:
                            "The phone number for the sender of the package.",
                          xml: {
                            name: "SenderPhone",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "SenderPhone",
                          typeCombinatorTypes: null
                        },
                        Weight: {
                          description:
                            "The weight of the package.<br>**Default**: `0d`",
                          xml: {
                            name: "Weight",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "number",
                          default: 0,
                          dataTypeDisplayText: "Double",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "Weight",
                          typeCombinatorTypes: null
                        },
                        MajorWeight: {
                          description:
                            "Major Weight of the package.<br>**Default**: `0d`",
                          xml: {
                            name: "MajorWeight",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "number",
                          default: 0,
                          dataTypeDisplayText: "Double",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "MajorWeight",
                          typeCombinatorTypes: null
                        },
                        MinorWeight: {
                          description:
                            "Minor Weight of the package.<br>**Default**: `0d`",
                          xml: {
                            name: "MinorWeight",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "number",
                          default: 0,
                          dataTypeDisplayText: "Double",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "MinorWeight",
                          typeCombinatorTypes: null
                        },
                        WeightUOM: {
                          description:
                            'The units of measure for the package weight.<br>**Default**: `"0"`',
                          xml: {
                            name: "WeightUOM",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          default: "0",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "WeightUOM",
                          typeCombinatorTypes: null
                        },
                        Length: {
                          description:
                            "The dimensional lenth of the package.<br>**Default**: `0d`",
                          xml: {
                            name: "Length",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "number",
                          default: 0,
                          dataTypeDisplayText: "Double",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "Length",
                          typeCombinatorTypes: null
                        },
                        Width: {
                          description:
                            "The dimensional width of the package.<br>**Default**: `0d`",
                          xml: {
                            name: "Width",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "number",
                          default: 0,
                          dataTypeDisplayText: "Double",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "Width",
                          typeCombinatorTypes: null
                        },
                        Height: {
                          description:
                            "The dimensional height of the package.<br>**Default**: `0d`",
                          xml: {
                            name: "Height",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "number",
                          default: 0,
                          dataTypeDisplayText: "Double",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "Height",
                          typeCombinatorTypes: null
                        },
                        Cubic: {
                          description:
                            "Cubic feet or metres of the package.<br>**Default**: `0d`",
                          xml: {
                            name: "Cubic",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "number",
                          default: 0,
                          dataTypeDisplayText: "Double",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "Cubic",
                          typeCombinatorTypes: null
                        },
                        Linear: {
                          description:
                            "Linear feet or metres of the package.<br>**Default**: `0d`",
                          xml: {
                            name: "Linear",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "number",
                          default: 0,
                          dataTypeDisplayText: "Double",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "Linear",
                          typeCombinatorTypes: null
                        },
                        DimensionsUOM: {
                          description:
                            "The units of measure for the package length, width and height.",
                          xml: {
                            name: "DimensionsUOM",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "DimensionsUOM",
                          typeCombinatorTypes: null
                        },
                        ContentDescription: {
                          description:
                            "Free form description of the package's content.",
                          xml: {
                            name: "ContentDescription",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "ContentDescription",
                          typeCombinatorTypes: null
                        },
                        WayBillNumber: {
                          description:
                            "Tracking number to associate with the package.",
                          xml: {
                            name: "WayBillNumber",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "WayBillNumber",
                          typeCombinatorTypes: null
                        },
                        PriorityAlert: {
                          description:
                            "Indicates whether a priority alert is required for this package.  Defaults to no priority alertt if not submitted.<br>**Default**: `false`",
                          xml: {
                            name: "PriorityAlert",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "PriorityAlert",
                          typeCombinatorTypes: null
                        },
                        PriorityAlertPlus: {
                          description:
                            "Indicates whether a priority alert plus is required for this package.  Defaults to no priority alert plus if not submitted.<br>**Default**: `false`",
                          xml: {
                            name: "PriorityAlertPlus",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "PriorityAlertPlus",
                          typeCombinatorTypes: null
                        },
                        Insurance: {
                          id: "Insurance",
                          title: "Insurance",
                          description: "Container for insurance details.",
                          xml: {
                            name: "Insurance",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "object",
                          properties: {
                            Type: {
                              description:
                                "Type of insurance.  Defaults to no insurance if not submitted.<br>**Default**: `0`",
                              xml: {
                                name: "Type",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "integer",
                              default: 0,
                              dataTypeDisplayText: "Integer",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Type",
                              typeCombinatorTypes: null
                            },
                            Value: {
                              description:
                                "Value the package is to be insured for.<br>**Default**: `0d`",
                              xml: {
                                name: "Value",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "number",
                              default: 0,
                              dataTypeDisplayText: "Double",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Value",
                              typeCombinatorTypes: null
                            },
                            ValueCurrency: {
                              description:
                                "Currency of the value the package is to be insured for.",
                              xml: {
                                name: "ValueCurrency",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "ValueCurrency",
                              typeCombinatorTypes: null
                            }
                          },
                          dataTypeDisplayText: "Insurance",
                          dataTypeLink: "/java/models/structures/insurance",
                          dataTypeMarkdown: null,
                          paramType: null,
                          typeCombinatorTypes: null
                        },
                        COD: {
                          id: "COD",
                          title: "COD",
                          description:
                            "Container for collect on delivery details.",
                          xml: {
                            name: "COD",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "object",
                          properties: {
                            Type: {
                              description:
                                "Numeric identifer for the type of cash on delivery.  Defaults to no cash on delivery if not submitted.<br>**Constraints**: *Pattern*: `[1-6]`",
                              xml: {
                                name: "Type",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "integer",
                              dataTypeDisplayText: "Integer",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Type",
                              typeCombinatorTypes: null
                            },
                            Value: {
                              description:
                                "Value that is to be collected by the carrier when the package is delivered.<br>**Default**: `0d`",
                              xml: {
                                name: "Value",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "number",
                              default: 0,
                              dataTypeDisplayText: "Double",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Value",
                              typeCombinatorTypes: null
                            },
                            ValueCurrency: {
                              description:
                                "Currency of the value that is to be collected by the carrier when the package is delivered.",
                              xml: {
                                name: "ValueCurrency",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "ValueCurrency",
                              typeCombinatorTypes: null
                            },
                            AddCharges: {
                              description:
                                "Indicates whether charges are to be added.<br>**Default**: `false`",
                              xml: {
                                name: "AddCharges",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "boolean",
                              default: false,
                              dataTypeDisplayText: "Boolean",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "AddCharges",
                              typeCombinatorTypes: null
                            }
                          },
                          dataTypeDisplayText: "COD",
                          dataTypeLink: "/java/models/structures/cod",
                          dataTypeMarkdown: null,
                          paramType: null,
                          typeCombinatorTypes: null
                        },
                        GuaranteedService: {
                          description:
                            "Numeric identifer for the type of guaranteed service.  Defaults to no guaranteed service if not submitted.<br>**Default**: `0`",
                          xml: {
                            name: "GuaranteedService",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "integer",
                          default: 0,
                          dataTypeDisplayText: "Integer",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "GuaranteedService",
                          typeCombinatorTypes: null
                        },
                        ECOD: {
                          description:
                            "Electronic COD indicator. Defaults to not ECOD.<br>**Default**: `false`",
                          xml: {
                            name: "ECOD",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "ECOD",
                          typeCombinatorTypes: null
                        },
                        HoldDeliveryType: {
                          title: "HoldDeliveryType",
                          description:
                            "Numeric identifer for the type of cash on delivery.  Defaults to no cash on delivery if not submitted.<br>**Default**: `HoldDeliveryTypeEnum.DELIVERDIRECTTOHOLDLOCATION`",
                          example: "DeliverDirectToHoldLocation",
                          xml: {
                            name: "HoldDeliveryType",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          "x-enum-elements": [
                            {
                              name: "DeliverDirectToHoldLocation",
                              description: ""
                            },
                            {
                              name: "AttemptCustomerDeliveryFirst",
                              description: ""
                            }
                          ],
                          type: "string",
                          enum: [
                            "DeliverDirectToHoldLocation",
                            "AttemptCustomerDeliveryFirst"
                          ],
                          dataTypeDisplayText: "HoldDeliveryTypeEnum",
                          dataTypeLink:
                            "/java/models/enumerations/hold-delivery-type",
                          dataTypeMarkdown: null,
                          paramType: null,
                          typeCombinatorTypes: null
                        },
                        Hold: {
                          description:
                            "Indicates whether the package should be held for collection at a carrier's depot or some other location.<br>**Default**: `false`",
                          xml: {
                            name: "Hold",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "Hold",
                          typeCombinatorTypes: null
                        },
                        Holder: {
                          id: "Holder",
                          title: "Holder",
                          description:
                            "Container for the holding location of the package.",
                          xml: {
                            name: "Holder",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "object",
                          properties: {
                            HoldLocationID: {
                              description:
                                "Carrier identifier for the hold location.",
                              xml: {
                                name: "HoldLocationID",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "HoldLocationID",
                              typeCombinatorTypes: null
                            },
                            Name: {
                              description:
                                "Name of the individual who is to hold the package for collection.",
                              xml: {
                                name: "Name",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Name",
                              typeCombinatorTypes: null
                            },
                            CompanyName: {
                              description:
                                "The company name associated with the address.",
                              xml: {
                                name: "CompanyName",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "CompanyName",
                              typeCombinatorTypes: null
                            },
                            Street: {
                              description: "First line of the address.",
                              xml: {
                                name: "Street",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Street",
                              typeCombinatorTypes: null
                            },
                            Locale: {
                              description: "Second line of the address.",
                              xml: {
                                name: "Locale",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Locale",
                              typeCombinatorTypes: null
                            },
                            Other: {
                              description: "Third line of the address.",
                              xml: {
                                name: "Other",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Other",
                              typeCombinatorTypes: null
                            },
                            City: {
                              description: "City of the address.",
                              xml: {
                                name: "City",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "City",
                              typeCombinatorTypes: null
                            },
                            Region: {
                              description:
                                "The state or region of the address.",
                              xml: {
                                name: "Region",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Region",
                              typeCombinatorTypes: null
                            },
                            PostalCode: {
                              description:
                                "The postal code or zip associated with the address.",
                              xml: {
                                name: "PostalCode",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "PostalCode",
                              typeCombinatorTypes: null
                            },
                            Country: {
                              description: "The country code for the address.",
                              xml: {
                                name: "Country",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Country",
                              typeCombinatorTypes: null
                            },
                            Phone: {
                              description:
                                "The phone number associated with the address.",
                              xml: {
                                name: "Phone",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Phone",
                              typeCombinatorTypes: null
                            },
                            Type: {
                              description:
                                "The holder type associated with the address.",
                              xml: {
                                name: "Type",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Type",
                              typeCombinatorTypes: null
                            }
                          },
                          dataTypeDisplayText: "Holder",
                          dataTypeLink: "/java/models/structures/holder",
                          dataTypeMarkdown: null,
                          paramType: null,
                          typeCombinatorTypes: null
                        },
                        HomeDelivery: {
                          id: "HomeDelivery1",
                          title: "HomeDelivery",
                          description: "Container for home delivery details.",
                          xml: {
                            name: "HomeDelivery",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "object",
                          properties: {
                            Type: {
                              description:
                                "Type of home delivery required for the shipment.<br>**Constraints**: *Pattern*: `[1-3]`",
                              xml: {
                                name: "Type",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "integer",
                              dataTypeDisplayText: "Integer",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Type",
                              typeCombinatorTypes: null
                            }
                          },
                          dataTypeDisplayText: "HomeDelivery1",
                          dataTypeLink:
                            "/java/models/structures/home-delivery-1",
                          dataTypeMarkdown: null,
                          paramType: null,
                          typeCombinatorTypes: null
                        },
                        HazardousPackaging: {
                          description: "Description of hazardous packaging.",
                          xml: {
                            name: "HazardousPackaging",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "HazardousPackaging",
                          typeCombinatorTypes: null
                        },
                        HazardousPackageUnCode: {
                          description:
                            "Description of hazardous outer packaging.",
                          xml: {
                            name: "HazardousPackageUnCode",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "HazardousPackageUnCode",
                          typeCombinatorTypes: null
                        },
                        HazardousPackagingQuantity: {
                          description:
                            "Quantity of the outer packages.<br>**Default**: `0`",
                          xml: {
                            name: "HazardousPackagingQuantity",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "integer",
                          default: 0,
                          dataTypeDisplayText: "Integer",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "HazardousPackagingQuantity",
                          typeCombinatorTypes: null
                        },
                        PackageNotes: {
                          description: "Package level notes.",
                          xml: {
                            name: "PackageNotes",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "PackageNotes",
                          typeCombinatorTypes: null
                        },
                        AdditionalHandling: {
                          description:
                            "Indicates that extra handling measures are required when loading the package.<br>**Default**: `false`",
                          xml: {
                            name: "AdditionalHandling",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "AdditionalHandling",
                          typeCombinatorTypes: null
                        },
                        AdditionalHandlingType: {
                          title: "AdditionalHandlingType",
                          description:
                            "Indicates the type of Additional Handling required for this shipment. Default value is (Oversize/Overweight).",
                          example: "Default",
                          xml: {
                            name: "AdditionalHandlingType",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          "x-enum-elements": [
                            {
                              name: "Default",
                              description: ""
                            },
                            {
                              name: "NoContainer",
                              description: ""
                            },
                            {
                              name: "Liquids",
                              description: ""
                            },
                            {
                              name: "NonStandardPackaging",
                              description: ""
                            },
                            {
                              name: "DiscretionaryItems",
                              description: ""
                            },
                            {
                              name: "Fragile",
                              description: ""
                            }
                          ],
                          type: "string",
                          enum: [
                            "Default",
                            "NoContainer",
                            "Liquids",
                            "NonStandardPackaging",
                            "DiscretionaryItems",
                            "Fragile",
                            null
                          ],
                          dataTypeDisplayText: "AdditionalHandlingTypeEnum",
                          dataTypeLink:
                            "/java/models/enumerations/additional-handling-type",
                          dataTypeMarkdown: null,
                          paramType: null,
                          typeCombinatorTypes: null
                        },
                        LargePackage: {
                          description:
                            "Indicates that package size exceeds carrier's normal limits.  Defaults to not large package if not submitted.<br>**Default**: `false`",
                          xml: {
                            name: "LargePackage",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "LargePackage",
                          typeCombinatorTypes: null
                        },
                        DeliveryConfirmation: {
                          description:
                            "Type of delivery confirmation required for the package.  Defaults to none if not submitted.<br>**Default**: `0`",
                          xml: {
                            name: "DeliveryConfirmation",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "integer",
                          default: 0,
                          dataTypeDisplayText: "Integer",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "DeliveryConfirmation",
                          typeCombinatorTypes: null
                        },
                        ContainerType: {
                          description:
                            "Type of containerType required for the package.  Defaults to none if not submitted.<br>**Default**: `0`",
                          xml: {
                            name: "ContainerType",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "integer",
                          default: 0,
                          dataTypeDisplayText: "Integer",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "ContainerType",
                          typeCombinatorTypes: null
                        },
                        ExcessiveLengthType: {
                          description:
                            "Type of excessive length required for the package.  Defaults to none if not submitted.<br>**Default**: `0`",
                          xml: {
                            name: "ExcessiveLengthType",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "integer",
                          default: 0,
                          dataTypeDisplayText: "Integer",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "ExcessiveLengthType",
                          typeCombinatorTypes: null
                        },
                        VerbalConfirmation: {
                          description:
                            "Indicates verbal confirmation required. Defaults to no verbal confirmation.<br>**Default**: `false`",
                          xml: {
                            name: "VerbalConfirmation",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "VerbalConfirmation",
                          typeCombinatorTypes: null
                        },
                        FreightClass: {
                          description:
                            "The freight class of the package's content.",
                          xml: {
                            name: "FreightClass",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "FreightClass",
                          typeCombinatorTypes: null
                        },
                        NMFC: {
                          description:
                            "The National Motor Freight Classification of the package.",
                          xml: {
                            name: "NMFC",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "NMFC",
                          typeCombinatorTypes: null
                        },
                        ItemsOnPallet: {
                          description:
                            "Number of items on the pallet.<br>**Default**: `0`",
                          xml: {
                            name: "ItemsOnPallet",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "integer",
                          default: 0,
                          dataTypeDisplayText: "Integer",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "ItemsOnPallet",
                          typeCombinatorTypes: null
                        },
                        NonStandardContainer: {
                          description:
                            "Indicates whether the package has non standard dimensions.  Defaults to standard dimensions if omitted.<br>**Default**: `false`",
                          xml: {
                            name: "NonStandardContainer",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "NonStandardContainer",
                          typeCombinatorTypes: null
                        },
                        EmailNotification: {
                          description:
                            "Indicates whether an email notification should be sent to receiver's email address when package is shipped.  Defaults to not send email notification if omitted.<br>**Default**: `false`",
                          xml: {
                            name: "EmailNotification",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "EmailNotification",
                          typeCombinatorTypes: null
                        },
                        NonFlatMachinable: {
                          description:
                            "Indicates whether the package is non-flat and machinable.  Defaults to not non-flat and machinable if omitted.<br>**Default**: `false`",
                          xml: {
                            name: "NonFlatMachinable",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "NonFlatMachinable",
                          typeCombinatorTypes: null
                        },
                        NonMachinable: {
                          description:
                            "Indicates whether the package is non-machinable.  Defaults to machinable if omitted.<br>**Default**: `false`",
                          xml: {
                            name: "NonMachinable",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "NonMachinable",
                          typeCombinatorTypes: null
                        },
                        NonRectangular: {
                          description:
                            "Indicates whether the package is non-rectangular.  Defaults to rectangular if omitted.<br>**Default**: `false`",
                          xml: {
                            name: "NonRectangular",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "NonRectangular",
                          typeCombinatorTypes: null
                        },
                        Flat: {
                          description:
                            "Indicates whether the package is flat.  Defaults to not flat if omitted.<br>**Default**: `false`",
                          xml: {
                            name: "Flat",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "Flat",
                          typeCombinatorTypes: null
                        },
                        Registered: {
                          description:
                            "Indicates whether the package is to be sent via registered mail.  Defaults to not registered if omitted.<br>**Default**: `false`",
                          xml: {
                            name: "Registered",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "Registered",
                          typeCombinatorTypes: null
                        },
                        RestrictedDelivery: {
                          description:
                            "Indicates whether the package is to be sent using restricted delivery.  Defaults to not restricted if omitted.<br>**Default**: `false`",
                          xml: {
                            name: "RestrictedDelivery",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "RestrictedDelivery",
                          typeCombinatorTypes: null
                        },
                        ReturnReceipt: {
                          description:
                            "Indicates whether a return receipt should be provided back to the shipper for this package.<br>**Default**: `false`",
                          xml: {
                            name: "ReturnReceipt",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "ReturnReceipt",
                          typeCombinatorTypes: null
                        },
                        Certified: {
                          description:
                            "Indicates whether the package is to be sent via certified mail.  Defaults to not certified if omitted.<br>**Default**: `false`",
                          xml: {
                            name: "Certified",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "Certified",
                          typeCombinatorTypes: null
                        },
                        DryIceWeight: {
                          description:
                            "Weight of dry ice in the package.<br>**Default**: `0d`",
                          xml: {
                            name: "DryIceWeight",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "number",
                          default: 0,
                          dataTypeDisplayText: "Double",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "DryIceWeight",
                          typeCombinatorTypes: null
                        },
                        DryIceWeightUOM: {
                          description:
                            "Weight units of measure for the dry ice in the package.",
                          xml: {
                            name: "DryIceWeightUOM",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "DryIceWeightUOM",
                          typeCombinatorTypes: null
                        },
                        LooseDryIce: {
                          description:
                            "Indicates overpacked or all-in-one hazardous package has loose dry ice<br>**Default**: `false`",
                          xml: {
                            name: "LooseDryIce",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "LooseDryIce",
                          typeCombinatorTypes: null
                        },
                        ERR: {
                          description:
                            "Indicates that Electronic Return Receipt is required.<br>**Default**: `false`",
                          xml: {
                            name: "ERR",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "ERR",
                          typeCombinatorTypes: null
                        },
                        ReturnReceiptMerchandise: {
                          description:
                            "Indicates that Return Receipt Merchandise is required.<br>**Default**: `false`",
                          xml: {
                            name: "ReturnReceiptMerchandise",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "ReturnReceiptMerchandise",
                          typeCombinatorTypes: null
                        },
                        ElectronicCertified: {
                          description:
                            "Indicates that Electronic Certified Mail service is required.<br>**Default**: `false`",
                          xml: {
                            name: "ElectronicCertified",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "ElectronicCertified",
                          typeCombinatorTypes: null
                        },
                        UniqueIdentifier: {
                          description: "Unique Identifier for a package.",
                          xml: {
                            name: "UniqueIdentifier",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "UniqueIdentifier",
                          typeCombinatorTypes: null
                        },
                        Exchange: {
                          description:
                            "Indicates whether the parcel is a consignment swap parcel. Default value is false.<br>**Default**: `false`",
                          xml: {
                            name: "Exchange",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "boolean",
                          default: false,
                          dataTypeDisplayText: "Boolean",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "Exchange",
                          typeCombinatorTypes: null
                        },
                        AdmissibilityPackagingType: {
                          description:
                            "Specific FedEx Ground non-standard container type used for domestic and cross border shipments.",
                          xml: {
                            name: "AdmissibilityPackagingType",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "string",
                          dataTypeDisplayText: "String",
                          dataTypeMarkdown: null,
                          paramType: null,
                          title: "AdmissibilityPackagingType",
                          typeCombinatorTypes: null
                        },
                        International: {
                          id: "International1",
                          title: "International",
                          description:
                            "Container for international details associated with the shipment.",
                          xml: {
                            name: "International",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "object",
                          properties: {
                            IsInternational: {
                              description:
                                "Indicates whether the package is part of an international shipment.  Defaults to no if omitted.<br>**Default**: `false`",
                              xml: {
                                name: "IsInternational",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "boolean",
                              default: false,
                              dataTypeDisplayText: "Boolean",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "IsInternational",
                              typeCombinatorTypes: null
                            },
                            NonDutiable: {
                              description:
                                "Indicates whether the package contains only non-dutiable goods.  Defaults to no if omitted.<br>**Default**: `false`",
                              xml: {
                                name: "NonDutiable",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "boolean",
                              default: false,
                              dataTypeDisplayText: "Boolean",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "NonDutiable",
                              typeCombinatorTypes: null
                            },
                            DocumentsOnly: {
                              description:
                                "Indicates whether the package contains only documents.  Defaults to not documents only if omitted.<br>**Default**: `false`",
                              xml: {
                                name: "DocumentsOnly",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "boolean",
                              default: false,
                              dataTypeDisplayText: "Boolean",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "DocumentsOnly",
                              typeCombinatorTypes: null
                            },
                            PrePackedBoxes: {
                              id: "PrePackedBoxes",
                              title: "PrePackedBoxes",
                              description:
                                "pre-packed boxes, including any items specified that will be packed and excess space used before any new boxes are created.",
                              xml: {
                                name: "PrePackedBoxes",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "object",
                              properties: {
                                PrePackedBox: {
                                  id: "PrePackedBox",
                                  title: "PrePackedBox",
                                  description: "Individual pre-packed boxes",
                                  xml: {
                                    name: "PrePackedBox",
                                    namespace:
                                      "https://www.wisetechglobal.com/",
                                    prefix: "wtg",
                                    attribute: false,
                                    wrapped: false
                                  },
                                  type: "object",
                                  properties: {
                                    BoxType: {
                                      id: "BoxType",
                                      title: "BoxType",
                                      description: "box type",
                                      xml: {
                                        name: "BoxType",
                                        namespace:
                                          "https://www.wisetechglobal.com/",
                                        prefix: "wtg",
                                        attribute: false,
                                        wrapped: false
                                      },
                                      type: "object",
                                      properties: {
                                        Name: {
                                          description: "Box type name",
                                          xml: {
                                            name: "Name",
                                            namespace:
                                              "https://www.wisetechglobal.com/",
                                            prefix: "wtg",
                                            attribute: false,
                                            wrapped: false
                                          },
                                          type: "string",
                                          dataTypeDisplayText: "String",
                                          dataTypeMarkdown: null,
                                          paramType: null,
                                          title: "Name",
                                          typeCombinatorTypes: null
                                        },
                                        Weight: {
                                          description:
                                            "Maximum weight for box type",
                                          xml: {
                                            name: "Weight",
                                            namespace:
                                              "https://www.wisetechglobal.com/",
                                            prefix: "wtg",
                                            attribute: false,
                                            wrapped: false
                                          },
                                          type: "number",
                                          dataTypeDisplayText: "Double",
                                          dataTypeMarkdown: null,
                                          paramType: null,
                                          title: "Weight",
                                          typeCombinatorTypes: null
                                        },
                                        Width: {
                                          description: "Box width",
                                          xml: {
                                            name: "Width",
                                            namespace:
                                              "https://www.wisetechglobal.com/",
                                            prefix: "wtg",
                                            attribute: false,
                                            wrapped: false
                                          },
                                          type: "number",
                                          dataTypeDisplayText: "Double",
                                          dataTypeMarkdown: null,
                                          paramType: null,
                                          title: "Width",
                                          typeCombinatorTypes: null
                                        },
                                        Height: {
                                          description: "Box height",
                                          xml: {
                                            name: "Height",
                                            namespace:
                                              "https://www.wisetechglobal.com/",
                                            prefix: "wtg",
                                            attribute: false,
                                            wrapped: false
                                          },
                                          type: "number",
                                          dataTypeDisplayText: "Double",
                                          dataTypeMarkdown: null,
                                          paramType: null,
                                          title: "Height",
                                          typeCombinatorTypes: null
                                        },
                                        Length: {
                                          description: "Box length",
                                          xml: {
                                            name: "Length",
                                            namespace:
                                              "https://www.wisetechglobal.com/",
                                            prefix: "wtg",
                                            attribute: false,
                                            wrapped: false
                                          },
                                          type: "number",
                                          dataTypeDisplayText: "Double",
                                          dataTypeMarkdown: null,
                                          paramType: null,
                                          title: "Length",
                                          typeCombinatorTypes: null
                                        }
                                      },
                                      dataTypeDisplayText: "BoxType",
                                      dataTypeLink:
                                        "/java/models/structures/box-type",
                                      dataTypeMarkdown: null,
                                      paramType: null,
                                      typeCombinatorTypes: null
                                    },
                                    Name: {
                                      description: "name for the type of box.",
                                      xml: {
                                        name: "Name",
                                        namespace:
                                          "https://www.wisetechglobal.com/",
                                        prefix: "wtg",
                                        attribute: false,
                                        wrapped: false
                                      },
                                      type: "string",
                                      dataTypeDisplayText: "String",
                                      dataTypeMarkdown: null,
                                      paramType: null,
                                      title: "Name",
                                      typeCombinatorTypes: null
                                    },
                                    WeightTare: {
                                      description:
                                        "weight of the container when empty or otherwise unladen, i.e., of the box itself.",
                                      xml: {
                                        name: "WeightTare",
                                        namespace:
                                          "https://www.wisetechglobal.com/",
                                        prefix: "wtg",
                                        attribute: false,
                                        wrapped: false
                                      },
                                      type: "number",
                                      dataTypeDisplayText: "Double",
                                      dataTypeMarkdown: null,
                                      paramType: null,
                                      title: "WeightTare",
                                      typeCombinatorTypes: null
                                    },
                                    WeightMax: {
                                      description:
                                        "maximum allowable gross weight for the box, i.e., all packed item weights plus the WeightTare.",
                                      xml: {
                                        name: "WeightMax",
                                        namespace:
                                          "https://www.wisetechglobal.com/",
                                        prefix: "wtg",
                                        attribute: false,
                                        wrapped: false
                                      },
                                      type: "number",
                                      dataTypeDisplayText: "Double",
                                      dataTypeMarkdown: null,
                                      paramType: null,
                                      title: "WeightMax",
                                      typeCombinatorTypes: null
                                    },
                                    Height: {
                                      description: "Height of the box.",
                                      xml: {
                                        name: "Height",
                                        namespace:
                                          "https://www.wisetechglobal.com/",
                                        prefix: "wtg",
                                        attribute: false,
                                        wrapped: false
                                      },
                                      type: "number",
                                      dataTypeDisplayText: "Double",
                                      dataTypeMarkdown: null,
                                      paramType: null,
                                      title: "Height",
                                      typeCombinatorTypes: null
                                    },
                                    Width: {
                                      description: "Width of the box.",
                                      xml: {
                                        name: "Width",
                                        namespace:
                                          "https://www.wisetechglobal.com/",
                                        prefix: "wtg",
                                        attribute: false,
                                        wrapped: false
                                      },
                                      type: "number",
                                      dataTypeDisplayText: "Double",
                                      dataTypeMarkdown: null,
                                      paramType: null,
                                      title: "Width",
                                      typeCombinatorTypes: null
                                    },
                                    Length: {
                                      description: "Length of the box.",
                                      xml: {
                                        name: "Length",
                                        namespace:
                                          "https://www.wisetechglobal.com/",
                                        prefix: "wtg",
                                        attribute: false,
                                        wrapped: false
                                      },
                                      type: "number",
                                      dataTypeDisplayText: "Double",
                                      dataTypeMarkdown: null,
                                      paramType: null,
                                      title: "Length",
                                      typeCombinatorTypes: null
                                    },
                                    CenterOfMass: {
                                      id: "Point",
                                      title: "CenterOfMass",
                                      description:
                                        "3-dimensional Coordinates of the box's center of mass",
                                      xml: {
                                        name: "Point",
                                        namespace:
                                          "https://www.wisetechglobal.com/",
                                        prefix: "wtg",
                                        attribute: false,
                                        wrapped: false
                                      },
                                      type: "object",
                                      properties: {
                                        x: {
                                          description:
                                            "x coordinate, used as height.",
                                          xml: {
                                            name: "x",
                                            namespace:
                                              "https://www.wisetechglobal.com/",
                                            prefix: "wtg",
                                            attribute: false,
                                            wrapped: false
                                          },
                                          type: "number",
                                          dataTypeDisplayText: "double",
                                          dataTypeMarkdown: null,
                                          paramType: null,
                                          title: "X",
                                          typeCombinatorTypes: null
                                        },
                                        y: {
                                          description:
                                            "y coordinate, used as width.",
                                          xml: {
                                            name: "y",
                                            namespace:
                                              "https://www.wisetechglobal.com/",
                                            prefix: "wtg",
                                            attribute: false,
                                            wrapped: false
                                          },
                                          type: "number",
                                          dataTypeDisplayText: "double",
                                          dataTypeMarkdown: null,
                                          paramType: null,
                                          title: "Y",
                                          typeCombinatorTypes: null
                                        },
                                        z: {
                                          description:
                                            "z coordinate, used as length.",
                                          xml: {
                                            name: "z",
                                            namespace:
                                              "https://www.wisetechglobal.com/",
                                            prefix: "wtg",
                                            attribute: false,
                                            wrapped: false
                                          },
                                          type: "number",
                                          dataTypeDisplayText: "double",
                                          dataTypeMarkdown: null,
                                          paramType: null,
                                          title: "Z",
                                          typeCombinatorTypes: null
                                        }
                                      },
                                      required: ["x", "y", "z"],
                                      dataTypeDisplayText: "Point",
                                      dataTypeLink:
                                        "/java/models/structures/point",
                                      dataTypeMarkdown: null,
                                      paramType: null,
                                      typeCombinatorTypes: null
                                    },
                                    ID: {
                                      description: "box ID<br>**Default**: `0`",
                                      xml: {
                                        name: "ID",
                                        namespace:
                                          "https://www.wisetechglobal.com/",
                                        prefix: "wtg",
                                        attribute: false,
                                        wrapped: false
                                      },
                                      type: "integer",
                                      default: 0,
                                      dataTypeDisplayText: "Integer",
                                      dataTypeMarkdown: null,
                                      paramType: null,
                                      title: "ID",
                                      typeCombinatorTypes: null
                                    },
                                    Items: {
                                      id: "Items",
                                      title: "Items",
                                      description:
                                        "Items already packed into box",
                                      xml: {
                                        name: "Items",
                                        namespace:
                                          "https://www.wisetechglobal.com/",
                                        prefix: "wtg",
                                        attribute: false,
                                        wrapped: false
                                      },
                                      type: "object",
                                      properties: {
                                        Item: {
                                          description:
                                            "Item already packed into box",
                                          xml: {
                                            namespace:
                                              "https://www.wisetechglobal.com/",
                                            prefix: "wtg",
                                            attribute: false,
                                            wrapped: false
                                          },
                                          type: "array",
                                          items: {
                                            id: "PrePackedItem",
                                            title: "PrePackedItem",
                                            description: "",
                                            xml: {
                                              name: "PrePackedItem",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "object",
                                            properties: {
                                              ItemDescription: {
                                                description:
                                                  'Maps to paccurate "name" property: Name or description of item for your reference.',
                                                xml: {
                                                  name: "ItemDescription",
                                                  namespace:
                                                    "https://www.wisetechglobal.com/",
                                                  prefix: "wtg",
                                                  attribute: false,
                                                  wrapped: false
                                                },
                                                type: "string",
                                                dataTypeDisplayText: "String",
                                                dataTypeMarkdown: null,
                                                paramType: null,
                                                title: "ItemDescription",
                                                typeCombinatorTypes: null
                                              },
                                              Color: {
                                                description:
                                                  "designated color name for the item in pack visualizations.",
                                                xml: {
                                                  name: "Color",
                                                  namespace:
                                                    "https://www.wisetechglobal.com/",
                                                  prefix: "wtg",
                                                  attribute: false,
                                                  wrapped: false
                                                },
                                                type: "string",
                                                dataTypeDisplayText: "String",
                                                dataTypeMarkdown: null,
                                                paramType: null,
                                                title: "Color",
                                                typeCombinatorTypes: null
                                              },
                                              Weight: {
                                                description: "Item weight",
                                                xml: {
                                                  name: "Weight",
                                                  namespace:
                                                    "https://www.wisetechglobal.com/",
                                                  prefix: "wtg",
                                                  attribute: false,
                                                  wrapped: false
                                                },
                                                type: "number",
                                                dataTypeDisplayText: "Double",
                                                dataTypeMarkdown: null,
                                                paramType: null,
                                                title: "Weight",
                                                typeCombinatorTypes: null
                                              },
                                              Virtual: {
                                                description:
                                                  "Whether or not this is a real item or a virtual, blocking space (from a subspace or loading rules)",
                                                xml: {
                                                  name: "Virtual",
                                                  namespace:
                                                    "https://www.wisetechglobal.com/",
                                                  prefix: "wtg",
                                                  attribute: false,
                                                  wrapped: false
                                                },
                                                type: "boolean",
                                                dataTypeDisplayText: "Boolean",
                                                dataTypeMarkdown: null,
                                                paramType: null,
                                                title: "Virtual",
                                                typeCombinatorTypes: null
                                              },
                                              Height: {
                                                description:
                                                  "Height of the content.",
                                                xml: {
                                                  name: "Height",
                                                  namespace:
                                                    "https://www.wisetechglobal.com/",
                                                  prefix: "wtg",
                                                  attribute: false,
                                                  wrapped: false
                                                },
                                                type: "number",
                                                dataTypeDisplayText: "Double",
                                                dataTypeMarkdown: null,
                                                paramType: null,
                                                title: "Height",
                                                typeCombinatorTypes: null
                                              },
                                              Width: {
                                                description:
                                                  "Width of the content.",
                                                xml: {
                                                  name: "Width",
                                                  namespace:
                                                    "https://www.wisetechglobal.com/",
                                                  prefix: "wtg",
                                                  attribute: false,
                                                  wrapped: false
                                                },
                                                type: "number",
                                                dataTypeDisplayText: "Double",
                                                dataTypeMarkdown: null,
                                                paramType: null,
                                                title: "Width",
                                                typeCombinatorTypes: null
                                              },
                                              Length: {
                                                description:
                                                  "Length of the content.",
                                                xml: {
                                                  name: "Length",
                                                  namespace:
                                                    "https://www.wisetechglobal.com/",
                                                  prefix: "wtg",
                                                  attribute: false,
                                                  wrapped: false
                                                },
                                                type: "number",
                                                dataTypeDisplayText: "Double",
                                                dataTypeMarkdown: null,
                                                paramType: null,
                                                title: "Length",
                                                typeCombinatorTypes: null
                                              },
                                              CenterOfMass: {
                                                id: "Point",
                                                title: "CenterOfMass",
                                                description:
                                                  "3-dimensional Coordinates of the packed item's center of mass",
                                                xml: {
                                                  name: "Point",
                                                  namespace:
                                                    "https://www.wisetechglobal.com/",
                                                  prefix: "wtg",
                                                  attribute: false,
                                                  wrapped: false
                                                },
                                                type: "object",
                                                properties: {
                                                  x: {
                                                    description:
                                                      "x coordinate, used as height.",
                                                    xml: {
                                                      name: "x",
                                                      namespace:
                                                        "https://www.wisetechglobal.com/",
                                                      prefix: "wtg",
                                                      attribute: false,
                                                      wrapped: false
                                                    },
                                                    type: "number",
                                                    dataTypeDisplayText:
                                                      "double",
                                                    dataTypeMarkdown: null,
                                                    paramType: null,
                                                    title: "X",
                                                    typeCombinatorTypes: null
                                                  },
                                                  y: {
                                                    description:
                                                      "y coordinate, used as width.",
                                                    xml: {
                                                      name: "y",
                                                      namespace:
                                                        "https://www.wisetechglobal.com/",
                                                      prefix: "wtg",
                                                      attribute: false,
                                                      wrapped: false
                                                    },
                                                    type: "number",
                                                    dataTypeDisplayText:
                                                      "double",
                                                    dataTypeMarkdown: null,
                                                    paramType: null,
                                                    title: "Y",
                                                    typeCombinatorTypes: null
                                                  },
                                                  z: {
                                                    description:
                                                      "z coordinate, used as length.",
                                                    xml: {
                                                      name: "z",
                                                      namespace:
                                                        "https://www.wisetechglobal.com/",
                                                      prefix: "wtg",
                                                      attribute: false,
                                                      wrapped: false
                                                    },
                                                    type: "number",
                                                    dataTypeDisplayText:
                                                      "double",
                                                    dataTypeMarkdown: null,
                                                    paramType: null,
                                                    title: "Z",
                                                    typeCombinatorTypes: null
                                                  }
                                                },
                                                required: ["x", "y", "z"],
                                                dataTypeDisplayText: "Point",
                                                dataTypeLink:
                                                  "/java/models/structures/point",
                                                dataTypeMarkdown: null,
                                                paramType: null,
                                                typeCombinatorTypes: null
                                              },
                                              Origin: {
                                                id: "Point",
                                                title: "Origin",
                                                description:
                                                  "Origin of the packed item, relative to the box in which is is packed",
                                                xml: {
                                                  name: "Point",
                                                  namespace:
                                                    "https://www.wisetechglobal.com/",
                                                  prefix: "wtg",
                                                  attribute: false,
                                                  wrapped: false
                                                },
                                                type: "object",
                                                properties: {
                                                  x: {
                                                    description:
                                                      "x coordinate, used as height.",
                                                    xml: {
                                                      name: "x",
                                                      namespace:
                                                        "https://www.wisetechglobal.com/",
                                                      prefix: "wtg",
                                                      attribute: false,
                                                      wrapped: false
                                                    },
                                                    type: "number",
                                                    dataTypeDisplayText:
                                                      "double",
                                                    dataTypeMarkdown: null,
                                                    paramType: null,
                                                    title: "X",
                                                    typeCombinatorTypes: null
                                                  },
                                                  y: {
                                                    description:
                                                      "y coordinate, used as width.",
                                                    xml: {
                                                      name: "y",
                                                      namespace:
                                                        "https://www.wisetechglobal.com/",
                                                      prefix: "wtg",
                                                      attribute: false,
                                                      wrapped: false
                                                    },
                                                    type: "number",
                                                    dataTypeDisplayText:
                                                      "double",
                                                    dataTypeMarkdown: null,
                                                    paramType: null,
                                                    title: "Y",
                                                    typeCombinatorTypes: null
                                                  },
                                                  z: {
                                                    description:
                                                      "z coordinate, used as length.",
                                                    xml: {
                                                      name: "z",
                                                      namespace:
                                                        "https://www.wisetechglobal.com/",
                                                      prefix: "wtg",
                                                      attribute: false,
                                                      wrapped: false
                                                    },
                                                    type: "number",
                                                    dataTypeDisplayText:
                                                      "double",
                                                    dataTypeMarkdown: null,
                                                    paramType: null,
                                                    title: "Z",
                                                    typeCombinatorTypes: null
                                                  }
                                                },
                                                required: ["x", "y", "z"],
                                                dataTypeDisplayText: "Point",
                                                dataTypeLink:
                                                  "/java/models/structures/point",
                                                dataTypeMarkdown: null,
                                                paramType: null,
                                                typeCombinatorTypes: null
                                              }
                                            },
                                            dataTypeDisplayText:
                                              "Pre Packed Item",
                                            dataTypeLink:
                                              "/java/models/structures/pre-packed-item"
                                          },
                                          dataTypeDisplayText:
                                            "List<PrePackedItem>",
                                          dataTypeLink:
                                            "/java/models/structures/pre-packed-item",
                                          dataTypeMarkdown: null,
                                          paramType: null,
                                          title: "Item",
                                          typeCombinatorTypes: null
                                        }
                                      },
                                      dataTypeDisplayText: "Items",
                                      dataTypeLink:
                                        "/java/models/structures/items",
                                      dataTypeMarkdown: null,
                                      paramType: null,
                                      typeCombinatorTypes: null
                                    }
                                  },
                                  required: ["BoxType"],
                                  dataTypeDisplayText: "PrePackedBox",
                                  dataTypeLink:
                                    "/java/models/structures/pre-packed-box",
                                  dataTypeMarkdown: null,
                                  paramType: null,
                                  typeCombinatorTypes: null
                                }
                              },
                              dataTypeDisplayText: "PrePackedBoxes",
                              dataTypeLink:
                                "/java/models/structures/pre-packed-boxes",
                              dataTypeMarkdown: null,
                              paramType: null,
                              typeCombinatorTypes: null
                            },
                            Contents: {
                              id: "Contents",
                              title: "Contents",
                              description:
                                "Container for all contents (line items) associated with the transaction.",
                              xml: {
                                name: "Contents",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "object",
                              properties: {
                                Content: {
                                  description:
                                    "Container for a individual content (line item) associated with the transaction.",
                                  xml: {
                                    namespace:
                                      "https://www.wisetechglobal.com/",
                                    prefix: "wtg",
                                    attribute: false,
                                    wrapped: false
                                  },
                                  type: "array",
                                  items: {
                                    id: "Content",
                                    title: "Content",
                                    description:
                                      "Container for a individual content (line item) associated with the transaction.",
                                    xml: {
                                      name: "Content",
                                      namespace:
                                        "https://www.wisetechglobal.com/",
                                      prefix: "wtg",
                                      attribute: false,
                                      wrapped: false
                                    },
                                    type: "object",
                                    properties: {
                                      Radionuclide: {
                                        id: "Radionuclide",
                                        title: "Radionuclide",
                                        description:
                                          "Container for radionuclide details.",
                                        xml: {
                                          name: "Radionuclide",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "object",
                                        properties: {
                                          Name: {
                                            description: "Name of substance.",
                                            xml: {
                                              name: "Name",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "string",
                                            dataTypeDisplayText: "String",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "Name",
                                            typeCombinatorTypes: null
                                          },
                                          Activity: {
                                            description:
                                              "Value indicates the radioactivity of this substance.",
                                            xml: {
                                              name: "Activity",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "string",
                                            dataTypeDisplayText: "String",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "Activity",
                                            typeCombinatorTypes: null
                                          },
                                          Measure: {
                                            description:
                                              "Value indicates the unit of measure.",
                                            xml: {
                                              name: "Measure",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "string",
                                            dataTypeDisplayText: "String",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "Measure",
                                            typeCombinatorTypes: null
                                          },
                                          RadioactivePackagingType: {
                                            description:
                                              "Value indicates the packaging type.",
                                            xml: {
                                              name: "RadioactivePackagingType",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "string",
                                            dataTypeDisplayText: "String",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "RadioactivePackagingType",
                                            typeCombinatorTypes: null
                                          },
                                          TransportIndex: {
                                            description:
                                              "Value indicates the transport index.",
                                            xml: {
                                              name: "TransportIndex",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "string",
                                            dataTypeDisplayText: "String",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "TransportIndex",
                                            typeCombinatorTypes: null
                                          },
                                          RadioactiveLabelType: {
                                            description:
                                              "The label type to use.",
                                            xml: {
                                              name: "RadioactiveLabelType",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "string",
                                            dataTypeDisplayText: "String",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "RadioactiveLabelType",
                                            typeCombinatorTypes: null
                                          },
                                          SurfaceReading: {
                                            description:
                                              "The surface reading for this substance.<br>**Default**: `0`",
                                            xml: {
                                              name: "SurfaceReading",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "integer",
                                            default: 0,
                                            dataTypeDisplayText: "Integer",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "SurfaceReading",
                                            typeCombinatorTypes: null
                                          },
                                          Length: {
                                            description:
                                              "Length of this substance.<br>**Default**: `0d`",
                                            xml: {
                                              name: "Length",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "number",
                                            default: 0,
                                            dataTypeDisplayText: "Double",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "Length",
                                            typeCombinatorTypes: null
                                          },
                                          Width: {
                                            description:
                                              "Width of this substance.<br>**Default**: `0d`",
                                            xml: {
                                              name: "Width",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "number",
                                            default: 0,
                                            dataTypeDisplayText: "Double",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "Width",
                                            typeCombinatorTypes: null
                                          },
                                          Height: {
                                            description:
                                              "Height of this substance.<br>**Default**: `0d`",
                                            xml: {
                                              name: "Height",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "number",
                                            default: 0,
                                            dataTypeDisplayText: "Double",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "Height",
                                            typeCombinatorTypes: null
                                          },
                                          DimensionsUOM: {
                                            description:
                                              "Unit of measure in use.",
                                            xml: {
                                              name: "DimensionsUOM",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "string",
                                            dataTypeDisplayText: "String",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "DimensionsUOM",
                                            typeCombinatorTypes: null
                                          },
                                          PhysicalForm: {
                                            description:
                                              "Value indicates the physical form of this substance.",
                                            xml: {
                                              name: "PhysicalForm",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "string",
                                            dataTypeDisplayText: "String",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "PhysicalForm",
                                            typeCombinatorTypes: null
                                          },
                                          ChemicalFormula: {
                                            description:
                                              "Value indicates the chemical formula of this substance.",
                                            xml: {
                                              name: "ChemicalFormula",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "string",
                                            dataTypeDisplayText: "String",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "ChemicalFormula",
                                            typeCombinatorTypes: null
                                          },
                                          ExceptedPackagesRadioactiveMaterialsIndicator: {
                                            description:
                                              "Excepted packages radioactive materials indicator of the radionuclide<br>**Default**: `0`",
                                            xml: {
                                              name:
                                                "ExceptedPackagesRadioactiveMaterialsIndicator",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "integer",
                                            default: 0,
                                            dataTypeDisplayText: "Integer",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title:
                                              "ExceptedPackagesRadioactiveMaterialsIndicator",
                                            typeCombinatorTypes: null
                                          },
                                          CriticalitySafetyIndex: {
                                            description:
                                              "Criticality safety index of the radionuclide<br>**Default**: `0d`",
                                            xml: {
                                              name: "CriticalitySafetyIndex",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "number",
                                            default: 0,
                                            dataTypeDisplayText: "Double",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "CriticalitySafetyIndex",
                                            typeCombinatorTypes: null
                                          }
                                        },
                                        dataTypeDisplayText: "Radionuclide",
                                        dataTypeLink:
                                          "/java/models/structures/radionuclide",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        typeCombinatorTypes: null
                                      },
                                      ContentCode: {
                                        description:
                                          "Harmonized, or Schedule-B, code for the item.",
                                        xml: {
                                          name: "ContentCode",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "ContentCode",
                                        typeCombinatorTypes: null
                                      },
                                      Code: {
                                        description:
                                          "Harmonized, or Schedule-B, code for the line item.",
                                        xml: {
                                          name: "Code",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "Code",
                                        typeCombinatorTypes: null
                                      },
                                      Quantity: {
                                        description:
                                          "Quantity of the line item in the package.<br>**Default**: `0d`",
                                        xml: {
                                          name: "Quantity",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "number",
                                        default: 0,
                                        dataTypeDisplayText: "Double",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "Quantity",
                                        typeCombinatorTypes: null
                                      },
                                      OrderedQuantity: {
                                        description:
                                          "Quantity of the line item that was ordered.<br>**Default**: `0d`",
                                        xml: {
                                          name: "OrderedQuantity",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "number",
                                        default: 0,
                                        dataTypeDisplayText: "Double",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "OrderedQuantity",
                                        typeCombinatorTypes: null
                                      },
                                      BackOrderedQuantity: {
                                        description:
                                          "Quantity of the line item that is on back order.<br>**Default**: `0d`",
                                        xml: {
                                          name: "BackOrderedQuantity",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "number",
                                        default: 0,
                                        dataTypeDisplayText: "Double",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "BackOrderedQuantity",
                                        typeCombinatorTypes: null
                                      },
                                      ContentLineValue: {
                                        description:
                                          "Total monetary value of the line item.<br>**Default**: `0d`",
                                        xml: {
                                          name: "ContentLineValue",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "number",
                                        default: 0,
                                        dataTypeDisplayText: "Double",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "ContentLineValue",
                                        typeCombinatorTypes: null
                                      },
                                      Value: {
                                        description:
                                          "Monetary value of a single line item.<br>**Default**: `0d`",
                                        xml: {
                                          name: "Value",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "number",
                                        default: 0,
                                        dataTypeDisplayText: "Double",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "Value",
                                        typeCombinatorTypes: null
                                      },
                                      ValueCurrency: {
                                        description:
                                          "Currency of the monetary values of the line item.",
                                        xml: {
                                          name: "ValueCurrency",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "ValueCurrency",
                                        typeCombinatorTypes: null
                                      },
                                      ValuesCalculated: {
                                        description:
                                          "Internally reserved element.<br>**Default**: `false`",
                                        xml: {
                                          name: "ValuesCalculated",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "boolean",
                                        default: false,
                                        dataTypeDisplayText: "Boolean",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "ValuesCalculated",
                                        typeCombinatorTypes: null
                                      },
                                      Weight: {
                                        description:
                                          "Weight of a single line item.<br>**Default**: `0d`",
                                        xml: {
                                          name: "Weight",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "number",
                                        default: 0,
                                        dataTypeDisplayText: "Double",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "Weight",
                                        typeCombinatorTypes: null
                                      },
                                      WeightUOM: {
                                        description:
                                          "Weight units of the weight of a single line item.",
                                        xml: {
                                          name: "WeightUOM",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "WeightUOM",
                                        typeCombinatorTypes: null
                                      },
                                      Length: {
                                        description:
                                          "Length of a single line item.<br>**Default**: `0d`",
                                        xml: {
                                          name: "Length",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "number",
                                        default: 0,
                                        dataTypeDisplayText: "Double",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "Length",
                                        typeCombinatorTypes: null
                                      },
                                      Width: {
                                        description:
                                          "Width of a single line item.<br>**Default**: `0d`",
                                        xml: {
                                          name: "Width",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "number",
                                        default: 0,
                                        dataTypeDisplayText: "Double",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "Width",
                                        typeCombinatorTypes: null
                                      },
                                      Height: {
                                        description:
                                          "Height of a single line item.<br>**Default**: `0d`",
                                        xml: {
                                          name: "Height",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "number",
                                        default: 0,
                                        dataTypeDisplayText: "Double",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "Height",
                                        typeCombinatorTypes: null
                                      },
                                      Description: {
                                        description:
                                          "Description of the line item.",
                                        xml: {
                                          name: "Description",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "Description",
                                        typeCombinatorTypes: null
                                      },
                                      OriginCountry: {
                                        description:
                                          "Country of origin of the line items.",
                                        xml: {
                                          name: "OriginCountry",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "OriginCountry",
                                        typeCombinatorTypes: null
                                      },
                                      OriginRegion: {
                                        description:
                                          "Region of origin of the line items.",
                                        xml: {
                                          name: "OriginRegion",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "OriginRegion",
                                        typeCombinatorTypes: null
                                      },
                                      PurchaseOrderNumber: {
                                        description:
                                          "Purchase order number associated with the line items.",
                                        xml: {
                                          name: "PurchaseOrderNumber",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "PurchaseOrderNumber",
                                        typeCombinatorTypes: null
                                      },
                                      SalesOrderNumber: {
                                        description:
                                          "Sales order number associated with the line items.",
                                        xml: {
                                          name: "SalesOrderNumber",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "SalesOrderNumber",
                                        typeCombinatorTypes: null
                                      },
                                      ItemCode: {
                                        description:
                                          "Internally-used code for the line item.",
                                        xml: {
                                          name: "ItemCode",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "ItemCode",
                                        typeCombinatorTypes: null
                                      },
                                      ItemDescription: {
                                        description:
                                          "Internally-used description for the line item.",
                                        xml: {
                                          name: "ItemDescription",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "ItemDescription",
                                        typeCombinatorTypes: null
                                      },
                                      UnitsOfMeasure: {
                                        description:
                                          "Units of measure for the line item.",
                                        xml: {
                                          name: "UnitsOfMeasure",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "UnitsOfMeasure",
                                        typeCombinatorTypes: null
                                      },
                                      CustomerCode: {
                                        description:
                                          "Customer's code for the line item.",
                                        xml: {
                                          name: "CustomerCode",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "CustomerCode",
                                        typeCombinatorTypes: null
                                      },
                                      PartNumber: {
                                        description:
                                          "Part number for the line item.",
                                        xml: {
                                          name: "PartNumber",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "PartNumber",
                                        typeCombinatorTypes: null
                                      },
                                      BinNumber: {
                                        description:
                                          "Bin number for the line item.",
                                        xml: {
                                          name: "BinNumber",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "BinNumber",
                                        typeCombinatorTypes: null
                                      },
                                      LotNumber: {
                                        description:
                                          "Lot number for the line item.",
                                        xml: {
                                          name: "LotNumber",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "LotNumber",
                                        typeCombinatorTypes: null
                                      },
                                      SerialNumber: {
                                        description:
                                          "Serial number for the line item.",
                                        xml: {
                                          name: "SerialNumber",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "SerialNumber",
                                        typeCombinatorTypes: null
                                      },
                                      TotalWeight: {
                                        description:
                                          "Total weight of the line item.<br>**Default**: `0d`",
                                        xml: {
                                          name: "TotalWeight",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "number",
                                        default: 0,
                                        dataTypeDisplayText: "Double",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "TotalWeight",
                                        typeCombinatorTypes: null
                                      },
                                      PackagingDescription: {
                                        description:
                                          "Description of line item's packaging.",
                                        xml: {
                                          name: "PackagingDescription",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "PackagingDescription",
                                        typeCombinatorTypes: null
                                      },
                                      ECCN: {
                                        description:
                                          "The export control classification number assocaited with the content item.",
                                        xml: {
                                          name: "ECCN",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "ECCN",
                                        typeCombinatorTypes: null
                                      },
                                      ContentNMFC: {
                                        description:
                                          "National Motor Freight Classification of the line item.",
                                        xml: {
                                          name: "ContentNMFC",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "ContentNMFC",
                                        typeCombinatorTypes: null
                                      },
                                      ContentFreightClass: {
                                        description:
                                          "Freight Class of the line item.",
                                        xml: {
                                          name: "ContentFreightClass",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "ContentFreightClass",
                                        typeCombinatorTypes: null
                                      },
                                      ProductWebPage: {
                                        description:
                                          "The url for the the line item on the suppliers web site.",
                                        xml: {
                                          name: "ProductWebPage",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "ProductWebPage",
                                        typeCombinatorTypes: null
                                      },
                                      Hazardous: {
                                        description:
                                          "Indicates whether the line item is hazardous.  Defaults to not hazardous if omitted.<br>**Default**: `false`",
                                        xml: {
                                          name: "Hazardous",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "boolean",
                                        default: false,
                                        dataTypeDisplayText: "Boolean",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "Hazardous",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousExemptionID: {
                                        description:
                                          "Hazardous Exemption for the line item.<br>**Default**: `0`",
                                        xml: {
                                          name: "HazardousExemptionID",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "integer",
                                        default: 0,
                                        dataTypeDisplayText: "Integer",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousExemptionID",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousType: {
                                        description:
                                          "Hazardous Type for the line item.",
                                        xml: {
                                          name: "HazardousType",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousType",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousUnits: {
                                        description:
                                          "Hazardous Units in each line item.<br>**Default**: `0d`",
                                        xml: {
                                          name: "HazardousUnits",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "number",
                                        default: 0,
                                        dataTypeDisplayText: "Double",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousUnits",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousUnitsUOM: {
                                        description:
                                          "Hazardous units of measure for the line item.",
                                        xml: {
                                          name: "HazardousUnitsUOM",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousUnitsUOM",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousDescription: {
                                        description:
                                          "Hazardous Description for the line item.",
                                        xml: {
                                          name: "HazardousDescription",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousDescription",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousProperShippingName: {
                                        description:
                                          "Proper Shipping Name for the line item.",
                                        xml: {
                                          name: "HazardousProperShippingName",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousProperShippingName",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousIdentifier: {
                                        description:
                                          "Hazardous Material Identification Number for the line item.",
                                        xml: {
                                          name: "HazardousIdentifier",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousIdentifier",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousClass: {
                                        description:
                                          "Hazardous Class for the line item.",
                                        xml: {
                                          name: "HazardousClass",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousClass",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousSubClass: {
                                        description:
                                          "Hazardous Sub-Class for the line item.",
                                        xml: {
                                          name: "HazardousSubClass",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousSubClass",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousPackingGroup: {
                                        description:
                                          "Hazardous Packing Group for the line item.",
                                        xml: {
                                          name: "HazardousPackingGroup",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousPackingGroup",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousTechnicalName: {
                                        description:
                                          "Hazardous Technical Name for the line item.",
                                        xml: {
                                          name: "HazardousTechnicalName",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousTechnicalName",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousTotalQuantity: {
                                        description:
                                          "Total Quantity of hazardous material in this line item.<br>**Default**: `0d`",
                                        xml: {
                                          name: "HazardousTotalQuantity",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "number",
                                        default: 0,
                                        dataTypeDisplayText: "Double",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousTotalQuantity",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousTotalQuantityUOM: {
                                        description:
                                          "Units of measure for total quantity of hazardous material in this line item.",
                                        xml: {
                                          name: "HazardousTotalQuantityUOM",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousTotalQuantityUOM",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousLabelCodes: {
                                        description:
                                          "Hazardous Label Codes for the line item.",
                                        xml: {
                                          name: "HazardousLabelCodes",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousLabelCodes",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousLabels: {
                                        description:
                                          "Hazardous Labels for the line item.",
                                        xml: {
                                          name: "HazardousLabels",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousLabels",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousAirLabels: {
                                        description:
                                          "Hazardous Air Labels for the line item.",
                                        xml: {
                                          name: "HazardousAirLabels",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousAirLabels",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousLabelCodesMask: {
                                        description:
                                          "Hazardous Label Codes Bit Mask for the line item.<br>**Default**: `0`",
                                        xml: {
                                          name: "HazardousLabelCodesMask",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "integer",
                                        default: 0,
                                        dataTypeDisplayText: "Integer",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousLabelCodesMask",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousAccessible: {
                                        description:
                                          "Indicates whether the hazardous line item must remain accessible during transportation.  Defaults to not accessible if omitted.<br>**Default**: `false`",
                                        xml: {
                                          name: "HazardousAccessible",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "boolean",
                                        default: false,
                                        dataTypeDisplayText: "Boolean",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousAccessible",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousPassengerAircraft: {
                                        description:
                                          "Indicates whether the hazardous line item can be transported on a passenger aircraft.  Defaults to cannot be transported on a passenger aircraft if omitted.<br>**Default**: `false`",
                                        xml: {
                                          name: "HazardousPassengerAircraft",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "boolean",
                                        default: false,
                                        dataTypeDisplayText: "Boolean",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousPassengerAircraft",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousCargoAircraftOnly: {
                                        description:
                                          "Indicates whether the hazardous line item can only be transported on a cargo aircraft.  Defaults to not cargo aircraft only if omitted.<br>**Default**: `false`",
                                        xml: {
                                          name: "HazardousCargoAircraftOnly",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "boolean",
                                        default: false,
                                        dataTypeDisplayText: "Boolean",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousCargoAircraftOnly",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousRequiredInformation: {
                                        description:
                                          "Any additional required information relating to the hazardous item, e.g. Limited Qty, permit numbers and type.",
                                        xml: {
                                          name: "HazardousRequiredInformation",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousRequiredInformation",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousConsumerCommodity: {
                                        description:
                                          "Indicates if an item can be classified as a consumer commodity item for the purposes of hazardous shipping.  Defaults to not consumer commodity if omitted.<br>**Default**: `false`",
                                        xml: {
                                          name: "HazardousConsumerCommodity",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "boolean",
                                        default: false,
                                        dataTypeDisplayText: "Boolean",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousConsumerCommodity",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousLimitedQuantity: {
                                        description:
                                          "Indicates if an item can be classified as a limited qunatity item for the purposes of hazardous shipping.<br>**Default**: `false`",
                                        xml: {
                                          name: "HazardousLimitedQuantity",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "boolean",
                                        default: false,
                                        dataTypeDisplayText: "Boolean",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousLimitedQuantity",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousConcentration: {
                                        description:
                                          "The percentage concentration for the line item.<br>**Default**: `0`",
                                        xml: {
                                          name: "HazardousConcentration",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "integer",
                                        default: 0,
                                        dataTypeDisplayText: "Integer",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousConcentration",
                                        typeCombinatorTypes: null
                                      },
                                      Hazardous500KGExemption: {
                                        description:
                                          "Indicates if an item can be classified as meeting the 500KG exemption for the purposes of hazardous shipping.<br>**Default**: `false`",
                                        xml: {
                                          name: "Hazardous500KGExemption",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "boolean",
                                        default: false,
                                        dataTypeDisplayText: "Boolean",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "Hazardous500KGExemption",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousPackingInstructions: {
                                        description:
                                          "Hazardous packing instructions for the product.",
                                        xml: {
                                          name: "HazardousPackingInstructions",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousPackingInstructions",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousIsSpecialProvisionA1A2A51A109: {
                                        description:
                                          "Indicates if the item is to be shipped under special provisions A1, A2, A51 or A109.",
                                        xml: {
                                          name:
                                            "HazardousIsSpecialProvisionA1A2A51A109",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title:
                                          "HazardousIsSpecialProvisionA1A2A51A109",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousOverpack: {
                                        description:
                                          "Flag indicates if this shipment's outer container encloses and secures one or more inner containers.<br>**Default**: `false`",
                                        xml: {
                                          name: "HazardousOverpack",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "boolean",
                                        default: false,
                                        dataTypeDisplayText: "Boolean",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousOverpack",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousAllInOne: {
                                        description:
                                          "Flag indicates if this shipment's packages are all contained in one container.<br>**Default**: `false`",
                                        xml: {
                                          name: "HazardousAllInOne",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "boolean",
                                        default: false,
                                        dataTypeDisplayText: "Boolean",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousAllInOne",
                                        typeCombinatorTypes: null
                                      },
                                      NumberOfInnerContainers: {
                                        description:
                                          "The number of items packed inside the content item.",
                                        xml: {
                                          name: "NumberOfInnerContainers",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "NumberOfInnerContainers",
                                        typeCombinatorTypes: null
                                      },
                                      PreferenceCriterion: {
                                        description:
                                          "Preference criterion for NAFTA tariff rate. Values are A - F according to NAFTA definitions.",
                                        xml: {
                                          name: "PreferenceCriterion",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "PreferenceCriterion",
                                        typeCombinatorTypes: null
                                      },
                                      SenderIsProducer: {
                                        description:
                                          "Indicates if the sender also created the content item.<br>**Default**: `false`",
                                        xml: {
                                          name: "SenderIsProducer",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "boolean",
                                        default: false,
                                        dataTypeDisplayText: "Boolean",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "SenderIsProducer",
                                        typeCombinatorTypes: null
                                      },
                                      JointProduction: {
                                        description:
                                          "Indicates whether the line item has two or more producers.<br>**Default**: `false`",
                                        xml: {
                                          name: "JointProduction",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "boolean",
                                        default: false,
                                        dataTypeDisplayText: "Boolean",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "JointProduction",
                                        typeCombinatorTypes: null
                                      },
                                      ProducerEvidence: {
                                        description:
                                          "Type of evidence for the producer of the line item. Values are 1, 2 or 3 according to NAFTA definitions.<br>**Default**: `0`",
                                        xml: {
                                          name: "ProducerEvidence",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "integer",
                                        default: 0,
                                        dataTypeDisplayText: "Integer",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "ProducerEvidence",
                                        typeCombinatorTypes: null
                                      },
                                      RegionalValueContentCalculatedUsingNetCostMethod: {
                                        description:
                                          "Indicates whether the regional value content was calculated using the net cost method.<br>**Default**: `false`",
                                        xml: {
                                          name:
                                            "RegionalValueContentCalculatedUsingNetCostMethod",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "boolean",
                                        default: false,
                                        dataTypeDisplayText: "Boolean",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title:
                                          "RegionalValueContentCalculatedUsingNetCostMethod",
                                        typeCombinatorTypes: null
                                      },
                                      RegionalValueContentStartDate: {
                                        description:
                                          "Date that the regional value content calculation started at.",
                                        xml: {
                                          name: "RegionalValueContentStartDate",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "RegionalValueContentStartDate",
                                        typeCombinatorTypes: null
                                      },
                                      RegionalValueContentEndDate: {
                                        description:
                                          "Date that the regional value content calculation ended.",
                                        xml: {
                                          name: "RegionalValueContentEndDate",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "RegionalValueContentEndDate",
                                        typeCombinatorTypes: null
                                      },
                                      NonHazardousMaterial: {
                                        description:
                                          "String value containing the total line item weight and weight UOM.",
                                        xml: {
                                          name: "NonHazardousMaterial",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "NonHazardousMaterial",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousClassHazardousCargoAircraftOnly: {
                                        description:
                                          "String value containing the hazard class for cargo aircraft only shipping.",
                                        xml: {
                                          name:
                                            "HazardousClassHazardousCargoAircraftOnly",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title:
                                          "HazardousClassHazardousCargoAircraftOnly",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousSQEIndicator: {
                                        description:
                                          "Value indicates small quantity exception in effect for this shipment.<br>**Default**: `false`",
                                        xml: {
                                          name: "HazardousSQEIndicator",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "boolean",
                                        default: false,
                                        dataTypeDisplayText: "Boolean",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousSQEIndicator",
                                        typeCombinatorTypes: null
                                      },
                                      HazardousSpecialProvision: {
                                        description:
                                          "Value indicates the hazardous special provision in use.",
                                        xml: {
                                          name: "HazardousSpecialProvision",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "HazardousSpecialProvision",
                                        typeCombinatorTypes: null
                                      },
                                      NetMassQuantity: {
                                        description:
                                          "Net mass quantity.<br>**Default**: `0d`",
                                        xml: {
                                          name: "NetMassQuantity",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "number",
                                        default: 0,
                                        dataTypeDisplayText: "Double",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "NetMassQuantity",
                                        typeCombinatorTypes: null
                                      },
                                      NetMassUOM: {
                                        description:
                                          "Net mass units of measure.",
                                        xml: {
                                          name: "NetMassUOM",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "string",
                                        dataTypeDisplayText: "String",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        title: "NetMassUOM",
                                        typeCombinatorTypes: null
                                      },
                                      NetExplosive: {
                                        id: "NetExplosive",
                                        title: "NetExplosive",
                                        description:
                                          "Container for net explosive details.",
                                        xml: {
                                          name: "NetExplosive",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "object",
                                        properties: {
                                          Amount: {
                                            id: "Amount",
                                            title: "Amount",
                                            description:
                                              "Container for net explosive amount details.",
                                            xml: {
                                              name: "Amount",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "object",
                                            properties: {
                                              Quantity: {
                                                description:
                                                  "Net explosive quantity.",
                                                xml: {
                                                  name: "Quantity",
                                                  namespace:
                                                    "https://www.wisetechglobal.com/",
                                                  prefix: "wtg",
                                                  attribute: false,
                                                  wrapped: false
                                                },
                                                type: "number",
                                                dataTypeDisplayText: "Double",
                                                dataTypeMarkdown: null,
                                                paramType: null,
                                                title: "Quantity",
                                                typeCombinatorTypes: null
                                              },
                                              UOM: {
                                                description:
                                                  "Net explosive units of measure.",
                                                xml: {
                                                  name: "UOM",
                                                  namespace:
                                                    "https://www.wisetechglobal.com/",
                                                  prefix: "wtg",
                                                  attribute: false,
                                                  wrapped: false
                                                },
                                                type: "string",
                                                dataTypeDisplayText: "String",
                                                dataTypeMarkdown: null,
                                                paramType: null,
                                                title: "UOM",
                                                typeCombinatorTypes: null
                                              }
                                            },
                                            dataTypeDisplayText: "Amount",
                                            dataTypeLink:
                                              "/java/models/structures/amount",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            typeCombinatorTypes: null
                                          },
                                          Abbreviation: {
                                            title: "Abbreviation",
                                            description:
                                              "Net explosive abbreviation",
                                            example: "NEM",
                                            xml: {
                                              name: "Abbreviation",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            "x-enum-elements": [
                                              {
                                                name: "NEM",
                                                description: ""
                                              },
                                              {
                                                name: "NEC",
                                                description: ""
                                              },
                                              {
                                                name: "NEQ",
                                                description: ""
                                              },
                                              {
                                                name: "NEW",
                                                description: ""
                                              },
                                              {
                                                name: "Unknown",
                                                description: ""
                                              }
                                            ],
                                            type: "string",
                                            enum: [
                                              "NEM",
                                              "NEC",
                                              "NEQ",
                                              "NEW",
                                              "Unknown",
                                              null
                                            ],
                                            dataTypeDisplayText:
                                              "AbbreviationEnum",
                                            dataTypeLink:
                                              "/java/models/enumerations/abbreviation",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            typeCombinatorTypes: null
                                          }
                                        },
                                        dataTypeDisplayText: "NetExplosive",
                                        dataTypeLink:
                                          "/java/models/structures/net-explosive",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        typeCombinatorTypes: null
                                      },
                                      ThirdPartyHazardous: {
                                        id: "ThirdPartyHazardous1",
                                        title: "ThirdPartyHazardous",
                                        description:
                                          "Container for details for processing by an external hazardous compliance system.",
                                        xml: {
                                          name: "ThirdPartyHazardous",
                                          namespace:
                                            "https://www.wisetechglobal.com/",
                                          prefix: "wtg",
                                          attribute: false,
                                          wrapped: false
                                        },
                                        type: "object",
                                        properties: {
                                          Materials: {
                                            id: "Materials",
                                            title: "Materials",
                                            description:
                                              "Container for all material details.",
                                            xml: {
                                              name: "Materials",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "object",
                                            properties: {
                                              Material: {
                                                description:
                                                  "Container for material details.",
                                                xml: {
                                                  namespace:
                                                    "https://www.wisetechglobal.com/",
                                                  prefix: "wtg",
                                                  attribute: false,
                                                  wrapped: false
                                                },
                                                type: "array",
                                                items: {
                                                  id: "Material1",
                                                  title: "Material1",
                                                  description:
                                                    "Container for material details.",
                                                  xml: {
                                                    name: "Material",
                                                    namespace:
                                                      "https://www.wisetechglobal.com/",
                                                    prefix: "wtg",
                                                    attribute: false,
                                                    wrapped: false
                                                  },
                                                  type: "object",
                                                  properties: {
                                                    Radionuclide: {
                                                      id: "Radionuclide",
                                                      title: "Radionuclide",
                                                      description:
                                                        "Container for radionuclide details.",
                                                      xml: {
                                                        name: "Radionuclide",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "object",
                                                      properties: {
                                                        Name: {
                                                          description:
                                                            "Name of substance.",
                                                          xml: {
                                                            name: "Name",
                                                            namespace:
                                                              "https://www.wisetechglobal.com/",
                                                            prefix: "wtg",
                                                            attribute: false,
                                                            wrapped: false
                                                          },
                                                          type: "string",
                                                          dataTypeDisplayText:
                                                            "String",
                                                          dataTypeMarkdown: null,
                                                          paramType: null,
                                                          title: "Name",
                                                          typeCombinatorTypes: null
                                                        },
                                                        Activity: {
                                                          description:
                                                            "Value indicates the radioactivity of this substance.",
                                                          xml: {
                                                            name: "Activity",
                                                            namespace:
                                                              "https://www.wisetechglobal.com/",
                                                            prefix: "wtg",
                                                            attribute: false,
                                                            wrapped: false
                                                          },
                                                          type: "string",
                                                          dataTypeDisplayText:
                                                            "String",
                                                          dataTypeMarkdown: null,
                                                          paramType: null,
                                                          title: "Activity",
                                                          typeCombinatorTypes: null
                                                        },
                                                        Measure: {
                                                          description:
                                                            "Value indicates the unit of measure.",
                                                          xml: {
                                                            name: "Measure",
                                                            namespace:
                                                              "https://www.wisetechglobal.com/",
                                                            prefix: "wtg",
                                                            attribute: false,
                                                            wrapped: false
                                                          },
                                                          type: "string",
                                                          dataTypeDisplayText:
                                                            "String",
                                                          dataTypeMarkdown: null,
                                                          paramType: null,
                                                          title: "Measure",
                                                          typeCombinatorTypes: null
                                                        },
                                                        RadioactivePackagingType: {
                                                          description:
                                                            "Value indicates the packaging type.",
                                                          xml: {
                                                            name:
                                                              "RadioactivePackagingType",
                                                            namespace:
                                                              "https://www.wisetechglobal.com/",
                                                            prefix: "wtg",
                                                            attribute: false,
                                                            wrapped: false
                                                          },
                                                          type: "string",
                                                          dataTypeDisplayText:
                                                            "String",
                                                          dataTypeMarkdown: null,
                                                          paramType: null,
                                                          title:
                                                            "RadioactivePackagingType",
                                                          typeCombinatorTypes: null
                                                        },
                                                        TransportIndex: {
                                                          description:
                                                            "Value indicates the transport index.",
                                                          xml: {
                                                            name:
                                                              "TransportIndex",
                                                            namespace:
                                                              "https://www.wisetechglobal.com/",
                                                            prefix: "wtg",
                                                            attribute: false,
                                                            wrapped: false
                                                          },
                                                          type: "string",
                                                          dataTypeDisplayText:
                                                            "String",
                                                          dataTypeMarkdown: null,
                                                          paramType: null,
                                                          title:
                                                            "TransportIndex",
                                                          typeCombinatorTypes: null
                                                        },
                                                        RadioactiveLabelType: {
                                                          description:
                                                            "The label type to use.",
                                                          xml: {
                                                            name:
                                                              "RadioactiveLabelType",
                                                            namespace:
                                                              "https://www.wisetechglobal.com/",
                                                            prefix: "wtg",
                                                            attribute: false,
                                                            wrapped: false
                                                          },
                                                          type: "string",
                                                          dataTypeDisplayText:
                                                            "String",
                                                          dataTypeMarkdown: null,
                                                          paramType: null,
                                                          title:
                                                            "RadioactiveLabelType",
                                                          typeCombinatorTypes: null
                                                        },
                                                        SurfaceReading: {
                                                          description:
                                                            "The surface reading for this substance.<br>**Default**: `0`",
                                                          xml: {
                                                            name:
                                                              "SurfaceReading",
                                                            namespace:
                                                              "https://www.wisetechglobal.com/",
                                                            prefix: "wtg",
                                                            attribute: false,
                                                            wrapped: false
                                                          },
                                                          type: "integer",
                                                          default: 0,
                                                          dataTypeDisplayText:
                                                            "Integer",
                                                          dataTypeMarkdown: null,
                                                          paramType: null,
                                                          title:
                                                            "SurfaceReading",
                                                          typeCombinatorTypes: null
                                                        },
                                                        Length: {
                                                          description:
                                                            "Length of this substance.<br>**Default**: `0d`",
                                                          xml: {
                                                            name: "Length",
                                                            namespace:
                                                              "https://www.wisetechglobal.com/",
                                                            prefix: "wtg",
                                                            attribute: false,
                                                            wrapped: false
                                                          },
                                                          type: "number",
                                                          default: 0,
                                                          dataTypeDisplayText:
                                                            "Double",
                                                          dataTypeMarkdown: null,
                                                          paramType: null,
                                                          title: "Length",
                                                          typeCombinatorTypes: null
                                                        },
                                                        Width: {
                                                          description:
                                                            "Width of this substance.<br>**Default**: `0d`",
                                                          xml: {
                                                            name: "Width",
                                                            namespace:
                                                              "https://www.wisetechglobal.com/",
                                                            prefix: "wtg",
                                                            attribute: false,
                                                            wrapped: false
                                                          },
                                                          type: "number",
                                                          default: 0,
                                                          dataTypeDisplayText:
                                                            "Double",
                                                          dataTypeMarkdown: null,
                                                          paramType: null,
                                                          title: "Width",
                                                          typeCombinatorTypes: null
                                                        },
                                                        Height: {
                                                          description:
                                                            "Height of this substance.<br>**Default**: `0d`",
                                                          xml: {
                                                            name: "Height",
                                                            namespace:
                                                              "https://www.wisetechglobal.com/",
                                                            prefix: "wtg",
                                                            attribute: false,
                                                            wrapped: false
                                                          },
                                                          type: "number",
                                                          default: 0,
                                                          dataTypeDisplayText:
                                                            "Double",
                                                          dataTypeMarkdown: null,
                                                          paramType: null,
                                                          title: "Height",
                                                          typeCombinatorTypes: null
                                                        },
                                                        DimensionsUOM: {
                                                          description:
                                                            "Unit of measure in use.",
                                                          xml: {
                                                            name:
                                                              "DimensionsUOM",
                                                            namespace:
                                                              "https://www.wisetechglobal.com/",
                                                            prefix: "wtg",
                                                            attribute: false,
                                                            wrapped: false
                                                          },
                                                          type: "string",
                                                          dataTypeDisplayText:
                                                            "String",
                                                          dataTypeMarkdown: null,
                                                          paramType: null,
                                                          title:
                                                            "DimensionsUOM",
                                                          typeCombinatorTypes: null
                                                        },
                                                        PhysicalForm: {
                                                          description:
                                                            "Value indicates the physical form of this substance.",
                                                          xml: {
                                                            name:
                                                              "PhysicalForm",
                                                            namespace:
                                                              "https://www.wisetechglobal.com/",
                                                            prefix: "wtg",
                                                            attribute: false,
                                                            wrapped: false
                                                          },
                                                          type: "string",
                                                          dataTypeDisplayText:
                                                            "String",
                                                          dataTypeMarkdown: null,
                                                          paramType: null,
                                                          title: "PhysicalForm",
                                                          typeCombinatorTypes: null
                                                        },
                                                        ChemicalFormula: {
                                                          description:
                                                            "Value indicates the chemical formula of this substance.",
                                                          xml: {
                                                            name:
                                                              "ChemicalFormula",
                                                            namespace:
                                                              "https://www.wisetechglobal.com/",
                                                            prefix: "wtg",
                                                            attribute: false,
                                                            wrapped: false
                                                          },
                                                          type: "string",
                                                          dataTypeDisplayText:
                                                            "String",
                                                          dataTypeMarkdown: null,
                                                          paramType: null,
                                                          title:
                                                            "ChemicalFormula",
                                                          typeCombinatorTypes: null
                                                        },
                                                        ExceptedPackagesRadioactiveMaterialsIndicator: {
                                                          description:
                                                            "Excepted packages radioactive materials indicator of the radionuclide<br>**Default**: `0`",
                                                          xml: {
                                                            name:
                                                              "ExceptedPackagesRadioactiveMaterialsIndicator",
                                                            namespace:
                                                              "https://www.wisetechglobal.com/",
                                                            prefix: "wtg",
                                                            attribute: false,
                                                            wrapped: false
                                                          },
                                                          type: "integer",
                                                          default: 0,
                                                          dataTypeDisplayText:
                                                            "Integer",
                                                          dataTypeMarkdown: null,
                                                          paramType: null,
                                                          title:
                                                            "ExceptedPackagesRadioactiveMaterialsIndicator",
                                                          typeCombinatorTypes: null
                                                        },
                                                        CriticalitySafetyIndex: {
                                                          description:
                                                            "Criticality safety index of the radionuclide<br>**Default**: `0d`",
                                                          xml: {
                                                            name:
                                                              "CriticalitySafetyIndex",
                                                            namespace:
                                                              "https://www.wisetechglobal.com/",
                                                            prefix: "wtg",
                                                            attribute: false,
                                                            wrapped: false
                                                          },
                                                          type: "number",
                                                          default: 0,
                                                          dataTypeDisplayText:
                                                            "Double",
                                                          dataTypeMarkdown: null,
                                                          paramType: null,
                                                          title:
                                                            "CriticalitySafetyIndex",
                                                          typeCombinatorTypes: null
                                                        }
                                                      },
                                                      dataTypeDisplayText:
                                                        "Radionuclide",
                                                      dataTypeLink:
                                                        "/java/models/structures/radionuclide",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      typeCombinatorTypes: null
                                                    },
                                                    Hazardous: {
                                                      description:
                                                        "Indicates whether the line item is hazardous.  Defaults to not hazardous if omitted.<br>**Default**: `false`",
                                                      xml: {
                                                        name: "Hazardous",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "boolean",
                                                      default: false,
                                                      dataTypeDisplayText:
                                                        "Boolean",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "Hazardous",
                                                      typeCombinatorTypes: null
                                                    },
                                                    HazardousIdentifier: {
                                                      description:
                                                        "Hazardous Material Identification Number for the line item.",
                                                      xml: {
                                                        name:
                                                          "HazardousIdentifier",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "HazardousIdentifier",
                                                      typeCombinatorTypes: null
                                                    },
                                                    HazardousProperShippingName: {
                                                      description:
                                                        "Proper Shipping Name for the line item.",
                                                      xml: {
                                                        name:
                                                          "HazardousProperShippingName",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "HazardousProperShippingName",
                                                      typeCombinatorTypes: null
                                                    },
                                                    HazardousTotalQuantity: {
                                                      description:
                                                        "Total Material Quantity.<br>**Default**: `0d`",
                                                      xml: {
                                                        name:
                                                          "HazardousTotalQuantity",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "number",
                                                      default: 0,
                                                      dataTypeDisplayText:
                                                        "Double",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "HazardousTotalQuantity",
                                                      typeCombinatorTypes: null
                                                    },
                                                    HazardousTechnicalName: {
                                                      description:
                                                        "Technical Name for the line item.",
                                                      xml: {
                                                        name:
                                                          "HazardousTechnicalName",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "HazardousTechnicalName",
                                                      typeCombinatorTypes: null
                                                    },
                                                    NumberOfInnerContainers: {
                                                      description:
                                                        "The number of items packed inside the content item.<br>**Default**: `0`",
                                                      xml: {
                                                        name:
                                                          "NumberOfInnerContainers",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "integer",
                                                      default: 0,
                                                      dataTypeDisplayText:
                                                        "Integer",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "NumberOfInnerContainers",
                                                      typeCombinatorTypes: null
                                                    },
                                                    HazardousAccessible: {
                                                      description:
                                                        "Indicates whether the hazardous line item must remain accessible during transportation.  Defaults to not accessible if omitted.<br>**Default**: `false`",
                                                      xml: {
                                                        name:
                                                          "HazardousAccessible",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "boolean",
                                                      default: false,
                                                      dataTypeDisplayText:
                                                        "Boolean",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "HazardousAccessible",
                                                      typeCombinatorTypes: null
                                                    },
                                                    HazardousPassengerAircraft: {
                                                      description:
                                                        "Indicates whether the hazardous line item can be transported on a passenger aircraft.  Defaults to cannot be transported on a passenger aircraft if omitted.<br>**Default**: `false`",
                                                      xml: {
                                                        name:
                                                          "HazardousPassengerAircraft",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "boolean",
                                                      default: false,
                                                      dataTypeDisplayText:
                                                        "Boolean",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "HazardousPassengerAircraft",
                                                      typeCombinatorTypes: null
                                                    },
                                                    HazardousCargoAircraftOnly: {
                                                      description:
                                                        "Indicates whether the hazardous line item can only be transported on a cargo aircraft.  Defaults to not cargo aircraft only if omitted.<br>**Default**: `false`",
                                                      xml: {
                                                        name:
                                                          "HazardousCargoAircraftOnly",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "boolean",
                                                      default: false,
                                                      dataTypeDisplayText:
                                                        "Boolean",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "HazardousCargoAircraftOnly",
                                                      typeCombinatorTypes: null
                                                    },
                                                    HazardousRequiredInformation: {
                                                      description:
                                                        "Any additional required information relating to the hazardous item, e.g. Limited Qty, permit numbers and type.",
                                                      xml: {
                                                        name:
                                                          "HazardousRequiredInformation",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "HazardousRequiredInformation",
                                                      typeCombinatorTypes: null
                                                    },
                                                    HazardousLabelCodes: {
                                                      description:
                                                        "Hazardous Label Codes for the line item.",
                                                      xml: {
                                                        name:
                                                          "HazardousLabelCodes",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "HazardousLabelCodes",
                                                      typeCombinatorTypes: null
                                                    },
                                                    HazardousPackingInstructions: {
                                                      description:
                                                        "Hazardous packing instructions for the product.",
                                                      xml: {
                                                        name:
                                                          "HazardousPackingInstructions",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "HazardousPackingInstructions",
                                                      typeCombinatorTypes: null
                                                    },
                                                    HazardousSubClass: {
                                                      description:
                                                        "Hazardous Sub-Class for the line item.",
                                                      xml: {
                                                        name:
                                                          "HazardousSubClass",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "HazardousSubClass",
                                                      typeCombinatorTypes: null
                                                    },
                                                    HazardousPackingGroup: {
                                                      description:
                                                        "Hazardous Packing Group for the line item.",
                                                      xml: {
                                                        name:
                                                          "HazardousPackingGroup",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "HazardousPackingGroup",
                                                      typeCombinatorTypes: null
                                                    },
                                                    HazardousSpecialProvision: {
                                                      description:
                                                        "Value indicates the hazardous special provision in use.",
                                                      xml: {
                                                        name:
                                                          "HazardousSpecialProvision",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "HazardousSpecialProvision",
                                                      typeCombinatorTypes: null
                                                    },
                                                    HazardousClass: {
                                                      description:
                                                        "Hazardous Class for the line item.",
                                                      xml: {
                                                        name: "HazardousClass",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "HazardousClass",
                                                      typeCombinatorTypes: null
                                                    },
                                                    HazardousConcentration: {
                                                      description:
                                                        "The percentage concentration for the line item.<br>**Default**: `0`",
                                                      xml: {
                                                        name:
                                                          "HazardousConcentration",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "integer",
                                                      default: 0,
                                                      dataTypeDisplayText:
                                                        "Integer",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "HazardousConcentration",
                                                      typeCombinatorTypes: null
                                                    },
                                                    Quantity: {
                                                      description:
                                                        "Material Quantity.<br>**Default**: `0d`",
                                                      xml: {
                                                        name: "Quantity",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "number",
                                                      default: 0,
                                                      dataTypeDisplayText:
                                                        "Double",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "Quantity",
                                                      typeCombinatorTypes: null
                                                    },
                                                    QuantityUOM: {
                                                      description:
                                                        "The units of measure for the material quantity.",
                                                      xml: {
                                                        name: "QuantityUOM",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "QuantityUOM",
                                                      typeCombinatorTypes: null
                                                    },
                                                    Weight: {
                                                      description:
                                                        "Material Weight.<br>**Default**: `0d`",
                                                      xml: {
                                                        name: "Weight",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "number",
                                                      default: 0,
                                                      dataTypeDisplayText:
                                                        "Double",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "Weight",
                                                      typeCombinatorTypes: null
                                                    },
                                                    WeightUOM: {
                                                      description:
                                                        "The units of measure for the material weight.",
                                                      xml: {
                                                        name: "WeightUOM",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "WeightUOM",
                                                      typeCombinatorTypes: null
                                                    },
                                                    NetMassQuantity: {
                                                      description:
                                                        "Net mass quantity.<br>**Default**: `0d`",
                                                      xml: {
                                                        name: "NetMassQuantity",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "number",
                                                      default: 0,
                                                      dataTypeDisplayText:
                                                        "Double",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "NetMassQuantity",
                                                      typeCombinatorTypes: null
                                                    },
                                                    NetMassUOM: {
                                                      description:
                                                        "Net mass units of measure.",
                                                      xml: {
                                                        name: "NetMassUOM",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "NetMassUOM",
                                                      typeCombinatorTypes: null
                                                    },
                                                    NetExplosive: {
                                                      id: "NetExplosive",
                                                      title: "NetExplosive",
                                                      description:
                                                        "Container for net explosive details.",
                                                      xml: {
                                                        name: "NetExplosive",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "object",
                                                      properties: {
                                                        Amount: {
                                                          id: "Amount",
                                                          title: "Amount",
                                                          description:
                                                            "Container for net explosive amount details.",
                                                          xml: {
                                                            name: "Amount",
                                                            namespace:
                                                              "https://www.wisetechglobal.com/",
                                                            prefix: "wtg",
                                                            attribute: false,
                                                            wrapped: false
                                                          },
                                                          type: "object",
                                                          properties: {
                                                            Quantity: {
                                                              description:
                                                                "Net explosive quantity.",
                                                              xml: {
                                                                name:
                                                                  "Quantity",
                                                                namespace:
                                                                  "https://www.wisetechglobal.com/",
                                                                prefix: "wtg",
                                                                attribute: false,
                                                                wrapped: false
                                                              },
                                                              type: "number",
                                                              dataTypeDisplayText:
                                                                "Double",
                                                              dataTypeMarkdown: null,
                                                              paramType: null,
                                                              title: "Quantity",
                                                              typeCombinatorTypes: null
                                                            },
                                                            UOM: {
                                                              description:
                                                                "Net explosive units of measure.",
                                                              xml: {
                                                                name: "UOM",
                                                                namespace:
                                                                  "https://www.wisetechglobal.com/",
                                                                prefix: "wtg",
                                                                attribute: false,
                                                                wrapped: false
                                                              },
                                                              type: "string",
                                                              dataTypeDisplayText:
                                                                "String",
                                                              dataTypeMarkdown: null,
                                                              paramType: null,
                                                              title: "UOM",
                                                              typeCombinatorTypes: null
                                                            }
                                                          },
                                                          dataTypeDisplayText:
                                                            "Amount",
                                                          dataTypeLink:
                                                            "/java/models/structures/amount",
                                                          dataTypeMarkdown: null,
                                                          paramType: null,
                                                          typeCombinatorTypes: null
                                                        },
                                                        Abbreviation: {
                                                          title: "Abbreviation",
                                                          description:
                                                            "Net explosive abbreviation",
                                                          example: "NEM",
                                                          xml: {
                                                            name:
                                                              "Abbreviation",
                                                            namespace:
                                                              "https://www.wisetechglobal.com/",
                                                            prefix: "wtg",
                                                            attribute: false,
                                                            wrapped: false
                                                          },
                                                          "x-enum-elements": [
                                                            {
                                                              name: "NEM",
                                                              description: ""
                                                            },
                                                            {
                                                              name: "NEC",
                                                              description: ""
                                                            },
                                                            {
                                                              name: "NEQ",
                                                              description: ""
                                                            },
                                                            {
                                                              name: "NEW",
                                                              description: ""
                                                            },
                                                            {
                                                              name: "Unknown",
                                                              description: ""
                                                            }
                                                          ],
                                                          type: "string",
                                                          enum: [
                                                            "NEM",
                                                            "NEC",
                                                            "NEQ",
                                                            "NEW",
                                                            "Unknown",
                                                            null
                                                          ],
                                                          dataTypeDisplayText:
                                                            "AbbreviationEnum",
                                                          dataTypeLink:
                                                            "/java/models/enumerations/abbreviation",
                                                          dataTypeMarkdown: null,
                                                          paramType: null,
                                                          typeCombinatorTypes: null
                                                        }
                                                      },
                                                      dataTypeDisplayText:
                                                        "NetExplosive",
                                                      dataTypeLink:
                                                        "/java/models/structures/net-explosive",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      typeCombinatorTypes: null
                                                    },
                                                    MaterialKey: {
                                                      description:
                                                        "Hazardous material key for the product for 3rd party hazardous partner.",
                                                      xml: {
                                                        name: "MaterialKey",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "MaterialKey",
                                                      typeCombinatorTypes: null
                                                    },
                                                    NameKey: {
                                                      description:
                                                        "Hazardous name key for the product for 3rd party hazardous partner.",
                                                      xml: {
                                                        name: "NameKey",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "NameKey",
                                                      typeCombinatorTypes: null
                                                    },
                                                    InnerPackagingType: {
                                                      description:
                                                        "Hazardous inner packaging type for the product for 3rd party hazardous partner.",
                                                      xml: {
                                                        name:
                                                          "InnerPackagingType",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "InnerPackagingType",
                                                      typeCombinatorTypes: null
                                                    },
                                                    PackageInstructionType: {
                                                      description:
                                                        "Hazardous packaging instruction type for the product for 3rd party hazardous partner.",
                                                      xml: {
                                                        name:
                                                          "PackageInstructionType",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "PackageInstructionType",
                                                      typeCombinatorTypes: null
                                                    },
                                                    ReportableQuantity: {
                                                      description:
                                                        "Hazardous product quantity is reportable for 3rd party hazardous partner.<br>**Default**: `false`",
                                                      xml: {
                                                        name:
                                                          "ReportableQuantity",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "boolean",
                                                      default: false,
                                                      dataTypeDisplayText:
                                                        "Boolean",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "ReportableQuantity",
                                                      typeCombinatorTypes: null
                                                    },
                                                    ConsumerCommodity: {
                                                      description:
                                                        "Material is classified as Consumer Commodity (ORM-D).<br>**Default**: `false`",
                                                      xml: {
                                                        name:
                                                          "ConsumerCommodity",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "boolean",
                                                      default: false,
                                                      dataTypeDisplayText:
                                                        "Boolean",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "ConsumerCommodity",
                                                      typeCombinatorTypes: null
                                                    },
                                                    Mixture: {
                                                      description:
                                                        "Hazardous product is mixture for 3rd party hazardous partner.<br>**Default**: `false`",
                                                      xml: {
                                                        name: "Mixture",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "boolean",
                                                      default: false,
                                                      dataTypeDisplayText:
                                                        "Boolean",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "Mixture",
                                                      typeCombinatorTypes: null
                                                    },
                                                    Solution: {
                                                      description:
                                                        "Hazardous product is solution for 3rd party hazardous partner.<br>**Default**: `false`",
                                                      xml: {
                                                        name: "Solution",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "boolean",
                                                      default: false,
                                                      dataTypeDisplayText:
                                                        "Boolean",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "Solution",
                                                      typeCombinatorTypes: null
                                                    },
                                                    Solid: {
                                                      description:
                                                        "Hazardous product is solid for 3rd party hazardous partner.<br>**Default**: `false`",
                                                      xml: {
                                                        name: "Solid",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "boolean",
                                                      default: false,
                                                      dataTypeDisplayText:
                                                        "Boolean",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "Solid",
                                                      typeCombinatorTypes: null
                                                    },
                                                    Molten: {
                                                      description:
                                                        "Hazardous product is molten for 3rd party hazardous partner.<br>**Default**: `false`",
                                                      xml: {
                                                        name: "Molten",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "boolean",
                                                      default: false,
                                                      dataTypeDisplayText:
                                                        "Boolean",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "Molten",
                                                      typeCombinatorTypes: null
                                                    },
                                                    Liquid: {
                                                      description:
                                                        "Hazardous product is liquid for 3rd party hazardous partner.<br>**Default**: `false`",
                                                      xml: {
                                                        name: "Liquid",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "boolean",
                                                      default: false,
                                                      dataTypeDisplayText:
                                                        "Boolean",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "Liquid",
                                                      typeCombinatorTypes: null
                                                    },
                                                    Stabilized: {
                                                      description:
                                                        "Hazardous product is stabilized for 3rd party hazardous partner.<br>**Default**: `false`",
                                                      xml: {
                                                        name: "Stabilized",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "boolean",
                                                      default: false,
                                                      dataTypeDisplayText:
                                                        "Boolean",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "Stabilized",
                                                      typeCombinatorTypes: null
                                                    },
                                                    Waste: {
                                                      description:
                                                        "Hazardous product is waste for 3rd party hazardous partner.<br>**Default**: `false`",
                                                      xml: {
                                                        name: "Waste",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "boolean",
                                                      default: false,
                                                      dataTypeDisplayText:
                                                        "Boolean",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "Waste",
                                                      typeCombinatorTypes: null
                                                    },
                                                    Hot: {
                                                      description:
                                                        "Hazardous product is hot for 3rd party hazardous partner.<br>**Default**: `false`",
                                                      xml: {
                                                        name: "Hot",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "boolean",
                                                      default: false,
                                                      dataTypeDisplayText:
                                                        "Boolean",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "Hot",
                                                      typeCombinatorTypes: null
                                                    },
                                                    MarinePollutant: {
                                                      description:
                                                        "Hazardous product is a marine pollutant for 3rd party hazardous partner.<br>**Default**: `false`",
                                                      xml: {
                                                        name: "MarinePollutant",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "boolean",
                                                      default: false,
                                                      dataTypeDisplayText:
                                                        "Boolean",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "MarinePollutant",
                                                      typeCombinatorTypes: null
                                                    },
                                                    MaritimeOnly: {
                                                      description:
                                                        "Hazardous product is a maritime only for 3rd party hazardous partner.<br>**Default**: `false`",
                                                      xml: {
                                                        name: "MaritimeOnly",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "boolean",
                                                      default: false,
                                                      dataTypeDisplayText:
                                                        "Boolean",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "MaritimeOnly",
                                                      typeCombinatorTypes: null
                                                    },
                                                    ElevatedTemperature: {
                                                      description:
                                                        "Hazardous productis at elevated temperature for 3rd party hazardous partner.<br>**Default**: `false`",
                                                      xml: {
                                                        name:
                                                          "ElevatedTemperature",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "boolean",
                                                      default: false,
                                                      dataTypeDisplayText:
                                                        "Boolean",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "ElevatedTemperature",
                                                      typeCombinatorTypes: null
                                                    },
                                                    Empty: {
                                                      description:
                                                        "Hazardous product container is empty for 3rd party hazardous partner.<br>**Default**: `false`",
                                                      xml: {
                                                        name: "Empty",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "boolean",
                                                      default: false,
                                                      dataTypeDisplayText:
                                                        "Boolean",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "Empty",
                                                      typeCombinatorTypes: null
                                                    },
                                                    IsMaterialNonHazmat: {
                                                      description:
                                                        "Marks material as NonHazardous for 3rd party hazardous partner.<br>**Default**: `false`",
                                                      xml: {
                                                        name:
                                                          "IsMaterialNonHazmat",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "boolean",
                                                      default: false,
                                                      dataTypeDisplayText:
                                                        "Boolean",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "IsMaterialNonHazmat",
                                                      typeCombinatorTypes: null
                                                    },
                                                    IsMaterialNotInPackage: {
                                                      description:
                                                        "Hazardous product not packaged for 3rd party hazardous partner.<br>**Default**: `false`",
                                                      xml: {
                                                        name:
                                                          "IsMaterialNotInPackage",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "boolean",
                                                      default: false,
                                                      dataTypeDisplayText:
                                                        "Boolean",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "IsMaterialNotInPackage",
                                                      typeCombinatorTypes: null
                                                    },
                                                    IsInnerPackagingLiquid: {
                                                      description:
                                                        "Hazardous product is in liquid packaging for 3rd party hazardous partner.<br>**Default**: `false`",
                                                      xml: {
                                                        name:
                                                          "IsInnerPackagingLiquid",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "boolean",
                                                      default: false,
                                                      dataTypeDisplayText:
                                                        "Boolean",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "IsInnerPackagingLiquid",
                                                      typeCombinatorTypes: null
                                                    },
                                                    ShowMarinePollutantLabel: {
                                                      description:
                                                        "Hazardous product show marine pollutant label for 3rd party hazardous partner.<br>**Default**: `false`",
                                                      xml: {
                                                        name:
                                                          "ShowMarinePollutantLabel",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "boolean",
                                                      default: false,
                                                      dataTypeDisplayText:
                                                        "Boolean",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "ShowMarinePollutantLabel",
                                                      typeCombinatorTypes: null
                                                    },
                                                    ShowOrientationLabel: {
                                                      description:
                                                        "Show orientation label for hazardous product for 3rd party hazardous partner.<br>**Default**: `false`",
                                                      xml: {
                                                        name:
                                                          "ShowOrientationLabel",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "boolean",
                                                      default: false,
                                                      dataTypeDisplayText:
                                                        "Boolean",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "ShowOrientationLabel",
                                                      typeCombinatorTypes: null
                                                    },
                                                    CustomInnerPackagingType: {
                                                      description:
                                                        "Custom inner packaging type for Hazardous product for 3rd party hazardous partner.",
                                                      xml: {
                                                        name:
                                                          "CustomInnerPackagingType",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "CustomInnerPackagingType",
                                                      typeCombinatorTypes: null
                                                    },
                                                    Authorization: {
                                                      description:
                                                        "Hazardous Authorization for the product for 3rd party hazardous partner.",
                                                      xml: {
                                                        name: "Authorization",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "Authorization",
                                                      typeCombinatorTypes: null
                                                    },
                                                    ErgNumber: {
                                                      description:
                                                        "Hazardous ErgNumber for the product for 3rd party hazardous partner.",
                                                      xml: {
                                                        name: "ErgNumber",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "ErgNumber",
                                                      typeCombinatorTypes: null
                                                    },
                                                    AdditionalQuantityInformation: {
                                                      description:
                                                        "Hazardous additional quantity information for the product for 3rd party hazardous partner.",
                                                      xml: {
                                                        name:
                                                          "AdditionalQuantityInformation",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "AdditionalQuantityInformation",
                                                      typeCombinatorTypes: null
                                                    },
                                                    ToxicInhalationHazardZone: {
                                                      description:
                                                        "Toxic Inhalation Hazard Zone for the product for 3rd party hazardous partner.",
                                                      xml: {
                                                        name:
                                                          "ToxicInhalationHazardZone",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "ToxicInhalationHazardZone",
                                                      typeCombinatorTypes: null
                                                    },
                                                    OtherRequiredInformation: {
                                                      description:
                                                        "Other required information for hazardous product for 3rd party hazardous partner.",
                                                      xml: {
                                                        name:
                                                          "OtherRequiredInformation",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title:
                                                        "OtherRequiredInformation",
                                                      typeCombinatorTypes: null
                                                    },
                                                    EmptyPackageType: {
                                                      description:
                                                        "Empty package type for hazardous product for 3rd party hazardous partner.",
                                                      xml: {
                                                        name:
                                                          "EmptyPackageType",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "string",
                                                      dataTypeDisplayText:
                                                        "String",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      title: "EmptyPackageType",
                                                      typeCombinatorTypes: null
                                                    },
                                                    MaterialExemptions: {
                                                      id: "MaterialExemptions",
                                                      title:
                                                        "MaterialExemptions",
                                                      description:
                                                        "Container for material exemptions.",
                                                      xml: {
                                                        name:
                                                          "MaterialExemptions",
                                                        namespace:
                                                          "https://www.wisetechglobal.com/",
                                                        prefix: "wtg",
                                                        attribute: false,
                                                        wrapped: false
                                                      },
                                                      type: "object",
                                                      properties: {
                                                        MaterialExemption: {
                                                          description:
                                                            "Container for material exemption.",
                                                          xml: {
                                                            namespace:
                                                              "https://www.wisetechglobal.com/",
                                                            prefix: "wtg",
                                                            attribute: false,
                                                            wrapped: false
                                                          },
                                                          type: "array",
                                                          items: {
                                                            id:
                                                              "MaterialExemption",
                                                            title:
                                                              "MaterialExemption",
                                                            description:
                                                              "Container for material exemption.",
                                                            xml: {
                                                              name:
                                                                "MaterialExemption",
                                                              namespace:
                                                                "https://www.wisetechglobal.com/",
                                                              prefix: "wtg",
                                                              attribute: false,
                                                              wrapped: false
                                                            },
                                                            type: "object",
                                                            properties: {
                                                              ExemptionName: {
                                                                description:
                                                                  "Hazardous material exemption name for 3rd party hazardous partner.",
                                                                xml: {
                                                                  name:
                                                                    "ExemptionName",
                                                                  namespace:
                                                                    "https://www.wisetechglobal.com/",
                                                                  prefix: "wtg",
                                                                  attribute: false,
                                                                  wrapped: false
                                                                },
                                                                type: "string",
                                                                dataTypeDisplayText:
                                                                  "String",
                                                                dataTypeMarkdown: null,
                                                                paramType: null,
                                                                title:
                                                                  "ExemptionName",
                                                                typeCombinatorTypes: null
                                                              },
                                                              ExemptionType: {
                                                                title:
                                                                  "ExemptionType",
                                                                description:
                                                                  "Hazardous material exemption type for 3rd party hazardous partner.",
                                                                example:
                                                                  "Unknown",
                                                                xml: {
                                                                  name:
                                                                    "ExemptionType",
                                                                  namespace:
                                                                    "https://www.wisetechglobal.com/",
                                                                  prefix: "wtg",
                                                                  attribute: false,
                                                                  wrapped: false
                                                                },
                                                                "x-enum-elements": [
                                                                  {
                                                                    name:
                                                                      "Unknown",
                                                                    description:
                                                                      ""
                                                                  },
                                                                  {
                                                                    name: "EX",
                                                                    description:
                                                                      ""
                                                                  },
                                                                  {
                                                                    name: "CA",
                                                                    description:
                                                                      ""
                                                                  },
                                                                  {
                                                                    name: "SP",
                                                                    description:
                                                                      ""
                                                                  },
                                                                  {
                                                                    name: "VRI",
                                                                    description:
                                                                      ""
                                                                  },
                                                                  {
                                                                    name: "EC",
                                                                    description:
                                                                      ""
                                                                  }
                                                                ],
                                                                type: "string",
                                                                enum: [
                                                                  "Unknown",
                                                                  "EX",
                                                                  "CA",
                                                                  "SP",
                                                                  "VRI",
                                                                  "EC"
                                                                ],
                                                                dataTypeDisplayText:
                                                                  "ExemptionTypeEnum",
                                                                dataTypeLink:
                                                                  "/java/models/enumerations/exemption-type",
                                                                dataTypeMarkdown: null,
                                                                paramType: null,
                                                                typeCombinatorTypes: null
                                                              }
                                                            },
                                                            required: [
                                                              "ExemptionName",
                                                              "ExemptionType"
                                                            ],
                                                            dataTypeDisplayText:
                                                              "Material Exemption",
                                                            dataTypeLink:
                                                              "/java/models/structures/material-exemption"
                                                          },
                                                          dataTypeDisplayText:
                                                            "List<MaterialExemption>",
                                                          dataTypeLink:
                                                            "/java/models/structures/material-exemption",
                                                          dataTypeMarkdown: null,
                                                          paramType: null,
                                                          title:
                                                            "MaterialExemption",
                                                          typeCombinatorTypes: null
                                                        }
                                                      },
                                                      dataTypeDisplayText:
                                                        "MaterialExemptions",
                                                      dataTypeLink:
                                                        "/java/models/structures/material-exemptions",
                                                      dataTypeMarkdown: null,
                                                      paramType: null,
                                                      typeCombinatorTypes: null
                                                    }
                                                  },
                                                  dataTypeDisplayText:
                                                    "Material 1",
                                                  dataTypeLink:
                                                    "/java/models/structures/material-1"
                                                },
                                                dataTypeDisplayText:
                                                  "List<Material1>",
                                                dataTypeLink:
                                                  "/java/models/structures/material-1",
                                                dataTypeMarkdown: null,
                                                paramType: null,
                                                title: "Material",
                                                typeCombinatorTypes: null
                                              }
                                            },
                                            dataTypeDisplayText: "Materials",
                                            dataTypeLink:
                                              "/java/models/structures/materials",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            typeCombinatorTypes: null
                                          },
                                          MaterialKey: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.",
                                            xml: {
                                              name: "MaterialKey",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "string",
                                            dataTypeDisplayText: "String",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "MaterialKey",
                                            typeCombinatorTypes: null
                                          },
                                          NameKey: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.",
                                            xml: {
                                              name: "NameKey",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "string",
                                            dataTypeDisplayText: "String",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "NameKey",
                                            typeCombinatorTypes: null
                                          },
                                          InnerPackagingType: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.",
                                            xml: {
                                              name: "InnerPackagingType",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "string",
                                            dataTypeDisplayText: "String",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "InnerPackagingType",
                                            typeCombinatorTypes: null
                                          },
                                          PackageInstructionType: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.",
                                            xml: {
                                              name: "PackageInstructionType",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "string",
                                            dataTypeDisplayText: "String",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "PackageInstructionType",
                                            typeCombinatorTypes: null
                                          },
                                          ReportableQuantity: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.",
                                            xml: {
                                              name: "ReportableQuantity",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "string",
                                            dataTypeDisplayText: "String",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "ReportableQuantity",
                                            typeCombinatorTypes: null
                                          },
                                          Mixture: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.<br>**Default**: `false`",
                                            xml: {
                                              name: "Mixture",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "boolean",
                                            default: false,
                                            dataTypeDisplayText: "Boolean",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "Mixture",
                                            typeCombinatorTypes: null
                                          },
                                          Solution: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.<br>**Default**: `false`",
                                            xml: {
                                              name: "Solution",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "boolean",
                                            default: false,
                                            dataTypeDisplayText: "Boolean",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "Solution",
                                            typeCombinatorTypes: null
                                          },
                                          Solid: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.<br>**Default**: `false`",
                                            xml: {
                                              name: "Solid",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "boolean",
                                            default: false,
                                            dataTypeDisplayText: "Boolean",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "Solid",
                                            typeCombinatorTypes: null
                                          },
                                          Molten: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.<br>**Default**: `false`",
                                            xml: {
                                              name: "Molten",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "boolean",
                                            default: false,
                                            dataTypeDisplayText: "Boolean",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "Molten",
                                            typeCombinatorTypes: null
                                          },
                                          Liquid: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.<br>**Default**: `false`",
                                            xml: {
                                              name: "Liquid",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "boolean",
                                            default: false,
                                            dataTypeDisplayText: "Boolean",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "Liquid",
                                            typeCombinatorTypes: null
                                          },
                                          Stabilized: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.<br>**Default**: `false`",
                                            xml: {
                                              name: "Stabilized",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "boolean",
                                            default: false,
                                            dataTypeDisplayText: "Boolean",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "Stabilized",
                                            typeCombinatorTypes: null
                                          },
                                          Waste: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.<br>**Default**: `false`",
                                            xml: {
                                              name: "Waste",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "boolean",
                                            default: false,
                                            dataTypeDisplayText: "Boolean",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "Waste",
                                            typeCombinatorTypes: null
                                          },
                                          Hot: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.<br>**Default**: `false`",
                                            xml: {
                                              name: "Hot",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "boolean",
                                            default: false,
                                            dataTypeDisplayText: "Boolean",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "Hot",
                                            typeCombinatorTypes: null
                                          },
                                          MarinePollutant: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.<br>**Default**: `false`",
                                            xml: {
                                              name: "MarinePollutant",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "boolean",
                                            default: false,
                                            dataTypeDisplayText: "Boolean",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "MarinePollutant",
                                            typeCombinatorTypes: null
                                          },
                                          MaritimeOnly: {
                                            description:
                                              "Hazardous product is a maritime only for 3rd party hazardous partner.<br>**Default**: `false`",
                                            xml: {
                                              name: "MaritimeOnly",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "boolean",
                                            default: false,
                                            dataTypeDisplayText: "Boolean",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "MaritimeOnly",
                                            typeCombinatorTypes: null
                                          },
                                          ElevatedTemperature: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.<br>**Default**: `false`",
                                            xml: {
                                              name: "ElevatedTemperature",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "boolean",
                                            default: false,
                                            dataTypeDisplayText: "Boolean",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "ElevatedTemperature",
                                            typeCombinatorTypes: null
                                          },
                                          Empty: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.<br>**Default**: `false`",
                                            xml: {
                                              name: "Empty",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "boolean",
                                            default: false,
                                            dataTypeDisplayText: "Boolean",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "Empty",
                                            typeCombinatorTypes: null
                                          },
                                          IsMaterialNonHazmat: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.<br>**Default**: `false`",
                                            xml: {
                                              name: "IsMaterialNonHazmat",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "boolean",
                                            default: false,
                                            dataTypeDisplayText: "Boolean",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "IsMaterialNonHazmat",
                                            typeCombinatorTypes: null
                                          },
                                          IsMaterialNotInPackage: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.<br>**Default**: `false`",
                                            xml: {
                                              name: "IsMaterialNotInPackage",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "boolean",
                                            default: false,
                                            dataTypeDisplayText: "Boolean",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "IsMaterialNotInPackage",
                                            typeCombinatorTypes: null
                                          },
                                          IsInnerPackagingLiquid: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.<br>**Default**: `false`",
                                            xml: {
                                              name: "IsInnerPackagingLiquid",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "boolean",
                                            default: false,
                                            dataTypeDisplayText: "Boolean",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "IsInnerPackagingLiquid",
                                            typeCombinatorTypes: null
                                          },
                                          ShowMarinePollutantLabel: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.<br>**Default**: `false`",
                                            xml: {
                                              name: "ShowMarinePollutantLabel",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "boolean",
                                            default: false,
                                            dataTypeDisplayText: "Boolean",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "ShowMarinePollutantLabel",
                                            typeCombinatorTypes: null
                                          },
                                          ShowOrientationLabel: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.<br>**Default**: `false`",
                                            xml: {
                                              name: "ShowOrientationLabel",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "boolean",
                                            default: false,
                                            dataTypeDisplayText: "Boolean",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "ShowOrientationLabel",
                                            typeCombinatorTypes: null
                                          },
                                          CustomInnerPackagingType: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.",
                                            xml: {
                                              name: "CustomInnerPackagingType",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "string",
                                            dataTypeDisplayText: "String",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "CustomInnerPackagingType",
                                            typeCombinatorTypes: null
                                          },
                                          Authorization: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.",
                                            xml: {
                                              name: "Authorization",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "string",
                                            dataTypeDisplayText: "String",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "Authorization",
                                            typeCombinatorTypes: null
                                          },
                                          ErgNumber: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.",
                                            xml: {
                                              name: "ErgNumber",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "string",
                                            dataTypeDisplayText: "String",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "ErgNumber",
                                            typeCombinatorTypes: null
                                          },
                                          AdditionalQuantityInformation: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.",
                                            xml: {
                                              name:
                                                "AdditionalQuantityInformation",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "string",
                                            dataTypeDisplayText: "String",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title:
                                              "AdditionalQuantityInformation",
                                            typeCombinatorTypes: null
                                          },
                                          ToxicInhalationHazardZone: {
                                            description:
                                              "Toxic Inhalation Hazard Zone for the product for 3rd party hazardous partner.",
                                            xml: {
                                              name: "ToxicInhalationHazardZone",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "string",
                                            dataTypeDisplayText: "String",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "ToxicInhalationHazardZone",
                                            typeCombinatorTypes: null
                                          },
                                          OtherRequiredInformation: {
                                            description:
                                              "Other required information for hazardous product for 3rd party hazardous partner.",
                                            xml: {
                                              name: "OtherRequiredInformation",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "string",
                                            dataTypeDisplayText: "String",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "OtherRequiredInformation",
                                            typeCombinatorTypes: null
                                          },
                                          EmptyPackageType: {
                                            description:
                                              "Hazardous name key for the product for 3rd party hazardous partner.",
                                            xml: {
                                              name: "EmptyPackageType",
                                              namespace:
                                                "https://www.wisetechglobal.com/",
                                              prefix: "wtg",
                                              attribute: false,
                                              wrapped: false
                                            },
                                            type: "string",
                                            dataTypeDisplayText: "String",
                                            dataTypeMarkdown: null,
                                            paramType: null,
                                            title: "EmptyPackageType",
                                            typeCombinatorTypes: null
                                          }
                                        },
                                        dataTypeDisplayText:
                                          "ThirdPartyHazardous1",
                                        dataTypeLink:
                                          "/java/models/structures/third-party-hazardous-1",
                                        dataTypeMarkdown: null,
                                        paramType: null,
                                        typeCombinatorTypes: null
                                      }
                                    },
                                    dataTypeDisplayText: "Content",
                                    dataTypeLink:
                                      "/java/models/structures/content"
                                  },
                                  dataTypeDisplayText: "List<Content>",
                                  dataTypeLink:
                                    "/java/models/structures/content",
                                  dataTypeMarkdown: null,
                                  paramType: null,
                                  title: "Content",
                                  typeCombinatorTypes: null
                                }
                              },
                              required: ["Content"],
                              dataTypeDisplayText: "Contents",
                              dataTypeLink: "/java/models/structures/contents",
                              dataTypeMarkdown: null,
                              paramType: null,
                              typeCombinatorTypes: null
                            }
                          },
                          dataTypeDisplayText: "International1",
                          dataTypeLink:
                            "/java/models/structures/international-1",
                          dataTypeMarkdown: null,
                          paramType: null,
                          typeCombinatorTypes: null
                        }
                      },
                      dataTypeDisplayText: "Package",
                      dataTypeLink: "/java/models/structures/package"
                    },
                    dataTypeDisplayText: "List<Package>",
                    dataTypeLink: "/java/models/structures/package",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Package",
                    typeCombinatorTypes: null
                  }
                },
                required: ["Package"],
                dataTypeDisplayText: "Packages",
                dataTypeLink: "/java/models/structures/packages",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              Freight: {
                id: "Freight",
                title: "Freight",
                description: "Container for freight specific values",
                xml: {
                  name: "Freight",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  Billing: {
                    id: "Billing1",
                    title: "Billing",
                    description:
                      "Container for billing details associated with the transaction.",
                    xml: {
                      name: "Billing",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "object",
                    properties: {
                      Name: {
                        description:
                          "Name of the individual sending the shipment.",
                        xml: {
                          name: "Name",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Name",
                        typeCombinatorTypes: null
                      },
                      CompanyName: {
                        description:
                          "The company name associated with the address.",
                        xml: {
                          name: "CompanyName",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "CompanyName",
                        typeCombinatorTypes: null
                      },
                      Street: {
                        description: "First line of the address.",
                        xml: {
                          name: "Street",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Street",
                        typeCombinatorTypes: null
                      },
                      Locale: {
                        description: "Second line of the address.",
                        xml: {
                          name: "Locale",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Locale",
                        typeCombinatorTypes: null
                      },
                      Other: {
                        description: "Third line of the address.",
                        xml: {
                          name: "Other",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Other",
                        typeCombinatorTypes: null
                      },
                      City: {
                        description: "City of the address.",
                        xml: {
                          name: "City",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "City",
                        typeCombinatorTypes: null
                      },
                      Region: {
                        description: "The state or region of the address.",
                        xml: {
                          name: "Region",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Region",
                        typeCombinatorTypes: null
                      },
                      PostalCode: {
                        description:
                          "The postal code or zip associated with the address.",
                        xml: {
                          name: "PostalCode",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "PostalCode",
                        typeCombinatorTypes: null
                      },
                      Country: {
                        description: "The country code for the address.",
                        xml: {
                          name: "Country",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Country",
                        typeCombinatorTypes: null
                      },
                      Phone: {
                        description:
                          "The phone number associated with the address.",
                        xml: {
                          name: "Phone",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Phone",
                        typeCombinatorTypes: null
                      },
                      Email: {
                        description:
                          "An email address for the individual or company.",
                        xml: {
                          name: "Email",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Email",
                        typeCombinatorTypes: null
                      }
                    },
                    dataTypeDisplayText: "Billing1",
                    dataTypeLink: "/java/models/structures/billing-1",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  }
                },
                dataTypeDisplayText: "Freight",
                dataTypeLink: "/java/models/structures/freight",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              Description: {
                description: "Description of the shipment.",
                xml: {
                  name: "Description",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Description",
                typeCombinatorTypes: null
              },
              CountryOfManufacture: {
                description: "Country of manufacture.",
                xml: {
                  name: "CountryOfManufacture",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "CountryOfManufacture",
                typeCombinatorTypes: null
              },
              RecipientCountry: {
                description:
                  "Legacy representation of the recipient's country.",
                xml: {
                  name: "RecipientCountry",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "string",
                dataTypeDisplayText: "String",
                dataTypeMarkdown: null,
                paramType: null,
                title: "RecipientCountry",
                typeCombinatorTypes: null
              },
              DeliveryMethod: {
                description: "Identifier of the delivery method to use.",
                xml: {
                  name: "DeliveryMethod",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "integer",
                dataTypeDisplayText: "Integer",
                dataTypeMarkdown: null,
                paramType: null,
                title: "DeliveryMethod",
                typeCombinatorTypes: null
              },
              HazardousHelpLine: {
                id: "HazardousHelpLine",
                title: "HazardousHelpLine",
                description:
                  "Container for the Hazardous Helpline details associated with the transaction.",
                xml: {
                  name: "HazardousHelpLine",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  Phone: {
                    description: "Phone number of the Hazardous Helpline.",
                    xml: {
                      name: "Phone",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Phone",
                    typeCombinatorTypes: null
                  },
                  Name: {
                    description: "Contact name for the Hazardous Helpline.",
                    xml: {
                      name: "Name",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Name",
                    typeCombinatorTypes: null
                  },
                  ContractNumber: {
                    description: "Contract number for the Hazardous Helpline.",
                    xml: {
                      name: "ContractNumber",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ContractNumber",
                    typeCombinatorTypes: null
                  }
                },
                dataTypeDisplayText: "HazardousHelpLine",
                dataTypeLink: "/java/models/structures/hazardous-help-line",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              HazardousHelpLineInfectious: {
                id: "HazardousHelpLineInfectious",
                title: "HazardousHelpLineInfectious",
                description:
                  "Container for the Infectious Helpline details associated with the transaction.",
                xml: {
                  name: "HazardousHelpLineInfectious",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  Phone: {
                    description: "Phone number of the Infectious Helpline.",
                    xml: {
                      name: "Phone",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Phone",
                    typeCombinatorTypes: null
                  },
                  Name: {
                    description: "Contact name for the Infectious Helpline.",
                    xml: {
                      name: "Name",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Name",
                    typeCombinatorTypes: null
                  },
                  ContractNumber: {
                    description: "Contract number for the Infectious Helpline.",
                    xml: {
                      name: "ContractNumber",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ContractNumber",
                    typeCombinatorTypes: null
                  }
                },
                dataTypeDisplayText: "HazardousHelpLineInfectious",
                dataTypeLink:
                  "/java/models/structures/hazardous-help-line-infectious",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              UseCartonization: {
                description:
                  "Indicates whether to use return cartonized packages.<br>**Default**: `false`",
                xml: {
                  name: "UseCartonization",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "UseCartonization",
                typeCombinatorTypes: null
              },
              Cartonization: {
                id: "Cartonization",
                title: "Cartonization",
                description:
                  "Container for cartonization data for this transaction.",
                xml: {
                  name: "Cartonization",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  CartonizationGroupID: {
                    description:
                      "Numeric identifier for a cartonization group.<br>**Default**: `0`",
                    example: 0,
                    xml: {
                      name: "CartonizationGroupID",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "integer",
                    dataTypeDisplayText: "int",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "CartonizationGroupID",
                    typeCombinatorTypes: null
                  },
                  Contents: {
                    id: "Contents1",
                    title: "Contents",
                    description:
                      "Container for all contents associated with the transaction.",
                    xml: {
                      name: "Contents",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "object",
                    properties: {
                      Content: {
                        description:
                          "Container for an individual content associated with the transaction.",
                        xml: {
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "array",
                        items: {
                          id: "Content1",
                          title: "Content1",
                          description:
                            "Container for an individual content associated with the transaction.",
                          xml: {
                            name: "Content",
                            namespace: "https://www.wisetechglobal.com/",
                            prefix: "wtg",
                            attribute: false,
                            wrapped: false
                          },
                          type: "object",
                          properties: {
                            ContentRefNumber: {
                              description:
                                "Unique reference number for the content.",
                              xml: {
                                name: "ContentRefNumber",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "ContentRefNumber",
                              typeCombinatorTypes: null
                            },
                            Height: {
                              description: "Height of the content.",
                              xml: {
                                name: "Height",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "number",
                              dataTypeDisplayText: "Double",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Height",
                              typeCombinatorTypes: null
                            },
                            Width: {
                              description: "Width of the content.",
                              xml: {
                                name: "Width",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "number",
                              dataTypeDisplayText: "Double",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Width",
                              typeCombinatorTypes: null
                            },
                            Length: {
                              description: "Length of the content.",
                              xml: {
                                name: "Length",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "number",
                              dataTypeDisplayText: "Double",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Length",
                              typeCombinatorTypes: null
                            },
                            Code: {
                              description:
                                "Harmonized, or Schedule-B, code for the line item.",
                              xml: {
                                name: "Code",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Code",
                              typeCombinatorTypes: null
                            },
                            Quantity: {
                              description: "Quantity of the content.",
                              xml: {
                                name: "Quantity",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "integer",
                              dataTypeDisplayText: "Integer",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Quantity",
                              typeCombinatorTypes: null
                            },
                            UnitValue: {
                              description: "Unit value of the content.",
                              xml: {
                                name: "UnitValue",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "number",
                              dataTypeDisplayText: "Double",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "UnitValue",
                              typeCombinatorTypes: null
                            },
                            UnitWeight: {
                              description: "Unit Weight of the content.",
                              xml: {
                                name: "UnitWeight",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "number",
                              dataTypeDisplayText: "Double",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "UnitWeight",
                              typeCombinatorTypes: null
                            },
                            Description: {
                              description: "Name of the content.",
                              xml: {
                                name: "Description",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Description",
                              typeCombinatorTypes: null
                            },
                            OriginCountry: {
                              description:
                                "Country of origin of the line items.",
                              xml: {
                                name: "OriginCountry",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "OriginCountry",
                              typeCombinatorTypes: null
                            },
                            ItemCode: {
                              description:
                                "Internally-used code for the line item.",
                              xml: {
                                name: "ItemCode",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "ItemCode",
                              typeCombinatorTypes: null
                            },
                            ItemDescription: {
                              description:
                                "Internally-used description for the line item.",
                              xml: {
                                name: "ItemDescription",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "ItemDescription",
                              typeCombinatorTypes: null
                            },
                            UnitsOfMeasure: {
                              description:
                                "Units of measure for the line item.",
                              xml: {
                                name: "UnitsOfMeasure",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "UnitsOfMeasure",
                              typeCombinatorTypes: null
                            },
                            PartNumber: {
                              description: "Part number for the line item.",
                              xml: {
                                name: "PartNumber",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "PartNumber",
                              typeCombinatorTypes: null
                            },
                            BinNumber: {
                              description: "Bin number for the line item.",
                              xml: {
                                name: "BinNumber",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "BinNumber",
                              typeCombinatorTypes: null
                            },
                            LotNumber: {
                              description: "Lot number for the line item.",
                              xml: {
                                name: "LotNumber",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "LotNumber",
                              typeCombinatorTypes: null
                            },
                            Virtual: {
                              description:
                                "Whether or not this is a real item or a virtual, blocking space (from a subspace or loading rules)",
                              xml: {
                                name: "Virtual",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "boolean",
                              dataTypeDisplayText: "Boolean",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Virtual",
                              typeCombinatorTypes: null
                            },
                            Sequence: {
                              description:
                                "A sequence value for the item. This is intended for aisle-bin locations, e.g., aisle 11 bin 20 can be '1120’. See api.paccurate.io/docs",
                              xml: {
                                name: "Sequence",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "string",
                              dataTypeDisplayText: "String",
                              dataTypeMarkdown: null,
                              paramType: null,
                              title: "Sequence",
                              typeCombinatorTypes: null
                            },
                            CenterOfMass: {
                              id: "Point",
                              title: "CenterOfMass",
                              description: "Center of mass",
                              xml: {
                                name: "Point",
                                namespace: "https://www.wisetechglobal.com/",
                                prefix: "wtg",
                                attribute: false,
                                wrapped: false
                              },
                              type: "object",
                              properties: {
                                x: {
                                  description: "x coordinate, used as height.",
                                  xml: {
                                    name: "x",
                                    namespace:
                                      "https://www.wisetechglobal.com/",
                                    prefix: "wtg",
                                    attribute: false,
                                    wrapped: false
                                  },
                                  type: "number",
                                  dataTypeDisplayText: "double",
                                  dataTypeMarkdown: null,
                                  paramType: null,
                                  title: "X",
                                  typeCombinatorTypes: null
                                },
                                y: {
                                  description: "y coordinate, used as width.",
                                  xml: {
                                    name: "y",
                                    namespace:
                                      "https://www.wisetechglobal.com/",
                                    prefix: "wtg",
                                    attribute: false,
                                    wrapped: false
                                  },
                                  type: "number",
                                  dataTypeDisplayText: "double",
                                  dataTypeMarkdown: null,
                                  paramType: null,
                                  title: "Y",
                                  typeCombinatorTypes: null
                                },
                                z: {
                                  description: "z coordinate, used as length.",
                                  xml: {
                                    name: "z",
                                    namespace:
                                      "https://www.wisetechglobal.com/",
                                    prefix: "wtg",
                                    attribute: false,
                                    wrapped: false
                                  },
                                  type: "number",
                                  dataTypeDisplayText: "double",
                                  dataTypeMarkdown: null,
                                  paramType: null,
                                  title: "Z",
                                  typeCombinatorTypes: null
                                }
                              },
                              required: ["x", "y", "z"],
                              dataTypeDisplayText: "Point",
                              dataTypeLink: "/java/models/structures/point",
                              dataTypeMarkdown: null,
                              paramType: null,
                              typeCombinatorTypes: null
                            }
                          },
                          dataTypeDisplayText: "Content 1",
                          dataTypeLink: "/java/models/structures/content-1"
                        },
                        dataTypeDisplayText: "List<Content1>",
                        dataTypeLink: "/java/models/structures/content-1",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Content",
                        typeCombinatorTypes: null
                      }
                    },
                    required: ["Content"],
                    dataTypeDisplayText: "Contents1",
                    dataTypeLink: "/java/models/structures/contents-1",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  },
                  PackageTemplate: {
                    id: "PackageTemplate",
                    title: "PackageTemplate",
                    description:
                      "Container for elements to be applied to each package created from the cartonization response .",
                    xml: {
                      name: "PackageTemplate",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "object",
                    properties: {
                      Copies: {
                        description:
                          "Indicates the number of additional copies of the package that are to be shipped.  Defaults to zero additional copies if not submitted.<br>**Default**: `0`",
                        xml: {
                          name: "Copies",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "integer",
                        default: 0,
                        dataTypeDisplayText: "Integer",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Copies",
                        typeCombinatorTypes: null
                      },
                      PackageRequisitionID: {
                        description:
                          "Package Requistion of the package to ship, use this element for better multi piece requisition handling.<br>**Default**: `0`",
                        xml: {
                          name: "PackageRequisitionID",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "integer",
                        default: 0,
                        dataTypeDisplayText: "Integer",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "PackageRequisitionID",
                        typeCombinatorTypes: null
                      },
                      ExternalTrackingID: {
                        description:
                          "Identifier associated with Third Party Tracking.",
                        xml: {
                          name: "ExternalTrackingID",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "ExternalTrackingID",
                        typeCombinatorTypes: null
                      },
                      PackItemID: {
                        description:
                          "Unique numeric identifier for the pack item.<br>**Default**: `0`",
                        xml: {
                          name: "PackItemID",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "integer",
                        default: 0,
                        dataTypeDisplayText: "Integer",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "PackItemID",
                        typeCombinatorTypes: null
                      },
                      ShipperReference: {
                        description:
                          "Primary reference number, which will be printed on the package's label.",
                        xml: {
                          name: "ShipperReference",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "ShipperReference",
                        typeCombinatorTypes: null
                      },
                      PackageReference: {
                        description:
                          "Package reference number, which will be echoed back in the response.",
                        xml: {
                          name: "PackageReference",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "PackageReference",
                        typeCombinatorTypes: null
                      },
                      ReceiverName: {
                        description:
                          "The name of for the receiver of the package.",
                        xml: {
                          name: "ReceiverName",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "ReceiverName",
                        typeCombinatorTypes: null
                      },
                      ReceiverPhone: {
                        description:
                          "The phone number for the receiver of the package.",
                        xml: {
                          name: "ReceiverPhone",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "ReceiverPhone",
                        typeCombinatorTypes: null
                      },
                      ReceiverEmail: {
                        description:
                          "The email address for the receiver of the package.",
                        xml: {
                          name: "ReceiverEmail",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "ReceiverEmail",
                        typeCombinatorTypes: null
                      },
                      SenderName: {
                        description: "The name for the sender of the package.",
                        xml: {
                          name: "SenderName",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "SenderName",
                        typeCombinatorTypes: null
                      },
                      SenderPhone: {
                        description:
                          "The phone number for the sender of the package.",
                        xml: {
                          name: "SenderPhone",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "SenderPhone",
                        typeCombinatorTypes: null
                      },
                      ContentDescription: {
                        description:
                          "Free form description of the package's content.",
                        xml: {
                          name: "ContentDescription",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "ContentDescription",
                        typeCombinatorTypes: null
                      },
                      WayBillNumber: {
                        description:
                          "Tracking number to associate with the package.",
                        xml: {
                          name: "WayBillNumber",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "WayBillNumber",
                        typeCombinatorTypes: null
                      },
                      PriorityAlert: {
                        description:
                          "Indicates whether a priority alert is required for this package.  Defaults to no priority alertt if not submitted.<br>**Default**: `false`",
                        xml: {
                          name: "PriorityAlert",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "boolean",
                        default: false,
                        dataTypeDisplayText: "Boolean",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "PriorityAlert",
                        typeCombinatorTypes: null
                      },
                      PriorityAlertPlus: {
                        description:
                          "Indicates whether a priority alert plus is required for this package.  Defaults to no priority alert plus if not submitted.<br>**Default**: `false`",
                        xml: {
                          name: "PriorityAlertPlus",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "boolean",
                        default: false,
                        dataTypeDisplayText: "Boolean",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "PriorityAlertPlus",
                        typeCombinatorTypes: null
                      },
                      Insurance: {
                        id: "Insurance",
                        title: "Insurance",
                        description: "Container for insurance details.",
                        xml: {
                          name: "Insurance",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "object",
                        properties: {
                          Type: {
                            description:
                              "Type of insurance.  Defaults to no insurance if not submitted.<br>**Default**: `0`",
                            xml: {
                              name: "Type",
                              namespace: "https://www.wisetechglobal.com/",
                              prefix: "wtg",
                              attribute: false,
                              wrapped: false
                            },
                            type: "integer",
                            default: 0,
                            dataTypeDisplayText: "Integer",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "Type",
                            typeCombinatorTypes: null
                          },
                          Value: {
                            description:
                              "Value the package is to be insured for.<br>**Default**: `0d`",
                            xml: {
                              name: "Value",
                              namespace: "https://www.wisetechglobal.com/",
                              prefix: "wtg",
                              attribute: false,
                              wrapped: false
                            },
                            type: "number",
                            default: 0,
                            dataTypeDisplayText: "Double",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "Value",
                            typeCombinatorTypes: null
                          },
                          ValueCurrency: {
                            description:
                              "Currency of the value the package is to be insured for.",
                            xml: {
                              name: "ValueCurrency",
                              namespace: "https://www.wisetechglobal.com/",
                              prefix: "wtg",
                              attribute: false,
                              wrapped: false
                            },
                            type: "string",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "ValueCurrency",
                            typeCombinatorTypes: null
                          }
                        },
                        dataTypeDisplayText: "Insurance",
                        dataTypeLink: "/java/models/structures/insurance",
                        dataTypeMarkdown: null,
                        paramType: null,
                        typeCombinatorTypes: null
                      },
                      COD: {
                        id: "COD",
                        title: "COD",
                        description:
                          "Container for collect on delivery details.",
                        xml: {
                          name: "COD",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "object",
                        properties: {
                          Type: {
                            description:
                              "Numeric identifer for the type of cash on delivery.  Defaults to no cash on delivery if not submitted.<br>**Constraints**: *Pattern*: `[1-6]`",
                            xml: {
                              name: "Type",
                              namespace: "https://www.wisetechglobal.com/",
                              prefix: "wtg",
                              attribute: false,
                              wrapped: false
                            },
                            type: "integer",
                            dataTypeDisplayText: "Integer",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "Type",
                            typeCombinatorTypes: null
                          },
                          Value: {
                            description:
                              "Value that is to be collected by the carrier when the package is delivered.<br>**Default**: `0d`",
                            xml: {
                              name: "Value",
                              namespace: "https://www.wisetechglobal.com/",
                              prefix: "wtg",
                              attribute: false,
                              wrapped: false
                            },
                            type: "number",
                            default: 0,
                            dataTypeDisplayText: "Double",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "Value",
                            typeCombinatorTypes: null
                          },
                          ValueCurrency: {
                            description:
                              "Currency of the value that is to be collected by the carrier when the package is delivered.",
                            xml: {
                              name: "ValueCurrency",
                              namespace: "https://www.wisetechglobal.com/",
                              prefix: "wtg",
                              attribute: false,
                              wrapped: false
                            },
                            type: "string",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "ValueCurrency",
                            typeCombinatorTypes: null
                          },
                          AddCharges: {
                            description:
                              "Indicates whether charges are to be added.<br>**Default**: `false`",
                            xml: {
                              name: "AddCharges",
                              namespace: "https://www.wisetechglobal.com/",
                              prefix: "wtg",
                              attribute: false,
                              wrapped: false
                            },
                            type: "boolean",
                            default: false,
                            dataTypeDisplayText: "Boolean",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "AddCharges",
                            typeCombinatorTypes: null
                          }
                        },
                        dataTypeDisplayText: "COD",
                        dataTypeLink: "/java/models/structures/cod",
                        dataTypeMarkdown: null,
                        paramType: null,
                        typeCombinatorTypes: null
                      },
                      GuaranteedService: {
                        description:
                          "Numeric identifer for the type of guaranteed service.  Defaults to no guaranteed service if not submitted.<br>**Default**: `0`",
                        xml: {
                          name: "GuaranteedService",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "integer",
                        default: 0,
                        dataTypeDisplayText: "Integer",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "GuaranteedService",
                        typeCombinatorTypes: null
                      },
                      ECOD: {
                        description:
                          "Electronic COD indicator. Defaults to not ECOD.<br>**Default**: `false`",
                        xml: {
                          name: "ECOD",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "boolean",
                        default: false,
                        dataTypeDisplayText: "Boolean",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "ECOD",
                        typeCombinatorTypes: null
                      },
                      Hold: {
                        description:
                          "Indicates whether the package should be held for collection at a carrier's depot or some other location.<br>**Default**: `false`",
                        xml: {
                          name: "Hold",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "boolean",
                        default: false,
                        dataTypeDisplayText: "Boolean",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Hold",
                        typeCombinatorTypes: null
                      },
                      Holder: {
                        id: "Holder1",
                        title: "Holder",
                        description:
                          "Container for the holding location of the package.",
                        xml: {
                          name: "Holder",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "object",
                        properties: {
                          Name: {
                            description:
                              "Name of the individual who is to hold the package for collection.",
                            xml: {
                              name: "Name",
                              namespace: "https://www.wisetechglobal.com/",
                              prefix: "wtg",
                              attribute: false,
                              wrapped: false
                            },
                            type: "string",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "Name",
                            typeCombinatorTypes: null
                          },
                          CompanyName: {
                            description:
                              "The company name associated with the address.",
                            xml: {
                              name: "CompanyName",
                              namespace: "https://www.wisetechglobal.com/",
                              prefix: "wtg",
                              attribute: false,
                              wrapped: false
                            },
                            type: "string",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "CompanyName",
                            typeCombinatorTypes: null
                          },
                          Street: {
                            description: "First line of the address.",
                            xml: {
                              name: "Street",
                              namespace: "https://www.wisetechglobal.com/",
                              prefix: "wtg",
                              attribute: false,
                              wrapped: false
                            },
                            type: "string",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "Street",
                            typeCombinatorTypes: null
                          },
                          Locale: {
                            description: "Second line of the address.",
                            xml: {
                              name: "Locale",
                              namespace: "https://www.wisetechglobal.com/",
                              prefix: "wtg",
                              attribute: false,
                              wrapped: false
                            },
                            type: "string",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "Locale",
                            typeCombinatorTypes: null
                          },
                          Other: {
                            description: "Third line of the address.",
                            xml: {
                              name: "Other",
                              namespace: "https://www.wisetechglobal.com/",
                              prefix: "wtg",
                              attribute: false,
                              wrapped: false
                            },
                            type: "string",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "Other",
                            typeCombinatorTypes: null
                          },
                          City: {
                            description: "City of the address.",
                            xml: {
                              name: "City",
                              namespace: "https://www.wisetechglobal.com/",
                              prefix: "wtg",
                              attribute: false,
                              wrapped: false
                            },
                            type: "string",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "City",
                            typeCombinatorTypes: null
                          },
                          Region: {
                            description: "The state or region of the address.",
                            xml: {
                              name: "Region",
                              namespace: "https://www.wisetechglobal.com/",
                              prefix: "wtg",
                              attribute: false,
                              wrapped: false
                            },
                            type: "string",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "Region",
                            typeCombinatorTypes: null
                          },
                          PostalCode: {
                            description:
                              "The postal code or zip associated with the address.",
                            xml: {
                              name: "PostalCode",
                              namespace: "https://www.wisetechglobal.com/",
                              prefix: "wtg",
                              attribute: false,
                              wrapped: false
                            },
                            type: "string",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "PostalCode",
                            typeCombinatorTypes: null
                          },
                          Country: {
                            description: "The country code for the address.",
                            xml: {
                              name: "Country",
                              namespace: "https://www.wisetechglobal.com/",
                              prefix: "wtg",
                              attribute: false,
                              wrapped: false
                            },
                            type: "string",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "Country",
                            typeCombinatorTypes: null
                          },
                          Phone: {
                            description:
                              "The phone number associated with the address.",
                            xml: {
                              name: "Phone",
                              namespace: "https://www.wisetechglobal.com/",
                              prefix: "wtg",
                              attribute: false,
                              wrapped: false
                            },
                            type: "string",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "Phone",
                            typeCombinatorTypes: null
                          },
                          Type: {
                            description:
                              "The holder type associated with the address.",
                            xml: {
                              name: "Type",
                              namespace: "https://www.wisetechglobal.com/",
                              prefix: "wtg",
                              attribute: false,
                              wrapped: false
                            },
                            type: "string",
                            dataTypeDisplayText: "String",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "Type",
                            typeCombinatorTypes: null
                          }
                        },
                        dataTypeDisplayText: "Holder1",
                        dataTypeLink: "/java/models/structures/holder-1",
                        dataTypeMarkdown: null,
                        paramType: null,
                        typeCombinatorTypes: null
                      },
                      HomeDelivery: {
                        id: "HomeDelivery1",
                        title: "HomeDelivery",
                        description: "Container for home delivery details.",
                        xml: {
                          name: "HomeDelivery",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "object",
                        properties: {
                          Type: {
                            description:
                              "Type of home delivery required for the shipment.<br>**Constraints**: *Pattern*: `[1-3]`",
                            xml: {
                              name: "Type",
                              namespace: "https://www.wisetechglobal.com/",
                              prefix: "wtg",
                              attribute: false,
                              wrapped: false
                            },
                            type: "integer",
                            dataTypeDisplayText: "Integer",
                            dataTypeMarkdown: null,
                            paramType: null,
                            title: "Type",
                            typeCombinatorTypes: null
                          }
                        },
                        dataTypeDisplayText: "HomeDelivery1",
                        dataTypeLink: "/java/models/structures/home-delivery-1",
                        dataTypeMarkdown: null,
                        paramType: null,
                        typeCombinatorTypes: null
                      },
                      HazardousPackaging: {
                        description: "Description of hazardous packaging.",
                        xml: {
                          name: "HazardousPackaging",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "HazardousPackaging",
                        typeCombinatorTypes: null
                      },
                      HazardousPackageUnCode: {
                        description:
                          "Description of hazardous outer packaging.",
                        xml: {
                          name: "HazardousPackageUnCode",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "HazardousPackageUnCode",
                        typeCombinatorTypes: null
                      },
                      HazardousPackagingQuantity: {
                        description:
                          "Quantity of the outer packages.<br>**Default**: `0`",
                        xml: {
                          name: "HazardousPackagingQuantity",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "integer",
                        default: 0,
                        dataTypeDisplayText: "Integer",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "HazardousPackagingQuantity",
                        typeCombinatorTypes: null
                      },
                      PackageNotes: {
                        description: "Package level notes.",
                        xml: {
                          name: "PackageNotes",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "PackageNotes",
                        typeCombinatorTypes: null
                      },
                      AdditionalHandling: {
                        description:
                          "Indicates that extra handling measures are required when loading the package.<br>**Default**: `false`",
                        xml: {
                          name: "AdditionalHandling",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "boolean",
                        default: false,
                        dataTypeDisplayText: "Boolean",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "AdditionalHandling",
                        typeCombinatorTypes: null
                      },
                      AdditionalHandlingType: {
                        title: "AdditionalHandlingType",
                        description:
                          "Indicates the type of Additional Handling required for this shipment. Default value is (Oversize/Overweight).",
                        example: "Default",
                        xml: {
                          name: "AdditionalHandlingType",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        "x-enum-elements": [
                          {
                            name: "Default",
                            description: ""
                          },
                          {
                            name: "NoContainer",
                            description: ""
                          },
                          {
                            name: "Liquids",
                            description: ""
                          },
                          {
                            name: "NonStandardPackaging",
                            description: ""
                          },
                          {
                            name: "DiscretionaryItems",
                            description: ""
                          },
                          {
                            name: "Fragile",
                            description: ""
                          }
                        ],
                        type: "string",
                        enum: [
                          "Default",
                          "NoContainer",
                          "Liquids",
                          "NonStandardPackaging",
                          "DiscretionaryItems",
                          "Fragile",
                          null
                        ],
                        dataTypeDisplayText: "AdditionalHandlingTypeEnum",
                        dataTypeLink:
                          "/java/models/enumerations/additional-handling-type",
                        dataTypeMarkdown: null,
                        paramType: null,
                        typeCombinatorTypes: null
                      },
                      LargePackage: {
                        description:
                          "Indicates that package size exceeds carrier's normal limits.  Defaults to not large package if not submitted.<br>**Default**: `false`",
                        xml: {
                          name: "LargePackage",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "boolean",
                        default: false,
                        dataTypeDisplayText: "Boolean",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "LargePackage",
                        typeCombinatorTypes: null
                      },
                      DeliveryConfirmation: {
                        description:
                          "Type of delivery confirmation required for the package.  Defaults to none if not submitted.<br>**Constraints**: *Pattern*: `[1-6]|9`",
                        xml: {
                          name: "DeliveryConfirmation",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "integer",
                        dataTypeDisplayText: "Integer",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "DeliveryConfirmation",
                        typeCombinatorTypes: null
                      },
                      ContainerType: {
                        description:
                          "Type of containerType required for the package.  Defaults to none if not submitted.<br>**Default**: `0`",
                        xml: {
                          name: "ContainerType",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "integer",
                        default: 0,
                        dataTypeDisplayText: "Integer",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "ContainerType",
                        typeCombinatorTypes: null
                      },
                      ExcessiveLengthType: {
                        description:
                          "Type of excessive length required for the package.  Defaults to none if not submitted.<br>**Default**: `0`",
                        xml: {
                          name: "ExcessiveLengthType",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "integer",
                        default: 0,
                        dataTypeDisplayText: "Integer",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "ExcessiveLengthType",
                        typeCombinatorTypes: null
                      },
                      VerbalConfirmation: {
                        description:
                          "Indicates verbal confirmation required. Defaults to no verbal confirmation.<br>**Default**: `false`",
                        xml: {
                          name: "VerbalConfirmation",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "boolean",
                        default: false,
                        dataTypeDisplayText: "Boolean",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "VerbalConfirmation",
                        typeCombinatorTypes: null
                      },
                      FreightClass: {
                        description:
                          "The freight class of the package's content.",
                        xml: {
                          name: "FreightClass",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "FreightClass",
                        typeCombinatorTypes: null
                      },
                      NMFC: {
                        description:
                          "The National Motor Freight Classification of the package.",
                        xml: {
                          name: "NMFC",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "NMFC",
                        typeCombinatorTypes: null
                      },
                      PalletCount: {
                        description: "Number of pallets.<br>**Default**: `0`",
                        xml: {
                          name: "PalletCount",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "integer",
                        default: 0,
                        dataTypeDisplayText: "Integer",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "PalletCount",
                        typeCombinatorTypes: null
                      },
                      ItemsOnPallet: {
                        description:
                          "Number of items on the pallet.<br>**Default**: `0`",
                        xml: {
                          name: "ItemsOnPallet",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "integer",
                        default: 0,
                        dataTypeDisplayText: "Integer",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "ItemsOnPallet",
                        typeCombinatorTypes: null
                      },
                      NonStandardContainer: {
                        description:
                          "Indicates whether the package has non standard dimensions.  Defaults to standard dimensions if omitted.<br>**Default**: `false`",
                        xml: {
                          name: "NonStandardContainer",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "boolean",
                        default: false,
                        dataTypeDisplayText: "Boolean",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "NonStandardContainer",
                        typeCombinatorTypes: null
                      },
                      EmailNotification: {
                        description:
                          "Indicates whether an email notification should be sent to receiver's email address when package is shipped.  Defaults to not send email notification if omitted.<br>**Default**: `false`",
                        xml: {
                          name: "EmailNotification",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "boolean",
                        default: false,
                        dataTypeDisplayText: "Boolean",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "EmailNotification",
                        typeCombinatorTypes: null
                      },
                      NonFlatMachinable: {
                        description:
                          "Indicates whether the package is non-flat and machinable.  Defaults to not non-flat and machinable if omitted.<br>**Default**: `false`",
                        xml: {
                          name: "NonFlatMachinable",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "boolean",
                        default: false,
                        dataTypeDisplayText: "Boolean",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "NonFlatMachinable",
                        typeCombinatorTypes: null
                      },
                      NonMachinable: {
                        description:
                          "Indicates whether the package is non-machinable.  Defaults to machinable if omitted.<br>**Default**: `false`",
                        xml: {
                          name: "NonMachinable",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "boolean",
                        default: false,
                        dataTypeDisplayText: "Boolean",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "NonMachinable",
                        typeCombinatorTypes: null
                      },
                      NonRectangular: {
                        description:
                          "Indicates whether the package is non-rectangular.  Defaults to rectangular if omitted.<br>**Default**: `false`",
                        xml: {
                          name: "NonRectangular",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "boolean",
                        default: false,
                        dataTypeDisplayText: "Boolean",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "NonRectangular",
                        typeCombinatorTypes: null
                      },
                      Flat: {
                        description:
                          "Indicates whether the package is flat.  Defaults to not flat if omitted.<br>**Default**: `false`",
                        xml: {
                          name: "Flat",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "boolean",
                        default: false,
                        dataTypeDisplayText: "Boolean",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Flat",
                        typeCombinatorTypes: null
                      },
                      Registered: {
                        description:
                          "Indicates whether the package is to be sent via registered mail.  Defaults to not registered if omitted.<br>**Default**: `false`",
                        xml: {
                          name: "Registered",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "boolean",
                        default: false,
                        dataTypeDisplayText: "Boolean",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Registered",
                        typeCombinatorTypes: null
                      },
                      RestrictedDelivery: {
                        description:
                          "Indicates whether the package is to be sent using restricted delivery.  Defaults to not restricted if omitted.<br>**Default**: `false`",
                        xml: {
                          name: "RestrictedDelivery",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "boolean",
                        default: false,
                        dataTypeDisplayText: "Boolean",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "RestrictedDelivery",
                        typeCombinatorTypes: null
                      },
                      ReturnReceipt: {
                        description:
                          "Indicates whether a return receipt should be provided back to the shipper for this package.<br>**Default**: `false`",
                        xml: {
                          name: "ReturnReceipt",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "boolean",
                        default: false,
                        dataTypeDisplayText: "Boolean",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "ReturnReceipt",
                        typeCombinatorTypes: null
                      },
                      Certified: {
                        description:
                          "Indicates whether the package is to be sent via certified mail.  Defaults to not certified if omitted.<br>**Default**: `false`",
                        xml: {
                          name: "Certified",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "boolean",
                        default: false,
                        dataTypeDisplayText: "Boolean",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Certified",
                        typeCombinatorTypes: null
                      },
                      DryIceWeight: {
                        description:
                          "Weight of dry ice in the package.<br>**Default**: `0d`",
                        xml: {
                          name: "DryIceWeight",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "number",
                        default: 0,
                        dataTypeDisplayText: "Double",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "DryIceWeight",
                        typeCombinatorTypes: null
                      },
                      DryIceWeightUOM: {
                        description:
                          "Weight units of measure for the dry ice in the package.",
                        xml: {
                          name: "DryIceWeightUOM",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "DryIceWeightUOM",
                        typeCombinatorTypes: null
                      },
                      ERR: {
                        description:
                          "Indicates that Electronic Return Receipt is required.<br>**Default**: `false`",
                        xml: {
                          name: "ERR",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "boolean",
                        default: false,
                        dataTypeDisplayText: "Boolean",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "ERR",
                        typeCombinatorTypes: null
                      },
                      ReturnReceiptMerchandise: {
                        description:
                          "Indicates that Return Receipt Merchandise is required.<br>**Default**: `false`",
                        xml: {
                          name: "ReturnReceiptMerchandise",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "boolean",
                        default: false,
                        dataTypeDisplayText: "Boolean",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "ReturnReceiptMerchandise",
                        typeCombinatorTypes: null
                      },
                      ElectronicCertified: {
                        description:
                          "Indicates that Electronic Certified Mail service is required.<br>**Default**: `false`",
                        xml: {
                          name: "ElectronicCertified",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "boolean",
                        default: false,
                        dataTypeDisplayText: "Boolean",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "ElectronicCertified",
                        typeCombinatorTypes: null
                      },
                      UniqueIdentifier: {
                        description: "Unique Identifier for a package.",
                        xml: {
                          name: "UniqueIdentifier",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "UniqueIdentifier",
                        typeCombinatorTypes: null
                      },
                      Exchange: {
                        description:
                          "Indicates whether the parcel is a consignment swap parcel. Default value is false.<br>**Default**: `false`",
                        xml: {
                          name: "Exchange",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "boolean",
                        default: false,
                        dataTypeDisplayText: "Boolean",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "Exchange",
                        typeCombinatorTypes: null
                      },
                      AdmissibilityPackagingType: {
                        description:
                          "Specific FedEx Ground non-standard container type used for domestic and cross border shipments.",
                        xml: {
                          name: "AdmissibilityPackagingType",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "AdmissibilityPackagingType",
                        typeCombinatorTypes: null
                      }
                    },
                    dataTypeDisplayText: "PackageTemplate",
                    dataTypeLink: "/java/models/structures/package-template",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  },
                  Carrier: {
                    description:
                      "The id of the carrier to use for cartonization.",
                    xml: {
                      name: "Carrier",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Carrier",
                    typeCombinatorTypes: null
                  },
                  UserName: {
                    description:
                      "The username to use for the underlying cartonization request.",
                    xml: {
                      name: "UserName",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "UserName",
                    typeCombinatorTypes: null
                  },
                  ControlIdentifier: {
                    description:
                      "The control identifier to use for the underlying cartonization request.",
                    xml: {
                      name: "ControlIdentifier",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ControlIdentifier",
                    typeCombinatorTypes: null
                  },
                  DimensionsUOM: {
                    description:
                      "The units of measure for the box length, width and height.",
                    xml: {
                      name: "DimensionsUOM",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "DimensionsUOM",
                    typeCombinatorTypes: null
                  },
                  WeightUOM: {
                    description: "The units of measure for the unit weight.",
                    xml: {
                      name: "WeightUOM",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "WeightUOM",
                    typeCombinatorTypes: null
                  },
                  CurrencyCode: {
                    description: "Currency of the value of the comtent.",
                    xml: {
                      name: "CurrencyCode",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "CurrencyCode",
                    typeCombinatorTypes: null
                  },
                  LayFlat: {
                    description:
                      'Aligns all items laying flat. If possible, it may create a "brick-laying" pattern to increase stability.',
                    xml: {
                      name: "LayFlat",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "LayFlat",
                    typeCombinatorTypes: null
                  },
                  Corners: {
                    description:
                      "Only pack items at valid corner points of other items (optimal)",
                    xml: {
                      name: "Corners",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Corners",
                    typeCombinatorTypes: null
                  },
                  UsableSpace: {
                    description:
                      "Estimate of percentage space in boxes that is usable, i.e., not packing material.",
                    xml: {
                      name: "UsableSpace",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "number",
                    dataTypeDisplayText: "Double",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "UsableSpace",
                    typeCombinatorTypes: null
                  },
                  ReservedSpace: {
                    description:
                      "Space in boxes that is reserved, i.e., for packing material..",
                    xml: {
                      name: "ReservedSpace",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "number",
                    dataTypeDisplayText: "Double",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ReservedSpace",
                    typeCombinatorTypes: null
                  },
                  BoxTypeChoiceGoal: {
                    description:
                      "The objective to evaluate boxTypeChoices by. ‘lowest-cost’ minimizes price or volume cost of boxTypes selected, ‘most-items’ maximizes item count per box opened, i.e., fewest total boxes used.",
                    xml: {
                      name: "BoxTypeChoiceGoal",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "BoxTypeChoiceGoal",
                    typeCombinatorTypes: null
                  },
                  BoxTypeSets: {
                    id: "BoxTypeSets",
                    title: "BoxTypeSets",
                    description:
                      "predefined box types to be used, separated by commas. Will be overridden by boxTypes.",
                    xml: {
                      name: "BoxTypeSets",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "object",
                    properties: {
                      BoxTypeSet: {
                        description:
                          'Box type set. Acceptable values (as of November 2019) are: "fedex"–FedEx OneRate;"usps"–USPS Priority Flat Rate;“pallet"–full-, half-, and quarter-sized 48"x40” pallets.',
                        xml: {
                          name: "BoxTypeSet",
                          namespace: "https://www.wisetechglobal.com/",
                          prefix: "wtg",
                          attribute: false,
                          wrapped: false
                        },
                        type: "string",
                        dataTypeDisplayText: "String",
                        dataTypeMarkdown: null,
                        paramType: null,
                        title: "BoxTypeSet",
                        typeCombinatorTypes: null
                      }
                    },
                    dataTypeDisplayText: "BoxTypeSets",
                    dataTypeLink: "/java/models/structures/box-type-sets",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  },
                  Rules: {
                    description:
                      'a space-delimited array of packing rule strings. The only acceptable rule-type at the moment is "exclude", and it follows the form; exclude,[item-ref-id],[target-item-ref-id]',
                    xml: {
                      name: "Rules",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "Rules",
                    typeCombinatorTypes: null
                  }
                },
                required: [
                  "CartonizationGroupID",
                  "Contents",
                  "PackageTemplate"
                ],
                dataTypeDisplayText: "Cartonization",
                dataTypeLink: "/java/models/structures/cartonization",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              Rush: {
                description:
                  "Indicates whether shipment is to be rushed.<br>**Default**: `false`",
                xml: {
                  name: "Rush",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                default: false,
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "Rush",
                typeCombinatorTypes: null
              },
              FilterRateShopResult: {
                title: "FilterRateShopResult",
                description:
                  "Indicates what rates should be returned back to the client i.e. only successful rates, success and partial failures or all rates.<br>**Default**: `FilterRateShopResultEnum.SUCCESSONLY`",
                example: "SuccessOnly",
                xml: {
                  name: "FilterRateShopResult",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                "x-enum-elements": [
                  {
                    name: "SuccessOnly",
                    description: ""
                  },
                  {
                    name: "SuccessAndPartialSuccess",
                    description: ""
                  },
                  {
                    name: "All",
                    description: ""
                  }
                ],
                type: "string",
                enum: ["SuccessOnly", "SuccessAndPartialSuccess", "All"],
                dataTypeDisplayText: "FilterRateShopResultEnum",
                dataTypeLink:
                  "/java/models/enumerations/filter-rate-shop-result",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              Diagnostics: {
                id: "Diagnostics",
                title: "Diagnostics",
                description:
                  "Container for logging and diagnostic override elements.",
                xml: {
                  name: "Diagnostics",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  LogLevel: {
                    title: "LogLevel",
                    description:
                      "If provided overrides the level of diagnostic logging associated with the transaction.  If omitted the system configured value is used.",
                    example: "Error",
                    xml: {
                      name: "LogLevel",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    "x-enum-elements": [
                      {
                        name: "Error",
                        description: ""
                      },
                      {
                        name: "Warn",
                        description: ""
                      },
                      {
                        name: "Info",
                        description: ""
                      },
                      {
                        name: "Debug",
                        description: ""
                      },
                      {
                        name: "Trace",
                        description: ""
                      }
                    ],
                    type: "string",
                    enum: ["Error", "Warn", "Info", "Debug", "Trace"],
                    dataTypeDisplayText: "LogLevelEnum",
                    dataTypeLink: "/java/models/enumerations/log-level",
                    dataTypeMarkdown: null,
                    paramType: null,
                    typeCombinatorTypes: null
                  },
                  TraceThreshold: {
                    description:
                      "If provided overrides the threshold associated with trace level logging.  If omitted the system configured value is used.",
                    xml: {
                      name: "TraceThreshold",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "number",
                    dataTypeDisplayText: "Double",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "TraceThreshold",
                    typeCombinatorTypes: null
                  },
                  MaximumRowsToLog: {
                    description:
                      "If provided overrides the maximum number of rows to log using trace level logging.  If omitted the system configured value is used.",
                    xml: {
                      name: "MaximumRowsToLog",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "integer",
                    dataTypeDisplayText: "Integer",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "MaximumRowsToLog",
                    typeCombinatorTypes: null
                  }
                },
                dataTypeDisplayText: "Diagnostics",
                dataTypeLink: "/java/models/structures/diagnostics",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              Identification: {
                id: "Identification",
                title: "Identification",
                description: "Container for client identification elements.",
                xml: {
                  name: "Identification",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  WorkstationIdentifier: {
                    description:
                      "Unique identifier for the workstation that submitted the request, this node is automatically added if needed.",
                    xml: {
                      name: "WorkstationIdentifier",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "WorkstationIdentifier",
                    typeCombinatorTypes: null
                  },
                  RequestUserIdentifier: {
                    description:
                      "The underlying username that submitted the request, this node is automatically added if needed.",
                    xml: {
                      name: "RequestUserIdentifier",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "RequestUserIdentifier",
                    typeCombinatorTypes: null
                  }
                },
                required: ["WorkstationIdentifier"],
                dataTypeDisplayText: "Identification",
                dataTypeLink: "/java/models/structures/identification",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              SourceApplication: {
                id: "SourceApplication",
                title: "SourceApplication",
                description:
                  "Container for app specific source identification elements.",
                xml: {
                  name: "SourceApplication",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  ApplicationName: {
                    description:
                      "The named instance of the app used to create the transaction.",
                    xml: {
                      name: "ApplicationName",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ApplicationName",
                    typeCombinatorTypes: null
                  },
                  ApplicationBaseName: {
                    description:
                      "The base name of the app used to create the transaction.",
                    xml: {
                      name: "ApplicationBaseName",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ApplicationBaseName",
                    typeCombinatorTypes: null
                  },
                  ApplicationVersion: {
                    description: "The submitting apps version number.",
                    xml: {
                      name: "ApplicationVersion",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "string",
                    dataTypeDisplayText: "String",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "ApplicationVersion",
                    typeCombinatorTypes: null
                  }
                },
                dataTypeDisplayText: "SourceApplication",
                dataTypeLink: "/java/models/structures/source-application",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              },
              IsStamps: {
                description:
                  "Indicates that a rate is for a Stamps transaction.",
                xml: {
                  name: "IsStamps",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "boolean",
                dataTypeDisplayText: "Boolean",
                dataTypeMarkdown: null,
                paramType: null,
                title: "IsStamps",
                typeCombinatorTypes: null
              },
              PersonalShipping: {
                id: "PersonalShipping",
                title: "PersonalShipping",
                description: "Container for personal shipping elements.",
                xml: {
                  name: "PersonalShipping",
                  namespace: "https://www.wisetechglobal.com/",
                  prefix: "wtg",
                  attribute: false,
                  wrapped: false
                },
                type: "object",
                properties: {
                  PersonalShipment: {
                    description:
                      "Indicates that the rate is for a personal shipment.<br>**Default**: `false`",
                    xml: {
                      name: "PersonalShipment",
                      namespace: "https://www.wisetechglobal.com/",
                      prefix: "wtg",
                      attribute: false,
                      wrapped: false
                    },
                    type: "boolean",
                    default: false,
                    dataTypeDisplayText: "Boolean",
                    dataTypeMarkdown: null,
                    paramType: null,
                    title: "PersonalShipment",
                    typeCombinatorTypes: null
                  }
                },
                dataTypeDisplayText: "PersonalShipping",
                dataTypeLink: "/java/models/structures/personal-shipping",
                dataTypeMarkdown: null,
                paramType: null,
                typeCombinatorTypes: null
              }
            },
            required: ["UserName", "Carrier", "ServiceType", "Receiver"],
            dataTypeDisplayText: "PierbridgeRateRequest",
            dataTypeLink: "/java/models/structures/pierbridge-rate-request",
            dataTypeMarkdown: null,
            paramType: "Body",
            typeCombinatorTypes: null
          },
          apikey: {
            type: "string",
            dataTypeDisplayText: "String",
            dataTypeMarkdown: null,
            paramType: "Query",
            title: "apikey",
            typeCombinatorTypes: null
          }
        },
        required: ["body"]
      }
    },
    required: ["args"]
  },
  formData: {
    args: {}
  }
};
