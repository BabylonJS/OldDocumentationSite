---
TAGS:
---
## Description

class [MeshBuilder](/classes/2.5/MeshBuilder)



## Methods

### static CreateBox(name, options, scene) &rarr; [Mesh](/classes/2.5/Mesh)

Creates a box mesh.

tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#box

The parameter `size` sets the size (float) of each box side (default 1).

You can set some different box dimensions by using the parameters `width`, `height` and `depth` (all by default have the same value than `size`).

You can set different colors and different images to each box side by using the parameters `faceColors` (an array of 6 [Color3](/classes/2.5/Color3) elements) and `faceUV` (an array of 6 [Vector4](/classes/2.5/Vector4) elements).

Please read this tutorial : http://doc.babylonjs.com/tutorials/CreateBox_Per_Face_Textures_And_Colors

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.5/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.5/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.5/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | options | { size: number,  width: number,  height: number,  depth: number,  faceUV: [Vector4](/classes/2.5/Vector4)[],  faceColors: [Color4](/classes/2.5/Color4)[],  sideOrientation: number,  updatable: boolean } |   
 | scene | [Scene](/classes/2.5/Scene) |   
### static CreateSphere(name, options, scene) &rarr; [Mesh](/classes/2.5/Mesh)

Creates a sphere mesh.

tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#sphere

The parameter `diameter` sets the diameter size (float) of the sphere (default 1).

You can set some different sphere dimensions, for instance to build an ellipsoid, by using the parameters `diameterX`, `diameterY` and `diameterZ` (all by default have the same value than `diameter`).

The parameter `segments` sets the sphere number of horizontal stripes (positive integer, default 32).

You can create an unclosed sphere with the parameter `arc` (positive float, default 1), valued between 0 and 1, what is the ratio of the circumference (latitude) : 2 x PI x ratio

You can create an unclosed sphere on its height with the parameter `slice` (positive float, default1), valued between 0 and 1, what is the height ratio (longitude).

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.5/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.5/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.5/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | options | { segments: number,  diameter: number,  diameterX: number,  diameterY: number,  diameterZ: number,  arc: number,  slice: number,  sideOrientation: number,  updatable: boolean } |   
 | scene | any |   
### static CreateDisc(name, options, scene) &rarr; [Mesh](/classes/2.5/Mesh)

Creates a plane polygonal mesh.  By default, this is a disc.

tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#disc

The parameter `radius` sets the radius size (float) of the polygon (default 0.5).

The parameter `tessellation` sets the number of polygon sides (positive integer, default 64). So a tessellation valued to 3 will build a triangle, to 4 a square, etc.

You can create an unclosed polygon with the parameter `arc` (positive float, default 1), valued between 0 and 1, what is the ratio of the circumference : 2 x PI x ratio

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.5/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.5/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.5/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | options | { radius: number,  tessellation: number,  arc: number,  updatable: boolean,  sideOrientation: number } |   
 | scene | [Scene](/classes/2.5/Scene) |   
### static CreateIcoSphere(name, options, scene) &rarr; [Mesh](/classes/2.5/Mesh)

Creates a sphere based upon an icosahedron with 20 triangular faces which can be subdivided.

tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#icosphere

The parameter `radius` sets the radius size (float) of the icosphere (default 1).

You can set some different icosphere dimensions, for instance to build an ellipsoid, by using the parameters `radiusX`, `radiusY` and `radiusZ` (all by default have the same value than `radius`).

The parameter `subdivisions` sets the number of subdivisions (postive integer, default 4). The more subdivisions, the more faces on the icosphere whatever its size.

The parameter `flat` (boolean, default true) gives each side its own normals. Set it to false to get a smooth continuous light reflection on the surface.

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.5/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.5/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.5/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | options | { radius: number,  radiusX: number,  radiusY: number,  radiusZ: number,  flat: boolean,  subdivisions: number,  sideOrientation: number,  updatable: boolean } |   
 | scene | [Scene](/classes/2.5/Scene) |   
