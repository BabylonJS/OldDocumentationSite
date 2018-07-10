---
PG_TITLE: How To Use Gizmos
---

## Introduction

Gizmo's are objects that can be attached to a mesh to provide interaction.

## GizmoManager
To get a default gizmo setup, the GizmoManager class can be used.
```
var gizmoManager = new BABYLON.GizmoManager(scene);
```
The gizmo manager will attach the enabled gizmo to whatever object in the scene that is selected by a pointer. To enable a gizmo, any of the following can be used:
```
gizmoManager.positionGizmoEnabled = true;
gizmoManager.rotationGizmoEnabled = true;
gizmoManager.scaleGizmoEnabled = true;
gizmoManager.boundingBoxGizmoEnabled = true;
```
To specify the meshes which can have the gizmo attached, the attachableMeshes field can be set.
```
gizmoManager.attachableMeshes = [mesh1, mesh2, mesh3];
```
To manually change the selected mesh, the gizmo manger's attachToMesh method can be called and the usePointerToAttachGizmos field can be used to disable the manager's default pointer behavior.
```
gizmoManager.usePointerToAttachGizmos = false;
gizmoManager.attachToMesh(mesh);
```
[**Example**](https://www.babylonjs-playground.com/#4TBMBR)
## Setup

Gizmo's are displayed by a [UtilityLayerRenderer](/How_To/UtilityLayerRenderer) to not disrupt the existing scene state. If not specified, the default utility layer will be used.
```
var utilLayer = new BABYLON.UtilityLayerRenderer(scene);
var gizmo = new BABYLON.AxisDragGizmo(new BABYLON.Vector3(1,0,0), BABYLON.Color3.FromHexString("#00b894"), utilLayer);
```
When created, the gizmo will not be attached to a mesh and will not be visible so the gizmo can be attached to a mesh to become active. Setting this to null will disable/hide the gizmo once again.
```
gizmo.attachedMesh = sphere;
```
By default the gizmo will be updated to match the attached mesh's rotation and position but these can be modified with the following
```
// Keep the gizmo fixed to world rotation
gizmo.updateGizmoRotationToMatchAttachedMesh = false;
gizmo.updateGizmoPositionToMatchAttachedMesh = true;
```
[GLTF example](http://playground.babylonjs.com/#8GY6J8#20)
## Position, scale and rotation gizmos

Default gizmos for position, rotation and scale on a single axis are supported

 - [AxisDragGizmo](https://www.babylonjs-playground.com/#31M2AP#9)
 - [AxisScaleGizmo](https://www.babylonjs-playground.com/#31M2AP#10)
 - [PlaneRotationGizmo](https://www.babylonjs-playground.com/#31M2AP#11)

Snapping can be enabled on any of the single axis gizmos

```
gizmo.snapDistance = 0.3;
gizmo.onSnapObservable.add((event)=>{
    console.log(event);
})
```

Classes for 3 axis gizmos are also provided which contain 3 of the single axis gizmos within 

 - [PositionGizmo](https://www.babylonjs-playground.com/#31M2AP#6)
 - [ScaleGizmo](https://www.babylonjs-playground.com/#31M2AP#8)
 - [RotationGizmo](https://www.babylonjs-playground.com/#31M2AP#7)

## Bounding box Gizmo

The BoundingBoxGizmo displays a bounding box around an object as well as controls to rotate and scale the object.

The enabled rotation axis can be customized with the following:
```
// only enable rotation on x and y axis
gizmo.setEnabledRotationAxis("xy");
```

To drag around objects contained inside a bounding box, [Mesh Behaviors](/How_To/MeshBehavior) can be attached.
When using with models with complex geometry such as a custom GLTF file, the complex model should be set to not be pickable by pointers and wrapped in a pickable bounding box mesh to save on performance. A helper method to do this is provided.
```
var boundingBox = BABYLON.BoundingBoxGizmo.MakeNotPickableAndWrapInBoundingBox(gltfMesh);
```

[GLTF example](http://playground.babylonjs.com/#8GY6J8#20)
[Example](https://www.babylonjs-playground.com/#DEYAQ5#47)


