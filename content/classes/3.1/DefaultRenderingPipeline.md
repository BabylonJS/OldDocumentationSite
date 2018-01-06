---
TAGS:
---
## Description

class [DefaultRenderingPipeline](/classes/3.1/DefaultRenderingPipeline) extends [PostProcessRenderPipeline](/classes/3.1/PostProcessRenderPipeline)



## Constructor

## new [DefaultRenderingPipeline](/classes/3.1/DefaultRenderingPipeline)(name, hdr, scene, cameras, automaticBuild)

@constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | hdr | boolean | 
 | scene | [Scene](/classes/3.1/Scene) | 
optional | cameras | [Camera](/classes/3.1/Camera)[] | 
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


### fxaa : [FxaaPostProcess](/classes/3.1/FxaaPostProcess)


### imageProcessing : [ImageProcessingPostProcess](/classes/3.1/ImageProcessingPostProcess)


### finalMerge : undefined


### animations : [Animation](/classes/3.1/Animation)[]


### bloomKernel : number

Specifies the size of the bloom blur kernel, relative to the final output size
### bloomWeight : number


### bloomScale : number


### bloomEnabled : boolean


### fxaaEnabled : boolean


### imageProcessingEnabled : boolean


## Methods

### prepare() &rarr; void

Force the compilation of the entire pipeline.
### dispose() &rarr; void


### serialize() &rarr; any


### static Parse(source, scene, rootUrl) &rarr; [DefaultRenderingPipeline](/classes/3.1/DefaultRenderingPipeline)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | rootUrl | string | 
