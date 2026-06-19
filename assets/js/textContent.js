const textContent = {
  app: {
    title: "Pomss Calculator",
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
            key: "holeSpacing",
            name: "Even Hole Spacing",
            synopsis: "Calculate even spacing for holes in products.",
        },
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
        {
          key: "stockOptimiser",
          name: "Stock Optimiser",
          synopsis: "Optimise cutting lists to minimise waste from linear stock lengths."
        },
        {
          key: "meshOptimiser",
          name: "Mesh Sheet Optimiser",
          synopsis: "Optimise which stock mesh sheets to use to cut required mesh pieces."
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
                  "LifeStyle:",
                  "5 times stronger than standard Diamond Grill Doors",
                  "Strong 7mm aluminium diamond grille system plus deeper channels",
                  "Deeper screw method, no rivets to prevent buckling",
                  "Crimsafe:",
                  "Enjoy a superiour level of secuirty without blocking out the fresh air and breezes",
                  "Crimsafes unique Screw-Clamp technology means no unsightly bars and grilles to restrict your views",
                  "New Zealand made. Manufactured in our Wellington factory",
                  "We back our product with a 10 year structural and installation warranty to give you Peace of Mind!"
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
                  // hpyer links to products website and other useful links 
                    "Crimsafe Brochure:",
                    "https://crimsafe.nz/wp-content/uploads/2022/07/Crimsafe-NZ_Residential-Brochure_202207.pdf",
                    "Crimsafe Ultimate:",
                    "https://crimsafe.nz/products/crimsafe-ultimate/",
                    "Care Guide:",
                    "https://crimsafe.nz/wp-content/uploads/2020/11/200925-NZ-Care-Guide-A4-Web-CS20006_final.pdf",
                    "Crimsafe Hinged Doors:",
                    "https://crimsafe.nz/product/hinged-doors/"
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
            key: "ziptrakTrackGuided",
            name: "Ziptrak Outdoor Track-Guided Blinds",
            synopsis: "Australian-made, patent-protected track-guided blinds offering robust all-weather shading. The vertical-track design creates a sealed barrier against wind, rain, and insects, while spring-balanced or motorized operation allows smooth one-handed control.",
            details: [
              {
                heading: "Overview",
                content: "Ziptrak Track-Guided blinds use twin vertical channels to hold a heavy-duty shade fabric, forming a fully sealed envelope across your patio or balcony. This patented system (no external cords or zips) prevents flapping in wind and keeps out weather and insects. The spring-balanced mechanism makes even large blinds easy to raise/lower by hand, and the blind will stay at any height without additional supports. When lowered, a centre-locking bottom rail secures the blind. Ziptrak blinds are custom-made (to mm) in Australia, and handle widths up to 6 m (mesh) or 5.5 m (PVC)."
              },
              {
                heading: "Product Info",
                content: [
                  "Patented track-guided design provides a wind-proof, sealed barrier.",
                  "Spring-balanced operation – smooth one-handed control, no cords/cranks needed.",
                  "Can be left at any position; automatically locks when fully lowered.",
                  "Locking bottom rail holds in strong winds (center-release latch on aluminium rail).",
                  "Available manual or motorised; motorisation adds remote control convenience.",
                  "Custom fabricated to fit; maximum 6000 mm (mesh) or 5500 mm (PVC) width by 3500 mm height.",
                  "Choice of high-performance fabrics: open-weave sunscreen mesh or clear/smoke DS PVC (0.7–1.0 mm thick).",
                  "Heavy-duty extruded aluminium frame and hardware, powder-coated in 7 standard colours (or custom).",
                  "Australian-made; backed by Ziptrak’s component warranty (5 years as of 2024)."
                ]
              },
              {
                heading: "Product Specs",
                content: [
                  "Frame: Extruded aluminium tracks, pelmet and bottom rail (powder-coated)",
                  "Mechanism: Internal spring-balancer (manual) or tubular motor (motorised option)",
                  "Max Dimensions: Track-Guided – 6.0m wide (mesh) / 5.5m wide (PVC) × 3.5m high",
                  "Wind Rating: Tested up to 160 km/h on 2.5×2.5m blind",
                  "Fabrics: Outdoor Sunscreen Mesh (various openness 30–90%) and Dimensionally Stable Clear/Suntex PVC",
                  "Pelmet: 135mm or 165mm (streamline) / 175mm (traditional)",
                  "Control: Hand-operated (spring lock) or motor (with remote/wall switch)",
                  "Colours: 7 standard frame colours (white/cream/grey/black/etc.); custom powder-coats available",
                  "Warranty: 5-year (Ziptrak components)"
                ]
              },
              {
                heading: "Downloads",
                content: [
                  "Ziptrak Track-Guided Brochure (PDF):",
                  "https://irp-cdn.multiscreensite.com/f68acd0d/files/uploaded/Ziptrak%20Track-Guided%20Brochure.pdf",
                  "Track-Guided Installation Guide (PDF):",
                  "https://irp-cdn.multiscreensite.com/f68acd0d/files/uploaded/Ziptrak%20Track-Guided%20Installation.pdf",
                  "Fabric Selection Guide (PDF):",
                  "https://irp-cdn.multiscreensite.com/f68acd0d/files/uploaded/Ziptrak%20Outdoor%20Fabric%20Guide.pdf"
                ]
              },
              {
                heading: "Links",
                content: [
                  "Ziptrak Track-Guided (Australia):",
                  "https://www.ziptrak.com.au/outdoor/track-guided-blinds/",
                  "Ziptrak Track-Guided (New Zealand):",
                  "https://www.nz.ziptrak.com/en/outdoor-blinds",
                  "Installation FAQ (dimensions, care, etc.):",
                  "https://www.ziptrak.com.au/faq/"
                ]
              },
              {
                heading: "Notes",
                content: "Ziptrak Track-Guided is the standard heavy-duty option for large openings. For very long spans, removable posts allow multiple blinds to join seamlessly. The system is ISO-certified (fire-safe) for multi-level balconies. All installations must use Ziptrak-approved components and be done by trained fabricators; improper installation voids warranty. Unlike some DIY screens, Ziptrak blinds are *not* a DIY product – they are custom-engineered per site. (See also Ziptrak’s Cable-Guided variant below for spaces where side posts are not available.)"
              }
            ]
        },
        {
            key: "ziptrakCableGuided",
            name: "Ziptrak Outdoor Cable-Guided Blinds",
            synopsis: "A Ziptrak blind system that uses stainless guide cables instead of side tracks, enabling installation where traditional track blinds aren’t possible.  Up to 5.0m wide and 3.5m high, with manual (crank) or motor operation.",
            details: [
              {
                heading: "Overview",
                content: "The Ziptrak Cable-Guided system stabilises the blind with discrete stainless cables on each side instead of rigid channels. This sleek design is ideal for open pergolas, uneven surfaces or balconies with no posts. Operation is similar to Track-Guided: spring-balanced for easy lifting, locking at the bottom bar. Despite the lack of full tracks, the tensioned cables and quality fixings keep the blind snug and reduce wind noise. The cable system is Australian-made and complements Ziptrak Track-Guided blinds in style."
              },
              {
                heading: "Product Info",
                content: [
                  "Stainless cable guides (one each side) replace full tracks – ideal for spaces where posts are absent.",
                  "Available as motorised, standard crank, or *assisted* crank operation.",
                  "Effective for narrow to medium spans (0.6–5.0m) – minimum widths depend on control: 0.6m (crank), 0.8m (assisted), 0.9m (motor).",
                  "Quiet, smooth action – cables minimize sag and wind-blow, preventing rattling.",
                  "Rust-resistant: 316-grade cables and powder-coated frames suitable for tough outdoor weather.",
                  "Complements Ziptrak’s track-guided products, providing flexibility to design multi-blind installations."
                ]
              },
              {
                heading: "Product Specs",
                content: [
                  "Frame: Powder-coated aluminium head box and bottom bar; marine-grade stainless guide cables",
                  "Operation: Spring-balanced (hand crank or motor), locks at bottom",
                  "Max Size: 5000 mm wide × 3500 mm high",
                  "Min Size: 600 mm (crank) / 800 mm (assisted crank) / 900 mm (motor)",
                  "Fabrics: Same outdoor fabrics as track system (sunshade mesh or clear PVC)",
                  "Control: Crank handle or tubular motor (with remote/wall control)",
                  "Stability: Tensioned cables keep fabric aligned in wind; not rated for cyclone conditions",
                  "Warranty: 5 years on Ziptrak components"
                ]
              },
              {
                heading: "Downloads",
                content: [
                  "(Contact your Ziptrak retailer for Cable-Guided brochures and installation PDFs)"
                ]
              },
              {
                heading: "Links",
                content: [
                  "Ziptrak Cable-Guided (Australia):",
                  "https://www.ziptrak.com.au/cable-guided-blinds/",
                  "Ziptrak Cable-Guided FAQs:",
                  "https://www.ziptrak.com.au/faq/"
                ]
              },
              {
                heading: "Notes",
                content: "Cable-Guided blinds work best for smaller to medium spans or tricky layouts. For very wide openings, traditional Track-Guided blinds (with removable posts if needed) may be more suitable. The cable system is designed for ground-floor or protected balconies – it does not carry the ISO multi-storey fire certification of the Track system. Ensure sturdy anchoring points for cables. Installation by a trained Ziptrak installer is required for warranty coverage."
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
          key: "santaFeSolunaBlinds",
          name: "Santa Fe Soluna Roller Blinds",
          synopsis: "High-end custom roller shades with 300+ fabric options (sheer to blackout), including 100% PVC-free residential fabrics and LightGuard 360 blackout tracks.",
          details: [
            {
              heading: "Overview",
              content: "Soluna is Santa Fe’s premium roller blind system (from Norman®), offering an extensive palette of fashion-forward fabrics (sheers, natural fibres, blockouts). All residential Soluna fabrics are 100% PVC-free for a healthier home, yet durable and soft to the touch. Soluna blinds can be operated by classic chain, a cordless clutch system, or by rechargeable/power motors with optional wireless charging wands. A standout feature is **LightGuard 360**: fully enclosed tracks and headrail lined with black pile brushes to achieve nearly total blackout (for bedrooms, media rooms etc). Blinds are custom made to any width/drop, integrate with smart home systems, and carry a 5-year warranty on all components."
            },
            {
              heading: "Product Info",
              content: [
                "Wide fabric range (300+ choices): from translucent sheers to full room-darkening blocks. Natural fiber and textured fabrics available (cotton, linen, jute, paper).",
                "Residential fabrics: 100% PVC-free (healthier indoor air); Commercial grade PVC screen fabrics offered for large openings or specialized use.",
                "LightGuard 360 total blackout system: Encased headrail, side channels and bottom bar with blackout brushes prevent light leakage around edges.",
                "Control options: Chain-driven (with clutch and tensioner), cordless (PrecisionLift clutch), or motorised (rechargeable motor). Rechargeable blinds have integrated lithium batteries and can use a wireless charging wand.",
                "Smart integration: Motors and controls support RF remote, smartphone/Wi-Fi, voice assistant (Alexa/Google) and group control via hubs.",
                "Sizes: Custom to fit any window; wide-width capability (several meters) with secure top/bottom track or heavy-duty headrails for large spans.",
                "Valance and Side Channels: Optional decorative valances or fascia. Available in multiple powder-coat colours.",
                "Flame retardant fabrics and UV-protective options available for compliance where needed.",
                "Warranty: 5 years on blind fabric and mechanisms; 3 years on motor.",
                "Child Safety: Chain safety devices and cordless options comply with safety standards."
              ]
            },
            {
              heading: "Product Specs",
              content: [
                "Materials: Extruded aluminium headrail (fully enclosed if using LightGuard), spring or motor mechanisms inside. Bottom bar weight (aluminium or timber look) ensures straight drop.",
                "Fabrics: 300+ in collection (sheer, translucent, room‑darkening, solar screen). Residential fabrics all PVC-free; many fire-rated selections available.",
                "Control Types: Standard metal beaded chain (with safety tensioner); PrecisionLift clutch (no cords to fix); 24V rechargeable motor (Norman² auto) with remote or wireless wand; wired motor (7/24V with AC).",
                "Operation: Single roller tube; optional Spring Assist for manual blinds; Bottom-up or dual rollers possible (Soluna Dual Blinds).",
                "Blackout Option: LightGuard 360 tracks (sealed top, bottom, sides) achieve ~100% blackout.",
                "Sizes: Unlimited width (typically up to 4–5m); max drop ~4m (depending on fabric weight).",
                "Thermal/UV: Blackout fabrics block nearly 100% light; solar screens reflect heat/UV. Sheers diffuse light but do not insulate.",
                "Warranty: 5-year product warranty (per Norman®); motors 3-year.",
                "Lead time: Custom made (allow ~3–6 weeks)."
              ]
            },
            {
              heading: "Links",
              content: [
                "Santa Fe Soluna Roller Blinds – Product page: https://www.santafeshutters.co.nz/interior-blinds/soluna-roller-blinds/",
                "Soluna Roller Blinds Brochure (NZ):",
                "https://www.santafeshutters.co.nz/wp-content/uploads/santafe-soluna-roller-blinds.pdf (download PDF)",
                "Santa Fe (Norman) Motorised Roller Blinds info: https://www.santafeshutters.co.nz/interior-blinds/soluna-roller-blinds/ (see *Motorised* section)"
              ]
            },
            {
              heading: "Downloads",
              content: [
                "Soluna Roller Blinds Brochure – PDF: [Soluna Roller Blinds Brochure](https://www.santafeshutters.co.nz/wp-content/uploads/santafe-soluna-roller-blinds.pdf)",
                "Installation Guide: Included with product (Norman technical manual).",
                "Fabric Catalogue: Available from Santa Fe showroom or request."
              ]
            }
          ]
        },
        {
          key: "santaFeThermacellBlinds",
          name: "Santa Fe Thermacell Honeycomb Blinds",
          synopsis: "Norman® Thermacell insulating cellular blinds with a unique honeycomb D-cell structure, offering high energy efficiency (reducing heat loss up to 60%) and available in many cell sizes and colours.",
          details: [
            {
              heading: "Overview",
              content: "Thermacell blinds are Santa Fe’s premium insulating honeycomb shades. The fabric has a patented D‑cell honeycomb structure that traps air to insulate the window. This innovative design can reduce heat loss by up to **60%**, keeping homes cooler in summer and warmer in winter. Thermacell is available in over 180 fabrics (including flame-retardant, light-filtering and blackout) and five cell sizes. All models are cordless (SmartFit) for safety. Top‑down/bottom‑up operation is an option, along with integrated motorisation for convenience. These blinds are custom-made to any window and carry a 5-year warranty."
            },
            {
              heading: "Product Info",
              content: [
                "Unique D-cell honeycomb design for insulation – can reduce heat loss by ~60%.",
                "Available with **top-down/bottom-up** capability: you can lower the top and raise the bottom independently for light and privacy control.",
                "Fabrics: Wide range (sheer, light-filtering, room-darkening, flame-resistant). Over 180 colours/patterns. Some fabrics have a reflective Mylar backing for extra insulation.",
                "SmartFit Cordless System: Blinds mount inside window jambs (no headrail needed) and lift from any point (no light gaps, enhanced safety).",
                "Motorised option: Quiet belt-driven motor available (battery or 24V), with integrated wireless charging (PowerBar) or plug-in adapter.",
                "Sliding Panel option for large doors (Slip-track for patio doors) and Motorised Skylight models (special tensioned honeycomb for sloped windows).",
                "Noise reduction: Cellular structure also dampens sound (ideal for bedrooms/kids’ rooms).",
                "Meets NZ building energy efficiency requirements (R-value benefit through insulation).",
                "Warranty: 5 years (fabric and mechanics); 3 years on motor components.",
                "Cord-free child-safe design; no cords to tangle or damage."
              ]
            },
            {
              heading: "Product Specs",
              content: [
                "Materials: Aluminium headrail (or SmartFit frame), nylon lifting mechanisms, fabric cells laminated to form D-cells.",
                "Cell Sizes: 5 sizes (e.g. 25mm, 38mm, 50mm, 63mm D-cell etc). Cell count (and R-value) increases with size.",
                "Fabrics: Choice of transparent sheers to blockout blacks. Flame retardant fabrics available (non-PVC).",
                "Operation: SmartFit (jamb-mounted cordless) or standard headrail; bottom-up, top-down, or Day/Night dual-fabric options.",
                "Motorisation: Rechargeable 24V motor (remote/app control) or plug-in motor available for hard-to-reach windows.",
                "Energy rating: Up to 60% reduction in heat transfer (according to Norman tests).",
                "Acoustic: Provides moderate sound absorption due to cellular air pockets.",
                "Warranty: 5 years (Norman®) on non-motor parts; 3 years on motors.",
                "Size: Custom for any window; standard drop up to ~3m (longer for vertical cell tracks in sliding doors).",
                "Typical lead time: Custom built (3–5 weeks)."
              ]
            },
            {
              heading: "Links",
              content: [
                "Santa Fe Thermacell Blinds – Product page: https://www.santafeshutters.co.nz/interior-blinds/thermacell-honeycomb-insulating-blinds/",
                "Thermacell Blinds Brochure (NZ):",
                "https://www.santafeshutters.co.nz/wp-content/uploads/santafe-thermacell.pdf (download PDF)",
                "Norman® Thermacell Product Info: search Norman or consult brochure."
              ]
            },
            {
              heading: "Downloads",
              content: [
                "Thermacell Blinds Brochure – PDF: [Thermacell Cellular Blinds Brochure](https://www.santafeshutters.co.nz/wp-content/uploads/santafe-thermacell.pdf)",
                "Installation & Care Guide: Available from Santa Fe (Norman technical support).",
                "EnergyRater Guide: Info on R-values (contact Norman NZ)."
              ]
            }
          ]
        },
        {
          key: "santaFeShutters",
          name: "Santa Fe Interior Shutters",
          synopsis: "Custom-made interior wooden shutters (solid or engineered timber) for light control and insulation, designed for NZ homes and backed by Norman® craftsmanship.",
          details: [
            {
              heading: "Overview",
              content: "Santa Fe’s interior shutters are plantation-style window coverings built from sustainably-sourced hardwood or engineered wood (zero PVC, non-toxic). They offer crisp light control and privacy through adjustable louvers, and can completely block or admit light depending on louver angle. The shutters come in several louvre sizes (e.g. 63mm, 76mm, 89mm) to suit different styles. All components are custom-made to fit any size or shape of window, including specialty shapes and openings. As part of the Norman® family, Santa Fe shutters are crafted in New Zealand for Kiwi conditions; they are known for smooth operation, durability and child-safe cordless design."
            },
            {
              heading: "Product Info",
              content: [
                "Built from premium sustainably-grown New Zealand hardwoods or composite engineered wood (no PVC or harmful chemicals).",
                "Available panel types: Hinged, Bi-fold, Sliding, Shaped (arched, sloped, etc), Skylight versions – virtually any shape can be accommodated.",
                "Louvre sizes: 63mm, 76mm, 89mm (Elliptical or Urban) – choice of finishes/colours to match interiors.",
                "Operation: Manual with tilt rods or hidden magnet tilt; completely cord-free (max child safety) by design.",
                "Optional motorisation: Supports plug-in motors for tilt/sliding via remote/smartphone (Norman motorised shutters).",
                "100% colourfast paint/polyurethane or timber stain finishes; moisture-resistant options for kitchens/bathrooms.",
                "Thermal benefits: Solid panels provide additional insulation and reduce heat loss through windows.",
                "Fits within window recess or face-mounted; discrete hinge hardware designed to match frame colour.",
                "Easy cleaning (no fabric); timeless aesthetics add resale value.",
                "Proudly backed by a **10-year product warranty** on non-motorised shutters."
              ]
            },
            {
              heading: "Product Specs",
              content: [
                "Materials: FSC-certified hardwood (e.g. lightweight Paulownia, or hardwoods like Basswood) or engineered wood composites. All frames and louvers are timber-based.",
                "Sizes: Custom for each opening (no fixed sizes). Panel width up to ~1.2 m per shutter, stacking as needed for wide windows.",
                "Louvre thickness: ~12–15 mm nominal; panel thickness ~45 mm. Louvre tilt via central rod or hidden magnet.",
                "Hardware: Brass or stainless steel hinges; aluminium tracks for sliding/blind shutters.",
                "Operation modes: Manual tilt & swing; optional wired or battery motor for tilt/pivot.",
                "Fire rating: Wood is combustible; no special fire rating (interior product). Flame-resistant fabric not applicable.",
                "Warranty: 10 years (non-motorised shutter materials and workmanship); 3 years on motors.",
                "Child Safety: Cordless design; complies with child-safe standards.",
                "Lead time: Custom-made; typically 4–8 weeks production from order (in NZ)."
              ]
            },
            {
              heading: "Links",
              content: [
                "Santa Fe Interior Shutters – Official product overview: https://www.santafeshutters.co.nz/interior-shutters/ ",
                "Santa Fe Interior Shutters Brochure (NZ):",
                "https://www.santafeshutters.co.nz/wp-content/uploads/santafe-interior-shutters.pdf (download PDF) ",
                "Norman/Santa Fe Product Warranty (NZ): https://www.santafeshutters.co.nz/wp-content/uploads/Santa-Fe-Shutters-Product-Warranty-for-all-Norman-Products-2025.pdf "
              ]
            },
            {
              heading: "Downloads",
              content: [
                "Santa Fé Interior Shutters Brochure (NZ) – PDF: [Interior Shutters Brochure](https://www.santafeshutters.co.nz/wp-content/uploads/santafe-interior-shutters.pdf)",
                "Installation Guide: Provided by installer (Norman technical support available).",
                "Care & Warranty Guide: Included in brochure."
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
            key: "rivieraPremium",
            name: "Riviera\u00ae Premium Cantilever Umbrella",
            synopsis: "Top-of-the-line aluminium-framed cantilever umbrella with premium materials and full shade flexibility.",
            details: [
              {
                heading: "Overview",
                content: "The Riviera Premium is Shade7’s flagship cantilever umbrella, combining elegant design with heavy-duty construction. It features anodised aluminium arms and a stainless-steel mast for marine-grade durability, and provides adjustable tilt and 360° rotation for versatile shade control."
              },
              {
                heading: "Product Info",
                content: [
                  "Premium resort-grade cantilever umbrella (suitable for homes, resorts, cafés)",
                  "Anodised aluminium frame (20μm marine-grade finish) with 35×20mm extruded aluminium arms",
                  "Polished 316 stainless steel winder handle and hardware",
                  "Infinite vertical tilt (mast-slide) and smooth 360° canopy rotation",
                  "Square 3.0m or octagonal 3.5m, 4.0m, 4.5m canopies (choose shape and colour)",
                  "High wind rating (tested up to ~60 kph) for sheltered outdoor use",
                  "Mounting: deck-mounted spigot or in-ground spigot (top-hat flush box), optional heavy base",
                  "Backed by a 5-year frame warranty and 10-year fabric warranty (residential)"
                ]
              },
              {
                heading: "Product Specs",
                content: [
                  "Frame: 20μm anodised aluminium (matte silver or black)",
                  "Arms: 35×20mm extruded aluminium",
                  "Mast: aluminium (size unspecified, heavy-duty)",
                  "Canopy: solution-dyed acrylic canvas (UV- and fade-resistant)",
                  "Canopy Shapes/Sizes: 3.0m square; 3.5m, 4.0m, 4.5m octagons",
                  "Tilt: infinite (down-the-mast)",
                  "Rotation: 360° (24 locking positions)",
                  "Mount Options: deck-spigot, in-ground spigot, heavy base",
                  "Wind Rating: ~60 kph",
                  "Weight: (not specified)",
                  "Warranty: 5-year frame (res); 3-year (com); 10-year fabric (res); 5-year (com)"
                ]
              },
              {
                heading: "Links",
                content: [
                  "Shade7 Riviera Premium page:",
                  "https://shade7.co.nz/cantilever-umbrellas/riviera-cantilever-umbrella/",
                  "Riviera Umbrella Brochure:",
                  "https://shade7.co.nz/assets/uploads/2022/07/Shade7-Riviera-Brochure-Jul25.pdf",
                  "Installation & Care guide:",
                  "https://shade7.co.nz/assets/uploads/2016/01/Paraflex-brochure-Aug2024.pdf"
                ]
              }
            ]
        },
        {
            key: "rivieraClassic",
            name: "Riviera\u00ae Classic Cantilever Umbrella",
            synopsis: "High-performance cantilever umbrella with fibreglass arms and marine-grade components for versatile shade.",
            details: [
              {
                heading: "Overview",
                content: "The Riviera Classic is a robust cantilever umbrella designed for longevity. It features heavy-duty fibreglass arms and an anodised aluminium mast with stainless fittings, offering durable performance in outdoor conditions. Like the Premium model, it provides infinite vertical tilt and 360° rotation to keep users shaded all day."
              },
              {
                heading: "Product Info",
                content: [
                  "Resort-quality cantilever umbrella (elegant and proven design)",
                  "Fibreglass arms (20 mm diameter) and hubs for high strength",
                  "Anodised aluminium mast and 316 stainless components (marine grade)",
                  "Vertical down-the-mast tilt adjustment for low sun angles",
                  "Smooth 360° rotation with 24 locking positions",
                  "Octagonal canopy, available in 3.5m or 4.0m diameter",
                  "Wind rated to ~60 kph (built for coastal NZ conditions)",
                  "Mounting: same options as Premium (deck-spigot, in-ground, heavy base)",
                  "Warranty: 5-year frame (res); 10-year fabric (res)"
                ]
              },
              {
                heading: "Product Specs",
                content: [
                  "Frame: 20μm anodised aluminium (matte silver)",
                  "Arms: 20mm heavy-duty fibreglass",
                  "Mast: aluminium (size unspecified)",
                  "Canopy: solution-dyed acrylic canvas (UV- and fade-resistant)",
                  "Sizes: 3.5m and 4.0m octagon",
                  "Tilt: infinite (down-the-mast)",
                  "Rotation: 360°",
                  "Mount Options: deck-spigot, in-ground spigot, heavy base",
                  "Wind Rating: ~60 kph",
                  "Weight: (not specified)",
                  "Warranty: 5-year frame (res); 3-year (com); 10-year fabric (res); 5-year (com)"
                ]
              },
              {
                heading: "Links",
                content: [
                  "Shade7 Riviera Classic page:",
                  "https://shade7.co.nz/cantilever-umbrellas/riviera-classic-cantilever-umbrella/",
                  "Riviera Umbrella Brochure:",
                  "https://shade7.co.nz/assets/uploads/2022/07/Shade7-Riviera-Brochure-Jul25.pdf"
                ]
              }
            ]
        },
        {
            key: "paraflex",
            name: "Paraflex Wall-Mounted Umbrella",
            synopsis: "Space-saving wall-mounted umbrella with tilting 100% Olefin canopy, ideal for balconies and small patios.",
            details: [
              {
                heading: "Overview",
                content: "The Paraflex is a wall- or post-mounted umbrella system that maximizes shade in tight areas. It attaches to a vertical surface using a high-strength bracket, allowing the canopy to fold flat when collapsed. Its jointed arm and tilt mechanism let you position the 2.7m or 3.0m hexagon canopy for optimal coverage."
              },
              {
                heading: "Product Info",
                content: [
                  "Removable wall/post-mount cantilever umbrella",
                  "No base or pole required (bracket uses ‘lift-lock’ release)",
                  "Premium 100% Olefin canopy (water-repellent, rot-proof, 97% UV block)",
                  "Frame: marine-grade anodised aluminium with stainless fittings",
                  "Tilting and swiveling arm for dynamic positioning",
                  "Quick-release mount allows easy removal and storage",
                  "Lightweight: 3 kg (2.7m) or 5 kg (3.0m) umbrella only",
                  "Includes protective cover bag",
                  "Warranty: 2-year frame and 2-year fabric (residential)"
                ]
              },
              {
                heading: "Product Specs",
                content: [
                  "Frame: 20μm anodised aluminium (saltwater-resistant)",
                  "Canopy: 100% Olefin fabric, water-repellent, UV-resistant",
                  "Sizes: 2.7m and 3.0m hexagon",
                  "Arm Length: 2.00m (standard)",
                  "Shade Area: ~4.7 m² (2.7m) or ~5.8 m² (3.0m)",
                  "Mount: Fixed wall/post bracket (lift-lock)",
                  "Weight: 3 kg (2.7m); 5 kg (3.0m)",
                  "Wind rating: Suitable for low-wind/sheltered locations",
                  "Warranty: 2-year frame; 2-year fabric"
                ]
              },
              {
                heading: "Links",
                content: [
                  "Shade7 Paraflex page:",
                  "https://shade7.co.nz/cantilever-umbrellas/paraflex-wall-umbrella/",
                  "Paraflex Umbrella Brochure:",
                  "https://shade7.co.nz/assets/uploads/2016/01/Paraflex-brochure-Aug2024.pdf"
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
