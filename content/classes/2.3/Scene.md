---
ID_PAGE: 25150
PG_TITLE: Scene
PG_VERSION: 2.1
TAGS:
    - Scene
---
## Description

class [Scene](/classes/2.3/Scene)

Represents a scene to be rendered by the engine.

@see http://doc.babylonjs.com/page.php?p=21911

## Constructor

##  new [Scene](/classes/2.3/Scene)(engine)

@constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](/classes/2.3/Engine) |   [Engine](/classes/2.3/Engine) The babylon engine

## Members

### static  MinDeltaTime : number



### static  MaxDeltaTime : number



### static  FOGMODE_NONE : number



### static  FOGMODE_EXP : number



### static  FOGMODE_EXP2 : number



### static  FOGMODE_LINEAR : number



### autoClear : boolean



### clearColor : any



### ambientColor : [Color3](/classes/2.3/Color3)



### beforeRender : () =&gt; void

A function to be executed before rendering this scene

@type {Function}

### afterRender : () =&gt; void

A function to be executed after rendering this scene

@type {Function}

### onDispose : () =&gt; void

A function to be executed when this scene is disposed.

@type {Function}

### beforeCameraRender : (camera: [Camera](/classes/2.3/Camera)) =&gt; void



### afterCameraRender : (camera: [Camera](/classes/2.3/Camera)) =&gt; void



### forceWireframe : boolean



### forcePointsCloud : boolean



### forceShowBoundingBoxes : boolean



### clipPlane : [Plane](/classes/2.3/Plane)



### animationsEnabled : boolean



### constantlyUpdateMeshUnderPointer : boolean



### onPointerMove : (evt: PointerEvent, pickInfo: [PickingInfo](/classes/2.3/PickingInfo)) =&gt; void



### onPointerDown : (evt: PointerEvent, pickInfo: [PickingInfo](/classes/2.3/PickingInfo)) =&gt; void



### onPointerUp : (evt: PointerEvent, pickInfo: [PickingInfo](/classes/2.3/PickingInfo)) =&gt; void



### onPointerPick : (evt: PointerEvent, pickInfo: [PickingInfo](/classes/2.3/PickingInfo)) =&gt; void



### cameraToUseForPointers : [Camera](/classes/2.3/Camera)



### fogEnabled : boolean

is fog enabled on this scene.

@type {boolean}

### fogMode : number



### fogColor : [Color3](/classes/2.3/Color3)



### fogDensity : number



### fogStart : number



### fogEnd : number



### shadowsEnabled : boolean

is shadow enabled on this scene.

@type {boolean}

### lightsEnabled : boolean

is light enabled on this scene.

@type {boolean}

### lights : [Light](/classes/2.3/Light)[]

All of the lights added to this scene.

@see BABYLON.[Light](/classes/2.3/Light)

@type {BABYLON.[Light](/classes/2.3/Light)[]}

### onNewLightAdded : (newLight: [Light](/classes/2.3/Light), positionInArray: number, scene: [Scene](/classes/2.3/Scene)) =&gt; void



### onLightRemoved : (removedLight: [Light](/classes/2.3/Light)) =&gt; void



### cameras : [Camera](/classes/2.3/Camera)[]

All of the cameras added to this scene.

@see BABYLON.[Camera](/classes/2.3/Camera)

@type {BABYLON.[Camera](/classes/2.3/Camera)[]}

### onNewCameraAdded : (newCamera: [Camera](/classes/2.3/Camera), positionInArray: number, scene: [Scene](/classes/2.3/Scene)) =&gt; void



### onCameraRemoved : (removedCamera: [Camera](/classes/2.3/Camera)) =&gt; void



### activeCameras : [Camera](/classes/2.3/Camera)[]



### activeCamera : [Camera](/classes/2.3/Camera)



### meshes : [AbstractMesh](/classes/2.3/AbstractMesh)[]

All of the (abstract) meshes added to this scene.

@see BABYLON.[AbstractMesh](/classes/2.3/AbstractMesh)

@type {BABYLON.[AbstractMesh](/classes/2.3/AbstractMesh)[]}

### onNewMeshAdded : (newMesh: [AbstractMesh](/classes/2.3/AbstractMesh), positionInArray: number, scene: [Scene](/classes/2.3/Scene)) =&gt; void



### onMeshRemoved : (removedMesh: [AbstractMesh](/classes/2.3/AbstractMesh)) =&gt; void



### onGeometryAdded : (newGeometry: [Geometry](/classes/2.3/Geometry)) =&gt; void



### onGeometryRemoved : (removedGeometry: [Geometry](/classes/2.3/Geometry)) =&gt; void



