---
TAGS:
---
## Description

class [GPUParticleSystem](/classes/3.1/GPUParticleSystem)



## Constructor

## new [GPUParticleSystem](/classes/3.1/GPUParticleSystem)(name, capacity, scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | capacity | number | 
 | scene | [Scene](/classes/3.1/Scene) | 
## Members

### name : string



### id : string



### emitter : [AbstractMesh](/classes/3.1/AbstractMesh)



### [Vector3](/classes/3.1/Vector3) : undefined



### renderingGroupId : number



### layerMask : number



### onDisposeObservable : [Observable](/classes/3.1/Observable)&lt;[GPUParticleSystem](/classes/3.1/GPUParticleSystem)&gt;

An event triggered when the system is disposed.

@type {BABYLON.[Observable](/classes/3.1/Observable)}

## Methods

### isStarted() &rarr; boolean


### animate() &rarr; void


### render() &rarr; number


### rebuild() &rarr; void


### dispose() &rarr; void


### clone(name, newEmitter) &rarr; [GPUParticleSystem](/classes/3.1/GPUParticleSystem)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | newEmitter | any | 
### serialize() &rarr; any


