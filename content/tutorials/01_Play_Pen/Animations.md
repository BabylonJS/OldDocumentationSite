---
ID_PAGE: 22081
PG_TITLE: 07. Animations
---
# Animation
Your scene is beginning to look great, but it is very static. To put dynamics in it, we are going to learn how to tell your computer to move your meshes in any way you choose.

![Elements](http://www.babylonjs.com/tutorials/07%20-%20Animation/07.png)

_Final result_

There are two primary ways of doing animations in your scene. The first is to define a collection of keys and defining your object's situation at each key. The second way is for more complex animations, when you change animation code at run time.

## Basic animation

The animation is based on objects called Animation (!!). An Animation is defined by various properties and a collection of keys. Every key represents the value of the Animation at that key's given time.

To achieve today’s animated scene, we begin by creating our environment:

```javascript
function createScene() {
  //Here... your basic scene as before: [scene, light, camera]
  
  //Create a box
  var box1 = BABYLON.Mesh.CreateBox("Box1", 10.0, scene);
  box1.position.x = -20;
```

Our goal: move this “box1”. First, create our Animation object:

```javascript
var animationBox = new BABYLON.Animation("myAnimation", "scaling.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
```

Much information is in the parameters:

**Parameter 1** - Name of this animation, nothing more.

**Parameter 2** - The property concerned. This can be any mesh property, depending upon what you want to change. Here we want to scale an object on the X axis, so it will be “scaling.x”.

**Parameter 3** - Frames per second requested: highest FPS possible in this animation.

**Parameter 4** - Type of change. Here you decide and enter what kind of value will be modified: is it a float (e.g. a translation), a vector (e.g. a direction), or a quaternion. Exact values are:

* ```BABYLON.Animation.ANIMATIONTYPE_FLOAT```
* ```BABYLON.Animation.ANIMATIONTYPE_VECTOR2```
* ```BABYLON.Animation.ANIMATIONTYPE_VECTOR3```
* ```BABYLON.Animation.ANIMATIONTYPE_QUATERNION```
* ```BABYLON.Animation.ANIMATIONTYPE_MATRIX```
* ```BABYLON.Animation.ANIMATIONTYPE_COLOR3```

**Parameter 5** - Finally, you have to decide and enter the type of behavior this animation will take at its upper limit (e.g. will it continue on, will it begin again, will it stop at the last key value, etc.):

* Use previous values and increment it: ```BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE```
* Restart from initial value: ```BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE```
* Keep their final value: ```BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT```

Now that we have our Animation object, it is time to say how those values will be modified. In our case, we want to scale our box, but not in a linear way: it must be faster when it became larger, and slower when it became thinner. So:

```javascript
// An array with all animation keys
var keys = []; 

//At the animation key 0, the value of scaling is "1"
  keys.push({
    frame: 0,
    value: 1
  });

  //At the animation key 20, the value of scaling is "0.2"
  keys.push({
    frame: 20,
    value: 0.2
  });

  //At the animation key 100, the value of scaling is "1"
  keys.push({
    frame: 100,
    value: 1
  });
```

Next, two important steps:
* Adding the animation array to the animation object:

```javascript
animationBox.setKeys(keys);
```
* Link this animation to our box:

```javascript
box1.animations.push(animationBox);
```

Finally, you can launch your animation in one line of code, at any time in your application:

```javascript
scene.beginAnimation(box1, 0, 100, true);
```

**Parameters for scene.beginAnimation:**

 | Name | Type | Description
---|---|---|---
 | target | any | The target
 | from | number | The fps starting frame
 | to | number | The fps ending frame
optional | loop | boolean | If true, the animation will loop (dependent upon BABYLON.Animation.ANIMATIONLOOPMODE)
optional | speedRatio | number | default : 1. The speed ratio of this animation
optional | onAnimationEnd | () => void | The function triggered on the end of the animation (also dependent upon ANIMATIONLOOPMODE)
optional | animatable | [Animatable](http://doc.babylonjs.com/classes/Animatable) | An optional specific animation
---

This function returns a ```BABYLON.Animatable``` object that you can use to get access to individual animations (for instance using ```getAnimationByTargetProperty``` function).

The ```BABYLON.Animatable``` object also supports the following functions:
- ```pause()```
- ```restart()```
- ```stop()```
- ```reset()```

These commands will apply to every animation object contained in the Animatable's ._animations array. You can also get access to current running ```BABYLON.Animatable``` objects by using ```scene.getAnimatableByTarget()``` providing the target object.

And you are done! We have now completed an Animation for box1.scaling.x. Maybe now you want to build an Animation for box1.scaling.y, and really get box1 moving playfully. Don't hesitate to combine many animations for one mesh object... by creating more Animations and pushing them into the mesh's _animation_ property. ;)

## Controlling animations

Each Animation has a property called ```currentFrame``` that indicates the current animation key.

For advanced keyframe animation, you can also define the functions used to interpolate (transition) between keys. By default these functions are the following:

```javascript
BABYLON.Animation.prototype.floatInterpolateFunction = function (startValue, endValue, gradient) {
  return startValue + (endValue - startValue) * gradient;
};

BABYLON.Animation.prototype.quaternionInterpolateFunction = function (startValue, endValue, gradient) {
  return BABYLON.Quaternion.Slerp(startValue, endValue, gradient);
};

BABYLON.Animation.prototype.vector3InterpolateFunction = function (startValue, endValue, gradient) {
  return BABYLON.Vector3.Lerp(startValue, endValue, gradient);
};
```

## Helper function

You can use an extended function to create a quick animation:

```Javascript
Animation.CreateAndStartAnimation = function(name, mesh, tartgetProperty, framePerSecond, totalFrame, from, to, loopMode);
```

To be able to use this function, you need to know that :
- Your animation will have predefined key frames (Only 2 keyframes are generated : **Start** and **End**)
- The animation works only on **AbstractMesh** objects.
- The animation is starting right after the method call.

Here is a straightforward sample using the **CreateAndStartAnimation()** function :

```Javascript
BABYLON.Animation.CreateAndStartAnimation('boxscale', box1, 'scaling.x', 30, 120, 1.0, 1.5);
```
Fast and easy. :)

