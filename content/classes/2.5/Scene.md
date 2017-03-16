---
ID_PAGE: 25150
PG_TITLE: Scene
PG_VERSION: 2.1
TAGS:
    - Scene
---
## Description

class [Scene](/classes/2.5/Scene)

Represents a scene to be rendered by the engine.

@see http://doc.babylonjs.com/page.php?p=21911

## Constructor

## new [Scene](/classes/2.5/Scene)(engine)

@constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](/classes/2.5/Engine) |     [Engine](/classes/2.5/Engine) The babylon engine

## Members

### static MinDeltaTime : number

default : 1.0

In milliseconds, the minimum delta time between two steps

### static MaxDeltaTime : number

default : 1000.0

In milliseconds, the maximum delta time between two steps

### static FOGMODE_NONE : number

The fog is deactivated

### static FOGMODE_EXP : number

The fog density is following an exponential function

### static FOGMODE_EXP2 : number

The fog density is following an exponential function faster than FOGMODE_EXP

### static FOGMODE_LINEAR : number

The fog density is following a linear function.

### static DragMovementThreshold : number

The distance in pixel that you have to move to prevent some events

### static LongPressDelay : number

Time in milliseconds to wait to raise long press events if button is still pressed

### static DoubleClickDelay : number

Time in milliseconds with two consecutive clicks will be considered as a double click

### static ExclusiveDoubleClickMode : boolean

If enabled, a double click will not be preceed by a single click

### autoClear : boolean

default : true

True to clear the color buffer at each render, false either

### clearColor : any

default : [Color3](/classes/2.5/Color3)(0.2, 0.2, 0.3)

The color of the scene when cleared

### ambientColor : [Color3](/classes/2.5/Color3)

default : [Color3](/classes/2.5/Color3)(0, 0, 0)

The scene ambiant color

### forceWireframe : boolean

default : false

Forces the wireframe display of meshes

### forcePointsCloud : boolean



### forceShowBoundingBoxes : boolean



### clipPlane : [Plane](/classes/2.5/Plane)



### animationsEnabled : boolean



### constantlyUpdateMeshUnderPointer : boolean



### useRightHandedSystem : boolean



### hoverCursor : string



### metadata : any



### onDisposeObservable : [Observable](/classes/2.5/Observable)&lt;[Scene](/classes/2.5/Scene)&gt;

An event triggered when the scene is disposed.

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### onDispose : () =&gt; void

A function to be executed when this scene is disposed.

@type {Function}

### onBeforeRenderObservable : [Observable](/classes/2.5/Observable)&lt;[Scene](/classes/2.5/Scene)&gt;

An event triggered before rendering the scene

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### beforeRender : () =&gt; void

A function to be executed before rendering this scene

@type {Function}

### onAfterRenderObservable : [Observable](/classes/2.5/Observable)&lt;[Scene](/classes/2.5/Scene)&gt;

An event triggered after rendering the scene

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### afterRender : () =&gt; void

A function to be executed after rendering this scene

@type {Function}

### onReadyObservable : [Observable](/classes/2.5/Observable)&lt;[Scene](/classes/2.5/Scene)&gt;

An event triggered when the scene is ready

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### onBeforeCameraRenderObservable : [Observable](/classes/2.5/Observable)&lt;[Camera](/classes/2.5/Camera)&gt;

An event triggered before rendering a camera

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### beforeCameraRender : () =&gt; void

Function triggered before the camera is rendered, with the concerned camera passed in argument

### onAfterCameraRenderObservable : [Observable](/classes/2.5/Observable)&lt;[Camera](/classes/2.5/Camera)&gt;

An event triggered after rendering a camera

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### afterCameraRender : () =&gt; void

Function triggered after the camera is rendered, with the concerned camera passed in argument

### onNewCameraAddedObservable : [Observable](/classes/2.5/Observable)&lt;[Camera](/classes/2.5/Camera)&gt;

An event triggered when a camera is created

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### onCameraRemovedObservable : [Observable](/classes/2.5/Observable)&lt;[Camera](/classes/2.5/Camera)&gt;

An event triggered when a camera is removed

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### onNewLightAddedObservable : [Observable](/classes/2.5/Observable)&lt;[Light](/classes/2.5/Light)&gt;

An event triggered when a light is created

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### onLightRemovedObservable : [Observable](/classes/2.5/Observable)&lt;[Light](/classes/2.5/Light)&gt;

An event triggered when a light is removed

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### onNewGeometryAddedObservable : [Observable](/classes/2.5/Observable)&lt;[Geometry](/classes/2.5/Geometry)&gt;

