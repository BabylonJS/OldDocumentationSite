---
ID_PAGE: 25306
PG_TITLE: SpriteManager
PG_VERSION: 2.1
TAGS:
    - Sprite
---
## Description

class [SpriteManager](/classes/2.4/SpriteManager)



## Constructor

## new [SpriteManager](/classes/2.4/SpriteManager)(name, imgUrl, capacity, cellSize, scene, epsilon, samplingMode)

Create a new [SpriteManager](/classes/2.4/SpriteManager)
A tutorial about sprites can be found here

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    Name of the sprite manager
 | imgUrl | string |    Link of the image
 | capacity | number |    The capacity of the sprite manager
 | cellSize | number |    [Size](/classes/2.4/Size) of cells
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) which contain the sprite Manager
optional | epsilon | number |    Epsilon
## Members

### name : string

Name of the sprite manager

### cellSize : number

[Size](/classes/2.4/Size) of cells

### sprites : [Sprite](/classes/2.4/Sprite)[]

Sprites contains in the manager

### renderingGroupId : number

The rendering group ID

### layerMask : number



### fogEnabled : boolean



### isPickable : boolean



### onDisposeObservable : [Observable](/classes/2.4/Observable)&lt;[SpriteManager](/classes/2.4/SpriteManager)&gt;

An event triggered when the manager is disposed.

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### onDispose : () =&gt; void

Called on dispose

### texture : [Texture](/classes/2.4/Texture)



## Methods

### intersectsundefined &rarr; [PickingInfo](/classes/2.4/PickingInfo)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### renderundefined &rarr; void


### disposeundefined &rarr; void


