---
ID_PAGE: 25210
PG_TITLE: ShadowGenerator
PG_VERSION: 2.1
---
## Description

class [ShadowGenerator](/classes/2.4/ShadowGenerator)

Shadows are dynamic, they are dynamically generated depending upon a Directionallight.

A tutorial about shadows can be found here

## Constructor

## new [ShadowGenerator](/classes/2.4/ShadowGenerator)(mapSize, light)

Creates a new [ShadowGenerator](/classes/2.4/ShadowGenerator) object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mapSize | number |    The size of the shadow map
 | light | IShadowLight |    The light used for the shadow map's computation
## Members

### static FILTER_NONE : number

No filter will be used for this shadow

### static FILTER_VARIANCESHADOWMAP : number

The variance shadowmap will be used for this shadow

### static FILTER_POISSONSAMPLING : number

The poisson sampling filter will be used

### static FILTER_BLURVARIANCESHADOWMAP : number



### blurScale : number



### forceBackFacesOnly : boolean



### bias : number



### blurBoxOffset : number



### filter : number

One of the following values : FILTER_NONE, FILTER_VARIANCESHADOWMAP, FILTER_POISSONSAMPLING

### useVarianceShadowMap : boolean

True by default, defines the realtime shadowing algorithm, using the light's point of view

### usePoissonSampling : boolean

Disables the useVarianceShadowMap and activates poisson sampling to soften shadows

### useBlurVarianceShadowMap : boolean



## Methods

### isReady(subMesh, useInstances) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | subMesh | [SubMesh](/classes/2.4/SubMesh) |    @param subMesh
 | useInstances | boolean |    @param useInstances
### getShadowMap() &rarr; [RenderTargetTexture](/classes/2.4/RenderTargetTexture)

Defines which shadow will be rendered
### getShadowMapForRendering() &rarr; [RenderTargetTexture](/classes/2.4/RenderTargetTexture)


### getLight() &rarr; IShadowLight

Returns the [DirectionalLight](/classes/2.4/DirectionalLight) of this [ShadowGenerator](/classes/2.4/ShadowGenerator)
### getTransformMatrix() &rarr; [Matrix](/classes/2.4/Matrix)

Returns the transform matrix of this [ShadowGenerator](/classes/2.4/ShadowGenerator)
### getDarkness() &rarr; number

Returns the darkness
### setDarkness(darkness) &rarr; void

Sets the darkness with the given float between 0.0 to 1.0

#### Parameters
 | Name | Type | Description
---|---|---|---
 | darkness | number |    The given darkness

### setTransparencyShadow(hasShadow) &rarr; void

Defines if the light goes through the object's holes and non opaque surfaces

#### Parameters
 | Name | Type | Description
---|---|---|---
 | hasShadow | boolean |    default : false. True to activate transparency shadow, else false

### dispose() &rarr; void


### serialize() &rarr; any


### static Parse(parsedShadowGenerator, scene) &rarr; [ShadowGenerator](/classes/2.4/ShadowGenerator)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedShadowGenerator | any |  
 | scene | [Scene](/classes/2.4/Scene) |  
