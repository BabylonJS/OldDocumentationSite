---
ID_PAGE: 25272
PG_TITLE: VertexBuffer
PG_VERSION: 2.1
---
## Description

class [VertexBuffer](/classes/2.3/VertexBuffer)

Creates a new [VertexBuffer](/classes/2.3/VertexBuffer). Methods of [VertexBuffer](/classes/2.3/VertexBuffer) interface are used to manipulate vertex buffer resources

## Constructor

## new [VertexBuffer](/classes/2.3/VertexBuffer)(engine, data, kind, updatable, postponeInternalCreation, stride)

[VertexBuffer](/classes/2.3/VertexBuffer) constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | any |   @param engine
 | data | number[] |   [VertexData](/classes/2.3/VertexData) into buffer
 | kind | string |   The kind of vertex buffer (defined as static variables in [VertexBuffer](/classes/2.3/VertexBuffer) class)
 | updatable | boolean |   True if the vertex buffer should be dynamic, false otherwise.
optional | postponeInternalCreation | boolean |   @param postponeInternalCreation
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

### isUpdatable() &rarr; boolean

Return true if it's updatable
### getData() &rarr; number[]

Get the data
### getBuffer() &rarr; WebGLBuffer

Get the buffer
### getStrideSize() &rarr; number

Get stride size
### create(data) &rarr; void

Create a vertex buffer

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | data | number[] |   [VertexData](/classes/2.3/VertexData) into buffer

### update(data) &rarr; void

Update vertex buffer

#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | number[] |   [VertexData](/classes/2.3/VertexData) into buffer

### updateDirectly(data, offset) &rarr; void

Update vertex buffer directly

#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | Float32Array |   [VertexData](/classes/2.3/VertexData) into buffer
 | offset | number |   
### dispose() &rarr; void


