---
ID_PAGE: 25307
PG_TITLE: MeshAssetTask
PG_VERSION: 2.1
TAGS:
    - Mesh
    - Assets
---
## Description

class [MeshAssetTask](/classes/3.1/MeshAssetTask) extends [AbstractAssetTask](/classes/3.1/AbstractAssetTask)



## Constructor

## new [MeshAssetTask](/classes/3.1/MeshAssetTask)(name, meshesNames, rootUrl, sceneFilename)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | meshesNames | any | 
 | rootUrl | string | 
## Members

### name : string



### meshesNames : any



### rootUrl : string



### sceneFilename : string



### loadedMeshes : Array&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;



### loadedParticleSystems : Array&lt;[ParticleSystem](/classes/3.1/ParticleSystem)&gt;



### loadedSkeletons : Array&lt;[Skeleton](/classes/3.1/Skeleton)&gt;



## Methods

### runTask(scene, onSuccess, onError) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.1/Scene) | 
 | onSuccess | () =&gt; void | 
 | onError | (message: string, exception: any) =&gt; void | 
