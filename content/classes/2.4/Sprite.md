---
ID_PAGE: 25305
PG_TITLE: Sprite
PG_VERSION: 2.1
TAGS:
    - Sprite
---
## Description

class [Sprite](/classes/2.4/Sprite)



## Constructor

## new [Sprite](/classes/2.4/Sprite)(name, manager)

Create a new [Sprite](/classes/2.4/Sprite).
A tutorial about sprites can be found here

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    Name of the sprite
 | manager | [SpriteManager](/classes/2.4/SpriteManager) |    The sprite manager
## Members

### name : string

The sprite name

### position : [Vector3](/classes/2.4/Vector3)

The sprite position

### color : [Color4](/classes/2.4/Color4)

The sprite color

### width : number



### height : number



### angle : number

The sprite angle

### cellIndex : number

The index of the cell

### invertU : number

True if invert in U axis ; False otherwise

### invertV : number

True if invert in V axis ; False otherwise

### disposeWhenFinishedAnimating : boolean

True if dispose when finished animating ; False otherwise

### animations : [Animation](/classes/2.4/Animation)[]

Animations array

### isPickable : boolean



### actionManager : [ActionManager](/classes/2.4/ActionManager)



### size : number

The sprite size

## Methods

### playAnimation(from, to, loop, delay) &rarr; void

Function to play the sprite animation

#### Parameters
 | Name | Type | Description
---|---|---|---
 | from | number |    Number of the first frame
 | to | number |    Number of the last frame
 | loop | boolean |    True : loop ; False : don't loop
### stopAnimation() &rarr; void

Function to stop the sprite animation
### dispose() &rarr; void


