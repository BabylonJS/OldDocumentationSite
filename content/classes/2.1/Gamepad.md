---
ID_PAGE: 25317
PG_TITLE: Gamepad
PG_VERSION: 2.1
TAGS:
    - Gamepad
---
##new [Gamepad](/classes/Gamepad)(id, index, browserGamepad)




Builds a [Gamepad](/classes/Gamepad) object






####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The gamepad id
 | index | number | The gamepad index
 | browserGamepad | any | The object that holds the gamepad informations
---

##Members

###id : string





The gamepad id




###index : number





The gamepad index




###browserGamepad : any





The gamepad browser, sets the sticks axes




###leftStick : [StickValues](/classes/StickValues)





The left stick values




###rightStick : [StickValues](/classes/StickValues)





The right stick values















##Methods

###onleftstickchanged(callback) &rarr; void
Binds an action to the left stick







####Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (values: [StickValues](/classes/StickValues)) =&gt; void | The action to bind
---

###onrightstickchanged(callback) &rarr; void
Binds an action to the right stick







####Parameters
 | Name | Type | Description
---|---|---|---
 | callback | (values: [StickValues](/classes/StickValues)) =&gt; void | The action to bind
---

###update() &rarr; void

