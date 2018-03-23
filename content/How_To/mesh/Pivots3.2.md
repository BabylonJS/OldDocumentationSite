---
PG_TITLE: How To Use a Pivot
---

NOTE: BREAKING CHANGES FROM V3.2 THIS PAGE IS FOR VERSIONS FROM 3.2  
**Technically in v3.2 and later `setPivotMatrix` applies a transformation matrix after setting the pivot whereas earler versions do not. It follows that using code written for earlier version will not give the expected results when using v3.2 or later. To use v3.2 or later with your code and obtain the expected results simply add `false` as a second parameter when using the `setPivotMatrix` method preventing the transformation matrix being applied.**    
[Page for earlier versions](/how_to/pivots)

# A Pivot

A pivot in Babylon.js is the center of transformation for a mesh, that is the point used as the center of rotation or the center of enlargement. When a mesh is created the center of transformation is always at its local origin. To illustrate how to set and use a pivot the diagrams will use a small red box to show the pivot point, a grey box shows the intially created box and the green box is a copy of the grey one.

Rotations of a mesh always take place around its local origin. In other words the local origin of the mesh is the pivot of the mesh. 

![Initial Creation of The Box](/img/how_to/Mesh/pivot1.jpg)  
![Rotation about Local Origin](/img/how_to/Mesh/pivot0.jpg)

As can be seen in the above diagrams before setting a pivot the green box and the grey box have the same local origin and rotate about the same pivot.

