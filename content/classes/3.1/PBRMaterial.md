---
TAGS:
---
## Description

class [PBRMaterial](/classes/3.1/PBRMaterial) extends [PBRBaseMaterial](/classes/3.1/PBRBaseMaterial)

The Physically based material of BJS.

This offers the main features of a standard PBR material.

For more information, please refer to the documentation :

http://doc.babylonjs.com/extensions/Physically_Based_Rendering

## Constructor

## new [PBRMaterial](/classes/3.1/PBRMaterial)(name, scene)

Instantiates a new [PBRMaterial](/classes/3.1/PBRMaterial) instance.

         * @param name The material name

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  The material name
 | scene | [Scene](/classes/3.1/Scene) |  The scene the material will be use in.
## Members

### static PBRMATERIAL_OPAQUE : number

PBRMaterialTransparencyMode: No transparency mode, Alpha channel is not use.
### static PBRMATERIAL_ALPHATEST : number

PBRMaterialTransparencyMode: Alpha Test mode, pixel are discarded below a certain threshold defined by the alpha cutoff value.
### static PBRMATERIAL_ALPHABLEND : number

PBRMaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.
### static PBRMATERIAL_ALPHATESTANDBLEND : number

PBRMaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.

They are also discarded below the alpha cutoff threshold to improve performances.
### directIntensity : number

Intensity of the direct lights e.g. the four lights available in your scene.

This impacts both the direct diffuse and specular highlights.
### emissiveIntensity : number

Intensity of the emissive part of the material.

This helps controlling the emissive effect without modifying the emissive color.
### environmentIntensity : number

Intensity of the environment e.g. how much the environment will light the object

either through harmonics for rough material or through the refelction for shiny ones.
### specularIntensity : number

This is a special control allowing the reduction of the specular highlights coming from the

four lights of the scene. Those highlights may not be needed in full environment lighting.
### disableBumpMap : boolean

Debug Control allowing disabling the bump map on this material.
### albedoTexture : [BaseTexture](/classes/3.1/BaseTexture)

AKA Diffuse [Texture](/classes/3.1/Texture) in standard nomenclature.
### ambientTexture : [BaseTexture](/classes/3.1/BaseTexture)

AKA Occlusion [Texture](/classes/3.1/Texture) in other nomenclature.
### ambientTextureStrength : number

AKA Occlusion [Texture](/classes/3.1/Texture) Intensity in other nomenclature.
### opacityTexture : [BaseTexture](/classes/3.1/BaseTexture)


### reflectionTexture : Nullable&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt;


### emissiveTexture : [BaseTexture](/classes/3.1/BaseTexture)


### reflectivityTexture : [BaseTexture](/classes/3.1/BaseTexture)

AKA Specular texture in other nomenclature.
### metallicTexture : [BaseTexture](/classes/3.1/BaseTexture)

Used to switch from specular/glossiness to metallic/roughness workflow.
### metallic : number

Specifies the metallic scalar of the metallic/roughness workflow.

Can also be used to scale the metalness values of the metallic texture.
### roughness : number

Specifies the roughness scalar of the metallic/roughness workflow.

Can also be used to scale the roughness values of the metallic texture.
### microSurfaceTexture : [BaseTexture](/classes/3.1/BaseTexture)

Used to enable roughness/glossiness fetch from a separate chanel depending on the current mode.

Gray Scale represents roughness in metallic mode and glossiness in specular mode.
### bumpTexture : [BaseTexture](/classes/3.1/BaseTexture)


### lightmapTexture : [BaseTexture](/classes/3.1/BaseTexture)


### refractionTexture : [BaseTexture](/classes/3.1/BaseTexture)


### ambientColor : [Color3](/classes/3.1/Color3)


### albedoColor : [Color3](/classes/3.1/Color3)

AKA Diffuse Color in other nomenclature.
### reflectivityColor : [Color3](/classes/3.1/Color3)

AKA Specular Color in other nomenclature.
### reflectionColor : [Color3](/classes/3.1/Color3)


### emissiveColor : [Color3](/classes/3.1/Color3)


### microSurface : number

AKA Glossiness in other nomenclature.
### indexOfRefraction : number

source material index of refraction (IOR)' / 'destination material IOR.
### invertRefractionY : boolean

Controls if refraction needs to be inverted on Y. This could be usefull for procedural texture.
### linkRefractionWithTransparency : boolean

This parameters will make the material used its opacity to control how much it is refracting aginst not.

