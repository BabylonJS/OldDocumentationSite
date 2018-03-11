# Managing Animations

## Introduction

To create and edit animations of the selected object (if animatable), simply go to the “Animations” tab and select “Edit Animations”:

![EditAnimations](/img/extensions/Editor/ManagingAnimations/EditAnimations.png)

The animatable objects are:
* meshes
* lights
* cameras
* particle systems
* scene
* materials (animated through meshes animations)

## Adding animations

Let’s create an animation to animate the position of the sphere.
First, click on the “Add” button of the animations list. A window appears and you can now select the property to animate (here "position"):

![AddAnimation](/img/extensions/Editor/ManagingAnimations/AddAnimation.png)

Just click “Apply” to create the animation. Now, you can add, remove and edit the keys of the animation. To modify a key, just select it in the keys list and replace the values (frame and/or value).

*Note: The colors and vectors values are written using commas. Example: the Vector (X=0, Y=1.5, Z=2) is written “0, 1.5, 2”.*

To remove animations, select some and click on the “Remove” button.

To edit an animation, select an animation and click the "Edit" button.

In fact, the animation will be played in 24 frames per second. You can, of course, change the FPS value in the scene toolbar
(the new value will be applied on all animations of the scene).

![EditFrame](/img/extensions/Editor/ManagingAnimations/EditFrame.png)

## Play an animation

In the "Animations" edition tool, you can play the created animations by clicking on the button "Play Animations".
You can loop and choose the speed of the animations of the selected object (here the sphere)

![PlayAnimations](/img/extensions/Editor/ManagingAnimations/PlayAnimations.png)

The result:

Frame 0

![Frame0](/img/extensions/Editor/ManagingAnimations/Frame0.png)

Frame 1

![Frame1](/img/extensions/Editor/ManagingAnimations/Frame1.png)


