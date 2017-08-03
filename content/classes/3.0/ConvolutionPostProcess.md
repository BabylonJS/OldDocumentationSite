---
ID_PAGE: 25283
PG_TITLE: ConvolutionPostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [ConvolutionPostProcess](/classes/3.0/ConvolutionPostProcess) extends [PostProcess](/classes/3.0/PostProcess)

Builtin postprocess applying a kernel matrix to every pixel

## Constructor

## new [ConvolutionPostProcess](/classes/3.0/ConvolutionPostProcess)(name, kernel, options, PostProcessOptions, camera, samplingMode, engine, reusable)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      The postprocess name
 | kernel | number[] |      The matrix to apply
 | options | number or PostProcessOptions |   
 | camera | [Camera](/classes/3.0/Camera) |      The scene camera linked to this post process
optional | samplingMode | number |      [Texture](/classes/3.0/Texture).NEAREST_SAMPLINGMODE, [Texture](/classes/3.0/Texture).BILINEAR_SAMPLINGMODE or [Texture](/classes/3.0/Texture).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](/classes/3.0/Engine) |      The engine to attach the postprocess.
## Members

### kernel : number[]

The kernel matrix

### static EdgeDetect0Kernel : number[]

Edge Detect 0 Kernel

### static EdgeDetect1Kernel : number[]

Edge Detect 1 Kernel

### static EdgeDetect2Kernel : number[]

Edge Detect 2 Kernel

### static SharpenKernel : number[]

Sharpen Kernel

### static EmbossKernel : number[]

Emboss Kernel

### static GaussianKernel : number[]



