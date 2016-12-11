---
ID_PAGE: 25317
PG_TITLE: Gamepad
PG_VERSION: 2.1
TAGS:
    - Gamepad
---
## Description

class [Gamepad](/classes/2.5/Gamepad)



## Constructor

## new [Gamepad](/classes/2.5/Gamepad)(id, index, browserGamepad, leftStickX, leftStickY, rightStickX, rightStickY)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |     The gamepad id
 | index | number |     The gamepad index
 | browserGamepad | any |     The object that holds the gamepad informations
optional | leftStickX | number | 
optional | leftStickY | number | 
optional | rightStickX | number | 
## Members

### id : string

The gamepad id

### index : number

The gamepad index

### browserGamepad : any

The gamepad browser, sets the sticks axes

### leftStick : [StickValues](/classes/2.5/StickValues)

The left stick values

### rightStick : [StickValues](/classes/2.5/StickValues)

The right stick values

## Methods

### onleftstickchanged(callback) &rarr; void

Binds an action to the left stick

#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (values: [StickValues](/classes/2.5/StickValues)) =&gt; void |     The action to bind

### onrightstickchanged(callback) &rarr; void

Binds an action to the right stick

#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (values: [StickValues](/classes/2.5/StickValues)) =&gt; void |     The action to bind

### update() &rarr; void


