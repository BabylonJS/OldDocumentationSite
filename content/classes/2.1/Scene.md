---
ID_PAGE: 25150
PG_TITLE: Scene
PG_VERSION: 2.1
TAGS:
    - Scene
---

Represents a scene to be rendered by the engine.

@see http://doc.babylonjs.com/page.php?p=21911
##new [Scene](/classes/Scene)(engine)

@constructor
####Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](/classes/Engine) | [Engine](/classes/Engine) The babylon engine
---

##Members

###static MinDeltaTime : number





default : 1.0

In milliseconds, the minimum delta time between two steps




###static MaxDeltaTime : number





default : 1000.0

In milliseconds, the maximum delta time between two steps




###static FOGMODE_NONE : number





The fog is deactivated




###static FOGMODE_EXP : number





The fog density is following an exponential function




###static FOGMODE_EXP2 : number





The fog density is following an exponential function faster than FOGMODE_EXP




###static FOGMODE_LINEAR : number





The fog density is following a linear function.




###autoClear : boolean





default : true

True to clear the color buffer at each render, false either




###clearColor : any





default : [Color3](/classes/Color3)(0.2, 0.2, 0.3)

The color of the scene when cleared




###ambientColor : [Color3](/classes/Color3)





default : [Color3](/classes/Color3)(0, 0, 0)

The scene ambiant color




###beforeRender : () =&gt; void


A function to be executed before rendering this scene

@type {Function}

###afterRender : () =&gt; void


A function to be executed after rendering this scene

@type {Function}

###onDispose : () =&gt; void


A function to be executed when this scene is disposed.

@type {Function}

###beforeCameraRender : (camera: [Camera](/classes/Camera)) =&gt; void





Function triggered before the camera is rendered, with the concerned camera passed in argument




###afterCameraRender : (camera: [Camera](/classes/Camera)) =&gt; void





Function triggered after the camera is rendered, with the concerned camera passed in argument




###forceWireframe : boolean





default : false

Forces the wireframe display of meshes




###forcePointsCloud : boolean






###forceShowBoundingBoxes : boolean






###clipPlane : [Plane](/classes/Plane)








###animationsEnabled : boolean






###onPointerDown : (evt: PointerEvent, pickInfo: [PickingInfo](/classes/PickingInfo)) =&gt; void





Function triggered when the pointer interacts with the scene

The passed argument are the event and the element concerned with this event




###onPointerUp : (evt: PointerEvent, pickInfo: [PickingInfo](/classes/PickingInfo)) =&gt; void


###cameraToUseForPointers : [Camera](/classes/Camera)





The camera used for pointers




###fogEnabled : boolean


is fog enabled on this scene.

@type {boolean}

###fogMode : number





One of the following values : [Scene](/classes/Scene).FOGMODE_NONE, [Scene](/classes/Scene).FOGMODE_EXP, [Scene](/classes/Scene).FOGMODE_EXP2 , [Scene](/classes/Scene).FOGMODE_LINEAR




###fogColor : [Color3](/classes/Color3)





default : [Color3](/classes/Color3)(0.2, 0.2, 0.3)

The fog color




###fogDensity : number





default : 0.1

The fog density




###fogStart : number





default : 0

Used with the [Scene](/classes/Scene).FOGMODE_LINEAR fogMode

Where the fog starts




###fogEnd : number





default : 1000.0

Used with the [Scene](/classes/Scene).FOGMODE_LINEAR fogMode

Where the fog ends




###shadowsEnabled : boolean


is shadow enabled on this scene.

@type {boolean}

###lightsEnabled : boolean


is light enabled on this scene.

@type {boolean}

###lights : [Light](/classes/Light)[]


All of the lights added to this scene.

@see [Light](/classes/Light)

@type {BABYLON.Light[]}

###onNewLightAdded : (newLight?: [Light](/classes/Light), positionInArray?: number, scene?: [Scene](/classes/Scene)) =&gt; void


###onLightRemoved : (removedLight?: [Light](/classes/Light)) =&gt; void


###cameras : [Camera](/classes/Camera)[]


All of the cameras added to this scene.

@see [Camera](/classes/Camera)

@type {BABYLON.Camera[]}

###onNewCameraAdded : (newCamera?: [Camera](/classes/Camera), positionInArray?: number, scene?: [Scene](/classes/Scene)) =&gt; void


