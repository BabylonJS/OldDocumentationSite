# Brushes

A Brush is not a primitive type, it's used by Shape2D based primitive to define how the shape's border and/or fill content should be drawn.

There are actually two types of brush SolidColor and Gradient. You can access a brush from the `Canvas` class, using these static methods:

 - `GetSolidColorBrush()`, returns a Brush of the given color (using a Color4 object).
 - `GetSolidColorBrushFromHex()`, returns a Brush of the given color using a CSS style string, like `"#FF0000FF"` for plain red, `"#FF000080"` for a half transparent red.
 - `GetGradientColorBrush()`, returns a Brush using the given gradient value (color1, color2, translation, rotation).

## Example

[Lines2D primitive](http://babylonjs-playground.com/#15C96V#5)
