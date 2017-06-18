---
ID_PAGE: 25271
PG_TITLE: SubMesh
PG_VERSION: 2.1
TAGS:
    - Mesh
---
## Description

class [SubMesh](/classes/3.0/SubMesh)



## Constructor

## new [SubMesh](/classes/3.0/SubMesh)(materialIndex, verticesStart, verticesCount, indexStart, indexCount, mesh, renderingMesh, createBoundingBox)

[SubMesh](/classes/3.0/SubMesh) constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | materialIndex | number |      The index of the material to use (this index is used to find the correct material Inside the subMaterials collection of a multi-material)
 | verticesStart | number |      
 | verticesCount | number |      The count of vertices used
 | indexStart | any |      Index of the first indice to use
 | indexCount | number |      The indices count
 | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) |      @param mesh
optional | renderingMesh | [Mesh](/classes/3.0/Mesh) |      If defined, is used instead of the mesh parameter.
## Members

### materialIndex : number

The material Index

### verticesStart : number

The vertice sStart

### verticesCount : number

The vertices Count

### indexStart : any

The index Start

### indexCount : number

The index Count

### linesIndexCount : number

The lines Index Count

### effect : [Effect](/classes/3.0/Effect)



### IsGlobal : boolean



## Methods

### setEffect(effect, defines) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.0/Effect) | 
optional | defines | [MaterialDefines](/classes/3.0/MaterialDefines) | 
### getBoundingInfo() &rarr; [BoundingInfo](/classes/3.0/BoundingInfo)

Returns the submesh BoudingInfo object.
### setBoundingInfo(boundingInfo) &rarr; [SubMesh](/classes/3.0/SubMesh)

Sets the submesh [BoundingInfo](/classes/3.0/BoundingInfo).

Return the [SubMesh](/classes/3.0/SubMesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | boundingInfo | [BoundingInfo](/classes/3.0/BoundingInfo) | 

### getMesh() &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)

Returns the mesh of the current submesh.
### getRenderingMesh() &rarr; [Mesh](/classes/3.0/Mesh)

Returns the rendering mesh of the submesh.
### getMaterial() &rarr; [Material](/classes/3.0/Material)

Returns the submesh material.
### refreshBoundingInfo() &rarr; [SubMesh](/classes/3.0/SubMesh)

Sets a new updated [BoundingInfo](/classes/3.0/BoundingInfo) object to the submesh.

Returns the [SubMesh](/classes/3.0/SubMesh).
### updateBoundingInfo(world) &rarr; [SubMesh](/classes/3.0/SubMesh)

Updates the submesh [BoundingInfo](/classes/3.0/BoundingInfo).

Returns the Submesh.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/3.0/Matrix) |      @param world

### isInFrustum(frustumPlanes) &rarr; boolean

True is the submesh bounding box intersects the frustum defined by the passed array of planes.

Boolean returned.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/3.0/Plane)[] |      @param frustumPlanes

### isCompletelyInFrustum(frustumPlanes) &rarr; boolean

True is the submesh bounding box is completely inside the frustum defined by the passed array of planes.

Boolean returned.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/3.0/Plane)[] |      @param frustumPlanes

### render(enableAlphaMode) &rarr; [SubMesh](/classes/3.0/SubMesh)

Renders the submesh.

Returns it.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | enableAlphaMode | boolean |     

### getLinesIndexBuffer(indices, engine) &rarr; WebGLBuffer

Returns a new Index [Buffer](/classes/3.0/Buffer).

Type returned : WebGLBuffer.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | indices | IndicesArray |      @param indices
 | engine | [Engine](/classes/3.0/Engine) |      @param engine
### canIntersects(ray) &rarr; boolean

True is the passed [Ray](/classes/3.0/Ray) intersects the submesh bounding box.

Boolean returned.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/3.0/Ray) |      The ray

### intersects(ray, positions, indices, fastCheck) &rarr; [IntersectionInfo](/classes/3.0/IntersectionInfo)

Returns an object [IntersectionInfo](/classes/3.0/IntersectionInfo).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/3.0/Ray) |      The ray
 | positions | [Vector3](/classes/3.0/Vector3)[] |      @param positions
 | indices | IndicesArray |      @param indices
### clone(newMesh, newRenderingMesh) &rarr; [SubMesh](/classes/3.0/SubMesh)

Creates a new Submesh from the passed [Mesh](/classes/3.0/Mesh).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | newMesh | [AbstractMesh](/classes/3.0/AbstractMesh) |      @param newMesh
optional | newRenderingMesh | [Mesh](/classes/3.0/Mesh) |      @param newRenderingMesh
### dispose() &rarr; void

Disposes the Submesh.

Returns nothing.
### static CreateFromIndices(materialIndex, startIndex, indexCount, mesh, renderingMesh) &rarr; [SubMesh](/classes/3.0/SubMesh)

Creates a new Submesh from the passed parameters :

- materialIndex (integer) : the index of the main mesh material.

- startIndex (integer) : the index where to start the copy in the mesh indices array.

- indexCount (integer) : the number of indices to copy then from the startIndex.

- mesh ([Mesh](/classes/3.0/Mesh)) : the main mesh to create the submesh from.

- renderingMesh (optional [Mesh](/classes/3.0/Mesh)) : rendering mesh.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | materialIndex | number |      The index of the material to use (this index is used to find the correct material Inside the subMaterials collection of a multi-material)
 | startIndex | number |      Index of the first indice to use
 | indexCount | number |      The indices count
 | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) |      @param mesh
