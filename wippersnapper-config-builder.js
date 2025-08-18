// Companion board configurations
/*
List of supported companion boards:
Adalogger FeatherWing - RTC + SD Add-on For All Feather Boards
Product ID: 2922
Add to Cart, Adalogger FeatherWing - RTC + SD Add-on For All Feather Boards

Adafruit PiCowbell Adalogger for Pico - MicroSD, RTC & STEMMA QTAngled shot of black, rectangular datalogging board.
Adafruit PiCowbell Adalogger for Pico - MicroSD, RTC & STEMMA QT
Product ID: 5703

Adafruit Feather RP2040 Adalogger - 8MB Flash with microSD Card - STEMMA QT / Qwiic
Product ID: 5980
(This is a board that includes RTC and SD, not a companion board)

Newer Rev.B Adafruit Assembled Data Logging shield for Arduino  (SD CS = 10, RTC = PCF8523)
Product ID: 1141

Older Rev.A Adafruit Assembled Data Logging shield for Arduino  (SD CS = 10, RTC = DS1307)
Product ID: 1141

Adafruit Audio BFF Add-on for QT Py and Xiao (SD CS = A0, no RTC)
Product ID: 5769

Adafruit microSD Card BFF Add-On for QT Py and Xiao (SD CS = TX, no RTC)
Product ID: 5683

Adafruit WINC1500 WiFi Shield with PCB Antenna (SD CS = D4, no RTC)
Product ID: 3653

Adafruit AirLift Shield - ESP32 WiFi Co-Processor (SD CS = D4, no RTC)
Product ID: 4285
*/

/*
<option value="adalogger">Adafruit Adalogger FeatherWing</option>
<option value="ds3231-precision">Adafruit DS3231 Precision RTC FeatherWing</option>
<option value="picowbell-adalogger">Adafruit PiCowbell Adalogger for Pico</option>
<option value="datalogger-shield-revb">Adafruit Data Logging Shield Rev.B (PCF8523)</option>
<option value="datalogger-shield-reva">Adafruit Data Logging Shield Rev.A (DS1307)</option>
<option value="audio-bff">Adafruit Audio BFF Add-on for QT Py and Xiao</option>
<option value="microsd-bff">Adafruit microSD Card BFF Add-On for QT Py and Xiao</option>
<option value="winc1500-shield">Adafruit WINC1500 WiFi Shield</option>
<option value="airlift-shield">Adafruit AirLift Shield - ESP32 WiFi Co-Processor</option>
*/


// TODO: generate these with product images and links to the product pages as part of boards py script
const companionBoardConfigs = {
    'adalogger': {
        rtc: 'PCF8523',
        sdCardCS: 10,
        extras: 'SD Card',
        productURL: 'https://www.adafruit.com/product/2922',
        documentationURL: 'https://learn.adafruit.com/adafruit-adalogger-featherwing',
        image: 'https://cdn-shop.adafruit.com/640x480/2922-06.jpg'
    },
    'datalogger-m0': {
        rtc: 'PCF8523',
        sdCardCS: 10,
        extras: 'SD Card',
        productURL: 'https://www.adafruit.com/product/2796',
        documentationURL: 'https://learn.adafruit.com/adafruit-feather-m0-adalogger',
        image: 'https://cdn-shop.adafruit.com/640x480/2796-12.jpg'
    },
    'ds3231-precision': {
        rtc: 'DS3231',
        sdCardCS: null,
        extras: 'Precision RTC',
        productURL: 'https://www.adafruit.com/product/3028',
        documentationURL: 'https://learn.adafruit.com/ds3231-precision-rtc-featherwing',
        image: 'https://cdn-shop.adafruit.com/640x480/3028-05.jpg'
    },
    'picowbell-adalogger': {
        rtc: 'PCF8523',
        sdCardCS: 17,
        extras: 'SD Card, STEMMA QT',
        productURL: 'https://www.adafruit.com/product/5703',
        documentationURL: 'https://learn.adafruit.com/adafruit-picowbell-adalogger-for-pico',
        image: 'https://cdn-shop.adafruit.com/640x480/5703-00.jpg'
    },
    'datalogger-shield-revb': {
        rtc: 'PCF8523',
        sdCardCS: 10,
        extras: 'SD Card',
        productURL: 'https://www.adafruit.com/product/1141',
        documentationURL: 'https://learn.adafruit.com/adafruit-data-logger-shield',
        image: 'https://cdn-shop.adafruit.com/640x480/1141-05.jpg'
    },
    'datalogger-shield-reva': {
        rtc: 'DS1307',
        sdCardCS: 10,
        extras: 'SD Card',
        productURL: 'https://www.adafruit.com/product/1141',
        documentationURL: 'https://learn.adafruit.com/adafruit-data-logger-shield',
        image: 'https://cdn-shop.adafruit.com/640x480/1141-05.jpg'
    },
    'audio-bff': {
        rtc: null,
        sdCardCS: 'A0',
        extras: 'Audio',
        productURL: 'https://www.adafruit.com/product/5769',
        documentationURL: 'https://learn.adafruit.com/adafruit-audio-bff',
        image: 'https://cdn-shop.adafruit.com/640x480/5769-00.jpg'
    },
    'microsd-bff': {
        rtc: null,
        sdCardCS: 'TX',
        extras: 'SD Card',
        productURL: 'https://www.adafruit.com/product/5683',
        documentationURL: 'https://learn.adafruit.com/adafruit-microsd-card-bff',
        image: 'https://cdn-shop.adafruit.com/640x480/5683-07.jpg'
    },
    'winc1500-shield': {
        rtc: null,
        sdCardCS: 'D4',
        extras: 'WiFi',
        productURL: 'https://www.adafruit.com/product/3653',
        documentationURL: 'https://learn.adafruit.com/adafruit-winc1500-wifi-shield-for-arduino',
        image: 'https://cdn-shop.adafruit.com/640x480/3653-05.jpg'
    },
    'airlift-shield': {
        rtc: null,
        sdCardCS: 'D4',
        extras: 'WiFi',
        productURL: 'https://www.adafruit.com/product/4285',
        documentationURL: 'https://learn.adafruit.com/adafruit-airlift-shield-esp32-wifi-co-processor',
        image: 'https://cdn-shop.adafruit.com/640x480/4285-05.jpg'
    },
    'seeed-xiao-s3sense-camera-addon': {
        rtc: null,
        sdCardCS: 21,
        extras: 'SD Card, Camera, Microphone, Extra GPIOs D11+D12',
        productURL: 'https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html',
        documentationURL: 'https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/',
        image: 'https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg'
    },
    'seeed-xiao-ssd1306-expansion-base': {
        rtc: 'PCF8563',
        sdCardCS: 'D2',
        extras: 'SD Card, Display, Piezo Speaker, LiPo connector',
        productURL: 'https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html',
        documentationURL: 'https://wiki.seeedstudio.com/Seeeduino-XIAO-Expansion-Board/',
        image: 'https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg'
    }
};

// Custom boards collection (for boards without definition.json files)
let customBoardsCollection = {};

// Function to add a custom board to the collection
function addCustomBoard(id, config) {
    if (!id || typeof id !== 'string') {
        console.error('Invalid board ID');
        return false;
    }

    // Create a new board entry with required fields
    customBoardsCollection[id] = {
        name: config.name || id,
        referenceVoltage: config.referenceVoltage || 3.3,
        totalGPIOPins: config.totalGPIOPins || 0,
        totalAnalogPins: config.totalAnalogPins || 0,
        defaultI2C: {
            SCL: config.defaultI2C?.SCL || 'SCL',
            SDA: config.defaultI2C?.SDA || 'SDA'
        },
        pins: config.pins || [],
        analogPins: (config.pins || [])
    };

    // Add the board to appState.boardsData
    appState.boardsData[id] = customBoardsCollection[id];

    // Add the board to the select dropdown if it exists
    const selectElement = document.getElementById('board-select');
    if (selectElement) {
        const option = document.createElement('option');
        option.value = id;
        option.textContent = config.name || `Custom Board: ${id}`;
        selectElement.appendChild(option);
    }

    return true;
}

// Use the appState from load-wippersnapper-data.js if it exists
// Otherwise, initialize with default values
if (typeof appState === 'undefined') {
    window.appState = {
        enableautoConfig: true,
        selectedBoard: null,
        companionBoard: null,
        sdCardCS: null,
        rtcType: 'soft',
        statusLEDBrightness: 0.5,
        i2cBuses: [],
        i2cMultiplexers: [],
        selectedComponents: [],
        usedPins: new Set(),
        nextComponentId: 1,
        componentsData: {
            i2c: [],
            ds18x20: [],
            pin: [],
            pixel: [],
            pwm: [],
            servo: [],
            uart: []
        },
        boardsData: {},
        isImporting: false
    };
}

