---
ID_PAGE: 25283
PG_TITLE: ConvolutionPostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
##Description

class [ConvolutionPostProcess](/classes/2.2/ConvolutionPostProcess) extends [PostProcess](/classes/2.2/PostProcess)

Builtin postprocess applying a kernel matrix to every pixel

##Constructor

##new [ConvolutionPostProcess](/classes/2.2/ConvolutionPostProcess)(name, kernel, ratio, camera, samplingMode, engine, reusable)

The Postprocess constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  The postprocess name
 | kernel | number[] |  The matrix to apply
 | ratio | number |  The size of the postprocess (0.5 means that your postprocess will have a width = canvas.width * 0.5 and a height = canvas.height * 0.5)
 | camera | [Camera](/classes/2.2/Camera) |  The scene camera linked to this post process
optional | samplingMode | number |  [Texture](/classes/2.2/Texture).NEAREST_SAMPLINGMODE, [Texture](/classes/2.2/Texture).BILINEAR_SAMPLINGMODE or [Texture](/classes/2.2/Texture).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](/classes/2.2/Engine) |  The engine to attach the postprocess.
##Members

###kernel : number[]

The kernel matrix

###static EdgeDetect0Kernel : number[]

Edge Detect 0 Kernel

###static EdgeDetect1Kernel : number[]

Edge Detect 1 Kernel

###static EdgeDetect2Kernel : number[]

Edge Detect 2 Kernel

###static SharpenKernel : number[]

Sharpen Kernel

###static EmbossKernel : number[]

Emboss Kernel

###static GaussianKernel : number[]



