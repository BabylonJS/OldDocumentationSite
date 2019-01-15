---
PG_TITLE: How To Use Pivots and Axes
---

# Pivots and Axes

Through the use of playgrounds this section considers how the pivot and axis parameters of the hinge joint effect the behaviour of the joint in the three physics engines 

1. Cannon.js;
2. Oimo.js;
3. Ammo.js

See [How to Use The Physics' Engines](/how_to/using_the_physics_engine) for an overall view of setting up and using the three plugins.

In all playgrounds the gravity is zero, the X axis is red, the Y axis green and the Z axis blue. A `Cannon.js` cylinder imposter is created with the Z axis up rather than the Y axis so for the mainAxis and mainPivot the y and z values need to be swapped in the vector.

The yellow sphere marks the position of the main pivot and is the center of rotation for the box around the axis of the main body. The origin of the box's local axes marks the connected pivot.

**Note 1** The world position of the box is the negative of the position of the connected pivot.  
**Note 2** When the start position and rotation of the box does not match that given by the connected pivot and connected axis the box will be re-aligned over several of the starting frames.  
**Note 3** The box rotates in the opposite direction in `Oimo.js`.

## Playground Examples

Start with main body (cylinder) vertical and connected body (box) vertical and just touching the cylinder. 
* [Playground Example - Start](https://www.babylonjs-playground.com/#F15U0G#59)

Changing the position of the connected pivot sets the position of the connected body.
* [Playground Example - Move Connected Pivot](https://www.babylonjs-playground.com/#F15U0G#60)

Changing the position of the main pivot changes the center of rotation of the connected body and re-positions the connected pivot relative to this.
* [Playground Example - Move Main Pivot](https://www.babylonjs-playground.com/#F15U0G#61)

Changing the connected axis changes the local axis of rotation of the connected body and re-orientates the connected body. (CANNON DIFF)
* [Playground Example - Move Connected Axis](https://www.babylonjs-playground.com/#F15U0G#62)

Changing the main axis changes the main axis of rotation of the connected body and re-orientates the connected body.
* [Playground Example - Move Main Axis](https://www.babylonjs-playground.com/#F15U0G#63)

# Further Reading

## Basic - L1

[How To Use The Physics' Engines](/how_to/using_the_physics_engine)  
[How To Use Forces](/how_to/forces)  
[How to use Joints](/how_to/joints)   
[How To Create Compound Bodies](/how_to/compounds) 

## Mid Level - L2

[How To Use Advanced Features](/how_to/Using_Advanced_Physics_Features)
 
## More Advanced - L3

[How To Add Your Own Physics Engine](/how_to/Adding_Your_Own_Physics_Engine_Plugin_to_Babylon.js)

