---
title: Fire
abstract: ''
slug: fire
---

# Fire material

![Fire material](/img/extensions/materials/fire.png)

## Using the fire material

Fire material can be found here: [https://github.com/BabylonJS/Babylon.js/blob/master/dist/preview release/materialsLibrary/babylon.fireMaterial.js](https://github.com/BabylonJS/Babylon.js/blob/master/dist/preview release/materialsLibrary/babylon.fireMaterial.js)

A demo can be found here:  https://www.babylonjs-playground.com/#21IIM9#1

The fire material works with 3 textures:
- The diffuse texture (fire texture)
- The distortion texture (to create perturbations on diffuse texture)
- The opacity texture (black and white)

**Note:** *The fire material doesn't work with lighting. So, shadow maps are also disabled.*

```
var fireMaterial = new BABYLON.FireMaterial("fireMaterial", scene);
fireMaterial.diffuseTexture = new BABYLON.Texture("diffuse.png", scene);
fireMaterial.distortionTexture = new BABYLON.Texture("distortion.png", scene);
fireMaterial.opacityTexture = new BABYLON.Texture("opacity.png", scene);

var plane = BABYLON.Mesh.CreatePlane("fireplane", 1.0, scene);
plane.material = fireMaterial;
```

The speed of fire flames can be customized like:

```
fireMaterial.speed = 5.0; // Default is 1.0
```


