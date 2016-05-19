---
ID_PAGE: 25253
PG_TITLE: Path3D
PG_VERSION: 2.1
---
## Description

class [Path3D](/classes/2.4/Path3D)



## Constructor

## new [Path3D](/classes/2.4/Path3D)(path, firstNormal, raw)

new [Path3D](/classes/2.4/Path3D)(path, normal, raw)

Creates a [Path3D](/classes/2.4/Path3D). A [Path3D](/classes/2.4/Path3D) is a logical math object, so not a mesh.

please read the description in the tutorial :  http://doc.babylonjs.com/tutorials/How_to_use_Path3D

path : an array of [Vector3](/classes/2.4/Vector3), the curve axis of the [Path3D](/classes/2.4/Path3D)

normal (optional) : [Vector3](/classes/2.4/Vector3), the first wanted normal to the curve. Ex (0, 1, 0) for a vertical normal.

raw (optional, default false) : boolean, if true the returned [Path3D](/classes/2.4/Path3D) isn't normalized. Useful to depict path acceleration or speed.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | path | [Vector3](/classes/2.4/Vector3)[] |    
optional | firstNormal | [Vector3](/classes/2.4/Vector3) |    
optional | raw | boolean |   
## Members

### path : [Vector3](/classes/2.4/Vector3)[]



## Methods

### getCurveundefined &rarr; [Vector3](/classes/2.4/Vector3)[]

Returns the [Path3D](/classes/2.4/Path3D) array of successive [Vector3](/classes/2.4/Vector3) designing its curve.
### getTangentsundefined &rarr; [Vector3](/classes/2.4/Vector3)[]

Returns an array populated with tangent vectors on each [Path3D](/classes/2.4/Path3D) curve point.
### getNormalsundefined &rarr; [Vector3](/classes/2.4/Vector3)[]

Returns an array populated with normal vectors on each [Path3D](/classes/2.4/Path3D) curve point.
### getBinormalsundefined &rarr; [Vector3](/classes/2.4/Vector3)[]

Returns an array populated with binormal vectors on each [Path3D](/classes/2.4/Path3D) curve point.
### getDistancesundefined &rarr; number[]

Returns an array populated with distances (float) of the i-th point from the first curve point.
### updateundefined &rarr; [Path3D](/classes/2.4/Path3D)

Forces the [Path3D](/classes/2.4/Path3D) tangent, normal, binormal and distance recomputation.

Returns the same object updated.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
