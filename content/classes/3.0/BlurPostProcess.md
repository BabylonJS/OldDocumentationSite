---
ID_PAGE: 25281
PG_TITLE: BlurPostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [BlurPostProcess](/classes/3.0/BlurPostProcess) extends [PostProcess](/classes/3.0/PostProcess)

Builtin postprocess applying a directional blur

## Constructor

## new [BlurPostProcess](/classes/3.0/BlurPostProcess)(name, direction, kernel, options, PostProcessOptions, camera, samplingMode, engine, reusable, textureType)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      The postprocess name
 | direction | [Vector2](/classes/3.0/Vector2) |      The direction of the blur
 | kernel | number | 
 | options | number or PostProcessOptions |   
 | camera | [Camera](/classes/3.0/Camera) |      The scene camera linked to this post process
optional | samplingMode | number |      [Texture](/classes/3.0/Texture).NEAREST_SAMPLINGMODE, [Texture](/classes/3.0/Texture).BILINEAR_SAMPLINGMODE or [Texture](/classes/3.0/Texture).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](/classes/3.0/Engine) |      The engine to attach the postprocess.
optional | reusable | boolean | 
## Members

### direction : [Vector2](/classes/3.0/Vector2)

The direction of the blur

### kernel : number

Gets the length in pixels of the blur sample region

Sets the length in pixels of the blur sample region

