For this game, I wanted to create a third person camera that would follow the character, but still allow them to move freely and jump within camera view. In the beginning I struggled to find a good camera movement and cycled between different camera types and parenting hierarchies. Eventually, I decided to use the Universal Camera as it allowed for the most freedom in manipulating the camera view while still being able to lock onto the character mesh. I also came across the blog posts on [suzy cube's](http://louardongames.blogspot.com/2016/10/lessons-from-suzy-cube-camera-system.html) camera system. I decided to give it a try since the system allowed for different manipulations of the camera while still following the character.

## Camera Hierarchy
*[link to setupPlayerCamera function in github]*

Here's a breakdown of the hierarchy for the camera system:

* _camRoot: TransformNode
    * _yTilt: TransformNode
        * camera: UniversalCamera

**_camRoot** is our root parent that handles the overall positioning of our camera. It's in charge of updating its position to follow the player's position and is located at the center of the player.

**_yTilt** is the rotation along the x-axis of our camera. If we need to tilt our camera up or down, this will handle those rotations.

**camera** is the actual camera object that controls what we see on the screen

## Update Camera
I've added 2 (half the height) to the mesh's y position since the origin of my mesh is actually at the bottom. You won't need to do this if your mesh's origin is centered already.
```javascript
let centerPlayer = this.mesh.position.y + 2;
this._camRoot.position = Vector3.Lerp(this._camRoot.position, new Vector3(this.mesh.position.x, centerPlayer, this.mesh.position.z), 0.4);
```
In order to update our camera's position we want to lerp from its current position to the new position. Lerping allows for a smooth transition between positions rather than an instant repositioning of the camera.

# Further Reading
