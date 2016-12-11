---
TAGS:
---
## Description

class [StandardRenderingPipeline](/classes/2.5/StandardRenderingPipeline) extends [PostProcessRenderPipeline](/classes/2.5/PostProcessRenderPipeline)



## Constructor

## new [StandardRenderingPipeline](/classes/2.5/StandardRenderingPipeline)(name, scene, ratio, originalPostProcess, cameras)

@constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/2.5/Scene) | 
 | ratio | number | 
optional | originalPostProcess | [PostProcess](/classes/2.5/PostProcess) | 
## Members

### originalPostProcess : [PostProcess](/classes/2.5/PostProcess)

Public members

### downSampleX4PostProcess : [PostProcess](/classes/2.5/PostProcess)



### brightPassPostProcess : [PostProcess](/classes/2.5/PostProcess)



### gaussianBlurHPostProcesses : [PostProcess](/classes/2.5/PostProcess)[]



### gaussianBlurVPostProcesses : [PostProcess](/classes/2.5/PostProcess)[]



### textureAdderPostProcess : [PostProcess](/classes/2.5/PostProcess)



### textureAdderFinalPostProcess : [PostProcess](/classes/2.5/PostProcess)



### lensFlarePostProcess : [PostProcess](/classes/2.5/PostProcess)



### lensFlareComposePostProcess : [PostProcess](/classes/2.5/PostProcess)



### depthOfFieldPostProcess : [PostProcess](/classes/2.5/PostProcess)



### brightThreshold : number



### blurWidth : number



### gaussianCoefficient : number



### gaussianMean : number



### gaussianStandardDeviation : number



### exposure : number



### lensTexture : [Texture](/classes/2.5/Texture)



### lensColorTexture : [Texture](/classes/2.5/Texture)



### lensFlareStrength : number



### lensFlareGhostDispersal : number



### lensFlareHaloWidth : number



### lensFlareDistortionStrength : number



### lensStarTexture : [Texture](/classes/2.5/Texture)



### lensFlareDirtTexture : [Texture](/classes/2.5/Texture)



### depthOfFieldDistance : number



### animations : [Animation](/classes/2.5/Animation)[]



### DepthOfFieldEnabled : boolean



### LensFlareEnabled : boolean



## Methods

### dispose() &rarr; void


