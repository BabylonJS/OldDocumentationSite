---
ID_PAGE: 25150
PG_TITLE: Scene
PG_VERSION: 2.1
TAGS:
    - Scene
---
## Description

class [Scene](/classes/3.1/Scene)

Represents a scene to be rendered by the engine.

@see http://doc.babylonjs.com/page.php?p=21911

## Constructor

## new [Scene](/classes/3.1/Scene)(engine)

@constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](/classes/3.1/Engine) | 

## Members

### static MinDeltaTime : number



### static MaxDeltaTime : number



### static FOGMODE_NONE : number

The fog is deactivated */

### static FOGMODE_EXP : number

The fog density is following an exponential function */

### static FOGMODE_EXP2 : number

The fog density is following an exponential function faster than FOGMODE_EXP */

### static FOGMODE_LINEAR : number

The fog density is following a linear function. */

### autoClear : boolean



### autoClearDepthAndStencil : boolean



### clearColor : [Color4](/classes/3.1/Color4)



### ambientColor : [Color3](/classes/3.1/Color3)



### environmentTexture : [BaseTexture](/classes/3.1/BaseTexture)

[Texture](/classes/3.1/Texture) used in all pbr material as the reflection texture.

As in the majority of the scene they are the same (exception for multi room and so on),

this is easier to reference from here than from all the materials.

[Texture](/classes/3.1/Texture) used in all pbr material as the reflection texture.

As in the majority of the scene they are the same (exception for multi room and so on),

this is easier to set here than in all the materials.

### imageProcessingConfiguration : [ImageProcessingConfiguration](/classes/3.1/ImageProcessingConfiguration)

Default image processing configuration used either in the rendering

Forward main pass or through the imageProcessingPostProcess if present.

As in the majority of the scene they are the same (exception for multi camera),

this is easier to reference from here than from all the materials and post process.

No setter as we it is a shared configuration, you can set the values instead.

### forceWireframe : boolean



### forcePointsCloud : boolean



### forceShowBoundingBoxes : boolean



### clipPlane : [Plane](/classes/3.1/Plane)



### animationsEnabled : boolean



### constantlyUpdateMeshUnderPointer : boolean



### hoverCursor : string



### defaultCursor : string



### preventDefaultOnPointerDown : boolean

This is used to call preventDefault() on pointer down

in order to block unwanted artifacts like system double clicks

### metadata : any



### loadingPluginName : string



### onDisposeObservable : [Observable](/classes/3.1/Observable)&lt;[Scene](/classes/3.1/Scene)&gt;

An event triggered when the scene is disposed.

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onDispose : () =&gt; void

A function to be executed when this scene is disposed. */

### onBeforeRenderObservable : [Observable](/classes/3.1/Observable)&lt;[Scene](/classes/3.1/Scene)&gt;

An event triggered before rendering the scene

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### beforeRender : Nullable&lt;() =&gt; void&gt;

A function to be executed before rendering this scene */

### onAfterRenderObservable : [Observable](/classes/3.1/Observable)&lt;[Scene](/classes/3.1/Scene)&gt;

An event triggered after rendering the scene

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### afterRender : Nullable&lt;() =&gt; void&gt;

A function to be executed after rendering this scene */

### onReadyObservable : [Observable](/classes/3.1/Observable)&lt;[Scene](/classes/3.1/Scene)&gt;

An event triggered when the scene is ready

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onBeforeCameraRenderObservable : [Observable](/classes/3.1/Observable)&lt;[Camera](/classes/3.1/Camera)&gt;

An event triggered before rendering a camera

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### beforeCameraRender : () =&gt; void



### onAfterCameraRenderObservable : [Observable](/classes/3.1/Observable)&lt;[Camera](/classes/3.1/Camera)&gt;

An event triggered after rendering a camera

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### afterCameraRender : () =&gt; void



### onNewCameraAddedObservable : [Observable](/classes/3.1/Observable)&lt;[Camera](/classes/3.1/Camera)&gt;

An event triggered when a camera is created

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onCameraRemovedObservable : [Observable](/classes/3.1/Observable)&lt;[Camera](/classes/3.1/Camera)&gt;

An event triggered when a camera is removed

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onNewLightAddedObservable : [Observable](/classes/3.1/Observable)&lt;[Light](/classes/3.1/Light)&gt;

An event triggered when a light is created

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onLightRemovedObservable : [Observable](/classes/3.1/Observable)&lt;[Light](/classes/3.1/Light)&gt;

An event triggered when a light is removed

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onNewGeometryAddedObservable : [Observable](/classes/3.1/Observable)&lt;[Geometry](/classes/3.1/Geometry)&gt;

