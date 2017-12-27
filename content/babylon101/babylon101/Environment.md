---
ID_PAGE: 22131
PG_TITLE: 15. Environment
title: Environment
abstract: >-
  This tutorial talk about scene environment factors and effects. We will start
  off with simple scene clearColor (background color), then talk briefly about
  scene ambientColor, then on to 6-texture skyboxes, and then fog to give an
  illusion of depth to your scenes.
slug: environment
redirects:
  - /tutorials/environment
---

# Environment

You have come a long way, have learned about shapes, lights, sprites, particles, materials. But there is something missing in your scenes: a proper environment. This is the first of three consecutive How_To that talk about scene environment factors and effects. We will start off with simple scene `clearColor` (background color), then talk briefly about scene `ambientColor`, then on to 6-texture skyboxes, and then fog to give an illusion of depth to your scenes.

![Environment](/img/how_to/13.jpg)

_A picture showing Babylon.js fog in action_

## How can I do this?

We will talk about that nice fog effect, shortly. First, I want to introduce you to two interesting properties on the [scene class object](/classes/3.0/Scene):

* `scene.clearColor` - changes the 'background' color.
* `scene.ambientColor` - changes the color used in several effects, including ambient lighting.

Both of them are very useful, and powerful in their own right.

### Changing the Background color (`scene.clearColor`)

The 'clearColor' property on the scene object is the most rudimentary of environment properties/adjustments. Simply stated, this is how you change the background color of the scene. Here is how it is done:

```javascript
scene.clearColor = new BABYLON.Color3(0.5, 0.8, 0.5);
```
Or maybe you want to use one of our preset colors and avoid using the `new` keyword:
```javascript
scene.clearColor = BABYLON.Color3.Blue();
```
This color and property is not used in any calculations for the final colors of mesh, materials, textures, or anything else. It is simply the background color of the scene. Easy.

### Changing the Ambient color (`scene.ambientColor`)

Conversely, the `ambientColor` property on the scene object is a very powerful and influential environment property/adjustment. First, let's have a look at its syntax:

```javascript
scene.ambientColor = new BABYLON.Color3(0.3, 0.3, 0.3);
```
As you can see, it is set using the same format as `clearColor`, but `ambientColor` is used in quite a few calculations toward determining the final colors of scene items.&nbsp; Mainly, it is used in conjunction with a mesh's `StandardMaterial.ambientColor` to determine a FINAL `ambientColor` for the mesh material. 

You will find that when there is no `scene.ambientColor`, then `StandardMaterial.ambientColor` and `StandardMaterial.ambientTexture` will appear to do nothing.&nbsp; Set a `scene.ambientColor` of some value, like the example above, and `StandardMaterial.ambientColor`/`StandardMaterial.ambientTexture` will become active on meshes where you have applied such.

By default, `scene.ambientColor` is set to `Color3(0, 0, 0)`, which means there is no `scene.ambientColor`.

