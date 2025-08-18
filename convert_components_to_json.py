import os
import json
import glob
import re
import requests
# from bs4 import BeautifulSoup
from pathlib import Path

# Base directory for the components
COMPONENTS_DIR = r"./Wippersnapper_Components/components"
OUTPUT_FILE = r"./wippersnapper_components.json"

def get_image_from_adafruit_product_url(product_url):
    """
    Fetch the product image URL from an Adafruit product API 
    (was from prod page by extracting the og:image meta tag from the HTML).
    
    Args:
        product_url (str): URL to an Adafruit product page
        
    Returns:
        str or None: URL to the product image, or None if not found
    """
    if not product_url or not re.match(r'https?://(?:www\.)?adafruit\.com/(?:product|category)/\d+', product_url):
        print(f"Invalid Adafruit product URL ({product_url}) provided. Skipping image fetch.")
        return None
    
    # Grab product JSON from https://www.adafruit.com/api/products, cache, save as ISO date string filename so can be easily used as cache key
    try:
        product_id = re.search(r'/product/(\d+)', product_url)
        category = re.search(r'/category/(\d+)', product_url)
        url_to_fetch = f"https://www.adafruit.com/api/{("category" if category else "product")}/{(product_id.groups(1)[0] if product_id else category.groups(1)[0])}"
        print(f"Fetching image from Adafruit API for {product_url}...\nGET {url_to_fetch}")
        response = requests.get(url_to_fetch, timeout=10)
        if response.status_code != 200:
            print(f"Failed to fetch product data: {product_url}, status code: {response.status_code}")
            return None
        response_json = response.json()
        if (response_json is None or response_json == [] or response_json == {} or 'error' in response_json):
            print(f"Invalid response from API for {product_url}: {response_json}")
            return None
        
        if 'product_image' in response_json:
            image_url = response_json['product_image']
            print(f"Found image URL from API: {image_url}")
            return image_url
        elif 'subcategories' in response_json:
            subcategories = response_json['subcategories']
            for subcategory in subcategories:
                if 'product_image' in subcategory:
                    image_url = subcategory['product_image']
                    print(f"Found image URL from API: {image_url}")
                    return image_url
        print(f"No image found in subcategory for: {product_url}")
        return None
    except Exception as e:
        print(f"Error fetching image from API for {product_url}: {str(e)}")
        return None

## Consider removing beautifulsoup...

def map_datatypes_to_offline_types(datatype):
    """
    Map datatypes to offline types.

    humidity should be relative-humidity
    """
    datatype = datatype.lower().replace("humidity", "relative-humidity")
    return datatype

