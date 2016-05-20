---
ID_PAGE: 25149
PG_TITLE: LinesMesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---
## Description

class [LinesMesh](/classes/2.4/LinesMesh) extends [Mesh](/classes/2.4/Mesh)

The [LinesMesh](/classes/2.4/LinesMesh) class

## Constructor

## new [LinesMesh](/classes/2.4/LinesMesh)(name, scene, parent, source, doNotCloneChildren)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    @param name
 | scene | [Scene](/classes/2.4/Scene) |    The scene where the [LinesMesh](/classes/2.4/LinesMesh) is
optional | parent | [Node](/classes/2.4/Node) |   
optional | source | [LinesMesh](/classes/2.4/LinesMesh) |   
## Members

### color : [Color3](/classes/2.4/Color3)

The color of the lines [Mesh](/classes/2.4/Mesh)

### alpha : number

The alpha

### intersectionThreshold : number

The intersection Threshold is the margin applied when intersection a segment of the [LinesMesh](/classes/2.4/LinesMesh) with a [Ray](/classes/2.4/Ray).

This margin is expressed in world space coordinates, so its value may vary.

Default value is 0.1

@returns the intersection Threshold value.



The intersection Threshold is the margin applied when intersection a segment of the [LinesMesh](/classes/2.4/LinesMesh) with a [Ray](/classes/2.4/Ray).

This margin is expressed in world space coordinates, so its value may vary.

@param value the new threshold to apply

### material : [Material](/classes/2.4/Material)

The material of the Lines [Mesh](/classes/2.4/Mesh)

### checkCollisions : boolean

True if the mesh has collision, false otherwise

## Methods

### createInstance(name) &rarr; [InstancedMesh](/classes/2.4/InstancedMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    @param name

### dispose(doNotRecurse) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean |    @param doNotRecurse

### clone(name, newParent, doNotCloneChildren) &rarr; [LinesMesh](/classes/2.4/LinesMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    @param name
optional | newParent | [Node](/classes/2.4/Node) |   
optional | doNotCloneChildren | boolean |   
