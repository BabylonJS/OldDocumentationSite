---
TAGS:
---
## Description

class [ShadowLight](/classes/3.1/ShadowLight) extends [Light](/classes/3.1/Light)



## Members

### abstract : undefined


### void : undefined


### position : [Vector3](/classes/3.1/Vector3)


### direction : [Vector3](/classes/3.1/Vector3)


### shadowMinZ : number


### shadowMaxZ : number


### customProjectionMatrixBuilder : (viewMatrix: [Matrix](/classes/3.1/Matrix), renderList: Array&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;, result: [Matrix](/classes/3.1/Matrix)) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | viewMatrix | [Matrix](/classes/3.1/Matrix) | 
 | renderList | Array&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt; | 
 | result | [Matrix](/classes/3.1/Matrix) | 
### transformedPosition : [Vector3](/classes/3.1/Vector3)


### transformedDirection : [Vector3](/classes/3.1/Vector3)


## Methods

### computeTransformedInformation() &rarr; boolean

Computes the light transformed position/direction in case the light is parented. Returns true if parented, else false.
### getDepthScale() &rarr; number

Return the depth scale used for the shadow map.
### getShadowDirection(faceIndex) &rarr; [Vector3](/classes/3.1/Vector3)

Returns the light direction ([Vector3](/classes/3.1/Vector3)) for any passed face index.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | faceIndex | number | 

### getAbsolutePosition() &rarr; [Vector3](/classes/3.1/Vector3)

Returns the [DirectionalLight](/classes/3.1/DirectionalLight) absolute position in the World.
### setDirectionToTarget(target) &rarr; [Vector3](/classes/3.1/Vector3)

Sets the [DirectionalLight](/classes/3.1/DirectionalLight) direction toward the passed target ([Vector3](/classes/3.1/Vector3)).

Returns the updated [DirectionalLight](/classes/3.1/DirectionalLight) direction ([Vector3](/classes/3.1/Vector3)).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](/classes/3.1/Vector3) | 

### getRotation() &rarr; [Vector3](/classes/3.1/Vector3)

Returns the light rotation ([Vector3](/classes/3.1/Vector3)).
### needCube() &rarr; boolean

Boolean : false by default.
### needProjectionMatrixCompute() &rarr; boolean

Specifies wether or not the projection matrix should be recomputed this frame.
### forceProjectionMatrixCompute() &rarr; void

Forces the shadow generator to recompute the projection matrix even if position and direction did not changed.
### getDepthMinZ(activeCamera) &rarr; number

Gets the minZ used for shadow according to both the scene and the light.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | activeCamera | [Camera](/classes/3.1/Camera) | 

### getDepthMaxZ(activeCamera) &rarr; number

Gets the maxZ used for shadow according to both the scene and the light.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | activeCamera | [Camera](/classes/3.1/Camera) | 

### setShadowProjectionMatrix(matrix, viewMatrix, renderList) &rarr; IShadowLight

Sets the projection matrix according to the type of light and custom projection matrix definition.

Returns the light.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/3.1/Matrix) | 
 | viewMatrix | [Matrix](/classes/3.1/Matrix) | 
 | renderList | Array&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt; | 
