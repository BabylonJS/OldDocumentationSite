---
ID_PAGE: 25202
PG_TITLE: BoundingInfo
PG_VERSION: 2.1
TAGS:
    - Mesh
    - Bounding
---
## Description

class [BoundingInfo](/classes/2.3/BoundingInfo)



## Constructor

##  new [BoundingInfo](/classes/2.3/BoundingInfo)(minimum, maximum)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](/classes/2.3/Vector3) |   The minimum of the bounding info
 | maximum | [Vector3](/classes/2.3/Vector3) |   The maximum of the bounding info
## Members

### minimum : [Vector3](/classes/2.3/Vector3)



### maximum : [Vector3](/classes/2.3/Vector3)



### boundingBox : [BoundingBox](/classes/2.3/BoundingBox)



### boundingSphere : [BoundingSphere](/classes/2.3/BoundingSphere)



### isLocked : boolean



## Methods

### update(world) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.3/Matrix) | 

### isInFrustum(frustumPlanes) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.3/Plane)[] |   

### isCompletelyInFrustum(frustumPlanes) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.3/Plane)[] |   

### intersectsPoint(point) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](/classes/2.3/Vector3) |   The point

### intersects(boundingInfo, precise) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | boundingInfo | [BoundingInfo](/classes/2.3/BoundingInfo) |   The bounding info
 | precise | boolean |   False : check only bounding volumes, true check point by point
