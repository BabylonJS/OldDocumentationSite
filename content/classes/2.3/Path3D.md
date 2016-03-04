---
ID_PAGE: 25253
PG_TITLE: Path3D
PG_VERSION: 2.1
---
## Description

class [Path3D](/classes/2.3/Path3D)



## Constructor

## new [Path3D](/classes/2.3/Path3D)(path, firstNormal, raw)

new [Path3D](/classes/2.3/Path3D)(path, normal, raw)

path : an array of [Vector3](/classes/2.3/Vector3), the curve axis of the [Path3D](/classes/2.3/Path3D)

normal (optional) : [Vector3](/classes/2.3/Vector3), the first wanted normal to the curve. Ex (0, 1, 0) for a vertical normal.

raw (optional, default false) : boolean, if true the returned [Path3D](/classes/2.3/Path3D) isn't normalized. Useful to depict path acceleration or speed.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | path | [Vector3](/classes/2.3/Vector3)[] |   
optional | firstNormal | [Vector3](/classes/2.3/Vector3) |   
optional | raw | boolean |  
## Members

### path : [Vector3](/classes/2.3/Vector3)[]



## Methods

### getCurve() &rarr; [Vector3](/classes/2.3/Vector3)[]


### getTangents() &rarr; [Vector3](/classes/2.3/Vector3)[]


### getNormals() &rarr; [Vector3](/classes/2.3/Vector3)[]


### getBinormals() &rarr; [Vector3](/classes/2.3/Vector3)[]


### getDistances() &rarr; number[]


### update(path, firstNormal) &rarr; [Path3D](/classes/2.3/Path3D)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | path | [Vector3](/classes/2.3/Vector3)[] |   
optional | firstNormal | [Vector3](/classes/2.3/Vector3) |   
