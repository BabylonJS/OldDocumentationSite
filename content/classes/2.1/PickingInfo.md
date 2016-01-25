---
ID_PAGE: 25200
PG_TITLE: PickingInfo
PG_VERSION: 2.1
---

Get information of picking element by click







##Members

###hit : boolean





True if you touch something, false otherwise.




###distance : number





Represents the distance between the screen the click on the mesh




###pickedPoint : [Vector3](/classes/Vector3)





The picked point




###pickedMesh : [AbstractMesh](/classes/AbstractMesh)





The picked abstractMesh




###bu : number





Coordinates texture of the mesh represents the x axis




###bv : number





Coordinates texture of the mesh represents the y axis




###faceId : number





The faceId of the mesh













###subMeshId : number




##Methods

###getNormal(useWorldCoordinates) &rarr; [Vector3](/classes/Vector3)
Get the normal







####Parameters
 | Name | Type | Description
---|---|---|---
optional | useWorldCoordinates | boolean | 
---

###getTextureCoordinates() &rarr; [Vector2](/classes/Vector2)

