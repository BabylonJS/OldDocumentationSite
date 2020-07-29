Importing meshes is actually a really simple process. It's just what you do with those meshes afterwards that can get tricky!

# Environment Mesh
To begin, we're going to create an [Environment class](). This is going to handle everything that has to do with the game's environment (meshes, collisions, fireworks...etc).

In this class, we have the [_loadAsset]() and [load]() functions.
## _loadAsset
```javascript
const result = await SceneLoader.ImportMeshAsync(null, "./models/", "envSetting.glb", this._scene);

let env = result.meshes[0];
let allMeshes = env.getChildMeshes();
```
We want to first import the mesh for the environment, then grab the root and extract all of the meshes from that root.
```javascript
return {
env: env, //reference to our entire imported glb (meshes and transform nodes)
allMeshes: allMeshes // all of the meshes that are in the environment
}
```
Then, we return these objects to complete our environment set up.
## load
The load function is where we [call _loadAsset](). We use await to tell it that we'll be doing something with the returned value. Once our meshes have been imported, we want to set all of the necessary flags:
```javascript
const assets = await this._loadAsset();
//Loop through all environment meshes that were imported
assets.allMeshes.forEach(m => {
    m.receiveShadows = true;
    m.checkCollisions = true;
});
```
We loop through all of the meshes and do have to manually set the flag to check for collisions as well as whether they can receive shadows. The only mesh in this game that actually casts a shadow is the player (for performance reasons). At this point this is all we really need to do with our assets.

If we go back to [_setUpGame](/how_to/page9#setupgame) in app.ts from our state machine implementation, this is where we'll be creating our environment and loading the assets.
```javascript
//--CREATE SCENE--
let scene = new Scene(this._engine);
this._gamescene = scene;

//--CREATE ENVIRONMENT--
const environment = new Environment(scene);
this._environment = environment;

//--LOAD ASSETS--
await this._environment.load(); //environment assets
//...loading character asset
```
Notice how we are using *await* here. This is because we want to wait for the environment to be fully loaded and set up before we try to import our character mesh.
# Character Mesh
Loading the character assets should also begin inside of _setUpGame. We want to make sure that we start loading our meshes before we actually go to the game state.

All we need to do is add this line AFTER we load our environment in _setUpGame
```javascript
//...loaded envrionment assets
await this._loadCharacterAssets(scene);
```
Again, here we are awaiting in order to ensure that the asset is fully imported and set up. This is **SUPER** important because our player constructor actually depends on some of the environment assets being loaded.

But what does this function look like?
The [_loadCharacterAssets]() function's purpose is to call loadCharacter(), store our assets, and then return the results to signify that it's complete.
```javascript
return loadCharacter().then(assets => {
    this.assets = assets;
});
```
The loadCharacter function is what does all of the character mesh creation and imports for us.
```javascript
//collision mesh
const outer = MeshBuilder.CreateBox("outer", { width: 2, depth: 1, height: 3 }, scene);
outer.isVisible = false;
outer.isPickable = false;
outer.checkCollisions = true;

//for collisions
outer.ellipsoid = new Vector3(1, 1.5, 1);
outer.ellipsoidOffset = new Vector3(0, 1.5, 0);
```
In this first portion, we are creating the capsule collider for our character. We start with a simple box mesh and then set that mesh to have an ellipsoid. This ellipsoid is needed if we want to detect collisions using the `mesh.moveWithCollisions` function (refer to [Cameras, Mesh Collisions, and Gravity](/babylon101/cameras,_mesh_collisions_and_gravity)).
```javascript
//move origin of box collider to the bottom of the mesh (to match player mesh)
outer.bakeTransformIntoVertices(Matrix.Translation(0, 1.5, 0))

outer.rotationQuaternion = new Quaternion(0, 1, 0, 0); // rotate the player mesh 180 since we want to see the back of the player
```
When imported, the origin of my character mesh was actually at the bottom, so I moved the origin of our box collider to the bottom to match. Additionally, since this was a glTF that was exported from blender, the mesh's +z direction was facing the camera. So, in order to have the directions of character movement correct, I needed to rotate the player so that their back was facing us.

```javascript
return SceneLoader.ImportMeshAsync(null, "./models/", "player.glb", scene).then((result) =>{
    const root = result.meshes[0];
    //body is our actual player mesh
    const body = root;
    body.parent = outer;
    body.isPickable = false; //so our raycasts dont hit ourself
    body.getChildMeshes().forEach(m => {
        m.isPickable = false;
    })

    return {
        mesh: outer as Mesh,
    }
});
```
Here is where we actually bring in the character mesh, and the result of this import is what gets returned (the box collider parented to the character mesh). The reason why we loop through the meshes here is because if a glTF has multiple materials used, it will treat them as separate meshes. 
# Further Reading
[Lanterns](/how_to/page7)