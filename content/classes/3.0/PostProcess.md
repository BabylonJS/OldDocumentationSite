---
ID_PAGE: 25278
PG_TITLE: PostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [PostProcess](/classes/3.0/PostProcess)

Postprocesses allow you to create 2D effects on top of your scene.

A postprocess is linked to a camera and can be part of a chain of postprocesss where each postprocess use the result of the previous one as input for its own processing.

A tutorial about post process can be found here : https://doc.babylonjs.com/tutorials/how_to_use_postprocessrenderpipeline

## Members

### name : string



### width : number

default : -1

### height : number

default : -1

### renderTargetSamplingMode : number

default : [Texture](/classes/3.0/Texture).NEAREST_SAMPLINGMODE

Other possible values : [Texture](/classes/3.0/Texture).BILINEAR_SAMPLINGMODE, [Texture](/classes/3.0/Texture).TRILINEAR_SAMPLINGMODE

### clearColor : [Color4](/classes/3.0/Color4)



### autoClear : boolean



### alphaMode : number



### alphaConstants : [Color4](/classes/3.0/Color4)



### enablePixelPerfectMode : boolean



### scaleMode : number



### alwaysForcePOT : boolean



### samples : number



