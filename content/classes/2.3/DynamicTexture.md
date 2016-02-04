---
ID_PAGE: 25222
PG_TITLE: DynamicTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
---
## Description

class [DynamicTexture](/classes/2.3/DynamicTexture) extends [Texture](/classes/2.3/Texture)



## Constructor

##  new [DynamicTexture](/classes/2.3/DynamicTexture)(name, options, scene, generateMipMaps, samplingMode)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the texture
 | options | any |   Options of the dynamic texture
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) which contain the texture
 | generateMipMaps | boolean |   @param generateMipMaps
## Members

### canRescale : boolean



## Methods

### scale(ratio) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ratio | number |   

### getContext() &rarr; CanvasRenderingContext2D


### clear() &rarr; void


### update(invertY) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | invertY | boolean |   Invert the text on Y axis

### drawText(text, x, y, font, color, clearColor, invertY, update) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | text | string |   A string with the text
 | x | number |   The position on X axis of the text to draw
 | y | number |   The position on Y axis of the text to draw
 | font | string |   The font of the text to draw
 | color | string |   The color of the text to draw in hexadecimal
 | clearColor | string |   The clear color of the text to draw in hexadecimal
optional | invertY | boolean |   Invert the text on Y axis
### clone() &rarr; [DynamicTexture](/classes/2.3/DynamicTexture)


