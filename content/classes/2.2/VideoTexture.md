---
ID_PAGE: 25226
PG_TITLE: VideoTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
---
##Description

class [VideoTexture](/classes/2.2/VideoTexture) extends [Texture](/classes/2.2/Texture)



##Constructor

##new [VideoTexture](/classes/2.2/VideoTexture)(name, urls, scene, generateMipMaps, invertY, samplingMode)

Create a new [VideoTexture](/classes/2.2/VideoTexture). Several videos can be used on one texture. In this case, all videos are appended.
A tutorial about video textures can be found here : http://doc.babylonjs.com/page.php?p=22161

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  Name of the texture
 | urls | string[] |  Link to the texture
 | scene | [Scene](/classes/2.2/Scene) |  [Scene](/classes/2.2/Scene) which contain the texture
optional | generateMipMaps | boolean |  True to generate a mipmaps
optional | invertY | boolean |  True to invert on Y axis
##Members

###video : HTMLVideoElement

The video element

##Methods

###update() &rarr; boolean


