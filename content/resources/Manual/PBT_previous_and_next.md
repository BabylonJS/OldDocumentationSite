---
PG_TITLE: Advanced Guide for Writing Playground Based Tutorials
---

# General Points on Playground Based Tutorial Writing

Writing any PBT involves different sections code. These are

* **Basic** code needed to produce the playground;
* **Focus** code that is the focus of the tutorial;
* **Context** code to give support in understanding code;
* **GUI** PBT code for the GUI, including functions called by GUI buttons;
* **Sculpt** PBT code to manipulate the editor. 

## Design for the Tutorial

This guide will concentrate mainly on the sculpt code and how to deal with the use of both a **Previous** and a **Next** button. Also because two viewports are used and a Babylon.GUI would appear in both the GUI is produced using HTML.

There will be a step by step overview of the code plus at many steps a more detailed explanation of the code. 

## GUI

### Elements

A holder is created using absolute positioning so that its screen placement can be controlled. This will contain the text describing the sculpt code and buttons to move through the tutorial. 
```javascript
var holder = document.createElement("div");
holder.style.position = "absolute";
holder.style.top = "45%";
holder.style.right = "5px";
holder.style.width = "45%";
holder.style.height = "70px";
holder.style.backgroundColor = "#CDC8F9";
holder.style.color = "#364249";
holder.style.border = "solid 3px #364249";
document.body.appendChild(holder);
```

Buttons to take the user forward and backwards through the tutorial are created. 
```javascript
var prev = document.createElement("div");
prev.style.width = "5%";
prev.style.height = "95%";
prev.innerHTML = "&#9664;"
prev.style.fontSize = "2em";
prev.style.cssFloat = "left";
prev.style.cursor = "pointer";
holder.appendChild(prev);

var next = document.createElement("div");
next.style.width = "5%";
next.style.height = "95%";
next.innerHTML = "&#9654;"
next.style.fontSize = "2em";
next.style.cssFloat = "left";
next.style.cursor = "pointer";
holder.appendChild(next);
```
Also a button to lead to extra descriptions is created.

```javascript
var extra = document.createElement("div");
extra.style.width = "5%";
extra.style.height = "95%";
extra.style.marginTop = "20px";
extra.style.marginLeft = "5px";
extra.innerHTML = "&#9660;"
extra.style.fontSize = "2em";
extra.style.cssFloat = "left";
extra.style.cursor = "pointer";
holder.appendChild(extra);
```

```javascript
var textBox = document.createElement("div");
textBox.style.width = "80%";
textBox.style.height = "95%";
textBox.innerHTML = "Some Text"
textBox.style.cssFloat = "left";
textBox.style.marginLeft = "1em";
holder.appendChild(textBox);
```
### Code

There is a need to know if the extra button has been pressed to enter ot leave the additional descriptions.
```javascript
extra.active = false;
```

The next button will on occasions, when not needed to move the tutorial forward, act as a reset the scene button for the times when the user 'falls off the edge' of the scene. The following sets whether next button is acting as a forward button or a reset button.
```javascript
sceneReset = false;
```

Event listeners are added to the buttons.
```javascript
prev.addEventListener("click", goBack, false);
next.addEventListener("click", goForward, false);
extra.addEventListener("click", setExtra, false);
```

Together with the code that is called.
```javascript
var tutIndex = 0;

var goBack = function() {
    if(extra.active) {
        extra.index--
        extraAction();
    }
    else {
        tutIndex--
        tutorialAction();
    }
}

var goForward = function() {
    if(sceneReset) {
        camera.angle = Math.PI/2;
        camera.direction = new BABYLON.Vector3(Math.cos(camera.angle), 0, Math.sin(camera.angle));
        camera.position = new BABYLON.Vector3(0, 1, 0);
        camera.setTarget = new BABYLON.Vector3(0, 0, 1);
    }
    else {
        if(extra.active) {
            extra.index++
            extraAction();
        }
        else {
            tutIndex++;
            tutorialAction();
        }
    }
}

var setExtra = function() {
    if (extra.active) {
        extra.innerHTML = "&#9660;"
        holder.style.backgroundColor = "#CDC8F9";
        tutorialAction();
    }
    else {
        extra.index = 100 * tutIndex;
        extra.innerHTML = "&#9650;"
        holder.style.backgroundColor = "#BBD18F";
        extraAction();
    }
    extra.active = !extra.active;
}
```

