---
PG_TITLE: Customize The Debug Layer
title: Customize The Debug Layer
abstract: ''
slug: customize-debug-layer
redirects:
  - /overviews/customize_debug_layer
---

# Customize The Debug Layer

The debug layer is part of the Babylon.js repository and can be customized in the same way as Babylon.js can. 

Before following any of the steps below knowing how to customizing Babylon.js in general is required.

This can be gained by reading

[How to Start Contributing to Babylon.js](/how-to/contribute/how-to-start)

In addition for those using Visual Studio as an IDE you can read 

[Setup Visual Studio to contribute to Babylon.js](/how-to/contribute/setup-visual-studio)


## Setting the project

As all the code of the debug layer lies in Babylon.js repository, you have first to follow [this tutorial](/how-to/contribute/how-to-start) to setting up your IDE.


## Compile the library
In a terminal, type : 
```
cd Tools/Gulp
gulp typescript
```

## Run the test task
Once this is done, run the test task (<kbd>CTRL</kbd> + <kbd>SHIFT</kbd> + <kbd>P</kbd>) and type `test` then press <kbd>enter</kbd>.

Open the url : http://localhost:1338/inspector/index.html
You should be able to see the test file (see next) for the inspector.

## Updating the test file

The test file is: `/inspector/test/index.js` ([here](https://github.com/BabylonJS/Babylon.js/tree/master/inspector/test) in Github)
You can update the test file, and press F5 in your browser to check the changes.

## Adding a new TS file in the project
If you want your file to be taken into account during the compilation process, you have to add it in the file `config.json` located in `/Tools/Gulp` in the `inspector` rule.

## Create a new color theme
You can update all variables defined in the file `/inspector/sass/defines.scss`

## Creating a new tab

All tabs are in the folder `inspector/src/tabs`. 
By default, you can have two kind of tabs: 
* A tab with nothing (see StatsTab, TextureTab...) : *your class should extend Tab*
* A tab with a tree list and a detail panel (see MeshTab, MaterialTab...) : *your class should extend PropertyTab*

Create a new tab that extends one of these class.
Your tab should be then added to the Tab Bar (class `TabBar`)

## Creating split panel

You can create a resize bar with the following code: 
```javascript
Split([element1, element2], {
    blockDrag: this._inspector.popupMode,
    direction: direction
});
```
Where element1 and element2 are two HTML div, and direction is either 'vertical' or 'horizontal' (vertical = element1 is above element2)

# Further Reading

[The Debug Layer Features](/features/pgsupport/playground-debuglayer)  
[How To use The Debug Layer in Projects](/how-to/pgsupport/debug-layer)     