An event triggered when a geometry is created

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### onGeometryRemovedObservable : [Observable](/classes/2.5/Observable)&lt;[Geometry](/classes/2.5/Geometry)&gt;

An event triggered when a geometry is removed

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### onNewMeshAddedObservable : [Observable](/classes/2.5/Observable)&lt;[AbstractMesh](/classes/2.5/AbstractMesh)&gt;

An event triggered when a mesh is created

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### onMeshRemovedObservable : [Observable](/classes/2.5/Observable)&lt;[AbstractMesh](/classes/2.5/AbstractMesh)&gt;

An event triggered when a mesh is removed

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### onRenderingGroupObservable : [Observable](/classes/2.5/Observable)&lt;[RenderingGroupInfo](/classes/2.5/RenderingGroupInfo)&gt;

This [Observable](/classes/2.5/Observable) will be triggered for each stage of each renderingGroup of each rendered camera.

The RenderinGroupInfo class contains all the information about the context in which the observable is called

If you wish to register an [Observer](/classes/2.5/Observer) only for a given set of renderingGroup, use the mask with a combination of the renderingGroup index elevated to the power of two (1 for renderingGroup 0, 2 for renderingrOup1, 4 for 2 and 8 for 3)

### animations : [Animation](/classes/2.5/Animation)[]



### pointerDownPredicate : ([Mesh](/classes/2.5/Mesh): [AbstractMesh](/classes/2.5/AbstractMesh)) =&gt; boolean



### pointerUpPredicate : ([Mesh](/classes/2.5/Mesh): [AbstractMesh](/classes/2.5/AbstractMesh)) =&gt; boolean



### pointerMovePredicate : ([Mesh](/classes/2.5/Mesh): [AbstractMesh](/classes/2.5/AbstractMesh)) =&gt; boolean



### onPointerMove : (evt: PointerEvent, pickInfo: [PickingInfo](/classes/2.5/PickingInfo)) =&gt; void

@deprecated Use onPointerObservable instead

### onPointerDown : (evt: PointerEvent, pickInfo: [PickingInfo](/classes/2.5/PickingInfo)) =&gt; void

@deprecated Use onPointerObservable instead

### onPointerUp : (evt: PointerEvent, pickInfo: [PickingInfo](/classes/2.5/PickingInfo)) =&gt; void

@deprecated Use onPointerObservable instead

### onPointerPick : (evt: PointerEvent, pickInfo: [PickingInfo](/classes/2.5/PickingInfo)) =&gt; void

@deprecated Use onPointerObservable instead

### onPrePointerObservable : [Observable](/classes/2.5/Observable)&lt;[PointerInfoPre](/classes/2.5/PointerInfoPre)&gt;

This observable event is triggered when any mouse event registered during [Scene](/classes/2.5/Scene).attach() is called BEFORE the 3D engine to process anything (mesh/sprite picking for instance).

You have the possibility to skip the 3D [Engine](/classes/2.5/Engine) process and the call to onPointerObservable by setting [PointerInfoBase](/classes/2.5/PointerInfoBase).skipOnPointerObservable to true

### onPointerObservable : [Observable](/classes/2.5/Observable)&lt;[PointerInfo](/classes/2.5/PointerInfo)&gt;

[Observable](/classes/2.5/Observable) event triggered each time an input event is received from the rendering canvas

### unTranslatedPointer : [Vector2](/classes/2.5/Vector2)



### cameraToUseForPointers : [Camera](/classes/2.5/Camera)

The camera used for pointers

### fogEnabled : boolean

is fog enabled on this scene.

@type {boolean}

### fogMode : number

One of the following values : [Scene](/classes/2.5/Scene).FOGMODE_NONE, [Scene](/classes/2.5/Scene).FOGMODE_EXP, [Scene](/classes/2.5/Scene).FOGMODE_EXP2 , [Scene](/classes/2.5/Scene).FOGMODE_LINEAR

### fogColor : [Color3](/classes/2.5/Color3)

default : [Color3](/classes/2.5/Color3)(0.2, 0.2, 0.3)

The fog color

### fogDensity : number

default : 0.1

The fog density

### fogStart : number

default : 0

Used with the [Scene](/classes/2.5/Scene).FOGMODE_LINEAR fogMode

Where the fog starts

### fogEnd : number

default : 1000.0

Used with the [Scene](/classes/2.5/Scene).FOGMODE_LINEAR fogMode

Where the fog ends

### shadowsEnabled : boolean

is shadow enabled on this scene.

@type {boolean}

### lightsEnabled : boolean

is light enabled on this scene.

@type {boolean}

### lights : [Light](/classes/2.5/Light)[]

