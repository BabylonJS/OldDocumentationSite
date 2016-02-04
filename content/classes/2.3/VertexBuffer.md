---
ID_PAGE: 25272
PG_TITLE: VertexBuffer
PG_VERSION: 2.1
---
## Description

class [VertexBuffer](/classes/2.3/VertexBuffer)



## Constructor

##  new [VertexBuffer](/classes/2.3/VertexBuffer)(engine, data, kind, updatable, postponeInternalCreation, stride)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | any |   @param engine
 | data | number[] |   [VertexData](/classes/2.3/VertexData) into buffer
 | kind | string |   The kind of vertex buffer (defined as static variables in [VertexBuffer](/classes/2.3/VertexBuffer) class)
 | updatable | boolean |   True if the vertex buffer should be dynamic, false otherwise.
optional | postponeInternalCreation | boolean |   @param postponeInternalCreation
## Members

### static  PositionKind : string



### static  NormalKind : string



### static  UVKind : string



### static  UV2Kind : string



### static  UV3Kind : string



### static  UV4Kind : string



### static  UV5Kind : string



### static  UV6Kind : string



### static  ColorKind : string



### static  MatricesIndicesKind : string



### static  MatricesWeightsKind : string



### static  MatricesIndicesExtraKind : string



### static  MatricesWeightsExtraKind : string



## Methods

### isUpdatable() &rarr; boolean


### getData() &rarr; number[]


### getBuffer() &rarr; WebGLBuffer


### getStrideSize() &rarr; number


### create(data) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | data | number[] |   [VertexData](/classes/2.3/VertexData) into buffer

### update(data) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | number[] |   [VertexData](/classes/2.3/VertexData) into buffer

### updateDirectly(data, offset) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | Float32Array |   [VertexData](/classes/2.3/VertexData) into buffer
 | offset | number |   
### dispose() &rarr; void


