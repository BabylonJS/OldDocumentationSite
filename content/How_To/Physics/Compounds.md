---
PG_TITLE: How To Create Compound Bodies
---

# The Skull as a Compound Body

![Skull](/img/how_to/physics/skull.jpg)
The skull is an interesting shape to try to compound and you can see it in all its magnificence [here](https://www.babylonjs-playground.com/#UKNERM#0)

It is roughly composed of a sphere for most of it with a box around the jaw area, with a bit of work involved to position the sphere and box as well as possible.

![Compound Skull](/img/how_to/physics/greenSkull.jpg)

## Ammo.js and Oimo.js

In these two engines the method to create a compound body for an irregular shaped mesh is to
1. Create an empty mesh to be used as a parent for the compound body;
2. Create a range of appropriately shaped standard meshes to fit over the irregular mesh;
3. Parent the standard meshes and the irregular mesh to the empty mesh;
4. Calculate or estimate the mass for each standard mesh;
5. Create physics imposters for each standard mesh with zero mass;
6. Create a physics imposter for the empty mesh, using the NoImposter property, with the total mass of all the standard meshes.

**Note** Step 3 MUST come before step 4.

(Should Ammo version give an Ammo error message on load click RUN)
* [Playground Example - Ammo - Skull as a Compound Body](https://www.babylonjs-playground.com/#492ZK0#1)
* [Playground Example - Oimo - Skull as a Compound Body](https://www.babylonjs-playground.com/#492ZK0#2)

## Cannon.js

This works differently. In this engine the method to create a compound body for an irregular shaped mesh is to

1. Create a range of appropriately shaped standard meshes to fit over the irregular mesh;
2. Choose one standard mesh and parent the other standard meshes and the irregular mesh to this mesh;
3. Calculate or estimate the mass for each standard mesh;
4. Create physics imposters for each standard mesh with the assumed mass;

**Note** Step 2 MUST come before step 4.

* [Playground Example - Cannon - Skull as a Compound Body](https://www.babylonjs-playground.com/#492ZK0#3)

# Further Reading

## Basic - L1

[How To Use The Physics' Engines](/how_to/using_the_physics_engine)  
[How To Use Forces](/how_to/forces)   
[How To Use Joints](/how_to/joints)   
[How To Use Pivots and Axes](/how_to/pivots)  

## Mid Level - L2

[How To Use Advanced Features](/how_to/Using_Advanced_Physics_Features)
 
## More Advanced - L3

[How To Add Your Own Physics Engine](/how_to/Adding_Your_Own_Physics_Engine_Plugin_to_Babylon.js)