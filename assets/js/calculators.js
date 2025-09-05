const calculators = {
    
    // Sales

    // Build Out Door Calculator from daylight sizes
    buildOut: {
        title: "B/O Door Calculator",
        description: "Determine the size a B/O Door needs to be based on the house daylight sizes. (For First Measure)",
        inputs: [
            { id: "doorWidth", label: "Daylight Width (mm):", type: "number", min: 0 },
            { id: "doorHeight", label: "Daylight Height (mm):", type: "number", min: 0 }
        ],
        calculate: function(values) {
            let buildOutWidth = values.doorWidth + 50;
            let buildOutHeight = values.doorHeight + 50;
            return `Build Out Dimensions: ${buildOutWidth.toFixed(0)}mm Wide by ${buildOutHeight.toFixed(0)}mm High. Double Check This will work!`;
        }
    },

    // Internal Door Calculator from daylight sizes
    internalDoor: {
        title: "Internal Door Calculator",
        description: "Determine the size a Internal Door needs to be based on the house daylight sizes. (For First Measure)",
        inputs: [
            { id: "houseWidth", label: "Daylight Width (mm):", type: "number", min: 0 },
            { id: "houseHeight", label: "Daylight Height (mm):", type: "number", min: 0 }
        ],
        calculate: function(values) {
            let doorWidth = values.houseWidth - 6;
            let doorHeight = values.houseHeight - 6;
            return `Internal Door Dimensions: ${doorWidth.toFixed(0)}mm Wide by ${doorHeight.toFixed(0)}mm High. Double Check This will work!`;
        }
    },


    // Manufacturing

    // Calculate the size Crim mesh needs to be off door size
    crimMeshSize: {
        title: "Crim Mesh Size Calculator",
        description: "Calculate mesh sizes for Crim doors.",
        inputs: [
            { id: "crimWidth", label: "Door Width (mm):", type: "number", min: 0 },
            { id: "crimHeight", label: "Door Height (mm):", type: "number", min: 0 }
        ],
        calculate: function(values) {
            let meshWidth = values.crimWidth - 114;
            let meshHeight = values.crimHeight - 114;
            return `Crimsafe Mesh needs to be ${meshWidth.toFixed(0)}mm Wide by ${meshHeight.toFixed(0)}mm High.`;
        }
    },

    // Main Door Cutting/Making Calculator
    screenDoorCutting: {
        title: "Main Door Cutting/Making Calculator",
        description: "Calculate cutting and making sizes for Lifestyle or Crim doors.",
        inputs: [
            { id: "screenDoorWidth", label: "Door Width (mm):", type: "number", min: 0 },
            { id: "screenDoorHeight", label: "Door Height (mm):", type: "number", min: 0 },
            { id: "handleHeight", label: "Handle Height (mm):", type: "number", min: 0 },
            { id: "frameType", label: "Frame Type:", type: "radio", options: [
                { value: "hinged", label: "Hinged" },
                { value: "buildout", label: "BuildOut" },
                { value: "adapter", label: "Adapter Frame" }
            ]},
            { id: "doorType", label: "Door Type:", type: "radio", options: [
                { value: "lifestyle", label: "Lifestyle" },
                { value: "crimsafe", label: "Crimsafe" }
            ]},
            { id: "doorOrientation", label: "Hinged on:", type: "radio", options: [
                { value: "left", label: "Left" },
                { value: "right", label: "Right" }
            ]}
        ],
        calculate: function(values) {
            const width = values.screenDoorWidth;
            const height = values.screenDoorHeight;
            const handle = values.handleHeight;
            const frameType = values.frameType;
            const doorType = values.doorType;
            const orientation = values.doorOrientation;

            let output = "";

            if (frameType === 'hinged') {
                output += 
                    `Door Width = ${width}mm (+ 100 for P/C)<br>` +
                    `Door Height = ${height}mm (+ 100 for P/C)<br>` +
                    `Hinged on = ${orientation.charAt(0).toUpperCase() + orientation.slice(1)}<br>` +
                    `Handle Height = ${handle}mm<br>` +
                    `Bug Strip = 2 X ${height + 100}mm, 1 X ${width + 100}mm<br>`;
                if (doorType === 'lifestyle') {
                    output +=
                        `Grill Cut at ${width - 120}mm x ${height - 120}mm<br>` +
                        `Overall Door Frame Cut Length = ${(width * 2) + (height * 2)}mm<br>` +
                        `Overall BugStrip Cut Length = ${(height + 100) * 2 + (width + 100)}mm<br>`;
                } else if (doorType === 'crimsafe') {
                    output +=
                        `Mesh Cut at ${width - 114}mm x ${height - 114}mm<br>` +
                        `Overall Door Frame Cut Length = ${(width + 100) * 2 + (height + 100) * 2}mm (Same Length for Covers)<br>` +
                        `Overall BugStrip Cut Length = ${(height + 100) * 2 + (width + 100)}mm<br>`;
                }
            } else if (frameType === 'buildout') {
                output +=
                    `B/O Frame Width = ${width}mm (+ 100 for P/C)<br>` +
                    `B/O Frame Height = ${height}mm (+ 100 for P/C)<br>` +
                    `Door Width =  ${width - 48}mm (+ 100 for P/C)<br>`+
                    `Door Height = ${height - 48}mm (+ 100 for P/C)<br>`+
                    `Hinged on = ${orientation.charAt(0).toUpperCase() + orientation.slice(1)}<br>` +
                    `Handle Height = ${handle}mm<br>`;
                if (doorType === 'lifestyle') {
                    output +=
                        `Grill Cut at ${width - 168}mm x ${height - 168}mm<br>` +
                        `Overall B/O Frame Cut Length = ${(width + 100) * 2 + (height + 100) * 2}mm<br>` +
                        `Overall Door Frame Cut Length = ${(height + 52) * 2 + (width + 52) * 2}mm<br>`;
                } else if (doorType === 'crimsafe') {
                    output +=
                        `Mesh Cut at ${width - 162}mm x ${height - 162}mm<br>` +
                        `Overall B/O Frame Cut Length = ${(width + 100) * 2 + (height + 100) * 2}mm<br>` +
                        `Overall Door Frame Cut Length = ${(height + 52) * 2 + (width + 52) * 2}mm (Same Length for Covers)<br>`;
                } 
            } else if (frameType === 'adapter') {
                output +=
                    `Apt Frame Width = ${width}mm (+ 100 for P/C)<br>` +
                    `Apt Frame Height = ${height}mm (+ 100 for P/C)<br>` +
                    `Door Width =  ${width - 13}mm (+ 100 for P/C)<br>`+
                    `Door Height = ${height - 8}mm (+ 100 for P/C)<br>`+
                    `Hinged on = ${orientation.charAt(0).toUpperCase() + orientation.slice(1)}<br>` +
                    `Handle Height = ${handle}mm<br>`;
                if (doorType === 'lifestyle') {
                    output +=
                        `Grill Cut at ${width - 133}mm x ${height - 128}mm<br>` +
                        `Overall Apt Frame Cut Length = ${(width + 100) + (height + 100) * 2}mm (Same Length for Covers)<br>` +
                        `Overall Door Frame Cut Length = ${(height + 92) * 2 + (width + 87) * 2}mm<br>`;
                } else if (doorType === 'crimsafe') {
                    output +=
                        `Mesh Cut at ${width - 127}mm x ${height - 122}mm<br>` +
                        `Overall Apt Frame Cut Length = ${(width + 100) + (height + 100) * 2}mm (Same Length for Covers)<br>` +
                        `Overall Door Frame Cut Length = ${(height + 92) * 2 + (width + 87) * 2}mm (Same Length for Covers)<br>`;
                } 
            }
            return output;
        }
    },

    // Main Slider Cutting/Making Calculator
    sliderDoorCutting: {
        title: "Main Slider Cutting/Making Calculator",
        description: "Calculate cutting and making sizes for Lifestyle or Crim slider doors.",
        inputs: [
            { id: "zFrameWidth", label: "Z Frame Width (mm):", type: "number", min: 0 },
            { id: "zFrameHeight", label: "Z Frame Height (mm):", type: "number", min: 0 },
            { id: "doorPanelWidth", label: "Door Panel Width (mm):", type: "number", min: 0 },
            { id: "mullionWidth", label: "Mullion Width (mm):", type: "number", min: 0 },
            { id: "sliderhandleHeight", label: "Handle Height (mm):", type: "number", min: 0 },
            { id: "doorType", label: "Door Type:", type: "radio", options: [
                { value: "lifestyle", label: "Lifestyle" },
                { value: "crimsafe", label: "Crimsafe" }
            ]},
            { id: "doorOrientation", label: "Closes to the:", type: "radio", options: [
                { value: "left", label: "Left" },
                { value: "right", label: "Right" }
            ]}
        ],
        calculate: function(values) {
            const zWidth = values.zFrameWidth;
            const zHeight = values.zFrameHeight;
            const width = values.doorPanelWidth;
            const mullion = values.mullionWidth;
            const handle = values.sliderhandleHeight;
            const doorType = values.doorType;
            const orientation = values.doorOrientation;

            let output =
                `Z Frame Width = ${zWidth}mm (+ 100 for P/C)<br>` +
                `Z Frame Height = ${zHeight}mm (+ 100 for P/C)<br>` +
                `Closes to the = ${orientation.charAt(0).toUpperCase() + orientation.slice(1)}<br>` +
                `Handle Height = ${handle}mm<br>`;

            if (doorType === 'lifestyle') {
                output +=
                    `Door Width = ${(width + mullion) - 8}mm<br>` +
                    `Door Height = ${zHeight - 74}mm<br>` +
                    `Grill Cut at ${(width + mullion) - 120}mm x ${(zHeight - 74) - 120}mm<br>` +
                    `Overall Door Frame Cut Length = ${((width + mullion + 92) * 2) + ((zHeight + 26) * 2)}mm<br>` +
                    `Overall Z Frame Cut Length = ${((zWidth + 100) * 2) + ((zHeight + 100) * 2)}mm<br>`;
            } else if (doorType === 'crimsafe') {
                output +=
                    `Door Width = ${(width + mullion) - 8}mm (+ 100 for P/C)<br>` +
                    `Door Height = ${zHeight - 74}mm (+ 100 for P/C)<br>` +
                    `Mesh Cut at ${(width + mullion) - 114}mm x ${(zHeight - 74) - 114}mm<br>` +
                    `Overall Door Frame Cut Length = ${((width + mullion + 92) * 2) + ((zHeight + 26 ) * 2)}mm<br>` +
                    `Overall Z Frame Cut Length = ${((zWidth + 100) * 2) + ((zHeight + 100) * 2)}mm<br>`;
            }
            return output;
        }
    },
    

    // Installer 

    // Even Hole Spacing (to the nearest 400mm)
    holeSpacing: {
        title: "Even Hole Spacing",
        description: "Evenly spaced holes along a length (As close to 400mm as possible), specifying the distance in from each end.",
        inputs: [
        { id: "lengthInput", label: "Enter length in mm:", type: "number", min: 401 },
        { id: "spacingOption", label: "Amount in from Each End (mm):", type: "number", min: 0, default: 50 }
        ],
        calculate: function(values) {
        let length = values.lengthInput;
        let spacingOption = values.spacingOption;
        let effectiveLength = length - spacingOption * 2;
        let bestSpacing = 0;
        let minDifference = Infinity;
        let bestDivisions = 1;

        for (let divisions = 1; divisions <= effectiveLength; divisions++) {
            let spacing = effectiveLength / divisions;
            let difference = Math.abs(spacing - 400);
            if (difference < minDifference) {
            minDifference = difference;
            bestSpacing = spacing;
            bestDivisions = divisions;
            }
        }
        return `${spacingOption}mm in from each end, then spaced out by ${bestSpacing.toFixed(0)} mm (${bestDivisions + 1} holes)`;
        }
    },

    // B/O Nesting Channel Spacing
    boNesting: {
        title: "B/O Nesting Channel Spacing",
        description: "Calculate the spacing needed for B/O Nesting Channel based on the doors sizes.",
        inputs: [
            { id: "boDoorSize", label: "B/O Door Size in mm:", type: "number", min: 0 },
            { id: "houseDoorSize", label: "House Door Size in mm:", type: "number", min: 0 }
        ],
        calculate: function(values) {
            let difference = values.boDoorSize - values.houseDoorSize;
            let finalResult = difference / 2;
            return `${finalResult.toFixed(1)} mm in from each side`;
        }
    },

    // Even Pleated Screen Fixings for Face Fit
    pleatedScreen: {
        title: "Pleated Screen Fixings",
        description: "Calculate the hole spacing for a Face Fix Pleated Screens based on width and height.",
        inputs: [
        { id: "pleatedWidth", label: "Overall Width of Screen in mm:", type: "number", min: 0 },
        { id: "pleatedHeight", label: "Overall Height of Screen in mm:", type: "number", min: 0 }
        ],
        calculate: function(values) {
        let pleatedWidth = values.pleatedWidth;
        let pleatedHeight = values.pleatedHeight;
        let finalWidth = pleatedWidth > 1500 ? pleatedWidth / 3 : pleatedWidth / 2;
        let finalHeight = pleatedHeight > 2400 ? pleatedHeight / 3 : pleatedHeight / 2;
        return `8mm Holes Needed for Face Fixing every ${finalWidth.toFixed(0)}mm for Width and every ${finalHeight.toFixed(0)}mm for Height`;
        }
    },

    // Ziptrack Spring Tension
    zipTrack: {
        title: "Ziptrak Spring Tension/Turns",
        description: "Find out how much tension 'turns' a Ziptrak spring needs. (Use as Guide, Higher Number for Exposed Areas)",
        inputs: [
            { id: "zipTrackWidth", label: "Width (m):", type: "number", min: 0, step: 0.1 },
            { id: "zipTrackHeight", label: "Height (m):", type: "number", min: 0, step: 0.1 },
            { id: "secondSpring", label: "2nd Spring?", type: "checkbox" },
            { id: "heavyDutyBar", label: "Heavy Duty Bar?", type: "checkbox" }
        ],
        calculate: function(values) {
            let width = Math.min(8, Math.round(values.zipTrackWidth * 2) / 2);
            let height = Math.min(8, Math.round(values.zipTrackHeight * 2) / 2);

            const turnsTable = {
            '0.5': { '0.5': '8 - 10', '1': '9 - 11', '1.5': '10 - 12', '2': '11 - 13', '2.5': '12 - 14', '3': '13 - 15', '3.5': '14 - 16', '4': '15 - 17', '4.5': '16 - 18', '5': '17 - 19', '5.5': '18 - 20', '6': '19 - 21', '6.5': '20 - 22', '7': '21 - 23', '7.5': '22 - 24', '8': '23 - 25' },
            '1':   { '0.5': '9 - 11', '1': '10 - 12', '1.5': '11 - 13', '2': '12 - 14', '2.5': '12 - 14', '3': '13 - 15', '3.5': '14 - 16', '4': '15 - 17', '4.5': '16 - 18', '5': '17 - 19', '5.5': '18 - 20', '6': '19 - 21', '6.5': '20 - 22', '7': '21 - 23', '7.5': '22 - 24', '8': '23 - 25' },
            '1.5': { '0.5': '10 - 12', '1': '11 - 13', '1.5': '12 - 14', '2': '14 - 16', '2.5': '13 - 15', '3': '14 - 16', '3.5': '15 - 17', '4': '16 - 18', '4.5': '17 - 19', '5': '18 - 20', '5.5': '19 - 21', '6': '20 - 22', '6.5': '21 - 23', '7': '22 - 24', '7.5': '23 - 25', '8': '24 - 26' },
            '2':   { '0.5': '11 - 13', '1': '12 - 14', '1.5': '13 - 15', '2': '15 - 17', '2.5': '16 - 18', '3': '17 - 19', '3.5': '18 - 20', '4': '19 - 21', '4.5': '20 - 22', '5': '21 - 23', '5.5': '22 - 24', '6': '23 - 25', '6.5': '24 - 26', '7': '25 - 27', '7.5': '26 - 28', '8': '27 - 29' },
            '2.5': { '0.5': '12 - 14', '1': '13 - 15', '1.5': '14 - 16', '2': '16 - 18', '2.5': '19 - 21', '3': '18 - 20', '3.5': '20 - 22', '4': '21 - 23', '4.5': '22 - 24', '5': '23 - 25', '5.5': '24 - 26', '6': '25 - 27', '6.5': '26 - 28', '7': '27 - 29', '7.5': '28 - 30', '8': '29 - 31' },
            '3':   { '0.5': '13 - 15', '1': '14 - 16', '1.5': '15 - 17', '2': '17 - 19', '2.5': '18 - 20', '3': '19 - 21', '3.5': '20 - 22', '4': '21 - 23', '4.5': '22 - 24', '5': '23 - 25', '5.5': '24 - 26', '6': '25 - 27', '6.5': '26 - 28', '7': '27 - 29', '7.5': '28 - 30', '8': '29 - 31' },
            '3.5': { '0.5': '14 - 16', '1': '15 - 17', '1.5': '16 - 18', '2': '18 - 20', '2.5': '19 - 21', '3': '20 - 22', '3.5': '21 - 23', '4': '22 - 24', '4.5': '23 - 25', '5': '24 - 26', '5.5': '25 - 27', '6': '26 - 28', '6.5': '27 - 29', '7': '28 - 30', '7.5': '29 - 31', '8': '30 - 32' },
            '4':   { '0.5': '15 - 17', '1': '16 - 18', '1.5': '17 - 19', '2': '19 - 21', '2.5': '20 - 22', '3': '21 - 23', '3.5': '22 - 24', '4': '23 - 25', '4.5': '24 - 26', '5': '25 - 27', '5.5': '26 - 28', '6': '27 - 29', '6.5': '28 - 30', '7': '29 - 31', '7.5': '30 - 32', '8': '31 - 33' },
            '4.5': { '0.5': '16 - 18', '1': '17 - 19', '1.5': '18 - 20', '2': '20 - 22', '2.5': '21 - 23', '3': '22 - 24', '3.5': '23 - 25', '4': '24 - 26', '4.5': '25 - 27', '5': '26 - 28', '5.5': '27 - 29', '6': '28 - 30', '6.5': '29 - 31', '7': '30 - 32', '7.5': '31 - 33', '8': '32 - 34' },
            '5':   { '0.5': '17 - 19', '1': '18 - 20', '1.5': '19 - 21', '2': '21 - 23', '2.5': '22 - 24', '3': '23 - 25', '3.5': '24 - 26', '4': '25 - 27', '4.5': '26 - 28', '5': '27 - 29', '5.5': '28 - 30', '6': '29 - 31', '6.5': '30 - 32', '7': '31 - 33', '7.5': '32 - 34', '8': '32 - 34' },
            '5.5': { '0.5': '18 - 20', '1': '19 - 21', '1.5': '20 - 22', '2': '22 - 24', '2.5': '23 - 25', '3': '24 - 26', '3.5': '25 - 27', '4': '26 - 28', '4.5': '27 - 29', '5': '28 - 30', '5.5': '29 - 31', '6': '30 - 32', '6.5': '31 - 33', '7': '32 - 34', '7.5': '32 - 34', '8': '32 - 34' },
            '6':   { '0.5': '19 - 21', '1': '20 - 22', '1.5': '21 - 23', '2': '23 - 25', '2.5': '24 - 26', '3': '25 - 27', '3.5': '26 - 28', '4': '27 - 29', '4.5': '28 - 30', '5': '29 - 31', '5.5': '30 - 32', '6': '31 - 33', '6.5': '32 - 34', '7': '32 - 34', '7.5': '32 - 34', '8': '32 - 34' },
            '6.5': { '0.5': '20 - 22', '1': '21 - 23', '1.5': '22 - 24', '2': '24 - 26', '2.5': '25 - 27', '3': '26 - 28', '3.5': '27 - 29', '4': '28 - 30', '4.5': '29 - 31', '5': '30 - 32', '5.5': '31 - 33', '6': '32 - 34', '6.5': '32 - 34', '7': '32 - 34', '7.5': '32 - 34', '8': '32 - 34' },
            '7':   { '0.5': '21 - 23', '1': '22 - 24', '1.5': '23 - 25', '2': '25 - 27', '2.5': '26 - 28', '3': '27 - 29', '3.5': '28 - 30', '4': '29 - 31', '4.5': '30 - 32', '5': '31 - 33', '5.5': '32 - 34', '6': '32 - 34', '6.5': '32 - 34', '7': '32 - 34', '7.5': '32 - 34', '8': '32 - 34' },
            '7.5': { '0.5': '22 - 24', '1': '23 - 25', '1.5': '24 - 26', '2': '26 - 28', '2.5': '27 - 29', '3': '28 - 30', '3.5': '29 - 31', '4': '30 - 32', '4.5': '31 - 33', '5': '32 - 34', '5.5': '32 - 34', '6': '32 - 34', '6.5': '32 - 34', '7': '32 - 34', '7.5': '32 - 34', '8': '32 - 34' },
            '8':   { '0.5': '23 - 25', '1': '24 - 26', '1.5': '25 - 27', '2': '27 - 29', '2.5': '28 - 30', '3': '29 - 31', '3.5': '30 - 32', '4': '31 - 33', '4.5': '32 - 34', '5': '32 - 34', '5.5': '32 - 34', '6': '32 - 34', '6.5': '32 - 34', '7': '32 - 34', '7.5': '32 - 34', '8': '32 - 34' }
            };

            let turns = turnsTable[width]?.[height];
            if (!turns) {
            return 'Invalid dimensions. Please enter values to the nearest 0.1m.';
            }

            let min, max;
            if (turns.includes('-')) {
            [min, max] = turns.split(' - ').map(Number);
            } else {
            min = max = Number(turns);
            }

            // Heavy Duty Bar logic
            if (values.heavyDutyBar) {
            min += 3;
            max += 3;
            }

            let mainTurns = (min === max) ? `${min}` : `${min} - ${max}`;
            let output = `ZipTrack Needs ${mainTurns} Turns on the Spring`;

            // 2nd Spring logic
            if (values.secondSpring) {
            let avg = (min + max) / 2;
            let second = Math.round(avg / 2);
            let secondRangeMin = second - 1;
            let secondRangeMax = second + 1;
            let secondTurns = (secondRangeMin === secondRangeMax) ? `${secondRangeMin}` : `${secondRangeMin} - ${secondRangeMax}`;
            output = `ZipTrack Needs ${mainTurns} Turns on the main Spring and ${secondTurns} on the 2nd Spring`;
            }

            return output;
        }
    },
  // Add more calculators here
};