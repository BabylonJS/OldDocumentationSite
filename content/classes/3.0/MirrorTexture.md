---
ID_PAGE: 25225
PG_TITLE: MirrorTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
    - TargetTexture
---
## Description

class [MirrorTexture](/classes/3.0/MirrorTexture) extends [RenderTargetTexture](/classes/3.0/RenderTargetTexture)



## Constructor

## new [MirrorTexture](/classes/3.0/MirrorTexture)(name, size, scene, generateMipMaps, type, samplingMode, generateDepthBuffer)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      Name of the texture
 | size | any |      [Size](/classes/3.0/Size) of the texture
 | scene | [Scene](/classes/3.0/Scene) |      [Scene](/classes/3.0/Scene) which contain the texture
optional | generateMipMaps | boolean | 
optional | type | number | 
optional | samplingMode | number | 
## Members

### mirrorPlane : [Plane](/classes/3.0/Plane)

The plane to apply the mirror texture

### blurRatio : number



### blurKernel : number



## Methods

### clone() &rarr; [MirrorTexture](/classes/3.0/MirrorTexture)


### serialize() &rarr; any


