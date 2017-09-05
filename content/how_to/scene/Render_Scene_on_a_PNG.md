---
ID_PAGE: 22691
PG_TITLE: Render Scene on a PNG
---
# Why is it better than "ctrl + prt scr" screenshot?

With a standard ctrl + print screen keypress, you can't create screenshots with higher resolutions than your screen resolution. With BabylonJS screenshot feature, you can. There is no problem with creating a 1920x1080 screenshot on a 800x600 screen (provided the graphics card is powerful enough to compute it).
Another cool aspect of using this feature is that you can use a non-active camera to create the screenshot, so you can produce many screenshots, without switching cameras!

# How can we do it?

It's done by simply calling this method: `BABYLON.Tools.CreateScreenshot(engine, camera, size)`.
You need to provide your BabylonJS engine, the camera you want to use for the rendering, and a size.
The size parameter is very versatile.  Allow me to show you some examples:

* If you need a square screenshot (ratio 1:1) simply use this: `size = 512;`.

![size = 512 HillValley render](http://pix.keuse.fr/images/screencdc.png)

* If you want to have a custom width and height (like 600x400), use this format: `size = { width: 600, height: 400};` If you provide only one parameter within those braces, BabylonJS will compute the missing dimension... and maintain canvas aspect ratio.

![600x400 HillValley render](http://pix.keuse.fr/images/screenvwv.png)

* If you want to keep your current canvas aspect ratio, yet with more or less precision: `size = { precision: 2 }` (in this example a 800x600 canvas will give you a 1600x1200 screenshot).
Below is an example with precision 0.5 on my computer (the result is 960x503):

![HillValley render with precision of 0.5](http://pix.keuse.fr/images/screenhsh.png)

The result will be automatically downloaded if your browser supports it. Otherwise, it will be displayed on a new tab. In any case, it will be a PNG image format. **This feature does not yet support antialiasing**.

Just for fun, here is a render of Hill Valley using 3840x2160 resolution (4K).

![4K render of Hill Valley](http://pix.keuse.fr/images/screenjqj.jpg)
