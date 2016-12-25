---
ID_PAGE: 25271
PG_TITLE: SubMesh
PG_VERSION: 2.1
TAGS:
    - Mesh
---
## Description

class [SubMesh](/classes/2.5/SubMesh)



## Constructor

## new [SubMesh](/classes/2.5/SubMesh)(materialIndex, verticesStart, verticesCount, indexStart, indexCount, mesh, renderingMesh, createBoundingBox)

[SubMesh](/classes/2.5/SubMesh) constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | materialIndex | number |     The index of the material to use (this index is used to find the correct material Inside the subMaterials collection of a multi-material)
 | verticesStart | number |     
 | verticesCount | number |     The count of vertices used
 | indexStart | any |     Index of the first indice to use
 | indexCount | number |     The indices count
 | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) |     @param mesh
optional | renderingMesh | [Mesh](/classes/2.5/Mesh) |     If defined, is used instead of the mesh parameter.
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

### IsGlobal : boolean



## Methods

### getBoundingInfo() &rarr; [BoundingInfo](/classes/2.5/BoundingInfo)

Get bounding info
### getMesh() &rarr; [AbstractMesh](/classes/2.5/AbstractMesh)

Get mesh
### getRenderingMesh() &rarr; [Mesh](/classes/2.5/Mesh)

Get rendering mesh
### getMaterial() &rarr; [Material](/classes/2.5/Material)

Get material
### refreshBoundingInfo() &rarr; void

Refresh bounding info
### updateBoundingInfo(world) &rarr; void

Update bounding info

#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.5/Matrix) |     @param world

### isInFrustum(frustumPlanes) &rarr; boolean

Return true if it is frustum

#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.5/Plane)[] |     @param frustumPlanes

### isCompletelyInFrustum(frustumPlanes) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | frustumPlanes | [Plane](/classes/2.5/Plane)[] |     @param frustumPlanes

### render(enableAlphaMode) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | enableAlphaMode | boolean |    

### getLinesIndexBuffer(indices, engine) &rarr; WebGLBuffer

Get lines index buffer

#### Parameters
 | Name | Type | Description
---|---|---|---
 | indices | number[] |     @param indices
 | engine | [Engine](/classes/2.5/Engine) |     @param engine
### canIntersects(ray) &rarr; boolean

Can Intersects

#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/2.5/Ray) |     The ray

### intersects(ray, positions, indices, fastCheck) &rarr; [IntersectionInfo](/classes/2.5/IntersectionInfo)

Intersects

#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/2.5/Ray) |     The ray
 | positions | [Vector3](/classes/2.5/Vector3)[] |     @param positions
 | indices | number[] |     @param indices
### clone(newMesh, newRenderingMesh) &rarr; [SubMesh](/classes/2.5/SubMesh)

Create a clone of the subMesh

#### Parameters
 | Name | Type | Description
---|---|---|---
 | newMesh | [AbstractMesh](/classes/2.5/AbstractMesh) |     @param newMesh
optional | newRenderingMesh | [Mesh](/classes/2.5/Mesh) |     @param newRenderingMesh
### dispose() &rarr; void

Dispose
### static CreateFromIndices(materialIndex, startIndex, indexCount, mesh, renderingMesh) &rarr; [SubMesh](/classes/2.5/SubMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | materialIndex | number |     The index of the material to use (this index is used to find the correct material Inside the subMaterials collection of a multi-material)
 | startIndex | number |     Index of the first indice to use
 | indexCount | number |     The indices count
 | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) |     @param mesh
