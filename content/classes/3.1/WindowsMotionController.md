---
TAGS:
---
## Description

class [WindowsMotionController](/classes/3.1/WindowsMotionController) extends [WebVRController](/classes/3.1/WebVRController)



## Constructor

## new [WindowsMotionController](/classes/3.1/WindowsMotionController)(vrGamepad)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vrGamepad | any | 

## Members

### static GAMEPAD_ID_PREFIX : string



### onTrackpadChangedObservable : [Observable](/classes/3.1/Observable)&lt;ExtendedGamepadButton&gt;



### onTriggerButtonStateChangedObservable : [Observable](/classes/3.1/Observable)&lt;ExtendedGamepadButton&gt;



### onMenuButtonStateChangedObservable : [Observable](/classes/3.1/Observable)&lt;ExtendedGamepadButton&gt;



### onGripButtonStateChangedObservable : [Observable](/classes/3.1/Observable)&lt;ExtendedGamepadButton&gt;



### onThumbstickButtonStateChangedObservable : [Observable](/classes/3.1/Observable)&lt;ExtendedGamepadButton&gt;



### onTouchpadButtonStateChangedObservable : [Observable](/classes/3.1/Observable)&lt;ExtendedGamepadButton&gt;



## Methods

### update() &rarr; void

Called once per frame by the engine.
### initControllerMesh(scene, meshLoaded, forceDefault) &rarr; void

Implements abstract method on [WebVRController](/classes/3.1/WebVRController) class, loading controller meshes and calling this.attachToMesh if successful.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.1/Scene) |  scene in which to add meshes
optional | meshLoaded | (mesh: [AbstractMesh](/classes/3.1/AbstractMesh)) =&gt; void |  optional callback function that will be called if the mesh loads successfully.
optional | forceDefault | boolean | 
### getForwardRay(length) &rarr; [Ray](/classes/3.1/Ray)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | length | number | 

### dispose() &rarr; void


