---
ID_PAGE: 25305
PG_TITLE: Sprite
PG_VERSION: 2.1
TAGS:
    - Sprite
---
## Description

class [Sprite](/classes/2.3/Sprite)



## Constructor

##  new [Sprite](/classes/2.3/Sprite)(name, manager)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the sprite
 | manager | [SpriteManager](/classes/2.3/SpriteManager) |   The sprite manager
## Members

### name : string



### position : [Vector3](/classes/2.3/Vector3)



### color : [Color4](/classes/2.3/Color4)



### width : number



### height : number



### angle : number



### cellIndex : number



### invertU : number



### invertV : number



### disposeWhenFinishedAnimating : boolean



### animations : [Animation](/classes/2.3/Animation)[]



### isPickable : boolean



### actionManager : [ActionManager](/classes/2.3/ActionManager)



### size : number



## Methods

### playAnimation(from, to, loop, delay) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | from | number |   Number of the first frame
 | to | number |   Number of the last frame
 | loop | boolean |   True : loop ; False : don't loop
### stopAnimation() &rarr; void


### dispose() &rarr; void


