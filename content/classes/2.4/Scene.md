---
ID_PAGE: 25150
PG_TITLE: Scene
PG_VERSION: 2.1
TAGS:
    - Scene
---
## Description

class [Scene](/classes/2.4/Scene)

Represents a scene to be rendered by the engine.

@see http://doc.babylonjs.com/page.php?p=21911

## Constructor

## new [Scene](/classes/2.4/Scene)(engine)

@constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](/classes/2.4/Engine) |    [Engine](/classes/2.4/Engine) The babylon engine

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

### autoClear : boolean

default : true

True to clear the color buffer at each render, false either

### clearColor : any

default : [Color3](/classes/2.4/Color3)(0.2, 0.2, 0.3)

The color of the scene when cleared

### ambientColor : [Color3](/classes/2.4/Color3)

default : [Color3](/classes/2.4/Color3)(0, 0, 0)

The scene ambiant color

### forceWireframe : boolean

default : false

Forces the wireframe display of meshes

### forcePointsCloud : boolean



### forceShowBoundingBoxes : boolean



### clipPlane : [Plane](/classes/2.4/Plane)



### animationsEnabled : boolean



### constantlyUpdateMeshUnderPointer : boolean



### onDisposeObservable : [Observable](/classes/2.4/Observable)&lt;[Scene](/classes/2.4/Scene)&gt;

An event triggered when the scene is disposed.

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### onDispose : () =&gt; void

A function to be executed when this scene is disposed.

@type {Function}

### onBeforeRenderObservable : [Observable](/classes/2.4/Observable)&lt;[Scene](/classes/2.4/Scene)&gt;

An event triggered before rendering the scene

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### beforeRender : () =&gt; void

A function to be executed before rendering this scene

@type {Function}

### onAfterRenderObservable : [Observable](/classes/2.4/Observable)&lt;[Scene](/classes/2.4/Scene)&gt;

An event triggered after rendering the scene

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### afterRender : () =&gt; void

A function to be executed after rendering this scene

@type {Function}

### onReadyObservable : [Observable](/classes/2.4/Observable)&lt;[Scene](/classes/2.4/Scene)&gt;

An event triggered when the scene is ready

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### onBeforeCameraRenderObservable : [Observable](/classes/2.4/Observable)&lt;[Camera](/classes/2.4/Camera)&gt;

An event triggered before rendering a camera

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### beforeCameraRender : () =&gt; void

Function triggered before the camera is rendered, with the concerned camera passed in argument

### onAfterCameraRenderObservable : [Observable](/classes/2.4/Observable)&lt;[Camera](/classes/2.4/Camera)&gt;

An event triggered after rendering a camera

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### afterCameraRender : () =&gt; void

Function triggered after the camera is rendered, with the concerned camera passed in argument

### onNewCameraAddedObservable : [Observable](/classes/2.4/Observable)&lt;[Camera](/classes/2.4/Camera)&gt;

An event triggered when a camera is created

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### onCameraRemovedObservable : [Observable](/classes/2.4/Observable)&lt;[Camera](/classes/2.4/Camera)&gt;

An event triggered when a camera is removed

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### onNewLightAddedObservable : [Observable](/classes/2.4/Observable)&lt;[Light](/classes/2.4/Light)&gt;

An event triggered when a light is created

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### onLightRemovedObservable : [Observable](/classes/2.4/Observable)&lt;[Light](/classes/2.4/Light)&gt;

An event triggered when a light is removed

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### onNewGeometryAddedObservable : [Observable](/classes/2.4/Observable)&lt;[Geometry](/classes/2.4/Geometry)&gt;

An event triggered when a geometry is created

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### onGeometryRemovedObservable : [Observable](/classes/2.4/Observable)&lt;[Geometry](/classes/2.4/Geometry)&gt;

An event triggered when a geometry is removed

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### onNewMeshAddedObservable : [Observable](/classes/2.4/Observable)&lt;[AbstractMesh](/classes/2.4/AbstractMesh)&gt;

An event triggered when a mesh is created

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### onMeshRemovedObservable : [Observable](/classes/2.4/Observable)&lt;[AbstractMesh](/classes/2.4/AbstractMesh)&gt;

An event triggered when a mesh is removed

@type {BABYLON.[Observable](/classes/2.4/Observable)}

### animations : [Animation](/classes/2.4/Animation)[]



### pointerDownPredicate : ([Mesh](/classes/2.4/Mesh): [AbstractMesh](/classes/2.4/AbstractMesh)) =&gt; boolean



### pointerUpPredicate : ([Mesh](/classes/2.4/Mesh): [AbstractMesh](/classes/2.4/AbstractMesh)) =&gt; boolean



