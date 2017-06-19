---
ID_PAGE: 25150
PG_TITLE: Scene
PG_VERSION: 2.1
TAGS:
    - Scene
---
## Description

class [Scene](/classes/3.0/Scene)

Represents a scene to be rendered by the engine.

@see http://doc.babylonjs.com/page.php?p=21911

## Members

### static MinDeltaTime : number

default : 1.0

In milliseconds, the minimum delta time between two steps

### static MaxDeltaTime : number

default : 1000.0

In milliseconds, the maximum delta time between two steps

### static FOGMODE_NONE : number

The fog is deactivated

### static FOGMODE_EXP : number

The fog density is following an exponential function

### static FOGMODE_EXP2 : number

The fog density is following an exponential function faster than FOGMODE_EXP

### static FOGMODE_LINEAR : number

The fog density is following a linear function.

### autoClear : boolean

default : true

True to clear the color buffer at each render, false either

### autoClearDepthAndStencil : boolean



### clearColor : [Color4](/classes/3.0/Color4)

default : [Color3](/classes/3.0/Color3)(0.2, 0.2, 0.3)

The color of the scene when cleared

### ambientColor : [Color3](/classes/3.0/Color3)

default : [Color3](/classes/3.0/Color3)(0, 0, 0)

The scene ambiant color

