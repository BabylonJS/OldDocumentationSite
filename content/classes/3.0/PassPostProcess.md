---
ID_PAGE: 25287
PG_TITLE: PassPostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [PassPostProcess](/classes/3.0/PassPostProcess) extends [PostProcess](/classes/3.0/PostProcess)

Builtin postprocess doing nothing. Used to copy the framebuffer into a postprocess for further use

## Constructor

## new [PassPostProcess](/classes/3.0/PassPostProcess)(name, options, PostProcessOptions, camera, samplingMode, engine, reusable, textureType)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      The postprocess name
 | options | number or PostProcessOptions |   
 | camera | [Camera](/classes/3.0/Camera) |      The scene camera linked to this post process
optional | samplingMode | number |      [Texture](/classes/3.0/Texture).NEAREST_SAMPLINGMODE, [Texture](/classes/3.0/Texture).BILINEAR_SAMPLINGMODE or [Texture](/classes/3.0/Texture).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](/classes/3.0/Engine) |      The engine to attach the postprocess.
optional | reusable | boolean | 
