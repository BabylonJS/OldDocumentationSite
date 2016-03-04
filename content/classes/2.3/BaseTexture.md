---
ID_PAGE: 25219
PG_TITLE: BaseTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
---
## Description

class [BaseTexture](/classes/2.3/BaseTexture)

Create a new [BaseTexture](/classes/2.3/BaseTexture).
A tutorial about materials and textures can be found here

## Constructor

## new [BaseTexture](/classes/2.3/BaseTexture)(scene)

Create a new [BaseTexture](/classes/2.3/BaseTexture);
A tutorial about materials and textures can be found here : http://doc.babylonjs.com/tutorials/04._Materials

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.3/Scene) |   The scene which will contains the new base texture

## Members

### name : string

Name of the base texture.

### delayLoadState : number

Delay to load

By default : no delay

### hasAlpha : boolean

True if the base texture has alpha ; False otherwise

By default : false

### getAlphaFromRGB : boolean

True if RGBA ; False otherwise

By default : false

### level : number

The render level

By default : 1

### isCube : boolean

True if the basetexture is a cube ; False otherwise

By default : false

### isRenderTarget : boolean

True if this is a render target ; False otherwise

By default : false

### animations : [Animation](/classes/2.3/Animation)[]

The animations of the base texture

### onDispose : () =&gt; void

Function to call on dispose

### coordinatesIndex : number

The coordinates index

By default : 0

### coordinatesMode : number

The coordinates mode

By default : Explicit_Mode

### wrapU : number

The texture repetition in U axis

### wrapV : number

The texture repetition in V axis

### anisotropicFilteringLevel : number

The level of the anisotropic filtering level

By default : 4

### canRescale : boolean



## Methods

### getScene() &rarr; [Scene](/classes/2.3/Scene)

Get the scene which contains the base texture
@return The scene
### getTextureMatrix() &rarr; [Matrix](/classes/2.3/Matrix)

Get the texture matrix - return null
@return null
### getReflectionTextureMatrix() &rarr; [Matrix](/classes/2.3/Matrix)

Get the reflection texture matrix - return null
@return null
### getInternalTexture() &rarr; WebGLTexture

Get the internal texture
@return The internal texture
### isReady() &rarr; boolean

True if the base texture is ready ; False otherwise
### getSize() &rarr; ISize

Get the size of the base texture
@return ISize
### getBaseSize() &rarr; ISize

Get the base size of the base texture
@return ISize
### scale(ratio) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ratio | number |   

### delayLoad() &rarr; void

Do the load delay
### clone() &rarr; [BaseTexture](/classes/2.3/BaseTexture)

Clone the base texture
### releaseInternalTexture() &rarr; void

Release the internal texture
### dispose() &rarr; void


### serialize() &rarr; any


