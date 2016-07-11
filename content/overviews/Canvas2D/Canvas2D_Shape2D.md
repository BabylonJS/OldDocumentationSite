# Shape2D based Primitive types

Some of the primitive like `Rectangle2D`, `Ellipse2D` and `Lines2D` extends the `Shape2D` class.

`Shape2D` based class are generally speaking parametric shape: primitive that are constructed based on mathematical formula.

The `Shape2D` class has the following properties:

 - `border` of type `IBrush2D`, defines that the primitive will have a border drawn around its contour with the given [Brush](http://doc.babylonjs.com/overviews/Canvas2D_Brushes). This is optional, default value is null: no border are drawn.
 - `borderThickness` of type number, define the thickness of the border in pixels (when the `scale` property is set to 1). Default value is 1.
 - `fill` of type `IBrush2D`, defines that the primitive will have its surface drawn with the given [Brush](http://doc.babylonjs.com/overviews/Canvas2D_Brushes). This is optional, default value will use a `SolidColorBrush` of the white color. :warning: if you don't want a fill content you have to specify the `null` value. Not specifying the `brush` property during creation time will use the white `SolidColorBrush`!

It is understandable that if both `border` and `fill` are optional, at least one must be defined, otherwise nothing would be rendered.

## Examples

[Lines2D primitive](http://babylonjs-playground.com/#15C96V#5)

[Lots of spining Rect/Ellipse!](http://babylonjs-playground.com/#OWCCR#8) you can select



