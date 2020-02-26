---
ID_PAGE: 22051
PG_TITLE: 05. Materials
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
To give an idea on how the material diffuse color reacts to the diffuse light color the following playground example shows how different color materials react to white, red, green and blue diffuse spot lights.

* [Playground Example - Material Color Reaction to Light Color _direct click or edit to view_](http://www.babylonjs-playground.com/#20OAV9#325)  

This reaction of 

|     |     |
|----|----|
| Yellow Material |  Purple Material |
| Cyan Material | White Material |

to white, red, green and blue diffuse spot lights can also be seen in the following image.

![ Spot Light](/img/how_to/Materials/spots1.png)

### Ambient Color Example
In this [playground example](http://www.babylonjs-playground.com/#20OAV9#14) all spheres are lit by the same hemispheric light, with _diffuse_ red and _groundColor_ green. 
The first sphere has no ambient color, the middle has red ambient color defined on its material and the one on the right 
has material with green ambient color. The scene ambient color, which must be present, is white. When a scene ambient color component is set to 0, for example red, then whatever the value for red in the material 
ambient color it will have no effect. 

![Ambient](/img/how_to/Materials/ambient1.png)

### Transparent Color Example
Transparency is achieved by setting a materials _alpha_ property from 0 (invisible) to 1 (opaque).
```javascript
myMaterial.alpha = 0.5;
```
* [Playground Example Transparency](http://www.babylonjs-playground.com/#20OAV9#16)

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
In this [playground example](http://www.babylonjs-playground.com/#20OAV9#15) all spheres are lit by the same hemispheric light, with _diffuse_ red and _groundColor_ green. 
The first sphere has a diffuse texture, the middle an emissive texture and the one on the right 
has material with red diffuse color and an ambient texture.

![Texture](/img/how_to/Materials/texture1.png)

### Transparent Texture Examples
As for colors the transparency is achieved by setting a materials _alpha_ property from 0 (invisible) to 1 (opaque).
```javascript
myMaterial.alpha = 0.5;
```
* [Playground Example Transparency](http://www.babylonjs-playground.com/#20OAV9#17)

In addition the image used for the texture might already have a transparency setting, such as this picture of a dog from wikimedia commons, 
which has a transparent background;

![A dog](/img/how_to/Materials/dog.png)

In this case we set the _hasAlpha_ property of the **texture** to true.
```javascript
myMaterial.diffuseTexture.hasAlpha = true;
```

* [Playground Example Transparent Background](http://www.babylonjs-playground.com/#YDO1F#18)

For the back faces of the cube to be visible through the transparent areas of the front faces we have to deal with back face culling.

## Back Face Culling
This is a method for efficiently drawing the 2D screen rendering of the 3D model. Usually there is no need to draw the back face of a cube, or other object, 
as it will be hidden by the front face. In BabylonJS the default setting is, as you might expect, set to true.

Looking at the images below, when the material property _backFaceCulling_ is true you can see that the transparent areas around the 
dog are still transparent, you can see the background through them. However, you cannot see the images on the back faces as they have been culled (or removed). 
When _backFaceCulling_ is false the back faces are not removed during rendering so they can be seen through the transparent areas of the front faces. 

| Back Face Culling True | Back Face Culling False |
|-----|--------|
| ![BFC True](/img/how_to/Materials/bfc2.png) | ![BFC False](/img/how_to/Materials/bfc1.png) |

* [Playground Example Back Face Culling True](http://www.babylonjs-playground.com/#YDO1F#20)

## WireFrame
You can see a mesh in wireframe mode by using:
```javascript
materialSphere1.wireframe = true;
 ```
![wireframe](/img/how_to/Materials/04-3.png)

### Texture Packer
Some complex scenes will require a large amount of texture.  A single Material often will use three and often more!  To simplify the loading process sometimes it might be convenient to package the texture from multiple materials into a series of images.  The trade off will be that each texture will be scaled to a set size and might cause some desegregation, there are also webGL limits to take into consideration.  The packer will create a set of "frames" for each unique material and its required texture channels, producing one image for each channel that the materials being packed used.  The process then modifies a target UV# of the meshes passed with the constructor to make them match the frame of the texture sets.  The system assumes textures are 1:1 ratio (square).

Create a TexturePacker series by calling:
```javascript
let pack = new BABYLON.TexturePacker(name, targetMeshes, options, scene);
pack.processAsync().then(success).catch(error);
```
There are some limitations though that you must consider.  These include texture size limits, transparencies, and refection/refraction materials.  Please go here for more information on [Creating a Texture Package](https://doc.babylonjs.com/how_to/creating_a_texture_package)

* [Playground Example Texture Packer](https://www.babylonjs-playground.com/#TQ408M#6)

## Local File Access

An important thing to remember, is that for security reasons, web browsers like google chrome don't allow local files to be accessed by default for web pages. This includes any texture files you are using. There are a few ways to work around this in google chrome. The quick and dirty way is to close all instances of chrome, and open it in the terminal.

for windows, you go to the terminal and type,

```
start chrome --allow-file-access-from-files
```
for macOS, the command looks like this,

```
open -a "Google Chrome" --args --allow-file-access-from-files
```
and for linux, the command looks like this.

```
google-chrome --allow-file-access-from-files
```
Be warned that the above method may introduce a security risk if used for long term projects. For long term projects, you will want to set up an HTTP server to run any required files. Using a server has the benefit of working on any web browser.

## Next step
Great, your scene is looking better than ever with those materials! Later we will see how to use advanced techniques with materials. But for now, we have to learn [**how to use cameras**](/babylon101/Cameras).

# Further Reading

[Materials Overview](/features/Materials)
