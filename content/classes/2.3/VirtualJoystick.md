---
ID_PAGE: 25337
PG_TITLE: VirtualJoystick
PG_VERSION: 2.1
---
## Description

class [VirtualJoystick](/classes/2.3/VirtualJoystick)



## Constructor

##  new [VirtualJoystick](/classes/2.3/VirtualJoystick)(leftJoystick)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | leftJoystick | boolean |   @param leftJoystick

## Members

### reverseLeftRight : boolean



### reverseUpDown : boolean



### deltaPosition : [Vector3](/classes/2.3/Vector3)



### pressed : boolean



## Methods

### setJoystickSensibility(newJoystickSensibility) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | newJoystickSensibility | number |   @param newJoystickSensibility

### setJoystickColor(newColor) &rarr; void

Change the color of the virtual joystick

#### Parameters
 | Name | Type | Description
---|---|---|---
 | newColor | string |  a string that must be a CSS color value (like "red") or the hexa value (like "#FF0000")  a string that must be a CSS color value (like "red") or the hexa value (like "#FF0000") a string that must be a CSS color value (like &quot;red&quot;) or the hexa value (like &quot;#FF0000&quot;)

### setActionOnTouch(action) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | action | () =&gt; any |   @param action

### setAxisForLeftRight(axis) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [JoystickAxis](/classes/2.3/JoystickAxis) |   The given axis

### setAxisForUpDown(axis) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [JoystickAxis](/classes/2.3/JoystickAxis) |   The given axis

### releaseCanvas() &rarr; void


