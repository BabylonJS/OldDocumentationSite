---
PG_TITLE: Intermediate Guide for Writing Playground Based Tutorials
---

# General Points on Playground Based Tutorial Writing

Writing any PBT involves different sections code. These are

* **Basic** code needed to produce the playground;
* **Focus** code that is the focus of the tutorial;
* **Context** code to give support in understanding code;
* **GUI** PBT code for the GUI, including functions called by GUI buttons;
* **Sculpt** PBT code to manipulate the editor. 

## Design for the Tutorial

The tutorial is to show how the .rotation and .rotate methods differ. The action of rotating will be slowed to show the user what is happening. The user will be given the opportunity to choose the order of rotations and whether they take place in WORLD or LOCAL space.

The usual basic code needed to produce a playground will be faded. The focus code is the code needed to produce the meshes and the code using .rotation and .rotate applied to them.

Context code will be used to add axes and also to do the actual animation of rotating the meshes. 

In this case the focus code using .rotation and .rotate and the context code used for rotating are different. The focus code is for display only. 

The GUI code will produce a standard dialogue box to step through the tutorial and a selection dialogue box GUI for the choices available. The buttons chosen on the selection dialogue box will determine both sculpt code and context code.

GUI and sculpt code will be hidden.

## Focus Code

The focus code will be presented to the user in stages as the tutorial is progressed through using a standard dialogue box.

To start with the displayed focus code is 

```javascript
var body = BABYLON.MeshBuilder.CreateCylinder("body", { height: 0.75, diameterTop: 0.2, diameterBottom: 0.5, tessellation: 6, subdivisions: 1 }, scene);
var arm = BABYLON.MeshBuilder.CreateBox("arm", { height: 0.75, width: 0.3, depth: 0.1875 }, scene);
arm.position.x = 0.125;
    
var blueBlock = BABYLON.Mesh.MergeMeshes([body, arm], true);
blueBlock.position = new BABYLON.Vector3(1, 3, 4);
blueBlock.material = blueMat;
```

These lines will be decorated using
```javascript
pbt.clearDecorLines();
pbt.setDecorLines([18, 24]);
```
The following focus code will be added, decorated and changed during the progress of the tutorial using `sculpt code`.

```javascript
redBlock = blueBlock.clone("redBlock");
redBlock.material = redMat;
redBlock.position = new BABYLON.Vector3(4, 3, 4);

blueBlock.rotation.x = Math.PI/2;
blueBlock.rotation.y = Math.PI/2;
blueBlock.rotation.z = Math.PI/2;

redBlock.rotate(BABYLON.Axis.X, Math.PI/2, BABYLON.Space.WORLD);
redBlock.rotate(BABYLON.Axis.Y, Math.PI/2, BABYLON.Space.WORLD);
redBlock.rotate(BABYLON.Axis.Z, Math.PI/2, BABYLON.Space.WORLD);
```

## Context Code
As in the [starter guide](/resources/hiding_editor_lines) this includes code to create world and local axes and function calls to them.

It also includes the code to carry out any rotations slowly. The rotations in the focus code are carried out immediately with no chance of a student seeing what happens. So whilst the focus is on the code in the editor the context code does the work. 

The selection dialogue box allows the user to choose WORLD or LOCAL space. Two functions are required one for each choice. Both contain context, GUI and sculpt code.

The context at the code sets a flag for the space used then resets the rotations of the meshes to zero.

The GUI code places a message in the standard dialogue box to state whether WORLD or LOCAL space is being used.

The sculpt code switches editing on at the start so that the focus code can be changed and switches it back off at the end. It also replaces WORLD or LOCAL on the lines in the focus code relating to _.rotate_.

Two different methods are used.

In _localSpace_ each line is read and javascript used to replace "WORLD" witth "LOCAL".

In _worldSpace_ sculpt code is used to change the characters on the given lines from and to the given character positions on the line.

LOCAL space set.
```javascript
var localSpace = function() {
    spaceWorld = false;
    localOriginRed.rotationQuaternion = qXStart.multiply(qYStart).multiply(qZStart);
    blueBlock.rotation = BABYLON.Vector3.Zero();
    redBlock.rotationQuaternion = qXStart.multiply(qYStart).multiply(qZStart);
    tutorial.setText("The rotation axes are LOCAL to the block and move with it.");
    pbt.editOn();
    var lineText = pbt.getLineText(34);
    lineText = lineText.replace("WORLD", "LOCAL");
    pbt.replaceLines([34, 34], lineText);
    lineText = pbt.getLineText(35);
    lineText = lineText.replace("WORLD", "LOCAL");
    pbt.replaceLines([35, 35], lineText);  
    lineText = pbt.getLineText(36);
    lineText = lineText.replace("WORLD", "LOCAL");
    pbt.replaceLines([36, 36], lineText);
    pbt.editOff();
}
```

