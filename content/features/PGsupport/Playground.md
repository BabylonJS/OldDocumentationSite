---
PG_TITLE: The Playground
---

# The Playground

The place to try out coding with Babylon.js. Experimenting and changing any code in the playground and clicking on the **Run** button will not affect any original code in the playground you currently using. Original code can be restored by refreshing the broweser. 

## Overview

!* [Playground Overview](/img/how_to/Introduction/playground.jpg)

The Playground consists of four areas.

1. A Menu Bar at the top

2. A Links Bar at the Bottom

3. A Coding Editor on the left

4. A Rendering Area of the right.

The space for the coding editor and rendering area can be adjusted by dragging the vertical bar between them.

## The Menu
!* [Playground Menu](/img/how_to/Introduction/pgmenu.jpg)

### Large Screen

**Run** - Commands the playground to try to render your scene.

**New** - Places a basic createScene() function into the editor along with code to initialise the scene variable and provide a camera.

**Clear** - Empties all the code out of the playground editor.  You could then paste in any createScene function you are working on locally.

**Save** - Causes your scene to be permanently stored in the playground's database and it will issue a unique URL for each save. On save you will be asked to comple the metadata so that it can be searched for. Once saved it is a good idea to bookmark the page so you can return to it later. You could then share the URL with others, for example, if it is not working as you expect you can ask a question in the forum along with the link to your playground.

**Zip** - Allows you to download a zip file named sample.zip. Once downloaded and unzipped, you will see a file named index.html 
which contains everything necessary to run the code in your browser, including links to external babylon.js and hand.js files.

**Settings** - The Settings button has a sub menu with extra options

*Theme* - Choose the theme for the playground

*Font size* - Set the font size in the editor.

*Safe Mode* - When the checkbox is ticked the playground issues a "leaving the page?" confirmation warning when you try to unload/reload a freshly-edited, un-saved scene.

*Editor* - The checkbox hides or un-hides the editor portion of the playground.

*Full Screen* - Makes the render area full screen.

*Editor Full Screen* - Makes the editor area full screen.

*Format Code* - Pretty prints the code.

**Debug Layer** - The checkbox toggles the debug layer which shows a multitude of variable values.

**Metadata** - This is where you describe your playground allowing yourself and other to search the playground database for examples of use.

**Version** - Allows and shows your choice of the BABYLON.js framework, either the current stable one or the latest previe version.

**Scene Selector** - ('basic scene' in the picture above). This selector button is used to choose any of the pre-installed playground demo scenes.  It shows 'Custom' when it is one created by a user.

### Small Screens

**File** - contains Run, New, Clear, Save and Zip as submenus.

**Settings** - Adds some or all of Debug Layer, Metadata, Version to its submenus.

## Playground URL formats

Pre-installed demo playgrounds have this URL format

http://www.babylonjs-playground.com/#

Saved playgrounds have this format on first save

http://www.babylonjs-playground.com/#QKQHS

that is the site name followed by a hash code reference key.

Following saves of the same playground are numbered incremently from one, for example 

http://www.babylonjs-playground.com/#QKQHS#1  
http://www.babylonjs-playground.com/#QKQHS#2  
etc.

## Compilation Errors
![](http://urbanproductions.com/wingy/babylon/playground/monaco/playground_ce01.jpg)

Any errors in your playground are flagged with a red pop-up box containing limited information. After making an adjustment to your code, you need not close the compilation error pop-up.  It should close automatically at the next RUN, if all errors have been corrected.

Please note that you can name your main function `delayCreateScene` instead of `createScene` if you want to return a scene without a camera (because for instance you plan to load a scene using SceneLoader).

## Focus

Whenever a scene in the playground needs the use of keys to move an object, such as a mesh or camera, around then the rendering area needs to have the focus. After running the playground ensure that the render area has the focus by clicking inside it before using the keys. 

# Further Reading
 
[Textures Directly Available to the Playground](/resources/Playground_Textures.html)  
[The Debug Layer Features](/features/playground_debuglayer)  
[How to Use The Debug Layer in Projects](/How_To/debug_layer)  
[How To Customize the Debug Layer](/How_To/customize_debug_layer)  




