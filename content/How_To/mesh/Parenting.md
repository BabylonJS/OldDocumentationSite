# Overview of a Parent

Making mesh P a parent of mesh C changes the frame of reference for mesh C to the local axes of mesh P. Re-positioning, rotating or scaling mesh P will apply the same transformations to mesh C. Positioning, rotation and scaling of mesh C will depend on the position and orientation of the local axes of C relative to those of P.

To parent mesh C to mesh P you use any of these three methods

```javascript
meshC.parent = meshP;  //1
meshC.setParent(meshP); //2
meshP.addChild(meshC); //3
```

The order you set transformations, such as position or rotation, to the parent mesh will affect the result using methods 2 and 3 above.

The following playgrounds show the different behaviors

* [Playground Example - Transform C and P After Parenting](https://www.babylonjs-playground.com/#NRNBMM)
* [Playground Example - Transform C Before and P After Parenting](https://www.babylonjs-playground.com/#NRNBMM#1)
* [Playground Example - Transform P Before and C After Parenting](https://www.babylonjs-playground.com/#NRNBMM#2)
* [Playground Example - Transform C and P Before Parenting](https://www.babylonjs-playground.com/#NRNBMM#3)


To remove a child, mesh C, from a parent, mesh P you use any of 

```javascript
meshC.parent = null;
meshC.setParent(null);
meshP.removeChild(meshC);
```
The following playground shows that setting a child's parent mesh P, directly to null, `meshC.parent = null`, not only removes the parent from the child, mesh C (red), but also removes from mesh C any transformation applied via mesh P leaving only the transformations applied directly to mesh C. Using this method, on the removal of the parent, the position, rotation and scale of mesh C will be seen as changed in the scene view. The other two methods, `meshC.setParent(null)` and `meshP.removeChild(meshC)`, just removes the link to the parent and any transformation to mesh C applied via mesh P up to the point of removal will remain. Using these methods, on the removal of the parent, the position, rotation and scale of mesh C will be seen as as the same in the scene view.

* [Playground Example - Removing a Parent](https://www.babylonjs-playground.com/#XQI4UY#19)

# How To Use a Parent

The parent method for these examples can be directly compared to [transforming coordinates](/How_To/Transform_Coordinates) 

## Satellite

Take a box that is rotating and translating from the top of which emerges a smaller box and travels in a direction always perpendicular to the top face of the box. 

By parenting the smaller box to the box rotations, positions and scaling given to the parent are also applied to the child. Rotations, positions and scaling given to the child take place inside the frame of reference of the parent. 

The following code gives the animation.

```javascript
    scene.registerAfterRender(function () {
        box.rotate(BABYLON.Axis.Y, Math.PI / 150, BABYLON.Space.LOCAL);
        box.rotate(BABYLON.Axis.X, Math.PI / 200, BABYLON.Space.LOCAL);
        box.translate(new BABYLON.Vector3(-1, -1, -1).normalize(), 0.001, BABYLON.Space.WORLD)
        y += 0.001;
        small.translate(BABYLON.Axis.Y, 0.001, BABYLON.Space.LOCAL) 
    })
```

* [Playground Animation - Parent](https://www.babylonjs-playground.com/#XQI4UY#1)

## Disc World

Imagine a disc flying around space with building on it. In fact the following example uses a thin cylinder as the disc since the top circular face is horizontal whilst the face of a disc in Babylon.js is vertical. (OK it does make any real difference but it more natural to start with a horizontal ground).

The building will be an array of boxes with each box parented to the disc.

```javascript
    var phi = 0;
    scene.registerAfterRender(function () {
        matrix = disc.getWorldMatrix();
        disc.rotate(BABYLON.Axis.Y, Math.PI / 150, BABYLON.Space.LOCAL);
        disc.rotate(BABYLON.Axis.Z, Math.PI / 200, BABYLON.Space.LOCAL);
        disc.position = new BABYLON.Vector3(15 * Math.cos(phi), 16 * Math.sin(phi), 5)
        phi +=0.01;
    });
```
* [Playground Animation - Disc World](https://www.babylonjs-playground.com/#XQI4UY#3)

# Further Reading

[How To Transform Coordinates](/How_To/Transform_Coordinates)  
[Frame of Reference](/resources/Frame_Of_Reference)