### materials : [Material](/classes/2.3/Material)[]



### multiMaterials : [MultiMaterial](/classes/2.3/MultiMaterial)[]



### defaultMaterial : [StandardMaterial](/classes/2.3/StandardMaterial)



### texturesEnabled : boolean



### textures : [BaseTexture](/classes/2.3/BaseTexture)[]



### particlesEnabled : boolean



### particleSystems : [ParticleSystem](/classes/2.3/ParticleSystem)[]



### spritesEnabled : boolean



### spriteManagers : [SpriteManager](/classes/2.3/SpriteManager)[]



### layers : [Layer](/classes/2.3/Layer)[]



### skeletonsEnabled : boolean



### skeletons : [Skeleton](/classes/2.3/Skeleton)[]



### lensFlaresEnabled : boolean



### lensFlareSystems : [LensFlareSystem](/classes/2.3/LensFlareSystem)[]



### collisionsEnabled : boolean



### collisionCoordinator : ICollisionCoordinator



### gravity : [Vector3](/classes/2.3/Vector3)



### postProcessesEnabled : boolean



### postProcessManager : [PostProcessManager](/classes/2.3/PostProcessManager)



### postProcessRenderPipelineManager : [PostProcessRenderPipelineManager](/classes/2.3/PostProcessRenderPipelineManager)



### renderTargetsEnabled : boolean



### dumpNextRenderTargets : boolean



### customRenderTargets : [RenderTargetTexture](/classes/2.3/RenderTargetTexture)[]



### useDelayedTextureLoading : boolean



### importedMeshesFiles : String[]



### probesEnabled : boolean



### reflectionProbes : [ReflectionProbe](/classes/2.3/ReflectionProbe)[]



### database : any



### actionManager : [ActionManager](/classes/2.3/ActionManager)

This scene's action manager

@type {BABYLON.[ActionManager](/classes/2.3/ActionManager)}

### proceduralTexturesEnabled : boolean



### mainSoundTrack : [SoundTrack](/classes/2.3/SoundTrack)



### soundTracks : [SoundTrack](/classes/2.3/SoundTrack)[]



### simplificationQueue : [SimplificationQueue](/classes/2.3/SimplificationQueue)



### debugLayer : [DebugLayer](/classes/2.3/DebugLayer)



### workerCollisions : boolean



### SelectionOctree : [Octree](/classes/2.3/Octree)&lt;[AbstractMesh](/classes/2.3/AbstractMesh)&gt;



### meshUnderPointer : [AbstractMesh](/classes/2.3/AbstractMesh)

The mesh that is currently under the pointer.

@return {BABYLON.[AbstractMesh](/classes/2.3/AbstractMesh)} mesh under the pointer/mouse cursor or null if none.

### pointerX : number

Current on-screen X position of the pointer

@return {number} X position of the pointer

### pointerY : number

Current on-screen Y position of the pointer

@return {number} Y position of the pointer

### Animatables : [Animatable](/classes/2.3/Animatable)[]



### audioEnabled : boolean



### headphone : boolean



## Methods

### getCachedMaterial() &rarr; [Material](/classes/2.3/Material)


### getBoundingBoxRenderer() &rarr; [BoundingBoxRenderer](/classes/2.3/BoundingBoxRenderer)


### getOutlineRenderer() &rarr; [OutlineRenderer](/classes/2.3/OutlineRenderer)


### getEngine() &rarr; [Engine](/classes/2.3/Engine)


### getTotalVertices() &rarr; number


### getActiveIndices() &rarr; number


### getActiveParticles() &rarr; number


### getActiveBones() &rarr; number


### getLastFrameDuration() &rarr; number


### getEvaluateActiveMeshesDuration() &rarr; number


### getActiveMeshes() &rarr; [SmartArray](/classes/2.3/SmartArray)&lt;[Mesh](/classes/2.3/Mesh)&gt;


### getRenderTargetsDuration() &rarr; number


### getRenderDuration() &rarr; number


### getParticlesDuration() &rarr; number


### getSpritesDuration() &rarr; number


### getAnimationRatio() &rarr; number


### getRenderId() &rarr; number


### incrementRenderId() &rarr; void


### attachControl() &rarr; void


### detachControl() &rarr; void


### isReady() &rarr; boolean


### resetCachedMaterial() &rarr; void


### registerBeforeRender(func) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void |   The given function to call

### unregisterBeforeRender(func) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void |   The given function to call

### registerAfterRender(func) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void |   The given function to call

### unregisterAfterRender(func) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void |   The given function to call

### getWaitingItemsCount() &rarr; number


### executeWhenReady(func) &rarr; void

