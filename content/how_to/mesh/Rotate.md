---
PG_TITLE: Translate and Rotate in Detail
---

# Frames of Reference 

Two frames of reference are used **world axes** and **local axes** .  
The frame of reference used depends whether translate and rotate take place on the *world space* or the *local space*.  
When *world space* is specified translate uses the *world axes*.  
Rotate use the *world axes* to calculate the vector direction of the axis of rotation with the axis line passing through the origin of the *local axes*. 

When *local space* is specified translate uses the *local axes*. 
Rotate use the *local axes*  to calculate the vector direction of the axis of rotation with the axis line passing through the origin of the *local axes*. 

# Warning about Translate

Mathematically you would expect any use of translate to move a mesh from its set current position along a vector to a new position. 
Under some circumstances translate will not behave as expected when it follows earlier translations or rotations. For example it may not start the 
translation from the current position of the mesh or it may not translate using the set axes. On these occasions the expected behaviour 
can be obtained by computing the world matrix of the mesh before applying translate. 

The computation of the world matrix for a mesh (example - pilot) can be forced as follows 
```javascript
pilot.position = new BABYLON.Vector3(2, 3, 4);
pilot.computeWorldMatrix(true);
```

During the rendering process for each frame the world matrix is computed for each mesh. Using the scene.register*After*Render() method for an animation is another way to ensure 
that translations are as expected. In this case the code for the animation is registered (run) after the first frame has been rendered and so after the world matrix is computed 
for each mesh. When using scene.register*Before*Render() the animation code is registered before the rendering of the current frame 
and so before the world matrix is computed for each mesh.

Of course the method to use will depend on the actual behaviour wanted and the structure of the code to produce it. 

Examples of these types of issues are provided in the guide to translate and rotate below.

# Translate and Rotate

Since translate and rotate are about movement all examples are animated and in all examples a non symmetrical mesh, the pilot, will be used.. 

![The Pilot](/img/how_to/Mesh/pilot.jpg)
The Pilot

When the pilot is created its position and rotation are both set to (0, 0, 0) and all frames of reference 
coincide.

![Creation of Pilot](/img/how_to/Mesh/pilot1.jpg)

For translate and rotate the change can be specified to take place in the world space or in local space as follows. 

The **world space** is set using BABYLON.Space.WORLD

The **local space** is set using BABYLON.Space.LOCAL

## Translate 

To translate a mesh a vector, distance and space need to be specified. The vector is the direction of translation, the distance * vector length gives how far to move in the given direction. 
Use pilot.translate(vector, distance, space) to move the pilot in either the world or local space. 
It is often useful for the vector to be a unit vector so the distance moved is precisely the distance given.

```javascript
//BABYLON.Axis.Y is already a unit vector. 
//As world space specified pilot will move a distance of 2 from its current position in the direction (0, 1, 0).
pilot.translate(BABYLON.Axis.Y, 2, BABYLON.Space.WORLD);

//Given vector has length sqrt(14). 
//A local space specified pilot will move a distance sqrt(14)*3 from its current position in direction (-1, 3, -2)
pilot.translate(new BABYLON.Vector3(-1, 3, -2), 3, BABYLON.Space.LOCAL);

//Since vector is normalized and local space specified 
//pilot will move a distance 6 from its current position in direction (3, 5, -2)
var direction = new BABYLON.Vector3(3, 5, -2);
direction.normalize(); // direction now a unit vector
pilot.translate(direction, 6, BABYLON.Space.LOCAL);
```

A translation of (1, 3, -5) followed by one of (2, -1, -2) is clearly (3, 2, -7) so really there is little call to write separate 
sequential translate statements. One place where it may occur is when a mesh is positioned before its animation is run. 

The following examples are done in *world space*. Note the difference between A and B. Both set the position of the pilot to (2, 3, 4) before the animation.  
In example A the pilot starts from (0, 0, 0) since the animation code is carried out before computing the world matrix and so the setting of the 
pilot position is not carried out before the first frame is rendered.  
In example B the pilot starts from the set position since the animation code is carried out after computing the world matrix for the pilot.

