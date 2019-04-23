---
PG_TITLE: How To Use the Motion Blur post-process
---

# Introduction
You can find an example of the motion blur post-process in our playground: [https://www.babylonjs-playground.com/#E5YGEL#2](https://www.babylonjs-playground.com/#E5YGEL#2)

# Creating the motion blur post-process

You just have to create an instance of BABYLON.MotionBlurPostProcess
```
var motionblur = new BABYLON.MotionBlurPostProcess(
    "mb", // The name of the effect.
    scene, // The scene containing the objects to blur according to their velocity.
    1.0, // The required width/height ratio to downsize to before computing the render pass.
    camera // The camera to apply the render pass to.
);
```

The blur is based on objects velocities. More the object's transformation is changing fast, more the blur is high for the object. Velocity is affected by each object position, rotation and scale:
- Rotation: [https://www.babylonjs-playground.com/#9LRA3T#4](https://www.babylonjs-playground.com/#9LRA3T#4)
- Scale: [https://www.babylonjs-playground.com/#9LRA3T#6](https://www.babylonjs-playground.com/#9LRA3T#6)
- Position: [https://www.babylonjs-playground.com/#9LRA3T#8](https://www.babylonjs-playground.com/#9LRA3T#8)

# Customizing
By default, the post-process will blur the scene using a coefficient named `motionStrength`. Its default value is equal to `1` and can be customized:
```
motionblur.motionStrength = 2; // double the blur effect
```
Example: [https://www.babylonjs-playground.com/#9LRA3T#10](https://www.babylonjs-playground.com/#9LRA3T#10)

For performances/quality reason, you can also customize the blur quality. To blur an image, the effect
takes, for the current pixel, some samples around the current pixel one. More you take samples, more the quality of the blur is high. So, you can customize the number of samples using the property `motionBlurSamples`. Its default value is equal to `32`:
```
motionblur.motionBlurSamples = 16; // divide quality by 2
```

# Limitations
To save performances, the motion blur's velocity map is rendered at the same time than depth buffer and normal buffer using the geometry render buffer.
The clear color of the render buffer collides with the needed clear color of the velocity map and can generate glitchs like this: [https://www.babylonjs-playground.com/#E5YGEL#3](https://www.babylonjs-playground.com/#E5YGEL#3). As a limitation, your scene must occur in a closed environment OR have at least a skybox to hide the empty space that causes these glitchs.

# Notes
The Motion Blur post-process needs at least support of WebGL 2 or WebGL 1 with multiple render targets support. If not available, the post-process will work as a passthrough.
