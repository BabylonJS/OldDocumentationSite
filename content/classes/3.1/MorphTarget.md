---
TAGS:
---
## Description

class [MorphTarget](/classes/3.1/MorphTarget)



## Constructor

## new [MorphTarget](/classes/3.1/MorphTarget)(name, influence)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
optional | influence | number | 
## Members

### name : string



### animations : [Animation](/classes/3.1/Animation)[]



### onInfluenceChanged : [Observable](/classes/3.1/Observable)&lt;boolean&gt;



### influence : number



### hasNormals : boolean



### hasTangents : boolean



## Methods

### setPositions(data, number) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | Float32Array or number | 
### getPositions() &rarr; Float32Array


### setNormals(data, number) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | Float32Array or number | 
### getNormals() &rarr; Float32Array


### setTangents(data, number) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | Float32Array or number | 
### getTangents() &rarr; Float32Array


### serialize() &rarr; any

Serializes the current target into a Serialization object.

Returns the serialized object.
### static Parse(serializationObject) &rarr; [MorphTarget](/classes/3.1/MorphTarget)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | serializationObject | any | 

### static FromMesh(mesh, name, influence) &rarr; [MorphTarget](/classes/3.1/MorphTarget)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
optional | name | string | 
optional | influence | number | 
