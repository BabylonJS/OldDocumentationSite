---
ID_PAGE: 25119
PG_TITLE: Camera
PG_VERSION: 2.1
TAGS:
    - Node
    - Camera
---
## Description

class [Camera](/classes/3.1/Camera) extends [Node](/classes/3.1/Node)



## Constructor

## new [Camera](/classes/3.1/Camera)(name, position, scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |
 | position | [Vector3](/classes/3.1/Vector3) |
 | scene | [Scene](/classes/3.1/Scene) |
## Members

### inputs : [CameraInputsManager](/classes/3.1/CameraInputsManager)&lt;[Camera](/classes/3.1/Camera)&gt;


### static PERSPECTIVE_CAMERA : number


### static ORTHOGRAPHIC_CAMERA : number


### static FOVMODE_VERTICAL_FIXED : number

This is the default FOV mode for perspective cameras.
This setting aligns the viewport upper and lower bounds to the camera frustum upper and lower bounds.

### static FOVMODE_HORIZONTAL_FIXED : number

This setting aligns the viewport left and right bounds to the camera frustum left and right bounds.

### static RIG_MODE_NONE : number


### static RIG_MODE_STEREOSCOPIC_ANAGLYPH : number


### static RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL : number


### static RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED : number


### static RIG_MODE_STEREOSCOPIC_OVERUNDER : number


### static RIG_MODE_VR : number


### static RIG_MODE_WEBVR : number


### static ForceAttachControlToAlwaysPreventDefault : boolean


### static UseAlternateWebVRRendering : boolean


### position : [Vector3](/classes/3.1/Vector3)


### upVector : [Vector3](/classes/3.1/Vector3)


### orthoLeft : Nullable&lt;number&gt;


### orthoRight : Nullable&lt;number&gt;


### orthoBottom : Nullable&lt;number&gt;


### orthoTop : Nullable&lt;number&gt;


### fov : number

default : 0.8
FOV is set in Radians.

### minZ : number


### maxZ : number


### inertia : number


### mode : number


### isIntermediate : boolean


### viewport : [Viewport](/classes/3.1/Viewport)


### layerMask : number

Restricts the camera to viewing objects with the same layerMask. A camera with a layerMask of 1 will render meshes with no layerMask and meshes with a layerMask of 1.

### fovMode : number

default : FOVMODE_VERTICAL_FIXED
fovMode sets the camera frustum bounds to the viewport bounds.

### cameraRigMode : number


### interaxialDistance : number


### isStereoscopicSideBySide : boolean


### customRenderTargets : [RenderTargetTexture](/classes/3.1/RenderTargetTexture)[]


### onViewMatrixChangedObservable : [Observable](/classes/3.1/Observable)&lt;[Camera](/classes/3.1/Camera)&gt;


### onProjectionMatrixChangedObservable : [Observable](/classes/3.1/Observable)&lt;[Camera](/classes/3.1/Camera)&gt;


### onAfterCheckInputsObservable : [Observable](/classes/3.1/Observable)&lt;[Camera](/classes/3.1/Camera)&gt;


### onRestoreStateObservable : [Observable](/classes/3.1/Observable)&lt;[Camera](/classes/3.1/Camera)&gt;


### globalPosition : [Vector3](/classes/3.1/Vector3)


### rigCameras : [Camera](/classes/3.1/Camera)[]


### rigPostProcess : Nullable&lt;[PostProcess](/classes/3.1/PostProcess)&gt;


### leftCamera : Nullable&lt;[FreeCamera](/classes/3.1/FreeCamera)&gt;


### rightCamera : Nullable&lt;[FreeCamera](/classes/3.1/FreeCamera)&gt;


## Methods

### storeState() &rarr; [Camera](/classes/3.1/Camera)

Store current camera state (fov, position, etc..)
### restoreState() &rarr; boolean

Restored camera state. You must call storeState() first
### getClassName() &rarr; string


### toString(fullDetails) &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | fullDetails | boolean |

### getActiveMeshes() &rarr; [SmartArray](/classes/3.1/SmartArray)&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;


### isActiveMesh(mesh) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/3.1/Mesh) |

### attachControl(element, noPreventDefault) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement |
optional | noPreventDefault | boolean |
### detachControl(element) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement |

### update() &rarr; void


### attachPostProcess(postProcess, insertAt) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | postProcess | [PostProcess](/classes/3.1/PostProcess) |
optional | insertAt | Nullable&lt;number&gt; |
### detachPostProcess(postProcess) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | postProcess | [PostProcess](/classes/3.1/PostProcess) |

### getWorldMatrix() &rarr; [Matrix](/classes/3.1/Matrix)


### getViewMatrix(force) &rarr; [Matrix](/classes/3.1/Matrix)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean |

### freezeProjectionMatrix(projection) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | projection | [Matrix](/classes/3.1/Matrix) |

### unfreezeProjectionMatrix() &rarr; void


### getProjectionMatrix(force) &rarr; [Matrix](/classes/3.1/Matrix)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean |

### getTranformationMatrix() &rarr; [Matrix](/classes/3.1/Matrix)


### isInFrustum(target) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | ICullable |

### isCompletelyInFrustum(target) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | ICullable |

### getForwardRay(length, transform, origin) &rarr; [Ray](/classes/3.1/Ray)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | length | number |
optional | transform | [Matrix](/classes/3.1/Matrix) |
optional | origin | [Vector3](/classes/3.1/Vector3) |
### dispose() &rarr; void


### getLeftTarget() &rarr; Nullable&lt;[Vector3](/classes/3.1/Vector3)&gt;


### getRightTarget() &rarr; Nullable&lt;[Vector3](/classes/3.1/Vector3)&gt;


### setCameraRigMode(mode, rigParams) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mode | number |
 | rigParams | any |
### setCameraRigParameter(name, value) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |
 | value | any |
### createRigCamera(name, cameraIndex) &rarr; Nullable&lt;[Camera](/classes/3.1/Camera)&gt;

needs to be overridden by children so sub has required properties to be copied

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |
 | cameraIndex | number |
### serialize() &rarr; any


### clone(name) &rarr; [Camera](/classes/3.1/Camera)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |

### getDirection(localAxis) &rarr; [Vector3](/classes/3.1/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | localAxis | [Vector3](/classes/3.1/Vector3) |

### getDirectionToRef(localAxis, result) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | localAxis | [Vector3](/classes/3.1/Vector3) |
 | result | [Vector3](/classes/3.1/Vector3) |
### static GetConstructorFromName(type, name, scene, interaxial_distance, isStereoscopicSideBySide) &rarr; () =&gt; [Camera](/classes/3.1/Camera)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | type | string |
 | name | string |
 | scene | [Scene](/classes/3.1/Scene) |
optional | interaxial_distance | number |
### computeWorldMatrix() &rarr; [Matrix](/classes/3.1/Matrix)


### static Parse(parsedCamera, scene) &rarr; [Camera](/classes/3.1/Camera)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedCamera | any |
 | scene | [Scene](/classes/3.1/Scene) |
