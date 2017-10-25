---
ID_PAGE: 25337
PG_TITLE: VirtualJoystick
PG_VERSION: 2.1
---
## Description

class [VirtualJoystick](/classes/3.1/VirtualJoystick)



## Constructor

## new [VirtualJoystick](/classes/3.1/VirtualJoystick)(leftJoystick)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | leftJoystick | boolean | 

## Members

### reverseLeftRight : boolean



### reverseUpDown : boolean



### deltaPosition : [Vector3](/classes/3.1/Vector3)



### pressed : boolean



## Methods

### setJoystickSensibility(newJoystickSensibility) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | newJoystickSensibility | number | 

### setJoystickColor(newColor) &rarr; void

Change the color of the virtual joystick

#### Parameters
 | Name | Type | Description
---|---|---|---
 | newColor | string |  a string that must be a CSS color value (like "red") or the hexa value (like "#FF0000")

### setActionOnTouch(action) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | action | () =&gt; any | 

### setAxisForLeftRight(axis) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [JoystickAxis](/classes/3.1/JoystickAxis) | 

### setAxisForUpDown(axis) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [JoystickAxis](/classes/3.1/JoystickAxis) | 

### releaseCanvas() &rarr; void