### pointerMovePredicate : ([Mesh](/classes/2.4/Mesh): [AbstractMesh](/classes/2.4/AbstractMesh)) =&gt; boolean



### onPointerMove : (evt: PointerEvent, pickInfo: [PickingInfo](/classes/2.4/PickingInfo)) =&gt; void

@deprecated Use onPointerObservable instead

### onPointerDown : (evt: PointerEvent, pickInfo: [PickingInfo](/classes/2.4/PickingInfo)) =&gt; void

@deprecated Use onPointerObservable instead

### onPointerUp : (evt: PointerEvent, pickInfo: [PickingInfo](/classes/2.4/PickingInfo)) =&gt; void

@deprecated Use onPointerObservable instead

### onPointerPick : (evt: PointerEvent, pickInfo: [PickingInfo](/classes/2.4/PickingInfo)) =&gt; void

@deprecated Use onPointerObservable instead

### onPrePointerObservable : [Observable](/classes/2.4/Observable)&lt;[PointerInfoPre](/classes/2.4/PointerInfoPre)&gt;

This observable event is triggered when any mouse event registered during [Scene](/classes/2.4/Scene).attach() is called BEFORE the 3D engine to process anything (mesh/sprite picking for instance).

You have the possibility to skip the 3D [Engine](/classes/2.4/Engine) process and the call to onPointerObservable by setting PointerInfoBase.skipOnPointerObservable to true

### onPointerObservable : [Observable](/classes/2.4/Observable)&lt;[PointerInfo](/classes/2.4/PointerInfo)&gt;

[Observable](/classes/2.4/Observable) event triggered each time an input event is received from the rendering canvas

### unTranslatedPointer : [Vector2](/classes/2.4/Vector2)



### cameraToUseForPointers : [Camera](/classes/2.4/Camera)

The camera used for pointers

### fogEnabled : boolean

is fog enabled on this scene.

@type {boolean}

### fogMode : number

One of the following values : [Scene](/classes/2.4/Scene).FOGMODE_NONE, [Scene](/classes/2.4/Scene).FOGMODE_EXP, [Scene](/classes/2.4/Scene).FOGMODE_EXP2 , [Scene](/classes/2.4/Scene).FOGMODE_LINEAR

### fogColor : [Color3](/classes/2.4/Color3)

default : [Color3](/classes/2.4/Color3)(0.2, 0.2, 0.3)

The fog color

### fogDensity : number

default : 0.1

The fog density

### fogStart : number

default : 0

Used with the [Scene](/classes/2.4/Scene).FOGMODE_LINEAR fogMode

Where the fog starts

### fogEnd : number

default : 1000.0

Used with the [Scene](/classes/2.4/Scene).FOGMODE_LINEAR fogMode

Where the fog ends

### shadowsEnabled : boolean

is shadow enabled on this scene.

@type {boolean}

### lightsEnabled : boolean

is light enabled on this scene.

@type {boolean}

### lights : [Light](/classes/2.4/Light)[]

All of the lights added to this scene.

@see BABYLON.[Light](/classes/2.4/Light)

@type {BABYLON.[Light](/classes/2.4/Light)[]}

### cameras : [Camera](/classes/2.4/Camera)[]

All of the cameras added to this scene.

@see BABYLON.[Camera](/classes/2.4/Camera)

@type {BABYLON.[Camera](/classes/2.4/Camera)[]}

### activeCameras : [Camera](/classes/2.4/Camera)[]

The array holding the list of active [Camera](/classes/2.4/Camera) instances

### activeCamera : [Camera](/classes/2.4/Camera)

The active camera for this scene

### meshes : [AbstractMesh](/classes/2.4/AbstractMesh)[]

All of the (abstract) meshes added to this scene.

@see BABYLON.[AbstractMesh](/classes/2.4/AbstractMesh)

@type {BABYLON.[AbstractMesh](/classes/2.4/AbstractMesh)[]}

### materials : [Material](/classes/2.4/Material)[]

The array holding all materials of this scene

### multiMaterials : [MultiMaterial](/classes/2.4/MultiMaterial)[]

The array holding all multimaterials of this scene

### defaultMaterial : [StandardMaterial](/classes/2.4/StandardMaterial)

The default material used on meshes when no material is affected

### texturesEnabled : boolean

True if texture should be enabled, false otherwise

### textures : [BaseTexture](/classes/2.4/BaseTexture)[]

The array holding all textures used in the scene

### particlesEnabled : boolean

True if Particles should be enabled, false otherwise

### particleSystems : [ParticleSystem](/classes/2.4/ParticleSystem)[]