###onCameraRemoved : (removedCamera?: [Camera](/classes/Camera)) =&gt; void


###activeCameras : [Camera](/classes/Camera)[]





The array holding the list of active [Camera](/classes/Camera) instances




###activeCamera : [Camera](/classes/Camera)





The active camera for this scene




###meshes : [AbstractMesh](/classes/AbstractMesh)[]


All of the (abstract) meshes added to this scene.

@see [AbstractMesh](/classes/AbstractMesh)

@type {BABYLON.AbstractMesh[]}

###onNewMeshAdded : (newMesh?: [AbstractMesh](/classes/AbstractMesh), positionInArray?: number, scene?: [Scene](/classes/Scene)) =&gt; void


###onMeshRemoved : (removedMesh?: [AbstractMesh](/classes/AbstractMesh)) =&gt; void


###onGeometryAdded : (newGeometry?: [Geometry](/classes/Geometry)) =&gt; void


###onGeometryRemoved : (removedGeometry?: [Geometry](/classes/Geometry)) =&gt; void


###materials : [Material](/classes/Material)[]





The array holding all materials of this scene




###multiMaterials : [MultiMaterial](/classes/MultiMaterial)[]





The array holding all multimaterials of this scene




###defaultMaterial : [StandardMaterial](/classes/StandardMaterial)





The default material used on meshes when no material is affected




###texturesEnabled : boolean





True if texture should be enabled, false otherwise




###textures : [BaseTexture](/classes/BaseTexture)[]





The array holding all textures used in the scene




###particlesEnabled : boolean





True if Particles should be enabled, false otherwise




###particleSystems : [ParticleSystem](/classes/ParticleSystem)[]





The array holding all particle systems of this scene




###spritesEnabled : boolean


###spriteManagers : [SpriteManager](/classes/SpriteManager)[]





The array holding all sprite managers of this scene




###layers : [Layer](/classes/Layer)[]





The array holding all layers of this scene




###skeletonsEnabled : boolean






###skeletons : [Skeleton](/classes/Skeleton)[]





The array holding all skeletons of this scene




###lensFlaresEnabled : boolean






###lensFlareSystems : [LensFlareSystem](/classes/LensFlareSystem)[]





The array holding all lensflare systems of this scene




###collisionsEnabled : boolean





True if collisions should be enabled, false otherwise




###collisionCoordinator : ICollisionCoordinator


###gravity : [Vector3](/classes/Vector3)





Defines the gravity applied to this scene




###postProcessesEnabled : boolean





True if postProcesses should be enabled, false otherwise




###postProcessManager : [PostProcessManager](/classes/PostProcessManager)





The post process manager of this scene




###postProcessRenderPipelineManager : [PostProcessRenderPipelineManager](/classes/PostProcessRenderPipelineManager)





The post process render pipeline manager of this scene




###renderTargetsEnabled : boolean





True if custom render target should be enabled, false otherwise




###dumpNextRenderTargets : boolean


###customRenderTargets : [RenderTargetTexture](/classes/RenderTargetTexture)[]





The array holding all custom render targets of this scene




###useDelayedTextureLoading : boolean





True if the texture loading should be delayed, false otherwise




###importedMeshesFiles : String[]





The array holding all imported mesh files




###database : any





The database this scene is saved into




###actionManager : [ActionManager](/classes/ActionManager)


This scene's action manager

@type {BABYLON.ActionManager}

###proceduralTexturesEnabled : boolean






###mainSoundTrack : [SoundTrack](/classes/SoundTrack)






###soundTracks : [SoundTrack](/classes/SoundTrack)[]






###simplificationQueue : [SimplificationQueue](/classes/SimplificationQueue)


###debugLayer : [DebugLayer](/classes/DebugLayer)






###workerCollisions : boolean


###meshUnderPointer : [AbstractMesh](/classes/AbstractMesh)


The mesh that is currently under the pointer.

@return {BABYLON.AbstractMesh} mesh under the pointer/mouse cursor or null if none.

###pointerX : number


Current on-screen X position of the pointer

@return {number} X position of the pointer

###pointerY : number


Current on-screen Y position of the pointer

@return {number} Y position of the pointer

###audioEnabled : boolean


###headphone : boolean




##Methods

