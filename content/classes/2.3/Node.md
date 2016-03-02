---
ID_PAGE: 25118
PG_TITLE: Node
PG_VERSION: 2.1
TAGS:
    - Node
---
## Description

class [Node](/classes/2.3/Node)

[Node](/classes/2.3/Node) is the basic class for all scene objects ([Mesh](/classes/2.3/Mesh), [Light](/classes/2.3/Light) [Camera](/classes/2.3/Camera)).

## Constructor

## new [Node](/classes/2.3/Node)(name, scene)

@constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The node identifier
 | scene | [Scene](/classes/2.3/Scene) |   The scene linked to this node.
## Members

### parent : [Node](/classes/2.3/Node)

The parent node of the node

### name : string

The name of the node

### id : string

The id of the node

### uniqueId : number



### state : string

The state of the node

### animations : [Animation](/classes/2.3/Animation)[]

The animations of the node

### onReady : (node: [Node](/classes/2.3/Node)) =&gt; void

Called when node is ready

## Methods

### getScene() &rarr; [Scene](/classes/2.3/Scene)

Get the scene linked to this node
### getEngine() &rarr; [Engine](/classes/2.3/Engine)

Get the engine linked to this node
### getWorldMatrix() &rarr; [Matrix](/classes/2.3/Matrix)

Get the world matrix
### updateCache(force) &rarr; void

Update the cache

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean |   True to force the update

### isSynchronizedWithParent() &rarr; boolean

Return true if the node is synchronized with parent
### isSynchronized(updateCache) &rarr; boolean

Return true if the node is synchronized

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | updateCache | boolean |   True to update the cache

### hasNewParent(update) &rarr; boolean

Return true if the node has new parent

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | update | boolean |   True to update the node

### isReady() &rarr; boolean

Is this node ready to be used/rendered

@return {boolean} is it ready
### isEnabled() &rarr; boolean

Is this node enabled.

If the node has a parent and is enabled, the parent will be inspected as well.

@return {boolean} whether this node (and its parent) is enabled.

@see setEnabled
### setEnabled(value) &rarr; void

Set the enabled state of this node.

@see isEnabled

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | boolean |   True to set the node enable ; False otherwise

### isDescendantOf(ancestor) &rarr; boolean

Is this node a descendant of the given node.

The function will iterate up the hierarchy until the ancestor was found or no more parents defined.

@see parent

#### Parameters
 | Name | Type | Description
---|---|---|---
 | ancestor | [Node](/classes/2.3/Node) |   The ancestor node to test

### getDescendants() &rarr; [Node](/classes/2.3/Node)[]

Will return all nodes that have this node as parent.

@return {BABYLON.[Node](/classes/2.3/Node)[]} all children nodes of all types.
### getAnimationByName(name) &rarr; [Animation](/classes/2.3/Animation)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The node identifier

### createAnimationRange(name, from, to) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The node identifier
 | from | number | 
 | to | number | 
### deleteAnimationRange(name, deleteFrames) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The node identifier
optional | deleteFrames | boolean | 
### getAnimationRange(name) &rarr; [AnimationRange](/classes/2.3/AnimationRange)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The node identifier

### beginAnimation(name, loop, speedRatio, onAnimationEnd) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The node identifier
optional | loop | boolean | 
optional | speedRatio | number | 
### serializeAnimationRanges() &rarr; any


### static ParseAnimationRanges(node, parsedNode, scene) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | node | [Node](/classes/2.3/Node) | 
 | parsedNode | any | 
 | scene | [Scene](/classes/2.3/Scene) |   The scene linked to this node.
