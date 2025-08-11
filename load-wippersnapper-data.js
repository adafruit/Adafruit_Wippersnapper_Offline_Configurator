// Load Wippersnapper boards and components data

// Configuration - technically unused (instead ./ relative links) but useful for reference
const BOARDS_JSON_URL = 'https://raw.githubusercontent.com/adafruit/Adafruit_Wippersnapper_Offline_Configurator/refs/heads/offline-mode/wippersnapper_boards.json'; //'wippersnapper_boards.json';
const COMPONENTS_JSON_URL = 'https://raw.githubusercontent.com/adafruit/Adafruit_Wippersnapper_Offline_Configurator/refs/heads/offline-mode/wippersnapper_components.json'; //'wippersnapper_components.json';

// Global app state
const appState = {
    boardsData: null,
    componentsData: null,
    isLoading: false,
    loadError: null,
    enableautoConfig: false,

    // Application state properties (from original code)
    selectedBoard: null,
    companionBoard: null,
    sdCardCS: null,
    rtcType: 'soft',
    statusLEDBrightness: 0.5,
    i2cBuses: [],
    i2cMultiplexers: [],
    selectedComponents: [],
    usedPins: new Set(),
    nextComponentId: 1
};

/**
 * Load the Wippersnapper boards and components data from JSON files
 */
async function loadWippersnapperData() {
    try {
        appState.isLoading = true;
        console.log('Loading Wippersnapper data from local file copy');
        // create <object id="jsonBoardObject" data="data.json" type="application/json"></object> in header
        const jsonObject = document.createElement('script');
        jsonObject.id = 'jsonBoardObject';
        jsonObject.src = 'wippersnapper_boards.js';
        document.body.appendChild(jsonObject);
        console.log('Loaded boards data from local file copy');
        // components
        const componentsObject = document.createElement('script');
        componentsObject.id = 'jsonComponentsObject';
        componentsObject.src = 'wippersnapper_components.js';
        document.body.appendChild(componentsObject);
        console.log('Loaded components data from local file copy');
        // Store data in app state
        await new Promise(resolve => setTimeout(resolve, 1000));
        const boardsData = window['jsonBoardObject'];
        const componentsData = window['jsonComponentsObject'];
        const firmwareData = window['FIRMWARE_DATA'];
        if (firmwareData && firmwareData.releaseInfo) {
            document.getElementById('release_name').innerHTML = "(" + firmwareData.releaseInfo.publishedDate + ")<br/>" + firmwareData.releaseInfo.name;
            document.getElementById('release_name').href = firmwareData.releaseInfo.url;
        }

        appState.boardsData = boardsData.boards;
        appState.componentsData = componentsData.components;
        document.body.removeChild(componentsObject);
        document.body.removeChild(jsonObject);

        // Add I2C multiplexer components manually since they're not in the JSON data
        if (appState.componentsData.i2c) {
            // Add PCA9546 - 4-channel I2C multiplexer
            appState.componentsData.i2c.push({
                id: 'pca9546',
                name: 'PCA9546 I2C Multiplexer',
                displayName: 'PCA9546 I2C Multiplexer',
                productURL: 'https://www.adafruit.com/product/5664',
                documentationURL: 'https://learn.adafruit.com/adafruit-pca9546-4-channel-stemma-qt-multiplexer',
                image: 'https://cdn-shop.adafruit.com/640x480/5664-00.jpg',
                address: '0x70',
                addresses: ['0x70', '0x71', '0x72', '0x73', '0x74', '0x75', '0x76', '0x77'],
                dataTypes: [],
                channels: 4
            });

            // Add PCA9548 - 8-channel I2C multiplexer
            appState.componentsData.i2c.push({
                id: 'pca9548',
                name: 'PCA9548 I2C Multiplexer',
                displayName: 'PCA9548 I2C Multiplexer',
                productURL: 'https://www.adafruit.com/product/5626',
                documentationURL: 'https://learn.adafruit.com/adafruit-pca9548-8-channel-stemma-qt-qwiic-i2c-multiplexer',
                image: 'https://cdn-shop.adafruit.com/640x480/5626-06.jpg',
                address: '0x70',
                addresses: ['0x70', '0x71', '0x72', '0x73', '0x74', '0x75', '0x76', '0x77'],
                dataTypes: [],
                channels: 8
            });

            // Add TCA9546 - 4-channel I2C multiplexer
            appState.componentsData.i2c.push({
                id: 'tca9546',
                name: 'TCA9546 I2C Multiplexer',
                displayName: 'TCA9546 4Ch I2C Multiplexer',
                productURL: 'https://www.adafruit.com/product/5663',
                documentationURL: 'https://learn.adafruit.com/adafruit-pca9546-4-channel-i2c-multiplexer',
                image: 'https://cdn-shop.adafruit.com/640x480/5663-04.jpg',
                address: '0x70',
                addresses: ['0x70', '0x71', '0x72', '0x73', '0x74', '0x75', '0x76', '0x77'],
                dataTypes: [],
                channels: 4
            });

            // Add TCA9548 - 8-channel I2C multiplexer
            appState.componentsData.i2c.push({
                id: 'tca9548',
                name: 'TCA9548 I2C Multiplexer',
                displayName: 'TCA9548 8Ch I2C Multiplexer',
                productURL: 'https://www.adafruit.com/product/2717',
                documentationURL: 'https://learn.adafruit.com/adafruit-tca9548a-1-to-8-i2c-multiplexer-breakout',
                image: 'https://cdn-shop.adafruit.com/640x480/2717-00.jpg',
                address: '0x70',
                addresses: ['0x70', '0x71', '0x72', '0x73', '0x74', '0x75', '0x76', '0x77'],
                dataTypes: [],
                channels: 8
            });
        }

        // Initialize the UI with the data
        initializeUI();

        console.log('Successfully loaded Wippersnapper data', {
            boards: Object.keys(appState.boardsData).length,
            components: Object.keys(appState.componentsData)
                .filter(key => !key.endsWith('_metadata'))
                .reduce((acc, key) => acc + appState.componentsData[key].length, 0)
        });

        appState.isLoading = false;
        return true;
    } catch (error) {
        console.error('Error loading Wippersnapper data:', error);
        appState.loadError = error.message;
        appState.isLoading = false;
        showLoadError(error.message);
        return false;
    }
}

