---
ID_PAGE: 22011
PG_TITLE: 02. Set Shapes
---

# Set Shapes

These are shapes that usually already have names in everyday use and their form is well known. They are a box (or cuboid), a sphere, a cylinder, a cone, regular polygons, a plane and a specialist horizontal plane called the ground. Slightly less well know but also included in set shapes are ground from height map, tiled ground, a torus, a torus knot and the polyhedra.

The _MeshBuilder_ method uses a number of options that you can set or you can just settle for the default values. Whilst some options such as size or diameter have an obvious meaning others such as updatable or faceUV require [Further Reading](#further-reading) to fully understand what they are and how to use them.

# How To Create Set Shapes using MeshBuilder

To create all the set shapes you just follow the pattern 

```javascript
var mesh = BABYLON.MeshBuilder.Create<Shape Name>("name", options, scene);
```

## Box
Example :
```javascript
var box = BABYLON.MeshBuilder.CreateBox("box", {height: 5}, scene);
```

option|value|default value
--------|-----|------------
size|_(number)_ size of each box side|1
height|_(number)_ height size, overwrites _size_ option|size
width|_(number)_ width size, overwrites _size_ option|size
depth|_(number)_ depth size,  overwrites _size_ option|size
faceColors|_(Color4[])_ array of 6 _Color4_, one per box face|Color4(1, 1, 1, 1) for each side
faceUV|_(Vector4[])_ array of 6 _Vector4_, one per box face| UVs(0, 0, 1, 1) for each side
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE
frontUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE set** | Vector4(0,0, 1,1) 
backUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE set** | Vector4(0,0, 1,1) 

* [Playground Example of a Box](https://www.babylonjs-playground.com/#3QW4J1#1)

## Sphere
Different values for _diameterX_, _diameterY_ and diameterZ_ lead to an ellipsoid.
Example :
```javascript
var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, diameterX: 3}, scene);
```

option|value|default value
--------|-----|-------------
segments|_(number)_ number of horizontal segments|32
diameter|_(number)_ diameter of the sphere|1
diameterX|_(number)_ diameter on X axis, overwrites _diameter_ option|diameter
diameterY|_(number)_ diameter on Y axis, overwrites _diameter_ option|diameter
diameterZ|_(number)_ diameter on Z axis, overwrites _diameter_ option|diameter
arc|_(number)_ ratio of the circumference (latitude) between 0 and 1|1
slice|_(number)_ ratio of the height (longitude) between 0 and 1|1
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE
frontUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE set** | Vector4(0, 0, 1,1)
backUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE set** | Vector4(0, 0, 1,1) 

* [Playground Example of a Sphere](https://www.babylonjs-playground.com/#K6M44R#2)

## Cylinder or Cone
If you set _diameterTop_ to zero, you get a cone instead of a cylinder, with different values for _diameterTop_ and _diameterBottom_ you get a truncated cone.

Example :
```javascript
var cone = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 0, tessellation: 4}, scene);
```

option|value|default value
--------|-----|-------------
height|_(number)_ height of the cylinder|2
diameterTop|_(number)_ diameter of the top cap, can be zero to create a cone, overwrites the _diameter_ option|1
diameterBottom|_(number)_ diameter of the bottom cap, can't be zero, overwrites the _diameter_ option|1
diameter|_(number)_ diameter of both caps|1
tessellation|_(number)_ number of radial sides|24
subdivisions|_(number)_ number of rings|1
faceColors|_(Color4[])_ array of 3 _Color4_, 0 : bottom cap, 1 : cylinder tube, 2 : top cap|Color4(1, 1, 1, 1) for each face
faceUV|_(Vector4[])_ array of 3 _Vector4_, 0 : bottom cap, 1 : cylinder tube, 2 : top cap| UVs(0, 0, 1, 1) for each face
arc|_(number)_ ratio of the circumference between 0 and 1|1
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE
frontUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE set** | Vector4(0,0, 1,1) 
backUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE set** | Vector4(0,0, 1,1) 

* [Playground Example of a Cone](https://www.babylonjs-playground.com/#CWPN2T)

## Plane

A flat surface parallel to XoY plane.

Example :
```javascript
var plane = BABYLON.MeshBuilder.CreatePlane("plane", {width: 5}, scene);
```

option|value|default value
--------|-----|-------------
size|_(number)_ side size of the plane|1
width|_(number)_ size of the width|size
height|_(number)_ size of the height|size
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE
sourcePlane|_(Plane)_ source plane (math) the mesh will be transformed to|null
frontUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE set** | Vector4(0,0, 1,1) 
backUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE set** | Vector4(0,0, 1,1) 

* [Playground Example of a DOUBLESIDE Plane](https://www.babylonjs-playground.com/#LXZPJK#1)

## Disc or Regular Polygon
You can create any kind of regular polygon with _CreateDisc()_, the number of sides is dependent on the value given to _tessellation_. The larger this value the closer to an actual disc. Using the arc option you can create a sector.

Example :
```javascript
var disc = BABYLON.MeshBuilder.CreateDisc("disc", {tessellation: 3}, scene); // makes a triangle
```

option|value|default value
--------|-----|-------------
radius|_(number)_ the radius of the disc or polygon|0.5
tessellation|_(number)_ the number of disc/polygon sides|64
arc|_(number)_ ratio of the circumference between 0 and 1|1
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE

* [Playground Example of a Sector of Dodecagon](https://www.babylonjs-playground.com/#DJF437)

## Torus
Example :
```javascript
var torus = BABYLON.MeshBuilder.CreateTorus("torus", {thickness: 0.2}, scene);
```

option|value|default value
--------|-----|-------------
diameter|_(number)_ diameter of the torus|1
thickness|_(number)_ thickness of its tube|0.5
tessellation|_(number)_ number of segments along the circle|16
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE
frontUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE set** | Vector4(0,0, 1,1) 
backUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE set** | Vector4(0,0, 1,1) 

* [Playground Example Using Thickness to Create a Hoop and a Donut](https://www.babylonjs-playground.com/#A7SVB6)

## Torus Knot
Example :
```javascript
var torus = BABYLON.MeshBuilder.CreateTorusKnot("tk", {}, scene);
```

option|value|default value
--------|-----|-------------
radius|_(number)_ radius of the torus knot|2
tube|_(number)_ thickness of its tube|0.5
radialSegments|_(number)_ number of radial segments|32
tubularSegments|_(number)_ number of tubular segments|32
p|_(number)_ number of windings|2
q|_(number)_ number of windings|3
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE
frontUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE set** | Vector4(0,0, 1,1) 
backUVs|_(Vector4[])_  array of Vector4, **ONLY WHEN sideOrientation:BABYLON.Mesh.DOUBLESIDE set** | Vector4(0,0, 1,1) 

[A Playground Example of a Torus Knot](https://www.babylonjs-playground.com/#K9UC68)


## Ground

A flat horizontal surface parallel to the plane XoZ subdivided into sections.
Example :
```javascript
var ground = BABYLON.MeshBuilder.CreateGround("gd", {width: 6, subdivsions: 4}, scene);
```

option|value|default value
--------|-----|-------------
width|_(number)_ size of the width|1
height|_(number)_ size of the height|1
updatable|_(boolean)_ true if the mesh is updatable|false
subdivisions|_(number)_ number of square subdivisions|1

* [Playground Example of Ground](https://www.babylonjs-playground.com/#MJ6YSM)

## Ground From a Height Map
Example :
```javascript
var ground = BABYLON.MeshBuilder.CreateGroundFromHeightMap("gdhm", url, {width: 6, subdivisions: 4}, scene);
```
Don't forget the _url_ parameter, which is the link to the heightmap file, a greyscale file where lighter areas will be displayed higher than darker areas.

option|value|default value
--------|-----|-------------
width|_(number)_ size of the map width|10
height|_(number)_ size of the map height|10
subdivisions|_(number)_ number of map subdivisions|1
minHeight|_(number)_ minimum altitude|0
maxHeigth|_(number)_ maximum altitude|1
onReady|_(function)_ a callback js function that is called and passed the just built mesh|(mesh) => {return;}
updatable|_(boolean)_ true if the mesh is updatable|false

* [Playground Example Ground From Height Map](https://www.babylonjs-playground.com/#MJ6YSM#1)

## Tiled Ground
Example :
```javascript
var tiledGround = BABYLON.MeshBuilder.CreateTiledGround("tgd", {subdivsions: {w:4, h:6} }, scene);
```

option|value|default value
--------|-----|-------------
xmin|_(number)_ map min x coordinate value|-1
zmin|_(number)_ map min z coordinate value|-1
xmax|_(number)_ map max x coordinate value|1
zmin|_(number)_ map max z coordinate value|1
subdivisions|_( {w: number, h: number} )_ number of subdivisions (tiles) on the height and the width of the map|{w: 6, h: 6}
precision|_( {w: number, h: number} )_ number of subdivisions on the height and the width of each tile|{w: 2, h: 2}
updatable|_(boolean)_ true if the mesh is updatable|false

* [Playground Example of Tiled Ground](http://www.babylonjs-playground.com/#1XBLWB#147).

Full explanation of creating a tiled ground by its original code writer [here](http://makina-corpus.com/blog/metier/2014/how-to-use-multimaterials-with-a-tiled-ground-in-babylonjs). 

# Further Reading

## How To Make the Most of Options

[Side Orientation](/babylon101/Discover_Basic_Elements#side-orientation)  
[Updatable](/How_To/Updating_Vertices)  
[Face UV and Face Colors](/How_To/CreateBox_Per_Face_Textures_And_Colors)  
[Front and Back UV](/How_To/FrontandBackUV)

## Basic - L1

[Mesh Overview](/features/Shapes)  
[Set Shapes 101](/babylon101/Discover_Basic_Elements)  
[Parametric Shapes 101](/babylon101/Parametric_Shapes)  
[Parametric Shapes](/How_To/Parametric_Shapes)  
[Polyhedra Shapes](/How_To/Polyhedra_Shapes)  
[Decals](/How_To/Decals) 

## Mid Level - L2
 
[Ribbons In Detail](/How_To/Ribbon_Tutorial)

## More Advanced - L3
   
[Maths Makes Ribbons](/resources/Maths_Make_Ribbons)  


