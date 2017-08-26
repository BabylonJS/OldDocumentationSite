This tutorial will help you find some links and info on how you can improve your scene regarding rendering performance.

# Reducing shaders overhead
Babylon.js uses an advanced and automatic shaders engine. This system will keep shaders up to date regarding material options. If you are using a static material (ie. an immutable material) then you can let it know to Babylon.js by using the following code:

```
material.freeze();
``` 

Once frozen, the shader will remain unchanged even if you change material's properties. You will have to unfreeze it to update the inner shader:

```
material.unfreeze();
```

# Reducing world matrices computation
Every mesh has a world matrix to specify its position / rotation / scaling. This matrix is evaluated on every frame. You can improve performances by freezing this matrix. Any subsequent changes to position / rotation / scaling will then be ignore:

```
mesh.freezeWorldMatrix();
```

You can unfreeze a mesh with:

```
mesh.unfreezeWorldMatrix();
```

# Reducing draw calls
As soon as you can please use instances as they are drawn with one single draw call: http://doc.babylonjs.com/how_to/how_to_use_instances

If sharing the same material is a problem, you can then think about using clones which share the same geometry with `mesh.clone("newName")`

# Using unindexed meshes
By default Babylon.js uses indexed meshes where vertices can be reuse by faces. When vertex reuse is low and when vertex structure is fairly simple (like just a position and a normal) then you may want to unfold your vertices and stop using indices:

```
mesh.convertToUnIndexedMesh();
```
For example this works very well for a cube where it is more efficient to send 32 positions instead of 24 positions and 32 indices.

# Turning AdaptToDeviceRatio off
By default, Babylon.js will adapt to device ratio in order to produce the best possible quality even on high-DPI devices.

The drawback is that this could cost a lot on low-end devices. You can turn it off with the fourth parameter of the Engine constructor:

```
var engine = new BABYLON.Engine(canvas, antialiasing, null, false);
```

In the same constructor, you may also want to turn off antialiasing support with the second parameter.

# Using animation ratio
Babylon.js processes speed depending on the current frame rate.

On low-end devices animations or camera movement may differ from high-end devices. To compensate this you can use:

```
scene.getAnimationRatio();
```

The return value is higher on low frame rates.

# Other useful how_to
* [Optimizing meshes selection for rendering](http://doc.babylonjs.com/how_to/Optimizing_Your_Scene_with_Octrees)
* [How to use scene optimizer](http://doc.babylonjs.com/how_to/How_to_use_SceneOptimizer)
* [Optimizing your scene with octrees](http://doc.babylonjs.com/how_to/optimizing_your_scene_with_octrees)
