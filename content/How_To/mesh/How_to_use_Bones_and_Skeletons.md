---
ID_PAGE: 22421
PG_TITLE: How to use Bones and Skeletons
title: Use Bones and Skeletons
abstract: ''
slug: how-to-use-bones-and-skeletons
redirects:
  - /tutorials/how_to_use_bones_and_skeletons
---


# Bones and Skeletons
Babylon.js supports bones animations for your meshes.

![Bones](http://www.babylonjs.com/Screenshots/bones.jpg)

Basically a skeleton (```BABYLON.Skeleton```) contains a hierarchy of bones (```BABYLON.Bone```). A bone is defined by a name, a parent (can be null) and a transformation matrix.

Here are the constructors:
```
BABYLON.Skeleton = function (name, id, scene)
BABYLON.Bone = function (name, skeleton, parentBone, matrix)
```

Inside a skeleton, bones can be found inside the ```skeleton.bones``` array.

A bone can contain animations to animate its ```matrix``` property.

## Preparing mesh
A skeleton can be applied to a mesh through the ```mesh.skeleton``` property.

You should note that babylon.js supports up to **4 bones influences per vertex**.

The mesh must also have additional vertices data:
* _Matrices weights_: 4 floats to weight bones matrices (```mesh.setVerticesData(matricesWeights, BABYLON.VertexBuffer.MatricesWeightsKind, false)```)
* _Matrices indices_: 4 floats to index bones matrices (```mesh.setVerticesData(floatIndices, BABYLON.VertexBuffer.MatricesIndicesKind, false)```)

The final matrix applied to each vertex is computed as follows:
```
finalMatrix = worldMatrix * (bonesMatrices[index0] * weight0 + bonesMatrices[index1] * weight1 + bonesMatrices[index2] * weight2 + bonesMatrices[index3] * weight3)
```

On low-end hardware, the maximum bones influences per vertex is reduced to 3.

## Loading bones
Skeletons and bones can be loaded from .babylon files.

Here is a sample of how to load a boned mesh and how to launch skeleton animation:

```Javascript
BABYLON.SceneLoader.ImportMesh("him", "Scenes/Dude/", "Dude.babylon", scene, function (newMeshes, particleSystems, skeletons) {
    var dude = newMeshes[0];

    dude.rotation.y = Math.PI;
    dude.position = new BABYLON.Vector3(0, 0, -80);

    scene.beginAnimation(skeletons[0], 0, 100, true, 1.0);
}),
```

A complete running example can be found [here](http://www.babylonjs.com/index.html?BONES)

## Cloning bones
Bones and skeletons can be cloned (This is the case with the rabbits in the previous link).

Here is a sample of how to load and clone a mesh and its skeleton:

```Javascript
BABYLON.SceneLoader.ImportMesh("Rabbit", "Scenes/Rabbit/", "Rabbit.babylon", scene, function (newMeshes, particleSystems, skeletons) {
        var rabbit = newMeshes[1];

        rabbit.scaling = new BABYLON.Vector3(0.4, 0.4, 0.4);
        shadowGenerator.getShadowMap().renderList.push(rabbit);

        var rabbit2 = rabbit.clone("rabbit2");
        var rabbit3 = rabbit.clone("rabbit2");

        rabbit2.position = new BABYLON.Vector3(-50, 0, -20);
        rabbit2.skeleton = rabbit.skeleton.clone("clonedSkeleton");

        rabbit3.position = new BABYLON.Vector3(50, 0, -20);
        rabbit3.skeleton = rabbit.skeleton.clone("clonedSkeleton2");

        scene.beginAnimation(skeletons[0], 0, 100, true, 0.8);
        scene.beginAnimation(rabbit2.skeleton, 73, 100, true, 0.8);
        scene.beginAnimation(rabbit3.skeleton, 0, 72, true, 0.8);
    }),
```
## Cloning Complex Models
More complex models, such as the Dude, contain submeshes. When cloning you must iterate and clone the submeshes as well. Here is an example of how to clone a more complex model:

```Javascript
BABYLON.SceneLoader.ImportMesh("him", "Dude/", "dude.babylon", scene, function (newMeshes, particleSystems, skeletons) {

    newMeshes[0].position = new BABYLON.Vector3(0, 0, 5);  // The original dude
    scene.beginAnimation(skeletons[0], 0, 120, 1.0, true);

    dudes = [];

    for (i = 0; i < 10; i++) { // 10 clones
        var xrand = Math.floor(Math.random() * 501) - 250;
        var zrand = Math.floor(Math.random() * 501) - 250;

        var c = [];

        for (j = 1; j < newMeshes.length; j++) {
            c[j] = newMeshes[j].clone("c" + j);
            c[j].position = new BABYLON.Vector3(xrand, 0, zrand);
            c[j].skeleton = newMeshes[j].skeleton.clone();
            scene.beginAnimation(c[j].skeleton, 0, 120, 1.0, true);
        }
        dudes[i] = c;
    }
}
```

## Attaching a mesh to a specific bone
Starting with babylon.js v2.2, you can now attach a mesh to a bone (like a sword in the hand of your character for instance). To do so, just specify on which bone with the following code:
```
sword.attachToBone(skeleton.bones[34], character);
```

Please note that you also need to specify on which mesh the bone is currently applied.
You can find a sample [here]( https://www.babylonjs-playground.com/#11BH6Z#18)

## Rotating, Positioning, and Scaling bones

Starting with babylon.js v2.5, you can easily position, rotate, and scale bones.

Bones can be rotated and positioned in local space and world space.  To move a bone in world space, you must pass BABYLON.Space.WORLD and the mesh to the method.  If a space isn't passed to the method, then the bone is moved in local space (relative to the parent bone).


### Rotating

To rotate a bone around an axis, use the rotate function:
```
bone.rotate(axis, angle, BABYLON.Space.WORLD, mesh);
```
rotate world space [demo]( https://www.babylonjs-playground.com/#D4ZZ8#2)

rotate local space [demo]( https://www.babylonjs-playground.com/#D4ZZ8#4)

setAxisAngle, setYawPitchRoll, setRotation, or setRotationMatrix are used to rotate a bone to a specific rotation.

```
bone.setAxisAngle(axis, angle, BABYLON.Space.WORLD, mesh);
```
setAxisAngle world space [demo 1]( https://www.babylonjs-playground.com/#D4ZZ8#8), [demo 2]( https://www.babylonjs-playground.com/#D4ZZ8#9)

setAxisAngle local space [demo 1]( https://www.babylonjs-playground.com/#D4ZZ8#10), [demo 2]( https://www.babylonjs-playground.com/#D4ZZ8#11)
```
bone.setYawPitchRoll(yaw, pitch, roll, BABYLON.Space.WORLD, mesh);
```
[demo]( https://www.babylonjs-playground.com/#I6RJJ#56)
```
bone.setRotation(rotation, BABYLON.Space.WORLD, mesh);
```
[demo]( https://www.babylonjs-playground.com/#I6RJJ#60)
```
bone.setRotationQuaternion(quat, BABYLON.Space.WORLD, mesh);
```
[demo]( https://www.babylonjs-playground.com/#I6RJJ#61)
```
bone.setRotationMatrix(rotMat, BABYLON.Space.WORLD, mesh);
```
[demo]( https://www.babylonjs-playground.com/#I6RJJ#57)


Use getRotation or getRotationToRef to get the Vector3 rotation of a bone.

```
var rotation = bone.getRotation(BABYLON.Space.WORLD, mesh);
```
```
var rotation = BABYLON.Vector3.Zero();

bone.getRotationToRef(BABYLON.Space.WORLD, mesh, rotation);
```
[demo]( https://www.babylonjs-playground.com/#1EVNNB#12)

Use getRotationQuaternion or getRotationQuaternionToRef to get the Quaternion rotation of a bone.

```
var rotationQuaternion = bone.getRotationQuaternion(BABYLON.Space.WORLD, mesh);
```
```
var rotationQuaternion = BABYLON.Vector3.Zero();

bone.getRotationQuaternionToRef(BABYLON.Space.WORLD, mesh, rotationQuaternion);
```
[demo]( https://www.babylonjs-playground.com/#1EVNNB#11)

### Positioning

To change the position of a bone, you can rotate the parent bone, or you can leave the parent where it is and directly modify the position of the bone.

One way to do this is by translating the bone from its current position.
```
bone.translate(x, y, z, BABYLON.Space.WORLD, mesh);
```
[demo]( https://www.babylonjs-playground.com/#1BZJVJ#32)

If you need to set the bone to a specific location, use setPosition.
```
bone.setPosition(pos, BABYLON.Space.WORLD, mesh);
```
[demo 1]( https://www.babylonjs-playground.com/#1BZJVJ#33), [demo 2]( https://www.babylonjs-playground.com/#1BZJVJ#34)

To get the position of a bone, use getPosition or getPositionToRef.
```
var pos = bone.getPosition(BABYLON.Space.WORLD, mesh);
```
```
var pos = BABYLON.Vector3.Zero();

bone.getPositionToRef(BABYLON.Space.WORLD, mesh, pos);
```
[demo]( https://www.babylonjs-playground.com/#1EVNNB#14)

### Scaling

You can scale a bone on the local x, y, z axes of the bone.
```
bone.scale(scaleX, scaleY, scaleZ);
```
[demo]( https://www.babylonjs-playground.com/#1EVNNB#9)

The setScale function is used to set a bone to a certain scale value.
```
bone.setScale(scaleX, scaleY, scaleZ);
```
setScale is used in this [demo]( https://www.babylonjs-playground.com/#1EVNNB#10) every frame, because the character's animation resets the scale of the bones.

The last parameter of scale and setScale is scaleChildren.  Set scaleChildren to true if you want the scale to affect all the children / descendants of the bone.

[demo]( https://www.babylonjs-playground.com/#1BZJVJ#30)

Use getScale or getScaleToRef to get the current scale of a bone.

```
var scale = bone.getScale();
```
```
var scale = BABYLON.Vector.Zero();
bone.getScaleToRef(scale);
```



## Bone Controllers

Babylon.js v2.5 also introduced Bone controllers.


### BoneLookController

The BoneLookController class is used to make a bone look toward a point in space.

With some bones, you will need to adjust the yaw, pitch, roll to get the bone to look in the right direction.

```
var target = BABYLON.MeshBuilder.createSphere();
var lookCtrl = new BABYLON.BoneLookController(characterMesh, headBone, target.position, {adjustYaw:Math.PI*.5, adjustPitch:Math.PI*.5, adjustRoll:Math.PI});

scene.registerBeforeRender(function(){

   lookCtrl.update();

});
```

[demo]( https://www.babylonjs-playground.com/#1B1PUZ#15)


### BoneIKController

Inverse Kinematics (IK) is used to rotate a chain of bones so that the end of the first bone is at or closest to a target point.  It's often used to rotate the limbs of a character.

The BoneIKController class is modeled after Blender's IK Bone Constraint, but is currently limited to 2 bones.

To use the BoneIKController, you must first create a target mesh and a pole target mesh.
```  
var target = BABYLON.MeshBuilder.CreateSphere('', { diameter: 5 }, scene);
var poleTarget = BABYLON.MeshBuilder.CreateSphere('', {diameter: 2.5}, scene);
```
The bones will reach for the target mesh and the position of the pole target will determine how the joint between the bones will bend.

You most likely will want to parent your character to the pole target mesh so that it will move relative to the character.
```
poleTarget.parent = characterMesh;
```
The BoneIKController constructor takes the mesh of the character, the bone that will be closest to the target, the target, and an options param.  The currently list of options are:

targetMesh,
poleTargetMesh,
poleTargetBone,
poleTargetLocalOffset,
poleAngle,
bendAxis,
maxAngle

```
var ikCtrl = new BABYLON.BoneIKController(characterMesh, forearmBone, {targetMesh:target, poleTargetMesh:poleTarget, poleAngle:Math.PI});
```

To use the controller, simply call the controller's update function before the scene is rendered.

```
scene.registerBeforeRender(function(){

   ikCtrl.update();

});
```

[demo]( https://www.babylonjs-playground.com/#1EVNNB#15)

If you used a mesh for a target, you can hide it by setting enabled to false.
```
target.setEnabled(false);
poleTarget.setEnabled(false);
```


## Performance considerations
Bones are computed using shaders by default. This allows better performance. But on low end devices shaders could be limited and not able to process bones. You can in this case ask Babylon.js to compute bones using CPU by setting mesh.computeBonesUsingShaders = false.