An event triggered when a geometry is created

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onGeometryRemovedObservable : [Observable](/classes/3.1/Observable)&lt;[Geometry](/classes/3.1/Geometry)&gt;

An event triggered when a geometry is removed

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onNewMeshAddedObservable : [Observable](/classes/3.1/Observable)&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;

An event triggered when a mesh is created

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onMeshRemovedObservable : [Observable](/classes/3.1/Observable)&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;

An event triggered when a mesh is removed

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onBeforeStepObservable : [Observable](/classes/3.1/Observable)&lt;[Scene](/classes/3.1/Scene)&gt;

An event triggered before calculating deterministic simulation step

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onAfterStepObservable : [Observable](/classes/3.1/Observable)&lt;[Scene](/classes/3.1/Scene)&gt;

An event triggered after calculating deterministic simulation step

@type {BABYLON.[Observable](/classes/3.1/Observable)}

### onRenderingGroupObservable : [Observable](/classes/3.1/Observable)&lt;[RenderingGroupInfo](/classes/3.1/RenderingGroupInfo)&gt;

This [Observable](/classes/3.1/Observable) will be triggered for each stage of each renderingGroup of each rendered camera.

The RenderinGroupInfo class contains all the information about the context in which the observable is called

If you wish to register an [Observer](/classes/3.1/Observer) only for a given set of renderingGroup, use the mask with a combination of the renderingGroup index elevated to the power of two (1 for renderingGroup 0, 2 for renderingrOup1, 4 for 2 and 8 for 3)

### animations : [Animation](/classes/3.1/Animation)[]



### pointerDownPredicate : ([Mesh](/classes/3.1/Mesh): [AbstractMesh](/classes/3.1/AbstractMesh)) =&gt; boolean



### pointerUpPredicate : ([Mesh](/classes/3.1/Mesh): [AbstractMesh](/classes/3.1/AbstractMesh)) =&gt; boolean



### pointerMovePredicate : ([Mesh](/classes/3.1/Mesh): [AbstractMesh](/classes/3.1/AbstractMesh)) =&gt; boolean



### onPointerMove : (evt: PointerEvent, pickInfo: [PickingInfo](/classes/3.1/PickingInfo)) =&gt; void

Deprecated. Use onPointerObservable instead */

### onPointerDown : (evt: PointerEvent, pickInfo: [PickingInfo](/classes/3.1/PickingInfo)) =&gt; void

Deprecated. Use onPointerObservable instead */

### onPointerUp : (evt: PointerEvent, pickInfo: Nullable&lt;[PickingInfo](/classes/3.1/PickingInfo)&gt;) =&gt; void

Deprecated. Use onPointerObservable instead */

### onPointerPick : (evt: PointerEvent, pickInfo: [PickingInfo](/classes/3.1/PickingInfo)) =&gt; void

Deprecated. Use onPointerObservable instead */

### gamepadManager : [GamepadManager](/classes/3.1/GamepadManager)



### onPrePointerObservable : [Observable](/classes/3.1/Observable)&lt;[PointerInfoPre](/classes/3.1/PointerInfoPre)&gt;

This observable event is triggered when any ponter event is triggered. It is registered during [Scene](/classes/3.1/Scene).attachControl() and it is called BEFORE the 3D engine process anything (mesh/sprite picking for instance).

You have the possibility to skip the process and the call to onPointerObservable by setting [PointerInfoPre](/classes/3.1/PointerInfoPre).skipOnPointerObservable to true

### onPointerObservable : [Observable](/classes/3.1/Observable)&lt;[PointerInfo](/classes/3.1/PointerInfo)&gt;

[Observable](/classes/3.1/Observable) event triggered each time an input event is received from the rendering canvas

### unTranslatedPointer : [Vector2](/classes/3.1/Vector2)



### static DragMovementThreshold : number

The distance in pixel that you have to move to prevent some events */

### static LongPressDelay : number

Time in milliseconds to wait to raise long press events if button is still pressed */

### static DoubleClickDelay : number

Time in milliseconds with two consecutive clicks will be considered as a double click */

### static ExclusiveDoubleClickMode : boolean

If you need to check double click without raising a single click at first click, enable this flag */

### cameraToUseForPointers : Nullable&lt;[Camera](/classes/3.1/Camera)&gt;

Define this parameter if you are using multiple cameras and you want to specify which one should be used for pointer position */

### onPreKeyboardObservable : [Observable](/classes/3.1/Observable)&lt;[KeyboardInfoPre](/classes/3.1/KeyboardInfoPre)&gt;

This observable event is triggered when any keyboard event si raised and registered during [Scene](/classes/3.1/Scene).attachControl()

You have the possibility to skip the process and the call to onKeyboardObservable by setting [KeyboardInfoPre](/classes/3.1/KeyboardInfoPre).skipOnPointerObservable to true