def convert_components_to_json():
    """
    Convert all component definition.json files into a single JSON file
    that can be used in the Wippersnapper Configuration Builder.
    """
    components = {}
    
    # Get all component category directories
    category_dirs = [d for d in os.listdir(COMPONENTS_DIR) if os.path.isdir(os.path.join(COMPONENTS_DIR, d)) and not d.startswith('.')]
    
    for category in category_dirs:
        category_path = os.path.join(COMPONENTS_DIR, category)
        category_components = []
        
        # Get component directories within this category
        component_dirs = [d for d in os.listdir(category_path) if os.path.isdir(os.path.join(category_path, d)) and not d.startswith('.')]
        
        for component_dir in component_dirs:
            component_path = os.path.join(category_path, component_dir)
            definition_file = os.path.join(component_path, "definition.json")
            
            # Skip if the definition.json doesn't exist
            if not os.path.exists(definition_file):
                print(f"Skipping {category}/{component_dir} - No definition.json found")
                continue
            
            try:
                # Read the definition.json file
                with open(definition_file, 'r') as f:
                    component_data = json.load(f)
                
                # Skip non-input components for now
                if category == "pin":
                    if component_data.get("direction", "").lower() != "input":
                        continue
                
                # Extract relevant information
                component_info = {
                    "id": component_dir,
                    "displayName": component_data.get("displayName", component_dir),
                    "name": component_data.get("name", component_dir),
                    "description": component_data.get("description", ""),
                    "category": category,
                    "dataTypes": [],
                    "image": None
                }

                # Store product URL if available
                if "productURL" in component_data:
                    component_info["productUrl"] = component_data["productURL"]

                # store documentation URL if available
                if "documentationURL" in component_data:
                    component_info["documentationUrl"] = component_data["documentationURL"]
                
                # Extract data types if available
                if "subcomponents" in component_data:
                    for meas_type in component_data["subcomponents"]:
                        if isinstance(meas_type, dict) and "sensorType" in meas_type:
                            component_info["dataTypes"].append({
                                "displayName": meas_type["displayName"] if "displayName" in meas_type else meas_type["sensorType"],
                                "sensorType": map_datatypes_to_offline_types(meas_type["sensorType"]) if "sensorType" in meas_type else None
                            })
                        else:
                            component_info["dataTypes"].append(map_datatypes_to_offline_types(meas_type))
                
                # Handle pin category (MODE becomes componentAPI value)
                if category == "pin":
                    component_info["componentAPI"] = component_data.get("mode", "digital").lower() + "io"

                # Handle I2C-specific properties
                if category == "i2c":
                    # Extract I2C address from parameters
                    if "i2cAddresses" in component_data:
                        default_address = component_data["i2cAddresses"][0]
                        component_info["address"] = default_address
                        
                        # Get all possible addresses
                        component_info["addresses"] = component_data["i2cAddresses"]
                    else:
                        raise ValueError(f"No i2cAddresses found for {category}/{component_dir}")
                
                    # Special handling for multiplexers
                    if "multiplexer" in component_dir.lower() or "mux" in component_dir.lower():
                        if "pca9548" in component_dir.lower() or "tca9548" in component_dir.lower():
                            component_info["channels"] = 8
                        else:
                            component_info["channels"] = 4

                    # Special handling for GPS over I2C
                    if component_data.get("isGps", False):
                            component_info["isGps"] = True
                            component_info["gps"] = {}
                            gps_data = component_data.get("gps", {})
                            if "commands_ubxes" in gps_data:
                                component_info["gps"]["commands_ubxes"] = gps_data["commands_ubxes"]
                            if "commands_pmtks" in gps_data:
                                component_info["gps"]["commands_pmtks"] = gps_data["commands_pmtks"]

                # Handle UART-specific properties
                if category == "uart":
                    # Required properties
                    component_info["deviceType"] = component_data.get("deviceType")
                    component_info["deviceId"] = component_data.get("deviceId")
                    # Specific deviceType properties
                    if component_info["deviceType"] == "generic_input":
                        component_info["generic_input"] = {}
                        generic_input_data = component_data.get("generic_input", {})
                        component_info["generic_input"]["period"] = generic_input_data.get("period", 30000)
                        # Extract data types
                        if "generic_input" in component_data and "sensor_types" in component_data["generic_input"]:
                            for meas_type in component_data["generic_input"]["sensor_types"]:
                                if isinstance(meas_type, dict) and "sensorType" in meas_type:
                                    component_info["dataTypes"].append({
                                        "displayName": meas_type["displayName"] if "displayName" in meas_type else meas_type["sensorType"],
                                        "sensorType": map_datatypes_to_offline_types(meas_type["sensorType"]) if "sensorType" in meas_type else None
                                    })
                                else:
                                    component_info["dataTypes"].append(map_datatypes_to_offline_types(meas_type))
                    elif component_info["deviceType"] == "gps":
                        component_info["gps"] = {}
                        gps_data = component_data.get("gps", {})
                        component_info["gps"]["period"] = gps_data.get("period", 30000)
                        if "commands_ubxes" in gps_data:
                            component_info["gps"]["commands_ubxes"] = gps_data["commands_ubxes"]
                        if "commands_pmtks" in gps_data:
                            component_info["gps"]["commands_pmtks"] = gps_data["commands_pmtks"]
                    elif component_info["deviceType"] == "pm25aqi":
                        component_info["pm25aqi"] = {}
                        # Parse PM2.5 AQI properties
                        if "pm25aqi" in component_data:
                            component_info["pm25aqi"]["period"] = component_data["pm25aqi"].get("period", 30000)  # Default to 30s if not specified
                            if component_data["pm25aqi"].get("is_pm1006", False):
                                component_info["pm25aqi"]["is_pm1006"] = True
                        # Extract data types
                        pm25aqi_data = component_data
                        if "pm25aqi" in pm25aqi_data and "sensor_types" in pm25aqi_data["pm25aqi"]:
                            for meas_type in pm25aqi_data["pm25aqi"]["sensor_types"]:
                                if isinstance(meas_type, dict) and "sensorType" in meas_type:
                                    component_info["dataTypes"].append({
                                        "displayName": meas_type["displayName"] if "displayName" in meas_type else meas_type["sensorType"],
                                        "sensorType": map_datatypes_to_offline_types(meas_type["sensorType"]) if "sensorType" in meas_type else None
                                    })
                                else:
                                    component_info["dataTypes"].append(map_datatypes_to_offline_types(meas_type))
                    elif component_info["deviceType"] == "tmc22xx":
                        # TODO
                        pass
                    else:
                        raise ValueError(f"Unknown deviceType {component_info['deviceType']} for {category}/{component_dir}")

                # Look for an image file
                image_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg']
                image_found = False
                for ext in image_extensions:
                    image_file = os.path.join(component_path, f"image{ext}")
                    if os.path.exists(image_file):
                        # Store relative path to image
                        component_info["image"] = f"components/{category}/{component_dir}/image{ext}"
                        image_found = True
                        break
                
                # If no local image found and we have a product URL from Adafruit, try to fetch the image
                if not image_found and "productUrl" in component_info:
                    product_url = component_info["productUrl"]
                    image_url = get_image_from_adafruit_product_url(product_url)
                    if image_url:
                        component_info["image"] = image_url
                        print(f"Using Adafruit product image for {category}/{component_dir}: {image_url}")
                
                # Add to category components
                category_components.append(component_info)
                print(f"Processed {category}/{component_dir}")
                
            except Exception as e:
                print(f"Error processing {category}/{component_dir}: {str(e)}")
        
        # Add this category to components dictionary
        components[category] = category_components
    
    # Check for schema.json files in each category for any additional metadata
    for category in category_dirs:
        schema_file = os.path.join(COMPONENTS_DIR, category, "schema.json")
        if os.path.exists(schema_file):
            try:
                with open(schema_file, 'r') as f:
                    schema_data = json.load(f)
                
                # Add metadata about the category if not already in components
                if f"{category}_metadata" not in components:
                    components[f"{category}_metadata"] = {
                        "title": schema_data.get("title", category),
                        "description": schema_data.get("description", ""),
                        "required": schema_data.get("required", []),
                        "properties": schema_data.get("properties", {})
                    }
            except Exception as e:
                print(f"Error processing schema for {category}: {str(e)}")
    
    # Write the consolidated JSON file
    with open(OUTPUT_FILE, 'w') as f:
        json.dump({"components": components}, f, ensure_ascii=False, indent=2)

    # Write the consolidated JS file
    with open(OUTPUT_FILE.replace('.json', '.js'), 'w') as f:
        f.write("window.jsonComponentsObject = ")
        json.dump({"components": components}, f, ensure_ascii=False, indent=2)
        f.write(";\n")

    print(f"Successfully created {OUTPUT_FILE}")
    
    # Calculate component count
    total_components = sum(len(components[cat]) for cat in components if not cat.endswith('_metadata'))
    print(f"Processed {total_components} components across {len(category_dirs)} categories")
    
    return components

# Execute the function
if __name__ == "__main__":
    components = convert_components_to_json()
    
    # Print summary
    for category, items in components.items():
        if not category.endswith('_metadata'):
            print(f"Category: {category} - {len(items)} components")
