---
PG_TITLE: How To Use Gizmos
---

## Introduction

Gizmo's are objects that can be attached to a mesh to provide interaction.

## Setup

Gizmo's are displayed by a [UtilityLayerRenderer](/How_To/UtilityLayerRenderer) to not disrupt the existing scene state.
```
var utilLayer = new BABYLON.UtilityLayerRenderer(scene);
var gizmo = new BABYLON.AxisDragGizmo(utilLayer, new BABYLON.Vector3(1,0,0), BABYLON.Color3.FromHexString("#00b894"));
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
[**Basic example**](https://www.babylonjs-playground.com/#31M2AP#3)

## Position, scale and rotation gizmos

Default gizmos for position, rotation and scale on a single axis are supported

 - [Single Axis Position](https://www.babylonjs-playground.com/#31M2AP#3)
 - [Single Axis Scale](https://www.babylonjs-playground.com/#31M2AP#4)
 - [Single Axis Rotation](https://www.babylonjs-playground.com/#31M2AP#5)

Snapping can be enabled on any of the single axis gizmos

```
gizmo.snapDistance = 0.3;
gizmo.onSnapObservable.add((event)=>{
    console.log(event);
})
```

Classes for 3 axis gizmos are also provided which contain 3 of the single axis gizmos within 

 - [Multi Axis Position](https://www.babylonjs-playground.com/#31M2AP#6)
 - [Multi Axis Scale](https://www.babylonjs-playground.com/#31M2AP#8)
 - [Multi Axis Rotation](https://www.babylonjs-playground.com/#31M2AP#7)

## Bounding box Gizmo

The bounding box gizmo displays a bounding box around an object as well as controls to rotate and scale the object.

The enabled rotation axis can be customized with the following:
```
// only enable rotation on x and y axis
gizmo.setEnabledRotationAxis("xy");
```

[Example](https://www.babylonjs-playground.com/#DEYAQ5#40)


