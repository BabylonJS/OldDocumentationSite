---
ID_PAGE: 25259
PG_TITLE: Geometry
PG_VERSION: 2.1
TAGS:
    - Geometry
---
## Description

class [Geometry](/classes/3.1/Geometry)



## Constructor

## new [Geometry](/classes/3.1/Geometry)(id, scene, vertexData, updatable, mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 
 | scene | [Scene](/classes/3.1/Scene) | 
optional | vertexData | [VertexData](/classes/3.1/VertexData) | 
optional | updatable | boolean | 
## Members

### id : string


### delayLoadState : number


### delayLoadingFile : Nullable&lt;string&gt;


### onGeometryUpdated : (geometry: [Geometry](/classes/3.1/Geometry), kind: string) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/3.1/Geometry) | 
optional | kind | string | 
### boundingBias : [Vector2](/classes/3.1/Vector2)

The Bias Vector to apply on the bounding elements (box/sphere), the max extend is computed as v += v * bias.x + bias.y, the min is computed as v -= v * bias.x + bias.y

@returns The Bias Vector
### extend : { minimum: [Vector3](/classes/3.1/Vector3),  maximum: [Vector3](/classes/3.1/Vector3) }


### doNotSerialize : boolean


### Float32Array : undefined


## Methods

### getScene() &rarr; [Scene](/classes/3.1/Scene)


### getEngine() &rarr; [Engine](/classes/3.1/Engine)


### isReady() &rarr; boolean


### setAllVerticesData(vertexData, updatable) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertexData | [VertexData](/classes/3.1/VertexData) | 
optional | updatable | boolean | 
### setVerticesData(kind, data, Float32Array, updatable, stride) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 
 | data | number[] or Float32Array | 
optional | updatable | boolean | 
### removeVerticesData(kind) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 

### setVerticesBuffer(buffer) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | buffer | [VertexBuffer](/classes/3.1/VertexBuffer) | 

### updateVerticesDataDirectly(kind, data, offset) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 
 | data | Float32Array | 
 | offset | number | 
### updateVerticesData(kind, data, Float32Array, updateExtends) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 
 | data | number[] or Float32Array | 
optional | updateExtends | boolean | 
### getTotalVertices() &rarr; number


### getVerticesData(kind, copyWhenShared, forceCopy) &rarr; Nullable&lt;number[]&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 
optional | copyWhenShared | boolean | 
optional | forceCopy | boolean | 
### isVertexBufferUpdatable(kind) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 

### getVertexBuffer(kind) &rarr; Nullable&lt;[VertexBuffer](/classes/3.1/VertexBuffer)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 

### getVertexBuffers() &rarr; Nullable&lt;{ [key: string]: [VertexBuffer](/classes/3.1/VertexBuffer) }&gt;


### isVerticesDataPresent(kind) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 

### getVerticesDataKinds() &rarr; string[]


### updateIndices(indices, offset) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | indices | IndicesArray | 
optional | offset | number | 
### setIndices(indices, totalVertices, updatable) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | indices | IndicesArray | 
optional | totalVertices | Nullable&lt;number&gt; | 
optional | updatable | boolean | 
### getTotalIndices() &rarr; number


### getIndices(copyWhenShared) &rarr; Nullable&lt;IndicesArray&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | copyWhenShared | boolean | 

### getIndexBuffer() &rarr; Nullable&lt;WebGLBuffer&gt;


### releaseForMesh(mesh, shouldDispose) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/3.1/Mesh) | 
optional | shouldDispose | boolean | 
### applyToMesh(mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/3.1/Mesh) | 

### load(scene, onLoaded) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.1/Scene) | 
optional | onLoaded |  | 
### toLeftHanded() &rarr; void

Invert the geometry to move from a right handed system to a left handed one.
### isDisposed() &rarr; boolean


### dispose() &rarr; void


### copy(id) &rarr; [Geometry](/classes/3.1/Geometry)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

### serialize() &rarr; any


### serializeVerticeData() &rarr; any


### static ExtractFromMesh(mesh, id) &rarr; Nullable&lt;[Geometry](/classes/3.1/Geometry)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/3.1/Mesh) | 
 | id | string | 
### static RandomId() &rarr; string

You should now use [Tools](/classes/3.1/Tools).RandomId(), this method is still here for legacy reasons.

Implementation from http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#answer-2117523

Be aware Math.random() could cause collisions, but:

"All but 6 of the 128 bits of the ID are randomly generated, which means that for any two ids, there's a 1 in 2^^122 (or 5.3x10^^36) chance they'll collide"
### static ImportGeometry(parsedGeometry, mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedGeometry | any | 
 | mesh | [Mesh](/classes/3.1/Mesh) | 
### static Parse(parsedVertexData, scene, rootUrl) &rarr; Nullable&lt;[Geometry](/classes/3.1/Geometry)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedVertexData | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | rootUrl | string | 
