---
TAGS:
---
## Description

class [SolidParticle](/classes/3.0/SolidParticle)



## Constructor

## new [SolidParticle](/classes/3.0/SolidParticle)(particleIndex, positionIndex, model, shapeId, idxInShape, sps, modelBoundingInfo)

Creates a Solid [Particle](/classes/3.0/Particle) object.

Don't create particles manually, use instead the Solid [Particle](/classes/3.0/Particle) System internal tools like _addParticle()

`particleIndex` (integer) is the particle index in the Solid [Particle](/classes/3.0/Particle) System pool. It's also the particle identifier.

`positionIndex` (integer) is the starting index of the particle vertices in the SPS "positions" array.

 `model` ([ModelShape](/classes/3.0/ModelShape)) is a reference to the model shape on what the particle is designed.

`shapeId` (integer) is the model shape identifier in the SPS.

`idxInShape` (integer) is the index of the particle in the current model (ex: the 10th box of addShape(box, 30))

`modelBoundingInfo` is the reference to the model [BoundingInfo](/classes/3.0/BoundingInfo) used for intersection computations.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | particleIndex | number |    
 | positionIndex | number |    
 | model | [ModelShape](/classes/3.0/ModelShape) |    
 | shapeId | number |    
 | idxInShape | number |  
 | sps | [SolidParticleSystem](/classes/3.0/SolidParticleSystem) |  
## Members

### idx : number



### color : [Color4](/classes/3.0/Color4)



### position : [Vector3](/classes/3.0/Vector3)



### rotation : [Vector3](/classes/3.0/Vector3)



### rotationQuaternion : [Quaternion](/classes/3.0/Quaternion)



### scaling : [Vector3](/classes/3.0/Vector3)



### uvs : [Vector4](/classes/3.0/Vector4)



### velocity : [Vector3](/classes/3.0/Vector3)



### alive : boolean



### isVisible : boolean



### shapeId : number



### idxInShape : number



### scale : [Vector3](/classes/3.0/Vector3)

legacy support, changed scale to scaling

### quaternion : [Quaternion](/classes/3.0/Quaternion)

legacy support, changed quaternion to rotationQuaternion

## Methods

### intersectsMesh(target, [SolidParticle](/classes/3.0/SolidParticle)) &rarr; boolean

Returns a boolean. True if the particle intersects another particle or another mesh, else false.

The intersection is computed on the particle bounding sphere and [Axis](/classes/3.0/Axis) Aligned Bounding [Box](/classes/3.0/Box) (AABB)

`target` is the object (solid particle or mesh) what the intersection is computed against.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Mesh](/classes/3.0/Mesh) or [SolidParticle](/classes/3.0/SolidParticle) |  
