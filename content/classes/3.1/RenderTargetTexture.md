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

class [RenderTargetTexture](/classes/3.1/RenderTargetTexture) extends [Texture](/classes/3.1/Texture)



## Constructor

## new [RenderTargetTexture](/classes/3.1/RenderTargetTexture)(name, size, scene, generateMipMaps, doNotChangeAspectRatio, type, isCube, samplingMode, generateDepthBuffer, generateStencilBuffer, isMulti)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | size | any | 
 | scene | Nullable&lt;[Scene](/classes/3.1/Scene)&gt; | 
optional | generateMipMaps | boolean | 
optional | doNotChangeAspectRatio | boolean | 
optional | type | number | 
optional | isCube | boolean | 
optional | samplingMode | number | 
optional | generateDepthBuffer | boolean | 
optional | generateStencilBuffer | boolean | 
## Members

### isCube : boolean



### static REFRESHRATE_RENDER_ONCE : number



### static REFRESHRATE_RENDER_ONEVERYFRAME : number



### static REFRESHRATE_RENDER_ONEVERYTWOFRAMES : number



### renderListPredicate : ([AbstractMesh](/classes/3.1/AbstractMesh): [AbstractMesh](/classes/3.1/AbstractMesh)) =&gt; boolean

Use this predicate to dynamically define the list of mesh you want to render.

If set, the renderList property will be overwritten.

### renderList : Nullable&lt;Array&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;&gt;

Use this list to define the list of mesh you want to render.

### renderParticles : boolean



### renderSprites : boolean



### coordinatesMode : number



### activeCamera : Nullable&lt;[Camera](/classes/3.1/Camera)&gt;



### customRenderFunction : (opaqueSubMeshes: [SmartArray](/classes/3.1/SmartArray)&lt;[SubMesh](/classes/3.1/SubMesh)&gt;, alphaTestSubMeshes: [SmartArray](/classes/3.1/SmartArray)&lt;[SubMesh](/classes/3.1/SubMesh)&gt;, transparentSubMeshes: [SmartArray](/classes/3.1/SmartArray)&lt;[SubMesh](/classes/3.1/SubMesh)&gt;, depthOnlySubMeshes: [SmartArray](/classes/3.1/SmartArray)&lt;[SubMesh](/classes/3.1/SubMesh)&gt;, beforeTransparents: () =&gt; void) =&gt; void



### useCameraPostProcesses : boolean



### ignoreCameraViewport : boolean



### onBeforeBindObservable : [Observable](/classes/3.1/Observable)&lt;[RenderTargetTexture](/classes/3.1/RenderTargetTexture)&gt;

An event triggered when the texture is unbind.

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onAfterUnbindObservable : [Observable](/classes/3.1/Observable)&lt;[RenderTargetTexture](/classes/3.1/RenderTargetTexture)&gt;

An event triggered when the texture is unbind.

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onAfterUnbind : () =&gt; void



### onBeforeRenderObservable : [Observable](/classes/3.1/Observable)&lt;number&gt;

An event triggered before rendering the texture

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onBeforeRender : (faceIndex: number) =&gt; void



### onAfterRenderObservable : [Observable](/classes/3.1/Observable)&lt;number&gt;

An event triggered after rendering the texture

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onAfterRender : (faceIndex: number) =&gt; void



### onClearObservable : [Observable](/classes/3.1/Observable)&lt;[Engine](/classes/3.1/Engine)&gt;

An event triggered after the texture clear

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onClear : ([Engine](/classes/3.1/Engine): [Engine](/classes/3.1/Engine)) =&gt; void



### clearColor : [Color4](/classes/3.1/Color4)



### renderTargetOptions : [RenderTargetCreationOptions](/classes/3.1/RenderTargetCreationOptions)



### samples : number



### refreshRate : number



### canRescale : boolean



## Methods

### resetRefreshCounter() &rarr; void


### addPostProcess(postProcess) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | postProcess | [PostProcess](/classes/3.1/PostProcess) | 

### clearPostProcesses(dispose) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | dispose | boolean | 

### removePostProcess(postProcess) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | postProcess | [PostProcess](/classes/3.1/PostProcess) | 

### getRenderSize() &rarr; number


### scale(ratio) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ratio | number | 

### getReflectionTextureMatrix() &rarr; [Matrix](/classes/3.1/Matrix)


### resize(size) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | size | any | 

### render(useCameraPostProcess, dumpForDebug) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | useCameraPostProcess | boolean | 
optional | dumpForDebug | boolean | 
### setRenderingOrder(renderingGroupId, opaqueSortCompareFn, alphaTestSortCompareFn, transparentSortCompareFn) &rarr; void

Overrides the default sort function applied in the renderging group to prepare the meshes.

This allowed control for front to back rendering or reversly depending of the special needs.

         * @param renderingGroupId The rendering group id corresponding to its index

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderingGroupId | number |  The rendering group id corresponding to its index
optional | opaqueSortCompareFn | Nullable&lt;(a: [SubMesh](/classes/3.1/SubMesh), b: [SubMesh](/classes/3.1/SubMesh)) =&gt; number&gt; |  The opaque queue comparison function use to sort.
optional | alphaTestSortCompareFn | Nullable&lt;(a: [SubMesh](/classes/3.1/SubMesh), b: [SubMesh](/classes/3.1/SubMesh)) =&gt; number&gt; |  The alpha test queue comparison function use to sort.
### setRenderingAutoClearDepthStencil(renderingGroupId, autoClearDepthStencil) &rarr; void

Specifies whether or not the stencil and depth buffer are cleared between two rendering groups.

         * @param renderingGroupId The rendering group id corresponding to its index

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderingGroupId | number |  The rendering group id corresponding to its index
 | autoClearDepthStencil | boolean |  Automatically clears depth and stencil between groups if true.
### clone() &rarr; [RenderTargetTexture](/classes/3.1/RenderTargetTexture)


### serialize() &rarr; any


### disposeFramebufferObjects() &rarr; void


### dispose() &rarr; void


