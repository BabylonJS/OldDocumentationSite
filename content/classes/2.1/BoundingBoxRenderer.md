---
ID_PAGE: 25300
PG_TITLE: BoundingBoxRenderer
PG_VERSION: 2.1
TAGS:
    - Mesh
    - Bounding
---
##new [BoundingBoxRenderer](/classes/BoundingBoxRenderer)(scene)




Creates a new renderer used to display the bounding box of its render list






####Parameters
 | Name | Type | Description
---|---|---|---
 | scene | [Scene](/classes/Scene) | The scene linked to this [BoundingBoxRenderer](/classes/BoundingBoxRenderer)
---

##Members

###frontColor : [Color3](/classes/Color3)





The front color of the bounding box




###backColor : [Color3](/classes/Color3)





The back color of the bounding box




###showBackLines : boolean





True if back lines should be displayed, false otherwise

default : true




###renderList : SmartArray&lt;BoundingBox&gt;





This renderer render list















##Methods

###reset() &rarr; void
Reset the render list








###render() &rarr; void
The render function








###dispose() &rarr; void

