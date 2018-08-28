---
PG_TITLE: How To Master the PBR Materials
---

# How To Master the PBR Materials

## Introduction
After following the [PBR Introduction](/How_To/Physically_Based_Rendering), it is a good time to learn more about the **PBRMaterial**. 

![Title](/img/extensions/materials/PBRMaster.png)

[**Demo Scene - PBR Materials**](http://www.babylonjs.com/demos/pbrrough/)

This will be the only picture of the documentation. As a **real sample** would be better than a picture, please, do not hesitate to click on the eye aside of each playground links to see the live examples embedded in the page.

The entire documentation should help you deal with most of the PBR Material setup.

## How to install
As the PBR material is embedded in the BabylonJS library, please, follow the [basic tutorial](/babylon101/first) in order to create your first page using the framework.

## Why
After looking at the [PBR Introduction](/How_to/Physically_Based_Rendering) you may want to gain more control or use more features in your material setup like:
* Refraction
* Standard Light Falloff
* LightMaps
* Dedicated image processing

As the two main PBR Materials e.g. *SpecularGlossiness* and *MetallicRoughness*, are intended to be simple, their number of properties is pretty small to stay user friendly. From time to time, you might still be missing a feature or willing to go a bit deeper.

The **PBRMaterial** is here to address this concern and can work in either a Specular/Glossiness or Metallic/Roughness workflow. This document will only address *the differences* between the PBRMaterial and its the simpler versions.

## From MetallicRoughness To PBRMaterial

To start with the MetallicRoughness, you can take a look at the [documentation](/How_To/physically_based_rendering#pbrmetallicroughnessmaterial).

In order to setup the PBRMaterial in Metallic/Roughness mode, at least one of the following properties has to be set (else it by default works in Specular/Glossiness):
* metallic
* roughness
* metallicTexture

To switch from the PBRMetallicRoughnessMaterial to the bigger PBRMaterial, a few of the properties need to be renamed (Rename has not been done in the richer material in order to keep backward compatibility with prior versions):

* baseColor                 -> albedoColor
* baseTexture               -> albedoTexture
* metallicRoughnessTexture  -> metallicTexture
* environmentTexture        -> reflectionTexture
* normalTexture             -> bumpTexture
* occlusionTexture          -> ambientTexture
* occlusionTextureStrength  -> ambientTextureStrength

As the channels used for metallic or roughness can be customized, in order to be setup as the simple material, you will need to add the following flags:

```
    pbr.useRoughnessFromMetallicTextureAlpha = false;
    pbr.useRoughnessFromMetallicTextureGreen = true;
    pbr.useMetallnessFromMetallicTextureBlue = true;
```

You can see a [live version here](https://www.babylonjs-playground.com/#2FDQT5#14)

Once the conversion done, let's see the custom options available on this version:

* **useRoughnessFromMetallicTextureAlpha**: the metallic texture contains the roughness information in its alpha channel.
* **useRoughnessFromMetallicTextureGreen**: the metallic texture contains the roughness information in its green channel (useRoughnessFromMetallicTextureAlpha needs to be false).
* **useMetallnessFromMetallicTextureBlue**: the metallic texture contains the metallic information in its blue channel (it is considered in the red channel by default).
* **useAmbientOcclusionFromMetallicTextureRed**: the metallic texture contains the ambient occlusion information in its red channel.
* **useAmbientInGrayScale**: the ambient occlusion is forced to read only from the red channel of the ambient texture or from the red channel of the metallic texture.

## From SpecularGlossiness To PBRMaterial
To begin with the SpecularGlossiness you can start with this [documentation](/How_To/physically_based_rendering#pbrspecularglossinessmaterial).

The exact opposite of the previous chapter has to be followed in order to setup the PBRMaterial in Specular/Glossiness mode. The following properties need to be null or undefined:
* metallic
* roughness
* metallicTexture

To switch from the PBRSpecularGlossinessMaterial to the richer PBRMaterial, a few of the properties need to also be renamed:

* diffuseColor              -> albedoColor
* diffuseTexture            -> albedoTexture
* specularGlossinessTexture -> reflectivityTexture
* specularColor             -> reflectivityColor
* glossiness                -> microSurface
* normalTexture             -> bumpTexture
* occlusionTexture          -> ambientTexture
* occlusionTextureStrength  -> ambientTextureStrength

Also, as the channel used for glossiness can be customized, in order to be setup as the simple material, you will need to add the following flag:

```
    pbr.useMicroSurfaceFromReflectivityMapAlpha = false;
```

You can see a [live version here](https://www.babylonjs-playground.com/#Z1VL3V#8)

Once the conversion done, let's see the custom options available on this version:

* **microSurfaceTexture**: Enables the ability to store the glossiness on the red channel of a separate texture.
* **useAlphaFromAlbedoTexture**: the opacity information is contained in the alpha channel of the albedo texture.
* **useMicroSurfaceFromReflectivityMapAlpha**: the reflectivity texture contains the microSurface or glossiness information in its alpha channel.
* **useAmbientInGrayScale**: the ambient occlusion is forced to read only from the red channel of the ambient texture or from the red channel of the metallic texture.

## Opacity
Another interesting addition to the reflection is the ability to keep the most luminous part of the reflection over transparent surface... Yeah, it does not make much sense... Actually, if you look through a window at night from a lit room, you can see the reflection of lights or TV on the glass. This is the same for reflection in the PBR Material. A special property `pbr.useRadianceOverAlpha = true;` has been added to allow you to control this effect. Not only reflection (AKA radiance) but specular highlights can be seen on top of transparency.

[Demo]( https://www.babylonjs-playground.com/#19JGPR#13)
```javascript
glass.reflectionTexture = hdrTexture;
glass.alpha = 0.5;
```

This behaviour can be turned off through the properties:
```
    useRadianceOverAlpha = false;
    useSpecularOverAlpha = false;
```

## Refraction
Refraction is a little bit like reflection (Please purists, do not kill me now, I only said a little) because it is heavily relying on the environment to change the way the material looks. Basically, if reflection could be compared to seeing the sun and cloud on the surface of a lake, refraction would be seeing weird shaped fish under the surface (through the water).  

A great tutorial on the refraction is available [Here](/How_To/reflect#refraction)

As refraction is equivalent to how you can **see through different materials boundaries**, the effect can be controlled via the transparency in BJS. A special property helps you to do it, simply put `pbr.linkRefractionWithTransparency=true;` in your code and then the alpha will control how refractive the material is. Putting it to false leaves the alpha controlling the default transparency. 

[Demo]( https://www.babylonjs-playground.com/#19JGPR#12)
```javascript
var glass = new BABYLON.PBRMaterial("glass", scene);
glass.reflectionTexture = hdrTexture;
glass.refractionTexture = hdrTexture;
glass.linkRefractionWithTransparency = true;
glass.indexOfRefraction = 0.52;
glass.alpha = 0; // Fully refractive material
```

You can still notice some reflection on your material. This is due to the energy conservation detailed later in the document.

## Normal Map / Parallax
Normal mapping and Parallax are supported in the exact same way than the standard material. Please, refer to the following links for more information:
* [Normal Map](/How_To/more_materials)
* [Parallax](/How_To/Using_parallax_mapping)

## LightMaps
LightMaps are available in the same way they are in the standardMaterial by affecting a texture to the ```lightmapTexture``` property. This can also be used as a shadowMap instead by switching the dedicated control flag ```useLightmapAsShadowmap``` to true.

## Image Processing
The Processing Configuration can be applied directly on the material as explained in the [image processing documentation](/How_To/how_to_use_postprocesses#imageprocessing).
 
## Light Setup
Always considering what "Nature does", we reconsidered the BJS light falloff effect in the PBR Material.

Three main properties have been added to offer a better simulation of the lights.

### Inverse Square Falloff
This is a type of falloff that is pretty close from what light does in real life (It is implemented in the best engines like BJS and [Unreal](https://docs.unrealengine.com/latest/INT/Resources/ContentExamples/Lighting/4_2/index.html), I may oversell it here :-) )

Compared to the BJS lighting model, instead of playing with an arbitrary range for the lights, the light impact will decrease proportionally to the inverse of the light distance squared.

```
float lightDistanceFalloff = 1.0 / ((lightDistanceSquared + 0.0001));
return lightDistanceFalloff;
``` 

So, the further you are, the bigger your intensity will need to be to reach a surface.

To even go further, the intensity you define on the lights follows physics notions:

* Point and Spot lights are defined in luminous intensity (candela, m/sr)
* Directional and Hemispheric lights in illuminance (nit, cd/m2)

To make it compatible with the standard material, you can easily disable this behaviour and use the Physical Falloff like this:

```javascript
pbr.usePhysicalLightFalloff = false;
```

### IntensityMode
The lights now have an intensity which enable you to convert the intensity metric from one type to another one. This can help setting up your analytical lights close from real life measure:

```javascript
// Default automatic mode best fitting with the light type.
light.intensityMode = BABYLON.Light.INTENSITYMODE_AUTOMATIC;
// Lumen (lm)
light.intensityMode = BABYLON.Light.INTENSITYMODE_LUMINOUSPOWER;
// Candela (lm/sr)
light.intensityMode = BABYLON.Light.INTENSITYMODE_LUMINOUSINTENSITY;
// Lux (lm/m^2)
light.intensityMode = BABYLON.Light.INTENSITYMODE_ILLUMINANCE;
// Nit (cd/m^2)
light.intensityMode = BABYLON.Light.INTENSITYMODE_LUMINANCE;
```

### Light Radius
Light Radius has been added as a property of each light and controls the fact that in real life most of the lights are not a single point.

Why? Simply because if your material is really glossy, each specular highlights (from the direct lights) will only be seen as a simple dot.

Try to spot the dot in the middle of the sphere in the [Demo](https://www.babylonjs-playground.com/#19JGPR#10).

Now, increasing the light radius makes this dot wider as you can see on this [Demo](https://www.babylonjs-playground.com/#19JGPR#11) 

This uses internally a lot of approximation like Tan(theta) is almost theta for small angles so if you try to put bigger radius than a tenth of the light distance you will not see the desired effect.

## Shadows (as the standard material)
Shadows are fully equivalent to the Standard material. All the documentation can be found here: [Shadows](/babylon101/shadows);

## Notes
You can find below a few notes which could be helpful during the creation of your scenes.

### Specular Aliasing
Glossy materials are subject to Specular Aliasing artifacts. These artifacts are usually visible as bright dots flickering on meshes when animating the model or moving the camera.

They could be the result of several factors:
- Sharp Edges in the geometry
- Bump Map Texture
- ... For more information, you can consult this page about [anti-aliasing techniques](http://blog.selfshadow.com/2011/07/22/specular-showdown/)

Babylon version 3.2 includes a simple way to enable Specular anti-aliasing in PBR materials:
```javascript
    pbr.enableSpecularAntiAliasing = true;
```

[Demo](https://www.babylonjs-playground.com/#1XJD4C)

### Environment Irradiance
A big part of the lighting in PBR is assured by the environment texture. This provides two kinds of light contributions, **radiance which could be considered alike reflection** and **irradiance which could be thought as the diffuse component of the Image Based Lighting**.

In case you are creating a model **rough** and **not metallic** (in metallic workflow) or **not specular** (in specular glossiness mode), most of the illumination will be provided by both the analytical lights and the environment texture.

In Babylon JS in order to **optimize** the computation of the **irradiance**, it is computed in the **vertex shader** and interpolated in the fragment. Unfortunately, this **prevents us to rely on the normal map** to realize the computation and then might **introduce artifacts** by not emphasizing the bumpiness of the surface. It is most of the time acceptable but with **rough none reflective material** it changes a lot the visual result.

You can see below on the left on rough none reflective model in the default configuration and on the right a model with ```forceIrradianceInFragment``` enabled.

![pbrForceIrradianceInFragment](/img/how_to/Environment/pbrForceIrradianceInFragment.jpg)

In order to force the computation of the irradiance in fragment, one can set to true the according parameter:

```javascript
    pbr.forceIrradianceInFragment = true;
```

### Image Based Lighting: Babylon VS RayTracers 
We spent a lot of time working on the implementation of our IBL environments. We reworked how we generate the DDS prefiltered environments so that we aligned with what perceptual ray tracers and popular game engines like Unity and Unreal are doing with their IBL rendering. We are approximating a perceptual roughness model which drops what is perceived to be 50% rough falls in the middle of middle of the linear ramp for roughness. The GGX algorithm that we use for our lighting calculations has more of a linear roughness scale which loses clarity in reflections quickly (by around 0.3 roughness). We adjusted the falloff to mirror what happens in Arnold ray tracing, which is the renderer we chose as our ground truth for this work:

![RayTracer](/img/how_to/Environment/RayTracer.png)

We were able to largely match the perceptual falloff from the Arnold ray tracer, while using a prefiltered MIP chain in the DDS ignoring the last two MIP levels. We have some deviation from the high roughness in the ray traced ground truth, but since fully rough materials don't really exist in the real world, there is no way to know if Arnold is right in these areas.
