---
TAGS:
---
## Description

class [ColorGradingTexture](/classes/2.4/ColorGradingTexture) extends [BaseTexture](/classes/2.4/BaseTexture)

This represents a color grading texture. This acts as a lookup table LUT, useful during post process

It can help converting any input color in a desired output one. This can then be used to create effects

from sepia, black and white to sixties or futuristic rendering...

The only supported format is currently 3dl.

More information on LUT: https://en.wikipedia.org/wiki/3D_lookup_table/

## Constructor

## new [ColorGradingTexture](/classes/2.4/ColorGradingTexture)(url, scene)

Instantiates a [ColorGradingTexture](/classes/2.4/ColorGradingTexture) from the following parameters.

         * @param url The location of the color gradind data (currently only supporting 3dl)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string |  The location of the color gradind data (currently only supporting 3dl)
 | scene | [Scene](/classes/2.4/Scene) |  The scene the texture will be used in
## Members

### url : string

The texture URL.

## Methods

### getTextureMatrixundefined &rarr; [Matrix](/classes/2.4/Matrix)

Returns the texture matrix used in most of the material.

This is not used in color grading but keep for troubleshooting purpose (easily swap diffuse by colorgrading to look in).
### cloneundefined &rarr; [ColorGradingTexture](/classes/2.4/ColorGradingTexture)

Clones the color gradind texture.
### delayLoadundefined &rarr; void

Called during delayed load for textures.
### static Parseundefined &rarr; [ColorGradingTexture](/classes/2.4/ColorGradingTexture)

Parses a color grading texture serialized by Babylon.

@return A color gradind texture

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### serializeundefined &rarr; any

Serializes the LUT texture to json format.
