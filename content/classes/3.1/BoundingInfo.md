---
ID_PAGE: 25202
PG_TITLE: BoundingInfo
PG_VERSION: 2.1
TAGS:
    - Mesh
    - Bounding
---
## Description

class [BoundingInfo](/classes/3.1/BoundingInfo)



## Constructor

## new [BoundingInfo](/classes/3.1/BoundingInfo)(minimum, maximum)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](/classes/3.1/Vector3) | 
 | maximum | [Vector3](/classes/3.1/Vector3) | 
## Members

### minimum : [Vector3](/classes/3.1/Vector3)



### maximum : [Vector3](/classes/3.1/Vector3)



### boundingBox : [BoundingBox](/classes/3.1/BoundingBox)



### boundingSphere : [BoundingSphere](/classes/3.1/BoundingSphere)



### isLocked : boolean



### diagonalLength : number

Gets the world distance between the min and max points of the bounding box

## Methods

### update(world) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/3.1/Matrix) | 

### isInFrustum(frustumPlanes) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/3.1/Plane)[] | 

### isCompletelyInFrustum(frustumPlanes) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/3.1/Plane)[] | 

### intersectsPoint(point) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](/classes/3.1/Vector3) | 

### intersects(boundingInfo, precise) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | boundingInfo | [BoundingInfo](/classes/3.1/BoundingInfo) | 
 | precise | boolean | 
