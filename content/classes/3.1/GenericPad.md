---
ID_PAGE: 25318
PG_TITLE: GenericPad
PG_VERSION: 2.1
TAGS:
    - Gamepad
---
## Description

class [GenericPad](/classes/3.1/GenericPad) extends [Gamepad](/classes/3.1/Gamepad)



## Constructor

## new [GenericPad](/classes/3.1/GenericPad)(id, index, browserGamepad)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 
 | index | number | 
 | browserGamepad | any | 
## Members

### onButtonDownObservable : [Observable](/classes/3.1/Observable)&lt;number&gt;



### onButtonUpObservable : [Observable](/classes/3.1/Observable)&lt;number&gt;



## Methods

### onbuttondown(callback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (buttonPressed: number) =&gt; void | 

### onbuttonup(callback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (buttonReleased: number) =&gt; void | 

### update() &rarr; void


