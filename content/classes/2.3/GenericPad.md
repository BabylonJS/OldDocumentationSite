---
ID_PAGE: 25318
PG_TITLE: GenericPad
PG_VERSION: 2.1
TAGS:
    - Gamepad
---
## Description

class [GenericPad](/classes/2.3/GenericPad) extends [Gamepad](/classes/2.3/Gamepad)



## Constructor

##  new [GenericPad](/classes/2.3/GenericPad)(id, index, gamepad)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |   The gamepad id
 | index | number |   The gamepad index
 | gamepad | any |   The object that holds the gamepad informations
## Members

### id : string



### index : number



### gamepad : any



## Methods

### onbuttondown(callback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (buttonPressed: number) =&gt; void |   The function to execute

### onbuttonup(callback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (buttonReleased: number) =&gt; void |   The function to execute

### update() &rarr; void


