# Raycasts #

The rays are like sunrays.
It's used to check collision or interesection in the scene between meshes and thin line.

In the previous tutorial, we used it to select meshes with the mouse (a ray goes from camera to mouse position in 3D),
using the function scene.pick(scene.pointerX, scene.pointerY) : 
http://doc.babylonjs.com/tutorials/picking_collisions

But here we will see that we can throw ray from any point and in any direction. 
For example in a shooting game at 3rd person view : collisions between our bullets and obstacles.

**Documentation of classes :**

http://doc.babylonjs.com/classes/2.5/ray
You have first to create a ray.

http://doc.babylonjs.com/classes/2.5/scene
The method scene.pickWithRay() throws a ray in your scene to pick a mesh.

http://doc.babylonjs.com/classes/2.5/pickinginfo
And get the picking info.


______

## Detect the first mesh touched by the ray ##

http://www.babylonjs-playground.com/#KNE0O#4

![Raycast simple](/img/tutorials/raycast01.jpg)

In all our playgrounds, we will imagine that our character is the main box at the center.
It will shoot laser beams continually forward and detect which enemy (other boxes) is hitten.
So with the mouse, you don't need to click but move to turn the box with this trigonometry function mousemovef (l34). 
A ray requires when its created : an origin, a direction and a length. 

First, we set *box.isPickable* to false to avoid the ray touching the box from the inside (l16).
Because we set the starting point (origin) of the ray in the center of the box.

The most important part is to get the good directional vector (l57) :
		
```
var forward = new BABYLON.Vector3(0,0,1);		
	forward = vecToLocal(forward, box);
	
	var direction = forward.subtract(origin);
	direction = BABYLON.Vector3.Normalize(direction);
```
		
We want the forward vector relative to the box space and orientation. 
Then, to get the direction, we subtract it from the origin, the box position.
The function vecToLocal is designed to transform a position from a mesh point of view by multiplicating a vector by the mesh matrix.

Then, we create the ray with all elements given and a length of 100 for example (l65) : 
*var ray = new BABYLON.Ray(origin, direction, length);*

Finally, we get the hit point of the ray if it touches a mesh (l68) :
*var hit = scene.pickWithRay(ray);*

And if a mesh is hitten, we do what we want with the picking info like getting the mesh name, the position of the point etc...
Here we change its size because it's funnier ! 

---

**You're not forced to set box.isPickable to false**, if you need later to check rays intersection on this box for example. 
You can set the origin point of the vector in front of the box, the direction a little further and the length that you want (l55) :

http://www.babylonjs-playground.com/#KNE0O#17


-----

## Predicate function ##

It is a filter to choose which meshes will be selectable :

http://www.babylonjs-playground.com/#KNE0O#18

![Raycast predicate](/img/tutorials/raycast02.jpg)

I added a new function predicate (l54) :

  ```
  function predicate(mesh){
        if (mesh == box2 || mesh == box){
            return false;
        }
        return true;
    }
```

and in parameter here :  
*scene.pickWithRay(ray, predicate);*

The isPickable false argument becomes irrelevant so we have to avoid box.
We avoid also box2 for testing and allow the rest (box3 and box4 by default).

And the result is, only box3, the second blue one behind, and box4 will grow.
So it works fine like if box2 was transparent for the ray !  

---

There is one other optional argument to the method pickWithRay.
It's the boolean **fastCheck** (false by default).
True will return the first mesh that intersects with the ray (in the order of the meshes array), and not the closest mesh to the ray's starting point.


-----

## Multi pick ## 

We can use *scene.multiPickWithRay* if we don't want that the ray stops at the first obstacle : 

http://www.babylonjs-playground.com/#KNE0O#19

![Raycast multipick](/img/tutorials/raycast02.jpg)

The picking result will be an array (l68).
So we do a loop to change all meshes hitten and you can see that the two blue boxes size change. 
It's like a strong bullet ! 

---

An other method is to use directly the **Ray class**.

To change the ray to a local space :
*Ray.Transform(ray, matrix) → Ray*

Checking intersection :
*Ray.intersectsMesh(mesh, fastCheck) → PickingInfo*


-----

## Debugging ## 

It could be tough to understand where a ray starts and is its direction. To help you debug you can then use the RayHelper.

You can either use a static function to create and show one:

```
BABYLON.RayHelper.CreateAndShow(ray, scene, new BABYLON.Color3(1, 1, 0.1));
```

or you can use a more detailled version:

```
var rayHelper = new BABYLON.RayHelper(ray);
rayHelper.show(scene);
```

The helper can also be attached to a mesh to track its direction:
http://www.babylonjs-playground.com/#ZHDBJ#37

_____

**Topics related :**

http://www.html5gamedevs.com/topic/26503-scenepickwithray-blues/

http://www.html5gamedevs.com/topic/26602-worldlocalray/

http://www.html5gamedevs.com/topic/7599-convert-global-coordinates-to-local-coordinates/
