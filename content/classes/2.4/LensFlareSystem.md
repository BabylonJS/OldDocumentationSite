---
ID_PAGE: 25209
PG_TITLE: LensFlareSystem
PG_VERSION: 2.1
---
## Description

class [LensFlareSystem](/classes/2.4/LensFlareSystem)

Create a lens Flare system

## Constructor

## new [LensFlareSystem](/classes/2.4/LensFlareSystem)(name, emitter, scene)

The lens Flare system

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    The name of the lens flare system
 | emitter | any |    The Emitter of the lens flare system : it can be a camera, a light or a mesh.
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) where the lens flare system is.
## Members

### name : string

The name of the lens Flare system

### lensFlares : [LensFlare](/classes/2.4/LensFlare)[]

Lens flares array containing all lens flares

### borderLimit : number

Lens flare system border limit.

### meshesSelectionPredicate : (mesh: [Mesh](/classes/2.4/Mesh)) =&gt; boolean

Verify that a mesh can receive lens flares.

### layerMask : number



### id : string



### isEnabled : boolean

Lens flare system is enabled

## Methods

### getSceneundefined &rarr; [Scene](/classes/2.4/Scene)


### getEmitterundefined &rarr; any


### setEmitterundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getEmitterPositionundefined &rarr; [Vector3](/classes/2.4/Vector3)


### computeEffectivePositionundefined &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### renderundefined &rarr; boolean


### disposeundefined &rarr; void


### static Parseundefined &rarr; [LensFlareSystem](/classes/2.4/LensFlareSystem)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### serializeundefined &rarr; any


