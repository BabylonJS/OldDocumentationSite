---
TAGS:
---
## Description

class [EnvironmentHelper](/classes/3.1/EnvironmentHelper)

The Environment helper class can be used to add a fully featuread none expensive background to your scene.

It includes by default a skybox and a ground relying on the [BackgroundMaterial](/classes/3.1/BackgroundMaterial).

It also helps with the default setup of your imageProcessing configuration.

## Constructor

## new [EnvironmentHelper](/classes/3.1/EnvironmentHelper)(options, scene)

constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | Partial&lt;IEnvironmentHelperOptions&gt; | 
 | scene | undefined |  The scene to add the material to
## Members

### rootMesh : [Mesh](/classes/3.1/Mesh)

Gets the root mesh created by the helper.
### skybox : Nullable&lt;[Mesh](/classes/3.1/Mesh)&gt;

Gets the skybox created by the helper.
### skyboxTexture : Nullable&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt;

Gets the skybox texture created by the helper.
### skyboxMaterial : Nullable&lt;[BackgroundMaterial](/classes/3.1/BackgroundMaterial)&gt;

Gets the skybox material created by the helper.
### ground : Nullable&lt;[Mesh](/classes/3.1/Mesh)&gt;

Gets the ground mesh created by the helper.
### groundTexture : Nullable&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt;

Gets the ground texture created by the helper.
### groundMirror : Nullable&lt;[MirrorTexture](/classes/3.1/MirrorTexture)&gt;

Gets the ground mirror created by the helper.
### groundMirrorRenderList : Nullable&lt;[AbstractMesh](/classes/3.1/AbstractMesh)[]&gt;

Gets the ground mirror render list to helps pushing the meshes

you wish in the ground reflection.
### groundMaterial : Nullable&lt;[BackgroundMaterial](/classes/3.1/BackgroundMaterial)&gt;

Gets the ground material created by the helper.
## Methods

### updateOptions(options) &rarr; void

Updates the background according to the new options

#### Parameters
 | Name | Type | Description
---|---|---|---
 | options | Partial&lt;IEnvironmentHelperOptions&gt; | 

### setMainColor(color) &rarr; void

Sets the primary color of all the available elements.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | color | [Color3](/classes/3.1/Color3) | 

### dispose() &rarr; void

Dispose all the elements created by the Helper.
