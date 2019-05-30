
## Loading a scene

**Note (with the native electron app):** From the version 2.5.0 of the editor, you are able to open .editorproject files directly (via your OS file explorer or via the toolbar **Project -> Import Project**).
That means you don't need to drag'n'drop all your files but simply open the .editorproject file.

The editor is able to load BabylonJS scenes but also editor project files (.editorproject).
To load a scene (even with a .editorproject file), just **drag'n'drop all the files** (scene, textures, sounds, project, etc.) into the canvas (3D preview panel).

You can also load a scene using the toolbar **Project -> Import Project**, select all the files and click **Open**.

**Important:** Loading meshes via the toolbar **Scene -> Import Meshes From...** will save the meshes into the `.editorproject` file. That mean if you drag'n'drop the original .babylon file with the
.editorproject, the meshes will be doubleness.

## Available scene formats
* .babylon
* .gltf
* .glb (binary GLTF)
* .obj
* .stl

<iframe width="560" height="315" src="https://www.youtube.com/embed/q3ShDnKXt5o" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

From now, you are able to edit/add/remove elements from your scene. To add another scene in your project, just **drag'n'drop** the scene file and its assets.
A dialog will ask if you want to append the scene or not:
* Clicking **"Yes"** will append the new scene to the current project.
* Clicking **"No"** will erase the current project and start a new project with the scene being drag'n'dropped.

## Saving project

The editor will not save the entire scene when you want to save your project. Anyway, the editor will save the deltas between the original scene files (.babylon, .gltf, etc.) and the editor file (.editorproject).

The editor project file will contain all the user's metadatas such as custom scripts, custom post-processes, custom materials, sounds, nodes, etc. that have been modified/removed/added.

To save the project, just click on the main toolbar **Project -> Save Project...** or type **CTRL+S**. Choose a folder and these files will be created:
* scene.editorproject: the Editor Project file
* scene: the folder containing ALL the scene files (textures, scene, sounds, etc.)

**Note: It is highly recommanded to use the desktop app as you'll get access to the local file system to save your projects. Anyway, on the online version, the editor will try to save the project on OneDrive.**
Example saving on OneDrive:
<iframe width="560" height="315" src="https://www.youtube.com/embed/dEZ834dv22Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Exporting a project template

Exporting a project template means that it is your final step using the Babylon.js Editor. For instance, you worked with the editor to develop, design and/or configure your final project using the editor's tools.
Once you are ready to finalize your project, you can export a template using ***Project -> Export Template...**.
This will:
* Ask you the scene format you would like to use (.babylon, .gltf, .glb)
* Ask you a folder where to create the template in your storage (choose an empty folder)
* Create all the needed files and folders:
    - `package.json` (for install dependencies)
    - `index.html` (to test your project easily)
    - `src` (contains an example file that loads your scene and the editor project to apply the extensions)
    - `scene` (contains **all the final assets** from your editor project (scene, textures, etc.))
    - `README.md` to list all available command lines you can use to test your project

To test your project, go to the folder you chose and just install dependencies, build the project then run your webserver:
```bash
npm i
npm run build
npm run webserver
```

You can also watch your code:
```bash
npm run watch
```

In `scr` folder you'll find the given file `game.ts` (typescript, comments below):
```javascript
import { Engine, Scene, SceneLoader, Tools } from 'babylonjs';

/**
 * In the package.json file, we reference the "babylonjs-editor" package
 */
import { Extensions } from 'babylonjs-editor';

export default class Game {
    /**
     * The custom engine we are creating in the constructor
     */
    public engine: Engine;
    /**
     * The canvas used by the engine (renderCanvas exists in the index.html file but you can change the id)
     */
    public canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('renderCanvas');
    /**
     * The scene being loaded in the "run" method
     */
    public scene: Scene = null;

    /**
     * Constructor
     */
    constructor () {
        // Create engine
        this.engine = new Engine(this.canvas, true, {
            // Options
        });

        // Usefull events
        window.addEventListener('resize', () => this.engine.resize());
    }

    /**
     * Runs the game
     */
    public run (): void {
        // Load final scene and assets exported from the editor
        SceneLoader.Load('./scene/', 'scene.babylon', this.engine, (scene: Scene) => {
            this.scene = scene;

            // Attach camera
            this.scene.activeCamera.attachControl(this.canvas, true);

            // Load extensions files produced by the Babylon.js Editor (code editor, graph editor, material creator etc.)
            Tools.LoadFile('./scene/project.editorproject', (data: string) => {
                // Setup the same root Url for the Babylon.js Editor extensions
                Extensions.RoolUrl = './scene/';
                // Now, just apply extensions (such as code editor, custom materials etc.)
                // using the babylonjs-editor module
                Extensions.ApplyExtensions(this.scene, JSON.parse(data));
                
                // Run render loop, that's all!
                this.engine.runRenderLoop(() => {
                    this.scene.render();
                });
            });
        });
    }
}
```

Of course, you can ommit all the generated files (except the `scene` folder) and add the "babylonjs-editor" dependency to your main project and import `Extensions` where you want. The file `game.ts` is just an example.
The `babylonjs-editor` contains 2 versions:
* `node_modules/babylonjs-editor/dist/editor.extensions.js`: commonjs module importable using requirejs, systemjs etc. like done in the example above
* `node_modules/babylonjs-editor/dist/editor.extensions.standalone.js`: global module writing a `EditorExtensions` variable in the `window`. Like `BABYLON` does. So you can type `EditorExtensions.Extensions.Apply(scene, data);`.

## Exporting only the final scene
I case of you would prefer to manage yourself your project architecture, the Editor allows to export only the final scene files. That means you can export ONLY the `scene` folder content which is the same as when you export a project template.

To export final scene, in the toolbar choose **Scene -> Export Final Scene And Assets**. This will open a save dialog. Choose the target directory and click **"Ok"**.

![EditorExportOnlyScene](/img/extensions/Editor/GettingStarted/ExportOnlyScene.png)

Then, all the files will be written in that directory.

![EditorExportOnlySceneResult](/img/extensions/Editor/GettingStarted/ExportOnlySceneResult.png)
