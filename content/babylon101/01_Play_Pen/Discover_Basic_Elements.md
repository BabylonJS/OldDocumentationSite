---
ID_PAGE: 22011
PG_TITLE: 02. Set Shapes
---

# Set Shapes

## Methods of Creation

[A Playground Example of Some Set Shapes](http://www.babylonjs-playground.com/#165IV6#1)

From BJS 2.3 onwards a mesh is created using MeshBuilder. For the previous method check out [First Steps](/overviews/First) and also [Legacy 3D Mesh Creation](/babylon101/Discover_Basic_Elements#legacy-3d-shape-creation) at the bottom of this page.

## Box
Example :
```javascript
var box = BABYLON.MeshBuilder.CreateBox("box", {height: 5}, scene);
```
Properties, all optional :

property|value|default value
--------|-----|------------
size|_(number)_ size of each box side|1
height|_(number)_ height size, overwrites _size_ property|size
width|_(number)_ width size, overwrites _size_ property|size
depth|_(number)_ depth size,  overwrites _size_ property|size
faceColors|_(Color4[])_ array of 6 _Color4_, one per box face|Color4(1, 1, 1, 1) for each side
faceUV|_(Vector4[])_ array of 6 _Vector4_, one per box face| UVs(0, 0, 1, 1) for each side
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE

## Sphere
Example :
```javascript
var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, diameterX: 3}, scene);
```
Properties, all optional :

property|value|default value
--------|-----|-------------
segments|_(number)_ number of horizontal segments|32
diameter|_(number)_ diameter of the sphere|1
diameterX|_(number)_ diameter on X axis, overwrites _diameter_ property|diameter
diameterY|_(number)_ diameter on Y axis, overwrites _diameter_ property|diameter
diameterZ|_(number)_ diameter on Z axis, overwrites _diameter_ property|diameter
arc|_(number)_ ratio of the circumference (latitude) between 0 and 1|1
slice|_(number)_ ratio of the height (longitude) between 0 and 1|1
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE

## Cylinder or Cone
If you set _diameterTop_ to zero, you get a cone instead of a cylinder.
Example :
```javascript
var cone = BABYLON.MeshBuilder.CreateCylinder("cone", {diameterTop: 0, tessellation: 4}, scene);
```
Properties, all optional :

property|value|default value
--------|-----|-------------
height|_(number)_ height of the cylinder|2
diameterTop|_(number)_ diameter of the top cap, can be zero to create a cone, overwrites the _diameter_ property|1
diameterBottom|_(number)_ diameter of the bottom cap, can't be zero, overwrites the _diameter_ property|1
diameter|_(number)_ diameter of both caps|1
tessellation|_(number)_ number of radial sides|24
subdivisions|_(number)_ number of rings|1
faceColors|_(Color4[])_ array of 3 _Color4_, 0 : bottom cap, 1 : cylinder tube, 2 : top cap|Color4(1, 1, 1, 1) for each face
faceUV|_(Vector4[])_ array of 3 _Vector4_, 0 : bottom cap, 1 : cylinder tube, 2 : top cap| UVs(0, 0, 1, 1) for each face
arc|_(number)_ ratio of the circumference between 0 and 1|1
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE

## Plane
Example :
```javascript
var plane = BABYLON.MeshBuilder.CreatePlane("plane", {width: 5}, scene);
```
Properties, all optional :

property|value|default value
--------|-----|-------------
size|_(number)_ side size of the plane|1
width|_(number)_ size of the width|size
height|_(number)_ size of the height|size
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE
sourcePlane|_(Plane)_ source plane (math) the mesh will be transformed to|null

## Ground
Example :
```javascript
var ground = BABYLON.MeshBuilder.CreateGround("gd", {width: 6, subdivsions: 4}, scene);
```
Properties, all optional :

property|value|default value
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

Properties, all optional :

property|value|default value
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
Properties, all optional :

property|value|default value
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
Properties, all optional :

property|value|default value
--------|-----|-------------
diameter|_(number)_ diameter of the torus|1
thickness|_(number)_ thickness of its tube|0.5
tessellation|_(number)_ number of segments along the circle|16
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE

## Torus Knot
Example :
```javascript
var torus = BABYLON.MeshBuilder.CreateTorusKnot("tk", {}, scene);
```
Properties, all optional :

property|value|default value
--------|-----|-------------
radius|_(number)_ radius of the torus knot|2
tube|_(number)_ thickness of its tube|0.5
radialSegments|_(number)_ number of radial segments|32
tubularSegments|_(number)_ number of tubular segments|32
p|_(number)_ number of windings|2
q|_(number)_ number of windings|3
updatable|_(boolean)_ true if the mesh is updatable|false
sideOrientation|_(number)_ side orientation|DEFAULTSIDE

[A Playground Example of the above Shapes](http://www.babylonjs-playground.com/#165IV6#6)

## Tiled Ground
Example :
```javascript
var tiledGround = BABYLON.MeshBuilder.CreateTiledGround("tgd", {subdivsions: {w:4, h:6} }, scene);
```
Properties, all optional :

property|value|default value
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

## Updatable

Where a set shape has an updatable parameter in its options it means that it is possible to alter the data associated 
with each vertex of the mesh and so alter the shape of the mesh. For more information see [Updating Vertices](/tutorials/Updating_Vertices.html)


## Side Orientation
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


# Legacy 3D Shape Creation 

* **Creation of a Box**
```javascript
var box = BABYLON.Mesh.CreateBox("box", 6.0, scene, false, BABYLON.Mesh.DEFAULTSIDE);
```
Parameters are: name, size of the box, the scene to attach the mesh, updatable? (if the mesh must be modified later) and the optional side orientation (see below). The last two parameters can be omitted if you just need the default behavior :
```javascript
var box = BABYLON.Mesh.CreateBox("box", 6.0, scene);
```

* **Creation of a Sphere**
```javascript
var sphere = BABYLON.Mesh.CreateSphere("sphere", 10.0, 10.0, scene, false,  BABYLON.Mesh.DEFAULTSIDE);
```
Parameters are: name, number of segments (highly detailed or not), size, scene to attach the mesh, updatable? (if the mesh must be modified later) and the optional side orientation (see below). The last two parameters can be omitted if you just need the default behavior :
```javascript
var sphere = BABYLON.Mesh.CreateSphere("sphere", 10.0, 10.0, scene);
```
Beware to adapt the number of segments to the size of your mesh ;)

* **Creation of a Plane**

```javascript
var plane = BABYLON.Mesh.CreatePlane("plane", 10.0, scene, false, BABYLON.Mesh.DEFAULTSIDE);
```

Parameters are: name, size, and scene to attach the mesh, updatable? (if the mesh must be modified later) and the optional side orientation (see below). The last two parameters can be omitted if you just need the default behavior :
```javascript
var plane = BABYLON.Mesh.CreatePlane("plane", 10.0, scene);
```

* **Creation of a Disc (or a regular polygon)**
```javascript
var disc = BABYLON.Mesh.CreateDisc("disc", 5, 30, scene, false, BABYLON.Mesh.DEFAULTSIDE);
```
Parameters are: name, radius, tessellation, scene, updatable and the optional side orientation (see below). The last two parameters can be omitted if you just need the default behavior :
```javascript
var disc = BABYLON.Mesh.CreateDisc("disc", 5, 30, scene);
```
With the  _tessellation_ value, you can get a regular polygon :  
3 gives a triangle,  
4 a square,  
5 a pentagon,  
6 a hexagon, 7 a heptagon, 8 an octogon, and so on.

* **Creation of a Cylinder**

```javascript
var cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 3, 3, 3, 6, 1, scene, false, BABYLON.Mesh.DEFAULTSIDE);
```

Parameters are: name, height, diamTop, diamBottom, tessellation, heightSubdivs, scene, updatable and the optional side orientation (see below). The last two parameters can be omitted if you just need the default behavior :
```javascript
var cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 3, 3, 3, 6, 1, scene);
```

* **Creation of a Torus**

```javascript
var torus = BABYLON.Mesh.CreateTorus("torus", 5, 1, 10, scene, false, BABYLON.Mesh.DEFAULTSIDE);
```
Parameters are: name, diameter, thickness, tessellation (highly detailed or not), scene, updatable and the optional side orientation (see below). The last two parameters can be omitted if you just need the default behavior :
```javascript
var torus = BABYLON.Mesh.CreateTorus("torus", 5, 1, 10, scene);
```

* **Creation of a Knot**

```javascript
var knot = BABYLON.Mesh.CreateTorusKnot("knot", 2, 0.5, 128, 64, 2, 3, scene, false, BABYLON.Mesh.DEFAULTSIDE);
```
Parameters are: name, radius, tube, radialSegments, tubularSegments, p, q, scene, updatable and the optional side orientation (see below). The last two parameters can be omitted if you just need the default behavior :
```javascript
var knot = BABYLON.Mesh.CreateTorusKnot("knot", 2, 0.5, 128, 64, 2, 3, scene);
```
You can learn more about torus knots... [**RIGHT HERE**](http://en.wikipedia.org/wiki/Torus_knot).

* **Creation of a Ground**

```javascript
var ground = BABYLON.Mesh.CreateGround("ground", 6, 6, 2, scene);
```

Parameters are: name, width, depth, subdivs, scene

Our [**Playground Demo Scene 01**](http://www.babylonjs-playground.com/?1) uses a CreateGround constructor... so you can see one in action by using the above link.

* **Creation of a Ground From HeightMap**

```javascript
var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", "heightmap.jpg", 200, 200, 250, 0, 10, scene, false, successCallback);
```
Parameters are: name, heightmapPath, width, depth, subdivs, minheight, maxheight, scene, updatable, successCallback

HeightMap grounds are easy, but we decided to create a separate tutorial so we could say more about this important Babylon.js feature. Please see our [**HeightMap Tutorial**](/babylon101/Height_Map) to learn all about heightMap grounds.

* **Create of a Tiled Ground**

Thanks to forum user Kostar111 for this handy Tiled Ground constructor. Here is the basic code needed to create a tiled ground.

```javascript

var precision = {
    "w" : 2,
    "h" : 2
};
var subdivisions = {
    'h' : 8,
    'w' : 8
};
var tiledGround = BABYLON.Mesh.CreateTiledGround("Tiled Ground", -3, -3, 3, 3, subdivisions, precision, scene, false);
```

Parameters are: name, xmin, zmin, xmax, zmax, subdivisions = the number of tiles. (subdivisions.w : in width; subdivisions.h: in height), precision = the number of subdivisions inside a tile. (precision.w : in width; precision.h: in height), scene, updatable.

Kostar111 was also kind enough to give us a fine tutorial about how to use tiled grounds. [**Click right here**](http://makina-corpus.com/blog/metier/how-to-use-multimaterials-with-a-tiled-ground-in-babylonjs) to view it. At that link, Kostar111 thoroughly explains how the tiled ground works, and also provides some Babylon.js Playground scenes that nicely demonstrate some of its many uses.

## Wrapping Up 
And that’s it! Now you have seen all of our basic elements, and some ways to use them. Keep watching this area of the tutorial for new basic elements, as they are being added quite quickly : you'll find the updated list with all parameter explanations [**in this section**](/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter). 
Feel free to imagine a few of your own basic element ideas, and present them on the forum. Help us make our list of basic elements grow, if you can.  

## Next Step 
----
These are just the basic shapes we can create with Babylon.js. Ready for more variation in our shapes?  Sure you are! [**Click here for the next tutorial.**](/babylon101/Parametric_Shapes)

# Further Reading

[Mesh Overview](/overviews/Shapes)


