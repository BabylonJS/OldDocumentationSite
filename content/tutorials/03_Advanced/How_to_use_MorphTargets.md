# How to use Morph targets

Morph targets are a new feature introduced with Babylon.js v3.0.

![Morph Target Before](/img/tutorials/morphtargets0.jpg) ![Morph Target After](/img/tutorials/morphtargets.jpg)

### Basics
Meshes can be deformed by using morph targets. A morph target canbe built from a mesh with the **EXACT** same amount of vertices as the original mesh.
Morph targets are used by the GPU to create the final geometry by applying the following formula:

*final mesh = original mesh + sum((morph targets - original mesh) * morph targets influences)*

For instance you can use morph targets to simulate the opening of a mouth. The initial mesh has a closed mouth. The morph target can be the same mesh but with an opened mouth. Then by changing the influence of the morph target (from 0 to 1) you can display either a closed or an opened mouth or a mix of both.

You can find live examples here: 

- With Standard Material: http://www.babylonjs-playground.com/#HPV2TZ#2 
- With PBR Material: http://www.babylonjs-playground.com/#HPV2TZ#4 

### Using morph targets
To use morph targets, you first have to create a `MorphTargetManager` and affect it to a mesh:

```
var manager = new BABYLON.MorphTargetManager();
sphere.morphTargetManager = manager;
```

Then you can create `MorphTarget` either with the FromMesh static function:

```
var target3 = BABYLON.MorphTarget.FromMesh(sphere5, "sphere5", 0.25);
```

or simply by creating a target and specifying positions and normals:

```
var target = new BABYLON.MorphTarget(name, influence);
target.setPositions(...);
target.setNormals(...);
```

Once done, you can specify the influence of a specific target with `target.influence = 0.25'

Targets with influence = 0 are disabled.

### Limitations
Please be aware that most of the browsers are limited to 16 attributes per mesh. Adding a single morph target to a mesh add 2 new attributes (position + normal). This could quickly go beyond the max attributes limitation.
