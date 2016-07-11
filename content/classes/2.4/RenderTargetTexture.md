---
ID_PAGE: 25224
PG_TITLE: RenderTargetTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
    - TargetTexture
---
## Description

class [RenderTargetTexture](/classes/2.4/RenderTargetTexture) extends [Texture](/classes/2.4/Texture)



## Constructor

## new [RenderTargetTexture](/classes/2.4/RenderTargetTexture)(name, size, scene, generateMipMaps, doNotChangeAspectRatio, type, isCube, samplingMode)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    Name of the texture
 | size | any |    The new size for the texture
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) which contain the texture
optional | generateMipMaps | boolean |    True to generate the mipmaps
optional | doNotChangeAspectRatio | boolean |    
optional | type | number |  
optional | isCube | boolean | 
## Members

### isCube : boolean



### static REFRESHRATE_RENDER_ONCE : number



### static REFRESHRATE_RENDER_ONEVERYFRAME : number



### static REFRESHRATE_RENDER_ONEVERYTWOFRAMES : number



### renderListPredicate : ([AbstractMesh](/classes/2.4/AbstractMesh): undefined) =&gt; boolean

Use this predicate to dynamically define the list of mesh you want to render.

If set, the renderList property will be overwritten.

### renderList : [AbstractMesh](/classes/2.4/AbstractMesh)[]

Use this list to define the list of mesh you want to render.

### renderParticles : boolean

True to render particles ; False otherwise

### renderSprites : boolean

True to render sprites ; False otherwise

### coordinatesMode : number

The coordinates mode

### activeCamera : [Camera](/classes/2.4/Camera)

The active camera

### customRenderFunction : (opaqueSubMeshes: [SmartArray](/classes/2.4/SmartArray)&lt;[SubMesh](/classes/2.4/SubMesh)&gt;, transparentSubMeshes: [SmartArray](/classes/2.4/SmartArray)&lt;[SubMesh](/classes/2.4/SubMesh)&gt;, alphaTestSubMeshes: [SmartArray](/classes/2.4/SmartArray)&lt;[SubMesh](/classes/2.4/SubMesh)&gt;, beforeTransparents: () =&gt; void) =&gt; void



### useCameraPostProcesses : boolean



### onAfterUnbindObservable : [Observable](/classes/2.4/Observable)&lt;[RenderTargetTexture](/classes/2.4/RenderTargetTexture)&gt;

An event triggered when the texture is unbind.

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### onAfterUnbind : () =&gt; void



### onBeforeRenderObservable : [Observable](/classes/2.4/Observable)&lt;number&gt;

An event triggered before rendering the texture

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### onBeforeRender : (faceIndex: number) =&gt; void

Callback function before render

### onAfterRenderObservable : [Observable](/classes/2.4/Observable)&lt;number&gt;

An event triggered after rendering the texture

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### onAfterRender : (faceIndex: number) =&gt; void

Callback function after render

### onClearObservable : [Observable](/classes/2.4/Observable)&lt;[Engine](/classes/2.4/Engine)&gt;

An event triggered after the texture clear

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### onClear : ([Engine](/classes/2.4/Engine): [Engine](/classes/2.4/Engine)) =&gt; void



### refreshRate : number

The rate of refresh

### canRescale : boolean



## Methods

### resetRefreshCounter() &rarr; void

Reset the refresh counter.
### isReady() &rarr; boolean


### getRenderSize() &rarr; number

Get the render size
@return number The render size
### scale(ratio) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ratio | number |    

### getReflectionTextureMatrix() &rarr; [Matrix](/classes/2.4/Matrix)


### resize(size, generateMipMaps) &rarr; void

Resize the mirror texture

#### Parameters
 | Name | Type | Description
---|---|---|---
 | size | any |    The new size for the texture
optional | generateMipMaps | boolean |    True to generate the mipmaps
### render(useCameraPostProcess, dumpForDebug) &rarr; void

Render the mirror texture

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | useCameraPostProcess | boolean |    True to use the camera post process
optional | dumpForDebug | boolean |    
### renderToTarget(faceIndex, currentRenderList, useCameraPostProcess, dumpForDebug) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | faceIndex | number |  
 | currentRenderList | [AbstractMesh](/classes/2.4/AbstractMesh)[] |  
 | useCameraPostProcess | boolean |    True to use the camera post process
### clone() &rarr; [RenderTargetTexture](/classes/2.4/RenderTargetTexture)


### serialize() &rarr; any


