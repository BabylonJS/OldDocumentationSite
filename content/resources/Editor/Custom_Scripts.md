# Writing custom scripts

The editor provides a tool to write and attach custom scripts to objects in the scene

This includes:
* The scene itself
* Meshes
* Cameras
* Lights
* Particle systems

To access the tool, just click on the toolbar **Tools -> Code Editor...**.

All the scripts you will wirte are standalone and can be attached to objects (by creating links).
That means you'll first have to add a new script. Then, attach the new script to your object(s).

To add a new script, just click **Add New Script...** in the toolbar and give it a name. If you selected an object before, the script will be automatically attached.
Once you added the new script, the assets panel will be updated and you able to drag'n'drop the new script on another objects.

To add a new reference to a script to the selected object, just click on **Add New** in the grid and select the script to attach.

Once you select another object in the scene, the tool will refresh and draw the available scripts for the new selected object.

<iframe width="560" height="315" src="https://www.youtube.com/embed/6U87lDX8i3A" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Explaining the code

```javascript
class Script implements IScript {
    // Public members
    public blackColor = new BABYLON.Color4(0, 0, 0, 1);
    public customParam: string = '';

    /**
     * Constructor
     */
    constructor () {

    }

    /**
     * Called once starting the script
     */
    public start (): void {
        // You can access the scene everywhere.
        // That means the scene is globally accessible
        scene.clearColor = this.blackColor;

        // You can access the attached object everywhere
        // The attached object can also be "scene", "pointlight", etc.
        console.log(mesh);

        // Finally, you can console.log a custom parameter set from the editor
        console.log(this.customParam);
    }

    /**
     * Called on each frame
     */
    public update (): void {
        // Your code... For example:
        mesh.rotation.y += 0.01;
    }
}

// Function that exports the script
exportScript(
    Script, // Constructor of the script. No parameters allowed

    // Custom parameters accessible from the editor in order to customize the script.
    // These values will be available in the Inspector panel in the folder 'Script'
    { customParam: 'Hello' }
);
```

## Debugging the code
Once you are happy and want to test your code, just run the scene by clicking in the toolbar **Play and Debug**. The editor will open a new window.

To see errors and debug your code (break points, logs, etc.), just type F12 in the new opened window. To set breakpoints, all the custom scripts are available at **behaviors/**. For instance, sourcemaps are not supported but will come in future versions.
