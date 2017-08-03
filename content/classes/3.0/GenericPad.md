---
ID_PAGE: 25318
PG_TITLE: GenericPad
PG_VERSION: 2.1
TAGS:
    - Gamepad
---
## Description

class [GenericPad](/classes/3.0/GenericPad) extends [Gamepad](/classes/3.0/Gamepad)



## Constructor

## new [GenericPad](/classes/3.0/GenericPad)(id, index, browserGamepad)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |      The gamepad id
 | index | number |      The gamepad index
 | browserGamepad | any | 
## Methods

### onbuttondown(callback) &rarr; void

Binds an action to the button pressed, recognized by the button's index in the array

#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (buttonPressed: number) =&gt; void |      The function to execute

### onbuttonup(callback) &rarr; void

Binds an action to the button released, recognized by the button's index in the array

#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (buttonReleased: number) =&gt; void |      The function to execute

### update() &rarr; void


