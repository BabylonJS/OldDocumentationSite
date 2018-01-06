---
ID_PAGE: 25220
PG_TITLE: CubeTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
---
## Description

class [CubeTexture](/classes/3.1/CubeTexture) extends [BaseTexture](/classes/3.1/BaseTexture)



## Constructor

## new [CubeTexture](/classes/3.1/CubeTexture)(rootUrl, scene, extensions, noMipmap, files, onLoad, onError, format, prefiltered, forcedExtension)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | rootUrl | string | 
 | scene | [Scene](/classes/3.1/Scene) | 
optional | extensions | Nullable&lt;string[]&gt; | 
optional | noMipmap | boolean | 
optional | files | Nullable&lt;string[]&gt; | 
optional | onLoad | Nullable&lt;() =&gt; void&gt; | 
optional | onError | Nullable&lt;(message: string, exception: any) =&gt; void&gt; | 
optional | format | number | 
optional | prefiltered | boolean | 
## Members

### url : string


### coordinatesMode : number


## Methods

### static CreateFromImages(files, scene, noMipmap) &rarr; [CubeTexture](/classes/3.1/CubeTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | files | string[] | 
 | scene | [Scene](/classes/3.1/Scene) | 
optional | noMipmap | boolean | 
### static CreateFromPrefilteredData(url, scene, forcedExtension) &rarr; [CubeTexture](/classes/3.1/CubeTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string | 
 | scene | [Scene](/classes/3.1/Scene) | 
optional | forcedExtension | any | 
### delayLoad() &rarr; void


### getReflectionTextureMatrix() &rarr; [Matrix](/classes/3.1/Matrix)


### setReflectionTextureMatrix(value) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | [Matrix](/classes/3.1/Matrix) | 

### static Parse(parsedTexture, scene, rootUrl) &rarr; [CubeTexture](/classes/3.1/CubeTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedTexture | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | rootUrl | string | 
### clone() &rarr; [CubeTexture](/classes/3.1/CubeTexture)


