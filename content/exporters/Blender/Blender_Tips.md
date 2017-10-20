---
ID_PAGE: 25095
PG_TITLE: Blender Tips
---

Since Babylon and Blender often do things differently, it can sometimes be a pain working with both of them together. Here's a few tips that will smooth things out a bit.

## Geometry

### Smooth shading

If you export the default Blender scene to BJS, you'll shortly see that your cube doesn't look like exactly as it should:

![smooth-shading-issue](http://doc.babylonjs.com/img/exporters/blender/smooth-shading-basic-issue.png)

This is because a 3D modeler viewport don't act like a 3D realtime engine. By default, Blender always create object using flat shading mode.
If you want to see your scene smoothed as in BJS, you have to select all your objects and click to  *Shading* > *Smooth* in 3D View Toolshelf.

![blender-smooth-shading](http://doc.babylonjs.com/img/exporters/blender/blender-smooth-shading.png)

Now, you're cube looks ugly. You have to set up its sharpness, by adding an *edge split* modifier, and play with edge angle and sharp edges. Jod done!

![blender-sharp-edges](http://doc.babylonjs.com/img/exporters/blender/blender-smooth-shading-sharpness.png)

## Materials

### Color conversion

You will quickly notice that colors are not very similar when exported from Blender to BJS. This is due to a Blender correction according to a disply device.
To cancel this conversion, simply set *Display Device* to *None*:

![blender-color-management](http://doc.babylonjs.com/img/exporters/blender/color-management.png)

![blender-color-management-comparison](http://doc.babylonjs.com/img/exporters/blender/color-management-comparison.png)

## Cameras

### ArcRotate

When choosing arc rotate camera type, you have to add a target to your camera. 

To do that:

* first select your camera, then its target (object or empty for example),
* press `Ctrl` + `T` > `Track To Constraint`.

## Quickly Export

If you go to *File* > *export* and right click on babylon, you can select *Create Shortcut*, and make a easy to use shortcut to export to babylon! For example, you can use *Ctrl-E*.

![quick-export-shortcut](http://doc.babylonjs.com/img/exporters/blender/quick-export-shortcut.png)



## Armatures

### Maximum # of influencers fix

If you ever get the error ``` WARNING: Maximum # of influencers exceeded for a vertex, extras ignored ```, never fear!

In weight painting mode, click *weights* and then *limit total*. This will automatically limit the mesh's vertices to 4 influences.

![weight-limit](http://doc.babylonjs.com/img/exporters/blender/weight-limit.png)
