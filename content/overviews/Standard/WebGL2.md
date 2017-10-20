## Introduction

Starting with v3.0, Babylon.js supports rendering using WebGL1 and WebGL2 contexts. 
The support is transparent for developers. By default the engine tries to get a WebGL2 context. If none is available then a WebGL1 one is retrieved.

You can test which version of WebGL is enabled with: `engine.webGLVersion` property.

## Shaders

When WebGL2 is enabled, the shaders are automatically converted to GLSL v3.0. Babylon.js will then automatically take advantage of extended instruction/uniform counts.

If you are using custom shaders, the best idea would be to provide GLSL v2.0 shaders. This way your code will work on both contexts.
You can obviously provide only v3.0 shaders but in this case your code will only work when WebGL2 is enabled.

## Supported features

You can find here the list of supported features and the backward compatibility options (when available)

Feature|Description|WebGL1 compatibility|Demo|More info
--|--|--|--|--
Depth Frag|Used to compute logarithmic depth buffer|Yes through an [extension](https://www.khronos.org/registry/webgl/extensions/EXT_frag_depth/)|[PG]( https://www.babylonjs-playground.com/#1180R5#15)|[Documentation](http://doc.babylonjs.com/tutorials/using_logarithmic_depth_buffer)
Multisample render targets|Rendertarget textures can be multisampled to get antialiasing effect|No. Has no effect on WebGL1 context|[PG]( https://www.babylonjs-playground.com/#12MKMN)|[See below](http://doc.babylonjs.com/overviews/webgl2#multisample-render-targets)
Standard derivatives|Standard derivatites are used in Babylon.js to help compute realtime bump|Yes through an [extension](https://www.khronos.org/registry/webgl/extensions/OES_standard_derivatives)|[Demo](http://www.babylonjs.com/Demos/Bump/)|[Documentation](http://doc.babylonjs.com/tutorials/advanced_texturing)
Texture LOD|Used by PRBMaterial to simulate microsurface|Yes through an [extension](https://www.khronos.org/registry/OpenGL/extensions/EXT/EXT_shader_texture_lod.txt)|[Demo](http://www.babylonjs.com/Demos/HDRMap/)|[Documentation](http://doc.babylonjs.com/overviews/physically_based_rendering)
Vertex array objects (VAO)|A Vertex Array Object (or VAO) is an object that describes how the vertex attributes are stored in a Vertex Buffer Object (or VBO)|Yes through an [extension](https://www.khronos.org/registry/webgl/extensions/OES_vertex_array_object/)|N/A. Every rendering is done with VAO by default|[See below](http://doc.babylonjs.com/overviews/webgl2#vertex-array-objects)
Uniform buffer objects (UBO)| An uniform buffer object (or UBO) let you specify a group of uniforms from a buffer|No. Uniforms are handled independently on WebGL1 context|N/A. Materials supporting UBO automatically uses them|[See below](http://doc.babylonjs.com/overviews/webgl2#uniform-buffer-objects)
Multiple Render Target (MRT)| Several Render Targets can be rendered in the same draw call.|Yes through an [extension](https://www.khronos.org/registry/webgl/extensions/WEBGL_draw_buffers)|[Demo]( https://www.babylonjs-playground.com/#NZ6P07)|[See below](http://doc.babylonjs.com/overviews/webgl2#multiple-render-target)
Occlusion Queries| Occlusion queries detect whether a Mesh is visible in the current scene or not|Yes through an [extension](https://www.khronos.org/opengl/wiki/Query_Object#Occlusion_queries)|[Demo](http://www.babylonjs-playground.com/#QDAZ80#3)|[See below](WebGL2#occlusion-queries)

## Multisample render targets

By default render targets (like mirrors for instance) are created without support for multisampling. To turn it on, just define a value for `renderTarget.samples` > 1.
On WebGL1 context, this will do nothing. On WebGL2 context, this will enable multisampling (more samples imply better antialiasing but a slower rendering).

Here is an example of a mirror (512x512) with and without multisampling:
 
No MSAA (1 sample)|MSAA (8 samples)
---|---
![Title](/img/overviews/nomsaa.jpg)|![Title](/img/overviews/msaa.jpg)

## Vertex array objects

When possible (either on WebGL2 context or when extension is available on WebGL1 context), Babylon.js will use VAO to control rendering. VAO are a kind of geometry objects. Instead of sending all attributes and buffers used by a mesh (one for position, one for normal, one for indices, one for texture coordinates, etc..), you can build a VAO which will keep track of all attributes / buffers used. 

At rendering time, you just have to define one VAO instead of multiple VBO (vertex buffer object).

You can find more details on [Tojicode's blog](http://blog.tojicode.com/2012/10/oesvertexarrayobject-extension.html).

## Uniform buffer objets
On WebGL1 context all uniforms are sent to GPU independently. This means that if your shader uses 16 matrices, you will call WebGL API 16 times to update all matrices before using your shader.

On WebGL2 context, you can use a UBO to set the values in a typed array all inside JavaScript. This means that it's much faster. When all the values are set you can then send them to the GPU with only one call.

You can find more details on [WebGL 2 specification](https://www.khronos.org/registry/webgl/specs/latest/2.0/#3.7.16)

## Multiple Render Target
On former WebGL1, one draw call meant 1 target texture. Now you can bind several target textures to a shader and specify inside the fragment shader the colors you want to put on each texture. Essentially it saves you a lot of CPU time and you can achieve advanced effects like [Deferred Shading](https://fr.wikipedia.org/wiki/Deferred_Shading).

In Babylon.js, our first use of this technique is to render a geometry buffer of the scene.

## Occlusion queries 

Occlusion queries detect whether a Mesh is visible in the current scene or not, and based on that the Mesh get drawn or not. Occlusion queries is useful when you have an expensive object on the scene and you want to make sure that it will get drawn if it is visible to the camera and it is not behind any opaque object. BabylonJs provides an implementation for Occlusion queries using property occlusionType in AbstractMesh Class

[Babylon.js Occlusion Queries Overview](occlusionquery)

[WebGL 2 Occlusion Queries](https://www.khronos.org/opengl/wiki/Query_Object#Occlusion_queries)