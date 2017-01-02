---
TAGS:
---
## Description

class [PBRMaterial](/classes/2.5/PBRMaterial) extends BABYLON.[Material](/classes/2.5/Material)

The Physically based material of BJS.

This offers the main features of a standard PBR material.

For more information, please refer to the documentation :

http://doc.babylonjs.com/overviews/Physically_Based_Rendering

## Constructor

## new [PBRMaterial](/classes/2.5/PBRMaterial)(name, scene)

Instantiates a new [PBRMaterial](/classes/2.5/PBRMaterial) instance.

         * @param name The material name

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  The material name 
 | scene | [Scene](/classes/2.5/Scene) |  The scene the material will be use in. 
## Members

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

### overloadedShadowIntensity : number

Debug Control helping enforcing or dropping the darkness of shadows.

1.0 means the shadows have their normal darkness, 0.0 means the shadows are not visible.

### overloadedShadeIntensity : number

Debug Control helping dropping the shading effect coming from the diffuse lighting.

1.0 means the shade have their normal impact, 0.0 means no shading at all.

### cameraExposure : number

The camera exposure used on this material.

This property is here and not in the camera to allow controlling exposure without full screen post process.

This corresponds to a photographic exposure.

### cameraContrast : number

The camera contrast used on this material.

This property is here and not in the camera to allow controlling contrast without full screen post process.

### cameraColorGradingTexture : [BaseTexture](/classes/2.5/BaseTexture)

Color Grading 2D Lookup [Texture](/classes/2.5/Texture).

This allows special effects like sepia, black and white to sixties rendering style.

### cameraColorCurves : [ColorCurves](/classes/2.5/ColorCurves)

The color grading curves provide additional color adjustmnent that is applied after any color grading transform (3D LUT).

They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.

These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;

corresponding to low luminance, medium luminance, and high luminance areas respectively.

### overloadedAmbient : [Color3](/classes/2.5/Color3)

Debug Control allowing to overload the ambient color.

This as to be use with the overloadedAmbientIntensity parameter.

### overloadedAmbientIntensity : number

Debug Control indicating how much the overloaded ambient color is used against the default one.

### overloadedAlbedo : [Color3](/classes/2.5/Color3)

Debug Control allowing to overload the albedo color.

This as to be use with the overloadedAlbedoIntensity parameter.

### overloadedAlbedoIntensity : number

Debug Control indicating how much the overloaded albedo color is used against the default one.

### overloadedReflectivity : [Color3](/classes/2.5/Color3)

Debug Control allowing to overload the reflectivity color.

This as to be use with the overloadedReflectivityIntensity parameter.

### overloadedReflectivityIntensity : number

Debug Control indicating how much the overloaded reflectivity color is used against the default one.

### overloadedEmissive : [Color3](/classes/2.5/Color3)

Debug Control allowing to overload the emissive color.

This as to be use with the overloadedEmissiveIntensity parameter.

### overloadedEmissiveIntensity : number

Debug Control indicating how much the overloaded emissive color is used against the default one.

### overloadedReflection : [Color3](/classes/2.5/Color3)

Debug Control allowing to overload the reflection color.

This as to be use with the overloadedReflectionIntensity parameter.

### overloadedReflectionIntensity : number

Debug Control indicating how much the overloaded reflection color is used against the default one.

### overloadedMicroSurface : number

Debug Control allowing to overload the microsurface.

This as to be use with the overloadedMicroSurfaceIntensity parameter.

### overloadedMicroSurfaceIntensity : number

Debug Control indicating how much the overloaded microsurface is used against the default one.

### albedoTexture : [BaseTexture](/classes/2.5/BaseTexture)

AKA Diffuse [Texture](/classes/2.5/Texture) in standard nomenclature.

### ambientTexture : [BaseTexture](/classes/2.5/BaseTexture)

AKA Occlusion [Texture](/classes/2.5/Texture) in other nomenclature.

### ambientTextureStrength : number

AKA Occlusion [Texture](/classes/2.5/Texture) Intensity in other nomenclature.

### opacityTexture : [BaseTexture](/classes/2.5/BaseTexture)



### reflectionTexture : [BaseTexture](/classes/2.5/BaseTexture)



### emissiveTexture : [BaseTexture](/classes/2.5/BaseTexture)



### reflectivityTexture : [BaseTexture](/classes/2.5/BaseTexture)

AKA Specular texture in other nomenclature.

### metallicTexture : [BaseTexture](/classes/2.5/BaseTexture)

Used to switch from specular/glossiness to metallic/roughness workflow.

