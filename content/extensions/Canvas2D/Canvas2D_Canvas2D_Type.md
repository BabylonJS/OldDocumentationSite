# Canvas2D type overview

The `Canvas2D` class is the main class of the feature, but as there are two types of Canvas, two class are extending it: `ScreenSpaceCanvas2D` and `WorldSpaceCanvas2D`.

`Canvas2D` is extending the `Group2D` one, so it's also a Primitive in itself and can be considered as such. Although you can't have an instance of `Canvas2D` which is a child of another Primitive, instances of this class are always meant to be the first object of the graph.

Inheriting the properties of `Group2D`, a Canvas is a 2D rectangle with a position and a size, the size can be specified by the user or it is automatically computed to fit its content. To follow Open/WebGL standard, the origin of the canvas is at the **bottom/left** corner and not at the top/left as one would expect.

## Two types of Canvas


The Canvas can be rendered in two different spaces:

 - **ScreenSpace**: it lies above the rendered 3D Scene and is coplanar to the rendering viewport. Its position/rotation/scale is expressed in screen coordinate, with the origin being the top/left corner of the rendering viewport. [Example](http://babylonjs-playground.com/#2AVSFH#35). An instance of the `ScreenSpaceCanvas2D` class must be created.
 - **WorldSpace**: the canvas has a position/rotation/scale that is expressed in World Coordinates, your canvas is like a 2D Rectangle lying in World Space, like any other 3D objects you can find in a 3D Scene. [Example](http://babylonjs-playground.com/#1BKDEO#22). And instance of the `WorldSpaceCanvas2D` class must be created.

As you can guess, these two types serve different purposes, ScreenSpace being more adapted to render GUI in your Viewport, WorldSpace being more about taking advantage of the 2D Engine to render content in a 3D Scene **as a part** of the 3D Scene.

## The Caching Strategy
In order to preserve a good balance between rendering time and memory consumption the user has the possibility to cache in a bitmap the content of a Group (or the Canvas itself). Many caching strategies are predefined, hopefully for the user to always find what fits him/her the best.

**Default behavior**: 

 - ScreenSpace Canvas uses the `CACHESTRATEGY_DONTCACHE` by default, nothing is cached, the Canvas is rendered at every Scene Render.
 - WorldSpace Canvas uses the only strategy available so far: `CACHESTRATEGY_CANVAS`, the whole content of the Canvas is cached into a bitmap.

#### Available Strategies

**Beware** Understanding the different Caching Strategies is important when complex Canvas are built and performances start being a real consideration. The default behavior will keep things simple, however if you wish to harness the power of the Canvas2D feature, you need to understand the different caching strategies.

The different strategies are:

- `CACHESTRATEGY_DONTCACHE` Nothing is cached, every primitives are rendered every frame in the Viewport. Note this mode can only be chosen for ScreenSpace Canvas, WorldSpace ones has to be cached at some level.
- `CACHESTRATEGY_CANVAS` Only the Canvas and its whole content will be cached. Simple and efficient if its size is ok for you and its content doesn't change every frame.
- `CACHESTRATEGY_TOPLEVELGROUPS` The Canvas itself won't be cached, but each of its direct children group will be cached (so their content, also including sub groups). If you have a Canvas spanning the whole rendering viewport (say 1920*1080 pixels) and the content of the Canvas is only one small Group at the Top Left and another at the Bottom Right of the viewport, then you don't want to cache the whole screen for that less. This mode will only create a cache bitmap for the space taken by the two groups.
- `CACHESTRATEGY_ALLGROUPS` The Canvas and each group will have their own cache, unless you change this behavior using the Group2D.cacheBehavior). This is by far the most memory consuming, but efficient if the content change frequently but at different pace. You can reduce greatly the amount of cache with Group2D.cacheBehavior though.

## The Canvas' Object Graph
The content of a Canvas is defined by a graph of primitives, there are many kind of primitives, they are summarized in the [Home page](http://doc.babylonjs.com/overviews/Canvas2D_Home).

The [Position, Transformation and Hierarchy page](http://doc.babylonjs.com/overviews/Canvas2D_PosTransHierarchy) will help you to learn more about how this object's graph works.

## A Canvas is also a Group

So it's useful to know about the different features that a [Group](http://doc.babylonjs.com/overviews/Canvas2D_Group2D) offers and also the [Primitive Base](http://doc.babylonjs.com/overviews/Canvas2D_Prim2DBase) type.
