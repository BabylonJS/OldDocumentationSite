---
ID_PAGE: 25118
PG_TITLE: Node
PG_VERSION: 2.1
TAGS:
    - Node
---
## Description

class [Node](/classes/3.1/Node)

[Node](/classes/3.1/Node) is the basic class for all scene objects ([Mesh](/classes/3.1/Mesh), [Light](/classes/3.1/Light) [Camera](/classes/3.1/Camera)).

## Constructor

## new [Node](/classes/3.1/Node)(name, scene)

@constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
optional | scene | Nullable&lt;[Scene](/classes/3.1/Scene)&gt; | 
## Members

### name : string


### id : string


### uniqueId : number


### state : string


### metadata : any


### doNotSerialize : boolean


### animations : [Animation](/classes/3.1/Animation)[]


### onReady : (node: [Node](/classes/3.1/Node)) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | node | [Node](/classes/3.1/Node) | 

### parent : Nullable&lt;[Node](/classes/3.1/Node)&gt;


### onDisposeObservable : [Observable](/classes/3.1/Observable)&lt;[Node](/classes/3.1/Node)&gt;

An event triggered when the mesh is disposed.

@type {BABYLON.[Observable](/classes/3.1/Observable)}
### onDispose : () =&gt; void


### behaviors : Behavior&lt;[Node](/classes/3.1/Node)&gt;[]


## Methods

### getClassName() &rarr; string


### getScene() &rarr; [Scene](/classes/3.1/Scene)


### getEngine() &rarr; [Engine](/classes/3.1/Engine)


### addBehavior(behavior) &rarr; [Node](/classes/3.1/Node)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | behavior | Behavior&lt;[Node](/classes/3.1/Node)&gt; | 

### removeBehavior(behavior) &rarr; [Node](/classes/3.1/Node)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | behavior | Behavior&lt;[Node](/classes/3.1/Node)&gt; | 

### getBehaviorByName(name) &rarr; Nullable&lt;Behavior&lt;[Node](/classes/3.1/Node)&gt;&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### getWorldMatrix() &rarr; [Matrix](/classes/3.1/Matrix)


### updateCache(force) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean | 

### isSynchronizedWithParent() &rarr; boolean


### isSynchronized(updateCache) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | updateCache | boolean | 

### hasNewParent(update) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | update | boolean | 

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
 | value | boolean | 

### isDescendantOf(ancestor) &rarr; boolean

Is this node a descendant of the given node.

The function will iterate up the hierarchy until the ancestor was found or no more parents defined.

@see parent

#### Parameters
 | Name | Type | Description
---|---|---|---
 | ancestor | [Node](/classes/3.1/Node) | 

### getDescendants(directDescendantsOnly, predicate) &rarr; [Node](/classes/3.1/Node)[]

Will return all nodes that have this node as ascendant.

@return {BABYLON.[Node](/classes/3.1/Node)[]} all children nodes of all types.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | directDescendantsOnly | boolean | 
optional | predicate |  | node | [Node](/classes/3.1/Node) | 

### getChildMeshes(directDescendantsOnly, predicate) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)[]

Get all child-meshes of this node.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | directDescendantsOnly | boolean | 
optional | predicate |  | node | [Node](/classes/3.1/Node) | 

### getChildTransformNodes(directDescendantsOnly, predicate) &rarr; [TransformNode](/classes/3.1/TransformNode)[]

Get all child-transformNodes of this node.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | directDescendantsOnly | boolean | 
optional | predicate |  | node | [Node](/classes/3.1/Node) | 

### getChildren(predicate) &rarr; [Node](/classes/3.1/Node)[]

Get all direct children of this node.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | predicate |  | node | [Node](/classes/3.1/Node) | 

 | 
### getAnimationByName(name) &rarr; Nullable&lt;[Animation](/classes/3.1/Animation)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### createAnimationRange(name, from, to) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | from | number | 
 | to | number | 
### deleteAnimationRange(name, deleteFrames) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
optional | deleteFrames | boolean | 
### getAnimationRange(name) &rarr; Nullable&lt;[AnimationRange](/classes/3.1/AnimationRange)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### beginAnimation(name, loop, speedRatio, onAnimationEnd) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
optional | loop | boolean | 
optional | speedRatio | number | 
### serializeAnimationRanges() &rarr; any


### computeWorldMatrix(force) &rarr; [Matrix](/classes/3.1/Matrix)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean | 

### dispose() &rarr; void


### static ParseAnimationRanges(node, parsedNode, scene) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | node | [Node](/classes/3.1/Node) | 
 | parsedNode | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
