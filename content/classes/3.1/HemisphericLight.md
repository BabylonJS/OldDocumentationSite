---
ID_PAGE: 25142
PG_TITLE: HemisphericLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
## Description

class [HemisphericLight](/classes/3.1/HemisphericLight) extends [Light](/classes/3.1/Light)



## Constructor

## new [HemisphericLight](/classes/3.1/HemisphericLight)(name, direction, scene)

Creates a [HemisphericLight](/classes/3.1/HemisphericLight) object in the scene according to the passed direction ([Vector3](/classes/3.1/Vector3)).

The [HemisphericLight](/classes/3.1/HemisphericLight) simulates the ambient environment light, so the passed direction is the light reflection direction, not the incoming direction.

The [HemisphericLight](/classes/3.1/HemisphericLight) can't cast shadows.

Documentation : http://doc.babylonjs.com/tutorials/lights

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | direction | [Vector3](/classes/3.1/Vector3) | 
 | scene | [Scene](/classes/3.1/Scene) | 
## Members

### groundColor : [Color3](/classes/3.1/Color3)



### direction : [Vector3](/classes/3.1/Vector3)



## Methods

### getClassName() &rarr; string

Returns the string "[HemisphericLight](/classes/3.1/HemisphericLight)".
### setDirectionToTarget(target) &rarr; [Vector3](/classes/3.1/Vector3)

Sets the [HemisphericLight](/classes/3.1/HemisphericLight) direction towards the passed target ([Vector3](/classes/3.1/Vector3)).

Returns the updated direction.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](/classes/3.1/Vector3) | 

### getShadowGenerator() &rarr; Nullable&lt;[ShadowGenerator](/classes/3.1/ShadowGenerator)&gt;


### transferToEffect(effect, lightIndex) &rarr; [HemisphericLight](/classes/3.1/HemisphericLight)

Sets the passed [Effect](/classes/3.1/Effect) object with the [HemisphericLight](/classes/3.1/HemisphericLight) normalized direction and color and the passed name (string).

Returns the [HemisphericLight](/classes/3.1/HemisphericLight).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.1/Effect) | 
 | lightIndex | string | 
### getTypeID() &rarr; number

Returns the integer 3.
