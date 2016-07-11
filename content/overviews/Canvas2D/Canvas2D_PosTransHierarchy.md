# About positioning, transformation and hierarchy

## It's all relative!

Coordinates are always relative to something, in our case the starting point of reference is the **bottom/left** corner of the rendering viewport.

It will never be said enough: *bottom*, not *top*: **bottom**.

Why? Because the Canvas2D feature is 100% WebGL based, in WebGL the [Viewport](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/viewport) origin it at the bottom/left corner. So in order to make things coherent and working smoothly, we follow the same rule: origin is at the **bottom/left** corner of the viewport! (I think now you've got it!)

When you create a Canvas2D object, its `x` and `y` properties will define the position of the Canvas' `origin` from the bottom/left corner of the Viewport.

The position of a primitive is from its bottom/left corner and relative to the bottom/left corner of its parent.

## Positioning

Consider the following code:

```javascript
var canvas = new BABYLON.ScreenSpaceCanvas2D(this.scene, { id: "ScreenCanvas", x: 20, y: 30, size: new BABYLON.Size(400, 400), cachingStrategy: BABYLON.Canvas2D.CACHESTRATEGY_DONTCACHE });
canvas.backgroundFill = "#7A5A67FF";
canvas.backgroundRoundRadius = 50;
var rect = new BABYLON.Rectangle2D({
    parent: canvas, x: 200, y: 200, width: 100, height: 100,
    fill: "#808080FF", border: "#FFFFFFFF",
    borderThickness: 4, roundRadius: 5, children: [
        new BABYLON.Ellipse2D({ id: "RedDot", x: 45, y: 45, width: 10, height: 10, fill: "#C04040FF" }),
        new BABYLON.Text2D("Right", { x: 150, y: 0, fontName: "Bold 12pt Arial" }),
        new BABYLON.Text2D("Left", { x: -150, y: 0, fontName: "Bold 12pt Arial" }),
        new BABYLON.Text2D("Top", { x: 0, y: 150, fontName: "Bold 12pt Arial" }),
        new BABYLON.Text2D("Bottom", { x: 0, y: -150, fontName: "Bold 12pt Arial" }),
    ]
});

```

![Canvas](http://i.imgur.com/NEEfUnL.png)

The blue portion is the viewport boundaries, we created the Canvas with a position of [20;30], so the bottom/left corner of the Canvas is at [20;30] from the bottom/left corner of the viewport.

The green lines/text on the bottom/left of the picture show the Canvas' `actualPosition` property. The yellow lines are showing the Canvas' boundaries and also the white/grey rectangle one (subtle, but yes there's a yellow square there). 

The `rect` object was created with a position of [200;200], the parent of `rect` is the canvas, so the position is relative to the canvas' bottom/left. The position of the rect is also relative to the rect's bottom/left corner. You can see the green lines that show the 200 distances in both X and Y toward the Canvas' origin.

If you were to create another Primitive having for parent the `rect` Primitive, the coordinates of this new Primitive will be relative to the `rect`'s bottom/left corner.

**The position of a primitive is always defined from the primitive's bottom/left corner to the bottom/left corner of its parent.**

The red dot inside the gray rectangle is the `origin` location of `rect`. It doesn't play a part in positioning, but it will for rotation and scaling. If you apply a rotation on `rect` it will rotate around this red dot, because by default the origin of a primitive if [0.5;0.5].

## Transforming

The transformation of a Primitive is defined by three properties:

 - `actualPosition`, a `Vector2` what we talked just above.
 - `rotation`, a `rotation` in radian along the Z-axis.
 - `scale`, a `number` which represent an uniform Scale along the X and Y axes.

These three properties are relative to the Primitive's parent's ones, which means if a Primitive B as its parent A with a `scale` of 2, then B will be scaled at 2 if it has its `scale` property set to 1. If B has a `scale` of 3, then its actual scale would be 6!

Note that there's two position related properties:

 - `position`: which you can manually get/set and define the position you want the primitive to have regardless of any positioning related operations (layout, margin, alignment)
 - `actualPosition`: which is automatically computed and you can manual get. It defines the 'real' position of the primitive after any positioning related operations were performed.

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

A little [example](http://babylonjs-playground.com/#DEFP2#3) to play with!

