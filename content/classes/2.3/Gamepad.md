---
ID_PAGE: 25317
PG_TITLE: Gamepad
PG_VERSION: 2.1
TAGS:
    - Gamepad
---
## Description

class [Gamepad](/classes/2.3/Gamepad)



## Constructor

##  new [Gamepad](/classes/2.3/Gamepad)(id, index, browserGamepad)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |   The gamepad id
 | index | number |   The gamepad index
 | browserGamepad | any |   The object that holds the gamepad informations
## Members

### id : string



### index : number



### browserGamepad : any



### leftStick : [StickValues](/classes/2.3/StickValues)



### rightStick : [StickValues](/classes/2.3/StickValues)



## Methods

### onleftstickchanged(callback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (values: [StickValues](/classes/2.3/StickValues)) =&gt; void |   The action to bind

### onrightstickchanged(callback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (values: [StickValues](/classes/2.3/StickValues)) =&gt; void |   The action to bind

### update() &rarr; void


