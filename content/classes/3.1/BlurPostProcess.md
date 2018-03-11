---
ID_PAGE: 25281
PG_TITLE: BlurPostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [BlurPostProcess](/classes/3.1/BlurPostProcess) extends [PostProcess](/classes/3.1/PostProcess)



## Constructor

## new [BlurPostProcess](/classes/3.1/BlurPostProcess)(name, direction, kernel, options, PostProcessOptions, camera, samplingMode, engine, reusable, textureType)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | direction | [Vector2](/classes/3.1/Vector2) | 
 | kernel | number | 
 | options | number or PostProcessOptions | 
 | camera | Nullable&lt;[Camera](/classes/3.1/Camera)&gt; | 
optional | samplingMode | number | 
optional | engine | [Engine](/classes/3.1/Engine) | 
optional | reusable | boolean | 
## Members

### direction : [Vector2](/classes/3.1/Vector2)


### kernel : number

Gets the length in pixels of the blur sample region

Sets the length in pixels of the blur sample region
### packedFloat : boolean

Gets wether or not the blur is unpacking/repacking floats

Sets wether or not the blur needs to unpack/repack floats
