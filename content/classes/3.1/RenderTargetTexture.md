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



## Members

### isCube : boolean


### static REFRESHRATE_RENDER_ONCE : number


### static REFRESHRATE_RENDER_ONEVERYFRAME : number


### static REFRESHRATE_RENDER_ONEVERYTWOFRAMES : number


### renderListPredicate : ([AbstractMesh](/classes/3.1/AbstractMesh): [AbstractMesh](/classes/3.1/AbstractMesh)) =&gt; boolean

Use this predicate to dynamically define the list of mesh you want to render.

If set, the renderList property will be overwritten.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | [AbstractMesh](/classes/3.1/AbstractMesh) | [AbstractMesh](/classes/3.1/AbstractMesh) | 

### renderList : Nullable&lt;Array&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;&gt;

Use this list to define the list of mesh you want to render.
### renderParticles : boolean


### renderSprites : boolean


### coordinatesMode : number


### activeCamera : Nullable&lt;[Camera](/classes/3.1/Camera)&gt;


### customRenderFunction : (opaqueSubMeshes: [SmartArray](/classes/3.1/SmartArray)&lt;[SubMesh](/classes/3.1/SubMesh)&gt;, alphaTestSubMeshes: [SmartArray](/classes/3.1/SmartArray)&lt;[SubMesh](/classes/3.1/SubMesh)&gt;, transparentSubMeshes: [SmartArray](/classes/3.1/SmartArray)&lt;[SubMesh](/classes/3.1/SubMesh)&gt;, depthOnlySubMeshes: [SmartArray](/classes/3.1/SmartArray)&lt;[SubMesh](/classes/3.1/SubMesh)&gt;, beforeTransparents: () =&gt; void) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | opaqueSubMeshes | [SmartArray](/classes/3.1/SmartArray)&lt;[SubMesh](/classes/3.1/SubMesh)&gt; | 
 | alphaTestSubMeshes | [SmartArray](/classes/3.1/SmartArray)&lt;[SubMesh](/classes/3.1/SubMesh)&gt; | 
 | transparentSubMeshes | [SmartArray](/classes/3.1/SmartArray)&lt;[SubMesh](/classes/3.1/SubMesh)&gt; | 
 | depthOnlySubMeshes | [SmartArray](/classes/3.1/SmartArray)&lt;[SubMesh](/classes/3.1/SubMesh)&gt; | 
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



#### Parameters
 | Name | Type | Description
---|---|---|---
 | faceIndex | number | 

### onAfterRenderObservable : [Observable](/classes/3.1/Observable)&lt;number&gt;

An event triggered after rendering the texture

@type {BABYLON.[Observable](/classes/3.1/Observable)}
### onAfterRender : (faceIndex: number) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | faceIndex | number | 

### onClearObservable : [Observable](/classes/3.1/Observable)&lt;[Engine](/classes/3.1/Engine)&gt;

An event triggered after the texture clear

@type {BABYLON.[Observable](/classes/3.1/Observable)}
### onClear : ([Engine](/classes/3.1/Engine): [Engine](/classes/3.1/Engine)) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | [Engine](/classes/3.1/Engine) | [Engine](/classes/3.1/Engine) | 

### clearColor : [Color4](/classes/3.1/Color4)


