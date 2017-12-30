---
PG_TITLE: Realistic Environments
title: Realistic Environments
abstract: ''
slug: environment
---

# Realistic Environments

An environment is more than just basic shapes, basic textures and basic lighting in a scene. A realistic environment would have a sky, uneven terrain, shadows and perhaps water, fog and different lighting effects. Some of these effects such as adding a sky, uneven ground and fog are handled quite simply and are described in Environment 101. Others require a shader and some are post processes. Some of these are provided for in the Babylon.js engine itself others have to be loaded separately as extensions.

## Sky

This can be achieved with a _skybox_ object, a large cube that has its inner faces viewable and covered in a sky texture from six images, one per face.

## Uneven Terrain

The most straight forward way is to apply an [height map](/babylon-101/babylon-101/height-map) image to the ground object. This greyscale pixels of such an image provide the values for the height of the ground.

![HeightMap5](/img/how_to/HeightMap/14-4S.png)

## Dynamic Terrain

Do you want a very large, or infinite terrain, then Babylon.js provides an extension to do this using a Dynamic Terrain.
The Dynamic Terrain is a mesh and a 3D data map of geographic positions giving planar and height coordinates. The mesh stays in place and morphs according to the current world camera position and a data map. This gives the illusion of being able to fly around the terrain. 

[Playground Example Early Prototype](https://www.babylonjs-playground.com/#21MVDH#1)

Now a fully developed extension.

[Playground Example Around the World](https://www.babylonjs-playground.com/#FJNR5#190)

Remember to click in display area before using keys. 


## Shadows
For [shadows](/babylon-101/babylon-101/shadows) a _shadowGenerator_ object is needed. A mesh can then produce a shadow by adding it to a rendering list of the _shadowGenerator_. There is also an extension, [shadows only](/extensions/materials-library/shadow-only),  that allows shadows on a transparent mesh.

## Fog 

Though it can be a complicated procedure to form a fog effect a fairly simple method is described in [Environment 101](/babylon101/Environment#fog). The effect can be extended further by customising a shader.

## Physically Based Rendering Materials

World objects do not all absorb and reflect light in the same way. A metal sculture and a concrete one behave completely differently under the same lights. [Physically based rendering](/how-to/environment/physically-based-rendering) materials go a long way to allow you to differentiate between the different substances you might want in your project.

## Light Effects

As well as fog, shadows, reflection and reflection it is also possible to give the effects of [light scattering](/how-to/light/using-the-volumetric-light-scattering-post-process) and [lens flare](/how-to/environment/how-to-use-lens-flares).

## Post Processes
 
Postprocesses are part of the rendering pipeline that allows you to create 2D effects on top of your scene. A postprocess is linked to a camera and can be part of a chain of postprocesses where each postprocess uses the result of the previous one as input for its own processing. 

### Shaders

A shader is code written for the GPU and is what finally renders your scene. Babylon.js deals with the shader code for you, all you need to do is to set the camera, material and lighting. However should you wish to do so you can write your own shader to produce the effect you want. You can edit and try out any shader code at http://cyos.babylonjs.com/

A range of shaders including fire, water, lava and fur can be found in the materials library section of [Extensions](/extensions).


# Further Reading

## Basic - L1

[Environment 101](/babylon-101/babylon-101/environment)  
[Height Maps 101](/babylon-101/babylon-101/height-map)   
[Shadows 101](/babylon-101/babylon-101/shadows)  
[Lights 101](/babylon-101/babylon-101/lights)  
[Materials](/features/component/materials)

## Mid Level - L2

[Introduction to Physically Based Rendering Materials](/how-to/environment/physically-based-rendering)  
[Skybox](/how-to/environment/skybox)  
[Dynamic Terrain](/extensions/terrains/dynamic-terrain)  
[Dynamic Terrain Examples](/extensions/terrains/dt-examples)

## More Advanced - L3

[Master Physically Based Rendering Materials](/how-to/environment/physically-based-rendering-master)  
[Fog using Custom Shader](/how-to/environment/supporting-fog-with-shader-material)  
[Shadows Only](/extensions/materials-library/shadow-only)   
[Light Scattering](/how-to/light/using-the-volumetric-light-scattering-post-process)  
[Lens Flare](/how-to/environment/how-to-use-lens-flares)  
[Reflection and Refraction](/how-to/material/reflect)  
[Reflection Probes](/how-to/environment/how-to-use-reflection-probes)

[How to use PostProcesses](/how-to/post-process/how-to-use-post-processes)  
[How to use PostProcessRenderPipeline](/how-to/post-process/how-to-use-post-process-render-pipeline)  
[Using the SSAO rendering pipeline](/how-to/post-process/using-the-ssao-rendering-pipeline)  
[Using the standard rendering pipeline](/how-to/post-process/using-standard-rendering-pipeline)  
[Using the default rendering pipeline](/how-to/post-process/using-default-rendering-pipeline)  
[Using depth-of-field and other lens effects](/how-to/post-process/using-depth-of-field-and-other-lens-effects)


[Introduction to Shaders](/resources/manual/shader-intro)  
[How To Put Shader Code in Babylon.js](/how-to/shaders/putting)  
[How To Use ShaderMaterial](/how-to/shaders/shader-material)  
[Example A Vertical Wave with Shader Code](/samples/gamelets/writing-1)  
[Example Fireworks with Shader Code](/samples/gamelets/writing-2)

