---
TAGS:
---
## Description

class [ColorCurves](/classes/2.5/ColorCurves)

The color grading curves provide additional color adjustmnent that is applied after any color grading transform (3D LUT).

They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.

These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;

corresponding to low luminance, medium luminance, and high luminance areas respectively.

## Members

### GlobalHue : number

Gets the global Hue value.

The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

Sets the global Hue value.

The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

### GlobalDensity : number

Gets the global Density value.

The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.

Values less than zero provide a filter of opposite hue.

Sets the global Density value.

The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.

Values less than zero provide a filter of opposite hue.

### GlobalSaturation : number

Gets the global Saturation value.

This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

Sets the global Saturation value.

This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

### HighlightsHue : number

Gets the highlights Hue value.

The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

Sets the highlights Hue value.

The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

### HighlightsDensity : number

Gets the highlights Density value.

The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.

Values less than zero provide a filter of opposite hue.

Sets the highlights Density value.

The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.

Values less than zero provide a filter of opposite hue.

### HighlightsSaturation : number

Gets the highlights Saturation value.

This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

Sets the highlights Saturation value.

This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

### HighlightsExposure : number

Gets the highlights Exposure value.

This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.

Sets the highlights Exposure value.

This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.

### MidtonesHue : number

Gets the midtones Hue value.

The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

Sets the midtones Hue value.

The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

### MidtonesDensity : number

Gets the midtones Density value.

The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.

Values less than zero provide a filter of opposite hue.

Sets the midtones Density value.

The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.

Values less than zero provide a filter of opposite hue.

### MidtonesSaturation : number

Gets the midtones Saturation value.

This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

Sets the midtones Saturation value.

This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

### MidtonesExposure : number

Gets the midtones Exposure value.

This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.

Sets the midtones Exposure value.

This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.

### ShadowsHue : number

Gets the shadows Hue value.

The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

Sets the shadows Hue value.

The hue value is a standard HSB hue in the range [0,360] where 0=red, 120=green and 240=blue. The default value is 30 degrees (orange).

### ShadowsDensity : number

Gets the shadows Density value.

The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.

Values less than zero provide a filter of opposite hue.

Sets the shadows Density value.

The density value is in range [-100,+100] where 0 means the color filter has no effect and +100 means the color filter has maximum effect.

Values less than zero provide a filter of opposite hue.

### ShadowsSaturation : number

Gets the shadows Saturation value.

This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

Sets the shadows Saturation value.

This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase saturation and negative values decrease saturation.

### ShadowsExposure : number

Gets the shadows Exposure value.

This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.

Sets the shadows Exposure value.

This is an adjustment value in the range [-100,+100], where the default value of 0.0 makes no adjustment, positive values increase exposure and negative values decrease exposure.

## Methods

### static Bind(colorCurves, effect) &rarr; void

Binds the color curves to the shader.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | colorCurves | [ColorCurves](/classes/2.5/ColorCurves) |  The color curve to bind  The color curve to bind
 | effect | [Effect](/classes/2.5/Effect) |  The effect to bind to  The effect to bind to
### static PrepareUniforms(uniformsList) &rarr; void

Prepare the list of uniforms associated with the [ColorCurves](/classes/2.5/ColorCurves) effects.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformsList | string[] |  The list of uniforms used in the effect  The list of uniforms used in the effect

### clone() &rarr; [ColorCurves](/classes/2.5/ColorCurves)

Clones the current color curve instance.

@return The cloned curves
### serialize() &rarr; any

Serializes the current color curve instance to a json representation.

@return a JSON representation
### static Parse(source) &rarr; [ColorCurves](/classes/2.5/ColorCurves)

Parses the color curve from a json representation.

@return The parsed curves

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | any |  the JSON source to parse  the JSON source to parse

