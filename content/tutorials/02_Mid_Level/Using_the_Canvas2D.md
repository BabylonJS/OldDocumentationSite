# Canvas2D Tutorial

Firstable, for an overview of the overall feature and its architecture you can right [this documentation](http://doc.babylonjs.com/overviews/Using_The_Canvas2D)

The Canvas2D is the answer to those who need to display 2D content above a 3D Scene (in game UI) or directly inside the Scene as a rectangle containing the Canvas' content.
This is a Small 2D Engine, based on babylon.js core features, giving you the opportunity to finally manage 2D content in your creations.

This feature was designed to be as fast as possible and yet flexible, future will tell if these target will be met.

## The main types
###### Canvas2D
The main class, is a rectangle that display 2D content. A Canvas can be represented in ScreenSpace (above the 3D Scene, coplanar to the screen) or WorldSpace, represented as a Rectangle inside the 3D Scene.
###### Group2D
Acts as a container, a new frame of reference that contains children primitives. Note that any kind of types involved in the Canvas2D feature can have children, it's not an exclusive feature of the Group2D.
In order to optimize performances, the content of a Group2D can be cached into a bitmap to save rendering time as the expense of texture memory holding the content.
###### Shape2D based types
A Shape2D is a parametric form which is drawn using brushes, one for the border and another one for the content (also called *fill*).
This version only contains the Rectangle2D Shape, future types will comes soon.
###### Sprite2D
To display a portion of a texture.
###### Text2D
To display some text.

## Enough talking, show me some code and some pixels!

### Hello World!
The simplest starting point would be created a ScreenSpace Canvas2D with a "Hello World!" text, here we go:
```javascript
var canvas = Canvas2D.CreateScreenSpace(this.scene, "ScreenCanvas", new Vector2(0, 0), new Size(300, 100), Canvas2D.CACHESTRATEGY_DONTCACHE);
canvas.backgroundFill = Canvas2D.GetSolidColorBrushFromHex("#C0C0C040");
canvas.backgroundRoundRadius = 50;
var text = Text2D.Create(canvas, "text", 80, 40, "20pt Arial", "Hello World!", new Color4(0.6, 1.0, 0.6, 1.0));
```
![img](http://i.imgur.com/V18lBvx.png)

The code is pretty self explanatory, but let's run through it:
1. Create the Canvas in Screen Space, at the position (0,0) width a size of 300 width and 100 height. The content won't be cached, hence redraw at every render of the scene.
2. Setup the background fill color with a solid brush and the round radius.
3. Create a text primitive with the position 80,40, Arial Font 20pt, and a green color.

### Let's spin it!
Let's get something a little bit more complicated:
```javascript
var canvas = Canvas2D.CreateScreenSpace(this.scene, "ScreenCanvas", new Vector2(0, 0), new Size(300, 300), Canvas2D.CACHESTRATEGY_DONTCACHE);
canvas.backgroundFill = Canvas2D.GetSolidColorBrushFromHex("#C0C0C040");
canvas.backgroundRoundRadius = 50;

var rect = Rectangle2D.Create(canvas, "rect", 150, 150, 100, 100, null, Canvas2D.GetGradientColorBrush(new Color4(0.9, 0.3, 0.9, 1), new Color4(1.0, 1.0, 1.0, 1)));
rect.borderThickness = 10;
rect.roundRadius = 10;

var insideRect = Rectangle2D.Create(rect, "insideRect", 0, 0, 40, 40, Canvas2D.GetSolidColorBrushFromHex("#0040F0FF"));
insideRect.roundRadius = 10;

setInterval(() => {
    rect.rotation += 0.01;
}, 10);
```
1. First part is mostly the same as the first example, but with a bigger size for the canvas.
2. Then we create a first Rectangle, its parent is the Canvas itself, it's called "rect" and is centered in the Canvas with the position 150,150. The default origin of the Rectanble is 0.5,0.5 which make it at the center of the primitive itself. Then we have a size of 100,100, no fill brush and a grandient border. Finally we change the border thickness and the round radius.
3. We create a second rectangle called "insideRect", which has for parent the first one ("rect"), the position is at the center of its parent (0,0) and with a size of 40,40, we use a solid color brush for the fill content and a custom round radius.
4. We create a timer that changes the rotation of "rect" every 10ms.

You will notice when you run the sample that both rectangle are rotating, which is as expected because "insideRect" is a children of "rect", hence inheriting of the animated transformation.

![Animated rectangles](http://i.imgur.com/dwSLO3b.png)

### World Space Canvas

Based on the previous example with the exception of how we create the canvas:
```javascript
var canvas = Canvas2D.CreateWorldSpace(this.scene, "ScreenCanvas", new Vector3(0, 0, 100), Quaternion.RotationYawPitchRoll(Math.PI / 4, Math.PI/4, 0), new Size(100, 100), 4, Mesh.DEFAULTSIDE, Canvas2D.CACHESTRATEGY_CANVAS);
canvas.backgroundFill = Canvas2D.GetSolidColorBrushFromHex("#C0C0C040");
canvas.backgroundRoundRadius = 50;

var rect = Rectangle2D.Create(canvas, "rect", 200, 200, 100, 100, null, Canvas2D.GetGradientColorBrush(new Color4(0.9, 0.3, 0.9, 1), new Color4(1.0, 1.0, 1.0, 1)));
rect.borderThickness = 10;
rect.roundRadius = 10;

var insideRect = Rectangle2D.Create(rect, "insideRect", 0, 0, 40, 40, Canvas2D.GetSolidColorBrushFromHex("#0040F0FF"));
insideRect.roundRadius = 10;

setInterval(() => {
    rect.rotation += 0.01;
}, 10);
```
This time we create a Canvas that will be present **in the scene** and not above, its position is 0,0,100, the rotation is built from yaw/pitch/roll construct, its scene size is 100,100 but the Canvas cached bitmap is scaled 4 times (to achieve better rendering quality).

The result is a rectangle inside the 3D, positioned and oriented as given, with its content showing and animated as expected.

![World Space Canvas](http://i.imgur.com/pr5yWwh.png)