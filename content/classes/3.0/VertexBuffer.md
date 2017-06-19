---
ID_PAGE: 25272
PG_TITLE: VertexBuffer
PG_VERSION: 2.1
---
## Description

class [VertexBuffer](/classes/3.0/VertexBuffer)

Creates a new [VertexBuffer](/classes/3.0/VertexBuffer). Methods of [VertexBuffer](/classes/3.0/VertexBuffer) interface are used to manipulate vertex buffer resources

## Constructor

## new [VertexBuffer](/classes/3.0/VertexBuffer)(engine, data, Float32Array, [Buffer](/classes/3.0/Buffer), kind, updatable, postponeInternalCreation, stride, instanced, offset, size)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | any |      @param engine
 | data | number[] or Float32Array or [Buffer](/classes/3.0/Buffer) |      [VertexData](/classes/3.0/VertexData) into buffer
 | kind | string |      The kind of vertex buffer (defined as static variables in [VertexBuffer](/classes/3.0/VertexBuffer) class)
 | updatable | boolean |      True if the vertex buffer should be dynamic, false otherwise.
optional | postponeInternalCreation | boolean |      @param postponeInternalCreation
optional | stride | number |   
optional | instanced | boolean |   
optional | offset | number |      
## Members

### Float32Array : ()



### static PositionKind : string

The position kind

### static NormalKind : string

The normal kind

### static TangentKind : string



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

### getKind() &rarr; string

Returns the kind of the [VertexBuffer](/classes/3.0/VertexBuffer) (string).
### isUpdatable() &rarr; boolean

Boolean : is the [VertexBuffer](/classes/3.0/VertexBuffer) updatable ?
### getData() &rarr; number[]

Returns an array of numbers or a Float32Array containing the [VertexBuffer](/classes/3.0/VertexBuffer) data.
### getBuffer() &rarr; WebGLBuffer

Returns the WebGLBuffer associated to the [VertexBuffer](/classes/3.0/VertexBuffer).
### getStrideSize() &rarr; number

Returns the stride of the [VertexBuffer](/classes/3.0/VertexBuffer) (integer).
### getOffset() &rarr; number

Returns the offset (integer).
### getSize() &rarr; number

Returns the [VertexBuffer](/classes/3.0/VertexBuffer) total size (integer).
### getIsInstanced() &rarr; boolean

Boolean : is the WebGLBuffer of the [VertexBuffer](/classes/3.0/VertexBuffer) instanced now ?
### create(data, Float32Array) &rarr; void

Creates the underlying WebGLBuffer from the passed numeric array or Float32Array.

Returns the created WebGLBuffer.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | data | number[] or Float32Array |      [VertexData](/classes/3.0/VertexData) into buffer
### update(data, Float32Array) &rarr; void

Updates the underlying WebGLBuffer according to the passed numeric array or Float32Array.

Returns the updated WebGLBuffer.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | number[] or Float32Array |      [VertexData](/classes/3.0/VertexData) into buffer
### updateDirectly(data, offset) &rarr; void

Updates directly the underlying WebGLBuffer according to the passed numeric array or Float32Array.

Returns the directly updated WebGLBuffer.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | Float32Array |      [VertexData](/classes/3.0/VertexData) into buffer
 | offset | number |      
### dispose() &rarr; void

Disposes the [VertexBuffer](/classes/3.0/VertexBuffer) and the underlying WebGLBuffer.
