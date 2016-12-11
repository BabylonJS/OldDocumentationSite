---
TAGS:
---
## Description

class [FontTexture](/classes/2.5/FontTexture) extends [Texture](/classes/2.5/Texture)



## Constructor

## new [FontTexture](/classes/2.5/FontTexture)(name, font, scene, maxCharCount, samplingMode, superSample, signedDistanceField)

Create a new instance of the [FontTexture](/classes/2.5/FontTexture) class

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  the name of the texture  the name of the texture
 | font | string |  the font to use, use the W3C CSS notation  the font to use, use the W3C CSS notation
 | scene | [Scene](/classes/2.5/Scene) |  the scene that owns the texture 
optional | maxCharCount | number |  the approximative maximum count of characters that could fit in the texture. This is an approximation because most of the fonts are proportional (each char has its own Width). The 'W' character's width is used to compute the size of the texture based on the given maxCharCount  the approximative maximum count of characters that could fit in the texture. This is an approximation because most of the fonts are proportional (each char has its own Width). The 'W' character's width is used to compute the size of the texture based on the given maxCharCount
optional | samplingMode | number |  the texture sampling mode
optional | superSample | boolean |  if true the [FontTexture](/classes/2.5/FontTexture) will be created with a font of a size twice bigger than the given one but all properties (lineHeight, charWidth, etc.) will be according to the original size. This is made to improve the text quality.
## Members

### isSuperSampled : boolean



### isSignedDistanceField : boolean



### spaceWidth : number



### lineHeight : number



### canRescale : boolean



## Methods

### static GetCachedFontTexture(scene, fontName, supersample, signedDistanceField) &rarr; [FontTexture](/classes/2.5/FontTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.5/Scene) |  
 | fontName | string |  
optional | supersample | boolean | 
### static ReleaseCachedFontTexture(scene, fontName, supersample, signedDistanceField) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.5/Scene) |  
 | fontName | string |  
optional | supersample | boolean | 
### getChar(char) &rarr; [CharInfo](/classes/2.5/CharInfo)

Make sure the given char is present in the font map.

@return the [CharInfo](/classes/2.5/CharInfo) instance corresponding to the given character

#### Parameters
 | Name | Type | Description
---|---|---|---
 | char | string |  the character to get or add  the character to get or add

### measureText(text, tabulationSize) &rarr; [Size](/classes/2.5/Size)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | text | string |  
optional | tabulationSize | number |  
### getContext() &rarr; CanvasRenderingContext2D


### update() &rarr; void

Call this method when you've call getChar() at least one time, this will update the texture if needed.

Don't be afraid to call it, if no new character was added, this method simply does nothing.
### clone() &rarr; [FontTexture](/classes/2.5/FontTexture)


### incCachedFontTextureCounter() &rarr; void

For [FontTexture](/classes/2.5/FontTexture) retrieved using GetCachedFontTexture, use this method when you transfer this object's lifetime to another party in order to share this resource.

When the other party is done with this object, decCachedFontTextureCounter must be called.
### decCachedFontTextureCounter() &rarr; void

Use this method only in conjunction with incCachedFontTextureCounter, call it when you no longer need to use this shared resource.
