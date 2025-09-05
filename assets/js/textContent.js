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
    }
  ],
  buttons: {
    enter: "Enter",
    back: "Back",
    copy: "Copy",
    productInfo: "Product Library"
  },
  finePrint: "Powered By © VCore. All Rights Reserved."
  // Add more text as needed

};