---
PG_TITLE: More On Textures
---

# More On Textures
A range of effects can be achieved with textures using a few extra lines of code.

## Bump Map
Bump mapping is a technique to simulate bump and dents on a rendered surface. These are made by creating a **normal map** from an image. 
The means to do this can be found on the web, a search for 'normal map generator' will bring up free and paid for methods of doing this. 


![Image](/img/tutorials/Materials/bump_photo.png) &nbsp;&nbsp;&nbsp;&nbsp;![normalMap](/img/tutorials/Materials/bump_normal.png)

Original Image &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Normal Map from Image

A bump map can be used with a color; with its original image or another image as below.

![Bump Example](/img/tutorials/Materials/bump_spheres.png)

### Creating a Bump Map Example
Just add a _bumpTexture_ to any existing textures.

```javascript
var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
myMaterial.bumpTexture = new BABYLON.Texture("PATH TO NORMAL MAP", scene);
```

[Playground Example of Bump Maps](http://www.babylonjs-playground.com/#20OAV9#23)

### Inverting Bumps and Dents
Use _invertNormalMapX_ and/or _invertNormalMapY_ on the material.

```javascript
var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
myMaterial.bumpTexture = new BABYLON.Texture("PATH TO NORMAL MAP", scene);
myMaterial.invertNormalMapX = true;
myMaterial.invertNormalMapY = true
```

## Opacity
The opacity of a material can be graded using an image with varying tranparency. The following PNG image with 
a transparency gradient can be applied to a material using _opacityTexture_

![Opacity Map](/img/tutorials/Materials/degrade_map.png)

with the same gradient applied to the material as in the image below.

![Opacity Material](/img/tutorials/Materials/degraded_plane.png)

[Playground Example of Opacity](http://www.babylonjs-playground.com/#20OAV9#24)

### Applying Opacity
Add an _opacityTexture_ to any existing texture.
```javascript
var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
myMaterial.opacityTexture = new BABYLON.Texture("PATH TO NORMAL MAP", scene);
```

## Tiling
When a material is applied to a mesh the image used for a texture is positioned according to coordinates. 
Rather than x, y which are already in use for the 3D axes the letters u and v are used for the coordinates.

![uv axes](/img/tutorials/Materials/crate.png)

To tile an image you use the _uScale_ and/or _vScale_ properties, of the texture, to set the number of tiles in each direction.

```javascript
myMaterial.diffuseTexture.uScale = 5.0;
myMaterial.diffuseTexture.vScale = 5.0;
```
## Offsetting
To offset your texture on your mesh, you  use the _uOffset_ and _vOffset_ properties, of the texture, to set the offset in each direction.

```javascript
myMaterial.diffuseTexture.uOffset = 1.5;
myMaterial.diffuseTexture.vOffset = 0.5;
```
[Playground Example of Tiling and Offset](http://www.babylonjs-playground.com/#20OAV9#25)
