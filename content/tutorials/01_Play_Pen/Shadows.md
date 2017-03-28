---
ID_PAGE: 22151
PG_TITLE: 15. Shadows
---
## Introduction

In this tutorial, we are going to learn how to create shadows in Babylon JS. Shadows are now becoming dynamic, and they are now dynamically generated depending upon a light.
You might want to visit [**the playground scene**](http://babylonjs-playground.azurewebsites.net/?15) for this tutorial.


![Shadows](http://www.babylonjs.com/tutorials/15%20-%20Shadows/15.png)

_Final result_

## How can I do this ?

Shadows are easy to generate using the babylon.js “ShadowGenerator”. This function uses a shadow map: a map of your scene generated from the light’s point of view, as you can see here:

![Shadows2](http://www.babylonjs.com/tutorials/15%20-%20Shadows/15-1.png)

The two parameters used by the shadow generator are: the size of the shadow map, and which light is used for the shadow map's computation.
```javascript
var shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
```

Next, you have to define which shadows will be rendered. Here we want the shadow of our torus, but you can “push” any meshes you want:
```javascript 
shadowGenerator.getShadowMap().renderList.push(torus);
```

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
It is _true_ by default, because it is useful to decrease the aliasing of the shadow.  But if you want to reduce computation time, feel free to change it.
You can also control how the exponential shadow map scales depth values by changing the `shadowGenerator.depthScale`. By default the value is 30.0 but you may want to change it if the depth scale of your world (the distance between minZ and MaxZ) is small.

### Blur exponential shadow map 
```javascript
shadowGenerator.useBlurExponentialShadowMap = true;
```
This is the better soften shadow filter but the slower as well. It uses blurred exponential shadow map.

The quality of the blur is defined by two properties:

* shadowGenerator.blurScale: Define the scale used to downscale the shadow map before applying the blur postprocess. By default, the value is 2
* shadowGenerator.blurBoxOffset: Define the offset of the box's edge used to apply the blur. By default, the value is 1 (Meaning the box will go from -1 to 1 in bot direction resulting in 9 values read by the blur postprocess).

## Examples

You can find a live example here: 
http://www.babylonjs-playground.com/#20FROK#2

Please find here pictures of various filters used with a spot light:

![Hard shadows](/img/tutorials/hardshadows.jpg)

*No filter*

![Poisson](/img/tutorials/poisson.jpg)

*Poisson sampling*

![ESM](/img/tutorials/esm.jpg)

*Exponential Shadow Map*

![BlurESM](/img/tutorials/bluresm.jpg)

*Blur Exponential Shadow Map*

## Lights
Keep in mind that this shadow generator can only be used with one light.  If you want to generate shadows from another light, then you will need to create another shadow generator.

Only point, directional and spot lights can cast shadows.

### Point lights
Point lights use cubemaps rendering so please be cautious when enabling them as this could lead to some performance issues.
You can also visit the [point light shadow map playground scene](http://www.babylonjs-playground.com/#LYCSQ#12)

Furthermore BlurExponentialShadowMap is not supported by point lights (mostly because blurring the six faces of the cubemap would be too expensive).

### Spot lights
Spot lights use perspective projection to compute the shadow map.

### Directional lights
Directional lights use orthogonal projection. Light's position is evaluated automatically for you to get the best shadow map possible. You can control this behavior by turning `light.autoUpdateExtends` off.
You can control also the size of the projection window by modifying ```light.shadowOrthoScale``` (0.1 by default which means that the projection window is increase by 10% from the optimal size).

The light's position, as well as the positions of the mesh that you have pushed into the renderlist, determine where the shadows will appear.

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
Shadow generators compare the depth of every pixel with the depth of occluders (shadow casters) seen from the light point of view. As we are dealing with low precision textures (when supported Babylon.js will use float textures but low end devices only support int textures), you may want to boost the depth of occluders to facilitate self shadowing (An object casting shadows on itself).

### Back face rendering
You can improve self shadowing issues by setting `shadowGenerator.forceBackFacesOnly` to true. This will force the shadow geneator to render back faces of your mesh to the shadow map. This can clearly improve the overall precision and reduce the need for a bias.

### Improving the projection matrix
By default the projection matrix of a light use the minZ and maxZ of the main camera. But you may want to control it in order to get a more precise shadow map by reducing the distance between minZ and maxZ. To do so yu can set `light.shadowMinZ` and `light.shadowMaxZ`.

Here is a complete example:
http://www.babylonjs-playground.com/#1CXNXC#4

We did the following change to get a nice soft self-shadowing rendering:
- Reduced the distance between MinZ and MaxZ
- Increased the bias a bit to fight against shadow acne
- Boost the depthScale to get more precision

The main idea is then to first reduce the distance between MinZ and MaxZ and at the same time increment the depthScale (you will have to experiment to find values that best suit your needs).

## Next step
Now that you are becoming a real professional about Babylon.js, maybe it’s time to go deeper into the code to manipulate complex shaders, mesh, or textures. Our [home menu for our wiki](http://doc.babylonjs.com/) is your portal to many advanced topics. You can also participate in this project by going to our Github page: [https://github.com/BabylonJS/Babylon.js](https://github.com/BabylonJS/Babylon.js) and also by participating in our very active forum: [http://www.html5gamedevs.com/forum/16-babylonjs](http://www.html5gamedevs.com/forum/16-babylonjs). See you there.
