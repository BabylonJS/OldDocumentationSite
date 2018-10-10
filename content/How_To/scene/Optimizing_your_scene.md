---
PG_TITLE: How To Optimize Your Scene
---

# How To Optimize Your Scene

This tutorial will help you find some links and info on how you can improve your scene regarding rendering performance.

## Use TransformNode instead of AbstractMesh or empty meshes

If you need node containers or transform nodes, do not use meshes but TransformNode instead. Use meshes only when associated with content to render.

The meshes need to go through an evaluation process where the camera checks if they are in the frustum. This is an expensive process so reducing the number of candidates by using TransformNode when possible is a good practice.

## Changing per mesh culling strategy

Starting with Babylon.js v3.3, you can now specify a strategy used to cull a specific mesh with `mesh.cullingStrategy`.

You can set it to:
- `BABYLON.AbstractMesh.CULLINGSTRATEGY_STANDARD`: This is the default value and it will use a combination of bounding sphere culling, bounding box culling and then frustum culling
- `BABYLON.AbstractMesh.CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY`: This strategy will use a bounding sphere culling and then frustum culling. This is faster than the standard one but can imply having more meshes sent to the GPU. **Really useful if you are CPU bound**.

## Reducing Shaders Overhead
Babylon.js uses an advanced and automatic shaders engine. This system will keep shaders up to date regarding material options. If you are using a static material (ie. an immutable material) then you can let it know to Babylon.js by using the following code:

```
material.freeze();
```

Once frozen, the shader will remain unchanged even if you change material's properties. You will have to unfreeze it to update the inner shader:

```
material.unfreeze();
```

## Reducing World Matrices Computation
Every mesh has a world matrix to specify its position / rotation / scaling. This matrix is evaluated on every frame. You can improve performances by freezing this matrix. Any subsequent changes to position / rotation / scaling will then be ignore:

```
mesh.freezeWorldMatrix();
```

You can unfreeze a mesh with:

```
mesh.unfreezeWorldMatrix();
```

## Freezing the active meshes
If you are CPU bound, you can decide to keep the list of active meshes unchanged and then free the time spent by the CPU to determine active meshes:

```
scene.freezeActiveMeshes();
```

You can unfreeze the active meshes with:

```
scene.unfreezeActiveMeshes();
```

Note that you can force a mesh to be in the active meshes before freezing the list with `mesh.alwaysSelectAsActiveMesh = true`.

## Reducing draw calls
As soon as you can please use [instances](/How_To/how_to_use_instances) as they are drawn with one single draw call.

If sharing the same material is a problem, you can then think about using clones which share the same geometry with `mesh.clone("newName")`

## Reducing calls to gl.clear()
By default, Babylon.js automatically clears the color, depth, and stencil buffers before rendering the scene. It also clears the depth and stencil buffers after switching to a new camera and before rendering a new RenderingGroup. On systems with poor fill rates, these can add up quickly and have a significant impact on performance.

