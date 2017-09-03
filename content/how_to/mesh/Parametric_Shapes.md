---
PG_TITLE: Parametric Shapes
---

# How To Create Parametric Shapes

## Names
The appearance of the set shapes can generally be determined by their name. This is not true of parametric shapes which through their parameters can be bent, and twisted and turned. 

## Updatable

Where a parametric shape has an updatable parameter in its options it means that it is possible to alter the data associated with each vertex of the mesh and so alter the shape of the mesh. For more information see [Updating Vertices](/tutorials/Updating_Vertices.html).

When in addition the shape has an instance parameter in its options then its shape can be updated by using MeshBuilder with instance set to the name of the shape. 

In practice all the parametric shapes, except for the Lathe and Polygon (both Create and Extend), can have their shape updated in this way by using the already created instance of the mesh.

## Lines
Creates a continguous series of line segments from a list of points.
You must set at least the _points_ property.
On update, you must set the _points_ and _instance_ properties.

Example :
```javascript
//creates lines
var lines = BABYLON.MeshBuilder.CreateLines("lines", {points: myArray}, scene);

// updates the existing instance of lines : no need for the parameter scene here
lines = BABYLON.MeshBuilder.CreateLines("lines", {points: myArray, instance: lines});

```
Properties :

property|value|default value
--------|-----|-------------
points|_(Vector3[])_  array of Vector3, the path of the line **REQUIRED**
updatable|_(boolean)_ true if the mesh is updatable|false
instance|_(LineMesh)_ an instance of a line mesh to be updated|null

