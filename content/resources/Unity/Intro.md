
The [Export Panels](Exporter) host a set of tools designed to provide a small subset of the unity editor design time features to export babylon content scene files. You can create your games using a design time component based architecture. Please refer to [Unity Editor Manual](https://docs.unity3d.com/Manual/index.html) documentation for details on creating scenes and adding components. 

The toolkit exports game objects that have a camera, light or mesh component attached. The toolkit also provides built in script components to support native babylon engine features at desgin time.


# Getting Started

The [Project Setup](Projects) section outlines basic project setup, scene configuration and runtime script compiler options. The scene exporter will auto detect the default script compiler locations for each platform when creating a new project.

## Camera Rigs

Perspective and orthographic cameras are supported. The Camera Rig component supports detailed camera control allowing easy camera type selection and specfic runtime camera mode options. Please refer to [Unity Camera Reference](https://docs.unity3d.com/Manual/class-Camera.html) documentation for details on scene cameras.

## Scene Lighting

The toolkit exports directional, point and spot lights. Realtime lights are standard lights that illuminate the scene at runtime. Mixed lights support baked lighting and require the [Subtractive](https://docs.unity3d.com/Manual/LightMode-Mixed-Subtractive.html) lightmapper mode. Fully baked lighting (including all area lights) are used for lightmap shadow baking at design time and will **not** be included in the exported scene file. This will allow for detailed lightmap baking using as many baking lights as required to achieve the best shadow effects as possible without using any of the baking light resources at runtime. Please refer to [Unity Baked Lighting](https://docs.unity3d.com/Manual/LightMode-Baked.html) documentation for details on baking lightmaps and lightmap parameters.

Skyboxes for the scene are primarily controlled via the [Unity Lighting Window](https://docs.unity3d.com/Manual/GlobalIllumination.html). The default scene controller **Skybox Options** allow for more detailed settings at runtime. Please refer to [Unity Skybox Rendering](https://docs.unity3d.com/Manual/class-Skybox.html) documentation for details on creating skyboxes.


# Toolkit Features
    
## Script Components

[Script Components](01_ScriptComponents) are the primary way of attaching native babylon classes to game objects and prefabs in the editor.

The **Editor Scripts Components** are C# design-time components used to input client properties. They are not intended to execute at runtime. They are simply to allow the use
of design-time editor properties for your native babylon client scripts. Each editor script specifies the native javascript or typescript backing class to use at runtime. Please refer to [Unity Component Reference](https://docs.unity3d.com/Manual/UsingComponents.html) documentation for details on using attaching components to game objects.

The client scripts are your native babylon javascript or typescript classes that actually contain your game logic code. Each class has a **ready** function that gets
called once during the scene execute when ready phase. A **start** function that gets called once during the first frame. An **update** function that gets called every frame.
An **after** function that gets called after the scene render phase and a **destroy** function that get called on component disposal.


## Scene Manager

The [Scene Manager](02_SceneManager) application programming interface exposes a unity like scene component development pattern. This allows script components to be attached to
game objects like meshes, cameras and lights. Each component type has a ready, start, update, after and destroy function that will get called by the scene manager during it's life cycle.


## Shader Materials

[Shader Materials](03_ShaderMaterials) are used to assign unity standard and legacy shaders to native babylon material classes. Custom shaders are supportted if they follow the unity shader property naming standard. The universial shader material component encapsulates both Unity design time shader and babylon runtime shader information. Please refer to 
[Unity Material Editor](https://docs.unity3d.com/Manual/Materials.html) documentation for details on materials and shaders.


## Collision Meshes

[Collision Meshes](04_CollisionMeshes) are generated to provided simple collision for each component type (box, sphere, capsule, wheel, mesh and terrain). This allows simple geometry to be be used for physics collisions and mesh intersections instead of the original detailed geometry. Please refer to [Unity Collider Components](https://docs.unity3d.com/Manual/CollidersOverview.html) documentation for details on colliders.


## Terrain Builder

[Terrain Builder](05_TerrainBuilder) options are used to export dynamic terrain geometry generation at export time. Up to 12 textures and normal maps may be used to paint terrains. Texture atlas maps are created to optimize multiple terrain splat textures. Terrain mesh colliders are supported to optimize runtime collision checking. Colliders can be segmented up to 16 x 16 low poly collision meshes that cover the orginal high poly terrain surface.

The terrain builder supports custom terrain splatmap shaders to allow design time editor access to the terrain render material. If no custom terrain splatmap material is selected, default options will be used. Please refer to [Unity Terrain Settings](https://docs.unity3d.com/Manual/terrain-OtherSettings.html) documentation for details on custom terrain materials.


## Animation State

[Animation State](06_AnimationState) is supported for both transform and skeleton animations. Transform animations are used to animate the position, rotation and scale of any light, camera or mesh. Skeleton animation are used to animate the bones of a skeletal mesh. Legacy Animation controls are used to enable standard bone key frame animations only. 

The newer standard Animator controls are used to enable the built-in Unity Mechanim humanoid animation rigging system. Please refer to [Unity Animation Reference](https://docs.unity3d.com/Manual/comp-AnimationGroup.html) documentation for details on animations.


## Runtime Prefabs

[Runtime Prefabs](07_RuntimePrefabs) are used to allow client side prefab instantiation. Game objects that are assigned to the **Babylon Prefab** layer are marked for client side prefab usage and will not be enabled in the scene. The scene manager function **instantiate prefab** is used to create fully scipted components at runtime. 

The scene manager uses deep cloning with hierarchy. The scene manager also supports instanced meshes for and prefab marked as **Make Prefab Instance** on the babylon mesh details component attached to the mesh game object.


## Static Batching

[Static Batching](08_StaticBatching) allows design time mesh combining. Game objects that are assigned to the **Babylon Static** layer are marked for mesh optimization at scene export. Meshes will automatically be grouped by material, combined, baked and serialized as a single mesh per material. Texture atlas materials are supported to increase multiple texture rendering optimizations.


## Navigation Mesh

[Navigation Mesh](09_NavigationMesh) support is provided by [Babylon-Navigation-Mesh](https://github.com/wanadev/babylon-navigation-mesh). A path finder for AI agents. It use the A star and Funnel algorithms to calculate a path on a navigation mesh. The toolkit supports the unity navigation mesh generation tools to produced and serialize the navigation mesh geometry into your scene. Please refer to [Unity Navigation Mesh](https://docs.unity3d.com/Manual/Navigation.html) documentation for
details regarding navigation.


## Babylon Art Tools

The [Babylon Art Tools](10_BabylonArtTools) included in the toolkit provides a number of art tools to aid in creating optimized game ready assets.


# Exported Content

## Editor Script Components

The toolkit provided abstract base class **Editor Script Component** is the only supported script component that will be exported. All other non supported components will be ignored. The pre built toolkit components and your [Custom Script Components](01_ScriptComponents) are all derived from the base editor script component class and will be included in the exported scene.

Native JavaScript Libraries (renamed to .bjs) that are included anywhere in the **Assets** folder will be packaged up and included in your project script file. This allow easy packaging of third-party script packages. TypeScript definition files are supported by most IDE and should also be included for auto complete usage in your game project development.

## Supported Unity Features

* **Scene**
* Assets
* Metadata
* **Cameras**
* Name
* Position
* Target
* FOV
* LOD Groups
* Clip Range Start
* Clip Range End
* Check Collisions
* Gravity
* Ellipsoid
* Animations (Position)
* **Lights**
* Type (Point, Directional, Spot)
* Name
* Position
* Direction
* Spot Angle
* Intensity
* Diffuse Color
* Animations (Position)
* Shadow Maps
* Light Maps
* **Materials**
* Name
* Diffuse Color
* Specular Color
* Specular Power
* Emissive Color
* Alpha
* Backface Culling
* Diffuse Texture
* Reflection Texture
* Emissive Texture
* Bump Texture
* **Physically Based Rendering**
* Metallic Setup
* Specular Setup
* **Multi-Materials**
* Name
* Child Materials
* **Textures**
* Name
* Associated File
* Use Alpha
* uOffset / voffset
* uScale / uScale
* **Meshes**
* Name
* Geometry (Positions &amp; Normals)
* Position
* Rotation
* Scaling
* Texture Coordinates (2 Channels)
* Check Collisions
* Receive &amp; Cast Shadows
* Animations (Position, Rotation, Scaling)
* Skeletons (Shared Cloning)
* **Shaders**
* Vertex Shaders
* Fragment Shaders
* Particle Shaders
* Custom Shaders
* **Layers**
* Object Layers
* Static Layers
* Prefab Layers
* Custom Layers
* **Tagging**
* Object Tag Name
* Custom Tag Names
* **Terrains**
* Multiple Terrains
* Splatmap Textures
* Tree Instances
* Grass Patches (Coming Soon)
* Detail Prototypes (Coming Soon)
* **Components**
* Mesh Filter
* Mesh Renderer
* Skinned Mesh Renderer
* **Collisions**
* Box Collider
* Sphere Collider
* Capsule Collider
* Mesh Collider
* Wheel Collider
* Terrain Collider
* **Navigation**
* Navigation Mesh
* Nav Mesh Agent
* Off Mesh Link
* Nav Mesh Obstacle
* **Miscellaneous**
* Tree Component
* Terrain Component
* Animator Component
* Animation Component
