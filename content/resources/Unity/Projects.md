
## Installation

Download the [Distribution Version](https://github.com/BabylonJS/Exporters/tree/master/Unity%205/EditorToolkit/Redist/Asset%20Store-5.x/BabylonJS) as a unity package and use 'Import Package' to install.

Alternatively, you can download the [Source Version](https://github.com/BabylonJS/Exporters/tree/master/Unity%205/EditorToolkit). You just need to copy/paste the 'Babylon' folder inside the **Assets** folder of your unity game project folder. 

Unity will then detect the plugin, compile it and add a "BabylonJS" menu.

Note: The legacy plugin folder can be found here: https://github.com/BabylonJS/Exporters/tree/master/Unity%205/Deprecated

## Other shit
1... Initial Project Creation
    Create a new Unity 3D game project then add the BabylonJS toolkit to your project. You can either copy toolkit source to your root asset folder or you can
    import the toolkit .unitypackage redist file.


2... Check all plugin dlls
    Verify all dll files in the 'Assets/Babylon/Plugins' folder. Each dll should be enabled for your development platform.


3... Default Camera & Light
    Unity will create a main universal camera and a directionl light by default for each new scene. 


4... Default Scene Controller
    All game projects require a scene controller to setup default scene options. You can add a 'Default Scene Controller' script component or you can create a custom
    scene controller. 
    

5... Global Startup Script
    If defined, the global startup script is the main entry point for every scene. You can use the global startup script to attach the SceneManager.ExecuteWhenReady handler that will get called first for each and every scene.