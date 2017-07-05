---
TAGS:
---
## Description

class [WebVRController](/classes/3.0/WebVRController) extends [PoseEnabledController](/classes/3.0/PoseEnabledController)



## Constructor

## new [WebVRController](/classes/3.0/WebVRController)(vrGamepad)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | vrGamepad | any | 

## Members

### onTriggerStateChangedObservable : [Observable](/classes/3.0/Observable)&lt;ExtendedGamepadButton&gt;



### onMainButtonStateChangedObservable : [Observable](/classes/3.0/Observable)&lt;ExtendedGamepadButton&gt;



### onSecondaryButtonStateChangedObservable : [Observable](/classes/3.0/Observable)&lt;ExtendedGamepadButton&gt;



### onPadStateChangedObservable : [Observable](/classes/3.0/Observable)&lt;ExtendedGamepadButton&gt;



### onPadValuesChangedObservable : [Observable](/classes/3.0/Observable)&lt;[StickValues](/classes/3.0/StickValues)&gt;



### pad : [StickValues](/classes/3.0/StickValues)



### hand : string



### any : ()



### abstract : ()



### any : ()



## Methods

### onButtonStateChange(callback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (controlledIndex: number, buttonIndex: number, state: ExtendedGamepadButton) =&gt; void | 

### update() &rarr; void


