---
ID_PAGE: 25141
PG_TITLE: DirectionalLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
## Description

class [DirectionalLight](/classes/2.4/DirectionalLight) extends [Light](/classes/2.4/Light)

A directional light is defined by a direction.

The light is emitted from everywhere with a specific direction and has an infinite range.

## Constructor

## new [DirectionalLight](/classes/2.4/DirectionalLight)(name, direction, scene)

Creates a [DirectionalLight](/classes/2.4/DirectionalLight) object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    The name of the object
 | direction | [Vector3](/classes/2.4/Vector3) |    The direction of the light
 | scene | [Scene](/classes/2.4/Scene) |    The scene to create the light into
## Members

### position : [Vector3](/classes/2.4/Vector3)

The position of the light, used to calculate shadows

### direction : [Vector3](/classes/2.4/Vector3)

The direction of the light

### transformedPosition : [Vector3](/classes/2.4/Vector3)



### shadowOrthoScale : number



### autoUpdateExtends : boolean



## Methods

### getAbsolutePositionundefined &rarr; [Vector3](/classes/2.4/Vector3)


### setDirectionToTargetundefined &rarr; [Vector3](/classes/2.4/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setShadowProjectionMatrixundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### supportsVSMundefined &rarr; boolean


### needRefreshPerFrameundefined &rarr; boolean


### needCubeundefined &rarr; boolean


### getShadowDirectionundefined &rarr; [Vector3](/classes/2.4/Vector3)



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


