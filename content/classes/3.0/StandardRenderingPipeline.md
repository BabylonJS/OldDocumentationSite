---
TAGS:
---
## Description

class [StandardRenderingPipeline](/classes/3.0/StandardRenderingPipeline) extends [PostProcessRenderPipeline](/classes/3.0/PostProcessRenderPipeline)



## Constructor

## new [StandardRenderingPipeline](/classes/3.0/StandardRenderingPipeline)(name, scene, ratio, originalPostProcess, cameras)

@constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  
 | scene | [Scene](/classes/3.0/Scene) |  
 | ratio | number |  
optional | originalPostProcess | [PostProcess](/classes/3.0/PostProcess) |  
## Members

### originalPostProcess : [PostProcess](/classes/3.0/PostProcess)

Public members

### downSampleX4PostProcess : [PostProcess](/classes/3.0/PostProcess)



### brightPassPostProcess : [PostProcess](/classes/3.0/PostProcess)



### gaussianBlurHPostProcesses : [PostProcess](/classes/3.0/PostProcess)[]



### gaussianBlurVPostProcesses : [PostProcess](/classes/3.0/PostProcess)[]



### textureAdderPostProcess : [PostProcess](/classes/3.0/PostProcess)



### luminancePostProcess : [PostProcess](/classes/3.0/PostProcess)



### luminanceDownSamplePostProcesses : [PostProcess](/classes/3.0/PostProcess)[]



### hdrPostProcess : [PostProcess](/classes/3.0/PostProcess)



### textureAdderFinalPostProcess : [PostProcess](/classes/3.0/PostProcess)



### lensFlareFinalPostProcess : [PostProcess](/classes/3.0/PostProcess)



### hdrFinalPostProcess : [PostProcess](/classes/3.0/PostProcess)



### lensFlarePostProcess : [PostProcess](/classes/3.0/PostProcess)



### lensFlareComposePostProcess : [PostProcess](/classes/3.0/PostProcess)



### motionBlurPostProcess : [PostProcess](/classes/3.0/PostProcess)



### depthOfFieldPostProcess : [PostProcess](/classes/3.0/PostProcess)



### brightThreshold : number



### blurWidth : number



### horizontalBlur : boolean



### gaussianCoefficient : number



### gaussianMean : number



### gaussianStandardDeviation : number



### exposure : number



### lensTexture : [Texture](/classes/3.0/Texture)



### hdrMinimumLuminance : number



### hdrDecreaseRate : number



### hdrIncreaseRate : number



### lensColorTexture : [Texture](/classes/3.0/Texture)



### lensFlareStrength : number



### lensFlareGhostDispersal : number



### lensFlareHaloWidth : number



### lensFlareDistortionStrength : number



### lensStarTexture : [Texture](/classes/3.0/Texture)



### lensFlareDirtTexture : [Texture](/classes/3.0/Texture)



### depthOfFieldDistance : number



### depthOfFieldBlurWidth : number



### motionStrength : number



### animations : [Animation](/classes/3.0/Animation)[]



### BloomEnabled : boolean



### DepthOfFieldEnabled : boolean



### LensFlareEnabled : boolean



### HDREnabled : boolean



### MotionBlurEnabled : boolean



### motionBlurSamples : number



### static LuminanceSteps : number



## Methods

### dispose() &rarr; void


### serialize() &rarr; any


### static Parse(source, scene, rootUrl) &rarr; [StandardRenderingPipeline](/classes/3.0/StandardRenderingPipeline)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | any | 
 | scene | [Scene](/classes/3.0/Scene) |  
 | rootUrl | string | 
