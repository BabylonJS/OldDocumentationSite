---
ID_PAGE: 25141
PG_TITLE: DirectionalLight
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
##Description

class [DirectionalLight](/classes/2.2/DirectionalLight) extends [Light](/classes/2.2/Light)

A directional light is defined by a direction.

The light is emitted from everywhere with a specific direction and has an infinite range.

##Constructor

##new [DirectionalLight](/classes/2.2/DirectionalLight)(name, direction, scene)

Creates a [DirectionalLight](/classes/2.2/DirectionalLight) object

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  The name of the object
 | direction | [Vector3](/classes/2.2/Vector3) |  The direction of the light
 | scene | [Scene](/classes/2.2/Scene) |  The scene to create the light into
##Members

###direction : [Vector3](/classes/2.2/Vector3)

The direction of the light

###position : [Vector3](/classes/2.2/Vector3)

The position of the light, used to calculate shadows

###transformedPosition : [Vector3](/classes/2.2/Vector3)



###shadowOrthoScale : number



##Methods

###getAbsolutePosition() &rarr; [Vector3](/classes/2.2/Vector3)


###setDirectionToTarget(target) &rarr; [Vector3](/classes/2.2/Vector3)

Returns the normalized vector of the substraction between the given vector and the position of this light

####Parameters
 | Name | Type | Description
---|---|---|---
 | target | [Vector3](/classes/2.2/Vector3) |  The given target

###setShadowProjectionMatrix(matrix, viewMatrix, renderList) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | matrix | [Matrix](/classes/2.2/Matrix) |  
 | viewMatrix | [Matrix](/classes/2.2/Matrix) |  
 | renderList | Array&lt;[AbstractMesh](/classes/2.2/AbstractMesh)&gt; |  
###supportsVSM() &rarr; boolean


###needRefreshPerFrame() &rarr; boolean


###computeTransformedPosition() &rarr; boolean


###transferToEffect(effect, directionUniformName) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/2.2/Effect) |  The given effect
 | directionUniformName | string |  The uniform name
