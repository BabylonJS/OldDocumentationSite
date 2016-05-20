---
ID_PAGE: 25214
PG_TITLE: Material
PG_VERSION: 2.1
TAGS:
    - Material
---
## Description

class [Material](/classes/2.4/Material)



## Constructor

## new [Material](/classes/2.4/Material)(name, scene, doNotAdd)

Create a new [Material](/classes/2.4/Material).
Everything to know about material can be found here : http://doc.babylonjs.com/tutorials/Materials
And here : http://blogs.msdn.com/b/eternalcoding/archive/2013/07/01/babylon-js-unleash-the-standardmaterial-for-your-babylon-js-game.aspx

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    Name of the material
 | scene | [Scene](/classes/2.4/Scene) |    
optional | doNotAdd | boolean |    Not add the material
## Members

### name : string

Name of the material

### static TriangleFillMode : number



### static WireFrameFillMode : number



### static PointFillMode : number



### static ClockWiseSideOrientation : number



### static CounterClockWiseSideOrientation : number



### id : string

ID of the material

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



### onCompiled : (effect: [Effect](/classes/2.4/Effect)) =&gt; void

Callback function on compiled

### onError : (effect: [Effect](/classes/2.4/Effect), errors: string) =&gt; void

Callback function on error

### getRenderTargetTextures : () =&gt; [SmartArray](/classes/2.4/SmartArray)&lt;[RenderTargetTexture](/classes/2.4/RenderTargetTexture)&gt;

Get the render target textures

### onDisposeObservable : [Observable](/classes/2.4/Observable)&lt;[Material](/classes/2.4/Material)&gt;

An event triggered when the material is disposed.

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### onDispose : () =&gt; void

Callback function on dispose

### onBindObservable : [Observable](/classes/2.4/Observable)&lt;[AbstractMesh](/classes/2.4/AbstractMesh)&gt;

An event triggered when the material is compiled.

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### onBind : ([Mesh](/classes/2.4/Mesh): [AbstractMesh](/classes/2.4/AbstractMesh)) =&gt; void



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

### freeze() &rarr; void


### unfreeze() &rarr; void


### isReady(mesh, useInstances) &rarr; boolean

Function to know if material is ready
@return boolean True if ready ; False if not

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](/classes/2.4/AbstractMesh) |    The mesh to bind
optional | useInstances | boolean |    
### getEffect() &rarr; [Effect](/classes/2.4/Effect)

Get effect of the material
@return [Effect](/classes/2.4/Effect) The effect
### getScene() &rarr; [Scene](/classes/2.4/Scene)

Get the scene which contain the material
@return [Scene](/classes/2.4/Scene) The scene which contain the material
### needAlphaBlending() &rarr; boolean

Function to know if alpha is necessary (1.0 = no transparency)
@return boolean True if alpha blending is needed ; False if not
### needAlphaTesting() &rarr; boolean

Function to know if alpha testing is necessary
### getAlphaTestTexture() &rarr; [BaseTexture](/classes/2.4/BaseTexture)

Function to get the alpha test texture
@return [BaseTexture](/classes/2.4/BaseTexture) The alpha test texture
### markDirty() &rarr; void


### bind(world, mesh) &rarr; void

Function to bind the material

#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.4/Matrix) |    The world matrix
optional | mesh | [Mesh](/classes/2.4/Mesh) |    The mesh to bind
### bindOnlyWorldMatrix(world) &rarr; void

Function to bind only the world matrix

#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.4/Matrix) |    The world matrix

### unbind() &rarr; void

Function to unbind
### clone(name) &rarr; [Material](/classes/2.4/Material)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    Name of the material

### getBindedMeshes() &rarr; [AbstractMesh](/classes/2.4/AbstractMesh)[]


### dispose(forceDisposeEffect, forceDisposeTextures) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | forceDisposeEffect | boolean |    True to force the dispose
optional | forceDisposeTextures | boolean | 
### serialize() &rarr; any


### static ParseMultiMaterial(parsedMultiMaterial, scene) &rarr; [MultiMaterial](/classes/2.4/MultiMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedMultiMaterial | any |  
 | scene | [Scene](/classes/2.4/Scene) |    
### static Parse(parsedMaterial, scene, rootUrl) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedMaterial | any |  
 | scene | [Scene](/classes/2.4/Scene) |    
 | rootUrl | string |  