The array holding all particle systems of this scene

### spritesEnabled : boolean



### spriteManagers : [SpriteManager](/classes/2.4/SpriteManager)[]

The array holding all sprite managers of this scene

### layers : [Layer](/classes/2.4/Layer)[]

The array holding all layers of this scene

### skeletonsEnabled : boolean



### skeletons : [Skeleton](/classes/2.4/Skeleton)[]

The array holding all skeletons of this scene

### lensFlaresEnabled : boolean



### lensFlareSystems : [LensFlareSystem](/classes/2.4/LensFlareSystem)[]

The array holding all lensflare systems of this scene

### collisionsEnabled : boolean

True if collisions should be enabled, false otherwise

### collisionCoordinator : ICollisionCoordinator



### gravity : [Vector3](/classes/2.4/Vector3)

Defines the gravity applied to this scene

### postProcessesEnabled : boolean

True if postProcesses should be enabled, false otherwise

### postProcessManager : [PostProcessManager](/classes/2.4/PostProcessManager)

The post process manager of this scene

### postProcessRenderPipelineManager : [PostProcessRenderPipelineManager](/classes/2.4/PostProcessRenderPipelineManager)

The post process render pipeline manager of this scene

### renderTargetsEnabled : boolean

True if custom render target should be enabled, false otherwise

### dumpNextRenderTargets : boolean



### customRenderTargets : [RenderTargetTexture](/classes/2.4/RenderTargetTexture)[]

The array holding all custom render targets of this scene

### useDelayedTextureLoading : boolean

True if the texture loading should be delayed, false otherwise

### importedMeshesFiles : String[]

The array holding all imported mesh files

### probesEnabled : boolean



### reflectionProbes : [ReflectionProbe](/classes/2.4/ReflectionProbe)[]



### database : any

The database this scene is saved into

### actionManager : [ActionManager](/classes/2.4/ActionManager)

This scene's action manager

@type {BABYLON.[ActionManager](/classes/2.4/ActionManager)}

### proceduralTexturesEnabled : boolean



### mainSoundTrack : [SoundTrack](/classes/2.4/SoundTrack)



### soundTracks : [SoundTrack](/classes/2.4/SoundTrack)[]



### simplificationQueue : [SimplificationQueue](/classes/2.4/SimplificationQueue)



### debugLayer : [DebugLayer](/classes/2.4/DebugLayer)



### workerCollisions : boolean



### SelectionOctree : [Octree](/classes/2.4/Octree)&lt;[AbstractMesh](/classes/2.4/AbstractMesh)&gt;



### meshUnderPointer : [AbstractMesh](/classes/2.4/AbstractMesh)

The mesh that is currently under the pointer.

@return {BABYLON.[AbstractMesh](/classes/2.4/AbstractMesh)} mesh under the pointer/mouse cursor or null if none.

### pointerX : number

Current on-screen X position of the pointer

@return {number} X position of the pointer

### pointerY : number

Current on-screen Y position of the pointer

@return {number} Y position of the pointer

### Animatables : [Animatable](/classes/2.4/Animatable)[]



### audioEnabled : boolean



### headphone : boolean



## Methods

### getCachedMaterialundefined &rarr; [Material](/classes/2.4/Material)


### getBoundingBoxRendererundefined &rarr; [BoundingBoxRenderer](/classes/2.4/BoundingBoxRenderer)


### getOutlineRendererundefined &rarr; [OutlineRenderer](/classes/2.4/OutlineRenderer)


### getEngineundefined &rarr; [Engine](/classes/2.4/Engine)


### getTotalVerticesundefined &rarr; number


### getActiveIndicesundefined &rarr; number


### getActiveParticlesundefined &rarr; number


### getActiveBonesundefined &rarr; number


### getLastFrameDurationundefined &rarr; number


### getEvaluateActiveMeshesDurationundefined &rarr; number


### getActiveMeshesundefined &rarr; [SmartArray](/classes/2.4/SmartArray)&lt;[Mesh](/classes/2.4/Mesh)&gt;


### getRenderTargetsDurationundefined &rarr; number


### getRenderDurationundefined &rarr; number


### getParticlesDurationundefined &rarr; number


### getSpritesDurationundefined &rarr; number


### getAnimationRatioundefined &rarr; number


### getRenderIdundefined &rarr; number


### incrementRenderIdundefined &rarr; void


### attachControlundefined &rarr; void

