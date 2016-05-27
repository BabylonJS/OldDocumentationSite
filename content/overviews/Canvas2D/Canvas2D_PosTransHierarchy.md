# About positioning, transformation and hierarchy

## It's all relative!

Coordinates are always relative to something, in our case the starting point of reference is the **bottom/left** corner of the rendering viewport.

It will never be said enough: *bottom*, not *top*: **bottom**.

Why? Because the Canvas2D feature is 100% WebGL based, in WebGL the [Viewport](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/viewport) origin it at the bottom/left corner. So in order to make things coherent and working smoothly, we follow the same rule: origin is at the **bottom/left** corner of the viewport! (I think now you've got it!)

When you create a Canvas2D object, its `x` and `y` properties will define the position of the Canvas' `origin` from the bottom/left corner of the Viewport.

One small, but important detail to notice is the `origin` concept. Each Primitive (also the Canvas2D, because it's a Primitive) has an `origin` property which defines where in placed the [0;0] coordinate in the primitive.

To learn more about the `origin` property, head to this [page](http://doc.babylonjs.com/overviews/Canvas2D_Origin).

## Positioning

Consider the following code:

```javascript
var canvas2 = Canvas2D.CreateScreenSpace(scene, { id: "ScreenCanvas", pos: new Vector2(20, 30), size: new Size(300, 300), cachingStrategy: Canvas2D.CACHESTRATEGY_DONTCACHE });
canvas2.backgroundFill = Canvas2D.GetSolidColorBrushFromHex("#C0808080");
canvas2.backgroundRoundRadius = 50;
var rect = Rectangle2D.Create(canvas2, { x: 200, y: 200, width: 100, height: 100, fill: Canvas2D.GetSolidColorBrushFromHex("#808080FF"), border: Canvas2D.GetSolidColorBrushFromHex("#FFFFFFFF"), borderThickness: 4, roundRadius: 5 });
var center = Ellipse2D.Create(canvas2, { width: 16, height: 16, fill: Canvas2D.GetSolidColorBrushFromHex("#C04040FF") });
```

![Canvas](http://i.imgur.com/pWSUkKd.png)

The blue portion is the viewport boundaries, we created the Canvas with a position of [20;30], as the Canvas' origin is [0;0] (bottom/left corner) by default these coordinates are relative from the bottom/left corner of the Canvas.

The green lines/text on the bottom/left of the picture show the Canvas' `position` property. The cut  Red dot is the Canvas origin, it's cut because only the part inside the Canvas is shown, the rest is clipped. The yellow lines are showing the Canvas' boundaries. 

The `rect` object was created with a position of [200;200], the parent of `rect` is the canvas, so the position is relative to the canvas' `origin` (the cut red dot at the bottom/left). The position of the rect is also relative to the rect's origin, which is the red dot at its center, because by default Primitive have an origin of [0.5;0.5] which correspond to their center. You can see the green lines that show the 200 distances in both X and Y toward the Canvas' origin.

If you were to create another Primitive having for parent the `rect` Primitive, the coordinates of this new Primitive will be relative to the `rect`'s origin, which is the red dot at its center.

The position of a primitive is always defined from the primitive's origin to the origin of its parent.

## Transforming

The transformation of a Primitive is defined by three properties:

 - `position`, a `Vector2` what we talked just above.
 - `rotation`, a `rotation` in radian along the Z-axis.
 - `scale`, a `number` which represent an uniform Scale along the X and Y axes.

These three properties are relative to the Primitive's parent's ones, which means if a Primitive B as its parent A with a `scale` of 2, then B will be scaled at 2 if it has its `scale` property set to 1. If B has a `scale` of 3, then its actual scale would be 6!

### Transformation matrices

There are three matrices accessible, which are computed from the transformation properties:+1:

 - `localTransform`, is the matrix storing the local transformation of the given Primitive, relative to its parent.
 - `globalTransform`, is the matrix storing the transformation relative to the Canvas itself, that why it's called *global*, because whatever the hierarchy a primitive is defined in, this matrix will makes always sense compared to the one of another primitive.
 - `invGlobalTransform`, is the computed invert of `globalTransform`, because that's useful to have!

## Hierarchy

Every Primitive type have the ability to define themselves as part of an object-graph (or hierarchy of object).

Two properties define it:

 - `parent`, given the Primitive which is the direct parent.
 - `children` is an array of primitives which are the direct children.

When you create a primitive "B", you have to specify its parent (say "A"), whether it's a primitive or the Canvas itself. "B" will have its `parent` property set to "A". "A"`.children` will contain somewhere "B".

As said above the `localTransform` is relative to the parent's origin and position/rotation/scale properties.

## Conclusion

A little [example](http://babylonjs-playground.com/#DEFP2#1) to play with!

