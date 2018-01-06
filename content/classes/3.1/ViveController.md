---
TAGS:
---
## Description

class [ViveController](/classes/3.1/ViveController) extends [WebVRController](/classes/3.1/WebVRController)



## Constructor

## new [ViveController](/classes/3.1/ViveController)(vrGamepad)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vrGamepad | any | 

## Members

### onLeftButtonStateChangedObservable : [Observable](/classes/3.1/Observable)&lt;ExtendedGamepadButton&gt;


### onRightButtonStateChangedObservable : [Observable](/classes/3.1/Observable)&lt;ExtendedGamepadButton&gt;


### onMenuButtonStateChangedObservable : [Observable](/classes/3.1/Observable)&lt;ExtendedGamepadButton&gt;


## Methods

### initControllerMesh(scene, meshLoaded) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.1/Scene) | 
optional | meshLoaded |  | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 

### handleButtonChange(buttonIdx, state, changes) &rarr; void

Vive mapping:

0: touchpad

1: trigger

2: left AND right buttons

3: menu button

#### Parameters
 | Name | Type | Description
---|---|---|---
 | buttonIdx | number | 
 | state | ExtendedGamepadButton | 
 | changes | GamepadButtonChanges | 
