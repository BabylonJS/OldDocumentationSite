---
ID_PAGE: 25219
PG_TITLE: BaseTexture
PG_VERSION: 2.1
TAGS:
    - BaseTexture
---
## Description

class [BaseTexture](/classes/3.0/BaseTexture)

Create a new [BaseTexture](/classes/3.0/BaseTexture).
A tutorial about materials and textures can be found here : http://doc.babylonjs.com/tutorials/Materials

## Constructor

## new [BaseTexture](/classes/3.0/BaseTexture)(scene)

Create a new [BaseTexture](/classes/3.0/BaseTexture);

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/3.0/Scene) |      The scene which will contains the new base texture

## Members

### static DEFAULT_ANISOTROPIC_FILTERING_LEVEL : number



### name : string

Name of the base texture.

### hasAlpha : boolean

True if the base texture has alpha ; False otherwise

By default : false

### getAlphaFromRGB : boolean

True if RGBA ; False otherwise

By default : false

### level : number

The render level

By default : 1

### coordinatesIndex : number

The coordinates index.
Defines which UV channel is to be used when mapping this Texture onto a Mesh.
(0 : uv, 1 : uv2, 2 : uv3...)

By default : 0 (mesh.uv channel)

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

### isCube : boolean

True if the basetexture is a cube ; False otherwise

By default : false

### isRenderTarget : boolean

True if this is a render target ; False otherwise

By default : false

### uid : string



### animations : [Animation](/classes/3.0/Animation)[]

The animations of the base texture

### onDisposeObservable : [Observable](/classes/3.0/Observable)&lt;[BaseTexture](/classes/3.0/BaseTexture)&gt;

An event triggered when the texture is disposed.

@type {BABYLON.[Observable](/classes/3.0/Observable)}

### onDispose : () =&gt; void

Function to call on dispose

### delayLoadState : number

Delay to load

By default : no delay

### isBlocking : boolean



### canRescale : boolean



## Methods

### toString() &rarr; string


### getScene() &rarr; [Scene](/classes/3.0/Scene)

Get the scene which contains the base texture
@return The scene
### getTextureMatrix() &rarr; [Matrix](/classes/3.0/Matrix)

Get the texture matrix - return null
@return null
### getReflectionTextureMatrix() &rarr; [Matrix](/classes/3.0/Matrix)

Get the reflection texture matrix - return null
@return null
### getInternalTexture() &rarr; WebGLTexture

Get the internal texture
@return The internal texture
### isReadyOrNotBlocking() &rarr; boolean


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
### clone() &rarr; [BaseTexture](/classes/3.0/BaseTexture)

Clone the base texture
### releaseInternalTexture() &rarr; void

Release the internal texture
### dispose() &rarr; void


### serialize() &rarr; any


