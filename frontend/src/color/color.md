# Color

color.json stores the theme data for the entire website. Every color has a light and dark mode

I think Hex Codes are easier to plug and play

I design while I build, so something like this is helpful.

I wrote a little python script to enable me to not have to use rgb channels (gross)

You can edit color.json, and when you've made a change, run `python3 color.py` or `python color.py`
  - A palette will be generated below (You have to view this file in markdown to see it)
  - The globals.css file will be updated with the rgb values for every color

## Light Mode

<table>
 <tr>
    <th>Background</th>
    <th>Secondary-background</th>
    <th>Foreground</th>
    <th>Card</th>
 </tr>
 <tr>
    <td style="inline-block; width: 75px; height: 75px; background-color: #CEC7B5; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #ECE5D8; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #4A4849; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #ECE5D8; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
 </tr>
 <tr>
    <th>Card-foreground</th>
    <th>Popover</th>
    <th>Popover-foreground</th>
    <th>Primary</th>
 </tr>
 <tr>
    <td style="inline-block; width: 75px; height: 75px; background-color: #4A4849; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #F3F1E4; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #4A4849; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #CEC7B5; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
 </tr>
 <tr>
    <th>Primary-foreground</th>
    <th>Secondary</th>
    <th>Secondary-foreground</th>
    <th>Muted</th>
 </tr>
 <tr>
    <td style="inline-block; width: 75px; height: 75px; background-color: #4A4849; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #CEC7B5; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #4A4849; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #716E6F; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
 </tr>
 <tr>
    <th>Muted-foreground</th>
    <th>Accent</th>
    <th>Accent-foreground</th>
    <th>Destructive</th>
 </tr>
 <tr>
    <td style="inline-block; width: 75px; height: 75px; background-color: #716E6F; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #000000; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #FFD700; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #EF4444; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
 </tr>
 <tr>
    <th>Destructive-foreground</th>
    <th>Border</th>
    <th>Input</th>
    <th>Ring</th>
 </tr>
 <tr>
    <td style="inline-block; width: 75px; height: 75px; background-color: #F9FAFB; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #716E6F; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #E5E7EB; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #716E6F; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
 </tr>
</table>

## Dark Mode

<table>
 <tr>
    <th>Background</th>
    <th>Secondary-background</th>
    <th>Foreground</th>
    <th>Card</th>
 </tr>
 <tr>
    <td style="inline-block; width: 75px; height: 75px; background-color: #CEC7B5; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #ECE5D8; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #4A4849; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #ECE5D8; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
 </tr>
 <tr>
    <th>Card-foreground</th>
    <th>Popover</th>
    <th>Popover-foreground</th>
    <th>Primary</th>
 </tr>
 <tr>
    <td style="inline-block; width: 75px; height: 75px; background-color: #4A4849; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #F3F1E4; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #4A4849; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #CEC7B5; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
 </tr>
 <tr>
    <th>Primary-foreground</th>
    <th>Secondary</th>
    <th>Secondary-foreground</th>
    <th>Muted</th>
 </tr>
 <tr>
    <td style="inline-block; width: 75px; height: 75px; background-color: #4A4849; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #CEC7B5; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #4A4849; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #716E6F; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
 </tr>
 <tr>
    <th>Muted-foreground</th>
    <th>Accent</th>
    <th>Accent-foreground</th>
    <th>Destructive</th>
 </tr>
 <tr>
    <td style="inline-block; width: 75px; height: 75px; background-color: #716E6F; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #000000; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #FFD700; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #EF4444; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
 </tr>
 <tr>
    <th>Destructive-foreground</th>
    <th>Border</th>
    <th>Input</th>
    <th>Ring</th>
 </tr>
 <tr>
    <td style="inline-block; width: 75px; height: 75px; background-color: #F9FAFB; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #716E6F; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #E5E7EB; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #716E6F; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
 </tr>
</table>
