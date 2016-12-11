---
ID_PAGE: 25220
PG_TITLE: CubeTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
---
## Description

class [CubeTexture](/classes/2.5/CubeTexture) extends [BaseTexture](/classes/2.5/BaseTexture)



## Constructor

## new [CubeTexture](/classes/2.5/CubeTexture)(rootUrl, scene, extensions, noMipmap, files, onLoad, onError)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | rootUrl | string |     Link of the texture
 | scene | [Scene](/classes/2.5/Scene) |     [Scene](/classes/2.5/Scene) which contain the texture
optional | extensions | string[] |     The cube texture extensions. The defaults extensions are : [_px.jpg, _py.jpg, _pz.jpg, _nx.jpg, _ny.jpg, _nz.jpg]
optional | noMipmap | boolean |   
optional | files | string[] |   
optional | onLoad | () =&gt; void | 
## Members

### url : string

The texture URL

### coordinatesMode : number

The coordinates mode

## Methods

### static CreateFromImages(files, scene, noMipmap) &rarr; [CubeTexture](/classes/2.5/CubeTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | files | string[] |   
 | scene | [Scene](/classes/2.5/Scene) |     [Scene](/classes/2.5/Scene) which contain the texture
optional | noMipmap | boolean |   
### delayLoad() &rarr; void

Delay the texture loading
### getReflectionTextureMatrix() &rarr; [Matrix](/classes/2.5/Matrix)


### static Parse(parsedTexture, scene, rootUrl) &rarr; [CubeTexture](/classes/2.5/CubeTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedTexture | any |   
 | scene | [Scene](/classes/2.5/Scene) |     [Scene](/classes/2.5/Scene) which contain the texture
 | rootUrl | string |     Link of the texture
### clone() &rarr; [CubeTexture](/classes/2.5/CubeTexture)

Clone the cube texture
@return [CubeTexture](/classes/2.5/CubeTexture) A clone of the cube texture
