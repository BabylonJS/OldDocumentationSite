---
PG_TITLE: How To Optimize Your Scene
---

# How To Optimize Your Scene

This tutorial will help you find some links and info on how you can improve your scene regarding rendering performance.

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

## Instrumentation
Instrumentation is a key tool when you want to optimize a scene. It will help you figure out where are the bottlenecks so you will be able to optmize what needs to be optimized.

### EngineInstrumentation
The EngineInstrumentation class allows you to get the following counters:
* *gpuFrameTimeCounter*: Time (in nanoseconds) spent by the GPU to render a single frame. Must be turned on with `instrumentation.captureGPUFrameTime = true`.
* *shaderCompilationTimeCounter*: Time (in milliseconds) spent by the CPU to compile all shaders. Must be turned on with `instrumentation.captureShaderCompilationTime = true`.

Here is an example of how to use engine instrumentation:
https://www.babylonjs-playground.com/#HH8T00#1

Please note that each counter is *PerfCounter* object which can provide multiple properties like average, total, min, max, count, etc.

### SceneInstrumentation
The SceneInstrumentation class allows you to get the following counters (per scene):
* *activeMeshesEvaluationTimeCounter*: Time (in milliseconds) spent to evaluable active meshes (based on active camra frustum). Must be turned on with `instrumentation.captureActiveMeshesEvaluationTime = true`.
* *renderTargetsRenderTimeCounter*: Time (in milliseconds) spent to render all render target textures. Must be turned on with `instrumentation.captureRenderTargetsRenderTime = true`.
* *frameTimeCounter*: Time (in milliseconds) spent to render an entire frame (including all cameras). Must be turned on with `instrumentation.captureFrameTime = true`.

Here is an example of how to use scene instrumentation:

# Further Reading

## More Advanced - L3

[How to Use Scene Optimizer](/How_To/How_to_use_SceneOptimizer)  
[How To Optimize Your Scene With Octrees](/How_To/optimizing_your_scene_with_octrees)

