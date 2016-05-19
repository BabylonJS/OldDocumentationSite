---
ID_PAGE: 25259
PG_TITLE: Geometry
PG_VERSION: 2.1
TAGS:
    - Geometry
---
## Description

class [Geometry](/classes/2.4/Geometry)

The [Geometry](/classes/2.4/Geometry) class

## Constructor

## new [Geometry](/classes/2.4/Geometry)(id, scene, vertexData, updatable, mesh)

The [Geometry](/classes/2.4/Geometry) constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |    Given this id to the new geometry object
 | scene | [Scene](/classes/2.4/Scene) |    the platform
optional | vertexData | [VertexData](/classes/2.4/VertexData) |    send all elements of vertices
optional | updatable | boolean |    @param updatable
## Members

### id : string



### delayLoadState : number



### delayLoadingFile : string



### onGeometryUpdated : (geometry: [Geometry](/classes/2.4/Geometry), kind: string) =&gt; void



### boundingBias : [Vector2](/classes/2.4/Vector2)

The Bias Vector to apply on the bounding elements (box/sphere), the max extend is computed as v += v * bias.x + bias.y, the min is computed as v -= v * bias.x + bias.y

@returns The Bias Vector

### extend : { undefined: [Vector3](/classes/2.4/Vector3),  undefined: [Vector3](/classes/2.4/Vector3) }



## Methods

### getSceneundefined &rarr; [Scene](/classes/2.4/Scene)


### getEngineundefined &rarr; [Engine](/classes/2.4/Engine)


### isReadyundefined &rarr; boolean


### setAllVerticesDataundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setVerticesDataundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### updateVerticesDataDirectlyundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### updateVerticesDataundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getTotalVerticesundefined &rarr; number


### getVerticesDataundefined &rarr; number[]



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getVertexBufferundefined &rarr; [VertexBuffer](/classes/2.4/VertexBuffer)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getVertexBuffersundefined &rarr; [VertexBuffer](/classes/2.4/VertexBuffer)[]


### isVerticesDataPresentundefined &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getVerticesDataKindsundefined &rarr; string[]


### setIndicesundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getTotalIndicesundefined &rarr; number


### getIndicesundefined &rarr; number[]



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getIndexBufferundefined &rarr; any


### releaseForMeshundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### applyToMeshundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### loadundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### isDisposedundefined &rarr; boolean


### disposeundefined &rarr; void


### copyundefined &rarr; [Geometry](/classes/2.4/Geometry)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### serializeundefined &rarr; any


### serializeVerticeDataundefined &rarr; any


### static ExtractFromMeshundefined &rarr; [Geometry](/classes/2.4/Geometry)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static RandomIdundefined &rarr; string


### static ImportGeometryundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static Parseundefined &rarr; [Geometry](/classes/2.4/Geometry)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
