---
ID_PAGE: 25144
PG_TITLE: SpotLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
## Description

class [SpotLight](/classes/2.4/SpotLight) extends [Light](/classes/2.4/Light)

A spot light is defined by a position, a direction, an angle and an exponent.

These values define a cone of light starting from the position toward the direction.

A tutorial about lights can be found here

## Constructor

## new [SpotLight](/classes/2.4/SpotLight)(name, position, direction, angle, exponent, scene)

Creates a new [SpotLight](/classes/2.4/SpotLight) object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    The name of the object
 | position | [Vector3](/classes/2.4/Vector3) |    The position of the light in the scene
 | direction | [Vector3](/classes/2.4/Vector3) |    The initial direction of the light
 | angle | number |    The initial angle of the light
 | exponent | number |    The initial exponent of the light
## Members

### position : [Vector3](/classes/2.4/Vector3)

The position of the emitting point

### direction : [Vector3](/classes/2.4/Vector3)

The direction of the light

### angle : number

The size of the spotlight beam

### exponent : number

The speed of the decay of the light with distance

### transformedPosition : [Vector3](/classes/2.4/Vector3)



## Methods

### getAbsolutePositionundefined &rarr; [Vector3](/classes/2.4/Vector3)


### setShadowProjectionMatrixundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### needCubeundefined &rarr; boolean


### supportsVSMundefined &rarr; boolean


### needRefreshPerFrameundefined &rarr; boolean


### getShadowDirectionundefined &rarr; [Vector3](/classes/2.4/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setDirectionToTargetundefined &rarr; [Vector3](/classes/2.4/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### computeTransformedPositionundefined &rarr; boolean


### transferToEffectundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getTypeIDundefined &rarr; number