### static CreateRibbon(name, options, scene) &rarr; [Mesh](/classes/2.5/Mesh)

Creates a ribbon mesh.

The ribbon is a parametric shape :  http://doc.babylonjs.com/tutorials/Parametric_Shapes.  It has no predefined shape. Its final shape will depend on the input parameters.

         * Please read this full tutorial to understand how to design a ribbon : http://doc.babylonjs.com/tutorials/Ribbon_Tutorial

The parameter `pathArray` is a required array of paths, what are each an array of successive [Vector3](/classes/2.5/Vector3). The pathArray parameter depicts the ribbon geometry.

The parameter `closeArray` (boolean, default false) creates a seam between the first and the last paths of the path array.

The parameter `closePath` (boolean, default false) creates a seam between the first and the last points of each path of the path array.

The parameter `offset` (positive integer, default : rounded half size of the pathArray length), is taken in account only if the `pathArray` is containing a single path.

It's the offset to join the points from the same path. Ex : offset = 10 means the point 1 is joined to the point 11.

The optional parameter `instance` is an instance of an existing [Ribbon](/classes/2.5/Ribbon) object to be updated with the passed `pathArray` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#ribbon

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.5/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.5/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.5/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture.

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | options | { pathArray: [Vector3](/classes/2.5/Vector3)[][],  closeArray: boolean,  closePath: boolean,  offset: number,  updatable: boolean,  sideOrientation: number,  instance: [Mesh](/classes/2.5/Mesh),  invertUV: boolean } |   
optional | scene | [Scene](/classes/2.5/Scene) |   
### static CreateCylinder(name, options, scene) &rarr; [Mesh](/classes/2.5/Mesh)

Creates a cylinder or a cone mesh.

tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#cylinder-or-cone

The parameter `height` sets the height size (float) of the cylinder/cone (float, default 2).

The parameter `diameter` sets the diameter of the top and bottom cap at once (float, default 1).

The parameters `diameterTop` and `diameterBottom` overwrite the parameter `diameter` and set respectively the top cap and bottom cap diameter (floats, default 1). The parameter "diameterBottom" can't be zero.

The parameter `tessellation` sets the number of cylinder sides (positive integer, default 24). Set it to 3 to get a prism for instance.

The parameter `subdivisions` sets the number of rings along the cylinder height (positive integer, default 1).

The parameter `hasRings` (boolean, default false) makes the subdivisions independent from each other, so they become different faces.

The parameter `enclose`  (boolean, default false) adds two extra faces per subdivision to a sliced cylinder to close it around its height axis.

The parameter `arc` (float, default 1) is the ratio (max 1) to apply to the circumference to slice the cylinder.

You can set different colors and different images to each box side by using the parameters `faceColors` (an array of n [Color3](/classes/2.5/Color3) elements) and `faceUV` (an array of n [Vector4](/classes/2.5/Vector4) elements).

The value of n is the number of cylinder faces. If the cylinder has only 1 subdivisions, n equals : top face + cylinder surface + bottom face = 3

Now, if the cylinder has 5 independent subdivisions (hasRings = true), n equals : top face + 5 stripe surfaces + bottom face = 2 + 5 = 7

Finally, if the cylinder has 5 independent subdivisions and is enclose, n equals : top face + 5 x (stripe surface + 2 closing faces) + bottom face = 2 + 5 * 3 = 17

Each array (color or UVs) is always ordered the same way : the first element is the bottom cap, the last element is the top cap. The other elements are each a ring surface.

If `enclose` is false, a ring surface is one element.

If `enclose` is true, a ring surface is 3 successive elements in the array : the tubular surface, then the two closing faces.

Example how to set colors and textures on a sliced cylinder : http://www.html5gamedevs.com/topic/17945-creating-a-closed-slice-of-a-cylinder/#comment-106379

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.5/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.5/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.5/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | options | { height: number,  diameterTop: number,  diameterBottom: number,  diameter: number,  tessellation: number,  subdivisions: number,  arc: number,  faceColors: [Color4](/classes/2.5/Color4)[],  faceUV: [Vector4](/classes/2.5/Vector4)[],  updatable: boolean,  hasRings: boolean,  enclose: boolean,  sideOrientation: number } |   
 | scene | any |   
