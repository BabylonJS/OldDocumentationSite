# Canvas2D Home General Purpose Documentation


### Few useful links

Please check the [GitHub main page](https://github.com/BabylonJS/Babylon.js/tree/master/canvas2D) of the Canvas2D library, there's a bunch of useful information out there.

For a first-time learning tutorial [go there](http://doc.babylonjs.com/tutorials/Using_the_Canvas2D).

To learn about the Design and Architecture of the Canvas2D [go there](http://doc.babylonjs.com/overviews/Canvas2D_Overview_Architecture).


To learn how to develop your own Primitive type, [it's here](http://doc.babylonjs.com/tutorials/How_to_create_your_own_Canvas2D_primitive).

## General concepts overview

This section contains useful links for you to get started on different concepts that are useful to grasp.

 - Class hierarchy [diagram](http://doc.babylonjs.com/overviews/Canvas2D_ClassDiagram)
 - Overview of the [Canvas2D](http://doc.babylonjs.com/overviews/Canvas2D_Canvas2D_Type) type
 - Using the Canvas' [Design Size](http://doc.babylonjs.com/overviews/Canvas2D_DesignSize) to work with a predefined surface size.
 - How [Visibility](http://doc.babylonjs.com/overviews/Canvas2D_Visibility) works
 - How [Z-Order](http://doc.babylonjs.com/overviews/Canvas2D_ZOrder) works
 - Using the [origin](http://doc.babylonjs.com/overviews/Canvas2D_Origin) of a Primitive
 - How [rendering](http://doc.babylonjs.com/overviews/Canvas2D_Rendering) is working. Rendering Chain, Cache modes, Render Modes (Opaque, Alpha Test, Transparency)
 - How [positioning, transformation and hierarchy](http://doc.babylonjs.com/overviews/Canvas2D_PosTransHierarchy) work.
 - How to use the [Layout Engine, alignment and Margin](http://doc.babylonjs.com/overviews/Canvas2D_Prim_Positioning)
 - How to [interact](http://doc.babylonjs.com/overviews/Canvas2D_Interaction) with Primitives.
 - How to work with the [Primitive Collision Engine](http://doc.babylonjs.com/overviews/Canvas2D_PCM) (PCM)
 - The particularities of a [Shape2D](http://doc.babylonjs.com/overviews/Canvas2D_Shape2D) based Primitive type and how to use [Brushes](http://doc.babylonjs.com/overviews/Canvas2D_Brushes).
 - How to use [AtlasPicture](http://doc.babylonjs.com/overviews/Canvas2D_AtlasPicture) to store/pack many pictures into a big one.

### Overview of the different primitive types

 - [Base Primitive type](http://doc.babylonjs.com/overviews/Canvas2D_Prim2DBase), all primitive derive from this type.
 - [Group2D](http://doc.babylonjs.com/overviews/Canvas2D_Group2D), define a new frame of reference, have the ability to cache its content for performance sake.
 - [Text2D](http://doc.babylonjs.com/overviews/Canvas2D_Text2D)
 - [Sprite2D](http://doc.babylonjs.com/overviews/Canvas2D_Sprite2D)
 - [Shape](http://doc.babylonjs.com/overviews/Canvas2D_Shape2D) based:
   - [Rectangle2D](http://doc.babylonjs.com/overviews/Canvas2D_Rectangle2D)
   - [Ellipse2D](http://doc.babylonjs.com/overviews/Canvas2D_Ellipse2D)
   - [Lines2D](http://doc.babylonjs.com/overviews/Canvas2D_Lines2D)
 - [WireFrame2D](http://doc.babylonjs.com/overviews/Canvas2D_WireFrame2D)

## Playgrounds referential

 - Because we have to start from here: [Hello World](http://babylonjs-playground.com/#2AVSFH#35)
 - All types of Primitives (**TODO**)
 - A little example of the simplest features: [two spinning Rect](http://babylonjs-playground.com/#272WI1#6) 
 - The two spinning Rectangles, [World Space version](http://babylonjs-playground.com/#1BKDEO#22)
 - A [Lots of spinning primitives](http://babylonjs-playground.com/#OWCCR#8)
 - Playing with [origin and hierarchy](http://babylonjs-playground.com/#DEFP2#3)
 - Changing [origin](http://babylonjs-playground.com/#DIF54#2)
 - Relying on the babylon.js animation engine: a simple example of [Animation](http://babylonjs-playground.com/#FFTQL#3)
 - A simple [interaction example](http://babylonjs-playground.com/#UVDG0#67)
 - Primitives with [Action Manager](http://babylonjs-playground.com/#1ONKPJ#5)
 - An Animated [Sprite2D](http://babylonjs-playground.com/#20MSFF#16)
 - Some [Lines2D primitives](http://babylonjs-playground.com/#15C96V#5)
 - Playing with [Visibility](http://babylonjs-playground.com/#BDQQX#2)
 - A little [Transparency test](http://babylonjs-playground.com/#7DXYF#1)
 - Using the Layout engine to arrange many primitives arranged using a [StackPanel](http://babylonjs-playground.com/#CMZLC#7)
 - How works [Margin & Padding](http://babylonjs-playground.com/#2DD9TG#3)
 - Advanced Positioning [example](http://babylonjs-playground.com/#BN6OY)
 - How to [track a node from the 3D Scene](http://babylonjs-playground.com/#1N9RJY#5) 
 - WorldSpace Canvas on a [custom scene node](http://babylonjs-playground.com/#EPFQG#4)
 - [Z-Order test](http://babylonjs-playground.com/#1S2MDR#2)
 - [Scale9Sprite feature](http://doc.babylonjs.com/overviews/Canvas2D_Sprite2D), [playground](http://babylonjs-playground.com/#8F4D1#1)
 - Sprite2D loaded from [AtlasPicture](http://babylonjs-playground.com/#C1BYN#1)
 - Text rendered using [Signed Distance Field technique](http://babylonjs-playground.com/#143CL7#1)
 - Using [BMFont](http://www.angelcode.com/products/bmfont/) to render text with [BitmapFont](http://babylonjs-playground.com/#GKBEH)
 - Track 3D Scene Nodes with [WorldSpaceCanvas](http://babylonjs-playground.com/#1KYG17#1)
 - Using the [Primitive Collision Manager](http://babylonjs-playground.com/#1PXWLR#2)
 - Want to render a ScreenSpaceCanvas below or between 3D Content using [renderingGroupID?](http://babylonjs-playground.com/#RXVJD#2)
 - How to use the Canvas2D designSize feature (**TODO**)
 - How to use the WorldSpaceCanvas unitScaleFactor (**TODO**)
