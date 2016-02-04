---
ID_PAGE: 25274
PG_TITLE: ParticleSystem
PG_VERSION: 2.1
TAGS:
    - Particle
---
## Description

class [ParticleSystem](/classes/2.3/ParticleSystem)



## Constructor

##  new [ParticleSystem](/classes/2.3/ParticleSystem)(name, capacity, scene, customEffect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The name of the cloned [ParticleSystem](/classes/2.3/ParticleSystem)
 | capacity | number |   The total number of particles contained into the particle system
 | scene | [Scene](/classes/2.3/Scene) |   The scene of the particle system
## Members

### name : string



### static  BLENDMODE_ONEONE : number



### static  BLENDMODE_STANDARD : number



### id : string



### renderingGroupId : number



### emitter : any



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



### particleTexture : [Texture](/classes/2.3/Texture)



### layerMask : number



### onDispose : () =&gt; void



### updateFunction : (particles: [Particle](/classes/2.3/Particle)[]) =&gt; void



### blendMode : number



### forceDepthWrite : boolean



### gravity : [Vector3](/classes/2.3/Vector3)



### direction1 : [Vector3](/classes/2.3/Vector3)



### direction2 : [Vector3](/classes/2.3/Vector3)



### minEmitBox : [Vector3](/classes/2.3/Vector3)



### maxEmitBox : [Vector3](/classes/2.3/Vector3)



### color1 : [Color4](/classes/2.3/Color4)



### color2 : [Color4](/classes/2.3/Color4)



### colorDead : [Color4](/classes/2.3/Color4)



### textureMask : [Color4](/classes/2.3/Color4)



### startDirectionFunction : (emitPower: number, worldMatrix: [Matrix](/classes/2.3/Matrix), directionToUpdate: [Vector3](/classes/2.3/Vector3), particle: [Particle](/classes/2.3/Particle)) =&gt; void



### startPositionFunction : (worldMatrix: [Matrix](/classes/2.3/Matrix), positionToUpdate: [Vector3](/classes/2.3/Vector3), particle: [Particle](/classes/2.3/Particle)) =&gt; void



## Methods

### recycleParticle(particle) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | particle | [Particle](/classes/2.3/Particle) |   

### getCapacity() &rarr; number


### isAlive() &rarr; boolean


### isStarted() &rarr; boolean


### start() &rarr; void


### stop() &rarr; void


### animate() &rarr; void


### render() &rarr; number


### dispose() &rarr; void


### clone(name, newEmitter) &rarr; [ParticleSystem](/classes/2.3/ParticleSystem)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The name of the cloned [ParticleSystem](/classes/2.3/ParticleSystem)
 | newEmitter | any |   The given new emitter
### serialize() &rarr; any


### static  Parse(parsedParticleSystem, scene, rootUrl) &rarr; [ParticleSystem](/classes/2.3/ParticleSystem)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedParticleSystem | any | 
 | scene | [Scene](/classes/2.3/Scene) |   The scene of the particle system
 | rootUrl | string | 
