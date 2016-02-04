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

##  new [RenderTargetTexture](/classes/2.3/RenderTargetTexture)(name, size, scene, generateMipMaps, doNotChangeAspectRatio, type, isCube)



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



### static  REFRESHRATE_RENDER_ONCE : number



### static  REFRESHRATE_RENDER_ONEVERYFRAME : number



### static  REFRESHRATE_RENDER_ONEVERYTWOFRAMES : number



### renderList : [AbstractMesh](/classes/2.3/AbstractMesh)[]



### renderParticles : boolean



### renderSprites : boolean



### coordinatesMode : number



### onBeforeRender : (faceIndex: number) =&gt; void



### onAfterRender : (faceIndex: number) =&gt; void



### onAfterUnbind : () =&gt; void



### onClear : (engine: [Engine](/classes/2.3/Engine)) =&gt; void



### activeCamera : [Camera](/classes/2.3/Camera)



### customRenderFunction : (opaqueSubMeshes: [SmartArray](/classes/2.3/SmartArray)&lt;[SubMesh](/classes/2.3/SubMesh)&gt;, transparentSubMeshes: [SmartArray](/classes/2.3/SmartArray)&lt;[SubMesh](/classes/2.3/SubMesh)&gt;, alphaTestSubMeshes: [SmartArray](/classes/2.3/SmartArray)&lt;[SubMesh](/classes/2.3/SubMesh)&gt;, beforeTransparents: () =&gt; void) =&gt; void



### refreshRate : number



### canRescale : boolean



## Methods

### resetRefreshCounter() &rarr; void


### isReady() &rarr; boolean


### getRenderSize() &rarr; number


### scale(ratio) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ratio | number |   

### getReflectionTextureMatrix() &rarr; [Matrix](/classes/2.3/Matrix)


### resize(size, generateMipMaps) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | size | any |   The new size for the texture
optional | generateMipMaps | boolean |   True to generate the mipmaps
### render(useCameraPostProcess, dumpForDebug) &rarr; void



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


