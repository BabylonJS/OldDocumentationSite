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

### toStringundefined &rarr; string

subclasses should override adding information pertainent to themselves

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### freezeundefined &rarr; void


### unfreezeundefined &rarr; void


### isReadyundefined &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getEffectundefined &rarr; [Effect](/classes/2.4/Effect)


### getSceneundefined &rarr; [Scene](/classes/2.4/Scene)


### needAlphaBlendingundefined &rarr; boolean


### needAlphaTestingundefined &rarr; boolean


### getAlphaTestTextureundefined &rarr; [BaseTexture](/classes/2.4/BaseTexture)


### markDirtyundefined &rarr; void


### bindundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### bindOnlyWorldMatrixundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### unbindundefined &rarr; void


### cloneundefined &rarr; [Material](/classes/2.4/Material)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getBindedMeshesundefined &rarr; [AbstractMesh](/classes/2.4/AbstractMesh)[]


### disposeundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### serializeundefined &rarr; any


### static ParseMultiMaterialundefined &rarr; [MultiMaterial](/classes/2.4/MultiMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### static Parseundefined &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
