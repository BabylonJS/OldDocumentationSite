# Grid material

![Grid Material](/img/extensions/materials/grid.png)

## Playground example

A Full Playground example can be found here: [Grid Playground](http://babylonjs-playground.com/#1UFGZH#12)

## Using the Grid material

As the grid material is a babylonJS extension, it is not included in the main babylon.js file. In order to use the material, please, download and reference the extension from the following location:
[https://github.com/BabylonJS/Babylon.js/blob/master/dist/preview release/materialsLibrary/babylon.gridMaterial.js](https://github.com/BabylonJS/Babylon.js/blob/master/dist/preview release/materialsLibrary/babylon.gridMaterial.js)

You can also use the minified version for your production projects from:
[https://github.com/BabylonJS/Babylon.js/blob/master/dist/preview release/materialsLibrary/babylon.gridMaterial.min.js](https://github.com/BabylonJS/Babylon.js/blob/master/dist/preview release/materialsLibrary/babylon.gridMaterial.min.js)

The default grid behaviour does not require any setup and displays a black and white grid on your meshes.

![](/img/extensions/materials/gridDefault.png)

You can access the live example in the [Playground](http://babylonjs-playground.com/#2KKVBH)

The grid is using the local position to outline any of the axis fitting with one unit in black. Only one on ten lines will be fully black, the other lines will be in lighter grey. You can imagine it as a ruler with bigger marks for cm and smaller for millimeters.

```
var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", "textures/heightMap.png", 100, 100, 100, 0, 10, scene, false);
ground.material = new BABYLON.GridMaterial("groundMaterial", scene);
```

## Customize the grid material

In order to help you making the grid fit in your scenes, a few controls are available.

** mainColor **
The main color pilots the color of the empty area.

** lineColor **
The line color drives the line color... What an amazing surprise !!!

** opacity **
The opacity helps changing the lines opacity. In transparent mode (opacity < 1.0), The empty area will always be at an opacity level of 0.08.

** gridRatio **
The grid will be projected on objects according to their size. If an object has a size of 1, you'll only see one line on it. The gridRatio helps you subdivide the object size in order to fit with your chosen setup.

For instance a 1 size cube will by default only have one line.

![Grid Ratio 1](/img/extensions/materials/gridRatio1.png)

[Playground](http://babylonjs-playground.com/#5S6MD)

Using a gridRatio of 0.1, will then make appear ten lines on it.

![Grid Ratio 2](/img/extensions/materials/gridRatio2.png)

[Playground](http://babylonjs-playground.com/#5S6MD#1)

** majorUnitFrequency **
You have now noticed on the previous examples that only one on ten lines is stronger. This is control by the parameter named majorUnitFrequency which gets its default value to 10.
 
Setting it to 2, will make appear one strong line each 2 lines. This is only a scary parameter name for something simple.

![Grid MUF](/img/extensions/materials/gridMUF.png)

[Playground](http://babylonjs-playground.com/#5S6MD#2)

** minorUnitVisibility **
After sorting out the frequency of stronger lines, you could wonder how to control the strength of the minor ones. The parameter minorUnitVisibility will help you to control this. Bascially, this value represents level of minor lines compared to the major ones. This value should be smaller than 1 which is the value applied to the main lines. The default value is 0.33 which corresponds to 33% of the lineColor.

Setting it to 0.1 will then reinforce the effect of the main lines (by dropping the value of the minor ones).

![Grid MUV](/img/extensions/materials/gridMUV.png)

[Playground](http://babylonjs-playground.com/#5S6MD#3)

 
