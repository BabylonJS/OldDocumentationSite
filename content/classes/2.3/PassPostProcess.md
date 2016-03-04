---
ID_PAGE: 25287
PG_TITLE: PassPostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [PassPostProcess](/classes/2.3/PassPostProcess) extends [PostProcess](/classes/2.3/PostProcess)

Builtin postprocess doing nothing. Used to copy the framebuffer into a postprocess for further use

## Constructor

## new [PassPostProcess](/classes/2.3/PassPostProcess)(name, ratio, camera, samplingMode, engine, reusable)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The postprocess name
 | ratio | number |   The size of the postprocess (0.5 means that your postprocess will have a width = canvas.width * 0.5 and a height = canvas.height * 0.5)
 | camera | [Camera](/classes/2.3/Camera) |   The scene camera linked to this post process
optional | samplingMode | number |   [Texture](/classes/2.3/Texture).NEAREST_SAMPLINGMODE, [Texture](/classes/2.3/Texture).BILINEAR_SAMPLINGMODE or [Texture](/classes/2.3/Texture).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](/classes/2.3/Engine) |   The engine to attach the postprocess.
