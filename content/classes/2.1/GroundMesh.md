---
ID_PAGE: 25148
PG_TITLE: GroundMesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---

The [GroundMesh](/classes/GroundMesh) Class extends [Mesh](/classes/Mesh)
##new [GroundMesh](/classes/GroundMesh)(name, scene)




The [GroundMesh](/classes/GroundMesh) constructor






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | @param name
 | scene | [Scene](/classes/Scene) | @param scene
---

##Extends
 [Mesh](/classes/Mesh)
##Members

###generateOctree : boolean





true if this is generated, false if is not




###subdivisions : number





The subdivision of the [GroundMesh](/classes/GroundMesh)















##Methods

###optimize(chunksCount) &rarr; void
Optimize function







####Parameters
 | Name | Type | Description
---|---|---|---
 | chunksCount | number | @param chunksCount
---

###getHeightAtCoordinates(x, z) &rarr; number

####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | @param x
 | z | number | @param z
---
