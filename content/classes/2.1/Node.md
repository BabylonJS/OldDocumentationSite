---
ID_PAGE: 25118
PG_TITLE: Node
PG_VERSION: 2.1
TAGS:
    - Node
---

 [Node](/classes/Node) is the basic class for all scene objects (Mesh, [Light](/classes/Light) [Camera](/classes/Camera)).
##new [Node](/classes/Node)(name, scene)

@constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The node identifier
 | scene | [Scene](/classes/Scene) | The scene linked to this node.
---

##Members

###parent : [Node](/classes/Node)





The parent node of the node




###name : string





The name of the node




###id : string





The id of the node




###uniqueId : number


###state : string





The state of the node




###animations : [Animation](/classes/Animation)[]





The animations of the node




###onReady : (node: [Node](/classes/Node)) =&gt; void





Called when node is ready















##Methods

###getScene() &rarr; [Scene](/classes/Scene)
Get the scene linked to this node








###getEngine() &rarr; [Engine](/classes/Engine)
Get the engine linked to this node








###getWorldMatrix() &rarr; [Matrix](/classes/Matrix)
Get the world matrix








###updateCache(force) &rarr; void
Update the cache







####Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean | True to force the update
---

###isSynchronizedWithParent() &rarr; boolean
Return true if the node is synchronized with parent








###isSynchronized(updateCache) &rarr; boolean
Return true if the node is synchronized







####Parameters
 | Name | Type | Description
---|---|---|---
optional | updateCache | boolean | True to update the cache
---

###hasNewParent(update) &rarr; boolean
Return true if the node has new parent







####Parameters
 | Name | Type | Description
---|---|---|---
optional | update | boolean | True to update the node
---

###isReady() &rarr; boolean
Is this node ready to be used/rendered
@return {boolean} is it ready


###isEnabled() &rarr; boolean
Is this node enabled.
If the node has a parent and is enabled, the parent will be inspected as well.
@return {boolean} whether this node (and its parent) is enabled.
@see setEnabled


###setEnabled(value) &rarr; void
Set the enabled state of this node.
@see isEnabled

####Parameters
 | Name | Type | Description
---|---|---|---
 | value | boolean | True to set the node enable ; False otherwise
---

###isDescendantOf(ancestor) &rarr; boolean
Is this node a descendant of the given node.
The function will iterate up the hierarchy until the ancestor was found or no more parents defined.
@see parent

####Parameters
 | Name | Type | Description
---|---|---|---
 | ancestor | [Node](/classes/Node) | The ancestor node to test
---

###getDescendants() &rarr; [Node](/classes/Node)[]
Will return all nodes that have this node as parent.
@return {BABYLON.Node[]} all children nodes of all types.

