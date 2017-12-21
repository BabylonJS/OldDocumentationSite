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


### hasPositions : boolean


### hasNormals : boolean


### hasTangents : boolean


## Methods

### setPositions(data) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | Nullable&lt;FloatArray&gt; | 

### getPositions() &rarr; Nullable&lt;FloatArray&gt;


### setNormals(data) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | Nullable&lt;FloatArray&gt; | 

### getNormals() &rarr; Nullable&lt;FloatArray&gt;


### setTangents(data) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | Nullable&lt;FloatArray&gt; | 

### getTangents() &rarr; Nullable&lt;FloatArray&gt;


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
