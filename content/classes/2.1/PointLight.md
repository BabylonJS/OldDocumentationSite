---
ID_PAGE: 25143
PG_TITLE: PointLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---

A point light is a light defined by an unique point in world space.

The light is emitted in every direction from this point. A good example of a point light is the sun.

A tutorial about lights can be found [here](http://doc.babylonjs.com/tutorials/06._Lights)
##new [PointLight](/classes/PointLight)(name, position, scene)




Creates a new [PointLight](/classes/PointLight) object






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the object
 | position | [Vector3](/classes/Vector3) | The position of the light in the scene
 | scene | [Scene](/classes/Scene) | The scene to create the light into
---

##Extends
 [Light](/classes/Light)
##Members

###position : [Vector3](/classes/Vector3)





The position of the emitting point















##Methods

###getAbsolutePosition() &rarr; [Vector3](/classes/Vector3)






###transferToEffect(effect, positionUniformName) &rarr; void
Gives the light to position with the given effect with given position name







####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/Effect) | The given effect
 | positionUniformName | string | The uniform name
---

###getShadowGenerator() &rarr; [ShadowGenerator](/classes/ShadowGenerator)

