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

### getScene() &rarr; [Scene](/classes/2.4/Scene)

Get the scene where the lens flare system is.
### getEmitter() &rarr; any

Get the emitter
### setEmitter(newEmitter) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | newEmitter | any |   

### getEmitterPosition() &rarr; [Vector3](/classes/2.4/Vector3)

Get the emitter position. Returns its absolute position if the emitter has an absolute position.
### computeEffectivePosition(globalViewport) &rarr; boolean

Compute the effective position

#### Parameters
 | Name | Type | Description
---|---|---|---
 | globalViewport | [Viewport](/classes/2.4/Viewport) |    The global viewport

### render() &rarr; boolean

Render the lens flare system
### dispose() &rarr; void


### static Parse(parsedLensFlareSystem, scene, rootUrl) &rarr; [LensFlareSystem](/classes/2.4/LensFlareSystem)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedLensFlareSystem | any |  
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) where the lens flare system is.
 | rootUrl | string |  
### serialize() &rarr; any


