# Canvas2D Tutorial

First, for an overview of the overall feature and its architecture you can right [this documentation](http://doc.babylonjs.com/overviews/Using_The_Canvas2D)

The Canvas2D is the answer to those who need to display 2D content above a 3D Scene (in game UI), which is called a ScreenSpace Canvas or directly inside the Scene as a rectangle containing the Canvas' content, which is called World Space Canvas.

This is a Small 2D Engine, based on babylon.js core features, giving you the opportunity to finally manage 2D content in your creations.

This feature was designed to be as fast as possible and yet flexible, future will tell if these target will be met, but so far we are on the right tracks! :)

## The main types
###### Canvas2D
The main class, is a rectangle that display 2D content. A Canvas can be represented in ScreenSpace (above the 3D Scene, coplanar to the screen) or WorldSpace, represented as a Rectangle inside the 3D Scene.
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
var canvas2 = Canvas2D.CreateScreenSpace(scene, { size: new Size(300, 100), cachingStrategy: Canvas2D.CACHESTRATEGY_DONTCACHE });
canvas2.backgroundFill = Canvas2D.GetSolidColorBrushFromHex("#C0C0C040");
canvas2.backgroundRoundRadius = 50;
var text = Text2D.Create(canvas2, "Hello World!", { x: 80, y: 40, fontName: "20pt Arial", defaultFontColor: new Color4(0.6, 1.0, 0.6, 1.0) });
text.origin = Vector2.Zero();
```
See it live in this [playground](http://babylonjs-playground.com/#2AVSFH#9)

The code is pretty self explanatory, but let's run through it:

1. Create the Canvas in Screen Space, at the default position of (0,0) width a size of 300 width and 100 height. The content won't be cached, hence redraw at every render of the scene.
2. Setup the background fill color with a solid brush and the round radius.
3. Create a text primitive with the position 80,40, Arial Font 20pt, and a green color.

### Let's spin it!
Let's get something a little bit more complicated:
```javascript
var canvas = Canvas2D.CreateScreenSpace(scene, { cachingStrategy: Canvas2D.CACHESTRATEGY_DONTCACHE, size: new Size(300, 300) });
canvas.backgroundFill = Canvas2D.GetSolidColorBrushFromHex("#C0C0C040");
canvas.backgroundRoundRadius = 50;

var rect = Rectangle2D.Create(canvas, { x: 150, y: 150, width: 100, height: 100, fill: null, border: Canvas2D.GetGradientColorBrush(new Color4(0.9, 0.3, 0.9, 1), new Color4(1.0, 1.0, 1.0, 1)) });
rect.borderThickness = 10;
rect.roundRadius = 0;

var insideRect = Rectangle2D.Create(rect, { width: 40, height: 40, fill: Canvas2D.GetSolidColorBrushFromHex("#0040F0FF") });
insideRect.roundRadius = 10;

var timerId = setInterval(function () {
    if (rect.isDisposed) {
        clearInterval(timerId);
        return;
    }
    rect.rotation += 0.01;
}, 10);
```

See it live in this [playground](http://babylonjs-playground.com/#272WI1#2)

Explanations:

1. First part is mostly the same as the first example, but with a bigger size for the canvas.
2. Then we create a first Rectangle, its parent is the Canvas itself, it's called "rect" and is centered in the Canvas with the position 150,150. The default origin of the Rectangle is 0.5,0.5 which make it at the center of the primitive itself. Then we have a size of 100,100, no fill brush and a gradient border. Finally we change the border thickness and the round radius.
3. We create a second rectangle called "insideRect", which has for parent the first one ("rect"), the position is at the center of its parent (0,0) and with a size of 40,40, we use a solid color brush for the fill content and a custom round radius.
4. We create a timer that changes the rotation of "rect" every 10ms.

You will notice when you run the sample that both rectangle are rotating, which is as expected because "insideRect" is a children of "rect", hence inheriting of the animated transformation.

### World Space Canvas

Now let's try the second type of Canvas: the World Space one, as opposed to the Screen Space one, World Space Canvas are part of the 3D Scene, they're displayed in a rectangle, as a regular scene node.

Based on the previous example with the exception of how we create the canvas:
```javascript
var canvas = Canvas2D.CreateWorldSpace(scene, new Size(100, 100), { position: new Vector3(0, 0, 0), rotation: Quaternion.RotationYawPitchRoll(Math.PI / 4, Math.PI / 4, 0), renderScaleFactor: 4, });
canvas.backgroundFill = Canvas2D.GetSolidColorBrushFromHex("#C0C0C040");
canvas.backgroundRoundRadius = 50;

var rect = Rectangle2D.Create(canvas, { x: 200, y: 200, width: 100, height: 100, fill: null, border: Canvas2D.GetGradientColorBrush(new Color4(0.9, 0.3, 0.9, 1), new Color4(1.0, 1.0, 1.0, 1)) });
rect.borderThickness = 10;
rect.roundRadius = 0;

Text2D.Create(canvas, "World Space Canvas", { x: 200, y: 10 });

var insideRect = Rectangle2D.Create(rect, { width: 40, height: 40, fill: Canvas2D.GetSolidColorBrushFromHex("#0040F0FF") });
insideRect.roundRadius = 10;

var timerId = setInterval(function () {
    if (rect.isDisposed) {
        clearInterval(timerId);
        return;
    }
    rect.rotation += 0.01;
}, 10);
```

See it live in this [playground](http://babylonjs-playground.com/#1BKDEO#7)

This time we create a Canvas that will be present **in the scene** and not above, its position is 0,0,0, the rotation is built from yaw/pitch/roll construct, its scene size is 100,100 but the Canvas cached bitmap is scaled 4 times (to achieve better rendering quality).

#### Accessing the 3D Scene Node of of World Space Canvas
The `canvas` object is **not** a Scene node, to access the actual SceneNode that positions the Canvas and renders it you have to access the `worldSpaceCanvasNode` property of the `Canvas2D` class. This will return you a `Mesh` based instance that you can manipulate to change how the Canvas behave in the 3D Scene.

The result is a rectangle inside the 3D, positioned and oriented as given, with its content showing and animated as expected.

## More playground

 Just go to the Canvas2D [Home Page](http://doc.babylonjs.com/overviews/Canvas2D_Home). All playgrounds are referenced at the end of the document.

