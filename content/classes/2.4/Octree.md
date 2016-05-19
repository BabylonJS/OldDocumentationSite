---
ID_PAGE: 25204
PG_TITLE: Octree<T>
PG_VERSION: 2.1
---
## Description

class [Octree](/classes/2.4/Octree)

Data structure class based on space coordinates

## Constructor

## new [Octree](/classes/2.4/Octree)(creationFunc, maxBlockCapacity, maxDepth)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | creationFunc | (entry: T, block: [OctreeBlock](/classes/2.4/OctreeBlock)&lt;T&gt;) =&gt; void |    The function used to add a mesh in this octree
optional | maxBlockCapacity | number |    @param maxBlockCapacity
optional | maxDepth | number |    @param maxDepth
## Members

### maxDepth : number

The maxDepth

### blocks : Array&lt;[OctreeBlock](/classes/2.4/OctreeBlock)&lt;T&gt;&gt;

The blocks

### dynamicContent : T[]

The dynamic content

### static CreationFuncForMeshes : (entry: [AbstractMesh](/classes/2.4/AbstractMesh), block: [OctreeBlock](/classes/2.4/OctreeBlock)&lt;[AbstractMesh](/classes/2.4/AbstractMesh)&gt;) =&gt; void

Create function for Meshes

### static CreationFuncForSubMeshes : (entry: [SubMesh](/classes/2.4/SubMesh), block: [OctreeBlock](/classes/2.4/OctreeBlock)&lt;[SubMesh](/classes/2.4/SubMesh)&gt;) =&gt; void

Create function for SubMeshes

## Methods

### updateundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### addMeshundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### selectundefined &rarr; [SmartArray](/classes/2.4/SmartArray)&lt;T&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### intersectsundefined &rarr; [SmartArray](/classes/2.4/SmartArray)&lt;T&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### intersectsRayundefined &rarr; [SmartArray](/classes/2.4/SmartArray)&lt;T&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
