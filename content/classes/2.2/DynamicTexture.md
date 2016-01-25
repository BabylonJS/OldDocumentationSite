---
ID_PAGE: 25222
PG_TITLE: DynamicTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
---
##Description

class [DynamicTexture](/classes/2.2/DynamicTexture) extends [Texture](/classes/2.2/Texture)



##Constructor

##new [DynamicTexture](/classes/2.2/DynamicTexture)(name, options, scene, generateMipMaps, samplingMode)

Create a new [DynamicTexture](/classes/2.2/DynamicTexture).
A tutorial about dynamic textures can be found here : http://blogs.msdn.com/b/eternalcoding/archive/2013/08/12/creating-a-3d-chart-for-your-windows-8-1-app-using-babylon-js.aspx

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  Name of the texture
 | options | any |  Options of the dynamic texture
 | scene | [Scene](/classes/2.2/Scene) |  [Scene](/classes/2.2/Scene) which contain the texture
 | generateMipMaps | boolean |  @param generateMipMaps
##Members

###canRescale : boolean



##Methods

###scale(ratio) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | ratio | number |  

###getContext() &rarr; CanvasRenderingContext2D

Get the context
@return CanvasRenderingContext2D The canvas where the game is rendered
###clear() &rarr; void


###update(invertY) &rarr; void

Update the dynamic texture

####Parameters
 | Name | Type | Description
---|---|---|---
optional | invertY | boolean |  Invert the text on Y axis

###drawText(text, x, y, font, color, clearColor, invertY, update) &rarr; void

Draw a text on view

####Parameters
 | Name | Type | Description
---|---|---|---
 | text | string |  A string with the text
 | x | number |  The position on X axis of the text to draw
 | y | number |  The position on Y axis of the text to draw
 | font | string |  The font of the text to draw
 | color | string |  The color of the text to draw in hexadecimal
 | clearColor | string |  The clear color of the text to draw in hexadecimal
optional | invertY | boolean |  Invert the text on Y axis
###clone() &rarr; [DynamicTexture](/classes/2.2/DynamicTexture)