Registers a function to be executed when the scene is ready.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void |   The given function to call

### beginAnimation(target, from, to, loop, speedRatio, onAnimationEnd, animatable) &rarr; [Animatable](/classes/2.3/Animatable)

Will start the animation sequence of a given target

@return {BABYLON.[Animatable](/classes/2.3/Animatable)} the animatable object created for this animation

@see BABYLON.[Animatable](/classes/2.3/Animatable)

@see http://doc.babylonjs.com/page.php?p=22081

#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | any |  - the target  - the target - the target
 | from | number |   The fps starting frame
 | to | number |   The fps ending frame
optional | loop | boolean |   If true, the animation will loop
optional | speedRatio | number |   default : 1.The speed ratio of this animation
optional | onAnimationEnd | () =&gt; void |   The function triggered on the end of the animation
### beginDirectAnimation(target, animations, from, to, loop, speedRatio, onAnimationEnd) &rarr; [Animatable](/classes/2.3/Animatable)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | any |   - the target - the target
 | animations | [Animation](/classes/2.3/Animation)[] |   An array of animations
 | from | number |   The fps starting frame
 | to | number |   The fps ending frame
optional | loop | boolean |   If true, the animation will loop
optional | speedRatio | number |   default : 1.The speed ratio of this animation
### getAnimatableByTarget(target) &rarr; [Animatable](/classes/2.3/Animatable)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | any |   - the target - the target

### stopAnimation(target) &rarr; void

Will stop the animation of the given target

@see beginAnimation

#### Parameters
 | Name | Type | Description
---|---|---|---
 | target | any |  - the target  - the target - the target

### getViewMatrix() &rarr; [Matrix](/classes/2.3/Matrix)


### getProjectionMatrix() &rarr; [Matrix](/classes/2.3/Matrix)


### getTransformMatrix() &rarr; [Matrix](/classes/2.3/Matrix)


### setTransformMatrix(view, projection) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | view | [Matrix](/classes/2.3/Matrix) |   The given view [Matrix](/classes/2.3/Matrix)
 | projection | [Matrix](/classes/2.3/Matrix) |   The given projection [Matrix](/classes/2.3/Matrix)
### addMesh(newMesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | newMesh | [AbstractMesh](/classes/2.3/AbstractMesh) |   

### removeMesh(toRemove) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | toRemove | [AbstractMesh](/classes/2.3/AbstractMesh) |   

### removeSkeleton(toRemove) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | toRemove | [Skeleton](/classes/2.3/Skeleton) |   

### removeLight(toRemove) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | toRemove | [Light](/classes/2.3/Light) |   

### removeCamera(toRemove) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | toRemove | [Camera](/classes/2.3/Camera) |   

### addLight(newLight) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | newLight | [Light](/classes/2.3/Light) |   

### addCamera(newCamera) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | newCamera | [Camera](/classes/2.3/Camera) |   

### swithActiveCamera(newCamera, attachControl) &rarr; void

Switch active camera

#### Parameters
 | Name | Type | Description
---|---|---|---
 | newCamera | [Camera](/classes/2.3/Camera) |   
optional | attachControl | boolean | 
### setActiveCameraByID(id) &rarr; [Camera](/classes/2.3/Camera)

sets the active camera of the scene using its ID

@return {BABYLON.[Camera](/classes/2.3/Camera)|null} the new active camera or null if none found.

@see activeCamera

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |   The given id

### setActiveCameraByName(name) &rarr; [Camera](/classes/2.3/Camera)

sets the active camera of the scene using its name

@return {BABYLON.[Camera](/classes/2.3/Camera)|null} the new active camera or null if none found.

@see activeCamera

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The given name

### getMaterialByID(id) &rarr; [Material](/classes/2.3/Material)

get a material using its id

@return {BABYLON.[Material](/classes/2.3/Material)|null} the material or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |   The given id

### getMaterialByName(name) &rarr; [Material](/classes/2.3/Material)

get a material using its name

@return {BABYLON.[Material](/classes/2.3/Material)|null} the material or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The given name

### getLensFlareSystemByName(name) &rarr; [LensFlareSystem](/classes/2.3/LensFlareSystem)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The given name

### getCameraByID(id) &rarr; [Camera](/classes/2.3/Camera)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |   The given id

### getCameraByUniqueID(uniqueId) &rarr; [Camera](/classes/2.3/Camera)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniqueId | number |   

### getCameraByName(name) &rarr; [Camera](/classes/2.3/Camera)

get a camera using its name

@return {BABYLON.[Camera](/classes/2.3/Camera)|null} the camera or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The given name

