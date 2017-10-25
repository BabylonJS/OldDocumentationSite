---
ID_PAGE: 25319
PG_TITLE: Xbox360Pad
PG_VERSION: 2.1
TAGS:
    - Gamepad
---
## Description

class [Xbox360Pad](/classes/3.1/Xbox360Pad) extends [Gamepad](/classes/3.1/Gamepad)



## Constructor

## new [Xbox360Pad](/classes/3.1/Xbox360Pad)(id, index, gamepad, xboxOne)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 
 | index | number | 
 | gamepad | any | 
## Members

### onButtonDownObservable : [Observable](/classes/3.1/Observable)&lt;[Xbox360Button](/classes/3.1/Xbox360Button)&gt;



### onButtonUpObservable : [Observable](/classes/3.1/Observable)&lt;[Xbox360Button](/classes/3.1/Xbox360Button)&gt;



### onPadDownObservable : [Observable](/classes/3.1/Observable)&lt;[Xbox360Dpad](/classes/3.1/Xbox360Dpad)&gt;



### onPadUpObservable : [Observable](/classes/3.1/Observable)&lt;[Xbox360Dpad](/classes/3.1/Xbox360Dpad)&gt;



### leftTrigger : number



### rightTrigger : number



### buttonA : number



### buttonB : number



### buttonX : number



### buttonY : number



### buttonStart : number



### buttonBack : number



### buttonLB : number



### buttonRB : number



### buttonLeftStick : number



### buttonRightStick : number



### dPadUp : number



### dPadDown : number



### dPadLeft : number



### dPadRight : number



## Methods

### onlefttriggerchanged(callback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (value: number) =&gt; void | 

### onrighttriggerchanged(callback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (value: number) =&gt; void | 

### onbuttondown(callback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (buttonPressed: [Xbox360Button](/classes/3.1/Xbox360Button)) =&gt; void | 

### onbuttonup(callback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (buttonReleased: [Xbox360Button](/classes/3.1/Xbox360Button)) =&gt; void | 

### ondpaddown(callback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (dPadPressed: [Xbox360Dpad](/classes/3.1/Xbox360Dpad)) =&gt; void | 

### ondpadup(callback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (dPadReleased: [Xbox360Dpad](/classes/3.1/Xbox360Dpad)) =&gt; void | 

### update() &rarr; void


