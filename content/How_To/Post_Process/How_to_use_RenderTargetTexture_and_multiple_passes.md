---
PG_TITLE: How to use RenderTargetTexture and run multiple passes
---

# How to use RenderTargetTexture and run multiple passes

Sometimes it's interesting to render a scene multiple times and compose the generated passes for the final image. There are multiple uses for that: you can generate a texture in real time, to make a car rearview mirror for example, or you can perform complex effects with multiple renders that are combined together. The PostProcess API doesn't let you render a scene twice, but that's where RenderTargetTexture (RTT) comes into play. Several [games use multiple passes for their graphics](http://www.adriancourreges.com/blog/2016/09/09/doom-2016-graphics-study/).

## Creating a RenderTargetTexture

You need to create a RenderTargetTexture and attach it to the scene. It's pretty straightforward:

```    
    var renderTarget = new BABYLON.RenderTargetTexture(
        'render to texture', // name 
        512, // texture size
        scene // the scene
    );
    scene.customRenderTargets.push(renderTarget);
```

You also need to pick which objects will be rendered to that texture. This enables you to select only a few objects for a particular effect, or use simpler meshes for faster rendering.

```
    let sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene); // create your mesh
    renderTarget.renderList.push(sphere); // add it to the RTT
```

## Using the RTT in your scene as a regular texture

You can use the rendered image as the texture of an object in your main render. Just set it as the texture of a material:

```
    var mat = new BABYLON.("RTT mat", scene);
    mat.diffuseTexture = renderTarget;
```

Playground example: [https://www.babylonjs-playground.com/](https://www.babylonjs-playground.com/)

## Making multiple passes and composing them

Another possibility, as mentioned, is making multiple passes of the main camera and compose them. Let's add a simple effect on all meshes and compose it with the original material. One interesting effect to simulate is caustics. We can render the scene applying a material that simulates caustics with a wave generator and mix it with the base texture.

The trick is to change the texture on the RTT to use our caustic material on all meshes instead of their own material:

```
renderTarget.onBeforeRender = (e) => {
    // Apply the shader on all meshes
    for (const i in renderTarget.renderList) {
        renderTarget.renderList[i]._saved = renderTarget.renderList[i].material;
        renderTarget.renderList[i].material = causticMaterial;
    }
};
renderTarget.onAfterRender = () => {
    // Remove the shader on all meshes
    for (const i in renderTarget.renderList) {
        renderTarget.renderList[i].material = renderTarget.renderList[i]._saved;
    }
};
```

For the final pass we'll create a shader to merge the base render (which will be provided in the GLSL as `textureSampler`) and the caustic texture, which we declare here as `causticTexture`. 

```
// create the final pass composer
var finalPass = new BABYLON.PostProcess(
    'Final compose shader', 
    'final', // shader name
    null, // attributes
    [ 'causticTexture' ], // textures
    1.0,  // options
    null, // camera
    BABYLON.Texture.BILINEAR_SAMPLINGMODE, // sampling
    engine // engine
);
finalPass.onApply = (effect) => {
    effect.setTexture('causticTexture', renderTarget); // pass the renderTarget as our second texture
};
```

We now can [use a pipeline](/how_to/how_to_use_postprocessrenderpipeline) that performs a base render and uses the `finalPass` to compose it with the caustics.

```
// the render pipeline
var pipeline = new BABYLON.PostProcessRenderPipeline(engine, 'pipeline');
var renderPasses = new BABYLON.PostProcessRenderEffect(
    engine, 'renderPasses', function() { return [imagePass, finalPass]; });
pipeline.addEffect(renderPasses);
scene.postProcessRenderPipelineManager.addPipeline(pipeline);
scene.postProcessRenderPipelineManager.attachCamerasToRenderPipeline('pipeline', camera);
```

Playground example: [https://www.babylonjs-playground.com/](https://www.babylonjs-playground.com/)

## Animations

TODO

## Optimizations

Replacing materials is an expensive operation, as it requires a resync from the CPU. If your meshes use materials, such as ShaderMaterial or a PBRMaterial, this might impact significantly on the FPS rate. There are two basic ways to optimize and avoid this bottleneck.

### Using instances

If you have a large amount of copies of the same object, one possible solution is to use instances, and only change the material of the base mesh. There's a  Note that for mesh instances, the final world matrix is reconstructed from 4 base vectors given through mesh attributes, which is why you a #ifdef INSTANCES check is done in the custom vertex shader in the example below.

```
    // Our base mesh and material
    let sphereBase = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);
    sphereBase.material = myMaterial;

    // add instances
    sphereBase.setEnabled(false); // disable rendering of the base mesh
    let spheres = [];
    for (let i = 0; i < 100; i++) { // create a lot of copies
        for (let j = 0; j < 10; j++) {
            let sphere = sphereBase.createInstance(""); // instance of the mesh
            // reposition etc
            sphere.position.y = 1;
            sphere.position.z = i;
            sphere.position.x = j-5;
            renderTarget.renderList.push(sphere);
        }
    }
```

Playground example: [https://www.babylonjs-playground.com/](https://www.babylonjs-playground.com/)

### Using clones

For more general cases, it might be interesting to clone the mesh and apply the RTT shader to the clone. 


Playground example: [https://www.babylonjs-playground.com/](https://www.babylonjs-playground.com/)
