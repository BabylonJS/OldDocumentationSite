---
ID_PAGE: 25142
PG_TITLE: HemisphericLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
## Description

class [HemisphericLight](/classes/2.3/HemisphericLight) extends [Light](/classes/2.3/Light)



## Constructor

##  new [HemisphericLight](/classes/2.3/HemisphericLight)(name, direction, scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The namme of the light
 | direction | [Vector3](/classes/2.3/Vector3) |   The direction of the light
 | scene | [Scene](/classes/2.3/Scene) |   The scene to create the light into
## Members

### direction : [Vector3](/classes/2.3/Vector3)



### groundColor : [Color3](/classes/2.3/Color3)



## Methods

### setDirectionToTarget(target) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](/classes/2.3/Vector3) |   The given target to lighten

### getShadowGenerator() &rarr; [ShadowGenerator](/classes/2.3/ShadowGenerator)


### transferToEffect(effect, directionUniformName, groundColorUniformName) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/2.3/Effect) |   The given effect
 | directionUniformName | string |   The direction uniform name
 | groundColorUniformName | string |   The groundColor uniform name
### serialize() &rarr; any


