---
PG_TITLE: Starter Guide for Writing Playground Based Tutorials
---

# General Points on Playground Based Tutorial Writing

Writing any PBT involves different sections code. These are

* **Basic** code needed to produce the playground;
* **Focus** code that is the focus of the tutorial;
* **Context** code to give support in understanding code;
* **GUI** PBT code for the GUI, including functions called by GUI buttons;
* **Scupt** PBT code to manipulate the editor. 

In the following example it is fairly easy to keep these sections separate but it is not always so.

## Design for the Tutorial

The tutorial is to show how to achieve a simple translation of a box with the ability to focus on the box and how the animation is coded.

The basic code needed to produce a playground will be faded. The focus code is the code needed to produce the box and its animation, these will be shown or hidden by the user using GUI code.

Context code will be used to add axes to show the world and local frames of reference and will be hidden as will the GUI and sculpt code.

## Basic Code

The usual template form of setting up the playground with , scene, camera and lights
```javascript
var createScene = function() {
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3( .5, .5, .5);

    // camera
    var camera = new BABYLON.ArcRotateCamera("camera1",  0, 0, 0, new BABYLON.Vector3(5, 3, 0), scene);
    camera.setPosition(new BABYLON.Vector3(10.253, 5.82251, -9.45717));
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

Creates and Animates the Box

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

	var box = BABYLON.MeshBuilder.CreateBox("Box", options, scene, true);

    var pstn = 0;
    var x = 2;
    var z = 2;
    scene.registerAfterRender(function(){
        box.position.x = x;
        box.position.z = z;
        pstn += 0.007;
        pstn %= 3;
      
        x = pstn ;
        z = pstn ;      
    });
```

## Context Code
In this case the code to create world and local axes and function calls to them.

Function calls

```javascript
var localOrigin = localAxes(2);	
localOrigin.parent = box;
box.rotation.y = Math.PI/4;
box.position = new BABYLON.Vector3(0, 0, 0);
```
Creation
```javascript
    // show axis
    var showAxis = function(size) {
        var makeTextPlane = function(text, color, size) {
            var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 50, scene, true);
            dynamicTexture.hasAlpha = true;
            dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color , "transparent", true);
            var plane = new BABYLON.Mesh.CreatePlane("TextPlane", size, scene, true);
            plane.material = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
            plane.material.backFaceCulling = false;
            plane.material.specularColor = new BABYLON.Color3(0, 0, 0);
            plane.material.diffuseTexture = dynamicTexture;
            return plane;
        };
  
        var axisX = BABYLON.Mesh.CreateLines("axisX", [ 
            new BABYLON.Vector3.Zero(), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, 0.05 * size, 0), 
            new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
            ], scene);
        axisX.color = new BABYLON.Color3(1, 0, 0);
        var xChar = makeTextPlane("X", "red", size / 10);
        xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);
        var axisY = BABYLON.Mesh.CreateLines("axisY", [
            new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3( -0.05 * size, size * 0.95, 0), 
            new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3( 0.05 * size, size * 0.95, 0)
            ], scene);
        axisY.color = new BABYLON.Color3(0, 1, 0);
        var yChar = makeTextPlane("Y", "green", size / 10);
        yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);
        var axisZ = BABYLON.Mesh.CreateLines("axisZ", [
            new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3( 0 , -0.05 * size, size * 0.95),
            new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3( 0, 0.05 * size, size * 0.95)
            ], scene);
        axisZ.color = new BABYLON.Color3(0, 0, 1);
        var zChar = makeTextPlane("Z", "blue", size / 10);
        zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
    };
  
    //Local Axes
    function localAxes(size) {
        var pilot_local_axisX = BABYLON.Mesh.CreateLines("pilot_local_axisX", [ 
            new BABYLON.Vector3.Zero(), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, 0.05 * size, 0), 
            new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
        ], scene);
        pilot_local_axisX.color = new BABYLON.Color3(1, 0, 0);

        pilot_local_axisY = BABYLON.Mesh.CreateLines("pilot_local_axisY", [
            new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(-0.05 * size, size * 0.95, 0),
            new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(0.05 * size, size * 0.95, 0)
	    ], scene);
        pilot_local_axisY.color = new BABYLON.Color3(0, 1, 0);

        var pilot_local_axisZ = BABYLON.Mesh.CreateLines("pilot_local_axisZ", [
            new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3( 0 , -0.05 * size, size * 0.95),
            new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3( 0, 0.05 * size, size * 0.95)
            ], scene);
        pilot_local_axisZ.color = new BABYLON.Color3(0, 0, 1);

	    var local_origin = BABYLON.MeshBuilder.CreateBox("local_origin", {size:1}, scene);
	    local_origin.isVisible = false;
	
	    pilot_local_axisX.parent = local_origin;
  	    pilot_local_axisY.parent = local_origin;
  	    pilot_local_axisZ.parent = local_origin; 
	  
        return local_origin;
	
    }
```

## New PBT Created

```javascript
var pbt = new PBT();
```

## GUI PBT Code

The results of these functions called by the GUI buttons depend whether the the button has just been checked or unchecked. The variables 'boxHideCode' and 'animHideCode' keep the next state of the buttons. They also contain 'Sculpt' code.
```javascript
    var hideBoxCode = function() {
        var ranges = [13, 28];
        if(boxHideCode) {
            pbt.hideRange(ranges); //Sculpt code
        }
        else {
            pbt.showRange(ranges); //Sculpt code
        }
        boxHideCode = !boxHideCode;
    }

    var hideAnimCode = function() {
        var ranges = [37, 48];
        if(animHideCode) {
            pbt.hideRange(ranges); //Sculpt code
        }
        else {
            pbt.showRange(ranges); //Sculpt code
        }
        animHideCode = !animHideCode;
    }
```

GUI creation Code
```javascript
var boxH = new pbt.ButtonGroup("Box Code");
var boxHideCode = true;
boxH.addButton("Hide", hideBoxCode, true);

var animH = new pbt.ButtonGroup("Anim Code");
var animHideCode = true; 
animH.addButton("Hide", hideAnimCode, true);

var selector = new pbt.SelectionDialog({groups:[boxH, animH]});
```

## Sculpt Code
```javascript
pbt.clearDecorLines();
    pbt.setDecorLines([29, 29, 37, 48]);
        
pbt.hideLines([13, 28, 30, 35, 37, 48, 49, 162]);
pbt.hideMenu();
```

# Live Example

The working playground using the above code.
* [Playground Tutorial - Hiding Lines](https://www.babylonjs-playground.com/#Y33LF1)

# Further Reading

* [Playground Based Tutorial Writing Overview](/How_To/playground_tutorials)  
[Slider Guide](/resources/PBT_slider)    
[Intermediate Guide](/resources/PBT_Writing)  
[Advanced Guide](/resources/PBT_previous_and_next)

