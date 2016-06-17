---
ID_PAGE: 25281
PG_TITLE: BlurPostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [BlurPostProcess](/classes/2.4/BlurPostProcess) extends [PostProcess](/classes/2.4/PostProcess)

Builtin postprocess applying a directional blur

## Constructor

## new [BlurPostProcess](/classes/2.4/BlurPostProcess)(name, direction, blurWidth, options, PostProcessOptions, camera, samplingMode, engine, reusable)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    The postprocess name
 | direction | [Vector2](/classes/2.4/Vector2) |    The direction of the blur
 | blurWidth | number |    The width of the blur
 | options | number or PostProcessOptions | 
 | camera | [Camera](/classes/2.4/Camera) |    The scene camera linked to this post process
optional | samplingMode | number |    [Texture](/classes/2.4/Texture).NEAREST_SAMPLINGMODE, [Texture](/classes/2.4/Texture).BILINEAR_SAMPLINGMODE or [Texture](/classes/2.4/Texture).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](/classes/2.4/Engine) |    The engine to attach the postprocess.
## Members

### direction : [Vector2](/classes/2.4/Vector2)

The direction of the blur

### blurWidth : number



