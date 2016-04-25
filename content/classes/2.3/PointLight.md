---
ID_PAGE: 25143
PG_TITLE: PointLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
## Description

class [PointLight](/classes/2.3/PointLight) extends [Light](/classes/2.3/Light)

A point light is a light defined by an unique point in world space.

The light is emitted in every direction from this point. A good example of a point light is the sun.

A tutorial about lights can be found here

## Constructor

## new [PointLight](/classes/2.3/PointLight)(name, position, scene)

Creates a new [PointLight](/classes/2.3/PointLight) object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The name of the object
 | position | [Vector3](/classes/2.3/Vector3) |   The position of the light in the scene
 | scene | [Scene](/classes/2.3/Scene) |   The scene to create the light into
## Members

### position : [Vector3](/classes/2.3/Vector3)

The position of the emitting point

### transformedPosition : [Vector3](/classes/2.3/Vector3)



## Methods

### getAbsolutePosition() &rarr; [Vector3](/classes/2.3/Vector3)


### computeTransformedPosition() &rarr; boolean


### transferToEffect(effect, positionUniformName) &rarr; void

Gives the light to position with the given effect with given position name

#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/2.3/Effect) |   The given effect
 | positionUniformName | string |   The uniform name
### needCube() &rarr; boolean


### supportsVSM() &rarr; boolean


### needRefreshPerFrame() &rarr; boolean


### getShadowDirection(faceIndex) &rarr; [Vector3](/classes/2.3/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | faceIndex | number | 

### setShadowProjectionMatrix(matrix, viewMatrix, renderList) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.3/Matrix) | 
 | viewMatrix | [Matrix](/classes/2.3/Matrix) | 
 | renderList | Array&lt;[AbstractMesh](/classes/2.3/AbstractMesh)&gt; | 
### serialize() &rarr; any


