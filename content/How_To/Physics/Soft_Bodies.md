---
PG_TITLE: How To Use Create Soft Bodies with AmmoJSPlugin
---

# Soft Bodies
In terms of physics' engines a soft body is a body that can have its shape deformed by interactions with other bodies or forces within the physics world. Out of the three plugins available with Babylon.js soft bodies are only available using Ammo.js. There are two soft bodies you can create, the three dimensional `softbody` and the two dimensional `cloth`. First a number of limitations need to be considered, followed by some aspects particular to soft bodies and then some examples.

See [How to Use The Physics' Engines](/how_to/using_the_physics_engine) for an overall view of setting up and using the three plugins.

## Limitations
A deformation of a body can only be shown if there are sufficient vertices to produce the deformation. The number of vertices used and the need to check their positions and velocities each time step means that the number of soft bodies can be restricted to one, two or possibly three. 

Any triangular facet belonging to a mesh used as the basis for a soft body must share its vertices with any adjacent facet. If not the soft body will rip apart along unshared vertices. As an example look at the triangular facets in the diagram below

![Shared Facets](/img/how_to/physics/share.jpg)

In Mesh A the positions have new indices for each of the facets 0, 1, 2 and 3, 4, 5. This happens, for instance, in a sphere and also when a mesh is converted to a flat shaded mesh. In this case a soft body would tear along the lines 0,2 and 3,4.

In Mesh B the positions share indices for each of the facets 0, 1, 2 and 0, 2, 3. The soft body will then hold together.

To force a mesh to share vertices use

```javascript
mesh.forceSharedVertices();
```
One benefit of this is to reduce the number of vertices in the mesh. Of course there may not be enough vertices in the mesh to make a properly soft body, in this case use

```javscript
mesh.increaseVertices(n);
```
where n is the number of extra vertices to be added to each side of a triangular facet. The number of facets is increased by a factor (n + 1)<sup>2</sup>. This method forces repeated vertex positions to share indices. The order to use the above two methods is always share then increase.

```javascript
mesh.forceSharedVertices();
mesh.increaseVertices(4);
```

**Note**
1. The position and rotation of the mesh must be set before its soft impostor is created;
2. A mesh used for a soft body cannot be a parent or child of another mesh.

## Aspects of Soft Bodies

As well as the usual optional parameters of mass, friction and restitution that can be set when creating a physics impostor there are a number peculiar to soft bodies. These come in two sets. 

Those that can be set during or after the impostor creation

* velocityIterations, positive integer, the maximum iterations used when solving for vertex velocities, default 20; 
* positionIterations, positive integer, the maximum iterations used when solving for vertex positions, default 20;
* stiffness, a float from 0 to 1, 0 very elastic, the distance between vertices is not constrained; 1 in-elastic, the distance between vertices is invariant, default 1;
* pressure, softbody only, cloth pressure is maintained at 0; positive number the higher it is the less likely the softbody will collapse onto itself, default 200. 

and those that can only be set during creation

* margin, the collision margin around the soft body, set it around about 1/100 of the lengths of the body when needed, useful particularly to stop a cloth passing through a body, default 0;
* damping, slows down the changes in vertex positions, useful if it looks like parts of the body are vibrating, start from around 0.01;
* fixedPoints, cloth only, can be 0, 1, 2, 4, 8 or sums of these; 0 no fixed points, 1 back left corner fixed, 2, back right corner, 4 front left corner, 8 front right corner and sum to fix more than one corner, default 0.

You may have to do a trial and error on the above parameters to get the effect you want.

## The Softbody Soft Body

Ensure that the mesh used has shared vertices using

```javascript
mesh.forceSharedVertices()
```

and has sufficient vertices using, for example,

```javascript
mesh.increaseVertices(4);
```

A softbody is constructed using

```javascript
var options = {
    mass: 15,
    friction: 0.2,
    restitution: 0.3,
    pressure: 3500,
    velocityIterations: 10, 
    positionIterations: 10,
    stiffness: 1,
    margin: 0.1;
    damping: 0.05
}

new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.SoftbodyImpostor, options, scene);
```

or possibly

```javascript
mesh.physicsImpostor =  new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.SoftbodyImpostor, { mass: 1, friction: 0.1}, scene);
mesh.physicsImpostor.velocityIterations = 10; 
mesh.physicsImpostor.positionIterations = 10;
mesh.physicsImpostor.stiffness = 0.9;
```
### Examples
* [Playground Example - Softbody](https://www.babylonjs-playground.com/#480ZBN#1)
* [Playground Example - Softbody and Rigid Sphere](https://www.babylonjs-playground.com/#480ZBN#2)

## The Cloth Soft Body

All cloth soft bodies are created from a ground mesh as this already two dimensional, has shared vertices and the number of vertices can be increased by setting the subdivisions used. 

The clothImpostor is created by, for example,

```javascript
cloth.physicsImpostor =  new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.ClothImpostor, {margin: 0.25, damping: 0.01}, scene);
cloth.physicsImpostor.velocityIterations = 10; 
cloth.physicsImpostor.positionIterations = 10;
cloth.physicsImpostor.stiffness = 1;
```

**Note** Using the `increaseVertices` method on a plane mesh will not provide a suitable mesh for a clothImpostor as the algorithm used to increase the vertices does not place them in the correct row by row order.

To see both sides of a cloth set `backFaceCulling = false` on the material to be applied to the ground mesh.

### Examples

* [Playground Example - Cloth Over Softbody](https://www.babylonjs-playground.com/#480ZBN#3)
* [Playground Example - Cloth Over Rigid Box](https://www.babylonjs-playground.com/#480ZBN#4)
* [Playground Example - Cloth Over Rigid Box with Fixed Corners](https://www.babylonjs-playground.com/#480ZBN#5)

### Fixed Points

![Cloth Points](/img/how_to/physics/cloth.jpg)

To fix corner points of the cloth so that those points do not move use the numbers (or their sum) as shown in the diagram above.

Set the fixedPoints parameter along with the others

```javascript
cloth.physicsImpostor =  new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.ClothImpostor, {margin, 0.2, fixedPoints: 3}, scene);
cloth.physicsImpostor.velocityIterations = 10; 
cloth.physicsImpostor.positionIterations = 10;
cloth.physicsImpostor.stiffness = 1;
```

* [Playground Example - Cloth Over Rigid Box Fixed at 1 + 2 = 3](https://www.babylonjs-playground.com/#480ZBN#6)

# Further Reading

## Basic - L1

[How To Use The Physics' Engines](/how_to/using_the_physics_engine)  
[How To Use Forces](/how_to/forces)  
[How to use Joints](/how_to/joints)  
[How To Use Pivots and Axes](/how_to/joint_pivots)  
[How To Create Compound Bodies](/how_to/compounds) 

## Mid Level - L2

[How To Use Advanced Features](/how_to/Using_Advanced_Physics_Features)
 
## More Advanced - L3

[How To Add Your Own Physics Engine](/how_to/Adding_Your_Own_Physics_Engine_Plugin_to_Babylon.js)