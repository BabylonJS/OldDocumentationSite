---
TAGS:
---
## Description

class [FontTexture](/classes/2.4/FontTexture) extends [Texture](/classes/2.4/Texture)



## Constructor

## new [FontTexture](/classes/2.4/FontTexture)(name, font, scene, maxCharCount, samplingMode)

Create a new instance of the [FontTexture](/classes/2.4/FontTexture) class

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  the name of the texture
 | font | string |  the font to use, use the W3C CSS notation
 | scene | [Scene](/classes/2.4/Scene) |  the scene that owns the texture
optional | maxCharCount | number |  the approximative maximum count of characters that could fit in the texture. This is an approximation because most of the fonts are proportional (each char has its own Width). The 'W' character's width is used to compute the size of the texture based on the given maxCharCount
## Members

### spaceWidth : number



### lineHeight : number



### canRescale : boolean



## Methods

### static GetCachedFontTexture(scene, fontName) &rarr; [FontTexture](/classes/2.4/FontTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.4/Scene) | 
 | fontName | string | 
### static ReleaseCachedFontTexture(scene, fontName) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.4/Scene) | 
 | fontName | string | 
### getChar(char) &rarr; [CharInfo](/classes/2.4/CharInfo)

Make sure the given char is present in the font map.

@return the [CharInfo](/classes/2.4/CharInfo) instance corresponding to the given character

#### Parameters
 | Name | Type | Description
---|---|---|---
 | char | string |  the character to get or add

### measureText(text, tabulationSize) &rarr; [Size](/classes/2.4/Size)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | text | string | 
optional | tabulationSize | number | 
### getContext() &rarr; CanvasRenderingContext2D


### update() &rarr; void

Call this method when you've call getChar() at least one time, this will update the texture if needed.

Don't be afraid to call it, if no new character was added, this method simply does nothing.
### clone() &rarr; [FontTexture](/classes/2.4/FontTexture)


