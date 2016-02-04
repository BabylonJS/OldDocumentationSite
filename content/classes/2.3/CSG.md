---
ID_PAGE: 25258
PG_TITLE: CSG
PG_VERSION: 2.1
---
## Description

class [CSG](/classes/2.3/CSG)



## Members

### matrix : [Matrix](/classes/2.3/Matrix)



### position : [Vector3](/classes/2.3/Vector3)



### rotation : [Vector3](/classes/2.3/Vector3)



### rotationQuaternion : [Quaternion](/classes/2.3/Quaternion)



### scaling : [Vector3](/classes/2.3/Vector3)



## Methods

### static  FromMesh(mesh) &rarr; [CSG](/classes/2.3/CSG)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.3/Mesh) |   @param mesh

### clone() &rarr; [CSG](/classes/2.3/CSG)


### union(csg) &rarr; [CSG](/classes/2.3/CSG)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/2.3/CSG) |   @param csg

### unionInPlace(csg) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/2.3/CSG) |   @param csg

### subtract(csg) &rarr; [CSG](/classes/2.3/CSG)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/2.3/CSG) |   @param csg

### subtractInPlace(csg) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/2.3/CSG) |   @param csg

### intersect(csg) &rarr; [CSG](/classes/2.3/CSG)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/2.3/CSG) |   @param csg

### intersectInPlace(csg) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/2.3/CSG) |   @param csg

### inverse() &rarr; [CSG](/classes/2.3/CSG)


### inverseInPlace() &rarr; void


### copyTransformAttributes(csg) &rarr; [CSG](/classes/2.3/CSG)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/2.3/CSG) |   @param csg

### buildMeshGeometry(name, scene, keepSubMeshes) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   @param name
 | scene | [Scene](/classes/2.3/Scene) |   @param scene
 | keepSubMeshes | boolean |   @param keepSubMeshes
### toMesh(name, material, scene, keepSubMeshes) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   @param name
 | material | [Material](/classes/2.3/Material) |   @param material
 | scene | [Scene](/classes/2.3/Scene) |   @param scene
