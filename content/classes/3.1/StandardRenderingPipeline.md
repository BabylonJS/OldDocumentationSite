---
TAGS:
---
## Description

class [StandardRenderingPipeline](/classes/3.1/StandardRenderingPipeline) extends [PostProcessRenderPipeline](/classes/3.1/PostProcessRenderPipeline)



## Constructor

## new [StandardRenderingPipeline](/classes/3.1/StandardRenderingPipeline)(name, scene, ratio, originalPostProcess, cameras)

@constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | ratio | number | 
optional | originalPostProcess | [PostProcess](/classes/3.1/PostProcess) | 
## Members

### originalPostProcess : [PostProcess](/classes/3.1/PostProcess)

Public members

### downSampleX4PostProcess : [PostProcess](/classes/3.1/PostProcess)



### brightPassPostProcess : [PostProcess](/classes/3.1/PostProcess)



### blurHPostProcesses : [PostProcess](/classes/3.1/PostProcess)[]



### blurVPostProcesses : [PostProcess](/classes/3.1/PostProcess)[]



### textureAdderPostProcess : [PostProcess](/classes/3.1/PostProcess)



### volumetricLightPostProcess : [PostProcess](/classes/3.1/PostProcess)



### volumetricLightSmoothXPostProcess : [BlurPostProcess](/classes/3.1/BlurPostProcess)



### volumetricLightSmoothYPostProcess : [BlurPostProcess](/classes/3.1/BlurPostProcess)



### volumetricLightMergePostProces : [PostProcess](/classes/3.1/PostProcess)



### volumetricLightFinalPostProcess : [PostProcess](/classes/3.1/PostProcess)



### luminancePostProcess : [PostProcess](/classes/3.1/PostProcess)



### luminanceDownSamplePostProcesses : [PostProcess](/classes/3.1/PostProcess)[]



### hdrPostProcess : [PostProcess](/classes/3.1/PostProcess)



### textureAdderFinalPostProcess : [PostProcess](/classes/3.1/PostProcess)



### lensFlareFinalPostProcess : [PostProcess](/classes/3.1/PostProcess)



### hdrFinalPostProcess : [PostProcess](/classes/3.1/PostProcess)



### lensFlarePostProcess : [PostProcess](/classes/3.1/PostProcess)



### lensFlareComposePostProcess : [PostProcess](/classes/3.1/PostProcess)



### motionBlurPostProcess : [PostProcess](/classes/3.1/PostProcess)



### depthOfFieldPostProcess : [PostProcess](/classes/3.1/PostProcess)



### brightThreshold : number



### blurWidth : number



### horizontalBlur : boolean



### exposure : number



### lensTexture : [Texture](/classes/3.1/Texture)



### volumetricLightCoefficient : number



### volumetricLightPower : number



### volumetricLightBlurScale : number



### sourceLight : [SpotLight](/classes/3.1/SpotLight)



### [DirectionalLight](/classes/3.1/DirectionalLight) : undefined



### hdrMinimumLuminance : number



### hdrDecreaseRate : number



### hdrIncreaseRate : number



### lensColorTexture : [Texture](/classes/3.1/Texture)



### lensFlareStrength : number



### lensFlareGhostDispersal : number



### lensFlareHaloWidth : number



### lensFlareDistortionStrength : number



### lensStarTexture : [Texture](/classes/3.1/Texture)



### lensFlareDirtTexture : [Texture](/classes/3.1/Texture)



### depthOfFieldDistance : number



### depthOfFieldBlurWidth : number



### motionStrength : number



### animations : [Animation](/classes/3.1/Animation)[]



### BloomEnabled : boolean



### DepthOfFieldEnabled : boolean



### LensFlareEnabled : boolean



### HDREnabled : boolean



### VLSEnabled : boolean



### MotionBlurEnabled : boolean



### volumetricLightStepsCount : number



### motionBlurSamples : number



### static LuminanceSteps : number



## Methods

### dispose() &rarr; void


### serialize() &rarr; any


### static Parse(source, scene, rootUrl) &rarr; [StandardRenderingPipeline](/classes/3.1/StandardRenderingPipeline)

Static members

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | rootUrl | string | 
