---
ID_PAGE: 25210
PG_TITLE: ShadowGenerator
PG_VERSION: 2.1
---
## Description

class [ShadowGenerator](/classes/2.3/ShadowGenerator)



## Constructor

##  new [ShadowGenerator](/classes/2.3/ShadowGenerator)(mapSize, light)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mapSize | number |   The size of the shadow map
 | light | IShadowLight |   The light used for the shadow map's computation
## Members

### static  FILTER_NONE : number



### static  FILTER_VARIANCESHADOWMAP : number



### static  FILTER_POISSONSAMPLING : number



### static  FILTER_BLURVARIANCESHADOWMAP : number



### blurScale : number



### forceBackFacesOnly : boolean



### bias : number



### blurBoxOffset : number



### filter : number



### useVarianceShadowMap : boolean



### usePoissonSampling : boolean



### useBlurVarianceShadowMap : boolean



## Methods

### isReady(subMesh, useInstances) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | subMesh | [SubMesh](/classes/2.3/SubMesh) |   @param subMesh
 | useInstances | boolean |   @param useInstances
### getShadowMap() &rarr; [RenderTargetTexture](/classes/2.3/RenderTargetTexture)


### getShadowMapForRendering() &rarr; [RenderTargetTexture](/classes/2.3/RenderTargetTexture)


### getLight() &rarr; IShadowLight


### getTransformMatrix() &rarr; [Matrix](/classes/2.3/Matrix)


### getDarkness() &rarr; number


### setDarkness(darkness) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | darkness | number |   The given darkness

### setTransparencyShadow(hasShadow) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | hasShadow | boolean |   default : false. True to activate transparency shadow, else false

### dispose() &rarr; void


### serialize() &rarr; any


### static  Parse(parsedShadowGenerator, scene) &rarr; [ShadowGenerator](/classes/2.3/ShadowGenerator)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedShadowGenerator | any | 
 | scene | [Scene](/classes/2.3/Scene) | 
