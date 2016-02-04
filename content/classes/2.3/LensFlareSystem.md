---
ID_PAGE: 25209
PG_TITLE: LensFlareSystem
PG_VERSION: 2.1
---
## Description

class [LensFlareSystem](/classes/2.3/LensFlareSystem)



## Constructor

##  new [LensFlareSystem](/classes/2.3/LensFlareSystem)(name, emitter, scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The name of the lens flare system
 | emitter | any |   The Emitter of the lens flare system : it can be a camera, a light or a mesh.
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) where the lens flare system is.
## Members

### name : string



### lensFlares : [LensFlare](/classes/2.3/LensFlare)[]



### borderLimit : number



### meshesSelectionPredicate : (mesh: [Mesh](/classes/2.3/Mesh)) =&gt; boolean



### layerMask : number



### isEnabled : boolean



## Methods

### getScene() &rarr; [Scene](/classes/2.3/Scene)


### getEmitter() &rarr; any


### setEmitter(newEmitter) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | newEmitter | any |  

### getEmitterPosition() &rarr; [Vector3](/classes/2.3/Vector3)


### computeEffectivePosition(globalViewport) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | globalViewport | [Viewport](/classes/2.3/Viewport) |   The global viewport

### render() &rarr; boolean


### dispose() &rarr; void


### static  Parse(parsedLensFlareSystem, scene, rootUrl) &rarr; [LensFlareSystem](/classes/2.3/LensFlareSystem)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedLensFlareSystem | any | 
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) where the lens flare system is.
 | rootUrl | string | 
### serialize() &rarr; any


