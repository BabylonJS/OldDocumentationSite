---
TAGS:
---
## Description

class [BoneLookController](/classes/3.0/BoneLookController)



## Constructor

## new [BoneLookController](/classes/3.0/BoneLookController)(mesh, bone, target, options)

Create a [BoneLookController](/classes/3.0/BoneLookController)

- maxYaw: the maximum angle the bone will yaw to

- minYaw: the minimum angle the bone will yaw to

- maxPitch: the maximum angle the bone will pitch to

- minPitch: the minimum angle the bone will yaw to

- slerpAmount: set the between 0 and 1 to make the bone slerp to the target.

- upAxis: the up axis of the coordinate system

- upAxisSpace: the space that the up axis is in - BABYLON.[Space](/classes/3.0/Space).BONE, BABYLON.[Space](/classes/3.0/Space).LOCAL (default), or BABYLON.[Space](/classes/3.0/Space).WORLD.

- yawAxis: set yawAxis if the bone does not yaw on the y axis

- pitchAxis: set pitchAxis if the bone does not pitch on the x axis

- adjustYaw: used to make an adjustment to the yaw of the bone

- adjustPitch: used to make an adjustment to the pitch of the bone

- adjustRoll: used to make an adjustment to the roll of the bone

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.0/AbstractMesh) |  the mesh that the bone belongs to 
 | bone | [Bone](/classes/3.0/Bone) |  the bone that will be looking to the target 
 | target | [Vector3](/classes/3.0/Vector3) |  the target [Vector3](/classes/3.0/Vector3) to look at 
## Members

### target : [Vector3](/classes/3.0/Vector3)

The target [Vector3](/classes/3.0/Vector3) that the bone will look at.

### mesh : [AbstractMesh](/classes/3.0/AbstractMesh)

The mesh that the bone is attached to.

### bone : [Bone](/classes/3.0/Bone)

The bone that will be looking to the target.

### upAxis : [Vector3](/classes/3.0/Vector3)

The up axis of the coordinate system that is used when the bone is rotated.

### upAxisSpace : [Space](/classes/3.0/Space)

The space that the up axis is in - BABYLON.[Space](/classes/3.0/Space).BONE, BABYLON.[Space](/classes/3.0/Space).LOCAL (default), or BABYLON.[Space](/classes/3.0/Space).WORLD.

### adjustYaw : number

Used to make an adjustment to the yaw of the bone.

### adjustPitch : number

Used to make an adjustment to the pitch of the bone.

### adjustRoll : number

Used to make an adjustment to the roll of the bone.

### slerpAmount : number

The amount to slerp (spherical linear interpolation) to the target.  Set this to a value between 0 and 1 (a value of 1 disables slerp).

### minYaw : number

Get/set the minimum yaw angle that the bone can look to.

### maxYaw : number

Get/set the maximum yaw angle that the bone can look to.

### minPitch : number

Get/set the minimum pitch angle that the bone can look to.

### maxPitch : number

Get/set the maximum pitch angle that the bone can look to.

## Methods

### update() &rarr; void

Update the bone to look at the target.  This should be called before the scene is rendered (use scene.registerBeforeRender()).
