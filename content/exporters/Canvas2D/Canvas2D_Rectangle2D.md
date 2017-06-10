# Rectangle2D Shape overview

This primitive is [Shape](http://doc.babylonjs.com/overviews/Canvas2D_Shape2D) based. It is used to draw a Rectangle, with round corners or not.

Rendering Rectangle2D primitive can be insanely fast when the Instanced Array WebGL extension is available. All Rectangle primitives of any kind of width/height/position/roundRadius are rendered into a single draw call as long as they use the same type of brush (i.e. SolidColor or Gradient).

Rectangle of different SolidColorBrush (then different solid color) will be rendered into the single same call, the same apply for GradientColorBrush, many different gradient are rendered into one single call. It's just that SolidColor and Gradient based Rectangles will be drawn into two separated calls.

## Properties

 - `size`: a `Size` property that define the width and height of the rectangle. Default value is `(10, 10)`
 - `roundRadius`: a number property that specif the radius in pixel to apply on the rectangle corners to create a round rectangle. If `0` the rectangle will have sharp edges. Default value is `0`.
 - `notRounded`: a get only property that returns a boolean with `true` if for a sharp edges rectangle, `false` for a round one.

## Remarks

Right now the round subdivision is a static property that is equal to 16: this the count of vertices (and triangles) used to draw one rounded corner.

This type inherit all the properties of the [Shape](http://doc.babylonjs.com/overviews/Canvas2D_Shape2D) class.

As of today, the intersection does not take into account the empty space created but the round corner.

## Examples

[Lots of spining Rect/Ellipse!](http://babylonjs-playground.com/#OWCCR#8)

[Playing with origin and hierarchy](http://babylonjs-playground.com/#DEFP2#3)

