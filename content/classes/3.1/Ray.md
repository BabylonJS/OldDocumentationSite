---
ID_PAGE: 25246
PG_TITLE: Ray
PG_VERSION: 2.1
---
## Description

class [Ray](/classes/3.1/Ray)



## Constructor

## new [Ray](/classes/3.1/Ray)(origin, direction, length)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | origin | [Vector3](/classes/3.1/Vector3) | 
 | direction | [Vector3](/classes/3.1/Vector3) | 
optional | length | number | 
## Members

### origin : [Vector3](/classes/3.1/Vector3)


### direction : [Vector3](/classes/3.1/Vector3)


### length : number


## Methods

### intersectsBoxMinMax(minimum, maximum) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | minimum | [Vector3](/classes/3.1/Vector3) | 
 | maximum | [Vector3](/classes/3.1/Vector3) | 
### intersectsBox(box) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | box | [BoundingBox](/classes/3.1/BoundingBox) | 

### intersectsSphere(sphere) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | sphere | [BoundingSphere](/classes/3.1/BoundingSphere) | 

### intersectsTriangle(vertex0, vertex1, vertex2) &rarr; Nullable&lt;[IntersectionInfo](/classes/3.1/IntersectionInfo)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vertex0 | [Vector3](/classes/3.1/Vector3) | 
 | vertex1 | [Vector3](/classes/3.1/Vector3) | 
 | vertex2 | [Vector3](/classes/3.1/Vector3) | 
### intersectsPlane(plane) &rarr; Nullable&lt;number&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | plane | [Plane](/classes/3.1/Plane) | 

### intersectsMesh(mesh, fastCheck) &rarr; [PickingInfo](/classes/3.1/PickingInfo)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
optional | fastCheck | boolean | 
### intersectsMeshes(meshes, fastCheck, results) &rarr; Array&lt;[PickingInfo](/classes/3.1/PickingInfo)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | meshes | Array&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt; | 
optional | fastCheck | boolean | 
optional | results | Array&lt;[PickingInfo](/classes/3.1/PickingInfo)&gt; | 
### intersectionSegment(sega, segb, threshold) &rarr; number

Intersection test between the ray and a given segment whithin a given tolerance (threshold)

@return the distance from the ray origin to the intersection point if there's intersection, or -1 if there's no intersection

#### Parameters
 | Name | Type | Description
---|---|---|---
 | sega | [Vector3](/classes/3.1/Vector3) |  the first point of the segment to test the intersection against
 | segb | [Vector3](/classes/3.1/Vector3) |  the second point of the segment to test the intersection against
 | threshold | number |  the tolerance margin, if the ray doesn't intersect the segment but is close to the given threshold, the intersection is successful
### static CreateNew(x, y, viewportWidth, viewportHeight, world, view, projection) &rarr; [Ray](/classes/3.1/Ray)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | viewportWidth | number | 
 | viewportHeight | number | 
 | world | [Matrix](/classes/3.1/Matrix) | 
 | view | [Matrix](/classes/3.1/Matrix) | 
### static CreateNewFromTo(origin, end, world) &rarr; [Ray](/classes/3.1/Ray)

Function will create a new transformed ray starting from origin and ending at the end point. [Ray](/classes/3.1/Ray)'s length will be set, and ray will be

transformed to the given world matrix.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | origin | [Vector3](/classes/3.1/Vector3) |  The origin point
 | end | [Vector3](/classes/3.1/Vector3) |  The end point
optional | world | [Matrix](/classes/3.1/Matrix) |  a matrix to transform the ray to. Default is the identity matrix.
### static Transform(ray, matrix) &rarr; [Ray](/classes/3.1/Ray)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/3.1/Ray) | 
 | matrix | [Matrix](/classes/3.1/Matrix) | 
### static TransformToRef(ray, matrix, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/3.1/Ray) | 
 | matrix | [Matrix](/classes/3.1/Matrix) | 
 | result | [Ray](/classes/3.1/Ray) | 
