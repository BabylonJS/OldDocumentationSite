---
TAGS:
---
## Description

class [PhysicsRadialExplosionEvent](/classes/3.1/PhysicsRadialExplosionEvent)

Radial explosion *****/

## Constructor

## new [PhysicsRadialExplosionEvent](/classes/3.1/PhysicsRadialExplosionEvent)(scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.1/Scene) | 

## Methods

### getData() &rarr; PhysicsRadialExplosionEventData

Returns the data related to the radial explosion event (sphere & rays).

@returns {PhysicsRadialExplosionEventData}
### getImpostorForceAndContactPoint(impostor, origin, radius, strength, falloff) &rarr; Nullable&lt;PhysicsForceAndContactPoint&gt;

Returns the force and contact point of the impostor or false, if the impostor is not affected by the force/impulse.

@returns {Nullable<PhysicsForceAndContactPoint>}

#### Parameters
 | Name | Type | Description
---|---|---|---
 | impostor | [PhysicsImpostor](/classes/3.1/PhysicsImpostor) | 
 | origin | [Vector3](/classes/3.1/Vector3) | 
 | radius | number | 
 | strength | number | 
### dispose(force) &rarr; void

Disposes the sphere.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean | 

