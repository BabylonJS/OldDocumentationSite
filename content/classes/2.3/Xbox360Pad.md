---
ID_PAGE: 25319
PG_TITLE: Xbox360Pad
PG_VERSION: 2.1
TAGS:
    - Gamepad
---
## Description

class [Xbox360Pad](/classes/2.3/Xbox360Pad) extends [Gamepad](/classes/2.3/Gamepad)



## Members

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
 | callback | (value: number) =&gt; void |   The function to execute with the stick passed as argument

### onrighttriggerchanged(callback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (value: number) =&gt; void |   The function to execute with the stick passed as argument

### onbuttondown(callback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (buttonPressed: [Xbox360Button](/classes/2.3/Xbox360Button)) =&gt; void |   The function to execute with the stick passed as argument

### onbuttonup(callback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (buttonReleased: [Xbox360Button](/classes/2.3/Xbox360Button)) =&gt; void |   The function to execute with the stick passed as argument

### ondpaddown(callback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (dPadPressed: [Xbox360Dpad](/classes/2.3/Xbox360Dpad)) =&gt; void |   The function to execute with the stick passed as argument

### ondpadup(callback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (dPadReleased: [Xbox360Dpad](/classes/2.3/Xbox360Dpad)) =&gt; void |   The function to execute with the stick passed as argument

### update() &rarr; void


