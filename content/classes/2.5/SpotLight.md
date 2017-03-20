---
ID_PAGE: 25144
PG_TITLE: SpotLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
## Description

class [SpotLight](/classes/2.5/SpotLight) extends [Light](/classes/2.5/Light)

A spot light is defined by a position, a direction, an angle and an exponent.

These values define a cone of light starting from the position toward the direction.

A tutorial about lights can be found here : https://doc.babylonjs.com/tutorials/lights

## Constructor

## new [SpotLight](/classes/2.5/SpotLight)(name, position, direction, angle, exponent, scene)

Creates a new [SpotLight](/classes/2.5/SpotLight) object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     The name of the object
 | position | [Vector3](/classes/2.5/Vector3) |     The position of the light in the scene
 | direction | [Vector3](/classes/2.5/Vector3) |     The initial direction of the light
 | angle | number |     The initial angle of the light
 | exponent | number |     The initial exponent of the light
## Members

### position : [Vector3](/classes/2.5/Vector3)

The position of the emitting point

### direction : [Vector3](/classes/2.5/Vector3)

The direction of the light

### angle : number

The size of the spotlight beam

### exponent : number

The speed of the decay of the light with distance

### transformedPosition : [Vector3](/classes/2.5/Vector3)



## Methods

### getAbsolutePosition() &rarr; [Vector3](/classes/2.5/Vector3)


### setShadowProjectionMatrix(matrix, viewMatrix, renderList) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.5/Matrix) |     
 | viewMatrix | [Matrix](/classes/2.5/Matrix) |     
 | renderList | Array&lt;[AbstractMesh](/classes/2.5/AbstractMesh)&gt; |     
### needCube() &rarr; boolean


### supportsVSM() &rarr; boolean


### needRefreshPerFrame() &rarr; boolean


### getShadowDirection(faceIndex) &rarr; [Vector3](/classes/2.5/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | faceIndex | number |   

### setDirectionToTarget(target) &rarr; [Vector3](/classes/2.5/Vector3)

Changes the light diretion to point to the given point

#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](/classes/2.5/Vector3) |     The given point

### computeTransformedPosition() &rarr; boolean


### transferToEffect(effect, positionUniformName, directionUniformName) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/2.5/Effect) |     The given effect
 | positionUniformName | string |     The uniform name
 | directionUniformName | string |     The direction of the uniform
### getTypeID() &rarr; number


### getRotation() &rarr; [Vector3](/classes/2.5/Vector3)


