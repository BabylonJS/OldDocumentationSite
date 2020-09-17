# Navigation Mesh Generator

![Generated Navmesh ](/img/extensions/navigation/NavMeshGeneration.png)

A Navigation Mesh (or navmesh for short) is a surface topology describing the space where an agent can go based on constraints.
Based on parameters like agent radius, agent climbing capability, agent height,... the navmesh generation computes a topology from source meshes (the world geometry).
Then, this topology can have a debug display (blue mesh on screenshot above) to validate the parameters. 

A demo can be found at:  https://www.babylonjs-playground.com/#HFY257#4

## How to use the navigation mesh?

There are many cases to use a navigation mesh: AI and path finding, replace physics for collision detection (only allow player to go where it's possible instead of using collision detection) and many more cases the BabylonJS users will find.

First, create the navigation plugin
```
let navigationPlugin = new BABYLON.RecastJSPlugin();
```
Prepare some parameters for the agent constraints (described below)

```
var parameters = {
        cs: 0.2,
        ch: 0.2,
        walkableSlopeAngle: 35,
        walkableHeight: 1,
        walkableClimb: 1,
        walkableRadius: 1,
        maxEdgeLen: 12.,
        maxSimplificationError: 1.3,
        minRegionArea: 8,
        mergeRegionArea: 20,
        maxVertsPerPoly: 6,
        detailSampleDist: 6,
        detailSampleMaxError: 1,
        };
```

Call the navigation mesh generation with the parameters and the list of meshes

```
navigationPlugin.createNavMesh([groundMesh, wallMesh1, wallMesh2, stair1, stair2], parameters);
```

And that's it! you can now use the navigation mesh with the crowd system or make queries.

Optionaly, you can get a display of the navmesh to ensure it corresponds to your space constraints

```
navmeshdebug = navigationPlugin.createDebugNavMesh(scene);
var matdebug = new BABYLON.StandardMaterial('matdebug', scene);
matdebug.diffuseColor = new BABYLON.Color3(0.1, 0.2, 1);
matdebug.alpha = 0.2;
navmeshdebug.material = matdebug;
```    

## Parameters

cs - The meshes are voxelized in order to compute walkable navmesh. This parameter in world unit define the widthand depth of 1 voxel.

ch - Same as cs but for height of the voxel.

walkableSlopeAngle - Angle in degree for the maximum walkable slop.

walkableHeight - The height in voxel units that is allowd to walk in.

walkableClimb - The delta in voxel units that can be climbed.

walkableRadius - the radius in voxel units of the agents.

maxEdgeLen - The maximum allowed length for contour edges along the border of the mesh. Voxel units.

maxSimplificationError - The maximum distance a simplified contour's border edges should deviate  the original raw contour. Voxel units.

minRegionArea -  The minimum number of cells allowed to form isolated island areas. Voxel units.

mergeRegionArea - Any regions with a span count smaller than this value will, if possible, be merged with larger regions. Voxel units.

maxVertsPerPoly - The maximum number of vertices allowed for polygons generated during the contour to polygon conversion process. Must be > 3.

detailSampleDist - Sets the sampling distance to use when generating the detail mesh. World units.

detailSampleMaxError - The maximum distance the detail mesh surface should deviate from heightfield data. World Units.

## Queries

Basically, query functions help at getting constraint point and vector by the navigation mesh.

```
getClosestPoint(position: Vector3): Vector3;
getRandomPointAround(position: Vector3, maxRadius: number): Vector3;
moveAlong(position: Vector3, destination: Vector3): Vector3;
```

Respectively: 
- get a point on the navmesh close to a world position parameter
- get a random world position, on the navmesh, inside a circle of maxRadius.
- constraint a segment by the navmesh and returns the ending world position. Like walking on the navmesh and stopping at the edge.

When the query can't find a valid solution, the value (0,0,0) is returned.

Those functions use a bounding box for querying the world. The solution returned is within that bound. To properly set the default box extent to get a finer or broader result, call:

```
setDefaultQueryExtent(extent: Vector3): void;
```

If your query returns a point too far from the expected result, use a smaller extent. 

It's possible to get a path built for navigation as a point array. It's up to the user to use this array for drawing prediction path, trigger events,...

```
var pathPoints = navigationPlugin.computePath(crowd.getAgentPosition(agent), navigationPlugin.getClosestPoint(destinationPoint));
pathLine = BABYLON.MeshBuilder.CreateDashedLines("ribbon", {points: pathPoints, updatable: true, instance: pathLine}, scene);
```

## Baking result

Building a navigation mesh can take a lot of cpu and network resources. In order to lower the download size and cpu needed, it's possible to bake the result of the navigation mesh computation to a byte stream. That byte stream can later be restored to get the navigation mesh back.

To retrieve the binary representation of the computed navigation mesh:

``` 
var binaryData = navigationPlugin.getNavmeshData();
```

binaryData is an Uint8Array that you can save to a file for example.
To restore an UInt8Array to a navigation mesh:

```
navigationPlugin.buildFromNavmeshData(uint8array);
```