###getCachedMaterial() &rarr; [Material](/classes/Material)






###getBoundingBoxRenderer() &rarr; [BoundingBoxRenderer](/classes/BoundingBoxRenderer)
Returns the bounding box renderer








###getOutlineRenderer() &rarr; [OutlineRenderer](/classes/OutlineRenderer)
Returns the outline rendrer








###getEngine() &rarr; [Engine](/classes/Engine)
Returns the engine








###getTotalVertices() &rarr; number
Returns all the vertices of this scene








###getActiveIndices() &rarr; number


###getActiveParticles() &rarr; number
Returns all the active particles of this scene








###getActiveBones() &rarr; number






###getLastFrameDuration() &rarr; number
Returns the duration of the last frame in milliseconds








###getEvaluateActiveMeshesDuration() &rarr; number
Returns the duration of active meshes in milliseconds








###getActiveMeshes() &rarr; SmartArray&lt;Mesh&gt;
Returns the list of acti meshes of this scene








###getRenderTargetsDuration() &rarr; number
Returns the duration of targets render in milliseconds








###getRenderDuration() &rarr; number
Returns the duration of the last render in milliseconds








###getParticlesDuration() &rarr; number
Returns the duration of the last particles processing in milliseconds








###getSpritesDuration() &rarr; number
Returns the duration of the last sprites processing in milliseconds








###getAnimationRatio() &rarr; number
Returns the animation ratio (speed)








###getRenderId() &rarr; number
Returns the render ID of this scene








###incrementRenderId() &rarr; void




###attachControl() &rarr; void
Attaches mouse/keyboard control to this scene.
The canvas registering all controls is the canvas used to create the babylon engine.








###detachControl() &rarr; void
Detaches mouse/keyboard control to this scene








###isReady() &rarr; boolean
Returns true when the scene is ready to be displayed (all meshes are ready and all materials are ready)








###resetCachedMaterial() &rarr; void






###registerBeforeRender(func) &rarr; void
Registers in an array the given function which will be executed before rendering the scene







####Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | The given function to call
---

###unregisterBeforeRender(func) &rarr; void
Removes the given function from the beforeRender array







####Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | The given function to remove
---

###registerAfterRender(func) &rarr; void





####Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | 
---

###unregisterAfterRender(func) &rarr; void





####Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | 
---

###getWaitingItemsCount() &rarr; number
Returns the length of pending data (not ready yet)








###executeWhenReady(func) &rarr; void
Registers a function to be executed when the scene is ready.

####Parameters
 | Name | Type | Description
---|---|---|---
 | func | () =&gt; void | The given function to call
---

###beginAnimation(target, from, to, loop, speedRatio, onAnimationEnd, animatable) &rarr; [Animatable](/classes/Animatable)
Will start the animation sequence of a given target
@return {BABYLON.Animatable} the animatable object created for this animation
@see [Animatable](/classes/Animatable)
@see http://doc.babylonjs.com/page.php?p=22081

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | any | - the target
 | from | number | The fps starting frame
 | to | number | The fps ending frame
optional | loop | boolean | If true, the animation will loop
optional | speedRatio | number | default : 1. The speed ratio of this animation
optional | onAnimationEnd | () =&gt; void | The function triggered on the end of the animation
optional | animatable | [Animatable](/classes/Animatable) | An optional specific animation
---

###beginDirectAnimation(target, animations, from, to, loop, speedRatio, onAnimationEnd) &rarr; [Animatable](/classes/Animatable)
Begins a direct animation (no children animations)







####Parameters
 | Name | Type | Description
---|---|---|---
 | target | any | The animation target
 | animations | [Animation](/classes/Animation)[] | An array of animations
 | from | number | The fps starting frame
 | to | number | The fps ending frame
optional | loop | boolean | If true, the animation will loop
optional | speedRatio | number | default : 1.The speed ratio of this animation
optional | onAnimationEnd | () =&gt; void | The function triggered on the end of the animation
---

###getAnimatableByTarget(target) &rarr; [Animatable](/classes/Animatable)
Returns the first [Animatable](/classes/Animatable) instance having the given target in the active animatable array







####Parameters
 | Name | Type | Description
---|---|---|---
 | target | any | the given target
---

###stopAnimation(target) &rarr; void
Will stop the animation of the given target
@see beginAnimation

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | any | - the target
---

