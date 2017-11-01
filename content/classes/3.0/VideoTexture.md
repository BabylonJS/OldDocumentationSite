---
ID_PAGE: 25226
PG_TITLE: VideoTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
---
## Description

class [VideoTexture](/classes/3.0/VideoTexture) extends [Texture](/classes/3.0/Texture)



## Constructor

## new [VideoTexture](/classes/3.0/VideoTexture)(name, urlsOrVideo, HTMLVideoElement, scene, generateMipMaps, invertY, samplingMode)

Creates a video texture.

Sample: [Video Texture](https://doc.babylonjs.com/How_To/video_texture)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      Name of the texture
 | urlsOrVideo | string[] or HTMLVideoElement |   
 | scene | [Scene](/classes/3.0/Scene) |      [Scene](/classes/3.0/Scene) which contain the texture
optional | generateMipMaps | boolean |      True to generate a mipmaps
optional | invertY | boolean |      True to invert on Y axis
## Members

### video : HTMLVideoElement

The video element

## Methods

### update() &rarr; boolean


### dispose() &rarr; void


### static CreateFromWebCam(scene, onReady, constraints) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.0/Scene) |      [Scene](/classes/3.0/Scene) which contain the texture
 | onReady | (videoTexture: [VideoTexture](/classes/3.0/VideoTexture)) =&gt; void | 
 | constraints | { minWidth: number,  maxWidth: number,  minHeight: number,  maxHeight: number,  deviceId: string } | 