### onKeyboardObservable : [Observable](/classes/3.1/Observable)&lt;[KeyboardInfo](/classes/3.1/KeyboardInfo)&gt;

[Observable](/classes/3.1/Observable) event triggered each time an keyboard event is received from the hosting window

### useRightHandedSystem : boolean



### fogEnabled : boolean

is fog enabled on this scene.

### fogMode : number



### fogColor : [Color3](/classes/3.1/Color3)



### fogDensity : number



### fogStart : number



### fogEnd : number



### shadowsEnabled : boolean



### lightsEnabled : boolean



### lights : [Light](/classes/3.1/Light)[]

All of the lights added to this scene.

@see BABYLON.[Light](/classes/3.1/Light)

@type {BABYLON.[Light](/classes/3.1/Light)[]}

### cameras : [Camera](/classes/3.1/Camera)[]

All of the cameras added to this scene. */

### activeCameras : [Camera](/classes/3.1/Camera)[]

All of the active cameras added to this scene. */

### activeCamera : Nullable&lt;[Camera](/classes/3.1/Camera)&gt;

The current active camera */

### meshes : [AbstractMesh](/classes/3.1/AbstractMesh)[]

All of the (abstract) meshes added to this scene.

@see BABYLON.[AbstractMesh](/classes/3.1/AbstractMesh)

@type {BABYLON.[AbstractMesh](/classes/3.1/AbstractMesh)[]}

### materials : [Material](/classes/3.1/Material)[]



### multiMaterials : [MultiMaterial](/classes/3.1/MultiMaterial)[]



### defaultMaterial : [Material](/classes/3.1/Material)

The default material used on meshes when no material is affected */

The default material used on meshes when no material is affected */

### texturesEnabled : boolean



### textures : [BaseTexture](/classes/3.1/BaseTexture)[]



### particlesEnabled : boolean



### particleSystems : IParticleSystem[]



### spritesEnabled : boolean



### spriteManagers : [SpriteManager](/classes/3.1/SpriteManager)[]



### layers : [Layer](/classes/3.1/Layer)[]



### highlightLayers : [HighlightLayer](/classes/3.1/HighlightLayer)[]



### skeletonsEnabled : boolean



### skeletons : [Skeleton](/classes/3.1/Skeleton)[]



### morphTargetManagers : [MorphTargetManager](/classes/3.1/MorphTargetManager)[]



### lensFlaresEnabled : boolean



### lensFlareSystems : [LensFlareSystem](/classes/3.1/LensFlareSystem)[]



### collisionsEnabled : boolean



### collisionCoordinator : ICollisionCoordinator



### gravity : [Vector3](/classes/3.1/Vector3)

Defines the gravity applied to this scene */

### postProcesses : [PostProcess](/classes/3.1/PostProcess)[]



### postProcessesEnabled : boolean



### postProcessManager : [PostProcessManager](/classes/3.1/PostProcessManager)



### postProcessRenderPipelineManager : [PostProcessRenderPipelineManager](/classes/3.1/PostProcessRenderPipelineManager)



### renderTargetsEnabled : boolean



### dumpNextRenderTargets : boolean



### customRenderTargets : [RenderTargetTexture](/classes/3.1/RenderTargetTexture)[]



### useDelayedTextureLoading : boolean



### importedMeshesFiles : String[]



### probesEnabled : boolean



### reflectionProbes : [ReflectionProbe](/classes/3.1/ReflectionProbe)[]



### database : [Database](/classes/3.1/Database)



### actionManager : [ActionManager](/classes/3.1/ActionManager)

This scene's action manager

@type {BABYLON.[ActionManager](/classes/3.1/ActionManager)}

### proceduralTexturesEnabled : boolean



### soundTracks : [SoundTrack](/classes/3.1/SoundTrack)[]



### mainSoundTrack : [SoundTrack](/classes/3.1/SoundTrack)



### VRHelper : [VRExperienceHelper](/classes/3.1/VRExperienceHelper)



### simplificationQueue : [SimplificationQueue](/classes/3.1/SimplificationQueue)



### animationTimeScale : number



### frustumPlanes : [Plane](/classes/3.1/Plane)[]



### requireLightSorting : boolean



### debugLayer : [DebugLayer](/classes/3.1/DebugLayer)



### workerCollisions : boolean



### selectionOctree : [Octree](/classes/3.1/Octree)&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;



### meshUnderPointer : Nullable&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;

The mesh that is currently under the pointer.

@return {BABYLON.[AbstractMesh](/classes/3.1/AbstractMesh)} mesh under the pointer/mouse cursor or null if none.

### pointerX : number

Current on-screen X position of the pointer

@return {number} X position of the pointer

