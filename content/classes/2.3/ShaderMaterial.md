---
ID_PAGE: 25216
PG_TITLE: ShaderMaterial
PG_VERSION: 2.1
TAGS:
    - Material
---
## Description

class [ShaderMaterial](/classes/2.3/ShaderMaterial) extends [Material](/classes/2.3/Material)



## Constructor

##  new [ShaderMaterial](/classes/2.3/ShaderMaterial)(name, scene, shaderPath, options)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the matrix
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) which contain this material
 | shaderPath | any |   The path to shader files if any
## Methods

### needAlphaBlending() &rarr; boolean


### needAlphaTesting() &rarr; boolean


### setTexture(name, texture) &rarr; [ShaderMaterial](/classes/2.3/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the matrix
 | texture | [Texture](/classes/2.3/Texture) |   [Texture](/classes/2.3/Texture) to set to the material
### setFloat(name, value) &rarr; [ShaderMaterial](/classes/2.3/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the matrix
 | value | number |   The matrix
### setFloats(name, value) &rarr; [ShaderMaterial](/classes/2.3/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the matrix
 | value | number[] |   The matrix
### setColor3(name, value) &rarr; [ShaderMaterial](/classes/2.3/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the matrix
 | value | [Color3](/classes/2.3/Color3) |   The matrix
### setColor4(name, value) &rarr; [ShaderMaterial](/classes/2.3/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the matrix
 | value | [Color4](/classes/2.3/Color4) |   The matrix
### setVector2(name, value) &rarr; [ShaderMaterial](/classes/2.3/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the matrix
 | value | [Vector2](/classes/2.3/Vector2) |   The matrix
### setVector3(name, value) &rarr; [ShaderMaterial](/classes/2.3/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the matrix
 | value | [Vector3](/classes/2.3/Vector3) |   The matrix
### setVector4(name, value) &rarr; [ShaderMaterial](/classes/2.3/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the matrix
 | value | [Vector4](/classes/2.3/Vector4) |   The matrix
### setMatrix(name, value) &rarr; [ShaderMaterial](/classes/2.3/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the matrix
 | value | [Matrix](/classes/2.3/Matrix) |   The matrix
### setMatrix3x3(name, value) &rarr; [ShaderMaterial](/classes/2.3/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the matrix
 | value | Float32Array |   The matrix
### setMatrix2x2(name, value) &rarr; [ShaderMaterial](/classes/2.3/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the matrix
 | value | Float32Array |   The matrix
### isReady(mesh, useInstances) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](/classes/2.3/AbstractMesh) |   
optional | useInstances | boolean |   
### bindOnlyWorldMatrix(world) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.3/Matrix) |   [Matrix](/classes/2.3/Matrix) to bind the material

### bind(world, mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.3/Matrix) |   [Matrix](/classes/2.3/Matrix) to bind the material
optional | mesh | [Mesh](/classes/2.3/Mesh) |   
### clone(name) &rarr; [ShaderMaterial](/classes/2.3/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   Name of the matrix

### dispose(forceDisposeEffect) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | forceDisposeEffect | boolean |   True to force the dispose

### serialize() &rarr; any


### static  Parse(source, scene, rootUrl) &rarr; [ShaderMaterial](/classes/2.3/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | any | 
 | scene | [Scene](/classes/2.3/Scene) |   [Scene](/classes/2.3/Scene) which contain this material
 | rootUrl | string | 
