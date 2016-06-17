---
ID_PAGE: 25211
PG_TITLE: SceneLoader
PG_VERSION: 2.1
TAGS:
    - Scene
---
## Description

class [SceneLoader](/classes/2.4/SceneLoader)

This class is used to import .babylon files into the scene

## Members

### static NO_LOGGING : number



### static MINIMAL_LOGGING : number



### static SUMMARY_LOGGING : number



### static DETAILED_LOGGING : number



### static ForceFullSceneLoadingForIncremental : boolean

True to force the full loading of the scene, also to prevent from delaying the texture loading; false otherwise

### static ShowLoadingScreen : boolean

True to show the loading screen, false otherwise

### static loggingLevel : number



### ISceneLoaderPluginAsync : undefined



## Methods

### static GetPluginForExtension(extension) &rarr; ISceneLoaderPlugin



#### Parameters
 | Name | Type | Description
---|---|---|---
 | extension | string | 

### static RegisterPlugin(plugin) &rarr; void

Registers a scene loader plugin

#### Parameters
 | Name | Type | Description
---|---|---|---
 | plugin | ISceneLoaderPlugin |    @param plugin

### static ImportMesh(meshesNames, rootUrl, sceneFilename, scene, onsuccess, progressCallBack, onerror) &rarr; void

Imports meshes using the given url and names

#### Parameters
 | Name | Type | Description
---|---|---|---
 | meshesNames | any |    The meshes names to import. Set &quot;&quot; to select all meshes
 | rootUrl | string |   a string that defines the root url for scene and resources  a string that defines the root url for scene and resources a string that defines the root url for scene and resources
 | sceneFilename | string |   a string that defines the name of the scene file. can start with "data:" following by the stringified version of the scene  a string that defines the name of the scene file. can start with "data:" following by the stringified version of the scene a string that defines the name of the scene file. can start with &quot;data:&quot; following by the stringified version of the scene
 | scene | [Scene](/classes/2.4/Scene) |   is the instance of BABYLON.[Scene](/classes/2.4/Scene) to append to  is the instance of BABYLON.[Scene](/classes/2.4/Scene) to append to is the instance of [Scene](/classes/2.4/Scene) to append to
optional | onsuccess | (meshes: [AbstractMesh](/classes/2.4/AbstractMesh)[], particleSystems: [ParticleSystem](/classes/2.4/ParticleSystem)[], skeletons: [Skeleton](/classes/2.4/Skeleton)[]) =&gt; void |    The callback function called when the given file is correctly loaded
optional | progressCallBack | () =&gt; void |    The function returning the import progress
### static Load(rootUrl, sceneFilename, engine, onsuccess, progressCallBack, onerror) &rarr; void

Load a scene

#### Parameters
 | Name | Type | Description
---|---|---|---
 | rootUrl | string |  a string that defines the root url for scene and resources  a string that defines the root url for scene and resources  a string that defines the root url for scene and resources a string that defines the root url for scene and resources
 | sceneFilename | any |  a string that defines the name of the scene file. can start with "data:" following by the stringified version of the scene  a string that defines the name of the scene file. can start with "data:" following by the stringified version of the scene  a string that defines the name of the scene file. can start with "data:" following by the stringified version of the scene a string that defines the name of the scene file. can start with &quot;data:&quot; following by the stringified version of the scene
 | engine | [Engine](/classes/2.4/Engine) |  is the instance of BABYLON.[Engine](/classes/2.4/Engine) to use to create the scene  is the instance of BABYLON.[Engine](/classes/2.4/Engine) to use to create the scene  is the instance of BABYLON.[Engine](/classes/2.4/Engine) to use to create the scene is the instance of [Engine](/classes/2.4/Engine) to use to create the scene
optional | onsuccess | (scene: [Scene](/classes/2.4/Scene)) =&gt; void |    The callback function called when the given file is correctly loaded
optional | progressCallBack | any |    The function returning the import progress
### static Append(rootUrl, sceneFilename, scene, onsuccess, progressCallBack, onerror) &rarr; void

Append a scene

#### Parameters
 | Name | Type | Description
---|---|---|---
 | rootUrl | string |  a string that defines the root url for scene and resources  a string that defines the root url for scene and resources  a string that defines the root url for scene and resources a string that defines the root url for scene and resources
 | sceneFilename | any |  a string that defines the name of the scene file. can start with "data:" following by the stringified version of the scene  a string that defines the name of the scene file. can start with "data:" following by the stringified version of the scene  a string that defines the name of the scene file. can start with "data:" following by the stringified version of the scene a string that defines the name of the scene file. can start with &quot;data:&quot; following by the stringified version of the scene
 | scene | [Scene](/classes/2.4/Scene) |  is the instance of BABYLON.[Scene](/classes/2.4/Scene) to append to  is the instance of BABYLON.[Scene](/classes/2.4/Scene) to append to  is the instance of BABYLON.[Scene](/classes/2.4/Scene) to append to is the instance of [Scene](/classes/2.4/Scene) to append to
optional | onsuccess | (scene: [Scene](/classes/2.4/Scene)) =&gt; void |    The callback function called when the given file is correctly loaded
optional | progressCallBack | any |    The function returning the import progress
