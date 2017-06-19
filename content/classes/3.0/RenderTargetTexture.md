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