// Reference to componentsData for backward compatibility
let componentsData = appState.componentsData;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading indicator once data is loaded
    document.getElementById('loading-indicator').classList.add('hidden');

    // PRIMARY BOARD SELECTION HANDLER
    // This is the central event handler for board selection that should be maintained
    // The duplicate handler in load-wippersnapper-data.js has been removed to prevent conflicts
    document.getElementById('board-select').addEventListener('change', function() {
        const boardId = this.value;
        if (!boardId) {
            document.getElementById('board-details').classList.add('hidden');
            document.getElementById('board-purchase').innerHTML = '';
            document.getElementById('board-help').innerHTML = '';
            hideSubsequentSections();
            return;
        }

        const board = appState.boardsData[boardId];
        appState.selectedBoard = {
            id: boardId,
            ...board
        };

        // Update board details display
        document.getElementById('ref-voltage').textContent = board.referenceVoltage;
        document.getElementById('total-gpio').textContent = board.totalGPIOPins;
        document.getElementById('total-analog').textContent = board.totalAnalogPins;
        document.getElementById('default-SCL').textContent = board.defaultI2C.SCL;
        document.getElementById('default-SDA').textContent = board.defaultI2C.SDA;
        document.getElementById('board-details').classList.remove('hidden');

        // Product URL + Docs
        if ("productURL" in board && board.productURL) {
            document.getElementById('board-purchase').innerHTML = `<a href="${board.productURL}" style="padding: 0 10px 0 30px;" target="_blank" title="Product page">Buy 🛒</a> `;
        } else {
            document.getElementById('board-purchase').innerHTML = '';
        }
        if ("documentationURL" in board && board.documentationURL) {
            document.getElementById('board-help').innerHTML = ` <a href="${board.documentationURL}" style="padding: 0 10px;" target="_blank" title="Board Documentation">📃Docs❓</a>`;
        } else {
            document.getElementById('board-help').innerHTML = '';
        }

        // If there's a board image, show it
        const boardImageElem = document.getElementById('board-image');
        if (boardImageElem) {
            if (board.image) {
                if (!board.image.startsWith('http')) {
                    boardImageElem.src = "https://raw.githubusercontent.com/adafruit/Wippersnapper_Boards/refs/heads/offline-mode/" + board.image;
                } else {
                    boardImageElem.src = board.image;
                }
                boardImageElem.classList.remove('hidden');
            } else {
                boardImageElem.classList.add('hidden');
            }
        }

        // Set up default I2C bus
        appState.i2cBuses = [{
            id: 'default',
            SCL: board.defaultI2C.SCL,
            SDA: board.defaultI2C.SDA
        }];

        // Update default I2C bus display
        document.getElementById('default-i2c-SCL').textContent = board.defaultI2C.SCL;
        document.getElementById('default-i2c-SDA').textContent = board.defaultI2C.SDA;

        // Mark default I2C pins as used
        appState.usedPins.add(board.defaultI2C.SCL);
        appState.usedPins.add(board.defaultI2C.SDA);

        // Show companion board section and all subsequent sections
        document.getElementById('companion-board-section').classList.remove('hidden');
        document.getElementById('manual-config-section').classList.remove('hidden');
        document.getElementById('i2c-bus-section').classList.remove('hidden');
        document.getElementById('components-section').classList.remove('hidden');
        document.getElementById('selected-components-section').classList.remove('hidden');
        document.getElementById('generate-section').classList.remove('hidden');

        // Reset companion board selection but keep sections visible
        document.getElementById('companion-board-select').value = '';
        document.getElementById('companion-details').classList.add('hidden');

        // Initialize SD and RTC sections based on board
        initializeManualConfig(board);


        // update firmware download url to use installBoardName or fall back to releases page
        // collect the asset names, split on '.' after removing wippersnapper. and take first part.
        const firmwareFile = document.getElementById('firmware_file');
        const firmwareData = window['FIRMWARE_DATA'];
        const boardInstallName = (board.installBoardName || "").replaceAll('-','_').replace('picow','pico');
        const assets = firmwareData.firmwareFiles.map(asset => { return {"name":asset.name.replace('wippersnapper.', '').split('.')[0], "url":asset.url}; });
        const asset = assets.find(asset => asset.name === boardInstallName);
        if (asset) {
            firmwareFile.href = asset.url;
        } else {
            firmwareFile.href = firmwareData.releaseInfo.url;
        }

        // Initialize pins lists for SD and I2C configuration
        populatePinsLists();

        convertComponentsDataToConfig();


        // Initialize components sections
        populateComponentLists();

        // Initialize multiplexer list
        updateMuxList();
    });

    // Companion board selection handler
    document.getElementById('companion-board-select').addEventListener('change', function() {
        const companionId = this.value;
        appState.companionBoard = companionId ? { id: companionId, ...companionBoardConfigs[companionId] } : null;

        if (companionId) {
            const companion = companionBoardConfigs[companionId];

            // Update companion details display
            document.getElementById('companion-rtc').textContent = companion.rtc || 'None';
            document.getElementById('companion-sd-cs').textContent = companion.sdCardCS !== null ? companion.sdCardCS : 'None';
            document.getElementById('companion-extras').textContent = companion.extras;
            document.getElementById('companion-details').classList.remove('hidden');

            // Update SD card section
            if (companion.sdCardCS !== null) {
                let pin = null;
                if (typeof(companion.sdCardCS) != 'number' && !appState.selectedBoard.pins.find(p => p.displayName === companion.sdCardCS)) {
                    // if not found, try to find it in display name, if one candidate, use it, otherwise prefer to find inside brackets
                    let pins = appState.selectedBoard.pins.filter(p => p.displayName.includes(companion.sdCardCS));
                    if (pins.length === 1) {
                        pin = pins[0];
                    } else {
                        const regex = new RegExp(`\\(.*?${companion.sdCardCS}.*?\\)`);
                        regex_pins = appState.selectedBoard.pins.filter(p => regex.test(p.displayName));
                        if (regex_pins.length > 0) {
                            pin = regex_pins[0];
                        } else if (pins.length > 1) {
                            pin = pins[0];
                        }
                    }
                } else if (typeof(companion.sdCardCS) === 'number') { /* is numeric */
                    pin = appState.selectedBoard.pins.find(p => p.number === companion.sdCardCS);
                } else {
                    pin = appState.selectedBoard.pins.find(p => p.displayName === companion.sdCardCS);
                }

                if (pin) {
                    if (appState.sdCardCS !== null) {
                        appState.usedPins.delete(appState.sdCardCS);
                    }
                    appState.sdCardCS = pin.number;
                    document.getElementById('sd-missing').classList.add('hidden');
                    document.getElementById('sd-present').classList.remove('hidden');
                    document.getElementById('sd-cs-pin').textContent = pin.number;

                    // Mark SD CS pin as used
                    appState.usedPins.add(pin.number);
                } else {
                    console.warn(`[${companionId}] SD card CS pin ${companion.sdCardCS} not found in selected board pins.`);
                    document.getElementById('sd-missing').classList.remove('hidden');
                    document.getElementById('sd-present').classList.add('hidden');
                }
            } else {
                // Companion board doesn't provide SD card, show manual config
                document.getElementById('sd-missing').classList.remove('hidden');
                document.getElementById('sd-present').classList.add('hidden');
                appState.sdCardCS = null;
            }

            if ("productURL" in companion && companion.productURL) {
                document.getElementById('companion-purchase').innerHTML = `<a href="${companion.productURL}" style="padding: 0 10px 0 30px;" target="_blank" title="Product page">Buy 🛒</a> `;
            } else {
                document.getElementById('companion-purchase').innerHTML = '';
            }
            if ("documentationURL" in companion && companion.documentationURL) {
                document.getElementById('companion-help').innerHTML = ` <a href="${companion.documentationURL}" style="padding: 0 10px;" target="_blank" title="Board Documentation">📃Docs❓</a>`
            } else {
                document.getElementById('companion-help').innerHTML = '';
            }

            if (companion.image) {
                document.getElementById('companion-image').src = companion.image;
                document.getElementById('companion-image').classList.remove('hidden');
            } else {
                document.getElementById('companion-image').src = '';
                document.getElementById('companion-image').classList.add('hidden');
            }

            // Update RTC section
            if (companion.rtc) {
                appState.rtcType = companion.rtc;
                document.getElementById('rtc-missing').classList.add('hidden');
                document.getElementById('rtc-present').classList.remove('hidden');
                document.getElementById('rtc-type').textContent = companion.rtc;
            } else {
                // Companion board doesn't provide RTC, show manual config
                document.getElementById('rtc-missing').classList.remove('hidden');
                document.getElementById('rtc-present').classList.add('hidden');
                appState.rtcType = 'soft';
                document.getElementById('rtc-select').value = 'soft';
            }
        } else {
            document.getElementById('companion-details').classList.add('hidden');
            document.getElementById('companion-image').src = '';
            document.getElementById('companion-image').classList.add('hidden');
            // Reset SD card and RTC sections to manual configuration
            document.getElementById('sd-missing').classList.remove('hidden');
            document.getElementById('sd-present').classList.add('hidden');
            document.getElementById('rtc-missing').classList.remove('hidden');
            document.getElementById('rtc-present').classList.add('hidden');
            if (appState.sdCardCS !== null) {
                appState.usedPins.delete(appState.sdCardCS);
                document.getElementById('manual-sd-cs-pin').textContent = '';
                document.getElementById('sd-cs-pin').textContent = '';
                appState.sdCardCS = null;
            }
            appState.rtcType = 'soft';
            document.getElementById('rtc-select').value = 'soft';
        }

        // Refresh pin lists to reflect used pins
        populatePinsLists();
    });

    // Add SD card checkbox handler
    document.getElementById('add-sd-card').addEventListener('change', function() {
        if (this.checked) {
            document.getElementById('sd-card-pin-select').classList.remove('hidden');
        } else {
            document.getElementById('sd-card-pin-select').classList.add('hidden');
            appState.usedPins.delete(appState.sdCardCS);
            document.getElementById('manual-sd-cs-pin').textContent = '';
            document.getElementById('sd-cs-pin').textContent = '';
            appState.sdCardCS = null;
        }
        populatePinsLists();
    });

    // RTC type selection handler
    document.getElementById('rtc-select').addEventListener('change', function() {
        appState.rtcType = this.value;
    });

    // LED brightness slider handler
    document.getElementById('led-brightness').addEventListener('input', function() {
        const value = parseFloat(this.value);
        appState.statusLEDBrightness = value;
        document.getElementById('brightness-value').textContent = value.toFixed(2);
    });

    // Add additional I2C bus checkbox handler
    document.getElementById('add-i2c-bus').addEventListener('change', function() {
        if (this.checked) {
            document.getElementById('additional-i2c-config').classList.remove('hidden');
        } else {
            document.getElementById('additional-i2c-config').classList.add('hidden');

            // Remove additional I2C bus if unchecked
            const additionalBusIndex = appState.i2cBuses.findIndex(bus => bus.id !== 'default');
            if (additionalBusIndex !== -1) {
                // Free up the pins
                const bus = appState.i2cBuses[additionalBusIndex];
                appState.usedPins.delete(bus.SCL);
                appState.usedPins.delete(bus.SDA);
                document.getElementById('alt-SCL-pin').textContent = '';
                document.getElementById('alt-SDA-pin').textContent = '';
                // Remove the bus
                appState.i2cBuses.splice(additionalBusIndex, 1);
                populatePinsLists();
                // // Update I2C bus select options
                // updateI2CBusOptions();
            }
        }
    });

    // Add I2C Multiplexer button handler
    document.getElementById('add-mux-btn').addEventListener('click', function() {
        showAddMultiplexerModal();
    });

    // Generate Configuration button handler
    document.getElementById('generate-config-btn').addEventListener('click', function() {
        generateConfiguration();
    });

    // Download Configuration button handler
    document.getElementById('download-config-btn').addEventListener('click', function() {
        downloadConfiguration();
    });

    // Import Configuration button handler
document.getElementById('import-btn').addEventListener('click', function() {
    const fileInput = document.getElementById('import-file');
    if (!fileInput.files || fileInput.files.length === 0) {
    alert('Please select a file to import.');
    return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        try {
            // Read the file content into the text area
            const jsonText = e.target.result;
            document.getElementById('import-json').value = jsonText;

            // Trigger the import from text button
            document.getElementById('import-json-btn').click();

            // Clear the file input
            fileInput.value = '';
        } catch (error) {
            alert('Error reading file: ' + error.message);
        }
    };

    reader.onerror = function() {
    alert('Error reading file.');
    };

    reader.readAsText(file);
});

    // Import from text button handler
