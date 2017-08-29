---
ID_PAGE: 24847
PG_TITLE: 03. Parametric Shapes
---

# Parametric Shapes

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

# Legacy Creation of Parametric Shapes

* **Creation of a Ribbon**

For details on what it is and how it is constructed you might want to read the [**Ribbon Tutorial**](/tutorials/Ribbon_Tutorial)

```javascript
var ribbon = BABYLON.Mesh.CreateRibbon("ribbon", [path1, path2, ..., pathn], false, false, 0, scene, false, BABYLON.Mesh.DEFAULTSIDE);
```

Parameters are: name, pathArray, closeArray, closePath, offset, scene, updatable? (if the mesh must be modified later)  and the optional side orientation (see below).


  * name : a string, the name you want to give to your shape,
  * pathArray : an array populated with paths. Paths are also arrays, populated with series of successive _Vector3_. You need at least one path to construct a ribbon and each path must contain at least four _Vector3_,
  * closeArray : boolean, if true an extra set of triangles is constructed between the last path and the first path of _pathArray_,
  * closePath : boolean, if true the last point of each path of _pathArray_ is joined to the first point of this path,
  * offset : integer (default half the _path_ size) mandatory only if the _pathArray_ contents only one path. The ribbon will be constructed joining each i-th point of the single path to the i+offset-th point. It is ignored if _pathArray_ has more than one path,
  * scene : the current scene object,
  * updatable : boolean, if the ribbon should allow updating later,
  * sideOrientation : the wanted side-orientation (BABYLON.Mesh.FRONTSIDE / BACKSIDE / DOUBLESIDE / DEFAULT).

The last two parameters can be omitted if you just need the default behavior :
```javascript
var ribbon = BABYLON.Mesh.CreateRibbon("ribbon", [path1, path2, ..., pathn], false, false, 0, scene);
```

* ** Creation of a Tube**

```javascript
var tube = BABYLON.Mesh.CreateTube("tube", [V1, V2, ..., Vn], radius, tesselation, radiusFunction, cap, scene, false, BABYLON.Mesh.DEFAULTSIDE);

```
Parameters are : name, path, radius, tesselation, optional radiusFunction, cap, scene, updatable, sideOrientation.

  * name : string, the name of the tube mesh,
  * path : an array of successive Vector3, at least two Vector3,
  * radius : nuumber, the tube radius, used when _radiusFunction_ parameter set to _null_,
  * tesselation : the number of radial segments,
  * radiusFunction : _optional_, a javascript function returns a radius value. This can be set to _null_,
  * cap : BABYLON.Mesh.NO_CAP, BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL,  
  * updatable : boolean, if the tube should allow updating later,
  * sideOrientation : the wanted side orientation (front, back or double side).

The last two parameters can be omitted if you just need the default behavior :
```javascript
var tube = BABYLON.Mesh.CreateTube("tube", [V1, V2, ..., Vn], radius, tesselation, radiusFunction, cap, scene);
```
While a tube can just be a cyclinder it can be far more than that
  
