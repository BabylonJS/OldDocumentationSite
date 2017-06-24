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

class [RenderTargetTexture](/classes/3.0/RenderTargetTexture) extends [Texture](/classes/3.0/Texture)



## Constructor

## new [RenderTargetTexture](/classes/3.0/RenderTargetTexture)(name, size, scene, generateMipMaps, doNotChangeAspectRatio, type, isCube, samplingMode, generateDepthBuffer, generateStencilBuffer, isMulti)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      Name of the texture
 | size | any |      The new size for the texture
 | scene | [Scene](/classes/3.0/Scene) |      [Scene](/classes/3.0/Scene) which contain the texture
optional | generateMipMaps | boolean |      True to generate the mipmaps
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



### renderListPredicate : ([AbstractMesh](/classes/3.0/AbstractMesh): [AbstractMesh](/classes/3.0/AbstractMesh)) =&gt; boolean

Use this predicate to dynamically define the list of mesh you want to render.

If set, the renderList property will be overwritten.

### renderList : [AbstractMesh](/classes/3.0/AbstractMesh)[]

Use this list to define the list of mesh you want to render.

### renderParticles : boolean

True to render particles ; False otherwise

### renderSprites : boolean

True to render sprites ; False otherwise

### coordinatesMode : number

The coordinates mode

### activeCamera : [Camera](/classes/3.0/Camera)

The active camera

### customRenderFunction : (opaqueSubMeshes: [SmartArray](/classes/3.0/SmartArray)&lt;[SubMesh](/classes/3.0/SubMesh)&gt;, transparentSubMeshes: [SmartArray](/classes/3.0/SmartArray)&lt;[SubMesh](/classes/3.0/SubMesh)&gt;, alphaTestSubMeshes: [SmartArray](/classes/3.0/SmartArray)&lt;[SubMesh](/classes/3.0/SubMesh)&gt;, beforeTransparents: () =&gt; void) =&gt; void



### useCameraPostProcesses : boolean



### onAfterUnbindObservable : [Observable](/classes/3.0/Observable)&lt;[RenderTargetTexture](/classes/3.0/RenderTargetTexture)&gt;

An event triggered when the texture is unbind.

@type {BABYLON.[Observable](/classes/3.0/Observable)}

### onAfterUnbind : () =&gt; void



### onBeforeRenderObservable : [Observable](/classes/3.0/Observable)&lt;number&gt;

An event triggered before rendering the texture

@type {BABYLON.[Observable](/classes/3.0/Observable)}

### onBeforeRender : (faceIndex: number) =&gt; void

Callback function before render

### onAfterRenderObservable : [Observable](/classes/3.0/Observable)&lt;number&gt;

An event triggered after rendering the texture

@type {BABYLON.[Observable](/classes/3.0/Observable)}

### onAfterRender : (faceIndex: number) =&gt; void

Callback function after render

### onClearObservable : [Observable](/classes/3.0/Observable)&lt;[Engine](/classes/3.0/Engine)&gt;

An event triggered after the texture clear

@type {BABYLON.[Observable](/classes/3.0/Observable)}

### onClear : ([Engine](/classes/3.0/Engine): [Engine](/classes/3.0/Engine)) =&gt; void



### renderTargetOptions : IRenderTargetOptions



### samples : number



### refreshRate : number

The rate of refresh

### canRescale : boolean



## Methods

### resetRefreshCounter() &rarr; void

Reset the refresh counter.
### addPostProcess(postProcess) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | postProcess | [PostProcess](/classes/3.0/PostProcess) | 

### clearPostProcesses(dispose) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | dispose | boolean | 

### removePostProcess(postProcess) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | postProcess | [PostProcess](/classes/3.0/PostProcess) | 

### isReady() &rarr; boolean


### getRenderSize() &rarr; number

Get the render size
@return number The render size
### scale(ratio) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ratio | number |      

### getReflectionTextureMatrix() &rarr; [Matrix](/classes/3.0/Matrix)


### resize(size) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | size | any |      The new size for the texture

### render(useCameraPostProcess, dumpForDebug) &rarr; void

Render the mirror texture

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | useCameraPostProcess | boolean |      True to use the camera post process
optional | dumpForDebug | boolean |      
### renderToTarget(faceIndex, currentRenderList, currentRenderListLength, useCameraPostProcess, dumpForDebug) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | faceIndex | number |    
 | currentRenderList | [AbstractMesh](/classes/3.0/AbstractMesh)[] |    
 | currentRenderListLength | number |  
 | useCameraPostProcess | boolean |      True to use the camera post process
### setRenderingOrder(renderingGroupId, opaqueSortCompareFn, alphaTestSortCompareFn, transparentSortCompareFn) &rarr; void

Overrides the default sort function applied in the renderging group to prepare the meshes.

This allowed control for front to back rendering or reversly depending of the special needs.

         * @param renderingGroupId The rendering group id corresponding to its index

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderingGroupId | number |  The rendering group id corresponding to its index  The rendering group id corresponding to its index
optional | opaqueSortCompareFn | (a: [SubMesh](/classes/3.0/SubMesh), b: [SubMesh](/classes/3.0/SubMesh)) =&gt; number |  The opaque queue comparison function use to sort.  The opaque queue comparison function use to sort.
optional | alphaTestSortCompareFn | (a: [SubMesh](/classes/3.0/SubMesh), b: [SubMesh](/classes/3.0/SubMesh)) =&gt; number |  The alpha test queue comparison function use to sort.  The alpha test queue comparison function use to sort.
### setRenderingAutoClearDepthStencil(renderingGroupId, autoClearDepthStencil) &rarr; void

Specifies whether or not the stencil and depth buffer are cleared between two rendering groups.

         * @param renderingGroupId The rendering group id corresponding to its index

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderingGroupId | number |  The rendering group id corresponding to its index  The rendering group id corresponding to its index
 | autoClearDepthStencil | boolean |  Automatically clears depth and stencil between groups if true.  Automatically clears depth and stencil between groups if true.
### clone() &rarr; [RenderTargetTexture](/classes/3.0/RenderTargetTexture)


### serialize() &rarr; any


### dispose() &rarr; void


