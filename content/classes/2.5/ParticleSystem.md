---
ID_PAGE: 25274
PG_TITLE: ParticleSystem
PG_VERSION: 2.1
TAGS:
    - Particle
---
## Description

class [ParticleSystem](/classes/2.5/ParticleSystem)



## Constructor

## new [ParticleSystem](/classes/2.5/ParticleSystem)(name, capacity, scene, customEffect)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     The name of the cloned [ParticleSystem](/classes/2.5/ParticleSystem)
 | capacity | number |     The total number of particles contained into the particle system
 | scene | [Scene](/classes/2.5/Scene) |     The scene of the particle system
## Members

### name : string

The particle system name

### static BLENDMODE_ONEONE : number

The source color is added to the destination color without alpha affecting the result

### static BLENDMODE_STANDARD : number

Blend current color and particle color using particle&rsquo;s alpha

### animations : [Animation](/classes/2.5/Animation)[]



### id : string

The particle system id

### renderingGroupId : number

The rendering group ID. default : 0

### emitter : any

The particle emitter, where the particle comes from

### emitRate : number

The particle emit rate. default : 10

### manualEmitCount : number

Emit only a specific number of particles at once, in a &quot;one shot&quot;

### updateSpeed : number

The overall motion speed default : 0.01

### targetStopDuration : number

The amount of time the particle system is running

### disposeOnStop : boolean

Disposes (or not) the particle system on stop

### minEmitPower : number

Minimum power of emitting particles

### maxEmitPower : number

Maximum power of emitting particles

### minLifeTime : number

Minimum life time of particle

### maxLifeTime : number

Maximum life time of particle

### minSize : number

Minimum size of particle

### maxSize : number

Maximum size of particle

### minAngularSpeed : number

Minimum angular speed of particle in radian

### maxAngularSpeed : number

Maximum angular speed of particle in radian

### particleTexture : [Texture](/classes/2.5/Texture)

The particle texture

### layerMask : number



### onDisposeObservable : [Observable](/classes/2.5/Observable)&lt;[ParticleSystem](/classes/2.5/ParticleSystem)&gt;

An event triggered when the system is disposed.

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### onDispose : () =&gt; void

The action to perform on dispose

### updateFunction : (particles: [Particle](/classes/2.5/Particle)[]) =&gt; void



### blendMode : number

The selected mode for particles : BLENDMODE_ONEONE or BLENDMODE_STANDARD

### forceDepthWrite : boolean

default : false

### gravity : [Vector3](/classes/2.5/Vector3)

The gravity of the particle to give an orientation to the particle

### direction1 : [Vector3](/classes/2.5/Vector3)

Random direction of each particle emitted between direction1 and direction2

### direction2 : [Vector3](/classes/2.5/Vector3)

Random direction of each particle emitted between direction1 and direction2

### minEmitBox : [Vector3](/classes/2.5/Vector3)

Begining of the box emitting the particles

### maxEmitBox : [Vector3](/classes/2.5/Vector3)

Ending of the box emitting the particles

### color1 : [Color4](/classes/2.5/Color4)

First color to be combined to produce the particle color

### color2 : [Color4](/classes/2.5/Color4)

Second color to be combined to produce the particle color

### colorDead : [Color4](/classes/2.5/Color4)

Color taken by the particle just before it disappears

### textureMask : [Color4](/classes/2.5/Color4)

Mask used to filter a texture color

### startDirectionFunction : (emitPower: number, worldMatrix: [Matrix](/classes/2.5/Matrix), directionToUpdate: [Vector3](/classes/2.5/Vector3), particle: [Particle](/classes/2.5/Particle)) =&gt; void



### startPositionFunction : (worldMatrix: [Matrix](/classes/2.5/Matrix), positionToUpdate: [Vector3](/classes/2.5/Vector3), particle: [Particle](/classes/2.5/Particle)) =&gt; void



## Methods

### recycleParticle(particle) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | particle | [Particle](/classes/2.5/Particle) |     

### getCapacity() &rarr; number

Returns the capacity of the particle system
### isAlive() &rarr; boolean

Returns if the particle system is alive
### isStarted() &rarr; boolean

Returns if the particle system is started
### start() &rarr; void

Starts the particle system
### stop() &rarr; void

Stops the particle system
### animate() &rarr; void

Animates the particle system
### render() &rarr; number


### dispose() &rarr; void

Destroyes this particle system
### clone(name, newEmitter) &rarr; [ParticleSystem](/classes/2.5/ParticleSystem)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     The name of the cloned [ParticleSystem](/classes/2.5/ParticleSystem)
 | newEmitter | any |     The given new emitter
### serialize() &rarr; any


### static Parse(parsedParticleSystem, scene, rootUrl) &rarr; [ParticleSystem](/classes/2.5/ParticleSystem)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedParticleSystem | any |   
 | scene | [Scene](/classes/2.5/Scene) |     The scene of the particle system
 | rootUrl | string |   