###getViewMatrix() &rarr; [Matrix](/classes/Matrix)
Returns the view [Matrix](/classes/Matrix)








###getProjectionMatrix() &rarr; [Matrix](/classes/Matrix)
Returns the projection [Matrix](/classes/Matrix)








###getTransformMatrix() &rarr; [Matrix](/classes/Matrix)
Returns the transform [Matrix](/classes/Matrix)








###setTransformMatrix(view, projection) &rarr; void
Sets the transform matrix by multiplying the given view [Matrix](/classes/Matrix) by the given projection [Matrix](/classes/Matrix)







####Parameters
 | Name | Type | Description
---|---|---|---
 | view | [Matrix](/classes/Matrix) | The given view [Matrix](/classes/Matrix)
 | projection | [Matrix](/classes/Matrix) | The given projection [Matrix](/classes/Matrix)
---

###addMesh(newMesh) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | newMesh | [AbstractMesh](/classes/AbstractMesh) | 
---

###removeMesh(toRemove) &rarr; number

####Parameters
 | Name | Type | Description
---|---|---|---
 | toRemove | [AbstractMesh](/classes/AbstractMesh) | 
---

###removeLight(toRemove) &rarr; number

####Parameters
 | Name | Type | Description
---|---|---|---
 | toRemove | [Light](/classes/Light) | 
---

###removeCamera(toRemove) &rarr; number

####Parameters
 | Name | Type | Description
---|---|---|---
 | toRemove | [Camera](/classes/Camera) | 
---

###addLight(newLight) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | newLight | [Light](/classes/Light) | 
---

###addCamera(newCamera) &rarr; void

####Parameters
 | Name | Type | Description
---|---|---|---
 | newCamera | [Camera](/classes/Camera) | 
---

###setActiveCameraByID(id) &rarr; [Camera](/classes/Camera)
sets the active camera of the scene using its ID
@return {BABYLON.Camera|null} the new active camera or null if none found.
@see activeCamera

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id of the [Camera](/classes/Camera)
---

###setActiveCameraByName(name) &rarr; [Camera](/classes/Camera)
sets the active camera of the scene using its name
@return {BABYLON.Camera|null} the new active camera or null if none found.
@see activeCamera

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The given name of the [Camera](/classes/Camera)
---

###getMaterialByID(id) &rarr; [Material](/classes/Material)
get a material using its id
@return {BABYLON.Material|null} the material or null if none found.

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getMaterialByName(name) &rarr; [Material](/classes/Material)
get a material using its name
@return {BABYLON.Material|null} the material or null if none found.

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The given name
---

###getCameraByID(id) &rarr; [Camera](/classes/Camera)
Returns the first [Camera](/classes/Camera) instance using the given id







####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getCameraByUniqueID(uniqueId) &rarr; [Camera](/classes/Camera)

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniqueId | number | 
---

###getCameraByName(name) &rarr; [Camera](/classes/Camera)
get a camera using its name
@return {BABYLON.Camera|null} the camera or null if none found.

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The given name
---

###getLightByName(name) &rarr; [Light](/classes/Light)
get a light node using its name
@return {BABYLON.Light|null} the light or null if none found.

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The given name
---

###getLightByID(id) &rarr; [Light](/classes/Light)
get a light node using its ID
@return {BABYLON.Light|null} the light or null if none found.

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getLightByUniqueID(uniqueId) &rarr; [Light](/classes/Light)
get a light node using its scene-generated unique ID
@return {BABYLON.Light|null} the light or null if none found.

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniqueId | number | 
---

###getGeometryByID(id) &rarr; [Geometry](/classes/Geometry)
get a geometry using its ID
@return {BABYLON.Geometry|null} the geometry or null if none found.

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###pushGeometry(geometry, force) &rarr; boolean
add a new geometry to this scene.
@return {boolean} was the geometry added or not

####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/Geometry) | The given geometry
optional | force | boolean | True to push the geometry even if it is not found in the list of geometries of the scene, false otherwise
---

###removeGeometry(geometry) &rarr; boolean
Removes an existing geometry
@return {boolean} was the geometry removed or not

####Parameters
 | Name | Type | Description
---|---|---|---
 | geometry | [Geometry](/classes/Geometry) | 
---

