# Combine Babylon.js and Pixi.js


Pixi.js is a fast, lightweight, open source 2D library with full support for webGL with a very fast rendering speed. It is great to use as a UI in combination with Babylon.js, making a perfect duo for your web game world.

## When should you use

* Create high qual﻿ity games with highest performance.
    
* Run on all devices. 

* Don't like use canvas for rendering.

## Setup Pixi.js rendering
```
var pixiRenderer = new PIXI.WebGLRenderer({
    context: engine._gl,
    view: engine.getRenderingCanvas(),
    clearBeforeRender: false,
    autoStart: false
});
```

The *clearBeforeRender* and *autoStart* are two very important properties that must be used and set to *false*.

The render sequence of Babylon.js and Pixi.js is also very important, Babylon.js must be rendered first.

```
engine.runRenderLoop(function() {   
    scene.render();    	
    engine.wipeCaches(true);
  
    pixiRenderer.reset();
    pixiRenderer.render(stage);
});
```

[Working JSFiddle Example Pixi.js in Front](https://jsfiddle.net/y5q7Lb1v/40/)

It is possible to place a Pixi.js stage behind a Babylon.js scene provided you use

```
scene.autoClear = false;
```

to make the background of the scene transparent. In this case render Pixi.js before Babylon.js.

```
engine.runRenderLoop(function() {   
  pixiRenderer.reset();
  pixiRenderer.render(stage);
  
  scene.autoClear = false;
  scene.render();    	
  engine.wipeCaches(true);
   
});
```

It is also possible to combine these and have Pixi.js stages behind and in front of a Babylon.js stage.

```
engine.runRenderLoop(function() {   
  pixiRenderer.reset();
  pixiRenderer.render(stage);
  
  scene.autoClear = false;
  scene.render();    	
  engine.wipeCaches(true);
  
  pixiRenderer.reset();
  pixiRenderer.render(stage1);
 
});
```

[JSFiddle Example Multiple Stages](https://jsfiddle.net/y5q7Lb1v/42/)

## WebGL1 Problems

The above example working great when your browser support WebGL2 but will have a bit of issues when run on WebGL1.

When your browser is running webGL1 then you need to reset the Pixi.js context first for each rendering as below.

```
engine.runRenderLoop(function() { 
    if(engine.webGLVersion === 1) {
        pixiRenderer.reset();
    }
    scene.render();    	
    engine.wipeCaches(true);
  
    pixiRenderer.reset();
    pixiRenderer.render(stage);
});
```

Lines 14, 34 & 35: [JSFiddle](https://jsfiddle.net/y5q7Lb1v/21/)

## Pixi.js Versions

Always use the [latest released version of Pixi.js](https://github.com/pixijs/pixi.js/releases)