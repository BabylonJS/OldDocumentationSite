The Node Material Editor (aka NME) is a powerful tool that let you do more than just designing shaders for materials.

You can also use it with [particles](/how_to/node_material#creating-particle-shaders) and [post-processes](/how_to/node_material#creating-post-processes)

This article will help you walkthrough how to setup a simple scene that will be only a few lines long because all the work will be done using our editors.

The final outcome is the following one: 

https://www.babylonjs-playground.com/#RA18GJ

# Setting up the scene

The setup will be really simple as we only need a scene, a camera and a sphere to act as the particle emitter:

```
var scene = new BABYLON.Scene(engine);

var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 10, new BABYLON.Vector3.Zero(), scene);
camera.attachControl(canvas, true);

// Create a random emitter
var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 0.01, segments: 4}, scene);
```

# Invoking the inspector to create our particle system

If you are executing this code in the [Playground](https://playground.babylonjs.com), you only need to click on the Inspector button inside the header bar.

If you are running the code on your own, you can call `scene.debugLayer.show()`.

Once there, you can right click on the "Particle Systems" node to create a new particle system:

![Create new system](/img/how_to/Particles/create_new_system.jpg)

The inspector will then let you play with all the parameters to define the system the way you want.

Once done with your system setup, you can go to the Snippet zone and click on "Save to snippet server":

![Save a snippet](/img/how_to/Particles/save_snippet.jpg)

This will give you a snippet ID that we will use later to load the particle system from our code.

You can find my setup using this PG:

https://www.babylonjs-playground.com/#KST50Y

# Working with the snippet server

The great feature that comes with the snippet server is that you have a central place to store and update your particle system without having to write code.

In our example let's flag our code as async (so we will be able to await asynchronous code instead of relying on promises) and then get a link to our particle system using the snipped ID:

```
var createScene = async function () {

    var scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 10, new BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Create a random emitter
    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 0.01, segments: 4}, scene);

    // Load the previously setup particle system (it was setup with the inspector)
    let system = await BABYLON.ParticleHelper.CreateFromSnippetAsync("T54JV7#13", scene, false);
    system.emitter = sphere;

    return scene;
};
```

As you can see, you can simply call `BABYLON.ParticleHelper.CreateFromSnippetAsync` to download your particle system from the snippet server.

If you do not want (or cannot) use async / await, you can get the same outcome this way:

```
BABYLON.ParticleHelper.CreateFromSnippetAsync("T54JV7#13", scene, false).then(system => {
    system.emitter = sphere;
});
```

# Creating the node material for our particle system

We are going to use the same approach for the node material.

TO setup our material, the idea is to go to [https://nme.babylonjs.com/](https://nme.babylonjs.com/)

There the idea is to switch to Particles mode as NME can be used for materials, particles and postprocess:

![Particle mode in NME](/img/how_to/Particles/nme_particle.jpg)

My goal for this demo was to create a material where the particles will be displayed with a texture when above the ground (y = 0) and another one below with a smooth transition. Here is the [shader I ended up with](https://nme.babylonjs.com/#345ATT#4):

![Demo shader](/img/how_to/Particles/demo_shader.jpg)

In a nutshell, I'm checking the particle position in world space and thanks to a [smoothstep](https://www.khronos.org/registry/OpenGL-Refpages/gl4/html/smoothstep.xhtml) I can output a value between 0 and 1 that is then used with a gradient between black and white. This color is then used to mix (lerp) between two textures.

Like for the particle system, you can save your creation to the snippet server and gets a snippet Id.

# Applying the material
The final step is to get that shader from the snippet server and use it with our particle system.

To do so, we will do stricly the same as before:
```
// Load our node material
let nodeMaterial = await BABYLON.NodeMaterial.ParseFromSnippetAsync("#345ATT#4", scene);

// Apply it to the particle system
nodeMaterial.createEffectForParticles(system);
```

As you can see the NodeMaterial class has a handy function to apply it to a particle system.

And voila! 
The final code is extremely simple (Furthermore when used with Async/Await):

```
var createScene = async function () {

    var scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 10, new BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    // Create a random emitter
    var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 0.01, segments: 4}, scene);

    // Load the previously setup particle system (it was setup with the inspector)
    let system = await BABYLON.ParticleHelper.CreateFromSnippetAsync("T54JV7#13", scene, false);
    system.emitter = sphere;

    // Load our node material
    let nodeMaterial = await BABYLON.NodeMaterial.ParseFromSnippetAsync("#345ATT#4", scene);
    
    // Apply it to the particle system
    nodeMaterial.createEffectForParticles(system);

    return scene;
};
```

# Automatic updates

And even better, that code can evolve automagically. If you open the main Playground (referenced at the beginning of this article), it is possible to keep editing the particle system or the material and get an automatic update to your code. This will happen everytime you will open the Inspector and use one of the editor. When you will click on save to Snippet server, the system will be smart enough to work with the Playground and update the link for you:

![Automatic update](/img/how_to/Particles/auto-pg.gif)

You can see on the GIF that the Snipped Id for the particle system is udpated to version #14 when I hit the save button.

# Further links

* [Particle 101](/babylon101/particles)
* [Node Material](/how_to/node_material)

