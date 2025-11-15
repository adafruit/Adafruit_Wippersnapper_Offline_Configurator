import os
import time
from convert_boards_to_json import convert_boards_to_json
from convert_components_to_json import (
    convert_components_to_json,
    get_image_from_adafruit_product_url,
)
from fetch_latest_release_info_and_assets import (
    main as fetch_latest_release_info_and_assets,
)


def main():
    """
    Run both conversion scripts and report the results
    """
    print("=== Wippersnapper Definitions Converter ===")
    print("Converting all Wippersnapper definitions to JSON...")

    start_time = time.time()

    # Convert boards
    print("\n--- Converting Boards ---")
    boards = convert_boards_to_json()

    # Check companion board image URLs work
    print("\n--- Verifying companion board image URLs ---")
    # read wippersnapper-config-builder.js and verify image URLs
    # otherwise use get_image_from_adafruit_product_url to fetch images
    with open("wippersnapper-config-builder.js", "r", encoding="utf-8") as f:
        config_builder_js = f.read()

    # \s+productURL: ['"](.*?)['"]\s+\n\s+documentationURL:(.*?)\nimage: ['"](.*?)['"]
    import re
    import requests

    pattern = re.compile(
        r"""
        productURL:\s*[\'"](.*?)[\'"]      # capture companion product URL
        \s*,?\s*(?:\r?\n)+\s*
        documentationURL:\s*[\'"].*?[\'"]  # ensure we stay within the same object
        \s*,?\s*(?:\r?\n)+\s*
        image:\s*[\'"](.*?)[\'"]           # capture corresponding image URL
        """,
        re.DOTALL | re.VERBOSE,
    )
    matches = pattern.findall(config_builder_js)
    for product_url, image_url in matches:
        # Try to fetch the image url or get fresh if adafruit product
        if image_url and image_url.startswith("http"):
            # Test if image URL is reachable
            try:
                response = requests.head(image_url, timeout=10)
                if response.status_code == 200:
                    print(f"  [✓] Image URL is reachable: {image_url}")
                    continue
                else:
                    print(
                        f"  [!] Image URL returned status {response.status_code}: {image_url}"
                    )
                    response.raise_for_status()
            except requests.RequestException as e:
                print(f"  [!] Error reaching image URL {image_url}: {e}")
        if "adafruit.com" in product_url:
            image_data = get_image_from_adafruit_product_url(product_url)
            if image_data is None:
                print(
                    f"  [!] Failed to fetch image from Adafruit product URL: {product_url}"
                )
            else:
                print(
                    f"  [✓] Successfully fetched image from Adafruit product URL: {product_url}"
                )
                # update original file with new image URL
                with open(
                    "wippersnapper-config-builder.js", "w", encoding="utf-8"
                ) as f:
                    config_builder_js = config_builder_js.replace(image_url, image_data)
                    f.write(config_builder_js)

        else:
            print(f"  [i] Skipping non-Adafruit product URL: {product_url}")

    # Convert components
    print("\n--- Converting Components ---")
    components = convert_components_to_json()

    # fetch latest release info and assets
    release_info = fetch_latest_release_info_and_assets()

    # Print summary
    elapsed_time = time.time() - start_time
    print("\n=== Conversion Complete ===")
    print(
        f"Converted {len(boards)} boards and {sum(len(components[cat]) for cat in components if not cat.endswith('_metadata'))} components"
    )
    print(f"Time taken: {elapsed_time:.2f} seconds")
    print(f"Output files:")
    print(f"  - {os.path.abspath(r'wippersnapper_boards.json')}")
    print(f"  - {os.path.abspath(r'wippersnapper_components.json')}")
    print(f"  - {os.path.abspath(r'firmware-data.json')}")


if __name__ == "__main__":
    main()