### pointerY : number

Current on-screen Y position of the pointer

@return {number} Y position of the pointer

### totalVerticesPerfCounter : [PerfCounter](/classes/3.1/PerfCounter)



### totalActiveIndicesPerfCounter : [PerfCounter](/classes/3.1/PerfCounter)



### activeParticlesPerfCounter : [PerfCounter](/classes/3.1/PerfCounter)



### activeBonesPerfCounter : [PerfCounter](/classes/3.1/PerfCounter)



### interFramePerfCounter : [PerfCounter](/classes/3.1/PerfCounter)



### lastFramePerfCounter : [PerfCounter](/classes/3.1/PerfCounter)



### evaluateActiveMeshesDurationPerfCounter : [PerfCounter](/classes/3.1/PerfCounter)



### renderDurationPerfCounter : [PerfCounter](/classes/3.1/PerfCounter)



### particlesDurationPerfCounter : [PerfCounter](/classes/3.1/PerfCounter)



### spriteDuractionPerfCounter : [PerfCounter](/classes/3.1/PerfCounter)



### Animatables : [Animatable](/classes/3.1/Animatable)[]



### uid : string

Return a unique id as a string which can serve as an identifier for the scene

### this : ()



### audioEnabled : boolean



### headphone : boolean



### isDisposed : boolean



## Methods

### setStepId(newStepId) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | newStepId | number | 

### getStepId() &rarr; number


### getInternalStep() &rarr; number


### getCachedMaterial() &rarr; Nullable&lt;[Material](/classes/3.1/Material)&gt;


### getCachedEffect() &rarr; Nullable&lt;[Effect](/classes/3.1/Effect)&gt;


### getCachedVisibility() &rarr; Nullable&lt;number&gt;


### isCachedMaterialInvalid(material, effect, visibility) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | material | [Material](/classes/3.1/Material) | 
 | effect | [Effect](/classes/3.1/Effect) | 
optional | visibility | number | 
### getBoundingBoxRenderer() &rarr; [BoundingBoxRenderer](/classes/3.1/BoundingBoxRenderer)


### getOutlineRenderer() &rarr; [OutlineRenderer](/classes/3.1/OutlineRenderer)


### getEngine() &rarr; [Engine](/classes/3.1/Engine)


### getTotalVertices() &rarr; number


### getActiveIndices() &rarr; number


### getActiveParticles() &rarr; number


### getActiveBones() &rarr; number


### getInterFramePerfCounter() &rarr; number


### getLastFrameDuration() &rarr; number


### getEvaluateActiveMeshesDuration() &rarr; number


### getActiveMeshes() &rarr; [SmartArray](/classes/3.1/SmartArray)&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;


### getRenderTargetsDuration() &rarr; number


### getRenderDuration() &rarr; number


### getParticlesDuration() &rarr; number


### getSpritesDuration() &rarr; number


### getAnimationRatio() &rarr; number


### getRenderId() &rarr; number


### incrementRenderId() &rarr; void


### simulatePointerMove(pickResult) &rarr; [Scene](/classes/3.1/Scene)

Use this method to simulate a pointer move on a mesh

The pickResult parameter can be obtained from a scene.pick or scene.pickWithRay

#### Parameters
 | Name | Type | Description
---|---|---|---
 | pickResult | [PickingInfo](/classes/3.1/PickingInfo) | 

### simulatePointerDown(pickResult) &rarr; [Scene](/classes/3.1/Scene)

Use this method to simulate a pointer down on a mesh

The pickResult parameter can be obtained from a scene.pick or scene.pickWithRay

#### Parameters
 | Name | Type | Description
---|---|---|---
 | pickResult | [PickingInfo](/classes/3.1/PickingInfo) | 

### simulatePointerUp(pickResult) &rarr; [Scene](/classes/3.1/Scene)

Use this method to simulate a pointer up on a mesh

The pickResult parameter can be obtained from a scene.pick or scene.pickWithRay

#### Parameters
 | Name | Type | Description
---|---|---|---
 | pickResult | [PickingInfo](/classes/3.1/PickingInfo) | 

### attachControl(attachUp, attachDown, attachMove) &rarr; void

