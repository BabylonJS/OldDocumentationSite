---
ID_PAGE: 25144
PG_TITLE: SpotLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---

A spot light is defined by a position, a direction, an angle and an exponent.

These values define a cone of light starting from the position toward the direction.

A tutorial about lights can be found [here](http://doc.babylonjs.com/tutorials/06._Lights)
##new [SpotLight](/classes/SpotLight)(name, position, direction, angle, exponent, scene)




Creates a new [SpotLight](/classes/SpotLight) object






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the object
 | position | [Vector3](/classes/Vector3) | The position of the light in the scene
 | direction | [Vector3](/classes/Vector3) | The initial direction of the light
 | angle | number | The initial angle of the light
 | exponent | number | The initial exponent of the light
 | scene | [Scene](/classes/Scene) | The scene to create the light into
---

##Extends
 [Light](/classes/Light)
##Members

###position : [Vector3](/classes/Vector3)





The position of the emitting point




###direction : [Vector3](/classes/Vector3)





The direction of the light




###angle : number





The size of the spotlight beam




###exponent : number





The speed of the decay of the light with distance










###transformedPosition : [Vector3](/classes/Vector3)









##Methods

###getAbsolutePosition() &rarr; [Vector3](/classes/Vector3)






###setShadowProjectionMatrix(matrix, viewMatrix, renderList) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/Matrix) | 
 | viewMatrix | [Matrix](/classes/Matrix) | 
 | renderList | Array&lt;AbstractMesh&gt; | 
---

###supportsVSM() &rarr; boolean


###needRefreshPerFrame() &rarr; boolean


###setDirectionToTarget(target) &rarr; [Vector3](/classes/Vector3)
Changes the light diretion to point to the given point







####Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](/classes/Vector3) | The given point
---

###computeTransformedPosition() &rarr; boolean




###transferToEffect(effect, positionUniformName, directionUniformName) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/Effect) | The given effect
 | positionUniformName | string | The uniform name
 | directionUniformName | string | The direction of the uniform
---
