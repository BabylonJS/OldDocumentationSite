# Text2D Primitive overview

As its name would suggest, this primitive is used to render text in the Canvas2D (little fact, the Canvas2D feature was born because this requirement and the ambition to extend it to many more things).

Text2D rendering is **efficient**/**fast**, it's not based on a render to texture approach (well, a little bit, but not as one would expect). It was designed to be flexible and fast to render. Each letter is rendered using two triangles mapping a FontTexture that contains the font's characters with the coordinates of the character to display.

## Different Text Rendering modes

### Using fontName, CSS Style

During construction of the Text2D object, you will specify the `fontName` setting, using the CSS convention. This will internally create/use a FontTexture that matches your settings. 

In this mode you have three different rendering qualities

1) Standard: the FontTexture will be created with a standard resolution
2) SuperSampled: using the `fontSuperSample` setting with `true` at the Text2D construction you will have a FontTexture that will be created using a 2x2 pixels for a regular font pixel. So the texture will take four time the memory space than the standard mode but the rendering quality will be better.
3) Signed Distance Field: using the `fontSignedDistanceField` setting with `true` at the Text2D construction you will have a FontTexture that will be created using the Signed Distance Field (SDF) algorithm. More about this algo [here](http://www.valvesoftware.com/publications/2007/SIGGRAPH2007_AlphaTestedMagnification.pdf). See the [Playground](http://babylonjs-playground.com/#143CL7#1).

#### Which mode to use?

SDF is the only mode that provides a text quality good whatever the resolution your text is, so if you use WorldSpaceCanvas or Scale, you should consider it. SDF is also the **only** mode where the Text is rendered in Alpha Test mode (more about rendering mode [here](http://doc.babylonjs.com/overviews/Rendering)) which is far better in term of performance than the transparency mode used by the two other modes.

The drawback of SDF is that SDF is not suited for thin/small fonts, it also takes as much memory as the super sample mode. So experiment.

I would go for SDF any time if possible, only because I avoid Transparency. Now for simple text drawn in a ScreenSpaceCanvas with a scale of 1 the Standard mode may be enough.

### Using a BitmapFontTexture

You can render text using a BitmapFont Texture along with a BMFont description file.

BMFont is a software that can be found [here](http://www.angelcode.com/products/bmfont/), this [stack exchange post](http://gamedev.stackexchange.com/questions/74010/how-do-you-create-fnt-angelcode-format-files-from-existing-bitmaps) is also interested.

To use a BitmapFont with Text2D you must before create an instance of the `BitmapFontTexture`, then passing the texture as a parameter of the `bitmapFontTexture` setting during the construction of the Text2D.

See a [playground here](http://babylonjs-playground.com/#GKBEH)

## Features

 - With fontName, text is Unicode based, so any kind of characters can be rendered.
 - Support line return, tabulation.
 - Text measure.
 
Soon to be supported:

 - Character based color.

## Properties

 - `fontName`: A [W3C CSS](https://www.w3.org/wiki/CSS/Properties/font) font property used to create the FontTexture used to render the text.
 - `fontSuperSample`: to enhance the font quality
 - `fontSignedDistanceField`: to use the SDF rendering algorithm
 - `bitmapFontText`: to render the text with a BMFont based BitmapFont texture.
 - `text`: a string property containing the text to render.
 - `areaSize`: a `Size` optional property that represent the area where the text will be rendered. If null the area is computed based on the text content. Default value is null.

## Remarks

Right now the intersection API is very rough, the whole text area is tested and return true if the intersection point is inside.

The rendering quality of the text depends on the Web Browser implementation, right now FireFox seems to be below the other that could have been tested. We will focus soon on quality of rendering as it's a very important part of Canvas2D.

## Example

[Primitive with Action Manager](http://babylonjs-playground.com/#1ONKPJ#5)


