---
ID_PAGE: 25143
PG_TITLE: PointLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
## Description

class [PointLight](/classes/2.4/PointLight) extends [Light](/classes/2.4/Light)

A point light is a light defined by an unique point in world space.

The light is emitted in every direction from this point. A good example of a point light is the sun.

A tutorial about lights can be found here

## Constructor

## new [PointLight](/classes/2.4/PointLight)(name, position, scene)

Creates a new [PointLight](/classes/2.4/PointLight) object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    The name of the object
 | position | [Vector3](/classes/2.4/Vector3) |    The position of the light in the scene
 | scene | [Scene](/classes/2.4/Scene) |    The scene to create the light into
## Members

### transformedPosition : [Vector3](/classes/2.4/Vector3)



### position : [Vector3](/classes/2.4/Vector3)

The position of the emitting point

## Methods

### getAbsolutePositionundefined &rarr; [Vector3](/classes/2.4/Vector3)


### computeTransformedPositionundefined &rarr; boolean


### transferToEffectundefined &rarr; void



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
### setShadowProjectionMatrixundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getTypeIDundefined &rarr; number


