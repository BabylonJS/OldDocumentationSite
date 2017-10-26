---
ID_PAGE: 25261
PG_TITLE: VertexData
PG_VERSION: 2.1
---
## Description

class [VertexData](/classes/3.1/VertexData)



## Members

### positions : number[]



### Float32Array : undefined



### normals : number[]



### Float32Array : undefined



### tangents : number[]



### Float32Array : undefined



### uvs : number[]



### Float32Array : undefined



### uvs2 : number[]



### Float32Array : undefined



### uvs3 : number[]



### Float32Array : undefined



### uvs4 : number[]



### Float32Array : undefined



### uvs5 : number[]



### Float32Array : undefined



### uvs6 : number[]



### Float32Array : undefined



### colors : number[]



### Float32Array : undefined



### matricesIndices : number[]



### Float32Array : undefined



### matricesWeights : number[]



### Float32Array : undefined



### matricesIndicesExtra : number[]



### Float32Array : undefined



### matricesWeightsExtra : number[]



### Float32Array : undefined



### indices : IndicesArray



## Methods

### set(data, Float32Array, kind) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | number[] or Float32Array | 
 | kind | string | 
### applyToMesh(mesh, updatable) &rarr; [VertexData](/classes/3.1/VertexData)

Associates the vertexData to the passed [Mesh](/classes/3.1/Mesh).

Sets it as updatable or not (default `false`).

Returns the [VertexData](/classes/3.1/VertexData).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/3.1/Mesh) | 
optional | updatable | boolean | 
### applyToGeometry(geometry, updatable) &rarr; [VertexData](/classes/3.1/VertexData)

Associates the vertexData to the passed [Geometry](/classes/3.1/Geometry).

Sets it as updatable or not (default `false`).

Returns the [VertexData](/classes/3.1/VertexData).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/3.1/Geometry) | 
optional | updatable | boolean | 
### updateMesh(mesh, updateExtends, makeItUnique) &rarr; [VertexData](/classes/3.1/VertexData)

Updates the associated mesh.

Returns the [VertexData](/classes/3.1/VertexData).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/3.1/Mesh) | 
optional | updateExtends | boolean | 
optional | makeItUnique | boolean | 
### updateGeometry(geometry, updateExtends, makeItUnique) &rarr; [VertexData](/classes/3.1/VertexData)

Updates the associated geometry.

Returns the [VertexData](/classes/3.1/VertexData).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/3.1/Geometry) | 
optional | updateExtends | boolean | 
optional | makeItUnique | boolean | 
### transform(matrix) &rarr; [VertexData](/classes/3.1/VertexData)

Transforms each position and each normal of the vertexData according to the passed [Matrix](/classes/3.1/Matrix).

Returns the [VertexData](/classes/3.1/VertexData).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/3.1/Matrix) | 

### merge(other, options) &rarr; [VertexData](/classes/3.1/VertexData)

Merges the passed [VertexData](/classes/3.1/VertexData) into the current one.

Returns the modified [VertexData](/classes/3.1/VertexData).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [VertexData](/classes/3.1/VertexData) | 
optional | options | { tangentLength: number } | 
### serialize() &rarr; any

Serializes the [VertexData](/classes/3.1/VertexData).

Returns a serialized object.
### static ExtractFromMesh(mesh, copyWhenShared, forceCopy) &rarr; [VertexData](/classes/3.1/VertexData)

Returns the object [VertexData](/classes/3.1/VertexData) associated to the passed mesh.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/3.1/Mesh) | 
optional | copyWhenShared | boolean | 
optional | forceCopy | boolean | 
### static ExtractFromGeometry(geometry, copyWhenShared, forceCopy) &rarr; [VertexData](/classes/3.1/VertexData)

Returns the object [VertexData](/classes/3.1/VertexData) associated to the passed geometry.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/3.1/Geometry) | 
optional | copyWhenShared | boolean | 
optional | forceCopy | boolean | 
### static CreateRibbon(options) &rarr; [VertexData](/classes/3.1/VertexData)

