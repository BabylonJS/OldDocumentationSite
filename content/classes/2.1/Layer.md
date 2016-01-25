---
ID_PAGE: 25207
PG_TITLE: Layer
PG_VERSION: 2.1
---

Create a new 2D layer (used to represents backgrounds and/or foregrounds)
##new [Layer](/classes/Layer)(name, imgUrl, scene, isBackground, color)




The [Layer](/classes/Layer) constructor






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The layer name
 | imgUrl | string | The texture URL to display for this layer
 | scene | [Scene](/classes/Scene) | The scene linked to this layer
optional | isBackground | boolean | If set to true, then this layer will be displayed as a background
optional | color | [Color4](/classes/Color4) | The color of this layer
---

##Members

###name : string





The layer name




###texture : [Texture](/classes/Texture)





The texture to display for this layer




###isBackground : boolean





If set to true, then this layer will be displayed as a background.




###color : [Color4](/classes/Color4)





The color of this layer




###onDispose : () =&gt; void





Dispose















##Methods

###render() &rarr; void
Function used to render this layer








###dispose() &rarr; void

