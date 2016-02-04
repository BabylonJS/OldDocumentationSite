---
ID_PAGE: 25221
PG_TITLE: Texture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
---
## Description

class [Texture](/classes/2.3/Texture) extends [BaseTexture](/classes/2.3/BaseTexture)



## Constructor

##  new [Texture](/classes/2.3/Texture)(url, scene, noMipmap, invertY, samplingMode, onLoad, onError, buffer, deleteBuffer)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string |   Link of the texture
 | scene | [Scene](/classes/2.3/Scene) |   
optional | noMipmap | boolean |   
optional | invertY | boolean |   
optional | samplingMode | number |   
optional | onLoad | () =&gt; void |   
optional | onError | () =&gt; void |   
optional | buffer | any |   
## Members

### static  NEAREST_SAMPLINGMODE : number



### static  BILINEAR_SAMPLINGMODE : number



### static  TRILINEAR_SAMPLINGMODE : number



### static  EXPLICIT_MODE : number



### static  SPHERICAL_MODE : number



### static  PLANAR_MODE : number



### static  CUBIC_MODE : number



### static  PROJECTION_MODE : number



### static  SKYBOX_MODE : number



### static  INVCUBIC_MODE : number



### static  EQUIRECTANGULAR_MODE : number



### static  FIXED_EQUIRECTANGULAR_MODE : number



### static  CLAMP_ADDRESSMODE : number



### static  WRAP_ADDRESSMODE : number



### static  MIRROR_ADDRESSMODE : number



### url : string



### uOffset : number



### vOffset : number



### uScale : number



### vScale : number



### uAng : number



### vAng : number



### wAng : number



## Methods

### delayLoad() &rarr; void


### updateSamplingMode(samplingMode) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | samplingMode | number |   

### getTextureMatrix() &rarr; [Matrix](/classes/2.3/Matrix)


### getReflectionTextureMatrix() &rarr; [Matrix](/classes/2.3/Matrix)


### clone() &rarr; [Texture](/classes/2.3/Texture)


### serialize() &rarr; any


### static  CreateFromBase64String(data, name, scene, noMipmap, invertY, samplingMode, onLoad, onError) &rarr; [Texture](/classes/2.3/Texture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | string |   
 | name | string |   
 | scene | [Scene](/classes/2.3/Scene) |   
optional | noMipmap | boolean |   
optional | invertY | boolean |   
optional | samplingMode | number |   
optional | onLoad | () =&gt; void |   
### static  Parse(parsedTexture, scene, rootUrl) &rarr; [BaseTexture](/classes/2.3/BaseTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedTexture | any | 
 | scene | [Scene](/classes/2.3/Scene) |   
 | rootUrl | string | 
