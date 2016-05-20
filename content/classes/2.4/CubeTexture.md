---
ID_PAGE: 25220
PG_TITLE: CubeTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
---
## Description

class [CubeTexture](/classes/2.4/CubeTexture) extends [BaseTexture](/classes/2.4/BaseTexture)



## Constructor

## new [CubeTexture](/classes/2.4/CubeTexture)(rootUrl, scene, extensions, noMipmap, files)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | rootUrl | string |    Link of the texture
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) which contain the texture
optional | extensions | string[] |    The cube texture extensions. The defaults extensions are : [_px.jpg, _py.jpg, _pz.jpg, _nx.jpg, _ny.jpg, _nz.jpg]
optional | noMipmap | boolean |  
## Members

### url : string

The texture URL

### coordinatesMode : number

The coordinates mode

## Methods

### static CreateFromImages(files, scene, noMipmap) &rarr; [CubeTexture](/classes/2.4/CubeTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | files | string[] |  
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) which contain the texture
optional | noMipmap | boolean |  
### delayLoad() &rarr; void

Delay the texture loading
### getReflectionTextureMatrix() &rarr; [Matrix](/classes/2.4/Matrix)


### static Parse(parsedTexture, scene, rootUrl) &rarr; [CubeTexture](/classes/2.4/CubeTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedTexture | any |  
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) which contain the texture
 | rootUrl | string |    Link of the texture
### clone() &rarr; [CubeTexture](/classes/2.4/CubeTexture)

Clone the cube texture
@return [CubeTexture](/classes/2.4/CubeTexture) A clone of the cube texture
