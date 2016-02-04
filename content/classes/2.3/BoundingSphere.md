---
ID_PAGE: 25203
PG_TITLE: BoundingSphere
PG_VERSION: 2.1
TAGS:
    - Mesh
    - Bounding
---
## Description

class [BoundingSphere](/classes/2.3/BoundingSphere)



## Constructor

##  new [BoundingSphere](/classes/2.3/BoundingSphere)(minimum, maximum)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](/classes/2.3/Vector3) |   The minimum of the sphere
 | maximum | [Vector3](/classes/2.3/Vector3) |   The maximum of the sphere
## Members

### minimum : [Vector3](/classes/2.3/Vector3)



### maximum : [Vector3](/classes/2.3/Vector3)



### center : [Vector3](/classes/2.3/Vector3)



### radius : number



### centerWorld : [Vector3](/classes/2.3/Vector3)



### radiusWorld : number



## Methods

### isInFrustum(frustumPlanes) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.3/Plane)[] |   the frustum planes

### intersectsPoint(point) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | point | [Vector3](/classes/2.3/Vector3) |   The point

### static  Intersects(sphere0, sphere1) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | sphere0 | [BoundingSphere](/classes/2.3/BoundingSphere) |   The first sphere
 | sphere1 | [BoundingSphere](/classes/2.3/BoundingSphere) |   The second sphere
