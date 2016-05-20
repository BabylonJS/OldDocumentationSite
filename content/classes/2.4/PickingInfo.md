---
ID_PAGE: 25200
PG_TITLE: PickingInfo
PG_VERSION: 2.1
---
## Description

class [PickingInfo](/classes/2.4/PickingInfo)

Get information of picking element by click

## Members

### hit : boolean

True if you touch something, false otherwise.

### distance : number

Represents the distance between the screen the click on the mesh

### pickedPoint : [Vector3](/classes/2.4/Vector3)

The picked point

### pickedMesh : [AbstractMesh](/classes/2.4/AbstractMesh)

The picked abstractMesh

### bu : number

Coordinates texture of the mesh represents the x axis

### bv : number

Coordinates texture of the mesh represents the y axis

### faceId : number

The faceId of the mesh

### subMeshId : number



### pickedSprite : [Sprite](/classes/2.4/Sprite)



## Methods

### getNormal(useWorldCoordinates, useVerticesNormals) &rarr; [Vector3](/classes/2.4/Vector3)



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | useWorldCoordinates | boolean |    
optional | useVerticesNormals | boolean |   
### getTextureCoordinates() &rarr; [Vector2](/classes/2.4/Vector2)


