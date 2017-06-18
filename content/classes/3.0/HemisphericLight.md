---
ID_PAGE: 25142
PG_TITLE: HemisphericLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
## Description

class [HemisphericLight](/classes/3.0/HemisphericLight) extends [Light](/classes/3.0/Light)

Hemispheric light represents a simple and easy way to simulate realistic ambient light.

An hemispheric light is defined by a direction to the sky and by 3 colors: one for the diffuse (the sky color), one for the ground (the color when the pixel is not towards the sky) and one for the specular.

A tutorial about lights can be found here : https://doc.babylonjs.com/tutorials/lights

## Constructor

## new [HemisphericLight](/classes/3.0/HemisphericLight)(name, direction, scene)

Creates a [HemisphericLight](/classes/3.0/HemisphericLight) object in the scene according to the passed direction ([Vector3](/classes/3.0/Vector3)).

The [HemisphericLight](/classes/3.0/HemisphericLight) simulates the ambient environment light, so the passed direction is the light reflection direction, not the incoming direction.

The [HemisphericLight](/classes/3.0/HemisphericLight) can't cast shadows.

Documentation : http://doc.babylonjs.com/tutorials/lights

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      The namme of the light
 | direction | [Vector3](/classes/3.0/Vector3) |      The direction of the light
 | scene | [Scene](/classes/3.0/Scene) |      The scene to create the light into
## Members

### groundColor : [Color3](/classes/3.0/Color3)

The ground color

### direction : [Vector3](/classes/3.0/Vector3)

The direction of the light

