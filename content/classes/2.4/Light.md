---
ID_PAGE: 25140
PG_TITLE: Light
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
## Description

class [Light](/classes/2.4/Light) extends [Node](/classes/2.4/Node)

Lights are used to produce the diffuse and specular color received by each pixel.

This color is then used by materials to determine the final color of every pixel.

Babylon.js allows you to create and register as many lights as you want but beware because the [StandardMaterial](/classes/2.4/StandardMaterial) can handle only 4 simultaneous lights (the first four enabled lights of the lights list)

A tutorial about lights can be found here

## Constructor

## new [Light](/classes/2.4/Light)(name, scene)

Creates a new [Light](/classes/2.4/Light) object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    The name of the object
 | scene | [Scene](/classes/2.4/Scene) |    The scene to append the light
## Members

### diffuse : [Color3](/classes/2.4/Color3)

The color of the diffuse reflection of the light

### specular : [Color3](/classes/2.4/Color3)

The color of the specular reflection of the light

### intensity : number

Controls the global intensity of the light

### range : number



### includeOnlyWithLayerMask : number



### includedOnlyMeshes : [AbstractMesh](/classes/2.4/AbstractMesh)[]

Holds the meshes affected by this light

### excludedMeshes : [AbstractMesh](/classes/2.4/AbstractMesh)[]

Holds the meshes non affected by this light

### excludeWithLayerMask : number



### radius : number



## Methods

### toStringundefined &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getShadowGeneratorundefined &rarr; [ShadowGenerator](/classes/2.4/ShadowGenerator)


### getAbsolutePositionundefined &rarr; [Vector3](/classes/2.4/Vector3)


### transferToEffectundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### canAffectMeshundefined &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getWorldMatrixundefined &rarr; [Matrix](/classes/2.4/Matrix)


### disposeundefined &rarr; void


### getTypeIDundefined &rarr; number


### cloneundefined &rarr; [Light](/classes/2.4/Light)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### serializeundefined &rarr; any


### static GetConstructorFromNameundefined &rarr; () =&gt; [Light](/classes/2.4/Light)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static Parseundefined &rarr; [Light](/classes/2.4/Light)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
