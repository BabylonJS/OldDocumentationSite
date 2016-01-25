---
ID_PAGE: 24820
PG_TITLE: Working with Blender
---
This tutorial is going to teach you how you can load a complete scene from Blender, directly to BabylonJS !
Babylon engine can load an entire scene, or simply one 3D object.

The main idea is to export your scene to a .babylon format, and load it in your javascript code. Blender has been chosen as our default modeling software because it's free and open-source, as BabylonJS.

![Blender](http://blogs.msdn.com/cfs-file.ashx/__key/communityserver-blogs-components-weblogfiles/00-00-01-44-73-metablogapi/0447.image_5F00_thumb_5F00_3E9F1AE4.png)


## How can I do this ?

Everything you need to know for Blender is on [David Catuhe's blog](http://blogs.msdn.com/b/eternalcoding/archive/2013/06/28/babylon-js-how-to-load-a-babylon-file-produced-with-blender.aspx)

## Loading from a string

You can also use the following code to load data from a string and not from a file:

```BABYLON.SceneLoader.Load("", "data:...", engine, function (newScene) {
}),```

In this case you just have to add "data:" before your string to let Babylon.js knows it has to load from a string and not from a file.

