---
PG_TITLE: Use a HDR environment (for PBR)
---

# Use a HDR environment (for PBR)

## Introduction

[As you may have seen before](/How_To/Physically_Based_Rendering), the highly recommended way to setup an environment texture is through an HDR ready file (either DDS or ENV) containing a cube texture with prefiltered MipMaps.

To load a HDR environment, you can use a [createDefaultEnvironment](https://doc.babylonjs.com/api/classes/babylon.scene#createdefaultenvironment):

```javascript
scene.createDefaultEnvironment();
```

This will load the file *environmentSpecular.env* from *assets.babylonjs.com*.

To load a custom HDR texture, simply set the `scene.environmentTexture`:

```javascript
var hdrTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData("textures/environment.dds", scene);
hdrTexture.gammaSpace = false;
scene.environmentTexture = hdrTexture;
```

We are detailing below the two supported ways of creating such files. The first one rely on an open source framework named IBL Baker whereas the second one creating higher resolution results is based on a proprietary software named Lys.

Note that you can rotate your environmentTexture if needed:

```javascript
var hdrRotation = 10; // in degrees
hdrTexture.setReflectionTextureMatrix(
    BABYLON.Matrix.RotationY(
        BABYLON.Tools.ToRadians(hdrRotation)
    )
);
```


## Creating a dds environment file from IBL Baker
You can find IBLBaker on: [https://github.com/derkreature/IBLBaker](https://github.com/derkreature/IBLBaker)

After cloning the repo, you will be able to go to `/bin64` folder and launch `IBLBaker.exe`.

Now use the `Load environment` button to load a HDR image (Try one from [HDRLib](https://hdrlib.com/) or [there](https://github.com/sbtron/BabylonJS-glTFLoader/tree/master/src/images) as well)

We recommend to play with the environment scale to define the brightness you want.

You may also want to reduce the output size by setting the specular resolution of 128 to ensure the correctness of the blur dropoff:

![iblbaker](/img/how_to/Environment/IBLbaker_DefaultSettings.png)

Once you are satisfied with the overall result, just click on `save environment` button and you are good to go! The file to pick is the SpecularHDR one.

**Please do not forget to write full name with extension in order to make the save works correctly**.

## Creating a dds environment file from LYS
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

## Creating a compressed environment texture
As the generated DDS files can be relatively large (32Mb for a 512px wide file), we introduced in Babylon a special way to pack your texture. Here are the steps to follow to create the .env files used in BabylonJS:

First, go to this [Sandbox](https://sandbox.babylonjs.com/?assetUrl=https://models.babylonjs.com/PBR_Spheres.glb) and open the Inspector Menu:

![InspectorMenu](/img/How_To/environment/InspectorMenu.png)

Once in the Inspector Open the Tools Tab:

![InspectorTools](/img/How_To/environment/InspectorTools.png)

You can now easily chose your previously created DDS files with the browse button and then compress them to a .env file with the "Compress current texture to .env" button.

Finally, loading a .env could not be simpler:

```
scene.environmentTexture = new BABYLON.CubeTexture("environment.env", scene);
```

## What is a .env (Tech Deep Dive)

The issue we are addressing with .env is the size and quality of our IBL Environment Textures. We decided to implement our custom packing to simplify sharing and downloading those assets. This file needs to work cross platform for an easy deployment hence why we are not relying directly on compressed textures.

We are then packing in one file (similar to DDS or KTX) a json manifest header, the polynomial information and all the faces of the mipmaps chain from the prefiltered cube texture in .png format (which compresses more than decently and decode really fast in all browsers.).

In order to keep an HDR support with png, we chose to rely on RGBD as it offers a better distribution of the value in the low range than RGBM by keeping the [0-1] range untouched knowing it is generally used more frequently. It is also less complex to decode at runtime than LogLUV when needed. It seems the like the best tradeoff for us.

RGBD also offers none to low transparency in the lower range preventing browser relying on premultiplication of alpha to loose data in the most visible area. We also introduced a special offset from the max range ensuring that we are not reaching problematic values of alpha in legacy browsers (when alpha is too close from 0 the color quantization is created unacceptable banding artifacts).

In WebGL2 browsers, we are unpacking the data to HalfFloat or FullFloat texture if supported to speedup the runtime and allow correct some interpolations.

The file is also packing the polynomials harmonics vs sphericals to match what Babylon is expected internally speeding up load time by not having to compute or transform them anymore.

As rendering to LOD or even copy to LOD of Half/Fulll float texture does not work consistently on WebGL1 based browser, we are unpacking in live the data in the fragment shader. As RGBD interpolation is not correct we ensured with different test cases that the generated visual artifacts were worth the transport gain. It looks ok in the sets of textures we have been testing.

As an example of result, we can now rely on 512px cube sized texture with around 3Mb of data vs 32 Mb for the unpacked version without noticing any blocking quality drops. This also speed ups our time to first frame by not requiring the compute of the polynomials anymore.

## Using a pure cube texture
While using a dds cube texture is the best option, you may want to still rely on classic cube texture (mostly for size reason).
So, you can still do this as well:
```javascript
pbr.environmentTexture = new BABYLON.CubeTexture("textures/TropicalSunnyDay", scene);
```
In this case you won't be able to get HDR rendering and some visual artifacts may appear (mostly when using glossiness or roughness).
