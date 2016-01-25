---
ID_PAGE: 25149
PG_TITLE: LinesMesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---

The [LinesMesh](/classes/LinesMesh) class
##new [LinesMesh](/classes/LinesMesh)(name, scene, updatable)




The [LinesMesh](/classes/LinesMesh) constructor






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | @param name
 | scene | [Scene](/classes/Scene) | The scene where the [LinesMesh](/classes/LinesMesh) is
optional | updatable | boolean | @param updatable
---

##Extends
 [Mesh](/classes/Mesh)
##Members

###color : [Color3](/classes/Color3)





The color of the lines [Mesh](/classes/Mesh)




###alpha : number





The alpha




###material : [Material](/classes/Material)





The material of the Lines [Mesh](/classes/Mesh)




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
 | ray | [Ray](/classes/Ray) | The ray
optional | fastCheck | boolean | if true, stop at the first result
---

###dispose(doNotRecurse) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean | @param doNotRecurse
---