###getGeometries() &rarr; [Geometry](/classes/Geometry)[]
Returns the list of geometries of this scene








###getMeshByID(id) &rarr; [AbstractMesh](/classes/AbstractMesh)
Get the first added mesh found of a given ID
@return {BABYLON.AbstractMesh|null} the mesh found or null if not found at all.

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getMeshByUniqueID(uniqueId) &rarr; [AbstractMesh](/classes/AbstractMesh)
Get a mesh with its auto-generated unique id
@return {BABYLON.AbstractMesh|null} the mesh found or null if not found at all.

####Parameters
 | Name | Type | Description
---|---|---|---
 | uniqueId | number | 
---

###getLastMeshByID(id) &rarr; [AbstractMesh](/classes/AbstractMesh)
Get a the last added mesh found of a given ID
@return {BABYLON.AbstractMesh|null} the mesh found or null if not found at all.

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getLastEntryByID(id) &rarr; [Node](/classes/Node)
Get a the last added node (Mesh, [Camera](/classes/Camera), [Light](/classes/Light)) found of a given ID
@return {BABYLON.Node|null} the node found or null if not found at all.

####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getNodeByName(name) &rarr; [Node](/classes/Node)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
---

###getMeshByName(name) &rarr; [AbstractMesh](/classes/AbstractMesh)
Returns the [Mesh](/classes/Mesh) instance having the given name







####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The given name
---

###getSoundByName(name) &rarr; [Sound](/classes/Sound)



####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
---

###getLastSkeletonByID(id) &rarr; [Skeleton](/classes/Skeleton)
Returns the last instance of [Skeleton](/classes/Skeleton) using the given id







####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getSkeletonById(id) &rarr; [Skeleton](/classes/Skeleton)
Returns the first [Skeleton](/classes/Skeleton) instance using the given id







####Parameters
 | Name | Type | Description
---|---|---|---
 | id | string | The given id
---

###getSkeletonByName(name) &rarr; [Skeleton](/classes/Skeleton)
Returns the first [Skeleton](/classes/Skeleton) instance corresponding to the given name







####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The given name
---

###isActiveMesh(mesh) &rarr; boolean
Tests if the given mesh is active or not







####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [Mesh](/classes/Mesh) | The given mesh
---

###updateTransformMatrix(force) &rarr; void
Updates the transform matrix of this scene with the one of the active camera







####Parameters
 | Name | Type | Description
---|---|---|---
optional | force | boolean | True to force the transform matrix update even if the projection is synchronized, false otherwise
---

###render() &rarr; void
Renders this [Scene](/classes/Scene)








###enableDepthRenderer() &rarr; [DepthRenderer](/classes/DepthRenderer)




###disableDepthRenderer() &rarr; void




###dispose() &rarr; void
Remove of this scene all lights, meshes, cameras, materials, particle systems, spritemanagers.








###disposeSounds() &rarr; void


###getWorldExtends() &rarr; {min: [Vector3](/classes/Vector3); max: [Vector3](/classes/Vector3); }; 




###createOrUpdateSelectionOctree(maxCapacity, maxDepth) &rarr; Octree&lt;AbstractMesh&gt;
Creates a new octree for this scene or update it if existing.







####Parameters
 | Name | Type | Description
---|---|---|---
optional | maxCapacity | number | default : 64 The maximum capacity of the octree
optional | maxDepth | number | default : 2 The maximum depth of the octree
---

###createPickingRay(x, y, world, camera) &rarr; [Ray](/classes/Ray)
Creates a picking ray in the current view.







####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | The mouse X coordinate in the render canvas
 | y | number | The mouse Y coordinate in the render canvas
 | world | [Matrix](/classes/Matrix) | The world [Matrix](/classes/Matrix)
 | camera | [Camera](/classes/Camera) | The given [Camera](/classes/Camera)
---

###pick(x, y, predicate, fastCheck, camera) &rarr; [PickingInfo](/classes/PickingInfo)
Launch a ray to try to pick a mesh in the scene







####Parameters
 | Name | Type | Description
---|---|---|---
 | x | number | X position on screen
 | y | number | Y position on screen
