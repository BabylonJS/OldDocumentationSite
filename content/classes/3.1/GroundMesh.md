---
ID_PAGE: 25148
PG_TITLE: GroundMesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---
## Description

class [GroundMesh](/classes/3.1/GroundMesh) extends [Mesh](/classes/3.1/Mesh)



## Constructor

## new [GroundMesh](/classes/3.1/GroundMesh)(name, scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/3.1/Scene) | 
## Members

### generateOctree : boolean



### subdivisions : number



### subdivisionsX : number



### subdivisionsY : number



## Methods

### getClassName() &rarr; string


### optimize(chunksCount, octreeBlocksSize) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | chunksCount | number | 
optional | octreeBlocksSize | number | 
### getHeightAtCoordinates(x, z) &rarr; number

Returns a height (y) value in the Worl system :

the ground altitude at the coordinates (x, z) expressed in the World system.

Returns the ground y position if (x, z) are outside the ground surface.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | z | number | 
### getNormalAtCoordinates(x, z) &rarr; [Vector3](/classes/3.1/Vector3)

Returns a normalized vector ([Vector3](/classes/3.1/Vector3)) orthogonal to the ground

at the ground coordinates (x, z) expressed in the World system.

Returns [Vector3](/classes/3.1/Vector3)(0.0, 1.0, 0.0) if (x, z) are outside the ground surface.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | z | number | 
### getNormalAtCoordinatesToRef(x, z, ref) &rarr; [GroundMesh](/classes/3.1/GroundMesh)

Updates the [Vector3](/classes/3.1/Vector3) passed a reference with a normalized vector orthogonal to the ground

at the ground coordinates (x, z) expressed in the World system.

Doesn't uptade the reference [Vector3](/classes/3.1/Vector3) if (x, z) are outside the ground surface.

Returns the [GroundMesh](/classes/3.1/GroundMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | z | number | 
 | ref | [Vector3](/classes/3.1/Vector3) | 
### updateCoordinateHeights() &rarr; [GroundMesh](/classes/3.1/GroundMesh)

Force the heights to be recomputed for getHeightAtCoordinates() or getNormalAtCoordinates()

if the ground has been updated.

This can be used in the render loop.

Returns the [GroundMesh](/classes/3.1/GroundMesh).
### serialize(serializationObject) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | serializationObject | any | 

### static Parse(parsedMesh, scene) &rarr; [GroundMesh](/classes/3.1/GroundMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedMesh | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
