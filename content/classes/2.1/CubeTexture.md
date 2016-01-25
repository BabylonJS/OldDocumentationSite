---
ID_PAGE: 25220
PG_TITLE: CubeTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
---
##new [CubeTexture](/classes/CubeTexture)(rootUrl, scene, extensions, noMipmap)




Create a new [CubeTexture](/classes/CubeTexture). Used to create a new skybox.
A tutorial about cube textures  can be found here : http://doc.babylonjs.com/tutorials/13._Environment






####Parameters
 | Name | Type | Description
---|---|---|---
 | rootUrl | string | Link of the texture
 | scene | [Scene](/classes/Scene) | [Scene](/classes/Scene) which contain the texture
optional | extensions | string[] | The cube texture extensions. The defaults extensions are : [_px.jpg, _py.jpg, _pz.jpg, _nx.jpg, _ny.jpg, _nz.jpg]
optional | noMipmap | boolean | @param noMipmap
---

##Extends
 [BaseTexture](/classes/BaseTexture)
##Members

###url : string





The texture URL




###coordinatesMode : number





The coordinates mode















##Methods

###clone() &rarr; [CubeTexture](/classes/CubeTexture)
Clone the cube texture
@return [CubeTexture](/classes/CubeTexture) A clone of the cube texture








###delayLoad() &rarr; void
Delay the texture loading








###getReflectionTextureMatrix() &rarr; [Matrix](/classes/Matrix)