document.getElementById('import-json-btn').addEventListener('click', function() {
    importConfiguration();
});

    // Export Configuration button handler
    document.getElementById('export-btn').addEventListener('click', function() {
        downloadConfiguration(true);
    });

    // Reset Configurator buttons handler
    document.querySelectorAll('.reset-btn').forEach(button => {
        button.addEventListener('click', function() {
            if (confirm('Are you sure you want to reset the configurator? All your current configuration will be lost.')) {
                resetAppState();
                window.location.reload();
            }
        });
    });

    // Modal cancel button handler
    document.getElementById('modal-cancel').addEventListener('click', function() {
        closeModal();
    });

    // Modal save button handler
    document.getElementById('modal-save').addEventListener('click', function() {
        saveModalData();
    });

    // Component search functionality
    document.querySelectorAll('.component-search').forEach(searchInput => {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const componentType = this.id.split('-')[0]; // Extract type from ID (e.g., "i2c" from "i2c-search")
            const componentList = document.getElementById(`${componentType}-component-list`);

            // Filter components
            const components = componentList.querySelectorAll('.component-card');
            components.forEach(component => {
                const componentName = component.querySelector('h4').textContent.toLowerCase();
                const shouldShow = componentName.includes(searchTerm);
                component.style.display = shouldShow ? 'block' : 'none';
            });
        });
    });

    // Add custom board button handler
    document.getElementById('add-custom-board-btn').addEventListener('click', function() {
        const boardName = document.getElementById('custom-board-name').value.trim();
        if (!boardName) {
            alert('Please enter a board name');
            return;
        }

        // Generate a unique ID for the board
        const boardId = 'custom-' + boardName.toLowerCase().replace(/\s+/g, '-');

        // Get the form values
        const refVoltage = parseFloat(document.getElementById('custom-board-ref-voltage').value) || 3.3;
        const gpioPins = parseInt(document.getElementById('custom-board-gpio').value) || 0;
        const analogPins = parseInt(document.getElementById('custom-board-analog').value) || 0;
        const SCLPin = document.getElementById('custom-board-SCL').value.trim() || 'SCL';
        const SDAPin = document.getElementById('custom-board-SDA').value.trim() || 'SDA';

        // Create the board configuration
        const boardConfig = {
            name: boardName,
            referenceVoltage: refVoltage,
            totalGPIOPins: gpioPins,
            totalAnalogPins: analogPins,
            defaultI2C: {
                SCL: SCLPin,
                SDA: SDAPin
            },
            pins: [] // Could be expanded to include pin definitions
        };

        // Add the custom board
        if (addCustomBoard(boardId, boardConfig)) {
            alert('Custom board added successfully!');

            // Reset the form
            document.getElementById('custom-board-name').value = '';
            document.getElementById('custom-board-ref-voltage').value = '3.3';
            document.getElementById('custom-board-gpio').value = '0';
            document.getElementById('custom-board-analog').value = '0';
            document.getElementById('custom-board-SCL').value = '';
            document.getElementById('custom-board-SDA').value = '';

            // Show the custom boards list and add this board to it
            document.getElementById('custom-boards-list').classList.remove('hidden');
            const listItem = document.createElement('li');
            listItem.textContent = `${boardName} (ID: ${boardId})`;
            document.getElementById('custom-boards-items').appendChild(listItem);
        } else {
            alert('Failed to add custom board. Please try again.');
        }
    });
});

// Helper functions
function hideSubsequentSections() {
    document.getElementById('companion-board-section').classList.add('hidden');
    document.getElementById('manual-config-section').classList.add('hidden');
    document.getElementById('i2c-bus-section').classList.add('hidden');
    document.getElementById('components-section').classList.add('hidden');
    document.getElementById('selected-components-section').classList.add('hidden');
    document.getElementById('generate-section').classList.add('hidden');
}

function resetSubsequentSelections() {
    // Reset companion board selection
    document.getElementById('companion-board-select').value = '';
    document.getElementById('companion-details').classList.add('hidden');

    // Reset manual config
    document.getElementById('add-sd-card').checked = false;
    document.getElementById('sd-card-pin-select').classList.add('hidden');
    document.getElementById('manual-sd-cs-pin').textContent = '';
    document.getElementById('alt-SCL-pin').textContent = '';
    document.getElementById('alt-SDA-pin').textContent = '';
    document.getElementById('rtc-select').value = 'soft';
    document.getElementById('led-brightness').value = 0.5;
    document.getElementById('brightness-value').textContent = '0.5';

    // Reset I2C bus config
    document.getElementById('add-i2c-bus').checked = false;
    document.getElementById('additional-i2c-config').classList.add('hidden');

    // Reset component selections
    appState.selectedComponents = [];
    appState.i2cMultiplexers = [];
    updateSelectedComponentsList();

    // Reset used pins to just the default I2C pins
    appState.usedPins = new Set();
    if (appState.selectedBoard) {
        appState.usedPins.add(appState.selectedBoard.defaultI2C.SCL);
        appState.usedPins.add(appState.selectedBoard.defaultI2C.SDA);
    }
}

function initializeManualConfig(boardConfig) {
    if (boardConfig && "sdCardCS" in boardConfig && boardConfig.sdCardCS !== null) {
        appState.sdCardCS = boardConfig.sdCardCS;
        document.getElementById('sd-missing').classList.add('hidden');
        document.getElementById('sd-present').classList.remove('hidden');
        document.getElementById('sd-cs-pin').textContent = boardConfig.sdCardCS;

        // Mark SD CS pin as used
        appState.usedPins.add(boardConfig.sdCardCS);
        console.log('Using on-board sd card cs', boardConfig.sdCardCS);
    } else {
        // Companion board doesn't provide SD card, show manual config
        document.getElementById('sd-missing').classList.remove('hidden');
        document.getElementById('sd-present').classList.add('hidden');
        appState.sdCardCS = null;
    }

    if (boardConfig && "rtc" in boardConfig && !["soft", "SOFT", "", null].includes(boardConfig.rtc)) {
        appState.rtcType = boardConfig.rtc;
        document.getElementById('rtc-missing').classList.add('hidden');
        document.getElementById('rtc-present').classList.remove('hidden');
        document.getElementById('rtc-type').textContent = boardConfig.rtc;
    } else {
        // board doesn't provide RTC, show manual config
        document.getElementById('rtc-missing').classList.remove('hidden');
        document.getElementById('rtc-present').classList.add('hidden');
        appState.rtcType = 'soft';
        document.getElementById('rtc-select').value = 'soft';
    }

    // Initialize LED brightness
    document.getElementById('led-brightness').value = 0.5;
    document.getElementById('brightness-value').textContent = '0.5';
    appState.statusLEDBrightness = 0.5;
}

function populatePinsLists() {
    if (!appState.selectedBoard) return;

    const pins = appState.selectedBoard.pins;

    // Populate SD card pins list
    const sdPinsList = document.getElementById('sd-pins-list');
    sdPinsList.innerHTML = '';
    pins.forEach(pin => {
        const pinElem = document.createElement('div');
        pinElem.className = 'pin' + (appState.usedPins.has(pin.number) ? ' used' : '');
        pinElem.textContent = `${pin.displayName} [Pin ${pin.number}]`;

        if (!appState.usedPins.has(pin.number)) {
            pinElem.addEventListener('click', function() {
                // Deselect any previously selected SD CS pin
                if (appState.sdCardCS !== null) {
                    appState.usedPins.delete(appState.sdCardCS);
                }

                // Set new SD CS pin
                appState.sdCardCS = pin.number;
                appState.usedPins.add(pin.number);
                document.getElementById('manual-sd-cs-pin').textContent = pin.number;

                // Update pin selection UI
                const allPins = sdPinsList.querySelectorAll('.pin');
                allPins.forEach(p => p.classList.remove('used'));
                pinElem.classList.add('used');

                // Refresh other pin lists
                populatePinsLists();
            });
        }

        sdPinsList.appendChild(pinElem);
    });

    // Populate SCL pins list for additional I2C bus
    const SCLPinsList = document.getElementById('SCL-pins-list');
    SCLPinsList.innerHTML = '';
    pins.forEach(pin => {
        const pinElem = document.createElement('div');
        pinElem.className = 'pin' + (appState.usedPins.has(pin.number) ? ' used' : '');
        pinElem.textContent = `${pin.displayName} [Pin ${pin.number}]`;

        if (!appState.usedPins.has(pin.number)) {
            pinElem.addEventListener('click', function() {
                // Find additional I2C bus or create it
                let additionalBus = appState.i2cBuses.find(bus => bus.id !== 'default');
                if (additionalBus) {
                    // Free up old SCL pin if it exists
                    if (additionalBus.SCL !== undefined) {
                        appState.usedPins.delete(additionalBus.SCL);
                    }

                    // Set new SCL pin
                    additionalBus.SCL = pin.number;
                } else {
                    // Create new additional bus
                    additionalBus = {
                        id: 'additional',
                        SCL: pin.number,
                        SDA: undefined
                    };
                    appState.i2cBuses.push(additionalBus);
                }

                // Mark pin as used
                appState.usedPins.add(pin.number);
                document.getElementById('alt-SCL-pin').textContent = pin.number;

                // Update pin selection UI
                const allPins = SCLPinsList.querySelectorAll('.pin');
                allPins.forEach(p => p.classList.remove('used'));
                pinElem.classList.add('used');

                // Refresh other pin lists
                populatePinsLists();

                // // Update I2C bus dropdown in components section
                // if (additionalBus.SDA !== undefined) {
                //     updateI2CBusOptions();
                // }
            });
        }

        SCLPinsList.appendChild(pinElem);
    });

    // Populate SDA pins list for additional I2C bus
    const SDAPinsList = document.getElementById('SDA-pins-list');
    SDAPinsList.innerHTML = '';
    pins.forEach(pin => {
        const pinElem = document.createElement('div');
        pinElem.className = 'pin' + (appState.usedPins.has(pin.number) ? ' used' : '');
        pinElem.textContent = `${pin.displayName} [Pin ${pin.number}]`;

        if (!appState.usedPins.has(pin.number)) {
            pinElem.addEventListener('click', function() {
                // Find additional I2C bus or create it
                let additionalBus = appState.i2cBuses.find(bus => bus.id !== 'default');
                if (additionalBus) {
                    // Free up old SDA pin if it exists
                    if (additionalBus.SDA !== undefined) {
                        appState.usedPins.delete(additionalBus.SDA);
                    }

                    // Set new SDA pin
                    additionalBus.SDA = pin.number;
                } else {
                    // Create new additional bus
                    additionalBus = {
                        id: 'additional',
                        SCL: undefined,
                        SDA: pin.number
                    };
                    appState.i2cBuses.push(additionalBus);
                }

                // Mark pin as used
                appState.usedPins.add(pin.number);
                document.getElementById('alt-SDA-pin').textContent = pin.number;

                // Update pin selection UI
                const allPins = SDAPinsList.querySelectorAll('.pin');
                allPins.forEach(p => p.classList.remove('used'));
                pinElem.classList.add('used');

                // Refresh other pin lists
                populatePinsLists();

                // // Update I2C bus dropdown in components section
                // if (additionalBus.SCL !== undefined) {
                //     updateI2CBusOptions();
                // }
            });
        }

        SDAPinsList.appendChild(pinElem);
    });
}

