---
PG_TITLE: How To Create Compound Bodies
---

# The Skull as a Compound Body

![Skull](/img/how_to/physics/skull.jpg)
The skull is an interesting shape to try to compound and you can see it in all its magnificence [here](https://www.babylonjs-playground.com/#UKNERM#0)

It is roughly composed of a sphere for most of it with a box around the jaw area, with a bit of work involved to position the sphere and box as well as possible. The skull is compounded to these two covering meshes.

![Compound Skull](/img/how_to/physics/greenSkull.jpg)

## Compound to Empty Mesh

1. Create an empty mesh to be used as a parent for the compound body;
2. Create a range of appropriately shaped standard meshes to fit over the irregular mesh;
3. Parent the standard meshes and the irregular mesh to the empty mesh;
4. Calculate or estimate the mass for each standard mesh;
5. Create physics imposters for each standard mesh with zero mass;
6. Create a physics imposter for the empty mesh, using the NoImposter property, with the total mass of all the standard meshes.

**Note** Step 3 MUST come before step 4.

* [Playground Example 1 - Skull as a Compound Body](https://www.babylonjs-playground.com/#492ZK0#7)

## Compound to One of the Covering Meshes

1. Create a range of appropriately shaped standard meshes to fit over the irregular mesh;
2. Choose one standard mesh and parent the other standard meshes and the irregular mesh to this mesh;
3. Calculate or estimate the mass for each standard mesh;
4. Create physics imposters for each standard mesh with the assumed mass;

**Note** Step 2 MUST come before step 4.

* [Playground Example 2- Skull as a Compound Body](https://www.babylonjs-playground.com/#492ZK0#8)

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