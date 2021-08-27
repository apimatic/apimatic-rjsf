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
            id: "ASNCreateRequest",
            title: "body",
            type: "object",
            properties: {
              asnNumber: {
                description:
                  "Advance Shipment Notice number.<br>**Constraints**: *Maximum Length*: `25`",
                type: "string",
                maxLength: 25,
                dataTypeDisplayText: "string",
                dataTypeLink: "undefined",
                paramType: null,
                title: "AsnNumber"
              },
              asnCreatedDate: {
                description: "ASN Created date in source system.",
                type: "string",
                format: "date-time",
                dataTypeDisplayText: "DateTime",
                dataTypeLink: "undefined",
                paramType: null,
                title: "AsnCreatedDate"
              },
              warehouseCode: {
                title: "WarehouseCode",
                description:
                  "Description: \n  List of available warehouses within the OceanX platform.\n> Warehouses Codes:\n  * `ANC` - Arden, North Carolina\n  * `COH` - Columbus, Ohio\n  * `CO2` - Columbus SL, OH\n  * `FHR` - Foothill Ranch, CA\n> Note: All available warehouse codes may not be available for all clients or brands.",
                "x-enum-elements": [
                  {
                    name: "ANC",
                    description: ""
                  },
                  {
                    name: "COH",
                    description: ""
                  },
                  {
                    name: "CO2",
                    description: ""
                  },
                  {
                    name: "FHR",
                    description: ""
                  }
                ],
                type: "string",
                enum: ["ANC", "COH", "CO2", "FHR"],
                dataTypeDisplayText: "Models.WarehousesEnum",
                dataTypeLink:
                  "#/net-standard-library/models/enumerations/warehouses",
                paramType: null
              },
              lineItems: {
                description:
                  "**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `20`",
                type: "array",
                items: {
                  id: "ASNProduct",
                  title: "ASNProduct",
                  type: "object",
                  properties: {
                    productCode: {
                      description:
                        "Product Code.<br>**Constraints**: *Maximum Length*: `18`",
                      type: "string",
                      maxLength: 18,
                      dataTypeDisplayText: "string",
                      dataTypeLink: "undefined",
                      paramType: null,
                      title: "ProductCode"
                    },
                    quantity: {
                      description: "Quantity of the items in the shipment.",
                      type: "integer",
                      dataTypeDisplayText: "int",
                      dataTypeLink: "undefined",
                      paramType: null,
                      title: "Quantity"
                    },
                    uom: {
                      title: "Uom",
                      description:
                        "Description: \n  Used to indicate the product shipment Unit of Measure.\n> Shipment Mode Types:\n  * `EA` = Each\n  * `CS` = Case",
                      "x-enum-elements": [
                        {
                          name: "EA",
                          description: ""
                        },
                        {
                          name: "CS",
                          description: ""
                        }
                      ],
                      type: "string",
                      enum: ["EA", "CS"],
                      dataTypeDisplayText: "Models.ASNUOMEnum",
                      dataTypeLink:
                        "#/net-standard-library/models/enumerations/asnuom",
                      paramType: null
                    },
                    isActive: {
                      type: "boolean",
                      description: "undefined",
                      dataTypeDisplayText: "bool",
                      dataTypeLink: "undefined",
                      paramType: null,
                      title: "IsActive"
                    },
                    lotNumber: {
                      description:
                        "Lot number of the item in the box.<br>**Constraints**: *Maximum Length*: `25`",
                      type: "string",
                      maxLength: 25,
                      dataTypeDisplayText: "string",
                      dataTypeLink: "undefined",
                      paramType: null,
                      title: "LotNumber"
                    },
                    purchaseOrderNumber: {
                      description:
                        "Purchase order number<br>**Constraints**: *Maximum Length*: `25`",
                      type: "string",
                      maxLength: 25,
                      dataTypeDisplayText: "string",
                      dataTypeLink: "undefined",
                      paramType: null,
                      title: "PurchaseOrderNumber"
                    },
                    sourceLineNumber: {
                      description:
                        "Line number in the source system.<br>**Constraints**: *Maximum Length*: `50`",
                      type: "string",
                      maxLength: 50,
                      dataTypeDisplayText: "string",
                      dataTypeLink: "undefined",
                      paramType: null,
                      title: "SourceLineNumber"
                    },
                    sourceRevisionNumber: {
                      type: "string",
                      maxLength: 25,
                      description: "**Constraints**: *Maximum Length*: `25`",
                      dataTypeDisplayText: "string",
                      dataTypeLink: "undefined",
                      paramType: null,
                      title: "SourceRevisionNumber"
                    },
                    expiryDate: {
                      type: "string",
                      format: "date-time",
                      description: "undefined",
                      dataTypeDisplayText: "DateTime?",
                      dataTypeLink: "undefined",
                      paramType: null,
                      title: "ExpiryDate"
                    },
                    productOptions: {
                      description: "undefined",
                      type: "array",
                      items: {
                        id: "option",
                        title: "option",
                        type: "object",
                        properties: {
                          type: {
                            description:
                              "Type will used to define the custom data type value. For example - string, decimal, integer, etc.",
                            type: "string",
                            dataTypeDisplayText: "string",
                            dataTypeLink: "undefined",
                            paramType: null,
                            title: "Type"
                          },
                          key: {
                            description: "Custom key to identify an attribute",
                            type: "string",
                            dataTypeDisplayText: "string",
                            dataTypeLink: "undefined",
                            paramType: null,
                            title: "Key"
                          },
                          value: {
                            description: "Custom value action for an attribute",
                            type: "string",
                            dataTypeDisplayText: "string",
                            dataTypeLink: "undefined",
                            paramType: null,
                            title: "MValue"
                          }
                        },
                        dataTypeDisplayText: "Option",
                        dataTypeLink:
                          "#/net-standard-library/models/structures/option"
                      },
                      dataTypeDisplayText: "List<Models.Option>",
                      dataTypeLink:
                        "#/net-standard-library/models/structures/option",
                      paramType: null,
                      title: "ProductOptions"
                    }
                  },
                  required: ["productCode", "quantity", "uom", "isActive"],
                  dataTypeDisplayText: "ASN Product",
                  dataTypeLink:
                    "#/net-standard-library/models/structures/asn-product"
                },
                minItems: 1,
                maxItems: 20,
                dataTypeDisplayText: "List<Models.ASNProduct>",
                dataTypeLink:
                  "#/net-standard-library/models/structures/asn-product",
                paramType: null,
                title: "LineItems"
              },
              shipFrom: {
                id: "address",
                title: "ShipFrom",
                description:
                  "The address object model definition that is used.",
                type: "object",
                properties: {
                  firstName: {
                    description:
                      "Customer's first name<br>**Constraints**: *Maximum Length*: `30`",
                    example: "John",
                    type: "string",
                    maxLength: 30,
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "FirstName"
                  },
                  lastName: {
                    description:
                      "Customer's last name<br>**Constraints**: *Maximum Length*: `30`",
                    example: "Smith",
                    type: "string",
                    maxLength: 30,
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "LastName"
                  },
                  address1: {
                    description:
                      "Customer's address line number one<br>**Constraints**: *Maximum Length*: `40`",
                    example: "100 Main Street",
                    type: "string",
                    maxLength: 40,
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "Address1"
                  },
                  city: {
                    description:
                      "Customer's City<br>**Constraints**: *Maximum Length*: `40`",
                    example: "Fantasyland",
                    type: "string",
                    maxLength: 40,
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "City"
                  },
                  state: {
                    description:
                      "Customer's state. US and Canadian addresses use 2-character state/province codes.<br>**Constraints**: *Maximum Length*: `2`",
                    example: "CA",
                    type: "string",
                    maxLength: 2,
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "State"
                  },
                  postalCode: {
                    description:
                      "Customer's Postal code or Zip code depending on Country. US should be 5 or 9 digits and Canada format is 7 characters (aNa NaN)<br>**Constraints**: *Maximum Length*: `7`",
                    example: "99999",
                    type: "string",
                    maxLength: 7,
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "PostalCode"
                  },
                  countryCode: {
                    description:
                      "Customer's addresses Country Code. Country Code format of ISO 3166<br>**Constraints**: *Maximum Length*: `2`",
                    example: "US",
                    type: "string",
                    maxLength: 2,
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "CountryCode"
                  },
                  address2: {
                    description:
                      "Customer's address line number two<br>**Constraints**: *Maximum Length*: `40`",
                    example: "Apt 100",
                    type: "string",
                    maxLength: 40,
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "Address2"
                  },
                  address3: {
                    description:
                      "Customer's address line number three<br>**Constraints**: *Maximum Length*: `40`",
                    example: "Upstairs",
                    type: "string",
                    maxLength: 40,
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "Address3"
                  },
                  phoneNumber: {
                    description: "Customer's phone number",
                    example: "999 999 9999",
                    type: "string",
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "PhoneNumber"
                  },
                  email: {
                    description:
                      "Customer's email address<br>**Constraints**: *Maximum Length*: `50`",
                    example: "test@test.com",
                    type: "string",
                    maxLength: 50,
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "Email"
                  }
                },
                required: [
                  "firstName",
                  "lastName",
                  "address1",
                  "city",
                  "state",
                  "postalCode",
                  "countryCode"
                ],
                dataTypeDisplayText: "Models.Address",
                dataTypeLink:
                  "#/net-standard-library/models/structures/address",
                paramType: null
              },
              subDivision: {
                type: "string",
                maxLength: 25,
                description: "**Constraints**: *Maximum Length*: `25`",
                dataTypeDisplayText: "string",
                dataTypeLink: "undefined",
                paramType: null,
                title: "SubDivision"
              },
              sourceRevisionNumber: {
                type: "string",
                maxLength: 25,
                description: "**Constraints**: *Maximum Length*: `25`",
                dataTypeDisplayText: "string",
                dataTypeLink: "undefined",
                paramType: null,
                title: "SourceRevisionNumber"
              },
              isPurchaseOrder: {
                type: "boolean",
                description: "undefined",
                dataTypeDisplayText: "bool?",
                dataTypeLink: "undefined",
                paramType: null,
                title: "IsPurchaseOrder"
              },
              expectedArrivalDate: {
                description:
                  "Date on which the Advance Shipping Notice is expected to arrive at the OceanX warehouse.",
                type: "string",
                format: "date-time",
                dataTypeDisplayText: "DateTime?",
                dataTypeLink: "undefined",
                paramType: null,
                title: "ExpectedArrivalDate"
              },
              shipment: {
                id: "ASNShipment",
                title: "Shipment",
                type: "object",
                properties: {
                  trackingNumber: {
                    description:
                      "Tracking number for the shipment.<br>**Constraints**: *Maximum Length*: `25`",
                    type: "string",
                    maxLength: 25,
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "TrackingNumber"
                  },
                  sealNumber: {
                    description:
                      "This is the unique number associated with the seal which is attached to trailer to ensure the it is not opened until reaching its destination.<br>**Constraints**: *Maximum Length*: `25`",
                    type: "string",
                    maxLength: 25,
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "SealNumber"
                  }
                },
                description: "undefined",
                dataTypeDisplayText: "Models.ASNShipment",
                dataTypeLink:
                  "#/net-standard-library/models/structures/asn-shipment",
                paramType: null
              },
              shipTo: {
                id: "address",
                title: "ShipTo",
                description:
                  "The address object model definition that is used.",
                type: "object",
                properties: {
                  firstName: {
                    description:
                      "Customer's first name<br>**Constraints**: *Maximum Length*: `30`",
                    example: "John",
                    type: "string",
                    maxLength: 30,
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "FirstName"
                  },
                  lastName: {
                    description:
                      "Customer's last name<br>**Constraints**: *Maximum Length*: `30`",
                    example: "Smith",
                    type: "string",
                    maxLength: 30,
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "LastName"
                  },
                  address1: {
                    description:
                      "Customer's address line number one<br>**Constraints**: *Maximum Length*: `40`",
                    example: "100 Main Street",
                    type: "string",
                    maxLength: 40,
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "Address1"
                  },
                  city: {
                    description:
                      "Customer's City<br>**Constraints**: *Maximum Length*: `40`",
                    example: "Fantasyland",
                    type: "string",
                    maxLength: 40,
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "City"
                  },
                  state: {
                    description:
                      "Customer's state. US and Canadian addresses use 2-character state/province codes.<br>**Constraints**: *Maximum Length*: `2`",
                    example: "CA",
                    type: "string",
                    maxLength: 2,
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "State"
                  },
                  postalCode: {
                    description:
                      "Customer's Postal code or Zip code depending on Country. US should be 5 or 9 digits and Canada format is 7 characters (aNa NaN)<br>**Constraints**: *Maximum Length*: `7`",
                    example: "99999",
                    type: "string",
                    maxLength: 7,
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "PostalCode"
                  },
                  countryCode: {
                    description:
                      "Customer's addresses Country Code. Country Code format of ISO 3166<br>**Constraints**: *Maximum Length*: `2`",
                    example: "US",
                    type: "string",
                    maxLength: 2,
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "CountryCode"
                  },
                  address2: {
                    description:
                      "Customer's address line number two<br>**Constraints**: *Maximum Length*: `40`",
                    example: "Apt 100",
                    type: "string",
                    maxLength: 40,
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "Address2"
                  },
                  address3: {
                    description:
                      "Customer's address line number three<br>**Constraints**: *Maximum Length*: `40`",
                    example: "Upstairs",
                    type: "string",
                    maxLength: 40,
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "Address3"
                  },
                  phoneNumber: {
                    description: "Customer's phone number",
                    example: "999 999 9999",
                    type: "string",
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "PhoneNumber"
                  },
                  email: {
                    description:
                      "Customer's email address<br>**Constraints**: *Maximum Length*: `50`",
                    example: "test@test.com",
                    type: "string",
                    maxLength: 50,
                    dataTypeDisplayText: "string",
                    dataTypeLink: "undefined",
                    paramType: null,
                    title: "Email"
                  }
                },
                required: [
                  "firstName",
                  "lastName",
                  "address1",
                  "city",
                  "state",
                  "postalCode",
                  "countryCode"
                ],
                dataTypeDisplayText: "Models.Address",
                dataTypeLink:
                  "#/net-standard-library/models/structures/address",
                paramType: null
              },
              recipientNote: {
                description:
                  "Can be used to provide instructions to recipient on how to process and store received inventory.<br>**Constraints**: *Maximum Length*: `2000`",
                type: "string",
                maxLength: 2000,
                dataTypeDisplayText: "string",
                dataTypeLink: "undefined",
                paramType: null,
                title: "RecipientNote"
              },
              customOptions: {
                description: "undefined",
                type: "array",
                items: {
                  id: "option",
                  title: "option",
                  type: "object",
                  properties: {
                    type: {
                      description:
                        "Type will used to define the custom data type value. For example - string, decimal, integer, etc.",
                      type: "string",
                      dataTypeDisplayText: "string",
                      dataTypeLink: "undefined",
                      paramType: null,
                      title: "Type"
                    },
                    key: {
                      description: "Custom key to identify an attribute",
                      type: "string",
                      dataTypeDisplayText: "string",
                      dataTypeLink: "undefined",
                      paramType: null,
                      title: "Key"
                    },
                    value: {
                      description: "Custom value action for an attribute",
                      type: "string",
                      dataTypeDisplayText: "string",
                      dataTypeLink: "undefined",
                      paramType: null,
                      title: "MValue"
                    }
                  },
                  dataTypeDisplayText: "Option",
                  dataTypeLink:
                    "#/net-standard-library/models/structures/option"
                },
                dataTypeDisplayText: "List<Models.Option>",
                dataTypeLink: "#/net-standard-library/models/structures/option",
                paramType: null,
                title: "CustomOptions"
              }
            },
            required: [
              "asnNumber",
              "asnCreatedDate",
              "warehouseCode",
              "lineItems",
              "shipFrom"
            ],
            description: "undefined",
            dataTypeDisplayText: "Models.ASNCreateRequest",
            dataTypeLink:
              "#/net-standard-library/models/structures/asn-create-request",
            paramType: "Body"
          }
        },
        required: ["body"]
      }
    },
    required: ["args"]
  },
  formData: {}
};
