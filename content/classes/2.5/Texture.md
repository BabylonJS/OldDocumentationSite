---
ID_PAGE: 25221
PG_TITLE: Texture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
---
## Description

class [Texture](/classes/2.5/Texture) extends [BaseTexture](/classes/2.5/BaseTexture)



## Constructor

## new [Texture](/classes/2.5/Texture)(url, scene, noMipmap, invertY, samplingMode, onLoad, onError, buffer, deleteBuffer)

Create a new [Texture](/classes/2.5/Texture).
You can apply a texture on every material, by giving an image path.
Don't forgot to check the right path of your image (relative or absolute path). About image format support, it can be JPG, PNG, JPEG, BMP, (every image format available on your browser)
A tutorial about materials and texture can be found here : http://doc.babylonjs.com/tutorials/Materials

#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string |     Link of the texture
 | scene | [Scene](/classes/2.5/Scene) |     
optional | noMipmap | boolean |     
optional | invertY | boolean |     
optional | samplingMode | number |     
optional | onLoad | () =&gt; void |     
optional | onError | () =&gt; void |     
optional | buffer | any |     
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



### onLoadObservable : [Observable](/classes/2.5/Observable)&lt;boolean&gt;



## Methods

### delayLoad() &rarr; void

Proxy method to delay the texture loading
### updateSamplingMode(samplingMode) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | samplingMode | number |     

### getTextureMatrix() &rarr; [Matrix](/classes/2.5/Matrix)

Get the texture matrix
@return [Matrix](/classes/2.5/Matrix) The texture matrix
### getReflectionTextureMatrix() &rarr; [Matrix](/classes/2.5/Matrix)

Get the reflection texture matrix
@return [Matrix](/classes/2.5/Matrix) The reflection texture matrix
### clone() &rarr; [Texture](/classes/2.5/Texture)


### static CreateFromBase64String(data, name, scene, noMipmap, invertY, samplingMode, onLoad, onError) &rarr; [Texture](/classes/2.5/Texture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | data | string |     
 | name | string |     
 | scene | [Scene](/classes/2.5/Scene) |     
optional | noMipmap | boolean |     
optional | invertY | boolean |     
optional | samplingMode | number |     
optional | onLoad | () =&gt; void |     
### static Parse(parsedTexture, scene, rootUrl) &rarr; [BaseTexture](/classes/2.5/BaseTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedTexture | any |   
 | scene | [Scene](/classes/2.5/Scene) |     
 | rootUrl | string |   
### static LoadFromDataString(name, buffer, scene, deleteBuffer, noMipmap, invertY, samplingMode, onLoad, onError) &rarr; [Texture](/classes/2.5/Texture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     
 | buffer | any |     
 | scene | [Scene](/classes/2.5/Scene) |     
optional | deleteBuffer | boolean | 
optional | noMipmap | boolean |     
optional | invertY | boolean |     
optional | samplingMode | number |     
optional | onLoad | () =&gt; void |     