If your scene is set up in such a way that the viewport is always 100% filled with opaque geometry (if you're always inside a skybox, for instance), you can disable the default scene clearing behavior with:

```
scene.autoClear = false; // Color buffer
scene.autoClearDepthAndStencil = false; // Depth and stencil, obviously
```

If you know that the geometry in a particular RenderingGroup will always be positioned in front of geometry from other groups, you can disable buffer clearing for that group with the following:

```
scene.setRenderingAutoClearDepthStencil(renderingGroupIdx, autoClear, depth, stencil);
```
```autoClear```: ```true``` to enable auto clearing. If ```false```, overrides ```depth``` and ```stencil```

```depth```: Defaults to ```true``` to enable clearing of the depth buffer

```stencil```: Defaults to ```true``` to enable clearing of the stencil buffer

Go ahead and be aggressive with these settings. You'll know if it's not appropriate for your application if you see any smearing!

## Using depth pre-pass
When dealing with complex scenes, it could be useful to use depth pre-pass. This technique will render designated meshes only in the depth buffer to leverage early depth test rejection. This could be used for instance when a scene contains meshes with advanced shaders.
To enable a depth pre-pass for a mesh, just call `mesh.material.needDepthPrePass = true`.

## Using unindexed meshes
By default Babylon.js uses indexed meshes where vertices can be reuse by faces. When vertex reuse is low and when vertex structure is fairly simple (like just a position and a normal) then you may want to unfold your vertices and stop using indices:

```
mesh.convertToUnIndexedMesh();
```
For example this works very well for a cube where it is more efficient to send 32 positions instead of 24 positions and 32 indices.

## Turning AdaptToDeviceRatio Off
By default, Babylon.js will adapt to device ratio in order to produce the best possible quality even on high-DPI devices.

The drawback is that this could cost a lot on low-end devices. You can turn it off with the fourth parameter of the Engine constructor:

```
var engine = new BABYLON.Engine(canvas, antialiasing, null, false);
```

In the same constructor, you may also want to turn off antialiasing support with the second parameter.

## Blocking the dirty mechanism

By default the scene will keep all materials up to date when you change a property that could potentially impact them (alpha, texture update, etc...). To do so the scene needs to go through all materials and flag them as dirty. This could be a potential bottleneck if you have a lot of material.

To prevent this automatic update, you can execute:

```
scene.blockMaterialDirtyMechanism = true;
```

Do not forget to restore it to false when you are done with your batch changes.

## Using Animation Ratio
Babylon.js processes speed depending on the current frame rate.

On low-end devices animations or camera movement may differ from high-end devices. To compensate this you can use:

```
scene.getAnimationRatio();
```

The return value is higher on low frame rates.

## Handling WebGL context lost
Starting with version 3.1, Babylon.js can handle [WebGL context lost event](https://www.khronos.org/registry/webgl/specs/latest/1.0/#5.14.13). This event is raised by the browser when the GPU needs to be taken away from your code. This can happen for instance when using WebVR in hybrid scenario (with multiple GPU). In this case, Babylon.js has to recreate ALL low level resources (including textures, shaders, program, buffers, etc.). The process is entirely transparent and done under the hood by Babylon.js.

As a developer you should not be concerned by this mechanism. However, to support this scenario, Babylon.js may need an additional amount of memory to keep track of resources creation. If you do not need to support WebGL context lost event, you can turn off the tracking by instantiating your engine with doNotHandleContextLost option set to true.

If you created resources that need to be rebuilt (like vertex buffers or index buffers), you can use the `engine.onContextLostObservable` and `engine.onContextRestoredObservable` observables to keep track of the context lost and context restored events.

## Scene with large number of meshes
If you have a large number of meshes in a scene, and need to reduce the time spent in adding/removing thoses meshes to/from the scene, There are several options of the `Scene` constructor that can help :
 - Setting the option `useGeometryIdsMap` to `true` will speed-up the addition and removal of `Geometry` in the scene.
 - Setting the option `useMaterialMeshMap` to `true` will speed-up the disposing of `Material` by reducing the time spent to look for bound meshes.
 - Setting the option `useClonedMeshMap` to `true` will speed-up the disposing of `Mesh` by reducing the time spent to look for associated cloned meshes.

For each of this options turned on, Babylon.js will need an additional amount of memory.

Also, If you are disposing a large number of meshes in a row, you can save unecessary computation by turnning the scene property `blockfreeActiveMeshesAndRenderingGroups` to true just before disposing the meshes, and set it back to `false` just after, like this :
````javascript

scene.blockfreeActiveMeshesAndRenderingGroups = true;
/*
 * Dispose all the meshes in a row here
 */
scene.blockfreeActiveMeshesAndRenderingGroups = false;

````
## Instrumentation
Instrumentation is a key tool when you want to optimize a scene. It will help you figure out where are the bottlenecks so you will be able to optmize what needs to be optimized.

### EngineInstrumentation
The EngineInstrumentation class allows you to get the following counters:
* *gpuFrameTimeCounter*: Time (in nanoseconds) spent by the GPU to render a single frame. Must be turned on with `instrumentation.captureGPUFrameTime = true`.
* *shaderCompilationTimeCounter*: Time (in milliseconds) spent by the CPU to compile all shaders. Must be turned on with `instrumentation.captureShaderCompilationTime = true`.

Here is an example of how to use engine instrumentation:
https://www.babylonjs-playground.com/#HH8T00#1

Please note that each counter is *PerfCounter* object which can provide multiple properties like average, total, min, max, count, etc.

GPU timer require a special extension (EXT_DISJOINT_TIMER_QUERY) in order to work. This extension has been disabled due to Spectre and Meltdown on all major browsers. This is still possible to use by enabling the flag gfx.webrender.debug.gpu-time-queries on firefox at the moment. This should be re-enabled soon in the browsers.

### SceneInstrumentation
The SceneInstrumentation class allows you to get the following counters (per scene):
* *activeMeshesEvaluationTimeCounter*: Time (in milliseconds) spent to evaluable active meshes (based on active camra frustum). Must be turned on with `instrumentation.captureActiveMeshesEvaluationTime = true`.
* *renderTargetsRenderTimeCounter*: Time (in milliseconds) spent to render all render target textures. Must be turned on with `instrumentation.captureRenderTargetsRenderTime = true`.
* *drawCallsCounter*: Number of draw calls (actual calls to engine.draw) per frame. A good advice is to keep this number as small as possible.
* *textureCollisionsCounter*: Number of time a texture has to be removed to free a texture slot. Generally, there are 16 texture slots on most recent hardwares. Babylon.js will try to use all of them as the process of binding a texture is expensive. It is a good idea to try to keep this number as low as possible.
* *frameTimeCounter*: Time (in milliseconds) spent to process an entire frame (including animations, physics, render targets, special fx, etc.). Must be turned on with `instrumentation.captureFrameTime = true`.
* *renderTimeCounter*: Time (in milliseconds) spent to render a frame. Must be turned on with `instrumentation.captureRenderTime = true`.
* *interFrameTimeCounter*: Time (in milliseconds) spent between two frames. Must be turned on with `instrumentation.captureInterFrameTime = true`.
* *particlesRenderTimeCounter*: Time (in milliseconds) spent rendering particles (including animations). Must be turned on with `instrumentation.captureParticlesRenderTime = true`.
* *spritesRenderTimeCounter*: Time (in milliseconds) spent rendering sprites. Must be turned on with `instrumentation.captureSpritesRenderTime = true`.
* *physicsTimeCounter*: Time (in milliseconds) spent simulating physics. Must be turned on with `instrumentation.capturePhysicsTime = true`.
* *cameraRenderTimeCounter*: Time (in milliseconds) spent to render a camera. Must be turned on with `instrumentation.captureCameraRenderTime = true`.

Those counters are all resetted to 0 at the beginning of each frame. Therefore it is easier to access them in the onAfterRender callback or observable.

# Further Reading

## More Advanced - L3

[How to Use Scene Optimizer](/How_To/How_to_use_SceneOptimizer)
[How To Optimize Your Scene With Octrees](/How_To/optimizing_your_scene_with_octrees)