All of the lights added to this scene.

@see BABYLON.[Light](/classes/2.5/Light)

@type {BABYLON.[Light](/classes/2.5/Light)[]}

### cameras : [Camera](/classes/2.5/Camera)[]

All of the cameras added to this scene.

@see BABYLON.[Camera](/classes/2.5/Camera)

@type {BABYLON.[Camera](/classes/2.5/Camera)[]}

### activeCameras : [Camera](/classes/2.5/Camera)[]

The array holding the list of active [Camera](/classes/2.5/Camera) instances

### activeCamera : [Camera](/classes/2.5/Camera)

The active camera for this scene

### meshes : [AbstractMesh](/classes/2.5/AbstractMesh)[]

All of the (abstract) meshes added to this scene.

@see BABYLON.[AbstractMesh](/classes/2.5/AbstractMesh)

@type {BABYLON.[AbstractMesh](/classes/2.5/AbstractMesh)[]}

### materials : [Material](/classes/2.5/Material)[]

The array holding all materials of this scene

### multiMaterials : [MultiMaterial](/classes/2.5/MultiMaterial)[]

The array holding all multimaterials of this scene

### defaultMaterial : [StandardMaterial](/classes/2.5/StandardMaterial)

The default material used on meshes when no material is affected

### texturesEnabled : boolean

True if texture should be enabled, false otherwise

### textures : [BaseTexture](/classes/2.5/BaseTexture)[]

The array holding all textures used in the scene

### particlesEnabled : boolean

True if Particles should be enabled, false otherwise

### particleSystems : [ParticleSystem](/classes/2.5/ParticleSystem)[]

The array holding all particle systems of this scene

### spritesEnabled : boolean



### spriteManagers : [SpriteManager](/classes/2.5/SpriteManager)[]

The array holding all sprite managers of this scene

### layers : [Layer](/classes/2.5/Layer)[]

The array holding all layers of this scene

### highlightLayers : [HighlightLayer](/classes/2.5/HighlightLayer)[]



### skeletonsEnabled : boolean



### skeletons : [Skeleton](/classes/2.5/Skeleton)[]

The array holding all skeletons of this scene

### lensFlaresEnabled : boolean



### lensFlareSystems : [LensFlareSystem](/classes/2.5/LensFlareSystem)[]

The array holding all lensflare systems of this scene

### collisionsEnabled : boolean

True if collisions should be enabled, false otherwise

### collisionCoordinator : ICollisionCoordinator



### gravity : [Vector3](/classes/2.5/Vector3)

Defines the gravity applied to this scene

### postProcessesEnabled : boolean

True if postProcesses should be enabled, false otherwise

### postProcessManager : [PostProcessManager](/classes/2.5/PostProcessManager)

The post process manager of this scene

### postProcessRenderPipelineManager : [PostProcessRenderPipelineManager](/classes/2.5/PostProcessRenderPipelineManager)

The post process render pipeline manager of this scene

### renderTargetsEnabled : boolean

True if custom render target should be enabled, false otherwise

### dumpNextRenderTargets : boolean



### customRenderTargets : [RenderTargetTexture](/classes/2.5/RenderTargetTexture)[]

The array holding all custom render targets of this scene

### useDelayedTextureLoading : boolean

True if the texture loading should be delayed, false otherwise

### importedMeshesFiles : String[]

The array holding all imported mesh files

### probesEnabled : boolean



### reflectionProbes : [ReflectionProbe](/classes/2.5/ReflectionProbe)[]



### database : any

The database this scene is saved into

### actionManager : [ActionManager](/classes/2.5/ActionManager)

This scene's action manager

@type {BABYLON.[ActionManager](/classes/2.5/ActionManager)}

### proceduralTexturesEnabled : boolean



### mainSoundTrack : [SoundTrack](/classes/2.5/SoundTrack)



### soundTracks : [SoundTrack](/classes/2.5/SoundTrack)[]



### simplificationQueue : [SimplificationQueue](/classes/2.5/SimplificationQueue)



### debugLayer : [DebugLayer](/classes/2.5/DebugLayer)



### workerCollisions : boolean



### SelectionOctree : [Octree](/classes/2.5/Octree)&lt;[AbstractMesh](/classes/2.5/AbstractMesh)&gt;



### meshUnderPointer : [AbstractMesh](/classes/2.5/AbstractMesh)

The mesh that is currently under the pointer.

@return {BABYLON.[AbstractMesh](/classes/2.5/AbstractMesh)} mesh under the pointer/mouse cursor or null if none.

### pointerX : number

Current on-screen X position of the pointer

@return {number} X position of the pointer

### pointerY : number

