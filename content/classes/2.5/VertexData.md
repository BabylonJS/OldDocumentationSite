---
ID_PAGE: 25261
PG_TITLE: VertexData
PG_VERSION: 2.1
---
## Description

class [VertexData](/classes/2.5/VertexData)

The [VertexData](/classes/2.5/VertexData) class.

## Members

### positions : number[]

The [VertexData](/classes/2.5/VertexData) position

### normals : number[]

The [VertexData](/classes/2.5/VertexData) normals

### uvs : number[]

The [VertexData](/classes/2.5/VertexData) uvs

### uvs2 : number[]



### uvs3 : number[]



### uvs4 : number[]



### uvs5 : number[]



### uvs6 : number[]



### colors : number[]

The [VertexData](/classes/2.5/VertexData) colors

### matricesIndices : number[]

The [VertexData](/classes/2.5/VertexData) matricesIndices

### matricesWeights : number[]

The [VertexData](/classes/2.5/VertexData) matricesWeights

### matricesIndicesExtra : number[]



### matricesWeightsExtra : number[]



### indices : number[]

The [VertexData](/classes/2.5/VertexData) indices

## Methods

### set(data, kind) &rarr; void

Set the vertex data

#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | number[] |     @param data
 | kind | string |     @param kind
### applyToMesh(mesh, updatable) &rarr; void

Apply To mesh

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.5/Mesh) |     @param mesh
optional | updatable | boolean |     @param updatable
### applyToGeometry(geometry, updatable) &rarr; void

Apply to [Geometry](/classes/2.5/Geometry)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/2.5/Geometry) |     @param geometry
optional | updatable | boolean |     @param updatable
### updateMesh(mesh, updateExtends, makeItUnique) &rarr; void

Update [Mesh](/classes/2.5/Mesh)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.5/Mesh) |     @param mesh
optional | updateExtends | boolean |     Not used here
optional | makeItUnique | boolean |     Not used here
### updateGeometry(geometry, updateExtends, makeItUnique) &rarr; void

Update

#### Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/2.5/Geometry) |     @param geometry
optional | updateExtends | boolean |     Not used here
optional | makeItUnique | boolean |     Not used here
### transform(matrix) &rarr; void

Transform his vertexdata with the given matri

#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.5/Matrix) |     @param matrix

### merge(other) &rarr; void

Merge this vertex data with the one given in parameter

#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [VertexData](/classes/2.5/VertexData) |     @param other

### serialize() &rarr; any


### static ExtractFromMesh(mesh, copyWhenShared) &rarr; [VertexData](/classes/2.5/VertexData)

Creates a new VertexDataObject with values extracted of the given mesh

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.5/Mesh) |     @param mesh
optional | copyWhenShared | boolean |     
### static ExtractFromGeometry(geometry, copyWhenShared) &rarr; [VertexData](/classes/2.5/VertexData)

Creates a new VertexDataObject with values extracted of the given geometry

#### Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/2.5/Geometry) |     @param geometry
optional | copyWhenShared | boolean |     
### static CreateRibbon(options) &rarr; [VertexData](/classes/2.5/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { pathArray: [Vector3](/classes/2.5/Vector3)[][],  closeArray: boolean,  closePath: boolean,  offset: number,  sideOrientation: number,  invertUV: boolean } |    

### static CreateBox(options) &rarr; [VertexData](/classes/2.5/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { size: number,  width: number,  height: number,  depth: number,  faceUV: [Vector4](/classes/2.5/Vector4)[],  faceColors: [Color4](/classes/2.5/Color4)[],  sideOrientation: number } |    

### static CreateSphere(options) &rarr; [VertexData](/classes/2.5/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { segments: number,  diameter: number,  diameterX: number,  diameterY: number,  diameterZ: number,  arc: number,  slice: number,  sideOrientation: number } |    

### static CreateCylinder(options) &rarr; [VertexData](/classes/2.5/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { height: number,  diameterTop: number,  diameterBottom: number,  diameter: number,  tessellation: number,  subdivisions: number,  arc: number,  faceColors: [Color4](/classes/2.5/Color4)[],  faceUV: [Vector4](/classes/2.5/Vector4)[],  hasRings: boolean,  enclose: boolean,  sideOrientation: number } |    

### static CreateTorus(options) &rarr; [VertexData](/classes/2.5/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { diameter: number,  thickness: number,  tessellation: number,  sideOrientation: number } |    

### static CreateLineSystem(options) &rarr; [VertexData](/classes/2.5/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { lines: [Vector3](/classes/2.5/Vector3)[][] } |    

### static CreateDashedLines(options) &rarr; [VertexData](/classes/2.5/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { points: [Vector3](/classes/2.5/Vector3)[],  dashSize: number,  gapSize: number,  dashNb: number } |    

### static CreateGround(options) &rarr; [VertexData](/classes/2.5/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { width: number,  height: number,  subdivisions: number,  subdivisionsX: number,  subdivisionsY: number } |    

### static CreateTiledGround(options) &rarr; [VertexData](/classes/2.5/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { xmin: number,  zmin: number,  xmax: number,  zmax: number,  subdivisions: { w: number,  h: number },  precision: { w: number,  h: number } } |    

### static CreateGroundFromHeightMap(options) &rarr; [VertexData](/classes/2.5/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { width: number,  height: number,  subdivisions: number,  minHeight: number,  maxHeight: number,  buffer: Uint8Array,  bufferWidth: number,  bufferHeight: number } |    

### static CreatePlane(options) &rarr; [VertexData](/classes/2.5/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { size: number,  width: number,  height: number,  sideOrientation: number } |    

### static CreateDisc(options) &rarr; [VertexData](/classes/2.5/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { radius: number,  tessellation: number,  arc: number,  sideOrientation: number } |    

### static CreateIcoSphere(options) &rarr; [VertexData](/classes/2.5/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { radius: number,  radiusX: number,  radiusY: number,  radiusZ: number,  flat: boolean,  subdivisions: number,  sideOrientation: number } |    

### static CreatePolyhedron(options) &rarr; [VertexData](/classes/2.5/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { type: number,  size: number,  sizeX: number,  sizeY: number,  sizeZ: number,  custom: any,  faceUV: [Vector4](/classes/2.5/Vector4)[],  faceColors: [Color4](/classes/2.5/Color4)[],  flat: boolean,  sideOrientation: number } |    

### static CreateTorusKnot(options) &rarr; [VertexData](/classes/2.5/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { radius: number,  tube: number,  radialSegments: number,  tubularSegments: number,  p: number,  q: number,  sideOrientation: number } |    

### static ComputeNormals(positions, indices, normals) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | positions | any |     @param positions
 | indices | any |     @param indices
 | normals | any |     @param normals
### static ImportVertexData(parsedVertexData, geometry) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedVertexData | any |   
 | geometry | [Geometry](/classes/2.5/Geometry) |     @param geometry
