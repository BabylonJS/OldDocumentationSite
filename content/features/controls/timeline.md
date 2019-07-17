---
PG_TITLE: How To Use the Timeline
---

# Video Timeline Control

The Babylon.js Timeline Control is the first web control built on top of Babylon.js in order to accelerate some of the usual Video Timeline construction on Web Pages.

## Introduction
One of the inherent issue encountered while scrolling in a video timeline built from IMG tags is perfomance issue. The bigger the number of pictures to scroll through the slower and less smooth the interactions with the web page would be.

In order to increase the reactivity of the web page, we rely here on WebGL through Babylon.js to create an easy to reuse control displaying a video timeline.

![Timeline](/img/features/controls/timeline.png)

## How to use

### Installation
To begin with the timeline, you first need to install the controls npm package.

```
npm install @baylonjs/controls
```

To reduce the size of your web page, the controls library is based on the es6 version of `babylonjs/core` used as a peer dependency. Therefore if you are not relying on it so far in you project, you also need to install core:

```
npm install @babylonjs/core
```

### Instantiation
Once done, you can now import the timeline in your code:

```
import { Timeline } from "@baylonjs/controls/timeline";
```

And simply instantiate it in your page:

```
const timeline = new Timeline(timelineCanvas, {
        totalDuration: 60,
        thumbnailWidth: 128,
        thumbnailHeight: 120,
        loadingTextureURI: "./assets/loading.png",
        getThumbnailCallback: (time: number) => {
            const hiddenVideo = document.createElement("video");
            hiddenVideo.src = "./assets/test.mp4";

            hiddenVideo.setAttribute("muted", "true");
            hiddenVideo.setAttribute("autoplay", "true");
            hiddenVideo.setAttribute("playsinline", "");
            hiddenVideo.muted = true;
            hiddenVideo.autoplay = true;

            hiddenVideo.currentTime = time;
            return hiddenVideo;
        }
    });
```

As we do not want to be opiniated about the controls you prefer or about the thumbnail generation itself it is all left to your implementation. The only information you need to provide are:

* *totalDuration*: the full duration of the video to cover (use to compute when all the thumbnails should be generated).
* *thumbnailWidth*: define the width of your generated thumbnails (use during the rendering to know how much space they should take in the timeline)
* *thumbnailHeight*: define the height of your generated thumbnails (use to keep the ratio intact with the width previously defined)
* *loadingTextureURI*: define the url of an image used as a temporary replacement for not fully loaded thumbnail (this will help handling network latency gracefully)
* *getThumbnailCallback*: last, but definitely not the least, a callback where you will be able to provide the thumbnail fitting with the requested time in parameter. You can return either a video element set on the right frame (as done in the previous code sample), a canvas element containing for instance some pre processed data or some image URL. More choices will probably be added here to for instance support texture atlas as it might be a nice transport format.

### Render Loop

Finally, you can start rendering the thumbnails:

```
    timeline.runRenderLoop();
```

It is also possible to pass a custom callback to this method to ensure that some custom code would run every frame before rendering the timeline:

```
    timeline.runRenderLoop(() => {
        // Sync the timeline with a playing video
        if (!mainVideo.paused) {
            timeline.setCurrentTime(mainVideo.currentTime);
        }
    });
```

### Changing the current zoom level

By default, the timeline is not zoomed at all, it shows as many thumbnails as fit in the canvas distributed evenly along the entire video.

You can zoom until you see one thumbnail per chosen time unit of the video (so if the total duration is 60 and you are zoomed at 100%, you will be able to see 60 thumbnails in total).

To zoom in/out, you can call the following code:

```
    // value is the percentage of zoom desired 0 for the entire video 100 for one thumbnail per unit
    timeline.setVisibleDurationZoom(value);
```

### Changing the current time

As changing the zoom level does not change the number of visible thumbnails, you need a way to control where you currently are in the list of thumbnails. The following code can be use to do so:

```
    // Sets the left side of the canvas to the current chosen time
    // The rest of the visible thumbnails are evenly distributed according to the chosen
    // zoom level.
    timeline.setCurrentTime(value);
```

## Full Code Sample

You can find the integrallity of the code sample above on [Github](https://github.com/BabylonJS/Controls) if you want to see it in action and better see how some of the functionnalities could be used.

## Live Demo

Please, have a look at the [Timeline Demo](https://controls.babylonjs.com/timeline) to better appreciate how it works.

## Further reading

[How To Use the Selection Panel Helper](/features/controls)
