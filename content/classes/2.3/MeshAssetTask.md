---
ID_PAGE: 25307
PG_TITLE: MeshAssetTask
PG_VERSION: 2.1
TAGS:
    - Mesh
    - Assets
---
## Description

class [MeshAssetTask](/classes/2.3/MeshAssetTask)



## Constructor

##  new [MeshAssetTask](/classes/2.3/MeshAssetTask)(name, meshesNames, rootUrl, sceneFilename)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The name
 | meshesNames | any |   The meshes names
 | rootUrl | string |   The root url for this mesh
## Members

### name : string



### meshesNames : any



### rootUrl : string



### sceneFilename : string



### loadedMeshes : Array&lt;[AbstractMesh](/classes/2.3/AbstractMesh)&gt;



### loadedParticleSystems : Array&lt;[ParticleSystem](/classes/2.3/ParticleSystem)&gt;



### loadedSkeletons : Array&lt;[Skeleton](/classes/2.3/Skeleton)&gt;



### onSuccess : (task: IAssetTask) =&gt; void



### onError : (task: IAssetTask) =&gt; void



### isCompleted : boolean



## Methods

### run(scene, onSuccess, onError) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.3/Scene) |   The scene where mesh is.
 | onSuccess | () =&gt; void |   Function call when the mesh is load successfully
 | onError | () =&gt; void |   Function call when the mesh isn't load successfully
