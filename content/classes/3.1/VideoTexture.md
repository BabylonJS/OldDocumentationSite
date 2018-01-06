---
ID_PAGE: 25226
PG_TITLE: VideoTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
---
## Description

class [VideoTexture](/classes/3.1/VideoTexture) extends [Texture](/classes/3.1/Texture)



## Constructor

## new [VideoTexture](/classes/3.1/VideoTexture)(name, urlsOrVideo, HTMLVideoElement, scene, generateMipMaps, invertY, samplingMode)

Creates a video texture.

Sample : https://doc.babylonjs.com/tutorials/01._Advanced_Texturing

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | urlsOrVideo | string[] or HTMLVideoElement | 
 | scene | [Scene](/classes/3.1/Scene) | 
optional | generateMipMaps | boolean | 
optional | invertY | boolean | 
## Members

### video : HTMLVideoElement


## Methods

### update() &rarr; boolean


### dispose() &rarr; void


### static CreateFromWebCam(scene, onReady, constraints) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.1/Scene) | 
 | onReady |  | videoTexture | [VideoTexture](/classes/3.1/VideoTexture) | 

 | 
