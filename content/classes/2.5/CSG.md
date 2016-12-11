---
ID_PAGE: 25258
PG_TITLE: CSG
PG_VERSION: 2.1
---
## Description

class [CSG](/classes/2.5/CSG)



## Members

### matrix : [Matrix](/classes/2.5/Matrix)

The matrix

### position : [Vector3](/classes/2.5/Vector3)

The position

### rotation : [Vector3](/classes/2.5/Vector3)

The rotation

### rotationQuaternion : [Quaternion](/classes/2.5/Quaternion)



### scaling : [Vector3](/classes/2.5/Vector3)

The scaling

## Methods

### static FromMesh(mesh) &rarr; [CSG](/classes/2.5/CSG)

Convert [Mesh](/classes/2.5/Mesh) to [CSG](/classes/2.5/CSG)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.5/Mesh) |     @param mesh

### clone() &rarr; [CSG](/classes/2.5/CSG)

Clone this [CSG](/classes/2.5/CSG)
### union(csg) &rarr; [CSG](/classes/2.5/CSG)

Union the [CSG](/classes/2.5/CSG)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/2.5/CSG) |     @param csg

### unionInPlace(csg) &rarr; void

Union in place

#### Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/2.5/CSG) |     @param csg

### subtract(csg) &rarr; [CSG](/classes/2.5/CSG)

Subtract the [CSG](/classes/2.5/CSG)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/2.5/CSG) |     @param csg

### subtractInPlace(csg) &rarr; void

Subtract in place

#### Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/2.5/CSG) |     @param csg

### intersect(csg) &rarr; [CSG](/classes/2.5/CSG)

Intersect first solid with the second

#### Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/2.5/CSG) |     @param csg

### intersectInPlace(csg) &rarr; void

Intersect in place

#### Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/2.5/CSG) |     @param csg

### inverse() &rarr; [CSG](/classes/2.5/CSG)

Return a new [CSG](/classes/2.5/CSG) solid with solid and empty space swtiched. This solid is not modified.
### inverseInPlace() &rarr; void

Inverse in place
### copyTransformAttributes(csg) &rarr; [CSG](/classes/2.5/CSG)

This is used to keep meshes transformations so they can be restored
when we build back a [Mesh](/classes/2.5/Mesh)
NB : All [CSG](/classes/2.5/CSG) operations are performed in world coordinates

#### Parameters
 | Name | Type | Description
---|---|---|---
 | csg | [CSG](/classes/2.5/CSG) |     @param csg

### buildMeshGeometry(name, scene, keepSubMeshes) &rarr; [Mesh](/classes/2.5/Mesh)

Build raw mesh from [CSG](/classes/2.5/CSG)
Coordinates here are in world space

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     @param name
 | scene | [Scene](/classes/2.5/Scene) |     @param scene
 | keepSubMeshes | boolean |     @param keepSubMeshes
### toMesh(name, material, scene, keepSubMeshes) &rarr; [Mesh](/classes/2.5/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     @param name
 | material | [Material](/classes/2.5/Material) |     @param material
 | scene | [Scene](/classes/2.5/Scene) |     @param scene
