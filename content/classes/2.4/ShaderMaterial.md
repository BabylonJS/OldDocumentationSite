---
ID_PAGE: 25216
PG_TITLE: ShaderMaterial
PG_VERSION: 2.1
TAGS:
    - Material
---
## Description

class [ShaderMaterial](/classes/2.4/ShaderMaterial) extends [Material](/classes/2.4/Material)



## Constructor

## new [ShaderMaterial](/classes/2.4/ShaderMaterial)(name, scene, shaderPath, options)

A material using a shader to render a special effect. When you create a [ShaderMaterial](/classes/2.4/ShaderMaterial), you have to
specify the DOM element used to store the shaders or the base name of the files where the shaders are.
If you choose to use files, you must create a file for each shader and use the following pattern basename.vertex.fx and basename.fragment,.fx.
A tutorial abouth ShaderMaterials can be found here : http://blogs.msdn.com/b/eternalcoding/archive/2014/04/17/learning-shaders-create-your-own-shaders-with-babylon-js.aspx

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    Name of the matrix
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) which contain this material
 | shaderPath | any |    The path to shader files if any
## Methods

### needAlphaBlending() &rarr; boolean

Function to know if material need alpha blending
@return boolean True if need alpha blending ; False if not
### needAlphaTesting() &rarr; boolean

Function to know if material need alpha testing
@return boolean True if need alpha testing ; False if not
### setTexture(name, texture) &rarr; [ShaderMaterial](/classes/2.4/ShaderMaterial)

Set a texture to the material
@return [ShaderMaterial](/classes/2.4/ShaderMaterial) Return a new shaderMaterial

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    Name of the matrix
 | texture | [Texture](/classes/2.4/Texture) |    [Texture](/classes/2.4/Texture) to set to the material
### setFloat(name, value) &rarr; [ShaderMaterial](/classes/2.4/ShaderMaterial)

Set float to the material
@return [ShaderMaterial](/classes/2.4/ShaderMaterial) Return a new shaderMaterial

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    Name of the matrix
 | value | number |    The matrix
### setFloats(name, value) &rarr; [ShaderMaterial](/classes/2.4/ShaderMaterial)

Set floats to the material
@return [ShaderMaterial](/classes/2.4/ShaderMaterial) Return a new shaderMaterial

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    Name of the matrix
 | value | number[] |    The matrix
### setColor3(name, value) &rarr; [ShaderMaterial](/classes/2.4/ShaderMaterial)

Set color3 to the material
@return [ShaderMaterial](/classes/2.4/ShaderMaterial) Return a new shaderMaterial

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    Name of the matrix
 | value | [Color3](/classes/2.4/Color3) |    The matrix
### setColor4(name, value) &rarr; [ShaderMaterial](/classes/2.4/ShaderMaterial)

Set color4 to the material
@return [ShaderMaterial](/classes/2.4/ShaderMaterial) Return a new shaderMaterial

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    Name of the matrix
 | value | [Color4](/classes/2.4/Color4) |    The matrix
### setVector2(name, value) &rarr; [ShaderMaterial](/classes/2.4/ShaderMaterial)

Set a vector2 to the material
@return [ShaderMaterial](/classes/2.4/ShaderMaterial) Return a new shaderMaterial

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    Name of the matrix
 | value | [Vector2](/classes/2.4/Vector2) |    The matrix
### setVector3(name, value) &rarr; [ShaderMaterial](/classes/2.4/ShaderMaterial)

Set a vector3 to the material

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    Name of the matrix
 | value | [Vector3](/classes/2.4/Vector3) |    The matrix
### setVector4(name, value) &rarr; [ShaderMaterial](/classes/2.4/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    Name of the matrix
 | value | [Vector4](/classes/2.4/Vector4) |    The matrix
### setMatrix(name, value) &rarr; [ShaderMaterial](/classes/2.4/ShaderMaterial)

Set a matrix to the material

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    Name of the matrix
 | value | [Matrix](/classes/2.4/Matrix) |    The matrix
### setMatrix3x3(name, value) &rarr; [ShaderMaterial](/classes/2.4/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    Name of the matrix
 | value | Float32Array |    The matrix
### setMatrix2x2(name, value) &rarr; [ShaderMaterial](/classes/2.4/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    Name of the matrix
 | value | Float32Array |    The matrix
### isReady(mesh, useInstances) &rarr; boolean

Function to know if the material is ready
@return True if the material is ready ; False if not

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](/classes/2.4/AbstractMesh) |    
optional | useInstances | boolean |    
### bindOnlyWorldMatrix(world) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.4/Matrix) |    [Matrix](/classes/2.4/Matrix) to bind the material

### bind(world, mesh) &rarr; void

Function to bind the material

#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.4/Matrix) |    [Matrix](/classes/2.4/Matrix) to bind the material
optional | mesh | [Mesh](/classes/2.4/Mesh) |    
### clone(name) &rarr; [ShaderMaterial](/classes/2.4/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |    Name of the matrix

### dispose(forceDisposeEffect, forceDisposeTextures) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | forceDisposeEffect | boolean |    True to force the dispose
optional | forceDisposeTextures | boolean | 
### serialize() &rarr; any


### static Parse(source, scene, rootUrl) &rarr; [ShaderMaterial](/classes/2.4/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | any |  
 | scene | [Scene](/classes/2.4/Scene) |    [Scene](/classes/2.4/Scene) which contain this material
 | rootUrl | string |  
