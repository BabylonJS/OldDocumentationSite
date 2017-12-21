---
TAGS:
---
## Description

class [WebVRController](/classes/3.1/WebVRController) extends [PoseEnabledController](/classes/3.1/PoseEnabledController)



## Constructor

## new [WebVRController](/classes/3.1/WebVRController)(vrGamepad)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vrGamepad | any | 

## Members

### onTriggerStateChangedObservable : [Observable](/classes/3.1/Observable)&lt;ExtendedGamepadButton&gt;


### onMainButtonStateChangedObservable : [Observable](/classes/3.1/Observable)&lt;ExtendedGamepadButton&gt;


### onSecondaryButtonStateChangedObservable : [Observable](/classes/3.1/Observable)&lt;ExtendedGamepadButton&gt;


### onPadStateChangedObservable : [Observable](/classes/3.1/Observable)&lt;ExtendedGamepadButton&gt;


### onPadValuesChangedObservable : [Observable](/classes/3.1/Observable)&lt;[StickValues](/classes/3.1/StickValues)&gt;


### pad : [StickValues](/classes/3.1/StickValues)


### hand : string


### defaultModel : [AbstractMesh](/classes/3.1/AbstractMesh)


### abstract : ()


### void : ()


### abstract : ()


### void : ()


## Methods

### onButtonStateChange(callback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback |  | controlledIndex | number | 
 | buttonIndex | number | 
 | state | ExtendedGamepadButton | 

### update() &rarr; void


### dispose() &rarr; void


