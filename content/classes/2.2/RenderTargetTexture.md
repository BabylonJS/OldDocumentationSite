---
ID_PAGE: 25224
PG_TITLE: RenderTargetTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
    - TargetTexture
---
##Description

class [RenderTargetTexture](/classes/2.2/RenderTargetTexture) extends [Texture](/classes/2.2/Texture)



##Constructor

##new [RenderTargetTexture](/classes/2.2/RenderTargetTexture)(name, size, scene, generateMipMaps, doNotChangeAspectRatio, type)

Create a new [MirrorTexture](/classes/2.2/MirrorTexture).
A tutorial about advanced texturing can be found here : http://doc.babylonjs.com/tutorials/01._Advanced_Texturing

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  Name of the texture
 | size | any |  The new size for the texture
 | scene | [Scene](/classes/2.2/Scene) |  [Scene](/classes/2.2/Scene) which contain the texture
optional | generateMipMaps | boolean |  True to generate the mipmaps
optional | doNotChangeAspectRatio | boolean |  
##Members

###renderList : [AbstractMesh](/classes/2.2/AbstractMesh)[]

The render list

###renderParticles : boolean

True to render particles ; False otherwise

###renderSprites : boolean

True to render sprites ; False otherwise

###coordinatesMode : number

The coordinates mode

###onBeforeRender : () =&gt; void

Callback function before render

###onAfterRender : () =&gt; void

Callback function after render

###onAfterUnbind : () =&gt; void



###onClear : (engine: [Engine](/classes/2.2/Engine)) =&gt; void



###activeCamera : [Camera](/classes/2.2/Camera)

The active camera

###customRenderFunction : (opaqueSubMeshes: [SmartArray](/classes/2.2/SmartArray)&lt;[SubMesh](/classes/2.2/SubMesh)&gt;, transparentSubMeshes: [SmartArray](/classes/2.2/SmartArray)&lt;[SubMesh](/classes/2.2/SubMesh)&gt;, alphaTestSubMeshes: [SmartArray](/classes/2.2/SmartArray)&lt;[SubMesh](/classes/2.2/SubMesh)&gt;, beforeTransparents: () =&gt; void) =&gt; void



###refreshRate : number

The rate of refresh

###canRescale : boolean



##Methods

###resetRefreshCounter() &rarr; void

Reset the refresh counter.
###isReady() &rarr; boolean


###getRenderSize() &rarr; number

Get the render size
@return number The render size
###scale(ratio) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | ratio | number |  

###resize(size, generateMipMaps) &rarr; void

Resize the mirror texture

####Parameters
 | Name | Type | Description
---|---|---|---
 | size | any |  The new size for the texture
optional | generateMipMaps | boolean |  True to generate the mipmaps
###render(useCameraPostProcess, dumpForDebug) &rarr; void

Render the mirror texture

####Parameters
 | Name | Type | Description
---|---|---|---
optional | useCameraPostProcess | boolean |  True to use the camera post process
optional | dumpForDebug | boolean |  
###clone() &rarr; [RenderTargetTexture](/classes/2.2/RenderTargetTexture)


