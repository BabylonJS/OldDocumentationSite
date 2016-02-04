---
ID_PAGE: 25201
PG_TITLE: BoundingBox
PG_VERSION: 2.1
TAGS:
    - Mesh
    - Bounding
---
## Description

class [BoundingBox](/classes/2.3/BoundingBox)



## Constructor

##  new [BoundingBox](/classes/2.3/BoundingBox)(minimum, maximum)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](/classes/2.3/Vector3) |   @param minimum
 | maximum | [Vector3](/classes/2.3/Vector3) |   @param maximum
## Members

### minimum : [Vector3](/classes/2.3/Vector3)



### maximum : [Vector3](/classes/2.3/Vector3)



### vectors : [Vector3](/classes/2.3/Vector3)[]



### center : [Vector3](/classes/2.3/Vector3)



### extendSize : [Vector3](/classes/2.3/Vector3)



### directions : [Vector3](/classes/2.3/Vector3)[]



### vectorsWorld : [Vector3](/classes/2.3/Vector3)[]



### minimumWorld : [Vector3](/classes/2.3/Vector3)



### maximumWorld : [Vector3](/classes/2.3/Vector3)



## Methods

### getWorldMatrix() &rarr; [Matrix](/classes/2.3/Matrix)


### isInFrustum(frustumPlanes) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.3/Plane)[] |   [Frustum](/classes/2.3/Frustum) planes

### isCompletelyInFrustum(frustumPlanes) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.3/Plane)[] |   [Frustum](/classes/2.3/Frustum) planes

### intersectsPoint(point) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](/classes/2.3/Vector3) |   the point coordinates

### intersectsSphere(sphere) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | sphere | [BoundingSphere](/classes/2.3/BoundingSphere) |   The given sphere

### intersectsMinMax(min, max) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | min | [Vector3](/classes/2.3/Vector3) |   The minimum value of this world
 | max | [Vector3](/classes/2.3/Vector3) |   The maximum value of this world
### static  Intersects(box0, box1) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | box0 | [BoundingBox](/classes/2.3/BoundingBox) |   The first box
 | box1 | [BoundingBox](/classes/2.3/BoundingBox) |   The second box
### static  IntersectsSphere(minPoint, maxPoint, sphereCenter, sphereRadius) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | minPoint | [Vector3](/classes/2.3/Vector3) |   @param minPoint
 | maxPoint | [Vector3](/classes/2.3/Vector3) |   @param maxPoint
 | sphereCenter | [Vector3](/classes/2.3/Vector3) |   the sphere center
### static  IsCompletelyInFrustum(boundingVectors, frustumPlanes) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | boundingVectors | [Vector3](/classes/2.3/Vector3)[] |   @param boundingVectors
 | frustumPlanes | [Plane](/classes/2.3/Plane)[] |   [Frustum](/classes/2.3/Frustum) planes
### static  IsInFrustum(boundingVectors, frustumPlanes) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | boundingVectors | [Vector3](/classes/2.3/Vector3)[] |   @param boundingVectors
 | frustumPlanes | [Plane](/classes/2.3/Plane)[] |   [Frustum](/classes/2.3/Frustum) planes
