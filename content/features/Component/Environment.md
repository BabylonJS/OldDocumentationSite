---
PG_TITLE: Environment
---

# Environment

An environment is more than just basic shapes, basic textures and basic lighting in a scene. A realistic environment would have a sky, uneven terrain, shadows and perhaps water, fog and different lighting effects. Some of these effects such as adding a sky, uneven ground and fog are handled quite simply and are described in Environment 101. Others require a shader and some are post processes. Some of these are provided for in the Babylon.js engine itself others have to be loaded separately as extensions.

## Sky

This can be achieved with a _skybox_ object, a large cube that has its inner faces viewable and covered in a sky texture from six images, one per face.

## Uneven Terrain

The most straight forward way is to apply an height map image to the ground object. This greyscale pixels of such an image provide the values for the height of the ground. Do you want a very large, or infinite terrain, then Babylon.js provides an extension to do this using a Dynamic Terrain.

## Shadows
For shadows a _shadowGenerator_ object is needed. A mesh can then produce a shadow by adding it to a rendering list of the _shadowGenerator_. There is also an extension, **shadows only**,  that allows shadows on a transparent mesh.

## Fog 

Though it can be a complicated procedure to form a fog effect a fairly simple method is described in Environment 101. The effect can be extended further by customising a shader.

## Physically Based Rendering Materials

World objects do not all absorb and reflect light in the same way. A metal sculture and a concrete one behave completely differently under the same lights. Physically based rendering materials go a long way to allow you to differentiate between the different substances you might want in your project.

## Light Effects

As well as fog, shadows, reflection and reflection it is also possible to give the effects of light scattering and lens flare.

## Post Processes
 
Postprocesses are part of the rendering pipeline that allows you to create 2D effects on top of your scene. A postprocess is linked to a camera and can be part of a chain of postprocesses where each postprocess uses the result of the previous one as input for its own processing. 

### Shaders

A shader is code written for the GPU and is what finally renders your scene. Babylon.js deals with the shader code for you, all you need to do is to set the camera, material and lighting. However should you wish to do so you can write your own shader to produce the effect you want. You can edit and try out any shader code at http://cyos.babylonjs.com/

A range of shaders including fire, water, lava and fur can be found in the materials library section of [Extensions](/extensions).


# Further Reading

## Basic - L1

[Environment 101](/babylon101/Environment)  
[Height Maps 101](/babylon101/Height_Map)   
[Shadows 101](/babylon101/shadows)  
[Lights 101](/babylon101/Lights)  
[Materials](/overviews/Materials)

## Mid Level - L2

[Introduction to Physically Based Rendering Materials](/tutorials/Physically_Based_Rendering)  
[Skybox](/tutorials/Skybox)

## More Advanced - L3

[Master Physically Based Rendering Materials](/tutorials/Physically_Based_Rendering_Master)  
[Fog using Custom Shader](/tutorials/Supporting_fog_with_ShaderMaterial)  
[Shadows Only](/extensions/ShadowOnly)   
[Light Scattering](/tutorials/Using_the_Volumetric_LightScattering_post-process)  
[Lens Flare](/tutorials/How_to_use_Lens_Flares)  
[Reflection and Refraction](/tutorials/Reflect)  
[Reflection Probes](/tutorials/How_to_use_Reflection_probes)

[How to use PostProcesses](/tutorials/How_to_use_PostProcesses)  
[How to use PostProcessRenderPipeline](/tutorials/How_to_use_PostProcessRenderPipeline)  
[Using the SSAO rendering pipeline](/tutorials/Using_the_SSAO_rendering_pipeline)  
[Using the standard rendering pipeline](/tutorials/Using_Standard_Rendering_Pipeline)  
[Using the default rendering pipeline](/tutorials/Using_Default_Rendering_Pipeline)  
[Using depth-of-field and other lens effects](/tutorials/Using_depth-of-field_and_other_lens_effects)

[Introduction to Shaders](/tutorials/ShaderIntro)  
[Putting Shader Code in Babylon.js](/tutorials/Putting)  
[Shader Material](/tutorials/Shader_Material)  
[Example A Vertical Wave with Shader Code](/tutorials/Writing1)  
[Example Fireworks with Shader Code](/tutorials/Writing2)
