---
ID_PAGE: 25271
PG_TITLE: SubMesh
PG_VERSION: 2.1
TAGS:
    - Mesh
---
## Description

class [SubMesh](/classes/2.4/SubMesh)



## Constructor

## new [SubMesh](/classes/2.4/SubMesh)(materialIndex, verticesStart, verticesCount, indexStart, indexCount, mesh, renderingMesh, createBoundingBox)

[SubMesh](/classes/2.4/SubMesh) constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | materialIndex | number |    The index of the material to use (this index is used to find the correct material Inside the subMaterials collection of a multi-material)
 | verticesStart | number |    
 | verticesCount | number |    The count of vertices used
 | indexStart | any |    Index of the first indice to use
 | indexCount | number |    The indices count
 | mesh | [AbstractMesh](/classes/2.4/AbstractMesh) |    @param mesh
optional | renderingMesh | [Mesh](/classes/2.4/Mesh) |    If defined, is used instead of the mesh parameter.
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

### getBoundingInfoundefined &rarr; [BoundingInfo](/classes/2.4/BoundingInfo)


### getMeshundefined &rarr; [AbstractMesh](/classes/2.4/AbstractMesh)


### getRenderingMeshundefined &rarr; [Mesh](/classes/2.4/Mesh)


### getMaterialundefined &rarr; [Material](/classes/2.4/Material)


### refreshBoundingInfoundefined &rarr; void


### updateBoundingInfoundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### isInFrustumundefined &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### renderundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getLinesIndexBufferundefined &rarr; WebGLBuffer



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### canIntersectsundefined &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### intersectsundefined &rarr; [IntersectionInfo](/classes/2.4/IntersectionInfo)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### cloneundefined &rarr; [SubMesh](/classes/2.4/SubMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### disposeundefined &rarr; void


### static CreateFromIndicesundefined &rarr; [SubMesh](/classes/2.4/SubMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
