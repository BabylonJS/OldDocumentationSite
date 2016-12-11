---
ID_PAGE: 25141
PG_TITLE: DirectionalLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
## Description

class [DirectionalLight](/classes/2.5/DirectionalLight) extends [Light](/classes/2.5/Light)

A directional light is defined by a direction.

The light is emitted from everywhere with a specific direction and has an infinite range.

## Constructor

## new [DirectionalLight](/classes/2.5/DirectionalLight)(name, direction, scene)

Creates a [DirectionalLight](/classes/2.5/DirectionalLight) object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     The name of the object
 | direction | [Vector3](/classes/2.5/Vector3) |     The direction of the light
 | scene | [Scene](/classes/2.5/Scene) |     The scene to create the light into
## Members

### position : [Vector3](/classes/2.5/Vector3)

The position of the light, used to calculate shadows

### direction : [Vector3](/classes/2.5/Vector3)

The direction of the light

### transformedPosition : [Vector3](/classes/2.5/Vector3)



### shadowOrthoScale : number



### autoUpdateExtends : boolean



## Methods

### getAbsolutePosition() &rarr; [Vector3](/classes/2.5/Vector3)


### setDirectionToTarget(target) &rarr; [Vector3](/classes/2.5/Vector3)

Returns the normalized vector of the substraction between the given vector and the position of this light

#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](/classes/2.5/Vector3) |     The given target

### setShadowProjectionMatrix(matrix, viewMatrix, renderList) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.5/Matrix) |     
 | viewMatrix | [Matrix](/classes/2.5/Matrix) |     
 | renderList | Array&lt;[AbstractMesh](/classes/2.5/AbstractMesh)&gt; |     
### supportsVSM() &rarr; boolean


### needRefreshPerFrame() &rarr; boolean


### needCube() &rarr; boolean


### getShadowDirection(faceIndex) &rarr; [Vector3](/classes/2.5/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | faceIndex | number |   

### computeTransformedPosition() &rarr; boolean


### transferToEffect(effect, directionUniformName) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/2.5/Effect) |     The given effect
 | directionUniformName | string |     The uniform name
### getTypeID() &rarr; number


