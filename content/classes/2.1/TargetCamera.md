---
ID_PAGE: 25124
PG_TITLE: TargetCamera
PG_VERSION: 2.1
TAGS:
    - Node
    - Camera
    - TargetCamera
---
##new [TargetCamera](/classes/TargetCamera)(name, position, scene)




Create a new targetCamera






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the targetCamera
 | position | [Vector3](/classes/Vector3) | Position of the targetCamera
 | scene | [Scene](/classes/Scene) | The scene where the targetCamera will be create
---

##Extends
 [Camera](/classes/Camera)
##Members

###cameraDirection : [Vector3](/classes/Vector3)





The camera direction




###cameraRotation : [Vector2](/classes/Vector2)





The camera rotation




###rotation : [Vector3](/classes/Vector3)





The rotation




###speed : number





The camera speed




###noRotationConstraint : boolean





True : No rotation constraint ; False : Have rotation constraint




###lockedTarget : any





The camera locked target















##Methods

###setTarget(target) &rarr; void
Set the target of the targetCamera







####Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](/classes/Vector3) | The target position
---

###getTarget() &rarr; [Vector3](/classes/Vector3)


###createRigCamera(name, cameraIndex) &rarr; [Camera](/classes/Camera)
@override
Override [Camera](/classes/Camera).createRigCamera

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | cameraIndex | number | 
---
