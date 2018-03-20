---
PG_TITLE: How To Use Sub Emitters
---

# Sub Emitters

Normally when particle 'dies' it is recycled as a particle. Starting from Babylon.js v3.2, you can create sub emitters which let you spawn a new particle system when a particle dies. Each one of these spawned sub particle systems is totally independent from the parent.

**Note:** Sub emitters are NOT supported in GPU particles.

### How To Use Sub Emitters

The list of sub particle systems to be used as sub emitters is kept in an array and assigned top the new property `subEmitters` of the aprticle system. 

```javascript
particleSystem.subEmitters = [particleSystem0, particleSystem1, .....];
```

When a particle dies one of the particle systems in the array is selected at random as the one to be spawned. It is then cloned and rendered. Any element of the array can itself have `subEmitters` and hence a chain of sub emitters can be formed. In this case the property `manualEmitCount` could be used to avoid an infinite loop of creating and spawning new systems.

### Active Sub Systems
Each particle system with that has sub emitters also has a property `activeSubSystems` which is an array containing all currently active sub particle systems.

You can stop the root `ParticleSystem` and all `activeSubSystems` by calling the stop function on the root system:

```javascript
particleSystem.stop(); 
```

When you want to stop the root system without affecting the `activeSubSystems`, you pass false to the Stop function:

```javascript
particleSystem.stop(false);
```

* [Playground Example - Sub Emitters](https://www.babylonjs-playground.com/#9NHBCC#1)

# Further Reading

## Basic - L1

[Particles Overview](/features/Particles)  

[Particles 101](/babylon101/particles)

[How to Create Animated Particles](/how_to/Animate)  

[Solid Particle System](/How_To/Solid_Particles)

## Intermediate - L2
[How to Customize the Particle System](/how_to/Customise)

