---
ID_PAGE: 25306
PG_TITLE: SpriteManager
PG_VERSION: 2.1
TAGS:
    - Sprite
---
##new [SpriteManager](/classes/SpriteManager)(name, imgUrl, capacity, cellSize, scene, epsilon, samplingMode)




Create a new [SpriteManager](/classes/SpriteManager)
A tutorial about sprites can be found [here](http://doc.babylonjs.com/tutorials/08._Sprites)






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the sprite manager
 | imgUrl | string | Link of the image
 | capacity | number | The capacity of the sprite manager
 | cellSize | number | Size of cells
 | scene | [Scene](/classes/Scene) | [Scene](/classes/Scene) which contain the sprite Manager
optional | epsilon | number | Epsilon
optional | samplingMode | number | 
---

##Members

###name : string





Name of the sprite manager




###cellSize : number





Size of cells




###sprites : [Sprite](/classes/Sprite)[]





Sprites contains in the manager




###renderingGroupId : number





The rendering group ID




###onDispose : () =&gt; void





Called on dispose







###fogEnabled : boolean














##Methods

###render() &rarr; void
Render this sprite manager








###dispose() &rarr; void