[A Playground Example of Lines](http://www.babylonjs-playground.com/#165IV6#8)

## Dashed Lines
Creates a continguous series of dashed line segments from a list of points.
You must set at least the _points_ property.
On update, you must set the _points_ and _instance_ properties.

Example :
```javascript
// creates an instance of dashedlines
var dashedLines = BABYLON.MeshBuilder.CreateDashedLines("dl", {points: myArray}, scene);

// updates the existing instance of dashedLines : no need for the parameter scene here
dashedLines = BABYLON.MeshBuilder.CreateDashedLines("dl", {points: myArray, instance: dashedLines});
```
Properties :

property|value|default value
--------|-----|-------------
points|_(Vector3[])_  array of Vector3, the path of the line **REQUIRED** |
dashSize|_(number)_  size of the dashes|3
gapSize|_(number)_  size of the gaps|1
dashBn|_(number)_  intended number of dashes|200
updatable|_(boolean)_ true if the mesh is updatable|false
instance|_(LineMesh)_ an instance of a line mesh to be updated|null

[A Playground Example of Dashed Lines](http://www.babylonjs-playground.com/#165IV6#9)

## Line System  
A system of lines that are independent of each other and may exist in their own space.
You must set at least the _lines_ property.
On update, you must set the _lines_ and _instance_ properties.

Example :
```javascript
// creates an instance of a line system
var lineSystem = BABYLON.MeshBuilder.CreateLineSystem("lineSystem", {lines: myArray}, scene);

// updates the existing instance of lineSystem : no need for the parameter scene here
lineSystem = BABYLON.MeshBuilder.CreateLineSystem("lineSystem", {lines: myArray, instance: lineSystem});

```
Properties :

property|value|default value
--------|-----|-------------
lines|_(Vector3[])_  array of lines, each line being an array of successive Vector3 **REQUIRED**
updatable|_(boolean)_ true if the mesh is updatable|false
instance|_(LineMesh)_ an instance of a line system mesh to be updated|null

[A Playground Example of a Linesystem](http://www.babylonjs-playground.com/#165IV6#8)

## Ribbon
You must set at least the _pathArray_ property.
On update, you must set the _pathArray_ and _instance_ properties.

Example :
```javascript
// creates an instance
var ribbon = BABYLON.MeshBuilder.CreateRibbon("ribbon", {pathArray: myPaths}, scene);

// updates the existing instance of ribbon : no need for the parameter scene
ribbon = BABYLON.MeshBuilder.CreateRibbon("ribbon", {pathArray: myPaths, instance: ribbon});
```
Properties :

property|value|default value
--------|-----|-------------
pathArray|_(Vector3[][])_  array of array of Vector3, the array of paths **REQUIRED**
closeArray|_(boolean)_  to force the ribbon to join its last and first paths|false
closePath|_(boolean)_  to force each ribbon path to join its last and first points|false
offset|_(number)_  used if the pathArray has one path only|half the path length
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE
frontUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE is an option** | Vector4(0,0, 1,1) 
backUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE is an option** | Vector4(0,0, 1,1) 
instance|_(LineMesh)_ an instance of a ribbon to be updated|null
invertUV|_(boolean)_ to swap the U and V coordinates at geometry construction time (texture rotation of 90°)|false

[A Playground Example of a Ribbon](http://www.babylonjs-playground.com/#165IV6#13)

## Tube
You must set at least the _path_ property.
On update, you must set the _path_ and _instance_ properties and you can set the _radius_, _radiusFunction_ or _arc_ properties.

Example :
```javascript
// creates a tube
var tube = BABYLON.MeshBuilder.CreateTube("tube", {path: myPath}, scene);

// updates the existing instance of tube : no need for the parameter scene
tube = BABYLON.MeshBuilder.CreateTube("tube", {path: myPath, instance: tube});

```
Properties :

property|value|default value
--------|-----|-------------
path|_(Vector3[])_  array of Vector3, the path of the tube **REQUIRED** |
radius|_(number)_  the radius of the tube|1
tessellation|_(number)_  the number of radial segments|64
radiusFunction|_( function(i, distance) )_  a function returning a radius value from _(i, distance)_ parameters|null
cap|_(number)_ tube cap : NO_CAP, CAP_START, CAP_END, CAP_ALL|NO_CAP
arc|_(number)_ ratio of the tube circumference between 0 and 1|1
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE
frontUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE is an option** | Vector4(0,0, 1,1) 
backUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE is an option** | Vector4(0,0, 1,1) 
instance|_(LineMesh)_ an instance of a tube to be updated|null
invertUV|_(boolean)_ to swap the U and V coordinates at geometry construction time (texture rotation of 90°)|false

[A Playground Example of a Tube](http://www.babylonjs-playground.com/#165IV6#15)

## Extruded Shapes
You must set at least the _shape_ and _path_ properties.
On update, you must set the _shape_, _path_ and _instance_ properties and you can set the _scale_ and _rotation_ properties.

In whatever direction you want to extrude the shape the design of the shape should be based on coordinates 
in the XOY plane, ie the z component should be 0. Some twisting to this base shape can be applied by leaving the x and y components 
unchanged but allowing the z component to be non zero but not taking the shape too far from generally lying in th XOY plane. Otherwise 
results will not be as you might expect.

Example :
```javascript
// creates an extended shape
var extruded = BABYLON.MeshBuilder.ExtrudeShape("ext", {shape: myShape, path: myPath}, scene);

// updates the existing instance of extruded : no need for the parameter scene
extruded = BABYLON.MeshBuilder.ExtrudeShape("ext", {shape: myShape, path: myPath, scale: newScale, rotation: newRotation instance: extruded});

```
Properties :

property|value|default value
--------|-----|-------------
shape|_(Vector3[])_  array of Vector3, the shape you want to extrude **REQUIRED** |
path|_(Vector3[])_  array of Vector3, the extrusion axis **REQUIRED** |
scale|_(number)_  the value to scale the shape|1
rotation|_(number)_  the value to rotate the shape each step along the path|0
cap|_(number)_ extrusion cap : NO_CAP, CAP_START, CAP_END, CAP_ALL|NO_CAP
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE
frontUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE is an option** | Vector4(0,0, 1,1) 
backUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE is an option** | Vector4(0,0, 1,1) 
instance|_(LineMesh)_ an instance of an extruded shape to be updated|null
invertUV|_(boolean)_ to swap the U and V coordinates at geometry construction time (texture rotation of 90°)|false

[A Playground Example of a Shape in XOY plane in Z direction with Rotation](http://www.babylonjs-playground.com/#165IV6#16)
[A Playground Example of the Same Shape in XOY plane in Y direction with Rotation](http://www.babylonjs-playground.com/#165IV6#18)
[A Playground Example of a Shape in YOZ plane in Z direction with Rotation - Strange!](http://www.babylonjs-playground.com/#165IV6#19)

## Custom Extruded Shapes
You must set at least the _shape_ and _path_ properties.
On update, you must set the _shape_, _path_ and _instance_ properties and you can set the _rotationFunction_ or _scaleFunction_ properties.

Example :
```javascript
//creates an instance of a Custom Extruded Shape
var extruded = BABYLON.MeshBuilder.ExtrudeShapeCustom("ext", {shape: myShape, path: myPath}, scene);

// updates the existing instance of extruded : no need for the parameter scene
extruded = BABYLON.MeshBuilder.ExtrudeShapeCustom("ext", {shape: myShape, path: myPath, scaleFunction: myScaleF, rotationFunction: myRotF instance: extruded});
```
Properties :

property|value|default value
--------|-----|-------------
shape|_(Vector3[])_  array of Vector3, the shape you want to extrude **REQUIRED**|
path|_(Vector3[])_  array of Vector3, the extrusion axis **REQUIRED** |
scaleFunction|_( function(i, distance) )_  a function returning a scale value from _(i, distance)_ parameters|{return 1;}
rotationFunction|_( function(i, distance) )_  a function returning a rotation value from _(i, distance)_ parameters|{return 0;}
ribbonClosePath|_(boolean)_ the underlying ribbon _closePath_ parameter value|false
ribbonCloseArray|_(boolean)_ the underlying ribbon _closeArray_ parameter value|false
cap|_(number)_ extrusion cap : NO_CAP, CAP_START, CAP_END, CAP_ALL|NO_CAP
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE
frontUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE is an option** | Vector4(0,0, 1,1) 
backUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE is an option** | Vector4(0,0, 1,1) 
instance|_(LineMesh)_ an instance of an extruded shape to be updated|null
invertUV|_(boolean)_ to swap the U and V coordinates at geometry construction time (texture rotation of 90°)|false

[A Playground Example of a Custom Extruded Shape](http://www.babylonjs-playground.com/#165IV6#17)

## Lathe
You must set at least the _shape_ property.

Example :
```javascript
var lathe = BABYLON.MeshBuilder.CreateLathe("lathe", {shape: myShape}, scene);
```
Properties :

property|value|default value
--------|-----|-------------
shape|_(Vector3[])_  array of Vector3, the shape you want to turn **REQUIRED** |
radius|_(number)_  the value to radius of the lathe|1
tessellation|_(number)_  the number of iteration around the lathe|64
arc|_(number)_ ratio of the circumference between 0 and 1|1
cap|_(number)_ tube cap : NO_CAP, CAP_START, CAP_END, CAP_ALL|NO_CAP
closed|_(boolean)_ to open/close the lathe circumference, should be set to `false` when used with `arc`|true
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE
frontUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE is an option** | Vector4(0,0, 1,1) 
backUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE is an option** | Vector4(0,0, 1,1) 
invertUV|_(boolean)_ to swap the U and V coordinates at geometry construction time (texture rotation of 90°)|false

[A Playground Example of a Lathe](http://www.babylonjs-playground.com/#165IV6#12)

## Non Regular Polygon
You must set at least the _shape_ property.

Example :
```javascript
var polygon = BABYLON.MeshBuilder.CreatePolygon("polygon", {shape: myShape, sideOrientation: BABYLON.Mesh.DOUBLESIDE, frontUVs: myFrontUVs, backUVs: myBackUVs}, scene);
```
Properties :

property|value|default value
--------|-----|-------------
shape|_(Vector3[])_  array of Vector3, the shape you want to turn **REQUIRED** |
holes|_(Vector3[])_  array of holes, each hole being an array of successive Vector3 | []
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE
frontUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE is an option** | Vector4(0,0, 1,1) 
backUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE is an option** | Vector4(0,0, 1,1) 

All vectors for shape and holes are Vector3 and should be in the XoZ plane, ie of the form BABYLON.Vector3(x, 0, z) and in counter clockwise order;

Both frontUVs and backUVs have the form Vector4(u0,v0,u1,v1) with 0&gt;=  u0,v0,u1,v1 &lt;= 1 and 
(u0, v0) are the bottom left coordinates and (u1, v1) the top right coordinates of the clipping rectangle 
of the image.

[A Playground Example of a Polygon](http://playground.babylonjs.com/#4G18GY#2)

Uses [PolygonMeshBuilder](/tutorials/polygonmeshbuilder)

## Extruded Non Regular Polygon
You must set at least the _shape_ and _depth_ properties.

Example :
```javascript
var polygon = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {shape: myShape, depth: 2, faceUV: myUVs}, scene);
```
Properties :

property|value|default value
--------|-----|-------------
shape|_(Vector3[])_  array of Vector3, the shape you want to turn **REQUIRED** |
depth|_(number)_  the depth of the extrusion **REQUIRED** |
faceColors|_(Color4[])_ array of 3 _Color4_, one per box face|Color4(1, 1, 1, 1) for each side
faceUV|_(Vector4[])_ array of 3 _Vector4_, one per box face| UVs(0, 0, 1, 1) for each side
holes|_(Vector3[])_  array of holes, each hole being an array of successive Vector3 | [] 
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE

All vectors for shape and holes are Vector3 and should be in the XoZ plane, ie of the form BABYLON.Vector3(x, 0, z) and in counter clockwise order;

To understand how to set _faceUV_ or _faceColors_, please read this : /tutorials/CreateBox_Per_Face_Textures_And_Colors

face 0 is top polygon, 1 is side of extruded polygon and 2 is bottom polygon

[Playground Example of Extruded Polygon](http://www.babylonjs-playground.com/#RNCYVM#2)

Uses [PolygonMeshBuilder](/tutorials/polygonmeshbuilder)

# Further Reading

## Basic - L1

[Mesh Overview](/overviews/Shapes)

## Mid Level - L2

[Basic Shapes](/babylon101/Discover_Basic_Elements.html)   
[Polyhedra Shapes](/tutorials/Polyhedra_Shapes.html)

## More Advanced - L3
   
[Ribbons In Detail](/tutorials/Ribbon_Tutorial.html)  
[Maths Makes Ribbons](/tutorials/Maths_Make_Ribbons.html)  
[Decals](/tutorials/Decals.html) 



## Next Step
----
We saw from crating basic elements that we needed a bit of 'positioning' to keep our elements from sitting atop one another in the scene. Now let's learn more about positions (sometimes called translations) as well as about rotation and scaling. Ready? Sure you are! [**Click here for the next tutorial.**](/babylon101/Position,_Rotation,_Scaling)





