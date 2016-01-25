---
ID_PAGE: 25216
PG_TITLE: ShaderMaterial
PG_VERSION: 2.1
TAGS:
    - Material
---
##new [ShaderMaterial](/classes/ShaderMaterial)(name, scene, shaderPath, options)




A material using a shader to render a special effect. When you create a [ShaderMaterial](/classes/ShaderMaterial), you have to
specify the DOM element used to store the shaders or the base name of the files where the shaders are.
If you choose to use files, you must create a file for each shader and use the following pattern basename.vertex.fx and basename.fragment,.fx.
A tutorial abouth ShaderMaterials can be found here : http://blogs.msdn.com/b/eternalcoding/archive/2014/04/17/learning-shaders-create-your-own-shaders-with-babylon-js.aspx






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | This material name
 | scene | [Scene](/classes/Scene) | [Scene](/classes/Scene) which contain this material
 | shaderPath | any | The path to shader files if any
 | options | any | An options object should contain needAlphaBlending, needAlphaTesting, attributes, uniforms and samplers
---

##Extends
 [Material](/classes/Material)


##Methods

###needAlphaBlending() &rarr; boolean
Function to know if material need alpha blending
@return boolean True if need alpha blending ; False if not








###needAlphaTesting() &rarr; boolean
Function to know if material need alpha testing
@return boolean True if need alpha testing ; False if not








###setTexture(name, texture) &rarr; [ShaderMaterial](/classes/ShaderMaterial)
Set a texture to the material
@return [ShaderMaterial](/classes/ShaderMaterial) Return a new shaderMaterial







####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the texture
 | texture | [Texture](/classes/Texture) | [Texture](/classes/Texture) to set to the material
---

###setFloat(name, value) &rarr; [ShaderMaterial](/classes/ShaderMaterial)
Set float to the material
@return [ShaderMaterial](/classes/ShaderMaterial) Return a new shaderMaterial







####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the float
 | value | number | Value of the float
---

###setFloats(name, value) &rarr; [ShaderMaterial](/classes/ShaderMaterial)
Set floats to the material
@return [ShaderMaterial](/classes/ShaderMaterial) Return a new shaderMaterial







####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the floats
 | value | number[] | Array of floats value
---

###setColor3(name, value) &rarr; [ShaderMaterial](/classes/ShaderMaterial)
Set color3 to the material
@return [ShaderMaterial](/classes/ShaderMaterial) Return a new shaderMaterial







####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the color3
 | value | [Color3](/classes/Color3) | The color3
---

###setColor4(name, value) &rarr; [ShaderMaterial](/classes/ShaderMaterial)
Set color4 to the material
@return [ShaderMaterial](/classes/ShaderMaterial) Return a new shaderMaterial







####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the color4
 | value | [Color4](/classes/Color4) | The color4
---

###setVector2(name, value) &rarr; [ShaderMaterial](/classes/ShaderMaterial)
Set a vector2 to the material
@return [ShaderMaterial](/classes/ShaderMaterial) Return a new shaderMaterial







####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the vector2
 | value | [Vector2](/classes/Vector2) | The vector2
---

###setVector3(name, value) &rarr; [ShaderMaterial](/classes/ShaderMaterial)
Set a vector3 to the material







####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the vector3
 | value | [Vector3](/classes/Vector3) | The vector3
---

###setMatrix(name, value) &rarr; [ShaderMaterial](/classes/ShaderMaterial)
Set a matrix to the material







####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the matrix
 | value | [Matrix](/classes/Matrix) | The matrix
---

###isReady(mesh, useInstances) &rarr; boolean
Function to know if the material is ready
@return True if the material is ready ; False if not







####Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](/classes/AbstractMesh) | 
optional | useInstances | boolean | 
---

###bindOnlyWorldMatrix(world) &rarr; void





####Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/Matrix) | 
---

###bind(world, mesh) &rarr; void
Function to bind the material







####Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/Matrix) | [Matrix](/classes/Matrix) to bind the material
optional | mesh | [Mesh](/classes/Mesh) | 
---

###dispose(forceDisposeEffect) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
optional | forceDisposeEffect | boolean | True to force the dispose
---
