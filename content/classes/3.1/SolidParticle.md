---
TAGS:
---
## Description

class [SolidParticle](/classes/3.1/SolidParticle)



## Constructor

## new [SolidParticle](/classes/3.1/SolidParticle)(particleIndex, positionIndex, indiceIndex, model, shapeId, idxInShape, sps, modelBoundingInfo)

Creates a Solid [Particle](/classes/3.1/Particle) object.

Don't create particles manually, use instead the Solid [Particle](/classes/3.1/Particle) System internal tools like _addParticle()

`particleIndex` (integer) is the particle index in the Solid [Particle](/classes/3.1/Particle) System pool. It's also the particle identifier.

`positionIndex` (integer) is the starting index of the particle vertices in the SPS "positions" array.

`indiceIndex` (integer) is the starting index of the particle indices in the SPS "indices" array.

`model` ([ModelShape](/classes/3.1/ModelShape)) is a reference to the model shape on what the particle is designed.

`shapeId` (integer) is the model shape identifier in the SPS.

`idxInShape` (integer) is the index of the particle in the current model (ex: the 10th box of addShape(box, 30))

`modelBoundingInfo` is the reference to the model [BoundingInfo](/classes/3.1/BoundingInfo) used for intersection computations.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | particleIndex | number | 
 | positionIndex | number | 
 | indiceIndex | number | 
 | model | Nullable&lt;[ModelShape](/classes/3.1/ModelShape)&gt; | 
 | shapeId | number | 
 | idxInShape | number | 
 | sps | [SolidParticleSystem](/classes/3.1/SolidParticleSystem) | 
## Members

### idx : number


### color : Nullable&lt;[Color4](/classes/3.1/Color4)&gt;


### position : [Vector3](/classes/3.1/Vector3)


### rotation : [Vector3](/classes/3.1/Vector3)


### rotationQuaternion : Nullable&lt;[Quaternion](/classes/3.1/Quaternion)&gt;


### scaling : [Vector3](/classes/3.1/Vector3)


### uvs : [Vector4](/classes/3.1/Vector4)


### velocity : [Vector3](/classes/3.1/Vector3)


### pivot : [Vector3](/classes/3.1/Vector3)


### alive : boolean


### isVisible : boolean


### shapeId : number


### idxInShape : number


### scale : [Vector3](/classes/3.1/Vector3)

legacy support, changed scale to scaling
### quaternion : Nullable&lt;[Quaternion](/classes/3.1/Quaternion)&gt;

legacy support, changed quaternion to rotationQuaternion
## Methods

### intersectsMesh(target, [SolidParticle](/classes/3.1/SolidParticle)) &rarr; boolean

Returns a boolean. True if the particle intersects another particle or another mesh, else false.

The intersection is computed on the particle bounding sphere and [Axis](/classes/3.1/Axis) Aligned Bounding [Box](/classes/3.1/Box) (AABB)

`target` is the object (solid particle or mesh) what the intersection is computed against.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Mesh](/classes/3.1/Mesh) or [SolidParticle](/classes/3.1/SolidParticle) | 
