---
TAGS:
---
## Description

class [DefaultRenderingPipeline](/classes/3.0/DefaultRenderingPipeline) extends [PostProcessRenderPipeline](/classes/3.0/PostProcessRenderPipeline)



## Constructor

## new [DefaultRenderingPipeline](/classes/3.0/DefaultRenderingPipeline)(name, hdr, scene, cameras)

@constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | hdr | boolean | 
 | scene | [Scene](/classes/3.0/Scene) | 
## Members

### PassPostProcessId : string



### HighLightsPostProcessId : string



### BlurXPostProcessId : string



### BlurYPostProcessId : string



### CopyBackPostProcessId : string



### ImageProcessingPostProcessId : string



### FxaaPostProcessId : string



### FinalMergePostProcessId : string



### pass : undefined



### highlights : undefined



### blurX : undefined



### blurY : undefined



### copyBack : undefined



### fxaa : [FxaaPostProcess](/classes/3.0/FxaaPostProcess)



### imageProcessing : [ImageProcessingPostProcess](/classes/3.0/ImageProcessingPostProcess)



### finalMerge : undefined



### animations : [Animation](/classes/3.0/Animation)[]



### bloomKernel : number

Specifies the size of the bloom blur kernel, relative to the final output size

### bloomWeight : number



### bloomScale : number



### bloomEnabled : boolean



### fxaaEnabled : boolean



### imageProcessingEnabled : boolean



## Methods

### dispose() &rarr; void


### serialize() &rarr; any


### static Parse(source, scene, rootUrl) &rarr; [DefaultRenderingPipeline](/classes/3.0/DefaultRenderingPipeline)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | any | 
 | scene | [Scene](/classes/3.0/Scene) | 
 | rootUrl | string | 
