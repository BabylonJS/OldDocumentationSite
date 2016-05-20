---
ID_PAGE: 25205
PG_TITLE: OctreeBlock<T>
PG_VERSION: 2.1
---
## Description

class [OctreeBlock](/classes/2.4/OctreeBlock)

Create a new [OctreeBlock](/classes/2.4/OctreeBlock)

## Constructor

## new [OctreeBlock](/classes/2.4/OctreeBlock)(minPoint, maxPoint, capacity, depth, maxDepth, creationFunc)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | minPoint | [Vector3](/classes/2.4/Vector3) |    The minimum point
 | maxPoint | [Vector3](/classes/2.4/Vector3) |    The maximum point
 | capacity | number |    @param capacity
 | depth | number |    @param depth
 | maxDepth | number |    @param maxDepth
## Members

### entries : T[]

The entries

### blocks : Array&lt;[OctreeBlock](/classes/2.4/OctreeBlock)&lt;T&gt;&gt;

The blocks

### capacity : number

The capacity of the octreeBlock

### minPoint : [Vector3](/classes/2.4/Vector3)

The min point

### maxPoint : [Vector3](/classes/2.4/Vector3)

The max point

## Methods

### addEntry(entry) &rarr; void

Add an entry to this octree block. The creationFunc linked to this octreeblock is used on the given entry

#### Parameters
 | Name | Type | Description
---|---|---|---
 | entry | T |    @param entry

### addEntries(entries) &rarr; void

Add an entries to this octree block.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | entries | T[] |    @param entries

### select(frustumPlanes, selection, allowDuplicate) &rarr; void

Select

#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.4/Plane)[] |    [Frustum](/classes/2.4/Frustum) plan of the mesh
 | selection | [SmartArray](/classes/2.4/SmartArray)&lt;T&gt; |    @param selection
optional | allowDuplicate | boolean |    True if you want to duplicate it, false otherwise.
### intersects(sphereCenter, sphereRadius, selection, allowDuplicate) &rarr; void

Intersects

#### Parameters
 | Name | Type | Description
---|---|---|---
 | sphereCenter | [Vector3](/classes/2.4/Vector3) |    The sphere center
 | sphereRadius | number |    The sphere radius
 | selection | [SmartArray](/classes/2.4/SmartArray)&lt;T&gt; |    @param selection
### intersectsRay(ray, selection) &rarr; void

Intersects ray

#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/2.4/Ray) |    @param ray
 | selection | [SmartArray](/classes/2.4/SmartArray)&lt;T&gt; |    @param selection
### createInnerBlocks() &rarr; void