optional | predicate | (mesh: [AbstractMesh](/classes/AbstractMesh)) =&gt; boolean | Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true
optional | fastCheck | boolean | Launch a fast check only using the bounding boxes. Can be set to null.
optional | camera | [Camera](/classes/Camera) | [Camera](/classes/Camera) to use for computing the picking ray. Can be set to null. In this case, the scene.activeCamera will be used
---

###pickWithRay(ray, predicate, fastCheck) &rarr; [PickingInfo](/classes/PickingInfo)
Function used to pick a mesh by giving a ray (instead of a position).







####Parameters
 | Name | Type | Description
---|---|---|---
 | ray | [Ray](/classes/Ray) | The given [Ray](/classes/Ray)
 | predicate | (mesh: [Mesh](/classes/Mesh)) =&gt; boolean | Predicate function used to determine eligible meshes. Can be set to null. In this case, a mesh must be enabled, visible and with isPickable set to true
optional | fastCheck | boolean | Launch a fast check only using the bounding boxes. Can be set to null.
---

###setPointerOverMesh(mesh) &rarr; void
The action OnPointerOutTrigger and OnPointerOverTrigger are triggered for the given mesh







####Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/AbstractMesh) | The given mesh
---

###getPointerOverMesh() &rarr; [AbstractMesh](/classes/AbstractMesh)
Returns the pointer over the mesh








###getPhysicsEngine() &rarr; [PhysicsEngine](/classes/PhysicsEngine)
Returns the physic engine used for this scene








###enablePhysics(gravity, plugin) &rarr; boolean
Enable the physic engine in this scene.







####Parameters
 | Name | Type | Description
---|---|---|---
 | gravity | [Vector3](/classes/Vector3) | default : [Vector3](/classes/Vector3)(0, 0, -9.82). The scene gravity
optional | plugin | IPhysicsEnginePlugin | default : [OimoJSPlugin](/classes/OimoJSPlugin). The physics plugin used
---

###disablePhysicsEngine() &rarr; void
Delete the physics engine of the scene








###isPhysicsEnabled() &rarr; boolean
True if a physic engine is defined, false otherwise








###setGravity(gravity) &rarr; void
Sets the given gracvity to the loaded physic engine







####Parameters
 | Name | Type | Description
---|---|---|---
 | gravity | [Vector3](/classes/Vector3) | The given gravity
---

###createCompoundImpostor(parts, options) &rarr; any
Creates an impostor composed of the given parts







####Parameters
 | Name | Type | Description
---|---|---|---
 | parts | any | The array of object build this way {mesh: [Mesh](/classes/Mesh), impostor: number}
 | options | PhysicsBodyCreationOptions | An object build this way {mass: number, friction: number, restitution: number}
---

###deleteCompoundImpostor(compound) &rarr; void
Unregister the compound impostor in the physic engine.







####Parameters
 | Name | Type | Description
---|---|---|---
 | compound | any | The param type is the one used by the physics plugin
---

###createDefaultCameraOrLight() &rarr; void




###getMeshesByTags(tagsQuery, forEach) &rarr; [Mesh](/classes/Mesh)[]
Returns the list of meshes corresponding to the tag query given in parameter







####Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string | The tags query, example : (tag1 &amp;&amp; (tag2 || tag4 || !tag5))
optional | forEach | (mesh: [AbstractMesh](/classes/AbstractMesh)) =&gt; void | 
---

###getCamerasByTags(tagsQuery, forEach) &rarr; [Camera](/classes/Camera)[]
Returns the list of cameras corresponding to the tag query given in parameter







####Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string | The tags query, example : (tag1 &amp;&amp; (tag2 || tag4 || !tag5))
optional | forEach | (camera: [Camera](/classes/Camera)) =&gt; void | 
---

###getLightsByTags(tagsQuery, forEach) &rarr; [Light](/classes/Light)[]
Returns the list of lights corresponding to the tag query given in parameter







####Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string | The tags query, example : (tag1 &amp;&amp; (tag2 || tag4 || !tag5))
optional | forEach | (light: [Light](/classes/Light)) =&gt; void | 
---

###getMaterialByTags(tagsQuery, forEach) &rarr; [Material](/classes/Material)[]

####Parameters
 | Name | Type | Description
---|---|---|---
 | tagsQuery | string | The tags query, example : (tag1 &amp;&amp; (tag2 || tag4 || !tag5))
optional | forEach | (material: [Material](/classes/Material)) =&gt; void | 
---
