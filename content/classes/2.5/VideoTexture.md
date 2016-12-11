---
ID_PAGE: 25226
PG_TITLE: VideoTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
---
## Description

class [VideoTexture](/classes/2.5/VideoTexture) extends [Texture](/classes/2.5/Texture)



## Constructor

## new [VideoTexture](/classes/2.5/VideoTexture)(name, urlsOrVideo, HTMLVideoElement, scene, generateMipMaps, invertY, samplingMode)

Creates a video texture.

Sample : https://doc.babylonjs.com/tutorials/01._Advanced_Texturing

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     Name of the texture
 | urlsOrVideo | string[] or HTMLVideoElement |  
 | scene | [Scene](/classes/2.5/Scene) |     [Scene](/classes/2.5/Scene) which contain the texture
optional | generateMipMaps | boolean |     True to generate a mipmaps
optional | invertY | boolean |     True to invert on Y axis
## Members

### video : HTMLVideoElement

The video element

## Methods

### update() &rarr; boolean


