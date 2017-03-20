Changes list
============

## 2.5.0
  
### Core Engine

#### Major updates

- New `StandardRenderingPipeline` effect to support screen space lens flare and depth of field. [Demo](http://www.babylonjs.com/Demos/StandardRenderingPipeline/) - ([Julien Moreau-Mathis](https://github.com/julien-moreau))
- New `HighlightLayer` object to enable highlights rendering. [Demo](http://www.babylonjs.com/Demos/Highlights/) - ([sebavan](https://github.com/sebavan))
- Babylon.js now supports right handed system with ```scene.useRightHandedSystem = true``` ([deltakosh](https://github.com/deltakosh))
- Babylon.js is now compiled with [optimize-js](https://github.com/nolanlawson/optimize-js) to get faster initial load ([deltakosh](https://github.com/deltakosh))
- Canvas2D moved to a separate folder in main repo. Now you need to also include babylon.cavans2d.js to get Canvas2D features ([deltakosh](https://github.com/deltakosh))
- New BoneIKController [Demo](http://www.babylonjs-playground.com/#1EVNNB#15) ([abow](https://github.com/abow))
- New BoneLookController [Demo](http://www.babylonjs-playground.com/#1B1PUZ#15) ([abow](https://github.com/abow))
- You can now build your own version of babylon.js with `gulp build-custom` [Doc](http://doc.babylonjs.com/generals/how_to_start) ([deltakosh](https://github.com/deltakosh))

#### Updates

- Added `node.doNotSerialize` to prevent specific nodes to be serialized by `SceneSerializer` ([deltakosh](https://github.com/deltakosh))
- Added `scene.multiPick` and `scene.multiPickWithRay` to return an array of pickedMesh objects ([deltakosh](https://github.com/deltakosh))
- Added `Effect.GetVertexShaderSource()` and `Effect.GetFragmentShaderSource()` ([deltakosh](https://github.com/deltakosh))
- New `Texture.LoadFromDataString()` to help loading base64 encoded textures ([deltakosh](https://github.com/deltakosh))
- Added Engine detection of the compresed texture formats supported by Hw / browser.  You can specify those formats you have files for using `Engine.setTextureFormatToUse()`, and an appropriate one will be chosen. ([Palmer-JC](https://github.com/Palmer-JC/))
- Added Ray.intersectsMesh, Ray.show, Ray.hide ([abow](https://github.com/abow))
- Added AbstractMesh.setPivotPoint, AbstractMesh.getPivotPoint, AbstractMesh.getAbsolutePivotPoint ([abow](https://github.com/abow))
- Added Debug.AxesViewer and Debug.BoneAxesViewer ([abow](https://github.com/abow))
- Added Bone.getAbsolutePositionFromLocal and getLocalPositionFromAbsolute ([abow](https://github.com/abow))
- Added Bone.setRotation, Bone.getRotation, Bone.setRotationQuaternion, Bone.getRotationQuaternion ([abow](https://github.com/abow))
- Added Bone.getAbsolutePosition and Bone.getAbsolutePositionToRef ([abow](https://github.com/abow))
- Added Bone.translate, Bone.setPosition, Bone.setAbsolutePosition ([abow](https://github.com/abow))
- Added Bone.setYawPitchRoll, Bone.setRotationMatrix, Bone.setScale, Bone.setAxisAngle ([abow](https://github.com/abow))
- Added Bone.rotate ([abow](https://github.com/abow))
- Added Bone.scale ([abow](https://github.com/abow))
- Added Camera.getDirection, AbstractMesh.getDirection, Bone.getDirection ([abow](https://github.com/abow))
- Added subdivisionsX, subdivisionsY option to GroundMesh ([abow](https://github.com/abow))
- New ```Tools.CreateScreenshot``` function will capture all canvas data. Previous implementation is now called `CreateScreenshotUsingRenderTarget` ([deltakosh](https://github.com/deltakosh)) 
- Cube textures are now cached by texture cache ([deltakosh](https://github.com/deltakosh)) 
- Added onAnimationEnd callback for `sprite.playAnimation` ([deltakosh](https://github.com/deltakosh)) 
- Added support for non square textures for sprites ([deltakosh](https://github.com/deltakosh)) 
- Added support for texture arrays ([deltakosh](https://github.com/deltakosh)) 
- Added `camera.isInFrustum` and `camera.isCompletelyInFrustum`. Can be used with meshes, submeshes and boundingInfo ([deltakosh](https://github.com/deltakosh)) 
- Several memory allocation reduction ([benaadams](https://github.com/benaadams))
- Several GPU state change reduction ([benaadams](https://github.com/benaadams)) 
- MapTexture: add `supersample` mode to double font quality. ([nockawa](https://github.com/nockawa))
- New SPS feature : solid particle intersection with other solid particle or with any mesh `particle.intersectsMesh()` ([jerome](https://github.com/jbousquie))
- New `invertUV` parameter an all ribbon based shapes : ribbon, tube, lathe, basic and custom extrusion ([jerome](https://github.com/jbousquie))
- PerfCounter class added to monitor time/counter and expose min/max/average/lastSecondAverage/current metrics. Updated engine/scene current counter to use this class, exposing new properties as well to access the PerfCounter object ([nockawa](https://github.com/nockawa))
- Better keyboard event handling which is now done at canvas level and not at window level ([deltakosh](https://github.com/deltakosh)) 
- New `scene.hoverCursor` property to define a custom cursor when moving mouse over meshes ([deltakosh](https://github.com/deltakosh)) 
- WebVR Camera was updated to be conform with the current specs. ([RaananW](https://github.com/RaananW)) 
- New "CubeTextureTask" function will allow you to load a CubeTexture in the assetsManager. ([agallouin](https://github.com/AGallouin)) 
- Scene.stopAnimation has now an optional second parameter, the name of the animation to kill. Usefull if a mesh has multiple animations. ([agallouin](https://github.com/AGallouin))

#### Bug fixes
- Fixed issue with SkeletonViewer not displaying correctly with meshes that have a PoseMatrix ([abow](https://github.com/abow))
- Fixed issue with Quaternion.toEulerAnglesToRef ([abow](https://github.com/abow))
- Fixed issue with Animatable.goToFrame ([abow](https://github.com/abow))
- Fixed issue with instancse and viewports ([deltakosh](https://github.com/deltakosh))
- Fixed issue with FreeCamera not working in fullscreen or when pointer locked ([abow](https://github.com/abow))
- MapTexture: Font Characters are now correctly aligned on Chrome ([nockawa](https://github.com/nockawa))
- Fixed some missing parameter default values in `MeshBuilder.CreateGroundFromHeightMap()` and `MeshBuilder.CreateTiledGround()` ([jerome](https://github.com/jbousquie))
- Fixed cross vector calculation in `_computeHeightQuads()` that affected  all the `GroundMesh.getHeightAtCoordinates()` and `GroundMesh.getNormalAtCoordinates()` methods ([jerome](https://github.com/jbousquie))
- Fixed `Mesh.CreateDashedLines()` missing `instance` parameter on update ([jerome](https://github.com/jbousquie))
- Added BBox update on each ribbon based shape (ribbon, tube, extrusion, etc) on dynamic updates ([jerome](https://github.com/jbousquie))
- Fixed model shape initial red vertex color set to zero not formerly being taken in account in the `SolidParticleSystem` ([jerome](https://github.com/jbousquie))
- Fixed billboard when the SPS mesh is parented in the `SolidParticleSystem` ([jerome](https://github.com/jbousquie))
- Fixed RenderTargetTexture meshes selection ([deltakosh](https://github.com/deltakosh))
- Fixed camera speed computation ([deltakosh](https://github.com/deltakosh))
- Fixed bug with instances, LOD and edgesRendering ([deltakosh](https://github.com/deltakosh))

#### Breaking changes
- FollowCamera.target was renamed to FollowCamera.lockedTarget to avoid conflicts ([deltakosh](https://github.com/deltakosh)) 
- Removed legacy shaders support ([deltakosh](https://github.com/deltakosh))

### Canvas2D

##### Major Updates: ([nockawa](https://github.com/nockawa) unless stated) 

- Performance metrics added
- Text2D super sampling to enhance quality in World Space Canvas
- World Space Canvas is now rendering in an adaptive way for its resolution to fit the on screen projected one to achieve a good rendering quality
- Transparent Primitives are now drawn with Instanced Array when supported
- ScreenSpaceCanvas, `renderingPhase` setting added, allowing you to specify for which camera and which renderingGroup the Canvas will be rendered to. [Playpround](http://babylonjs-playground.com/#RXVJD%232)
- FontTexture and Text2D now support Signed Distance Field rendering, more info [here](http://www.html5gamedevs.com/topic/22552-canvas2d-main-post/?page=11#comment-149564). There's also a [Playground](http://babylonjs-playground.com/#143CL7#1)
- New property in Canvas2D (instances) that contains all instances of canvas2d [Temechon](https://github.com/Temechon)

##### Updates: ([nockawa](https://github.com/nockawa))

- Text2D: new `fontSuperSample` setting to use high quality font ([nockawa](https://github.com/nockawa))

##### Bug Fixes: ([nockawa](https://github.com/nockawa))
- `WorldSpaceCanvas2D`:
  - Intersection/interaction now works on non squared canvas
- Primitive:
  - `ZOrder` fixed in Primitives created inline
  - Z-Order is now correctly distributed along the whole canvas object graph
- `Sprite2D`: 
  - texture size is now set by default as expected
  - can have no `id` set
- `Text2D`: 
  - Fix bad rendering quality on Chrome
  - Rendering above transparent surface is now blending correctly

##### Breaking Changes: ([nockawa](https://github.com/nockawa))
 
 - `WorldSpaceCanvas2D.WorldSpaceRenderScale` is no longer supported (deprecated because of adaptive feature added).
 - Canvas2D now renders its content in three passes: Opaque, Alpha Test and Transparency. Sprite2D was always considered as transparent in the previous release, now it's opaque **unless** you set `hasAlpha` to true to its texture (or if its `actualScale` is less than 1). 
   Text2D will be transparent if you use non Signed Distance Field (SDF) mode or Alpha Test if you do use SDF.


## 2.4.0

### Core Engine

#### Major updates
- New refraction channel for Standard material (including fresnel support). Refraction texture can be provided by a reflection probe or a refraction texture. [See demo here](http://www.babylonjs.com/Demos/refraction/) ([deltakosh](https://github.com/deltakosh))
- Added support for HDR cubemaps. [demo here](http://www.babylonjs-playground.com/#19JGPR#4) ([sebavan](https://github.com/sebavan))
- Support for shaders includes ([deltakosh](https://github.com/deltakosh))
- New mesh type : `LineSystem`. [Demo here](http://www.babylonjs-playground.com/#2K1IS4#5) ([jerome](https://github.com/jbousquie))
- SerializationHelper for complex classes using TypeScript decorators ([deltakosh](https://github.com/deltakosh))
- StandardMaterial now supports Parallax and Parallax Occlusion Mapping ([tutorial](http://doc.babylonjs.com/tutorials/Using_parallax_mapping)) ([nockawa](https://github.com/nockawa))
- Animations blending. See [demo here](http://www.babylonjs-playground.com/#2BLI9T#3). More [info here](http://doc.babylonjs.com/tutorials/Animations#animation-blending) ([deltakosh](https://github.com/deltakosh))
- New debuger tool: SkeletonViewer. See [demo here](http://www.babylonjs-playground.com/#1BZJVJ#8) (Adam & [deltakosh](https://github.com/deltakosh))
- Added Camera Inputs Manager to manage camera inputs (mouse, touch, keyboard, gamepad, ...) in a composable way, without relying on class inheritance. [Documentation here](http://doc.babylonjs.com/tutorials/Customizing_Camera_Inputs) ([gleborgne](https://github.com/gleborgne))
- Introduced new observable system to handle events. [Documentation here](http://doc.babylonjs.com/overviews/Observables) ([nockawa](https://github.com/nockawa), [deltakosh](https://github.com/deltakosh))
- Added a new VR camera : VRDeviceOrientationArcRotateCamera ([temechon](https://github.com/Temechon))
- Moved PBR Material to core ([deltakosh](https://github.com/deltakosh))
- StandardMaterial.maxSimultaneousLights can define how many dynamic lights the material can handle. [Demo here](http://www.babylonjs-playground.com/#IRVAX#10) ([deltakosh](https://github.com/deltakosh))
- Introduced Canvas2D feature: a 2D engine to render primitives, sprites in 2D, text. Canvas2D can be displayed in Screen Space (above the 3D scene) or in World Space to be a part of the Scene. [overview](http://doc.babylonjs.com/overviews/Using_The_Canvas2D), [tutorial](http://doc.babylonjs.com/tutorials/Using_the_Canvas2D) ([nockawa](https://github.com/nockawa))
- Added two new types of Texture: FontTexture and MapTexture ([quick doc](http://www.html5gamedevs.com/topic/22565-two-new-texture-types-fonttexture-and-maptexture/)) ([nockawa](https://github.com/nockawa))
- Added a dynamic [2D Bin Packing Algorithm](http://stackoverflow.com/questions/8762569/how-is-2d-bin-packing-achieved-programmatically), ([more info here](http://www.html5gamedevs.com/topic/22565-two-new-texture-types-fonttexture-and-maptexture/)) ([nockawa](https://github.com/nockawa))
- Physics engine was completely rewritten, including both plugins for Oimo.js and Cannon.js. [overview](http://doc.babylonjs.com/overviews/Using_The_Physics_Engine) ([RaananW](https://github.com/RaananW))
- Interleaved buffers are now directly supported. Create a `Buffer` object and then use `buffer.createVertexBuffer` to specify the vertex buffers ([benaadams](https://github.com/benaadams)) 
- Vertex buffers can be marked as instanced to allow custom instancing attributes ([benaadams](https://github.com/benaadams)) 
- Mesh can have `overridenInstanceCount` set to specify the number of meshes to draw when custom instancing is used ([benaadams](https://github.com/benaadams)) 
- Now supporting the [Earcut](https://github.com/mapbox/earcut) polygon triangulation library as part of babylon.js library. (Look for the `Earcut` module). The `PolygonMeshBuilder` class now relies on Earcut. ([nockawa](https://github.com/nockawa))	

#### Updates
- Added `renderTargetTexture.useCameraPostProcesses` to control postprocesses for render targets ([deltakosh](https://github.com/deltakosh))
- Added `mesh.toLefthanded()` to convert a mesh from right handed system ([kesshi](https://github.com/Kesshi))
- Renderlists can now also be defined using predicates ([deltakosh](https://github.com/deltakosh))
- Added support for various normal maps conventions ([deltakosh](https://github.com/deltakosh))
- Added postprocess.enablePixelPerfectMode to avoid texture scaling/stretching when dealing with non-power of 2 resolutions. cannot be used on post-processes chain ([deltakosh](https://github.com/deltakosh))
- Enabled other post processes to be used when also using a 3D Rig ([jcpalmer](https://github.com/Palmer-JC))
- Got Skeleton.copyAminationRange scaling better for different bone lengths ([jcpalmer](https://github.com/Palmer-JC))
- Added skeleton.getBoneIndexByName(boneName: string) ([dad72](https://github.com/dad72))
- Added `node._children` to track children hierarchy ([deltakosh](https://github.com/deltakosh))
- Added Camera.ForceAttachControlToAlwaysPreventDefault to help embedding Babylon.js in iFrames ([deltakosh](https://github.com/deltakosh))
- Support for Layer.alphaTest ([deltakosh](https://github.com/deltakosh))
- New scene.pointerDownPredicate, scene.pointerMovePredicate, scene.pointerUpPredicate to define your own predicates for meshes picking selection ([deltakosh](https://github.com/deltakosh))
- New OnPickTrigger support for spritesManager ([deltakosh](https://github.com/deltakosh))
- New SPS method `digest()` ([jerome](https://github.com/jbousquie))    
- New SPS property `computeBoundingBox` ([jerome](https://github.com/jbousquie))  
- New SPS particle property `isVisible` ([jerome](https://github.com/jbousquie)) 
- Added a new OnPickOut trigger fired when you release the pointer button outside of a mesh or sprite. ([deltakosh](https://github.com/deltakosh))
- Added support for OnPointerOver and OnPointerOut for sprites. ([deltakosh](https://github.com/deltakosh))
- Added an optional predicate on Node.getDescendants, Node.getChildren to filter out Nodes based on a callback execution. ([nockawa](https://github.com/nockawa))
- Added Ray.intersectionPlane & intersectionSegment. ([nockawa](https://github.com/nockawa))
- LinesMesh class now supports Intersection. Added the intersectionThreshold property to set a tolerance margin during intersection with wire lines. ([nockawa](https://github.com/nockawa))
- Geometry.boundingBias property to enlarge the boundingInfo objects ([nockawa](https://github.com/nockawa))
- Tools.ExtractMinAndMax & ExtractMinAndMaxIndexed now supports an optional Bias for Extent computation.
- Added StringDictionary<T> class to implement an efficient generic typed string dictionary based on Javascript associative array. ([quick doc](http://www.html5gamedevs.com/topic/22566-be-efficient-my-friend-use-stringdictionary/)) ([nockawa](https://github.com/nockawa))
- Added RectanglePackingMap class to fit several rectangles in a big map in the most optimal way, dynamically. ([nockawa](https://github.com/nockawa))
- Added DynamicFloatArray class to store float32 based elements of a given size (stride) into one big Float32Array, with allocation/free/pack operations to then access an optimal buffer that can be used to update a WebGLBuffer dynamically.([quick doc](http://www.html5gamedevs.com/topic/22567-dynamicfloatarray-to-the-rescue-for-efficient-instanced-array/)) ([nockawa](https://github.com/nockawa))
- Scene.onPointerObservable property added to enable a unique Observable event for user input (see ArcRotateCamera inputs for examples) ([nockawa](https://github.com/nockawa))
- Oimo.js updated to the latest version ([RaananW](https://github.com/RaananW))
- Added PhysicsImpostor and PhysicsJoint classes  ([RaananW](https://github.com/RaananW))
- LensFlareSystem now has both ID and name  ([RaananW](https://github.com/RaananW))
- TargetCamera has now a rotationQuaternion variable to can be used to set the camera's rotation  ([RaananW](https://github.com/RaananW))
- SSAORenderingPipeline now uses bilateral blur post-processes instead of standard blur post-process, in order to remove more efficiently the "textile effect"
- `Engine.updateDynamicVertexBuffer` now has optional count as well as offset to allow partial updates ([benaadams](https://github.com/benaadams)) 
- vertex attributes are only disabled if they aren't going to be reeabled by the next draw, to reduce gpu state changes ([benaadams](https://github.com/benaadams)) 

#### Bug fixes
- Fixed bug with billboards and parenting ([deltakosh](https://github.com/deltakosh))
- Fixed bug with ArcRotateCamera.setTarget ([deltakosh](https://github.com/deltakosh))
- Fixed bug with OBJ Loader - All meshes were concatenated with the previous one ([Temechon](https://github.com/Temechon))
- Fixed the device orientation cameras (both VR and non-VR cameras)  ([RaananW](https://github.com/RaananW))
- Fixed the WebVR implementation  ([RaananW](https://github.com/RaananW))
- `DynamicTexture.clone()` now preserves height in addition to width  ([dahlbyk](https://github.com/dahlbyk))
- Fixed missing some parameter default values in `MeshBuilder.CreateGroundFromHeightMap()` and `MeshBuilder.CreateTiledGround()` ([jerome](https://github.com/jbousquie))
- Fixed model shape initial red vertex color set to zero not formerly being taken in account in the `SolidParticleSystem` ([jerome](https://github.com/jbousquie))

#### Breaking changes
- `VertexData.CreateLines()` removed as `MeshBuilder.CreateLines()` now calls `MeshBuilder.CreateLineSystem()`
- `scene.onNewXXXAdded` and `scene.onXXXRemoved` callbacks were removed and replaced by `scene.onNewXXXAddedObservable` and `scene.onXXXRemovedObservable`
- `Material.dispose` does not dispose textures by default. You have to call `material.dispose(false, true)` to get the previous behavior.
- `SSAORenderingPipeline.getBlurHPostProcess` and `SSAORenderingPipeline.getBlurVPostProcess`. The SSAO rendering pipeline doesn't use standard blur post-process anymore. A bilateral blur post-process is used instead.
- `Engine.bindBuffers` is now `Engine.bindBuffersDirectly` ([benaadams](https://github.com/benaadams))
- `Engine.bindMultiBuffers` is now `Engine.bindBuffers` and strongly typed `{ [key: string]: VertexBuffer; }` of buffers ([benaadams](https://github.com/benaadams))
- `Engine.createDynamicVertexBuffer` takes vertices rather than capacity, creating and initalizing in one gpu instruction ([benaadams](https://github.com/benaadams)) 
- Internally new `Engine.bindBuffer` is used rather than `gl.bindBuffer` which only binds when the bound buffer is changing ([benaadams](https://github.com/benaadams)) 
- `DynamicTexture` no longer forces height/width to exponents of 2 if MIP maps are disabled ([dahlbyk](https://github.com/dahlbyk))

### Exporters
- Unity3D exporter: Added support for lightmaps ([davrous](https://github.com/davrous), [deltakosh](https://github.com/deltakosh))
- Unity3D exporter: Added support for export and run (local webserver) ([davrous](https://github.com/davrous), [deltakosh](https://github.com/deltakosh))
- Unity exporter now support skeletons ([sebavan](https://github.com/sebavan))
- Support for 3dsmax 2017 ([deltakosh](https://github.com/deltakosh))
- Added support for up to 8 bones influences per vertex for 3dsmax exporter ([deltakosh](https://github.com/deltakosh))
- Added console logging for .babylon file loading & depreciated SceneLoader.Load() in favor of Append() ([jcpalmer](https://github.com/Palmer-JC))

### API doc
- class `SolidParticleSystem` documented ([jerome](https://github.com/jbousquie))
- class `MeshBuilder` documented ([jerome](https://github.com/jbousquie))
- class `Mesh` documented ([jerome](https://github.com/jbousquie))

## 2.3.0

### Core Engine

#### Major updates
- [Sponza demo](http://www.babylonjs.com/Demos/Sponza/)
- Support for procedural cube textures [Demo here](http://www.babylonjs.com/Demos/planet/) ([deltakosh](https://github.com/deltakosh))
- New UniversalCamera which support keyboard, mouse, touch and gamepad ([davrous](https://github.com/davrous))
- Point lights shadow mapping. [Demo here](http://www.babylonjs-playground.com/#LYCSQ#12) ([deltakosh](https://github.com/deltakosh))
- Introducing [Materials Library](https://github.com/BabylonJS/Babylon.js/tree/master/materialsLibrary) ([deltakosh](https://github.com/deltakosh))
    - Water material: http://doc.babylonjs.com/extensions/Water. [Demo here](http://www.babylonjs.com/Demos/WaterMaterial/) ([julien-moreau](https://github.com/julien-moreau))
    - Fire material: http://doc.babylonjs.com/extensions/fire. [Demo here](http://www.babylonjs.com/Demos/FireMaterial/) ([julien-moreau](https://github.com/julien-moreau))
    - Normal material: http://doc.babylonjs.com/extensions/normal ([temechon](https://github.com/temechon))
    - Lava Material: http://doc.babylonjs.com/extensions/lava ([temechon](https://github.com/temechon))
    - PBR Material: http://doc.babylonjs.com/extensions/pbr ([deltakosh](https://github.com/deltakosh))
    - Fur Material: http://doc.babylonjs.com/extensions/Fur. [Demo here](http://www.babylonjs.com/Demos/Fur/) ([julien-moreau](https://github.com/julien-moreau))
- Introducing [Procedural textures Library](https://github.com/BabylonJS/Babylon.js/tree/master/proceduralTexturesLibrary) ([meulta](https://github.com/meulta)
- New cache mechanism for StandardMaterial ([deltakosh](https://github.com/deltakosh))
- New Solid Particle System [Demo here](http://www.babylonjs.com/Demos/SPS/) ([jerome](https://github.com/jbousquie))
- New `StandardMaterial.lightmapTexture` which can be controlled with `StandardMaterial.useLightmapAsShadowMap` ([deltakosh](https://github.com/deltakosh))
- Support for reflection probes. [See documentation here](http://doc.babylonjs.com/tutorials/How_to_use_Reflection_probes) ([deltakosh](https://github.com/deltakosh))
- New serializers [folder](https://github.com/BabylonJS/Babylon.js/serializers) to host .babylon serializers ([deltakosh](https://github.com/deltakosh))
    - New .obj serializer ([BitOfGold](https://github.com/BitOfGold))
- Sprites now can be [picked](http://www.babylonjs-playground.com/#1XMVZW#4) and can use [actions](http://www.babylonjs-playground.com/#9RUHH#4) ([deltakosh](https://github.com/deltakosh))
- New `Mesh.CreatePolyhedron()` method ([jerome](https://github.com/jbousquie))
- New `Mesh.CreateIcoSphere()` method [Demo here](http://www.babylonjs-playground.com/#24DUYD) (G'kar)
- Introducing [babylon.core.js](http://doc.babylonjs.com/generals/Framework_versions) ([deltakosh](https://github.com/deltakosh))
- Introducing AnimationRanges for Skeletons and Animations ([deltakosh](https://github.com/deltakosh))
    - Added parsing / serialization, copying between similar skeletons & better deletion ([Palmer-JC](https://github.com/Palmer-JC))
    - Expanded AnimationRanges for Nodes (Mesh, Lights, Cameras) ([Palmer-JC](https://github.com/Palmer-JC))
    - Support for added to Blender Exporter ([Palmer-JC](https://github.com/Palmer-JC))
- Support for glTF files [loader](https://github.com/BabylonJS/Babylon.js/tree/master/dist/preview release/loaders) ([julien-moreau](https://github.com/julien-moreau))

#### Updates
- Audio files are now saved for offline access ([davrous](https://github.com/davrous))
- New `CubeTexture.CreateFromImages()` ([deltakosh](https://github.com/deltakosh))
- Bounding info can be locked and updated (`bb.isLocked` and `bb.update()`) ([deltakosh](https://github.com/deltakosh))
- 2D layers now have a scale and offset properties ([deltakosh](https://github.com/deltakosh))
- TouchCamera can now fallback to regular mouse/keyboard controls ([deltakosh](https://github.com/deltakosh))
- Added ability to skip current prepared Action to next active Action (chained by Action.then(Action)) ([vouskprod](http://www.github.com/vousk))
- Added new event triggers `ActionManager.OnLongPressTrigger` and `ActionManager.OnPickDownTrigger` ([vouskprod](http://www.github.com/vousk))
- new `Mesh.convertToUnIndexedMesh()` to create meshes with no indices (which could be faster when vertex reuse is low and vertex structure is small) ([deltakosh](https://github.com/deltakosh))
- Unity3D exporter will recognise instances of prefabs ([ozRocker](https://github.com/punkoffice))
- New parse mechanism (for loading .babylon file) ([deltakosh](https://github.com/deltakosh))
- New button to log the camera position in the debug layer ([temechon](https://github.com/temechon))
- Shader files (fragment and vertex) can now be specified via direct URL ([vouskprod](http://www.github.com/vousk))
- Added `Animatable.goToFrame()` ([deltakosh](https://github.com/deltakosh))
- Fixed behavior or `Animation.CreateAndStartAnimation` and added `Animation.CreateMergeAndStartAnimation` to reproduce previous behavior ([deltakosh](https://github.com/deltakosh))
- Adding `StandardMaterial.linkEmissiveWithDiffuse` to, well, link emissive with diffuse value. (With)[http://www.babylonjs-playground.com/#2FPUCS#2] and (without)[http://www.babylonjs-playground.com/#2FPUCS#1] ([deltakosh](https://github.com/deltakosh))
- Adding support for equi-rectangular mapping. See [demo here](http://www.babylonjs-playground.com/#27FN5R#12) ([deltakosh](https://github.com/deltakosh))
- Sprites and particles scheduler updated to be resolved before transparent objects ([deltakosh](https://github.com/deltakosh))
- Added ability to deactivate ArcRotateCamera panning mechanism (by setting panningSensibility to 0) ([vouskprod](http://www.github.com/vousk))
- Added `DirectionalLight.autoUpdateExtends` to prevent directional lights to adapt to scene extends ([deltakosh](https://github.com/deltakosh))
- Added a new parameter to `debugLayer.show()` to define root element to use ([deltakosh](https://github.com/deltakosh))
- New `MeshBuilder` class used to create all kind of mesh shapes ([deltakosh](https://github.com/deltakosh))
- Added `Scene.constantlyUpdateMeshUnderPointer` to improve performance when moving mouse ([deltakosh](https://github.com/deltakosh))
- Added `StandardMaterial.disableLighting` ([deltakosh](https://github.com/deltakosh))
- Improved reflection shader performance ([deltakosh](https://github.com/deltakosh))
- New `Material.sideOrientation` property to define clockwise or counter-clockwise faces selection. [Demo here](http://www.babylonjs-playground.com/#1TZJQY) ([deltakosh](https://github.com/deltakosh))
- It is now possible to create a custom loading screen. [PR](https://github.com/BabylonJS/Babylon.js/pull/700) ([RaananW](https://github.com/RaananW))
- Per face color and texture feature in `MeshBuilder.CreateCylinder()` ([jerome](https://github.com/jbousquie))
- _Arc_ feature in `CreateCylinder`, `CreateSphere`, `CreateTube`, `CreateDisc` and `CreateLathe` ([jerome](https://github.com/jbousquie))
- _Slice_ feature in `MeshBuilder.CreateSphere()` ([jerome](https://github.com/jbousquie))
- `closed` parameter in `MeshBuilder.CreateLathe()` ([jerome](https://github.com/jbousquie))
- `cap` parameter in `MeshBuilder.CreateLathe()` ([jerome](https://github.com/jbousquie))
- `diameter`, `hasRings`, `enclose` parameters in `MeshBuilder.CreateCreateCylinder()` ([jerome](https://github.com/jbousquie))
- added `getNormalAtCoordinates()` and `getNormalAtCoordinatesToRef()` methods in `MeshBuilder.CreateLathe()` ([jerome](https://github.com/jbousquie))
- `Material.dispose()` now removes disposed material from meshes ([deltakosh](https://github.com/deltakosh))
- New `Material.getBindedMeshes()` function ([deltakosh](https://github.com/deltakosh))
- OimoJS Plugin now uses Quaternions exclusively and calculates body rotations correctly. [PR](https://github.com/BabylonJS/Babylon.js/pull/761) ([RaananW](https://github.com/RaananW))
- It is now possible to get the physics engine's body and wolrd objects using the physics engine. [PR](https://github.com/BabylonJS/Babylon.js/pull/761) ([RaananW](https://github.com/RaananW))
- new Heightmap Impostor for Cannon.js physics engine. [PR](https://github.com/BabylonJS/Babylon.js/pull/78), [Demo] (http://www.babylonjs-playground.com/#D3LQD#3) ([RaananW](https://github.com/RaananW))
- A plane mesh can be created with a source plane (math). [PR](https://github.com/BabylonJS/Babylon.js/pull/779) ([RaananW](https://github.com/RaananW))
- AbstractMesh.onPhysicsCollide will be triggered when a physics-enabled mesh collides against another. [PR](https://github.com/BabylonJS/Babylon.js/pull/806) ([RaananW](https://github.com/RaananW))
- Added scene onPointerMove public callback. [PR](https://github.com/BabylonJS/Babylon.js/pull/810) ([RaananW](https://github.com/RaananW))
- Added streaming support for BABYLON.Sound ([davrous](https://github.com/davrous))
- Added collisionsEnabled and workerCollisions for serialization [PR](https://github.com/BabylonJS/Babylon.js/pull/830) ([Dad72](https://github.com/dad72))
- Changed from a fixed maximum of bone influencers, 4, to variable, 1-8 ([Palmer-JC](https://github.com/Palmer-JC))
    - Support for added to Blender Exporter ([Palmer-JC](https://github.com/Palmer-JC))
- Float32Arrays can now directly be specified for vertex data attributes, `Mesh.updateVerticesDataDirectly` deprecated ([Palmer-JC](https://github.com/Palmer-JC))
- Added panning axis to the ArcRotateCamera [PR](https://github.com/BabylonJS/Babylon.js/pull/913) ([mstdokumaci](https://github.com/mstdokumaci), [RaananW](https://github.com/RaananW))
- Added `Tmp` class for internal use in order to improvement the memory management, [jerome](https://github.com/jbousquie))
- Added `Scene.swithActiveCamera(newCamera, attachControl)` to go from one camera active to another. ([dad72](https://github.com/dad72)) [PR](https://github.com/BabylonJS/Babylon.js/pull/928)

#### Bug fixes
- Fixed IDB for offline support ([davrous](https://github.com/davrous))
- Fixed a bug with spherical mapping ([deltakosh](https://github.com/deltakosh))
- Fixed a bug with clone and createInstance which was forcing the recomputation of bounding boxes ([deltakosh](https://github.com/deltakosh))
- Fixed a bug with CSG when submeshes are kept ([deltakosh](https://github.com/deltakosh))
- Fixed a bug with texture coordinates matrices ([deltakosh](https://github.com/deltakosh))
- Fixed Sphere texture coordinates generation ([deltakosh](https://github.com/deltakosh))
- Fixed a bug with `Mesh.attachToBone` when bone's matrix has a negative determinant ([deltakosh](https://github.com/deltakosh))
- Fixed a possible but with the active camera while taking a screenshot. [PR](https://github.com/BabylonJS/Babylon.js/pull/701) ([RaananW](https://github.com/RaananW))
- Fixed a bug with worker-collisions and instances. [PR](https://github.com/BabylonJS/Babylon.js/pull/705) ([RaananW](https://github.com/RaananW))
- Fixed a bug with removed meshes and geometries from the worker-cache. [PR](https://github.com/BabylonJS/Babylon.js/pull/711) ([RaananW](https://github.com/RaananW))
- Fixed `getHeightAtCoordinates()` : brand new ultra fast algorithm, can be used for many objects at once in the render loop now ([jerome](https://github.com/jbousquie))
- Fixed `closePath` and `closeArray` ribbon parameter now working back together ([jerome](https://github.com/jbousquie))
- Fixed morphing on capped tubes  ([jerome](https://github.com/jbousquie))
- Fixed morphing on extruded shapes  ([jerome](https://github.com/jbousquie))
- Fixed tube and extruded shape cap light artifact  ([jerome](https://github.com/jbousquie))
- Fixed lathe light artifact with dedicated new geometry  ([jerome](https://github.com/jbousquie))
- Fixed a bug calculating velocity during collision with gravity enabled. [PR](https://github.com/BabylonJS/Babylon.js/pull/738) ([RaananW](https://github.com/RaananW))
- Fixed a bug in instance serialization. [PR](https://github.com/BabylonJS/Babylon.js/pull/726) ([RaananW](https://github.com/RaananW))
- Fixed a memory leak with textures ([deltakosh](https://github.com/deltakosh))

#### Breaking changes
- `ActionManager.OnPickTrigger` now acts as a single click/tap and is not raised on drag or swipe anymore. To get the old behavior, `ActionManager.OnPickDownTrigger` should be used instead ([vouskprod](http://www.github.com/vousk))
- `VertexData.CreateCylinder()` now supports only the single _options_ parameter ([jerome](https://github.com/jbousquie))
- `VertexData.CreateRibbon()` now supports only the single _options_ parameter ([jerome](https://github.com/jbousquie))
- `VertexData.CreateBox()` now supports only the single _options_ parameter ([jerome](https://github.com/jbousquie))
- `VertexData.CreateSphere)` now supports only the single _options_ parameter ([jerome](https://github.com/jbousquie))
- `VertexData.CreateTorus()` now supports only the single _options_ parameter ([jerome](https://github.com/jbousquie))
- `VertexData.CreateTorusKnot()` now supports only the single _options_ parameter ([jerome](https://github.com/jbousquie))
- `VertexData.CreatePlane()` now supports only the single _options_ parameter ([jerome](https://github.com/jbousquie))
- `VertexData.CreateDisc()` now supports only the single _options_ parameter ([jerome](https://github.com/jbousquie))
- `VertexData.CreateLines()` now supports only the single _options_ parameter ([jerome](https://github.com/jbousquie))
- `VertexData.CreateDashedLines()` now supports only the single _options_ parameter ([jerome](https://github.com/jbousquie))
- `VertexData.CreateGround()` now supports only the single _options_ parameter ([jerome](https://github.com/jbousquie))
- `VertexData.CreateTiledGround()` now supports only the single _options_ parameter ([jerome](https://github.com/jbousquie))
- `VertexData.CreateGroundFromHeightMap()` now supports only the single _options_ parameter ([deltakosh](https://github.com/deltakosh))
- `Tools.IsExponantOfTwo()` renamed to `Tools.IsExponentOfTwo()` ([deltakosh](https://github.com/deltakosh))
- `Tools.GetExponantOfTwo()` renamed to `Tools.GetExponentOfTwo()` ([deltakosh](https://github.com/deltakosh))
- Updated Cannon.js plugin to the newest version (0.6.2). New cannon.js must be used. [PR](https://github.com/BabylonJS/Babylon.js/pull/755) ([RaananW](https://github.com/RaananW))

## 2.2.0

### Core Engine

#### Major updates
- Blender can now bake Procedural textures & Cycles materials.  Plus more. See [documentation here](https://github.com/BabylonJS/Babylon.js/tree/master/Exporters/Blender) ([Palmer-JC](https://github.com/Palmer-JC))
- Meshes can now be attached to bones. See [documentation here](http://doc.babylonjs.com/tutorials/How_to_use_Bones_and_Skeletons) and [sample here](http://www.babylonjs-playground.com/#11BH6Z#18) ([deltakosh](https://github.com/deltakosh))
- HDR Rendering pipeline. See [demo here](http://www.babylonjs-playground.com/#2EGN4U#2) ([julien-moreau](https://github.com/julien-moreau))
- New rewored StandardMaterial.isReady for better memory usage and performance ([deltakosh](https://github.com/deltakosh))
- Revamping of FBX exporter. Now supports animations and bones ([simonferquel](http://www.github.com/simonferquel), [deltakosh](https://github.com/deltakosh))
- StandardMaterial.useGlossinessFromSpecularMapAlpha to use specular map alpha as glossiness level ([deltakosh](https://github.com/deltakosh))    
- Added support for StandardMaterial.roughness. See [demo here](http://www.babylonjs-playground.com/#RNBKQ#8) ([deltakosh](https://github.com/deltakosh))
- OBJ loader. See [demo here](http://www.babylonjs-playground.com/#28YUR5) ([Temechon](https://github.com/Temechon))
- EdgesRenderer. See [demo here](http://www.babylonjs-playground.com/#TYAHX#10) ([deltakosh](https://github.com/deltakosh))
- Actions Builder tool for 3dsmax exporter. More info [here](https://medium.com/babylon-js/actions-builder-b05e72aa541a) ([julien-moreau](https://github.com/julien-moreau))

#### Updates
- Adding layerMask to lensFlareSystem, spritesManager, particleSystem ([deltakosh](https://github.com/deltakosh))
- Adding emissiveAsIllumination and reflectionFresnelFromSpecular for StandardMaterial ([deltakosh](https://github.com/deltakosh))
- Adding isEnabled for ProceduralTexture ([deltakosh](https://github.com/deltakosh))
- Compression supported for raw textures ([deltakosh](https://github.com/deltakosh))
- New TonemapPostProcess. See [demo here](http://www.babylonjs-playground.com/#ELTGD) ([deltakosh](https://github.com/deltakosh))
- New options parameters for Box, Sphere, Plane and Ground. See [demo here](http://www.html5gamedevs.com/topic/17044-evolution-for-out-of-the-box-meshes-creation/) ([deltakosh](https://github.com/deltakosh))
- Added per face UV and Colors options for `CreateBox` ([jerome](https://github.com/jbousquie))
- Added darkness support for soft shadows ([deltakosh](https://github.com/deltakosh))
- Added scene.getLensFlareSystemByName() ([deltakosh](https://github.com/deltakosh))
- Added LensFlareSystem.setEmitter() ([deltakosh](https://github.com/deltakosh))
- Added Color3.FromHexString() and Color3.toHexString() ([deltakosh](https://github.com/deltakosh))
- Added Color4.FromHexString() and Color4.toHexString() ([deltakosh](https://github.com/deltakosh))
- Added mesh.computeBonesUsingShaders to allow developers to disable HW skinning for low end devices ([deltakosh](https://github.com/deltakosh))
- Added material.disableDepthWrite (default is off) ([deltakosh](https://github.com/deltakosh))
- Added material.alphaMode (default is BABYLON.Engine.ALPHA_COMBINE, can be set to BABYLON.Engine.ALPHA_ADD, *_SUBTRACT, *_MULTIPLY or *_MAXIMIZED ) ([deltakosh](https://github.com/deltakosh), [jahow](https://github.com/jahow))
- Added Animatable.reset() function ([deltakosh](https://github.com/deltakosh))
- New parameter for ArcRotateCamera.zoomOn to preserve maxZ ([deltakosh](https://github.com/deltakosh))
- PickingInfo.getNormal can now use either vertices normals or vertices positions ([deltakosh](https://github.com/deltakosh))
- Meshes can now support uv2, uv4, uv5 and uv6 for ShaderMaterials ([deltakosh](https://github.com/deltakosh))
- Panning support for ArcRotateCamera ([julien-moreau](https://github.com/julien-moreau))
- Vertex color and diffuse color can now be mixed ([deltakosh](https://github.com/deltakosh))
- Depth-of-field improvements [PR](https://github.com/BabylonJS/Babylon.js/pull/567) ([jahow](https://github.com/jahow))
- Engine now initialize WebGL with preserveDrawingBuffer = false by default ([deltakosh](https://github.com/deltakosh))
- withEpsilon with a user defined epsilon [PR](https://github.com/BabylonJS/Babylon.js/pull/573) ([RaananW](https://github.com/RaananW))
- Adding onAfterRender function in BABYLON.PostProcess [PR](https://github.com/BabylonJS/Babylon.js/pull/572) ([julien-moreau](https://github.com/julien-moreau))
- Improved shaders optimizer to remove specular code when not needed ([deltakosh](https://github.com/deltakosh))    
- Added some utility functions to Vector2/3/4 [PR](https://github.com/BabylonJS/Babylon.js/pull/578) ([jahow](https://github.com/jahow))
- Added split angularSensibiliy into X and Y for arcRotateCamera [PR](https://github.com/BabylonJS/Babylon.js/pull/683) ([Remwrath](https://github.com/Remwrath))
- Added function getFrontPosition(distance) for Camera [PR](https://github.com/BabylonJS/Babylon.js/pull/681) ([dad72](https://github.com/dad72))
- New rawTexture.update function ([robgdl](https://github.com/robgdl))
- Changes to meshes transform baking and added flipFaces [PR](https://github.com/BabylonJS/Babylon.js/pull/579) ([jahow](https://github.com/jahow))
- SerializeMesh serializes a mesh or array of meshes to be imported with the loader's ImportMesh optionally including their children and/or parents. [PR](https://github.com/BabylonJS/Babylon.js/pull/583) [PR2](https://github.com/BabylonJS/Babylon.js/pull/609) ([RaananW](https://github.com/RaananW))
- onCollide callback for meshes calling moveWithCollisions. [PR](https://github.com/BabylonJS/Babylon.js/pull/585) ([RaananW](https://github.com/RaananW))
- Unity Exporter now uses game object name as the Babylon.js mesh name, instead of mesh name which is not unique when dealing with primitive objects (cubes, spheres, planes, etc..) ([ozRocker](https://github.com/punkoffice))
- Path3D construction : new _raw_ parameter, if true returns a non-normalized Path3D object ([jerome](https://github.com/jbousquie))
- Added `Vector3.RotationFromAxisToRef()` :  same as `RotationFromAxis()` but assigns a reference ([jerome](https://github.com/jbousquie))
- `ComputeNormals` optimization : less object allocation and normal array initialization ([jerome](https://github.com/jbousquie))
- Ribbon : _closePath_ parameter now creates a smooth seam ([jerome](https://github.com/jbousquie))

#### Bug fixes
- Fixing bug with rig cameras positioning ([deltakosh](https://github.com/deltakosh))
- Instance meshes' geometry ID is now serialized correctly. [PR](https://github.com/BabylonJS/Babylon.js/pull/607) ([RaananW](https://github.com/RaananW))
- Bug fix at set numberOfBricksWidth [PR](https://github.com/BabylonJS/Babylon.js/pull/684) ([Polatouche](https://github.com/Polatouche))

#### Breaking changes
- In LensRenderingPipeline: parameter `dof_focus_depth` (range 0..1) is deprecated, use `dof_focus_distance` (range 0..infinity) instead ([jahow](https://github.com/jahow))
- Cylinder Mesh complete reimplementation for better normals ([jerome](https://github.com/jbousquie))
- `RotationFromAxis()` : fixed the dot product case outside the range [-1, 1] ([jerome](https://github.com/jbousquie))
- Path3D : fix wrong normal/binormal due to normalization approximations ([jerome](https://github.com/jbousquie))

## 2.1.0

### Core Engine

#### Major updates
- Collisions can now be offloaded on webworkers ([raananw](http://www.github.com/raananw))
- SIMD.js support for math library. See [demo](http://www.babylonjs.com/scenes/simd.html) ([deltakosh](http://www.github.com/deltakosh))
- Unity 5  scene exporter. More info [here](https://github.com/BabylonJS/Babylon.js/tree/master/Exporters/Unity%205) ([davrous](http://www.github.com/davrous), [deltakosh](http://www.github.com/deltakosh))
- New ```Mesh.CreateDecal()``` function to create decals. See [demo](http://www.babylonjs.com/?DECALS). More info [here](http://doc.babylonjs.com/page.php?p=25094) ([deltakosh](http://www.github.com/deltakosh))
- New tool for debugLayer: You can now dump renderTargets to see their content ([deltakosh](http://www.github.com/deltakosh))
- Complete shadows code rework: New bias property for ShadowGenerator, new orthogonal shadows for directional shadows, automatic projection size for directional lights, new BlurVarianceShadowMap filter. See [demo](http://www.babylonjs.com/?SOFTSHADOWS). Documentation updated [here](http://babylondoc.azurewebsites.net/page.php?p=22151) ([deltakosh](http://www.github.com/deltakosh))
- New lens effects rendering pipeline. More info [here](http://doc.babylonjs.com/page.php?p=24841) ([jahow](https://github.com/jahow))
- New basic mesh type: Ribbons. See [demo](http://www.babylonjs.com/?RIBBONS). More info [here](http://doc.babylonjs.com/page.php?p=25088) ([jbousquie](https://github.com/jbousquie))
- New ```BABYLON.Mesh.ExtrudeShape``` and ```BABYLON.Mesh.ExtrudeShapeCustom```. More info [here](http://doc.babylonjs.com/page.php?p=24847) ([jbousquie](https://github.com/jbousquie))
- New Loaders folder with a first additionnal plugin: [STL](http://doc.babylonjs.com/page.php?p=25109)  ([raananw](http://www.github.com/raananw), [deltakosh](http://www.github.com/deltakosh))
- Gulp building process revamped, updated and simplified and now includes a config.json ([raananw](http://www.github.com/raananw)) 

#### Updates
- Better beta angle support for ArcRotateCamera ([raananw](http://www.github.com/raananw))
- Better video textures support ([deltakosh](http://www.github.com/deltakosh))
- Cameras hierarchy rework ([deltakosh](http://www.github.com/deltakosh))
- New ```Camera.setCameraRigMode``` to control 3D rendering of any camera (Anaglyph, Stereo, VR) ([Palmer-JC](http://www.github.com/Palmer-JC), [vousk](https://github.com/vousk))
- VR cameras can disable distortion postprocess to get more performance ([deltakosh](http://www.github.com/deltakosh))
- New cameras: AnaglyphGamepadCamera, StereoscopicFreeCamera, StereoscopicArcRotateCamera, StereoscopicGamepadCamera ([deltakosh](http://www.github.com/deltakosh))
- New ```MultiMaterial.clone()``` function ([deltakosh](http://www.github.com/deltakosh))
- Faster ```mesh.computeNormals()``` function ([jbousquie](https://github.com/jbousquie))
- Added the ability [to dynamically update or to morph](http://doc.babylonjs.com/page.php?p=25096) an mesh instance ([jbousquie](https://github.com/jbousquie))
- Allow static Mesh.MergeMeshes to work with clones & Mesh subclasses ([Palmer-JC](http://www.github.com/Palmer-JC))
- Added mesh.freezeWorldMatrix() for static meshes ([deltakosh](http://www.github.com/deltakosh))
- Added mesh.freezeNormals() for parametric mesh updates ([jbousquie](http://www.github.com/jbousquie))
- Added Vector3.RotationFromAxis() to get Euler rotation angles from a target system ([jbousquie](http://www.github.com/jbousquie))
- Added mesh.alwaysSelectAsActiveMesh to disable frustum clipping for a specific mesh ([deltakosh](http://www.github.com/deltakosh))
- Added updateMeshPositions method ([jbousquie](https://github.com/jbousquie))
- Callbacks for geometry changes ([raananw](http://www.github.com/raananw))
- Allow Engine to run for CocoonJS with standard html, including devices where the hardware scaling != 1 ([Palmer-JC](http://www.github.com/Palmer-JC))
- Material onBind callback improvement ([jahow](http://www.github.com/jahow))
- New front/back/double side feature for meshes ([jbousquie](https://github.com/jbousquie)) 
- New basic mesh type: Disc ([jbousquie](https://github.com/jbousquie))
- New basic mesh type : Dashed Lines ([jbousquie](https://github.com/jbousquie))
- New basic mesh type : Lathe ([jbousquie](https://github.com/jbousquie))
- New basic mesh type: Tube. More info [here](http://doc.babylonjs.com/page.php?p=24847) ([jbousquie](https://github.com/jbousquie))
- Allow ComputeNormals to work with Typed Arrays & the Typescript Level ([Palmer-JC](http://www.github.com/Palmer-JC))
- Added uniqueId for nodes ([raananw](http://www.github.com/raananw))
- Added ```Mesh.onLODLevelSelection(distance: number, mesh: Mesh, selectedLevel: Mesh)``` callback ([deltakosh](http://www.github.com/deltakosh))
- Added ```Material.zOffset``` to help reducing z-fighting ([deltakosh](http://www.github.com/deltakosh))
- Added excludeWithLayerMask to lights ([Palmer-JC](http://www.github.com/Palmer-JC))
- Added includeOnlyWithLayerMask for filtering meshes ([Palmer-JC](http://www.github.com/Palmer-JC))
- Mesh Default layerMask changed to allow more "special cameras filtering" ([Palmer-JC](http://www.github.com/Palmer-JC))
- Sprite can now have .width and .height properties ([deltakosh](http://www.github.com/deltakosh))
- Ability to register events based on mesh/camera/light addition and deletion ([raananw](http://www.github.com/raananw))
- New ```Curve``` object ([jbousquie](https://github.com/jbousquie)) More info [here](http://doc.babylonjs.com/page.php?p=25091)
- New ```Path3D``` object ([jbousquie](https://github.com/jbousquie)) More info [here](http://doc.babylonjs.com/page.php?p=25090)
- New 'color correction' post process ([jahow](http://www.github.com/jahow))
- Added sampling mode as a parameter for SpriteManager ([jahow](http://www.github.com/jahow))
- RenderTexture can now be saved to a file ([deltakosh](http://www.github.com/deltakosh))
- Better attributes management ([deltakosh](http://www.github.com/deltakosh))
- Source conform to typescript 1.4 ([raananw](http://www.github.com/raananw)) 
- Adding subMeshId property in PickingInfo structure ([deltakosh](http://www.github.com/deltakosh))
- No more error when a manifest is not found ([deltakosh](http://www.github.com/deltakosh))

 #### Bug fixes
- Initial quaternion fix for OIMO plugin ([raananw](http://www.github.com/raananw)) 
- ArcRotateCamera pinch zoom debug ([vousk](https://github.com/vousk)) 
- Fixing animatable bug when animation is over ([temechon](http://www.github.com/temechon))
- useCameraPostProcess whenever there is a special camera in use ([m0ppers](https://github.com/m0ppers))
- delta in BoundingBox's intersectsPoint is now calculated correctly ([raananw](http://www.github.com/raananw)) 
- textures cache fixed ([deltakosh](http://www.github.com/deltakosh))
- ImportMesh now imports referenced geometries of selected meshes ([raananw](http://www.github.com/raananw)) 
- CSG toMesh() and FromMesh() now support meshes without quaternion ([raananw](http://www.github.com/raananw)) 

##### Breaking changes
- OculusCamera was removed ([deltakosh](http://www.github.com/deltakosh))
- VRDeviceOrientationCamera was renamed to VRDeviceOrientationFreeCamera ([deltakosh](http://www.github.com/deltakosh))
- WebVRCamera was renamed to WebVRFreeCamera ([deltakosh](http://www.github.com/deltakosh))
- VideoTexture does not require a size parameter anymore. The new constructor is: ```constructor(name: string, urls: string[], scene: Scene, generateMipMaps = false, invertY = false, samplingMode: number = Texture.TRILINEAR_SAMPLINGMODE)```  ([deltakosh](http://www.github.com/deltakosh))

## 2.0.0

### Core Engine

#### Major updates
 - Support for WebAudio. More info [here](http://doc.babylonjs.com/page.php?p=24824) ([davrous](http://www.github.com/davrous))
 - Support for Procedural Texture with standard usable samples and custom support. More info [here](http://doc.babylonjs.com/page.php?p=22601) ([meulta](http://www.github.com/meulta))
 - Support for OES_element_index_uint extension in order to support 32 bits indices and then meshes with more than 65536 vertices ([deltakosh](http://www.github.com/deltakosh))
 - Support for levels of detail (LOD) for meshes. More info [here](http://doc.babylonjs.com/page.php?p=22591) ([deltakosh](http://www.github.com/deltakosh))
 - New Scene Optimizer tool. More [here](http://doc.babylonjs.com/page.php?p=22581) ([deltakosh](http://www.github.com/deltakosh))
 - Support for [user marks](http://blogs.msdn.com/b/eternalcoding/archive/2015/02/02/using-user-mark-to-analyze-performance-of-your-javascript-code.aspx) ([deltakosh](http://www.github.com/deltakosh))
 - Using High Resolution Time for performance and FPS measurement ([deltakosh](http://www.github.com/deltakosh))
 - Easing functions for animations. More info [here](http://doc.babylonjs.com/page.php?p=22081) ([mimetis](https://github.com/mimetis)) 
 - New debug layer than can be used to display debug informations. More info [here](http://doc.babylonjs.com/page.php?p=22611) ([deltakosh](http://www.github.com/deltakosh))
 - New ```PolygonMeshBuilder``` object used to create mesh from [polygons](http://www.babylonjs-playground.com/#10IOII%231) ([ElemarJR](https://github.com/ElemarJR))
 - New ```Mesh.simplify()``` function to automatically simplify meshes. More info [here](http://doc.babylonjs.com/page.php?p=24822) ([raananw](http://www.github.com/raananw))
 - New ```scene.enableDepthRenderer()``` to register depth texture rendering. More info [here](http://doc.babylonjs.com/page.php?p=24825) ([deltakosh](http://www.github.com/deltakosh))
 - New ```SSAORenderingPipeline``` to apply screen space ambient occlusion. More info [here](http://doc.babylonjs.com/page.php?p=24837) ([julien-moreau](http://www.github.com/julien-moreau)) 
 - New ```VolumetricLightScatteringPostProcess``` to simulate volumetric light scattering. More info [here](http://doc.babylonjs.com/page.php?p=24840) ([julien-moreau](http://www.github.com/julien-moreau)) 
 - 3dsMax exporter can now generate binary format files ([deltakosh](http://www.github.com/deltakosh)) 

#### Updates
 - Moving of cloning into Mesh constructor ([Palmer-JC](http://www.github.com/Palmer-JC)) 
 - Camera types support in 3dsmax exporter ([deltakosh](http://www.github.com/deltakosh))
 - Babylon.Math is now a fluid API ([deltakosh](http://www.github.com/deltakosh))
 - Added FOV mode setting to cameras ([jahow](http://www.github.com/jahow))
 - You can now define if OnIntersectionEnterTrigger and OnIntersectionExitTrigger may use precise intersections. More info [here](http://doc.babylonjs.com/page.php?p=22531) ([deltakosh](http://www.github.com/deltakosh))
 - New ```scene.createDefaultCameraOrLight()``` function ([deltakosh](http://www.github.com/deltakosh))
 - Added POV movement & rotation ([Palmer-JC](http://www.github.com/Palmer-JC))
 - Starting documenting public API ([raananw](http://www.github.com/raananw)) 
 - Added render target type (unsigned or floating point) ([julien-moreau](http://www.github.com/julien-moreau))  
 - Decomposition and interpolation methods for matrices ([kpko](http://www.github.com/kpko)) 
 - Spot lights can now cast [shadows](http://www.babylonjs-playground.com/?15) ([deltakosh](http://www.github.com/deltakosh))
 - Adding ```clear()``` function to DynamicTexture ([deltakosh](http://www.github.com/deltakosh))
 - New ```RawTexture``` object to create texture from arraybuffer with specific format (luminance, luminance and alpha, alpha, rgb, rgba) ([deltakosh](http://www.github.com/deltakosh)) 
 - Animation's key can now be functions ([deltakosh](http://www.github.com/deltakosh)) 
 - Bones and instances can be used together ([deltakosh](http://www.github.com/deltakosh)) 
 - Engine can now accept more than one render loop ([deltakosh](http://www.github.com/deltakosh)) 
 - New ```ParticleSystem.updateFunction``` to define custom behavior for particles ([deltakosh](http://www.github.com/deltakosh)) 
 - New ```mesh.renderOverlay``` and ```mesh.overlayColor``` ([deltakosh](http://www.github.com/deltakosh))
 - New "Automatically launch animations" option for Blender 3D ([deltakosh](http://www.github.com/deltakosh))
 - Support for vertex color and vertex alpha function ([deltakosh](http://www.github.com/deltakosh))
 - Adding stride size attributes to ```Mesh.setVerticesData``` function ([deltakosh](http://www.github.com/deltakosh))
 - New ```Texture.CreateFromBase64String``` function ([deltakosh](http://www.github.com/deltakosh))
 - Extending the Ray class functionality to support ray's length ([raananw](http://www.github.com/raananw))
 - New ```Effect.onBind``` callback ([deltakosh](http://www.github.com/deltakosh))
 - Added support for point rendering ([FreeFrags](http://www.github.com/freefrags) [deltakosh](http://www.github.com/deltakosh))
 - Robust Euler->Quaternion->Euler conversions ([MavenRain](https://github.com/MavenRain))
 - new ```mesh.isCompletelyInFrustum(camera)``` function ([deltakosh](http://www.github.com/deltakosh))
 - Added the possibility to disable fog for a specific material ([demonixis](https://github.com/demonixis))
 - Added the possibility to disable fog for a specific sprite manager ([deltakosh](http://www.github.com/deltakosh))
 - Added a property to ArcRotateCamera that moves the screen position of the target ([daner](https://github.com/daner))

#### Breaking changes

 - ```Tools.GetFps()``` and ```Tools.GetDeltaTime()``` are now functions hosted by the engine: ```engine.getFps()``` and ```engine.getDeltaTime()``` [deltakosh](http://www.github.com/deltakosh))

#### Bug fixes
 - Insane amount of fixes for 3dsmax and blender exporters ([deltakosh](http://www.github.com/deltakosh)) 
 - Fixed nearest texture filters ([deltakosh](http://www.github.com/deltakosh)) 
 - Fixed mesh loading when url has a query string ([dlajarretie](https://github.com/dlajarretie))
 - Fixed a bug with pause/restart on animations ([deltakosh](http://www.github.com/deltakosh)) 
 - Fixed a bug with CSG and transformations ([deltakosh](http://www.github.com/deltakosh)) 

## 1.14.0

### Core Engine

#### Major updates
 - New VRDeviceOrientionCamera for cardboard like systems ([demonixis](http://www.github.com/demonixis))
 - New WebVRCamera for WebVR compatible systems ([demonixis](http://www.github.com/demonixis))
 - All shaders now use high precision profile to address iOS8 compatibility ([deltakosh](http://www.github.com/deltakosh))
 - New camera: ```BABYLON.FollowCamera``` used to smoothly follow a given target [abogartz](https://github.com/abogartz)
 - New ```BABYLON.AssetsManager``` used to handle [assets loading](https://github.com/BabylonJS/Babylon.js/wiki/Using-AssetsManager) alongside loading screen display ([deltakosh](http://www.github.com/deltakosh))
 - New ```Engine.displayLoadingUI()```, ```Engine.hideLoadingUI()```, ```Engine.loadingUiText```. See [more here](https://github.com/BabylonJS/Babylon.js/wiki/Using-AssetsManager) ([deltakosh](http://www.github.com/deltakosh))
 - New cache engine (Based on state objects) ([deltakosh](http://www.github.com/deltakosh))
 - Fresnel support for diffuse, emissive, opacity and reflection on ```StandardMaterial```. See [demo here](http://www.babylonjs.com/?FRESNEL) and [wiki here](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-FresnelParameters%3F) ([deltakosh](http://www.github.com/deltakosh))
 - TypeScript declaration file is now available ([deltakosh](http://www.github.com/deltakosh))
 - Binary file format supported. You can use online converter [here](http://www.babylonjs.com/binary) ([r2d2Proton](https://github.com/r2d2Proton))

#### Updates
 
 - New ```mesh.updateVerticesDataDirectly(kind, float32array)``` to update mesh data directly ([deltakosh](http://www.github.com/deltakosh))
 - Sandbox & IndexedDB layer are now supporting TGA & DDS textures  ([davrous](http://www.github.com/davrous))
 - Integrating lights animations, cameras type and animations for Blender exporter ([Palmer-JC](http://www.github.com/Palmer-JC)) 
 - New "Get zip" option for CYOS ([deltakosh](http://www.github.com/deltakosh))
 - Add pinch and zoom for iOS and Android on ArcRotateCamera ([Eucly2](http://www.github.com/Eucly2))
 - New ```camera.projectToScreen()``` function to transform a vector3 into a screen pixel ([deltakosh](http://www.github.com/deltakosh))
 - New ```effect``` parameter to define custom shader for ```BABYLON.ParticleSystem``` constructor. See [demo here](http://www.babylonjs.com/?PARTICLES2) and [wiki here](https://github.com/BabylonJS/Babylon.js/wiki/12-Particles) ([deltakosh](http://www.github.com/deltakosh)) 
 - Added toEulerAnglesToRef and CopyFromFloats to Quaternion ([Demonixis](https://github.com/demonixis))
 - Added function to calculate the inverse of a quaternion ([Daner](https://github.com/daner))
 - New ```StandardMaterial.useSpecularOverAlpha``` to define if you want specular to appear even on top of transparent surfaces ([deltakosh](http://www.github.com/deltakosh))
 - New ```SceneLoader.Append``` function to append a babylon.js file to an existing scene ([Palmer-JC](https://github.com/Palmer-JC))
 - New ```LinesMesh.alpha``` property ([deltakosh](http://www.github.com/deltakosh))
 - Adding instances exportation support for 3DSMax exporter ([deltakosh](http://www.github.com/deltakosh)) 
 - New ```Mesh.applyDisplacementMap``` and ```Mesh.applyDisplacementMapFromBuffer``` ([deltakosh](http://www.github.com/deltakosh)) 
 - New ```Mesh.renderOutline``` property to render outlines around a mesh (used with ```Mesh.outlineColor``` and ```Mesh.outlineWidth```) ([deltakosh](http://www.github.com/deltakosh))
 - New ```Light.includedOnlyMeshes``` array to define explicitely which mesh is affected by a light ([deltakosh](http://www.github.com/deltakosh))  
 - Added multiply and divide functions to Vector2 ([daner](http://www.github.com/daner)) 
 - New feature demo for [custom render target texture](http://www.babylonjs.com/?CUSTOMRENDERTARGET) ([deltakosh](http://www.github.com/deltakosh)) 
 - RenderTargetTexture can now specify a camera to use ([deltakosh](http://www.github.com/deltakosh)) 
 
 #### Bug fixes

 - Fixing tons of bugs with PostProcessRenderPipeline. Wiki updated. ([deltakosh](http://www.github.com/deltakosh)) 

## 1.13.0

### Core Engine

#### Major updates

 - TypeScript port finished ([davrous](http://www.github.com/davrous) & [deltakosh](http://www.github.com/deltakosh)) 
 - Physics engine: new OIMO plugin ([temechon](http://www.github.com/temechon))
 - New demo: [V8 engine](http://www.babylonjs.com/index.html?V8) (Michel Rousseau)

#### Updates
 - Fixed ray creation when the devicePixelRatio is not equals to 1 ([demonixis](http://www.github.com/demonixis))
 - New ```mesh.registerAfterRender``` and ```mesh.unregisterAfterRender``` functions ([deltakosh](http://www.github.com/deltakosh)) 
 - New ```fragmentElement``` parameter to define custom shader for ```BABYLON.ParticleSystem``` constructor ([deltakosh](http://www.github.com/deltakosh)) 
 - New ```OnKeyDown``` and ```OnKeyUp``` triggers. See [actions wiki](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-Actions) for more info ([deltakosh](http://www.github.com/deltakosh)) 
 - ArcRotateCamera can now check collisions [wiki](https://github.com/BabylonJS/Babylon.js/wiki/09-Cameras-collisions) ([deltakosh](http://www.github.com/deltakosh)) 
 - New ```Engine.Version``` property which returns a string with the current version ([deltakosh](http://www.github.com/deltakosh)) 
 - New "Export and Run" feature for Max2Babylon ([deltakosh](http://www.github.com/deltakosh)) 
 - Animations delta time is now capped between Scene.MinDeltaTime and Scene.MaxDeltaTime ([deltakosh](http://www.github.com/deltakosh)) 
 - Non-squared DDS are now supported ([deltakosh](http://www.github.com/deltakosh)) 
 - New triggers: ```BABYLON.ActionManager.OnIntersectionEnterTrigger```, ```BABYLON.ActionManager.OnIntersectionExitTrigger```. [Documentation](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-Actions) updated ([deltakosh](http://www.github.com/deltakosh)) 
 - New mesh type: ```BABYLON.LinesMesh```. You can find a [demo here](http://www.babylonjs.com/?LINES) ([deltakosh](http://www.github.com/deltakosh)) 
 - New ```mesh.moveWithCollisions``` function. Used with ```mesh.ellipsoid``` and '''mesh.ellipsoidOffset```, this function can be used to move a mesh and use an ellipsoid around it to [check collisions](https://github.com/BabylonJS/Babylon.js/wiki/09-Collisions-by-gravity) ([deltakosh](http://www.github.com/deltakosh)) 
 - New feature demo: [How to do drag'n'drop](http://www.babylonjs.com/playground/?18) ([deltakosh](http://www.github.com/deltakosh)) 
 - New ```BABYLON.PickingInfo.getTextureCoordinates()``` function ([deltakosh](http://www.github.com/deltakosh)) 
 - New ```BABYLON.Scene.cameraToUseForPointers``` property that defines this parameter if you are using multiple cameras and you want to specify which one should be used for pointer position ([deltakosh](http://www.github.com/deltakosh)) 
 - ```BABYLON.OculusOrientedCamera``` was replaced by ```BABYLON.OculusCamera``` for better integration into camera system ([deltakosh](http://www.github.com/deltakosh)) 
 - New ```Mesh.CreateTiledGround()``` function ([kostar111](https://github.com/kostar111)) 
 - Shadow Poisson Sampling ([clementlevasseur](https://github.com/clementlevasseur)) 

#### Bug fixes
 - Fixing a bug when instances are used with a mesh with submeshes.length > 1 ([deltakosh](http://www.github.com/deltakosh)) 
 - CreateCylinder() : add subdivisions parameter and fix normals bug ([kostar111](https://github.com/kostar111)) 

## 1.12.0

### Core Engine

#### Major updates

 - Babylon.js is now entirely developed using TypeScript ([deltakosh](http://www.github.com/deltakosh), [davrous](http://www.github.com/davrous))
 - Physics plugins: You can add your own physics engine to Babylon.js. More info [here](https://github.com/BabylonJS/Babylon.js/wiki/Adding-your-own-physics-engine-plugin-to-Babylon.js). Cannon.js is the first supported plugin ([deltakosh](http://www.github.com/deltakosh))
 - ```BABYLON.Action```: You can now create a complex system of interactions. More info [here](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-Actions) ([deltakosh](http://www.github.com/deltakosh))
 - Babylon.js Playground: Experiment and learn Babylon.js using the [playground](http://www.babylonjs.com/playground) ([deltakosh](http://www.github.com/deltakosh))
 - Geometry system ([gwenael-hagenmuller](https://github.com/gwenael-hagenmuller))
 - Support for TGA textures based on [Vincent Thibault](http://blog.robrowser.com/javascript-tga-loader.html) work ([deltakosh](http://www.github.com/deltakosh))
 - ```BABYLON.Gamepads``` & ```BABYLON.Gamepad```: Support for Gamepad API (Xbox 360 Pad & Generic Pads) ([davrous](http://www.github.com/davrous))
 - ```BABYLON.GamepadCamera```: use a FPS-like camera controlled by your gamepad using 1 line of code ([davrous](http://www.github.com/davrous))
 - Hardware accelerated instances used to render identical meshes. More info [here](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-instances) ([deltakosh](http://www.github.com/deltakosh))
 - New ```BABYLON.GroundMesh``` created by ```BABYLON.Mesh.Createground``` and ```BABYLON.Mesh.CreateGroundFromHeightMap```. This object is optimized for collisions and rendering of grounds (!!!). A first feature is also included ```GroundMesh.getHeightAtCoordinates``` ([deltakosh](http://www.github.com/deltakosh))
 - Beta: New [exporter for 3ds Max 2013+](https://github.com/BabylonJS/Babylon.js/tree/master/Exporters/3ds%20Max) ([deltakosh](http://www.github.com/deltakosh))

#### Updates
 - DDS: Support for RGB, Luminance and cube file format ([deltakosh](http://www.github.com/deltakosh))
 - New LensFlareSystem.isEnabled property ([deltakosh](http://www.github.com/deltakosh))
 - New ```samplingMode``` parameter when creating textures ([deltakosh](http://www.github.com/deltakosh))
 - Blender: changed object.isVisible to reflect the corresponding param in Blender ([vousk](http://www.github.com/vousk))
 - New properties: ```scene.meshUnderPointer```, ```scene.pointerX```, ```scene.pointerY``` ([deltakosh](http://www.github.com/deltakosh))
 - Added "layerMask" property to meshes and cameras ([marcolebdech](https://github.com/marcolebdech))
 - New ```Mesh.showSubMeshesBoundingBox``` to display sbumeshes bounding boxes ([deltakosh](http://www.github.com/deltakosh))
 - Octree are now more generics and used to optimize rendering, collisions and picking. [More info](https://github.com/BabylonJS/Babylon.js/wiki/Optimizing-performances-with-octrees) ([deltakosh](http://www.github.com/deltakosh))
 - Shadows now support alpha testing ([deltakosh](http://www.github.com/deltakosh))
 - New feature demo: [particles](http://www.babylon.com/?PARTICLES) ([deltakosh](http://www.github.com/deltakosh))
 - New ```renderTargetTexture.refreshRate``` property to define the refresh rate of RenderTargetTexture: Use 0 to render just once, 1 to render on every frame, 2 to render every two frames and so on... ([deltakosh](http://www.github.com/deltakosh))
 - New ```scene.beforeCameraRender``` and ```scene.afterCameraRender``` callbacks ([deltakosh](http://www.github.com/deltakosh))
 - New custom functions for ParticleSystem: ```startDirectionFunction``` and ```startPositionFunction``` ([deltakosh](http://www.github.com/deltakosh))
 - ```useAlphaFromDiffuseTexture``` option for standard material to use 8-it alpha channel from the diffuse texture instead of using it as an alpha test value ([Platane](https://github.com/Platane))
 - New ```Tools.Log, Tools.Warn, Tools.Error``` functions. Filter can be applied using ```Tools.CurrentLoglevel``` ([MaxenceBrasselet](https://github.com/MaxenceBrasselet), [deltakosh](http://www.github.com/deltakosh))
 - Using grunt-contrib-uglify to reduce babylon.js size (from 500KB to 384KB) ([deltakosh](http://www.github.com/deltakosh))
 - ```setDirectionToTarget``` function added to SpotLight, HemisphericLight and DirectionalLight ([Wingnutt](https://github.com/Wingnutt))
 - Picking now takes viewport in account ([deltakosh](http://www.github.com/deltakosh))
 - Point lights and spot lights now have a range ([deltakosh](http://www.github.com/deltakosh))
 - Color3 interpolator for animations ([deltakosh](http://www.github.com/deltakosh))
 - New function: ```VertexData.CreateGroundFromHeightMap```([deltakosh](http://www.github.com/deltakosh))
 - New function: ```Tools.CreateScreenshot```([nicolas-obre](https://github.com/nicolas-obre))

#### Bug fixes
 - Fixing ```ArcRotateCamera.setPosition()``` ([Celian](https://github.com/kostar111))
 - RenderTarget crashed when used with incremental engine ([deltakosh](http://www.github.com/deltakosh))
 - Depth clear is now more controlled (Mainly for Ejecta) ([deltakosh](http://www.github.com/deltakosh))
 - Fixed a bug with ratio when using RenderTargetTexture [deltakosh](http://www.github.com/deltakosh))
 - Fixed a bug in the sandbox tool ([davrous](http://www.github.com/davrous))
 - Fixed a bug with skybox seams [holcombj](https://github.com/holcombj))
 - Moved mousewheel event from window to canvas [deltakosh](http://www.github.com/deltakosh))
 - Fixed matricesIndices serialization ([gwenael-hagenmuller](https://github.com/gwenael-hagenmuller))
 - Bug fix and GC optimisation on CSG ([clementlevasseur](https://github.com/clementlevasseur))

#### Breaking changes
 - ```Mesh.setVerticesData``` signature is now: (kind, values, updatable) instead of (values, kind, updatable) in order to be consistent with ```Mesh.updateVerticesData``` [deltakosh](http://www.github.com/deltakosh))

## 1.11.0

### Core Engine

#### Major updates

 - New option for mesh: ```mesh.showBoundingBox``` to display mesh's bounding box. You can configure back and front color using ```scene.getBoundingBoxRenderer()```. This function returns a ```BABYLON.BoundingBoxRenderer``` where you can define ```backColor```, ```frontColor``` and ```showBackLines``` ([deltakosh](http://www.github.com/deltakosh))
 - New basic mesh: ```BABYLON.Mesh.CreateTorusKnot``` ([deltakosh](http://www.github.com/deltakosh))
 - New ```BABYLON.AnaglyphArcRotateCamera``` and ```BABYLON.AnaglyphFreeCamera``` ([michael-korbas](https://github.com/michael-korbas)), ([deltakosh](http://www.github.com/deltakosh))
 - Tags system ([gwenael-hagenmuller](https://github.com/gwenael-hagenmuller))
 - New render pipeline system for post-processes. See documentation [here](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-PostProcessRenderPipeline) ([michael-korbas](https://github.com/michael-korbas))

#### Updates
 - Added parameters to enable or disable a type of texture on all ```BABYLON.StandardMaterial``` ([demonixis](http://www.github.com/demonixis))
 - New ```BABYLON.VertexData.ExtractFromMesh``` function ([deltakosh](http://www.github.com/deltakosh))
 - Cameras can now have sub-cameras (see ```BABYLON.AnaglyphArcRotateCamera``` for example) ([deltakosh](http://www.github.com/deltakosh))
 - New ```BABYLON.Engine.runEvenInBackground``` property. True by default. It allows you to stop rendering when the browser is not the foreground application. ([deltakosh](http://www.github.com/deltakosh))
 - Darkness of a shadow + shadow on transparent meshes ([clementlevasseur](https://github.com/clementlevasseur))
 - New event for materials: ```onCompiled``` and ```onError``` ([deltakosh](http://www.github.com/deltakosh))

#### Bug fixes
 - Fixed a bug with collisions cache
 - Fixed a bug with mesh.dispose when called twice ([deltakosh](http://www.github.com/deltakosh))
 - Fixed an issue with Internet Explorer while rendering a RenderTargetTexture outside the engine renderLoop ([nicolas-obre](https://github.com/nicolas-obre))
 
 #### New demos
 - [CYOS](http://www.babylonjs.com/cyos)

## 1.10.0

### Core Engine

#### Major updates

 - Virtual joysticks canera ([davrous](http://www.github.com/davrous))
 - Oculus Rift support ([davrous](http://www.github.com/davrous)), ([simonferquel](http://www.github.com/simonferquel)), ([deltakosh](http://www.github.com/deltakosh))
 - Support for DDS textures ([deltakosh](http://www.github.com/deltakosh))
 - Constructive solid geometries ([CraigFeldspar](https://github.com/CraigFeldspar))
 - Importer plugin system ([deltakosh](http://www.github.com/deltakosh))
 - Filter postprocess ([deltakosh](http://www.github.com/deltakosh))
 - Convolution postprocess ([deltakosh](http://www.github.com/deltakosh))
 - Added Cheetah3d exporter ([Calebsem](http://www.github.com/Calebsem))
 - New ```BABYLON.ShaderMaterial``` object to simply create custom shaders ([deltakosh](http://www.github.com/deltakosh)) - See [Custom shader - cell shading](http://www.babylonjs.com/index.html?CUSTOMSHADER)
 - New ```BABYLON.VertexData``` object to easily manipulates vertex attributes ([deltakosh](http://www.github.com/deltakosh)) - See [VertexData](http://www.babylonjs.com/index.html?CLOUDS)

#### Updates
 - Shaders can be loaded from DOM element alongside .fx files ([deltakosh](http://www.github.com/deltakosh))
 - Adding arcRotateCamera.wheelPrecision ([deltakosh](http://www.github.com/deltakosh))
 - Support for DOMMouseScroll ([nicolas-obre](https://github.com/nicolas-obre))
 - Adding BABYLON.PickingInfo.prototype.getNormal ([deltakosh](http://www.github.com/deltakosh))
 - Adding a new noMipmap parameter to ```BABYLON.CubeTexture``` constructor ([deltakosh](http://www.github.com/deltakosh))
 - Adding ```BABYLON.Color3.FromInts()``` and ```BABYLON.Color4.FromInts()``` ([deltakosh](http://www.github.com/deltakosh))
 - Adding invertY parameter to ```BABYLON.VideoTexture``` constructor ([deltakosh](http://www.github.com/deltakosh))
 - Adding new ```BABYLON.Scene.getCameraByID``` function ([deltakosh](http://www.github.com/deltakosh))
 - Adding new ```BABYLON.Scene.setActiveCameraByName()``` function ([deltakosh](http://www.github.com/deltakosh))
 - Renaming ```BABYLON.Scene.activeCameraByID()``` to ```BABYLON.Scene.setActiveCameraByID()``` ([deltakosh](http://www.github.com/deltakosh))
 - Adding texture wrapping support to Blender exporter ([vousk](http://www.github.com/vousk))
 - Add Gulp for buiding babylon cross platform ([SideraX](http://www.github.com/SideraX))
 - Shadow map improvement on pack method ([clementlevasseur](http://www.github.com/clementlevasseur))

#### Bug fixes
 - Fixing multimat naming convention in Blender ([deltakosh](http://www.github.com/deltakosh))
 - Fixing mesh.clone ([temechon](http://www.github.com/temechon))
 - Fixing camera rotation export in blender ([khmm12](http://www.github.com/khmm12))
 - Fixing opacity map bug ([deltakosh](http://www.github.com/deltakosh))
 - Fixing physics objects disposal ([deltakosh](http://www.github.com/deltakosh))
 - Using the hardware scaling when creating a ray ([demonixis](http://www.github.com/demonixis))
 - **New demos*
 - [Hill Valley](http://www.babylonjs.com/index.html?HILLVALLEY)
 - [Custom shader - cell shading](http://www.babylonjs.com/index.html?CUSTOMSHADER)
 - [Constructive solid geometries](http://www.babylonjs.com/index.html?CSG)
 - [Postprocess - Convolution](http://www.babylonjs.com/index.html?PPCONVOLUTION)
 - [VertexData](http://www.babylonjs.com/index.html?CLOUDS)

## 1.9.0

### Core Engine

#### Major updates

 - Beta support for scene serialization with ```BABYLON.SceneSerializer.Serialize``` function ([deltakosh](http://www.github.com/deltakosh))
 - Blender exporter now supports 32 bits indices ([deltakosh](http://www.github.com/deltakosh))
 - Flat shading support (From Blender and with ```mesh.convertToFlatShadedMesh()``) ([deltakosh](http://www.github.com/deltakosh))

#### Updates
 - New ```mesh.rotate``` and ```mesh.translate``` functions to rotate and translate mesh both locally and globally ([deltakosh](http://www.github.com/deltakosh))
 - New feature for particles: ```ParticleSystem.forceDepthWrite``` ([deltakosh](http://www.github.com/deltakosh))
 - Adding a new parameter to pick in order to be able to pick even on multi views ([deltakosh](http://www.github.com/deltakosh))
 - New ```mesh.lookAt``` function ([professorF](https://github.com/professorF))
 - New postprocess system (independent from cameras) ([michael-korbas](https://github.com/michael-korbas))
 - New ```mesh.setAbsolutePosition``` function ([gwenael-hagenmuller](https://github.com/gwenael-hagenmuller))

#### Bug fixes
 - Fixing issue with ```mesh.infiniteDistance``` ([deltakosh](http://www.github.com/deltakosh))
 - Fixing issue with camera caches ([deltakosh](http://www.github.com/deltakosh))
 - Fixing issue with aspect ratio ([deltakosh](http://www.github.com/deltakosh))
 - Fixing arcRotateCamera angle limitations ([deltakosh](http://www.github.com/deltakosh))
 - Fixing a bug with multi-views: depth buffer was not clear between different passes ([deltakosh](http://www.github.com/deltakosh))

## 1.8.5

### Core Engine

#### Major updates

 - Visual Studio 2013 templates for Windows 8.1 and nuget packages ([pierlag](http://www.github.com/pierlag))

#### Updates
 - New ```matrix.multiply``` function (up to 50% faster) ([deltakosh](http://www.github.com/deltakosh))
 - New matrices cache system for camera (view and projection matrices) ([juliengobin](http://www.github.com/juliengobin))
 - New physics impostor: compound and mesh (still really slow) ([deltakosh](http://www.github.com/deltakosh))
 - Set crossOrigin flag for support CORS ([vbouzon](http://www.github.com/vbouzon))
 - XNA importer: Changes for Right-Left Coordinate Systems & Prefixed Mesh Parts with Mesh Name ([professorF](http://www.github.com/professorF))
 - Fixing getPivotMatrix ([gwenael-hagenmuller](http://www.github.com/gwenael-hagenmuller))
 - New geometry functions: getLocalTranslation, setPositionWithLocalVector, getPositionExpressedInLocalSpace,locallyTranslate ([gwenael-hagenmuller](http://www.github.com/gwenael-hagenmuller))
 - Adding multi mesh import from same file([nicolas-obre](http://www.github.com/nicolas-obre)) 

#### Bug fixes
 - Fixing issue when disposing a parent and not its children ([deltakosh](http://www.github.com/deltakosh))
 - Fixing .obj importer ([deltakosh](http://www.github.com/deltakosh))
 - Added guardband checks for impostors' size ([deltakosh](http://www.github.com/deltakosh))

## 1.8.0

### Core Engine

#### Major updates

 - Support for [physics engine](http://www.babylonjs.com/index.html?PHYSICS) thanks to cannon.js ([deltakosh](http://www.github.com/deltakosh))
 - New [sandbox tool](http://www.babylonjs.com/sandbox/) ([davrous](http://www.github.com/davrous))

#### Updates
 - New ```animation.currentFrame``` property to get current animation frame ([deltakosh](http://www.github.com/deltakosh))
 - New ```animation.floatInterpolateFunction``` property to define custom float interpolation function ([deltakosh](http://www.github.com/deltakosh))
 - New ```animation.vector3InterpolateFunction``` property to define custom vector3 interpolation function ([deltakosh](http://www.github.com/deltakosh))
 - New ```animation.quaternionInterpolateFunction``` property to define custom quaternion interpolation function ([deltakosh](http://www.github.com/deltakosh))

## 1.7.3

### Core Engine

#### Updates

 - Support for "file://" moniker ([davrous](https://github.com/davrous))
 - Support for DAE (COLLADA) file format ([gwenael-hagenmuller](https://github.com/gwenael-hagenmuller))
 - Support for "empty" object type in Blender exporter ([deltakosh](http://www.github.com/deltakosh))

#### Bug fixes
 - "use strict" is no more included in minified version ([deltakosh](http://www.github.com/deltakosh))
 - Fixing a bug with MSGesture with IE11 on Windows 7 ([deltakosh](http://www.github.com/deltakosh))

## 1.7.0

### Core Engine

#### Major updates

 - Support for [lens flares](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-lens-flares) ([deltakosh](http://www.github.com/deltakosh))
 - Support for [multi-views](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-multi-views) ([deltakosh](http://www.github.com/deltakosh))

#### Updates

 - New ```light.excludedMeshes``` property to exclude specific meshes from light computation ([deltakosh](http://www.github.com/deltakosh))
 - New ```texture.anisotropicFilteringLevel``` property to define the anisotropic level of a texture ([deltakosh](http://www.github.com/deltakosh))
 - New ```mesh.infiniteDistance``` property to make a mesh static from the point of view of the camera ([deltakosh](http://www.github.com/deltakosh))
 - New ```scene.customRenderTargets``` property to add our own renderTargetTexture ([deltakosh](http://www.github.com/deltakosh))
 - Transparent meshes are sorted back to front ([deltakosh](http://www.github.com/deltakosh))

#### Bug fixes
 - Fixing a bug when cloning mirrorTexture ([deltakosh](http://www.github.com/deltakosh))

## 1.6.0

### Core Engine

#### Major updates

 - Support for [postprocesses](https://github.com/BabylonJS/Babylon.js/wiki/How-to-use-postprocesses) ([deltakosh](http://www.github.com/deltakosh))
 - New builtin postprocesses: Pass, Refraction, Blur, Black and White, Convolution ([deltakosh](http://www.github.com/deltakosh))
 - New builtin postprocess: FXAA ([simonferquel](http://www.github.com/simonferquel))
 - Online [assets converter](http://www.babylonjs.com/converter.html)  ([pierlag](https://github.com/pierlag))

#### Updates

 - New features demos: [POSTPROCESS - REFRACTION](http://www.babylonjs.com/index.html?PPPREF) and [POSTPROCESS - BLOOM](http://www.babylonjs.com/index.html?PPBLOOM)
 - Removing the unused depth buffer for postprocesses chains ([simonferquel](http://www.github.com/simonferquel))

#### Bug fixes
 - Fixing a memory leak when releasing textures ([simonferquel](http://www.github.com/simonferquel))

## 1.5.3

### Core Engine

#### Updates

 - New ```lockedTarget``` for freeCamera in order to allow cameras to track moving targets ([deltakosh](http://www.github.com/deltakosh))
 - Cameras now supports animations (see http://www.babylonjs.com/index.html?TRAIN) ([deltakosh](http://www.github.com/deltakosh)) 
 - New ```angularSensibility``` property for cameras ([deltakosh](http://www.github.com/deltakosh)) 
 - New ```upVector``` property for cameras. Cameras are now not limited to a (0, 1, 0) up vector ([deltakosh](http://www.github.com/deltakosh)) 
 - New ```parent``` property for cameras and lights: Lights, cameras and meshes can be related. For instance a camera can now be attached to a mesh as child and vice versa ([deltakosh](http://www.github.com/deltakosh))

#### Bug fixes
 - Fixing a bug when exporting materials from Blender ([deltakosh](http://www.github.com/deltakosh)) 
 - Fixing an issue with IE11 for RT ([deltakosh](http://www.github.com/deltakosh))
 - Fixing an issue with looping animations ([deltakosh](http://www.github.com/deltakosh))

## 1.5.2

### Core Engine

#### Updates

 - New ```renderingGroupId``` for SpriteManager ([deltakosh](http://www.github.com/deltakosh))
 - ```BoundingBox``` and ```BoundingSphere``` are prepared with an identity matrix during construction ([deltakosh](http://www.github.com/deltakosh)) 

#### Bug fixes
 - Fixing a bug preventing wireframe to be displayed ([deltakosh](http://www.github.com/deltakosh)) 
 - Fixing an issue with last IE update ([deltakosh](http://www.github.com/deltakosh))

## 1.5.1

### Core Engine

#### Updates

 - Massive update of typescript files ([jroblak](http://www.github.com/jroblak))

#### Bug fixes
 - Fixing an issue with ```SceneLoader.ImportMesh``` ([nicolas-obre](http://www.github.com/nicolas-obre))
 - Fixing an issue with sprites rendering when no mesh is present ([deltakosh](http://www.github.com/deltakosh))

## 1.5.0

### Core Engine

#### Major updates

 - New ```DeviceOrientationCamera``` that supports W3C DeviceOrientations events ([deltakosh](http://www.github.com/deltakosh))
 - Incremental loading support for meshes and textures ([deltakosh](http://www.github.com/deltakosh))
 - New API online page to convert .babylon files to .incremental.babylon files ([pierlag](https://github.com/pierlag))
 - New ```mesh.renderingGroupId``` and ```particleSystem.renderingGroupId``` properties to support rendering layers ([deltakosh](http://www.github.com/deltakosh))

#### Updates

 - New ```predicate``` parameter for ```scene.pick``` function in order to be able to select pickable meshes ([deltakosh](http://www.github.com/deltakosh)) 
 - New ```mesh.refreshBoundingInfo()``` method ([deltakosh](http://www.github.com/deltakosh)) 
 - New ```onAnimationEnd``` parameter for animations ([deltakosh](http://www.github.com/deltakosh)) 

## 1.4.3

### Core Engine

#### Updates

 - New ```mesh.setLocalTranslation``` and ```mesh.getLocalTranslation``` functions ([deltakosh](http://www.github.com/deltakosh))
 - New ```matrix.setTranslation``` function ([deltakosh](http://www.github.com/deltakosh))
 - ```mesh.rotation``` and ```mesh.rotationQuaternion``` are now two separated functions ([deltakosh](http://www.github.com/deltakosh)) 

# 1.4.2

### Core Engine

#### Bug fixes
 - Fixing an issue with scene.executeWhenReady ([deltakosh](http://www.github.com/deltakosh))

## 1.4.1

#### Bug fixes
 - Support for Safari ([deltakosh](http://www.github.com/deltakosh))
 - Adding local transformations to Blender exporter ([deltakosh](http://www.github.com/deltakosh))
 - IndexedDB code refactoring to support simultaneous calls ([davrous](https://github.com/davrous))
 - Hardware scaling fix ([Gwenaël Hagenmuller](https://github.com/gwenael-hagenmuller))
 - Fixing a bug with sprites dynamic buffers ([deltakosh](http://www.github.com/deltakosh))

## 1.4.0

### Core Engine

#### Major features

 - Bones support ([deltakosh](http://www.github.com/deltakosh)). Bones and animated bones are now supported. They can cast shadows. Bones can be exported from Blender or from FBX
 - Offline support ([davrous](https://github.com/davrous). You can specify to offline assets (scene and textures) to a local IndexedDB. Assets are then loaded once until you change the version on a server-side manifest
 - N-Level octrees ([deltakosh](http://www.github.com/deltakosh)):
 
#### Updates
 - Adding ```dispose()``` function and a ```disposeWhenFinishedAnimating``` property to sprites ([Cyle](http://github.com/CYle/))
 - Adding a ```applyTransform()``` function to meshes in order to bake a specific transformation into vertices ([deltakosh](http://www.github.com/deltakosh))
 - Adding ```setPivotMatrix()``` and ```getPivotMatrix()``` to meshes to define pivot matrix ([deltakosh](http://www.github.com/deltakosh))
 - ```Mesh.CreateCylinder``` now takes two diameters as parameters to be able to create cone ([deltakosh](http://www.github.com/deltakosh)) 
 - New ```material.Clone``` function ([deltakosh](http://www.github.com/deltakosh)) 

#### Bug fixes
 - ```scene.IsReady()``` is more robust now and can be used to detect when the scene is EFFECTIVELY ready :) ([deltakosh](http://www.github.com/deltakosh))
 - Fixing animations timing. Animations should be in sync now ([deltakosh](http://www.github.com/deltakosh))
 - Fixing a bug with orthographic camera ([deltakosh](http://www.github.com/deltakosh))
 - Fixing a bug with ```attachControl()``` function ([deltakosh](http://www.github.com/deltakosh))
 - Fixing a bug with ```scene.pick()``` function ([deltakosh](http://www.github.com/deltakosh))

## 1.3.2

### Core Engine
 - Fixing a bug with camera.detachControl

## 1.3.0

### Core Engine
 - Selection octrees
 - Breaking changes: Meshes now use multi vertex buffers (one for each attribute) instead of a big one. This is for more flexibility. The .babylon file format has changed accordingly (no more .vertices property on meshes but .positions, .normals, .colors, .uvs, .uvs2)

## 1.2.1

### Core Engine
 - Support for PointerLock ()
 - StandardMaterial now supports per-vertex color
 - Blender exporter supports per-vertex color

## 1.2.0

### Core Engine
 - Major rework of the API to remove GC pressure.
 - FreeCamera: Support for QWERTY keyboards
 - New 3D charting demo

# 1.1.0

### Core Engine
 - Shadow Maps and Variance Shadow Maps
 - Shadows Maps and animations are now exported from Blender
 - Hand.js is no longer required for ArcRotateCamera
 - ArcRotateCamera support pinch/zoom gesture on IE

# 1.0.10

### Core Engine

### Core Engine
 - Using typed arrays for Matrix
 - Improving IE11 support
 - Support for new mesh primitives : Torus and cylinder

## 1.0.9

### Core Engine
 - Orthographic camera

## 1.0.8

### Core Engine
 - Adding keyboard support to ArcRotateCamera
 - Starting to use git tag

## 1.0.7

### Core Engine
 - New demo: Worldmonger
 - Improved IE shaders

## 1.0.6

### Core Engine
 - Dynamic meshes
 - Skybox
 - Support for high-DPI displays
 - Height maps

## 1.0.5

### Core Engine
 - Adding color tint for sprites and layers

## 1.0.4

### Core Engine
 - Various optimizations
 - Fog
 - TypeScript support

## 1.0.3

### Core Engine
 - Video textures
 - Normal map (bump) 

## 1.0.2

### Core Engine
 - Spot lights
 - Hemispheric lights
