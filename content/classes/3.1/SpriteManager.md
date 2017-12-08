---
ID_PAGE: 25306
PG_TITLE: SpriteManager
PG_VERSION: 2.1
TAGS:
    - Sprite
---
## Description

class [SpriteManager](/classes/3.1/SpriteManager)



## Constructor

## new [SpriteManager](/classes/3.1/SpriteManager)(name, imgUrl, capacity, cellSize, scene, epsilon, samplingMode)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | imgUrl | string | 
 | capacity | number | 
 | cellSize | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
optional | epsilon | number | 
## Members

### name : string


### sprites : [Sprite](/classes/3.1/Sprite)[]


### renderingGroupId : number


### layerMask : number


### fogEnabled : boolean


### isPickable : boolean


### cellWidth : number


### cellHeight : number


### onDisposeObservable : [Observable](/classes/3.1/Observable)&lt;[SpriteManager](/classes/3.1/SpriteManager)&gt;

An event triggered when the manager is disposed.

@type {BABYLON.[Observable](/classes/3.1/Observable)}
### onDispose : () =&gt; void


### texture : [Texture](/classes/3.1/Texture)


## Methods

### intersects(ray, camera, predicate, fastCheck) &rarr; [PickingInfo](/classes/3.1/PickingInfo)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/3.1/Ray) | 
 | camera | [Camera](/classes/3.1/Camera) | 
optional | predicate |  | sprite | [Sprite](/classes/3.1/Sprite) | 

 | 
### render() &rarr; void


### dispose() &rarr; void


