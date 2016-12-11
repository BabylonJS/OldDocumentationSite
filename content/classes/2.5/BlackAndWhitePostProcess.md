---
ID_PAGE: 25280
PG_TITLE: BlackAndWhitePostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [BlackAndWhitePostProcess](/classes/2.5/BlackAndWhitePostProcess) extends [PostProcess](/classes/2.5/PostProcess)

Builtin postprocess applying black and white effect

## Constructor

## new [BlackAndWhitePostProcess](/classes/2.5/BlackAndWhitePostProcess)(name, options, PostProcessOptions, camera, samplingMode, engine, reusable)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     The postprocess name
 | options | number or PostProcessOptions |  
 | camera | [Camera](/classes/2.5/Camera) |     The scene camera linked to this post process
optional | samplingMode | number |     [Texture](/classes/2.5/Texture).NEAREST_SAMPLINGMODE, [Texture](/classes/2.5/Texture).BILINEAR_SAMPLINGMODE or [Texture](/classes/2.5/Texture).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](/classes/2.5/Engine) |     The engine to attach the postprocess.
