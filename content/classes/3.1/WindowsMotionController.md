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


### onTrackpadValuesChangedObservable : [Observable](/classes/3.1/Observable)&lt;[StickValues](/classes/3.1/StickValues)&gt;


### trackpad : [StickValues](/classes/3.1/StickValues)


### onTriggerButtonStateChangedObservable : [Observable](/classes/3.1/Observable)&lt;ExtendedGamepadButton&gt;


### onMenuButtonStateChangedObservable : [Observable](/classes/3.1/Observable)&lt;ExtendedGamepadButton&gt;


### onGripButtonStateChangedObservable : [Observable](/classes/3.1/Observable)&lt;ExtendedGamepadButton&gt;


### onThumbstickButtonStateChangedObservable : [Observable](/classes/3.1/Observable)&lt;ExtendedGamepadButton&gt;


### onTouchpadButtonStateChangedObservable : [Observable](/classes/3.1/Observable)&lt;ExtendedGamepadButton&gt;


### onTouchpadValuesChangedObservable : [Observable](/classes/3.1/Observable)&lt;[StickValues](/classes/3.1/StickValues)&gt;


## Methods

### update() &rarr; void

Called once per frame by the engine.
### handleButtonChange(buttonIdx, state, changes) &rarr; void

Called once for each button that changed state since the last frame

#### Parameters
 | Name | Type | Description
---|---|---|---
 | buttonIdx | number |  Which button index changed
 | state | ExtendedGamepadButton |  New state of the button
 | changes | GamepadButtonChanges |  Which properties on the state changed since last frame
### lerpButtonTransform(buttonName, buttonValue) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | buttonName | string | 
 | buttonValue | number | 
### lerpAxisTransform(axis, axisValue) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | number | 
 | axisValue | number | 
### initControllerMesh(scene, meshLoaded, forceDefault) &rarr; void

Implements abstract method on [WebVRController](/classes/3.1/WebVRController) class, loading controller meshes and calling this.attachToMesh if successful.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.1/Scene) |  scene in which to add meshes
optional | meshLoaded |  | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 

 |  optional callback function that will be called if the mesh loads successfully.
### getForwardRay(length) &rarr; [Ray](/classes/3.1/Ray)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | length | number | 

### dispose() &rarr; void


