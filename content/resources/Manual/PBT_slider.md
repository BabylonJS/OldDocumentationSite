---
PG_TITLE: Using Sliders with Playground Based Tutorials
---

# General Points on Playground Based Tutorial Writing

Writing any PBT involves different sections code. These are

* **Basic** code needed to produce the playground;
* **Focus** code that is the focus of the tutorial;
* **Context** code to give support in understanding code;
* **GUI** PBT code for the GUI, including functions called by GUI buttons;
* **Sculpt** PBT code to manipulate the editor. 

## Design for the Tutorial

To create a box whose rotation in the X, Y and Z axes can be adusted by a slider each with only the box creation line showing along with the usual scene creation template.

## Basic Code

The usual template form of setting up the playground with , scene, camera and lights
```javascript
var createScene = function() {
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3( .5, .5, .5);

    // camera
    var camera = new BABYLON.ArcRotateCamera("camera1",  0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);
    camera.setPosition(new BABYLON.Vector3(0, 1, -2.5));
    camera.attachControl(canvas, true);
    
    // lights
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 0.5, 0), scene);
    light.intensity = 0.8;
 
    /* Remaining code added here
    Focus code
    Context code
    GUI PBT code
    Scuplt PBT
    */
   
    return scene;
}
```

## Focus Code
ust the box creation line

```javascript
var box = BABYLON.MeshBuilder.CreateBox("Box", options, scene, true);
```

## Context Code

The options for the box to be hidden

```javascript
var faceColors = [];
faceColors[0]=BABYLON.Color3.Blue();
faceColors[1]=BABYLON.Color3.Red();
faceColors[2]=BABYLON.Color3.Green();
faceColors[3]=BABYLON.Color3.White();
faceColors[4]=BABYLON.Color3.Yellow();
faceColors[5] = BABYLON.Color3.Black();

var options = {
    width: 0.5,
    height: 0.5,
    depth: 0.5,
    faceColors: faceColors
};
```

## New PBT Created

```javascript
var pbt = new PBT();
```

## GUI Code
Code to add sliders and the functions to make them work.

```javascript        
var boxAboutX = function(angle) {
    box.rotation.x = angle;
}

var updateLabelX = function(angle) {
    return BABYLON.Tools.ToDegrees(angle) | 0;  //0 decimal places
}

var boxAboutY = function(angle) {
    box.rotation.y = angle;
}

var updateLabelY = function(angle) {
    return BABYLON.Tools.ToDegrees(angle) | 0;  //0 decimal places
}

var boxAboutZ = function(angle) {
    box.rotation.z = angle;
}

var updateLabelZ = function(angle) {
    return BABYLON.Tools.ToDegrees(angle) | 0;  //0 decimal places
}

var slid = new pbt.ButtonGroup("Angle", "S");
slid.addSlider("X axis", boxAboutX, "degs", updateLabelX, 0, 2 * Math.PI, 0);
slid.addSlider("Y axis", boxAboutY, "degs", updateLabelY, 0, 2 * Math.PI, 0);
slid.addSlider("Z axis", boxAboutZ, "degs", updateLabelZ, 0, 2 * Math.PI, 0);

var selector = new pbt.SelectionDialog({groups: [slid]});
```

## Sculpt Code
```javascript
pbt.clearDecorLines();
pbt.setDecorLines([29, 29]); //Decorate one line

pbt.hideLines([13, 28, 30, 69]);
```  

# Live Examples

The working playground using the above code.
* [Playground Tutorial - Sliders](https://www.babylonjs-playground.com/#UL6BCD)

# Further Reading

* [Playground Based Tutorial Writing Overview](/How_To/playground_tutorials)  
[Starter Guide](/resources/hiding_editor_lines)    
[Intermediate Guide](/resources/PBT_Writing)  
[Advanced Guide](/resources/PBT_previous_and_next)