Materials half opaque for instance using refraction could benefit from this control.
### useLightmapAsShadowmap : boolean


### useAlphaFromAlbedoTexture : boolean

Specifies that the alpha is coming form the albedo channel alpha channel for alpha blending.
### forceAlphaTest : boolean

Enforces alpha test in opaque or blend mode in order to improve the performances of some situations.
### alphaCutOff : number

Defines the alpha limits in alpha test mode.
### useSpecularOverAlpha : boolean

Specifies that the material will keeps the specular highlights over a transparent surface (only the most limunous ones).

A car glass is a good exemple of that. When sun reflects on it you can not see what is behind.
### useMicroSurfaceFromReflectivityMapAlpha : boolean

Specifies if the reflectivity texture contains the glossiness information in its alpha channel.
### useRoughnessFromMetallicTextureAlpha : boolean

Specifies if the metallic texture contains the roughness information in its alpha channel.
### useRoughnessFromMetallicTextureGreen : boolean

Specifies if the metallic texture contains the roughness information in its green channel.
### useMetallnessFromMetallicTextureBlue : boolean

Specifies if the metallic texture contains the metallness information in its blue channel.
### useAmbientOcclusionFromMetallicTextureRed : boolean

Specifies if the metallic texture contains the ambient occlusion information in its red channel.
### useAmbientInGrayScale : boolean

Specifies if the ambient texture contains the ambient occlusion information in its red channel only.
### useAutoMicroSurfaceFromReflectivityMap : boolean

In case the reflectivity map does not contain the microsurface information in its alpha channel,

The material will try to infer what glossiness each pixel should be.
### usePhysicalLightFalloff : boolean

BJS is using an harcoded light falloff based on a manually sets up range.

In PBR, one way to represents the fallof is to use the inverse squared root algorythm.

This parameter can help you switch back to the BJS mode in order to create scenes using both materials.
### useRadianceOverAlpha : boolean

Specifies that the material will keeps the reflection highlights over a transparent surface (only the most limunous ones).

A car glass is a good exemple of that. When the street lights reflects on it you can not see what is behind.
### useParallax : boolean

Allows using the bump map in parallax mode.
### useParallaxOcclusion : boolean

Allows using the bump map in parallax occlusion mode.
### parallaxScaleBias : number

Controls the scale bias of the parallax mode.
### disableLighting : boolean

If sets to true, disables all the lights affecting the material.
### forceIrradianceInFragment : boolean

Force the shader to compute irradiance in the fragment shader in order to take bump in account.
### maxSimultaneousLights : number

Number of Simultaneous lights allowed on the material.
### invertNormalMapX : boolean

If sets to true, x component of normal map value will invert (x = 1.0 - x).
### invertNormalMapY : boolean

If sets to true, y component of normal map value will invert (y = 1.0 - y).
### twoSidedLighting : boolean

If sets to true and backfaceCulling is false, normals will be flipped on the backside.
### useAlphaFresnel : boolean

A fresnel is applied to the alpha of the model to ensure grazing angles edges are not alpha tested.

And/Or occlude the blended part. (alpha is converted to gamma to compute the fresnel)
### useLinearAlphaFresnel : boolean

A fresnel is applied to the alpha of the model to ensure grazing angles edges are not alpha tested.

And/Or occlude the blended part. (alpha stays linear to compute the fresnel)
### environmentBRDFTexture : Nullable&lt;[BaseTexture](/classes/3.1/BaseTexture)&gt;

A fresnel is applied to the alpha of the model to ensure grazing angles edges are not alpha tested.

And/Or occlude the blended part.
### forceNormalForward : boolean

Force normal to face away from face.
### useHorizonOcclusion : boolean

This parameters will enable/disable Horizon occlusion to prevent normal maps to look shiny when the normal

makes the reflect vector face the model (under horizon).
### useRadianceOcclusion : boolean

This parameters will enable/disable radiance occlusion by preventing the radiance to lit

too much the area relying on ambient texture to define their ambient occlusion.
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
## Methods

### getClassName() &rarr; string


### getActiveTextures() &rarr; [BaseTexture](/classes/3.1/BaseTexture)[]


### hasTexture(texture) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | texture | [BaseTexture](/classes/3.1/BaseTexture) | 

### clone(name) &rarr; [PBRMaterial](/classes/3.1/PBRMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### serialize() &rarr; any


### static Parse(source, scene, rootUrl) &rarr; [PBRMaterial](/classes/3.1/PBRMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
 | rootUrl | string | 
