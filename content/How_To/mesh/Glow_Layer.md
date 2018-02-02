---
PG_TITLE: How To Make a Mesh Glow
---

# How To Make a Mesh Glow

Emissive meshes are equivalent to self lit meshes. Both the emissive color and texture of the material determine how the mesh will self lit. This can for instance helps create a phosphorescent watch dial. Babylon JS supports natively emissive poperties in both the standard and PBR materials.

But how could we easily make the glow around those self lit areas ?

## How to use ?

Only one line is needed to make all the emissive parts of a scene glow:

```javascript
var gl = new BABYLON.GlowLayer("glow", scene);
```

[**Playground Demo Scene**](https://www.babylonjs-playground.com/#LRFB2D#1)

## Intensity Controls

By default, the glow layer is filled using the material emissive parameters (emissive result = emssive color * emissive texture color * emissive texture level). It will also use a blur kernel of 32 which might not be adapted to your visual requirements.

### Color Intensity

To control the intensity of the color in the glow layer, you can use the dedicated property:

```javascript
var gl = new BABYLON.GlowLayer("glow", scene);
gl.intensity = 0.5;
```

[**Playground Demo Scene**](https://www.babylonjs-playground.com/#LRFB2D#2)

### Blur Intensity

In order to control change the shape of the blur, you can rely on the creation option:

* **mainTextureRatio**: Multiplication factor apply to the canvas size to compute the render target size used to generated the glowing objects (the smaller the faster).
* **mainTextureFixedSize**: Enforces a fixed size texture to ensure resize independant blur to prevent the shape of the blur to change according to the target device size.
* **blurKernelSize**: How big is the kernel of the blur texture.

```javascript
var gl = new BABYLON.GlowLayer("glow", scene, { 
    mainTextureFixedSize: 1024,
    blurKernelSize: 64
});
```

[**Playground Demo Scene**](https://www.babylonjs-playground.com/#LRFB2D#3)

## Anti Aliasing

Depending on your setup, some aliasing artifacts might appear in the glow. To prevent taht to happen on WebGL 2 only devices, you can specify the number of samples to use for MSAA on the main render target.

```javascript
var gl = new BABYLON.GlowLayer("glow", scene, { 
    mainTextureSamples: 4 
});
```

[**Playground Demo Scene**](https://www.babylonjs-playground.com/#LRFB2D#4)

## Mesh Management

As from time to time it might be interesting to exclude or only include some meshes from the scene. Some helper functions have been introduced.

### Excluded Mesh

In order to exclude meshes from the glow layer you can use the dedicated function:

```javascript
var gl = new BABYLON.GlowLayer("glow", scene);
gl.addExcludedMesh(mesh)
```

[**Playground Demo Scene**](https://www.babylonjs-playground.com/#LRFB2D#6)

### Include Only some Meshes

In order to include only a subset of meshes in the glow layer you can use the dedicated function:

```javascript
var gl = new BABYLON.GlowLayer("glow", scene);
gl.addIncludedOnlyMesh(mesh)
```

Using the function will automatically switch mode and only render the included meshes.

[**Playground Demo Scene**](https://www.babylonjs-playground.com/#LRFB2D#7)
```