Current on-screen Y position of the pointer

@return {number} Y position of the pointer

### totalVerticesPerfCounter : [PerfCounter](/classes/2.5/PerfCounter)



### totalActiveIndicesPerfCounter : [PerfCounter](/classes/2.5/PerfCounter)



### activeParticlesPerfCounter : [PerfCounter](/classes/2.5/PerfCounter)



### activeBonesPerfCounter : [PerfCounter](/classes/2.5/PerfCounter)



### lastFramePerfCounter : [PerfCounter](/classes/2.5/PerfCounter)



### evaluateActiveMeshesDurationPerfCounter : [PerfCounter](/classes/2.5/PerfCounter)



### renderDurationPerfCounter : [PerfCounter](/classes/2.5/PerfCounter)



### particlesDurationPerfCounter : [PerfCounter](/classes/2.5/PerfCounter)



### spriteDuractionPerfCounter : [PerfCounter](/classes/2.5/PerfCounter)



### Animatables : [Animatable](/classes/2.5/Animatable)[]



### uid : string

Return a unique id as a string which can serve as an identifier for the scene

### audioEnabled : boolean



### headphone : boolean



## Methods

### getCachedMaterial() &rarr; [Material](/classes/2.5/Material)


### getBoundingBoxRenderer() &rarr; [BoundingBoxRenderer](/classes/2.5/BoundingBoxRenderer)

Returns the bounding box renderer
### getOutlineRenderer() &rarr; [OutlineRenderer](/classes/2.5/OutlineRenderer)

Returns the outline rendrer
### getEngine() &rarr; [Engine](/classes/2.5/Engine)

Returns the engine
### getTotalVertices() &rarr; number

Returns all the vertices of this scene
### getActiveIndices() &rarr; number


### getActiveParticles() &rarr; number

Returns all the active particles of this scene
### getActiveBones() &rarr; number


### getLastFrameDuration() &rarr; number

Returns the duration of the last frame in milliseconds
### getEvaluateActiveMeshesDuration() &rarr; number

Returns the duration of active meshes in milliseconds
### getActiveMeshes() &rarr; [SmartArray](/classes/2.5/SmartArray)&lt;[Mesh](/classes/2.5/Mesh)&gt;

Returns the list of acti meshes of this scene
### getRenderTargetsDuration() &rarr; number

Returns the duration of targets render in milliseconds
### getRenderDuration() &rarr; number

Returns the duration of the last render in milliseconds
### getParticlesDuration() &rarr; number

Returns the duration of the last particles processing in milliseconds
### getSpritesDuration() &rarr; number

Returns the duration of the last sprites processing in milliseconds
### getAnimationRatio() &rarr; number

Returns the animation ratio (speed)
### getRenderId() &rarr; number

Returns the render ID of this scene
### incrementRenderId() &rarr; void


### attachControl(attachUp, attachDown, attachMove) &rarr; void

