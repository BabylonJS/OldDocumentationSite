---
ID_PAGE: 25209
PG_TITLE: LensFlareSystem
PG_VERSION: 2.1
---
## Description

class [LensFlareSystem](/classes/3.1/LensFlareSystem)



## Constructor

## new [LensFlareSystem](/classes/3.1/LensFlareSystem)(name, emitter, scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | emitter | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
## Members

### name : string


### lensFlares : [LensFlare](/classes/3.1/LensFlare)[]


### borderLimit : number


### viewportBorder : number


### meshesSelectionPredicate : (mesh: [AbstractMesh](/classes/3.1/AbstractMesh)) =&gt; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 

### layerMask : number


### id : string


### isEnabled : boolean


## Methods

### getScene() &rarr; [Scene](/classes/3.1/Scene)


### getEmitter() &rarr; any


### setEmitter(newEmitter) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | newEmitter | any | 

### getEmitterPosition() &rarr; [Vector3](/classes/3.1/Vector3)


### computeEffectivePosition(globalViewport) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | globalViewport | [Viewport](/classes/3.1/Viewport) | 

### render() &rarr; boolean


### dispose() &rarr; void


### static Parse(parsedLensFlareSystem, scene, rootUrl) &rarr; [LensFlareSystem](/classes/3.1/LensFlareSystem)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedLensFlareSystem | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | rootUrl | string | 
### serialize() &rarr; any


