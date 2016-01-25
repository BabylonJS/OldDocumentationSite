---
ID_PAGE: 25226
PG_TITLE: VideoTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
---
##new [VideoTexture](/classes/VideoTexture)(name, urls, scene, generateMipMaps, invertY, samplingMode)




Create a new [VideoTexture](/classes/VideoTexture). Several videos can be used on one texture. In this case, all videos are appended.
A tutorial about video textures can be found here : http://doc.babylonjs.com/page.php?p=22161






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the texture
 | urls | string[] | Link to the texture
 | scene | [Scene](/classes/Scene) | [Scene](/classes/Scene) which contain the texture
optional | generateMipMaps | boolean | True to generate a mipmaps
optional | invertY | boolean | True to invert on Y axis
optional | samplingMode | number | 
---

##Extends
 [Texture](/classes/Texture)
##Members

###video : HTMLVideoElement





The video element















##Methods

###update() &rarr; boolean