### static CreateTorus(name, options, scene) &rarr; [Mesh](/classes/2.5/Mesh)

Creates a torus mesh.

tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#torus

The parameter `diameter` sets the diameter size (float) of the torus (default 1).

The parameter `thickness` sets the diameter size of the tube of the torus (float, default 0.5).

The parameter `tessellation` sets the number of torus sides (postive integer, default 16).

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.5/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.5/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.5/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | options | { diameter: number,  thickness: number,  tessellation: number,  updatable: boolean,  sideOrientation: number } |   
 | scene | any |   
### static CreateTorusKnot(name, options, scene) &rarr; [Mesh](/classes/2.5/Mesh)

Creates a torus knot mesh.

tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#torus-knot

The parameter `radius` sets the global radius size (float) of the torus knot (default 2).

The parameter `radialSegments` sets the number of sides on each tube segments (positive integer, default 32).

The parameter `tubularSegments` sets the number of tubes to decompose the knot into (positive integer, default 32).

The parameters `p` and `q` are the number of windings on each axis (positive integers, default 2 and 3).

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.5/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.5/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.5/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | options | { radius: number,  tube: number,  radialSegments: number,  tubularSegments: number,  p: number,  q: number,  updatable: boolean,  sideOrientation: number } |   
 | scene | any |   
### static CreateLineSystem(name, options, scene) &rarr; [LinesMesh](/classes/2.5/LinesMesh)

Creates a line system mesh.

A line system is a pool of many lines gathered in a single mesh.

tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#linesystem

A line system mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of lines as an input parameter.

Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineSystem to this static function.

The parameter `lines` is an array of lines, each line being an array of successive [Vector3](/classes/2.5/Vector3).

The optional parameter `instance` is an instance of an existing LineSystem object to be updated with the passed `lines` parameter. The way to update it is the same than for

updating a simple Line mesh, you just need to update every line in the `lines` array : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#lines-and-dashedlines

When updating an instance, remember that only line point positions can change, not the number of points, neither the number of lines.

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | options | { lines: [Vector3](/classes/2.5/Vector3)[][],  updatable: boolean,  instance: [LinesMesh](/classes/2.5/LinesMesh) } |   
 | scene | [Scene](/classes/2.5/Scene) |   
### static CreateLines(name, options, scene) &rarr; [LinesMesh](/classes/2.5/LinesMesh)

Creates a line mesh.

tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#lines

A line mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of points as an input parameter.

Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineMesh to this static function.

The parameter `points` is an array successive [Vector3](/classes/2.5/Vector3).

The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#lines-and-dashedlines

When updating an instance, remember that only point positions can change, not the number of points.

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | options | { points: [Vector3](/classes/2.5/Vector3)[],  updatable: boolean,  instance: [LinesMesh](/classes/2.5/LinesMesh) } |   
 | scene | [Scene](/classes/2.5/Scene) |   
### static CreateDashedLines(name, options, scene) &rarr; [LinesMesh](/classes/2.5/LinesMesh)

Creates a dashed line mesh.

tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#dashed-lines

A dashed line mesh is considered as a parametric shape since it has no predefined original shape. Its shape is determined by the passed array of points as an input parameter.

Like every other parametric shape, it is dynamically updatable by passing an existing instance of LineMesh to this static function.

The parameter `points` is an array successive [Vector3](/classes/2.5/Vector3).

The parameter `dashNb` is the intended total number of dashes (positive integer, default 200).

The parameter `dashSize` is the size of the dashes relatively the dash number (positive float, default 3).

The parameter `gapSize` is the size of the gap between two successive dashes relatively the dash number (positive float, default 1).

The optional parameter `instance` is an instance of an existing LineMesh object to be updated with the passed `points` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#lines-and-dashedlines

