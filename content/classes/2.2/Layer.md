---
ID_PAGE: 25207
PG_TITLE: Layer
PG_VERSION: 2.1
---
##Description

class [Layer](/classes/2.2/Layer)

Create a new 2D layer (used to represents backgrounds and/or foregrounds)

##Constructor

##new [Layer](/classes/2.2/Layer)(name, imgUrl, scene, isBackground, color)

The [Layer](/classes/2.2/Layer) constructor

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |  The layer name
 | imgUrl | string |  The texture URL to display for this layer
 | scene | [Scene](/classes/2.2/Scene) |  The scene linked to this layer
optional | isBackground | boolean |  If set to true, then this layer will be displayed as a background
##Members

###name : string

The layer name

###texture : [Texture](/classes/2.2/Texture)

The texture to display for this layer

###isBackground : boolean

If set to true, then this layer will be displayed as a background.

###color : [Color4](/classes/2.2/Color4)

The color of this layer

###onDispose : () =&gt; void

Dispose

##Methods

###render() &rarr; void

Function used to render this layer
###dispose() &rarr; void