WORLD space set.
```javascript
var worldSpace = function() {
    spaceWorld = true;
    localOriginRed.rotationQuaternion = qXStart.multiply(qYStart).multiply(qZStart);
    blueBlock.rotation = BABYLON.Vector3.Zero();
    redBlock.rotationQuaternion = qXStart.multiply(qYStart).multiply(qZStart);
    tutorial.setText("The rotation axes are fixed and parallel to the WORLD axes.");
    pbt.editOn();
    pbt.replaceText(34, 62, 67, "WORLD");
    pbt.replaceText(35, 62, 67, "WORLD");
    pbt.replaceText(36, 62, 67, "WORLD");
    pbt.editOff();
}
```

The rotations carried out also depend on the choice from the selection box and a function is needed for each them. The functions mix context, and sculpt code. 

There are 6 choices for order and two for which space, WORLD or LOCAL, to use. 

The six for order all use the same pattern. The one for the order X, Y then Z is given as an example.

```javascript
var XYZ = function() {          
    pbt.editOn();
    var newLines = '    blueBlock.rotation.x = Math.PI/2;\r\n';
    newLines += '    blueBlock.rotation.y = Math.PI/2;\r\n';
    newLines += '    blueBlock.rotation.z = Math.PI/2;';
    pbt.replaceLines([30, 32], newLines);
    
     rotationMsg	= !rotationMsg;
     if(rotationMsg) {
       tutorial.setText("With .rotate the red block rotates in the given order.");
     }
     else {
       tutorial.setText("With .rotation the blue block's orientation is dependent only on the three angles and not the order given.");
     }
     if(spaceWorld) {
         scene.beginDirectAnimation(blueBlock, [rotationX], 4 * frameRate , 7 * frameRate, false);
         scene.beginDirectAnimation(blueBlock, [rotationY], 2 * frameRate , 7 * frameRate, false);
         scene.beginDirectAnimation(blueBlock, [rotationZ], 0 * frameRate , 7 * frameRate, false);
         
         scene.beginDirectAnimation(redBlock, [rotateWorldXYZ], 0 * frameRate , 7 * frameRate, false);

         newLines = '    redBlock.rotate(BABYLON.Axis.X, Math.PI/2, BABYLON.Space.WORLD);\r\n';
         newLines += '    redBlock.rotate(BABYLON.Axis.Y, Math.PI/2, BABYLON.Space.WORLD);\r\n';
         newLines += '    redBlock.rotate(BABYLON.Axis.Z, Math.PI/2, BABYLON.Space.WORLD);';
         pbt.replaceLines([34, 36], newLines);
     }
     else {
         scene.beginDirectAnimation(blueBlock, [rotationY], 4 * frameRate , 7 * frameRate, false);
         scene.beginDirectAnimation(blueBlock, [rotationX], 2 * frameRate , 7 * frameRate, false);
         scene.beginDirectAnimation(blueBlock, [rotationZ], 0 * frameRate , 7 * frameRate, false);
         
         scene.beginDirectAnimation(redBlock, [rotateLocalXYZ], 0 * frameRate , 7 * frameRate, false);
         scene.beginDirectAnimation(localOriginRed, [rotateLocalXYZ], 0 * frameRate , 7 * frameRate, false);

         newLines = '    redBlock.rotate(BABYLON.Axis.X, Math.PI/2, BABYLON.Space.LOCAL);\r\n';
         newLines += '    redBlock.rotate(BABYLON.Axis.Y, Math.PI/2, BABYLON.Space.LOCAL);\r\n';
         newLines += '    redBlock.rotate(BABYLON.Axis.Z, Math.PI/2, BABYLON.Space.LOCAL);';
         pbt.replaceLines([34, 36], newLines);
     }
     pbt.editOff();
 }
```
 Consider these in sections