function updateI2CBusOptions() {
    const i2cBusSelect = document.getElementById('i2c-bus-select');
    i2cBusSelect.innerHTML = '';

    appState.i2cBuses.forEach(bus => {
        if (bus.SCL !== undefined && bus.SDA !== undefined) {
            const option = document.createElement('option');
            option.value = bus.id;
            option.textContent = bus.id === 'default' ?
                'Default I2C Bus (SCL: ' + bus.SCL + ', SDA: ' + bus.SDA + ')' :
                'Additional I2C Bus (SCL: ' + bus.SCL + ', SDA: ' + bus.SDA + ')';
            i2cBusSelect.appendChild(option);
        }
    });

    // Add options for each multiplexer channel
    appState.i2cMultiplexers.forEach(mux => {
        for (let i = 0; i < mux.channels; i++) {
            const option = document.createElement('option');
            const busId = `mux-${mux.id}-ch-${i}`;
            option.value = busId;
            option.textContent = `Multiplexer ${mux.address} - Channel ${i}`;
            i2cBusSelect.appendChild(option);
        }
    });
}

function populateComponentLists() {
    // Populate All Components
    const allList = document.getElementById('all-component-list');
    allList.innerHTML = '';

    // Add I2C components to All Components
    appState.componentsData.i2c.forEach(component => {
        const card = createComponentCard(component, 'i2c');
        allList.appendChild(card);
    });

    // Add DS18x20 components to All Components
    appState.componentsData.ds18x20.forEach(component => {
        const card = createComponentCard(component, 'ds18x20');
        allList.appendChild(card);
    });

    // Add Pin components to All Components
    appState.componentsData.pin.forEach(component => {
        const card = createComponentCard(component, 'pin');
        allList.appendChild(card);
    });

    // Add Pixel components to All Components
    appState.componentsData.pixel.forEach(component => {
        const card = createComponentCard(component, 'pixel');
        allList.appendChild(card);
    });

    // Add PWM components to All Components
    appState.componentsData.pwm.forEach(component => {
        const card = createComponentCard(component, 'pwm');
        allList.appendChild(card);
    });

    // Add Servo components to All Components
    appState.componentsData.servo.forEach(component => {
        const card = createComponentCard(component, 'servo');
        allList.appendChild(card);
    });

    // Add UART components to All Components
    appState.componentsData.uart.forEach(component => {
        const card = createComponentCard(component, 'uart');
        allList.appendChild(card);
    });

    // Populate I2C components
    const i2cList = document.getElementById('i2c-component-list');
    i2cList.innerHTML = '';
    appState.componentsData.i2c.forEach(component => {
        const card = createComponentCard(component, 'i2c');
        i2cList.appendChild(card);
    });

    // Populate DS18x20 components
    const ds18x20List = document.getElementById('ds18x20-component-list');
    ds18x20List.innerHTML = '';
    appState.componentsData.ds18x20.forEach(component => {
        const card = createComponentCard(component, 'ds18x20');
        ds18x20List.appendChild(card);
    });

    // Populate Pin components
    const pinList = document.getElementById('pin-component-list');
    pinList.innerHTML = '';
    appState.componentsData.pin.forEach(component => {
        const card = createComponentCard(component, 'pin');
        pinList.appendChild(card);
    });

    // Populate Pixel components
    const pixelList = document.getElementById('pixel-component-list');
    pixelList.innerHTML = '';
    appState.componentsData.pixel.forEach(component => {
        const card = createComponentCard(component, 'pixel');
        pixelList.appendChild(card);
    });

    // Populate PWM components
    const pwmList = document.getElementById('pwm-component-list');
    pwmList.innerHTML = '';
    appState.componentsData.pwm.forEach(component => {
        const card = createComponentCard(component, 'pwm');
        pwmList.appendChild(card);
    });

    // Populate Servo components
    const servoList = document.getElementById('servo-component-list');
    servoList.innerHTML = '';
    appState.componentsData.servo.forEach(component => {
        const card = createComponentCard(component, 'servo');
        servoList.appendChild(card);
    });

    // Populate UART components
    const uartList = document.getElementById('uart-component-list');
    uartList.innerHTML = '';
    appState.componentsData.uart.forEach(component => {
        const card = createComponentCard(component, 'uart');
        uartList.appendChild(card);
    });

    // // Update I2C bus options
    // updateI2CBusOptions();

    // // Add search functionality for all components
    // document.getElementById('all-search').addEventListener('input', function() {
    //     const searchTerm = this.value.toLowerCase();
    //     const allComponents = document.querySelectorAll('#all-component-list .component-card');

    //     allComponents.forEach(card => {
    //         const componentName = card.querySelector('h3').textContent.toLowerCase();
    //         if (componentName.includes(searchTerm)) {
    //             card.style.display = 'block';
    //         } else {
    //             card.style.display = 'none';
    //         }
    //     });
    // });
}

function createComponentCard(component, type) {
    const card = document.createElement('div');
    card.className = 'component-card';
    card.dataset.id = component.id;
    card.dataset.type = type;

    // Add image if available
    if (component.image) {
        const img = document.createElement('img');
        if (!component.image.startsWith('http')) {
            img.src = "https://raw.githubusercontent.com/adafruit/Wippersnapper_Components/refs/heads/offline-mode/" + component.image;
        } else {
            img.src = component.image;
        }
        img.alt = component.name;
        card.appendChild(img);
    }

    const title = document.createElement('h4');
    title.textContent = component.displayName;
    card.appendChild(title);

    if (type === 'i2c' && component.address) {
        const address = document.createElement('p');
        address.textContent = `Default I2C Address: ${component.address}`;
        card.appendChild(address);
    }

    if (component.description) {
        const description = document.createElement('p');
        description.style.fontSize = 'small';
        description.textContent = component.description;
        card.appendChild(description);
    }

    if (component.dataTypes && component.dataTypes.length > 0) {
        const dataTypes = document.createElement('p');
        const joined_string = component.dataTypes.map(dt => typeof(dt) === 'object' ?
            dt.displayName || dt.sensorType : dt).join(", ");
        dataTypes.innerHTML = `Data Types: <span style="font-size: small">${joined_string}</span>`;
        card.appendChild(dataTypes);
    }

    const addBtn = document.createElement('button');
    addBtn.textContent = 'Add Component';
    addBtn.addEventListener('click', function() {
        showComponentConfigModal(component, type);
    });
    card.appendChild(addBtn);

    // Add links container
    const linksContainer = document.createElement('div');
    linksContainer.style.marginTop = '5px';
    linksContainer.style.display = 'inline-block';

    // Add purchase link if available
    if (component.productURL || component.productUrl) {
        const productURL = component.productURL || component.productUrl;
        const purchaseLink = document.createElement('a');
        purchaseLink.href = productURL;
        purchaseLink.target = '_blank';
        purchaseLink.title = 'Product page';
        purchaseLink.innerHTML = `<span style="padding: 0 5px;">🛒</span>`;
        purchaseLink.style.textDecoration = 'none';
        linksContainer.appendChild(purchaseLink);
    }

    // Add documentation link if available
    if (component.documentationURL || component.documentationUrl) {
        const docURL = component.documentationURL || component.documentationUrl;
        const docsLink = document.createElement('a');
        docsLink.href = docURL;
        docsLink.target = '_blank';
        docsLink.title = 'Documentation';
        docsLink.innerHTML = `<span style="padding: 0 5px;">📃</span>`;
        docsLink.style.textDecoration = 'none';
        linksContainer.appendChild(docsLink);
    }

    // Only add the container if there are links
    if (linksContainer.childNodes.length > 0) {
        card.appendChild(linksContainer);
    }

    return card;
}

