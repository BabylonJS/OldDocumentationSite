---
ID_PAGE: 25317
PG_TITLE: Gamepad
PG_VERSION: 2.1
TAGS:
    - Gamepad
---
## Description

class [Gamepad](/classes/3.1/Gamepad)



## Constructor

## new [Gamepad](/classes/3.1/Gamepad)(id, index, browserGamepad, leftStickX, leftStickY, rightStickX, rightStickY)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 
 | index | number | 
 | browserGamepad | any | 
optional | leftStickX | number | 
optional | leftStickY | number | 
optional | rightStickX | number | 
## Members

### id : string



### index : number



### browserGamepad : any



### type : number



### static GAMEPAD : number



### static GENERIC : number



### static XBOX : number



### static POSE_ENABLED : number



### isConnected : boolean



### leftStick : [StickValues](/classes/3.1/StickValues)



### rightStick : [StickValues](/classes/3.1/StickValues)



## Methods

### onleftstickchanged(callback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (values: [StickValues](/classes/3.1/StickValues)) =&gt; void | 

### onrightstickchanged(callback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (values: [StickValues](/classes/3.1/StickValues)) =&gt; void | 

### update() &rarr; void


### dispose() &rarr; void


