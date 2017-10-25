---
ID_PAGE: 25205
PG_TITLE: OctreeBlock<T>
PG_VERSION: 2.1
---
## Description

class [OctreeBlock](/classes/3.1/OctreeBlock)



## Constructor

## new [OctreeBlock](/classes/3.1/OctreeBlock)(minPoint, maxPoint, capacity, depth, maxDepth, creationFunc)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | minPoint | [Vector3](/classes/3.1/Vector3) | 
 | maxPoint | [Vector3](/classes/3.1/Vector3) | 
 | capacity | number | 
 | depth | number | 
 | maxDepth | number | 
## Members

### entries : T[]



### blocks : Array&lt;[OctreeBlock](/classes/3.1/OctreeBlock)&lt;T&gt;&gt;



### capacity : number



### minPoint : [Vector3](/classes/3.1/Vector3)



### maxPoint : [Vector3](/classes/3.1/Vector3)



## Methods

### addEntry(entry) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | entry | T | 

### addEntries(entries) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | entries | T[] | 

### select(frustumPlanes, selection, allowDuplicate) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/3.1/Plane)[] | 
 | selection | [SmartArray](/classes/3.1/SmartArray)&lt;T&gt; | 
optional | allowDuplicate | boolean | 
### intersects(sphereCenter, sphereRadius, selection, allowDuplicate) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | sphereCenter | [Vector3](/classes/3.1/Vector3) | 
 | sphereRadius | number | 
 | selection | [SmartArray](/classes/3.1/SmartArray)&lt;T&gt; | 
### intersectsRay(ray, selection) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/3.1/Ray) | 
 | selection | [SmartArray](/classes/3.1/SmartArray)&lt;T&gt; | 
### createInnerBlocks() &rarr; void


