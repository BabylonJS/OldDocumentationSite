# RandomEffector

Each Cloner can have a set of Effectors assigned. At this time of writing, there is only one Effector available, the RandomEffector.

So what does an Effector generally? It influences properties of the clones cloned by a Cloner. The RandomEffector can influence all transfomation properties (scale/rotation/position) with repeatable random values. Different random sequences can be achieved with a different **seed** value. The randomEffector can serve more than one cloner but it has ony one property to control the strength of the random values. Therefore each cloner has a property **sensitivity** to accept either all or only a portion of the cloners strength. 

## Example

In the following example a RandomEffector is created with a default seed value. After then the rotation values will be so adjusted, that the rotation random y-values are in the range 0-180, x and z are remaining unaffected. In the next step the RandomEffecor is added to the RadialCloner and finally the effectors strength is set to 1.

`let rc = new BABYLONX.RadialCloner([cube1, cube2], demo.scene, { count: 24, radius: 6 });`

`let reff = new BABYLONX.RandomEffector(); //default seed value` 

`reff.rotation = { x: 0, y: 180, z: 0 }; `

`rc.addEffector(reff,1);`

`reff.strength=1;`

In this state, everything is prepared to influence the clone's y-rotation with random values in the range 0-180 degrees. With the function `reff.updateClients()` the clones will be updated. 
