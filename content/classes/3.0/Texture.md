---
ID_PAGE: 25221
PG_TITLE: Texture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
---
## Description

class [Texture](/classes/3.0/Texture) extends [BaseTexture](/classes/3.0/BaseTexture)



## Constructor

## new [Texture](/classes/3.0/Texture)(url, scene, noMipmap, invertY, samplingMode, onLoad, onError, buffer, deleteBuffer, format)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string |      Link of the texture
 | scene | [Scene](/classes/3.0/Scene) |      
optional | noMipmap | boolean |      
optional | invertY | boolean |      
optional | samplingMode | number |      
optional | onLoad | () =&gt; void |      
optional | onError | () =&gt; void |      
optional | buffer | any |      
optional | deleteBuffer | boolean |  
## Members

### static NEAREST_SAMPLINGMODE : number

Value : 1

### static BILINEAR_SAMPLINGMODE : number

Value : 2

### static TRILINEAR_SAMPLINGMODE : number

Value : 3

### static EXPLICIT_MODE : number

Value : 0

### static SPHERICAL_MODE : number

Value : 1

### static PLANAR_MODE : number

Value : 2

### static CUBIC_MODE : number

Value : 3

### static PROJECTION_MODE : number

Value : 4

### static SKYBOX_MODE : number

Value : 5

### static INVCUBIC_MODE : number



### static EQUIRECTANGULAR_MODE : number



### static FIXED_EQUIRECTANGULAR_MODE : number



### static FIXED_EQUIRECTANGULAR_MIRRORED_MODE : number



### static CLAMP_ADDRESSMODE : number

Value : 0

### static WRAP_ADDRESSMODE : number

Value : 1

### static MIRROR_ADDRESSMODE : number

Value 2

### url : string

URL of the texture

### uOffset : number

U offset of the texture

### vOffset : number

V offset of the texture

### uScale : number

U scale of the texture

### vScale : number

V scale of the texutre

### uAng : number

U angle of the texture

### vAng : number

V angle of the texture

### wAng : number

W angle of the texture

### noMipmap : boolean



### isBlocking : boolean



### onLoadObservable : [Observable](/classes/3.0/Observable)&lt;boolean&gt;



## Methods

### delayLoad() &rarr; void

Proxy method to delay the texture loading
### updateSamplingMode(samplingMode) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | samplingMode | number |      

### getTextureMatrix() &rarr; [Matrix](/classes/3.0/Matrix)

Get the texture matrix
@return [Matrix](/classes/3.0/Matrix) The texture matrix
### getReflectionTextureMatrix() &rarr; [Matrix](/classes/3.0/Matrix)

Get the reflection texture matrix
@return [Matrix](/classes/3.0/Matrix) The reflection texture matrix
### clone() &rarr; [Texture](/classes/3.0/Texture)


### static CreateFromBase64String(data, name, scene, noMipmap, invertY, samplingMode, onLoad, onError, format) &rarr; [Texture](/classes/3.0/Texture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | string |      
 | name | string |      
 | scene | [Scene](/classes/3.0/Scene) |      
optional | noMipmap | boolean |      
optional | invertY | boolean |      
optional | samplingMode | number |      
optional | onLoad | () =&gt; void |      
optional | onError | () =&gt; void |      
### static Parse(parsedTexture, scene, rootUrl) &rarr; [BaseTexture](/classes/3.0/BaseTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedTexture | any |    
 | scene | [Scene](/classes/3.0/Scene) |      
 | rootUrl | string |    
### static LoadFromDataString(name, buffer, scene, deleteBuffer, noMipmap, invertY, samplingMode, onLoad, onError, format) &rarr; [Texture](/classes/3.0/Texture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      
 | buffer | any |      
 | scene | [Scene](/classes/3.0/Scene) |      
optional | deleteBuffer | boolean |  
optional | noMipmap | boolean |      
optional | invertY | boolean |      
optional | samplingMode | number |      
optional | onLoad | () =&gt; void |      
optional | onError | () =&gt; void |      
