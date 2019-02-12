# Using the Ocean post-process
This beautiful post-process tends to simulate an ocean surface, including waves, to be used as a post-process.
This is under a Creative Commons License and can be used freely for non-commercial projects.
This post-process requires "Multiple Render Targets" support so it'll work at least with WebGL2 or WebGL1 and multiple render targets extension enabled.

## How to use?

Ocean post-process scripts can be found here: 
- Normal: [https://github.com/BabylonJS/Babylon.js/blob/master/dist/preview%20release/postProcessesLibrary/babylon.oceanPostProcess.js](https://github.com/BabylonJS/Babylon.js/blob/master/dist/preview%20release/postProcessesLibrary/babylon.oceanPostProcess.js)
- Minified : [https://github.com/BabylonJS/Babylon.js/blob/master/dist/preview%20release/postProcessesLibrary/babylon.oceanPostProcess.min.js](https://github.com/BabylonJS/Babylon.js/blob/master/dist/preview%20release/postProcessesLibrary/babylon.oceanPostProcess.min.js)

Please, first reference this script in your page:

```
	<script src="babylon.oceanPostProcess.js"></script>
```

Then, you only need to instantiate the post-process and attach to your main camera to bring it to life.

```
// Creates the post process
var postProcess = new BABYLON.OceanPostProcess("Ocean", camera);
```

## Using reflection and refraction

For reflection and refraction purpose, the post-process is using 2 custom render targets. The constructor of the post-process can also take a third argument which allows to customize these render targets. Such as:

```
// Creates the post process with options
var postProcess = new BABYLON.OceanPostProcess("Ocean", camera, {
    /**
     * The size of the reflection RTT (number if square, or {width: number, height:number} or {ratio:} to define a ratio from the main scene)
     */
    reflectionSize: { width: 512 height: 512 },
    /**
     * The size of the refraction RTT (number if square, or {width: number, height:number} or {ratio:} to define a ratio from the main scene)
     */
    refractionSize: { width: 512 height: 512 }
});
```
