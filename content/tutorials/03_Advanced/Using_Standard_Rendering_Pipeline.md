---
PG_TITLE: Using the standard rendering pipeline
---

# Introduction

Link to the playground : [http://babylonjs-playground.com/#FRUD8#2](http://babylonjs-playground.com/#FRUD8#2)

This rendering pipeline tends to simulate a chain of famous post-process effects such as
* Lens imperfections (surexposed surfaces are highlighted)
* Dirty lens effect
* Depth of field

In future, this rendering pipeline will be able to receive external post-processes, orderable, to be enriched like pseudo lens flare post-process or whatever.

# Creating the rendering pipeline

Just create an instance of BABYLON.StandardRenderingPipeline
```
var pipeline = new BABYLON.StandardRenderingPipeline(
    "standard", // The name of the pipeline
    scene, // The scene instance
    1.0, // The rendering pipeline ratio
    null, // The original post-process that the pipeline will be based on
    [camera] // The list of cameras to be attached to
);
```

# Customizing

## Bright threshold
Highlighted surfaces are following a configured threshold which is a number.
Each pixel intensity above the given threshold is creating lens imperfections.
Just set the ".brightThreshold" property:
```
pipeline.brightThreshold = 0.8;
```

## Highlighted surfaces intensity
To intensify the highlighted surfaces, just configure the ".gaussianCoefficient" property.
As a reference, the value 0.3 should be enough for a good result.
```
pipeline.gaussianCoefficient = 0.25;
```

## Change exposure
To globally intensify the highlighted surfaces result (before it is merged with the final scene color), you can change the ".exposure" property:
```
pipeline.exposure = 1.0; // which multiplies the final scene color with the highlighted surfaces result
```

# Setting up the dirty lens effect

To add a dirty lens effect, you can set the ".lensTexture" mask texture (background must be black) which will be applied on the screen following the highlighted surfaces:
```
// Just create a new BABYLON.Texture containing the dirty lens mask
pipeline.lensTexture = new BABYLON.Texture("lensdirt.jpg", scene);
```

A dirty lens mask should look like:

![DirtyLensTexture](/img/tutorials/advanced/standardRenderingPipeline/lensdirt.jpg)

# Setting up the pseudo lens flare
## Setting up textures
First, to activate the pseudo lens flare effect, just set the ".LensFlareEnabled" to true:
```
// Activating pseudo lens flare effect
pipeline.LensFlareEnabled = true;
```

Now, in order to work properly with the dirty lens effect (above), you can set your own dirt texture, which can be the same as the dirty lens effect. For example:
```
pipeline.lensTexture = pipeline.lensFlareDirtTexture = new Texture("lensdirt.jpg", scene);

// or

pipeline.lensFlareDirtTexture = new Texture("lens_flare_dirt.jpg", scene);
```

Now, you can add a "starbust" texture. This will disturb the final result and make it more realistic:

```
pipeline.lensStarTexture = new Texture("lensstar.jpg", scene);
```

![StarbustTexture](/img/tutorials/advanced/standardRenderingPipeline/lensstar.png)

which gives:

![StarbustTextureResult](/img/tutorials/advanced/standardRenderingPipeline/lensstarresult.png)

Finally, you can apply a palette of colors which will be used by the post-processes to disburb the lens flare colors:

```
pipeline.lensColorTexture = new Texture("lenscolor.png", scene);
```

Color texture like:


![LensColorTexture](/img/tutorials/advanced/standardRenderingPipeline/lenscolor.png)

## Setting up parameters
Once you added the textures, you can customize some parameters that will allow you to customize the final result:

The strength:
```
// The strength of the final result of the pseudo lens flare effect
pipeline.lensFlareStrength = 5; // By default 1.0
```

The halo width:
```
// Sets the width of the halo used to render the pseudo lens flare effect
pipeline.lensFlareHaloWidth = 1; // By default 0.4;
```
![HaloWidth](/img/tutorials/advanced/standardRenderingPipeline/halo_width.png)

The distortion strength:

```
// The strength related to the lens color texture
pipeline.lensFlareDistortionStrength = 35; // Default 4.0
```

# Setting up Luminance Adaptation

The standard rendering pipeline now allows you to compute luminance adaptation. This process tends to simulate real life events:
it means that if you focus on a higly brighted zone, the camera will adapt itself. In another words, this technique allows you to create
glare effects and it is also linked to what we call "*HDR*"

## Customizing luminance adaptation
First, let's activate the luminance adatation:

```
pipeline.HDREnabled = true;
```

That's all! Now, let's customize some properties:

```
// 1.0 is the default value. In dark zones, the camera will tend to adapt luminance
// and get the global image less dark. More the value is near 0.0, more the image will be bright
pipeline.hdrMinimumLuminance = 1.0;

// 0.5 is the default value. This simply sets the speed when the camera adapts the luminosity
// in bright zones
pipeline.hdrDecreaseRate = 0.5;

// 0.5 is the default value. This simply sets the speed when the camera adapts the luminosity
// in dark zones
pipeline.hdrIncreaseRate = 0.5;
```

# Setting up the depth of field

## Activating the depth of field
To active the depth of field, simply set the property ".DepthOfFieldEnabled" to true:
```
// Active depth of field
pipeline.DepthOfFieldEnabled = true;
```

## Customizing depth of field distance
To manipulate depth of field, you can set the distance to blur by setting the ".depthOfFieldDistance" property. This property represents the distance to focus on:
```
// Focus on 20 units
pipeline.depthOfFieldDistance = 20;
```

Playground example : [http://babylonjs-playground.com/#LB63T#2](http://babylonjs-playground.com/#LB63T#2)

**note: Activating the depth of field will activate the depth renderer of Babylon.js, which can have an impact on performances**

# Setting up the Motion Blur
As a demo, you have a look at https://www.youtube.com/watch?v=14Ejsj1_ywM

Motion Blur simply tries to blur the overall image when the camera moves fast.

## Customizing Motion Blur
```
// Enable motion blur in the pipeline
pipeline.MotionBlurEnabled = true;

// Default value is 1.0. More the motion strength is high, more the blur will be high
pipeline.motionStrength = 0.5;

// Default value is 64.0. This property represents the quality of the effect. More the value is high
// more the blur will be high quality. 64.0 is enough to have a beautiful result
pipeline.motionBlurSamples = 32.0;
```


**note: Activating the Motion Blur will activate the depth renderer of Babylon.js, which can have an impact on performance**
