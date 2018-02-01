---
ID_PAGE: 25119
PG_TITLE: VideoDome
PG_VERSION: 3.1
TAGS:
    - Node
---
## Description

Display a 360 degree video on an approximately spherical surface, useful for VR applications or skyboxes.
As a subclass of [Node](/classes/3.1/Node), this allow parenting to the camera or multiple videos with different locations in the scene.
This class achieves its effect with a [VideoTexture](/classes/3.1/VideoTexture) and a correctly configured [BackgroundMaterial](/classes/3.1/BackgroundMaterial) on an inverted sphere.
Potential additions to this helper include non-infinite distance rendering effects for VR.



## Constructor

Create an instance of this class and pass through the parameters to the relevant classes, VideoTexture, StandardMaterial, and Mesh.



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Element's name, child elements will append suffixes for their own names.
 | urlsOrVideo | string[] or HTMLVideoElement | See [VideoTexture](/classes/3.1/VideoTexture)
 | options | Object | Non optional, provide empty object at minimum to compile.
 | options.resolution=12 | int | Lower resolutions have more artifacts at extreme fovs
 | options.clickToPlay=false | bool | Add a click to play listener to the video, does not prevent autoplay.
 | options.autoPlay=true | bool | Automatically attempt to being playing the video.
 | options.loop=true | bool | Automatically loop video on end.
 | options.size=10000 | number | Physical radius to create the dome at, defaults to approximately half the far clip plane.
## Members

### fovMultiplier : number
The current fov(field of view) multiplier, 0.0 - 2.0. Defaults to 1.0. Lower values "zoom in" and higher values "zoom out".
Also see the options.resolution property.


## Methods
