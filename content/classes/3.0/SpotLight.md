---
ID_PAGE: 25144
PG_TITLE: SpotLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
## Description

class [SpotLight](/classes/3.0/SpotLight) extends [ShadowLight](/classes/3.0/ShadowLight)

A spot light is defined by a position, a direction, an angle and an exponent.

These values define a cone of light starting from the position toward the direction.

A tutorial about lights can be found here : https://doc.babylonjs.com/how_to/lights

## Constructor

## new [SpotLight](/classes/3.0/SpotLight)(name, position, direction, angle, exponent, scene)

Creates a [SpotLight](/classes/3.0/SpotLight) object in the scene with the passed parameters :

- `position` ([Vector3](/classes/3.0/Vector3)) is the initial [SpotLight](/classes/3.0/SpotLight) position,

- `direction` ([Vector3](/classes/3.0/Vector3)) is the initial [SpotLight](/classes/3.0/SpotLight) direction,

- `angle` (float, in radians) is the spot light cone angle,

- `exponent` (float) is the light decay speed with the distance from the emission spot.

A spot light is a simply light oriented cone.

It can cast shadows.

Documentation : http://doc.babylonjs.com/how_to/lights

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      The name of the object
 | position | [Vector3](/classes/3.0/Vector3) |      The position of the light in the scene
 | direction | [Vector3](/classes/3.0/Vector3) |      The initial direction of the light
 | angle | number |      The initial angle of the light
 | exponent | number |      The initial exponent of the light
## Members

### angle : number

The size of the spotlight beam

### shadowAngleScale : number

Allows scaling the angle of the light for shadow generation only.

### exponent : number

The speed of the decay of the light with distance

## Methods

### getClassName() &rarr; string

Returns the string "[SpotLight](/classes/3.0/SpotLight)".
### getTypeID() &rarr; number

Returns the integer 2.
### transferToEffect(effect, lightIndex) &rarr; [SpotLight](/classes/3.0/SpotLight)

Sets the passed [Effect](/classes/3.0/Effect) object with the [SpotLight](/classes/3.0/SpotLight) transfomed position (or position if not parented) and normalized direction.

Return the [SpotLight](/classes/3.0/SpotLight).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.0/Effect) |      The given effect
 | lightIndex | string | 
