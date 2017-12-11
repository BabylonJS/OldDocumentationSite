---
TAGS:
---
## Description

class [ImageProcessingPostProcess](/classes/3.1/ImageProcessingPostProcess) extends [PostProcess](/classes/3.1/PostProcess)



## Constructor

## new [ImageProcessingPostProcess](/classes/3.1/ImageProcessingPostProcess)(name, options, PostProcessOptions, camera, samplingMode, engine, reusable, textureType)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | options | number or PostProcessOptions | 
optional | camera | [Camera](/classes/3.1/Camera) | 
optional | samplingMode | number | 
optional | engine | [Engine](/classes/3.1/Engine) | 
optional | reusable | boolean | 
## Members

### imageProcessingConfiguration : [ImageProcessingConfiguration](/classes/3.1/ImageProcessingConfiguration)

Gets the image processing configuration used either in this material.

Sets the Default image processing configuration used either in the this material.

         * If sets to null, the scene one is in use.
### colorCurves : [ColorCurves](/classes/3.1/ColorCurves)

Gets Color curves setup used in the effect if colorCurvesEnabled is set to true .

Sets Color curves setup used in the effect if colorCurvesEnabled is set to true .
### colorCurvesEnabled : boolean

Gets wether the color curves effect is enabled.

Sets wether the color curves effect is enabled.
### colorGradingTexture : [BaseTexture](/classes/3.1/BaseTexture)

Gets Color grading LUT texture used in the effect if colorGradingEnabled is set to true.

Sets Color grading LUT texture used in the effect if colorGradingEnabled is set to true.
### colorGradingEnabled : boolean

Gets wether the color grading effect is enabled.

Gets wether the color grading effect is enabled.
### exposure : number

Gets exposure used in the effect.

Sets exposure used in the effect.
### toneMappingEnabled : boolean

Gets wether tonemapping is enabled or not.

Sets wether tonemapping is enabled or not
### contrast : number

Gets contrast used in the effect.

Sets contrast used in the effect.
### vignetteStretch : number

Gets Vignette stretch size.

Sets Vignette stretch size.
### vignetteCentreX : number

Gets Vignette centre X Offset.

Sets Vignette centre X Offset.
### vignetteCentreY : number

Gets Vignette centre Y Offset.

Sets Vignette centre Y Offset.
### vignetteWeight : number

Gets Vignette weight or intensity of the vignette effect.

Sets Vignette weight or intensity of the vignette effect.
### vignetteColor : [Color4](/classes/3.1/Color4)

Gets Color of the vignette applied on the screen through the chosen blend mode (vignetteBlendMode)

if vignetteEnabled is set to true.

Sets Color of the vignette applied on the screen through the chosen blend mode (vignetteBlendMode)

if vignetteEnabled is set to true.
### vignetteCameraFov : number

Gets [Camera](/classes/3.1/Camera) field of view used by the Vignette effect.

Sets [Camera](/classes/3.1/Camera) field of view used by the Vignette effect.
### vignetteBlendMode : number

Gets the vignette blend mode allowing different kind of effect.

Sets the vignette blend mode allowing different kind of effect.
### vignetteEnabled : boolean

Gets wether the vignette effect is enabled.

Sets wether the vignette effect is enabled.
### fromLinearSpace : boolean

Gets wether the input of the processing is in Gamma or Linear [Space](/classes/3.1/Space).

Sets wether the input of the processing is in Gamma or Linear [Space](/classes/3.1/Space).
## Methods

### getClassName() &rarr; string


### dispose(camera) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | camera | [Camera](/classes/3.1/Camera) | 