## Animation Blending

As of Babylon.js 2.3+, you can  start an animation with *enableBlending* = true. This blended animation will interpolate FROM the current object's state. This would be handy for user-controlled walking characters, or reacting to value changes from an input device. 

In the playground demo below, every time you click on the FPS marker, the new animation is blended with the box's current position:

http://www.babylonjs-playground.com/#2BLI9T#2

Although this playground is blending the same animation into itself, more often, a different animation will be blended-into the original, such as when a walking character changes to running.

## Easing functions

You can add some behaviors to your animations, using easing functions. 
If you want more information about easing functions, here are some useful links : 
- [MSDN Easing functions documentation](http://msdn.microsoft.com/en-us/library/ee308751.aspx)
- [Easing functions cheat sheet](http://easings.net/fr)

All those easing functions are implemented in BABYLON allowing you to apply custom mathematical formulas to your animations.

Here are the predefined easing functions you can use : 
- ```BABYLON.CircleEase()```
- ```BABYLON.BackEase(amplitude)```
- ```BABYLON.BounceEase(bounces, bounciness)```
- ```BABYLON.CubicEase()```
- ```BABYLON.ElasticEase(oscillations, springiness)```
- ```BABYLON.ExponentialEase(exponent)```
- ```BABYLON.PowerEase(power)```
- ```BABYLON.QuadraticEase()```
- ```BABYLON.QuarticEase()```
- ```BABYLON.QuinticEase()```
- ```BABYLON.SineEase()```

You can use the **EasingMode** property to alter how the easing function behaves, that is, change how the animation interpolates. 
There are three possible values you can give for EasingMode: 
- ```BABYLON.EasingFunction.EASINGMODE_EASEIN``` : Interpolation follows the mathematical formula associated with the easing function.
- ```BABYLON.EasingFunction.EASINGMODE_EASEOUT``` : Interpolation follows 100% interpolation minus the output of the formula associated with the easing function.
- ```BABYLON.EasingFunction.EASINGMODE_EASEINOUT``` : Interpolation uses EaseIn for the first half of the animation and EaseOut for the second half.

Here is a straightforward sample to animate a torus within a ```CirleEase``` easing function :

```Javascript
//Create a Vector3 animation at 30 FPS
var animationTorus = new BABYLON.Animation("torusEasingAnimation", "position", 30, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

// the torus destination position
var nextPos = torus.position.add(new BABYLON.Vector3(-80, 0, 0));

// Animation keys
var keysTorus = [];
keysTorus.push({ frame: 0, value: torus.position });
keysTorus.push({ frame: 120, value: nextPos });
animationTorus.setKeys(keysTorus);

// Creating an easing function
var easingFunction = new BABYLON.CircleEase();

// For each easing function, you can choose beetween EASEIN (default), EASEOUT, EASEINOUT
easingFunction.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);

// Adding the easing function to the animation
animationTorus.setEasingFunction(easingFunction);

// Adding animation to my torus animations collection
torus.animations.push(animationTorus);

//Finally, launch animations on torus, from key 0 to key 120 with loop activated
scene.beginAnimation(torus, 0, 120, true);
```

You can play with bezier curve algorithm too, using the **BezierCurveEase(x1, y1, x2, y2)** function. 
For purpose, here is a good reference to create your curve algorithm : [http://cubic-bezier.com](http://cubic-bezier.com)

Here is a pretty cool implementation using the bezier curve algorithm :

![](http://www.dotmim.com/sitefiles/babylon/bezier.jpg)

```Javascript
var bezierEase = new BABYLON.BezierCurveEase(0.32, -0.73, 0.69, 1.59);
```

Finally, you can extend the **EasingFunction** base function to create your own easing function, like this :

```Javascript
var FunnyEase = (function (_super) {
  __extends(FunnyEase, _super);
  function FunnyEase() {
    _super.apply(this, arguments);
  ;}
  FunnyEase.prototype.easeInCore = function (gradient) {
    // Here is the core method you should change to make your own Easing Function
    // Gradient is the percent of value change
    return Math.pow(Math.pow(gradient, 4), gradient);

  };
  return FunnyEase;
})(BABYLON.EasingFunction);
```
You will find a complete demonstration of the easing functions behaviors, in the playground : [**Easing function playground**](http://babylonjs-playground.azurewebsites.net/?20)


## Complex animation

The complex animation lets you choose everything at each frame of the animation (each tick). The code computed at run time must be located in this function:
```javascript
scene.registerBeforeRender(function () {
  //Your code here
});
```

This function can be very useful for complex animation like games, where characters have to move depending on many parameters.

Don’t hesitate to combine all those types of animations. If well done, it’s very powerful.

Don't forget to [visit our API documentation](http://doc.babylonjs.com/classes/) in order to learn more about the [**Babylon.js Animation**](http://doc.babylonjs.com/classes/Animation) and [**Babylon.js Animatable**](http://doc.babylonjs.com/classes/Animatable) classes.

## Attach events to animations

From Babylon.js version 2.3, you can attach [animation events](http://doc.babylonjs.com/classes/AnimationEvent) to specific frames on an animation.

An event is a function that will be called at a given frame.

It's very simple to do this:
```javascript
// 3 parameters to create an event:
// - The frame at which the event will be triggered
// - The action to execute
// - A boolean if the event should execute only once (false by default)
var event1 = new BABYLON.AnimationEvent(50, function() { console.log("Yeah!"); }, true);
// Attach your event to your animation
animation.addEvent(event1);
```

And that's it!

**Next step**

Your scene is now becoming dynamic, and all your meshes can move in all directions! Feel free to try different animations on different objects, then come back and learn all about [**Sprites**](http://doc.babylonjs.com/tutorials/Sprites).