When updating an instance, remember that only point positions can change, not the number of points.

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | options | { points: [Vector3](/classes/2.5/Vector3)[],  dashSize: number,  gapSize: number,  dashNb: number,  updatable: boolean,  instance: [LinesMesh](/classes/2.5/LinesMesh) } |   
 | scene | [Scene](/classes/2.5/Scene) |   
### static ExtrudeShape(name, options, scene) &rarr; [Mesh](/classes/2.5/Mesh)

Creates an extruded shape mesh.

The extrusion is a parametric shape :  http://doc.babylonjs.com/tutorials/Parametric_Shapes.  It has no predefined shape. Its final shape will depend on the input parameters.

tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#extruded-shapes

         * Please read this full tutorial to understand how to design an extruded shape : http://doc.babylonjs.com/tutorials/Parametric_Shapes#extrusion

The parameter `shape` is a required array of successive [Vector3](/classes/2.5/Vector3). This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be

extruded along the Z axis.

The parameter `path` is a required array of successive [Vector3](/classes/2.5/Vector3). This is the axis curve the shape is extruded along.

The parameter `rotation` (float, default 0 radians) is the angle value to rotate the shape each step (each path point), from the former step (so rotation added each step) along the curve.

The parameter `scale` (float, default 1) is the value to scale the shape.

The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.[Mesh](/classes/2.5/Mesh).NO_CAP (default), BABYLON.[Mesh](/classes/2.5/Mesh).CAP_START, BABYLON.[Mesh](/classes/2.5/Mesh).CAP_END, BABYLON.[Mesh](/classes/2.5/Mesh).CAP_ALL

The optional parameter `instance` is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#extruded-shape

Remember you can only change the shape or path point positions, not their number when updating an extruded shape.

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.5/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.5/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.5/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture.

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | options | { shape: [Vector3](/classes/2.5/Vector3)[],  path: [Vector3](/classes/2.5/Vector3)[],  scale: number,  rotation: number,  cap: number,  updatable: boolean,  sideOrientation: number,  instance: [Mesh](/classes/2.5/Mesh),  invertUV: boolean } |   
 | scene | [Scene](/classes/2.5/Scene) |   
### static ExtrudeShapeCustom(name, options, scene) &rarr; [Mesh](/classes/2.5/Mesh)

Creates an custom extruded shape mesh.

The custom extrusion is a parametric shape :  http://doc.babylonjs.com/tutorials/Parametric_Shapes.  It has no predefined shape. Its final shape will depend on the input parameters.

tuto :http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#custom-extruded-shapes

         * Please read this full tutorial to understand how to design a custom extruded shape : http://doc.babylonjs.com/tutorials/Parametric_Shapes#extrusion

The parameter `shape` is a required array of successive [Vector3](/classes/2.5/Vector3). This array depicts the shape to be extruded in its local space : the shape must be designed in the xOy plane and will be

extruded along the Z axis.

The parameter `path` is a required array of successive [Vector3](/classes/2.5/Vector3). This is the axis curve the shape is extruded along.

The parameter `rotationFunction` (JS function) is a custom Javascript function called on each path point. This function is passed the position i of the point in the path

and the distance of this point from the begining of the path :

```javascript

var rotationFunction = function(i, distance) {

    // do things

    return rotationValue; }

```

It must returns a float value that will be the rotation in radians applied to the shape on each path point.

The parameter `scaleFunction` (JS function) is a custom Javascript function called on each path point. This function is passed the position i of the point in the path

and the distance of this point from the begining of the path :

```javascript

var scaleFunction = function(i, distance) {

    // do things

    return scaleValue;}

```

It must returns a float value that will be the scale value applied to the shape on each path point.

The parameter `ribbonClosePath` (boolean, default false) forces the extrusion underlying ribbon to close all the paths in its `pathArray`.

The parameter `ribbonCloseArray` (boolean, default false) forces the extrusion underlying ribbon to close its `pathArray`.

