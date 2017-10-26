---
ID_PAGE: 25141
PG_TITLE: DirectionalLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
## Description

class [DirectionalLight](/classes/3.1/DirectionalLight) extends [ShadowLight](/classes/3.1/ShadowLight)



## Constructor

## new [DirectionalLight](/classes/3.1/DirectionalLight)(name, direction, scene)

Creates a [DirectionalLight](/classes/3.1/DirectionalLight) object in the scene, oriented towards the passed direction ([Vector3](/classes/3.1/Vector3)).

The directional light is emitted from everywhere in the given direction.

It can cast shawdows.

Documentation : http://doc.babylonjs.com/tutorials/lights

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | direction | [Vector3](/classes/3.1/Vector3) | 
 | scene | [Scene](/classes/3.1/Scene) | 
## Members

### shadowFrustumSize : number

Fix frustum size for the shadow generation. This is disabled if the value is 0.

Specifies a fix frustum size for the shadow generation.

### shadowOrthoScale : number



### autoUpdateExtends : boolean



## Methods

### getClassName() &rarr; string

Returns the string "[DirectionalLight](/classes/3.1/DirectionalLight)".
### getTypeID() &rarr; number

Returns the integer 1.
### transferToEffect(effect, lightIndex) &rarr; [DirectionalLight](/classes/3.1/DirectionalLight)

Sets the passed [Effect](/classes/3.1/Effect) object with the [DirectionalLight](/classes/3.1/DirectionalLight) transformed position (or position if not parented) and the passed name.

Returns the [DirectionalLight](/classes/3.1/DirectionalLight).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.1/Effect) | 
 | lightIndex | string | 
### getDepthMinZ(activeCamera) &rarr; number

Gets the minZ used for shadow according to both the scene and the light.

         * Values are fixed on directional lights as it relies on an ortho projection hence the need to convert being

-1 and 1 to 0 and 1 doing (depth + min) / (min + max) -> (depth + 1) / (1 + 1) -> (depth * 0.5) + 0.5.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | activeCamera | [Camera](/classes/3.1/Camera) | 

### getDepthMaxZ(activeCamera) &rarr; number

Gets the maxZ used for shadow according to both the scene and the light.

         * Values are fixed on directional lights as it relies on an ortho projection hence the need to convert being

-1 and 1 to 0 and 1 doing (depth + min) / (min + max) -> (depth + 1) / (1 + 1) -> (depth * 0.5) + 0.5.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | activeCamera | [Camera](/classes/3.1/Camera) | 

