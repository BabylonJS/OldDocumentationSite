
Download the [Editor Toolkit](https://github.com/BabylonJS/Exporters/tree/master/Unity%205/EditorToolkit/Redist/Asset%20Store-5.x/BabylonJS) and use **Import Package** to install into current project. Alternatively, you can download the [Source Version](https://github.com/BabylonJS/Exporters/tree/master/Unity%205/EditorToolkit). You just need to copy/paste the **Babylon** folder inside the **Assets** folder of your unity game project folder. Once installed, unity will detect the plugin, compile it and add the toolkit [Export Panels](Exporter) to your project.

**Note:** The legacy exporter plugin can be found here: https://github.com/BabylonJS/Exporters/tree/master/Unity%205/Deprecated


# Project Configuration

![New Unity Project](/img/exporters/unity/newproject.jpg)

## Create New Project

Create a new unity game project then add the **BabylonJS Editor Toolkit** to your project. You can either copy toolkit source to your root asset folder or you can
import the toolkit unity package distribution file.

## Set Compiler Options

![Node Runtime Compilers](/img/exporters/unity/compilers.jpg)

Configure optional **Runtime Script Compiler** locations. You can download and install or update the current [Node Runtime](https://nodejs.org/en/) to the default location. Then use node package manager to install or update the latest [TypeScript Compiler](https://www.typescriptlang.org/) to the default location.

**Install TypeScript Command**
```
Mac OSX: sudo npm install -g typescript
```

```
Windows: npm install -g typescript
```

**Default TypeScript Location**
```
Mac OSX: /usr/local/bin/tsc
```

```
Windows: C:\Users\<YourName>\AppData\Roaming\npm\node_modules\typescript\bin\tsc
```

**Default Node Runtime Location**
```
Mac OSX: /usr/local/bin/node
```

```
Windows: C:\Program Files\nodejs\node.exe
```

## Save Export Settings

On the Scene Exporter panel, press the **Save Export Settings** button to save the project export settings to disk. Export settings will also detect changes and save on each build.


# Scene Configuration

* **File -> New Scene** to create a new empty scene. Unity will create a main camera and a directional light by default.

* **File -> Save Scene As** to name and save your current scene to a folder in your project assets. The toolkit will use this scene name for exporting content. 

## Add Scene Content

* **Global Startup Script** - If defined, the global startup script is the main entry point for every scene. You can use the global startup script to attach the SceneManager.ExecuteWhenReady handler that will get called first for each and every scene.

* **Default Scene Controller** - Any scene options for your project can be set using any script components you see fit. You can optionally add an empty game object and attach a default scene controller script component to easily setup built in options for your scene.

* **Cameras, Lights And Meshes** - Add any supported camera, light and mesh content to your scene. You can attach script components, assign materials, create particle systems, setup animations, optimize geometry and utilize any unity editor tools to manage scene content.

## Build And Preview

To build and preview the current scene, press the **Play** button or the **Build And Preview** button on the Scene Exporter panel. Select the **Export Scene** to simply export the current scene content without a full build and preview. This is very useful for creating **Import Mesh** only scenes. All project output will be saved to the **Export** folder of your
unity game project folder.