Attach events to the canvas (To handle actionManagers triggers and raise onPointerMove, onPointerDown and onPointerUp

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | attachUp | boolean |  defines if you want to attach events to pointerup  defines if you want to attach events to pointerup
optional | attachDown | boolean |  defines if you want to attach events to pointerdown  defines if you want to attach events to pointerdown
optional | attachMove | boolean |  defines if you want to attach events to pointermove  defines if you want to attach events to pointermove
### detachControl() &rarr; void

Detaches mouse/keyboard control to this scene
### isReady() &rarr; boolean

Returns true when the scene is ready to be displayed (all meshes are ready and all materials are ready)
### resetCachedMaterial() &rarr; void


### registerBeforeRender(func) &rarr; void

Registers in an array the given function which will be executed before rendering the scene

#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void |     The given function to call

### unregisterBeforeRender(func) &rarr; void

Removes the given function from the beforeRender array

#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void |     The given function to call

### registerAfterRender(func) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void |     The given function to call

### unregisterAfterRender(func) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void |     The given function to call

### getWaitingItemsCount() &rarr; number

Returns the length of pending data (not ready yet)
### executeWhenReady(func) &rarr; void

Registers a function to be executed when the scene is ready.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void |     The given function to call

### beginAnimation(target, from, to, loop, speedRatio, onAnimationEnd, animatable) &rarr; [Animatable](/classes/2.5/Animatable)

Will start the animation sequence of a given target

@return {BABYLON.[Animatable](/classes/2.5/Animatable)} the animatable object created for this animation

@see BABYLON.[Animatable](/classes/2.5/Animatable)

@see http://doc.babylonjs.com/page.php?p=22081

#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | any |  - the target  - the target  - the target  - the target - the target
 | from | number |     The starting frame
 | to | number |     The ending frame
optional | loop | boolean |     If true, the animation will loop
optional | speedRatio | number |     default : 1.The speed ratio of this animation
optional | onAnimationEnd | () =&gt; void |     The function triggered on the end of the animation
### beginDirectAnimation(target, animations, from, to, loop, speedRatio, onAnimationEnd) &rarr; [Animatable](/classes/2.5/Animatable)

Begins a direct animation (no children animations)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | any |   - the target  - the target  - the target - the target
 | animations | [Animation](/classes/2.5/Animation)[] |     An array of animations
 | from | number |     The starting frame
 | to | number |     The ending frame
optional | loop | boolean |     If true, the animation will loop
optional | speedRatio | number |     default : 1.The speed ratio of this animation
### getAnimatableByTarget(target) &rarr; [Animatable](/classes/2.5/Animatable)

Returns the first [Animatable](/classes/2.5/Animatable) instance having the given target in the active animatable array

#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | any |   - the target  - the target  - the target - the target

### stopAnimation(target, animationName) &rarr; void

Will stop the animation of the given target

@see beginAnimation

#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | any |  - the target  - the target  - the target  - the target - the target
optional | animationName | string |  - the name of the animation to stop (all animations will be stopped is empty)
### getViewMatrix() &rarr; [Matrix](/classes/2.5/Matrix)

Returns the view [Matrix](/classes/2.5/Matrix)
### getProjectionMatrix() &rarr; [Matrix](/classes/2.5/Matrix)

Returns the projection [Matrix](/classes/2.5/Matrix)
### getTransformMatrix() &rarr; [Matrix](/classes/2.5/Matrix)

Returns the transform [Matrix](/classes/2.5/Matrix)
### setTransformMatrix(view, projection) &rarr; void

Sets the transform matrix by multiplying the given view [Matrix](/classes/2.5/Matrix) by the given projection [Matrix](/classes/2.5/Matrix)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | view | [Matrix](/classes/2.5/Matrix) |     The given view [Matrix](/classes/2.5/Matrix)
 | projection | [Matrix](/classes/2.5/Matrix) |     The given projection [Matrix](/classes/2.5/Matrix)
### addMesh(newMesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | newMesh | [AbstractMesh](/classes/2.5/AbstractMesh) |     

### removeMesh(toRemove) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | toRemove | [AbstractMesh](/classes/2.5/AbstractMesh) |     

### removeSkeleton(toRemove) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | toRemove | [Skeleton](/classes/2.5/Skeleton) |     

### removeLight(toRemove) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | toRemove | [Light](/classes/2.5/Light) |     

### removeCamera(toRemove) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | toRemove | [Camera](/classes/2.5/Camera) |     

### addLight(newLight) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | newLight | [Light](/classes/2.5/Light) |     

### addCamera(newCamera) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | newCamera | [Camera](/classes/2.5/Camera) |     

### switchActiveCamera(newCamera, attachControl) &rarr; void

Switch active camera

#### Parameters
 | Name | Type | Description
---|---|---|---
 | newCamera | [Camera](/classes/2.5/Camera) |     
optional | attachControl | boolean |   
### setActiveCameraByID(id) &rarr; [Camera](/classes/2.5/Camera)

sets the active camera of the scene using its ID

@return {BABYLON.[Camera](/classes/2.5/Camera)|null} the new active camera or null if none found.

@see activeCamera

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |     The given id

### setActiveCameraByName(name) &rarr; [Camera](/classes/2.5/Camera)

sets the active camera of the scene using its name

@return {BABYLON.[Camera](/classes/2.5/Camera)|null} the new active camera or null if none found.

@see activeCamera

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     The given name

### getMaterialByID(id) &rarr; [Material](/classes/2.5/Material)

get a material using its id

@return {BABYLON.[Material](/classes/2.5/Material)|null} the material or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |     The given id

### getMaterialByName(name) &rarr; [Material](/classes/2.5/Material)

get a material using its name

@return {BABYLON.[Material](/classes/2.5/Material)|null} the material or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     The given name

### getLensFlareSystemByName(name) &rarr; [LensFlareSystem](/classes/2.5/LensFlareSystem)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     The given name

### getLensFlareSystemByID(id) &rarr; [LensFlareSystem](/classes/2.5/LensFlareSystem)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |     The given id

### getCameraByID(id) &rarr; [Camera](/classes/2.5/Camera)

Returns the first [Camera](/classes/2.5/Camera) instance using the given id

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |     The given id

### getCameraByUniqueID(uniqueId) &rarr; [Camera](/classes/2.5/Camera)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniqueId | number |     

### getCameraByName(name) &rarr; [Camera](/classes/2.5/Camera)

get a camera using its name

@return {BABYLON.[Camera](/classes/2.5/Camera)|null} the camera or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     The given name

### getBoneByID(id) &rarr; [Bone](/classes/2.5/Bone)

get a bone using its id

@return {BABYLON.[Bone](/classes/2.5/Bone)|null} the bone or null if not found

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |     The given id

### getBoneByName(name) &rarr; [Bone](/classes/2.5/Bone)

get a bone using its id

@return {BABYLON.[Bone](/classes/2.5/Bone)|null} the bone or null if not found

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     The given name

### getLightByName(name) &rarr; [Light](/classes/2.5/Light)

get a light node using its name

@return {BABYLON.[Light](/classes/2.5/Light)|null} the light or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     The given name

### getLightByID(id) &rarr; [Light](/classes/2.5/Light)

get a light node using its ID

@return {BABYLON.[Light](/classes/2.5/Light)|null} the light or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |     The given id

### getLightByUniqueID(uniqueId) &rarr; [Light](/classes/2.5/Light)

get a light node using its scene-generated unique ID

@return {BABYLON.[Light](/classes/2.5/Light)|null} the light or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniqueId | number |     

### getParticleSystemByID(id) &rarr; [ParticleSystem](/classes/2.5/ParticleSystem)

get a particle system by id

@return {BABYLON.[ParticleSystem](/classes/2.5/ParticleSystem)|null} the corresponding system or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |  {number} the particle system id    The given id

### getGeometryByID(id) &rarr; [Geometry](/classes/2.5/Geometry)

get a geometry using its ID

@return {BABYLON.[Geometry](/classes/2.5/Geometry)|null} the geometry or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |     The given id

### pushGeometry(geometry, force) &rarr; boolean

add a new geometry to this scene.

@return {boolean} was the geometry added or not

#### Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/2.5/Geometry) |     
optional | force | boolean |     True to force the transform matrix update even if the projection is synchronized, false otherwise
### removeGeometry(geometry) &rarr; boolean

Removes an existing geometry

@return {boolean} was the geometry removed or not

#### Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/2.5/Geometry) |     

### getGeometries() &rarr; [Geometry](/classes/2.5/Geometry)[]

Returns the list of geometries of this scene
### getMeshByID(id) &rarr; [AbstractMesh](/classes/2.5/AbstractMesh)

Get the first added mesh found of a given ID

@return {BABYLON.[AbstractMesh](/classes/2.5/AbstractMesh)|null} the mesh found or null if not found at all.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |     The given id

### getMeshesByID(id) &rarr; Array&lt;[AbstractMesh](/classes/2.5/AbstractMesh)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |     The given id

### getMeshByUniqueID(uniqueId) &rarr; [AbstractMesh](/classes/2.5/AbstractMesh)

Get a mesh with its auto-generated unique id

@return {BABYLON.[AbstractMesh](/classes/2.5/AbstractMesh)|null} the mesh found or null if not found at all.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniqueId | number |     

### getLastMeshByID(id) &rarr; [AbstractMesh](/classes/2.5/AbstractMesh)

Get a the last added mesh found of a given ID

@return {BABYLON.[AbstractMesh](/classes/2.5/AbstractMesh)|null} the mesh found or null if not found at all.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |     The given id

### getLastEntryByID(id) &rarr; [Node](/classes/2.5/Node)

Get a the last added node ([Mesh](/classes/2.5/Mesh), [Camera](/classes/2.5/Camera), [Light](/classes/2.5/Light)) found of a given ID

@return {BABYLON.[Node](/classes/2.5/Node)|null} the node found or null if not found at all.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |     The given id

### getNodeByID(id) &rarr; [Node](/classes/2.5/Node)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |     The given id

### getNodeByName(name) &rarr; [Node](/classes/2.5/Node)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     The given name

### getMeshByName(name) &rarr; [AbstractMesh](/classes/2.5/AbstractMesh)

Returns the [Mesh](/classes/2.5/Mesh) instance having the given name

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     The given name

### getSoundByName(name) &rarr; [Sound](/classes/2.5/Sound)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     The given name

### getLastSkeletonByID(id) &rarr; [Skeleton](/classes/2.5/Skeleton)

Returns the last instance of [Skeleton](/classes/2.5/Skeleton) using the given id

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |     The given id

### getSkeletonById(id) &rarr; [Skeleton](/classes/2.5/Skeleton)

Returns the first [Skeleton](/classes/2.5/Skeleton) instance using the given id

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |     The given id

### getSkeletonByName(name) &rarr; [Skeleton](/classes/2.5/Skeleton)

Returns the first [Skeleton](/classes/2.5/Skeleton) instance corresponding to the given name

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     The given name

### isActiveMesh(mesh) &rarr; boolean

Tests if the given mesh is active or not

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.5/Mesh) |     The given mesh

