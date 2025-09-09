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
        // ...add more calculators for Sales
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
        // ...add calculators for Manufacturer
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
        // ...add calculators for Installer
      ]
    },
    {
      key: "product",
      name: "Product Info",
      preview: "Useful information about our products.",
      product: [
        {
            key: "doors",
            name: "Doors",
            synopsis: "Information about all Lifestyle and Crim doors and windows.",
            details: [
              {
                heading: "Overview",
                content: "Lifestyle and Crim doors are designed for security and aesthetics. Available in multiple finishes."
              },
              {
                heading: "Lifestyle Door info",
                content: [
                  "Placeholder",
                  "Placeholder",
                  "Placeholder"
                ]
              },
              {
                heading: "Crimsafe Door info",
                content: [
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
            synopsis: "Information about all Lifestyle and Crim Sliders."
        },
        {
            key: "inswings",
            name: "Inswings",
            synopsis: "Information about Crim Inswings."
        },
        {
            key: "zipTraks",
            name: "Ziptraks",
            synopsis: "Information about Ziptraks."
        },
        {
            key: "hissScreens",
            name: "Hiss Screens",
            synopsis: "Information about all Hiss Screens."
        },
        {
            key: "blinds",
            name: "Blinds",
            synopsis: "Information about Blinds, Venetians and Thermacells."
        },
        {
            key: "shutters",
            name: "Shutters",
            synopsis: "Information about Shutters."
        },
        {
            key: "extShutters",
            name: "Ext Shutters",
            synopsis: "Information about External Shutters."
        },
        {
            key: "umbrellas",
            name: "Umbrellas",
            synopsis: "Information about Umbrellas."
        },
        {
            key: "waveshades",
            name: "Waveshades",
            synopsis: "Informations about Waveshades."
        },
        {
            key: "awnings",
            name: "Awnings",
            synopsis: "Information about Awnings."
        },
        {
            key: "louvers",
            name: "Louvers",
            synopsis: "Information about Louvers."
        },
        {
            key: "shadeSails",
            name: "Shade Sails",
            synopsis: "Information about Shade Sails."
        },
        {
            key: "robusters",
            name: "Robusters",
            synopsis: "Information about Robusters."
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