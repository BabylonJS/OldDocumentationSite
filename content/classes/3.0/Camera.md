---
ID_PAGE: 25119
PG_TITLE: Camera
PG_VERSION: 2.1
TAGS:
    - Node
    - Camera
---
## Description

class [Camera](/classes/3.0/Camera) extends [Node](/classes/3.0/Node)



## Members

### inputs : [CameraInputsManager](/classes/3.0/CameraInputsManager)&lt;[Camera](/classes/3.0/Camera)&gt;



### static PERSPECTIVE_CAMERA : number



### static ORTHOGRAPHIC_CAMERA : number



### static FOVMODE_VERTICAL_FIXED : number



### static FOVMODE_HORIZONTAL_FIXED : number



### static RIG_MODE_NONE : number



### static RIG_MODE_STEREOSCOPIC_ANAGLYPH : number



### static RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL : number



### static RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED : number



### static RIG_MODE_STEREOSCOPIC_OVERUNDER : number



### static RIG_MODE_VR : number



### static RIG_MODE_WEBVR : number



### static ForceAttachControlToAlwaysPreventDefault : boolean



### position : [Vector3](/classes/3.0/Vector3)

Position of the camera

### upVector : [Vector3](/classes/3.0/Vector3)

[Camera](/classes/3.0/Camera) up

### orthoLeft : any

For orthographic camera, it's the left side of point of view

### orthoRight : any

For orthographic camera, it's the right side of point of view

### orthoBottom : any

For orthegraphic camera, it's the bottom side of point of view

### orthoTop : any

For orthographic camera, it's the top side of point of view

### fov : number

Field of view of the camera

### minZ : number

Minimum distance of view

### maxZ : number

Maximum distance of view

### inertia : number

Inertia of the camera

### mode : number

0 = PERSPECTIVE

1 = ORTHOGRAPHIC

### isIntermediate : boolean

True if this camera is a subcamera, false otherwise

### viewport : [Viewport](/classes/3.0/Viewport)

The viewport

### layerMask : number

The layerMask

### fovMode : number



### cameraRigMode : number



### interaxialDistance : number



### isStereoscopicSideBySide : boolean



