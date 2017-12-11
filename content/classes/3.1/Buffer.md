---
TAGS:
---
## Description

class [Buffer](/classes/3.1/Buffer)



## Constructor

## new [Buffer](/classes/3.1/Buffer)(engine, data, Float32Array, updatable, stride, postponeInternalCreation, instanced)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | any | 
 | data | number[] or Float32Array | 
 | updatable | boolean | 
 | stride | number | 
optional | postponeInternalCreation | boolean | 
## Members

### Float32Array : ()


### instanceDivisor : number


## Methods

### createVertexBuffer(kind, offset, size, stride) &rarr; [VertexBuffer](/classes/3.1/VertexBuffer)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 
 | offset | number | 
 | size | number | 
### isUpdatable() &rarr; boolean


### getData() &rarr; Nullable&lt;number[]&gt;


### getBuffer() &rarr; Nullable&lt;WebGLBuffer&gt;


### getStrideSize() &rarr; number


### getIsInstanced() &rarr; boolean


### create(data, Float32Array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | data | Nullable&lt;number[]&gt; or Float32Array | 
### update(data, Float32Array) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | number[] or Float32Array | 
### updateDirectly(data, offset, vertexCount) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | Float32Array | 
 | offset | number | 
optional | vertexCount | number | 
### dispose() &rarr; void


