---
ID_PAGE: 25216
PG_TITLE: ShaderMaterial
PG_VERSION: 2.1
TAGS:
    - Material
---
## Description

class [ShaderMaterial](/classes/3.1/ShaderMaterial) extends [Material](/classes/3.1/Material)



## Constructor

## new [ShaderMaterial](/classes/3.1/ShaderMaterial)(name, scene, shaderPath, options)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | shaderPath | any | 
## Methods

### getClassName() &rarr; string


### needAlphaBlending() &rarr; boolean


### needAlphaTesting() &rarr; boolean


### setTexture(name, texture) &rarr; [ShaderMaterial](/classes/3.1/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | texture | [Texture](/classes/3.1/Texture) | 
### setTextureArray(name, textures) &rarr; [ShaderMaterial](/classes/3.1/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | textures | [Texture](/classes/3.1/Texture)[] | 
### setFloat(name, value) &rarr; [ShaderMaterial](/classes/3.1/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | number | 
### setFloats(name, value) &rarr; [ShaderMaterial](/classes/3.1/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | number[] | 
### setColor3(name, value) &rarr; [ShaderMaterial](/classes/3.1/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Color3](/classes/3.1/Color3) | 
### setColor3Array(name, value) &rarr; [ShaderMaterial](/classes/3.1/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Color3](/classes/3.1/Color3)[] | 
### setColor4(name, value) &rarr; [ShaderMaterial](/classes/3.1/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Color4](/classes/3.1/Color4) | 
### setVector2(name, value) &rarr; [ShaderMaterial](/classes/3.1/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Vector2](/classes/3.1/Vector2) | 
### setVector3(name, value) &rarr; [ShaderMaterial](/classes/3.1/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Vector3](/classes/3.1/Vector3) | 
### setVector4(name, value) &rarr; [ShaderMaterial](/classes/3.1/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Vector4](/classes/3.1/Vector4) | 
### setMatrix(name, value) &rarr; [ShaderMaterial](/classes/3.1/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | [Matrix](/classes/3.1/Matrix) | 
### setMatrix3x3(name, value) &rarr; [ShaderMaterial](/classes/3.1/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | Float32Array | 
### setMatrix2x2(name, value) &rarr; [ShaderMaterial](/classes/3.1/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | Float32Array | 
### setArray3(name, value) &rarr; [ShaderMaterial](/classes/3.1/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | value | number[] | 
### isReady(mesh, useInstances) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
optional | useInstances | boolean | 
### bindOnlyWorldMatrix(world) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/3.1/Matrix) | 

### bind(world, mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/3.1/Matrix) | 
optional | mesh | [Mesh](/classes/3.1/Mesh) | 
### getActiveTextures() &rarr; [BaseTexture](/classes/3.1/BaseTexture)[]


### hasTexture(texture) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | [BaseTexture](/classes/3.1/BaseTexture) | 

### clone(name) &rarr; [ShaderMaterial](/classes/3.1/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### dispose(forceDisposeEffect, forceDisposeTextures) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | forceDisposeEffect | boolean | 
optional | forceDisposeTextures | boolean | 
### serialize() &rarr; any


### static Parse(source, scene, rootUrl) &rarr; [ShaderMaterial](/classes/3.1/ShaderMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | rootUrl | string | 
