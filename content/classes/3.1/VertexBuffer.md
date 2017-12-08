---
ID_PAGE: 25272
PG_TITLE: VertexBuffer
PG_VERSION: 2.1
---
## Description

class [VertexBuffer](/classes/3.1/VertexBuffer)



## Constructor

## new [VertexBuffer](/classes/3.1/VertexBuffer)(engine, data, Float32Array, [Buffer](/classes/3.1/Buffer), kind, updatable, postponeInternalCreation, stride, instanced, offset, size)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | any | 
 | data | number[] or Float32Array or [Buffer](/classes/3.1/Buffer) | 
 | kind | string | 
 | updatable | boolean | 
optional | postponeInternalCreation | boolean | 
optional | stride | number | 
optional | instanced | boolean | 
optional | offset | number | 
## Members

### Float32Array : ()


### static PositionKind : string


### static NormalKind : string


### static TangentKind : string


### static UVKind : string


### static UV2Kind : string


### static UV3Kind : string


### static UV4Kind : string


### static UV5Kind : string


### static UV6Kind : string


### static ColorKind : string


### static MatricesIndicesKind : string


### static MatricesWeightsKind : string


### static MatricesIndicesExtraKind : string


### static MatricesWeightsExtraKind : string


## Methods

### getKind() &rarr; string

Returns the kind of the [VertexBuffer](/classes/3.1/VertexBuffer) (string).
### isUpdatable() &rarr; boolean

Boolean : is the [VertexBuffer](/classes/3.1/VertexBuffer) updatable ?
### getData() &rarr; number[]

Returns an array of numbers or a Float32Array containing the [VertexBuffer](/classes/3.1/VertexBuffer) data.
### getBuffer() &rarr; WebGLBuffer

Returns the WebGLBuffer associated to the [VertexBuffer](/classes/3.1/VertexBuffer).
### getStrideSize() &rarr; number

Returns the stride of the [VertexBuffer](/classes/3.1/VertexBuffer) (integer).
### getOffset() &rarr; number

Returns the offset (integer).
### getSize() &rarr; number

Returns the [VertexBuffer](/classes/3.1/VertexBuffer) total size (integer).
### getIsInstanced() &rarr; boolean

Boolean : is the WebGLBuffer of the [VertexBuffer](/classes/3.1/VertexBuffer) instanced now ?
### getInstanceDivisor() &rarr; number

Returns the instancing divisor, zero for non-instanced (integer).
### create(data, Float32Array) &rarr; void

Creates the underlying WebGLBuffer from the passed numeric array or Float32Array.

Returns the created WebGLBuffer.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | data | number[] or Float32Array | 
### update(data, Float32Array) &rarr; void

Updates the underlying WebGLBuffer according to the passed numeric array or Float32Array.

Returns the updated WebGLBuffer.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | number[] or Float32Array | 
### updateDirectly(data, offset) &rarr; void

Updates directly the underlying WebGLBuffer according to the passed numeric array or Float32Array.

Returns the directly updated WebGLBuffer.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | Float32Array | 
 | offset | number | 
### dispose() &rarr; void

Disposes the [VertexBuffer](/classes/3.1/VertexBuffer) and the underlying WebGLBuffer.
