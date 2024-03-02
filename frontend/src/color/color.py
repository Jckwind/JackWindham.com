# Tailwind Color Converter Script
import json
import re

class Color:
    def __init__(self, hex: str):
        if not hex:
            hex = "#FFFFFF"
        
        hex = hex.upper()
        self.hex = hex
        self.rgb = hex_to_rgb(hex)

class RGBColor:
    def __init__(self, r, g, b):
        self.r = r
        self.g = g
        self.b = b
    
    def __str__(self):
        return f"{self.r} {self.g} {self.b}"

class Palette:
    def __init__(self):
        self.colors = {}

    def add_color(self, name: str, light: Color, dark: Color):
        self.colors[name] = { "light": light, "dark": dark }

def hex_to_rgb(hex_color):
    """Convert hex color to an RGB object."""
    hex_color = hex_color.lstrip('#')
    if len(hex_color) == 6:  # Assuming a standard 6-digit hex code
        r = int(hex_color[0:2], 16)
        g = int(hex_color[2:4], 16)
        b = int(hex_color[4:6], 16)
        return RGBColor(r, g, b)
    else:
        raise ValueError("Invalid hex color format")

def parse_colors_from_json(json_file_path):
    """
    Reads color definitions from a JSON file, converts them to RGB format, 
    and returns a list of color names and their RGB values for light and dark modes.

    Args:
    json_file_path (str): The file path to the JSON file containing color definitions.

    Returns:
    list: A list of tuples, each containing the color name and a dictionary with 
          'light' and 'dark' modes as keys and their respective RGB color codes as values.

    Raises:
    FileNotFoundError: If the JSON file does not exist at the specified path.
    JSONDecodeError: If the JSON file is not properly formatted.
    """

    with open(json_file_path, 'r') as file:
        try:
            colors = json.load(file)
        except json.JSONDecodeError as e:
            raise ValueError(f"Error reading JSON file: {e}")

    palette = Palette()
    for color_name, modes in colors.items():
        light = Color(modes["light"])
        dark = Color(modes["dark"])
        palette.add_color(color_name, light, dark)

    return palette

def update_markdown_with_colors(palette: Palette, markdown_file_path):
    """
    Updates a Markdown file with a visual representation of colors.

    Args:
    colors (list): A list of tuples, each containing the color name and a dictionary with 
                   'light' and 'dark' modes as keys and their respective RGB color codes as values.
    markdown_file_path (str): The file path to the Markdown file to be updated.

    The function appends a visual representation of each color to the Markdown file.
    The original content of the file is preserved.
    """

    with open(markdown_file_path, 'w') as md_file:
        # Write the introductory text
        md_file.write("# Color\n\n")
        md_file.write("color.json stores the theme data for the entire website. "
                      "Every color has a light and dark mode\n\n")
        md_file.write("I think Hex Codes are easier to plug and play\n\n")
        md_file.write("I design while I build, so something like this is helpful.\n\n")
        md_file.write("I wrote a little python script to enable me to not have to use rgb channels (gross)\n\n")
        md_file.write("You can edit color.json, and when you've made a change, run `python3 color.py` or `python color.py`\n")
        md_file.write("  - A palette will be generated below (You have to view this file in markdown to see it)\n")
        md_file.write("  - The globals.css file will be updated with the rgb values for every color\n")

        colors_light = [(name, color_modes['light'].hex) for name, color_modes in palette.colors.items()]
        colors_dark = [(name, color_modes['dark'].hex) for name, color_modes in palette.colors.items()]


        COLUMN_COUNT = 4

        # Write the color palette
        md_file.write('\n## Light Mode\n\n')
        md_file.write("<table>\n")
        # Assuming 'arr' is your input array
        light_colors_rows = [colors_light[i:i + COLUMN_COUNT] for i in range(0, len(colors_light), COLUMN_COUNT)]

        for rows in light_colors_rows:
            md_file.write(' <tr>\n')
            for (color_name, _) in rows:
                 md_file.write(f'    <th>{color_name.capitalize()}</th>\n')
            md_file.write(' </tr>\n')
            md_file.write(' <tr>\n')
            for (_, hex) in rows:
                md_file.write(f'    <td style="inline-block; width: 75px; height: 75px; background-color: {hex}; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>\n')
            md_file.write(' </tr>\n')
        
        md_file.write("</table>\n")

        # Write the color palette
        md_file.write('\n## Dark Mode\n\n')
        md_file.write("<table>\n")
        # Assuming 'arr' is your input array
        dark_colors_rows = [colors_dark[i:i + COLUMN_COUNT] for i in range(0, len(colors_dark), COLUMN_COUNT)]

        for rows in dark_colors_rows:
            md_file.write(' <tr>\n')
            for (color_name, _) in rows:
                 md_file.write(f'    <th>{color_name.capitalize()}</th>\n')
            md_file.write(' </tr>\n')
            md_file.write(' <tr>\n')
            for (_, hex) in rows:
                md_file.write(f'    <td style="inline-block; width: 75px; height: 75px; background-color: {hex}; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>\n')
            md_file.write(' </tr>\n')
        
        md_file.write("</table>\n")

def update_globals_css_with_colors(palette: Palette, css_file_path: str):
    """
    Updates the globals.css file with RGB values from the palette for both light and dark modes.

    Args:
    palette (Palette): The Palette object containing color information.
    css_file_path (str): The file path to the globals.css file to be updated.
    """
    with open(css_file_path, 'r') as css_file:
        css_content = css_file.read()

    # Regular expressions to find light and dark mode sections
    light_mode_pattern = r'(@media \(prefers-color-scheme: light\)\s*\{[\s\S]*?\})'
    dark_mode_pattern = r'(@media \(prefers-color-scheme: dark\)\s*\{[\s\S]*?\})'

    light_section = re.search(light_mode_pattern, css_content)
    dark_section = re.search(dark_mode_pattern, css_content)

    if light_section:
        light_css = light_section.group(1)
        for color_name, color_modes in palette.colors.items():
            light_rgb = f"{color_modes['light'].rgb.r} {color_modes['light'].rgb.g} {color_modes['light'].rgb.b}"
            light_css = re.sub(rf'(--{color_name}: )[^;]+;', rf'--{color_name}: {light_rgb};', light_css)
        css_content = css_content.replace(light_section.group(1), light_css)

    if dark_section:
        dark_css = dark_section.group(1)
        for color_name, color_modes in palette.colors.items():
            dark_rgb = f"{color_modes['dark'].rgb.r} {color_modes['dark'].rgb.g} {color_modes['dark'].rgb.b}"
            dark_css = re.sub(rf'(--{color_name}: )[^;]+;', rf'--{color_name}: {dark_rgb};', dark_css)
        css_content = css_content.replace(dark_section.group(1), dark_css)

    with open(css_file_path, 'w') as css_file:
        css_file.write(css_content)

    print("globals.css file updated successfully.")


def main():
    json_file = 'color.json'
    markdown_file = 'color.md'
    css_file = '../app/globals.css'

    palette = parse_colors_from_json(json_file)
    update_globals_css_with_colors(palette, css_file)

    update_markdown_with_colors(palette, markdown_file)
    print("Markdown file generated successfully.")

main()