---
ID_PAGE: 25202
PG_TITLE: BoundingInfo
PG_VERSION: 2.1
TAGS:
    - Mesh
    - Bounding
---
## Description

class [BoundingInfo](/classes/2.5/BoundingInfo)



## Constructor

## new [BoundingInfo](/classes/2.5/BoundingInfo)(minimum, maximum)

The Bounding Info constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](/classes/2.5/Vector3) |     The minimum of the bounding info
 | maximum | [Vector3](/classes/2.5/Vector3) |     The maximum of the bounding info
## Members

### minimum : [Vector3](/classes/2.5/Vector3)

The minimum of the bounding info

### maximum : [Vector3](/classes/2.5/Vector3)

The maximum of the bounding info

### boundingBox : [BoundingBox](/classes/2.5/BoundingBox)

The bounding box of the bounding info

### boundingSphere : [BoundingSphere](/classes/2.5/BoundingSphere)

The bounding sphere of the bounding info

### isLocked : boolean



## Methods

### update(world) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.5/Matrix) |   

### isInFrustum(frustumPlanes) &rarr; boolean

Check if the bounding

#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.5/Plane)[] |     

### isCompletelyInFrustum(frustumPlanes) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.5/Plane)[] |     

### intersectsPoint(point) &rarr; boolean

Check if the bounding sphere or the bounding box intersect the given point.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](/classes/2.5/Vector3) |     The point

### intersects(boundingInfo, precise) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | boundingInfo | [BoundingInfo](/classes/2.5/BoundingInfo) |     The bounding info
 | precise | boolean |     False : check only bounding volumes, true check point by point
