---
PG_TITLE: How To Use the Default Rendering Pipeline
---

# Introduction

You can find a complete example of this pipeline in our playground : [https://www.babylonjs-playground.com/#Y3C0HQ#86](https://www.babylonjs-playground.com/#Y3C0HQ#86)

The default rendering pipeline provides visual improvements to enhance the output of your scene:
* Antialiasing (MSAA and FXAA)
* Sharpening
* Depth of field
* Bloom
* Image processing including:
 * Vignette effect
 * Contrast
 * Exposure
 * Color curves
 * Color grading
 * Tone mapping
 * Grain
* Chromatic Aberration

# Creating the rendering pipeline

You just have to create an instance of BABYLON.DefaultRenderingPipeline
```
var pipeline = new BABYLON.DefaultRenderingPipeline(
    "default", // The name of the pipeline
    true, // Do you want HDR textures ?
    scene, // The scene instance
    [camera] // The list of cameras to be attached to
);
```

# Customizing

## Antialiasing
The MSAA antialiasing (only supported in webGL 2.0 browsers) effect is enabled with:

```
pipeline.msaaEnabled = true;
```

and the FXAA antialiasing effect can be set using:

```
pipeline.fxaaEnabled = true;
```

## Sharpening
Sharpening can be enabled with:

```
pipeline.sharpenEnabled = true;
```
To increase the intensity of the effect modify:
```
pipeline.sharpen.edgeAmount = 0.9;
```
The amount of the original image in the output can be set with (Setting this to 0 will produce edge detection output):
```
pipeline.sharpen.colorAmount = 0.0;
```

## Depth of field
You can turn the depth of field effect on and off with:

```
pipeline.depthOfFieldEnabled = true;
```

Set the strength of blur with (Higher may affect performance):

```
pipeline.depthOfFieldBlurLevel = BABYLON.DepthOfFieldEffectBlurLevel.Low;
```

Furthermore, you can control the settings of the effect with the following parameters:
```
pipeline.depthOfField.focusDistance  = 2000;
pipeline.depthOfField.focalLength  = 50;
pipeline.depthOfField.fStop  = 1.4;
pipeline.depthOfField.lensSize  = 50;
```
[Demo](https://www.babylonjs-playground.com/index.html#JA1ND3#56)

## Bloom
You can turn the bloom effect on and off with:

```
pipeline.bloomEnabled = true;
```

Furthermore, you can control the impact of bloom in the final compositing with:
```
pipeline.bloomWeight = 0.3;
```


## Image processing effect
You can turn the image processing effect on and off with:

```
pipeline.imageProcessingEnabled = true;
```

You can also control individual image processing subeffects. To get more info about the ImageProcessing postprocess, please read the following [tutorial](/How_To/how_to_use_postprocesses#imageprocessing).

## Chromatic Aberration
You can turn the effect on and off with:

```
pipeline.chromaticAberrationEnabled = true;
```

Furthermore, you can control the distance of color channel separation with:
```
defaultPipeline.chromaticAberration.aberrationAmount = 300;
```

To modify the strength of the effect based on the distance from the center of the screen:
```
defaultPipeline.chromaticAberration.radialIntensity = 3;
```

To modify the direction the aberration the direction can be set:
```
var rotation = Math.PI;
defaultPipeline.chromaticAberration.direction.x = Math.sin(rotation)
defaultPipeline.chromaticAberration.direction.y = Math.cos(rotation)
```
Note: If both these values are set to 0 the direction will be towards the center of the screen.