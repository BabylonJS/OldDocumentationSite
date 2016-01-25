---
ID_PAGE: 25143
PG_TITLE: PointLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
##Description

class [PointLight](/classes/2.2/PointLight) extends [Light](/classes/2.2/Light)

A point light is a light defined by an unique point in world space.

The light is emitted in every direction from this point. A good example of a point light is the sun.

A tutorial about lights can be found [here](http://doc.babylonjs.com/tutorials/06._Lights)

##Constructor

##new [PointLight](/classes/2.2/PointLight)(name, position, scene)

Creates a new [PointLight](/classes/2.2/PointLight) object

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  The name of the object
 | position | [Vector3](/classes/2.2/Vector3) |  The position of the light in the scene
 | scene | [Scene](/classes/2.2/Scene) |  The scene to create the light into
##Members

###position : [Vector3](/classes/2.2/Vector3)

The position of the emitting point

##Methods

###getAbsolutePosition() &rarr; [Vector3](/classes/2.2/Vector3)


###transferToEffect(effect, positionUniformName) &rarr; void

Gives the light to position with the given effect with given position name

####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/2.2/Effect) |  The given effect
 | positionUniformName | string |  The uniform name
###getShadowGenerator() &rarr; [ShadowGenerator](/classes/2.2/ShadowGenerator)


