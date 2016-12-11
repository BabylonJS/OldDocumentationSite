---
TAGS:
---
## Description

class [SolidParticleSystem](/classes/2.5/SolidParticleSystem)

Full documentation here : http://doc.babylonjs.com/overviews/Solid_Particle_System

## Constructor

## new [SolidParticleSystem](/classes/2.5/SolidParticleSystem)(name, scene, options)

Creates a SPS (Solid [Particle](/classes/2.5/Particle) System) object.

`name` (String) is the SPS name, this will be the underlying mesh name.

`scene` ([Scene](/classes/2.5/Scene)) is the scene in which the SPS is added.

`updatable` (optional boolean, default true) : if the SPS must be updatable or immutable.

`isPickable` (optional boolean, default false) : if the solid particles must be pickable.

`particleIntersection` (optional boolean, default false) : if the solid particle intersections must be computed.

`boundingSphereOnly` (optional boolean, default false) : if the particle intersection must be computed only with the bounding sphere (no bounding box computation, so faster).

`bSphereRadiusFactor` (optional float, default 1.0) : a number to multiply the boundind sphere radius by in order to reduce it for instance.

 Example : bSphereRadiusFactor = 1.0 / Math.sqrt(3.0) => the bounding sphere exactly matches a spherical mesh.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    the SPS name, this will be the underlying mesh name
 | scene | [Scene](/classes/2.5/Scene) |   
optional | options | { updatable: boolean,  isPickable: boolean,  particleIntersection: boolean,  boundingSphereOnly: boolean,  bSphereRadiusFactor: number } |   
## Members

### particles : [SolidParticle](/classes/2.5/SolidParticle)[]

The SPS array of Solid [Particle](/classes/2.5/Particle) objects. Just access each particle as with any classic array.

 Example : var p = SPS.particles[i];

### nbParticles : number

The SPS total number of particles. Read only. Use SPS.counter instead if you need to set your own value.

### billboard : boolean

If the particles must ever face the camera (default false). Useful for planar particles.

### recomputeNormals : boolean

Recompute normals when adding a shape

### counter : number

This a counter ofr your own usage. It's not set by any SPS functions.

### name : string

The SPS name. This name is also given to the underlying mesh.

### mesh : [Mesh](/classes/2.5/Mesh)

The SPS mesh. It's a standard BJS [Mesh](/classes/2.5/Mesh), so all the methods from the [Mesh](/classes/2.5/Mesh) class are avalaible.

### vars : any

This empty object is intended to store some SPS specific or temporary values in order to lower the Garbage Collector activity.

Please read : http://doc.babylonjs.com/overviews/Solid_Particle_System#garbage-collector-concerns

### pickedParticles : { idx: number,  faceId: number }[]

This array is populated when the SPS is set as 'pickable'.

Each key of this array is a `faceId` value that you can get from a pickResult object.

Each element of this array is an object `{idx: int, faceId: int}`.

`idx` is the picked particle index in the `SPS.particles` array

`faceId` is the picked face index counted within this particle.

Please read : http://doc.babylonjs.com/overviews/Solid_Particle_System#pickable-particles

### isAlwaysVisible : boolean

Sets the SPS as always visible or not

doc : http://doc.babylonjs.com/overviews/Solid_Particle_System#sps-visibility

### isVisibilityBoxLocked : boolean

Sets the SPS visibility box as locked or not. This enables/disables the underlying mesh bounding box updates.

doc : http://doc.babylonjs.com/overviews/Solid_Particle_System#sps-visibility

### computeParticleRotation : boolean

Tells to `setParticles()` to compute the particle rotations or not.

Default value : true. The SPS is faster when it's set to false.

Note : the particle rotations aren't stored values, so setting `computeParticleRotation` to false will prevents the particle to rotate.

### computeParticleColor : boolean

Tells to `setParticles()` to compute the particle colors or not.

Default value : true. The SPS is faster when it's set to false.

Note : the particle colors are stored values, so setting `computeParticleColor` to false will keep yet the last colors set.

### computeParticleTexture : boolean

Tells to `setParticles()` to compute the particle textures or not.

Default value : true. The SPS is faster when it's set to false.

Note : the particle textures are stored values, so setting `computeParticleTexture` to false will keep yet the last colors set.

### computeParticleVertex : boolean

Tells to `setParticles()` to call the vertex function for each vertex of each particle, or not.

Default value : false. The SPS is faster when it's set to false.

Note : the particle custom vertex positions aren't stored values.

### computeBoundingBox : boolean

Tells to `setParticles()` to compute or not the mesh bounding box when computing the particle positions.

## Methods

### buildMesh() &rarr; [Mesh](/classes/2.5/Mesh)

Builds the SPS underlying mesh. Returns a standard [Mesh](/classes/2.5/Mesh).

If no model shape was added to the SPS, the returned mesh is just a single triangular plane.
### digest(mesh, options) &rarr; [SolidParticleSystem](/classes/2.5/SolidParticleSystem)

Digests the mesh and generates as many solid particles in the system as wanted. Returns the SPS.

These particles will have the same geometry than the mesh parts and will be positioned at the same localisation than the mesh original places.

Thus the particles generated from `digest()` have their property `position` set yet.

`mesh` ( [Mesh](/classes/2.5/Mesh) ) is the mesh to be digested

`facetNb` (optional integer, default 1) is the number of mesh facets per particle, this parameter is overriden by the parameter `number` if any

`delta` (optional integer, default 0) is the random extra number of facets per particle , each particle will have between `facetNb` and `facetNb + delta` facets

