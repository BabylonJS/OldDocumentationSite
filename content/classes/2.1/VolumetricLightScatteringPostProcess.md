---
ID_PAGE: 25291
PG_TITLE: VolumetricLightScatteringPostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---
##new [VolumetricLightScatteringPostProcess](/classes/VolumetricLightScatteringPostProcess)(name, ratio, camera, mesh, samples, samplingMode, engine, reusable)

@constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | ratio | any | 
 | camera | [Camera](/classes/Camera) | 
optional | mesh | [Mesh](/classes/Mesh) | 
optional | samples | number | 
optional | samplingMode | number | 
optional | engine | [Engine](/classes/Engine) | 
optional | reusable | boolean | 
---

##Extends
 [PostProcess](/classes/PostProcess)
##Members

###useCustomMeshPosition : boolean


Set if the post-process should use a custom position for the light source (true) or the internal mesh position (false)

@type {boolean}

###invert : boolean


If the post-process should inverse the light scattering direction

@type {boolean}

###mesh : [Mesh](/classes/Mesh)


The internal mesh used by the post-process

@type {boolean}

###useDiffuseColor : boolean


Set to true to use the diffuseColor instead of the diffuseTexture

@type {boolean}

###excludedMeshes : [AbstractMesh](/classes/AbstractMesh)[]


Array containing the excluded meshes not rendered in the internal pass

###exposure : number


Controls the overall intensity of the post-process


###decay : number


Dissipates each sample's contribution in range [0, 1]


###weight : number


Controls the overall intensity of each sample


###density : number

Controls the density of each sample





##Methods

###isReady(subMesh, useInstances) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
 | subMesh | [SubMesh](/classes/SubMesh) | 
 | useInstances | boolean | 
---

###setCustomMeshPosition(position) &rarr; void
Sets the new light position for light scattering effect

####Parameters
 | Name | Type | Description
---|---|---|---
 | position | [Vector3](/classes/Vector3) | 
---

###getCustomMeshPosition() &rarr; [Vector3](/classes/Vector3)
Returns the light position for light scattering effect
@return {BABYLON.Vector3} The custom light position


###dispose(camera) &rarr; void
Disposes the internal assets and detaches the post-process from the camera

####Parameters
 | Name | Type | Description
---|---|---|---
 | camera | [Camera](/classes/Camera) | 
---

###getPass() &rarr; [RenderTargetTexture](/classes/RenderTargetTexture)
Returns the render target texture used by the post-process
@return {BABYLON.RenderTargetTexture} The render target texture used by the post-process


###static CreateDefaultMesh(name, scene) &rarr; [Mesh](/classes/Mesh)
Creates a default mesh for the Volumeric [Light](/classes/Light) Scattering post-process
@return {BABYLON.Mesh} the default mesh

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/Scene) | 
---
