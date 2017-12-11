---
ID_PAGE: 25274
PG_TITLE: ParticleSystem
PG_VERSION: 2.1
TAGS:
    - Particle
---
## Description

class [ParticleSystem](/classes/3.1/ParticleSystem)



## Constructor

## new [ParticleSystem](/classes/3.1/ParticleSystem)(name, capacity, scene, customEffect, _isAnimationSheetEnabled, epsilon)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | capacity | number | 
 | scene | [Scene](/classes/3.1/Scene) | 
optional | customEffect | [Effect](/classes/3.1/Effect) | 
optional | _isAnimationSheetEnabled | boolean | 
## Members

### name : string


### static BLENDMODE_ONEONE : number


### static BLENDMODE_STANDARD : number


### animations : [Animation](/classes/3.1/Animation)[]


### id : string


### renderingGroupId : number


### emitter : [AbstractMesh](/classes/3.1/AbstractMesh)


### [Vector3](/classes/3.1/Vector3) : undefined


### emitRate : number


### manualEmitCount : number


### updateSpeed : number


### targetStopDuration : number


### disposeOnStop : boolean


### minEmitPower : number


### maxEmitPower : number


### minLifeTime : number


### maxLifeTime : number


### minSize : number


### maxSize : number


### minAngularSpeed : number


### maxAngularSpeed : number


### particleTexture : [Texture](/classes/3.1/Texture)


### layerMask : number


### customShader : any


### preventAutoStart : boolean


### onDisposeObservable : [Observable](/classes/3.1/Observable)&lt;[ParticleSystem](/classes/3.1/ParticleSystem)&gt;

An event triggered when the system is disposed.

@type {BABYLON.[Observable](/classes/3.1/Observable)}
### onDispose : () =&gt; void


### updateFunction : (particles: [Particle](/classes/3.1/Particle)[]) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | particles | [Particle](/classes/3.1/Particle)[] | 

### onAnimationEnd : () =&gt; void


### blendMode : number


### forceDepthWrite : boolean


### gravity : [Vector3](/classes/3.1/Vector3)


### direction1 : [Vector3](/classes/3.1/Vector3)


### direction2 : [Vector3](/classes/3.1/Vector3)


### minEmitBox : [Vector3](/classes/3.1/Vector3)


### maxEmitBox : [Vector3](/classes/3.1/Vector3)


### color1 : [Color4](/classes/3.1/Color4)


### color2 : [Color4](/classes/3.1/Color4)


### colorDead : [Color4](/classes/3.1/Color4)


### textureMask : [Color4](/classes/3.1/Color4)


### startDirectionFunction : (emitPower: number, worldMatrix: [Matrix](/classes/3.1/Matrix), directionToUpdate: [Vector3](/classes/3.1/Vector3), particle: [Particle](/classes/3.1/Particle)) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | emitPower | number | 
 | worldMatrix | [Matrix](/classes/3.1/Matrix) | 
 | directionToUpdate | [Vector3](/classes/3.1/Vector3) | 
### startPositionFunction : (worldMatrix: [Matrix](/classes/3.1/Matrix), positionToUpdate: [Vector3](/classes/3.1/Vector3), particle: [Particle](/classes/3.1/Particle)) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | worldMatrix | [Matrix](/classes/3.1/Matrix) | 
 | positionToUpdate | [Vector3](/classes/3.1/Vector3) | 
 | particle | [Particle](/classes/3.1/Particle) | 
### startSpriteCellID : number


### endSpriteCellID : number


### spriteCellLoop : boolean


### spriteCellChangeSpeed : number


### spriteCellWidth : number


### spriteCellHeight : number


### isAnimationSheetEnabled : Boolean


### appendParticleVertexes : (offset: number, particle: [Particle](/classes/3.1/Particle)) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | offset | number | 
 | particle | [Particle](/classes/3.1/Particle) | 
## Methods

### recycleParticle(particle) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | particle | [Particle](/classes/3.1/Particle) | 

### getCapacity() &rarr; number


### isAlive() &rarr; boolean


### isStarted() &rarr; boolean


### start() &rarr; void


### stop() &rarr; void


### animate() &rarr; void


### rebuild() &rarr; void


### render() &rarr; number


### dispose() &rarr; void


### clone(name, newEmitter) &rarr; [ParticleSystem](/classes/3.1/ParticleSystem)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | newEmitter | any | 
### serialize() &rarr; any


### static Parse(parsedParticleSystem, scene, rootUrl) &rarr; [ParticleSystem](/classes/3.1/ParticleSystem)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedParticleSystem | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | rootUrl | string | 
