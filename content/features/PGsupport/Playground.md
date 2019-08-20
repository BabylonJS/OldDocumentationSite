---
PG_TITLE: The Playground
---

# The Playground

The place to try out coding with Babylon.js.

Experimenting and changing any code in the playground and clicking on the **Run** button will not affect any original code in the playground you currently using. 
Original code can be restored by refreshing the browser.

You can write the code in Javascript or Typescript. In the case of Typescript the URL must contain `ts.html` after `https://www.babylonjs-playground.com/` for the code to be [recognised as Typescript](https://www.babylonjs-playground.com/ts.html). The playground software compiles the code to Javascript, in the background, before rendering.

## Overview

![Playground Overview](/img/how_to/Introduction/playground.jpg)

The Playground consists of four areas:

- a menu bar at the top
- a links bar at the bottom
- a coding editor on the left
- a rendering area of the right.

The space for the coding editor and rendering area can be adjusted by dragging the vertical bar between them.

## The Menu

![Playground Menu](/img/how_to/Introduction/pgmenu.jpg)

In Typescript mode the menu has an orange color theme

![Playground Typescript Menu](/img/how_to/Introduction/pgmenu_ts.jpg)

### Large Screen

- **Title and Version**: As stated.
- **Run**: Commands the playground to try to render your scene.
- **Save**: Causes your scene to be permanently stored in the playground's database and it will issue a unique URL for each save. On save you will be asked to comple the metadata so that it can be searched for. Once saved it is a good idea to bookmark the page so you can return to it later. You could then share the URL with others, for example, if it is not working as you expect you can ask a question in the forum along with the link to your playground.
- **Download**: Allows you to download a zip file named *sample.zip*. Once downloaded and unzipped, you will see a file named `index.html` 
which contains everything necessary to run the code in your browser, including links to external *babylon.js* and other files.
- **New**: Places a basic `createScene()` function into the editor along with code to initialise the scene variable and provide a camera.
- **Clear**: Empties all the code out of the playground editor.  You could then paste in any createScene function you are working on locally.
- **Settings**: The Settings button has a sub menu with extra options
  - *Theme*: Choose the theme for the playground
  - *Font size*: Set the font size in the editor.
  - *Safe Mode*: When the checkbox is ticked the playground issues a "leaving the page?" confirmation warning when you try to unload/reload a freshly-edited, un-saved scene.
  - *Editor*: The checkbox hides or un-hides the editor portion of the playground.
  - *Full Screen*: Makes the render area full screen.
  - *Editor Full Screen*: Makes the editor area full screen.
  - *Format Code*: Pretty prints the code.
  - *Minimap*: Display the minimap of the code editor.
  - *Inspector*: The checkbox toggles the playground scene inspector which shows a multitude of variable values.
  - *Metadata*: This is where you describe your playground allowing yourself and other to search the playground database for examples of use.
- **Version**: Allows and shows your choice of the BABYLON.js framework, either the current stable one or the latest preview version.
- **Examples**: A drop down menu giving examples of playgrounds with a search filter.

### Small Screens

- **File**: Contains Run, New, Clear, Save and Zip as submenus.
- **Editor/View**: Buttons to switch between the code editor and the view.

## Playground URL formats

Pre-installed demo playgrounds have this URL format

| Javascript | Typscript |
|---|---|
| http://www.babylonjs-playground.com/# | http://www.babylonjs-playground.com/ts.html# |

Saved playgrounds have this format on first save

| Javascript | Typscript |
|---|---|
| http://www.babylonjs-playground.com/#6F0LKI | http://www.babylonjs-playground.com/ts.html#6F0LKI |

That is the site name followed by a hash code reference key.

Following saves of the same playground are numbered incremently from one, for example 

| Javascript | Typscript |
|---|---|
| http://www.babylonjs-playground.com/#6F0LKI#1 | http://www.babylonjs-playground.com/ts.html#6F0LKI#1 |
| http://www.babylonjs-playground.com/#6F0LKI#2 | http://www.babylonjs-playground.com/ts.html#6F0LKI#2 |
  
etc.

You might be interested to know that [some html templates](https://github.com/BabylonJS/Babylon.js/tree/master/Playground) are also availables:

Template | Description
--- | ---
[full.html](https://www.babylonjs-playground.com/full.html#6F0LKI#2) | show the render area in full screen
[frame.html](https://www.babylonjs-playground.com/frame.html#6F0LKI#2) | show the render area in full screen, but with a bottom toolbar showing FPS, reload and edit buttons
[indexStable.html](https://www.babylonjs-playground.com/indexStable.html#6F0LKI#2) | use the BJS stable version, not the preview one
[debug.html](https://www.babylonjs-playground.com/debug.html#6F0LKI#2) | used to run a version of the playground which uses debug version of babylon.js
[index-local.html](https://www.babylonjs-playground.com/index-local.html#6F0LKI#2) | used for local development using VSCode

## Forum sharing

Of course the playground is extremely useful to get help from the community. In the forum, simply paste the link of your playground.

You can have fun showing directly your playground embeded into your message, using iframe. But take note that you have to be sparing with this functionnality: this will slow down the loading of your topic.

```html
<iframe src="https://www.babylonjs-playground.com/frame.html#6F0LKI#2" width="400px" height="250px" ></iframe>
```

![playground forum sharing ways](/img/features/pgsupport/pg-forum-sharing-ways.jpg)
> *so many ways to share an issue*

## Compilation Errors

![compilation error popup](/img/features/pgsupport/pg-compilation-error.jpg)

Any errors in your playground are flagged with a red pop-up box containing limited information. After making an adjustment to your code, you need not close the compilation error pop-up.  It should close automatically at the next Run, if all errors have been corrected.

Please note that you can name your main function `delayCreateScene` instead of `createScene` if you want to return a scene without a camera (because for instance you plan to load a scene using `SceneLoader`).

## Focus

Whenever a scene in the playground needs the use of keys to move an object, such as a mesh or camera, around then the rendering area needs to have the focus. After running the playground ensure that the render area has the focus by clicking inside it before using the keys. 

# Further Reading
 
- [Textures Directly Available to the Playground](/resources/Playground_Textures.html)
- [Meshes Available to Import into the Playground](/resources/meshes_to_load)
- [Using External Assets in the Playground](/resources/External_PG_assets)
- [The Inspector Features](/features/playground_debuglayer)
- [How to Use The Inspector in Projects](/How_To/debug_layer)
- [How To Customize the Inspector](/How_To/customize_debug_layer)
