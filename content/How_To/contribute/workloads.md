---
PG_TITLE: Customize Your Build
---

# Customize Your Build
Whether you are customizing by [adding new files](/How_To/addFiles) or by selecting which modules to build with you will have to edit the ```config.json``` file from the ```/tools/gulp``` folder.  By default, the build process will generate code for all classes and so if you want to strip out some classes you need to change the ```currentConfig```.

## Custom builds

To do so, 

This file starts with this format:

```
    "build": {
        "filename": "babylon.max.js",
        "minFilename": "babylon.js",
        "minWorkerFilename": "babylon.worker.js",
        "declarationFilename": "babylon.d.ts",
        "declarationModuleFilename": "babylon.module.d.ts",
        "outputDirectory": "../../dist/preview release",
        ...
        ...
        "srcOutputDirectory": "../../src/",
        "currentConfig": "all",
        ...
        ...
    },
    "buildConfigurations": {
        "all": [
                ...
        ],
        "minimal": [
            "meshBuilder",
            "freeCamera",
            "hemisphericLight"
        ],
        "360Viewer": [
            "arcRotateCamera",
            "hemisphericLight",
            "meshBuilder",
            "picking",
            "backgroundMaterial",
            "videoDome"
        ]  
    },
    "workloads" :
    {
```    

You can see inside the `buildConfigurations` bucket that two configurations are defined: `all` and `minimal`.
A configuration is an array of workloads. Workloads are sets of file, shaders and dependencies. They define a set of work. You can use then to cherry pick only features that you want to use.

For instance the `minimal` configuration only contains the following workloards: `meshBuilder`, `freeCamera`, `hemisphericLight`.

You can change the active configuration by settings the `build.currentConfig` value (set to `all` by default).

| Configuration | Size in KB (gzipped) |
| ------------- |----------------------|
| minimal | 170 |
| 360Viewer | 188 |

## Available Workloads 

Those below are the ones available at the time of writing.

For a full list of current workloads see the ```all``` array in the ```config.json``` file from ```/tools/gulp folder```

```
"buildConfigurations": {
        "all": [
                ...
        ],
```


| Workload      | Description |
| ------------- |-------------|
| standardMaterial | Contains standard material and associated shaders |
| pbrMaterial | Contains PBR material and associated shaders |
| freeCamera | Contains FreeCamera |
| arcRotateCamera | Contains ArcRotateCamera |
| hemisphericLight | Contains HemisphericLight |
| pointLight | Contains PointLight |
| directionalLight | Contains DirectionalLight |
| spotLight | Contains SpotLight |
| animations | Contains Animations and Animatables |
| actions | Contains Actions and ActionManagers |
| sprites | Contains Sprites and SpriteManager |
| picking | Contains PickingInfo and Ray |
| collisions | Contains Collider |
| particles | Contains Particle and ParticleSystem |
| solidParticles | Contains SolidParticleSystem |
| additionalMeshes | Contains GroundMesh, InstanceMesh and LinesMesh |
| meshBuilder | Contains MeshBuilder |
| audio | Contains AudioEngine, Sound, Soundtrack and Analyzer |
| additionalTextures | Contains CubeTexture, RenderTargetTexture, MirrorTexture, RefractionTextures, DynamicTexture, VideoTexture and RawTexture |
| shadows | Contains ShadowGenerator |
| loader | Contains SceneLoader, FilesInput and LoadingScreen |
| userData | Contains StringDictionary, Tags and AndOrNotEvaluator |
| offline | Contains Database |
| fresnel | Contains FresnelParameters |
| multiMaterial | Contains MultiMaterial |
| procedural | Contains the ProceduralTexture and CustomProceduralTexture |
| gamepad | Contains FreeCameraGamepadInput, ArcRotateCameraGamepadInput, Gamepads, ExtendedGamepad |
| additionalCameras | Contains FollowCamera, UniversalCamera and GamepadCamera |
| touchCamera | Contains TouchCamera and FreeCameraTouchInput |
| postProcesses | Contains PostProcess and PassPostProcess |
| imageProcessing | Contains ImageProcessingConfiguration |
| renderingPipeline | Contains PostProcessRenderPipelineManager, PostProcessRenderPass, PostProcessRenderEffect and PostProcessRenderPipeline |
| additionalRenderingPipeline | Contains SSAORenderingPipeline, LensRenderingPipeline, HDRRenderingPipeline, StandardRenderingPipeline |
| depthRenderer | Contains DepthRenderer |
| additionalPostProcesses | Contains BlurPostProcess, RefractionPostProcess, BlackAndWhitePostProcess, ConvolutionPostProcess, FilterPostProcess, FxaaPostProcess, VolumetricLightScatteringPostProcess, ColorCorrectionPostProcess, TonemapPostProcess and DisplayPassPostProcess |
| bones | Contains Bone, BoneIKController, BoneLookController and Skeleton  |
| hdr | Contains CubemapToSphericalPolynomial, PanoramaToCubemap, HDRTools, PMRemgenerator, HDRCubeTexture |
| polygonMesh | Contains PolygonMesh |
| csg | Contains CSG |
| lensFlares | Contains LensFlare and LensFlareSystem |
| physics | Contains PhysicsJoint, PhysicsImpostor, PhysicsEngine, CannonJSPlugin and OimoJSPlugin |
| textureFormats | Contains support for .tga, .dds and .ktc |
| debug | Contains SkeletonViewer, AxesViewer, BoneAxesViewer, RayHelper, DebugLayer and BoundingBoxRenderer |
| morphTargets | Contains MorphTarget and MorphTargetManager |
| colorCurves | Contains ColorGradingTexture and ColorCurves |
| octrees | Contains Octree and OctreeBlock |
| simd | Contains SIMD support for Math |
| vr | Contains VRDistortionCorrectionPostProcess, AnaglyphPostProcess, StereoscopicInterlacePostProcess, FreeCameraDeviceOrientationInput, ArcRotateCameraVRDeviceOrientationInput, VRCameraMetrics, WebVRCamera, DeviceOrientationCamera, VRDeviceOrientationCamera and StereoscopicCameras  |
| virtualJoystick | Contains VirtualJoystick, VirtualJoysticksCamera and FreeCameraVirtualJoystickInput |
| optimizations | Contains MeshSimplification, MeshLODLevel and SceneOptimizer |
| highlights | Contains OutlineRenderer, EdgesRenderer and Highlightlayer |
| assetsManager | Contains AssetsManager |
| mapTexture | Contains MapTexture and RectPackingMap |
| dynamicFloatArray | Contains DynamicFloatArray |
| serialization | Contains SceneSerializer |
| probes | Contains ReflectionProbe |
| layer | Contains Layer |
| textureTools | Contains TextureTools |
| behaviors | Contains behavior mechanism |
| cameraBehaviors | Contains all camera behaviors |
| meshBehaviors | Contains all mesh behaviors |
| instrumentation | Contains instrumentation classes |
| backgroundMaterial | Contains the backgroundMaterial |
| environmentHelper | Contains the environmentHelper |
| particleHelper | Contains the particleHelper |
| videoDome | Contains the videoDome |
| photoDome | Contains the photoDome |
