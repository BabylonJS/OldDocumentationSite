---
ID_PAGE: 25144
PG_TITLE: SpotLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
## Description

class [SpotLight](/classes/2.3/SpotLight) extends [Light](/classes/2.3/Light)



## Constructor

##  new [SpotLight](/classes/2.3/SpotLight)(name, position, direction, angle, exponent, scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The name of the object
 | position | [Vector3](/classes/2.3/Vector3) |   The position of the light in the scene
 | direction | [Vector3](/classes/2.3/Vector3) |   The initial direction of the light
 | angle | number |   The initial angle of the light
 | exponent | number |   The initial exponent of the light
## Members

### position : [Vector3](/classes/2.3/Vector3)



### direction : [Vector3](/classes/2.3/Vector3)



### angle : number



### exponent : number



### transformedPosition : [Vector3](/classes/2.3/Vector3)



## Methods

### getAbsolutePosition() &rarr; [Vector3](/classes/2.3/Vector3)


### setShadowProjectionMatrix(matrix, viewMatrix, renderList) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.3/Matrix) |   
 | viewMatrix | [Matrix](/classes/2.3/Matrix) |   
 | renderList | Array&lt;[AbstractMesh](/classes/2.3/AbstractMesh)&gt; |   
### needCube() &rarr; boolean


### supportsVSM() &rarr; boolean


### needRefreshPerFrame() &rarr; boolean


### getShadowDirection(faceIndex) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | faceIndex | number | 

### setDirectionToTarget(target) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](/classes/2.3/Vector3) |   The given point

### computeTransformedPosition() &rarr; boolean


### transferToEffect(effect, positionUniformName, directionUniformName) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/2.3/Effect) |   The given effect
 | positionUniformName | string |   The uniform name
 | directionUniformName | string |   The direction of the uniform
### serialize() &rarr; any


