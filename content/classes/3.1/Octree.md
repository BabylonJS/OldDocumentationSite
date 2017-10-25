---
ID_PAGE: 25204
PG_TITLE: Octree<T>
PG_VERSION: 2.1
---
## Description

class [Octree](/classes/3.1/Octree)



## Constructor

## new [Octree](/classes/3.1/Octree)(creationFunc, maxBlockCapacity, maxDepth)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | creationFunc | (entry: T, block: [OctreeBlock](/classes/3.1/OctreeBlock)&lt;T&gt;) =&gt; void | 
optional | maxBlockCapacity | number | 
optional | maxDepth | number | 
## Members

### maxDepth : number



### blocks : Array&lt;[OctreeBlock](/classes/3.1/OctreeBlock)&lt;T&gt;&gt;



### dynamicContent : T[]



### static CreationFuncForMeshes : (entry: [AbstractMesh](/classes/3.1/AbstractMesh), block: [OctreeBlock](/classes/3.1/OctreeBlock)&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;) =&gt; void



### static CreationFuncForSubMeshes : (entry: [SubMesh](/classes/3.1/SubMesh), block: [OctreeBlock](/classes/3.1/OctreeBlock)&lt;[SubMesh](/classes/3.1/SubMesh)&gt;) =&gt; void



## Methods

### update(worldMin, worldMax, entries) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | worldMin | [Vector3](/classes/3.1/Vector3) | 
 | worldMax | [Vector3](/classes/3.1/Vector3) | 
 | entries | T[] | 
### addMesh(entry) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | entry | T | 

### select(frustumPlanes, allowDuplicate) &rarr; [SmartArray](/classes/3.1/SmartArray)&lt;T&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/3.1/Plane)[] | 
optional | allowDuplicate | boolean | 
### intersects(sphereCenter, sphereRadius, allowDuplicate) &rarr; [SmartArray](/classes/3.1/SmartArray)&lt;T&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | sphereCenter | [Vector3](/classes/3.1/Vector3) | 
 | sphereRadius | number | 
optional | allowDuplicate | boolean | 
### intersectsRay(ray) &rarr; [SmartArray](/classes/3.1/SmartArray)&lt;T&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/3.1/Ray) | 

