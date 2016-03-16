---
ID_PAGE: 25286
PG_TITLE: FxaaPostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [FxaaPostProcess](/classes/2.3/FxaaPostProcess) extends [PostProcess](/classes/2.3/PostProcess)

Builtin postprocess applying a full screen antialiasing filter

## Constructor

## new [FxaaPostProcess](/classes/2.3/FxaaPostProcess)(name, ratio, camera, samplingMode, engine, reusable)

The Postprocess constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The postprocess name
 | ratio | number |   The size of the postprocess (0.5 means that your postprocess will have a width = canvas.width * 0.5 and a height = canvas.height * 0.5)
 | camera | [Camera](/classes/2.3/Camera) |   The scene camera linked to this post process
optional | samplingMode | number |   [Texture](/classes/2.3/Texture).NEAREST_SAMPLINGMODE, [Texture](/classes/2.3/Texture).BILINEAR_SAMPLINGMODE or [Texture](/classes/2.3/Texture).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](/classes/2.3/Engine) |   The engine to attach the postprocess.
## Members

### texelWidth : number

Width of the texture element

### texelHeight : number



