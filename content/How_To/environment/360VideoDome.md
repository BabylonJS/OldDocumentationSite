---
PG_TITLE: How To Use 360 Video
---

# How To 360 Video
360 Video is a simplex mix of specific geometry, textures, and material properties; however, rather than put the burden on you to figure out how to connect them, we've created the VideoDome.

## VideoDome
VideoDomes rely heavily on the [VideoTexture](/classes/VideoTexture) class, check out it's documentation so that some parameters make more sense.
The source video itself should be "Equirectangular", without an equirectangular source the class won't function correctly.

## VideoDome Code
Within the playground you can copy and paste the following into your scene and then adjust the options.

```javascript
videoDome = new BABYLON.VideoDome("testdome", url, {<options>}, scene);
```

All of the settings in the options object are optional, but the object itself is not. Please provide an empty object at minimum.
All the options are based through the corresponding classes, mainly the dome geometry and the VideoTexture. Check out [the docs](/classes/VideoDome) for full information.

## FOV adjustment
Sometimes 360 Video can feel an uncomfortable distance from the camera, to help with this a material based FOV adjustment is available.
Adjust it between 0.0 and 2.0 with the following code.

```javascript
videoDome.fovMultiplier = newValue;
```

As a warning, the further the value gets from 1 the more distortion will be visible. Higher resolutions on the video dome help reduce, but not eliminate, this.

[Playground Example of a VideoDome](https://www.babylonjs-playground.com/#1E9JQ8#2)

# Further Reading

## Advanced

[VideoTexture](/classes/VideoTexture)