`number` (optional positive integer) is the wanted number of particles : each particle is built with `mesh_total_facets / number` facets

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.5/Mesh) |    any [Mesh](/classes/2.5/Mesh) object that will be used as a model for the solid particles.
optional | options | { facetNb: number,  number: number,  delta: number } |   
### addShape(mesh, nb, options) &rarr; number

Adds some particles to the SPS from the model shape. Returns the shape id.

Please read the doc : http://doc.babylonjs.com/overviews/Solid_Particle_System#create-an-immutable-sps

`mesh` is any [Mesh](/classes/2.5/Mesh) object that will be used as a model for the solid particles.

`nb` (positive integer) the number of particles to be created from this model

`positionFunction` is an optional javascript function to called for each particle on SPS creation.

`vertexFunction` is an optional javascript function to called for each vertex of each particle on SPS creation

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.5/Mesh) |    any [Mesh](/classes/2.5/Mesh) object that will be used as a model for the solid particles.
 | nb | number |    the number of particles to be created from this model
optional | options | { positionFunction: any,  vertexFunction: any } |   
### rebuildMesh() &rarr; void

Rebuilds the whole mesh and updates the VBO : custom positions and vertices are recomputed if needed.
### setParticles(start, end, update) &rarr; void

Sets all the particles : this method actually really updates the mesh according to the particle positions, rotations, colors, textures, etc.

 This method calls `updateParticle()` for each particle of the SPS.

 For an animated SPS, it is usually called within the render loop.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | start | number |  The particle index in the particle array where to start to compute the particle property values _(default 0)_  the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()  the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()
optional | end | number |  The particle index in the particle array where to stop to compute the particle property values _(default nbParticle - 1)_  The particle index in the particle array where to stop to compute the particle property values _(default nbParticle - 1)_  (default nbParticle - 1)  the particle index in the particle array where to stop to compute the particle property values
optional | update | boolean |  If the mesh must be finally updated on this call after all the particle computations _(default true)_  the boolean update value actually passed to setParticles()  the boolean update value actually passed to setParticles()
### dispose() &rarr; void

Disposes the SPS
### refreshVisibleSize() &rarr; void

Visibilty helper : Recomputes the visible size according to the mesh bounding box

doc : http://doc.babylonjs.com/overviews/Solid_Particle_System#sps-visibility
### setVisibilityBox(size) &rarr; void

Visibility helper : Sets the size of a visibility box, this sets the underlying mesh bounding box.

note : this doesn't lock the SPS mesh bounding box.

doc : http://doc.babylonjs.com/overviews/Solid_Particle_System#sps-visibility

#### Parameters
 | Name | Type | Description
---|---|---|---
 | size | number |  the size (float) of the visibility box  the size (float) of the visibility box  the size (float) of the visibility box

### initParticles() &rarr; void

This function does nothing. It may be overwritten to set all the particle first values.

The SPS doesn't call this function, you may have to call it by your own.

doc : http://doc.babylonjs.com/overviews/Solid_Particle_System#particle-management
### recycleParticle(particle) &rarr; [SolidParticle](/classes/2.5/SolidParticle)

This function does nothing. It may be overwritten to recycle a particle.

The SPS doesn't call this function, you may have to call it by your own.

doc : http://doc.babylonjs.com/overviews/Solid_Particle_System#particle-management

#### Parameters
 | Name | Type | Description
---|---|---|---
 | particle | [SolidParticle](/classes/2.5/SolidParticle) |   the current particle  the current particle

### updateParticle(particle) &rarr; [SolidParticle](/classes/2.5/SolidParticle)

Updates a particle : this function should  be overwritten by the user.

It is called on each particle by `setParticles()`. This is the place to code each particle behavior.

doc : http://doc.babylonjs.com/overviews/Solid_Particle_System#particle-management

ex : just set a particle position or velocity and recycle conditions

#### Parameters
 | Name | Type | Description
---|---|---|---
 | particle | [SolidParticle](/classes/2.5/SolidParticle) |   the current particle  the current particle

### updateParticleVertex(particle, vertex, pt) &rarr; [Vector3](/classes/2.5/Vector3)

Updates a vertex of a particle : it can be overwritten by the user.

This will be called on each vertex particle by `setParticles()` if `computeParticleVertex` is set to true only.

doc : http://doc.babylonjs.com/overviews/Solid_Particle_System#update-each-particle-shape

ex : just set a vertex particle position

#### Parameters
 | Name | Type | Description
---|---|---|---
 | particle | [SolidParticle](/classes/2.5/SolidParticle) |  the current particle  the current particle  the current particle
 | vertex | [Vector3](/classes/2.5/Vector3) |  the current index of the current particle  the current index of the current particle  the current index of the current particle
 | pt | number |  the index of the current vertex in the particle shape  the index of the current vertex in the particle shape  the index of the current vertex in the particle shape
### beforeUpdateParticles(start, stop, update) &rarr; void

This will be called before any other treatment by `setParticles()` and will be passed three parameters.

This does nothing and may be overwritten by the user.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | start | number |  the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()  the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()  the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()
optional | stop | number |  the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()  the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()  the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()
optional | update | boolean |  the boolean update value actually passed to setParticles()  the boolean update value actually passed to setParticles()  the boolean update value actually passed to setParticles()
### afterUpdateParticles(start, stop, update) &rarr; void

This will be called  by `setParticles()` after all the other treatments and just before the actual mesh update.

This will be passed three parameters.

This does nothing and may be overwritten by the user.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | start | number |  the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()  the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()  the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()
optional | stop | number |  the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()  the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()  the particle index in the particle array where to stop to iterate, same than the value passed to setParticle()
optional | update | boolean |  the boolean update value actually passed to setParticles()  the boolean update value actually passed to setParticles()  the boolean update value actually passed to setParticles()
