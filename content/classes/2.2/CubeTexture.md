---
ID_PAGE: 25220
PG_TITLE: CubeTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
---
##Description

class [CubeTexture](/classes/2.2/CubeTexture) extends [BaseTexture](/classes/2.2/BaseTexture)



##Constructor

##new [CubeTexture](/classes/2.2/CubeTexture)(rootUrl, scene, extensions, noMipmap)

Create a new [CubeTexture](/classes/2.2/CubeTexture). Used to create a new skybox.
A tutorial about cube textures  can be found here : http://doc.babylonjs.com/tutorials/13._Environment

####Parameters
 | Name | Type | Description
---|---|---|---
 | rootUrl | string |  Link of the texture
 | scene | [Scene](/classes/2.2/Scene) |  [Scene](/classes/2.2/Scene) which contain the texture
optional | extensions | string[] |  The cube texture extensions. The defaults extensions are : [_px.jpg, _py.jpg, _pz.jpg, _nx.jpg, _ny.jpg, _nz.jpg]
##Members

###url : string

The texture URL

###coordinatesMode : number

The coordinates mode

##Methods

###clone() &rarr; [CubeTexture](/classes/2.2/CubeTexture)

Clone the cube texture
@return [CubeTexture](/classes/2.2/CubeTexture) A clone of the cube texture
###delayLoad() &rarr; void

Delay the texture loading
###getReflectionTextureMatrix() &rarr; [Matrix](/classes/2.2/Matrix)


