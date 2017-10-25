---
TAGS:
---
## Description

class [UniformBuffer](/classes/3.1/UniformBuffer)



## Constructor

## new [UniformBuffer](/classes/3.1/UniformBuffer)(engine, data, dynamic)

Uniform buffer objects.

         * Handles blocks of uniform on the GPU.

         * If WebGL 2 is not available, this class falls back on traditionnal setUniformXXX calls.

         * For more information, please refer to :

https://www.khronos.org/opengl/wiki/Uniform_Buffer_Object

#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](/classes/3.1/Engine) | 
optional | data | number[] | 
optional | dynamic | boolean | 
## Members

### updateMatrix3x3 : (name: string, matrix: Float32Array) =&gt; void

Wrapper for updateUniform.

@method updateMatrix3x3

@param {string} name Name of the uniform, as used in the uniform block in the shader.

@param {Float32Array} matrix

### updateMatrix2x2 : (name: string, matrix: Float32Array) =&gt; void

Wrapper for updateUniform.

@param {string} name Name of the uniform, as used in the uniform block in the shader.

@param {Float32Array} matrix

### updateFloat : (name: string, x: number) =&gt; void

Wrapper for updateUniform.

@param {string} name Name of the uniform, as used in the uniform block in the shader.

@param {number} x

### updateFloat2 : (name: string, x: number, y: number, suffix: string) =&gt; void

Wrapper for updateUniform.

@param {string} name Name of the uniform, as used in the uniform block in the shader.

@param {number} x

@param {number} y

@param {string} [suffix] Suffix to add to the uniform name.

### updateFloat3 : (name: string, x: number, y: number, z: number, suffix: string) =&gt; void

Wrapper for updateUniform.

@param {string} name Name of the uniform, as used in the uniform block in the shader.

@param {number} x

@param {number} y

@param {number} z

@param {string} [suffix] Suffix to add to the uniform name.

### updateFloat4 : (name: string, x: number, y: number, z: number, w: number, suffix: string) =&gt; void

Wrapper for updateUniform.

@param {string} name Name of the uniform, as used in the uniform block in the shader.

@param {number} x

@param {number} y

@param {number} z

@param {number} w

@param {string} [suffix] Suffix to add to the uniform name.

### updateMatrix : (name: string, mat: [Matrix](/classes/3.1/Matrix)) =&gt; void

Wrapper for updateUniform.

@param {string} name Name of the uniform, as used in the uniform block in the shader.

@param {[Matrix](/classes/3.1/Matrix)} A 4x4 matrix.

### updateVector3 : (name: string, vector: [Vector3](/classes/3.1/Vector3)) =&gt; void

Wrapper for updateUniform.

@param {string} name Name of the uniform, as used in the uniform block in the shader.

@param {[Vector3](/classes/3.1/Vector3)} vector

### updateVector4 : (name: string, vector: [Vector4](/classes/3.1/Vector4)) =&gt; void

Wrapper for updateUniform.

@param {string} name Name of the uniform, as used in the uniform block in the shader.

@param {[Vector4](/classes/3.1/Vector4)} vector

### updateColor3 : (name: string, color: [Color3](/classes/3.1/Color3), suffix: string) =&gt; void

Wrapper for updateUniform.

@param {string} name Name of the uniform, as used in the uniform block in the shader.

@param {[Color3](/classes/3.1/Color3)} color

@param {string} [suffix] Suffix to add to the uniform name.

### updateColor4 : (name: string, color: [Color3](/classes/3.1/Color3), alpha: number, suffix: string) =&gt; void

Wrapper for updateUniform.

@param {string} name Name of the uniform, as used in the uniform block in the shader.

@param {[Color3](/classes/3.1/Color3)} color

@param {number} alpha

@param {string} [suffix] Suffix to add to the uniform name.

### useUbo : boolean

Indicates if the buffer is using the WebGL2 UBO implementation,

or just falling back on setUniformXXX calls.

### isSync : boolean

Indicates if the WebGL underlying uniform buffer is in sync

with the javascript cache data.

## Methods

### isDynamic() &rarr; boolean

Indicates if the WebGL underlying uniform buffer is dynamic.

Also, a dynamic [UniformBuffer](/classes/3.1/UniformBuffer) will disable cache verification and always

update the underlying WebGL uniform buffer to the GPU.
### getData() &rarr; Float32Array

The data cache on JS side.
### getBuffer() &rarr; Nullable&lt;WebGLBuffer&gt;

The underlying WebGL Uniform buffer.
### addUniform(name, size, number) &rarr; void

Adds an uniform in the buffer.

Warning : the subsequents calls of this function must be in the same order as declared in the shader

for the layout to be correct !

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | size | number or number | 
### addMatrix(name, mat) &rarr; void

Wrapper for addUniform.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | mat | [Matrix](/classes/3.1/Matrix) | 
### addFloat2(name, x, y) &rarr; void

Wrapper for addUniform.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | x | number | 
 | y | number | 
### addFloat3(name, x, y, z) &rarr; void

Wrapper for addUniform.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | x | number | 
 | y | number | 
### addColor3(name, color) &rarr; void

Wrapper for addUniform.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | color | [Color3](/classes/3.1/Color3) | 
### addColor4(name, color, alpha) &rarr; void

Wrapper for addUniform.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | color | [Color3](/classes/3.1/Color3) | 
 | alpha | number | 
### addVector3(name, vector) &rarr; void

Wrapper for addUniform.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | vector | [Vector3](/classes/3.1/Vector3) | 
### addMatrix3x3(name) &rarr; void

Wrapper for addUniform.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### addMatrix2x2(name) &rarr; void

Wrapper for addUniform.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### create() &rarr; void

Effectively creates the WebGL Uniform [Buffer](/classes/3.1/Buffer), once layout is completed with `addUniform`.
### update() &rarr; void

Updates the WebGL Uniform [Buffer](/classes/3.1/Buffer) on the GPU.

If the `dynamic` flag is set to true, no cache comparison is done.

Otherwise, the buffer will be updated only if the cache differs.
### updateUniform(uniformName, data, Float32Array, size) &rarr; void

Updates the value of an uniform. The `update` method must be called afterwards to make it effective in the GPU.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | data | number[] or Float32Array | 
 | size | number | 
### setTexture(name, texture) &rarr; void

Sets a sampler uniform on the effect.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | texture | [BaseTexture](/classes/3.1/BaseTexture) | 
### updateUniformDirectly(uniformName, data, Float32Array) &rarr; void

Directly updates the value of the uniform in the cache AND on the GPU.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniformName | string | 
 | data | number[] or Float32Array | 
### bindToEffect(effect, name) &rarr; void

Binds this uniform buffer to an effect.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.1/Effect) | 
 | name | string | 
### dispose() &rarr; void

Disposes the uniform buffer.