function showComponentConfigModal(component, type) {
    const modal = document.getElementById('component-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    // Set modal title
    modalTitle.textContent = `Configure ${component.name}`;

    // Clear previous content
    modalContent.innerHTML = '';

    // Build configuration form based on component type
    let html = '<form id="component-config-form">';

    // Check if this is a multiplexer component
    const isMux = type === 'i2c' &&
                 (component.id === 'pca9546' || component.id === 'pca9548' ||
                  component.id === 'tca9546' || component.id === 'tca9548');

    // Common fields
    html += `
        <div>
            <label for="component-name">Component Name:</label>
            <input type="text" id="component-name" value="${component.displayName}" required>
        </div>
    `;

    // Only show polling period for non-multiplexer components
    if (!isMux) {
        html += `
        <div>
            <label for="component-period">Polling Period (seconds):</label>
            <input type="number" id="component-period" value="30" min="1" required>
        </div>
        `;
    } else {
        // Hidden field with default value of 0 for multiplexers
        html += `<input type="hidden" id="component-period" value="0">`;
    }

    // Component-specific fields
    if (type === 'i2c') {
        // I2C bus selection
        html += `
            <div>
                <label for="modal-i2c-bus">I2C Bus:</label>
                <select id="modal-i2c-bus" required>
        `;

        // Add options for each configured I2C bus
        appState.i2cBuses.forEach(bus => {
            if (bus.SCL !== undefined && bus.SDA !== undefined) {
                html += `<option value="${bus.id}">${bus.id === 'default' ?
                    'Default I2C Bus (SCL: ' + bus.SCL + ', SDA: ' + bus.SDA + ')' :
                    'Additional I2C Bus (SCL: ' + bus.SCL + ', SDA: ' + bus.SDA + ')'}</option>`;
            }
        });

        // Add options for each multiplexer channel
        appState.i2cMultiplexers.forEach(mux => {
            for (let i = 0; i < mux.channels; i++) {
                const busId = `mux-${mux.id}-ch-${i}`;
                html += `<option value="${busId}">Multiplexer ${mux.address} - Channel ${i}</option>`;
            }
        });

        html += `
            </select>
        </div>
        `;

        // I2C Address
        html += `
            <div>
                <label for="modal-i2c-address">I2C Address:</label>
                <select id="modal-i2c-address" required>
        `;

        // Add options for each available I2C address
        if (component.addresses && component.addresses.length > 0) {
            component.addresses.forEach(address => {
                html += `<option value="${address}" ${address === component.address ? 'selected' : ''}>${address}</option>`;
            });
        } else {
            // Fallback to the single address if addresses array is not available
            html += `<option value="${component.address}">${component.address}</option>`;
        }

        html += `
                </select>
            </div>
        `;

        // Special case for multiplexers
        if (component.id === 'pca9546' || component.id === 'pca9548' ||
            component.id === 'tca9546' || component.id === 'tca9548') {

            //TODO: Hacky, actually check Mux definition in future once we support more.
            const defaultChannels = component.id.includes('9548') ? 8 : 4;

            html += `
                <div>
                    <input type="hidden" id="modal-mux-channels" value="${component.channels || defaultChannels}" min="1" max="${defaultChannels}" required readonly>
                    <p><small>This multiplexer has ${defaultChannels} channels</small></p>
                </div>
            `;
        }
    } else if (type === 'ds18x20') {
        // Pin selection for DS18x20
        html += `
            <div>
                <label for="modal-pin-select">Select Pin:</label>
                <select id="modal-pin-select" required>
                    <option value="">-- Select a Pin --</option>
        `;

        // Add available pins
        if (appState.selectedBoard) {
            appState.selectedBoard.pins.forEach(pin => {
                if (!appState.usedPins.has(pin.number)) {
                    html += `<option value="${pin.number}">${pin.displayName} [Pin ${pin.number}]</option>`;
                }
            });
        }

        html += `
                </select>
            </div>
        `;

        // Additional fields for DS18x20
        html += `
            <div>
                <label for="modal-resolution">Resolution:</label>
                <select id="modal-resolution" required>
                    <option value="9">9-bit</option>
                    <option value="10">10-bit</option>
                    <option value="11">11-bit</option>
                    <option value="12" selected>12-bit</option>
                </select>
            </div>
        `;
    } else if (type === 'pin' || type === 'pwm' || type === 'servo') {
        // Pin selection for other component types
        html += `
            <div>
                <label for="modal-pin-select">Select Pin:</label>
                <select id="modal-pin-select" required>
                    <option value="">-- Select a Pin --</option>
        `;

        // Add available pins
        if (appState.selectedBoard) {
            appState.selectedBoard.pins.forEach(pin => {
                if (!appState.usedPins.has(pin.number)) {
                    html += `<option value="${pin.number}">${pin.displayName} [Pin ${pin.number}]</option>`;
                }
            });
        }

        html += `
                </select>
            </div>
        `;
    } else if (type === 'pixel') {
        // Pin selection for pixel components
        html += `
            <div>
                <label for="modal-pin-select">Select Pin:</label>
                <select id="modal-pin-select" required>
                    <option value="">-- Select a Pin --</option>
        `;

        // Add available pins
        if (appState.selectedBoard) {
            appState.selectedBoard.pins.forEach(pin => {
                if (!appState.usedPins.has(pin.number)) {
                    html += `<option value="${pin.number}">${pin.displayName} [Pin ${pin.number}]</option>`;
                }
            });
        }

        html += `
                </select>
            </div>
            <div>
                <label for="modal-pixel-count">Number of Pixels:</label>
                <input type="number" id="modal-pixel-count" value="1" min="1" required>
            </div>
        `;
    } else if (type === 'uart') {
        // UART pin selection
        html += `
            <div>
                <label for="modal-uart-tx">TX Pin:</label>
                <select id="modal-uart-tx" required>
                    <option value="">-- Select TX Pin --</option>
        `;

        // Add available pins for TX
        if (appState.selectedBoard) {
            appState.selectedBoard.pins.forEach(pin => {
                if (!appState.usedPins.has(pin.number)) {
                    html += `<option value="${pin.number}">${pin.displayName} [Pin ${pin.number}]</option>`;
                }
            });
        }

        html += `
                </select>
            </div>
            <div>
                <label for="modal-uart-rx">RX Pin:</label>
                <select id="modal-uart-rx" required>
                    <option value="">-- Select RX Pin --</option>
        `;

        // Add available pins for RX
        if (appState.selectedBoard) {
            appState.selectedBoard.pins.forEach(pin => {
                if (!appState.usedPins.has(pin.number) && pin.number !== parseInt(document.getElementById('modal-uart-tx')?.value)) {
                    html += `<option value="${pin.number}">${pin.displayName} [Pin ${pin.number}]</option>`;
                }
            });
        }

        html += `
                </select>
            </div>
        `;
    }

    // Data type selection
    if (component.dataTypes && component.dataTypes.length > 0) {
        html += `
            <div>
                <h4>Select Data Types:</h4>
                <div id="data-type-checkboxes">
        `;

        component.dataTypes.forEach(dataType => {
            const displayName = typeof dataType === 'string' ?
                dataType : (dataType.displayName || dataType.sensorType);
            const value = typeof dataType === 'string' ?
                dataType : JSON.stringify(dataType);

            html += `
                <div>
                    <label>
                        <input type="checkbox" name="data-type" value='${value}' checked>
                        ${displayName}
                    </label>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;
    }

    html += '</form>';

    modalContent.innerHTML = html;

    // Store component info for use when saving
    modalContent.dataset.componentId = component.id;
    modalContent.dataset.componentType = type;

    // Show the modal
    modal.style.display = 'block';
}

function showAddMultiplexerModal() {
    // Check if there are I2C buses available
    if (appState.i2cBuses.length === 0) {
        alert('No I2C buses available. Please configure an I2C bus first.');
        return;
    }

    // Find the multiplexer components
    const multiplexers = appState.componentsData.i2c.filter(c =>
        c.id === 'pca9546' || c.id === 'pca9548' ||
        c.id === 'tca9546' || c.id === 'tca9548'
    );

    if (multiplexers.length === 0) {
        alert('No multiplexer components found in the component data.');
        return;
    }

    // Create a modal for selecting a multiplexer type
    const modal = document.getElementById('component-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');

    modalTitle.textContent = 'Add I2C Multiplexer';

    // Build the modal content
    let content = `
        <div class="form-group">
            <label for="multiplexer-select">Select Multiplexer Type:</label>
            <select id="multiplexer-select" class="form-control">
    `;

    // Add options for each multiplexer type
    multiplexers.forEach(mux => {
        content += `<option value="${mux.id}">${mux.name} (${mux.channels} channels)</option>`;
    });

    content += `
            </select>
        </div>
        <div class="form-group mt-3">
            <button id="select-multiplexer-btn" class="btn btn-primary">Continue</button>
            <button id="cancel-multiplexer-btn" class="btn btn-secondary">Cancel</button>
        </div>
    `;

    modalContent.innerHTML = content;

    // Add event listeners
    document.getElementById('select-multiplexer-btn').addEventListener('click', function() {
        const selectedMuxId = document.getElementById('multiplexer-select').value;
        const selectedMux = multiplexers.find(m => m.id === selectedMuxId);

        // Close this modal and open the component config modal for the selected multiplexer
        modal.style.display = 'none';
        showComponentConfigModal(selectedMux, 'i2c');
    });

    document.getElementById('cancel-multiplexer-btn').addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Show the modal
    modal.style.display = 'block';
}

function updateMuxList() {
    const muxListContainer = document.getElementById('mux-list');

    // Clear the current content
    muxListContainer.innerHTML = '';

    // If no multiplexers, show a message
    if (appState.i2cMultiplexers.length === 0) {
        muxListContainer.innerHTML = '<p>No I2C multiplexers configured.</p>';
        return;
    }

    // Create a list container similar to selected components
    let html = '<ul class="component-details-list">';

    // For each multiplexer, create a display element
    appState.i2cMultiplexers.forEach(mux => {
        // Find the corresponding component to get more details
        const muxComponent = appState.selectedComponents.find(comp =>
            comp.instanceId === mux.id &&
            comp.componentAPI === 'i2c' &&
            (comp.i2cDeviceName === 'pca9546' || comp.i2cDeviceName === 'pca9548' ||
             comp.i2cDeviceName === 'tca9546' || comp.i2cDeviceName === 'tca9548')
        );

        // Determine multiplexer type and name
        let muxType = "";
        let muxName = "I2C Multiplexer";

        if (muxComponent) {
            // If we have the component reference, get the name and type from it
            muxName = muxComponent.name || "I2C Multiplexer";
            muxType = muxComponent.i2cDeviceName ? muxComponent.i2cDeviceName.toUpperCase() : "";
        }

        // Format details text in the same style as selected components
        let detailsText = `<br>Address: ${mux.address}`;

        // Add additional details
        if (muxType) {
            detailsText += `<br>Type: ${muxType}`;
        }
        detailsText += `<br>Channels: ${mux.channels}`;

        // Add bus information
        if (muxComponent) {
            if (muxComponent.i2cBusScl && muxComponent.i2cBusSda) {
                detailsText += `<br>Bus: Custom (SCL: ${muxComponent.i2cBusScl}, SDA: ${muxComponent.i2cBusSda})`;
            } else if (muxComponent.i2cMuxAddress) {
                detailsText += `<br>Connected to: Multiplexer ${muxComponent.i2cMuxAddress} - Channel ${muxComponent.i2cMuxChannel}`;
            } else {
                // Default bus
                const defaultBus = appState.i2cBuses.find(bus => bus.id === 'default');
                if (defaultBus) {
                    detailsText += `<br>Bus: Default (SCL: ${defaultBus.SCL}, SDA: ${defaultBus.SDA})`;
                }
            }
        }

        // Add the multiplexer to the HTML in the same format as selected components
        html += `<li>
            <div class="component-item">
                <div class="component-info">
                    <strong>${muxName}</strong> (i2c)
                    ${detailsText}
                </div>
                <div class="component-actions">
                    <button onclick="removeComponent(${mux.id})">Remove</button>
                </div>
            </div>
        </li>`;
    });

    html += '</ul>';
    muxListContainer.innerHTML = html;
}

function closeModal() {
    const modal = document.getElementById('component-modal');
    modal.style.display = 'none';
}

function saveModalData() {
    const modalContent = document.getElementById('modal-content');
    const componentId = modalContent.dataset.componentId;
    const componentType = modalContent.dataset.componentType;

    // Get component template
    const componentTemplate = appState.componentsData[componentType].find(c => c.id === componentId);

    // Get form values
    const name = document.getElementById('component-name').value;
    const period = parseInt(document.getElementById('component-period').value);

    // Initialize component config
    const componentConfig = {
        instanceId: appState.nextComponentId++,
        name: name,
        componentAPI: componentType == 'pin' ? componentTemplate.componentAPI : componentType
    };
    
    // Only add period for components that don't have their own period objects
    if (! componentTemplate.deviceType !== 'gps' && 
        componentTemplate.deviceType !== 'pm25aqi' && 
        componentTemplate.deviceType !== 'generic_input') {
        componentConfig.period = period;
    }
    let validationError = false; // future use

    // Special handling for I2C
    if (componentType === 'i2c') {
        const i2cBus = document.getElementById('modal-i2c-bus').value;
        const i2cAddress = document.getElementById('modal-i2c-address').value;

        componentConfig.i2cDeviceName = componentId;
        componentConfig.i2cDeviceAddress = i2cAddress;

        // Add GPS fields if they exist in the component template
        if (componentTemplate.isGps) {
            componentConfig.isGps = componentTemplate.isGps;
            // Add gps object with period (convert from seconds to milliseconds)
            if (!componentConfig.gps) {
                componentConfig.gps = {};
            }
            componentConfig.gps.period = period;

            if (componentTemplate.gps.commands_ubxes) {
                componentConfig.gps.commands_ubxes = componentTemplate.gps.commands_ubxes;
            }

            if (componentTemplate.gps.commands_pmtks) {
                componentConfig.gps.commands_pmtks = componentTemplate.gps.commands_pmtks;
            }
        }

        // Handle multiplexer channel if selected
        if (i2cBus.startsWith('mux-')) {
            const [_, muxId, __, channelNum] = i2cBus.split('-');
            const mux = appState.i2cMultiplexers.find(m => m.id === parseInt(muxId));

            if (mux) {
                componentConfig.i2cMuxAddress = mux.address;
                componentConfig.i2cMuxChannel = channelNum;
            }
        } else if (i2cBus === 'additional') {
            // Add SCL/SDA for additional bus
            const additionalBus = appState.i2cBuses.find(b => b.id === 'additional');
            if (additionalBus) {
                componentConfig.i2cBusScl = additionalBus.SCL.toString();
                componentConfig.i2cBusSda = additionalBus.SDA.toString();
            }
        }

        // Special case for multiplexers
        if (componentId === 'pca9546' || componentId === 'pca9548' ||
            componentId === 'tca9546' || componentId === 'tca9548') {

            const channels = parseInt(document.getElementById('modal-mux-channels').value);

            // Multiplexers don't need a polling period
            componentConfig.period = 0;

            // Add to multiplexers list
            const muxConfig = {
                id: appState.nextComponentId - 1, // Use the same ID assigned to componentConfig
                address: i2cAddress,
                channels: channels
            };

            appState.i2cMultiplexers.push(muxConfig);

            // // Update I2C bus options
            // updateI2CBusOptions();

            // Remove any components using this multiplexer
            appState.selectedComponents = appState.selectedComponents.filter(c =>
                !(c.i2cMuxAddress && c.i2cMuxAddress === componentConfig.i2cDeviceAddress));
        } else {
            if (! componentTemplate.isGps) {
                // Add data types for non-multiplexer components
                const dataTypeCheckboxes = document.querySelectorAll('input[name="data-type"]:checked');
                if (dataTypeCheckboxes.length > 0) {
                    componentConfig.i2cDeviceSensorTypes = Array.from(dataTypeCheckboxes).map(checkbox => {
                        try {
                            return { type: JSON.parse(checkbox.value) };
                        } catch (e) {
                            return { type: checkbox.value };
                        }
                    });
                } else {
                    validationError = true;
                    alert('Please select at least one data type for the I2C component.');
                    return false;
                }
            }
        }
    } else if (componentType === 'ds18x20') {
        const pin = document.getElementById('modal-pin-select').value;
        const resolution = document.getElementById('modal-resolution').value;
        if (!pin) {
            validationError = true;
            alert('Please select a pin for the DS18x20 sensor.');
            return false;
        }
        componentConfig.pinName = `D${pin}`;
        componentConfig.sensorResolution = parseInt(resolution);

        // Add data types
        const dataTypeCheckboxes = document.querySelectorAll('input[name="data-type"]:checked');
        if (dataTypeCheckboxes.length > 0) {
            componentConfig.sensorTypeCount = dataTypeCheckboxes.length;

            // Add each sensor type
            Array.from(dataTypeCheckboxes).forEach((checkbox, index) => {
                const typeValue = checkbox.value.replace(/"/g, '');
                componentConfig[`sensorType${index + 1}`] = typeValue;
            });
        }
        if (componentConfig.sensorTypeCount === 0) {
            validationError = true;
            alert('Please select at least one data type for the DS18x20 sensor.');
            return false;
        }
        // Mark pin as used
        appState.usedPins.add(parseInt(pin));
    } else if (componentType === 'pin' || componentType === 'pwm' || componentType === 'servo') {
        const pin = document.getElementById('modal-pin-select').value;
        if (!pin) {
            validationError = true;
            alert('Please select a pin for the component.');
            return false;
        }
        componentConfig.pinName = `D${pin}`;

        // Mark pin as used
        appState.usedPins.add(parseInt(pin));
    } else if (componentType === 'pixel') {
        const pin = document.getElementById('modal-pin-select').value;
        if (!pin) {
            validationError = true;
            alert('Please select a pin for the component.');
            return false;
        }
        const pixelCount = document.getElementById('modal-pixel-count').value;

        componentConfig.pinName = `D${pin}`;
        componentConfig.numPixels = parseInt(pixelCount);

        // Mark pin as used
        appState.usedPins.add(parseInt(pin));
    } else if (componentType === 'uart') {
        const pinTx = document.getElementById('modal-uart-tx').value;
        const pinRx = document.getElementById('modal-uart-rx').value;
        if (!pinRx) {
            validationError = true;
            alert('Please select a RX pin for the component.');
            return false;
        }
        if (!!pinTx) {
            componentConfig.pinTx = `D${pinTx}`;
            appState.usedPins.add(parseInt(pinTx));
        }
        componentConfig.pinRx = `D${pinRx}`;
        appState.usedPins.add(parseInt(pinRx));

        // Add data types
        const dataTypeCheckboxes = document.querySelectorAll('input[name="data-type"]:checked');
        if (dataTypeCheckboxes.length > 0) {
            componentConfig.sensorTypes = Array.from(dataTypeCheckboxes).map(checkbox => {
                try {
                    return { type: JSON.parse(checkbox.value) };
                } catch (e) {
                    return { type: checkbox.value };
                }
            });
        }

        // UART-Specific //
        // Add deviceType field if it exists in the component template
        if (componentTemplate.deviceType) {
            componentConfig.deviceType = componentTemplate.deviceType;
        }

        // Add deviceId field if it exists in the component template
        if (componentTemplate.deviceId) {
            componentConfig.deviceId = componentTemplate.deviceId;
        }

        // Add GPS fields if this is a GPS component
        if (componentTemplate.deviceType === 'gps') {
            if (!componentConfig.gps) {
                componentConfig.gps = {};
            }
            componentConfig.gps.period = period;

            if (componentTemplate.gps.commands_ubxes) {
                componentConfig.gps.commands_ubxes = componentTemplate.gps.commands_ubxes;
            }

            if (componentTemplate.gps.commands_pmtks) {
                componentConfig.gps.commands_pmtks = componentTemplate.gps.commands_pmtks;
            }
        }

        // Add PM25AQI fields if this is a PM25AQI component
        if (componentTemplate.deviceType === 'pm25aqi') {
            if (!componentConfig.pm25aqi) {
                componentConfig.pm25aqi = {};
            }
            componentConfig.pm25aqi.period = period;
        }

        // Add generic_input fields if this is a generic_input component
        if (componentTemplate.deviceType === 'generic_input') {
            if (!componentConfig.generic_input) {
                componentConfig.generic_input = {};
            }
            componentConfig.generic_input.period = period;
        }

    }

    // Add component to the selected components list
    appState.selectedComponents.push(componentConfig);

    // Update the selected components list
    updateSelectedComponentsList();

    // Update multiplexer list if this is a multiplexer component
    if (componentConfig.componentAPI === 'i2c' &&
        (componentConfig.i2cDeviceName === 'pca9546' || componentConfig.i2cDeviceName === 'pca9548' ||
         componentConfig.i2cDeviceName === 'tca9546' || componentConfig.i2cDeviceName === 'tca9548')) {
        updateMuxList();
    }

    // Refresh pin lists
    populatePinsLists();

    // Close the modal
    closeModal();
}

function updateSelectedComponentsList() {
    const selectedList = document.getElementById('selected-components-list');

    if (appState.selectedComponents.length === 0) {
        selectedList.innerHTML = '<p>No components selected yet.</p>';
        return;
    }

    let html = '<ul class="component-details-list">';

    appState.selectedComponents.forEach(component => {
        let detailsText = '';

        // Show connection details based on component type
        if (component.componentAPI === 'i2c') {
            // Base I2C information
            detailsText += `<br>Address: ${component.i2cDeviceAddress}`;

            // Show bus information
            if (component.i2cBusScl && component.i2cBusSda) {
                detailsText += `<br>Bus: Custom (SCL: ${component.i2cBusScl}, SDA: ${component.i2cBusSda})`;
            } else if (component.i2cMuxAddress) {
                detailsText += `<br>Connected to: Multiplexer ${component.i2cMuxAddress} - Channel ${component.i2cMuxChannel}`;
            } else {
                // Default bus
                const defaultBus = appState.i2cBuses.find(bus => bus.id === 'default');
                if (defaultBus) {
                    detailsText += `<br>Bus: Default (SCL: ${defaultBus.SCL}, SDA: ${defaultBus.SDA})`;
                }
            }

            // Show sensor types
            if (component.i2cDeviceSensorTypes && component.i2cDeviceSensorTypes.length > 0) {
                detailsText += '<br>Data types: ';
                component.i2cDeviceSensorTypes.forEach((sensor, index) => {
                    const sensorType = typeof sensor.type === 'object' ?
                        sensor.type.displayName || sensor.type.sensorType : sensor.type;
                    detailsText += (index > 0 ? ', ' : '') + sensorType;
                });
            }
        } else if (component.componentAPI === 'ds18x20') {
            detailsText += `<br>Pin: ${component.pinName}`;
            detailsText += `<br>Resolution: ${component.sensorResolution}-bit`;

            // Show sensor types
            const sensorTypes = [];
            for (let i = 1; i <= component.sensorTypeCount; i++) {
                if (component[`sensorType${i}`]) {
                    sensorTypes.push(component[`sensorType${i}`]);
                }
            }

            if (sensorTypes.length > 0) {
                detailsText += '<br>Data types: ' + sensorTypes.join(', ');
            }
        } else if (component.componentAPI === 'pin' || component.componentAPI === 'pwm' || component.componentAPI === 'servo') {
            detailsText += `<br>Pin: ${component.pinName}`;
        } else if (component.componentAPI === 'pixel') {
            detailsText += `<br>Pin: ${component.pinName}`;
            detailsText += `<br>Pixels: ${component.numPixels}`;
        } else if (component.componentAPI === 'uart') {
            detailsText += `<br>TX Pin: ${component.pinTx}, RX Pin: ${component.pinRx}`;

            // Show sensor types
            if (component.sensorTypes && component.sensorTypes.length > 0) {
                detailsText += '<br>Data types: ';
                component.sensorTypes.forEach((sensor, index) => {
                    const sensorType = typeof sensor === 'object' ?
                        sensor.displayName || sensor.sensorType : sensor;
                    detailsText += (index > 0 ? ', ' : '') + sensorType;
                });
            }
        }

        // Add polling period (only for non-multiplexer components)
        const isMux = component.componentAPI === 'i2c' &&
                    (component.i2cDeviceName === 'pca9546' || component.i2cDeviceName === 'pca9548' ||
                     component.i2cDeviceName === 'tca9546' || component.i2cDeviceName === 'tca9548');

        if (!isMux && component.period > 0) {
            detailsText += `<br>Polling period: ${component.period} seconds`;
        }

        html += `<li>
            <div class="component-item">
                <div class="component-info">
                    <strong>${component.name}</strong> (${component.componentAPI})
                    ${detailsText}
                </div>
                <div class="component-actions">
                    <button onclick="removeComponent(${component.instanceId})">Remove</button>
                </div>
            </div>
        </li>`;
    });

    html += '</ul>';
    selectedList.innerHTML = html;
}

function removeComponent(instanceId) {
    // Find the component
    const componentIndex = appState.selectedComponents.findIndex(c => c.instanceId === instanceId);
    if (componentIndex === -1) return;

    const component = appState.selectedComponents[componentIndex];

    // Free up pins used by this component
    if (component.pinName) {
        const pinNumber = parseInt(component.pinName.replace('D', ''));
        appState.usedPins.delete(pinNumber);
    }

    if (component.pinTx) {
        const pinTxNumber = parseInt(component.pinTx.replace('D', ''));
        appState.usedPins.delete(pinTxNumber);
    }

    if (component.pinRx) {
        const pinRxNumber = parseInt(component.pinRx.replace('D', ''));
        appState.usedPins.delete(pinRxNumber);
    }

    // Check if this is a multiplexer and remove it from the multiplexers list
    if (component.componentAPI === 'i2c' &&
        (component.i2cDeviceName === 'pca9546' || component.i2cDeviceName === 'pca9548' ||
         component.i2cDeviceName === 'tca9546' || component.i2cDeviceName === 'tca9548')) {

        const muxIndex = appState.i2cMultiplexers.findIndex(m => m.id === component.instanceId);
        if (muxIndex !== -1) {
            appState.i2cMultiplexers.splice(muxIndex, 1);

            // // Update I2C bus options
            // updateI2CBusOptions();

            // Remove any components using this multiplexer
            appState.selectedComponents = appState.selectedComponents.filter(c =>
                !(c.i2cMuxAddress && c.i2cMuxAddress === component.i2cDeviceAddress));
        }
    }

    // Remove the component
    appState.selectedComponents.splice(componentIndex, 1);

    // Update the selected components list
    updateSelectedComponentsList();

    // Update multiplexer list if a multiplexer was removed
    updateMuxList();

    // Refresh pin lists
    populatePinsLists();
}

function generateConfiguration() {
    // Check if a board is selected
    if (!appState.selectedBoard) {
        alert('Please select a board before generating configuration.');
        return;
    }

    // Check if there are any components
    if (appState.selectedComponents.length === 0) {
        alert('Please add at least one component before generating configuration.');
        return;
    }

    // Build the configuration object
    const config = {
        exportedFromDevice: {
            referenceVoltage: appState.selectedBoard.referenceVoltage,
            totalGPIOPins: appState.selectedBoard.totalGPIOPins,
            totalAnalogPins: appState.selectedBoard.totalAnalogPins,
            statusLEDBrightness: appState.statusLEDBrightness,
            autoConfig: appState.enableautoConfig
        },
        components: []
    };

    // Add SD card CS pin if present
    if (appState.sdCardCS !== null) {
        config.exportedFromDevice.sd_cs_pin = appState.sdCardCS;
    }

    // Add RTC type if not 'soft'
    if (appState.rtcType !== 'soft') {
        config.exportedFromDevice.rtc = appState.rtcType;
    }

    // Add components
    appState.selectedComponents.forEach(component => {
        // Create a clean component object without the instanceId
        const cleanComponent = {...component};
        delete cleanComponent.instanceId;

        // Check if this is a multiplexer
        const isMux = component.componentAPI === 'i2c' &&
                     (component.i2cDeviceName === 'pca9546' || component.i2cDeviceName === 'pca9548' ||
                      component.i2cDeviceName === 'tca9546' || component.i2cDeviceName === 'tca9548');

        // Set autoConfig and handle period for I2C components
        if (cleanComponent.componentAPI === 'i2c'){
            // Determine autoConfig setting
            if (isMux || cleanComponent.name.toLowerCase().includes('multiplexer')) {
                cleanComponent["autoConfig"] = "false";
            } else if (appState.enableautoConfig) {
                cleanComponent["autoConfig"] = "true";
            } else {
                cleanComponent["autoConfig"] = "false";
            }

            // Remove period for multiplexers
            if (isMux) {
                delete cleanComponent.period;
            }
        }

        config.components.push(cleanComponent);
    });

    // Convert to formatted JSON and display
    const jsonOutput = JSON.stringify(config, null, 4);
    document.getElementById('config-output').textContent = jsonOutput;
    document.getElementById('config-output-container').classList.remove('hidden');

    // Also update the export tab
    try{
        document.getElementById('export-config').textContent = jsonOutput;
    } catch(e){
        console.error('Error updating export tab:', e);
    }
}

function downloadConfiguration(fromExportTab = false) {
    // Get the configuration JSON
    const configText = fromExportTab ?
        document.getElementById('export-config').textContent :
        document.getElementById('config-output').textContent;

    if (configText === 'No configuration generated yet.') {
        alert('Please generate a configuration first.');
        return;
    }

    // Create a Blob with the configuration
    const blob = new Blob([configText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    // Create a download link and trigger it
    const a = document.createElement('a');
    a.href = url;
    a.download = 'config.json';
    document.body.appendChild(a);
    a.click();

    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importConfiguration() {
    const jsonText = document.getElementById('import-json').value.trim();
    if (!jsonText) {
        alert('Please paste a valid JSON configuration.');
        return;
    }

    try {
        // Parse the JSON
        const config = JSON.parse(jsonText);

        // Reset the application state
        resetAppState();

        // Import the configuration
        const boardMatchFound = importConfigObject(config);

        // Update the UI (Don't clear the textarea when importing so the user can see what was imported)
        if (!appState.isImporting) {
            console.warn('Still importing config so maybe not at final state yet');
        }
        if (boardMatchFound) {
            // Switch to the Build tab
            openTab(null, 'BuildConfig');
            alert('Configuration imported successfully! Please double-check your configuration on the Build tab using the generate button at the end.');
        } else {
            // The alert is now shown in importConfigObject for unmatched boards, no need to show it again here
            // Switch to the Build tab so they can select a board
            openTab(null, 'BuildConfig');

            // Scroll to the board selection section
            setTimeout(() => {
                const boardSection = document.querySelector('.section');
                if (boardSection) {
                    boardSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 500);
        }
    } catch (error) {
        alert('Error importing configuration: ' + error.message);
    }
}

// This function has been removed to avoid duplication - see the version below

// We don't need this additional event handler because it's already defined above

function resetAppState() {
    appState.selectedBoard = null;
    appState.companionBoard = null;
    appState.sdCardCS = null;
    appState.rtcType = 'soft';
    appState.statusLEDBrightness = 0.5;
    appState.i2cBuses = [];
    appState.i2cMultiplexers = [];
    appState.selectedComponents = [];
    appState.usedPins = new Set();
    appState.nextComponentId = 1;
    appState.isImporting = false;

    // Reset UI elements
    document.getElementById('board-select').value = '';
    document.getElementById('companion-board-select').value = '';
    document.getElementById('led-brightness').value = 0.5;
    document.getElementById('brightness-value').textContent = '0.5';
    document.getElementById('add-sd-card').checked = false;
    document.getElementById('add-i2c-bus').checked = false;

    // Hide sections
    hideSubsequentSections();

    // Clear board details section
    document.getElementById('board-details').classList.add('hidden');

    // Reset SD card section
    document.getElementById('sd-missing').classList.remove('hidden');
    document.getElementById('sd-present').classList.add('hidden');

    // Reset RTC section
    document.getElementById('rtc-missing').classList.remove('hidden');
    document.getElementById('rtc-present').classList.add('hidden');

    // Clear selected components list
    const selectedList = document.getElementById('selected-components-list');
    selectedList.innerHTML = '<p>No components selected yet.</p>';

    // Clear the multiplexer list
    updateMuxList();
}

// Function to import a configuration object
function importConfigObject(config) {
    // Set a flag to indicate we're in import mode
    appState.isImporting = true;
    console.log('Importing configuration...');

    // Import device details
    const deviceConfig = config.exportedFromDevice || {};
    let boardMatchFound = false;

    // Try to find the board that matches the configuration
    let matchedBoard = null;
    if (deviceConfig && deviceConfig['board']) {
        if (appState.boardsData[deviceConfig['board']]) {
            matchedBoard = deviceConfig['board'];
            boardMatchFound = true;
        } else if (appState.boardsData[deviceConfig['board'].replace('-', '')]) {
            matchedBoard = deviceConfig['board'].replace('-', '');
            boardMatchFound = true;
        }
    }
    if (!boardMatchFound) {
        for (const [boardId, boardConfig] of Object.entries(appState.boardsData)) {
            // check installBoardName property of board if it exists, normal ids checked above
            if(deviceConfig["board"] ){
                if (boardConfig['installBoardName'] && boardConfig['installBoardName'] === deviceConfig['board']) {
                    matchedBoard = boardId;
                    boardMatchFound = true;
                    break;
                } else if (boardConfig['installBoardName'] && boardConfig['installBoardName'].replace('-', '') === deviceConfig['board']) {
                    matchedBoard = boardId;
                    boardMatchFound = true;
                    break;
                }
            }
            // Check if the board configuration matches a known device configuration
            if (boardConfig.referenceVoltage === deviceConfig.referenceVoltage &&
                boardConfig.totalGPIOPins === deviceConfig.totalGPIOPins &&
                boardConfig.totalAnalogPins === deviceConfig.totalAnalogPins) {
                matchedBoard = boardId;
                boardMatchFound = true;
                alert(`Guessing board based on configuration: ${boardId}, please update the board selection if incorrect.`);
                break;
            }
        }
    }
    if (matchedBoard) {
        setTimeout(() => {
            // Select the matched board
            document.getElementById('board-select').value = matchedBoard;
            const event = new Event('change');
            document.getElementById('board-select').dispatchEvent(event);
        }, 500);
    } else {
        // Alert the user they need to select a board (in addition to the visual indication)
        alert('Import mostly successful! \n ** We were unable to identify your board automatically. ** \nTo complete the import process, please select your microcontroller board from the Build Configuration tab.');

        // Highlight the board selector to make it obvious to the user
        setTimeout(() => {
            const boardSelect = document.getElementById('board-select');
            boardSelect.style.boxShadow = '0 0 10px #2e8b57';
            boardSelect.style.border = '2px solid #2e8b57';
            boardSelect.style.animation = 'pulse 1.5s infinite';

            // Add a style tag with the pulse animation if it doesn't exist
            if (!document.getElementById('pulse-animation')) {
                const style = document.createElement('style');
                style.id = 'pulse-animation';
                style.textContent = `
                    @keyframes pulse {
                        0% { box-shadow: 0 0 0 0 rgba(46, 139, 87, 0.7); }
                        70% { box-shadow: 0 0 0 10px rgba(46, 139, 87, 0); }
                        100% { box-shadow: 0 0 0 0 rgba(46, 139, 87, 0); }
                    }
                `;
                document.head.appendChild(style);
            }

            // Add a helper message
            const boardSection = document.querySelector('.section');
            if (boardSection) {
                const helperMsg = document.createElement('p');
                helperMsg.id = 'board-select-helper';
                helperMsg.style.color = '#2e8b57';
                helperMsg.style.fontWeight = 'bold';
                helperMsg.textContent = 'Please select your microcontroller board to continue the import process.';

                // Insert after the board select
                const insertAfter = (el, referenceNode) => {
                    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
                };

                // Remove any existing helper message
                const existingMsg = document.getElementById('board-select-helper');
                if (existingMsg) {
                    existingMsg.remove();
                }

                insertAfter(helperMsg, boardSelect);
            }

            // When a board is selected, remove highlight and helper message
            boardSelect.addEventListener('change', function() {
                if (this.value) {
                    this.style.boxShadow = '';
                    this.style.border = '';
                    this.style.animation = '';

                    const helperMsg = document.getElementById('board-select-helper');
                    if (helperMsg) {
                        helperMsg.remove();
                    }
                }
            });
        }, 500);
    }

    // Continue with importing other configuration details regardless of board match

    // Import SD card CS pin
    if (deviceConfig.sd_cs_pin !== undefined) {
        appState.sdCardCS = deviceConfig.sd_cs_pin;
        document.getElementById('add-sd-card').checked = true;

        // Store the SD card pin for later use after a board is selected
        appState.pendingSDCardPin = deviceConfig.sd_cs_pin;
    }

    // Import RTC type
    if (deviceConfig.rtc) {
        appState.rtcType = deviceConfig.rtc;
        appState.pendingRTC = deviceConfig.rtc;
    }

    // Import LED brightness
    if (deviceConfig.statusLEDBrightness !== undefined) {
        appState.statusLEDBrightness = deviceConfig.statusLEDBrightness;
        document.getElementById('led-brightness').value = deviceConfig.statusLEDBrightness;
        document.getElementById('brightness-value').textContent = deviceConfig.statusLEDBrightness;
    }

    // Store components for later use
    appState.pendingComponents = [];

    // Import components
    if (config.components && Array.isArray(config.components)) {
        // Store all components for processing after board selection
        appState.pendingComponents = config.components.map(component => ({...component}));
    }

    // Add an event listener to process pending components when a board is selected
    const boardSelect = document.getElementById('board-select');
    boardSelect.removeEventListener('change', processPendingConfig); // Remove existing listener
    boardSelect.addEventListener('change', processPendingConfig);

    function processPendingConfig() {
        // Only process if a board is selected
        if (this.value) {
            console.log('Board selected, processing pending configurations...');
            // Process pending SD card pin
            if (appState.pendingSDCardPin !== undefined) {
                setTimeout(() => {
                    document.getElementById('add-sd-card').checked = true;
                    const event = new Event('change');
                    document.getElementById('add-sd-card').dispatchEvent(event);

                    const sdPinSelect = document.getElementById('sd-cs-pin-select');
                    if (sdPinSelect) {
                        sdPinSelect.value = appState.pendingSDCardPin;
                        appState.sdCardCS = appState.pendingSDCardPin;
                        appState.usedPins.add(appState.pendingSDCardPin);
                    }

                    // Show SD card section
                    document.getElementById('sd-missing').classList.add('hidden');
                    document.getElementById('sd-present').classList.remove('hidden');
                    document.getElementById('sd-cs-pin').textContent = appState.pendingSDCardPin;
                }, 100);
            }

            // Process pending RTC
            if (appState.pendingRTC) {
                document.getElementById('rtc-select').value = appState.pendingRTC;
                const rtcEvent = new Event('change');
                document.getElementById('rtc-select').dispatchEvent(rtcEvent);

                // Update RTC UI
                document.getElementById('rtc-missing').classList.add('hidden');
                document.getElementById('rtc-present').classList.remove('hidden');
                document.getElementById('rtc-type').textContent = appState.pendingRTC;
            }

            // Process pending components
            if (appState.pendingComponents && appState.pendingComponents.length > 0) {
                // First pass: find and set up multiplexers
                appState.pendingComponents.forEach(component => {
                    if (component.componentAPI === 'i2c' &&
                        (component.i2cDeviceName === 'pca9546' || component.i2cDeviceName === 'pca9548' ||
                         component.i2cDeviceName === 'tca9546' || component.i2cDeviceName === 'tca9548')) {
                        const channels = component.i2cDeviceName.includes('9548') ? 8 : 4;
                        const muxConfig = {
                            id: appState.nextComponentId++,
                            address: component.i2cMuxAddress || component.i2cDeviceAddress,
                            channels: channels
                        };

                        appState.i2cMultiplexers.push(muxConfig);

                        // Add to selected components
                        const componentConfig = {
                            ...component,
                            instanceId: muxConfig.id
                        };

                        appState.selectedComponents.push(componentConfig);

                        // Update the multiplexer list display
                        updateMuxList();
                    }
                });

                // Second pass: import other components
                appState.pendingComponents.forEach(component => {
                    if (component.componentAPI === 'i2c' &&
                        (component.i2cDeviceName === 'pca9546' || component.i2cDeviceName === 'pca9548' ||
                         component.i2cDeviceName === 'tca9546' || component.i2cDeviceName === 'tca9548')) {
                        // Skip multiplexers (already handled)
                        return;
                    }

                    // Add component to the selected components
                    const componentConfig = {
                        ...component,
                        instanceId: appState.nextComponentId++
                    };

                    appState.selectedComponents.push(componentConfig);

                    // Mark used pins
                    if (component.pinName) {
                        const pinNumber = parseInt(component.pinName.replace('D', ''));
                        appState.usedPins.add(pinNumber);
                    }

                    if (component.pinTx) {
                        const pinTxNumber = parseInt(component.pinTx.replace('D', ''));
                        appState.usedPins.add(pinTxNumber);
                    }

                    if (component.pinRx) {
                        const pinRxNumber = parseInt(component.pinRx.replace('D', ''));
                        appState.usedPins.add(pinRxNumber);
                    }

                    // Handle I2C bus pins
                    if (component.i2cBusScl && component.i2cBusSda) {
                        const SCLPin = parseInt(component.i2cBusScl);
                        const SDAPin = parseInt(component.i2cBusSda);

                        // Check if this is a new I2C bus
                        const existingBus = appState.i2cBuses.find(bus =>
                            bus.SCL === SCLPin && bus.SDA === SDAPin);

                        if (!existingBus && SCLPin && SDAPin) {
                            const busId = `bus_${appState.i2cBuses.length}`;
                            appState.i2cBuses.push({
                                id: busId,
                                SCL: SCLPin,
                                SDA: SDAPin
                            });

                            // Mark pins as used
                            appState.usedPins.add(SCLPin);
                            appState.usedPins.add(SDAPin);
                        }
                    }
                });

                // Update selected components list
                updateSelectedComponentsList();

                // // Update I2C bus options
                // updateI2CBusOptions();
                // Refresh pin lists
                populatePinsLists();
                console.log('Pending components processed successfully.');

                // Clear pending components to avoid processing them again
                appState.pendingComponents = [];
            }

            // Remove this event listener to avoid duplicate processing
            boardSelect.removeEventListener('change', processPendingConfig);
        }
    }

    // Reset the import flag
    setTimeout(() => {
        appState.isImporting = false;
    }, 500);
    console.log('Configuration import completed, board match found:', boardMatchFound, ' - ', matchedBoard);
    console.log('Appstate (pending etc):', appState);
    return boardMatchFound; // Return true if a matching board was found, false otherwise
}

// Initialize sample data components if there is no external data
function initializeSampleComponents() {
    alert('No data loader detected, initializing with sample components');
    // Sample I2C components
    appState.componentsData.i2c = [
        { id: 'bme280', name: 'BME280', address: '0x77', dataTypes: ['ambient-temp', 'ambient-temp-fahrenheit', 'relative-humidity', 'pressure', 'altitude'] },
        { id: 'sht30', name: 'SHT30', address: '0x44', dataTypes: ['ambient-temp', 'ambient-temp-fahrenheit', 'relative-humidity'] },
        { id: 'mcp9808', name: 'MCP9808', address: '0x18', dataTypes: ['ambient-temp', 'ambient-temp-fahrenheit'] },
        { id: 'bh1750', name: 'BH1750', address: '0x23', dataTypes: ['light'] },
        { id: 'sgp30', name: 'SGP30', address: '0x58', dataTypes: ['eco2', 'tvoc'] },
        { id: 'pca9546', name: 'PCA9546 4-Channel Multiplexer', address: '0x70', channels: 4 },
        { id: 'pca9548', name: 'PCA9548 8-Channel Multiplexer', address: '0x70', channels: 8 },
        { id: 'tca9546', name: 'TCA9546 4-Channel Multiplexer', address: '0x70', channels: 4 },
        { id: 'tca9548', name: 'TCA9548 8-Channel Multiplexer', address: '0x70', channels: 8 }
    ];

    // Sample DS18x20 components
    appState.componentsData.ds18x20 = [
        { id: 'ds18b20', name: 'DS18B20', dataTypes: ['object-temp', 'object-temp-fahrenheit'] },
        { id: 'ds18b20_waterproof', name: 'DS18B20 Waterproof', dataTypes: ['object-temp', 'object-temp-fahrenheit'] }
    ];

    // Sample pin components
    appState.componentsData.pin = [
        { id: 'led', name: 'LED', dataTypes: [] },
        { id: 'push_button', name: 'Push Button', dataTypes: ['digital-input'] },
        { id: 'toggle_switch', name: 'Toggle Switch', dataTypes: ['digital-input'] },
        { id: 'potentiometer', name: 'Potentiometer', dataTypes: ['analog-input'] }
    ];

    // Sample pixel components
    appState.componentsData.pixel = [
        { id: 'neopixel', name: 'NeoPixel', dataTypes: [] },
        { id: 'dotstar', name: 'DotStar', dataTypes: [] }
    ];

    // Sample PWM components
    appState.componentsData.pwm = [
        { id: 'dimmable_led', name: 'Dimmable LED', dataTypes: [] },
        { id: 'piezo_buzzer', name: 'Piezo Buzzer', dataTypes: [] }
    ];

    // Sample servo components
    appState.componentsData.servo = [
        { id: 'servo', name: 'Servo Motor', dataTypes: [] }
    ];

    // Sample UART components
    appState.componentsData.uart = [
        { id: 'pms5003', name: 'PMS5003 Air Quality Sensor', dataTypes: ['pm10-std', 'pm25-std', 'pm100-std'] }
    ];
}

// Initialize sample board configs if there is no external data
function initializeSampleBoards() {
    appState.boardsData = {
        'feather-esp32s2': {
            referenceVoltage: 3.3,
            totalGPIOPins: 22,
            totalAnalogPins: 6,
            defaultI2C: { SCL: 42, SDA: 41 },
            pins: [0, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 21, 33, 34, 35, 36, 37, 38, 39, 41, 42]
        },
        'feather-esp32s3-tft': {
            referenceVoltage: 3.3,
            totalGPIOPins: 18,
            totalAnalogPins: 6,
            defaultI2C: { SCL: 9, SDA: 8 },
            pins: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 17, 18, 21, 38, 39, 40, 41, 42]
        }
    };
}

// Run initialization if no data loader is detected
if (typeof loadWippersnapperData === 'undefined') {
    console.log('No data loader detected, initializing with sample data');
    document.addEventListener('DOMContentLoaded', function() {
        // Hide loading indicator
        document.getElementById('loading-indicator').classList.add('hidden');

        // Initialize with sample data
        initializeSampleBoards();
        initializeSampleComponents();
    });
}
