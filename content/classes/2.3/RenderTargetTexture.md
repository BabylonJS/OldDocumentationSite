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

class [RenderTargetTexture](/classes/2.3/RenderTargetTexture) extends [Texture](/classes/2.3/Texture)



## Constructor

## new [RenderTargetTexture](/classes/2.3/RenderTargetTexture)(name, size, scene, generateMipMaps, doNotChangeAspectRatio, type, isCube)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the texture
 | size | any |   The new size for the texture
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) which contain the texture
optional | generateMipMaps | boolean |   True to generate the mipmaps
optional | doNotChangeAspectRatio | boolean |   
optional | type | number | 
## Members

### isCube : boolean



### static REFRESHRATE_RENDER_ONCE : number



### static REFRESHRATE_RENDER_ONEVERYFRAME : number



### static REFRESHRATE_RENDER_ONEVERYTWOFRAMES : number



### renderList : [AbstractMesh](/classes/2.3/AbstractMesh)[]

The render list

### renderParticles : boolean

True to render particles ; False otherwise

### renderSprites : boolean

True to render sprites ; False otherwise

### coordinatesMode : number

The coordinates mode

### onBeforeRender : (faceIndex: number) =&gt; void

Callback function before render

### onAfterRender : (faceIndex: number) =&gt; void

Callback function after render

### onAfterUnbind : () =&gt; void



### onClear : (engine: [Engine](/classes/2.3/Engine)) =&gt; void



### activeCamera : [Camera](/classes/2.3/Camera)

The active camera

### customRenderFunction : (opaqueSubMeshes: [SmartArray](/classes/2.3/SmartArray)&lt;[SubMesh](/classes/2.3/SubMesh)&gt;, transparentSubMeshes: [SmartArray](/classes/2.3/SmartArray)&lt;[SubMesh](/classes/2.3/SubMesh)&gt;, alphaTestSubMeshes: [SmartArray](/classes/2.3/SmartArray)&lt;[SubMesh](/classes/2.3/SubMesh)&gt;, beforeTransparents: () =&gt; void) =&gt; void



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

### getReflectionTextureMatrix() &rarr; [Matrix](/classes/2.3/Matrix)


### resize(size, generateMipMaps) &rarr; void

Resize the mirror texture

#### Parameters
 | Name | Type | Description
---|---|---|---
 | size | any |   The new size for the texture
optional | generateMipMaps | boolean |   True to generate the mipmaps
### render(useCameraPostProcess, dumpForDebug) &rarr; void

Render the mirror texture

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | useCameraPostProcess | boolean |   True to use the camera post process
optional | dumpForDebug | boolean |   
### renderToTarget(faceIndex, currentRenderList, useCameraPostProcess, dumpForDebug) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | faceIndex | number | 
 | currentRenderList | [AbstractMesh](/classes/2.3/AbstractMesh)[] | 
 | useCameraPostProcess | boolean |   True to use the camera post process
### clone() &rarr; [RenderTargetTexture](/classes/2.3/RenderTargetTexture)


### serialize() &rarr; any


