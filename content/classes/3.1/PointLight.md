---
ID_PAGE: 25143
PG_TITLE: PointLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
## Description

class [PointLight](/classes/3.1/PointLight) extends [ShadowLight](/classes/3.1/ShadowLight)



## Constructor

## new [PointLight](/classes/3.1/PointLight)(name, position, scene)

Creates a [PointLight](/classes/3.1/PointLight) object from the passed name and position ([Vector3](/classes/3.1/Vector3)) and adds it in the scene.

A [PointLight](/classes/3.1/PointLight) emits the light in every direction.

It can cast shadows.

If the scene camera is already defined and you want to set your [PointLight](/classes/3.1/PointLight) at the camera position, just set it :

```javascript

var pointLight = new BABYLON.[PointLight](/classes/3.1/PointLight)("pl", camera.position, scene);

```

Documentation : http://doc.babylonjs.com/tutorials/lights

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | position | [Vector3](/classes/3.1/Vector3) | 
 | scene | [Scene](/classes/3.1/Scene) | 
## Members

### shadowAngle : number

Getter: In case of direction provided, the shadow will not use a cube texture but simulate a spot shadow as a fallback

This specifies what angle the shadow will use to be created.

It default to 90 degrees to work nicely with the cube texture generation for point lights shadow maps.

Setter: In case of direction provided, the shadow will not use a cube texture but simulate a spot shadow as a fallback

This specifies what angle the shadow will use to be created.

It default to 90 degrees to work nicely with the cube texture generation for point lights shadow maps.

### direction : [Vector3](/classes/3.1/Vector3)

In case of direction provided, the shadow will not use a cube texture but simulate a spot shadow as a fallback

## Methods

### getClassName() &rarr; string

Returns the string "[PointLight](/classes/3.1/PointLight)"
### getTypeID() &rarr; number

Returns the integer 0.
### needCube() &rarr; boolean

Specifies wether or not the shadowmap should be a cube texture.
### getShadowDirection(faceIndex) &rarr; [Vector3](/classes/3.1/Vector3)

Returns a new [Vector3](/classes/3.1/Vector3) aligned with the [PointLight](/classes/3.1/PointLight) cube system according to the passed cube face index (integer).

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | faceIndex | number | 

### transferToEffect(effect, lightIndex) &rarr; [PointLight](/classes/3.1/PointLight)

Sets the passed [Effect](/classes/3.1/Effect) "effect" with the [PointLight](/classes/3.1/PointLight) transformed position (or position, if none) and passed name (string).

Returns the [PointLight](/classes/3.1/PointLight).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.1/Effect) | 
 | lightIndex | string | 
