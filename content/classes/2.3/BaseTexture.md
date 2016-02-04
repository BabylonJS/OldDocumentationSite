---
ID_PAGE: 25219
PG_TITLE: BaseTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
---
## Description

class [BaseTexture](/classes/2.3/BaseTexture)



## Constructor

##  new [BaseTexture](/classes/2.3/BaseTexture)(scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.3/Scene) |   The scene which will contains the new base texture

## Members

### name : string



### delayLoadState : number



### hasAlpha : boolean



### getAlphaFromRGB : boolean



### level : number



### isCube : boolean



### isRenderTarget : boolean



### animations : [Animation](/classes/2.3/Animation)[]



### onDispose : () =&gt; void



### coordinatesIndex : number



### coordinatesMode : number



### wrapU : number



### wrapV : number



### anisotropicFilteringLevel : number



### canRescale : boolean



## Methods

### getScene() &rarr; [Scene](/classes/2.3/Scene)


### getTextureMatrix() &rarr; [Matrix](/classes/2.3/Matrix)


### getReflectionTextureMatrix() &rarr; [Matrix](/classes/2.3/Matrix)


### getInternalTexture() &rarr; WebGLTexture


### isReady() &rarr; boolean


### getSize() &rarr; ISize


### getBaseSize() &rarr; ISize


### scale(ratio) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ratio | number |   

### delayLoad() &rarr; void


### clone() &rarr; [BaseTexture](/classes/2.3/BaseTexture)


### releaseInternalTexture() &rarr; void


### dispose() &rarr; void


### serialize() &rarr; any


