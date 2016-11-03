# PBR Materials

## Introduction
After following the [standard material tutorial](http://doc.babylonjs.com/tutorials/Materials) and also excelling in [unleashing its power](https://www.eternalcoding.com/?p=303), it is a good time to go further and look at another emerging kind of materials called **PBR Materials** standing for **Physically Based Rendering Materials**.

![Elements](/img/extensions/materials/PBRMaterial.jpg)

[**Playground Demo Scene - PBR Materials**](http://babylonjs-playground.com/#ESBZC#3)

## What is the point ?!?
PBR rendering techniques aim to simulate **real life lighting**.

PBR is a grouping of techniques; it does not force you to choose one in particular. For this we have chosen to mix several: [Disney](http://blog.selfshadow.com/publications/s2012-shading-course/burley/s2012_pbs_disney_brdf_slides_v2.pdf), [Ashkimin Shirley BRDF](http://www.cs.utah.edu/~shirley/papers/jgtbrdf.pdf) and [Ashkimin Shirley Microfacets](http://www.cs.utah.edu/~shirley/papers/facets.pdf).

This material is addressing:
1. [Gamma Correction](https://en.wikipedia.org/wiki/Gamma_correction)
2. [HDR](https://en.wikipedia.org/wiki/High-dynamic-range_rendering)
3. [Integrated Fresnel](http://viscorbel.com/vray-materials-theory/)
4. [Monochrome Energy Conservation](http://www.neilblevins.com/cg_education/energy_conservation/energy_conservation.htm)
5. [Glossiness and Reflectivity](http://viscorbel.com/vray-materials-theory/)

Enjoying the [**KISS principle**](https://en.wikipedia.org/wiki/KISS_principle), the overall idea of the new Babylon material is to reduce the set of usually available parameters, to make it more **developer friendly**, but still keeping enough control. For some offline renderers, the number of scalar parameters can be huge but even if they all have their place, they can sometimes be tricky to use and hard to manage due to the overall number of possible combinations.

You can also refer to this video for a short but really helpful introduction to [PBR](https://www.youtube.com/watch?v=7NjGETJMZvY) from Crytek.

## How can I do this?
As you are already really familiar with the Babylon Standard Material now we'll only try to address here the main differences and as the simplest setup; your only changes will be to instantiate a **PBRMaterial** instead of a **StandardMaterial**.

```javascript
var pbr = new BABYLON.PBRMaterial("pbr", scene);
```

Apply this material to the object of your choice, e.g.:
```javascript
sphere.material = pbr;
```
Or, create and apply all in one step:
```javascript
sphere.material = new BABYLON.PBRMaterial("pbr", scene);
```

> "So how can I adjust my material to give the perfect look to my object?"

That is done by setting the properties on the material. Let's see what the new PBR parameters are:

* **MicroSurface** (AKA **Glossiness** or **specular power**)

The micro-surface of a material defines **the way it is reflecting** the incoming lights. It is not defining the amount, only how. A glossy material will tend to reflect the light in the same direction it is incoming. On a Matte one the reflected light will vary in contact of the surface. As I can easily understand the confusion of my explanation, let's take a look at an example (and for more Physically Based Knowledge, [follow the link](http://www.ncbi.nlm.nih.gov/pmc/articles/PMC2538579/)):

![Elements](/img/extensions/materials/PBRMaterialGlossiness.jpg)

As you can see here, the more glossy the material is (going left to right: 0.5 to 1) the less blurry the reflected environment is.

[**Playground Demo Scene - PBR Glossiness**](http://babylonjs-playground.com/#1LZALU#5)

```javascript
var x = 0;
var reflectivity = 0.7;
for (var j = 0; j < 6; j++) {
	var microSurface = j / 5;
		
	//Creation of a sphere
	var sphere = BABYLON.Mesh.CreateSphere("Sphere_" + j, 10.0, 9.0, scene);
	sphere.position.x = x;
		
	//Creation of a material
	var materialSphere = new BABYLON.PBRMaterial("Material_" + j, scene);
	materialSphere.albedoColor = new BABYLON.Color3(0.2, 0.9, 1.0);
	materialSphere.reflectivityColor = new BABYLON.Color3(reflectivity, reflectivity, reflectivity);
	materialSphere.microSurface = microSurface;

	//Attach the material to the sphere
	sphere.material = materialSphere;

	x = x - 15;
}
```

**Tips:** To achieve the best results, you can store the glossiness in the alpha channel of the reflectivity map (this prevents having a constant gloss on one material):
```javascript
materialSphere.reflectivityTexture = texture;
materialSphere.useMicroSurfaceFromReflectivityMap = true;
```

* **Reflectivity** (AKA **specular color**)

The reflectivity of a material defines the **amount of light it is reflecting**. Basically, a black specular will mean almost no reflection and white will be close from a perfect mirror:

![Elements](/img/extensions/materials/PBRMaterialSpecular.jpg)

As you can see here the more specular the material is (going left to right from white to black) the closer to a perfect mirror it is.

[**Playground Demo Scene - PBR Reflectivity**](http://babylonjs-playground.com/#PRRBS#2)

```javascript
var x = 0;
var microSurface = 0.98;
for (var j = 0; j < 6; j++) {
	var reflectivity = j / 5;
		
	//Creation of a sphere
	var sphere = BABYLON.Mesh.CreateSphere("Sphere_" + j, 10.0, 9.0, scene);
	sphere.position.x = x;
		
	//Creation of a material
	var materialSphere = new BABYLON.PBRMaterial("Material_" + j, scene);
	materialSphere.albedoColor = new BABYLON.Color3(0.2, 0.9, 1.0);
	materialSphere.reflectivityColor = new BABYLON.Color3(reflectivity, reflectivity, reflectivity);
	materialSphere.microSurface = microSurface;

	//Attach the material to the sphere
	sphere.material = materialSphere;

	x = x - 15;
}
```

**Tips:** To achieve the best results use a specular map stored in a texture:
```javascript
materialSphere.reflectivityTexture = texture;
```

* **Reflection**

The key purpose of a PBR material is to **conserve the energy** (not emitting more light than it receives). If a lot of light is reflected from the environment the diffuse reflected light will drop. This means that without Reflection Map the material would be black if the specular is close to white (reflecting nothing). This is why we introduce in the material a **Reflection Color** parameter to ensure the material still works without Reflection texture.

```javascript
var pbr = new BABYLON.PBRMaterial("pbr", scene);
pbr.reflectionColor = new BABYLON.Color3(1.0, 0.0, 0.0);
```

**Tips:** To achieve the best results, use a reflection texture created from the new reflection probes:
```javascript
pbr.reflectionTexture = texture;
```

![Elements](/img/extensions/materials/PBRMaterialReflection.jpg)

You can see here all the elements being lit by the reflection map. Playing with the specular color and glossiness one can also achieve interesting results as you can see on the different meshes.

[**Playground Demo Scene - PBR Reflection**](http://www.babylonjs-playground.com/#1HQPOD#2)

* **Overloaded Values**

In order to **simplify debugging** and also to **create animation effects**, a bunch of overloaded parameters are available in the material. All of them are controlled by an intensity parameter going from 0 to 1. It specifies how much the overloaded value is used... (not sure I am clear enough to be honest, let's try again) The intensity value is the gradient amount between the actual value and the overloaded one (still not clear? see illustration):

![Elements](/img/extensions/materials/PBRMaterialOverloadedValues.jpg)

As you can see, the texture is being more and more overridden by an overloaded diffuse color when the overloaded diffuse intensity increases (from left to right and 0 to 1).

[**Playground Demo Scene - PBR Overloaded Values**](http://babylonjs-playground.com/#1GELZQ#9)

```javascript
var x = 0;
for (var j = 0; j < 6; j++) {
	var overloadedIntensity = j / 5;
		
	//Creation of a sphere
	var sphere = BABYLON.Mesh.CreateSphere("Sphere_" + j, 10.0, 9.0, scene);
	sphere.position.x = x;
		
	//Creation of a material
	var materialSphere = new BABYLON.PBRMaterial("Material_" + j, scene);
	materialSphere.albedoTexture = new BABYLON.Texture("Textures/Amiga");
	materialSphere.overloadedAlbedo = new BABYLON.Color3(0, 0, 1);
	materialSphere.overloadedAlbedoIntensity = overloadedIntensity;

	//Attach the material to the sphere
	sphere.material = materialSphere;

	x = x - 15;
}
```

All the overloaded properties are beginning by overloaded to easily find them in the PBRMaterial class.

## Ligthing Intensity

In order to allow finer grain control of the lighting, the following properties have been added in the material.

- directIntensity: Controls the amount of diffuse and specular the material is reflecting.
- emissiveIntensity: Controls the level of emissive light the material is emitting.
- environmentIntensity: Controls the level of the reflected light from the environment.
- specularIntensity: As the material is still using a blinn phong like higlights computation, this can help dropping the specular level of the material without impacting the reflectivity.

## Camera Control (In the material... WTF ?)

One of the outstanding WebGL issue is the lack of MSAA on texture render target... **Aghhhhhh!** (feel better now :)). This prevents a simple way to get a good looking scene via post processing. Also there is no universal support of full precision floating point render targets.

In order to work around those issues and increase performance we integrated as part of the material two optional controls for both **contrast** and **exposure**. This enables you to do photographic tone mapping and deals with the contrast directly from the material.

```javascript
var pbr = new BABYLON.PBRMaterial("pbr", scene);
pbr.cameraExposure = 0.66;
pbr.cameraContrast = 1.66;
```

![Elements](/img/extensions/materials/PBRMaterialCamera.jpg)

This highlights the impact of both contrast and exposure on a model (all the other parameters are fixed).

[**Playground Demo Scene - PBR Camera**](http://babylonjs-playground.com/#1Y4YAM#3)

## Gamma Correction

In order to ensure the light equations are working accurately the PBR material could be called "Gamma Correct" in the way all the inputs requiring correction are converted to **linear space** before working with them and then finally encoded back in **Gamma Space** before rendering.

This process is totally transparent for the user but it is still good to know it takes place in the material (Helps to know if you are struggling to find out why it is dark or bright, for instance, if you are using linear input and decode in post processing!).

## Where are my Fresnels?

As PBR materials are based on a good **light distribution** (close to real life lighting), the diffuse, specular and reflection fresnels are not optional anymore. They are part of the material and integrated in all cases.

They are **automatically created** and configured based on the other inputs passed through the material. You then do not need to configure them hence why we removed them from the material.

The emissive and opacity fresnels from tooling are still available in this material.

## Going Further

Please have a read at [Master the PBR](http://doc.babylonjs.com/overviews/Physically_Based_Rendering_Master) for more information on how to use the material.

