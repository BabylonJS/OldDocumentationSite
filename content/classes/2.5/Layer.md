---
ID_PAGE: 25207
PG_TITLE: Layer
PG_VERSION: 2.1
---
## Description

class [Layer](/classes/2.5/Layer)

Create a new 2D layer (used to represents backgrounds and/or foregrounds)

## Constructor

## new [Layer](/classes/2.5/Layer)(name, imgUrl, scene, isBackground, color)

The [Layer](/classes/2.5/Layer) constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |     The layer name
 | imgUrl | string |     The texture URL to display for this layer
 | scene | [Scene](/classes/2.5/Scene) |     The scene linked to this layer
optional | isBackground | boolean |     If set to true, then this layer will be displayed as a background
## Members

### name : string

The layer name

### texture : [Texture](/classes/2.5/Texture)

The texture to display for this layer

### isBackground : boolean

If set to true, then this layer will be displayed as a background.

### color : [Color4](/classes/2.5/Color4)

The color of this layer

### scale : [Vector2](/classes/2.5/Vector2)



### offset : [Vector2](/classes/2.5/Vector2)



### alphaBlendingMode : number



### alphaTest : boolean



### onDisposeObservable : [Observable](/classes/2.5/Observable)&lt;[Layer](/classes/2.5/Layer)&gt;

An event triggered when the layer is disposed.

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### onDispose : () =&gt; void

Dispose

### onBeforeRenderObservable : [Observable](/classes/2.5/Observable)&lt;[Layer](/classes/2.5/Layer)&gt;

An event triggered before rendering the scene

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### onBeforeRender : () =&gt; void



### onAfterRenderObservable : [Observable](/classes/2.5/Observable)&lt;[Layer](/classes/2.5/Layer)&gt;

An event triggered after rendering the scene

@type {BABYLON.[Observable](/classes/2.5/Observable)}

### onAfterRender : () =&gt; void



## Methods

### render() &rarr; void

Function used to render this layer
### dispose() &rarr; void


