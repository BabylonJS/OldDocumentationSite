---
ID_PAGE: 25271
PG_TITLE: SubMesh
PG_VERSION: 2.1
TAGS:
    - Mesh
---
## Description

class [SubMesh](/classes/3.1/SubMesh) extends [BaseSubMesh](/classes/3.1/BaseSubMesh)



## Constructor

## new [SubMesh](/classes/3.1/SubMesh)(materialIndex, verticesStart, verticesCount, indexStart, indexCount, mesh, renderingMesh, createBoundingBox)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | materialIndex | number | 
 | verticesStart | number | 
 | verticesCount | number | 
 | indexStart | number | 
 | indexCount | number | 
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
optional | renderingMesh | [Mesh](/classes/3.1/Mesh) | 
## Members

### materialIndex : number


### verticesStart : number


### verticesCount : number


### indexStart : number


### indexCount : number


### linesIndexCount : number


### IsGlobal : boolean


## Methods

### static AddToMesh(materialIndex, verticesStart, verticesCount, indexStart, indexCount, mesh, renderingMesh, createBoundingBox) &rarr; [SubMesh](/classes/3.1/SubMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | materialIndex | number | 
 | verticesStart | number | 
 | verticesCount | number | 
 | indexStart | number | 
 | indexCount | number | 
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
optional | renderingMesh | [Mesh](/classes/3.1/Mesh) | 
### getBoundingInfo() &rarr; [BoundingInfo](/classes/3.1/BoundingInfo)

Returns the submesh BoudingInfo object.
### setBoundingInfo(boundingInfo) &rarr; [SubMesh](/classes/3.1/SubMesh)

Sets the submesh [BoundingInfo](/classes/3.1/BoundingInfo).

Return the [SubMesh](/classes/3.1/SubMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | boundingInfo | [BoundingInfo](/classes/3.1/BoundingInfo) | 

### getMesh() &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)

Returns the mesh of the current submesh.
### getRenderingMesh() &rarr; [Mesh](/classes/3.1/Mesh)

Returns the rendering mesh of the submesh.
### getMaterial() &rarr; Nullable&lt;[Material](/classes/3.1/Material)&gt;

Returns the submesh material.
### refreshBoundingInfo() &rarr; [SubMesh](/classes/3.1/SubMesh)

Sets a new updated [BoundingInfo](/classes/3.1/BoundingInfo) object to the submesh.

Returns the [SubMesh](/classes/3.1/SubMesh).
### updateBoundingInfo(world) &rarr; [SubMesh](/classes/3.1/SubMesh)

Updates the submesh [BoundingInfo](/classes/3.1/BoundingInfo).

Returns the Submesh.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/3.1/Matrix) | 

### isInFrustum(frustumPlanes) &rarr; boolean

True is the submesh bounding box intersects the frustum defined by the passed array of planes.

Boolean returned.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/3.1/Plane)[] | 

### isCompletelyInFrustum(frustumPlanes) &rarr; boolean

True is the submesh bounding box is completely inside the frustum defined by the passed array of planes.

Boolean returned.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/3.1/Plane)[] | 

### render(enableAlphaMode) &rarr; [SubMesh](/classes/3.1/SubMesh)

Renders the submesh.

Returns it.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | enableAlphaMode | boolean | 

### getLinesIndexBuffer(indices, engine) &rarr; WebGLBuffer

Returns a new Index [Buffer](/classes/3.1/Buffer).

Type returned : WebGLBuffer.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | indices | IndicesArray | 
 | engine | [Engine](/classes/3.1/Engine) | 
### canIntersects(ray) &rarr; boolean

True is the passed [Ray](/classes/3.1/Ray) intersects the submesh bounding box.

Boolean returned.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/3.1/Ray) | 

### intersects(ray, positions, indices, fastCheck) &rarr; Nullable&lt;[IntersectionInfo](/classes/3.1/IntersectionInfo)&gt;

Returns an object [IntersectionInfo](/classes/3.1/IntersectionInfo).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/3.1/Ray) | 
 | positions | [Vector3](/classes/3.1/Vector3)[] | 
 | indices | IndicesArray | 
### clone(newMesh, newRenderingMesh) &rarr; [SubMesh](/classes/3.1/SubMesh)

Creates a new Submesh from the passed [Mesh](/classes/3.1/Mesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | newMesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
optional | newRenderingMesh | [Mesh](/classes/3.1/Mesh) | 
### dispose() &rarr; void

Disposes the Submesh.

Returns nothing.
### static CreateFromIndices(materialIndex, startIndex, indexCount, mesh, renderingMesh) &rarr; [SubMesh](/classes/3.1/SubMesh)

Creates a new Submesh from the passed parameters :

- materialIndex (integer) : the index of the main mesh material.

- startIndex (integer) : the index where to start the copy in the mesh indices array.

- indexCount (integer) : the number of indices to copy then from the startIndex.

- mesh ([Mesh](/classes/3.1/Mesh)) : the main mesh to create the submesh from.

- renderingMesh (optional [Mesh](/classes/3.1/Mesh)) : rendering mesh.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | materialIndex | number | 
 | startIndex | number | 
 | indexCount | number | 
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
