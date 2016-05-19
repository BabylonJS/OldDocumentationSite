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

### isReadyundefined &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getShadowMapundefined &rarr; [RenderTargetTexture](/classes/2.4/RenderTargetTexture)


### getShadowMapForRenderingundefined &rarr; [RenderTargetTexture](/classes/2.4/RenderTargetTexture)


### getLightundefined &rarr; IShadowLight


### getTransformMatrixundefined &rarr; [Matrix](/classes/2.4/Matrix)


### getDarknessundefined &rarr; number


### setDarknessundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setTransparencyShadowundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### disposeundefined &rarr; void


### serializeundefined &rarr; any


### static Parseundefined &rarr; [ShadowGenerator](/classes/2.4/ShadowGenerator)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
