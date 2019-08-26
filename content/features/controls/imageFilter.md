---
PG_TITLE: How To Use the Image Filter Control
---

# Image Filter Control

The Babylon.js Resizer Control is a web control built on top of Babylon.js in order to apply filter to pictures in web pages.

## Introduction
Filtering images to apply effect might be tedious and slow on the CPU. The best place to do so (for most effects) is on the GPU. But setting up an entire WebGL pipeline simply to process images might be tricky even more if you wish to benefit from WebGL 2 to 1 fallback and workaround famous platform issues.

To greatly simplify this task we introduced the `ImageFilter` Control.

![ImageFilter](/img/features/controls/imageFilter.png)

## How to use

### Installation
To begin with the image filter control, you first need to install the controls npm package.

```
npm install @baylonjs/controls
```

To reduce the size of your web page, the controls library is based on the es6 version of `@babylonjs/core` used as a peer dependency. Therefore if you are not relying on it so far in you project, you also need to install core:

```
npm install @babylonjs/core
```

### Instantiation
Once done, you can now import the control in your code:

```
import { ImageFilter } from "@baylonjs/controls/imageFilter";
```

And simply instantiate it in your page:

```
const imageFilter = new ImageFilter(filterCanvas);
```

You simply need to provide a canvas on which we will be able to use a WebGL context. You could as well provide another Babylon.js control in order to share the WebGL context.

### Using Post Process
In order to apply a custom shader as the image filter, you can use the following code:

```
const blackAndWhitePostProcess = new BlackAndWhitePostProcess("bw", 1, null, undefined, backAndWhiteFilter.engine);
backAndWhiteFilter.filter(imageToProcess, blackAndWhitePostProcess);
```

Where imageToProcess could be either:
* the url of a picture.
* a video element (the current visible frame of the video will be used)
* another canvas element (the current visible state will be used)

This will apply the post process to the provided input and display it in the canvas.

### Using Custom shader
In order to apply an existing post process as the image filter, you can use the following code:

```
const customEffectWrapper = new EffectWrapper({
    name: "Custom",
    engine: customFilter.engine,
    fragmentShader: `
        // Samplers
        varying vec2 vUV;
        uniform sampler2D textureSampler;
        
        void main(void) 
        {
            gl_FragColor = texture2D(textureSampler, vUV);

            // Swizzle channels
            float r = gl_FragColor.r;
            gl_FragColor.r = gl_FragColor.b;
            gl_FragColor.b = r;
        }
    `,
    samplerNames: ["textureSampler"]
});
customFilter.filter(imageToProcess, customEffectWrapper);
```

Where imageToProcess could be either:
* the url of a picture.
* a video element (the current visible frame of the video will be used)
* another canvas element (the current visible state will be used)

This will apply the custom shader in parameter to the picture. By default, `vUV` is available as a varying defining the full ouptput as texture coordinates. `textureSampler` needs to be present and defines the texture corresponding to the input parameter.

### Process to the canvas
This is by far the simplest, if you have a canvas in your page. You simply need to use the following code to fit the provided element to the canvas size:

```
imageFilter.filter(imageToProcess, filter);
```

On the previous line, imageToResize could be either:
* the url of a picture.
* a video element (the current visible frame of the video will be used)
* another canvas element (the current visible state will be used)

This is the default behavior.

### Process to a Babylon Texture
Instead of filtering directly to a canvas, you could prefer to only create a Babylon.js texture on the GPU. For this, you can use the following function:

```
const texture = imageFilter.getFilteredTexture(imageToResize, { width: 128, height: 100 }, filter);
```

Like before, imageToResize could be either:
* the url of a picture.
* a video element (the current visible frame of the video will be used).
* another canvas element (the current visible state will be used).

You also need to provide the size you want your texture to have on the GPU.

Now you are free to use this texture with any other controls.

## Full Code Sample

You can find the integrallity of the code sample above on [Github](https://github.com/BabylonJS/Controls/blob/master/www/imageFilter/index.ts) if you want to see it in action and better see how some of the functionnalities could be used.

## Live Demo

Please, have a look at the [Live Image Filter Demo](https://controls.babylonjs.com/imageFilter) to better appreciate how it works.

## Further reading

[Babylon.js Controls](/features/controls)
