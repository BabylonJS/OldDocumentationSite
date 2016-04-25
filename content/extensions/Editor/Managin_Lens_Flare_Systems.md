# Creating Lens Flare Systems

## Adding a lens flare system

Using the editor, as for particle systems, you can create and edit lens flare systems.
To create one, simply go to the “Add” menu of the main toolbar and select “Add Lens Flare”:

![AddLensFlare](/img/extensions/Editor/LensFlares/AddLensFlare.png)

A window appears asking for an emitter. Indeed, in Babylon.js a lens flare system has an emitter which is typically a mesh or a light.
You need to select one, and only one, emitter to get lens flare systems working well. Let's choose, for example, the spot light of a scene:

![SelectEmitter](/img/extensions/Editor/LensFlares/SelectEmitter.png)

## Editing the lens flare system

Once added, a lens flare system is a sub-element of the selected emitter (here the spotlight).
To edit the lens flare system, simply expand the spotlight and select the system in the scene graph:

![EditParticleSystem](/img/extensions/Editor/LensFlares/ConfigureLensFlare.png)

You can now modify the properties of each lens flare, of the lens flare system.
Properties such as the color, the position and the size. To select another specific lens flare of the system, you 
can use the combo box "Lens Flare :" and select one.
* To remove a lens flare, you can click the button "Remove..." which removes the current selected lens flare.
* To add a lens flare to the system, you can click the button "Add Lens Flare..." which adds a new lens flare to the system with default properties.
