---
ID_PAGE: 22121
PG_TITLE: 14. Particles
---
# Particles

This tutorial is going to talk about the particle system in BabylonJS. Particles are often small sprites used to simulate hard-to-reproduce phenomena like fire, smoke, water, or abstract visual effects like magic glitter and faery dust. This is done by emitting a cloud of very many particles from a region. From version 3.2 there are specific emitters to constrain this region in the shape of a box, sphere or cone. You can also write your own custom functions to control the cloud and region.

GPU particles are the latest addition to the particles family and can be used, with an appropriate browser, to boost performance.

![Particles](/img/how_to/Particles/12.png)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Particles. 

* [Playground Example - Particle System](https://www.babylonjs-playground.com/#WBQ8EM)

## Creating the Particles

### Particle System
To perform this magic trick you first need to create a `ParticleSystem` object. 

```javascript
var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
```

This sets the number of particles in the system (capacity). The particle system also requires a texture so that the particles can be seen and an emitter which sets the location and spread of the particles from a starting point. 

Once completed you set the particle system in motion using

```javascript
particleSystem.start();
```
and stop it with

```javascript
particleSystem.stop();
```

**Note:** that stopping a particle system will prevent the creation of new particles but the existing ones will continue. If you want to reset a system to an empty state, you will also have to call `particleSystem.reset()`

You can also set the amount of time the particle system is running though live particles may continue after that time.

```javascript
particleSystem.targetStopDuration = 5;
```

Once stopped you can dispose of the particle system. Very useful if you want to create a one shot particle system with a specific targetStopDuration.

```javascript
particleSystem.disposeOnStop = true;
```

### Pre-warming
Starting with Babylon.js v3.3, you can now specify a pre-warming period to make sure your system is in a correct state before rendering.

To do so, you need to setup two properties:
- `system.preWarmCycles`: Gets or sets a value indicating how many cycles (or frames) must be executed before first rendering (this value has to be set before starting the system). Default is 0 (ie. no pre-warmimg)
- `system.preWarmStepOffset`: Gets or sets a value indicating the time step multiplier to use in pre-warm mode (default is 1)

So if you set your system like this:

```
system.preWarmCycles = 100;
system.preWarmStepOffset = 5;
system.start();
```

It will execute the particle animation loop 100 times with a time step set to 5 times faster than realtime. The more cycles you want, the slower the system will be to start. So it could be interesting to increase the time step to have less cycles to run. But keep in mind that a too big time step will introduce issues if the life spam of a particle is smaller than the time step.

Here is an example of pre-warming: https://www.babylonjs-playground.com/#MX2Z99#8

### Particle Texture 
To apply a texture to the particles, such as  
![Flare](/img/how_to/Particles/Flare.png)

set the `particleTexture`

```javascript
particleSystem.particleTexture = new BABYLON.Texture("PATH TO IMAGE", scene);
```

You can also apply a mask to a texture to filter some colors, or filter a part of the alpha channel.

```javascript
particleSystem.textureMask = new BABYLON.Color4(0.1, 0.8, 0.8, 1.0);
```

This example produces the following  
![TextureMask](/img/how_to/Particles/12-1.png)

To use multiple textures in the scene use multiple particle systems all of which can use the same emitter object. 

### Particle Emitter
The emitter can be located either with a vector3 or a mesh, in which case the position of the mesh is used as the location. 

```javascript
particleSystem.emitter = new BABYLON.Vector3(-1, 2, 3);
```

```javascript
var source = BABYLON.Mesh.CreateBox("source", 1.0, scene);
particleSystem.emitter = source;
```

### Location and Spread
The spread of the particles from the emitter is from within a box the size of which is determined by setting the lower, left, front corner and upper, right, back corner of the box relative to the location of th emitter. This is done using `minEmitBox` and `maxEmitBox`

```javascript
particleSystem.minEmitBox = new BABYLON.Vector3(-2, -3, 4); 
particleSystem.maxEmitBox = new BABYLON.Vector3(4, 2, 3); 
```

The box can be collapsed to a line in the direction of an axis, for example the X-axis

![EmitBox](/img/how_to/Particles/12-2.png)

```javascript
particleSystem.minEmitBox = new BABYLON.Vector3(-1, 0, 0); 
particleSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 0); 
```

 ## Basic Playground Example
 At his point you can now create a particle system though it is very uninspiring. Just a few particles appearing in the spread space, drifting around and disappearing. 

 * [Playground Example - Basic Creation Small Spread](https://www.babylonjs-playground.com/#TUNZFH)
 * [Playground Example - Basic Creation Larger Spread](https://www.babylonjs-playground.com/#TUNZFH#1)

Fortunately things can be made more interesting very soon with the setting of more propeties. Read on.  

## Fine Tune Particle System
See how to change the lifetime, size, and color of the particles, their rates of emission, direction of travel (optionally affected by gravity). You can also affect their rotation, speed and cloud shape. Below you can find [playground examples]() where you can alter some of these parameters.

### Lifetime
The time taken for particles to disappear (or die) after being emitted can be varied. Once a particle dies a the particle is recycled foe emission. Their lifetime is given as a random range between a low and high value as in 

```javascript
// Life time of each particle (random between...)
particleSystem.minLifeTime = 0.3;
particleSystem.maxLifeTime = 1.5;
```

Starting with Babylon.js v3.3, you can also define the lifetime respectively to the particle system duration.
For instance, if your call `system.targetStopDuration = 0.5` then you can define particle life time with a gradient like this:

```
particleSystem.addLifeTimeGradient(0, 0.5);
particleSystem.addLifeTimeGradient(1, 0);
```
The first parameter defines the gradient (0 means at the particle system start and 1 means at particle system end). The second parameter is the particle life time. This means that at the beginning of the particle system, particles will receive a life time set to 0.5. And when the system will be close to the `targetStopDuration` the particles will receive a life time close to 0.

It is recommended to at least define a gradient for 0 and 1.

You can add as much gradients as you want as long as the gradient value is between 0 and 1.

You can also define a more complex construct by providing two values per gradient:

```
particleSystem.addLifeTimeGradient(0, 0.5, 0.8);
particleSystem.addLifeTimeGradient(1.0, 0, 0.1);
```

In this case the life time of the particle will be randomly picked between the two values when the gradient will be reached.

To remove a gradient you can call `particleSystem.removeLifeTimeGradient(0.5)`.

### Size
The size of the particles can also be varied randomly within a given range.

```javascript
// Size of each particle (random between...)
particleSystem.minSize = 0.1;
particleSystem.maxSize = 0.5;
```

If you want to change the particle size to not be a square you can then use the min/max for ScaleX/Y:
```javascript
// Scale of each particle (random between...)
particleSystem.minScaleX = 0.1;
particleSystem.maxScaleX = 0.5;

particleSystem.minScaleY = 0.2;
particleSystem.maxScaleY = 0.4;
```

Starting with Babylon.js v3.3, you can also define size factor gradients.

To add a size gradient just call the following code:

```
particleSystem.addSizeGradient(0, 0.5);
```

The first parameter defines the gradient (0 means at the particle birth and 1 means at particle death). The second parameter is the factor to apply to particle initial size. In this case the particle will born with half of the initial size (which is computed from minScale and maxScale).
It is recommended to at least define a gradient for 0 and 1:

```
particleSystem.addSizeGradient(0, 0.5);
particleSystem.addSizeGradient(1.0, 3);
```

You can add as much gradients as you want as long as the gradient value is between 0 and 1.

You can also define a more complex construct by providing two values per gradient:

```
particleSystem.addSizeGradient(0, 0.5, 0.8);
particleSystem.addSizeGradient(1.0, 3, 4);
```

In this case the size of the particle will be randomly picked between the two values when the gradient will be reached.

To remove a gradient you can call `particleSystem.removeSizeGradient(0.5)`.

When dealing with particle size, you may need to move the pivot (aka the center of the transform). By default the scale will come from the center of the particle but you may want to scale it from the top or the bottom. To change the pivot position, just call:

```
particleSystem.translationPivot = new BABYLON.Vector2(0, -0.5); // In this case the scale will come from the bottom of the particle
```

Here is an example with size gradients and a pivot set to bottom: https://www.babylonjs-playground.com/#L9QWZB#0

### Particle Colors
There are three colors that can be set for the particle system, two which are combined (or blended) during the lifetime of the particle and a third that it takes on just before it disappears. 

```javascript
particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);
```

Starting with Babylon.js v3.3, you can also define color gradients. If you define color gradients the color1, color2 and colorDead properties will be ignore.

To add a color gradient just call the following code:

```
particleSystem.addColorGradient(0, new BABYLON.Color4(1, 1, 1, 0));
```

The first parameter defines the gradient (0 means at the particle birth and 1 means at particle death).
It is recommended to at least define a gradient for 0 and 1:

```
particleSystem.addColorGradient(0, new BABYLON.Color4(1, 1, 1, 0));
particleSystem.addColorGradient(1.0, new BABYLON.Color4(1, 1, 1, 1));
```

You can add as much gradients as you want as long as the gradient value is between 0 and 1.

You can also define a more complex construct by providing two colors per gradient:

```
particleSystem.addColorGradient(0, new BABYLON.Color4(1, 1, 1, 0), new BABYLON.Color4(1, 0, 1, 0));
particleSystem.addColorGradient(1.0, new BABYLON.Color4(1, 1, 1, 1)new BABYLON.Color4(1, 0, 1, 1));
```

In this case the color of the particle will be randomly picked between the two colors when the gradient will be reached.

To remove a gradient you can call `particleSystem.removeColorGradient(0.5)`.

Here is an example of color gradients: https://www.babylonjs-playground.com/#MX2Z99#8

### Particle blending
There are different ways that particles are blended with the scene and these are set with `blendMode`.

```javascript
particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
```

```javascript
particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;
```

`BLENDMODE_ONEONE` is the deault and will be used if `blendMode` is not specified.

* `BLENDMODE_ONEONE` - colors are added without alpha affecting the result;
* `BLENDMODE_STANDARD` - colors are added using particle’s alpha (ie. color * (1 - alpha) + particleColor * alpha).
* `BLENDMODE_ADD` - colors are added but only particle color uses particle’s alpha (ie. color + particleColor * alpha).

### Rates
The `emitRate` determines the number of particles emitted per second. The larger the number the more dense appears the emitted cloud of particles. As particles die they are recycled to be emitted again. If their lifetime is long enough and their emission rate fast enough it is possible for there to be a gap in the emission of particles. 

![emitRate](/img/how_to/Particles/12-3.png)

```javascript
particleSystem.emitRate = 1000;
```

You can stop the continuous emission of particles by setting a manual emit count.

```javascript
particleSystem.manualEmitCount = 300;
```

In this case the number of particles given by the count are emitted and there are no further emissions of particles.

### Direction
Two directions can be specified. If you specify just one direction the particles will travel randomly in the general direction given. When both directions are given the particles will generally travel inside the two directions.

```javascript
particleSystem.direction1 = new BABYLON.Vector3(-7, 8, 3);
particleSystem.direction2 = new BABYLON.Vector3(7, 8, -3);
```
Direction can also be affected by gravity.

### Gravity
A value for gravity can be applied. For example if negative in the Y direction the particles will slowly be pulled downwards.

```javascript
//Set the gravity of all particles (not necessarily down)
particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
```

### Rotation
You can define a range of angular speeds for the particles about the Z-axis for the particles in radians per second:

```javascript
particleSystem.minAngularSpeed = 0;
particleSystem.maxAngularSpeed = Math.PI;
```

You can also define the initial rotation angle with:

```
particleSystem.minInitialRotation = 0;
particleSystem.maxInitialRotation = Math.PI;
```

### Speed
You can define a range for the power of the emitting particles, and the overall motion speed (0.01 is default update speed, faster updates = faster animation).

  ```javascript
  particleSystem.minEmitPower = 1;
  particleSystem.maxEmitPower = 3;
  particleSystem.updateSpeed = 0.005;
  ```
  
 ### Alignment
 By default all particles are rendered as billboards. But you can decide to instead align them with particle direction with `system.isBillboardBased = false`.
 
 You can find a demo [here](https://www.babylonjs-playground.com/#EV0SEQ)

## Adjustable Playground Examples

* [Playground Example - Adjust Min & Max of EmitBox](https://www.babylonjs-playground.com/#LMG759)
* [Playground Example - Adjust Emit Life Time, Rate, Power and Update Speed](https://www.babylonjs-playground.com/#63PJFT)

## Shape Emitters
Starting from Babylonjs 3.2 you can shape the region the particles are emitted from as a

* Box;
* Sphere;
* Cone;

by the addition of specific emitter function.

### Box Emitter

To create a box emitter you use, for example

```javascript
var boxEmitter = particleSystem.createBoxEmitter(new BABYLON.Vector3(-7, 8, 3), new BABYLON.Vector3(7, 8, -3), new BABYLON.Vector3(-1, 0, 0), new BABYLON.Vector3(1, 0, 0));
```
The `createBoxEmitter` method takes four parameters in the following order

* direction1: Vector3, 
* direction2: Vector3, 
* minEmitBox: Vector3, 
* maxEmitBox: Vector3

The returned `boxEmitter` object can be used to change the values of these properties.

```javascript
boxEmitter.direction1 = new BABYLON.Vector3(-5, 2, 1); 
boxEmitter.direction2 = new BABYLON.Vector3(5, 2, 1);  
boxEmitter.minEmitBox = new BABYLON.Vector3(-2, -3, -4);  
boxEmitter.maxEmitBox = new BABYLON.Vector3(2, 3, 4); 
```

* [Playground Example - Box Emitter](https://www.babylonjs-playground.com/#MRRGXL#1)

### Sphere Emitter

You can create a sphere emitter with a given radius, 1.2 for example,  using

```javascript
var sphereEmitter = particleSystem.createSphereEmitter(1.2);
```
The returned `sphereEmitter` object can be used to change the value of the radius.

The particles are emitted in the directions of the surface normals, ie the lines from the center of the sphere through a surface point.

* [Playground Example - Sphere Emitter](https://www.babylonjs-playground.com/#MRRGXL#2)

With `sphereEmitter.radiusRange` you can define where along the radius the particles should be emitted. A value of 0 means only on the surface while a value of 1 means all along the radius.

If you prefer to chose the emission direction, you can create a directed sphere emitter

```javascript
var sphereEmitter = particleSystem.createDirectedSphereEmitter(1.2, new BABYLON.Vector3(1, 1, 1), new BABYLON.Vector3(2, 8, 2));
```

The `createDirectedSphereEmitter` method takes three parameters in the following order

* radius: Number,
* direction1: Vector3, 
* direction2: Vector3, 
 

The returned `sphereEmitter` object can be used to change the values of these properties.

```javascript
sphereEmitter.radius = 3.4;
sphereEmitter.direction1 = new BABYLON.Vector3(-5, 2, 1); 
sphereEmitter.direction2 = new BABYLON.Vector3(5, 2, -1);    
```

The first parameter is the radius the second is direction1 and third is direction2. (The direction will be generated randomly between direction1 and direction2)

* [Playground Example - Sphere Emitter with Directions](https://www.babylonjs-playground.com/#MRRGXL#3)

### Cone Emitter

To create a cone emitter you use, for example

```javascript
var coneEmitter = particleSystem.createConeEmitter(2, Math.PI / 3);
```

The `createConeEmitter` method takes two parameters in the following order

* radius: Number;
* angle: Number, measured in radians, the vertex angle of the cone.

The cone is created with its axis along the Y-axis and its vertex at the bottom.

The returned `coneEmitter` object can be used to change the values of these properties.

```javascript
coneEmitter.radius = 3.4;
coneEmitter.angle = Math.PI / 2;    
```

* [Playground Example - Cone Emitter](https://www.babylonjs-playground.com/#MRRGXL#4)
* [Playground Example - Cone Emitter Rotating](https://www.babylonjs-playground.com/#MRRGXL#5)

## GPU Particles

Starting from Babylon.js v3.2, you can leverage a new WebGL2 feature, the transform feedback buffer, to drastically boost the performance of particles. Whereas regular particles use the CPU for animation and the GPU for rendering the new WebGL2 API allows Babylon.js to use the GPU for both animation and rendering. With GPU particles, everything is offloaded to the GPU.

Unfortunately this feature is only available when WebGL2 is available. You can use `BABYLON.GPUParticleSystem.IsSupported` to detect if GPU particles can be used. When they are supported, GPU particles can almost be used like regular particles:

```javascript
var particleSystem = new BABYLON.GPUParticleSystem("particles", { capacity:1000000 }, scene);
```

As CPU is no longer involved, you can go crazy with active particles (1000000 in this example). Also, you can use `particleSystem.activeParticleCount` to define the number of active particle count if you want to limit the GPU usage.

**Note:** Sub emitters are not supported in GPU particles.

### Random Texture
It is a shame but there is no good way to get random numbers when running on the GPU. To fill this gap, Babylon.js will create a texture filled with thousands of random values. These values will be read by the particle update shader to animate the particles.
By default the biggest supported texture size is used (16K). You may want to reduce the size of this texture by initializing the system like this:

```javascript
var particleSystem = new BABYLON.GPUParticleSystem("particles", { capacity:1000000, randomTextureSize: 4096 }, scene);
```

### Fallback
As the GPUParticleSystem and the ParticleSystem share almost all their API, it is easy to switch from one to another when WebGL2 is not supported. Keep in mind that the CPU cannot animate as many particles as the GPU can. So you will probably have to reduce the capacity of your system when not using the GPUParticleSystem.

### Stopping a GPU Particle System
When calling `system.stop()` on a `GPUParticleSystem` object, you will force the system to stop generating new particles. But particles will still be rendered even if not visible.

To completely stop a `GPUParticleSystem`, you have to call `dispose()` on it.

### Unsupported Features
The following features are not supported by GPU particles due to their inner nature:
- ManualEmitCount
- Custom effects
- Animation sheets
- disposeOnStop
- Dual values per gradient (only one value is supported)

### Playground

* [Playground Example - GPU Particles](https://www.babylonjs-playground.com/#PU4WYI#4)

## Next step
ParticleSystems are very powerful and versatile tools that can help bring realness and movement to your scenes. Don’t hesitate to use them as they are not resource-intensive.

Stay with us, because we are going to learn a new, very interesting thing: [Configuring your environment](/babylon101/Environment).

# Further Reading

## Basic - L1

[Particles Overview](/features/Particles)  
[Particle Helper](/How_To/ParticleHelper)  
[Mesh Overview](/features/Shapes)

[How to Create Animated Particles](/how_to/Animate)  
[How to Use Sub Emitters](/how_to/Sub_Emitters)

[Solid Particle System](/How_To/Solid_Particles)

## Intermediate - L2
[How to Customize the Particle System](/how_to/Customise)


