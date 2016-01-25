# Gradient material

![Screenshot](/img/extensions/materials/gradient.jpg)

## [~~Playground example - Not yet deployed~~](http://www.babylonjs-playground.com)


Gradient material can be found here: [https://github.com/BabylonJS/Babylon.js/blob/master/materialsLibrary/dist/babylon.gradientMaterial.js](https://github.com/BabylonJS/Babylon.js/blob/master/materialsLibrary/dist/babylon.gradientMaterial.js)

## Using the gradient material

The material creates a smooth gradient with two colors:

```
var sphere = BABYLON.Mesh.CreateSphere("sphere", 32, 2, scene);

var gradientMaterial = new BABYLON.GradientMaterial("grad", scene);
gradientMaterial.topColor = BABYLON.Color3.Red(); // Set the gradient top color
gradientMaterial.bottomColor = BABYLON.Color3.Blue(); // Set the gradient bottom color
gradientMaterial.offset = 0.25;

sphere.material = gradientMaterial;
```
`topColor` and `bottomColor` are the two colors used in this gradient material.
`offset` is a number between -1 and 1 that represent the amount of each color.