### addExternalData(key, data) &rarr; boolean

Add an externaly attached data from its key.

This method call will fail and return false, if such key already exists.

If you don't care and just want to get the data no matter what, use the more convenient getOrAddExternalDataWithFactory() method.

@return true if no such key were already present and the data was added successfully, false otherwise

#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | string |  the unique key that identifies the data
 | data | T |  the data object to associate to the key for this [Engine](/classes/2.5/Engine) instance
### getExternalData(key) &rarr; T

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

Remove an externaly attached data from the [Engine](/classes/2.5/Engine) instance

@return true if the data was successfully removed, false if it doesn't exist

#### Parameters
 | Name | Type | Description
---|---|---|---
 | key | any |  the unique key that identifies the data

### updateTransformMatrix(force) &rarr; void

Updates the transform matrix of this scene with the one of the active camera

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean |     True to force the transform matrix update even if the projection is synchronized, false otherwise

### render() &rarr; void

Renders this [Scene](/classes/2.5/Scene)
### enableDepthRenderer() &rarr; [DepthRenderer](/classes/2.5/DepthRenderer)


### disableDepthRenderer() &rarr; void


### freezeMaterials() &rarr; void


### unfreezeMaterials() &rarr; void


### dispose() &rarr; void

Remove of this scene all lights, meshes, cameras, materials, particle systems, spritemanagers.
### disposeSounds() &rarr; void