### Sculpt Code
 
 starts by switching editing on so that changes can be made. The focus code should show the correct order for the rotations so replacement text for this lines is set up in newLines and then replaces the existing lines from 30 to 32. Editing is switched off at the end.
 ```javascript
pbt.editOn();
var newLines = '    blueBlock.rotation.x = Math.PI/2;\r\n';
newLines += '    blueBlock.rotation.y = Math.PI/2;\r\n';
newLines += '    blueBlock.rotation.z = Math.PI/2;';
pbt.replaceLines([30, 32], newLines);
 ```

The line replacement is also carried out for lines 34 to 36 depending on whether WORLD or LOCAL space is active.

WORLD space
```javascript
newLines = '    redBlock.rotate(BABYLON.Axis.X, Math.PI/2, BABYLON.Space.WORLD);\r\n';
newLines += '    redBlock.rotate(BABYLON.Axis.Y, Math.PI/2, BABYLON.Space.WORLD);\r\n';
newLines += '    redBlock.rotate(BABYLON.Axis.Z, Math.PI/2, BABYLON.Space.WORLD);';
pbt.replaceLines([34, 36], newLines);
```

LOCAL space
```javascript
newLines = '    redBlock.rotate(BABYLON.Axis.X, Math.PI/2, BABYLON.Space.LOCAL);\r\n';
newLines += '    redBlock.rotate(BABYLON.Axis.Y, Math.PI/2, BABYLON.Space.LOCAL);\r\n';
newLines += '    redBlock.rotate(BABYLON.Axis.Z, Math.PI/2, BABYLON.Space.LOCAL);';
pbt.replaceLines([34, 36], newLines);
```
### Context Code

Alternates two messages in the standard dialogue box
```javascript
rotationMsg	= !rotationMsg;
if(rotationMsg) {
    tutorial.setText("With .rotate the red block rotates in the given order.");
}
else {
    tutorial.setText("With .rotation the blue block's orientation is dependent only on the three angles and not the order given.");
}
```

Animation call for .rotation same whether WORLD or LOCAL space
```javascript
scene.beginDirectAnimation(blueBlock, [rotationX], 4 * frameRate , 7 * frameRate, false);
scene.beginDirectAnimation(blueBlock, [rotationY], 2 * frameRate , 7 * frameRate, false);
scene.beginDirectAnimation(blueBlock, [rotationZ], 0 * frameRate , 7 * frameRate, false);
```

Animation call for .rotate in WORLD SPACE, no animation for axes in world space.
```javascript
scene.beginDirectAnimation(redBlock, [rotateWorldXYZ], 0 * frameRate , 7 * frameRate, false);
```

Animation call for .rotate in LOCAL SPACE for both mesh and its axes.
```javascript
scene.beginDirectAnimation(redBlock, [rotateLocalXYZ], 0 * frameRate , 7 * frameRate, false);
scene.beginDirectAnimation(localOriginRed, [rotateLocalXYZ], 0 * frameRate , 7 * frameRate, false);
```

#### Animation Codes
For .rotation the animations about the X, Y and Z axes can be kept separate as the order of rotation is does not matter.

This is the code for the rotation about the X axis, the other two are similar.
```javascript
var frameRate = 20;
      
var rotationX = new BABYLON.Animation("rotationX", "rotation.x", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

var rotationX_keys = [];

rotationX_keys.push({
    frame: 0,
    value: 0
});
  
rotationX_keys.push({
    frame: 5 * frameRate,
    value: 0
});
  
rotationX_keys.push({
    frame: 7 * frameRate,
    value: Math.PI/2
});

rotationX.setKeys(rotationX_keys);
```

The animations for .rotate are more complicated and requires rotationQuaternions. An animation for each of the 6 possibilities has to be produced separately and each correctly combine the rotation Quaternions for each section of frames. 

The sections of frames are a rest period (section 0), then equal time sections (1, 2 and 3) for each axis in turn.

First of all the start and end values for each of the axes have to be calculated over a time section of the animation.
```javascript
var qXStart = new BABYLON.Quaternion.RotationAxis(BABYLON.Axis.X, 0); 
var qXEnd = new BABYLON.Quaternion.RotationAxis(BABYLON.Axis.X, Math.PI/2);
var qYStart = new BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Y, 0); 
var qYEnd = new BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Y, Math.PI/2);
var qZStart = new BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Z, 0); 
var qZEnd = new BABYLON.Quaternion.RotationAxis(BABYLON.Axis.Z, Math.PI/2);
```

Via multiplication the start and end values can be calculated for the section1, section2 and section 3 for both the WORLD and LOCAL space.
This is shown just for the order X, Y, Z
```javascript
var qWorldXY = qYEnd.multiply(qXEnd);
var qWorldXYZ = qZEnd.multiply(qWorldXY);

var qLocalXY = qXEnd.multiply(qYEnd);
var qLocalXYZ = qLocalXY.multiply(qZEnd);
```

