---
ID_PAGE: 25204
PG_TITLE: Octree<T>
PG_VERSION: 2.1
---
## Description

class [Octree](/classes/2.5/Octree)

Data structure class based on space coordinates

## Constructor

## new [Octree](/classes/2.5/Octree)(creationFunc, maxBlockCapacity, maxDepth)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | creationFunc | (entry: T, block: [OctreeBlock](/classes/2.5/OctreeBlock)&lt;T&gt;) =&gt; void |     The function used to add a mesh in this octree
optional | maxBlockCapacity | number |     @param maxBlockCapacity
optional | maxDepth | number |     @param maxDepth
## Members

### maxDepth : number

The maxDepth

### blocks : Array&lt;[OctreeBlock](/classes/2.5/OctreeBlock)&lt;T&gt;&gt;

The blocks

### dynamicContent : T[]

The dynamic content

### static CreationFuncForMeshes : (entry: [AbstractMesh](/classes/2.5/AbstractMesh), block: [OctreeBlock](/classes/2.5/OctreeBlock)&lt;[AbstractMesh](/classes/2.5/AbstractMesh)&gt;) =&gt; void

Create function for Meshes

### static CreationFuncForSubMeshes : (entry: [SubMesh](/classes/2.5/SubMesh), block: [OctreeBlock](/classes/2.5/OctreeBlock)&lt;[SubMesh](/classes/2.5/SubMesh)&gt;) =&gt; void

Create function for SubMeshes

## Methods

### update(worldMin, worldMax, entries) &rarr; void

Update this octree

#### Parameters
 | Name | Type | Description
---|---|---|---
 | worldMin | [Vector3](/classes/2.5/Vector3) |     the minimum world
 | worldMax | [Vector3](/classes/2.5/Vector3) |     the maximum world
 | entries | T[] |     @param entries
### addMesh(entry) &rarr; void

Add a mesh to this octree

#### Parameters
 | Name | Type | Description
---|---|---|---
 | entry | T |     @param entry

### select(frustumPlanes, allowDuplicate) &rarr; [SmartArray](/classes/2.5/SmartArray)&lt;T&gt;

Select octree

#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.5/Plane)[] |     [Frustum](/classes/2.5/Frustum) plan of the mesh
optional | allowDuplicate | boolean |     True if you want to duplicate it, false otherwise.
### intersects(sphereCenter, sphereRadius, allowDuplicate) &rarr; [SmartArray](/classes/2.5/SmartArray)&lt;T&gt;

Intersects

#### Parameters
 | Name | Type | Description
---|---|---|---
 | sphereCenter | [Vector3](/classes/2.5/Vector3) |     The sphere center
 | sphereRadius | number |     The sphere radius
optional | allowDuplicate | boolean |     True if you want to duplicate it, false otherwise.
### intersectsRay(ray) &rarr; [SmartArray](/classes/2.5/SmartArray)&lt;T&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/2.5/Ray) |     @param ray

