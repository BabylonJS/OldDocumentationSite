---
TAGS:
---
## Description

class [Buffer](/classes/3.1/Buffer)



## Constructor

## new [Buffer](/classes/3.1/Buffer)(engine, data, updatable, stride, postponeInternalCreation, instanced)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | any | 
 | data | FloatArray | 
 | updatable | boolean | 
 | stride | number | 
optional | postponeInternalCreation | boolean | 
## Members

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


### getData() &rarr; Nullable&lt;FloatArray&gt;


### getBuffer() &rarr; Nullable&lt;WebGLBuffer&gt;


### getStrideSize() &rarr; number


### getIsInstanced() &rarr; boolean


### create(data) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | data | Nullable&lt;FloatArray&gt; | 

### update(data) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | FloatArray | 

### updateDirectly(data, offset, vertexCount) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | Float32Array | 
 | offset | number | 
optional | vertexCount | number | 
### dispose() &rarr; void


