---
ID_PAGE: 25214
PG_TITLE: Material
PG_VERSION: 2.1
TAGS:
    - Material
---
## Description

class [Material](/classes/2.3/Material)



## Constructor

##  new [Material](/classes/2.3/Material)(name, scene, doNotAdd)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the material
 | scene | [Scene](/classes/2.3/Scene) |   
optional | doNotAdd | boolean |   Not add the material
## Members

### name : string



### static  TriangleFillMode : number



### static  WireFrameFillMode : number



### static  PointFillMode : number



### static  ClockWiseSideOrientation : number



### static  CounterClockWiseSideOrientation : number



### id : string



### checkReadyOnEveryCall : boolean



### checkReadyOnlyOnce : boolean



### state : string



### alpha : number



### backFaceCulling : boolean



### sideOrientation : number



### onCompiled : (effect: [Effect](/classes/2.3/Effect)) =&gt; void



### onError : (effect: [Effect](/classes/2.3/Effect), errors: string) =&gt; void



### onDispose : () =&gt; void



### onBind : (material: [Material](/classes/2.3/Material), mesh: [Mesh](/classes/2.3/Mesh)) =&gt; void



### getRenderTargetTextures : () =&gt; [SmartArray](/classes/2.3/SmartArray)&lt;[RenderTargetTexture](/classes/2.3/RenderTargetTexture)&gt;



### alphaMode : number



### disableDepthWrite : boolean



### fogEnabled : boolean



### pointSize : number



### zOffset : number



### wireframe : boolean



### pointsCloud : boolean



### fillMode : number



### isFrozen : boolean



## Methods

### freeze() &rarr; void


### unfreeze() &rarr; void


### isReady(mesh, useInstances) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](/classes/2.3/AbstractMesh) |   The mesh to bind
optional | useInstances | boolean |   
### getEffect() &rarr; [Effect](/classes/2.3/Effect)


### getScene() &rarr; [Scene](/classes/2.3/Scene)


### needAlphaBlending() &rarr; boolean


### needAlphaTesting() &rarr; boolean


### getAlphaTestTexture() &rarr; [BaseTexture](/classes/2.3/BaseTexture)


### trackCreation(onCompiled, onError) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | onCompiled | (effect: [Effect](/classes/2.3/Effect)) =&gt; void |   Callback function called on compiled (effect on compiled)
 | onError | (effect: [Effect](/classes/2.3/Effect), errors: string) =&gt; void |   Callback function called on error (effect on error, error string)
### markDirty() &rarr; void


### bind(world, mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.3/Matrix) |   The world matrix
optional | mesh | [Mesh](/classes/2.3/Mesh) |   The mesh to bind
### bindOnlyWorldMatrix(world) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.3/Matrix) |   The world matrix

### unbind() &rarr; void


### clone(name) &rarr; [Material](/classes/2.3/Material)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the material

### getBindedMeshes() &rarr; [AbstractMesh](/classes/2.3/AbstractMesh)[]


### dispose(forceDisposeEffect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | forceDisposeEffect | boolean |   True to force the dispose

### copyTo(other) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | other | [Material](/classes/2.3/Material) | 

### serialize() &rarr; any


### static  ParseMultiMaterial(parsedMultiMaterial, scene) &rarr; [MultiMaterial](/classes/2.3/MultiMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedMultiMaterial | any | 
 | scene | [Scene](/classes/2.3/Scene) |   
### static  Parse(parsedMaterial, scene, rootUrl) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedMaterial | any | 
 | scene | [Scene](/classes/2.3/Scene) |   
 | rootUrl | string | 
