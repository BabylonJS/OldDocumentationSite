# Combine Babylon.js and Pixi.js

Author: [SinhNQ](https://github.com/quocsinh)

Pixi.js has full webgl support, a best framework for 2D game and app with rendering speed very fast. Would be great if you want make UI game with Pixi.js and combine with Babylon.js. This is a perfect duo for your web game world. :)

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

The *clearBeforeRender* and *autoStart* are 2 properties important, you must set them to *false*.

The render sequence of Babylon.js and Pixi.js is also very important, Babylon.js must be rendered first.

```
engine.runRenderLoop(function() {   
    scene.render();    	
    engine.wipeCaches(true);
  
    pixiRenderer.reset();
    pixiRenderer.render(stage);
});
```

Full example: https://jsfiddle.net/y5q7Lb1v/40/

## Problems

The above example working great when your browser support WebGL2 but will have a bit of issues when run on WebGL1.

To fix that, you need reset state context before be rendered.

Lines 14, 34 & 35: https://jsfiddle.net/y5q7Lb1v/21/

## Notes

* You should use Pixi.js v4.8.2, this version working at well with Babylon.js newest version.

* Don't use Pixi.js v5 alpha, them still a few errors. I will update the doc when Pixi.js v5 released.