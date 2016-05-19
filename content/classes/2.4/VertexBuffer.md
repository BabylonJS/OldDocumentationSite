---
ID_PAGE: 25272
PG_TITLE: VertexBuffer
PG_VERSION: 2.1
---
## Description

class [VertexBuffer](/classes/2.4/VertexBuffer)

Creates a new [VertexBuffer](/classes/2.4/VertexBuffer). Methods of [VertexBuffer](/classes/2.4/VertexBuffer) interface are used to manipulate vertex buffer resources

## Constructor

## new [VertexBuffer](/classes/2.4/VertexBuffer)(engine, data, kind, updatable, postponeInternalCreation, stride)

[VertexBuffer](/classes/2.4/VertexBuffer) constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | any |    @param engine
 | data | number[] |    [VertexData](/classes/2.4/VertexData) into buffer
 | kind | string |    The kind of vertex buffer (defined as static variables in [VertexBuffer](/classes/2.4/VertexBuffer) class)
 | updatable | boolean |    True if the vertex buffer should be dynamic, false otherwise.
optional | postponeInternalCreation | boolean |    @param postponeInternalCreation
## Members

### static PositionKind : string

The position kind

### static NormalKind : string

The normal kind

### static UVKind : string

The UV kind

### static UV2Kind : string

The UV2 kind

### static UV3Kind : string



### static UV4Kind : string



### static UV5Kind : string



### static UV6Kind : string



### static ColorKind : string

The color kind

### static MatricesIndicesKind : string

The matrice indice kind

### static MatricesWeightsKind : string

The matrice weight kind

### static MatricesIndicesExtraKind : string



### static MatricesWeightsExtraKind : string



## Methods

### isUpdatableundefined &rarr; boolean


### getDataundefined &rarr; number[]


### getBufferundefined &rarr; WebGLBuffer


### getStrideSizeundefined &rarr; number


### createundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### updateundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### updateDirectlyundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### disposeundefined &rarr; void


