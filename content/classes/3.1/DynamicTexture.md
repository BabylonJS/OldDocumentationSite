---
ID_PAGE: 25222
PG_TITLE: DynamicTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
---
## Description

class [DynamicTexture](/classes/3.1/DynamicTexture) extends [Texture](/classes/3.1/Texture)



## Constructor

## new [DynamicTexture](/classes/3.1/DynamicTexture)(name, options, scene, generateMipMaps, samplingMode, format)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | options | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | generateMipMaps | boolean | 
optional | samplingMode | number | 
## Members

### canRescale : boolean


## Methods

### scale(ratio) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ratio | number | 

### scaleTo(width, height) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | width | number | 
 | height | number | 
### getContext() &rarr; CanvasRenderingContext2D


### clear() &rarr; void


### update(invertY) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | invertY | boolean | 

### drawText(text, x, y, font, color, clearColor, invertY, update) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | text | string | 
 | x | number | 
 | y | number | 
 | font | string | 
 | color | string | 
 | clearColor | string | 
optional | invertY | boolean | 
### clone() &rarr; [DynamicTexture](/classes/3.1/DynamicTexture)


