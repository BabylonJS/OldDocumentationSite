---
ID_PAGE: 25224
PG_TITLE: RenderTargetTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
    - Texture
    - TargetTexture
---
##new [RenderTargetTexture](/classes/RenderTargetTexture)(name, size, scene, generateMipMaps, doNotChangeAspectRatio, type)




Create a new [MirrorTexture](/classes/MirrorTexture).
A tutorial about advanced texturing can be found here : http://doc.babylonjs.com/tutorials/01._Advanced_Texturing






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the texture
 | size | any | Size of the texture
 | scene | [Scene](/classes/Scene) | [Scene](/classes/Scene) which contain the texture
optional | generateMipMaps | boolean | True to generate a mipmap
optional | doNotChangeAspectRatio | boolean | 
optional | type | number | 
---

##Extends
 [Texture](/classes/Texture)
##Members

###renderList : [AbstractMesh](/classes/AbstractMesh)[]





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


###onClear : (engine: [Engine](/classes/Engine)) =&gt; void


###activeCamera : [Camera](/classes/Camera)





The active camera




###customRenderFunction : (opaqueSubMeshes: SmartArray&lt;SubMesh&gt;, transparentSubMeshes: SmartArray&lt;SubMesh&gt;, alphaTestSubMeshes: SmartArray&lt;SubMesh&gt;, beforeTransparents?: () =&gt; void) =&gt; void





Custom render function

@param opaqueSubMeshes

@param transparentSubMeshes

@param alphaTestSubMeshes

@param beforeTransparents




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
---

###resize(size, generateMipMaps) &rarr; void
Resize the mirror texture







####Parameters
 | Name | Type | Description
---|---|---|---
 | size | any | The new size for the texture
optional | generateMipMaps | boolean | True to generate the mipmaps
---

###render(useCameraPostProcess, dumpForDebug) &rarr; void
Render the mirror texture







####Parameters
 | Name | Type | Description
---|---|---|---
optional | useCameraPostProcess | boolean | True to use the camera post process
optional | dumpForDebug | boolean | 
---

###clone() &rarr; [RenderTargetTexture](/classes/RenderTargetTexture)