### bumpTexture : [BaseTexture](/classes/2.5/BaseTexture)



### lightmapTexture : [BaseTexture](/classes/2.5/BaseTexture)



### refractionTexture : [BaseTexture](/classes/2.5/BaseTexture)



### ambientColor : [Color3](/classes/2.5/Color3)



### albedoColor : [Color3](/classes/2.5/Color3)

AKA Diffuse Color in other nomenclature.

### reflectivityColor : [Color3](/classes/2.5/Color3)

AKA Specular Color in other nomenclature.

### reflectionColor : [Color3](/classes/2.5/Color3)



### emissiveColor : [Color3](/classes/2.5/Color3)



### microSurface : number

AKA Glossiness in other nomenclature.

### indexOfRefraction : number

source material index of refraction (IOR)' / 'destination material IOR.

### invertRefractionY : boolean

Controls if refraction needs to be inverted on Y. This could be usefull for procedural texture.

### opacityFresnelParameters : [FresnelParameters](/classes/2.5/FresnelParameters)



### emissiveFresnelParameters : [FresnelParameters](/classes/2.5/FresnelParameters)



### linkRefractionWithTransparency : boolean

This parameters will make the material used its opacity to control how much it is refracting aginst not.

Materials half opaque for instance using refraction could benefit from this control.

### linkEmissiveWithAlbedo : boolean

The emissive and albedo are linked to never be more than one (Energy conservation).

### useLightmapAsShadowmap : boolean



### useEmissiveAsIllumination : boolean

In this mode, the emissive informtaion will always be added to the lighting once.

A light for instance can be thought as emissive.

### useAlphaFromAlbedoTexture : boolean

Secifies that the alpha is coming form the albedo channel alpha channel.

### useSpecularOverAlpha : boolean

Specifies that the material will keeps the specular highlights over a transparent surface (only the most limunous ones).

A car glass is a good exemple of that. When sun reflects on it you can not see what is behind.

### useMicroSurfaceFromReflectivityMapAlpha : boolean

Specifies if the reflectivity texture contains the glossiness information in its alpha channel.

### useRoughnessFromMetallicTextureAlpha : boolean

Specifies if the metallic texture contains the roughness information in its alpha channel.

### useRoughnessFromMetallicTextureGreen : boolean

Specifies if the metallic texture contains the roughness information in its green channel.

### useAutoMicroSurfaceFromReflectivityMap : boolean

In case the reflectivity map does not contain the microsurface information in its alpha channel,

The material will try to infer what glossiness each pixel should be.

### useScalarInLinearSpace : boolean

Allows to work with scalar in linear mode. This is definitely a matter of preferences and tools used during

the creation of the material.

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

### maxSimultaneousLights : number

Number of Simultaneous lights allowed on the material.

### invertNormalMapX : boolean

If sets to true, x component of normal map value will invert (x = 1.0 - x).

### invertNormalMapY : boolean

If sets to true, y component of normal map value will invert (y = 1.0 - y).

### useLogarithmicDepth : boolean



## Methods

### needAlphaBlending() &rarr; boolean


### needAlphaTesting() &rarr; boolean


### getAlphaTestTexture() &rarr; [BaseTexture](/classes/2.5/BaseTexture)


### static BindLights(scene, mesh, effect, defines, useScalarInLinearSpace, maxSimultaneousLights, usePhysicalLightFalloff) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/2.5/Scene) |  
 | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) |  
 | effect | [Effect](/classes/2.5/Effect) |  
 | defines | [MaterialDefines](/classes/2.5/MaterialDefines) |  
 | useScalarInLinearSpace | boolean |  
 | maxSimultaneousLights | number |  
### isReady(mesh, useInstances) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) |  
optional | useInstances | boolean |  
### unbind() &rarr; void


### bindOnlyWorldMatrix(world) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.5/Matrix) |  

### bind(world, mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | world | [Matrix](/classes/2.5/Matrix) |  
optional | mesh | [Mesh](/classes/2.5/Mesh) |  
### getAnimatables() &rarr; IAnimatable[]


### dispose(forceDisposeEffect, forceDisposeTextures) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | forceDisposeEffect | boolean |  
optional | forceDisposeTextures | boolean |  
### clone(name) &rarr; [PBRMaterial](/classes/2.5/PBRMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  

### serialize() &rarr; any


### static Parse(source, scene, rootUrl) &rarr; [PBRMaterial](/classes/2.5/PBRMaterial)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | any |  
 | scene | [Scene](/classes/2.5/Scene) |  
 | rootUrl | string |  