The WORLD and LOCAL animations can then be constructed (again just for the order X, Y, Z)
```javascript
var rotateWorldXYZ = new BABYLON.Animation("rotateX", "rotationQuaternion", frameRate, BABYLON.Animation.ANIMATIONTYPE_QUATERNION, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

var rotateWorldXYZ_keys = [];

rotateWorldXYZ_keys.push({
    frame: 0,
    value: qXStart
});

rotateWorldXYZ_keys.push({
    frame: 1 * frameRate,
    value: qXStart
});

rotateWorldXYZ_keys.push({
    frame: 3 * frameRate,
    value: qXEnd
});
  
rotateWorldXYZ_keys.push({
    frame: 5 * frameRate,
    value: qWorldXY
});
  
rotateWorldXYZ_keys.push({
    frame: 7 * frameRate,
    value: qWorldXYZ
});

rotateWorldXYZ.setKeys(rotateWorldXYZ_keys);

var rotateLocalXYZ = new BABYLON.Animation("rotateX", "rotationQuaternion", frameRate, BABYLON.Animation.ANIMATIONTYPE_QUATERNION, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

var rotateLocalXYZ_keys = [];

rotateLocalXYZ_keys.push({
    frame: 0,
    value: qXStart
});

rotateLocalXYZ_keys.push({
    frame: 1 * frameRate,
    value: qXStart
});

rotateLocalXYZ_keys.push({
    frame: 3 * frameRate,
    value: qXEnd
});
  
rotateLocalXYZ_keys.push({
    frame: 5 * frameRate,
    value: qLocalXY
});
  
rotateLocalXYZ_keys.push({
    frame: 7 * frameRate,
    value: qLocalXYZ
});

rotateLocalXYZ.setKeys(rotateLocalXYZ_keys);
```

## GUI Code

As usual start with a new PBT
```javascript
var pbt = new PBT();
```

Two dialogue boxes are needed a standard one and a selection one

### Standard Dialogue Box

This provides the tutorial text and has a `next` button to step through the tutorial. Note that the box is moved away from the screen edges by 4 pixels on construction. On each press of the next button new text is added into the box and context or sculpt actions carried out.

The `prev` button is not used and is hidden and the construction of the standard dialogue box is
```javascript
optionsSD = {
    left: "4px",
    top: "4px",
    text: "Read on for the difference between .rotation and .rotate and follow to the end for examples."
}
var tutorial = new pbt.StandardDialog(optionsSD);  
tutorial.hidePrev();
```

Clicking on the `next` button increments an index which determines the text to be loaded and the action to be undertaken. The text in an array and the actions by the use of a `switch` statement.

```javascript
tutorial.getNextButton().onPointerUpObservable.add(function() {       
    tutorIndex++;   
    tutorial.setText(tutorTexts[tutorIndex]);
    nextAction(tutorIndex);
});
```

The array for the texts
```javascript
var tutorIndex = 0;
var tutorTexts = [
    "Read on for the difference between .rotation and .rotate and follow to the end for examples.",
    "Let's use this asymmetric mesh to show what's going on. Keep checking the code on the left.",
    "To show the two method, .rotation and .rotate, we need a second block.",
    "Now to help lets use some axes with hidden code to keep the seen code less cluttered.",
    "We do need to see the code for rotating, the blue block with .rotation and the red block with .rotate .",
    "Notice that the orientations of the blocks are different even though the order of axes, X, Y, Z is the same.",
    "Euler angles are used with .rotation which produced a fixed orientation whatever order is given.",
    "Order is important with .rotate as well as setting WORLD or LOCAL space. Examples coming up soon.",
    "For the examples you can choose the order of rotation about XYZ axes and in WORLD or LOCAL space.",
    "So you can see them happening the rotations will be slown down and you can now make your choices."
];
```

The nextAction function use `switch` to determine the action and contains mainly sculpt code with some context code and a little GUI code.

The context code when the index is 3 enables and shows the axes. When the index is 4 the bule and red meshes are given a rotation.

The GUI code is in the final case, case: 9, which shows the selection dialogue box and hides the `next` button.

