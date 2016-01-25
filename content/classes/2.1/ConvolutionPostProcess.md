---
ID_PAGE: 25283
PG_TITLE: ConvolutionPostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---

Builtin postprocess applying a kernel matrix to every pixel
##new [ConvolutionPostProcess](/classes/ConvolutionPostProcess)(name, kernel, ratio, camera, samplingMode, engine, reusable)




The Postprocess constructor






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The postprocess name
 | kernel | number[] | The matrix to apply
 | ratio | number | The size of the postprocess (0.5 means that your postprocess will have a width = canvas.width * 0.5 and a height = canvas.height * 0.5)
 | camera | [Camera](/classes/Camera) | The scene camera linked to this post process
optional | samplingMode | number | [Texture](/classes/Texture).NEAREST_SAMPLINGMODE, [Texture](/classes/Texture).BILINEAR_SAMPLINGMODE or [Texture](/classes/Texture).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](/classes/Engine) | The engine to attach the postprocess.
optional | reusable | boolean | Indicates if the postprocess can be reused multiple times on the same camera
---

##Extends
 [PostProcess](/classes/PostProcess)
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




##Methods
