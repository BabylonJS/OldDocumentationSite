---
ID_PAGE: 22571
PG_TITLE: How to use Instances
---

# How to use Instances
Instances are an excellent way to use hardware accelerated rendering to draw a huge number of identical meshes (let's imagine a forest or an army).

Instances are built from a mesh with the following code:

```javascript
// In this case we're loading our mesh from an external source.
BABYLON.SceneLoader.ImportMesh("", "//www.babylonjs.com/assets/Tree/", "tree.babylon", scene, function (newMeshes) {
    var mesh = newMeshes[0];
    // Make the "root" mesh not visible. The instanced versions of it that we
    // create below will be visible.
    mesh.isVisible = false;
    for (var index = 0; index < 100; index++) {
        var newInstance = mesh.createInstance("i" + index);
        // Here you could change the properties of your individual instance,
        // for example to form a diagonal line of instances:
        //  newInstance.position.x = index;
        //  newInstance.position.z = index;
        // See below for more details on what can be changed.
    }
});
```
A mesh can have as many instances as you want.

Each instance has the same material as the root mesh. They can only vary on the following properties:
* ```position```
* ```rotation```
* ```rotationQuaternion```
* ```setPivotMatrix```
* ```scaling```

# Support
Instances are supported for collisions, picking, rendering and shadows. Even if the current hardware does not support hardware accelerated instances, babylon.js will be able to optimize rendering to take instances into account.

# Using Blender to create instances
Using Blender, you can create instances of a mesh by just creating a linked object:

![](https://www.html5gamedevs.com/uploads/monthly_05_2014/post-7026-0-82151000-1401073383.jpg)

# Using 3DS Max to create instances
Using 3DS Max, you can create instances of a mesh by just creating a clone instance object with clic right on the object:

![](https://www.html5gamedevs.com/uploads/monthly_11_2014/post-5292-0-54659600-1415793353.jpg)

# Limitations
You can use instances with LOD but one limitation will apply in this case: You will have to hide the root objects.
Here is an example where LODs reuse instances:
https://www.babylonjs-playground.com/#0720FC#10

If you want to create an instance from a cloned mesh, you have to first make sure that you call clonedMesh.makeGeometryUnique().

# Demo
https://www.babylonjs-playground.com/#YB006J#75
