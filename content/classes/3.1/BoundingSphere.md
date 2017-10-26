---
ID_PAGE: 25203
PG_TITLE: BoundingSphere
PG_VERSION: 2.1
TAGS:
    - Mesh
    - Bounding
---
## Description

class [BoundingSphere](/classes/3.1/BoundingSphere)



## Constructor

## new [BoundingSphere](/classes/3.1/BoundingSphere)(minimum, maximum)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](/classes/3.1/Vector3) | 
 | maximum | [Vector3](/classes/3.1/Vector3) | 
## Members

### minimum : [Vector3](/classes/3.1/Vector3)



### maximum : [Vector3](/classes/3.1/Vector3)



### center : [Vector3](/classes/3.1/Vector3)



### radius : number



### centerWorld : [Vector3](/classes/3.1/Vector3)



### radiusWorld : number



## Methods

### isInFrustum(frustumPlanes) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/3.1/Plane)[] | 

### intersectsPoint(point) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](/classes/3.1/Vector3) | 

### static Intersects(sphere0, sphere1) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | sphere0 | [BoundingSphere](/classes/3.1/BoundingSphere) | 
 | sphere1 | [BoundingSphere](/classes/3.1/BoundingSphere) | 
