---
ID_PAGE: 25210
PG_TITLE: ShadowGenerator
PG_VERSION: 2.1
---
## Description

class [ShadowGenerator](/classes/3.1/ShadowGenerator)



## Constructor

## new [ShadowGenerator](/classes/3.1/ShadowGenerator)(mapSize, light, useFullFloatFirst)

Creates a [ShadowGenerator](/classes/3.1/ShadowGenerator) object.

A [ShadowGenerator](/classes/3.1/ShadowGenerator) is the required tool to use the shadows.

Each light casting shadows needs to use its own [ShadowGenerator](/classes/3.1/ShadowGenerator).

Required parameters :

- `mapSize` (integer): the size of the texture what stores the shadows. Example : 1024.

- `light`: the light object generating the shadows.

- `useFullFloatFirst`: by default the generator will try to use half float textures but if you need precision (for self shadowing for instance), you can use this option to enforce full float texture.

Documentation : http://doc.babylonjs.com/tutorials/shadows

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mapSize | number | 
 | light | IShadowLight | 
optional | useFullFloatFirst | boolean | 
## Members

### static FILTER_NONE : number



### static FILTER_POISSONSAMPLING : number



### static FILTER_EXPONENTIALSHADOWMAP : number



### static FILTER_BLUREXPONENTIALSHADOWMAP : number



### static FILTER_CLOSEEXPONENTIALSHADOWMAP : number



### static FILTER_BLURCLOSEEXPONENTIALSHADOWMAP : number



### bias : number



### blurBoxOffset : number



### blurScale : number



### blurKernel : number



### useKernelBlur : boolean



### depthScale : number



### filter : number



### usePoissonSampling : boolean



### useVarianceShadowMap : boolean



### useBlurVarianceShadowMap : boolean



### useExponentialShadowMap : boolean



### useBlurExponentialShadowMap : boolean



### useCloseExponentialShadowMap : boolean



### useBlurCloseExponentialShadowMap : boolean



### frustumEdgeFalloff : number

Controls the extent to which the shadows fade out at the edge of the frustum

Used only by directionals and spots

### forceBackFacesOnly : boolean



## Methods

### getDarkness() &rarr; number

Returns the darkness value (float).
### setDarkness(darkness) &rarr; [ShadowGenerator](/classes/3.1/ShadowGenerator)

Sets the [ShadowGenerator](/classes/3.1/ShadowGenerator) darkness value (float <= 1.0).

Returns the [ShadowGenerator](/classes/3.1/ShadowGenerator).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | darkness | number | 

### setTransparencyShadow(hasShadow) &rarr; [ShadowGenerator](/classes/3.1/ShadowGenerator)

Sets the ability to have transparent shadow (boolean).

Returns the [ShadowGenerator](/classes/3.1/ShadowGenerator).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | hasShadow | boolean | 

### getShadowMap() &rarr; Nullable&lt;[RenderTargetTexture](/classes/3.1/RenderTargetTexture)&gt;

Returns a [RenderTargetTexture](/classes/3.1/RenderTargetTexture) object : the shadow map texture.
### getShadowMapForRendering() &rarr; Nullable&lt;[RenderTargetTexture](/classes/3.1/RenderTargetTexture)&gt;

Returns the most ready computed shadow map as a [RenderTargetTexture](/classes/3.1/RenderTargetTexture) object.
### addShadowCaster(mesh, includeDescendants) &rarr; [ShadowGenerator](/classes/3.1/ShadowGenerator)

Helper function to add a mesh and its descendants to the list of shadow casters

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) |  [Mesh](/classes/3.1/Mesh) to add
optional | includeDescendants | boolean |  boolean indicating if the descendants should be added. Default to true
### removeShadowCaster(mesh, includeDescendants) &rarr; [ShadowGenerator](/classes/3.1/ShadowGenerator)

Helper function to remove a mesh and its descendants from the list of shadow casters

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) |  [Mesh](/classes/3.1/Mesh) to remove
optional | includeDescendants | boolean |  boolean indicating if the descendants should be removed. Default to true
### getLight() &rarr; IShadowLight

Returns the associated light object.
### forceCompilation(onCompiled, options) &rarr; void

Force shader compilation including textures ready check

#### Parameters
 | Name | Type | Description
---|---|---|---
 | onCompiled | (generator: [ShadowGenerator](/classes/3.1/ShadowGenerator)) =&gt; void | 
optional | options | { useInstances: boolean } | 
### isReady(subMesh, useInstances) &rarr; boolean

Boolean : true when the [ShadowGenerator](/classes/3.1/ShadowGenerator) is finally computed.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | subMesh | [SubMesh](/classes/3.1/SubMesh) | 
 | useInstances | boolean | 
### prepareDefines(defines, lightIndex) &rarr; void

This creates the defines related to the standard BJS materials.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | defines | any | 
 | lightIndex | number | 
### bindShadowLight(lightIndex, effect) &rarr; void

This binds shadow lights related to the standard BJS materials.

It implies the unifroms available on the materials are the standard BJS ones.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | lightIndex | string | 
 | effect | [Effect](/classes/3.1/Effect) | 
### getTransformMatrix() &rarr; [Matrix](/classes/3.1/Matrix)

Returns a [Matrix](/classes/3.1/Matrix) object : the updated transformation matrix.
### recreateShadowMap() &rarr; void


### dispose() &rarr; void

Disposes the [ShadowGenerator](/classes/3.1/ShadowGenerator).

Returns nothing.
### serialize() &rarr; any

Serializes the [ShadowGenerator](/classes/3.1/ShadowGenerator) and returns a serializationObject.
### static Parse(parsedShadowGenerator, scene) &rarr; [ShadowGenerator](/classes/3.1/ShadowGenerator)

Parses a serialized [ShadowGenerator](/classes/3.1/ShadowGenerator) and returns a new [ShadowGenerator](/classes/3.1/ShadowGenerator).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedShadowGenerator | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