Attach events to the canvas (To handle actionManagers triggers and raise onPointerMove, onPointerDown and onPointerUp

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | attachUp | boolean |  defines if you want to attach events to pointerup
optional | attachDown | boolean |  defines if you want to attach events to pointerdown
optional | attachMove | boolean |  defines if you want to attach events to pointermove
### detachControl() &rarr; void


### isReady() &rarr; boolean


### resetCachedMaterial() &rarr; void


### registerBeforeRender(func) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | 

### unregisterBeforeRender(func) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | 

### registerAfterRender(func) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | 

### unregisterAfterRender(func) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | 

### getWaitingItemsCount() &rarr; number


### executeWhenReady(func) &rarr; void

Registers a function to be executed when the scene is ready.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | 

### beginAnimation(target, from, to, loop, speedRatio, onAnimationEnd, animatable) &rarr; [Animatable](/classes/3.1/Animatable)

Will start the animation sequence of a given target

Returns {BABYLON.[Animatable](/classes/3.1/Animatable)} the animatable object created for this animation

See BABYLON.[Animatable](/classes/3.1/Animatable)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | any |  - the target
 | from | number | 
 | to | number | 
optional | loop | boolean | 
optional | speedRatio | number | 
optional | onAnimationEnd | () =&gt; void | 
### beginDirectAnimation(target, animations, from, to, loop, speedRatio, onAnimationEnd) &rarr; [Animatable](/classes/3.1/Animatable)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | any | 
 | animations | [Animation](/classes/3.1/Animation)[] | 
 | from | number | 
 | to | number | 
optional | loop | boolean | 
optional | speedRatio | number | 
### getAnimatableByTarget(target) &rarr; Nullable&lt;[Animatable](/classes/3.1/Animatable)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | any | 

### stopAnimation(target, animationName) &rarr; void

Will stop the animation of the given target

@see beginAnimation

#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | any |  - the target
optional | animationName | string |  - the name of the animation to stop (all animations will be stopped is empty)
### getViewMatrix() &rarr; [Matrix](/classes/3.1/Matrix)


### getProjectionMatrix() &rarr; [Matrix](/classes/3.1/Matrix)


### getTransformMatrix() &rarr; [Matrix](/classes/3.1/Matrix)


### setTransformMatrix(view, projection) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | view | [Matrix](/classes/3.1/Matrix) | 
 | projection | [Matrix](/classes/3.1/Matrix) | 
### getSceneUniformBuffer() &rarr; [UniformBuffer](/classes/3.1/UniformBuffer)


### getUniqueId() &rarr; number


### addMesh(newMesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | newMesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 

### removeMesh(toRemove) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | toRemove | [AbstractMesh](/classes/3.1/AbstractMesh) | 

### removeSkeleton(toRemove) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | toRemove | [Skeleton](/classes/3.1/Skeleton) | 

### removeMorphTargetManager(toRemove) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | toRemove | [MorphTargetManager](/classes/3.1/MorphTargetManager) | 

### removeLight(toRemove) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | toRemove | [Light](/classes/3.1/Light) | 

### removeCamera(toRemove) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | toRemove | [Camera](/classes/3.1/Camera) | 

### addLight(newLight) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | newLight | [Light](/classes/3.1/Light) | 

### sortLightsByPriority() &rarr; void


### addCamera(newCamera) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | newCamera | [Camera](/classes/3.1/Camera) | 

### switchActiveCamera(newCamera, attachControl) &rarr; void

Switch active camera

#### Parameters
 | Name | Type | Description
---|---|---|---
 | newCamera | [Camera](/classes/3.1/Camera) | 
optional | attachControl | boolean | 
### setActiveCameraByID(id) &rarr; Nullable&lt;[Camera](/classes/3.1/Camera)&gt;

sets the active camera of the scene using its ID

@return {BABYLON.[Camera](/classes/3.1/Camera)|null} the new active camera or null if none found.

@see activeCamera

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

### setActiveCameraByName(name) &rarr; Nullable&lt;[Camera](/classes/3.1/Camera)&gt;

sets the active camera of the scene using its name

@return {BABYLON.[Camera](/classes/3.1/Camera)|null} the new active camera or null if none found.

@see activeCamera

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### getMaterialByID(id) &rarr; Nullable&lt;[Material](/classes/3.1/Material)&gt;

get a material using its id

@return {BABYLON.[Material](/classes/3.1/Material)|null} the material or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

### getMaterialByName(name) &rarr; Nullable&lt;[Material](/classes/3.1/Material)&gt;

get a material using its name

@return {BABYLON.[Material](/classes/3.1/Material)|null} the material or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### getLensFlareSystemByName(name) &rarr; Nullable&lt;[LensFlareSystem](/classes/3.1/LensFlareSystem)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### getLensFlareSystemByID(id) &rarr; Nullable&lt;[LensFlareSystem](/classes/3.1/LensFlareSystem)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

### getCameraByID(id) &rarr; Nullable&lt;[Camera](/classes/3.1/Camera)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

### getCameraByUniqueID(uniqueId) &rarr; Nullable&lt;[Camera](/classes/3.1/Camera)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniqueId | number | 

### getCameraByName(name) &rarr; Nullable&lt;[Camera](/classes/3.1/Camera)&gt;

get a camera using its name

@return {BABYLON.[Camera](/classes/3.1/Camera)|null} the camera or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### getBoneByID(id) &rarr; Nullable&lt;[Bone](/classes/3.1/Bone)&gt;

get a bone using its id

@return {BABYLON.[Bone](/classes/3.1/Bone)|null} the bone or null if not found

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

### getBoneByName(name) &rarr; Nullable&lt;[Bone](/classes/3.1/Bone)&gt;

get a bone using its id

@return {BABYLON.[Bone](/classes/3.1/Bone)|null} the bone or null if not found

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### getLightByName(name) &rarr; Nullable&lt;[Light](/classes/3.1/Light)&gt;

get a light node using its name

@return {BABYLON.[Light](/classes/3.1/Light)|null} the light or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### getLightByID(id) &rarr; Nullable&lt;[Light](/classes/3.1/Light)&gt;

get a light node using its ID

@return {BABYLON.[Light](/classes/3.1/Light)|null} the light or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

### getLightByUniqueID(uniqueId) &rarr; Nullable&lt;[Light](/classes/3.1/Light)&gt;

get a light node using its scene-generated unique ID

@return {BABYLON.[Light](/classes/3.1/Light)|null} the light or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniqueId | number | 

### getParticleSystemByID(id) &rarr; Nullable&lt;IParticleSystem&gt;

get a particle system by id

@return {BABYLON.IParticleSystem|null} the corresponding system or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |  {number} the particle system id

### getGeometryByID(id) &rarr; Nullable&lt;[Geometry](/classes/3.1/Geometry)&gt;

get a geometry using its ID

@return {BABYLON.[Geometry](/classes/3.1/Geometry)|null} the geometry or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

### pushGeometry(geometry, force) &rarr; boolean

add a new geometry to this scene.

@return {boolean} was the geometry added or not

#### Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/3.1/Geometry) | 
optional | force | boolean | 
### removeGeometry(geometry) &rarr; boolean

Removes an existing geometry

@return {boolean} was the geometry removed or not

#### Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/3.1/Geometry) | 

### getGeometries() &rarr; [Geometry](/classes/3.1/Geometry)[]


### getMeshByID(id) &rarr; Nullable&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;

Get the first added mesh found of a given ID

@return {BABYLON.[AbstractMesh](/classes/3.1/AbstractMesh)|null} the mesh found or null if not found at all.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

### getMeshesByID(id) &rarr; Array&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

### getMeshByUniqueID(uniqueId) &rarr; Nullable&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;

Get a mesh with its auto-generated unique id

@return {BABYLON.[AbstractMesh](/classes/3.1/AbstractMesh)|null} the mesh found or null if not found at all.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniqueId | number | 

### getLastMeshByID(id) &rarr; Nullable&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;

Get a the last added mesh found of a given ID

@return {BABYLON.[AbstractMesh](/classes/3.1/AbstractMesh)|null} the mesh found or null if not found at all.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

### getLastEntryByID(id) &rarr; Nullable&lt;[Node](/classes/3.1/Node)&gt;

Get a the last added node ([Mesh](/classes/3.1/Mesh), [Camera](/classes/3.1/Camera), [Light](/classes/3.1/Light)) found of a given ID

@return {BABYLON.[Node](/classes/3.1/Node)|null} the node found or null if not found at all.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

### getNodeByID(id) &rarr; Nullable&lt;[Node](/classes/3.1/Node)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

### getNodeByName(name) &rarr; Nullable&lt;[Node](/classes/3.1/Node)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### getMeshByName(name) &rarr; Nullable&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### getSoundByName(name) &rarr; Nullable&lt;[Sound](/classes/3.1/Sound)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### getLastSkeletonByID(id) &rarr; Nullable&lt;[Skeleton](/classes/3.1/Skeleton)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

### getSkeletonById(id) &rarr; Nullable&lt;[Skeleton](/classes/3.1/Skeleton)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | 

### getSkeletonByName(name) &rarr; Nullable&lt;[Skeleton](/classes/3.1/Skeleton)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### getMorphTargetManagerById(id) &rarr; Nullable&lt;[MorphTargetManager](/classes/3.1/MorphTargetManager)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | number | 

### isActiveMesh(mesh) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 

### getHighlightLayerByName(name) &rarr; Nullable&lt;[HighlightLayer](/classes/3.1/HighlightLayer)&gt;

Return a the first highlight layer of the scene with a given name.

@return The highlight layer if found otherwise null.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  The name of the highlight layer to look for.

### addExternalData(key, data) &rarr; boolean

Add an externaly attached data from its key.

This method call will fail and return false, if such key already exists.

If you don't care and just want to get the data no matter what, use the more convenient getOrAddExternalDataWithFactory() method.

@return true if no such key were already present and the data was added successfully, false otherwise

#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | string |  the unique key that identifies the data
 | data | T |  the data object to associate to the key for this [Engine](/classes/3.1/Engine) instance
### getExternalData(key) &rarr; Nullable&lt;T&gt;

Get an externaly attached data from its key

@return the associated data, if present (can be null), or undefined if not present

#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | string |  the unique key that identifies the data

### getOrAddExternalDataWithFactory(key, factory) &rarr; T

Get an externaly attached data from its key, create it using a factory if it's not already present

@return the associated data, can be null if the factory returned null.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | string |  the unique key that identifies the data
 | factory | (k: string) =&gt; T |  the factory that will be called to create the instance if and only if it doesn't exists
### removeExternalData(key) &rarr; boolean

Remove an externaly attached data from the [Engine](/classes/3.1/Engine) instance

@return true if the data was successfully removed, false if it doesn't exist

#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | string |  the unique key that identifies the data

### freezeActiveMeshes() &rarr; [Scene](/classes/3.1/Scene)

Use this function to stop evaluating active meshes. The current list will be keep alive between frames
### unfreezeActiveMeshes() &rarr; 

Use this function to restart evaluating active meshes on every frame
### updateTransformMatrix(force) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean | 

### updateAlternateTransformMatrix(alternateCamera) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | alternateCamera | [Camera](/classes/3.1/Camera) | 

### render() &rarr; void


### enableDepthRenderer() &rarr; [DepthRenderer](/classes/3.1/DepthRenderer)


### disableDepthRenderer() &rarr; void


### enableGeometryBufferRenderer(ratio) &rarr; Nullable&lt;[GeometryBufferRenderer](/classes/3.1/GeometryBufferRenderer)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | ratio | number | 

### disableGeometryBufferRenderer() &rarr; void


### freezeMaterials() &rarr; void


### unfreezeMaterials() &rarr; void


### dispose() &rarr; void


### disposeSounds() &rarr; void


### getWorldExtends() &rarr; { min: [Vector3](/classes/3.1/Vector3),  max: [Vector3](/classes/3.1/Vector3) }


### createOrUpdateSelectionOctree(maxCapacity, maxDepth) &rarr; [Octree](/classes/3.1/Octree)&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | maxCapacity | number | 
optional | maxDepth | number | 
### createPickingRay(x, y, world, camera, cameraViewSpace) &rarr; [Ray](/classes/3.1/Ray)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
 | world | [Matrix](/classes/3.1/Matrix) | 
 | camera | Nullable&lt;[Camera](/classes/3.1/Camera)&gt; | 
### createPickingRayInCameraSpace(x, y, camera) &rarr; Nullable&lt;[Ray](/classes/3.1/Ray)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | 
 | y | number | 
optional | camera | [Camera](/classes/3.1/Camera) | 
### pick(x, y, predicate, fastCheck, camera) &rarr; Nullable&lt;[PickingInfo](/classes/3.1/PickingInfo)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |  position on screen
 | y | number |  position on screen
optional | predicate | (mesh: [AbstractMesh](/classes/3.1/AbstractMesh)) =&gt; boolean |  Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true
optional | fastCheck | boolean |  Launch a fast check only using the bounding boxes. Can be set to null.
### pickSprite(x, y, predicate, fastCheck, camera) &rarr; Nullable&lt;[PickingInfo](/classes/3.1/PickingInfo)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |  position on screen
 | y | number |  position on screen
optional | predicate | (sprite: [Sprite](/classes/3.1/Sprite)) =&gt; boolean |  Predicate function used to determine eligible sprites. Can be set to null. In this case, a sprite must have isPickable set to true
optional | fastCheck | boolean |  Launch a fast check only using the bounding boxes. Can be set to null.
### pickWithRay(ray, predicate, fastCheck) &rarr; Nullable&lt;[PickingInfo](/classes/3.1/PickingInfo)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/3.1/Ray) |  The ray to use to pick meshes
 | predicate | (mesh: [AbstractMesh](/classes/3.1/AbstractMesh)) =&gt; boolean |  Predicate function used to determine eligible sprites. Can be set to null. In this case, a sprite must have isPickable set to true
optional | fastCheck | boolean |  Launch a fast check only using the bounding boxes. Can be set to null.
### multiPick(x, y, predicate, camera) &rarr; Nullable&lt;[PickingInfo](/classes/3.1/PickingInfo)[]&gt;

Launch a ray to try to pick a mesh in the scene

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |  X position on screen
 | y | number |  Y position on screen
optional | predicate | (mesh: [AbstractMesh](/classes/3.1/AbstractMesh)) =&gt; boolean |  Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true
### multiPickWithRay(ray, predicate) &rarr; Nullable&lt;[PickingInfo](/classes/3.1/PickingInfo)[]&gt;

Launch a ray to try to pick a mesh in the scene

#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/3.1/Ray) |  [Ray](/classes/3.1/Ray) to use
 | predicate | (mesh: [AbstractMesh](/classes/3.1/AbstractMesh)) =&gt; boolean |  Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true
### setPointerOverMesh(mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | Nullable&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt; | 

### getPointerOverMesh() &rarr; Nullable&lt;[AbstractMesh](/classes/3.1/AbstractMesh)&gt;


### setPointerOverSprite(sprite) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | sprite | Nullable&lt;[Sprite](/classes/3.1/Sprite)&gt; | 

### getPointerOverSprite() &rarr; Nullable&lt;[Sprite](/classes/3.1/Sprite)&gt;


### getPhysicsEngine() &rarr; Nullable&lt;[PhysicsEngine](/classes/3.1/PhysicsEngine)&gt;


### enablePhysics(gravity, plugin) &rarr; boolean

Enables physics to the current scene

@return {boolean} was the physics engine initialized

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | gravity | Nullable&lt;[Vector3](/classes/3.1/Vector3)&gt; | 
optional | plugin | IPhysicsEnginePlugin | 
### disablePhysicsEngine() &rarr; void


### isPhysicsEnabled() &rarr; boolean


### deleteCompoundImpostor(compound) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | compound | any | 

### createDefaultCameraOrLight(createArcRotateCamera, replace, attachCameraControls) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | createArcRotateCamera | boolean | 
optional | replace | boolean | 
optional | attachCameraControls | boolean | 
### createDefaultSkybox(environmentTexture, pbr, scale, blur) &rarr; Nullable&lt;[Mesh](/classes/3.1/Mesh)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | environmentTexture | [BaseTexture](/classes/3.1/BaseTexture) | 
optional | pbr | boolean | 
optional | scale | number | 
### createDefaultVRExperience(webVROptions) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | webVROptions | WebVROptions | 

### getMeshesByTags(tagsQuery, forEach) &rarr; [Mesh](/classes/3.1/Mesh)[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string | 
optional | forEach | (mesh: [AbstractMesh](/classes/3.1/AbstractMesh)) =&gt; void | 
### getCamerasByTags(tagsQuery, forEach) &rarr; [Camera](/classes/3.1/Camera)[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string | 
optional | forEach | (camera: [Camera](/classes/3.1/Camera)) =&gt; void | 
### getLightsByTags(tagsQuery, forEach) &rarr; [Light](/classes/3.1/Light)[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string | 
optional | forEach | (light: [Light](/classes/3.1/Light)) =&gt; void | 
### getMaterialByTags(tagsQuery, forEach) &rarr; [Material](/classes/3.1/Material)[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string | 
optional | forEach | (material: [Material](/classes/3.1/Material)) =&gt; void | 
### setRenderingOrder(renderingGroupId, opaqueSortCompareFn, alphaTestSortCompareFn, transparentSortCompareFn) &rarr; void

Overrides the default sort function applied in the renderging group to prepare the meshes.

This allowed control for front to back rendering or reversly depending of the special needs.

         * @param renderingGroupId The rendering group id corresponding to its index

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderingGroupId | number |  The rendering group id corresponding to its index
optional | opaqueSortCompareFn | Nullable&lt;(a: [SubMesh](/classes/3.1/SubMesh), b: [SubMesh](/classes/3.1/SubMesh)) =&gt; number&gt; |  The opaque queue comparison function use to sort.
optional | alphaTestSortCompareFn | Nullable&lt;(a: [SubMesh](/classes/3.1/SubMesh), b: [SubMesh](/classes/3.1/SubMesh)) =&gt; number&gt; |  The alpha test queue comparison function use to sort.
### setRenderingAutoClearDepthStencil(renderingGroupId, autoClearDepthStencil, depth, stencil) &rarr; void

Specifies whether or not the stencil and depth buffer are cleared between two rendering groups.

         * @param renderingGroupId The rendering group id corresponding to its index

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderingGroupId | number |  The rendering group id corresponding to its index
 | autoClearDepthStencil | boolean |  Automatically clears depth and stencil between groups if true.
optional | depth | boolean |  Automatically clears depth between groups if true and autoClear is true.
### markAllMaterialsAsDirty(flag, predicate) &rarr; void

Will flag all materials as dirty to trigger new shader compilation

#### Parameters
 | Name | Type | Description
---|---|---|---
 | flag | number | 
optional | predicate | (mat: [Material](/classes/3.1/Material)) =&gt; boolean |  If not null, it will be used to specifiy if a material has to be marked as dirty
