---
ID_PAGE: 24820
PG_TITLE: Working with Blender
---
This tutorial is going to teach you how you can load a complete scene from Blender, directly to BabylonJS !
Babylon engine can load an entire scene, or simply one 3D object.

The main idea is to export your scene to a .babylon format, and load it in your javascript code. Blender has been chosen as our default modeling software because it's free and open-source, as BabylonJS.


## How can I do this ?

Everything you need to know for Blender is on [David Catuhe's blog](https://www.eternalcoding.com/?p=313)

## Loading from a string

You can also use the following code to load data from a string and not from a file:

```BABYLON.SceneLoader.Load(&quot;&quot;, &quot;data:...&quot;, engine, function (newScene) {
}),```

In this case you just have to add "data:" before your string to let Babylon.js knows it has to load from a string and not from a file.

```