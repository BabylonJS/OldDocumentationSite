---
TAGS:
---
## Description

class [PMREMGenerator](/classes/2.4/PMREMGenerator)

Helper class to PreProcess a cubemap in order to generate mipmap according to the level of blur

required by the glossinees of a material.



This only supports the cosine drop power as well as Warp fixup generation method.



This is using the process from CubeMapGen described here:

https://seblagarde.wordpress.com/2012/06/10/amd-cubemapgen-for-physically-based-rendering/

## Constructor

## new [PMREMGenerator](/classes/2.4/PMREMGenerator)(input, inputSize, outputSize, maxNumMipLevels, numChannels, isFloat, specularPower, cosinePowerDropPerMip, excludeBase, fixup)

Constructor of the generator.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | input | ArrayBufferView[] |  The different faces data from the original cubemap in the order X+ X- Y+ Y- Z+ Z-
 | inputSize | number |  The size of the cubemap faces
 | outputSize | number |  The size of the output cubemap faces
 | maxNumMipLevels | number |  The max number of mip map to generate (0 means all)
 | numChannels | number |  The number of channels stored in the cubemap (3 for RBGE for instance)
 | isFloat | boolean |  Specifies if the input texture is in float or int (hdr is usually in float)
 | specularPower | number |  The max specular level of the desired cubemap
 | cosinePowerDropPerMip | number |  The amount of drop the specular power will follow on each mip
 | excludeBase | boolean |  Specifies wether to process the level 0 (original level) or not
## Members

### input : ArrayBufferView[]



### inputSize : number



### outputSize : number



### maxNumMipLevels : number



### numChannels : number



### isFloat : boolean



### specularPower : number



### cosinePowerDropPerMip : number



### excludeBase : boolean



### fixup : boolean



## Methods

### filterCubeMap() &rarr; ArrayBufferView[][]

Launches the filter process and return the result.



@return the filter cubemap in the form mip0 [faces1..6] .. mipN [faces1..6]
