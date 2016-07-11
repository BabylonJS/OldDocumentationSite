# Ellipse2D Shape overview

This primitive is [Shape](http://doc.babylonjs.com/overviews/Canvas2D_Shape2D) based. It is used to draw an Ellipse/Circle.

Rendering Ellipse2D primitive can be insanely fast when the Instanced Array WebGL extension is available. All Ellipse primitives of any kind of width/height/position are rendered into a single draw call as long as they use the same subdivisions count, type of brush (i.e. SolidColor or Gradient). 

Ellipse of different SolidColorBrush (then different solid color) will be rendered into the single same call, the same apply for GradientColorBrush, many different gradient are rendered into one single call. It's just that SolidColor and Gradient based Rectangles will be drawn into two separated calls.

## Properties

 - `size`: a `Size` property that define the width and height of the ellipse. Default value is `(10, 10)`
 - `subdivisions`: the number of vertices to shape the contour of the Ellipse. Default is `64`.

## Remarks

This type inherit all the properties of the [Shape](http://doc.babylonjs.com/overviews/Canvas2D_Shape2D) class.

## Examples

[Lots of spining Rect/Ellipse!](http://babylonjs-playground.com/#OWCCR#8)

