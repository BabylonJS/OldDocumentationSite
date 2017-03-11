# Primitive Positioning using Layout Engine, Alignment and Margin

## Overview of principle

One of the purpose of the [Canvas2D](http://doc.babylonjs.com/overviews/Canvas2D_Home) feature is to use it to build Graphical User Interfaces.

One key feature that helps making this easier is to provide a Positioning Engine for the primitives (in order to avoid positioning them with absolute coordinates) by relying on a higher level set of features which drive positions and sizes, based on criteria that make more sense to GUI based programming.

To make things clearer you have two distinct modes:

1. Absolute Positioning, you set the `position` property (or `x` & `x` which are shortcuts to position.x & position.y) to specify where your primitive is going to be positioned. By doing this you don't use the positioning engine.
2. Using the Positioning Engine, you will rely on the properties stated below but **you will not** set the `position` property, the position will be computed by the Positioning Engine and the result will be stored in the `actualPosition` and `actualSize` properties. Setting the `position` property in this mode will lead to unexpected results.

## How positioning works

Three concepts are introduced to help on this matter:

 - **Areas**: each primitive has different areas:
    1. **Layout Area** this surface is assigned by the LayoutEngine, it spans the total surface the primitive can occupy.
    2. **Primitive Area**: given by the `actualSize` property. The Positioning engine allocate this area and its position based on the `margin` and `marginAlignment` properties. If no Margin/Alignment are specified then the `size` and `position` are used.
    3. **Content Area**: this area is determined from the Primitive Area and the `padding` property, if any. If there's no padding, the content area is the same as the primitive area.
 - **Layout Engine**: you can choose a Layout engine that will compute and assign to each direct child its  Layout Area based on a given layout mode (Canvas, Grid, StackPanel, etc.)
 - **Alignment**: a primitive can use only a portion of the Layout Area it's assigned to. To help define how it should be positioned into this Area you can rely on **Absolute Positioning** (defined by the `position` property of the primitive) or on **Alignment** using the `marginAlignment` property to :
    1. Align a given **Edge** of the Primitive to the same kind of Edge of its parent (Left/Right for Horizontal Alignment, Top/Bottom for Vertical Alignment)
    2. **Center** the primitive Width/Height from its parent's Content Area 
    3. **Stretch** (which also will drive the Size property of the Primitive) the primitive Surface Area to fit its parent Content Area on either or both Horizontal/Vertical axes.
    
    **Note**: alignment will consider the actualScale and rotation of the primitive, this [this PG](http://babylonjs-playground.com/#BN6OY) for more detail.

### About the PrimitiveThickness type

Both `margin` and `padding` properties are defined with the `PrimitiveThickness` type. Let's see what this type can do:

 - It defines values for each edge of a Bounding Rectangle, so we have four set of properties: `top`, `left`, `right` and `bottom`.
 - Each edge helps defining a distance between it and its corresponding one in its containing area (e.g. the Top Edge will define a distance from the parent's Top Edge).
 - The distance can be expressed in many ways:
    1. **Pixels**: which is the base unit of the Canvas2D.
    2. **Percentage**: which will compute the pixel value based on a percentage of the available space.
    3. **Auto**: this is the default value which means the edge is not taking into consideration to compute the Bounding Rectangle.
    
        The opposite edge (Top for Bottom, Right for Left and vice and versa) as well as the Primitive `size` Width or Height (depending on the concerned axis) will be use to compute the Bounding Rectangle.
    4. **Inherit**: the edge value will inherit the value of it's parent's equivalent.


## More about the Layout Engine

The Layout Engine is assigned to a given primitive and then is responsible to distribute the available space and assign the `layoutArea` and `layoutAreaPos` to each direct child primitive.

Note that depending on the Layout Engine, the Layout Area assigned to child primitive may overlap or not, it's a design choice made during the Layout Engine conception.

When no Layout Engine is assigned the `CanvasLayoutEngine` is used by default, its role is fairly easy: it assigns the whole Content Area of the primitive its assigned to as the Layout Area to use for each child. That's it, every child primitive share the same Area. No particular setting as to be provided to use this Layout Engine, that's why it's the one used by default.

More complex Layout Engine such as the `GridLayoutEngine` can be used to achieve a more sophisticated distribution of the available area. The user define a set of Grid Rows and Columns that subdivide the area into many sub areas called **cell** and each direct child primitive is assigned to a particular cell (or multiple one when spanning is used).

Note: GridLayout is not available yet, the only second layout is the StackPanelLayoutEngine.

## Some playgrounds

- [StackPanel](http://babylonjs-playground.com/#CMZLC#7)
- [Margin & Padding](http://babylonjs-playground.com/#2DD9TG#3)








