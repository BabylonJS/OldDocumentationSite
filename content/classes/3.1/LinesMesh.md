---
ID_PAGE: 25149
PG_TITLE: LinesMesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---
## Description

class [LinesMesh](/classes/3.1/LinesMesh) extends [Mesh](/classes/3.1/Mesh)



## Constructor

## new [LinesMesh](/classes/3.1/LinesMesh)(name, scene, parent, source, doNotCloneChildren, useVertexColor)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/3.1/Scene) | 
optional | parent | [Node](/classes/3.1/Node) | 
optional | source | [LinesMesh](/classes/3.1/LinesMesh) | 
optional | doNotCloneChildren | boolean | 
## Members

### useVertexColor : boolean



### color : [Color3](/classes/3.1/Color3)



### alpha : number



### intersectionThreshold : number

The intersection Threshold is the margin applied when intersection a segment of the [LinesMesh](/classes/3.1/LinesMesh) with a [Ray](/classes/3.1/Ray).

This margin is expressed in world space coordinates, so its value may vary.

Default value is 0.1

@returns the intersection Threshold value.

The intersection Threshold is the margin applied when intersection a segment of the [LinesMesh](/classes/3.1/LinesMesh) with a [Ray](/classes/3.1/Ray).

This margin is expressed in world space coordinates, so its value may vary.

@param value the new threshold to apply

### material : [Material](/classes/3.1/Material)



### checkCollisions : boolean



## Methods

### getClassName() &rarr; string

Returns the string "LineMesh"
### createInstance(name) &rarr; [InstancedMesh](/classes/3.1/InstancedMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### dispose(doNotRecurse) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean | 

### clone(name, newParent, doNotCloneChildren) &rarr; [LinesMesh](/classes/3.1/LinesMesh)

Returns a new LineMesh object cloned from the current one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
optional | newParent | [Node](/classes/3.1/Node) | 
optional | doNotCloneChildren | boolean | 
