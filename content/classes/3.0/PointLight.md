---
ID_PAGE: 25143
PG_TITLE: PointLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
## Description

class [PointLight](/classes/3.0/PointLight) extends [ShadowLight](/classes/3.0/ShadowLight)

A point light is a light defined by an unique point in world space.

The light is emitted in every direction from this point. A good example of a point light is the sun.

A tutorial about lights can be found here : https://doc.babylonjs.com/tutorials/lights

## Constructor

## new [PointLight](/classes/3.0/PointLight)(name, position, scene)

Creates a [PointLight](/classes/3.0/PointLight) object from the passed name and position ([Vector3](/classes/3.0/Vector3)) and adds it in the scene.

A [PointLight](/classes/3.0/PointLight) emits the light in every direction.

It can cast shadows.

If the scene camera is already defined and you want to set your [PointLight](/classes/3.0/PointLight) at the camera position, just set it :

```javascript

var pointLight = new BABYLON.[PointLight](/classes/3.0/PointLight)("pl", camera.position, scene);

```

Documentation : http://doc.babylonjs.com/tutorials/lights

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      The name of the object
 | position | [Vector3](/classes/3.0/Vector3) |      The position of the light in the scene
 | scene | [Scene](/classes/3.0/Scene) |      The scene to create the light into
## Members

### shadowAngle : number

Getter: In case of direction provided, the shadow will not use a cube texture but simulate a spot shadow as a fallback

This specifies what angle the shadow will use to be created.

It default to 90 degrees to work nicely with the cube texture generation for point lights shadow maps.

Setter: In case of direction provided, the shadow will not use a cube texture but simulate a spot shadow as a fallback

This specifies what angle the shadow will use to be created.

It default to 90 degrees to work nicely with the cube texture generation for point lights shadow maps.

### direction : [Vector3](/classes/3.0/Vector3)

In case of direction provided, the shadow will not use a cube texture but simulate a spot shadow as a fallback

## Methods

### getClassName() &rarr; string

Returns the string "[PointLight](/classes/3.0/PointLight)"
### getTypeID() &rarr; number

Returns the integer 0.
### needCube() &rarr; boolean

Specifies wether or not the shadowmap should be a cube texture.
### getShadowDirection(faceIndex) &rarr; [Vector3](/classes/3.0/Vector3)

Returns a new [Vector3](/classes/3.0/Vector3) aligned with the [PointLight](/classes/3.0/PointLight) cube system according to the passed cube face index (integer).

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | faceIndex | number |    

