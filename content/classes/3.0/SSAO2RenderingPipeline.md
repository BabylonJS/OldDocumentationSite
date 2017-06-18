---
TAGS:
---
## Description

class [SSAO2RenderingPipeline](/classes/3.0/SSAO2RenderingPipeline) extends [PostProcessRenderPipeline](/classes/3.0/PostProcessRenderPipeline)



## Constructor

## new [SSAO2RenderingPipeline](/classes/3.0/SSAO2RenderingPipeline)(name, scene, ratio, cameras)

@constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/3.0/Scene) | 
 | ratio | any | 
## Members

### SSAOOriginalSceneColorEffect : string

The [PassPostProcess](/classes/3.0/PassPostProcess) id in the pipeline that contains the original scene color

@type {string}

### SSAORenderEffect : string

The SSAO [PostProcess](/classes/3.0/PostProcess) id in the pipeline

@type {string}

### SSAOBlurHRenderEffect : string

The horizontal blur [PostProcess](/classes/3.0/PostProcess) id in the pipeline

@type {string}

### SSAOBlurVRenderEffect : string

The vertical blur [PostProcess](/classes/3.0/PostProcess) id in the pipeline

@type {string}

### SSAOCombineRenderEffect : string

The [PostProcess](/classes/3.0/PostProcess) id in the pipeline that combines the SSAO-Blur output with the original scene color (SSAOOriginalSceneColorEffect)

@type {string}

### totalStrength : number

The output strength of the SSAO post-process. Default value is 1.0.

@type {number}

### maxZ : number

Maximum depth value to still render AO. A smooth falloff makes the dimming more natural, so there will be no abrupt shading change.

@type {number}

### minZAspect : number

In order to save performances, SSAO radius is clamped on close geometry. This ratio changes by how much

@type {number}

### samples : number



### expensiveBlur : boolean



### radius : number

The radius around the analyzed pixel used by the SSAO post-process. Default value is 2.0

@type {number}

### base : number

The base color of the SSAO post-process

The final result is "base + ssao" between [0, 1]

@type {number}

### static IsSupported : boolean

Support test.

@type {boolean}

## Methods

### dispose(disableGeometryBufferRenderer) &rarr; void

Removes the internal pipeline assets and detatches the pipeline from the scene cameras

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | disableGeometryBufferRenderer | boolean | 

