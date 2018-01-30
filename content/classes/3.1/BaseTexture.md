---
ID_PAGE: 25219
PG_TITLE: BaseTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
---
## Description

class [BaseTexture](/classes/3.1/BaseTexture)



## Constructor

## new [BaseTexture](/classes/3.1/BaseTexture)(scene)



#### Parameters

| | Name | Type | Description |
|---|---|---|---|
| | scene | Nullable&lt;[Scene](/classes/3.1/Scene)&gt; | |

## Members

### static DEFAULT_ANISOTROPIC_FILTERING_LEVEL : number


### name : string


### hasAlpha : boolean


### getAlphaFromRGB : boolean


### level : number


### coordinatesIndex : number

Assign an UV channel.


### coordinatesMode : number

How a texture is mapped.

| Value | Type                                | Description |
| ----- | ----------------------------------- | ----------- |
| 0     | EXPLICIT_MODE                       |             |
| 1     | SPHERICAL_MODE                      |             |
| 2     | PLANAR_MODE                         |             |
| 3     | CUBIC_MODE                          |             |
| 4     | PROJECTION_MODE                     |             |
| 5     | SKYBOX_MODE                         |             |
| 6     | INVCUBIC_MODE                       |             |
| 7     | EQUIRECTANGULAR_MODE                |             |
| 8     | FIXED_EQUIRECTANGULAR_MODE          |             |
| 9     | FIXED_EQUIRECTANGULAR_MIRRORED_MODE |             |


### wrapU : number

Default is 1.

| Value | Type               | Description |
| ----- | ------------------ | ----------- |
| 0     | CLAMP_ADDRESSMODE  |             |
| 1     | WRAP_ADDRESSMODE   |             |
| 2     | MIRROR_ADDRESSMODE |             |

### wrapV : number

Default is 1.

### wrapR : number

Default is 1.

### anisotropicFilteringLevel : number


### isCube : boolean


### is3D : boolean


### gammaSpace : boolean

True by default.

### invertZ : boolean


### lodLevelInAlpha : boolean


### lodGenerationOffset : number


### lodGenerationScale : number


### isRenderTarget : boolean


### uid : string


### animations : [Animation](/classes/3.1/Animation)[]


### onDisposeObservable : [Observable](/classes/3.1/Observable)&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt;

An event triggered when the texture is disposed.

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onDispose : () =&gt; void


### delayLoadState : number


### isBlocking : boolean


### canRescale : boolean


### textureType : number


### textureFormat : number


### sphericalPolynomial : Nullable&lt;[SphericalPolynomial](/classes/3.1/SphericalPolynomial)&gt;


## Methods

### toString() &rarr; string


### getClassName() &rarr; string


### getScene() &rarr; Nullable&lt;[Scene](/classes/3.1/Scene)&gt;


### getTextureMatrix() &rarr; [Matrix](/classes/3.1/Matrix)


### getReflectionTextureMatrix() &rarr; [Matrix](/classes/3.1/Matrix)


### getInternalTexture() &rarr; Nullable&lt;[InternalTexture](/classes/3.1/InternalTexture)&gt;


### isReadyOrNotBlocking() &rarr; boolean


### isReady() &rarr; boolean


### getSize() &rarr; ISize


### getBaseSize() &rarr; ISize


### scale(ratio) &rarr; void



#### Parameters
| | Name | Type | Description |
|---|---|---|---|
| | ratio | number | |

### delayLoad() &rarr; void


### clone() &rarr; Nullable&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt;


### readPixels(faceIndex) &rarr; Nullable&lt;ArrayBufferView&gt;



#### Parameters
| | Name | Type | Description |
|---|---|---|---|
| optional | faceIndex | number | |

### releaseInternalTexture() &rarr; void


### dispose() &rarr; void


### serialize() &rarr; any


### static WhenAllReady(textures, callback) &rarr; void



#### Parameters
| | Name | Type | Description |
|---|---|---|---|
| | textures | [BaseTexture](/classes/3.1/BaseTexture)[] | |
| | callback |  | |
