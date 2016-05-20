---
ID_PAGE: 25298
PG_TITLE: SSAORenderingPipeline
PG_VERSION: 2.1
TAGS:
    - PostProcess
    - PostProcessRenderPipeline
---
## Description

class [SSAORenderingPipeline](/classes/2.4/SSAORenderingPipeline) extends [PostProcessRenderPipeline](/classes/2.4/PostProcessRenderPipeline)

Builtin rendering pipeline applying the ambient occlusion of a given scene  using the screen space

## Constructor

## new [SSAORenderingPipeline](/classes/2.4/SSAORenderingPipeline)(name, scene, ratio, cameras)

@constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    The rendering pipeline name
 | scene | [Scene](/classes/2.4/Scene) |    The scene linked to this pipeline
 | ratio | any |    The size of the postprocess (0.5 means that your postprocess will have a width = canvas.width * 0.5 and a height = canvas.height * 0.5)
## Members

### SSAOOriginalSceneColorEffect : string

The [PassPostProcess](/classes/2.4/PassPostProcess) id in the pipeline that contains the original scene color

@type {string}

### SSAORenderEffect : string

The SSAO [PostProcess](/classes/2.4/PostProcess) id in the pipeline

@type {string}

### SSAOBlurHRenderEffect : string

The horizontal blur [PostProcess](/classes/2.4/PostProcess) id in the pipeline

@type {string}

### SSAOBlurVRenderEffect : string

The vertical blur [PostProcess](/classes/2.4/PostProcess) id in the pipeline

@type {string}

### SSAOCombineRenderEffect : string

The [PostProcess](/classes/2.4/PostProcess) id in the pipeline that combines the SSAO-Blur output with the original scene color (SSAOOriginalSceneColorEffect)

@type {string}

### totalStrength : number

The output strength of the SSAO post-process. Default value is 1.0.

@type {number}

### radius : number

The radius around the analyzed pixel used by the SSAO post-process. Default value is 0.0006

@type {number}

### area : number

Related to fallOff, used to interpolate SSAO samples (first interpolate function input) based on the occlusion difference of each pixel

Must not be equal to fallOff and superior to fallOff.

Default value is 0.975

@type {number}

### fallOff : number

Related to area, used to interpolate SSAO samples (second interpolate function input) based on the occlusion difference of each pixel

Must not be equal to area and inferior to area.

Default value is 0.0

@type {number}

### base : number

The base color of the SSAO post-process

The final result is "base + ssao" between [0, 1]

@type {number}

## Methods

### getBlurHPostProcess() &rarr; [BlurPostProcess](/classes/2.4/BlurPostProcess)

Returns the horizontal blur [PostProcess](/classes/2.4/PostProcess)

@return {BABYLON.[BlurPostProcess](/classes/2.4/BlurPostProcess)} The horizontal blur post-process
### getBlurVPostProcess() &rarr; [BlurPostProcess](/classes/2.4/BlurPostProcess)

Returns the vertical blur [PostProcess](/classes/2.4/PostProcess)

@return {BABYLON.[BlurPostProcess](/classes/2.4/BlurPostProcess)} The vertical blur post-process
### dispose(disableDepthRender) &rarr; void

Removes the internal pipeline assets and detatches the pipeline from the scene cameras

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | disableDepthRender | boolean |    