The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.[Mesh](/classes/2.5/Mesh).NO_CAP (default), BABYLON.[Mesh](/classes/2.5/Mesh).CAP_START, BABYLON.[Mesh](/classes/2.5/Mesh).CAP_END, BABYLON.[Mesh](/classes/2.5/Mesh).CAP_ALL

The optional parameter `instance` is an instance of an existing ExtrudedShape object to be updated with the passed `shape`, `path`, `scale` or `rotation` parameters : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#extruded-shape

Remember you can only change the shape or path point positions, not their number when updating an extruded shape.

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.5/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.5/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.5/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture.

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | options | { shape: [Vector3](/classes/2.5/Vector3)[],  path: [Vector3](/classes/2.5/Vector3)[],  scaleFunction: any,  rotationFunction: any,  ribbonCloseArray: boolean,  ribbonClosePath: boolean,  cap: number,  updatable: boolean,  sideOrientation: number,  instance: [Mesh](/classes/2.5/Mesh),  invertUV: boolean } |   
 | scene | [Scene](/classes/2.5/Scene) |   
### static CreateLathe(name, options, scene) &rarr; [Mesh](/classes/2.5/Mesh)

Creates lathe mesh.

The lathe is a shape with a symetry axis : a 2D model shape is rotated around this axis to design the lathe.

tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#lathe

         * The parameter `shape` is a required array of successive [Vector3](/classes/2.5/Vector3). This array depicts the shape to be rotated in its local space : the shape must be designed in the xOy plane and will be

rotated around the Y axis. It's usually a 2D shape, so the [Vector3](/classes/2.5/Vector3) z coordinates are often set to zero.

The parameter `radius` (positive float, default 1) is the radius value of the lathe.

The parameter `tessellation` (positive integer, default 64) is the side number of the lathe.

The parameter `arc` (positive float, default 1) is the ratio of the lathe. 0.5 builds for instance half a lathe, so an opened shape.

The parameter `closed` (boolean, default true) opens/closes the lathe circumference. This should be set to false when used with the parameter "arc".

The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.[Mesh](/classes/2.5/Mesh).NO_CAP (default), BABYLON.[Mesh](/classes/2.5/Mesh).CAP_START, BABYLON.[Mesh](/classes/2.5/Mesh).CAP_END, BABYLON.[Mesh](/classes/2.5/Mesh).CAP_ALL

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.5/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.5/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.5/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture.

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | options | { shape: [Vector3](/classes/2.5/Vector3)[],  radius: number,  tessellation: number,  arc: number,  closed: boolean,  updatable: boolean,  sideOrientation: number,  cap: number,  invertUV: boolean } |   
 | scene | [Scene](/classes/2.5/Scene) |   
### static CreatePlane(name, options, scene) &rarr; [Mesh](/classes/2.5/Mesh)

Creates a plane mesh.

tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#plane

The parameter `size` sets the size (float) of both sides of the plane at once (default 1).

You can set some different plane dimensions by using the parameters `width` and `height` (both by default have the same value than `size`).

The parameter `sourcePlane` is a [Plane](/classes/2.5/Plane) instance. It builds a mesh plane from a Math plane.

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.5/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.5/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.5/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | options | { size: number,  width: number,  height: number,  sideOrientation: number,  updatable: boolean,  sourcePlane: [Plane](/classes/2.5/Plane) } |   
 | scene | [Scene](/classes/2.5/Scene) |   
### static CreateGround(name, options, scene) &rarr; [Mesh](/classes/2.5/Mesh)

Creates a ground mesh.

tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#plane

The parameters `width` and `height` (floats, default 1) set the width and height sizes of the ground.

The parameter `subdivisions` (positive integer) sets the number of subdivisions per side.

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | options | { width: number,  height: number,  subdivisions: number,  subdivisionsX: number,  subdivisionsY: number,  updatable: boolean } |   
 | scene | any |   
### static CreateTiledGround(name, options, scene) &rarr; [Mesh](/classes/2.5/Mesh)

Creates a tiled ground mesh.

tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#tiled-ground

