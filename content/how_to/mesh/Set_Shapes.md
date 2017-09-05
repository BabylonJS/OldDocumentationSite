---
ID_PAGE: 22011
PG_TITLE: 02. Set Shapes
---

# Set Shapes

These are shapes that usually already have names in everyday use and theor form is well known. They are a box (or cuboid), a sphere, a cylinder, a cone, regular polygons, a plane and a specialist horizontal plane called the ground. Slightly less well know but also included in set shapes are ground from height map, tiled ground, a torus, a torus knot and the polyhedra.

Brief about front/bak updating and sideorientation LINK to own pages

# How To Create Set Shapes using MeshBuilder

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

[Playground Example of a Box](https://www.babylonjs-playground.com/#3QW4J1#1)

## Sphere
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

## Cylinder or Cone
If you set _diameterTop_ to zero, you get a cone instead of a cylinder.
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

## Plane
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

## Ground
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

## Ground From a Height Map
Example :
```javascript
var ground = BABYLON.MeshBuilder.CreateGroundFromHeightMap("gdhm", url, {width: 6, subdivsions: 4}, scene);
```
Don't forget the _url_ parameter.



option|value|default value
--------|-----|-------------
width|_(number)_ size of the map width|10
height|_(number)_ size of the map height|10
subdivisions|_(number)_ number of map subdivisions|1
minHeight|_(number)_ minimum altitude|0
maxHeigth|_(number)_ maximum altitude|1
onReady|_(function)_ a callback js function that is called and passed the just built mesh|(mesh) => {return;}
updatable|_(boolean)_ true if the mesh is updatable|false

## Disc
Remember you can create any kind of regular plane polygon with _CreateDisc()_
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

[A Playground Example of the above Shapes](http://www.babylonjs-playground.com/#165IV6#6)

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

[Example of Tiled Ground](http://www.babylonjs-playground.com/#1XBLWB#147).

Full explanation of creating a tiled ground by its original code writer [here](http://makina-corpus.com/blog/metier/2014/how-to-use-multimaterials-with-a-tiled-ground-in-babylonjs). 

# How to Update MOVE TO UPDATING VERTICES

Where a set shape has an updatable parameter in its options it means that it is possible to alter the data associated with each vertex of the mesh and so alter the shape of the mesh. For more information see [Updating Vertices](/how_to/Updating_Vertices.html)


##How to Set Front and Back UVs with Side Orientation MOVE TO OWN PAGE

When a mesh is created, an optional side orientation is given to it.  
The side orientation is used to give visibility and/or light reflection to each side of the mesh.  
There are four possible values for this parameter :  

  * BABYLON.Mesh.FRONTSIDE,
  * BABYLON.Mesh.BACKSIDE,
  * BABYLON.Mesh.DOUBLESIDE,
  * BABYLON.Mesh.DEFAULT which is the default value and equals FRONTSIDE currently.

This parameter is optional. If not given, the DEFAULT value is set.

*(We assume the backFaceCulling is enabled by default)*  

For instance, imagine you create a basic shape like a box, a sphere or a plane, and you don't give it a material.   
If you go behind the plane or inside the box or the sphere, you will notice that the faces aren't visible any longer : Babylon.js mesh are often constructed with the default side orientation _FRONTSIDE_. This means that each side only has a front view.  
Test it : http://www.babylonjs-playground.com/#14RNAU#4  

If you apply a test material to your mesh, set _material.backFaceCulling = false;_, and light it up, you will notice that the back (or internal) face... is now visible, but it doesn't reflect the light.  Same reason : the default side orientation is still _FRONTSIDE_.  
*(You can disable _backFaceCulling_ with this _sideOrientation_ value)*

Now, just change the _sideOrientation_ parameter in your mesh constructor... to _BABYLON.Mesh.BACKSIDE_.  (Remove your test material, too.)  You can only see the backs of planes, or only see the insides (internal faces) of the box and sphere.  
Test it : http://www.babylonjs-playground.com/#14RNAU#5

If you give your mesh some material, you can see that the light now only reflects on the back face (plane) or only inside (box, sphere, etc).  
*(you can disable _backFaceCulling_ with this _sideOrientation_ value)*


At last, change the _sideOrientation_ parameter to _BABYLON.Mesh.DOUBLESIDE_.  
As you guessed, the mesh faces are now visible on both sides. And if you give it a material, the light then reflects from both sides, too.  
Test it : http://www.babylonjs-playground.com/#14RNAU#6   

So why not always use _BABYLON.Mesh.DOUBLESIDE_ by default ?  

Because this value creates twice the vertices of a frontside mesh. In other terms, your mesh will be twice heavier.  
*(you shouldn't disable _backFaceCulling_ with _BABYLON.Mesh.DOUBLESIDE_ value)*




## Wrapping Up 
And that’s it! Now you have seen all of our basic elements, and some ways to use them. Keep watching this area of the tutorial for new basic elements, as they are being added quite quickly : you'll find the updated list with all parameter explanations [**in this section**](/how_to/Mesh_CreateXXX_Methods_With_Options_Parameter). 
Feel free to imagine a few of your own basic element ideas, and present them on the forum. Help us make our list of basic elements grow, if you can.  

## Next Step 
----
These are just the basic shapes we can create with Babylon.js. Ready for more variation in our shapes?  Sure you are! [**Click here for the next tutorial.**](/babylon101/Parametric_Shapes)

# Further Reading

[Mesh Overview](/features/Shapes)