/**
 * Initialize the UI with the loaded data
 */
function initializeUI() {
    // Populate board select dropdown
    populateBoardSelect();

    // Set up event listeners
    attachEventListeners();
}

/**
 * Populate the board select dropdown with available boards
 */
function populateBoardSelect() {
    const boardSelect = document.getElementById('board-select');
    boardSelect.innerHTML = '<option value="">-- Select a Board --</option>';

    // Filter boards to only include those with UF2 install method
    const filteredBoards = Object.entries(appState.boardsData)
        .filter(([boardId, board]) => ['uf2', 'web-native-usb'].includes(board.installMethod)); //funhouse

    // Sort boards by vendor and name
    const sortedBoards = filteredBoards
        .sort((a, b) => {
            const vendorA = a[1].vendor || '';
            const vendorB = b[1].vendor || '';
            if (vendorA === 'Generic') {
                return 1; // Sort Generic to the end
            } else if (vendorB === 'Generic') {
                return -1; // Sort Generic to the end
            } else if (vendorA !== vendorB) {
                // Sort by vendor first
                return vendorA.localeCompare(vendorB);
            }

            // Then by display name
            return a[1].displayName.localeCompare(b[1].displayName);
        });

    // Group boards by vendor
    const boardsByVendor = {};
    sortedBoards.forEach(([boardId, board]) => {
        const vendor = board.vendor || 'Other';
        if (!boardsByVendor[vendor]) {
            boardsByVendor[vendor] = [];
        }
        boardsByVendor[vendor].push([boardId, board]);
    });

    // Add boards to select, grouped by vendor
    Object.entries(boardsByVendor).forEach(([vendor, boards]) => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = vendor;

        boards.forEach(([boardId, board]) => {
            const option = document.createElement('option');
            option.value = boardId;
            option.textContent = board.displayName;
            optgroup.appendChild(option);
        });

        boardSelect.appendChild(optgroup);
    });
}

/**
 * Convert the loaded board data to the format expected by the application
 * @param {string} boardId The ID of the selected board
 * @returns {Object} The board configuration object
 */
function convertBoardDataToConfig(boardId) {
    const boardData = appState.boardsData[boardId];
    if (!boardData) return null;

    // Extract pin numbers from board data
    const pins = boardData.pins.map(pin => pin.number).filter(num => !isNaN(num));

    boardConfig = boardData;
    // Create board config
    boardConfig.totalAnalogPins= boardData.totalAnalogPins || 0;
    boardConfig.defaultI2C= {
            SCL: boardData.defaultI2C.SCL,
            SDA: boardData.defaultI2C.SDA
        };
    boardConfig.pins= pins;

    return boardConfig;
}

/**
 * Convert the loaded component data to the format expected by the application
 * @returns {Object} The components configuration object
 */
