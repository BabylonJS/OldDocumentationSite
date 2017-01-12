# Canvas2D Tutorial

First, for an overview of the overall feature and its architecture you can read [this documentation](http://doc.babylonjs.com/overviews/Canvas2D_Overview_Architecture)

The overview [Home Page](http://doc.babylonjs.com/overviews/Canvas2D_Home) is also a good place to learn the many different concepts.

The Canvas2D is the answer to those who need to display 2D content above a 3D Scene (in game UI), which is called a ScreenSpace Canvas or directly inside the Scene as a rectangle containing the Canvas' content, which is called World Space Canvas.

This is a Small 2D Engine, based on babylon.js core features, giving you the opportunity to finally manage 2D content in your creations.

This feature was designed to be as fast as possible and yet flexible, future will tell if these target will be met, but so far we are on the right tracks! :)

## The main types
###### Canvas2D
The main class, is a rectangle that display 2D content. 

A Canvas can be represented in:

 - ScreenSpace (above the 3D Scene, coplanar to the screen), then the `ScreenSpaceCanvas2D` class is used.
 - WorldSpace, represented as a Rectangle inside the 3D Scene, the `WorldSpaceCanvas2D` class is used.

Both of these classes are simple wrappers to ease the construction time, but all the logic is implemented in the `Canvas2D` class, so we'll often refer to this class instead of the two others.

###### Group2D
Acts as a container, a new frame of reference that contains children primitives. Note that any kind of types involved in the Canvas2D feature can have children, it's not an exclusive feature of the Group2D.
In order to optimize performances, the content of a Group2D can be cached into a bitmap to save rendering time as the expense of texture memory holding the content.

###### Shape2D based types
A Shape2D is a parametric form which is drawn using brushes, one for the border and another one for the content (also called *fill*).
There are three types of Shapes so far: Rectangle2D, Ellipse2D and Lines2D.

###### Sprite2D
To display a portion of a texture.

###### Text2D
To display some text.

## Enough talking, show me some code and some pixels!

### Hello World!
The simplest starting point would be created a ScreenSpace Canvas2D with a "Hello World!" text, here we go:
```javascript
var canvas = new BABYLON.ScreenSpaceCanvas2D(scene, {
    id: "ScreenCanvas",
    size: new BABYLON.Size(300, 100),
    backgroundFill: "#4040408F",
    backgroundRoundRadius: 50,
    children: [
        new BABYLON.Text2D("Hello World!", {
            id: "text",
            marginAlignment: "h: center, v:center",
            fontName: "20pt Arial",
        })
    ]
});
```
See it live in this [playground](http://babylonjs-playground.com/#2AVSFH#35)

The code is pretty self explanatory, but let's run through it:

1. First you notice that to create several primitives a simple pattern can be used: 
    - you invoke the constructor of the first primitive to create (most likely the Canvas, but can be another type)
    - then use the `children` settings array to create children primitive in a cascading fashion.
2. We use the `ScreenSpaceCanvas2D` type and create an instance, the default position of (0,0) will be used, with a width of 300 and a height of 100. The content won't be cached, hence redraw at every render of the scene as the default caching strategy is `CACHESTRATEGY_DONTCACHE`.
3. Setup the background fill color with a solid brush and alse the round radius with 50.
4. Then we create in `children` array a `Text2D` primitive which will be centered both horizontally and vertically to its parent (the Canvas), with a font `20pt Arial`, and the default color (white).

### Let's spin it!
Let's get something a little bit more complicated:
```javascript
var canvas = new BABYLON.ScreenSpaceCanvas2D(scene, 
    { 
        id: "ScreenCanvas", size: new BABYLON.Size(500, 500), 
        backgroundFill: "#C0C0C040", backgroundRoundRadius: 50 
    });

var rect = new BABYLON.Rectangle2D({
    id: "mainRect", parent: canvas, x: 200, y: 200, width: 100, height: 100, 
    fill: "#404080FF", border: "#A040A0D0, #FFFFFFFF", borderThickness: 10, 
    roundRadius: 10, 
    children: 
    [
        new BABYLON.Rectangle2D(
        { 
            id: "insideRect", marginAlignment: "v: center, h: center", 
            width: 40, height: 40, fill: "#FAFF75FF", roundRadius: 10 
        })
    ]});

var timerId = setInterval(function () {
    if (rect.isDisposed) {
        clearInterval(timerId);
        return;
    }
    rect.rotation += 0.003;
}, 10);
```

See it live in this [playground](http://babylonjs-playground.com/#272WI1#6)

Explanations:

1. First part is mostly the same as the first example, but with a bigger size for the canvas.
2. Then we create a first Rectangle, notice that we use the `parent` settings to link it to the Canvas itself, it's called "mainRect" and is centered in the Canvas with the position 200,200 (position is **always** from the bottom/left corner of the primitive relative to the bottom/left corner of its parent). 
3. The default origin of the Rectangle is 0.5,0.5 which make it at the center of the primitive itself. This will make rotation around the center of the primitive itself.
4. Then we have a size of 100,100, a solid brush for fill and a gradient one for border. Finally we change the border thickness and the round radius.
5. We create a second rectangle called "insideRect" as a child of "mainRect" using the `children` array. We use alignment to position it at the center of its parent and with a size of 40,40. We use a solid color brush for the fill content and a custom round radius.
6. We create a timer that changes the rotation of "rect" every 10ms.

You will notice when you run the sample that both rectangles are rotating, which is as expected because "insideRect" is a children of "mainRect", hence inheriting of the animated transformation.

### World Space Canvas

Now let's try the second type of Canvas: the World Space one, as opposed to the Screen Space one, World Space Canvas are part of the 3D Scene, they're displayed in a rectangle, as a regular scene node.

```javascript
var canvas = new BABYLON.WorldSpaceCanvas2D(scene, new BABYLON.Size(100, 100), {
    id: "WorldSpaceCanvas",
    worldPosition: new BABYLON.Vector3(0, 0, 0),
    worldRotation: BABYLON.Quaternion.RotationYawPitchRoll(Math.PI / 4, Math.PI / 4, 0),
    renderScaleFactor: 8,
    enableInteraction: true,
    backgroundFill: "#C0C0C040",
    backgroundRoundRadius: 80,
    children: [
        new BABYLON.Text2D("World Space Canvas", { fontName: "30pt Arial", marginAlignment: "h: center, v: bottom" })
    ]
});
	
// Create spinning rectangles
var rect = new BABYLON.Rectangle2D(
	{ parent: canvas, x: 300, y: 300, width: 200, height: 200, fill: null, 
		border: BABYLON.Canvas2D.GetGradientColorBrush(new BABYLON.Color4(0.9, 0.3, 0.9, 1), new BABYLON.Color4(1.0, 1.0, 1.0, 1)), 
		borderThickness: 20,
		children:
		[
	        new BABYLON.Rectangle2D(
			{ parent: rect, width: 80, height: 80, marginAlignment: "h: center, v: center", 
			fill: "#0040F0FF", roundRadius: 20 })
		]});
		 
// Create the "click me!" button
var buttonRect = new BABYLON.Rectangle2D(
	{ parent: canvas, id: "button", x: 100, y: 100, width: 200, height: 80, fill: "#40C040FF", 
		roundRadius: 10, 
		children: 
		[
			new BABYLON.Text2D("Click Me!", { fontName: "30pt Arial", marginAlignment: "h: center, v: center" })
		]});
		  
// Create the "Awesome!" button
var button2Rect = new BABYLON.Rectangle2D(
	{ parent: canvas, id: "button2", x: 420, y: 100, width: 200, height: 80, fill: "#4040C0FF", 
		roundRadius: 10, isVisible: false, 
		children: 
		[
			new BABYLON.Text2D("Awesome!", { fontName: "30pt Arial", marginAlignment: "h: center, v: center" })
		]});

// Add an observable to the "Click me!" button, watch for click the display/hide the second button
buttonRect.pointerEventObservable.add(function (d, s) {
    button2Rect.levelVisible = !button2Rect.levelVisible;
}, BABYLON.PrimitivePointerInfo.PointerUp);

// Animate the two rectangles	
var timerId = setInterval(function () {
    if (rect.isDisposed) {
        clearInterval(timerId);
        return;
    }
    rect.rotation += 0.01;
}, 10);

```

See it live in this [playground](http://babylonjs-playground.com/#1BKDEO#22)

This time we create a Canvas that will be present **in the scene** and not above, its position is 0,0,0, the rotation is built from yaw/pitch/roll construct, its scene size is 100,100 but the Canvas cached bitmap is scaled 8 times (to achieve a much better rendering quality).

We also create two buttons and add an observable on the first one to display/hide the second one.

#### Accessing the 3D Scene Node of World Space Canvas
The `canvas` object is **not** a Scene node, to access the actual SceneNode that positions the Canvas and renders it you have to access the `worldSpaceCanvasNode` property of the `Canvas2D` class. This will return you a `Node` based instance that you can manipulate to change how the Canvas behave in the 3D Scene.

## More playground

 Just go to the Canvas2D [Home Page](http://doc.babylonjs.com/overviews/Canvas2D_Home). All playgrounds are referenced at the end of the document.

