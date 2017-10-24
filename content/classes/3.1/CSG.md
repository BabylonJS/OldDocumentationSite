---
ID_PAGE: 25258
PG_TITLE: CSG
PG_VERSION: 2.1
---
## Description

class [CSG](/classes/3.1/CSG)



## Members

### matrix : [Matrix](/classes/3.1/Matrix)



### position : [Vector3](/classes/3.1/Vector3)



### rotation : [Vector3](/classes/3.1/Vector3)



### rotationQuaternion : Nullable&lt;[Quaternion](/classes/3.1/Quaternion)&gt;



### scaling : [Vector3](/classes/3.1/Vector3)



## Methods

### static FromMesh(mesh) &rarr; [CSG](/classes/3.1/CSG)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/3.1/Mesh) | 

### clone() &rarr; [CSG](/classes/3.1/CSG)


### union(csg) &rarr; [CSG](/classes/3.1/CSG)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/3.1/CSG) | 

### unionInPlace(csg) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/3.1/CSG) | 

### subtract(csg) &rarr; [CSG](/classes/3.1/CSG)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/3.1/CSG) | 

### subtractInPlace(csg) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/3.1/CSG) | 

### intersect(csg) &rarr; [CSG](/classes/3.1/CSG)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/3.1/CSG) | 

### intersectInPlace(csg) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/3.1/CSG) | 

### inverse() &rarr; [CSG](/classes/3.1/CSG)


### inverseInPlace() &rarr; void


### copyTransformAttributes(csg) &rarr; [CSG](/classes/3.1/CSG)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/3.1/CSG) | 

### buildMeshGeometry(name, scene, keepSubMeshes) &rarr; [Mesh](/classes/3.1/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | keepSubMeshes | boolean | 
### toMesh(name, material, scene, keepSubMeshes) &rarr; [Mesh](/classes/3.1/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | material | [Material](/classes/3.1/Material) | 
 | scene | [Scene](/classes/3.1/Scene) | 
