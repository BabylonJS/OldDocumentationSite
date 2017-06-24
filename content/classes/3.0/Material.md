---
ID_PAGE: 25214
PG_TITLE: Material
PG_VERSION: 2.1
TAGS:
    - Material
---
## Description

class [Material](/classes/3.0/Material)



## Constructor

## new [Material](/classes/3.0/Material)(name, scene, doNotAdd)

Create a new [Material](/classes/3.0/Material).
Everything to know about material can be found here : http://doc.babylonjs.com/tutorials/Materials
And here : http://blogs.msdn.com/b/eternalcoding/archive/2013/07/01/babylon-js-unleash-the-standardmaterial-for-your-babylon-js-game.aspx

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      Name of the material
 | scene | [Scene](/classes/3.0/Scene) |      
optional | doNotAdd | boolean |      Not add the material
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

ID of the material

### name : string

Name of the material

### checkReadyOnEveryCall : boolean

True to check if the material is ready on every call

### checkReadyOnlyOnce : boolean

True to check if the material is ready only once

### state : string

State of the material

### alpha : number

Alpha of the material

### backFaceCulling : boolean

True to not render material on back face

Default value : true

### sideOrientation : number



### onCompiled : (effect: [Effect](/classes/3.0/Effect)) =&gt; void

Callback function on compiled

### onError : (effect: [Effect](/classes/3.0/Effect), errors: string) =&gt; void

Callback function on error

### getRenderTargetTextures : () =&gt; [SmartArray](/classes/3.0/SmartArray)&lt;[RenderTargetTexture](/classes/3.0/RenderTargetTexture)&gt;

Get the render target textures

### doNotSerialize : boolean



### storeEffectOnSubMeshes : boolean



### onDisposeObservable : [Observable](/classes/3.0/Observable)&lt;[Material](/classes/3.0/Material)&gt;

An event triggered when the material is disposed.

@type {BABYLON.[Observable](/classes/3.0/Observable)}

### onDispose : () =&gt; void

Callback function on dispose

### onBindObservable : [Observable](/classes/3.0/Observable)&lt;[AbstractMesh](/classes/3.0/AbstractMesh)&gt;

An event triggered when the material is bound.

@type {BABYLON.[Observable](/classes/3.0/Observable)}

### onBind : ([Mesh](/classes/3.0/Mesh): [AbstractMesh](/classes/3.0/AbstractMesh)) =&gt; void



### onUnBindObservable : [Observable](/classes/3.0/Observable)&lt;[Material](/classes/3.0/Material)&gt;

An event triggered when the material is unbound.

@type {BABYLON.[Observable](/classes/3.0/Observable)}

### alphaMode : number



### disableDepthWrite : boolean



### fogEnabled : boolean



### pointSize : number



### zOffset : number



### wireframe : boolean

True if this material should be rendered in wireframe ; False otherwise

Default value : False

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

### markAsDirty(flag) &rarr; void

Child classes can use it to update shaders

#### Parameters
 | Name | Type | Description
---|---|---|---
 | flag | number | 

### getClassName() &rarr; string


### freeze() &rarr; void


### unfreeze() &rarr; void


### isReady(mesh, useInstances) &rarr; boolean

Function to know if material is ready
@return boolean True if ready ; False if not

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) |      The mesh to bind
optional | useInstances | boolean |      
### isReadyForSubMesh(mesh, subMesh, useInstances) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) |      The mesh to bind
 | subMesh | [SubMesh](/classes/3.0/SubMesh) | 
optional | useInstances | boolean |      
### getEffect() &rarr; [Effect](/classes/3.0/Effect)

Get effect of the material
@return [Effect](/classes/3.0/Effect) The effect
### getScene() &rarr; [Scene](/classes/3.0/Scene)

Get the scene which contain the material
@return [Scene](/classes/3.0/Scene) The scene which contain the material
### needAlphaBlending() &rarr; boolean

Function to know if alpha is necessary (1.0 = no transparency)
@return boolean True if alpha blending is needed ; False if not
### needAlphaTesting() &rarr; boolean

Function to know if alpha testing is necessary
### getAlphaTestTexture() &rarr; [BaseTexture](/classes/3.0/BaseTexture)

Function to get the alpha test texture
@return [BaseTexture](/classes/3.0/BaseTexture) The alpha test texture
### markDirty() &rarr; void


### bind(world, mesh) &rarr; void

Function to bind the material

#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/3.0/Matrix) |      The world matrix
optional | mesh | [Mesh](/classes/3.0/Mesh) |      The mesh to bind
### bindForSubMesh(world, mesh, subMesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/3.0/Matrix) |      The world matrix
 | mesh | [Mesh](/classes/3.0/Mesh) |      The mesh to bind
 | subMesh | [SubMesh](/classes/3.0/SubMesh) | 
### bindOnlyWorldMatrix(world) &rarr; void

Function to bind only the world matrix

#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/3.0/Matrix) |      The world matrix

### bindSceneUniformBuffer(effect, sceneUbo) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.0/Effect) | 
 | sceneUbo | [UniformBuffer](/classes/3.0/UniformBuffer) | 
### bindView(effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.0/Effect) | 

### bindViewProjection(effect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.0/Effect) | 

### unbind() &rarr; void

Function to unbind
### clone(name) &rarr; [Material](/classes/3.0/Material)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      Name of the material

### getBindedMeshes() &rarr; [AbstractMesh](/classes/3.0/AbstractMesh)[]


### dispose(forceDisposeEffect, forceDisposeTextures) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | forceDisposeEffect | boolean |      True to force the dispose
optional | forceDisposeTextures | boolean |   
### serialize() &rarr; any


### static ParseMultiMaterial(parsedMultiMaterial, scene) &rarr; [MultiMaterial](/classes/3.0/MultiMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedMultiMaterial | any |    
 | scene | [Scene](/classes/3.0/Scene) |      
### static Parse(parsedMaterial, scene, rootUrl) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedMaterial | any |    
 | scene | [Scene](/classes/3.0/Scene) |      
 | rootUrl | string |    