function convertComponentsDataToConfig() {
    const componentsConfig = {
        i2c: [],
        ds18x20: [],
        pin: [],
        pixel: [],
        pwm: [],
        servo: [],
        uart: []
    };

    // Process I2C components
    if (appState.componentsData.i2c) {
        appState.componentsData.i2c.forEach(component => {
            componentsConfig.i2c.push({
                id: component.id,
                name: component.name,
                displayName: component.displayName || component.name,
                address: component.address || '0x00',
                addresses: component.addresses || [component.address || '0x00'],
                dataTypes: component.dataTypes || [],
                channels: component.channels || 0
            });
        });
    }

    // Process DS18x20 components
    if (appState.componentsData.ds18x20) {
        appState.componentsData.ds18x20.forEach(component => {
            componentsConfig.ds18x20.push({
                id: component.id,
                displayName: component.displayName || component.name,
                name: component.name,
                dataTypes: component.dataTypes || []
            });
        });
    }

    // Process Pin components
    if (appState.componentsData.pin) {
        appState.componentsData.pin.forEach(component => {
            componentsConfig.pin.push({
                id: component.id,
                displayName: component.displayName || component.name,
                name: component.name,
                dataTypes: component.dataTypes || []
            });
        });
    }

    // Process Pixel components
    if (appState.componentsData.pixel) {
        appState.componentsData.pixel.forEach(component => {
            componentsConfig.pixel.push({
                id: component.id,
                displayName: component.displayName || component.name,
                name: component.name,
                dataTypes: component.dataTypes || []
            });
        });
    }

    // Process PWM components
    if (appState.componentsData.pwm) {
        appState.componentsData.pwm.forEach(component => {
            componentsConfig.pwm.push({
                id: component.id,
                displayName: component.displayName || component.name,
                name: component.name,
                dataTypes: component.dataTypes || []
            });
        });
    }

    // Process Servo components
    if (appState.componentsData.servo) {
        appState.componentsData.servo.forEach(component => {
            componentsConfig.servo.push({
                id: component.id,
                displayName: component.displayName || component.name,
                name: component.name,
                dataTypes: component.dataTypes || []
            });
        });
    }

    // Process UART components
    if (appState.componentsData.uart) {
        appState.componentsData.uart.forEach(component => {
            componentsConfig.uart.push({
                id: component.id,
                displayName: component.displayName || component.name,
                name: component.name,
                dataTypes: component.dataTypes || []
            });
        });
    }

    return componentsConfig;
}

/**
 * Attach event listeners to the UI elements
 */
function attachEventListeners() {
    // BOARD SELECTION HANDLER HAS BEEN REMOVED
    // The duplicate event handler from load-wippersnapper-data.js has been removed
    // to prevent conflicts with the handler in wippersnapper-config-builder.js

    // Instead, we'll prepare the data in the format expected by wippersnapper-config-builder.js
    console.log('Data loading complete, board selection handler is in wippersnapper-config-builder.js');

    // Convert component data to config format
    const componentsConfig = convertComponentsDataToConfig();
    console.log('not using Components data converted to config format:', componentsConfig);
    // Update the components data in appState with the converted format
    // so it's ready for use in the other script
    // appState.componentsData = componentsConfig;

    // No other event listeners needed here as they are handled in wippersnapper-config-builder.js
}

/**
 * Display an error message to the user when data loading fails
 * @param {string} message The error message to display
 */
function showLoadError(message) {
    // Create or update an error message element
    let errorElem = document.getElementById('load-error');

    if (!errorElem) {
        errorElem = document.createElement('div');
        errorElem.id = 'load-error';
        errorElem.style.backgroundColor = '#ffdddd';
        errorElem.style.color = '#cc0000';
        errorElem.style.padding = '15px';
        errorElem.style.margin = '15px 0';
        errorElem.style.borderRadius = '5px';

        // Insert at the top of the body
        document.body.insertBefore(errorElem, document.body.firstChild);
    }

    errorElem.innerHTML = `
        <h3>Error Loading Data</h3>
        <p>${message}</p>
        <p>Please check that the JSON files are available and properly formatted.</p>
        <button onclick="retryLoading()">Retry</button>
    `;
}

/**
 * Retry loading the Wippersnapper data
 */
function retryLoading() {
    // Remove the error message
    const errorElem = document.getElementById('load-error');
    if (errorElem) {
        errorElem.remove();
    }

    // Try loading again
    loadWippersnapperData();
}

// Initialize the application by loading the data when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    loadWippersnapperData();
});
