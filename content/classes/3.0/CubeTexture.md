---
ID_PAGE: 25220
PG_TITLE: CubeTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
---
## Description

class [CubeTexture](/classes/3.0/CubeTexture) extends [BaseTexture](/classes/3.0/BaseTexture)



## Constructor

## new [CubeTexture](/classes/3.0/CubeTexture)(rootUrl, scene, extensions, noMipmap, files, onLoad, onError, format)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | rootUrl | string |      Link of the texture
 | scene | [Scene](/classes/3.0/Scene) |      [Scene](/classes/3.0/Scene) which contain the texture
optional | extensions | string[] |      The cube texture extensions. The defaults extensions are : [_px.jpg, _py.jpg, _pz.jpg, _nx.jpg, _ny.jpg, _nz.jpg]
optional | noMipmap | boolean |    
optional | files | string[] |    
optional | onLoad | () =&gt; void |  
optional | onError | () =&gt; void | 
## Members

### url : string

The texture URL

### coordinatesMode : number

The coordinates mode

## Methods

### static CreateFromImages(files, scene, noMipmap) &rarr; [CubeTexture](/classes/3.0/CubeTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | files | string[] |    
 | scene | [Scene](/classes/3.0/Scene) |      [Scene](/classes/3.0/Scene) which contain the texture
optional | noMipmap | boolean |    
### delayLoad() &rarr; void

Delay the texture loading
### getReflectionTextureMatrix() &rarr; [Matrix](/classes/3.0/Matrix)


### static Parse(parsedTexture, scene, rootUrl) &rarr; [CubeTexture](/classes/3.0/CubeTexture)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedTexture | any |    
 | scene | [Scene](/classes/3.0/Scene) |      [Scene](/classes/3.0/Scene) which contain the texture
 | rootUrl | string |      Link of the texture
### clone() &rarr; [CubeTexture](/classes/3.0/CubeTexture)

Clone the cube texture
@return [CubeTexture](/classes/3.0/CubeTexture) A clone of the cube texture
