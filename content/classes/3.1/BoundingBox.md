---
ID_PAGE: 25201
PG_TITLE: BoundingBox
PG_VERSION: 2.1
TAGS:
    - Mesh
    - Bounding
---
## Description

class [BoundingBox](/classes/3.1/BoundingBox)



## Constructor

## new [BoundingBox](/classes/3.1/BoundingBox)(minimum, maximum)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](/classes/3.1/Vector3) | 
 | maximum | [Vector3](/classes/3.1/Vector3) | 
## Members

### minimum : [Vector3](/classes/3.1/Vector3)



### maximum : [Vector3](/classes/3.1/Vector3)



### vectors : [Vector3](/classes/3.1/Vector3)[]



### center : [Vector3](/classes/3.1/Vector3)



### centerWorld : [Vector3](/classes/3.1/Vector3)



### extendSize : [Vector3](/classes/3.1/Vector3)



### extendSizeWorld : [Vector3](/classes/3.1/Vector3)



### directions : [Vector3](/classes/3.1/Vector3)[]



### vectorsWorld : [Vector3](/classes/3.1/Vector3)[]



### minimumWorld : [Vector3](/classes/3.1/Vector3)



### maximumWorld : [Vector3](/classes/3.1/Vector3)



## Methods

### getWorldMatrix() &rarr; [Matrix](/classes/3.1/Matrix)


### setWorldMatrix(matrix) &rarr; [BoundingBox](/classes/3.1/BoundingBox)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/3.1/Matrix) | 

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

### intersectsSphere(sphere) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | sphere | [BoundingSphere](/classes/3.1/BoundingSphere) | 

### intersectsMinMax(min, max) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | min | [Vector3](/classes/3.1/Vector3) | 
 | max | [Vector3](/classes/3.1/Vector3) | 
### static Intersects(box0, box1) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | box0 | [BoundingBox](/classes/3.1/BoundingBox) | 
 | box1 | [BoundingBox](/classes/3.1/BoundingBox) | 
### static IntersectsSphere(minPoint, maxPoint, sphereCenter, sphereRadius) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | minPoint | [Vector3](/classes/3.1/Vector3) | 
 | maxPoint | [Vector3](/classes/3.1/Vector3) | 
 | sphereCenter | [Vector3](/classes/3.1/Vector3) | 
### static IsCompletelyInFrustum(boundingVectors, frustumPlanes) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | boundingVectors | [Vector3](/classes/3.1/Vector3)[] | 
 | frustumPlanes | [Plane](/classes/3.1/Plane)[] | 
### static IsInFrustum(boundingVectors, frustumPlanes) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | boundingVectors | [Vector3](/classes/3.1/Vector3)[] | 
 | frustumPlanes | [Plane](/classes/3.1/Plane)[] | 
