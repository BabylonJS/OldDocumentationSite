---
ID_PAGE: 25261
PG_TITLE: VertexData
PG_VERSION: 2.1
---
##Description

class [VertexData](/classes/2.2/VertexData)

The [VertexData](/classes/2.2/VertexData) class.

##Members

###positions : number[]

The [VertexData](/classes/2.2/VertexData) position

###normals : number[]

The [VertexData](/classes/2.2/VertexData) normals

###uvs : number[]

The [VertexData](/classes/2.2/VertexData) uvs

###uvs2 : number[]



###uvs3 : number[]



###uvs4 : number[]



###uvs5 : number[]



###uvs6 : number[]



###colors : number[]

The [VertexData](/classes/2.2/VertexData) colors

###matricesIndices : number[]

The [VertexData](/classes/2.2/VertexData) matricesIndices

###matricesWeights : number[]

The [VertexData](/classes/2.2/VertexData) matricesWeights

###indices : number[]

The [VertexData](/classes/2.2/VertexData) indices

##Methods

###set(data, kind) &rarr; void

Set the vertex data

####Parameters
 | Name | Type | Description
---|---|---|---
 | data | number[] |  @param data
 | kind | string |  @param kind
###applyToMesh(mesh, updatable) &rarr; void

Apply To mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.2/Mesh) |  @param mesh
optional | updatable | boolean |  @param updatable
###applyToGeometry(geometry, updatable) &rarr; void

Apply to [Geometry](/classes/2.2/Geometry)

####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/2.2/Geometry) |  @param geometry
optional | updatable | boolean |  @param updatable
###updateMesh(mesh, updateExtends, makeItUnique) &rarr; void

Update [Mesh](/classes/2.2/Mesh)

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.2/Mesh) |  @param mesh
optional | updateExtends | boolean |  Not used here
optional | makeItUnique | boolean |  Not used here
###updateGeometry(geometry, updateExtends, makeItUnique) &rarr; void

Update

####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/2.2/Geometry) |  @param geometry
optional | updateExtends | boolean |  Not used here
optional | makeItUnique | boolean |  Not used here
###transform(matrix) &rarr; void

Transform his vertexdata with the given matri

####Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.2/Matrix) |  @param matrix

###merge(other) &rarr; void

Merge this vertex data with the one given in parameter

####Parameters
 | Name | Type | Description
---|---|---|---
 | other | [VertexData](/classes/2.2/VertexData) |  @param other

###static ExtractFromMesh(mesh, copyWhenShared) &rarr; [VertexData](/classes/2.2/VertexData)

Creates a new VertexDataObject with values extracted of the given mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.2/Mesh) |  @param mesh
optional | copyWhenShared | boolean |  
###static ExtractFromGeometry(geometry, copyWhenShared) &rarr; [VertexData](/classes/2.2/VertexData)

Creates a new VertexDataObject with values extracted of the given geometry

####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/2.2/Geometry) |  @param geometry
optional | copyWhenShared | boolean |  
###static CreateRibbon(pathArray, closeArray, closePath, offset, sideOrientation) &rarr; [VertexData](/classes/2.2/VertexData)



####Parameters
 | Name | Type | Description
---|---|---|---
 | pathArray | [Vector3](/classes/2.2/Vector3)[][] |  
 | closeArray | boolean |  
 | closePath | boolean |  
 | offset | number |  
###static CreateBox(options) &rarr; [VertexData](/classes/2.2/VertexData)



####Parameters
 | Name | Type | Description
---|---|---|---
 | options | { width: number,  height: number,  depth: number,  faceUV: [Vector4](/classes/2.2/Vector4)[],  faceColors: [Color4](/classes/2.2/Color4)[],  sideOrientation: number } | 

###static CreateBox(size, sideOrientation) &rarr; [VertexData](/classes/2.2/VertexData)

Creates a new [VertexData](/classes/2.2/VertexData) object of a box of the given size

####Parameters
 | Name | Type | Description
---|---|---|---
 | size | number |  the size of the plane
optional | sideOrientation | number |  
###static CreateSphere(options) &rarr; [VertexData](/classes/2.2/VertexData)



####Parameters
 | Name | Type | Description
---|---|---|---
 | options | { segments: number,  diameterX: number,  diameterY: number,  diameterZ: number,  sideOrientation: number } | 

###static CreateSphere(segments, diameter, sideOrientation) &rarr; [VertexData](/classes/2.2/VertexData)

Creates a new [VertexData](/classes/2.2/VertexData) object of a sphere of the given diameter

####Parameters
 | Name | Type | Description
---|---|---|---
 | segments | number |  The number of segments of the result sphere
optional | diameter | number |  The diameter of the [Torus](/classes/2.2/Torus)
optional | sideOrientation | number |  
###static CreateCylinder(height, diameterTop, diameterBottom, tessellation, subdivisions, sideOrientation) &rarr; [VertexData](/classes/2.2/VertexData)

Creates a new [VertexData](/classes/2.2/VertexData) object of a cylinder of the given parameters

####Parameters
 | Name | Type | Description
---|---|---|---
 | height | number |  The width of the GroundFromHeightMap
 | diameterTop | number |  Diameter at top of the cylinder
 | diameterBottom | number |  Diameter at bottom of the cylinder
 | tessellation | number |  
optional | subdivisions | number |  The number of subdivisions in the GroundFromHeightMap
###static CreateTorus(diameter, thickness, tessellation, sideOrientation) &rarr; [VertexData](/classes/2.2/VertexData)

