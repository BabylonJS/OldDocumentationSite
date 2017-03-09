---
ID_PAGE: 25288
PG_TITLE: RefractionPostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [RefractionPostProcess](/classes/2.5/RefractionPostProcess) extends [PostProcess](/classes/2.5/PostProcess)

Builtin postprocess applying e refraction texture as a postprocess

A tutorial about post process can be found here : https://doc.babylonjs.com/tutorials/how_to_use_postprocessrenderpipeline

## Constructor

## new [RefractionPostProcess](/classes/2.5/RefractionPostProcess)(name, refractionTextureUrl, color, depth, colorLevel, options, PostProcessOptions, camera, samplingMode, engine, reusable)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     The postprocess name
 | refractionTextureUrl | string |     The URL of the refraction texture
 | color | [Color3](/classes/2.5/Color3) |     The base color of the refraction (used to taint the rendering)
 | depth | number |     The simulated refraction
 | colorLevel | number |     The coefficient of the base color (0 to remove base color tainting)
 | options | number or PostProcessOptions |  
 | camera | [Camera](/classes/2.5/Camera) |     The given camera
optional | samplingMode | number |     [Texture](/classes/2.5/Texture).NEAREST_SAMPLINGMODE, [Texture](/classes/2.5/Texture).BILINEAR_SAMPLINGMODE or [Texture](/classes/2.5/Texture).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](/classes/2.5/Engine) |     The engine to attach the postprocess.
## Members

### color : [Color3](/classes/2.5/Color3)

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
 | camera | [Camera](/classes/2.5/Camera) |     The given camera