### getBoneByID(id) &rarr; [Bone](/classes/2.3/Bone)

get a bone using its id

@return {BABYLON.[Bone](/classes/2.3/Bone)|null} the bone or null if not found

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |   The given id

### getBoneByName(name) &rarr; [Bone](/classes/2.3/Bone)

get a bone using its id

@return {BABYLON.[Bone](/classes/2.3/Bone)|null} the bone or null if not found

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The given name

### getLightByName(name) &rarr; [Light](/classes/2.3/Light)

get a light node using its name

@return {BABYLON.[Light](/classes/2.3/Light)|null} the light or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The given name

### getLightByID(id) &rarr; [Light](/classes/2.3/Light)

get a light node using its ID

@return {BABYLON.[Light](/classes/2.3/Light)|null} the light or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |   The given id

### getLightByUniqueID(uniqueId) &rarr; [Light](/classes/2.3/Light)

get a light node using its scene-generated unique ID

@return {BABYLON.[Light](/classes/2.3/Light)|null} the light or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniqueId | number |   

### getParticleSystemByID(id) &rarr; [ParticleSystem](/classes/2.3/ParticleSystem)

get a particle system by id

@return {BABYLON.[ParticleSystem](/classes/2.3/ParticleSystem)|null} the corresponding system or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |  {number} the particle system id  The given id

### getGeometryByID(id) &rarr; [Geometry](/classes/2.3/Geometry)

get a geometry using its ID

@return {BABYLON.[Geometry](/classes/2.3/Geometry)|null} the geometry or null if none found.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |   The given id

### pushGeometry(geometry, force) &rarr; boolean

add a new geometry to this scene.

@return {boolean} was the geometry added or not

#### Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/2.3/Geometry) |   
optional | force | boolean |   True to force the transform matrix update even if the projection is synchronized, false otherwise
### removeGeometry(geometry) &rarr; boolean

Removes an existing geometry

@return {boolean} was the geometry removed or not

#### Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/2.3/Geometry) |   

### getGeometries() &rarr; [Geometry](/classes/2.3/Geometry)[]


### getMeshByID(id) &rarr; [AbstractMesh](/classes/2.3/AbstractMesh)

Get the first added mesh found of a given ID

@return {BABYLON.[AbstractMesh](/classes/2.3/AbstractMesh)|null} the mesh found or null if not found at all.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |   The given id

### getMeshByUniqueID(uniqueId) &rarr; [AbstractMesh](/classes/2.3/AbstractMesh)

Get a mesh with its auto-generated unique id

@return {BABYLON.[AbstractMesh](/classes/2.3/AbstractMesh)|null} the mesh found or null if not found at all.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | uniqueId | number |   

### getLastMeshByID(id) &rarr; [AbstractMesh](/classes/2.3/AbstractMesh)

Get a the last added mesh found of a given ID

@return {BABYLON.[AbstractMesh](/classes/2.3/AbstractMesh)|null} the mesh found or null if not found at all.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |   The given id

### getLastEntryByID(id) &rarr; [Node](/classes/2.3/Node)

Get a the last added node ([Mesh](/classes/2.3/Mesh), [Camera](/classes/2.3/Camera), [Light](/classes/2.3/Light)) found of a given ID

@return {BABYLON.[Node](/classes/2.3/Node)|null} the node found or null if not found at all.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |   The given id

### getNodeByID(id) &rarr; [Node](/classes/2.3/Node)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |   The given id

### getNodeByName(name) &rarr; [Node](/classes/2.3/Node)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The given name

### getMeshByName(name) &rarr; [AbstractMesh](/classes/2.3/AbstractMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The given name

### getSoundByName(name) &rarr; [Sound](/classes/2.3/Sound)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The given name

### getLastSkeletonByID(id) &rarr; [Skeleton](/classes/2.3/Skeleton)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |   The given id

### getSkeletonById(id) &rarr; [Skeleton](/classes/2.3/Skeleton)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | id | string |   The given id

### getSkeletonByName(name) &rarr; [Skeleton](/classes/2.3/Skeleton)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |   The given name

### isActiveMesh(mesh) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/2.3/Mesh) |   The given mesh

### updateTransformMatrix(force) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean |   True to force the transform matrix update even if the projection is synchronized, false otherwise

### render() &rarr; void


### enableDepthRenderer() &rarr; [DepthRenderer](/classes/2.3/DepthRenderer)


### disableDepthRenderer() &rarr; void


### freezeMaterials() &rarr; void


### unfreezeMaterials() &rarr; void


### dispose() &rarr; void


### disposeSounds() &rarr; void


