---
ID_PAGE: 25214
PG_TITLE: Material
PG_VERSION: 2.1
TAGS:
    - Material
---
## Description

class [Material](/classes/3.1/Material)



## Constructor

## new [Material](/classes/3.1/Material)(name, scene, doNotAdd)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/3.1/Scene) | 
optional | doNotAdd | boolean | 
## Members

### static TriangleFillMode : number


### static WireFrameFillMode : number


### static PointFillMode : number


### static ClockWiseSideOrientation : number


### static CounterClockWiseSideOrientation : number


### static TextureDirtyFlag : number


### static LightDirtyFlag : number


### static FresnelDirtyFlag : number


### static AttributesDirtyFlag : number


### static MiscDirtyFlag : number


### id : string


### name : string


### checkReadyOnEveryCall : boolean


### checkReadyOnlyOnce : boolean


### state : string


### alpha : number


### backFaceCulling : boolean


### sideOrientation : number


### onCompiled : (effect: [Effect](/classes/3.1/Effect)) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.1/Effect) | 

### onError : (effect: [Effect](/classes/3.1/Effect), errors: string) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.1/Effect) | 
 | errors | string | 
### getRenderTargetTextures : () =&gt; [SmartArray](/classes/3.1/SmartArray)&lt;[RenderTargetTexture](/classes/3.1/RenderTargetTexture)&gt;


### doNotSerialize : boolean


### storeEffectOnSubMeshes : boolean


### animations : Array&lt;[Animation](/classes/3.1/Animation)&gt;


### onDisposeObservable : [Observable](/classes/3.1/Observable)&lt;[Material](/classes/3.1/Material)&gt;

An event triggered when the material is disposed.

@type {BABYLON.[Observable](/classes/3.1/Observable)}
### onDispose : () =&gt; void


### onBindObservable : [Observable](/classes/3.1/Observable)&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;

An event triggered when the material is bound.

@type {BABYLON.[Observable](/classes/3.1/Observable)}
### onBind : ([Mesh](/classes/3.1/Mesh): [AbstractMesh](/classes/3.1/AbstractMesh)) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | [Mesh](/classes/3.1/Mesh) | [AbstractMesh](/classes/3.1/AbstractMesh) | 

### onUnBindObservable : [Observable](/classes/3.1/Observable)&lt;[Material](/classes/3.1/Material)&gt;

An event triggered when the material is unbound.

@type {BABYLON.[Observable](/classes/3.1/Observable)}
### alphaMode : number


### needDepthPrePass : boolean


### disableDepthWrite : boolean


### forceDepthWrite : boolean


### separateCullingPass : boolean


### fogEnabled : boolean


### pointSize : number


### zOffset : number


### wireframe : boolean


### pointsCloud : boolean


### fillMode : number


### isFrozen : boolean


## Methods

### toString(fullDetails) &rarr; string

subclasses should override adding information pertainent to themselves

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | fullDetails | boolean | 

### getClassName() &rarr; string

Child classes can use it to update shaders
### freeze() &rarr; void


### unfreeze() &rarr; void


### isReady(mesh, useInstances) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
optional | useInstances | boolean | 
### isReadyForSubMesh(mesh, subMesh, useInstances) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
 | subMesh | [BaseSubMesh](/classes/3.1/BaseSubMesh) | 
optional | useInstances | boolean | 
### getEffect() &rarr; Nullable&lt;[Effect](/classes/3.1/Effect)&gt;


### getScene() &rarr; [Scene](/classes/3.1/Scene)


### needAlphaBlending() &rarr; boolean


### needAlphaBlendingForMesh(mesh) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 

### needAlphaTesting() &rarr; boolean


### getAlphaTestTexture() &rarr; Nullable&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt;


### markDirty() &rarr; void


### bind(world, mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/3.1/Matrix) | 
optional | mesh | [Mesh](/classes/3.1/Mesh) | 
### bindForSubMesh(world, mesh, subMesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/3.1/Matrix) | 
 | mesh | [Mesh](/classes/3.1/Mesh) | 
 | subMesh | [SubMesh](/classes/3.1/SubMesh) | 
### bindOnlyWorldMatrix(world) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/3.1/Matrix) | 

### bindSceneUniformBuffer(effect, sceneUbo) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.1/Effect) | 
 | sceneUbo | [UniformBuffer](/classes/3.1/UniformBuffer) | 
### bindView(effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.1/Effect) | 

### bindViewProjection(effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.1/Effect) | 

### unbind() &rarr; void


### getActiveTextures() &rarr; [BaseTexture](/classes/3.1/BaseTexture)[]


### hasTexture(texture) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | [BaseTexture](/classes/3.1/BaseTexture) | 

### clone(name) &rarr; Nullable&lt;[Material](/classes/3.1/Material)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### getBindedMeshes() &rarr; [AbstractMesh](/classes/3.1/AbstractMesh)[]


### forceCompilation(mesh, onCompiled, options) &rarr; void

Force shader compilation including textures ready check

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
optional | onCompiled |  | material | [Material](/classes/3.1/Material) | 

 | 
### markAsDirty(flag) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | flag | number | 

### dispose(forceDisposeEffect, forceDisposeTextures) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | forceDisposeEffect | boolean | 
optional | forceDisposeTextures | boolean | 
### serialize() &rarr; any


### static ParseMultiMaterial(parsedMultiMaterial, scene) &rarr; [MultiMaterial](/classes/3.1/MultiMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedMultiMaterial | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
### static Parse(parsedMaterial, scene, rootUrl) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedMaterial | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | rootUrl | string | 
