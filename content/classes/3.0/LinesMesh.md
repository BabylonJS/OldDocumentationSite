---
ID_PAGE: 25149
PG_TITLE: LinesMesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---
## Description

class [LinesMesh](/classes/3.0/LinesMesh) extends [Mesh](/classes/3.0/Mesh)

The [LinesMesh](/classes/3.0/LinesMesh) class

## Constructor

## new [LinesMesh](/classes/3.0/LinesMesh)(name, scene, parent, source, doNotCloneChildren, useVertexColor)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      @param name
 | scene | [Scene](/classes/3.0/Scene) |      The scene where the [LinesMesh](/classes/3.0/LinesMesh) is
optional | parent | [Node](/classes/3.0/Node) |     
optional | source | [LinesMesh](/classes/3.0/LinesMesh) |     
optional | doNotCloneChildren | boolean |     
## Members

### useVertexColor : boolean



### color : [Color3](/classes/3.0/Color3)

The color of the lines [Mesh](/classes/3.0/Mesh)

### alpha : number

The alpha

### intersectionThreshold : number

The intersection Threshold is the margin applied when intersection a segment of the [LinesMesh](/classes/3.0/LinesMesh) with a [Ray](/classes/3.0/Ray).

This margin is expressed in world space coordinates, so its value may vary.

Default value is 0.1

@returns the intersection Threshold value.

The intersection Threshold is the margin applied when intersection a segment of the [LinesMesh](/classes/3.0/LinesMesh) with a [Ray](/classes/3.0/Ray).

This margin is expressed in world space coordinates, so its value may vary.

@param value the new threshold to apply

### material : [Material](/classes/3.0/Material)

The material of the Lines [Mesh](/classes/3.0/Mesh)

### checkCollisions : boolean

True if the mesh has collision, false otherwise

## Methods

### getClassName() &rarr; string

Returns the string "LineMesh"
### createInstance(name) &rarr; [InstancedMesh](/classes/3.0/InstancedMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      @param name

### dispose(doNotRecurse) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean |      @param doNotRecurse

### clone(name, newParent, doNotCloneChildren) &rarr; [LinesMesh](/classes/3.0/LinesMesh)

Returns a new LineMesh object cloned from the current one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      @param name
optional | newParent | [Node](/classes/3.0/Node) |     
optional | doNotCloneChildren | boolean |     