### getWorldExtends() &rarr; { min: [Vector3](/classes/2.3/Vector3),  max: [Vector3](/classes/2.3/Vector3) }


### createOrUpdateSelectionOctree(maxCapacity, maxDepth) &rarr; [Octree](/classes/2.3/Octree)&lt;[AbstractMesh](/classes/2.3/AbstractMesh)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | maxCapacity | number |   default : 64 The maximum capacity of the octree
optional | maxDepth | number |   default : 2 The maximum depth of the octree
### createPickingRay(x, y, world, camera, cameraViewSpace) &rarr; [Ray](/classes/2.3/Ray)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   X position on screen
 | y | number |   Y position on screen
 | world | [Matrix](/classes/2.3/Matrix) |   The world [Matrix](/classes/2.3/Matrix)
 | camera | [Camera](/classes/2.3/Camera) | 
### createPickingRayInCameraSpace(x, y, camera) &rarr; [Ray](/classes/2.3/Ray)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   X position on screen
 | y | number |   Y position on screen
 | camera | [Camera](/classes/2.3/Camera) | 
### pick(x, y, predicate, fastCheck, camera) &rarr; [PickingInfo](/classes/2.3/PickingInfo)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   X position on screen
 | y | number |   Y position on screen
optional | predicate | (mesh: [AbstractMesh](/classes/2.3/AbstractMesh)) =&gt; boolean |   Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true
optional | fastCheck | boolean |   Launch a fast check only using the bounding boxes. Can be set to null.
### pickSprite(x, y, predicate, fastCheck, camera) &rarr; [PickingInfo](/classes/2.3/PickingInfo)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |   X position on screen
 | y | number |   Y position on screen
optional | predicate | (sprite: [Sprite](/classes/2.3/Sprite)) =&gt; boolean |   Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true
optional | fastCheck | boolean |   Launch a fast check only using the bounding boxes. Can be set to null.
### pickWithRay(ray, predicate, fastCheck) &rarr; [PickingInfo](/classes/2.3/PickingInfo)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/2.3/Ray) |   The given [Ray](/classes/2.3/Ray)
 | predicate | (mesh: [Mesh](/classes/2.3/Mesh)) =&gt; boolean |   Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true
optional | fastCheck | boolean |   Launch a fast check only using the bounding boxes. Can be set to null.
### setPointerOverMesh(mesh) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/2.3/AbstractMesh) |   The given mesh

### getPointerOverMesh() &rarr; [AbstractMesh](/classes/2.3/AbstractMesh)


### getPhysicsEngine() &rarr; [PhysicsEngine](/classes/2.3/PhysicsEngine)


### enablePhysics(gravity, plugin) &rarr; boolean

Enables physics to the current scene

@return {boolean} was the physics engine initialized

#### Parameters
 | Name | Type | Description
---|---|---|---
optional | gravity | [Vector3](/classes/2.3/Vector3) |   The given gravity
optional | plugin | IPhysicsEnginePlugin |   default : [OimoJSPlugin](/classes/2.3/OimoJSPlugin). The physics plugin used
### disablePhysicsEngine() &rarr; void


### isPhysicsEnabled() &rarr; boolean


### setGravity(gravity) &rarr; void

Sets the gravity of the physics engine (and NOT of the scene)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | gravity | [Vector3](/classes/2.3/Vector3) |   The given gravity

### createCompoundImpostor(parts, options) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | parts | any |   The array of object build this way {mesh: [Mesh](/classes/2.3/Mesh), impostor: number}
 | options | PhysicsBodyCreationOptions |   An object build this way {mass: number, friction: number, restitution: number}
### deleteCompoundImpostor(compound) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | compound | any |   The param type is the one used by the physics plugin

### createDefaultCameraOrLight() &rarr; void


### getMeshesByTags(tagsQuery, forEach) &rarr; [Mesh](/classes/2.3/Mesh)[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string |   !tag5))
optional | forEach | (mesh: [AbstractMesh](/classes/2.3/AbstractMesh)) =&gt; void |   
### getCamerasByTags(tagsQuery, forEach) &rarr; [Camera](/classes/2.3/Camera)[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string |   !tag5))
optional | forEach | (camera: [Camera](/classes/2.3/Camera)) =&gt; void |   
### getLightsByTags(tagsQuery, forEach) &rarr; [Light](/classes/2.3/Light)[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string |   !tag5))
optional | forEach | (light: [Light](/classes/2.3/Light)) =&gt; void |   
### getMaterialByTags(tagsQuery, forEach) &rarr; [Material](/classes/2.3/Material)[]



#### Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string |   !tag5))
optional | forEach | (material: [Material](/classes/2.3/Material)) =&gt; void |   