Creates the vertexData of the [Ribbon](/classes/3.1/Ribbon).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { pathArray: [Vector3](/classes/3.1/Vector3)[][],  closeArray: boolean,  closePath: boolean,  offset: number,  sideOrientation: number,  frontUVs: [Vector4](/classes/3.1/Vector4),  backUVs: [Vector4](/classes/3.1/Vector4),  invertUV: boolean,  uvs: [Vector2](/classes/3.1/Vector2)[],  colors: [Color4](/classes/3.1/Color4)[] } | 

### static CreateBox(options) &rarr; [VertexData](/classes/3.1/VertexData)

Creates the [VertexData](/classes/3.1/VertexData) of the [Box](/classes/3.1/Box).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { size: number,  width: number,  height: number,  depth: number,  faceUV: [Vector4](/classes/3.1/Vector4)[],  faceColors: [Color4](/classes/3.1/Color4)[],  sideOrientation: number,  frontUVs: [Vector4](/classes/3.1/Vector4),  backUVs: [Vector4](/classes/3.1/Vector4) } | 

### static CreateSphere(options) &rarr; [VertexData](/classes/3.1/VertexData)

Creates the [VertexData](/classes/3.1/VertexData) of the [Sphere](/classes/3.1/Sphere).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { segments: number,  diameter: number,  diameterX: number,  diameterY: number,  diameterZ: number,  arc: number,  slice: number,  sideOrientation: number,  frontUVs: [Vector4](/classes/3.1/Vector4),  backUVs: [Vector4](/classes/3.1/Vector4) } | 

### static CreateCylinder(options) &rarr; [VertexData](/classes/3.1/VertexData)

Creates the [VertexData](/classes/3.1/VertexData) of the [Cylinder](/classes/3.1/Cylinder) or Cone.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { height: number,  diameterTop: number,  diameterBottom: number,  diameter: number,  tessellation: number,  subdivisions: number,  arc: number,  faceColors: [Color4](/classes/3.1/Color4)[],  faceUV: [Vector4](/classes/3.1/Vector4)[],  hasRings: boolean,  enclose: boolean,  sideOrientation: number,  frontUVs: [Vector4](/classes/3.1/Vector4),  backUVs: [Vector4](/classes/3.1/Vector4) } | 

### static CreateTorus(options) &rarr; [VertexData](/classes/3.1/VertexData)

Creates the [VertexData](/classes/3.1/VertexData) of the [Torus](/classes/3.1/Torus).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { diameter: number,  thickness: number,  tessellation: number,  sideOrientation: number,  frontUVs: [Vector4](/classes/3.1/Vector4),  backUVs: [Vector4](/classes/3.1/Vector4) } | 

### static CreateLineSystem(options) &rarr; [VertexData](/classes/3.1/VertexData)

Creates the [VertexData](/classes/3.1/VertexData) of the LineSystem.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { lines: [Vector3](/classes/3.1/Vector3)[][] } | 

### static CreateDashedLines(options) &rarr; [VertexData](/classes/3.1/VertexData)

Create the [VertexData](/classes/3.1/VertexData) of the DashedLines.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { points: [Vector3](/classes/3.1/Vector3)[],  dashSize: number,  gapSize: number,  dashNb: number } | 

### static CreateGround(options) &rarr; [VertexData](/classes/3.1/VertexData)

Creates the [VertexData](/classes/3.1/VertexData) of the [Ground](/classes/3.1/Ground).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { width: number,  height: number,  subdivisions: number,  subdivisionsX: number,  subdivisionsY: number } | 

### static CreateTiledGround(options) &rarr; [VertexData](/classes/3.1/VertexData)

Creates the [VertexData](/classes/3.1/VertexData) of the [TiledGround](/classes/3.1/TiledGround).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { xmin: number,  zmin: number,  xmax: number,  zmax: number,  subdivisions: { w: number,  h: number },  precision: { w: number,  h: number } } | 

### static CreateGroundFromHeightMap(options) &rarr; [VertexData](/classes/3.1/VertexData)

Creates the [VertexData](/classes/3.1/VertexData) of the [Ground](/classes/3.1/Ground) designed from a heightmap.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { width: number,  height: number,  subdivisions: number,  minHeight: number,  maxHeight: number,  colorFilter: [Color3](/classes/3.1/Color3),  buffer: Uint8Array,  bufferWidth: number,  bufferHeight: number } | 

