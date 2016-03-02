---
ID_PAGE: 25288
PG_TITLE: RefractionPostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [RefractionPostProcess](/classes/2.3/RefractionPostProcess) extends [PostProcess](/classes/2.3/PostProcess)

Builtin postprocess applying e refraction texture as a postprocess

A tutorial about post process can be found here

## Constructor

## new [RefractionPostProcess](/classes/2.3/RefractionPostProcess)(name, refractionTextureUrl, color, depth, colorLevel, ratio, camera, samplingMode, engine, reusable)

The Postprocess constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The postprocess name
 | refractionTextureUrl | string |   The URL of the refraction texture
 | color | [Color3](/classes/2.3/Color3) |   The base color of the refraction (used to taint the rendering)
 | depth | number |   The simulated refraction
 | colorLevel | number |   The coefficient of the base color (0 to remove base color tainting)
 | ratio | number |   The size of the postprocess (0.5 means that your postprocess will have a width = canvas.width * 0.5 and a height = canvas.height * 0.5)
 | camera | [Camera](/classes/2.3/Camera) |   The given camera
optional | samplingMode | number |   [Texture](/classes/2.3/Texture).NEAREST_SAMPLINGMODE, [Texture](/classes/2.3/Texture).BILINEAR_SAMPLINGMODE or [Texture](/classes/2.3/Texture).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](/classes/2.3/Engine) |   The engine to attach the postprocess.
## Members

### color : [Color3](/classes/2.3/Color3)

The base color of the refraction (used to taint the rendering)

### depth : number

The simulated refraction

### colorLevel : number

The coefficient of the base color (0 to remove base color tainting)

## Methods

### dispose(camera) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/2.3/Camera) |   The given camera

