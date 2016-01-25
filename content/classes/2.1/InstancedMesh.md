---
ID_PAGE: 25146
PG_TITLE: InstancedMesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---

Creates an instance based on a source mesh.
##new [InstancedMesh](/classes/InstancedMesh)(name, source)




The [InstancedMesh](/classes/InstancedMesh) constructor






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | @param name
 | source | [Mesh](/classes/Mesh) | @param source
---

##Extends
 [AbstractMesh](/classes/AbstractMesh)
##Members

###receiveShadows : boolean





True if the Instanced [Mesh](/classes/Mesh) got shadows, false if is not




###material : [Material](/classes/Material)





The material




###visibility : number





The visibility of the Instanced [Mesh](/classes/Mesh)




###skeleton : [Skeleton](/classes/Skeleton)





The skeleton




###sourceMesh : [Mesh](/classes/Mesh)





The sourceMesh















##Methods

###getTotalVertices() &rarr; number
Get the total vertices of the Instanced [Mesh](/classes/Mesh)








###getVerticesData(kind) &rarr; number[]
Get the vertices data







####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | @param kind
---

###isVerticesDataPresent(kind) &rarr; boolean
Is Vertices data present







####Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | @param kind
---

###getIndices() &rarr; number[]
Get Indices








###refreshBoundingInfo() &rarr; void
Refresh Bounding Info of the Instanced [Mesh](/classes/Mesh)








###getLOD(camera) &rarr; [AbstractMesh](/classes/AbstractMesh)





####Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/Camera) | 
---

###clone(name, newParent, doNotCloneChildren) &rarr; [InstancedMesh](/classes/InstancedMesh)
Clone this instanced [Mesh](/classes/Mesh)







####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The given name
 | newParent | [Node](/classes/Node) | The parent
optional | doNotCloneChildren | boolean | True if you want to clone children, false if you don't want to.
---

###dispose(doNotRecurse) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean | @param doNotRecurse
---
