---
PG_TITLE: How To Use a Parent
---

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


