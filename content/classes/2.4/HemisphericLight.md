---
ID_PAGE: 25142
PG_TITLE: HemisphericLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
## Description

class [HemisphericLight](/classes/2.4/HemisphericLight) extends [Light](/classes/2.4/Light)

Hemispheric light represents a simple and easy way to simulate realistic ambient light.

An hemispheric light is defined by a direction to the sky and by 3 colors: one for the diffuse (the sky color), one for the ground (the color when the pixel is not towards the sky) and one for the specular.

A tutorial about lights can be found here

## Constructor

## new [HemisphericLight](/classes/2.4/HemisphericLight)(name, direction, scene)

Creates a new [HemisphericLight](/classes/2.4/HemisphericLight) object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    The namme of the light
 | direction | [Vector3](/classes/2.4/Vector3) |    The direction of the light
 | scene | [Scene](/classes/2.4/Scene) |    The scene to create the light into
## Members

### groundColor : [Color3](/classes/2.4/Color3)

The ground color

### direction : [Vector3](/classes/2.4/Vector3)

The direction of the light

## Methods

### setDirectionToTargetundefined &rarr; [Vector3](/classes/2.4/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getShadowGeneratorundefined &rarr; [ShadowGenerator](/classes/2.4/ShadowGenerator)


### transferToEffectundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getTypeIDundefined &rarr; number