The parameters `xmin` and `xmax` (floats, default -1 and 1) set the ground minimum and maximum X coordinates.

The parameters `zmin` and `zmax` (floats, default -1 and 1) set the ground minimum and maximum Z coordinates.

The parameter `subdivisions` is a javascript object `{w: positive integer, h: positive integer}` (default `{w: 6, h: 6}`). `w` and `h` are the

numbers of subdivisions on the ground width and height. Each subdivision is called a tile.

The parameter `precision` is a javascript object `{w: positive integer, h: positive integer}` (default `{w: 2, h: 2}`). `w` and `h` are the

numbers of subdivisions on the ground width and height of each tile.

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | options | { xmin: number,  zmin: number,  xmax: number,  zmax: number,  subdivisions: { w: number,  h: number },  precision: { w: number,  h: number },  updatable: boolean } |   
 | scene | [Scene](/classes/2.5/Scene) |   
### static CreateGroundFromHeightMap(name, url, options, scene) &rarr; [GroundMesh](/classes/2.5/GroundMesh)

Creates a ground mesh from a height map.

tuto : http://doc.babylonjs.com/tutorials/14._Height_Map

tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#ground-from-a-height-map

The parameter `url` sets the URL of the height map image resource.

The parameters `width` and `height` (positive floats, default 10) set the ground width and height sizes.

The parameter `subdivisions` (positive integer, default 1) sets the number of subdivision per side.

The parameter `minHeight` (float, default 0) is the minimum altitude on the ground.

The parameter `maxHeight` (float, default 1) is the maximum altitude on the ground.

The parameter `onReady` is a javascript callback function that will be called  once the mesh is just built (the height map download can last some time).

This function is passed the newly built mesh :

```javascript

function(mesh) { // do things

    return; }

```

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | url | string |   
 | options | { width: number,  height: number,  subdivisions: number,  minHeight: number,  maxHeight: number,  updatable: boolean,  onReady: (mesh: [GroundMesh](/classes/2.5/GroundMesh)) =&gt; void } |   
### static CreateTube(name, options, scene) &rarr; [Mesh](/classes/2.5/Mesh)

Creates a tube mesh.

The tube is a parametric shape :  http://doc.babylonjs.com/tutorials/Parametric_Shapes.  It has no predefined shape. Its final shape will depend on the input parameters.

         * tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#tube

The parameter `path` is a required array of successive [Vector3](/classes/2.5/Vector3). It is the curve used as the axis of the tube.

The parameter `radius` (positive float, default 1) sets the tube radius size.

The parameter `tessellation` (positive float, default 64) is the number of sides on the tubular surface.

The parameter `radiusFunction` (javascript function, default null) is a vanilla javascript function. If it is not null, it overwrittes the parameter `radius`.

This function is called on each point of the tube path and is passed the index `i` of the i-th point and the distance of this point from the first point of the path.

It must return a radius value (positive float) :

```javascript

var radiusFunction = function(i, distance) {

    // do things

    return radius; }

```

The parameter `arc` (positive float, maximum 1, default 1) is the ratio to apply to the tube circumference : 2 x PI x arc.

The parameter `cap` sets the way the extruded shape is capped. Possible values : BABYLON.[Mesh](/classes/2.5/Mesh).NO_CAP (default), BABYLON.[Mesh](/classes/2.5/Mesh).CAP_START, BABYLON.[Mesh](/classes/2.5/Mesh).CAP_END, BABYLON.[Mesh](/classes/2.5/Mesh).CAP_ALL

The optional parameter `instance` is an instance of an existing Tube object to be updated with the passed `pathArray` parameter : http://doc.babylonjs.com/tutorials/How_to_dynamically_morph_a_mesh#tube

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.5/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.5/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.5/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The optional parameter `invertUV` (boolean, default false) swaps in the geometry the U and V coordinates to apply a texture.

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | options | { path: [Vector3](/classes/2.5/Vector3)[],  radius: number,  tessellation: number,  radiusFunction: { (i, distance): number },  cap: number,  arc: number,  updatable: boolean,  sideOrientation: number,  instance: [Mesh](/classes/2.5/Mesh),  invertUV: boolean } |   
 | scene | [Scene](/classes/2.5/Scene) |   
