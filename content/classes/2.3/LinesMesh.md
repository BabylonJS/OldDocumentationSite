---
ID_PAGE: 25149
PG_TITLE: LinesMesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---
## Description

class [LinesMesh](/classes/2.3/LinesMesh) extends [Mesh](/classes/2.3/Mesh)



## Constructor

##  new [LinesMesh](/classes/2.3/LinesMesh)(name, scene, parent, source, doNotCloneChildren)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   @param name
 | scene | [Scene](/classes/2.3/Scene) |   The scene where the [LinesMesh](/classes/2.3/LinesMesh) is
optional | parent | [Node](/classes/2.3/Node) |  
optional | source | [Mesh](/classes/2.3/Mesh) |  
## Members

### color : [Color3](/classes/2.3/Color3)



### alpha : number



### material : [Material](/classes/2.3/Material)



### isPickable : boolean



### checkCollisions : boolean



## Methods

### intersects(ray, fastCheck) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/2.3/Ray) |   The ray
optional | fastCheck | boolean |   if true, stop at the first result
### dispose(doNotRecurse) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean |   @param doNotRecurse

### clone(name, newParent, doNotCloneChildren) &rarr; [LinesMesh](/classes/2.3/LinesMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   @param name
optional | newParent | [Node](/classes/2.3/Node) |  
optional | doNotCloneChildren | boolean |  
