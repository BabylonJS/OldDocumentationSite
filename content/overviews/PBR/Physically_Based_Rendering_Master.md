# Master the PBR Materials

## Introduction
After following the [PBR Introduction](http://doc.babylonjs.com/overviews/Physically_Based_Rendering), it is a good time to learn how to efficiently use the **PBR Material**. 

![Title](/img/extensions/materials/PBRMaster.png)

[**Playground Demo Scene - PBR Materials**](http://babylonjs-playground.com/#ESBZC#3)

This will be the only picture of the documentation. As a **real sample** would be better than a picture, please, do not hesitate to click on the eye aside of each playground links to see the live examples embedded in the page.

The entire documentation should help you deal with most of the PBR Material setup and explains you how to create a few Materials (Metal, Gold, Crystal, Wood, Plastic).

## How to install
As the PBR material is now embedded in the main BabylonJS library, please, follow the [basic tutorial](http://doc.babylonjs.com/tutorials/Creating_a_Basic_Scene) in order to create your first page using the framework.

Please, note this requires at least the 2.4 preview version.

## Features
Here is a small reminder of the PBR material supported features:
* Albedo, Reflectivity, Microsurface
* Reflection / Refraction
* Normal Map / Parallax
* Shadows (as the standard material)
* Energy Conservation
* Gamma Correction
* Inversed squared light Falloff and Light Radius
* HDR Texture and Seamless Cubemap (LOD extension required)
* Environment Irradiance
* Camera controls: Contrast and Exposure
* Camera controls: Color Grading and Color Curves
* Zero Light Lighting
* Debug Controls

If you do not understand most of these features, no worries, they'll be fully explained below.

## Albedo, Reflectivity and Microsurface
These are the main controls of the material. They are helpful to configure the most visible part.

### Albedo
The albedo value, also known as diffuse in standard material, controls the main color of the material. It sets up the **surface color** of the object. 

[Demo](http://www.babylonjs-playground.com/#1F0M1J#9)
```javascript
var pbr = new BABYLON.PBRMaterial("pbr", scene);
pbr.albedoColor = new BABYLON.Color3(1, 0, 0);
```

The albedo value can also be controlled by a texture through a dedicated property.

[Demo](http://www.babylonjs-playground.com/#1F0M1J#10)
```javascript
var pbr = new BABYLON.PBRMaterial("pbr", scene);
pbr.albedoColor = texture;
```

### Reflectivity
The reflectivity color is the PBR equivalent of the specular color in the standard material. This controls the **surface reflectivity** of the material. You could certainly wonder why a color is required and not a coefficient ? If we only had a coefficient, we could only create material from mirror (fully reflective) to matte paper (not reflective at all). The main advantage of a color is to control what channels are reflected by the material. Gold for instance will reflect yellow and not only white.

[Demo](http://www.babylonjs-playground.com/#1F0M1J#11)
```javascript
var pbr = new BABYLON.PBRMaterial("pbr", scene);
pbr.reflectivityColor = new BABYLON.Color3(1.0, 1.0, 1.0);
```

As for the albedo, you can use a texture to control this value.

```javascript
var pbr = new BABYLON.PBRMaterial("pbr", scene);
pbr.reflectivityTexture = new BABYLON.Color3(1.0, 1.0, 1.0); // White is representing a mirror.
```

### MicroSurface
The microsurface controls how **"shiny" or "glossy"** the material is. This value (between 0 and 1) will basically adjust a material from being fully rough (0) to fully glossy (1).

[Demo](http://babylonjs-playground.com/#1LZALU#5)
```javascript
var pbr = new BABYLON.PBRMaterial("pbr", scene);
pbr.microSurface = 0.2; // Rough material like paper.
```

You should now wonder how to store this value in a texture? The microsurface is a single float parameter and the reflectivity color does not use its alpha channel. This value can then be simply embedded in the alpha channel of the reflectivityTexture.

[Demo](http://www.babylonjs-playground.com/#1F0M1J#12)
```javascript
var pbr = new BABYLON.PBRMaterial("pbr", scene);
pbr.reflectivityTexture = new BABYLON.Texture("textures/reflectivity.png", scene);
pbr.useMicroSurfaceFromReflectivityMapAlpha = true;
```

### Combination
In PBR the most important part is to accurately define the combination of the three previous parameters. None of the previous playground looks nice as they are only configuring one parameter at a time. Nevertheless, by adjusting all of them to the desired level, you could create some materials like metal, plastic and more... More on this in the last part of this document.

Another point to take into account in your setup is the **energy conservation**. In nature, nothing could reflect more light than it receives. The material follows this rule and drops the albedo color of each pixel to ensure that albedo + reflectivity <= 1. Basically, a mirror can not add its albedo color in the equation. More on this later in the documentation. 

## Reflection and Refraction
The environment in PBR is considered as one of the main light source. As in real life, everything surrounding us enlights us. In this material, every pixel from the environment is considered as its own light **"like nature does"** quoting the original author of the material.

### Reflection
Reflection is the easiest to describe, it is **what you can see in a mirror**.

As the reflection is a mandatory part of the material, like the albedo properties, either a color or a texture is configurable.

[Demo](http://www.babylonjs-playground.com/#1F0M1J#13)
```javascript
// Creates a reflection texture.
var reflectionTexture = new BABYLON.CubeTexture("textures/TropicalSunnyDay", scene);	

// Creates the pbr material to use in the scene
var pbr = new BABYLON.PBRMaterial("pbr", scene);
pbr.reflectionTexture = reflectionTexture;
pbr.reflectivityColor = new BABYLON.Color3(1.0, 1.0, 1.0); // White to make the material fully reflective.
```

In case you do not have any texture to provide or no defined light probes in your scene, the reflection color will be used. You can notice in the following setup with a red albedo but a white reflectivity color (mirror) that the sphere is yellow as defined in the reflection color.

[Demo](http://www.babylonjs-playground.com/#1F0M1J#14)
```javascript
var pbr = new BABYLON.PBRMaterial("pbr", scene);
pbr.albedoColor = new BABYLON.Color3(1, 0, 0);
pbr.reflectivityColor = new BABYLON.Color3(1.0, 1.0, 1.0);
pbr.reflectionColor = new BABYLON.Color3(1.0, 1.0, 0.0);
```

The diffuse reflection will be described later in the Environment Irradiance section.

Another interesting addition to the reflection is the ability to keep the most luminous part of the reflection over transparent surface... Yeah, it does not make much sense... Actually if you look through a window at night from a lit room, you can see the reflection of lights or TV on the glass. This is the same for reflection in the PBR Material. A special property `pbr.useRadianceOverAlpha = true;` has been added to allow you to control this effect. Not only reflection (AKA radiance) but specular highlights can be seen on top of transparency.

[Demo](http://www.babylonjs-playground.com/#19JGPR#13)
```javascript
glass.reflectionTexture = hdrTexture;
glass.alpha = 0.5;
```

### Refraction
Refraction is a little bit like reflection (Please purists, do not kill me now, I only said a little) because it is heavily relying on the environment to change the way the material looks. Basically, if reflection could be compared to seing the sun and cloud on the surface of a lake, refraction would be seing weird shaped fish under the surface (through the water).  

A great tutorial on the refraction is available [Here](http://doc.babylonjs.com/tutorials/Advanced_Texturing)

As refraction is equivalent to how you can **see through different materials boundaries**, the effect can be controlled via the transparency in BJS. A special property helps you to do it, simply put `pbr.linkRefractionWithTransparency=true;` in your code and then the alpha will control how refractive the material is. Putting it to false leaves the alpha controlling the default transparency. 

[Demo](http://www.babylonjs-playground.com/#19JGPR#12)
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
* [Normal Map](http://doc.babylonjs.com/tutorials/Advanced_Texturing)
* [Parallax](http://doc.babylonjs.com/tutorials/Using_parallax_mapping)
 
## Shadows (as the standard material)
Shadows are fully equivalent to the Standard material. All the documentation can be found here: [Shadows](http://doc.babylonjs.com/tutorials/15._Shadows)

## Energy Conservation
In physics, Energy conservation is a really important rule modifying the way we can represent our lighting approximations.

The two rules we are following are:

### Albedo VS Reflectivity
In real life, nothing (not emitting lights like light bulb) can emits more light than it receives.

```
Diffuse + Reflective <= 1.0
``` 

With this in mind, it obviously means the materials need to automatically drop one of them if the sum is bigger than one. As a common standard convention (they sometimes exist in 3D), we chose to decrease the albedo impact if the reflectivity is high.

[Demo](http://www.babylonjs-playground.com/#1F0M1J#14)
```javascript
var pbr = new BABYLON.PBRMaterial("pbr", scene);
pbr.albedoColor = new BABYLON.Color3(1, 0, 0);
pbr.reflectivityColor = new BABYLON.Color3(1.0, 1.0, 1.0);
pbr.reflectionColor = new BABYLON.Color3(1.0, 1.0, 0.0);
``` 

### Reflection VS Refraction
The same rule occurs for Reflection vs Refraction:

```
Relection + Refraction <= 1.0
``` 

Basically, a fully reflective object like a mirror will not let you see through it. You can see it on the example below. Even if the material is defined as fully refractive, the fact that the reflectivity is White (1.0) completely cancels the refractive part of it.

[Demo](http://www.babylonjs-playground.com/#19JGPR#14)
```javascript
 var notGlass = new BABYLON.PBRMaterial("glass", scene);
notGlass.reflectionTexture = hdrTexture;
notGlass.refractionTexture = hdrTexture;
notGlass.linkRefractionWithTransparency = true;
notGlass.indexOfRefraction = 0.52;
notGlass.alpha = 0;
notGlass.reflectivityColor = new BABYLON.Color3(1.0, 1.0, 1.0);
notGlass.albedoColor = new BABYLON.Color3(0.95, 0.95, 0.95);
``` 

## Gamma Correction
Gamma correction could take a dedicated article to explain, so please, have a read at wikipedia [Gamma Correction](https://en.wikipedia.org/wiki/Gamma_correction) and the implementation details will be delivered here.

I bet after this good read, you are wondering how we are dealing with Gamma Correction in the PBR Material.

To make it simple, all texture inputs requiring colors in linear space to apply lighting (everything appart Normals, Bumps and Occlusion) are converted just after sampling the texture from Gamma to Linear space in the shader. One exception has been made for the HDR Texture which is already in Linear space.

```
surfaceAlbedo = texture2D(albedoSampler, vAlbedoUV);
surfaceAlbedo = vec4(toLinearSpace(surfaceAlbedo.rgb), surfaceAlbedo.a);
``` 

All the lighting maths are then applied in linear space and the last operation of the shader is to convert back the final color of the fragment from Linear to Gamma Space.

```
finalColor.rgb = toGammaSpace(finalColor.rgb);
```

You should now wonder what is happening to your color properties in the material. By default they are considered in Gamma space and are converted in the material before being bound to the shader. This could be annoying if you are used to play with scalar in linear space (it usually depends on the convention your 3D creation pipeline follows). Bearing this in mind, a special control has been added to allow you to work in Linear Space for all the color properties of the material (this does not impact texture sampling).

```javascript
pbr.useScalarInLinearSpace = true;
```

## Inversed squared light Falloff and Light Radius
Always considering what "Nature does", we reconsidered the BJS light falloff effect in the PBR Material.

Two main properties have been added to offer a better simulation of the lights.

### Inverse Square Falloff
This is a type of falloff that is pretty close from what light does in real life (It is implemented in the best engines like BJS and [Unreal](https://docs.unrealengine.com/latest/INT/Resources/ContentExamples/Lighting/4_2/index.html), I may oversell it here :-) )

Compared to the BJS lighting model, instead of playing with an arbitrary range for the lights, the light impact will decrease proportionnaly to the inverse of the light distance squared.

```
float lightDistanceFalloff = 1.0 / ((lightDistanceSquared + 0.0001));
return lightDistanceFalloff;
``` 

So the further you are, the bigger your intensity will need to be to reach a surface.

To even go further, the intensity you define on the lights follows physics notions:

* Point and Spot lights are defined in luminous intensity (candela, m/sr)
* Directionnal and Hemispheric lights in illuminance (nit, cd/m2)

To make it compatible with the standard material, you can easily disable this behaviour and use the Physical Falloff like this:

```javascript
pbr.usePhysicalLightFalloff = false;
```

### Light Radius
Light Radius has been added as a property of each light and controls the fact that in real life most of the lights are not a single point.

Why? Simply because if your material is really glossy, each specular highlights (from the direct lights) will only be seen as a simple dot.

Try to spot the dot in the middle of the sphere in the [Demo](http://www.babylonjs-playground.com/#19JGPR#10).

Now, increasing the light radius makes this dot wider as you can see on this [Demo](http://www.babylonjs-playground.com/#19JGPR#11) 

This uses internally a lot of approximation like Tan(theta) is almost theta for small angles so if you try to put bigger radius than a tenth of the light distance you will not see the desired effect.

## HDR Texture and Seamless Cubemap (LOD extension required)
Knowing that the environment has a huge impact on your rendering, it raises the question of how to get a good looking cubemap when the material is not glossy.

### HDR Texture
First of all, a new format has been added to the textures supported by BJS : the HDRTexture. This new kind of texture allows to support high range of colors which is required for special operations like Environment irradiance that we will address in the next chapter of the documentation.

Those textures are widely defined on [Wikipedia](https://en.wikipedia.org/wiki/Radiance_%28software%29). We are always considering them being a Panoramic picture in the current implementation.

To reduce the complexity of the code and wait for more user needs, we first implemented only an [RGBE](https://en.wikipedia.org/wiki/RGBE_image_format) parser.

If you wonder why those choices? (which is actually a good question) it is to help you having a wider set of avalable samples. The awesome website [Hdrlib](http://hdrlib.com/) contains the widest variety of ready to use files.

[Demo](http://www.babylonjs-playground.com/#19JGPR#4)
```javascript
var hdrTexture = new BABYLON.HDRCubeTexture("textures/room.hdr", scene, 512);
```

Those textures are directly stored in Linear Space. If you want to reuse them in the standard material (so in Gamma Space), you can do it through a special parameter of the constructor. Find below the full list of parameters:

* url The location of the HDR raw data (Panorama stored in RGBE format)
* scene The scene the texture will be used in
* size The cubemap desired size (the more it increases the longer the generation will be)
* noMipmap Forces to not generate the mipmap if true
* generateHarmonics Specifies wether you want to extract the polynomial harmonics during the generation process
* useInGammaSpace Specifies if the texture will be use in gamma or linear space (the PBR material requires those texture in linear space, but the standard material would require them in Gamma space)
* usePMREMGenerator Specifies wether or not to generate the CubeMap through CubeMapGen to avoid seams issue at run time.

### Seamless Cubemap
Knowing about our new texture format, it is a good time to discuss one annoying issue.
 
WebGL 1.0 should not support Seamless Cubemap filtering as it relies on OpenGL ES 2.0. Nevertheless, some browsers (OS depenedant) support it like Chrome for instance. It is then a wild area in WebGL [Chromium Ticket](https://bugs.chromium.org/p/chromium/issues/detail?id=479753&q=label%3ACr-blink-webgl&colspec=ID%20Pri%20M%20Stars%20ReleaseBlock%20Cr%20Status%20Owner%20Summary%20OS%20Modified). And without its full support, your entire matte material could look pretty bad...

Fortunately in BJS, we chose to allow you pre-filtering your environment cubemap while loading through a similar mechanism than [Cubemapgen](https://seblagarde.wordpress.com/2012/06/10/amd-cubemapgen-for-physically-based-rendering/).

It is as easy as adding the good properties during the creation of an HDR texture through its last constructor parameter *usePMREMGenerator*. 

```javascript
var hdrSeamLessTexture = new BABYLON.HDRCubeTexture("textures/country.hdr", scene, 64, false, true, false, true);
```

This will turn on Seamless cubemap filtering in all browsers with the TextureLOD extension available. We chose not to implement anything for Bias support because it decreases the performances (which are already limited). The pre-filtering can be a slow operation, so please wait for it to load completely ;-)

[Demo](http://www.babylonjs-playground.com/#1P98HI#1)

In order to prefilter your texture offline which would make your entire application more responsive, you can now use the babylon [Environment Map Generator](https://github.com/BabylonJS/Extensions/tree/master/EnvironmentMapGenerator) Extension.

To load those preprocessed textures you only have to pass no size parameter to the HDRCubeTexture constructor:

```javascript
var hdrSeamLessTexture = new BABYLON.HDRCubeTexture("textures/country.babylon.hdr", scene);
```

More information can also be found on the following [Forum Thread](http://www.html5gamedevs.com/topic/21204-pbrmaterial-shows-hard-edges-of-skybox-macbookpro/#comment-120781).

## Environment Irradiance
Another big topic addressed by the PBR material is related to the environment irradiance. In nature, as soon as an object is placed in one environment, it receives lights from everywhere. Even, a none reflective object placed in a country side landscape between the grass and the sky will normally be affected by the grass color on its bottom (Green) and the sky on its top (Blue). It is what the [environment irradiance](http://graphics.stanford.edu/papers/envmap/) feature replicates in the PBR Material.

We choose to use a common technic where the environment irradiance is applied to the object through their [spherical harmonics](https://dickyjim.wordpress.com/2013/09/04/spherical-harmonics-for-beginners/).

You are probably now thinking how will I do all of this setup in BJS ? And as usual, the answer is that everything is automatically done for you as soon as you are using an HDRTexture. The fact that we extract the Harmonics from the texture is the reason why we were entitled to use an High Dynamic Range format. The generation could skip the harmonics generation step if you instantiate an HDRTexture with its parameter *generateHarmonics* set to false.

On the following example, the sphere is a fully white sphere none reflective so you can see the impact of this lighting alone.

[Demo](http://www.babylonjs-playground.com/#1P98HI#2) 

```javascript
var materialSphere = new BABYLON.PBRMaterial("pbr", scene);
materialSphere.reflectionTexture = hdrTexture;
materialSphere.albedoColor = new BABYLON.Color3(1.0, 1.0, 1.0);
materialSphere.reflectivityColor = new BABYLON.Color3(0.0, 0.0, 0.0);
materialSphere.microSurface = 0;
materialSphere.directIntensity = 0;
```

## Camera controls: Contrast and Exposure
One of the outstanding WebGL issue is the lack of MSAA on texture render target... **Aghhhhhh!** (feel better now :)). This prevents a simple way to get a good looking scene via post processing. Also there is no universal support of full precision floating point render targets.

In order to work around those issues and increase performance we integrated as part of the material two optional controls for both **contrast** and **exposure**. This enables you to do photographic tone mapping and deals with the contrast directly from the material.

[Demo](http://babylonjs-playground.com/#1Y4YAM#3)
```javascript
var pbr = new BABYLON.PBRMaterial("pbr", scene);
pbr.cameraExposure = 0.66;
pbr.cameraContrast = 1.66;
```

## Camera controls: Color Grading and Color Curves
Due to the issue explained in the previous part (Camera controls: Contrast and Exposure), we are trying as much as we can to keep a one pass only forward rendering.

Knowing the importance in PBR to tweak the camera to the desired effect, we integrated in Babylon JS the support for both Color Grading and Color Curves in the material. 

### Color Grading

For those not familiar with the concept, you can imagine color grading as converting any input color to a different output one : [Wikipedia](https://en.wikipedia.org/wiki/Colour_look-up_table).

This can be used to achieve lots of different effects from sepia to sixties and pixellating. On the following demo, you can see how to change the entire scene to look like a sunset just by adding a color grading texture.

The .3dl format is natively supported in BJS to allow you to directly export your LUT from your favourite edition tool.

[Demo](http://www.babylonjs-playground.com/#B4PW0#2)
```javascript
var pbr = new BABYLON.PBRMaterial("pbr", scene);
var colorGrading = new BABYLON.ColorGradingTexture("textures/LateSunset.3dl", scene);
pbr.cameraColorGradingTexture = colorGrading;
```

### Color Curves

Color cuves is also always part of picture edition tools. So in order to help setting your scene exactly as desired, we embedded them directly as part of the material.

You can through the new ColorCurves class specify the same setup you are used to have in your picture edition tools.

[Demo](http://www.babylonjs-playground.com/#B4PW0#3)
```javascript
var pbr = new BABYLON.PBRMaterial("pbr", scene);
var curve = new BABYLON.ColorCurves();
curve.GlobalHue = 200;
curve.GlobalDensity = 80;
curve.GlobalSaturation = 80;

curve.HighlightsHue = 20;
curve.HighlightsDensity = 80;
curve.HighlightsSaturation = -80;

curve.ShadowsHue = 2;
curve.ShadowsDensity = 80;
curve.ShadowsSaturation = 40;
pbr.cameraColorCurves = curve;
```

## Zero Light Lighting
If you arrived to this point you should have understood pretty well (I hope so... please, bare with my Frenglish) that the Environment surrounding an object is lit both through Reflection/Refraction and Irradiance.

A really good thing about this is that you do not require lights anymore in your scene. The environment replaces them at some extents. Scene lights will now be really dedicated to cast shadows or will represent lights which are close to the objects like candles or spots...

```javascript
// Hard to make a sample with nothing in :-)
// You can still have a look at environment irradiance Demo, it does not have any light in the scene.
```

Two properties can help you controlling the impact of the direct lights (the 4 BJS ones) versus the impact of the environment:

```javascript
var pbr = new BABYLON.PBRMaterial("pbr", scene);
pbr.directIntensity = 1.0;
pbr.environmentIntensity = 1.0;
```

Those two lighting ways are additive in the material.

## Debug Controls
All of this is a lot of information and can from time to time be cumbersome to troubleshoot. To help, here is a list of properties you can rely on during your scene setup:

* specularIntensity : Controls the intensity of the specular highlights creating by the four lights in the scene.
* disableBumpMap : As stated in the name, it disable/enable the normal map only on this material.
* overloadedShadowIntensity : Controls the intensity of the shadow casted on the material.
* overloadedShadeIntensity : Controls he intensity of the shade created by the lambertian coefficient on the material.

A few other properties can help you mixing a debug color with the current one defined in the material, for instance you could overload an albedo texture with a flat color during debug. In order to chose how much you want to overload, each of the following properties have their intensity paired. 

Basically, I want to overload my albedo texture in yellow by 50 %:

[Demo](http://www.babylonjs-playground.com/#1F0M1J#15)
```javascript
var pbr = new BABYLON.PBRMaterial("pbr", scene);
pbr.albedoTexture = texture;
pbr.reflectivityColor = new BABYLON.Color3(0.3, 0.3, 0.3);
pbr.overloadedAlbedo = new BABYLON.Color3(1.0, 1.0, 0.0); // sets the albedo debug to yellow
pbr.overloadedAlbedoIntensity = 0.5; // sets the impact of the debug to 50 %
```

* overloadedAmbient/overloadedAmbientIntensity : Overload the current Ambient setup
* overloadedAlbedo/overloadedAlbedoIntensity : Overload the current Albedo setup
* overloadedReflectivity/overloadedReflectivityIntensity : Overload the current Reflectivity setup
* overloadedEmissive/overloadedEmissiveIntensity : Overload the current Emissive setup
* overloadedReflection/overloadedReflectionIntensity : Overload the current Reflection Albedo
* overloadedMicroSurface/overloadedMicroSurfaceIntensity : Overload the current Microsurface Albedo

And this was the most repetitive paragraph ever made and generated by hand !!!

All of this done, it is time to have more fun with concrete examples.

## Material Creation Tutorials
The following section will detail how to create some of the commonly used type of material in BJS. All of them will rely on the same scene setup.

### Scene Setup
It would be really nice to have a scene with a camera always targetting its center. This would allow us to see the object and its material from different angles.

By chance BJS has a predifined camera called *ArcRotateCamera* offering exactly this behaviour.

```javascript
var scene = new BABYLON.Scene(engine);
var camera = new BABYLON.ArcRotateCamera("Camera", // The famous ArcRotateCamera 
    -Math.PI / 4, // Define a nice looking elevation
    Math.PI / 2.5, // and a nice looking Azimuth
    200, // Put the camera at 200 units from the target
    BABYLON.Vector3.Zero(), // Targets or looks at the scene center
    scene);
camera.attachControl(canvas, true);
camera.minZ = 0.1;
```

This scene also requires a skybox showing the environment we are part of. Knowing the importance of it, we chose to use an HDRTexture with their harmonics generated.

[Demo](http://www.babylonjs-playground.com/#1VCUIJ)
```javascript
// Environment Texture
var hdrTexture = new BABYLON.HDRCubeTexture("textures/room.hdr", scene, 512); // Default HDRTexture creation contains harmonics generation 

// Skybox
var hdrSkybox = BABYLON.Mesh.CreateBox("hdrSkyBox", 1000.0, scene); // Create a box around the scene
var hdrSkyboxMaterial = new BABYLON.PBRMaterial("skyBox", scene); 
hdrSkyboxMaterial.backFaceCulling = false;
hdrSkyboxMaterial.reflectionTexture = hdrTexture.clone();
hdrSkyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE; // This ensures the box acts as a skybox
hdrSkyboxMaterial.microSurface = 1.0; // We want the skybox not being blurry
hdrSkyboxMaterial.cameraExposure = 0.66; // Nicely tweaks the camera
hdrSkyboxMaterial.cameraContrast = 1.66;
hdrSkyboxMaterial.disableLighting = true;
hdrSkybox.material = hdrSkyboxMaterial;
hdrSkybox.infiniteDistance = true; // Push it at an infinite distance
```

That is it for the scene setup used in all the samples.

### How to create a Metal material?
A metal ball acts as a kind of "dark mirror".

Having following the scene creation, we start from the following point.

[Demo](http://www.babylonjs-playground.com/#1VCUIJ)

We can now add a sphere attached to a PBR material.

[Demo](http://www.babylonjs-playground.com/#1VCUIJ#8)
```javascript
// Create materials
var metal = new BABYLON.PBRMaterial("metal", scene);

// Create meshes
var sphereMetal = BABYLON.Mesh.CreateSphere("sphereMetal", 48, 80.0, scene);
sphereMetal.material = metal;
```

We also need to enable Reflection using the defined environment in the material.

[Demo](http://www.babylonjs-playground.com/#1VCUIJ#9)
```javascript
metal.reflectionTexture = hdrTexture;
```

We are pretty close but metal should be darker, almost black on the albedo and lower than White on reflectivity (not fully relective as it is not a mirror) You can find some of the setup value in the [Unity Blog](http://blogs.unity3d.com/2015/02/18/working-with-physically-based-shading-a-practical-approach/).

[Demo](http://www.babylonjs-playground.com/#1VCUIJ#10)
```javascript
metal.microSurface = 1;
metal.reflectivityColor = new BABYLON.Color3(0.9, 0.9, 0.9);
metal.albedoColor = new BABYLON.Color3(0.02, 0.02, 0.02);
```

And finally we can tweak the camera controls and intensity to integrate nicely in the scene.

[Demo](http://www.babylonjs-playground.com/#1VCUIJ#11)
```javascript
metal.environmentIntensity = 0.7;
metal.cameraExposure = 0.66;
metal.cameraContrast = 1.66;
```

You can now notice the reflection on the side which come from the automatic fresnels to better simulate what Nature does.

That's all, you have just created your first PBR material \o/

### How to create a Gold material?
We'll try here to create rough gold, which could be compared to metal but yellow-er and rough-er.

So let's tweak the reflectivity and microsurface of the metal from the previous tutorial to be more gold-ish.

[Demo](http://www.babylonjs-playground.com/#1VCUIJ#12)
```javascript
metal.microSurface = 0.76;
metal.reflectivityColor = new BABYLON.Color3(0.9, 0.8, 0.1);
metal.albedoColor = new BABYLON.Color3(0.05, 0.03, 0.01);
```

You could now notice seams on some platforms. As we have seen before we could generate seamless cubemap through the HDRTexture.

[Demo](http://www.babylonjs-playground.com/#1VCUIJ#13)
```javascript
var seamlessTexture = new BABYLON.HDRCubeTexture("textures/room.hdr", scene, 64, false, true, false, true);
metal.reflectionTexture = seamlessTexture;
```

And you have already created your second material (only touching a few values).

### How to create a Crystal material?
A crystal ball is an object we can see through and which deforms our view of the environment due to the contact surface changes from air to crystal (not taking into account the other one on the back from crystal to air).

We start again from our scene setup and adds a sphere with a pbr material.

[Demo](http://www.babylonjs-playground.com/#1VCUIJ#1)

As the material is a see-through material that deforms the view, we need to enable Refraction using the defined environment in the scene. We also use the transparency to ensure it is fully refractive as well as setting the correct Index of refraction (Ratio of both material indices) for going from air to crystal.

[Demo](http://www.babylonjs-playground.com/#1VCUIJ#4)
```javascript
glass.refractionTexture = hdrTexture;
glass.linkRefractionWithTransparency = true;
glass.indexOfRefraction = 0.52; // ETA from air to crystal
glass.alpha = 0;
```

You can now wonder why the sphere is still fully grey. It is due to the Energy conservation and the fact that the default reflectivity is White (mirror) and the default reflection color is grey (not using the environment). Let's have a look with the environment properly setup.

[Demo](http://www.babylonjs-playground.com/#1VCUIJ#5)
```javascript
glass.reflectionTexture = hdrTexture;
```

This still does not work and the object looks like a blurry mirror. It is due to the second rule of energy conservation between Reflection and Refraction. So let's fix this by dropping the reflectivity and also making it a fully glossy material (pure crystal, not blurry).

[Demo](http://www.babylonjs-playground.com/#1VCUIJ#6)
```javascript
glass.microSurface = 1;
glass.reflectivityColor = new BABYLON.Color3(0.0, 0.0, 0.0);
```

And finally, we can tweak the camera controls and intensity to integrate to sphere in the scene.

[Demo](http://www.babylonjs-playground.com/#1VCUIJ#7)
```javascript
glass.environmentIntensity = 0.7;
glass.cameraExposure = 0.66;
glass.cameraContrast = 1.66;
```

### How to create a Wood material?
After creating Metal, Gold and Glass, it is obvious how to setup your scene with an HDR Texture, a plank (box) and a PBR material.

I then start from this point (fully grey due to energy conservation as stated in the previous tuto):

[Demo](http://www.babylonjs-playground.com/#1JCM6S)
```javascript
var scene = new BABYLON.Scene(engine);
var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 4, Math.PI / 2.5, 200, BABYLON.Vector3.Zero(), scene);
camera.attachControl(canvas, true);
camera.minZ = 0.1;

// Environment Texture
var hdrTexture = new BABYLON.HDRCubeTexture("textures/room.hdr", scene, 512);

// Skybox
var hdrSkybox = BABYLON.Mesh.CreateBox("hdrSkyBox", 1000.0, scene);
var hdrSkyboxMaterial = new BABYLON.PBRMaterial("skyBox", scene);
hdrSkyboxMaterial.backFaceCulling = false;
hdrSkyboxMaterial.reflectionTexture = hdrTexture.clone();
hdrSkyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
hdrSkyboxMaterial.microSurface = 1.0;
hdrSkyboxMaterial.cameraExposure = 0.66;
hdrSkyboxMaterial.cameraContrast = 1.66;
hdrSkyboxMaterial.disableLighting = true;
hdrSkybox.material = hdrSkyboxMaterial;
hdrSkybox.infiniteDistance = true;

// Create materials
var wood = new BABYLON.PBRMaterial("wood", scene);

// Create meshes	
var woodPlank = BABYLON.MeshBuilder.CreateBox("plane", { width: 65, height: 1, depth: 65 }, scene);
woodPlank.material = wood;
```

We first need to add an albedo texture and drop the default reflectivity to ensure the energy conservation will not make a mirror instead of wood.

[Demo](http://www.babylonjs-playground.com/#1JCM6S#2)
```javascript
wood.reflectionTexture = hdrTexture;
wood.albedoTexture = new BABYLON.Texture("textures/albedo.png", scene);

wood.reflectivityColor = new BABYLON.Color3(0.1, 0.1, 0.1);
wood.microSurface = 0.5;
```

This is way better but stil not realistic. We need to use a reflectivity map to ensure the wood default will be visible and not homogenous.

[Demo](http://www.babylonjs-playground.com/#1JCM6S#3)
```javascript
wood.reflectionTexture = hdrTexture;
wood.albedoTexture = new BABYLON.Texture("textures/albedo.png", scene);

wood.reflectivityTexture = new BABYLON.Texture("textures/reflectivity.png", scene);
wood.microSurface = 0.5;
```

It is now interesting to notice how the Microsurface is overall the same so not realistic as well. It is then time embed the micosurface in the alpha channel of the reflectivity texture.

[Demo](http://www.babylonjs-playground.com/#1JCM6S#4)
```javascript
wood.reflectionTexture = hdrTexture;
wood.albedoTexture = new BABYLON.Texture("textures/albedo.png", scene);
wood.reflectivityTexture = new BABYLON.Texture("textures/reflectivity.png", scene);
wood.useMicroSurfaceFromReflectivityMapAlpha = true;
```

We are now almost setup and only have to tweak the camera values to make it feel more part of the environment.

[Demo](http://www.babylonjs-playground.com/#1JCM6S#5)
```javascript
wood.cameraExposure = 0.66;
wood.cameraContrast = 1.66;
```

You have now created your fourth Material.

### How to create a Teal Plastic material?
Reading the other tutorials, you should be able to pretty quickly create plastic. It is a none reflective material, glossy with a uniform color.

So let's start again from a simple setup with one hdr texture for the environment:

[Demo](http://www.babylonjs-playground.com/#GOMAO)

We need to use the environment texture, make the albedo teal, reduce the reflectivity (to not be a mirror), and increase the glossiness.

[Demo](http://www.babylonjs-playground.com/#GOMAO#1)
```javascript
plastic.reflectionTexture = hdrTexture;
plastic.microSurface = 0.96;
plastic.albedoColor = new BABYLON.Color3(0.206, 0.94, 1);
plastic.reflectivityColor = new BABYLON.Color3(0.05, 0.05, 0.05);
```

We can also, as a final step, set the camera control to match the scene.

[Demo](http://www.babylonjs-playground.com/#GOMAO#2)
```javascript
plastic.cameraExposure = 0.66;
plastic.cameraContrast = 1.66;
```

That is it for the PBR and I hope you arrived to this line not completely asleep. You are now totally able to create the [**Playground Demo Scene - PBR Materials**](http://babylonjs-playground.com/#ESBZC#3) on your own.