### static CreatePolyhedron(name, options, scene) &rarr; [Mesh](/classes/2.5/Mesh)

Creates a polyhedron mesh.

         * tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#polyhedron

The parameter `type` (positive integer, max 14, default 0) sets the polyhedron type to build among the 15 embbeded types. Please refer to the type sheet in the tutorial

 to choose the wanted type.

The parameter `size` (positive float, default 1) sets the polygon size.

You can overwrite the `size` on each dimension bu using the parameters `sizeX`, `sizeY` or `sizeZ` (positive floats, default to `size` value).

You can build other polyhedron types than the 15 embbeded ones by setting the parameter `custom` (`polyhedronObject`, default null). If you set the parameter `custom`, this overwrittes the parameter `type`.

A `polyhedronObject` is a formatted javascript object. You'll find a full file with pre-set polyhedra here : https://github.com/BabylonJS/Extensions/tree/master/Polyhedron

You can set the color and the UV of each side of the polyhedron with the parameters `faceColors` ([Color4](/classes/2.5/Color4), default `(1, 1, 1, 1)`) and faceUV ([Vector4](/classes/2.5/Vector4), default `(0, 0, 1, 1)`).

To understand how to set `faceUV` or `faceColors`, please read this by considering the right number of faces of your polyhedron, instead of only 6 for the box : http://doc.babylonjs.com/tutorials/CreateBox_Per_Face_Textures_And_Colors

The parameter `flat` (boolean, default true). If set to false, it gives the polyhedron a single global face, so less vertices and shared normals. In this case, `faceColors` and `faceUV` are ignored.

You can also set the mesh side orientation with the values : BABYLON.[Mesh](/classes/2.5/Mesh).FRONTSIDE (default), BABYLON.[Mesh](/classes/2.5/Mesh).BACKSIDE or BABYLON.[Mesh](/classes/2.5/Mesh).DOUBLESIDE

Detail here : http://doc.babylonjs.com/tutorials/02._Discover_Basic_Elements#side-orientation

The mesh can be set to updatable with the boolean parameter `updatable` (default false) if its internal geometry is supposed to change once created.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | options | { type: number,  size: number,  sizeX: number,  sizeY: number,  sizeZ: number,  custom: any,  faceUV: [Vector4](/classes/2.5/Vector4)[],  faceColors: [Color4](/classes/2.5/Color4)[],  flat: boolean,  updatable: boolean,  sideOrientation: number } |   
 | scene | [Scene](/classes/2.5/Scene) |   
### static CreateDecal(name, sourceMesh, options) &rarr; [Mesh](/classes/2.5/Mesh)

Creates a decal mesh.

tuto : http://doc.babylonjs.com/tutorials/Mesh_CreateXXX_Methods_With_Options_Parameter#decals

A decal is a mesh usually applied as a model onto the surface of another mesh. So don't forget the parameter `sourceMesh` depicting the decal.

The parameter `position` ([Vector3](/classes/2.5/Vector3), default `(0, 0, 0)`) sets the position of the decal in World coordinates.

The parameter `normal` ([Vector3](/classes/2.5/Vector3), default `[Vector3](/classes/2.5/Vector3).Up`) sets the normal of the mesh where the decal is applied onto in World coordinates.

The parameter `size` ([Vector3](/classes/2.5/Vector3), default `(1, 1, 1)`) sets the decal scaling.

The parameter `angle` (float in radian, default 0) sets the angle to rotate the decal.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   
 | sourceMesh | [AbstractMesh](/classes/2.5/AbstractMesh) |   
 | options | { position: [Vector3](/classes/2.5/Vector3),  normal: [Vector3](/classes/2.5/Vector3),  size: [Vector3](/classes/2.5/Vector3),  angle: number } |   
