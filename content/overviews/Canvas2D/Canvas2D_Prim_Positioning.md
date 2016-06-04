# Primitive Positioning using Layout Engine, Alignment and Margin

## Overview of principle

One of the purpose of the [Canvas2D](http://doc.babylonjs.com/overviews/Canvas2D_Home) feature is to use it to build Graphical User Interfaces.

One key feature that helps making this easier is to provide a Positioning Engine for the primitives (in order to avoid positioning them with absolute coordinate) by relying on a higher level set of features which drive positions and sizes, based on criteria that make more sense to GUI based programming.

Three concepts are introduced to help on this matter:

 - **Primitive Areas**: each primitive has a **Surface Area** assigned by the LayoutEngine. This surface is split into three areas:
    1. **The Margin Area**: which Outer bound is the Primitive's overall Surface and Inner Bound is defined by the Margin Property.
    2. **The Padding Area**: which Outer Bound is the Margin Inner Bound and Inner Bound is defined by the Padding Property.
    3. **Content Area**: which is the surface that will be available for direct children, which Bound is the Inner Bound of the Padding Area.
 - **Layout Engine**: you can choose a Layout engine that will compute and assign to each direct child its  Surface Area based on a give layout mode (Canvas, Grid, StackPanel, etc.)
 - **Alignment**: a primitive can use only a portion of the Surface Area it's assigned to. To help define how it should be positioned into this Surface you can rely on **Absolute Positioning** (defined by the `Position` property of the primitive) or on **Alignment** to :
    1. Align a given **Edge** of the Primitive to the same kind of Edge of its parent (Left/Right for Horizontal Alignment, Top/Bottom for Vertical Alignment)
    2. **Center** the primitive Width/Height from its parent's Content Area 
    3. **Stretch** (which also will drive the Size property of the Primitive) the primitive Surface Area to fit its parent Content Area on either or both Horizontal/Vertical axes.
 
## Primitive Area

**TODO** A picture worth a thousand words!

The Layout Engine will compute for each primitive it processes a **Surface Area** where the primitive will be positioned and sized.

This area is subdivided into three sub areas, the first two areas are delimited using a `PrimitiveThickness` typed property (more on this later).

1. **Margin Area**: This Area delimits the space **around** the Primitive Surface Area. It's a margin to create empty space is order to avoid all sibling primitives being sticked together. This is relative to the parent's Content Area (more on this below).

    The Outer Bound of the Margin Area matches the parent's Content Area. The Inner Bound is computed using the `Margin` property of the Primitive.

2. **Padding Area**: This area defines is used to define the Outer Bound of the Content Area, it's used to create empty space between the primitive's Rendering Surface (defined by the `ActualSize` property) and its Content Area.

    The Outer Bound of the Padding Area matches the Inner Bound of the Margin Area. Its Inner Bound is computed using the `Padding` property of the Primitive.

3. **Content Area**: This area is a rectangle which is the remaining space defined by the Inner Bound of the Padding Area. The Layout Engine associated to a given primitive will use this area to compute and set the Surface Area of each direct child.


## Layout Engine

The Layout Engine is assigned to a given primitive and then is responsible to distribute the available space and assign the **Surface Area** to each direct child primitive.

Note that depending on the Layout Engine, the Surface Area assigned to child primitive may overlap or not, it's a design choice made during the Layout Engine conception.

When no Layout Engine is assigned the `CanvasLayoutEngine` is used by default, its role is fairly easy: it assigns the whole Content Area of the primitive its assigned to as the Surface Area to use for each child. That's it, every child primitive share the same Surface Area. No particular setting as to be provided to use this Layout Engine, that's why it's the one used by default.

More complex Layout Engine such as the `GridLayoutEngine` can be used to achieve a more sophisticated distribution of the available area. The user define a set of Grid Rows and Columns that subdivide the area into many sub areas called **cell** and each direct child primitive is assigned to a particular cell (or multiple one when spanning is used).

## Primitive Alignment

Now that we know that each primitive is assigned to a given Surface Area we can use Alignment to compute and define the Margin Area Outer Bound of the Primitive.

Depending on the Alignment Mode chose only the Position of the primitive will be affected but maybe also its Size.

 - **Edge Alignment** will align a given Edge of the primitive to the same edge of its parent (Left/Right for Horizontal Alignment, Top/Bottom for Vertical Alignment). Only the Position will be affected.
 - **Center Alignment** The Size of the primitive won't be change and the available space will be equally distributed on the Left and Right for Horizontal Alignment, Top and Bottom for Vertical Alignment. Only the Position is affected.
 - **Stretch Alignment** The primitive will have both Edges on a given axis (Horizontal or Vertical) aligned from its parent, setting the Position but also the Size of the concerned primitive.












