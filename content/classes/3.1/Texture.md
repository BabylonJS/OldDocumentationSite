---
ID_PAGE: 25221
PG_TITLE: Texture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
---
## Description

class [Texture](/classes/3.1/Texture) extends [BaseTexture](/classes/3.1/BaseTexture)



## Constructor

## new [Texture](/classes/3.1/Texture)(url, scene, noMipmap, invertY, samplingMode, onLoad, onError, buffer, deleteBuffer, format)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | Nullable&lt;string&gt; | 
 | scene | Nullable&lt;[Scene](/classes/3.1/Scene)&gt; | 
optional | noMipmap | boolean | 
optional | invertY | boolean | 
optional | samplingMode | number | 
optional | onLoad | Nullable&lt;() =&gt; void&gt; | 
optional | onError | Nullable&lt;(message: string, exception: any) =&gt; void&gt; | 
optional | buffer | any | 
optional | deleteBuffer | boolean | 
## Members

### static NEAREST_SAMPLINGMODE : number


### static NEAREST_NEAREST_MIPLINEAR : number


### static BILINEAR_SAMPLINGMODE : number


### static LINEAR_LINEAR_MIPNEAREST : number


### static TRILINEAR_SAMPLINGMODE : number


### static LINEAR_LINEAR_MIPLINEAR : number


### static NEAREST_NEAREST_MIPNEAREST : number


### static NEAREST_LINEAR_MIPNEAREST : number


### static NEAREST_LINEAR_MIPLINEAR : number


### static NEAREST_LINEAR : number


### static NEAREST_NEAREST : number


### static LINEAR_NEAREST_MIPNEAREST : number


### static LINEAR_NEAREST_MIPLINEAR : number


### static LINEAR_LINEAR : number


### static LINEAR_NEAREST : number


### static EXPLICIT_MODE : number


### static SPHERICAL_MODE : number


### static PLANAR_MODE : number


### static CUBIC_MODE : number


### static PROJECTION_MODE : number


### static SKYBOX_MODE : number


### static INVCUBIC_MODE : number


### static EQUIRECTANGULAR_MODE : number


### static FIXED_EQUIRECTANGULAR_MODE : number


### static FIXED_EQUIRECTANGULAR_MIRRORED_MODE : number


### static CLAMP_ADDRESSMODE : number


### static WRAP_ADDRESSMODE : number


### static MIRROR_ADDRESSMODE : number


### url : Nullable&lt;string&gt;


### uOffset : number


### vOffset : number


### uScale : number


### vScale : number


### uAng : number


### vAng : number


### wAng : number


### noMipmap : boolean


### isBlocking : boolean


### samplingMode : number


### onLoadObservable : [Observable](/classes/3.1/Observable)&lt;[Texture](/classes/3.1/Texture)&gt;


## Methods

### updateURL(url) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string | 

### delayLoad() &rarr; void


### updateSamplingMode(samplingMode) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | samplingMode | number | 

### getTextureMatrix() &rarr; [Matrix](/classes/3.1/Matrix)


### getReflectionTextureMatrix() &rarr; [Matrix](/classes/3.1/Matrix)


### clone() &rarr; [Texture](/classes/3.1/Texture)


### serialize() &rarr; any


### getClassName() &rarr; string


### dispose() &rarr; void


### static CreateFromBase64String(data, name, scene, noMipmap, invertY, samplingMode, onLoad, onError, format) &rarr; [Texture](/classes/3.1/Texture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | string | 
 | name | string | 
 | scene | [Scene](/classes/3.1/Scene) | 
optional | noMipmap | boolean | 
optional | invertY | boolean | 
optional | samplingMode | number | 
optional | onLoad | Nullable&lt;() =&gt; void&gt; | 
optional | onError | Nullable&lt;() =&gt; void&gt; | 
### static Parse(parsedTexture, scene, rootUrl) &rarr; Nullable&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedTexture | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | rootUrl | string | 
### static LoadFromDataString(name, buffer, scene, deleteBuffer, noMipmap, invertY, samplingMode, onLoad, onError, format) &rarr; [Texture](/classes/3.1/Texture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | buffer | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
optional | deleteBuffer | boolean | 
optional | noMipmap | boolean | 
optional | invertY | boolean | 
optional | samplingMode | number | 
optional | onLoad | Nullable&lt;() =&gt; void&gt; | 
optional | onError | Nullable&lt;(message: string, exception: any) =&gt; void&gt; | 
