# Group2D type overview

Group2D is a non renderable Primitive which is mainly used to fulfill two purposes:

1. Define a new frame of reference, through the known `position`, `rotation`, `scale` and `origin` properties.
2. Depending of the [Canvas2D](http://doc.babylonjs.com/overviews/Canvas2D_Canvas2D_Type) Caching Strategy used, a Group2D can define if its content will be cached into a bitmap or not.

Future evolution of this class will certainly feature Layout specific features.

## Properties

 - `size` of type `Size`, optionally defines the size of the Group. If null the size will be determined by the group's content. Default value is null.
 - `actualSize`, equal to `size` if it was specified or computed from its bounding content.
 - cacheBehavior of type number, define how the group should behave regarding the caching strategy. The possible values are:
    1. `Group2D.GROUPCACHEBEHAVIOR_FOLLOWCACHESTRATEGY`: follow the strategy defined at the Canvas Level.
    2. `Group2D.GROUPCACHEBEHAVIOR_DONTCACHEOVERRIDE`: When used, this group's content won't be cached, no matter which strategy used. If the group is part of a WorldSpace Canvas, its content will be drawn in the Canvas cache bitmap.
    3. `Group2D.GROUPCACHEBEHAVIOR_CACHEINPARENTGROUP`: When used, the group's content will be cached in the nearest cached parent group/canvas.
 - `isRenderableGroup` of type boolean, if `true` the group is responsible to render primitives. If `false` the group is said to be a 'logical group' and merely acts as a container and new frame of reference.
 - `isCachedGroup` of type boolean, only used if the group is a renderable one. Will be `true` if the content of the group is cached in a bitmap, `false` if it's rendered directly in the viewport.