[Playground Example with a simple cos/sin path](http://www.babylonjs-playground.com/#LG3GS#8)   


Your function must just return a radius value.  
Example :
```javascript
var myFunction = function(i, distance) {
  var radius = 3 * Math.cos(distance / 5);
  return radius;
};
var tube = BABYLON.Mesh.CreateTube("lumps", path, null, 20, myFunction, scene);
```

Here is an example with both an _i_ sinusoidal radius function and _x_ sinusoidal incrementing path :
http://www.babylonjs-playground.com/#LG3GS#9    
Here's another example with a circular path and varying radius : http://www.babylonjs-playground.com/#LG3GS#10  

* **Creation of a Non Regular Polygon**

```javascript
var polygon = BABYLON.Mesh.CreatePolygon("polygon", [V1, V2, ..., Vn], scene, [[V1, V2, ..., Vn], [V1, V2, ..., Vn], ....[V1, V2, ..., Vn]], false, BABYLON.Mesh.DEFAULTSIDE);
```

Parameters are: name, polygon shape as an array of comma-separated vectors,  scene, optional holes as an array of an array of comma-separated vectors, optional updatable and the optional side orientation. The last three parameters can be omitted if you just need the default behavior :

NOTE all vectors are Vector3 and should be in the XoZ plane, ie of the form BABYLON.Vector3(x, 0, z);

```javascript
var polygon = BABYLON.Mesh.CreatePolygon("cylinder", [V1, V2, ..., Vn], scene);
```
Uses [PolygonMeshBuilder](/tutorials/polygonmeshbuilder)

* **Extrusion of a Non Regular Polygon**

```javascript
var polygon = BABYLON.Mesh.ExtrudePolygon("polygon", [V1, V2, ..., Vn], 2, scene, [[V1, V2, ..., Vn], [V1, V2, ..., Vn], ....[V1, V2, ..., Vn]], false, BABYLON.Mesh.DEFAULTSIDE);
```

Parameters are: name, polygon shape as an array of comma-separated vectors, depth, scene, optional holes as an array of an array of comma-separated vectors, optional updatable and the optional side orientation. The last three parameters can be omitted if you just need the default behavior :

NOTE all vectors are Vector3 and should be in the XoZ plane, ie of the form BABYLON.Vector3(x, 0, z) and in counter clockwise order;

```javascript
var polygon = BABYLON.Mesh.CreatePolygon("polygon", [V1, V2, ..., Vn], 2, scene);
```

Uses [PolygonMeshBuilder](/tutorials/polygonmeshbuilder)

* **Creation of a Lines Mesh**

```javascript
var lines = BABYLON.Mesh.CreateLines("lines", [
    new BABYLON.Vector3(-10, 0, 0),
    new BABYLON.Vector3(10, 0, 0),
    new BABYLON.Vector3(0, 0, -10),
    new BABYLON.Vector3(0, 0, 10)
], scene);
```
Parameters are: name, [array of comma-separated vectors], scene. 

I could explain how the Lines Mesh constructor works, but I think you can see how it works just by looking at the demo code above.  Notice the [ and ].  Those are the enclosing tokens for an array, yet another kind of Javascript value.  The first vector3 of the array is the starting location for drawing lines.  After that, a comma, and then the next vector3 location... indicating where the line is drawing-to next.  Then, another comma, and another vector3 to a new location.  You can add as many vectors as you wish, but notice that the LAST vector3 does not have a comma following it.  Please make your array of vectors be formatted similarly.    

* **Creation of DashedLines Mesh**

```javascript
var dashedlines = BABYLON.Mesh.CreateDashedLines("dashedLines", [v1, v2, ... vn], dashSize, gapSize, dashNb, scene);
```
Parameters are : name, [array of Vectors3], dashSize, gapSize, dashNumber, scene.    
As for Lines, a line along the vectors3 will be displayed in space. It will try to set _dashNumber_ strokes on this line depending on the length of each segment between two successive vectors3.    
_dashSize_ and _gapSize_ are relative to each other dash and gap sizes within these strokes.    

## Extrusion
What is extrusion ?  
Extrusion is the way to transform a 2D shape into a volumic shape.  
Let's imagine that you define a star shape by filling an array with successive _Vector3_. In order to have a 2D shape, you only set these points in the xOy plane, so every z coordinate is zero.  
ex : http://www.babylonjs-playground.com/#RF9W9  
Let's show the World axis so it is clearer : http://www.babylonjs-playground.com/#RF9W9#1  
Let's now imagine you could stretch this 2D shape along the Z-axis to give it some volume... this is extrusion :  http://www.babylonjs-playground.com/#RF9W9#30    

Let's now imagine you can extrude your star along a 3D path in space, a sinus curve for example, and not only along the z-axis.  
http://www.babylonjs-playground.com/#RF9W9#31    


Extrusion can be accomplished with two different methods. A basic one and an advanced or custom one.  

BASIC METHOD  
```javascript
BABYLON.Mesh.ExtrudeShape(name, shape, path, scale, rotation, cap, scene, updatable?, sideOrientation)
```
* **name** : the extruded mesh name.
* **shape** : the shape to be extruded, an array of successive Vector3.
* **path** : the path to extrude the shape along, an array of successive Vector3.
* **scale** : _default 1_, the value to scale the initial shape.
* **rotation** : _default 0_, the step value to rotate the shape at each path point.
*  **cap** : BABYLON.Mesh.NO_CAP, BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL.  
* **scene** : the current scene.
* **updatable?** : if the mesh is updatable.
* **sideOrientation** : the side orientation - _front, back_ or _double_.  

If we change the _scale_ value from 1 to 3 for example (line 84), the initial star is scaled to 3 along the curve : http://www.babylonjs-playground.com/#RF9W9#526 
If we now change the _rotation_ step value from 0 to _PI / 24_ for example, the curve is twisted this angle at each curve point : http://www.babylonjs-playground.com/#RF9W9#218  

Of course, even if you define your 2D shape in the xOy plane as described, the extrusion still works along any path direction : http://www.babylonjs-playground.com/#RF9W9#32    

Moreover, the shape doesn't need to be closed. You can have a simple (or complex) open shape : http://www.babylonjs-playground.com/#RF9W9#7  
Extrusion : http://www.babylonjs-playground.com/#RF9W9#33      
Extrusion with rotation : http://www.babylonjs-playground.com/#RF9W9#34    

Remember that your shape doesn't need to be centered on the coordinate system either. Here is an offset simple shape : http://www.babylonjs-playground.com/#RF9W9#10  
Extrusion (the extrusion path is shown in magenta so the offset is visible) : http://www.babylonjs-playground.com/#RF9W9#35    
Now rotation... around the path axis : http://www.babylonjs-playground.com/#RF9W9#36    
As you can see, this is a way to build complex curved helix meshes without handling maths or simpler ones : http://www.babylonjs-playground.com/#RF9W9#37    
As the shape to be extruded is unpredictable, it is assumed that the cap, if want to add it one or two to your extruded mesh, is computed with its center set to the shape barycenter.  



ADVANCED METHOD  
```javascript
BABYLON.Mesh.ExtrudeShapeCustom(name, shape, path, scaleFunction, rotateFunction, ribbonCloseArray, ribbonClosePath, cap, scene)
```
* **name** : the extruded mesh name,
* **shape** : the shape to be extruded, an array of successive Vector3.
* **path** : the path to extrude the shape along, an array of successive Vector3.
* **scaleFunction** : a custom javascript function. This function is called on each path point and is given the _i_ position of the point in the path and its _distance_ from the begining of the path. It must return a _scale_ numeric value. This value will be the scaling applied to the shape drawn at the _i-th_  point.
* **rotationFunction** : a custom javascript function. This function is called on each path point and is given the _i_ position of the point in the path and its _distance_ from the begining of the path. It must return a _rotation_ numeric value. This value will be the rotation applied to the shape drawn at the _i-th_  point.
* **ribbonCloseArray** : _default false_, boolean. The underlying ribbon _closeArray_  parameter. This can be used to automatically close a path with right normals computation.
* **ribbonClosePath** : _default false_, boolean. The underlying ribbon _closePath_  parameter. This can be used to automatically close a shape with right normals computation.  
*  **cap** : BABYLON.Mesh.NO_CAP, BABYLON.Mesh.CAP_START, BABYLON.Mesh.CAP_END, BABYLON.Mesh.CAP_ALL.  
* **scene** : the current scene.
* **updatable?** : if the mesh is updatable.
* **sideOrientation** : the side orientation - _front, back_ or _double_.

In this advanced method, the _scale_ and _rotation_ parameters are replaced by custom functions.  

  **_scaleFunction_**   
This javascript function will be called on each path point iteration when extruding. It will be passed two parameters : _i_ and _distance_.  

* **i** is the point position in the path, starting from zero for the first point.
* **distance** is the current point distance from the begining of the path.  

This custom function must return a _scale_ numeric value which will be applied to the shape on the _i-th_ point.  
Example :
```javascript
var myScale = function(i, distance) {
  var scale = 2 * Math.sin(i / 5);
  return scale;
};
```

Here is an example with an unclosed un-centered simple shape whose scale evolves linearly along the path : http://www.babylonjs-playground.com/#RF9W9#38    
Now if we use a sinus scaling function instead and as the shape isn't centered, we get interesting results : http://www.babylonjs-playground.com/#RF9W9#39    
We can even emulate rotation by alternately scaling positive/negative : http://www.babylonjs-playground.com/#RF9W9#40    


  **_rotateFunction_**  
This javascript function will be called on each path point iteration when extruding. It will be passed two parameters : _i_ and _distance_.  

* **i** is the point position in the path, starting from zero for the first point.
* **distance** is the current point distance from the begining of the path. 

This custom function must return a _rotation_ numeric value which will be applied to the shape on the _i-th_ point.  
Example :
```javascript
var myRotation = function(i, distance) {
  var rotation = distance / 20;
  return rotation;
};
```
Here is an example of constant scale and rotation evolving with the distance : http://www.babylonjs-playground.com/#RF9W9#41    
You can set a non-linear rotation function of course, sinus here : http://www.babylonjs-playground.com/#RF9W9#42    



  **Fixed values**

This advanced method needs two custom functions. But you may want to use a custom scale function with a fixed (or no) rotation function, for example. In this case, just pass a custom rotation function returning a fixed value :  
Example :  
```javascript
var noRotation = function(i, distance) {
  return 0;
};
```
If you carefully read the code of this previous example, you can see in line 41 that the _scaleFunction_ returns the constant 1 value : http://www.babylonjs-playground.com/#RF9W9#41      

  **_ribbonCloseXXX_ parameters**

The extruded mesh is based on an underlying ribbon. When you extrude a shape, you actually make a particular ribbon.  
This means you can also set this ribbon _closeArray_ and _closePath_ parameter if you need to automatically close the extruded shape.  
NOTE : the _closeXXX_ names are the ribbon ones. Not the extruded shape ones.  
So it may be confusing because :  

* **_ribbonCloseArray_** set to true will close your shape extrusion path,
* **_ribbonClosePath_** set to true will close your shape itself (if unclosed).  

Let's now do this unclosed, un-centered extruded shape : http://www.babylonjs-playground.com/#RF9W9#20  
And this almost circular path : http://www.babylonjs-playground.com/#RF9W9#21  
Extrusion with constant scale and no rotation : http://www.babylonjs-playground.com/#RF9W9#43    
Now let's set the _ribbonCloseArray_ to true :http://www.babylonjs-playground.com/#RF9W9#44    
As you can see, it closes the extrusion path. Let's set it back to false and let's set the _ribbonClosePath_ to true instead : http://www.babylonjs-playground.com/#RF9W9#45    
Now the shape is closed.  
Both together : http://www.babylonjs-playground.com/#RF9W9#46    


 **Summary**  
At last, the extrude custom function call would be, for example:  
```javascript
BABYLON.Mesh.ExtrudeShapeCustom("extruded", shape, path, myScale, myRotation, false, true, scene)
```
A shape is an array of successive Vector3. This means 2D or 3D shapes can be extruded as well.  
The shape is to be designed in the local coordinate system knowing that the z-axis will be the extrusion path axis.  
Finally, shapes don't have to be centered in the local coordinate system.  
A centered shape will be extruded symmetrically centered along the path axis. An un-centered shape will be extruded offset from the path axis.  

Easy way to generate strange shapes : http://www.babylonjs-playground.com/#RF9W9#47   

## Next Step
----
We saw from crating basic elements that we needed a bit of 'positioning' to keep our elements from sitting atop one another in the scene. Now let's learn more about positions (sometimes called translations) as well as about rotation and scaling. Ready? Sure you are! [**Click here for the next tutorial.**](/babylon101/Position,_Rotation,_Scaling)





