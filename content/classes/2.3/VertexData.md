---
ID_PAGE: 25261
PG_TITLE: VertexData
PG_VERSION: 2.1
---
## Description

class [VertexData](/classes/2.3/VertexData)



## Members

### positions : number[]



### normals : number[]



### uvs : number[]



### uvs2 : number[]



### uvs3 : number[]



### uvs4 : number[]



### uvs5 : number[]



### uvs6 : number[]



### colors : number[]



### matricesIndices : number[]



### matricesWeights : number[]



### matricesIndicesExtra : number[]



### matricesWeightsExtra : number[]



### indices : number[]



## Methods

### set(data, kind) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | number[] |   @param data
 | kind | string |   @param kind
### applyToMesh(mesh, updatable) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.3/Mesh) |   @param mesh
optional | updatable | boolean |   @param updatable
### applyToGeometry(geometry, updatable) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/2.3/Geometry) |   @param geometry
optional | updatable | boolean |   @param updatable
### updateMesh(mesh, updateExtends, makeItUnique) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.3/Mesh) |   @param mesh
optional | updateExtends | boolean |   Not used here
optional | makeItUnique | boolean |   Not used here
### updateGeometry(geometry, updateExtends, makeItUnique) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/2.3/Geometry) |   @param geometry
optional | updateExtends | boolean |   Not used here
optional | makeItUnique | boolean |   Not used here
### transform(matrix) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.3/Matrix) |   @param matrix

### merge(other) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [VertexData](/classes/2.3/VertexData) |   @param other

### serialize() &rarr; any


### static  ExtractFromMesh(mesh, copyWhenShared) &rarr; [VertexData](/classes/2.3/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.3/Mesh) |   @param mesh
optional | copyWhenShared | boolean |   
### static  ExtractFromGeometry(geometry, copyWhenShared) &rarr; [VertexData](/classes/2.3/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/2.3/Geometry) |   @param geometry
optional | copyWhenShared | boolean |   
### static  CreateRibbon(options) &rarr; [VertexData](/classes/2.3/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { pathArray: [Vector3](/classes/2.3/Vector3)[][],  closeArray: boolean,  closePath: boolean,  offset: number,  sideOrientation: number } |  

### static  CreateBox(options) &rarr; [VertexData](/classes/2.3/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { size: number,  width: number,  height: number,  depth: number,  faceUV: [Vector4](/classes/2.3/Vector4)[],  faceColors: [Color4](/classes/2.3/Color4)[],  sideOrientation: number } |  

### static  CreateSphere(options) &rarr; [VertexData](/classes/2.3/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { segments: number,  diameter: number,  diameterX: number,  diameterY: number,  diameterZ: number,  arc: number,  slice: number,  sideOrientation: number } |  

### static  CreateCylinder(options) &rarr; [VertexData](/classes/2.3/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { height: number,  diameterTop: number,  diameterBottom: number,  diameter: number,  tessellation: number,  subdivisions: number,  arc: number,  faceColors: [Color4](/classes/2.3/Color4)[],  faceUV: [Vector4](/classes/2.3/Vector4)[],  hasRings: boolean,  enclose: boolean,  sideOrientation: number } |  

### static  CreateTorus(options) &rarr; [VertexData](/classes/2.3/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { diameter: number,  thickness: number,  tessellation: number,  sideOrientation: number } |  

### static  CreateLines(options) &rarr; [VertexData](/classes/2.3/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { points: [Vector3](/classes/2.3/Vector3)[] } |  

### static  CreateDashedLines(options) &rarr; [VertexData](/classes/2.3/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { points: [Vector3](/classes/2.3/Vector3)[],  dashSize: number,  gapSize: number,  dashNb: number } |  

### static  CreateGround(options) &rarr; [VertexData](/classes/2.3/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { width: number,  height: number,  subdivisions: number } |  

### static  CreateTiledGround(options) &rarr; [VertexData](/classes/2.3/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { xmin: number,  zmin: number,  xmax: number,  zmax: number,  subdivisions: { w: number,  h: number },  precision: { w: number,  h: number } } |  

### static  CreateGroundFromHeightMap(options) &rarr; [VertexData](/classes/2.3/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { width: number,  height: number,  subdivisions: number,  minHeight: number,  maxHeight: number,  buffer: Uint8Array,  bufferWidth: number,  bufferHeight: number } |  

### static  CreatePlane(options) &rarr; [VertexData](/classes/2.3/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { size: number,  width: number,  height: number,  sideOrientation: number } |  

### static  CreateDisc(options) &rarr; [VertexData](/classes/2.3/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { radius: number,  tessellation: number,  arc: number,  sideOrientation: number } |  

### static  CreateIcoSphere(options) &rarr; [VertexData](/classes/2.3/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { radius: number,  radiusX: number,  radiusY: number,  radiusZ: number,  flat: boolean,  subdivisions: number,  sideOrientation: number } |  

### static  CreatePolyhedron(options) &rarr; [VertexData](/classes/2.3/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { type: number,  size: number,  sizeX: number,  sizeY: number,  sizeZ: number,  custom: any,  faceUV: [Vector4](/classes/2.3/Vector4)[],  faceColors: [Color4](/classes/2.3/Color4)[],  flat: boolean,  sideOrientation: number } |  

### static  CreateTorusKnot(options) &rarr; [VertexData](/classes/2.3/VertexData)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | { radius: number,  tube: number,  radialSegments: number,  tubularSegments: number,  p: number,  q: number,  sideOrientation: number } |  

### static  ComputeNormals(positions, indices, normals) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | positions | any |   @param positions
 | indices | any |   @param indices
 | normals | any |   @param normals
### static  ImportVertexData(parsedVertexData, geometry) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedVertexData | any | 
 | geometry | [Geometry](/classes/2.3/Geometry) |   @param geometry
