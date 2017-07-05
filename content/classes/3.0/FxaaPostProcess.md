---
ID_PAGE: 25286
PG_TITLE: FxaaPostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [FxaaPostProcess](/classes/3.0/FxaaPostProcess) extends [PostProcess](/classes/3.0/PostProcess)

Builtin postprocess applying a full screen antialiasing filter

## Constructor

## new [FxaaPostProcess](/classes/3.0/FxaaPostProcess)(name, options, PostProcessOptions, camera, samplingMode, engine, reusable, textureType)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      The postprocess name
 | options | number or PostProcessOptions |   
 | camera | [Camera](/classes/3.0/Camera) |      The scene camera linked to this post process
optional | samplingMode | number |      [Texture](/classes/3.0/Texture).NEAREST_SAMPLINGMODE, [Texture](/classes/3.0/Texture).BILINEAR_SAMPLINGMODE or [Texture](/classes/3.0/Texture).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](/classes/3.0/Engine) |      The engine to attach the postprocess.
optional | reusable | boolean | 
## Members

### texelWidth : number

Width of the texture element

### texelHeight : number



