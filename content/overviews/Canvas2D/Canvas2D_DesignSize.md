# Introduction

When you use a ScreenSpace Canvas with no given size at its construction, this canvas will take all the space of the rendering viewport, which is ideal for fullscreen games for instances.
But the size of the Viewport in fullscreen is dependent of the device's resolution, so from here you have two choices

1. Relying on the [layout and positioning](http://doc.babylonjs.com/overviews/canvas2d_prim_positioning) engines to compute the position and size of your primitives, which is ideal when you're working with vectorial primitives mostly.
2. Relying on absolute positioning by manually setting the `position`, `x`, `y`, `size`, `width` or `height` properties of your primitives, which is ideal if you're working a lot with bitmap or a fixed positioned UI.

But when you're willing to work with 2. an issue arise when working in fullcreen: you're faced with multiple resolutions. That's where the designSize mode shows its purpose.

# Working with designSize

When you construct your ScreenSpace Canvas object, you won't size its `size` to enable full autofit, but you will set the `designSize` to specify the size you're willing to consider how the canvas should be, for you to position and size your primitive accordingly to this size.

What happens next is that the Canvas2D Engine will **scale** the coordinates and size for them to match the fullscreen resolution at run-time.

## Example

Say you want to want to work for a mobile device with FullHD resolution (1920 x 1080) which has a Device Pixel Ratio of 3, so a working size of 640 * 360.

You will set a `designSize` of 640 x 360, which by the way has a ratio of 16/9. Then everything inside your canvas will be positioned and sized inside this 640 x 360 box and you don't have to worry of the device resolution.

If your application is running on an iPhone 6 for instance, which has a core resolution of 1334 x 750: you'll be just as fine, the canvas will fit perfectly, because the iPhone 6 has the **same ratio** than your designSize.

Now what happens if your application is running on an iPad, which has a resolution of 1024 x 768 ? There's will be a minor issue, because this resolution has a **different ratio**: 4/3 instead of 16/9. In this case the scale is computed by using either the Width or Height of the Canvas.

You can choose which axis to use using the `designUseHorizAxis` setting at construction.

 - If `true` the scale will be computed like this: `renderingSize.width / designSize.width`
 - If `false` the scale will be compute like this: `renderingSize.height / designSize.height`

With this setting you will control wich axis will fit totally.