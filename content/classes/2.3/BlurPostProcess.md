---
ID_PAGE: 25281
PG_TITLE: BlurPostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [BlurPostProcess](/classes/2.3/BlurPostProcess) extends [PostProcess](/classes/2.3/PostProcess)

Builtin postprocess applying a directional blur

## Constructor

## new [BlurPostProcess](/classes/2.3/BlurPostProcess)(name, direction, blurWidth, ratio, camera, samplingMode, engine, reusable)

The Postprocess constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The postprocess name
 | direction | [Vector2](/classes/2.3/Vector2) |   The direction of the blur
 | blurWidth | number |   The width of the blur
 | ratio | number |   The size of the postprocess (0.5 means that your postprocess will have a width = canvas.width * 0.5 and a height = canvas.height * 0.5)
 | camera | [Camera](/classes/2.3/Camera) |   The scene camera linked to this post process
optional | samplingMode | number |   [Texture](/classes/2.3/Texture).NEAREST_SAMPLINGMODE, [Texture](/classes/2.3/Texture).BILINEAR_SAMPLINGMODE or [Texture](/classes/2.3/Texture).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](/classes/2.3/Engine) |   The engine to attach the postprocess.
## Members

### direction : [Vector2](/classes/2.3/Vector2)

The direction of the blur

### blurWidth : number



