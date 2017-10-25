---
ID_PAGE: 25141
PG_TITLE: DirectionalLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
## Description

class [DirectionalLight](/classes/3.0/DirectionalLight) extends [ShadowLight](/classes/3.0/ShadowLight)

A directional light is defined by a direction.

The light is emitted from everywhere with a specific direction and has an infinite range.

## Constructor

## new [DirectionalLight](/classes/3.0/DirectionalLight)(name, direction, scene)

Creates a [DirectionalLight](/classes/3.0/DirectionalLight) object in the scene, oriented towards the passed direction ([Vector3](/classes/3.0/Vector3)).

The directional light is emitted from everywhere in the given direction.

It can cast shawdows.

Documentation : http://doc.babylonjs.com/How_To/lights

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      The name of the object
 | direction | [Vector3](/classes/3.0/Vector3) |      The direction of the light
 | scene | [Scene](/classes/3.0/Scene) |      The scene to create the light into
## Members

### shadowFrustumSize : number

Fix frustum size for the shadow generation. This is disabled if the value is 0.

Specifies a fix frustum size for the shadow generation.

### shadowOrthoScale : number



### autoUpdateExtends : boolean



## Methods

### getClassName() &rarr; string

Returns the string "[DirectionalLight](/classes/3.0/DirectionalLight)".
### getTypeID() &rarr; number

Returns the integer 1.
### transferToEffect(effect, lightIndex) &rarr; [DirectionalLight](/classes/3.0/DirectionalLight)

Sets the passed [Effect](/classes/3.0/Effect) object with the [DirectionalLight](/classes/3.0/DirectionalLight) transformed position (or position if not parented) and the passed name.

Returns the [DirectionalLight](/classes/3.0/DirectionalLight).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.0/Effect) |      The given effect
 | lightIndex | string | 