Creates a new [VertexData](/classes/2.2/VertexData) object of a torus of the given parameters

####Parameters
 | Name | Type | Description
---|---|---|---
 | diameter | any |  The diameter of the [Torus](/classes/2.2/Torus)
 | thickness | any |  The thickness of the [Torus](/classes/2.2/Torus)
 | tessellation | any |  
###static CreateLines(points) &rarr; [VertexData](/classes/2.2/VertexData)

Creates a new [VertexData](/classes/2.2/VertexData) object of a ground of the given parameters

####Parameters
 | Name | Type | Description
---|---|---|---
 | points | [Vector3](/classes/2.2/Vector3)[] |  

###static CreateDashedLines(points, dashSize, gapSize, dashNb) &rarr; [VertexData](/classes/2.2/VertexData)



####Parameters
 | Name | Type | Description
---|---|---|---
 | points | [Vector3](/classes/2.2/Vector3)[] |  
 | dashSize | number |  
 | gapSize | number |  
###static CreateGround(options) &rarr; [VertexData](/classes/2.2/VertexData)



####Parameters
 | Name | Type | Description
---|---|---|---
 | options | { width: number,  height: number,  subdivisions: number,  sideOrientation: number } | 

###static CreateGround(width, height, subdivisions) &rarr; [VertexData](/classes/2.2/VertexData)

Creates a new [VertexData](/classes/2.2/VertexData) object of a ground of the given parameters

####Parameters
 | Name | Type | Description
---|---|---|---
 | width | number |  The width of the GroundFromHeightMap
 | height | number |  The width of the GroundFromHeightMap
optional | subdivisions | number |  The number of subdivisions in the GroundFromHeightMap
###static CreateTiledGround(xmin, zmin, xmax, zmax, subdivisions, precision) &rarr; [VertexData](/classes/2.2/VertexData)

; 
Create a new [VertexData](/classes/2.2/VertexData) object of a [TiledGround](/classes/2.2/TiledGround) with the given properties

####Parameters
 | Name | Type | Description
---|---|---|---
 | xmin | number |  The xmin of the [Ground](/classes/2.2/Ground)
 | zmin | number |  The zmin of the [Ground](/classes/2.2/Ground)
 | xmax | number |  The xmax of the [Ground](/classes/2.2/Ground)
 | zmax | number |  The zmax of the [Ground](/classes/2.2/Ground)
optional | subdivisions | { w: number,  h: number } |  The number of subdivisions in the GroundFromHeightMap
###static CreateGroundFromHeightMap(width, height, subdivisions, minHeight, maxHeight, buffer, bufferWidth, bufferHeight) &rarr; [VertexData](/classes/2.2/VertexData)

Creates a new [VertexData](/classes/2.2/VertexData) object of a huge ground of the given parameters

####Parameters
 | Name | Type | Description
---|---|---|---
 | width | number |  The width of the GroundFromHeightMap
 | height | number |  The width of the GroundFromHeightMap
 | subdivisions | number |  The number of subdivisions in the GroundFromHeightMap
 | minHeight | number |  The minimum Height of the new GFHM
 | maxHeight | number |  The maximum height of the Height map
 | buffer | Uint8Array |  @param buffer
 | bufferWidth | number |  @param bufferWidth
###static CreatePlane(options) &rarr; [VertexData](/classes/2.2/VertexData)



####Parameters
 | Name | Type | Description
---|---|---|---
 | options | { width: number,  height: number,  sideOrientation: number } | 

###static CreatePlane(size, sideOrientation) &rarr; [VertexData](/classes/2.2/VertexData)

Creates a new [VertexData](/classes/2.2/VertexData) object of a plane of the given parameters

####Parameters
 | Name | Type | Description
---|---|---|---
 | size | number |  the size of the plane
optional | sideOrientation | number |  
###static CreateDisc(radius, tessellation, sideOrientation) &rarr; [VertexData](/classes/2.2/VertexData)



####Parameters
 | Name | Type | Description
---|---|---|---
 | radius | number |  The radius of the [TorusKnot](/classes/2.2/TorusKnot)
 | tessellation | number |  
optional | sideOrientation | number |  
###static CreateTorusKnot(radius, tube, radialSegments, tubularSegments, p, q, sideOrientation) &rarr; [VertexData](/classes/2.2/VertexData)

Creates a new [VertexData](/classes/2.2/VertexData) object of a torus knot of the given parameters. &lt;br/&gt;
Based on &lt;a href=&quot;http://code.google.com/p/away3d/source/browse/trunk/fp10/Away3D/src/away3d/primitives/[TorusKnot](/classes/2.2/TorusKnot).as?spec=svn2473&amp;r=2473&quot;&gt;http://code.google.com/p/away3d/source/browse/trunk/fp10/Away3D/src/away3d/primitives/[TorusKnot](/classes/2.2/TorusKnot).as?spec=svn2473&amp;r=2473&lt;/a&gt;

####Parameters
 | Name | Type | Description
---|---|---|---
 | radius | number |  The radius of the [TorusKnot](/classes/2.2/TorusKnot)
 | tube | number |  @param tube
 | radialSegments | number |  @param radialSegments
 | tubularSegments | number |  @param tubularSegments
 | p | number |  Describes up-and-down (P) winding numbers
 | q | number |  Describes around-the-center (Q) winding numbers
###static ComputeNormals(positions, indices, normals) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | positions | any |  @param positions
 | indices | any |  @param indices
 | normals | any |  @param normals
