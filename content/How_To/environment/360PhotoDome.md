---
PG_TITLE: How To Use 360 Photo
---

# How To 360 Photo
360 Photo is a simplex mix of specific geometry, textures, and material properties; however, rather than put the burden on you to figure out how to connect them, we've created the PhotoDome.

## PhotoDome
PhotoDome needs a source image that must be "Equirectangular", without an equirectangular source the class won't function correctly.

Example of equirectangular image:
![equirectangular](//playground.babylonjs.com/textures/360photo.jpg)

## PhotoDome Code
Within the playground you can copy and paste the following into your scene and then adjust the options.

```javascript
photoDome = new BABYLON.PhotoDome("testdome", url, {<options>}, scene);
```

All of the settings in the options object are optional, but the object itself is not. Please provide an empty object at minimum.
All the options are based through the corresponding classes, mainly the dome geometry and the Texture:

* resolution=12: Integer, lower resolutions have more artifacts at extreme fovs
* size=1000: Physical radius to create the dome at, defaults to approximately half the far clip plane

## FOV adjustment
Sometimes 360 photo can feel an uncomfortable distance from the camera, to help with this a material based FOV adjustment is available.
Adjust it between 0.0 and 2.0 with the following code.

```javascript
photoDome.fovMultiplier = newValue;
```

As a warning, the further the value gets from 1 the more distortion will be visible. Higher resolutions on the photo dome help reduce, but not eliminate, this.

* [Playground Example of a PhotoDome](https://www.babylonjs-playground.com/#14KRGG#0)