### getWorldExtends() &rarr; { min: [Vector3](/classes/2.5/Vector3),  max: [Vector3](/classes/2.5/Vector3) }


### createOrUpdateSelectionOctree(maxCapacity, maxDepth) &rarr; [Octree](/classes/2.5/Octree)&lt;[AbstractMesh](/classes/2.5/AbstractMesh)&gt;

Creates a new octree for this scene or update it if existing.

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | maxCapacity | number |     default : 64 The maximum capacity of the octree
optional | maxDepth | number |     default : 2 The maximum depth of the octree
### createPickingRay(x, y, world, camera, cameraViewSpace) &rarr; [Ray](/classes/2.5/Ray)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |     X position on screen
 | y | number |     Y position on screen
 | world | [Matrix](/classes/2.5/Matrix) |     The world [Matrix](/classes/2.5/Matrix)
 | camera | [Camera](/classes/2.5/Camera) |   
### createPickingRayInCameraSpace(x, y, camera) &rarr; [Ray](/classes/2.5/Ray)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |     X position on screen
 | y | number |     Y position on screen
 | camera | [Camera](/classes/2.5/Camera) |   
### pick(x, y, predicate, fastCheck, camera) &rarr; [PickingInfo](/classes/2.5/PickingInfo)

Launch a ray to try to pick a mesh in the scene

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |     X position on screen
 | y | number |     Y position on screen
optional | predicate | (mesh: [AbstractMesh](/classes/2.5/AbstractMesh)) =&gt; boolean |     Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true
optional | fastCheck | boolean |     Launch a fast check only using the bounding boxes. Can be set to null.
### pickSprite(x, y, predicate, fastCheck, camera) &rarr; [PickingInfo](/classes/2.5/PickingInfo)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |     X position on screen
 | y | number |     Y position on screen
optional | predicate | (sprite: [Sprite](/classes/2.5/Sprite)) =&gt; boolean |     Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true
optional | fastCheck | boolean |     Launch a fast check only using the bounding boxes. Can be set to null.
### pickWithRay(ray, predicate, fastCheck) &rarr; [PickingInfo](/classes/2.5/PickingInfo)

Function used to pick a mesh by giving a ray (instead of a position).

#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/2.5/Ray) |     The given [Ray](/classes/2.5/Ray)
 | predicate | (mesh: [Mesh](/classes/2.5/Mesh)) =&gt; boolean |     Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true
optional | fastCheck | boolean |     Launch a fast check only using the bounding boxes. Can be set to null.
### multiPick(x, y, predicate, camera) &rarr; [PickingInfo](/classes/2.5/PickingInfo)[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |     X position on screen
 | y | number |     Y position on screen
optional | predicate | (mesh: [AbstractMesh](/classes/2.5/AbstractMesh)) =&gt; boolean |     Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true
### multiPickWithRay(ray, predicate) &rarr; [PickingInfo](/classes/2.5/PickingInfo)[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/2.5/Ray) |     The given [Ray](/classes/2.5/Ray)
 | predicate | (mesh: [Mesh](/classes/2.5/Mesh)) =&gt; boolean |     Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true
