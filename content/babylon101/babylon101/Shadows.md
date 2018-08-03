---
ID_PAGE: 22151
PG_TITLE: 17. Shadows
---
## Introduction

In this tutorial, we are going to learn how to create shadows in Babylon JS. Shadows are now becoming dynamic, and they are now dynamically generated depending upon a light.
You might want to visit [**the playground scene**]( https://www.babylonjs-playground.com/?15) for this tutorial.

## How can I do this?

Shadows are easy to generate using the babylon.js `ShadowGenerator`. This function uses a shadow map: a map of your scene generated from the light’s point of view.

The two parameters used by the shadow generator are: the size of the shadow map, and which light is used for the shadow map's computation.
```javascript
var shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
```

Next, you have to define which shadows will be rendered. Here we want the shadow of our torus, but you can “push” any meshes you want:
```javascript 
shadowGenerator.getShadowMap().renderList.push(torus);
```

Introduced with babylon.js v3.1, there are two new helper functions to deal with shadow casters:
* `addShadowCaster(mesh, includeDescendants)`: Helper function to add a mesh and its descendants to the list of shadow casters
* `removeShadowCaster(mesh, includeDescendants)`: Helper function to remove a mesh and its descendants from the list of shadow casters

And finally, you will have to define where the shadows will be displayed... by setting a mesh parameter to true:
```javascript
ground.receiveShadows = true;
```

## Soft shadows

If you want to go further, you can activate shadows filtering in order to create better looking shadows by removing the hard edges.

There are three filters available:

### Poisson sampling
```javascript
shadowGenerator.usePoissonSampling = true;
```
If you set this one to _true_, Variance shadow maps will be disabled. This filter uses Poisson sampling to soften shadows. The result is better, but slower.

### Exponential shadow map 
```javascript
shadowGenerator.useExponentialShadowMap = true;
```
It is _true_ by default, because it is useful to decrease the aliasing of the shadow.  But if you want to reduce computation time, feel free to turn it off.
You can also control how the exponential shadow map scales depth values by changing the `shadowGenerator.depthScale`. By default, the value is 50.0 but you may want to change it if the depth scale of your world (the distance between MinZ and MaxZ) is small.

### Blur exponential shadow map 
```javascript
shadowGenerator.useBlurExponentialShadowMap = true;
```
This is the better soften shadow filter but the slower as well. It uses blurred exponential shadow map.

The quality of the blur is defined by the following properties:

* `shadowGenerator.blurScale`: Define the scale used to downscale the shadow map before applying the blur postprocess. By default, the value is 2
* `shadowGenerator.blurBoxOffset`: Define the offset of the box's edge used to apply the blur. By default, the value is 1 (Meaning the box will go from -1 to 1 in both directions resulting in 9 values read by the blur postprocess).
* `shadowGenerator.useKernelBlur`: You can decide to use kernel blur instead of box blur. While a bit more expensive, the quality of the shadow is far better with kernel blur. You can control the kernel size with `shadowGenerator.blurKernel`, which default value is 1.

Here is an example of blurred shadows: https://www.babylonjs-playground.com/#IIZ9UU

### Close exponential shadow map
Starting with Babylon.js 3.0, we introduced a new way of doing exponential shadow map to deal with self-shadowing issues: The Close Exponential Shadow Map (CESM).
With CESM, you can get accurate self-shadowing but you will need to define additional parameters:
* You must provide the smallest range of depth values from your light by setting `light.shadowMinZ` and `light.shadowMaxZ`. The smaller the range is, the better the shadow will be.
* You must ensure that the light is as close as possible to the shadow casters.

You can enable CESM with:
```javascript
shadowGenerator.useCloseExponentialShadowMap = true;
```

or if you want blurred shadows:
```javascript
shadowGenerator.useBlurCloseExponentialShadowMap = true;
```

Here is an example of how CESM works: https://www.babylonjs-playground.com/#0TG0TB

### Percentage Closer Filtering (Webgl2 only)
Starting with Babylon.js 3.2, a new way of dealing with shadow maps was introduced. This greatly improves the performance and setup of shadows.

PCF shadows benefit from the new hardware filtering functions available in Webgl2 and produce a smoother version of Poisson sampling. They fallback to the standard Poisson Sampling when Webgl2 is not available on the target device.

You can enable PCF with:
```javascript
shadowGenerator.usePercentageCloserFiltering = true;
```

Here is an example of how PCF works: https://playground.babylonjs.com/#B48X7G#1

As PCF requires more resources than can be available on small platforms, you can use the ```filteringQuality``` property to choose the best tradeoff between quality and performance depending on your experience (the lower the quality the better the performance).

```javascript
shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_LOW;
```

Only Point and Directional lights are currently supported by PCF.

### Contact hardening shadow (Webgl2 only)
Starting with Babylon.js 3.2, contact hardening shadows based on PCSS shadows was introduced.

PCSS could be seen as an improved version of PCF but despite looking better they are also more processor expensive and should be reserved for desktop applications. Like PCF, they will automatically fallback to Poisson Sampling if the code is running on a WebGL 1 platform.

In PCSS, the shadows will get softer when they are further away from the object casting them, simulating what happens in real life.

In order to get accurate result you will need to define additional parameters:
* You must provide the smallest range of depth values from your light by setting `light.shadowMinZ` and `light.shadowMaxZ`. The smaller the range is, the better the shadow will be.
* You can also play with the following parameter ```contactHardeningLightSizeUVRatio``` in order to change how fast the shadow softens (between 0 and 1).

You can enable PCSS with:
```javascript
shadowGenerator.useContactHardeningShadow = true;
```

Here is an example of how PCSS works: https://playground.babylonjs.com/#B48X7G#2

As PCSS requires more resources than can be available on small platform, you can use the ```filteringQuality``` property to choose the best tradeoff between quality and performances depending on your experience. (the lower the quality the better the performances).

```javascript
shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_LOW;
```

The following link gives you a good appreciation of the softening of shadows as the shadow caster moves further away from the object receiving the shadow: https://playground.babylonjs.com/#ZT8BKT#2

Only Point and Directional lights are currently supported by PCSS.

## Examples

You can find a live example here: 
https://playground.babylonjs.com/#B48X7G

Please find here pictures of various filters used with a spot light:

![Hard shadows](/img/how_to/hardshadows.jpg)

*No filter*

![Poisson](/img/how_to/poisson.jpg)

*Poisson sampling*

![ESM](/img/how_to/esm.jpg)

*Exponential Shadow Map*

![BlurESM](/img/how_to/bluresm.jpg)

*Blur Exponential Shadow Map*

![PCF](/img/how_to/pcfshadows.jpg)

*Percentage Closer Filtering*

![PCSS](/img/how_to/pcssshadows.jpg)

*Contact Hardening Shadow*

## Lights
Keep in mind that this shadow generator can only be used with one light.  If you want to generate shadows from another light, then you will need to create another shadow generator.

Only point, directional and spot lights can cast shadows.

### Point lights
Point lights use cubemaps rendering so please be cautious when enabling them as this could lead to some performance issues.
You can also visit the [point light shadow map playground scene]( https://www.babylonjs-playground.com/#LYCSQ#12)

Furthermore, `BlurExponentialShadowMap` and `CloseBlurExponentialShadowMap` are not supported by point lights (mostly because blurring the six faces of the cubemap would be too expensive).

To optimize rendering, you can also decide to use the point light like an unlimited spot light if you are sure that all shadow casters are on the same side of the light. To do so, just specify a direction for your light and automatically Babylon.js will use a simple texture for the shadow map instead of the cubemap.

### Spot lights
Spot lights use perspective projection to compute the shadow map.

### Directional lights
Directional lights use orthogonal projection. Light's position is evaluated automatically for you to get the best shadow map possible. You can control this behavior by turning `light.autoUpdateExtends` off.
You can control also the size of the projection window by modifying one of those properties:
* `light.shadowOrthoScale`: 0.1 by default which means that the projection window is increase by 10% from the optimal size.
* `light.shadowFrustumSize`: Off by default with a value of 0. You can specify a value which will be used to define the square size of the frustum to use.

The light's position, as well as the positions of the mesh that you have pushed into the renderlist, determine where the shadows will appear. Note that your light point-of-view from this position have to view all meshes in the renderList; otherwise the shadows may not be rendered. See [this example](http://www.babylonjs-playground.com/#R1EVD0#3).

### Customizing the projection matrix
All lights need to provide a projection matrix to shadow generators in order to build the shadow map. You can define your own version by setting `light.customProjectionMatrixBuilder` value:
```
light.customProjectionMatrixBuilder = function(viewMatrix: Matrix, renderList: Array<AbstractMesh>) {
    return BABYLON.Matrix.PerspectiveFovLH(angle, 1.0, activeCamera.minZ, this.shadowMaxZ);
}
```

## Troubleshooting
Shadow mapping is a great technique but it is not perfect. Several parameters can be tweaked to help improving final rendering.

### Bias
You may want to reduce shadow acne resulting from not precise enough shadow map. To do so, you can define the bias (which is 0.00005 by default).:
```javascript
shadowGenerator.bias = 0.01;
```
Shadow generators compare the depth of every pixel with the depth of occluders (shadow casters) seen from the light point of view. As we are dealing with low precision textures (when supported Babylon.js will use float textures but low-end devices only support int textures), you may want to boost the depth of occluders to facilitate self-shadowing (An object casting shadows on itself).

### Back face rendering
You can improve self-shadowing issues by setting `shadowGenerator.forceBackFacesOnly` to true. This will force the shadow generator to render back faces of your mesh to the shadow map. This can clearly improve the overall precision and reduce the need for a bias.

### Improving the projection matrix precision
By default, the projection matrix of a light uses the minZ and maxZ of the main camera. But you may want to control it in order to get a more precise shadow map by reducing the distance between minZ and maxZ. To do so you can set `light.shadowMinZ` and `light.shadowMaxZ`.

### Use the best option for self-shadowing
As mentioned earlier, if you want blurred shadows on a self-shadowing object, the best option will probably to go with close exponential shadow map.

### Frustum edge falloff
Depending on how you setup your shadow generator, you could face weird falloff when an object is near the edges of the shadow map. To elegantly fix this issue, you can set a property named `frustumEdgeFalloff`:

```javascript
 shadowGenerator.frustumEdgeFalloff = 1.0;
```

You can find an example here: https://www.babylonjs-playground.com/#Y5IZCF

This property controls the extent to which the shadows fade out at the edge of the frustum. It is used only by directional and spot lights. By default, the value is set to 0 (no falloff) and 1.0 (complete falloff).

### Freezing shadows in static world

In case you have a static game world (objects which cast shadows) - there is no need to do the same shadow calculations 60 times per second. It could be enough to create and place a shadowMap only once. This greatly improves performance, allowing higher values of shadowMap's resolution.

Shadow generators can be frozen with:

```javascript
shadowGenerator.getShadowMap().refreshRate = BABYLON.RenderTargetTexture.REFRESHRATE_RENDER_ONCE;
```

Ask the light to not recompute shadow position with:

```javascript
light.autoUpdateExtends = false;
```

### Cleaning bone matrix weights

Wrong or imprecise bone weights of an animated mesh may cause negative or weird shadows. In this case you can clean up the weights automatically when loading with the following code:

```javascript
BABYLON.SceneLoader.CleanBoneMatrixWeights = true;
```

(You should set this before loading a scene or meshes.)

### Self Shadow

It is probably the case that Self-Shadowing requires the biggest attention during its setup. Let's try to setup self-shadowing on the following scene): https://playground.babylonjs.com/#FH3FM2#1

The first step consists in adding a shadow generator in the scene and defining every meshes as both casters and receivers (we also force the bias to 0 to highlight the generated artifacts): https://playground.babylonjs.com/#FH3FM2#4

As you can notice there are weird patterns appearing everywhere on the surface of the self-shadowed objects. This is called shadow acnea ([more information](http://www.opengl-tutorial.org/intermediate-tutorials/tutorial-16-shadow-mapping/#shadow-acne)).

Fortunately, in Babylon we do have a way to solve the issue.

#### Bias

As detailed in the previous [opengl tutorial](http://www.opengl-tutorial.org/intermediate-tutorials/tutorial-16-shadow-mapping/#shadow-acne), you can increase the value of the bias to make all the acnea disappear: https://playground.babylonjs.com/#FH3FM2#5

Unfortunately doing this introduces another side effect called peter panning where the shadows are not attached to their objects anymore.

![PeterPanning](/img/how_to/peterpanning.jpg)

This is where you can benefit from a BabylonJS 3.2 feature called normal bias.

#### Normal Bias (Since 3.2)

First move back the bias to be at the limit of seeing peter panning artifacts: https://playground.babylonjs.com/#FH3FM2#6

As you notice, there is now a bit of acnea appearing on the object where the surface is parallel to the light direction:

![ParallelAcnea](/img/how_to/paralellacnea.jpg)

This is where to add a bit of normal bias. Basically, during the generation of the shadow map, this will inset the geometry in the direction of the normal where the surface is parallel to the light: https://playground.babylonjs.com/#FH3FM2#7

All the artifacts are now gone and it is time to make our shadows look awesome.

#### Soft Shadows

Try to change the shadow generator to Contact hardening: https://playground.babylonjs.com/#FH3FM2#8

At first, you cannot see the contact hardening effect and, not only this, you can see shadow acnea again. Taking note of the section on PCSS you realize that the light min and max should be set as close as possible: https://playground.babylonjs.com/#FH3FM2#10

Now the contact hardening effect is present but the acnea is even stronger. Unfortunately, the bias is applied on the normalized coordinates depth (0-1) so changing the near and far value of the light impacts how big the bias should be.

So, go back and change the bias to its maximum before seeing peter panning and then apply some normal bias to remove the rest of the acnea leads to the following result: https://playground.babylonjs.com/#FH3FM2#11

Your shadows are now soft without acnea or peter panning.

## Next step
Now that you are becoming a real professional about Babylon.js, maybe it’s time to go deeper into the code to manipulate complex shaders, mesh, or textures. Our [home menu for our wiki](/) is your portal to many advanced topics. You can also participate in this project by going to our Github page: [https://github.com/BabylonJS/Babylon.js](https://github.com/BabylonJS/Babylon.js) and also by participating in our very active forum: [http://www.html5gamedevs.com/forum/16-babylonjs](http://www.html5gamedevs.com/forum/16-babylonjs). See you there.
