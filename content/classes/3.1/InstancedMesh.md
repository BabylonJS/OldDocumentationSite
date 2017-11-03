---
ID_PAGE: 25146
PG_TITLE: InstancedMesh
PG_VERSION: 2.1
TAGS:
    - Node
    - Mesh
---
## Description

class [InstancedMesh](/classes/3.1/InstancedMesh) extends [AbstractMesh](/classes/3.1/AbstractMesh)

Creates an instance based on a source mesh.

## Constructor

## new [InstancedMesh](/classes/3.1/InstancedMesh)(name, source)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | source | [Mesh](/classes/3.1/Mesh) | 
## Members

### receiveShadows : boolean



### material : [Material](/classes/3.1/Material)



### visibility : number



### skeleton : [Skeleton](/classes/3.1/Skeleton)



### renderingGroupId : number



### sourceMesh : [Mesh](/classes/3.1/Mesh)



### Float32Array : undefined



## Methods

### getClassName() &rarr; string

Returns the string "[InstancedMesh](/classes/3.1/InstancedMesh)".
### getTotalVertices() &rarr; number

Returns the total number of vertices (integer).
### getVerticesData(kind, copyWhenShared) &rarr; number[]

Returns a float array or a Float32Array of the requested kind of data : positons, normals, uvs, etc.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 
optional | copyWhenShared | boolean | 
### setVerticesData(kind, data, Float32Array, updatable, stride) &rarr; [Mesh](/classes/3.1/Mesh)

Sets the vertex data of the mesh geometry for the requested `kind`.

If the mesh has no geometry, a new [Geometry](/classes/3.1/Geometry) object is set to the mesh and then passed this vertex data.

The `data` are either a numeric array either a Float32Array.

The parameter `updatable` is passed as is to the underlying [Geometry](/classes/3.1/Geometry) object constructor (if initianilly none) or updater.

The parameter `stride` is an optional positive integer, it is usually automatically deducted from the `kind` (3 for positions or normals, 2 for UV, etc).

Note that a new underlying [VertexBuffer](/classes/3.1/VertexBuffer) object is created each call.

If the `kind` is the `PositionKind`, the mesh [BoundingInfo](/classes/3.1/BoundingInfo) is renewed, so the bounding box and sphere, and the mesh World [Matrix](/classes/3.1/Matrix) is recomputed.

         * Possible `kind` values :

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).PositionKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UVKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UV2Kind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UV3Kind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UV4Kind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UV5Kind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UV6Kind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).ColorKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).MatricesIndicesKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).MatricesIndicesExtraKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).MatricesWeightsKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).MatricesWeightsExtraKind

         * Returns the [Mesh](/classes/3.1/Mesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 
 | data | number[] or Float32Array | 
optional | updatable | boolean | 
### updateVerticesData(kind, data, Float32Array, updateExtends, makeItUnique) &rarr; [Mesh](/classes/3.1/Mesh)

Updates the existing vertex data of the mesh geometry for the requested `kind`.

If the mesh has no geometry, it is simply returned as it is.

The `data` are either a numeric array either a Float32Array.

No new underlying [VertexBuffer](/classes/3.1/VertexBuffer) object is created.

If the `kind` is the `PositionKind` and if `updateExtends` is true, the mesh [BoundingInfo](/classes/3.1/BoundingInfo) is renewed, so the bounding box and sphere, and the mesh World [Matrix](/classes/3.1/Matrix) is recomputed.

If the parameter `makeItUnique` is true, a new global geometry is created from this positions and is set to the mesh.

         * Possible `kind` values :

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).PositionKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UVKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UV2Kind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UV3Kind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UV4Kind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UV5Kind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).UV6Kind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).ColorKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).MatricesIndicesKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).MatricesIndicesExtraKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).MatricesWeightsKind

- BABYLON.[VertexBuffer](/classes/3.1/VertexBuffer).MatricesWeightsExtraKind

         * Returns the [Mesh](/classes/3.1/Mesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 
 | data | number[] or Float32Array | 
optional | updateExtends | boolean | 
### setIndices(indices, totalVertices) &rarr; [Mesh](/classes/3.1/Mesh)

Sets the mesh indices.

Expects an array populated with integers or a typed array (Int32Array, Uint32Array, Uint16Array).

If the mesh has no geometry, a new [Geometry](/classes/3.1/Geometry) object is created and set to the mesh.

This method creates a new index buffer each call.

Returns the [Mesh](/classes/3.1/Mesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | indices | IndicesArray | 
optional | totalVertices | number | 
### isVerticesDataPresent(kind) &rarr; boolean

Boolean : True if the mesh owns the requested kind of data.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | kind | string | 

### getIndices() &rarr; IndicesArray

Returns an array of indices (IndicesArray).
### refreshBoundingInfo() &rarr; [InstancedMesh](/classes/3.1/InstancedMesh)

Sets a new updated [BoundingInfo](/classes/3.1/BoundingInfo) to the mesh.

Returns the mesh.
### getLOD(camera) &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Returns the current associated LOD [AbstractMesh](/classes/3.1/AbstractMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/3.1/Camera) | 

### clone(name, newParent, doNotCloneChildren) &rarr; [InstancedMesh](/classes/3.1/InstancedMesh)

Creates a new [InstancedMesh](/classes/3.1/InstancedMesh) from the current mesh.

- name (string) : the cloned mesh name

- newParent (optional [Node](/classes/3.1/Node)) : the optional [Node](/classes/3.1/Node) to parent the clone to.

- doNotCloneChildren (optional boolean, default `false`) : if `true` the model children aren't cloned.

         * Returns the clone.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | newParent | [Node](/classes/3.1/Node) | 
optional | doNotCloneChildren | boolean | 
### dispose(doNotRecurse) &rarr; void

Disposes the [InstancedMesh](/classes/3.1/InstancedMesh).

Returns nothing.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | doNotRecurse | boolean | 

