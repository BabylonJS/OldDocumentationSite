# Lines2D Shape overview

This primitive is [Shape](http://doc.babylonjs.com/overviews/Canvas2D_Shape2D) based. It is used to draw an Line made of a succession of segments.

Rendering Lines2D primitive won't be as fast as Rectangle2D or Ellipse2D. Due to the nature of the primitive one draw call is needed for each defined list of points. If you have many instances using the same list of points the rendering will be done in one draw call (when Instanced Array WebGL extension is supported), otherwise it's one draw call per point list.

## Features

 - Support open or closed Lines. In case of a Closed lines, the first and last point will be joined by a segment.
 - Support many types of Cap for the start and/or end of the Line.

## Properties

 - `points`: a `Array<Vector2>` property that define the list of the points that will make each segment of the line.
 - `fillThickness`: a number that defines the thickness of the line in pixel (when the scale is 1). Default is 1.
 - `closed`: a boolean that if `true` specify a closed line, the first and last point will be joined by a segment. `false` is the default value, the first and last point won't be connected.
 - `startCap`: a number, one value of the `Lines2D.XxxCap` static property. Define which cap is use for the start of the line. Default value is Lines2D.NoCap.
 - `endCap`: a number, one value of the `Lines2D.XxxCap` static property. Define which cap is use for the end of the line. Default value is Lines2D.NoCap.

## Remarks

This type inherit all the properties of the [Shape](http://doc.babylonjs.com/overviews/Canvas2D_Shape2D) class.

The different types of cap are:
 - RoundCap: to make the line edge round, with a diameter equal to the line thickness.
 - TriangleCap: to make the triangle that match the thickness of the line.
 - SquaredAnchorCap: to make a Square Anchor point, the square's edge are twice the size of the line's thickness.
 - RoundAnchorCap: to make a Round Anchor point, the diameter is twice the size of the line' thickness
 - DiamondAnchorCap: to make a Diamond Anchor point, the diamond size is twice the size of the line' thickness
 - ArrowCap: to make an arrow style cap.

## Examples

[Lines2D primitive](http://babylonjs-playground.com/#15C96V#5)

