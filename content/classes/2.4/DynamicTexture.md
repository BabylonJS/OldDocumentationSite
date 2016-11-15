---
ID_PAGE: 25222
PG_TITLE: DynamicTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
---
## Description

class [DynamicTexture](/classes/2.4/DynamicTexture) extends [Texture](/classes/2.4/Texture)



## Constructor

## new [DynamicTexture](/classes/2.4/DynamicTexture)(name, options, scene, generateMipMaps, samplingMode)

Create a new [DynamicTexture](/classes/2.4/DynamicTexture).
A tutorial about dynamic textures can be found here : [Creating a 3D chart for your Windows 8.1 app using Babylon.js](https://www.eternalcoding.com/?p=253)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    Name of the texture
 | options | see description |   This argument can accept an HTMLCanvasElement, an object with a numeric width and height property, or a number.  If an HTMLCanvasElement, the provided canvas will be used in the texture including its height and width.  If an object with numeric height and width properties is passed, a new canvas will be created internally with the specified height and width.  If a number is provided for this argument, a square canvas and texture will be created with the specified height and width. 
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) which contain the texture
 | generateMipMaps | boolean |    @param generateMipMaps
## Members

### canRescale : boolean



## Methods

### scale(ratio) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ratio | number |    

### getContext() &rarr; CanvasRenderingContext2D

Get the context
@return CanvasRenderingContext2D The canvas where the game is rendered
### clear() &rarr; void


### update(invertY) &rarr; void

Update the dynamic texture

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | invertY | boolean |    Invert the text on Y axis

### drawText(text, x, y, font, color, clearColor, invertY, update) &rarr; void

Draw a text on view

#### Parameters
 | Name | Type | Description
---|---|---|---
 | text | string |    A string with the text
 | x | number |    The position on X axis of the text to draw
 | y | number |    The position on Y axis of the text to draw
 | font | string |    The font of the text to draw
 | color | string |    The color of the text to draw in hexadecimal
 | clearColor | string |    The clear color of the text to draw in hexadecimal
optional | invertY | boolean |    Invert the text on Y axis
### clone() &rarr; [DynamicTexture](/classes/2.4/DynamicTexture)


