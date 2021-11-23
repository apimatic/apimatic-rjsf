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
            id: "FullupdateImagesRequest",
            title: "body",
            example: {
              data: {
                productId: 1234893572,
                images: [
                  {
                    url:
                      "http://aff.bstatic.com/images/hotel/max500/110/11069097.jpg",
                    tags: [1, 2, 3]
                  },
                  {
                    url:
                      "http://aff.bstatic.com/images/hotel/max500/110/11069097.jpg",
                    tags: [1, 2, 3]
                  }
                ]
              }
            },
            type: "object",
            properties: {
              data: {
                id: "ImagesURLForFullUpdate",
                title: "Data",
                description:
                  "Model with one image URL for one property used for inserting new image",
                example: {
                  productId: 1234893572,
                  images: [
                    {
                      url:
                        "http://aff.bstatic.com/images/hotel/max500/110/11069097.jpg",
                      tags: [1, 2, 3]
                    },
                    {
                      url:
                        "http://aff.bstatic.com/images/hotel/max500/110/11069097.jpg",
                      tags: [1, 2, 3]
                    }
                  ]
                },
                type: "object",
                properties: {
                  productId: {
                    description: "Id of the product",
                    type: "integer",
                    dataTypeDisplayText: "int",
                    paramType: null,
                    title: "ProductId"
                  },
                  images: {
                    type: "array",
                    items: {
                      id: "AddImage",
                      title: "AddImage",
                      description: "Object for adding images",
                      example: {
                        url:
                          "http://aff.bstatic.com/images/hotel/max500/110/11069098.jpg",
                        tags: [4, 5, 6]
                      },
                      type: "object",
                      properties: {
                        url: {
                          description:
                            "URL of the image. Please send normal URL, like https://example.com/image01.jpg, and do not use some GET parameters in URL, otherwise image might not be imported.",
                          example: "https://example.com/image01.jpg",
                          type: "string",
                          dataTypeDisplayText: "string",
                          paramType: null,
                          title: "Url"
                        },
                        tags: {
                          description:
                            "Image tag. Tags codes are given in Appendix.",
                          type: "array",
                          items: {
                            title: "ImageTagsEnum",
                            example: 1,
                            "x-enum-elements": [
                              {
                                name: "Enum_1",
                                description: "Shower"
                              },
                              {
                                name: "Enum_2",
                                description: "Toilet"
                              },
                              {
                                name: "Enum_3",
                                description: "Property building"
                              },
                              {
                                name: "Enum_4",
                                description: "patio"
                              },
                              {
                                name: "Enum_5",
                                description: "Nearby landmark"
                              },
                              {
                                name: "Enum_6",
                                description: "Staff"
                              },
                              {
                                name: "Enum_7",
                                description: "Restaurant/places to eat"
                              },
                              {
                                name: "Enum_8",
                                description: "Communal lounge/ TV room"
                              },
                              {
                                name: "Enum_10",
                                description: "Facade/entrance"
                              },
                              {
                                name: "Enum_43",
                                description: "People"
                              },
                              {
                                name: "Enum_11",
                                description: "Spring"
                              },
                              {
                                name: "Enum_13",
                                description: "Bed"
                              },
                              {
                                name: "Enum_14",
                                description: "Off site"
                              },
                              {
                                name: "Enum_37",
                                description: "Food close-up"
                              },
                              {
                                name: "Enum_41",
                                description: "Day"
                              },
                              {
                                name: "Enum_42",
                                description: "Night"
                              },
                              {
                                name: "Enum_50",
                                description: "Property logo or sign"
                              },
                              {
                                name: "Enum_55",
                                description: "Neighbourhood"
                              },
                              {
                                name: "Enum_61",
                                description: "Natural landscape"
                              },
                              {
                                name: "Enum_70",
                                description: "Activities"
                              },
                              {
                                name: "Enum_74",
                                description: "Bird's eye view"
                              },
                              {
                                name: "Enum_81",
                                description: "Winter"
                              },
                              {
                                name: "Enum_82",
                                description: "Summer"
                              },
                              {
                                name: "Enum_87",
                                description: "BBQ facilities"
                              },
                              {
                                name: "Enum_89",
                                description: "Billiard"
                              },
                              {
                                name: "Enum_90",
                                description: "Bowling"
                              },
                              {
                                name: "Enum_94",
                                description: "Casino"
                              },
                              {
                                name: "Enum_95",
                                description: "Place of worship"
                              },
                              {
                                name: "Enum_96",
                                description: "Children play ground"
                              },
                              {
                                name: "Enum_97",
                                description: "Darts"
                              },
                              {
                                name: "Enum_100",
                                description: "Fishing"
                              },
                              {
                                name: "Enum_102",
                                description: "Game Room"
                              },
                              {
                                name: "Enum_103",
                                description: "Garden"
                              },
                              {
                                name: "Enum_104",
                                description: "Golf course"
                              },
                              {
                                name: "Enum_106",
                                description: "Horse-riding"
                              },
                              {
                                name: "Enum_107",
                                description: "Hot Spring Bath"
                              },
                              {
                                name: "Enum_141",
                                description: "Table tennis"
                              },
                              {
                                name: "Enum_108",
                                description: "Hot Tub"
                              },
                              {
                                name: "Enum_112",
                                description: "Karaoke"
                              },
                              {
                                name: "Enum_113",
                                description: "Library"
                              },
                              {
                                name: "Enum_114",
                                description: "Massage"
                              },
                              {
                                name: "Enum_115",
                                description: "Minigolf"
                              },
                              {
                                name: "Enum_116",
                                description: "Nightclub / DJ"
                              },
                              {
                                name: "Enum_124",
                                description: "Sauna"
                              },
                              {
                                name: "Enum_125",
                                description: "On-site shops"
                              },
                              {
                                name: "Enum_128",
                                description: "Ski School"
                              },
                              {
                                name: "Enum_131",
                                description: "Skiing"
                              },
                              {
                                name: "Enum_137",
                                description: "Squash"
                              },
                              {
                                name: "Enum_133",
                                description: "Snorkeling"
                              },
                              {
                                name: "Enum_134",
                                description: "Solarium"
                              },
                              {
                                name: "Enum_143",
                                description: "Steam room"
                              },
                              {
                                name: "Enum_153",
                                description: "Bathroom"
                              },
                              {
                                name: "Enum_154",
                                description: "TV and multimedia"
                              },
                              {
                                name: "Enum_155",
                                description: "Coffee/tea facilities"
                              },
                              {
                                name: "Enum_156",
                                description: "View (from property/room)"
                              },
                              {
                                name: "Enum_157",
                                description: "Balcony/Terrace"
                              },
                              {
                                name: "Enum_158",
                                description: "Kitchen or kitchenette"
                              },
                              {
                                name: "Enum_159",
                                description: "Living room"
                              },
                              {
                                name: "Enum_160",
                                description: "Lobby or reception"
                              },
                              {
                                name: "Enum_161",
                                description: "Lounge or bar"
                              },
                              {
                                name: "Enum_164",
                                description: "Spa and wellness centre/facili"
                              },
                              {
                                name: "Enum_165",
                                description: "Fitness centre/facilities"
                              },
                              {
                                name: "Enum_167",
                                description: "Food and drinks"
                              },
                              {
                                name: "Enum_172",
                                description: "Other"
                              },
                              {
                                name: "Enum_173",
                                description: "Photo of the whole room"
                              },
                              {
                                name: "Enum_177",
                                description: "Business facilities"
                              },
                              {
                                name: "Enum_178",
                                description: "Banquet/Function facilities"
                              },
                              {
                                name: "Enum_179",
                                description: "Decorative detail"
                              },
                              {
                                name: "Enum_182",
                                description: "Seating area"
                              },
                              {
                                name: "Enum_183",
                                description: "Floor plan"
                              },
                              {
                                name: "Enum_184",
                                description: "Dining area"
                              },
                              {
                                name: "Enum_185",
                                description: "Beach"
                              },
                              {
                                name: "Enum_186",
                                description: "Aqua park"
                              },
                              {
                                name: "Enum_187",
                                description: "Tennis court"
                              },
                              {
                                name: "Enum_188",
                                description: "Windsurfing"
                              },
                              {
                                name: "Enum_189",
                                description: "Canoeing"
                              },
                              {
                                name: "Enum_190",
                                description: "Hiking"
                              },
                              {
                                name: "Enum_191",
                                description: "Cycling"
                              },
                              {
                                name: "Enum_192",
                                description: "Diving"
                              },
                              {
                                name: "Enum_193",
                                description: "Kids's club"
                              },
                              {
                                name: "Enum_194",
                                description: "Evening entertainment"
                              },
                              {
                                name: "Enum_197",
                                description: "Logo/Certificate/Sign"
                              },
                              {
                                name: "Enum_198",
                                description: "Animals"
                              },
                              {
                                name: "Enum_199",
                                description: "Bedroom"
                              },
                              {
                                name: "Enum_204",
                                description: "Communal kitchen"
                              },
                              {
                                name: "Enum_205",
                                description: "Autumn"
                              },
                              {
                                name: "Enum_240",
                                description: "On site"
                              },
                              {
                                name: "Enum_241",
                                description: "Meeting/conference room"
                              },
                              {
                                name: "Enum_242",
                                description: "Food"
                              },
                              {
                                name: "Enum_245",
                                description: "Text overlay"
                              },
                              {
                                name: "Enum_246",
                                description: "Pets"
                              },
                              {
                                name: "Enum_247",
                                description: "Guests"
                              },
                              {
                                name: "Enum_248",
                                description: "City view"
                              },
                              {
                                name: "Enum_249",
                                description: "Garden view"
                              },
                              {
                                name: "Enum_250",
                                description: "Lake view"
                              },
                              {
                                name: "Enum_251",
                                description: "Landmark view"
                              },
                              {
                                name: "Enum_252",
                                description: "Mountain view"
                              },
                              {
                                name: "Enum_253",
                                description: "Pool view"
                              },
                              {
                                name: "Enum_254",
                                description: "River view"
                              },
                              {
                                name: "Enum_255",
                                description: "Sea view"
                              },
                              {
                                name: "Enum_256",
                                description: "Street view"
                              },
                              {
                                name: "Enum_257",
                                description: "Area and facilities"
                              },
                              {
                                name: "Enum_258",
                                description: "Supermarket/grocery shop"
                              },
                              {
                                name: "Enum_259",
                                description: "Shopping Area"
                              },
                              {
                                name: "Enum_260",
                                description: "Swimming pool"
                              },
                              {
                                name: "Enum_261",
                                description: "Sports"
                              },
                              {
                                name: "Enum_262",
                                description: "Entertainment"
                              },
                              {
                                name: "Enum_263",
                                description: "Meals"
                              },
                              {
                                name: "Enum_264",
                                description: "Breakfast"
                              },
                              {
                                name: "Enum_265",
                                description: "Continental breakfast"
                              },
                              {
                                name: "Enum_266",
                                description: "Buffet breakfast"
                              },
                              {
                                name: "Enum_267",
                                description: "Asian breakfast"
                              },
                              {
                                name: "Enum_268",
                                description: "Italian breakfast"
                              },
                              {
                                name: "Enum_269",
                                description: "English/Irish breakfast"
                              },
                              {
                                name: "Enum_270",
                                description: "American breakfast"
                              },
                              {
                                name: "Enum_271",
                                description: "Lunch"
                              },
                              {
                                name: "Enum_272",
                                description: "Dinner"
                              },
                              {
                                name: "Enum_273",
                                description: "Drinks"
                              },
                              {
                                name: "Enum_274",
                                description: "Alcoholic drinks"
                              },
                              {
                                name: "Enum_275",
                                description: "Non alcoholic drinks"
                              },
                              {
                                name: "Enum_276",
                                description: "Seasons"
                              },
                              {
                                name: "Enum_277",
                                description: "Time of day"
                              },
                              {
                                name: "Enum_278",
                                description: "Location"
                              },
                              {
                                name: "Enum_279",
                                description: "Sunrise"
                              },
                              {
                                name: "Enum_280",
                                description: "Sunset"
                              },
                              {
                                name: "Enum_281",
                                description: "children"
                              },
                              {
                                name: "Enum_282",
                                description: "young children"
                              },
                              {
                                name: "Enum_283",
                                description: "older children"
                              },
                              {
                                name: "Enum_284",
                                description: "group of guests"
                              },
                              {
                                name: "Enum_285",
                                description: "cot"
                              },
                              {
                                name: "Enum_286",
                                description: "bunk bed"
                              },
                              {
                                name: "Enum_287",
                                description: "Certificate/Award"
                              },
                              {
                                name: "Enum_288",
                                description: "ADAM"
                              },
                              {
                                name: "Enum_289",
                                description: "Open Air Bath"
                              },
                              {
                                name: "Enum_290",
                                description: "Public Bath"
                              },
                              {
                                name: "Enum_291",
                                description: "Family"
                              }
                            ],
                            type: "integer",
                            enum: [
                              1,
                              2,
                              3,
                              4,
                              5,
                              6,
                              7,
                              8,
                              10,
                              43,
                              11,
                              13,
                              14,
                              37,
                              41,
                              42,
                              50,
                              55,
                              61,
                              70,
                              74,
                              81,
                              82,
                              87,
                              89,
                              90,
                              94,
                              95,
                              96,
                              97,
                              100,
                              102,
                              103,
                              104,
                              106,
                              107,
                              141,
                              108,
                              112,
                              113,
                              114,
                              115,
                              116,
                              124,
                              125,
                              128,
                              131,
                              137,
                              133,
                              134,
                              143,
                              153,
                              154,
                              155,
                              156,
                              157,
                              158,
                              159,
                              160,
                              161,
                              164,
                              165,
                              167,
                              172,
                              173,
                              177,
                              178,
                              179,
                              182,
                              183,
                              184,
                              185,
                              186,
                              187,
                              188,
                              189,
                              190,
                              191,
                              192,
                              193,
                              194,
                              197,
                              198,
                              199,
                              204,
                              205,
                              240,
                              241,
                              242,
                              245,
                              246,
                              247,
                              248,
                              249,
                              250,
                              251,
                              252,
                              253,
                              254,
                              255,
                              256,
                              257,
                              258,
                              259,
                              260,
                              261,
                              262,
                              263,
                              264,
                              265,
                              266,
                              267,
                              268,
                              269,
                              270,
                              271,
                              272,
                              273,
                              274,
                              275,
                              276,
                              277,
                              278,
                              279,
                              280,
                              281,
                              282,
                              283,
                              284,
                              285,
                              286,
                              287,
                              288,
                              289,
                              290,
                              291
                            ],
                            dataTypeDisplayText: "Image Tags Enum",
                            dataTypeLink:
                              "/net-standard-library/models/enumerations/image-tags-enum"
                          },
                          dataTypeDisplayText: "List<Models.ImageTagsEnum>",
                          dataTypeLink:
                            "/net-standard-library/models/enumerations/image-tags-enum",
                          paramType: null,
                          title: "Tags"
                        }
                      },
                      required: ["url"],
                      dataTypeDisplayText: "Add Image",
                      dataTypeLink:
                        "/net-standard-library/models/structures/add-image"
                    },
                    dataTypeDisplayText: "List<Models.AddImage>",
                    dataTypeLink:
                      "/net-standard-library/models/structures/add-image",
                    paramType: null,
                    title: "Images"
                  }
                },
                required: ["productId", "images"],
                dataTypeDisplayText: "Models.ImagesURLForFullUpdate",
                dataTypeLink:
                  "/net-standard-library/models/structures/images-url-for-full-update",
                paramType: null
              }
            },
            required: ["data"],
            dataTypeDisplayText: "Models.FullupdateImagesRequest",
            dataTypeLink:
              "/net-standard-library/models/structures/fullupdate-images-request",
            paramType: "Body"
          }
        },
        required: ["body"]
      }
    },
    required: ["args"]
  },
  formData: {
    args: {
      body: {
        data: {
          productId: 1234893572,
          images: [
            {
              url:
                "http://aff.bstatic.com/images/hotel/max500/110/11069097.jpg",
              tags: [1, 2, 3]
            },
            {
              url:
                "http://aff.bstatic.com/images/hotel/max500/110/11069097.jpg",
              tags: [1, 2, 3]
            }
          ]
        }
      }
    }
  }
};
