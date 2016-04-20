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

## new [Material](/classes/2.3/Material)(name, scene, doNotAdd)

Create a new [Material](/classes/2.3/Material).
Everything to know about material can be found here : http://doc.babylonjs.com/tutorials/Materials
And here : http://blogs.msdn.com/b/eternalcoding/archive/2013/07/01/babylon-js-unleash-the-standardmaterial-for-your-babylon-js-game.aspx

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the material
 | scene | [Scene](/classes/2.3/Scene) |   
optional | doNotAdd | boolean |   Not add the material
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



### onCompiled : (effect: [Effect](/classes/2.3/Effect)) =&gt; void

Callback function on compiled

### onError : (effect: [Effect](/classes/2.3/Effect), errors: string) =&gt; void

Callback function on error

### onDispose : () =&gt; void

Callback function on dispose

### onBind : (material: [Material](/classes/2.3/Material), mesh: [Mesh](/classes/2.3/Mesh)) =&gt; void



### getRenderTargetTextures : () =&gt; [SmartArray](/classes/2.3/SmartArray)&lt;[RenderTargetTexture](/classes/2.3/RenderTargetTexture)&gt;

Get the render target textures

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

### freeze() &rarr; void


### unfreeze() &rarr; void


### isReady(mesh, useInstances) &rarr; boolean

Function to know if material is ready
@return boolean True if ready ; False if not

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](/classes/2.3/AbstractMesh) |   The mesh to bind
optional | useInstances | boolean |   
### getEffect() &rarr; [Effect](/classes/2.3/Effect)

Get effect of the material
@return [Effect](/classes/2.3/Effect) The effect
### getScene() &rarr; [Scene](/classes/2.3/Scene)

Get the scene which contain the material
@return [Scene](/classes/2.3/Scene) The scene which contain the material
### needAlphaBlending() &rarr; boolean

Function to know if alpha is necessary (1.0 = no transparency)
@return boolean True if alpha blending is needed ; False if not
### needAlphaTesting() &rarr; boolean

Function to know if alpha testing is necessary
### getAlphaTestTexture() &rarr; [BaseTexture](/classes/2.3/BaseTexture)

Function to get the alpha test texture
@return [BaseTexture](/classes/2.3/BaseTexture) The alpha test texture
### trackCreation(onCompiled, onError) &rarr; void

Track the creation

#### Parameters
 | Name | Type | Description
---|---|---|---
 | onCompiled | (effect: [Effect](/classes/2.3/Effect)) =&gt; void |   Callback function called on compiled (effect on compiled)
 | onError | (effect: [Effect](/classes/2.3/Effect), errors: string) =&gt; void |   Callback function called on error (effect on error, error string)
### markDirty() &rarr; void


### bind(world, mesh) &rarr; void

Function to bind the material

#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.3/Matrix) |   The world matrix
optional | mesh | [Mesh](/classes/2.3/Mesh) |   The mesh to bind
### bindOnlyWorldMatrix(world) &rarr; void

Function to bind only the world matrix

#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.3/Matrix) |   The world matrix

### unbind() &rarr; void

Function to unbind
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


### static ParseMultiMaterial(parsedMultiMaterial, scene) &rarr; [MultiMaterial](/classes/2.3/MultiMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedMultiMaterial | any | 
 | scene | [Scene](/classes/2.3/Scene) |   
### static Parse(parsedMaterial, scene, rootUrl) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedMaterial | any | 
 | scene | [Scene](/classes/2.3/Scene) |   
 | rootUrl | string | 
