---
TAGS:
---
## Description

class [BackgroundMaterial](/classes/3.1/BackgroundMaterial) extends BABYLON.[PushMaterial](/classes/3.1/PushMaterial)

Background material used to create an efficient environement around your scene.

## Constructor

## new [BackgroundMaterial](/classes/3.1/BackgroundMaterial)(name, scene)

constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  The name of the material
 | scene | undefined |  The scene to add the material to
## Members

### static standardReflectance0 : number

Standard reflectance value at parallel view angle.
### static standardReflectance90 : number

Standard reflectance value at grazing angle.
### primaryColor : [Color3](/classes/3.1/Color3)


### primaryLevel : float


### secondaryColor : [Color3](/classes/3.1/Color3)


### secondaryLevel : float


### tertiaryColor : [Color3](/classes/3.1/Color3)


### tertiaryLevel : float


### reflectionTexture : Nullable&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt;


### reflectionBlur : float


### diffuseTexture : Nullable&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt;


### shadowLights : Nullable&lt;IShadowLight[]&gt;


### shadowBlurScale : int


### shadowLevel : float


### sceneCenter : [Vector3](/classes/3.1/Vector3)


### opacityFresnel : boolean


### reflectionFresnel : boolean


### reflectionFalloffDistance : number


### reflectionAmount : number


### reflectionReflectance0 : number


### reflectionReflectance90 : number


### reflectionStandardFresnelWeight : number

Sets the reflection reflectance fresnel values according to the default standard

empirically know to work well :-)
### useRGBColor : boolean


### enableNoise : boolean


### maxSimultaneousLights : int


### imageProcessingConfiguration : Nullable&lt;[ImageProcessingConfiguration](/classes/3.1/ImageProcessingConfiguration)&gt;

Gets the image processing configuration used either in this material.

Sets the Default image processing configuration used either in the this material.

         * If sets to null, the scene one is in use.
### cameraColorCurvesEnabled : boolean

Gets wether the color curves effect is enabled.

Sets wether the color curves effect is enabled.
### cameraColorGradingEnabled : boolean

Gets wether the color grading effect is enabled.

Gets wether the color grading effect is enabled.
### cameraToneMappingEnabled : boolean

Gets wether tonemapping is enabled or not.

Sets wether tonemapping is enabled or not
### cameraExposure : float

The camera exposure used on this material.

This property is here and not in the camera to allow controlling exposure without full screen post process.

This corresponds to a photographic exposure.

The camera exposure used on this material.

This property is here and not in the camera to allow controlling exposure without full screen post process.

This corresponds to a photographic exposure.
### cameraContrast : float

Gets The camera contrast used on this material.

Sets The camera contrast used on this material.
### cameraColorGradingTexture : Nullable&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt;

Gets the Color Grading 2D Lookup [Texture](/classes/3.1/Texture).

Sets the Color Grading 2D Lookup [Texture](/classes/3.1/Texture).
### cameraColorCurves : Nullable&lt;[ColorCurves](/classes/3.1/ColorCurves)&gt;

The color grading curves provide additional color adjustmnent that is applied after any color grading transform (3D LUT).

They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.

These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;

corresponding to low luminance, medium luminance, and high luminance areas respectively.

The color grading curves provide additional color adjustmnent that is applied after any color grading transform (3D LUT).

They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.

These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;

corresponding to low luminance, medium luminance, and high luminance areas respectively.
## Methods

### needAlphaTesting() &rarr; boolean

The entire material has been created in order to prevent overdraw.

@returns false
### needAlphaBlending() &rarr; boolean

The entire material has been created in order to prevent overdraw.

@returns true if blending is enable
### isReadyForSubMesh(mesh, subMesh, useInstances) &rarr; boolean

Checks wether the material is ready to be rendered for a given mesh.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) |  The mesh to render
 | subMesh | [SubMesh](/classes/3.1/SubMesh) |  The submesh to check against
optional | useInstances | boolean |  Specify wether or not the material is used with instances
### buildUniformLayout() &rarr; void

Build the uniform buffer used in the material.
### unbind() &rarr; void

Unbind the material.
### bindOnlyWorldMatrix(world) &rarr; void

Bind only the world matrix to the material.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/3.1/Matrix) |  The world matrix to bind.

### bindForSubMesh(world, mesh, subMesh) &rarr; void

Bind the material for a dedicated submeh (every used meshes will be considered opaque).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/3.1/Matrix) |  The world matrix to bind.
 | mesh | [Mesh](/classes/3.1/Mesh) | 
 | subMesh | [SubMesh](/classes/3.1/SubMesh) |  The submesh to bind for.
### dispose(forceDisposeEffect, forceDisposeTextures) &rarr; void

Dispose the material.

@forceDisposeEffect Force disposal of the associated effect.

@forceDisposeTextures Force disposal of the associated textures.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | forceDisposeEffect | boolean | 
optional | forceDisposeTextures | boolean | 
### clone(name) &rarr; [BackgroundMaterial](/classes/3.1/BackgroundMaterial)

Clones the material.

@name The cloned name.

@returns The cloned material.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### serialize() &rarr; any

Serializes the current material to its JSON representation.

@returns The JSON representation.
### getClassName() &rarr; string

Gets the class name of the material

@returns "[BackgroundMaterial](/classes/3.1/BackgroundMaterial)"
### static Parse(source, scene, rootUrl) &rarr; [BackgroundMaterial](/classes/3.1/BackgroundMaterial)

Parse a JSON input to create back a background material.

@returns the instantiated [BackgroundMaterial](/classes/3.1/BackgroundMaterial).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | rootUrl | string | 
