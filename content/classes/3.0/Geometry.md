---
ID_PAGE: 25259
PG_TITLE: Geometry
PG_VERSION: 2.1
TAGS:
    - Geometry
---
## Description

class [Geometry](/classes/3.0/Geometry)

The [Geometry](/classes/3.0/Geometry) class

## Constructor

## new [Geometry](/classes/3.0/Geometry)(id, scene, vertexData, updatable, mesh)

The [Geometry](/classes/3.0/Geometry) constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |      Given this id to the new geometry object
 | scene | [Scene](/classes/3.0/Scene) |      the platform
optional | vertexData | [VertexData](/classes/3.0/VertexData) |      send all elements of vertices
optional | updatable | boolean |      @param updatable
## Members

### id : string



### delayLoadState : number



### delayLoadingFile : string



### onGeometryUpdated : (geometry: [Geometry](/classes/3.0/Geometry), kind: string) =&gt; void



### boundingBias : [Vector2](/classes/3.0/Vector2)

The Bias Vector to apply on the bounding elements (box/sphere), the max extend is computed as v += v * bias.x + bias.y, the min is computed as v -= v * bias.x + bias.y

@returns The Bias Vector

### extend : { minimum: [Vector3](/classes/3.0/Vector3),  maximum: [Vector3](/classes/3.0/Vector3) }



### doNotSerialize : boolean



### Float32Array : undefined



## Methods

### getScene() &rarr; [Scene](/classes/3.0/Scene)

Get the scene
### getEngine() &rarr; [Engine](/classes/3.0/Engine)

Get the engine
### isReady() &rarr; boolean

True if is ready, false if is not
### setAllVerticesData(vertexData, updatable) &rarr; void

Set all vertices data

#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertexData | [VertexData](/classes/3.0/VertexData) |      send all elements of vertices
optional | updatable | boolean |      @param updatable
### setVerticesData(kind, data, Float32Array, updatable, stride) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |      @param kind
 | data | number[] or Float32Array |      @param data
optional | updatable | boolean |      @param updatable
### removeVerticesData(kind) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |      @param kind

### setVerticesBuffer(buffer) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | buffer | [VertexBuffer](/classes/3.0/VertexBuffer) |   

### updateVerticesDataDirectly(kind, data, offset) &rarr; void

Update vertices data directly

#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |      @param kind
 | data | Float32Array |      @param data
 | offset | number |      
### updateVerticesData(kind, data, Float32Array, updateExtends) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |      @param kind
 | data | number[] or Float32Array |      @param data
optional | updateExtends | boolean |      @param updateExtends
### getTotalVertices() &rarr; number

Get total vertices
### getVerticesData(kind, copyWhenShared, forceCopy) &rarr; number[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |      @param kind
optional | copyWhenShared | boolean |      
optional | forceCopy | boolean | 
### getVertexBuffer(kind) &rarr; [VertexBuffer](/classes/3.0/VertexBuffer)

Get vertex buffer for this kind

#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |      @param kind

### getVertexBuffers() &rarr; { [key: string]: [VertexBuffer](/classes/3.0/VertexBuffer) }

Get vertex buffers, use all element of vertex buffer
### isVerticesDataPresent(kind) &rarr; boolean

Return true if vertices data are present

#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |      @param kind

### getVerticesDataKinds() &rarr; string[]

Get the kinds of vertices data
### setIndices(indices, totalVertices) &rarr; void

Set indices

#### Parameters
 | Name | Type | Description
---|---|---|---
 | indices | IndicesArray |      @param indices
optional | totalVertices | number |      
### getTotalIndices() &rarr; number

Get all indices
### getIndices(copyWhenShared) &rarr; IndicesArray

Get the last indices

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | copyWhenShared | boolean |      

### getIndexBuffer() &rarr; WebGLBuffer

Get index buffer
### releaseForMesh(mesh, shouldDispose) &rarr; void

Release for mesh

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/3.0/Mesh) |      the mesh
optional | shouldDispose | boolean |      true if mesh is dispose, false if is not.
### applyToMesh(mesh) &rarr; void

Apply to a mesh

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/3.0/Mesh) |      the mesh

### load(scene, onLoaded) &rarr; void

Load function

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.0/Scene) |      the platform
optional | onLoaded | () =&gt; void |      @param onLoaded
### toLeftHanded() &rarr; void

Invert the geometry to move from a right handed system to a left handed one.
### isDisposed() &rarr; boolean


### dispose() &rarr; void

Dispose this geometry object
### copy(id) &rarr; [Geometry](/classes/3.0/Geometry)

Copy function

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |      Given this id to the new geometry object

### serialize() &rarr; any


### serializeVerticeData() &rarr; any


### static ExtractFromMesh(mesh, id) &rarr; [Geometry](/classes/3.0/Geometry)

Extract From [Mesh](/classes/3.0/Mesh)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/3.0/Mesh) |      the mesh
 | id | string |      Given this id to the new geometry object
### static RandomId() &rarr; string

You should now use [Tools](/classes/3.0/Tools).RandomId(), this method is still here for legacy reasons.

Implementation from http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#answer-2117523

Be aware Math.random() could cause collisions, but:

"All but 6 of the 128 bits of the ID are randomly generated, which means that for any two ids, there's a 1 in 2^^122 (or 5.3x10^^36) chance they'll collide"
### static ImportGeometry(parsedGeometry, mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedGeometry | any |    
 | mesh | [Mesh](/classes/3.0/Mesh) |      the mesh
### static Parse(parsedVertexData, scene, rootUrl) &rarr; [Geometry](/classes/3.0/Geometry)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedVertexData | any |    
 | scene | [Scene](/classes/3.0/Scene) |      the platform
 | rootUrl | string |    
