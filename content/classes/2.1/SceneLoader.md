---
ID_PAGE: 25211
PG_TITLE: SceneLoader
PG_VERSION: 2.1
TAGS:
    - Scene
---

This class is used to import .babylon files into the scene







##Members

###static ForceFullSceneLoadingForIncremental : boolean





True to force the full loading of the scene, also to prevent from delaying the texture loading; false otherwise




###static ShowLoadingScreen : boolean





True to show the loading screen, false otherwise















##Methods

###static RegisterPlugin(plugin) &rarr; void
Registers a scene loader plugin







####Parameters
 | Name | Type | Description
---|---|---|---
 | plugin | ISceneLoaderPlugin | @param plugin
---

###static ImportMesh(meshesNames, rootUrl, sceneFilename, scene, onsuccess, progressCallBack, onerror) &rarr; void
Imports meshes using the given url and names







####Parameters
 | Name | Type | Description
---|---|---|---
 | meshesNames | any | The meshes names to import. Set &quot;&quot; to select all meshes
 | rootUrl | string | The babylon file path
 | sceneFilename | string | The babylon file name
 | scene | [Scene](/classes/Scene) | The scene where selected meshes will be imported
optional | onsuccess | (meshes: [AbstractMesh](/classes/AbstractMesh)[], particleSystems: [ParticleSystem](/classes/ParticleSystem)[], skeletons: [Skeleton](/classes/Skeleton)[]) =&gt; void | The function triggered when all selected meshes are imported. Called with parameters meshes, particleSystems, skeletons
optional | progressCallBack | () =&gt; void | The function returning the import progress
optional | onerror | (scene: [Scene](/classes/Scene), e: any) =&gt; void | The callback function triggered if an error occurs during the meshes loading
---

###static Load(rootUrl, sceneFilename, engine, onsuccess, progressCallBack, onerror) &rarr; void
Load a scene

####Parameters
 | Name | Type | Description
---|---|---|---
 | rootUrl | string | a string that defines the root url for scene and resources
 | sceneFilename | any | a string that defines the name of the scene file. can start with &quot;data:&quot; following by the stringified version of the scene
 | engine | [Engine](/classes/Engine) | is the instance of [Engine](/classes/Engine) to use to create the scene
optional | onsuccess | (scene: [Scene](/classes/Scene)) =&gt; void | The callback function triggered when the given file is correctly loaded
optional | progressCallBack | any | The function returning the import progress
optional | onerror | (scene: [Scene](/classes/Scene)) =&gt; void | The callback function triggered if an error occurs during the given file loading
---

###static Append(rootUrl, sceneFilename, scene, onsuccess, progressCallBack, onerror) &rarr; void
Append a scene

####Parameters
 | Name | Type | Description
---|---|---|---
 | rootUrl | string | a string that defines the root url for scene and resources
 | sceneFilename | any | a string that defines the name of the scene file. can start with &quot;data:&quot; following by the stringified version of the scene
 | scene | [Scene](/classes/Scene) | is the instance of [Scene](/classes/Scene) to append to
optional | onsuccess | (scene: [Scene](/classes/Scene)) =&gt; void | The callback function called when the given file is correctly loaded
optional | progressCallBack | any | The function returning the import progress
optional | onerror | (scene: [Scene](/classes/Scene)) =&gt; void | The callback function triggered if an error occurs during the given file loading
---