(Please see the section on ambientColors in our [Unleash the Standard Material](https://www.eternalcoding.com/?p=303) tutorial, for more information.)

### Skybox

To give a perfect illusion of a beautiful sunny sky, we are going to create a simple box, but with a special texture.
There is two ways to create a skybox. Let's start with the manual one to understand how things work under the hood and then we will be able to use the automatic one.

#### Manual creation
First, our box, nothing new, just take notice of the disabled [backface culling](http://en.wikipedia.org/wiki/Back-face_culling):
```javascript
var skybox = BABYLON.Mesh.CreateBox("skyBox", 100.0, scene);
var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
skyboxMaterial.backFaceCulling = false;
skyboxMaterial.disableLighting = true;
skybox.material = skyboxMaterial;
```

Next, we set the `infiniteDistance` property. This makes the skybox follow our camera's position.
```javascript
skybox.infiniteDistance = true;
```

Now we must remove all light reflections on our box (the sun doesn't reflect on the sky!):
```javascript
skyboxMaterial.disableLighting = true;
```

Next, we apply our special sky texture to it. This texture must have been prepared to be a skybox, in a dedicated directory, named “skybox” in our example:
```javascript
skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
```
(More about reflectionTextures can be found in our [Unleash the Standard Material](https://www.eternalcoding.com/?p=303) tutorial.)

In that `/skybox` directory, we must find 6 sky textures, one for each face of our box. Each image must be named per the corresponding face: “skybox_nx.png”, “skybox_ny.png”, “skybox_nz.png”, “skybox_px.png”, “skybox_py.png”, “skybox_pz.png”.

If you want some free skybox texture samples, point your browser to: http://3delyvisions.co/skf1.htm (look at licenses before use, please.) As you can see by those examples, skybox textures need not be textures of sky alone. Buildings, hills, mountains, trees, lakes, planets, stars, you name it (all can be used nicely) as part of skybox textures.

You can also use dds files to specify your skybox. These special files can contain all information required to setup a cube texture:

```javascript
skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("/assets/textures/SpecularHDR.dds", scene);
```

Final note, if you want your skybox to render behind everything else, set the skybox's `renderingGroupId` to `0`, and every other renderable object's `renderingGroupId` greater than zero, for example:
```javascript
skybox.renderingGroupId = 0;

// Some other mesh
myMesh.renderingGroupId = 1;
```

More info about rendering groups and rendering order can be found [here](/resources/manual/transparency-and-how-meshes-are-rendered).

#### Automatic creation
Now that we understand how a skybox can be created let's move to a simpler way:

```javascript
var envTexture = new BABYLON.CubeTexture("/assets/textures/SpecularHDR.dds", scene);
scene.createDefaultSkybox(envTexture, true, 1000);
```

As you can see, the scene has a helper to create a skybox for you. You just need to specify a texture and define if you want to use a PBRMaterial (second parameter to true) or a StandardMaterial (default value).

The third parameter defines the scale of your skybox (this value depends on the scale of your scene). It is set to 1000 by default.

Here is an example: https://www.babylonjs-playground.com/#BH23ZD#1

You can also define your environment texture on the scene itself. THis way the texture will also be used by PBRMaterials as the default environment texture:

```javascript
scene.environmentTexture = new BABYLON.CubeTexture("/assets/textures/SpecularHDR.dds", scene);
scene.createDefaultSkybox(envTexture);
```

#### Skybox and ground
To simplify even more the creation of your environment, you can use the environmentHelper:

```javascript
scene.createDefaultEnvironment();
```

This adds an environment texture in your scene (usefull for pbr materials), creates a ground as well as a skybox. Everything places itself to be around the meshes present in your scene.

If the color is not your favorite choice you can modify it after creation:

```javascript
var helper = scene.createDefaultEnvironment();
helper.setMainColor(BABYLON.Color3.Teal());
```

You can see a [live version here](https://www.babylonjs-playground.com/#10D6YT#33)

The helper is providing a wide range of options during its creation:
* *createGround*: Specifies wether or not to create a ground.
* *groundSize*: Specifies the ground size (if sizeAuto is false).
* *groundTexture*: The texture used on the ground (Default to Babylon CDN).
* *groundColor*: The color mixed in the ground texture by default.
* *enableGroundShadow*: Enables the ground to receive shadows.
* *groundShadowLevel*: Helps preventing the shadow to be fully black on the ground.
* *enableGroundMirror*: Creates a mirror texture attach to the ground.
* *createSkybox*: Specifies wether or not to create a skybox.
* *skyboxSize*: Specifies the skybox size (if sizeAuto is false).
* *skyboxTexture*: The texture used on the skybox (Default to Babylon CDN).
* *skyboxColor*: The color mixed in the skybox texture by default.
* *sizeAuto*: Compute automatically the size of the elements to best fit with the scene.
* *setupImageProcessing*: Sets up the inmage processing in the scene.
* *environmentTexture*: The texture used as your environment texture in the scene (Default to Babylon CDN).
* *cameraExposure*: The value of the exposure to apply to the scene.
* *cameraContrast*: The value of the contrast to apply to the scene.
* *toneMappingEnabled*: Specifies wether or not tonemapping should be enabled in the scene.

For instance to prevent the creation of the Skybox, one would use:

```javascript
var helper = scene.createDefaultEnvironment({
    createSkybox: false
});
```

This is as simple as enabling ground reflection:

```javascript
var helper = scene.createDefaultEnvironment({
    enableGroundMirror: true
});
```

After creation you can reach all the created elements on the helper:
* *rotMesh*: A root node used to group the skybox and the ground to allow transforming them both at once.
* *skybox*: The Skybox Mesh.
* *skyboxMaterial*: The Skybox Material.
* *skyboxTexture*: The Skybox Texture.
* *ground*: The ground Mesh.
* *groundMaterial*: The ground Material.
* *groundTexture*: The ground Texture.
* *groundMirror*: the ground mirror texture.

So for instance dispose the ground after creation of the environment would be:
```javascript
var helper = scene.createDefaultEnvironment();
helper.ground.dispose();
```

The environment helper is relying exclusively on the [BackgroundMaterial](/How_To/BackgroundMaterial.md) to be as efficient as possible.

You can see a [live version here](https://www.babylonjs-playground.com/#10D6YT#35)

### Fog

Fog is quite an advanced effect, but fog in Babylon.js has been simplified to the maximum. It’s now very easy to add fog to your scenes.&nbsp; First, we define the fog mode like this:

```javascript
scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
```

Here are the available modes :
- `BABYLON.Scene.FOGMODE_NONE` - default one, fog is deactivated.
- `BABYLON.Scene.FOGMODE_EXP` - the fog density is following an exponential function.
- `BABYLON.Scene.FOGMODE_EXP2` - same that above but faster.
- `BABYLON.Scene.FOGMODE_LINEAR` - the fog density is following a linear function.

-> If you choose the `EXP`, or `EXP2` mode, then you can define the density option (default is `0.1`):
```javascript
scene.fogDensity = 0.01;
```
-> Otherwise, if you choose `LINEAR` mode, then you can define where fog starts and where fog ends:
```javascript
scene.fogStart = 20.0;
scene.fogEnd = 60.0;
```

Finally, whatever the mode, you can specify the color of the fog (default is `BABYLON.Color3(0.2, 0.2, 0.3)`):
```javascript
scene.fogColor = new BABYLON.Color3(0.9, 0.9, 0.85);
```
See, we told you it was easy.

If you want to see and play with the playground scene for this tutorial, you can [**click right here**]( https://www.babylonjs-playground.com/?13).

## Next step
You should have a beautiful scene now, but except from your 3D models, your world is pretty flat, and that’s a shame for your scene. So, in our next environment tutorial, we are going to transform your flat ground into beautiful mountains. To learn this, go [here!](/babylon-101/babylon-101/height-map)

# Further Reading

[Environment Overview](/features/component/environment)
