---
ID_PAGE: 25259
PG_TITLE: Geometry
PG_VERSION: 2.1
TAGS:
    - Geometry
---
## Description

class [Geometry](/classes/2.3/Geometry)



## Constructor

##  new [Geometry](/classes/2.3/Geometry)(id, scene, vertexData, updatable, mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |   Given this id to the new geometry object
 | scene | [Scene](/classes/2.3/Scene) |   the platform
optional | vertexData | [VertexData](/classes/2.3/VertexData) |   send all elements of vertices
optional | updatable | boolean |   @param updatable
## Members

### id : string



### delayLoadState : number



### delayLoadingFile : string



### onGeometryUpdated : (geometry: [Geometry](/classes/2.3/Geometry), kind: string) =&gt; void



### extend : { minimum: [Vector3](/classes/2.3/Vector3),  maximum: [Vector3](/classes/2.3/Vector3) }



## Methods

### getScene() &rarr; [Scene](/classes/2.3/Scene)


### getEngine() &rarr; [Engine](/classes/2.3/Engine)


### isReady() &rarr; boolean


### setAllVerticesData(vertexData, updatable) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertexData | [VertexData](/classes/2.3/VertexData) |   send all elements of vertices
optional | updatable | boolean |   @param updatable
### setVerticesData(kind, data, updatable, stride) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |   @param kind
 | data | number[] |   @param data
optional | updatable | boolean |   @param updatable
### updateVerticesDataDirectly(kind, data, offset) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |   @param kind
 | data | Float32Array |   @param data
 | offset | number |   
### updateVerticesData(kind, data, updateExtends) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |   @param kind
 | data | number[] |   @param data
optional | updateExtends | boolean |   @param updateExtends
### getTotalVertices() &rarr; number


### getVerticesData(kind, copyWhenShared) &rarr; number[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |   @param kind
optional | copyWhenShared | boolean |   
### getVertexBuffer(kind) &rarr; [VertexBuffer](/classes/2.3/VertexBuffer)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |   @param kind

### getVertexBuffers() &rarr; [VertexBuffer](/classes/2.3/VertexBuffer)[]


### isVerticesDataPresent(kind) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |   @param kind

### getVerticesDataKinds() &rarr; string[]


### setIndices(indices, totalVertices) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | indices | number[] |   @param indices
optional | totalVertices | number |   
### getTotalIndices() &rarr; number


### getIndices(copyWhenShared) &rarr; number[]



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | copyWhenShared | boolean |   

### getIndexBuffer() &rarr; any


### releaseForMesh(mesh, shouldDispose) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.3/Mesh) |   the mesh
optional | shouldDispose | boolean |   true if mesh is dispose, false if is not.
### applyToMesh(mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.3/Mesh) |   the mesh

### load(scene, onLoaded) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.3/Scene) |   the platform
optional | onLoaded | () =&gt; void |   @param onLoaded
### isDisposed() &rarr; boolean


### dispose() &rarr; void


### copy(id) &rarr; [Geometry](/classes/2.3/Geometry)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |   Given this id to the new geometry object

### serialize() &rarr; any


### serializeVerticeData() &rarr; any


### static  ExtractFromMesh(mesh, id) &rarr; [Geometry](/classes/2.3/Geometry)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.3/Mesh) |   the mesh
 | id | string |   Given this id to the new geometry object
### static  RandomId() &rarr; string


### static  ImportGeometry(parsedGeometry, mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedGeometry | any | 
 | mesh | [Mesh](/classes/2.3/Mesh) |   the mesh
### static  Parse(parsedVertexData, scene, rootUrl) &rarr; [Geometry](/classes/2.3/Geometry)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedVertexData | any | 
 | scene | [Scene](/classes/2.3/Scene) |   the platform
 | rootUrl | string | 
