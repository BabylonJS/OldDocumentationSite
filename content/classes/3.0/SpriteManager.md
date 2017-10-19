---
ID_PAGE: 25306
PG_TITLE: SpriteManager
PG_VERSION: 2.1
TAGS:
    - Sprite
---
## Description

class [SpriteManager](/classes/3.0/SpriteManager)



## Constructor

## new [SpriteManager](/classes/3.0/SpriteManager)(name, imgUrl, capacity, cellSize, scene, epsilon, samplingMode)

Create a new [SpriteManager](/classes/3.0/SpriteManager)
A tutorial about sprites can be found here : https://doc.babylonjs.com/How_To/Sprites

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      Name of the sprite manager
 | imgUrl | string |      Link of the image
 | capacity | number |      The capacity of the sprite manager
 | cellSize | any |      [Size](/classes/3.0/Size) of cells
 | scene | [Scene](/classes/3.0/Scene) |      [Scene](/classes/3.0/Scene) which contain the sprite Manager
optional | epsilon | number |      Epsilon
## Members

### name : string

Name of the sprite manager

### sprites : [Sprite](/classes/3.0/Sprite)[]

Sprites contains in the manager

### renderingGroupId : number

The rendering group ID

### layerMask : number



### fogEnabled : boolean



### isPickable : boolean



### cellWidth : number



### cellHeight : number



### onDisposeObservable : [Observable](/classes/3.0/Observable)&lt;[SpriteManager](/classes/3.0/SpriteManager)&gt;

An event triggered when the manager is disposed.

@type {BABYLON.[Observable](/classes/3.0/Observable)}

### onDispose : () =&gt; void

Called on dispose

### texture : [Texture](/classes/3.0/Texture)



## Methods

### intersects(ray, camera, predicate, fastCheck) &rarr; [PickingInfo](/classes/3.0/PickingInfo)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/3.0/Ray) |    
 | camera | [Camera](/classes/3.0/Camera) |    
optional | predicate | (sprite: [Sprite](/classes/3.0/Sprite)) =&gt; boolean |    
### render() &rarr; void

Render this sprite manager
### dispose() &rarr; void


