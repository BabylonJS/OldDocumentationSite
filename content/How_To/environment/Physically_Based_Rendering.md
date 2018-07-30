---
PG_TITLE: How To Start with Physically Based Rendering
---

# How To Start with Physically Based Rendering

## Introduction
After following the [standard material tutorial](/babylon101/materials) and also excelling in [unleashing its power](https://www.eternalcoding.com/?p=303), it is a good time to go further and look at another emerging kind of materials called **PBR Materials** standing for **Physically Based Rendering Materials**.

PBR rendering techniques aim to simulate **real life lighting**.

PBR is a grouping of techniques; it does not force you to choose one in particular. Among others, we can cite some like: 
* [Disney](http://blog.selfshadow.com/publications/s2012-shading-course/burley/s2012_pbs_disney_brdf_slides_v2.pdf)
* [Ashkimin Shirley BRDF](http://www.cs.utah.edu/~shirley/papers/jgtbrdf.pdf)
* [Ashkimin Shirley Microfacets](http://www.cs.utah.edu/~shirley/papers/facets.pdf).

In Babylon.js, PBR is done thanks to PBRMaterial. This material contains all features required by modern physically based rendering. For beginners we also created two additional materials to simplify your first contact with PBR. If you want to directly dig into the richer version, please have a read at [Master the PBR](/how_to/physically_based_rendering_master) for more information on how to use the main material.

You can find a complete demo of the PBRMaterial [here](http://www.babylonjs.com/demos/pbrglossy/)

![pbrsample](/img/pbr.jpg)

The two additional materials are `PBRMetallicRoughnessMaterial` and `PBRSpecularGlossinessMaterial`. They both implement a specific convention based on GLTF specifications:
* Metallic roughness convention: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#metallic-roughness-material (This is the recommended convention)
* Specular glossiness convention: https://github.com/KhronosGroup/glTF/blob/master/extensions/Khronos/KHR_materials_pbrSpecularGlossiness/README.md

## PBRMetallicRoughnessMaterial

This material is based on five main values:
* baseColor / baseTexture: The base color has two different interpretations depending on the value of metalness. When the material is a metal, the base color is the specific measured reflectance value at normal incidence (F0). For a non-metal the base color represents the reflected diffuse color of the material.
* metallic: Specifies the metallic scalar value of the material. Can also be used to scale the metalness values of the metallic texture.
* roughness: Specifies the roughness scalar value of the material. Can also be used to scale the roughness values of the metallic texture.
* metallicRoughnessTexture: Texture containing both the metallic value in the B channel and the roughness value in the G channel to keep better precision. Ambient occlusion can also be saved in R channel.
* environmentTexture: texture

As you are already really familiar with the Babylon Standard Material now we'll only try to address here the main differences and as the simplest setup; your only changes will be to instantiate a **PBRMetallicRoughnessMaterial** instead of a **StandardMaterial**.

```javascript
var pbr = new BABYLON.PBRMetallicRoughnessMaterial("pbr", scene);
```

Apply this material to the object of your choice, e.g.:
```javascript
sphere.material = pbr;
```

Now you can define the physical based values of your material to get a great look and feel:
```javascript
pbr.baseColor = new BABYLON.Color3(1.000, 0.766, 0.336);
pbr.metallic = 0;
pbr.roughness = 1.0;
```
You can see a [live version here](https://www.babylonjs-playground.com/#2FDQT5)

With this specific configuration, you can see that there is no reflection at all (metallic set to 0) and no specular (roughness set to 1).

If we want to introduce more reflection we can just do the opposite:
```javascript
pbr.baseColor = new BABYLON.Color3(1.000, 0.766, 0.336);
pbr.metallic = 1.0;
pbr.roughness = 0;
```

But in this case, we need something to reflect. To define this environment, just add this line:
```javascript
pbr.environmentTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("/textures/environment.dds", scene);
```

This call will create all required data used by the materials to produce final output.

You can see a [live version here](https://www.babylonjs-playground.com/#2FDQT5#11)

Perhaps a bit too reflective now, so let's add more roughness to give it a more golden look: 
```javascript
pbr.baseColor = new BABYLON.Color3(1.0, 0.766, 0.336);
pbr.metallic = 1.0;
pbr.roughness = 0.4;
pbr.environmentTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("/textures/environment.dds", scene);
```

You can see a [live version here](https://www.babylonjs-playground.com/#2FDQT5#12)

To get more precise over how metallic and roughness on your object, you can also specify the metallicRoughnessTexture:
```javascript
pbr.baseColor = new BABYLON.Color3(1.0, 0.766, 0.336);
pbr.metallic = 1.0; // set to 1 to only use it from the metallicRoughnessTexture
pbr.roughness = 1.0; // set to 1 to only use it from the metallicRoughnessTexture
pbr.environmentTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("/textures/environment.dds", scene);
pbr.metallicRoughnessTexture = new BABYLON.Texture("/textures/mr.jpg", scene);
```

You can see a [live version here](https://www.babylonjs-playground.com/#2FDQT5#13)

## PBRSpecularGlossinessMaterial

This material is based on five main values:
* diffuseColor / diffuseTexture: Specifies the diffuse color of the material.
* specularColor: Specifies the specular color of the material. This indicates how reflective is the material (none to mirror).
* glossiness: Specifies the glossiness of the material. This indicates "how sharp is the reflection".
* specularGlossinessTexture: Specifies both the specular color RGB and the glossiness A of the material per pixels.
* environmentTexture: texture

The setup of this material is comparable to the one used for PBRMetallicRoughnessMaterial:
```javascript
var pbr = new BABYLON.PBRSpecularGlossinessMaterial("pbr", scene);
pbr.diffuseColor = new BABYLON.Color3(1.0, 0.766, 0.336);
pbr.specularColor = new BABYLON.Color3(1.0, 0.766, 0.336);
pbr.glossiness = 0.4;
pbr.environmentTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("/textures/environment.dds", scene);
```

You can see a [live version here](https://www.babylonjs-playground.com/#Z1VL3V#5).

The specularGlossinessTexture can then (like the metallicRoughnessTexture texture) be used to provide more control over specular and glossiness:
```javascript
pbr.diffuseColor = new BABYLON.Color3(1.0, 0.766, 0.336);
pbr.specularColor = new BABYLON.Color3(1.0, 1.0, 1.0);
pbr.glossiness = 1.0;
pbr.environmentTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("/textures/environment.dds", scene);
pbr.specularGlossinessTexture = new BABYLON.Texture("/textures/sg.png", scene);
```

You can see a [live version here](https://www.babylonjs-playground.com/#Z1VL3V#4).

## Light setup

Dynamic lights are an important part of your PBR setup. You can decide to have no light and only use the environment texture to light your scene or you can decide to add additional light sources to enhance your rendering.

By default, light intensities are computed using the inverse squared distance from the source. This is a type of falloff that is pretty close from what light does in real life. So, the further you are, the bigger your intensity will need to be to reach a surface.

To even go further, the intensity you define on the lights follows physics notions:

* Point and Spot lights are defined in luminous intensity (candela, m/sr)
* Directional and Hemispheric lights in illuminance (nit, cd/m2)

You'll find more info about how dynamic lighting works in the [Master the PBR](/how_to/Physically_Based_Rendering_Master#light-setup)


## Env map
As you have seen before, the highly recommended way to setup an environment texture is through an HDR ready file (either DDS or ENV) containing a cube texture with prefiltered MipMaps.

We are detailing below the two supported ways of creating such files. The first one rely on an open source framework named IBL Baker whereas the second one creating higher resolution results is based on a proprietary software named Lys.

### Creating a dds environment file from IBL Baker
You can find IBLBaker on: [https://github.com/derkreature/IBLBaker](https://github.com/derkreature/IBLBaker)

After cloning the repo, you will be able to go to /bin64 folder and launch IBLBaker.exe.

Now use the "Load environment" button to load a HDR image (Try one from [HDRLib](http://hdrlib.com/) or [there](https://github.com/sbtron/BabylonJS-glTFLoader/tree/master/src/images) as well)

We recommend to play with the environment scale to define the brightness you want.

You may also want to reduce the output size by setting the specular resolution of 128 to ensure the correctness of the blur dropoff:

![iblbaker](/img/How_To/environment/IBLbaker_DefaultSettings.png)

Once you are satisfied with the overall result, just click on "save environment" button and you are good to go! The file to pick is the SpecularHDR one. 

** Please do not forget to write full name with extension in order to make the save works correctly **

### Creating a dds environment file from LYS
[Lys](https://www.knaldtech.com/lys/) can be find on the [knaldtech](https://www.knaldtech.com/lys/) website.

Using Lys, the output quality of the generated mipmaps will be a higher standard really close in roughness response to the Unity standard materials. You could generate with Lys: 128, 256 or 512 px wide dds cube texture.

Please, follow the steps below to ensure of the physical correctness of the response.

First, you need to choose the following settings in the main window (Adapt the size according to your choices 128, 256, or 512):

![Main Window](/img/How_To/environment/Lys_DefaultSettings_Main.png)

Once done, in the preferences tab, please set the legacy dds mode (Four CC is not supported by BabylonJS):

![Preferences](/img/How_To/environment/Lys_DefaultSettings_Prefs.png)

In the export window, you can chose the appropriate options (setting DDS to 32 bits should be done last as we have seen it defaulting back to 8 bits otherwise):

![ExportSettings](/img/How_To/environment/Lys_DefaultSettings_Export.png)

Finally, you can export your texture through the main tab:

![Export](/img/How_To/environment/Lys_DefaultSettings_MainExportButton.png)

You are all set and ready to use the exported texture in the ```CubeTexture.CreateFromPrefilteredData``` function.

### Creating a compressed environment texture
As the generated DDS files can be relatively large (32Mb for a 512px wide file), we introduced in Babylon a special way to pack your texture. Here are the steps to follow to create the .env files used in BabylonJS:

First, go to the [Sandbox](https://sandbox.babylonjs.com/?assetUrl=https://models.babylonjs.com/PBR_Spheres.glb) and open the Inspector Menu:

![InspectorMenu](/img/How_To/environment/InspectorMenu.png)

Once in the Inspector Open the Tools Tab:

![InspectorTools](/img/How_To/environment/InspectorTools.png)

You can now easily chose your previously created DDS files with the browse button and then compress them to a .env file with the "Compress current texture to .env" button.

Finally, loading a .env could not be simpler:

```
scene.environmentTexture = new BABYLON.CubeTexture("environment.env", scene);
```

### What is a .env (Tech Deep Dive)

The issue we are addressing with .env is the size and quality of our IBL Environment Textures. We decided to implement our custom packing to simplify sharing and downloading those assets. This file needs to work cross platform for an easy deployment hence why we are not relying directly on compressed textures.

We are then packing in one file (similar to DDS or KTX) a json manifest header, the polynomial information and all the faces of the mipmaps chain from the prefiltered cube texture in .png format (which compresses more than decently and decode really fast in all browsers.).

In order to keep an HDR support with png, we chose to rely on RGBD as it offers a better distribution of the value in the low range than RGBM by keeping the [0-1] range untouched knowing it is generally used more frequently. It is also less complex to decode at runtime than LogLUV when needed. It seems the like the best tradeoff for us.

RGBD also offers none to low transparency in the lower range preventing browser relying on premultiplication of alpha to loose data in the most visible area. We also introduced a special offset from the max range ensuring that we are not reaching problematic values of alpha in legacy browsers (when alpha is too close from 0 the color quantization is created unacceptable banding artifacts).

In WebGL2 browsers, we are unpacking the data to HalfFloat or FullFloat texture if supported to speedup the runtime and allow correct some interpolations.

The file is also packing the polynomials harmonics vs sphericals to match what Babylon is expected internally speeding up load time by not having to compute or transform them anymore.

As rendering to LOD or even copy to LOD of Half/Fulll float texture does not work consistently on WebGL1 based browser, we are unpacking in live the data in the fragment shader. As RGBD interpolation is not correct we ensured with different test cases that the generated visual artifacts were worth the transport gain. It looks ok in the sets of textures we have been testing.

As an example of result, we can now rely on 512px cube sized texture with around 3Mb of data vs 32 Mb for the unpacked version without noticing any blocking quality drops. This also speed ups our time to first frame by not requiring the compute of the polynomials anymore.

### Using a pure cube texture
While using a dds cube texture is the best option, you may want to still rely on classic cube texture (mostly for size reason).
So, you can still do this as well:
```javascript
pbr.environmentTexture = new BABYLON.CubeTexture("textures/TropicalSunnyDay", scene);
```
In this case you won't be able to get HDR rendering and some visual artifacts may appear (mostly when using glossiness or roughness).
