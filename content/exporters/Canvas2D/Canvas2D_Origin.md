# Using the Origin of a Primitive

Each primitive have a position/rotation/scale properties that define their transformation into the canvas, relative to its parent.

Another property comes into play to add more flexibility: the `origin` property.

## How does it work

The `origin` property defines where is located the [0,0] coordinate (the origin) in the Primitive. This is expressed in a uniform way (the value for both X and Y axes are ranged between 0 and 1) relative to the bottom/left corner of the primitive bounding box.

Position and Rotation will be made relative to this origin, so it's important to understand how it works.

The default value is [0.5;0.5] which means the origin is at the center of the Primitive. Rotation will be made around this center and position will be relative from this center.

The actual position of the origin point is computed using the `actualSize` property of the Primitive, simply by multiplying the `origin` by `actualSize` then we subtract every coordinate for the Primitive by the resulting value. 

## A concrete example
A example worth a thousand words: take a look at [this one](http://babylonjs-playground.com/#DIF54#2)

In this example we create the following Canvas and Rectangle:
```javascript
var canvas2 = Canvas2D.CreateScreenSpace(scene, { cachingStrategy: Canvas2D.CACHESTRATEGY_DONTCACHE });
canvas2.backgroundFill = Canvas2D.GetSolidColorBrushFromHex("#C0808080");
canvas2.backgroundRoundRadius = 50;

var rect = Rectangle2D.Create(canvas2, { x: 200, y: 200, width: 100, height: 100, fill: Canvas2D.GetSolidColorBrushFromHex("#808080FF"), border: Canvas2D.GetSolidColorBrushFromHex("#FFFFFFFF"), borderThickness: 4, roundRadius: 5 });
```

The rectangle is positioned 200 pixel from the bottom/left corner of the Canvas in both width and height. As previously mentioned the origin by default is [0.5;0.5].

##### Center Origin
![Centered](http://i.imgur.com/iMMiAIF.png)

The origin is symbolized by the red dot, which  is at the center of the Rectangle and positioned at [200;200] from the bottom/left of the canvas.

Why is it relative from the bottom/left of the Canvas? Because by default the `origin` property of a Canvas is [0;0] and not [0.5;0.5].


##### Bottom/Left Origin [0;0]
![Bottom/Left](http://i.imgur.com/B3zw2XX.png)

##### Top/Left Origin [0;1]
![Top/Left](http://i.imgur.com/9NP6hqG.png)

##### Top/Right Origin [1;1]
![Top/Right](http://i.imgur.com/Irj6js9.png)

##### Bottom/Right Origin [0;1]
![Bottom/Right](http://i.imgur.com/bRo9wXq.png)

## Conclusion
The previous examples are showing the commonly used values, but nothing prevent you to set any kind of values for the [X;Y] origin point. Even bigger or lesser than 1, if it makes sense...