Attach events to the canvas (To handle actionManagers triggers and raise onPointerMove, onPointerDown and onPointerUp

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### detachControlundefined &rarr; void


### isReadyundefined &rarr; boolean


### resetCachedMaterialundefined &rarr; void


### registerBeforeRenderundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### unregisterBeforeRenderundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### registerAfterRenderundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### unregisterAfterRenderundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getWaitingItemsCountundefined &rarr; number


### executeWhenReadyundefined &rarr; void

Registers a function to be executed when the scene is ready.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### beginAnimationundefined &rarr; [Animatable](/classes/2.4/Animatable)

Will start the animation sequence of a given target

@return {BABYLON.[Animatable](/classes/2.4/Animatable)} the animatable object created for this animation

@see BABYLON.[Animatable](/classes/2.4/Animatable)

@see http://doc.babylonjs.com/page.php?p=22081

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### beginDirectAnimationundefined &rarr; [Animatable](/classes/2.4/Animatable)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getAnimatableByTargetundefined &rarr; [Animatable](/classes/2.4/Animatable)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### stopAnimationundefined &rarr; void

Will stop the animation of the given target

@see beginAnimation

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getViewMatrixundefined &rarr; [Matrix](/classes/2.4/Matrix)


### getProjectionMatrixundefined &rarr; [Matrix](/classes/2.4/Matrix)


### getTransformMatrixundefined &rarr; [Matrix](/classes/2.4/Matrix)


### setTransformMatrixundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### addMeshundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### removeMeshundefined &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### removeSkeletonundefined &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### removeLightundefined &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### removeCameraundefined &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### addLightundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### addCameraundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### swithActiveCameraundefined &rarr; void

Switch active camera

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setActiveCameraByIDundefined &rarr; [Camera](/classes/2.4/Camera)

sets the active camera of the scene using its ID

@return {BABYLON.[Camera](/classes/2.4/Camera)|null} the new active camera or null if none found.

@see activeCamera

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setActiveCameraByNameundefined &rarr; [Camera](/classes/2.4/Camera)

sets the active camera of the scene using its name

@return {BABYLON.[Camera](/classes/2.4/Camera)|null} the new active camera or null if none found.

@see activeCamera

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getMaterialByIDundefined &rarr; [Material](/classes/2.4/Material)

get a material using its id

@return {BABYLON.[Material](/classes/2.4/Material)|null} the material or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getMaterialByNameundefined &rarr; [Material](/classes/2.4/Material)

get a material using its name

@return {BABYLON.[Material](/classes/2.4/Material)|null} the material or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getLensFlareSystemByNameundefined &rarr; [LensFlareSystem](/classes/2.4/LensFlareSystem)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getLensFlareSystemByIDundefined &rarr; [LensFlareSystem](/classes/2.4/LensFlareSystem)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getCameraByIDundefined &rarr; [Camera](/classes/2.4/Camera)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getCameraByUniqueIDundefined &rarr; [Camera](/classes/2.4/Camera)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getCameraByNameundefined &rarr; [Camera](/classes/2.4/Camera)

get a camera using its name

@return {BABYLON.[Camera](/classes/2.4/Camera)|null} the camera or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getBoneByIDundefined &rarr; [Bone](/classes/2.4/Bone)

get a bone using its id

@return {BABYLON.[Bone](/classes/2.4/Bone)|null} the bone or null if not found

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getBoneByNameundefined &rarr; [Bone](/classes/2.4/Bone)

get a bone using its id

@return {BABYLON.[Bone](/classes/2.4/Bone)|null} the bone or null if not found

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getLightByNameundefined &rarr; [Light](/classes/2.4/Light)

get a light node using its name

@return {BABYLON.[Light](/classes/2.4/Light)|null} the light or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getLightByIDundefined &rarr; [Light](/classes/2.4/Light)

get a light node using its ID

@return {BABYLON.[Light](/classes/2.4/Light)|null} the light or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getLightByUniqueIDundefined &rarr; [Light](/classes/2.4/Light)

get a light node using its scene-generated unique ID

@return {BABYLON.[Light](/classes/2.4/Light)|null} the light or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getParticleSystemByIDundefined &rarr; [ParticleSystem](/classes/2.4/ParticleSystem)

get a particle system by id

@return {BABYLON.[ParticleSystem](/classes/2.4/ParticleSystem)|null} the corresponding system or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getGeometryByIDundefined &rarr; [Geometry](/classes/2.4/Geometry)

get a geometry using its ID

@return {BABYLON.[Geometry](/classes/2.4/Geometry)|null} the geometry or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### pushGeometryundefined &rarr; boolean

add a new geometry to this scene.

@return {boolean} was the geometry added or not

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### removeGeometryundefined &rarr; boolean

Removes an existing geometry

@return {boolean} was the geometry removed or not

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getGeometriesundefined &rarr; [Geometry](/classes/2.4/Geometry)[]


### getMeshByIDundefined &rarr; [AbstractMesh](/classes/2.4/AbstractMesh)

Get the first added mesh found of a given ID

@return {BABYLON.[AbstractMesh](/classes/2.4/AbstractMesh)|null} the mesh found or null if not found at all.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getMeshesByIDundefined &rarr; Array&lt;[AbstractMesh](/classes/2.4/AbstractMesh)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getMeshByUniqueIDundefined &rarr; [AbstractMesh](/classes/2.4/AbstractMesh)

Get a mesh with its auto-generated unique id

@return {BABYLON.[AbstractMesh](/classes/2.4/AbstractMesh)|null} the mesh found or null if not found at all.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getLastMeshByIDundefined &rarr; [AbstractMesh](/classes/2.4/AbstractMesh)

Get a the last added mesh found of a given ID

@return {BABYLON.[AbstractMesh](/classes/2.4/AbstractMesh)|null} the mesh found or null if not found at all.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getLastEntryByIDundefined &rarr; [Node](/classes/2.4/Node)

Get a the last added node ([Mesh](/classes/2.4/Mesh), [Camera](/classes/2.4/Camera), [Light](/classes/2.4/Light)) found of a given ID

@return {BABYLON.[Node](/classes/2.4/Node)|null} the node found or null if not found at all.

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getNodeByIDundefined &rarr; [Node](/classes/2.4/Node)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getNodeByNameundefined &rarr; [Node](/classes/2.4/Node)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getMeshByNameundefined &rarr; [AbstractMesh](/classes/2.4/AbstractMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getSoundByNameundefined &rarr; [Sound](/classes/2.4/Sound)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getLastSkeletonByIDundefined &rarr; [Skeleton](/classes/2.4/Skeleton)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getSkeletonByIdundefined &rarr; [Skeleton](/classes/2.4/Skeleton)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getSkeletonByNameundefined &rarr; [Skeleton](/classes/2.4/Skeleton)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### isActiveMeshundefined &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### updateTransformMatrixundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### renderundefined &rarr; void


### enableDepthRendererundefined &rarr; [DepthRenderer](/classes/2.4/DepthRenderer)


### disableDepthRendererundefined &rarr; void


### freezeMaterialsundefined &rarr; void


### unfreezeMaterialsundefined &rarr; void


### disposeundefined &rarr; void


### disposeSoundsundefined &rarr; void


### getWorldExtendsundefined &rarr; { undefined: [Vector3](/classes/2.4/Vector3),  undefined: [Vector3](/classes/2.4/Vector3) }


### createOrUpdateSelectionOctreeundefined &rarr; [Octree](/classes/2.4/Octree)&lt;[AbstractMesh](/classes/2.4/AbstractMesh)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### createPickingRayundefined &rarr; [Ray](/classes/2.4/Ray)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### createPickingRayInCameraSpaceundefined &rarr; [Ray](/classes/2.4/Ray)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### pickundefined &rarr; [PickingInfo](/classes/2.4/PickingInfo)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### pickSpriteundefined &rarr; [PickingInfo](/classes/2.4/PickingInfo)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### pickWithRayundefined &rarr; [PickingInfo](/classes/2.4/PickingInfo)



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### setPointerOverMeshundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getPointerOverMeshundefined &rarr; [AbstractMesh](/classes/2.4/AbstractMesh)


### setPointerOverSpriteundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getPointerOverSpriteundefined &rarr; [Sprite](/classes/2.4/Sprite)


### getPhysicsEngineundefined &rarr; [PhysicsEngine](/classes/2.4/PhysicsEngine)


### enablePhysicsundefined &rarr; boolean

Enables physics to the current scene

@return {boolean} was the physics engine initialized

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### disablePhysicsEngineundefined &rarr; void


### isPhysicsEnabledundefined &rarr; boolean


### setGravityundefined &rarr; void

* Sets the gravity of the physics engine (and NOT of the scene)

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### createCompoundImpostorundefined &rarr; any

Legacy support, using the new API

@Deprecated

#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### deleteCompoundImpostorundefined &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### createDefaultCameraOrLightundefined &rarr; void


### getMeshesByTagsundefined &rarr; [Mesh](/classes/2.4/Mesh)[]



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getCamerasByTagsundefined &rarr; [Camera](/classes/2.4/Camera)[]



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getLightsByTagsundefined &rarr; [Light](/classes/2.4/Light)[]



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
### getMaterialByTagsundefined &rarr; [Material](/classes/2.4/Material)[]



#### Parameters
 | Name | Type | Description
---|---|---|---
undefined
