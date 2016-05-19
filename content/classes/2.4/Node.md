---
ID_PAGE: 25118
PG_TITLE: Node
PG_VERSION: 2.1
TAGS:
    - Node
---
## Description

class [Node](/classes/2.4/Node)

[Node](/classes/2.4/Node) is the basic class for all scene objects ([Mesh](/classes/2.4/Mesh), [Light](/classes/2.4/Light) [Camera](/classes/2.4/Camera)).

## Constructor

## new [Node](/classes/2.4/Node)(name, scene)

@constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    The node identifier
 | scene | [Scene](/classes/2.4/Scene) |    The scene linked to this node.
## Members

### name : string

The name of the node

### id : string

The id of the node

### uniqueId : number



### state : string

The state of the node

### animations : [Animation](/classes/2.4/Animation)[]

The animations of the node

### onReady : (node: [Node](/classes/2.4/Node)) =&gt; void

Called when node is ready

### parent : [Node](/classes/2.4/Node)

The parent node of the node

## Methods

### getSceneundefined &rarr; [Scene](/classes/2.4/Scene)


### getEngineundefined &rarr; [Engine](/classes/2.4/Engine)


### getWorldMatrixundefined &rarr; [Matrix](/classes/2.4/Matrix)


### updateCacheundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### isSynchronizedWithParentundefined &rarr; boolean


### isSynchronizedundefined &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### hasNewParentundefined &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### isReadyundefined &rarr; boolean

Is this node ready to be used/rendered

@return {boolean} is it ready
### isEnabledundefined &rarr; boolean

Is this node enabled.

If the node has a parent and is enabled, the parent will be inspected as well.

@return {boolean} whether this node (and its parent) is enabled.

@see setEnabled
### setEnabledundefined &rarr; void

Set the enabled state of this node.

@see isEnabled

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### isDescendantOfundefined &rarr; boolean

Is this node a descendant of the given node.

The function will iterate up the hierarchy until the ancestor was found or no more parents defined.

@see parent

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getDescendantsundefined &rarr; [Node](/classes/2.4/Node)[]

Will return all nodes that have this node as ascendant.

@return {BABYLON.[Node](/classes/2.4/Node)[]} all children nodes of all types.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getChildrenundefined &rarr; [Node](/classes/2.4/Node)[]

@Deprecated, legacy support.

use getDecendants instead.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getChildMeshesundefined &rarr; [AbstractMesh](/classes/2.4/AbstractMesh)[]

Get all child-meshes of this node.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getAnimationByNameundefined &rarr; [Animation](/classes/2.4/Animation)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### createAnimationRangeundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### deleteAnimationRangeundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getAnimationRangeundefined &rarr; [AnimationRange](/classes/2.4/AnimationRange)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### beginAnimationundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### serializeAnimationRangesundefined &rarr; any


### disposeundefined &rarr; void


### static ParseAnimationRangesundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
