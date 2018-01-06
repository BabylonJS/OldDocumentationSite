---
ID_PAGE: 25217
PG_TITLE: StandardMaterial
PG_VERSION: 2.1
TAGS:
    - Material
---
## Description

class [StandardMaterial](/classes/3.1/StandardMaterial) extends [PushMaterial](/classes/3.1/PushMaterial)



## Constructor

## new [StandardMaterial](/classes/3.1/StandardMaterial)(name, scene)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/3.1/Scene) | 
## Members

### diffuseTexture : Nullable&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt;


### ambientTexture : Nullable&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt;


### opacityTexture : Nullable&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt;


### reflectionTexture : Nullable&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt;


### emissiveTexture : Nullable&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt;


### specularTexture : Nullable&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt;


### bumpTexture : Nullable&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt;


### lightmapTexture : Nullable&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt;


### refractionTexture : Nullable&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt;


### ambientColor : [Color3](/classes/3.1/Color3)


### diffuseColor : [Color3](/classes/3.1/Color3)


### specularColor : [Color3](/classes/3.1/Color3)


### emissiveColor : [Color3](/classes/3.1/Color3)


### specularPower : number


### useAlphaFromDiffuseTexture : boolean


### useEmissiveAsIllumination : boolean


### linkEmissiveWithDiffuse : boolean


### useSpecularOverAlpha : boolean


### useReflectionOverAlpha : boolean


### disableLighting : boolean


### useParallax : boolean


### useParallaxOcclusion : boolean


### parallaxScaleBias : number


### roughness : number


### indexOfRefraction : number


### invertRefractionY : boolean


### useLightmapAsShadowmap : boolean


### diffuseFresnelParameters : [FresnelParameters](/classes/3.1/FresnelParameters)


### opacityFresnelParameters : [FresnelParameters](/classes/3.1/FresnelParameters)


### reflectionFresnelParameters : [FresnelParameters](/classes/3.1/FresnelParameters)


### refractionFresnelParameters : [FresnelParameters](/classes/3.1/FresnelParameters)


### emissiveFresnelParameters : [FresnelParameters](/classes/3.1/FresnelParameters)


### useReflectionFresnelFromSpecular : boolean


### useGlossinessFromSpecularMapAlpha : boolean


### maxSimultaneousLights : number


### invertNormalMapX : boolean


### invertNormalMapY : boolean


### twoSidedLighting : boolean


### imageProcessingConfiguration : [ImageProcessingConfiguration](/classes/3.1/ImageProcessingConfiguration)

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
### cameraExposure : number

The camera exposure used on this material.

This property is here and not in the camera to allow controlling exposure without full screen post process.

This corresponds to a photographic exposure.

The camera exposure used on this material.

This property is here and not in the camera to allow controlling exposure without full screen post process.

This corresponds to a photographic exposure.
### cameraContrast : number

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
### customShaderNameResolve : (shaderName: string, uniforms: string[], uniformBuffers: string[], samplers: string[], defines: [StandardMaterialDefines](/classes/3.1/StandardMaterialDefines)) =&gt; string



#### Parameters
 | Name | Type | Description
---|---|---|---
 | shaderName | string | 
 | uniforms | string[] | 
 | uniformBuffers | string[] | 
 | samplers | string[] | 
### useLogarithmicDepth : boolean


### static DiffuseTextureEnabled : boolean


### static AmbientTextureEnabled : boolean


### static OpacityTextureEnabled : boolean


### static ReflectionTextureEnabled : boolean


### static EmissiveTextureEnabled : boolean


### static SpecularTextureEnabled : boolean


### static BumpTextureEnabled : boolean


### static LightmapTextureEnabled : boolean


### static RefractionTextureEnabled : boolean


### static ColorGradingTextureEnabled : boolean


### static FresnelEnabled : boolean


## Methods

### getClassName() &rarr; string


### needAlphaBlending() &rarr; boolean


### needAlphaTesting() &rarr; boolean


### getAlphaTestTexture() &rarr; Nullable&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt;


### isReadyForSubMesh(mesh, subMesh, useInstances) &rarr; boolean

Child classes can use it to update shaders

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 
 | subMesh | [SubMesh](/classes/3.1/SubMesh) | 
optional | useInstances | boolean | 
### buildUniformLayout() &rarr; void


### unbind() &rarr; void


### bindForSubMesh(world, mesh, subMesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/3.1/Matrix) | 
 | mesh | [Mesh](/classes/3.1/Mesh) | 
 | subMesh | [SubMesh](/classes/3.1/SubMesh) | 
### getAnimatables() &rarr; IAnimatable[]


### getActiveTextures() &rarr; [BaseTexture](/classes/3.1/BaseTexture)[]


### hasTexture(texture) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | [BaseTexture](/classes/3.1/BaseTexture) | 

### dispose(forceDisposeEffect, forceDisposeTextures) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | forceDisposeEffect | boolean | 
optional | forceDisposeTextures | boolean | 
### clone(name) &rarr; [StandardMaterial](/classes/3.1/StandardMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### serialize() &rarr; any


### static Parse(source, scene, rootUrl) &rarr; [StandardMaterial](/classes/3.1/StandardMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | rootUrl | string | 
