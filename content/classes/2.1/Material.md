---
ID_PAGE: 25214
PG_TITLE: Material
PG_VERSION: 2.1
TAGS:
    - Material
---
##new [Material](/classes/Material)(name, scene, doNotAdd)




Create a new [Material](/classes/Material).
Everything to know about material can be found here : http://doc.babylonjs.com/tutorials/04._Materialss
And here : http://blogs.msdn.com/b/eternalcoding/archive/2013/07/01/babylon-js-unleash-the-standardmaterial-for-your-babylon-js-game.aspx






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the material
 | scene | [Scene](/classes/Scene) | 
optional | doNotAdd | boolean | Not add the material
---

##Members

###name : string





Name of the material




###static TriangleFillMode : number






###static WireFrameFillMode : number






###static PointFillMode : number






###id : string





ID of the material




###checkReadyOnEveryCall : boolean





True to check if the material is ready on every call




###checkReadyOnlyOnce : boolean





True to check if the material is ready only once




###state : string





State of the material




###alpha : number





Alpha of the material




###backFaceCulling : boolean





True to not render material on back face

Default value : true




###onCompiled : (effect: [Effect](/classes/Effect)) =&gt; void





Callback function on compiled




###onError : (effect: [Effect](/classes/Effect), errors: string) =&gt; void





Callback function on error




###onDispose : () =&gt; void





Callback function on dispose




###onBind : (material: [Material](/classes/Material), mesh: [Mesh](/classes/Mesh)) =&gt; void






###getRenderTargetTextures : () =&gt; SmartArray&lt;RenderTargetTexture&gt;





Get the render target textures







###pointSize : number






###zOffset : number


###wireframe : boolean





True if this material should be rendered in wireframe ; False otherwise

Default value : False




###pointsCloud : boolean






###fillMode : number














##Methods

###isReady(mesh, useInstances) &rarr; boolean
Function to know if material is ready
@return boolean True if ready ; False if not







####Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](/classes/AbstractMesh) | The mesh to test
optional | useInstances | boolean | 
---

###getEffect() &rarr; [Effect](/classes/Effect)
Get effect of the material
@return [Effect](/classes/Effect) The effect








###getScene() &rarr; [Scene](/classes/Scene)
Get the scene which contain the material
@return [Scene](/classes/Scene) The scene which contain the material








###needAlphaBlending() &rarr; boolean
Function to know if alpha is necessary (1.0 = no transparency)
@return boolean True if alpha blending is needed ; False if not








###needAlphaTesting() &rarr; boolean
Function to know if alpha testing is necessary








###getAlphaTestTexture() &rarr; [BaseTexture](/classes/BaseTexture)
Function to get the alpha test texture
@return [BaseTexture](/classes/BaseTexture) The alpha test texture








###trackCreation(onCompiled, onError) &rarr; void
Track the creation







####Parameters
 | Name | Type | Description
---|---|---|---
 | onCompiled | (effect: [Effect](/classes/Effect)) =&gt; void | Callback function called on compiled (effect on compiled)
 | onError | (effect: [Effect](/classes/Effect), errors: string) =&gt; void | Callback function called on error (effect on error, error string)
---

###bind(world, mesh) &rarr; void
Function to bind the material







####Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/Matrix) | The world matrix
optional | mesh | [Mesh](/classes/Mesh) | The mesh to bind
---

###bindOnlyWorldMatrix(world) &rarr; void
Function to bind only the world matrix







####Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/Matrix) | The world matrix
---

###unbind() &rarr; void
Function to unbind








###dispose(forceDisposeEffect) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
optional | forceDisposeEffect | boolean | True to force the dispose
---
