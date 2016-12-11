---
ID_PAGE: 25337
PG_TITLE: VirtualJoystick
PG_VERSION: 2.1
---
## Description

class [VirtualJoystick](/classes/2.5/VirtualJoystick)

Mainly based on these 2 articles :

Creating an universal virtual touch joystick working for all Touch models thanks to [Hand.JS](http://blogs.msdn.com/b/davrous/archive/2013/02/22/creating-an-universal-virtual-touch-joystick-working-for-all-touch-models-thanks-to-hand-js.aspx)

& on Seb Lee-Delisle original work: http://seb.ly/2011/04/multi-touch-game-controller-in-javascripthtml5-for-ipad/

## Constructor

## new [VirtualJoystick](/classes/2.5/VirtualJoystick)(leftJoystick)

The [VirtualJoystick](/classes/2.5/VirtualJoystick) constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | leftJoystick | boolean |     @param leftJoystick

## Members

### reverseLeftRight : boolean

True if the [VirtualJoystick](/classes/2.5/VirtualJoystick) is reversed to right or left position, false otherwise.

Default value : false

### reverseUpDown : boolean

True if the [VirtualJoystick](/classes/2.5/VirtualJoystick) is reversed to top or bottom position, false otherwise.

Default value : false

### deltaPosition : [Vector3](/classes/2.5/Vector3)

Default value : [Vector3](/classes/2.5/Vector3).Zero

### pressed : boolean

True is [VirtualJoystick](/classes/2.5/VirtualJoystick) is pressed, false otherwise.

## Methods

### setJoystickSensibility(newJoystickSensibility) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | newJoystickSensibility | number |     @param newJoystickSensibility

### setJoystickColor(newColor) &rarr; void

Change the color of the virtual joystick

#### Parameters
 | Name | Type | Description
---|---|---|---
 | newColor | string |  a string that must be a CSS color value (like "red") or the hexa value (like "#FF0000")  a string that must be a CSS color value (like "red") or the hexa value (like "#FF0000")  a string that must be a CSS color value (like "red") or the hexa value (like "#FF0000")  a string that must be a CSS color value (like "red") or the hexa value (like "#FF0000") a string that must be a CSS color value (like &quot;red&quot;) or the hexa value (like &quot;#FF0000&quot;)

### setActionOnTouch(action) &rarr; void

Set the action for the button touched

#### Parameters
 | Name | Type | Description
---|---|---|---
 | action | () =&gt; any |     @param action

### setAxisForLeftRight(axis) &rarr; void

Set the axis for the left and the right

#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [JoystickAxis](/classes/2.5/JoystickAxis) |     The given axis

### setAxisForUpDown(axis) &rarr; void

Set the axis for the up and the down

#### Parameters
 | Name | Type | Description
---|---|---|---
 | axis | [JoystickAxis](/classes/2.5/JoystickAxis) |     The given axis

### releaseCanvas() &rarr; void


