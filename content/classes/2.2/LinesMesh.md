---
ID_PAGE: 25149
PG_TITLE: LinesMesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---
##Description

class [LinesMesh](/classes/2.2/LinesMesh) extends [Mesh](/classes/2.2/Mesh)

The [LinesMesh](/classes/2.2/LinesMesh) class

##Constructor

##new [LinesMesh](/classes/2.2/LinesMesh)(name, scene, parent, source, doNotCloneChildren)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  @param name
 | scene | [Scene](/classes/2.2/Scene) |  The scene where the [LinesMesh](/classes/2.2/LinesMesh) is
optional | parent | [Node](/classes/2.2/Node) | 
optional | source | [Mesh](/classes/2.2/Mesh) | 
##Members

###color : [Color3](/classes/2.2/Color3)

The color of the lines [Mesh](/classes/2.2/Mesh)

###alpha : number

The alpha

###material : [Material](/classes/2.2/Material)

The material of the Lines [Mesh](/classes/2.2/Mesh)

###isPickable : boolean

true if is Packable, false otherwise

###checkCollisions : boolean

True if the mesh has collision, false otherwise

##Methods

###intersects(ray, fastCheck) &rarr; any

Intersects
if false, infinite ray !

####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/2.2/Ray) |  The ray
optional | fastCheck | boolean |  if true, stop at the first result
###dispose(doNotRecurse) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean |  @param doNotRecurse

###clone(name, newParent, doNotCloneChildren) &rarr; [LinesMesh](/classes/2.2/LinesMesh)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  @param name
optional | newParent | [Node](/classes/2.2/Node) | 
optional | doNotCloneChildren | boolean | 