The sculpt code adds focus code when the index is 2 and 4 and hides and decorates lines for index 1,2 and 4. Note that in each case decorations are cleared before being set and that the line range to hide increases as focus code is added.
```javascript
var nextAction = function(index) {                 
    switch(index) {
        case 1: 
            pbt.clearDecorLines();
            pbt.setDecorLines([18, 24]);
        break
        case 2:
            redBlock.setEnabled(true);
            pbt.editOn();
            var newLines = '    redBlock = blueBlock.clone("redBlock");\r\n';
            newLines += '    redBlock.material = redMat;\r\n';
            newLines += '    redBlock.position = new BABYLON.Vector3(4, 3, 4);\r\n';
            pbt.clearDecorLines();
            pbt.replaceLines([26, 26], newLines);
            pbt.setDecorLines([26, 28]);
            pbt.hideLines([30, 1011]);
            pbt.editOff();
        break
        case 3:
            axisX.setEnabled(true);
            xChar.setEnabled(true);
            axisY.setEnabled(true);
            yChar.setEnabled(true);
            axisZ.setEnabled(true);
            zChar.setEnabled(true);
            localOriginRed.setEnabled(true);
        break
        case 4:
              pbt.editOn();
              var newLines = '\r\n    blueBlock.rotation.x = Math.PI/2;\r\n';
              newLines += '    blueBlock.rotation.y = Math.PI/2;\r\n';
              newLines += '    blueBlock.rotation.z = Math.PI/2;\r\n';
              newLines += '\r\n';
              newLines += '    redBlock.rotate(BABYLON.Axis.X, Math.PI/2, BABYLON.Space.WORLD);\r\n';
              newLines += '    redBlock.rotate(BABYLON.Axis.Y, Math.PI/2, BABYLON.Space.WORLD);\r\n';
              newLines += '    redBlock.rotate(BABYLON.Axis.Z, Math.PI/2, BABYLON.Space.WORLD);\r\n';
              pbt.clearDecorLines();
              pbt.replaceLines([29, 29], newLines);
              pbt.setDecorLines([30, 32, 34, 36]);
              pbt.hideLines([38, 1019]);
              pbt.editOff();
              blueBlock.rotation = new BABYLON.Vector3(Math.PI/2, Math.PI/2, Math.PI/2);
              redBlock.rotate(BABYLON.Axis.X, Math.PI/2, BABYLON.Space.WORLD);
              redBlock.rotate(BABYLON.Axis.Y, Math.PI/2, BABYLON.Space.WORLD);
              redBlock.rotate(BABYLON.Axis.Z, Math.PI/2, BABYLON.Space.WORLD);
        break
        case 9:
            selector.show();
            tutorial.hideNext();
        break
    }
}
```
### Selection Dialogue Code

The selector dialogue box contains two groups of radio buttons, hence the "R" as the last parameter in creating the groups. Note that the position of the box is set after construction. The -4 because it is set on the right of the screen. The box is hid at the start.

The `order` buttons call the six functions discussed earlier. The 'space' buttons call _worldSpace_ and _localSpace_ functions also discussed in the context code section.

```javascript
var orderGroup = new pbt.ButtonGroup("Order", "R");    
    orderGroup.addButton("XYZ", XYZ);
    orderGroup.addButton("YXZ", YXZ);
    orderGroup.addButton("YZX", YZX);
    orderGroup.addButton("ZYX", ZYX);
    orderGroup.addButton("ZXY", ZXY);
    orderGroup.addButton("XZY", XZY);

    var spaceGroup = new pbt.ButtonGroup("Space", "R");  
    spaceGroup.addButton("WORLD", worldSpace, true);
    spaceGroup.addButton("LOCAL", localSpace);

    var selector = new pbt.SelectionDialog({groups:[orderGroup, spaceGroup]});
    selector.setHorizontalAlignment(BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT);
    selector.setTop("-4px");
    selector.setLeft("-4px");
    selector.hide();
```
## Sculpt Code
The remaining sculpt code hides sections of the playground menu and switches editing off and hides a range of lines. 
```javascript
pbt.hideMenu();
pbt.editOff();
pbt.hideLines([26, 1008]);
```

# Live Example

The working playground using the above code.
* [Playground Tutorial - Difference Between .rotation and .rotate](https://www.babylonjs-playground.com/#KNSQD7)

# Further Reading

* [Playground Based Tutorial Writing Overview](/How_To/playground_tutorials)  
[Starter Guide](/resources/hiding_editor_lines)  
[Advanced Guide](/resources/PBT_previous_and_next)  
[Slider Guide](/resources/PBT_slider)   
