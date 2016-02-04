---
ID_PAGE: 25306
PG_TITLE: SpriteManager
PG_VERSION: 2.1
TAGS:
    - Sprite
---
## Description

class [SpriteManager](/classes/2.3/SpriteManager)



## Constructor

##  new [SpriteManager](/classes/2.3/SpriteManager)(name, imgUrl, capacity, cellSize, scene, epsilon, samplingMode)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the sprite manager
 | imgUrl | string |   Link of the image
 | capacity | number |   The capacity of the sprite manager
 | cellSize | number |   Size of cells
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) which contain the sprite Manager
optional | epsilon | number |   Epsilon
## Members

### name : string



### cellSize : number



### sprites : [Sprite](/classes/2.3/Sprite)[]



### renderingGroupId : number



### layerMask : number



### onDispose : () =&gt; void



### fogEnabled : boolean



### isPickable : boolean



## Methods

### intersects(ray, camera, predicate, fastCheck) &rarr; [PickingInfo](/classes/2.3/PickingInfo)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/2.3/Ray) | 
 | camera | [Camera](/classes/2.3/Camera) | 
optional | predicate | (sprite: [Sprite](/classes/2.3/Sprite)) =&gt; boolean | 
### render() &rarr; void


### dispose() &rarr; void