Increments and detrements in tutIndex and extra.index are used within **switch** statements to move forwards and backwards through the tutorial. GUI code and sculpt code are mixed within the **case break** blocks. A block with case label n: in the overview chain will lead to a first block with label n * 100: in the more descriptive chain. Each block sets the appropriate text.

In each block the next, previous and extra buttons are hidden or displayed as required taking care that if a button is hidden in one block that the previous block puts it back to visible if that is the required state for that block.

## Sculpt Code

As usual start with a new PBT
```javascript
var pbt = new PBT();
```

For each block to ensure that only the lines that should be decorated are the ones decorated the following must be in each block.

```javascript
pbt.clearDecorLines();
```
Followed by the lines to be decorated

```javascript
pbt.clearDecorLines();
pbt.setDecorLines([6, 6, 67, 68, 70, 71]);
```

As **hideLines** hides only the lines specified it is sufficient for a single call in each block.

```javascript
pbt.hideLines([7, 65, 72, 1118])
```

## Example blocks.

### Example 1

```javascript
case 3:
    extra.style.visibility = "hidden";    
    textBox.innerHTML = "This is not the default so new input management scripts will be needed. Now we need to add in the camera and scene objects."
    pbt.clearDecorLines();
    pbt.hideLines([2, 1120]);
break
case 4:
    next.style.visibility = "visible"; 
    prev.style.visibility = "visible";    
    extra.style.visibility = "visible";
    textBox.innerHTML = "Add the camera but not yet attatching control to the canvas...";
    pbt.clearDecorLines();
    pbt.setDecorLines([6, 7]);
    pbt.hideLines([8, 1120])
break
case 5:
    extra.style.visibility = "hidden";    
    textBox.innerHTML = "... and the ability to collide and react to gravity.";
    pbt.clearDecorLines();
    pbt.setDecorLines([6, 6, 67, 68, 70, 71]);
    pbt.hideLines([7, 65, 72, 1120])
break

case 400:
    next.style.visibility = "hidden"; 
    prev.style.visibility = "hidden";    
    textBox.innerHTML = "camera.minZ needs to be a small non zero positive number to ensure collided objects remain in the camera's view.";
break
```

In block 4: 
1. *extra.style.visibility = "visible"* since it is **hidden** in blocks 3: and 5:.
2. *prev.style.visibility = "visible"* and *next.style.visibility = "visible"* since if the extra details in block 400: are accessed then both are **hidden**.

### Example 2

```javascript
case 18:
    extra.style.visibility = "hidden";     
    textBox.innerHTML = "...and finally add the new keys input manager to the camera.";
    pbt.clearDecorLines();
    pbt.setDecorLines([204, 204]);
    pbt.hideLines([]);
    pbt.hideLines([7, 191, 205, 1120])
break
case 19:
    next.style.visibility = "visible"; 
    prev.style.visibility = "visible";
    extra.style.visibility = "visible"; 
    textBox.innerHTML = "Secondly the Mouse Manager...";
    pbt.clearDecorLines();
    pbt.setDecorLines([206, 213]);
    pbt.hideLines([7, 204, 214, 1120])
break

case 1900:
    prev.style.visibility = "hidden";    
    next.style.visibility = "visible";  
    textBox.innerHTML = "Renamed for searching this method is a modified copy of <span style = 'font-weight:bold'>FreeCameraMouseInput</span>.";
    pbt.clearDecorLines();
    pbt.setDecorLines([206, 213]);
    pbt.hideLines([7, 204, 214, 1120])
break
case 1901:
    prev.style.visibility = "visible";    
    next.style.visibility = "hidden";  
    textBox.innerHTML = "Restriction values have been added to limit local rotations about X and Y";
    pbt.clearDecorLines();
    pbt.setDecorLines([211, 212]);
    pbt.hideLines([7, 204, 214, 1120]);
break
```
In block 19: 
1. *extra.style.visibility = "visible"* since it is **hidden** in block 18:.
2. *prev.style.visibility = "visible"* and *next.style.visibility = "visible"* since if the extra details in block 1900: are accessed then *prev.style.visibility = "hidden"* and if block 1901: is accessed *next.style.visibility = "hidden"*. A return from either 1900: or 1901: will still result in *prev* and *next* being visible.


# Live Examples

The working playground using the above code.
* [Playground Tutorial - Camera Collisions and Input Customisation](https://www.babylonjs-playground.com/#U825TZ)

# Further Reading

* [Playground Based Tutorial Writing Overview](/How_To/playground_tutorials)  
[Starter Guide](/resources/hiding_editor_lines)    
[Intermediate Guide](/resources/PBT_Writing)
