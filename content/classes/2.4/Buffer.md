---
TAGS:
---
## Description

class [Buffer](/classes/2.4/Buffer)



## Constructor

## new [Buffer](/classes/2.4/Buffer)(engine, data, updatable, stride, postponeInternalCreation, instanced)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | any | 
 | data | number[] | 
 | updatable | boolean | 
 | stride | number | 
optional | postponeInternalCreation | boolean | 
## Methods

### createVertexBuffer(kind, offset, size, stride) &rarr; [VertexBuffer](/classes/2.4/VertexBuffer)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 
 | offset | number | 
 | size | number | 
### isUpdatable() &rarr; boolean


### getData() &rarr; number[]


### getBuffer() &rarr; WebGLBuffer


### getStrideSize() &rarr; number


### getIsInstanced() &rarr; boolean


### create(data) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | data | number[] | 

### update(data) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | number[] | 

### updateDirectly(data, offset, vertexCount) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | Float32Array | 
 | offset | number | 
optional | vertexCount | number | 
### dispose() &rarr; void


