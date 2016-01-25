---
ID_PAGE: 25190
PG_TITLE: Bone
PG_VERSION: 2.1
---
##new [Bone](/classes/Bone)(name, skeleton, parentBone, matrix)




Create a new [Bone](/classes/Bone)
A skeleton (BABYLON.Skeleton) contains a hierarchy of bones (BABYLON.Bone). A bone is defined by a name, a parent (can be null) and a transformation matrix.
A tutorial about Bones and Skeletons ban be found [here](http://doc.babylonjs.com/tutorials/How_to_use_Bones_and_Skeletons)






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | Name of the bone
 | skeleton | [Skeleton](/classes/Skeleton) | The skeleton the bone belongs to
 | parentBone | [Bone](/classes/Bone) | The parent bone of this bone
 | matrix | [Matrix](/classes/Matrix) | @param matrix
---

##Members

###name : string





The bone name




###children : [Bone](/classes/Bone)[]





Children bones array




###animations : [Animation](/classes/Animation)[]





Animations of this bone















##Methods

###getParent() &rarr; [Bone](/classes/Bone)
Get the parent bone








###getLocalMatrix() &rarr; [Matrix](/classes/Matrix)
Get the local matrix








###getBaseMatrix() &rarr; [Matrix](/classes/Matrix)
Get the base matrix








###getWorldMatrix() &rarr; [Matrix](/classes/Matrix)
Get the world matrix








###getInvertedAbsoluteTransform() &rarr; [Matrix](/classes/Matrix)
Get the inverted absolute transform








###getAbsoluteMatrix() &rarr; [Matrix](/classes/Matrix)
Get the absolute matrix








###updateMatrix(matrix) &rarr; void
Update the bone matrix







####Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/Matrix) | The update matrix
---

###markAsDirty() &rarr; void