A pivot an be set with a translation matrix or directly with the [_setPivotPoint_](/how_to/pivots#how-to-set-and-get-a-pivot-point) method.

## How To Set the Pivot Matrix.

When you set a pivot using a matrix the translation to use is the relative displacement of the pivot point to the local origin of the mesh. 

To have a pivot at (x, y, z) relative to the local origin of a mesh requires the applied translation to be (-x, -y, -z).

```javascript
mesh.setPivotMatrix(BABYLON.Matrix.Translation(-x, -y, -z));
```

In the first example the green and grey boxes have the following dimensions, 8, 4, and 2 in the x, y, and z directions respectively. The lower front right corner, therefore, has coordinates (4, -2, -1) and to place the pivot at the lower front right corner the translation needed is  (-4, 2, 1). This is done using

```javascript
greenBox.setPivotMatrix(BABYLON.Matrix.Translation(-4, 2, 1));
```
Giving

![setting pivot matrix](/img/how_to/Mesh/pivot2.jpg)

Now when you apply a rotation to the green box it will be about the pivot, which is of course its new local origin.

![rotated](/img/how_to/Mesh/pivot4.jpg)

* [Playground Example - Pivoted Mesh](https://www.babylonjs-playground.com/#AGXDE#23)

In the second example the same boxes are positioned at (6, 5, 3) and again the pivot is to be positioned at the lower front right corner. The lower front right corner is still the same position relative to the box and so the required translation is still (-4, -2, -1)

* [Playground Example - Pivoted Dsiplaced Mesh](https://www.babylonjs-playground.com/#AGXDE#28)

## Aligning Pivoted Meshes

Under the breaking change this is simply done by the appropriate aligned values for the positions of the meshes centres.

* [Playground Example - Aligned Pivoted Meshes](https://www.babylonjs-playground.com/#AGXDE#26)
* [Playground Example - Aligned Pivoted Meshes Rotated](https://www.babylonjs-playground.com/#AGXDE#27)

It is worth noting that when positioning a mesh its pivot will move with the same displacement. In the above playgrounds the red pivot markers are moved to the pivot position by adding the position of the mesh to the pivot position. 

## How To Set Pivot Position with World Space Coordinates

When you want to position a mesh with its centre at (xc, yc, zc) and a pivot at (xp, yp, zp) just follow these steps

1. Position the mesh at (xc, yc, zc);
2. Work out the translation that takes the pivot to the meshes centre (xc - xp, yc - yp, zc - zp);
3. Set the pivot matrix using this translation

In Javascript

```javascript
var centreAt = new BABYLON.Vector3(xc, yc, zc);
var pivotAt = new BABYLON.Vector3(xp, yp, zp);
mesh.position = centreAt;
var pivotTranslate = centreAt.subtract(pivotAt);
mesh.setPivotMatrix(BABYLON.Matrix.Translation(pivotTranslate.x, pivotTranslate.y, pivotTranslate.z));
```
The mesh will now be positioned with its centre at (xc, yc, zc) and all rotations and scaling will take place with reference to the pivot at (xp, yp, zp).

* [Playground Example - Rotation about a Pivot](https://www.babylonjs-playground.com/#AGXDE#29)
* [Playground Example - Scaling from a Pivot](https://www.babylonjs-playground.com/#AGXDE#30)

In the above playgrounds the sphere(s) show that rotation and scaling do take place with reference to the pivot.

## How To Reset the Pivot.

Simply recalculate the translation of the pivot to the local origin of the mesh.

In Javascript

```javascript
pivotAt = new BABYLON.Vector3(xp, yp, zp);
mesh.position = pivotAt;
pivotTranslate = centreAt.subtract(pivotAt);  //centreAt retained from previous pivot setting
mesh.setPivotMatrix(BABYLON.Matrix.Translation(pivotTranslate.x, pivotTranslate.y, pivotTranslate.z));
```
The following sequence of playgrounds goes from setting the first pivot position to scaling about the second pivot position

* [Playground Example - Set First Pivot](https://www.babylonjs-playground.com/#1MKHR9#23)
* [Playground Example - Set Second Pivot](https://www.babylonjs-playground.com/#1MKHR9#24)
* [Playground Example - Scaling from Second Pivot](https://www.babylonjs-playground.com/#1MKHR9#25)

**NOTE:** Resetting the pivot resets it relative to the unrotated mesh. That is if the mesh has been rotated before resetting the pivot the actual order remains reset pivot do rotation. A reset after a rotation will therefore move the mesh.

The following sequence of playgrounds shows setting the first pivot, rotating around the pivot then resetting the pivot.

* [Playground Example - Set First Pivot](http://www.babylonjs-playground.com/#1MKHR9#23)
* [Playground Example - Rotate About First Pivot](https://www.babylonjs-playground.com/#1MKHR9#26)
* [Playground Example - Set Second Pivot](https://www.babylonjs-playground.com/#1MKHR9#27)  

## How To Set and Get a Pivot Point

There are three useful functions to aid setting and getting a pivot point. These are

```javascript
mesh.setPivotPoint(Vector3);
mesh.getPivotPoint(); // returns Vector3
mesh.getAbsolutePivotPoint(); // returns Vector3
```

The following sequence of playgrounds goes from setting the first pivot point to scaling about the second pivot point

* [Playground Example - Set First Pivot Point](http://www.babylonjs-playground.com/#1MKHR9#17)
* [Playground Example - Set Second Pivot Point](http://www.babylonjs-playground.com/#1MKHR9#18)
* [Playground Example - Scaling from Second Pivot Point](http://www.babylonjs-playground.com/#1MKHR9#19)

**NOTE:** Resetting the pivot resets it relative to the unrotated mesh. That is if the mesh has been rotated before resetting the pivot the actual order remains reset pivot do rotation. A reset after a rotation will therefore move the mesh.

The following sequence of playgrounds shows setting the first pivot, rotating around the pivot then resetting the pivot.

* [Playground Example - Set First Pivot Point](http://www.babylonjs-playground.com/#1MKHR9#17)
* [Playground Example - Rotate About First Pivot Point](http://www.babylonjs-playground.com/#1MKHR9#20)
* [Playground Example - Set Second Pivot Point and Rotate](https://www.babylonjs-playground.com/#1MKHR9#28)

# Further Reading

## More Advanced - L3

[Using a Pivot before V3.2](/How_To/Pivots) 

[How To Rotate Around an Axis about a Point V3.2+](/How_To/Pivot3.2)  
[How To Rotate Around an Axis about a Point before V3.2](/How_To/Pivot)


