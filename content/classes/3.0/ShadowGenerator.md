---
ID_PAGE: 25210
PG_TITLE: ShadowGenerator
PG_VERSION: 2.1
---
## Description

class [ShadowGenerator](/classes/3.0/ShadowGenerator)

Shadows are dynamic, they are dynamically generated depending upon a Directionallight.

A tutorial about shadows can be found here : https://doc.babylonjs.com/How_To/shadows

## Constructor

## new [ShadowGenerator](/classes/3.0/ShadowGenerator)(mapSize, light)

Creates a [ShadowGenerator](/classes/3.0/ShadowGenerator) object.

A [ShadowGenerator](/classes/3.0/ShadowGenerator) is the required tool to use the shadows.

Each light casting shadows needs to use its own [ShadowGenerator](/classes/3.0/ShadowGenerator).

Required parameters :

-  `mapSize` (integer), the size of the texture what stores the shadows. Example : 1024.

- `light` : the light object generating the shadows.

Documentation : http://doc.babylonjs.com/How_To/shadows

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mapSize | number |      The size of the shadow map
 | light | IShadowLight |      The light used for the shadow map's computation
## Members

### static FILTER_NONE : number

No filter will be used for this shadow

### static FILTER_POISSONSAMPLING : number

The poisson sampling filter will be used

### static FILTER_EXPONENTIALSHADOWMAP : number



### static FILTER_BLUREXPONENTIALSHADOWMAP : number



### blurScale : number



### forceBackFacesOnly : boolean



### bias : number



### blurBoxOffset : number



### depthScale : number



### filter : number

One of the following values : FILTER_NONE, FILTER_VARIANCESHADOWMAP, FILTER_POISSONSAMPLING

### useVarianceShadowMap : boolean

True by default, defines the realtime shadowing algorithm, using the light's point of view

### useExponentialShadowMap : boolean



### usePoissonSampling : boolean

Disables the useVarianceShadowMap and activates poisson sampling to soften shadows

### useBlurVarianceShadowMap : boolean



### useBlurExponentialShadowMap : boolean



## Methods

### recreateShadowMap() &rarr; void


### isReady(subMesh, useInstances) &rarr; boolean

Boolean : true when the [ShadowGenerator](/classes/3.0/ShadowGenerator) is finally computed.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | subMesh | [SubMesh](/classes/3.0/SubMesh) |      @param subMesh
 | useInstances | boolean |      @param useInstances
### getShadowMap() &rarr; [RenderTargetTexture](/classes/3.0/RenderTargetTexture)

Returns a [RenderTargetTexture](/classes/3.0/RenderTargetTexture) object : the shadow map texture.
### getShadowMapForRendering() &rarr; [RenderTargetTexture](/classes/3.0/RenderTargetTexture)

Returns the most ready computed shadow map as a [RenderTargetTexture](/classes/3.0/RenderTargetTexture) object.
### getLight() &rarr; IShadowLight

Returns the associated light object.
### getTransformMatrix() &rarr; [Matrix](/classes/3.0/Matrix)

Returns a [Matrix](/classes/3.0/Matrix) object : the updated transformation matrix.
### getDarkness() &rarr; number

Returns the darkness value (float).
### setDarkness(darkness) &rarr; [ShadowGenerator](/classes/3.0/ShadowGenerator)

Sets the [ShadowGenerator](/classes/3.0/ShadowGenerator) darkness value (float <= 1.0).

Returns the [ShadowGenerator](/classes/3.0/ShadowGenerator).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | darkness | number |      The given darkness

### setTransparencyShadow(hasShadow) &rarr; [ShadowGenerator](/classes/3.0/ShadowGenerator)

Sets the ability to have transparent shadow (boolean).

Returns the [ShadowGenerator](/classes/3.0/ShadowGenerator).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | hasShadow | boolean |      default : false. True to activate transparency shadow, else false

### dispose() &rarr; void

Disposes the [ShadowGenerator](/classes/3.0/ShadowGenerator).

Returns nothing.
### serialize() &rarr; any

Serializes the [ShadowGenerator](/classes/3.0/ShadowGenerator) and returns a serializationObject.
### static Parse(parsedShadowGenerator, scene) &rarr; [ShadowGenerator](/classes/3.0/ShadowGenerator)

Parses a serialized [ShadowGenerator](/classes/3.0/ShadowGenerator) and returns a new [ShadowGenerator](/classes/3.0/ShadowGenerator).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedShadowGenerator | any |    
 | scene | [Scene](/classes/3.0/Scene) |    
### prepareDefines(defines, lightIndex) &rarr; void

This creates the defines related to the standard BJS materials.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | defines | [MaterialDefines](/classes/3.0/MaterialDefines) | 
 | lightIndex | number | 
### bindShadowLight(lightIndex, effect, depthValuesAlreadySet) &rarr; boolean

This binds shadow lights related to the standard BJS materials.

It implies the unifroms available on the materials are the standard BJS ones.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | lightIndex | string | 
 | effect | [Effect](/classes/3.0/Effect) | 
 | depthValuesAlreadySet | boolean | 
