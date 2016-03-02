---
TAGS:
---
## Description

class [SolidParticleSystem](/classes/2.3/SolidParticleSystem)

Full documentation here : http://doc.babylonjs.com/tutorials/Solid_Particle_System

## Constructor

## new [SolidParticleSystem](/classes/2.3/SolidParticleSystem)(name, scene, options)

Creates a SPS (Solid [Particle](/classes/2.3/Particle) System) object.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  the SPS name, this will be the underlying mesh name
 | scene | [Scene](/classes/2.3/Scene) | 
optional | options | { updatable: boolean,  isPickable: boolean } | 
## Members

### particles : [SolidParticle](/classes/2.3/SolidParticle)[]



### nbParticles : number



### billboard : boolean



### counter : number



### name : string



### mesh : [Mesh](/classes/2.3/Mesh)



### vars : any



### pickedParticles : { idx: number,  faceId: number }[]



### isAlwaysVisible : boolean

True if the SPS is set as always visible



Sets the SPS as always visible or not

doc : http://doc.babylonjs.com/tutorials/Solid_Particle_System#sps-visibility

### isVisibilityBoxLocked : boolean

True if the SPS visibility box is locked. The underlying mesh bounding box is then not updatable any more.



Sets the SPS visibility box as locked or not. This enables/disables the underlying mesh bounding box updates.

doc : http://doc.babylonjs.com/tutorials/Solid_Particle_System#sps-visibility

### computeParticleRotation : boolean

Tells to setParticle() to compute the particle rotations or not.

Default value : true. The SPS is faster when it's set to false.

Note : the particle rotations aren't stored values, so setting computeParticleRotation to false will prevents the particle to rotate.

### computeParticleColor : boolean

Tells to setParticle() to compute the particle colors or not.

Default value : true. The SPS is faster when it's set to false.

Note : the particle colors are stored values, so setting computeParticleColor to false will keep yet the last colors set.

### computeParticleTexture : boolean

Tells to setParticle() to compute the particle textures or not.

Default value : true. The SPS is faster when it's set to false.

Note : the particle textures are stored values, so setting computeParticleTexture to false will keep yet the last colors set.

### computeParticleVertex : boolean

Tells to setParticle() to call the vertex function for each vertex of each particle, or not.

Default value : false. The SPS is faster when it's set to false.

Note : the particle custom vertex positions aren't stored values.

## Methods

### buildMesh() &rarr; [Mesh](/classes/2.3/Mesh)

Builds the SPS underlying mesh. Returns a standard [Mesh](/classes/2.3/Mesh).

If no model shape was added to the SPS, the return mesh is only a single triangular plane.
### addShape(mesh, nb, options) &rarr; number

Adds some particles to the SPS from the model shape.

Please read the doc : http://doc.babylonjs.com/tutorials/Solid_Particle_System#create-an-immutable-sps

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.3/Mesh) |  any [Mesh](/classes/2.3/Mesh) object that will be used as a model for the solid particles.
 | nb | number |  the number of particles to be created from this model
optional | options | { positionFunction: any,  vertexFunction: any } | 
### rebuildMesh() &rarr; void

Rebuilds the whole mesh and updates the VBO : custom positions and vertices are recomputed if needed.
### setParticles(start, end, update) &rarr; void

Sets all the particles : this method actually really updates the mesh according to the particle positions, rotations, colors, textures, etc.

 This method calls updateParticle() for each particles of the SPS.

 For an animated SPS, it is usually called within the render loop.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | start | number |  (default 0) the particle index in the particle array where to start to compute the particle property values
optional | end | number |  (default nbParticle - 1)  the particle index in the particle array where to stop to compute the particle property values
optional | update | boolean |  (default true) if the mesh must be finally updated on this call after all the particle computations.
### dispose() &rarr; void

Disposes the SPS
### refreshVisibleSize() &rarr; void

Visibilty helper : Recomputes the visible size according to the mesh bounding box

doc : http://doc.babylonjs.com/tutorials/Solid_Particle_System#sps-visibility
### setVisibilityBox(size) &rarr; void

note : this doesn't lock the SPS mesh bounding box.

doc : http://doc.babylonjs.com/tutorials/Solid_Particle_System#sps-visibility

#### Parameters
 | Name | Type | Description
---|---|---|---
 | size | number |  the size (float) of the visibility box

### initParticles() &rarr; void

This function does nothing. It may be overwritten to set all the particles first values.

The SPS doesn't call this function, you may have to call it by your own.

doc : http://doc.babylonjs.com/tutorials/Solid_Particle_System#particle-management
### recycleParticle(particle) &rarr; [SolidParticle](/classes/2.3/SolidParticle)

This function does nothing. It may be overwritten to recycle a particle.

The SPS doesn't call this function, you may have to call it by your own.

doc : http://doc.babylonjs.com/tutorials/Solid_Particle_System#particle-management

#### Parameters
 | Name | Type | Description
---|---|---|---
 | particle | [SolidParticle](/classes/2.3/SolidParticle) | 

### updateParticle(particle) &rarr; [SolidParticle](/classes/2.3/SolidParticle)

Updates a particle : this function should  be overwritten by the user.

It is called on each particle by setParticles(). This is the place to code each particle behavior.

doc : http://doc.babylonjs.com/tutorials/Solid_Particle_System#particle-management

ex : just set a particle position or velocity and recycle conditions

#### Parameters
 | Name | Type | Description
---|---|---|---
 | particle | [SolidParticle](/classes/2.3/SolidParticle) | 

### updateParticleVertex(particle, vertex, pt) &rarr; [Vector3](/classes/2.3/Vector3)

Updates a vertex of a particle : it can be overwritten by the user.

This will be called on each vertex particle by setParticles() if computeParticleVertex is set to true only.

doc : http://doc.babylonjs.com/tutorials/Solid_Particle_System#update-each-particle-shape

ex : just set a vertex particle position

#### Parameters
 | Name | Type | Description
---|---|---|---
 | particle | [SolidParticle](/classes/2.3/SolidParticle) |  the current particle
 | vertex | [Vector3](/classes/2.3/Vector3) |  the current index of the current particle
 | pt | number |  the index of the current vertex in the particle shape
### beforeUpdateParticles(start, stop, update) &rarr; void

This will be called before any other treatment by setParticles() and will be passed three parameters.

This does nothing and may be overwritten by the user.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | start | number |  the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()
optional | stop | number |  the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()
optional | update | boolean |  the boolean update value actually passed to setParticles()
### afterUpdateParticles(start, stop, update) &rarr; void

This will be called  by setParticles() after all the other treatments and just before the actual mesh update.

This will be passed three parameters.

This does nothing and may be overwritten by the user.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | start | number |  the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()
optional | stop | number |  the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()
optional | update | boolean |  the boolean update value actually passed to setParticles()
