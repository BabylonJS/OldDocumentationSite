---
ID_PAGE: 25144
PG_TITLE: SpotLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
## Description

class [SpotLight](/classes/3.1/SpotLight) extends [ShadowLight](/classes/3.1/ShadowLight)



## Constructor

## new [SpotLight](/classes/3.1/SpotLight)(name, position, direction, angle, exponent, scene)

Creates a [SpotLight](/classes/3.1/SpotLight) object in the scene with the passed parameters :

- `position` ([Vector3](/classes/3.1/Vector3)) is the initial [SpotLight](/classes/3.1/SpotLight) position,

- `direction` ([Vector3](/classes/3.1/Vector3)) is the initial [SpotLight](/classes/3.1/SpotLight) direction,

- `angle` (float, in radians) is the spot light cone angle,

- `exponent` (float) is the light decay speed with the distance from the emission spot.

A spot light is a simply light oriented cone.

It can cast shadows.

Documentation : http://doc.babylonjs.com/tutorials/lights

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | position | [Vector3](/classes/3.1/Vector3) | 
 | direction | [Vector3](/classes/3.1/Vector3) | 
 | angle | number | 
 | exponent | number | 
## Members

### angle : number


### shadowAngleScale : number

Allows scaling the angle of the light for shadow generation only.
### exponent : number


## Methods

### getClassName() &rarr; string

Returns the string "[SpotLight](/classes/3.1/SpotLight)".
### getTypeID() &rarr; number

Returns the integer 2.
### transferToEffect(effect, lightIndex) &rarr; [SpotLight](/classes/3.1/SpotLight)

Sets the passed [Effect](/classes/3.1/Effect) object with the [SpotLight](/classes/3.1/SpotLight) transfomed position (or position if not parented) and normalized direction.

Return the [SpotLight](/classes/3.1/SpotLight).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.1/Effect) | 
 | lightIndex | string | 
