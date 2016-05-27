# Text2D Primitive overview

As its name would suggest, this primitive is used to render text in the Canvas2D (little fact, the Canvas2D feature was born because this requirement and the ambition to extend it to many more things).

Text2D rendering is **efficient**/**fast**, it's not based on a render to texture approach (well, a little bit, but not as one would expect). It was designed to be flexible and fast to render. Each letter is rendered using two triangles mapping a FontTexture that contains the font's characters with the coordinates of the character to display.

## Features

 - Is Unicode based, so any kind of characters can be rendered.
 - Support line return, tabulation.
 - Text measure.
 
Soon to be supported:

 - Character based color.
 - Alignment of text.

## Properties

 - `fontName`: A [W3C CSS](https://www.w3.org/wiki/CSS/Properties/font) font property used to create the FontTexture used to render the text.
 - `text`: a string property containing the text to render.
 - `areaSize`: a `Size` optional property that represent the area where the text will be rendered. If null the area is computed based on the text content. Default value is null.
 - `vAlign`: a number, one of the Text2D.TEXT2D_VALIGN_XXX value to specify vertical alignment. *not supported right now*
 - `hAlign`: a number, one of the Text2D.TEXT2D_HALIGN_XXX value to specify horizontal alignment. *not supported right now*

## Remarks

Right now the intersection API is very rough, the whole text area is tested and return true if the intersection point is inside.

The rendering quality of the text depends on the Web Browser implementation, right now FireFox seems to be below the other that could have been tested. We will focus soon on quality of rendering as it's a very important part of Canvas2D.

## Example

[Primitive with Action Manager](http://babylonjs-playground.com/#1ONKPJ#1)


