---
ID_PAGE: 25291
PG_TITLE: VolumetricLightScatteringPostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
## Description

class [VolumetricLightScatteringPostProcess](/classes/2.5/VolumetricLightScatteringPostProcess) extends [PostProcess](/classes/2.5/PostProcess)



## Constructor

## new [VolumetricLightScatteringPostProcess](/classes/2.5/VolumetricLightScatteringPostProcess)(name, ratio, camera, mesh, samples, samplingMode, engine, reusable, scene)

@constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     
 | ratio | any |     
 | camera | [Camera](/classes/2.5/Camera) |     
optional | mesh | [Mesh](/classes/2.5/Mesh) |     
optional | samples | number |     
optional | samplingMode | number |     
optional | engine | [Engine](/classes/2.5/Engine) |     
optional | reusable | boolean |     
## Members

### attachedNode : { position: [Vector3](/classes/2.5/Vector3) }

If not undefined, the mesh position is computed from the attached node position

@type {{position: [Vector3](/classes/2.5/Vector3)}}

### customMeshPosition : [Vector3](/classes/2.5/Vector3)

Custom position of the mesh. Used if "useCustomMeshPosition" is set to "true"

@type {[Vector3](/classes/2.5/Vector3)}

### useCustomMeshPosition : boolean

Set if the post-process should use a custom position for the light source (true) or the internal mesh position (false)

@type {boolean}

### invert : boolean

If the post-process should inverse the light scattering direction

@type {boolean}

### mesh : [Mesh](/classes/2.5/Mesh)

The internal mesh used by the post-process

@type {boolean}

### useDiffuseColor : boolean

Set to true to use the diffuseColor instead of the diffuseTexture

@type {boolean}

### excludedMeshes : [AbstractMesh](/classes/2.5/AbstractMesh)[]

Array containing the excluded meshes not rendered in the internal pass

### exposure : number

Controls the overall intensity of the post-process

@type {number}

### decay : number

Dissipates each sample's contribution in range [0, 1]

@type {number}

### weight : number

Controls the overall intensity of each sample

@type {number}

### density : number

Controls the density of each sample

@type {number}

## Methods

### isReady(subMesh, useInstances) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | subMesh | [SubMesh](/classes/2.5/SubMesh) |     
 | useInstances | boolean |     
### setCustomMeshPosition(position) &rarr; void

Sets the new light position for light scattering effect

#### Parameters
 | Name | Type | Description
---|---|---|---
 | position | [Vector3](/classes/2.5/Vector3) |     

### getCustomMeshPosition() &rarr; [Vector3](/classes/2.5/Vector3)

Returns the light position for light scattering effect

@return {BABYLON.[Vector3](/classes/2.5/Vector3)} The custom light position
### dispose(camera) &rarr; void

Disposes the internal assets and detaches the post-process from the camera

#### Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/2.5/Camera) |     

### getPass() &rarr; [RenderTargetTexture](/classes/2.5/RenderTargetTexture)

Returns the render target texture used by the post-process

@return {BABYLON.[RenderTargetTexture](/classes/2.5/RenderTargetTexture)} The render target texture used by the post-process
### static CreateDefaultMesh(name, scene) &rarr; [Mesh](/classes/2.5/Mesh)

Creates a default mesh for the Volumeric [Light](/classes/2.5/Light) Scattering post-process

@return {BABYLON.[Mesh](/classes/2.5/Mesh)} the default mesh

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     
 | scene | [Scene](/classes/2.5/Scene) |     