[Playground Example (A) Translate World Space Animated with registerBeforeRender](http://www.babylonjs-playground.com/#1ZMJQV#13)

[Playground Example (B) Translate World Space Animated with registerAfterRender](http://www.babylonjs-playground.com/#1ZMJQV#14)


In example C below computing the world matrix is forced in code before the animation is carried out and so even though scene.register*Before*Render is used 
the pilot starts the animation at the set position.

[Playground Example (C) Translate World Space, World Matrix Computed, Animated with registerBeforeRender ](http://www.babylonjs-playground.com/#1ZMJQV#15)

In *local space* sequences of translations will always be combined starting from the current position of the mesh which ever method is used. 
This can be seen in the examples below.

[Playground Example Translate Local Space Animated with registerBeforeRender](http://www.babylonjs-playground.com/#1ZMJQV#16)

[Playground Example Translate Local Space Animated with registerAfterRender](http://www.babylonjs-playground.com/#1ZMJQV#28)

This is not true when translation follows a rotate.

## Rotate

Whether in world or local space the axis of rotation for a mesh always passes through the origin of the *local axes* for that mesh.

To rotate a mesh an axis, angle and the space specified are needed. The axis is given as any vector(x, y, z). 
For convenience unit vectors in the positive directions of the x, y and z axes are pre-defined as the constants BABYLON.Axis.X, BABYLON.Axis.Y and BABYLON.Axis.Z respectively.

```javascript
pilot.rotate(BABYLON.Axis.Y, Math.PI / 2, BABYLON.Space.WORLD);

pilot.rotate(new BABYLON.Vector3(-1, 3, -10), 7 * Math.PI / 12, BABYLON.Space.LOCAL);
```

[Playground Example Rotation World Space](http://www.babylonjs-playground.com/#1ZMJQV#4)

[Playground Example Rotation Local Space](http://www.babylonjs-playground.com/#1ZMJQV#7)

In the following playgrounds yellow is the axis relative to the world space and white 
the axis relative to local space.

[Playground Example Rotation World Space Skew Axis](http://www.babylonjs-playground.com/#1ZMJQV#9)

[Playground Example Rotation Local Space Skew Axis](http://www.babylonjs-playground.com/#1ZMJQV#10)

It is possible to combine two or more rotate calls both on world and local space

[Playground Example Combined Rotation World Space](http://www.babylonjs-playground.com/#1ZMJQV#11)

[Playground Example Combined Rotation Local Space](http://www.babylonjs-playground.com/#1ZMJQV#12)


## Translate after a Rotate

In the following examples the intial re-positioning of the pilot mesh from (0, 0, 0) at creation to (3, 0, 0) is 
done inside the animation loop.   
The code to rotate the pilot is before the animation loop. 

In examples A, B and C the pilot behaves as expected starting with a jump translation of (3, 0, 0) followed by small translations 
along the *world x axis* for A and B and along the *local x axis* in the case of C.

In example D the pilot starts with a jump translation along the *world x axis* the small translations along the *local x axis*. 
This demonstrates that the world matrix had not been computed for the rotates applied to the mesh for the intial animation code registration. 

In examples E and F, if you watch the screen carefully when 'RUN' is clicked, you might see the jump from (0, 0, 0). 
This is because the animation code is registered after the frame rendering the pilot at (0, 0, 0) is drawn.

[Playground Example (A) Translate World Space Animated with registerBeforeRender](http://www.babylonjs-playground.com/#1ZMJQV#29)

[Playground Example (B) Translate World Space, World Matrix Computed, Animated with registerBeforeRender ](http://www.babylonjs-playground.com/#1ZMJQV#31)

[Playground Example (C) Translate Local Space, World Matrix Computed, Animated with registerBeforeRender ](http://www.babylonjs-playground.com/#1ZMJQV#32)

[Playground Example (D) Translate Local Space Animated with registerBeforeRender](http://www.babylonjs-playground.com/#1ZMJQV#33)
[Playground Example (E) Translate World Space Animated with registerAfterRender](http://www.babylonjs-playground.com/#1ZMJQV#34)
[Playground Example (F) Translate Local Space Animated with registerAfterRender](http://www.babylonjs-playground.com/#1ZMJQV#35)

# Further Reading

## Gamelet

[Making A Simple Driven Car using Translate and Rotate](/samples/Car_Driven)