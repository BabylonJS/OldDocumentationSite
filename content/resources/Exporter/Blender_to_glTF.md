# Blender to BJS through glTF

glTF exporter will allow you to export your scene using PBR workflow.

## Features

glTF exporter is directly provided from KhronosGroup. You can find the github [repository here](https://github.com/KhronosGroup/glTF-Blender-Exporter) , check their readme to know all you need.

However here some shortcuts to key points of their documentations:

- [add-on installation](https://github.com/KhronosGroup/glTF-Blender-Exporter/tree/master/scripts)
- [user documentation](https://github.com/KhronosGroup/glTF-Blender-Exporter/blob/master/docs/user.md)
- [example and test Blender scenes](https://github.com/KhronosGroup/glTF-Blender-Exporter/tree/master/scenes)

At this moment, the Cycles Principled Shader is not yet directly supported (probably waiting for Blender 2.8 version). As the doc say, you have to append their [custom node group](https://github.com/KhronosGroup/glTF-Blender-Exporter/tree/master/pbr_node) into your blend scene.

A good practice could be to import the default glTF material as fake user, and then assign only a copy of it on your objects, so as to always keep the default gltf materials settings on your hands.


##  Try it out!

Once your scene is exported, you have multiple solutions to test it:

- quick check it into the [sandbox](http://sandbox.babylonjs.com/)
- use the [viewer](http://doc.babylonjs.com/extensions/the_babylon_viewer)
- script your own app using the [loader](/how_to/load_from_any_file_type)

### Example

Let's say we want try exporting the KhronosGroup *02_suzanne.blend* scene from [their repo](https://github.com/KhronosGroup/glTF-Blender-Exporter/tree/master/scenes):

- export to glTF in a folder.
- the HDR environment [need a little tweak](http://doc.babylonjs.com/how_to/physically_based_rendering#env-map), you can also use the environment from the [BJS repo](https://github.com/BabylonJS/Website/blob/master/Assets/environment.dds). Place the converted environment texture in the glTF folder too.
- create a file named *index.html*, and copy the code above:

```html
<!doctype html>
<html>
<head>
    <title>Default .gltf loading scene</title>
	<meta charset="UTF-8">
    <!-- this link to the preview online version of BJS -->
    <script src="https://preview.babylonjs.com/babylon.js"></script>
    <!-- this is needed for BJS to load scene files -->
    <script src="https://preview.babylonjs.com/loaders/babylonjs.loaders.js"></script>
    <style>
        html, body {
            overflow: hidden;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
        }

        #canvas {
            width: 100%;
            height: 100%;
            touch-action: none;
        }
    </style>
</head>

<body>
    <canvas id="canvas"></canvas>
    <script type="text/javascript">
        var canvas = document.getElementById("canvas");
        var engine = new BABYLON.Engine(canvas, true);
        
        // here the doc for Load function: http://doc.babylonjs.com/api/classes/babylon.sceneloader#load
        BABYLON.SceneLoader.Load("", "02_suzanne.gltf", engine, function (scene) {
		
            var camera = new BABYLON.ArcRotateCamera("Camera", 1, 1, 4, BABYLON.Vector3.Zero(), scene);
            camera.attachControl(canvas, false);
            
            //we tell to BJS where to find the environement texture
            var hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("environment.dds", scene);
            hdrTexture.name = "envTex";
            hdrTexture.gammaSpace = false;
            scene.createDefaultSkybox(hdrTexture, true, 1000, 0);
			
            engine.runRenderLoop(function() {
                scene.render();
            });

            window.addEventListener("resize", function () {
                engine.resize();
            });
        });
    </script>
</body>
</html>

```

![gltf default folder example](img/exporters/blender/gltf/gltf-BJS-default-folder-structure.png)

- double-click on the *index.html* file... profit!
  - some browsers may not want loading the scene, for some security issues (e.g.: Chrome). In this case, you have to open the html file through a webserver (local or not), or try into another browser (e.g.: Firefox, Edge).
  

![blender gltf scene loaded in BJS](img/exporters/blender/gltf/gltf-loaded.png)

