---
PG_TITLE: Using the standard rendering pipeline
---

# Introduction

Link to the playground : [http://babylonjs-playground.com/#FRUD8#1](http://babylonjs-playground.com/#FRUD8#1)

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
    [camera] // The list of cameras to be attched to
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
pipeline.exosure = 1.0; // which multiplies the final scene color with the highlighted surfaces result
```

# Setting up the dirty lens effect

To add a dirty lens effect, you can set the ".lensTexture" mask texture (background must be black) which will be applied on the screen following the highlighted surfaces:
```
// Just create a new BABYLON.Texture containing the dirty lens mask
pipeline.lensTexture = new BABYLON.Texture("lensdirt.jpg", scene);
```

A dirty lens mask should look like:

![DirtyLensTexture](/img/tutorials/advanced/standardRenderingPipeline/lensdirt.jpg)

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

Playground example : [http://babylonjs-playground.com/#LB63T#1](http://babylonjs-playground.com/#LB63T#1)

**note: Activating the depth of field will active the depth renderer of Babylon.js, which can have an impact on performances**
