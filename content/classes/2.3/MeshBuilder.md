---
TAGS:
---
## Description

class [MeshBuilder](/classes/2.3/MeshBuilder)



## Methods

### static CreateBox(name, options, scene) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | options | { width: number,  height: number,  depth: number,  faceUV: [Vector4](/classes/2.3/Vector4)[],  faceColors: [Color4](/classes/2.3/Color4)[],  sideOrientation: number,  updatable: boolean } | 
 | scene | [Scene](/classes/2.3/Scene) | 
### static CreateSphere(name, options, scene) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | options | { segments: number,  diameter: number,  diameterX: number,  diameterY: number,  diameterZ: number,  arc: number,  slice: number,  sideOrientation: number,  updatable: boolean } | 
 | scene | any | 
### static CreateDisc(name, options, scene) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | options | { radius: number,  tessellation: number,  arc: number,  updatable: boolean,  sideOrientation: number } | 
 | scene | [Scene](/classes/2.3/Scene) | 
### static CreateIcoSphere(name, options, scene) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | options | { radius: number,  radiusX: number,  radiusY: number,  radiusZ: number,  flat: boolean,  subdivisions: number,  sideOrientation: number,  updatable: boolean } | 
 | scene | [Scene](/classes/2.3/Scene) | 
### static CreateRibbon(name, options, scene) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | options | { pathArray: [Vector3](/classes/2.3/Vector3)[][],  closeArray: boolean,  closePath: boolean,  offset: number,  updatable: boolean,  sideOrientation: number,  instance: [Mesh](/classes/2.3/Mesh) } | 
optional | scene | [Scene](/classes/2.3/Scene) | 
### static CreateCylinder(name, options, scene) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | options | { height: number,  diameterTop: number,  diameterBottom: number,  diameter: number,  tessellation: number,  subdivisions: number,  arc: number,  faceColors: [Color4](/classes/2.3/Color4)[],  faceUV: [Vector4](/classes/2.3/Vector4)[],  updatable: boolean,  hasRings: boolean,  enclose: boolean,  sideOrientation: number } | 
 | scene | any | 
### static CreateTorus(name, options, scene) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | options | { diameter: number,  thickness: number,  tessellation: number,  updatable: boolean,  sideOrientation: number } | 
 | scene | any | 
### static CreateTorusKnot(name, options, scene) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | options | { radius: number,  tube: number,  radialSegments: number,  tubularSegments: number,  p: number,  q: number,  updatable: boolean,  sideOrientation: number } | 
 | scene | any | 
### static CreateLines(name, options, scene) &rarr; [LinesMesh](/classes/2.3/LinesMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | options | { points: [Vector3](/classes/2.3/Vector3)[],  updatable: boolean,  instance: [LinesMesh](/classes/2.3/LinesMesh) } | 
 | scene | [Scene](/classes/2.3/Scene) | 
### static CreateDashedLines(name, options, scene) &rarr; [LinesMesh](/classes/2.3/LinesMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | options | { points: [Vector3](/classes/2.3/Vector3)[],  dashSize: number,  gapSize: number,  dashNb: number,  updatable: boolean,  instance: [LinesMesh](/classes/2.3/LinesMesh) } | 
 | scene | [Scene](/classes/2.3/Scene) | 
### static ExtrudeShape(name, options, scene) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | options | { shape: [Vector3](/classes/2.3/Vector3)[],  path: [Vector3](/classes/2.3/Vector3)[],  scale: number,  rotation: number,  cap: number,  updatable: boolean,  sideOrientation: number,  instance: [Mesh](/classes/2.3/Mesh) } | 
 | scene | [Scene](/classes/2.3/Scene) | 
### static ExtrudeShapeCustom(name, options, scene) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | options | { shape: [Vector3](/classes/2.3/Vector3)[],  path: [Vector3](/classes/2.3/Vector3)[],  scaleFunction: any,  rotationFunction: any,  ribbonCloseArray: boolean,  ribbonClosePath: boolean,  cap: number,  updatable: boolean,  sideOrientation: number,  instance: [Mesh](/classes/2.3/Mesh) } | 
 | scene | [Scene](/classes/2.3/Scene) | 
### static CreateLathe(name, options, scene) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | options | { shape: [Vector3](/classes/2.3/Vector3)[],  radius: number,  tessellation: number,  arc: number,  closed: boolean,  updatable: boolean,  sideOrientation: number,  cap: number } | 
 | scene | [Scene](/classes/2.3/Scene) | 
### static CreatePlane(name, options, scene) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | options | { size: number,  width: number,  height: number,  sideOrientation: number,  updatable: boolean,  sourcePlane: [Plane](/classes/2.3/Plane) } | 
 | scene | [Scene](/classes/2.3/Scene) | 
### static CreateGround(name, options, scene) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | options | { width: number,  height: number,  subdivisions: number,  updatable: boolean } | 
 | scene | any | 
### static CreateTiledGround(name, options, scene) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | options | { xmin: number,  zmin: number,  xmax: number,  zmax: number,  subdivisions: { w: number,  h: number },  precision: { w: number,  h: number },  updatable: boolean } | 
 | scene | [Scene](/classes/2.3/Scene) | 
### static CreateGroundFromHeightMap(name, url, options, scene) &rarr; [GroundMesh](/classes/2.3/GroundMesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | url | string | 
 | options | { width: number,  height: number,  subdivisions: number,  minHeight: number,  maxHeight: number,  updatable: boolean,  onReady: (mesh: [GroundMesh](/classes/2.3/GroundMesh)) =&gt; void } | 
### static CreateTube(name, options, scene) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | options | { path: [Vector3](/classes/2.3/Vector3)[],  radius: number,  tessellation: number,  radiusFunction: { (i, distance): number },  cap: number,  arc: number,  updatable: boolean,  sideOrientation: number,  instance: [Mesh](/classes/2.3/Mesh) } | 
 | scene | [Scene](/classes/2.3/Scene) | 
### static CreatePolyhedron(name, options, scene) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | options | { type: number,  size: number,  sizeX: number,  sizeY: number,  sizeZ: number,  custom: any,  faceUV: [Vector4](/classes/2.3/Vector4)[],  faceColors: [Color4](/classes/2.3/Color4)[],  flat: boolean,  updatable: boolean,  sideOrientation: number } | 
 | scene | [Scene](/classes/2.3/Scene) | 
### static CreateDecal(name, sourceMesh, options) &rarr; [Mesh](/classes/2.3/Mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | sourceMesh | [AbstractMesh](/classes/2.3/AbstractMesh) | 
 | options | { position: [Vector3](/classes/2.3/Vector3),  normal: [Vector3](/classes/2.3/Vector3),  size: [Vector3](/classes/2.3/Vector3),  angle: number } | 
