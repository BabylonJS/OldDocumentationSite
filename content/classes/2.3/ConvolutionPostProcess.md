---
ID_PAGE: 25283
PG_TITLE: ConvolutionPostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [ConvolutionPostProcess](/classes/2.3/ConvolutionPostProcess) extends [PostProcess](/classes/2.3/PostProcess)



## Constructor

##  new [ConvolutionPostProcess](/classes/2.3/ConvolutionPostProcess)(name, kernel, ratio, camera, samplingMode, engine, reusable)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The postprocess name
 | kernel | number[] |   The matrix to apply
 | ratio | number |   The size of the postprocess (0.5 means that your postprocess will have a width = canvas.width * 0.5 and a height = canvas.height * 0.5)
 | camera | [Camera](/classes/2.3/Camera) |   The scene camera linked to this post process
optional | samplingMode | number |   [Texture](/classes/2.3/Texture).NEAREST_SAMPLINGMODE, [Texture](/classes/2.3/Texture).BILINEAR_SAMPLINGMODE or [Texture](/classes/2.3/Texture).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](/classes/2.3/Engine) |   The engine to attach the postprocess.
## Members

### kernel : number[]



### static  EdgeDetect0Kernel : number[]



### static  EdgeDetect1Kernel : number[]



### static  EdgeDetect2Kernel : number[]



### static  SharpenKernel : number[]



### static  EmbossKernel : number[]



### static  GaussianKernel : number[]