### static CreatePlane(options) &rarr; [VertexData](/classes/3.1/VertexData)

Creates the [VertexData](/classes/3.1/VertexData) of the [Plane](/classes/3.1/Plane).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { size: number,  width: number,  height: number,  sideOrientation: number,  frontUVs: [Vector4](/classes/3.1/Vector4),  backUVs: [Vector4](/classes/3.1/Vector4) } | 

### static CreateDisc(options) &rarr; [VertexData](/classes/3.1/VertexData)

Creates the [VertexData](/classes/3.1/VertexData) of the [Disc](/classes/3.1/Disc) or regular [Polygon](/classes/3.1/Polygon).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { radius: number,  tessellation: number,  arc: number,  sideOrientation: number,  frontUVs: [Vector4](/classes/3.1/Vector4),  backUVs: [Vector4](/classes/3.1/Vector4) } | 

### static CreatePolygon(polygon, sideOrientation, fUV, fColors, frontUVs, backUVs) &rarr; [VertexData](/classes/3.1/VertexData)

Re-creates the [VertexData](/classes/3.1/VertexData) of the [Polygon](/classes/3.1/Polygon) for sideOrientation.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | polygon | [Mesh](/classes/3.1/Mesh) | 
 | sideOrientation | number | 
optional | fUV | [Vector4](/classes/3.1/Vector4)[] | 
optional | fColors | [Color4](/classes/3.1/Color4)[] | 
optional | frontUVs | [Vector4](/classes/3.1/Vector4) | 
### static CreateIcoSphere(options) &rarr; [VertexData](/classes/3.1/VertexData)

Creates the [VertexData](/classes/3.1/VertexData) of the IcoSphere.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { radius: number,  radiusX: number,  radiusY: number,  radiusZ: number,  flat: boolean,  subdivisions: number,  sideOrientation: number,  frontUVs: [Vector4](/classes/3.1/Vector4),  backUVs: [Vector4](/classes/3.1/Vector4) } | 

### static CreatePolyhedron(options) &rarr; [VertexData](/classes/3.1/VertexData)

Creates the [VertexData](/classes/3.1/VertexData) of the Polyhedron.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { type: number,  size: number,  sizeX: number,  sizeY: number,  sizeZ: number,  custom: any,  faceUV: [Vector4](/classes/3.1/Vector4)[],  faceColors: [Color4](/classes/3.1/Color4)[],  flat: boolean,  sideOrientation: number,  frontUVs: [Vector4](/classes/3.1/Vector4),  backUVs: [Vector4](/classes/3.1/Vector4) } | 

### static CreateTorusKnot(options) &rarr; [VertexData](/classes/3.1/VertexData)

Creates the [VertexData](/classes/3.1/VertexData) of the [Torus](/classes/3.1/Torus) Knot.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { radius: number,  tube: number,  radialSegments: number,  tubularSegments: number,  p: number,  q: number,  sideOrientation: number,  frontUVs: [Vector4](/classes/3.1/Vector4),  backUVs: [Vector4](/classes/3.1/Vector4) } | 

### static ComputeNormals(positions, indices, normals, options) &rarr; void

options (optional) :

facetPositions : optional array of facet positions (vector3)

facetNormals : optional array of facet normals (vector3)

facetPartitioning : optional partitioning array. facetPositions is required for facetPartitioning computation

subDiv : optional partitioning data about subdivsions on  each axis (int), required for facetPartitioning computation

ratio : optional partitioning ratio / bounding box, required for facetPartitioning computation

bbSize : optional bounding box size data, required for facetPartitioning computation

bInfo : optional bounding info, required for facetPartitioning computation

#### Parameters
 | Name | Type | Description
---|---|---|---
 | positions | any | 
 | indices | any | 
 | normals | any | 
### static ImportVertexData(parsedVertexData, geometry) &rarr; void

Creates a new [VertexData](/classes/3.1/VertexData) from the imported parameters.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedVertexData | any | 
 | geometry | [Geometry](/classes/3.1/Geometry) | 
