---
PG_TITLE: How To Use Dynamic Textures
---

# Dynamic Textures
A dynamic texture works by creating a canvas onto which you can draw using all the facilities of the [HTML5 Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API). 

![dynamic texture](/img/how_to/dyntext.png)

## Creating and Applying a Dynamic Texture

This is simply achieved using the `dynamicTexture` function with just three parameters,

```javascript
var myDynamicTexture = new BABYLON.DynamicTexture(name, option, scene);   
```
though the existing default values of `minmaps`, `sampling mode` and `texture format` can be overwriten by their addition.

Whereas the name and scene parameters are obvious, the `option` parameter, which determines the width and height of the dynamic texture, can be one of three values:

1. An already created canvas, in which case `canvas.width` and `canvas.height` are used;
2. An object having the properties `width` and `height`;
3. A number, in which case both width and height are set to this number.

Once created, the dynamic texture is used as the `diffuseTexture` for a material in the usual way:

```javascript
var myMaterial = new BABYLON.StandardMaterial("Mat", scene);    				
myMaterial.diffuseTexture = myDynamicTexture;
mesh.material = myMaterial;
```

## Writing Text

A `drawText` method is available so that text can be written directly onto the dynamic texture.

```javascript
myDynamicTexture.drawText(text, x, y, font, color, canvas color, invertY, update);
```

Here are the parameters:
* text: string, the words to be written;
* x: number, distance from the left-hand edge;
* y: number, distance from the top or bottom edge, depending on invertY;
* font: string, font definition in the form font-style, font-size, font_name;
* invertY: boolean, true by default in which case y is the distance from the top, when false, y is distance from the bottom and the letters reversed;
* update: boolean, true by default, the dynamic texture will immediately be updated.

* [Playground Example DrawText](https://www.babylonjs-playground.com/#5ZCGRM#2)

## Canvas Methods

You can obtain the canvas context using

```javascript
var ctx = myDynamicTexture.getContext();
```
exposing all the possibilities of the HTML5 canvas element. 

### Drawing
As an example, drawing using a quadratic curve

```javascript
ctx.beginPath();
ctx.moveTo(75, 25);
ctx.quadraticCurveTo(25, 25, 25, 62.5);
ctx.quadraticCurveTo(25, 100, 50, 100);
ctx.quadraticCurveTo(50, 120, 30, 125);
ctx.quadraticCurveTo(60, 120, 65, 100);
ctx.quadraticCurveTo(125, 100, 125, 62.5);
ctx.quadraticCurveTo(125, 25, 75, 25);
ctx.stroke();
```

To apply the drawing, the dynamic texture needs updating

```javascript
myDynamicTexture.update();
```

**Note:** use `update(false)` if you do not want to use `invertY`.

* [Playground Example Drawing](https://www.babylonjs-playground.com/#5ZCGRM#3)

### Images

Images can be added to fill part or the whole of the canvas using the `drawImage` method. Remember that you will have to wait for the image to load before assigning it to the canvas and update the dynamic texture afterwards.

For whole image  
```javascript
var img = new Image();
img.src = 'PATH TO IMAGE';
img.onload = function() {

ctx.drawImage(this, 0, 0);
myDynamicTexture.update();
```

For part of the image scaled onto part of the canvas  
```javascript
var img = new Image();
img.src = 'PATH TO IMAGE';
img.onload = function() {

ctx.drawImage(this, image start x, image start y, image width, image height, canvas to x, canvas to y, destination width, destination height);
myDynamicTexture.update();
```

* [Playground Example Image](https://www.babylonjs-playground.com/#5ZCGRM#4)

## Playground Combination

This playgound combines all the above techniques.

* [Playground Example Dynamic Texture](https://www.babylonjs-playground.com/#5ZCGRM#1)

## Serialization
The dynamic texture can be serialized with the scene using `SceneSerializer.Serialize()` or a mesh using `SceneSerializer.SerializeMesh()`.  

**Note:** Be sure that the scene is ready before serialization.

This playground demonstrates serializing a dynamic texture associated with a material on a mesh:

* [Playground Example Dynamic Texture Serialized Mesh](http://playground.babylonjs.com/#FU0ES5)

# Further Reading

## Basic - L1
[Materials 101](/babylon101/Materials)  
[Materials Overview](/features/Materials)  
