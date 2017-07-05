---
TAGS:
---
## Description

class [MorphTargetManager](/classes/3.0/MorphTargetManager)



## Constructor

## new [MorphTargetManager](/classes/3.0/MorphTargetManager)(scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | scene | [Scene](/classes/3.0/Scene) | 

## Members

### uniqueId : number



### vertexCount : number



### supportsNormals : boolean



### supportsTangents : boolean



### numTargets : number



### numInfluencers : number



### influences : Float32Array



## Methods

### getActiveTarget(index) &rarr; [MorphTarget](/classes/3.0/MorphTarget)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | index | number | 

### getTarget(index) &rarr; [MorphTarget](/classes/3.0/MorphTarget)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | index | number | 

### addTarget(target) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | [MorphTarget](/classes/3.0/MorphTarget) | 

### removeTarget(target) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | [MorphTarget](/classes/3.0/MorphTarget) | 

### serialize() &rarr; any

Serializes the current manager into a Serialization object.

Returns the serialized object.
### static Parse(serializationObject, scene) &rarr; [MorphTargetManager](/classes/3.0/MorphTargetManager)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | serializationObject | any | 
 | scene | [Scene](/classes/3.0/Scene) | 
