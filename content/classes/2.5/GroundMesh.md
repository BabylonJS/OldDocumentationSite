---
ID_PAGE: 25148
PG_TITLE: GroundMesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---
## Description

class [GroundMesh](/classes/2.5/GroundMesh) extends [Mesh](/classes/2.5/Mesh)



## Constructor

## new [GroundMesh](/classes/2.5/GroundMesh)(name, scene)

The [GroundMesh](/classes/2.5/GroundMesh) constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     @param name
 | scene | [Scene](/classes/2.5/Scene) |     @param scene
## Members

### generateOctree : boolean

true if this is generated, false if is not

### subdivisions : number

The subdivision of the [GroundMesh](/classes/2.5/GroundMesh)

### subdivisionsX : number



### subdivisionsY : number



## Methods

### optimize(chunksCount, octreeBlocksSize) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | chunksCount | number |     @param chunksCount
optional | octreeBlocksSize | number |    
### getHeightAtCoordinates(x, z) &rarr; number

Returns a height (y) value in the Worl system :

the ground altitude at the coordinates (x, z) expressed in the World system.

Returns the ground y position if (x, z) are outside the ground surface.

Not pertinent if the ground is rotated.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |     @param x
 | z | number |     @param z
### getNormalAtCoordinates(x, z) &rarr; [Vector3](/classes/2.5/Vector3)

Returns a normalized vector ([Vector3](/classes/2.5/Vector3)) orthogonal to the ground

at the ground coordinates (x, z) expressed in the World system.

Returns [Vector3](/classes/2.5/Vector3)(0, 1, 0) if (x, z) are outside the ground surface.

Not pertinent if the ground is rotated.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |     @param x
 | z | number |     @param z
### getNormalAtCoordinatesToRef(x, z, ref) &rarr; void

Updates the [Vector3](/classes/2.5/Vector3) passed a reference with a normalized vector orthogonal to the ground

at the ground coordinates (x, z) expressed in the World system.

Doesn't uptade the reference [Vector3](/classes/2.5/Vector3) if (x, z) are outside the ground surface.

Not pertinent if the ground is rotated.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |     @param x
 | z | number |     @param z
 | ref | [Vector3](/classes/2.5/Vector3) |   
### updateCoordinateHeights() &rarr; void

Force the heights to be recomputed for getHeightAtCoordinates() or getNormalAtCoordinates()

if the ground has been updated.

This can be used in the render loop
