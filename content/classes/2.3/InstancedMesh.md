---
ID_PAGE: 25146
PG_TITLE: InstancedMesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---
## Description

class [InstancedMesh](/classes/2.3/InstancedMesh) extends [AbstractMesh](/classes/2.3/AbstractMesh)

Creates an instance based on a source mesh.

## Constructor

##  new [InstancedMesh](/classes/2.3/InstancedMesh)(name, source)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The given name
 | source | [Mesh](/classes/2.3/Mesh) |   @param source
## Members

### receiveShadows : boolean



### material : [Material](/classes/2.3/Material)



### visibility : number



### skeleton : [Skeleton](/classes/2.3/Skeleton)



### renderingGroupId : number



### sourceMesh : [Mesh](/classes/2.3/Mesh)



## Methods

### getTotalVertices() &rarr; number


### getVerticesData(kind, copyWhenShared) &rarr; number[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |   @param kind
optional | copyWhenShared | boolean | 
### isVerticesDataPresent(kind) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string |   @param kind

### getIndices() &rarr; number[]


### refreshBoundingInfo() &rarr; void


### getLOD(camera) &rarr; [AbstractMesh](/classes/2.3/AbstractMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/2.3/Camera) |   

### clone(name, newParent, doNotCloneChildren) &rarr; [InstancedMesh](/classes/2.3/InstancedMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The given name
 | newParent | [Node](/classes/2.3/Node) |   The parent
optional | doNotCloneChildren | boolean |   True if you want to clone children, false if you don't want to.
### dispose(doNotRecurse) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean |   @param doNotRecurse

