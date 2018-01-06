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
optional | originalPostProcess | Nullable&lt;[PostProcess](/classes/3.1/PostProcess)&gt; | 
## Members

### originalPostProcess : Nullable&lt;[PostProcess](/classes/3.1/PostProcess)&gt;

Public members
### downSampleX4PostProcess : Nullable&lt;[PostProcess](/classes/3.1/PostProcess)&gt;


### brightPassPostProcess : Nullable&lt;[PostProcess](/classes/3.1/PostProcess)&gt;


### blurHPostProcesses : [PostProcess](/classes/3.1/PostProcess)[]


### blurVPostProcesses : [PostProcess](/classes/3.1/PostProcess)[]


### textureAdderPostProcess : Nullable&lt;[PostProcess](/classes/3.1/PostProcess)&gt;


### volumetricLightPostProcess : Nullable&lt;[PostProcess](/classes/3.1/PostProcess)&gt;


### volumetricLightSmoothXPostProcess : Nullable&lt;[BlurPostProcess](/classes/3.1/BlurPostProcess)&gt;


### volumetricLightSmoothYPostProcess : Nullable&lt;[BlurPostProcess](/classes/3.1/BlurPostProcess)&gt;


### volumetricLightMergePostProces : Nullable&lt;[PostProcess](/classes/3.1/PostProcess)&gt;


### volumetricLightFinalPostProcess : Nullable&lt;[PostProcess](/classes/3.1/PostProcess)&gt;


### luminancePostProcess : Nullable&lt;[PostProcess](/classes/3.1/PostProcess)&gt;


### luminanceDownSamplePostProcesses : [PostProcess](/classes/3.1/PostProcess)[]


### hdrPostProcess : Nullable&lt;[PostProcess](/classes/3.1/PostProcess)&gt;


### textureAdderFinalPostProcess : Nullable&lt;[PostProcess](/classes/3.1/PostProcess)&gt;


### lensFlareFinalPostProcess : Nullable&lt;[PostProcess](/classes/3.1/PostProcess)&gt;


### hdrFinalPostProcess : Nullable&lt;[PostProcess](/classes/3.1/PostProcess)&gt;


### lensFlarePostProcess : Nullable&lt;[PostProcess](/classes/3.1/PostProcess)&gt;


### lensFlareComposePostProcess : Nullable&lt;[PostProcess](/classes/3.1/PostProcess)&gt;


### motionBlurPostProcess : Nullable&lt;[PostProcess](/classes/3.1/PostProcess)&gt;


### depthOfFieldPostProcess : Nullable&lt;[PostProcess](/classes/3.1/PostProcess)&gt;


### brightThreshold : number


### blurWidth : number


### horizontalBlur : boolean


### exposure : number


### lensTexture : Nullable&lt;[Texture](/classes/3.1/Texture)&gt;


### volumetricLightCoefficient : number


### volumetricLightPower : number


### volumetricLightBlurScale : number


### sourceLight : Nullable&lt;[SpotLight](/classes/3.1/SpotLight)&gt;


### [DirectionalLight](/classes/3.1/DirectionalLight) : undefined


### hdrMinimumLuminance : number


### hdrDecreaseRate : number


### hdrIncreaseRate : number


### lensColorTexture : Nullable&lt;[Texture](/classes/3.1/Texture)&gt;


### lensFlareStrength : number


### lensFlareGhostDispersal : number


### lensFlareHaloWidth : number


### lensFlareDistortionStrength : number


### lensStarTexture : Nullable&lt;[Texture](/classes/3.1/Texture)&gt;


### lensFlareDirtTexture : Nullable&lt;[Texture](/classes/3.1/Texture)&gt;


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
