---
TAGS:
---
## Description

class [ImageProcessingConfiguration](/classes/3.1/ImageProcessingConfiguration)

This groups together the common properties used for image processing either in direct forward pass

or through post processing effect depending on the use of the image processing pipeline in your scene

or not.

## Members

### colorCurves : Nullable&lt;[ColorCurves](/classes/3.1/ColorCurves)&gt;

Color curves setup used in the effect if colorCurvesEnabled is set to true
### colorCurvesEnabled : boolean

Gets wether the color curves effect is enabled.

Sets wether the color curves effect is enabled.
### colorGradingTexture : Nullable&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt;

Color grading LUT texture used in the effect if colorGradingEnabled is set to true
### colorGradingEnabled : boolean

Gets wether the color grading effect is enabled.

Sets wether the color grading effect is enabled.
### colorGradingWithGreenDepth : boolean

Gets wether the color grading effect is using a green depth for the 3d [Texture](/classes/3.1/Texture).

Sets wether the color grading effect is using a green depth for the 3d [Texture](/classes/3.1/Texture).
### colorGradingBGR : boolean

Gets wether the color grading texture contains BGR values.

Sets wether the color grading texture contains BGR values.
### exposure : number

Gets the Exposure used in the effect.

Sets the Exposure used in the effect.
### toneMappingEnabled : boolean

Gets wether the tone mapping effect is enabled.

Sets wether the tone mapping effect is enabled.
### contrast : number

Gets the contrast used in the effect.

Sets the contrast used in the effect.
### vignetteStretch : number

Vignette stretch size.
### vignetteCentreX : number

Vignette centre X Offset.
### vignetteCentreY : number

Vignette centre Y Offset.
### vignetteWeight : number

Vignette weight or intensity of the vignette effect.
### vignetteColor : undefined

Color of the vignette applied on the screen through the chosen blend mode (vignetteBlendMode)

if vignetteEnabled is set to true.
### vignetteCameraFov : number

[Camera](/classes/3.1/Camera) field of view used by the Vignette effect.
### vignetteBlendMode : number

Gets the vignette blend mode allowing different kind of effect.

Sets the vignette blend mode allowing different kind of effect.
### vignetteEnabled : boolean

Gets wether the vignette effect is enabled.

Sets wether the vignette effect is enabled.
### applyByPostProcess : boolean

Gets wether the image processing is applied through a post process or not.

Sets wether the image processing is applied through a post process or not.
### isEnabled : boolean

Gets wether the image processing is enabled or not.

Sets wether the image processing is enabled or not.
### onUpdateParameters : [Observable](/classes/3.1/Observable)&lt;[ImageProcessingConfiguration](/classes/3.1/ImageProcessingConfiguration)&gt;

An event triggered when the configuration changes and requires Shader to Update some parameters.

@type {BABYLON.[Observable](/classes/3.1/Observable)}
### static VIGNETTEMODE_MULTIPLY : number

Used to apply the vignette as a mix with the pixel color.
### static VIGNETTEMODE_OPAQUE : number

Used to apply the vignette as a replacement of the pixel color.
## Methods

### getClassName() &rarr; string


### static PrepareUniforms(uniforms, defines) &rarr; void

Prepare the list of uniforms associated with the Image Processing effects.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniforms | string[] | 
 | defines | IImageProcessingConfigurationDefines |  the list of defines currently in use
### static PrepareSamplers(samplersList, defines) &rarr; void

Prepare the list of samplers associated with the Image Processing effects.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | samplersList | string[] | 
 | defines | IImageProcessingConfigurationDefines |  the list of defines currently in use
### prepareDefines(defines, forPostProcess) &rarr; void

Prepare the list of defines associated to the shader.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | defines | IImageProcessingConfigurationDefines |  the list of defines to complete
optional | forPostProcess | boolean | 
### isReady() &rarr; boolean

Returns true if all the image processing information are ready.
### bind(effect, aspectRatio) &rarr; void

Binds the image processing to the shader.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.1/Effect) |  The effect to bind to
optional | aspectRatio | number | 
### clone() &rarr; [ImageProcessingConfiguration](/classes/3.1/ImageProcessingConfiguration)

Clones the current image processing instance.

@return The cloned image processing
### serialize() &rarr; any

Serializes the current image processing instance to a json representation.

@return a JSON representation
### static Parse(source) &rarr; [ImageProcessingConfiguration](/classes/3.1/ImageProcessingConfiguration)

Parses the image processing from a json representation.

@return The parsed image processing

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | any |  the JSON source to parse

