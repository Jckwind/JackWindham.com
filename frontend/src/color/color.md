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
    <th>Card</th>
    <th>Card-text</th>
 </tr>
 <tr>
    <td style="inline-block; width: 75px; height: 75px; background-color: #F1F0EE; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #FFFFFF; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #F1F0EE; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #000000; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
 </tr>
 <tr>
    <th>Text</th>
    <th>Muted-text</th>
    <th>Primary</th>
    <th>Primary-text</th>
 </tr>
 <tr>
    <td style="inline-block; width: 75px; height: 75px; background-color: #232323; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #131318; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #E53C12; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #EBE9E1; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
 </tr>
 <tr>
    <th>Secondary</th>
    <th>Secondary-text</th>
    <th>Popover</th>
    <th>Popover-text</th>
 </tr>
 <tr>
    <td style="inline-block; width: 75px; height: 75px; background-color: #E53C12; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #EBE9E1; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #4A4849; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #F1F0EE; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
 </tr>
 <tr>
    <th>Accent</th>
    <th>Accent-text</th>
    <th>Destructive</th>
    <th>Destructive-text</th>
 </tr>
 <tr>
    <td style="inline-block; width: 75px; height: 75px; background-color: #FEC525; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #FEC525; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #EF4444; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #F9FAFB; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
 </tr>
 <tr>
    <th>Input</th>
    <th>Border</th>
    <th>Ring</th>
    <th>Shadow</th>
 </tr>
 <tr>
    <td style="inline-block; width: 75px; height: 75px; background-color: #E5E7EB; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #765827; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #131318; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #131318; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
 </tr>
</table>

## Dark Mode

<table>
 <tr>
    <th>Background</th>
    <th>Secondary-background</th>
    <th>Card</th>
    <th>Card-text</th>
 </tr>
 <tr>
    <td style="inline-block; width: 75px; height: 75px; background-color: #1E1E26; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #131318; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #131318; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #FFFFFF; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
 </tr>
 <tr>
    <th>Text</th>
    <th>Muted-text</th>
    <th>Primary</th>
    <th>Primary-text</th>
 </tr>
 <tr>
    <td style="inline-block; width: 75px; height: 75px; background-color: #FFFFFF; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #FFFFFF; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #E53C12; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #000000; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
 </tr>
 <tr>
    <th>Secondary</th>
    <th>Secondary-text</th>
    <th>Popover</th>
    <th>Popover-text</th>
 </tr>
 <tr>
    <td style="inline-block; width: 75px; height: 75px; background-color: #E53C12; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #000000; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: 000000; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #FFF6E0; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
 </tr>
 <tr>
    <th>Accent</th>
    <th>Accent-text</th>
    <th>Destructive</th>
    <th>Destructive-text</th>
 </tr>
 <tr>
    <td style="inline-block; width: 75px; height: 75px; background-color: #FEC525; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #FEC525; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #FFFFFF; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #FFFFFF; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
 </tr>
 <tr>
    <th>Input</th>
    <th>Border</th>
    <th>Ring</th>
    <th>Shadow</th>
 </tr>
 <tr>
    <td style="inline-block; width: 75px; height: 75px; background-color: #FFFFFF; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #FFFFFF; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #98E4FF; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
    <td style="inline-block; width: 75px; height: 75px; background-color: #B6FFFA; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);"></td>
 </tr>
</table>
