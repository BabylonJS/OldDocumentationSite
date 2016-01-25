---
ID_PAGE: 25148
PG_TITLE: GroundMesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---
##Description

class [GroundMesh](/classes/2.2/GroundMesh) extends [Mesh](/classes/2.2/Mesh)



##Constructor

##new [GroundMesh](/classes/2.2/GroundMesh)(name, scene)

The [GroundMesh](/classes/2.2/GroundMesh) constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  @param name
 | scene | [Scene](/classes/2.2/Scene) |  @param scene
##Members

###generateOctree : boolean

true if this is generated, false if is not

###subdivisions : number

The subdivision of the [GroundMesh](/classes/2.2/GroundMesh)

##Methods

###optimize(chunksCount, octreeBlocksSize) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | chunksCount | number |  @param chunksCount
optional | octreeBlocksSize | number | 
###getHeightAtCoordinates(x, z) &rarr; number



####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |  @param x
 | z | number |  @param z
