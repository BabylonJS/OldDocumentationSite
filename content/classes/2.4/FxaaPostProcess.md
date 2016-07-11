---
ID_PAGE: 25286
PG_TITLE: FxaaPostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [FxaaPostProcess](/classes/2.4/FxaaPostProcess) extends [PostProcess](/classes/2.4/PostProcess)

Builtin postprocess applying a full screen antialiasing filter

## Constructor

## new [FxaaPostProcess](/classes/2.4/FxaaPostProcess)(name, options, PostProcessOptions, camera, samplingMode, engine, reusable)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    The postprocess name
 | options | number or PostProcessOptions | 
 | camera | [Camera](/classes/2.4/Camera) |    The scene camera linked to this post process
optional | samplingMode | number |    [Texture](/classes/2.4/Texture).NEAREST_SAMPLINGMODE, [Texture](/classes/2.4/Texture).BILINEAR_SAMPLINGMODE or [Texture](/classes/2.4/Texture).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](/classes/2.4/Engine) |    The engine to attach the postprocess.
## Members

### texelWidth : number

Width of the texture element

### texelHeight : number



