const textContent = {
  app: {
    title: "vCalculator",
    synopsis: "A suite of calculators for the sales, manufacturing, and installation team.",
  },
  departments: [
    {
      key: "sales",
      name: "Sales",
      preview: "Quick tools for quoting and sales calculations.",
      calculators: [
        {
            key: "buildOut",
            name: "B/O Door Calculator",
            synopsis: "Calculate the overall size of a build out door on first measure."
        },
        {
            key: "internalDoor",
            name: "Internal Door Calculator",
            synopsis: "Calculate the overall size of an internal door on first measure." 
        },
        // ...add more calculators for Sales here
      ]
    },
    {
      key: "manufacturer",
      name: "Manufacturer",
      preview: "Precision calculators for production and assembly.",
      calculators: [
        {
            key: "crimMeshSize",
            name: "Crim Mesh Size Calculator",
            synopsis: "Calculate mesh sizes for Crim doors."
        },
        {
            key: "screenDoorCutting",
            name: "Main Door Cutting/Making Calculator",
            synopsis: "Calculate cutting and making sizes for Lifestyle or Crim doors."
        },
        {
            key: "sliderDoorCutting",
            name: "Main Slider Cutting/Making Calculator",
            synopsis: "Calculate cutting and making sizes for Lifestyle or Crim slider doors."
        },
        // ...add more calculators for Manufacturer here
      ]
    },
    {
      key: "installer",
      name: "Installer",
      preview: "Installation calculators for on-site work.",
      calculators: [
        {
            key: "holeSpacing",
            name: "Even Hole Spacing",
            synopsis: "Calculate even spacing for holes in products.",
        },
        {
            key: "boNesting",
            name: "B/O Nesting Channel Spacing",
            synopsis: "Calculate Nesting channel spacing for a B/O Door."
        },
        {
            key: "pleatedScreen",
            name: "Pleated Screen Fixings",
            synopsis: "Calculate evenly spaced pleated screen fixings for installation."
        },
        {
            key: "zipTrack",
            name: "Ziptrak Spring Tension/Turns",
            synopsis: "Determine the amount of turns for spring tension in Ziptrak systems."
        },
        // ...add more calculators for Installer here
      ]
    },
    
    // ----- Product Info -----
    {
      key: "product",
      name: "Product Info",
      preview: "Useful information about our products.",
      product: [
        {
            key: "doors",
            name: "Doors",
            synopsis: "Information about all Lifestyle and Crimsafe doors and windows.",
            details: [
              {
                heading: "Overview",
                content: "Lifestyle and Crim doors are designed for security and aesthetics. Available in multiple finishes."
              },
              {
                heading: "Product Info",
                content: [
                // Main Features and selling points of the product
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                heading: "Product Specs",
                content: [
                // links to pdfs of the products sepcs
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                  heading: "Links",
                  content: [
                  // hpyer links o products website and other useful links 
                    "Placeholder",
                    "Placeholder",
                    "Placeholder"
                  ]
              }
              // Add more sections as needed
            ]
        },
        {
            key: "sliders",
            name: "Sliders",
            synopsis: "Information about all Lifestyle and Crim Sliders.",
            details: [
              {
                heading: "Overview",
                content: "Lifestyle and Crim sliding doors are designed for security and aesthetics. Available in multiple finishes."
              },
              {
                heading: "Product Info",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                heading: "Product Specs",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                  heading: "Links",
                  content: [
                    "Placeholder",
                    "Placeholder",
                    "Placeholder"
                  ]
              }
           ]
        },
        {
            key: "inswings",
            name: "Inswings",
            synopsis: "Information about Crim Inswings.",
            details: [
              {
                heading: "Overview",
                content: "Placeholder."
              },
              {
                heading: "Product Info",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                heading: "Product Specs",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                  heading: "Links",
                  content: [
                    "Placeholder",
                    "Placeholder",
                    "Placeholder"
                  ]
              }
          ]
        },
        {
            key: "zipTraks",
            name: "Ziptraks",
            synopsis: "Information about Ziptraks.",
            details: [
              {
                heading: "Overview",
                content: "Placeholder."
              },
              {
                heading: "Product Info",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                heading: "Product Specs",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                  heading: "Links",
                  content: [
                    "Placeholder",
                    "Placeholder",
                    "Placeholder"
                  ]
               }
           ]
        },
        {
            key: "hissScreens",
            name: "Hiss Screens",
            synopsis: "Information about all Hiss Screens.",
            details: [
              {
                heading: "Overview",
                content: "Placeholder."
              },
              {
                heading: "Product Info",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                heading: "Product Specs",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                  heading: "Links",
                  content: [
                    "Placeholder",
                    "Placeholder",
                    "Placeholder"
                  ]
               }
           ]
        },
        {
            key: "blinds",
            name: "Blinds",
            synopsis: "Information about Blinds, Venetians and Thermacells.",
            details: [
              {
                heading: "Overview",
                content: "Placeholder."
              },
              {
                heading: "Product Info",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                heading: "Product Specs",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                  heading: "Links",
                  content: [
                    "Placeholder",
                    "Placeholder",
                    "Placeholder"
                  ]
               }
           ]
        },
        {
            key: "shutters",
            name: "Shutters",
            synopsis: "Information about Shutters.",
            details: [
              {
                heading: "Overview",
                content: "Placeholder."
              },
              {
                heading: "Product Info",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                heading: "Product Specs",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                  heading: "Links",
                  content: [
                    "Placeholder",
                    "Placeholder",
                    "Placeholder"
                  ]
               }
           ]
        },
        {
            key: "extShutters",
            name: "Ext Shutters",
            synopsis: "Information about External Shutters.",
            details: [
              {
                heading: "Overview",
                content: "Placeholder."
              },
              {
                heading: "Product Info",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                heading: "Product Specs",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                  heading: "Links",
                  content: [
                    "Placeholder",
                    "Placeholder",
                    "Placeholder"
                  ]
               }
           ]
        },
        {
            key: "umbrellas",
            name: "Umbrellas",
            synopsis: "Information about Umbrellas.",
            details: [
              {
                heading: "Overview",
                content: "Placeholder."
              },
              {
                heading: "Product Info",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                heading: "Product Specs",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                  heading: "Links",
                  content: [
                    "Placeholder",
                    "Placeholder",
                    "Placeholder"
                  ]
               }
           ]
        },
        {
            key: "waveshades",
            name: "Waveshades",
            synopsis: "Informations about Waveshades.",
            details: [
              {
                heading: "Overview",
                content: "Placeholder."
              },
              {
                heading: "Product Info",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                heading: "Product Specs",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                  heading: "Links",
                  content: [
                    "Placeholder",
                    "Placeholder",
                    "Placeholder"
                  ]
               }
           ]
        },
        {
            key: "awnings",
            name: "Awnings",
            synopsis: "Information about Awnings.",
            details: [
              {
                heading: "Overview",
                content: "Placeholder."
              },
              {
                heading: "Product Info",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                heading: "Product Specs",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                  heading: "Links",
                  content: [
                    "Placeholder",
                    "Placeholder",
                    "Placeholder"
                  ]
               }
           ]
        },
        {
            key: "louvers",
            name: "Louvers",
            synopsis: "Information about Louvers.",
            details: [
              {
                heading: "Overview",
                content: "Placeholder."
              },
              {
                heading: "Product Info",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                heading: "Product Specs",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                  heading: "Links",
                  content: [
                    "Placeholder",
                    "Placeholder",
                    "Placeholder"
                  ]
               }
           ]
        },
        {
            key: "shadeSails",
            name: "Shade Sails",
            synopsis: "Information about Shade Sails.",
            details: [
              {
                heading: "Overview",
                content: "Placeholder."
              },
              {
                heading: "Product Info",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                heading: "Product Specs",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                  heading: "Links",
                  content: [
                    "Placeholder",
                    "Placeholder",
                    "Placeholder"
                  ]
               }
           ]
        },
        {
            key: "robusters",
            name: "Robusters",
            synopsis: "Information about Robusters.",
            details: [
              {
                heading: "Overview",
                content: "Placeholder."
              },
              {
                heading: "Product Info",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                heading: "Product Specs",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                  heading: "Links",
                  content: [
                    "Placeholder",
                    "Placeholder",
                    "Placeholder"
                  ]
               }
           ]
        },
      ]
    }
  ],
  buttons: {
    enter: "Enter",
    back: "Back",
    copy: "Copy",
  },
  finePrint: "Powered By © VCore. All Rights Reserved."
  // Add more text as needed

};