### setPointerOverMesh(mesh) &rarr; void

The action OnPointerOutTrigger and OnPointerOverTrigger are triggered for the given mesh

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.5/AbstractMesh) |     The given mesh

### getPointerOverMesh() &rarr; [AbstractMesh](/classes/2.5/AbstractMesh)

Returns the pointer over the mesh
### setPointerOverSprite(sprite) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | sprite | [Sprite](/classes/2.5/Sprite) |  

### getPointerOverSprite() &rarr; [Sprite](/classes/2.5/Sprite)


### getPhysicsEngine() &rarr; [PhysicsEngine](/classes/2.5/PhysicsEngine)

Returns the physic engine used for this scene
### enablePhysics(gravity, plugin) &rarr; boolean

Enables physics to the current scene

@return {boolean} was the physics engine initialized

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | gravity | [Vector3](/classes/2.5/Vector3) |     The given gravity
optional | plugin | IPhysicsEnginePlugin |     default : [OimoJSPlugin](/classes/2.5/OimoJSPlugin). The physics plugin used
### disablePhysicsEngine() &rarr; void

Delete the physics engine of the scene
### isPhysicsEnabled() &rarr; boolean

True if a physic engine is defined, false otherwise
### setGravity(gravity) &rarr; void

* Sets the gravity of the physics engine (and NOT of the scene)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | gravity | [Vector3](/classes/2.5/Vector3) |     The given gravity

### createCompoundImpostor(parts, options) &rarr; any

Legacy support, using the new API

@Deprecated

#### Parameters
 | Name | Type | Description
---|---|---|---
 | parts | any |     The array of object build this way {mesh: [Mesh](/classes/2.5/Mesh), impostor: number}
 | options | PhysicsImpostorParameters |     An object build this way {mass: number, friction: number, restitution: number}
### deleteCompoundImpostor(compound) &rarr; void

Unregister the compound impostor in the physic engine.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | compound | any |     The param type is the one used by the physics plugin

### createDefaultCameraOrLight() &rarr; void


### getMeshesByTags(tagsQuery, forEach) &rarr; [Mesh](/classes/2.5/Mesh)[]

Returns the list of meshes corresponding to the tag query given in parameter

#### Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string |     !tag5))
optional | forEach | (mesh: [AbstractMesh](/classes/2.5/AbstractMesh)) =&gt; void |     
### getCamerasByTags(tagsQuery, forEach) &rarr; [Camera](/classes/2.5/Camera)[]

Returns the list of cameras corresponding to the tag query given in parameter

#### Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string |     !tag5))
optional | forEach | (camera: [Camera](/classes/2.5/Camera)) =&gt; void |     
### getLightsByTags(tagsQuery, forEach) &rarr; [Light](/classes/2.5/Light)[]

Returns the list of lights corresponding to the tag query given in parameter

#### Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string |     !tag5))
optional | forEach | (light: [Light](/classes/2.5/Light)) =&gt; void |     
### getMaterialByTags(tagsQuery, forEach) &rarr; [Material](/classes/2.5/Material)[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string |     !tag5))
optional | forEach | (material: [Material](/classes/2.5/Material)) =&gt; void |     
### setRenderingOrder(renderingGroupId, opaqueSortCompareFn, alphaTestSortCompareFn, transparentSortCompareFn) &rarr; void

Overrides the default sort function applied in the renderging group to prepare the meshes.

This allowed control for front to back rendering or reversly depending of the special needs.

         * @param renderingGroupId The rendering group id corresponding to its index

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderingGroupId | number |  The rendering group id corresponding to its index
optional | opaqueSortCompareFn | (a: [SubMesh](/classes/2.5/SubMesh), b: [SubMesh](/classes/2.5/SubMesh)) =&gt; number |  The opaque queue comparison function use to sort.
optional | alphaTestSortCompareFn | (a: [SubMesh](/classes/2.5/SubMesh), b: [SubMesh](/classes/2.5/SubMesh)) =&gt; number |  The alpha test queue comparison function use to sort.
### setRenderingAutoClearDepthStencil(renderingGroupId, autoClearDepthStencil) &rarr; void

Specifies whether or not the stencil and depth buffer are cleared between two rendering groups.

         * @param renderingGroupId The rendering group id corresponding to its index

#### Parameters
 | Name | Type | Description
---|---|---|---
 | renderingGroupId | number |  The rendering group id corresponding to its index
 | autoClearDepthStencil | boolean |  Automatically clears depth and stencil between groups if true.
