---
ID_PAGE: 25205
PG_TITLE: OctreeBlock<T>
PG_VERSION: 2.1
---
## Description

class [OctreeBlock](/classes/2.3/OctreeBlock)



## Constructor

##  new [OctreeBlock](/classes/2.3/OctreeBlock)(minPoint, maxPoint, capacity, depth, maxDepth, creationFunc)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | minPoint | [Vector3](/classes/2.3/Vector3) |   The minimum point
 | maxPoint | [Vector3](/classes/2.3/Vector3) |   The maximum point
 | capacity | number |   @param capacity
 | depth | number |   @param depth
 | maxDepth | number |   @param maxDepth
## Members

### entries : T[]



### blocks : Array&lt;[OctreeBlock](/classes/2.3/OctreeBlock)&lt;T&gt;&gt;



### capacity : number



### minPoint : [Vector3](/classes/2.3/Vector3)



### maxPoint : [Vector3](/classes/2.3/Vector3)



## Methods

### addEntry(entry) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | entry | T |   @param entry

### addEntries(entries) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | entries | T[] |   @param entries

### select(frustumPlanes, selection, allowDuplicate) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.3/Plane)[] |   [Frustum](/classes/2.3/Frustum) plan of the mesh
 | selection | [SmartArray](/classes/2.3/SmartArray)&lt;T&gt; |   @param selection
optional | allowDuplicate | boolean |   True if you want to duplicate it, false otherwise.
### intersects(sphereCenter, sphereRadius, selection, allowDuplicate) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | sphereCenter | [Vector3](/classes/2.3/Vector3) |   The sphere center
 | sphereRadius | number |   The sphere radius
 | selection | [SmartArray](/classes/2.3/SmartArray)&lt;T&gt; |   @param selection
### intersectsRay(ray, selection) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/2.3/Ray) |   @param ray
 | selection | [SmartArray](/classes/2.3/SmartArray)&lt;T&gt; |   @param selection
### createInnerBlocks() &rarr; void


