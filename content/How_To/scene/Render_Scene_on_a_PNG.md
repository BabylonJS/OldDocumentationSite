---
ID_PAGE: 22691
PG_TITLE: Render Scene on a PNG
---

# How To Render a Scene to a PNG

First you may ask why is it better than "ctrl + prt scr" screenshot or the Snippet app?

1. With a standard ctrl + print screen keypress, you can't create screenshots with higher resolutions than your screen resolution. With BabylonJS screenshot feature, you can. There is no problem with creating a 1920x1080 screenshot on a 800x600 screen (provided the graphics card is powerful enough to compute it). However as you will see in the examples later there is no increase in pixel density.
2. The screenshot is of the rendered canvas only without further manipulation.
3. A sequence of screenshots can be taken that can be turned into an animated gif.


It's done by simply calling this method: `BABYLON.Tools.CreateScreenshot(engine, camera, size)`.
You need to provide your BabylonJS engine, the camera you want to use for the rendering, and a size.

The size parameter is very versatile, it can be a simple number or an object.

## Examples of Results

Starting with a view of part of the screen showing the canvas there then follows a sequence of images taken usen CreateScreenshot

![Actual Screen](/img/how_to/scene/shss.png)
View of Part of Screen Showing Canvas Used

![size = 200](/img/how_to/scene/sh200x200.png)
`BABYLON.Tools.CreateScreenshot(engine, camera, 200)`

![size = 800](/img/how_to/scene/sh800x800.png)
`BABYLON.Tools.CreateScreenshot(engine, camera, 800)`

![size = 1600](/img/how_to/scene/sh1600x1600.png)
`BABYLON.Tools.CreateScreenshot(engine, camera, 1600)`

![size = {width:800, height:400}](/img/how_to/scene/sh800x400.png)
`BABYLON.Tools.CreateScreenshot(engine, camera, {width:800, height:400})`

Precision can be used as a multiplier of the screen resolution.

![size = {precision: 0.5}](/img/how_to/scene/sh400p05.png)
`BABYLON.Tools.CreateScreenshot(engine, camera, {precision: 0.5})`

![size = {precision: 2}](/img/how_to/scene/sh400p20.png)
`BABYLON.Tools.CreateScreenshot(engine, camera, {precision: 2})`

## Pixel Density

The following image of the canvas on screen and the resulting screenshot using 'precision: 8' show that although the image is 8 times larger the pixel density stays the same.

![Screen Canvas](/img/how_to/scene/sbss.png)

![Enlarged Image](/img/how_to/scene/sbp80.png)


## Gif Creation

The following code produced a series of images that were turned into the animated gif below.

```javascript
var imgNm = 0;
scene.registerAfterRender(function(){
    box.rotation.y += 2 * Math.PI / 90;
    if(imgNm++ < 90) {
        BABYLON.Tools.CreateScreenshot(engine, camera, 200);
    }
})
```

![Gif](/img/how_to/scene/ssanim.gif)
