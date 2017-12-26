---
ID_PAGE: 22051
PG_TITLE: 05. Materials
title: Materials
abstract: >-
  Materials are the basis of how your meshes look like. It is used to define a
  color or a texture on a 3D Object for instance.
slug: materials
redirects:
  - /tutorials/materials
---


# Materials
Materials allow you to cover your meshes in color and texture and they need light to be seen. One material can be used to cover as many meshes as you wish.


## Reactions to light
Whether the material is a color or a texture there are different ways it can react to light.

1. Diffuse - the basic color or texture of the material as viewed under a light;
2. Specular - the highlight given to the material by a light;
3. Emissive - the color or texture of the material as if self lit;
4. Ambient - the color or texture of the material lit by the environmental background lighting.

Diffuse and Specular material require a [light source](/features/Lights) to be created.  
Ambient color requires the ambient color of the scene to be set, giving the environmental background lighting.
```javascript
scene.ambientColor = new BABYLON.Color3(1, 1, 1);
```

5. Transparency - the level that you can see through the material can be set and for images with transparent sections it can be used so that appropriate parts of the material are invisible. This requires an _alpha_ property to be set.


## Color
Create a material using

```javascript
var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
```
Set the material color using one, some or all of _diffuseColor_, _specularColor_, _emissiveColor_ and _ambientColor_. Remember that _ambientColor_ 
will only apply if the scene ambient color has been set.

```javascript
var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);

myMaterial.diffuseColor = new BABYLON.Color3(1, 0, 1);
myMaterial.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
myMaterial.emissiveColor = new BABYLON.Color3(1, 1, 1);
myMaterial.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);

mesh.material = myMaterial;
```
### Diffuse Color Example
To give an idea how material diffuse color reacts to diffuse light color the following [Playground Example](http://www.babylonjs-playground.com/#20OAV9#10) shows how

|     |     |
|----|----|
| Yellow Material |  Purple Material |
| Cyan Material | White Material |

react to white, red, green and blue diffuse spot lights. Notice how the viewing angle adjusts the lighting.

![ Spot Light](/img/how_to/Materials/spots1.png)

### Ambient Color Example
In this [playground example](http://www.babylonjs-playground.com/#20OAV9#14) all spheres are lit by the same hemisphereic light, with _diffuse_ red and _groundColor_ green. 
The first sphere has no ambient color, the middle has red ambient color defined on its material and the one on the right 
has material with green ambient color. The scene ambient color, which must be present, is white. When a scene ambient color component is set to 0, for example red, then whatever the value for red in the material 
ambient color it will have no effect. 

![Ambient](/img/how_to/Materials/ambient1.png)

### Transparent Color Example
Transparency is achieved by setting a materials _alpha_ property from 0 (invisible) to 1 (opaque).
```javascript
var myMaterial.alpha = 0.5;
```
[Playground Example Transparency](http://www.babylonjs-playground.com/#20OAV9#16)

## Texture
Textures are formed using a saved image.

Create a material using

```javascript
var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
```
Set the material texture using one, some or all of _diffuseTexture_, _specularTexture_, _emissiveTexture_ and _ambientTexture_. 
Notice that _ambientTexture_ is applied without the scene ambient color having been set.

```javascript
var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);

myMaterial.diffuseTexture = new BABYLON.Texture("PATH TO IMAGE", scene);
myMaterial.specularTexture = new BABYLON.Texture("PATH TO IMAGE", scene);
myMaterial.emissiveTexture = new BABYLON.Texture("PATH TO IMAGE", scene);
myMaterial.ambientTexture = new BABYLON.Texture("PATH TO IMAGE", scene);

mesh.material = myMaterial;
```
Note: When no normals are specified, Babylon's standard material will compute the normals.
### Texture Example
In this [playground example](http://www.babylonjs-playground.com/#20OAV9#15) all spheres are lit by the same hemisphereic light, with _diffuse_ red and _groundColor_ green. 
The first sphere has a diffuse texture, the middle an emissive texture and the one on the right 
has material with red diffuse color an an ambient texture.

![Texture](/img/how_to/Materials/texture1.png)

### Transparent Texture Examples
As for colors the transparency is achieved by setting a materials _alpha_ property from 0 (invisible) to 1 (opaque).
```javascript
var myMaterial.alpha = 0.5;
```
[Playground Example Transparency](http://www.babylonjs-playground.com/#20OAV9#17)

In addition the image used for the texture might already have a transparency setting, such as this picture of a dog from wikimedia commons, 
which has a transparent background;

![A dog](/img/how_to/Materials/dog.png)

In this case we set the _hasAlpha_ property of the **texture** to true.
```javascript
var myMaterial.diffuseTexture.hasAlpha = true;
```

[Playground Example Transparent Background](http://www.babylonjs-playground.com/#YDO1F#18)

For the back faces of the cube to be visible through the transparent areas of the front faces we have to deal with back face culling.

## Back Face Culling
This is a method for efficiently drawing the 2D screen rendering of the 3D model. Usually there is no need to draw the back face of a cube, or other object, 
as it will be hidden by the front face. In BabylonJS the default setting is, as you might expect, set to true.

Looking at the images below, when the material propery _backFaceCulling_ is true you can see that the transparent areas around the 
dog are still transparent, you can see the background through them. However you cannot see the images on the back faces as they have been culled (or removed). 
When _backFaceCulling_ is false the back faces are not removed during rendering so they can be seen through the transparent areas of the front faces. 

| Back Face Culling True | Back Face Culling False |
|-----|--------|
| ![BFC True](/img/how_to/Materials/bfc2.png) | ![BFC False](/img/how_to/Materials/bfc1.png) |

[Playground Example Back Face Culling True](http://www.babylonjs-playground.com/#YDO1F#20)

## WireFrame
You can see a mesh in wireframe mode by using:
```javascript
materialSphere1.wireframe = true;
 ```
![wireframe](/img/how_to/Materials/04-3.png)


## Next step
Great, your scene is looking better than ever with those materials! Later we will see how to use advanced techniques with materials. But for now, we have to learn [**how to use cameras**](/babylon101/Cameras).

# Further Reading

[Materials Overview](/features/Materials)



