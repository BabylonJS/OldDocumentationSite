---
ID_PAGE: 25207
PG_TITLE: Layer
PG_VERSION: 2.1
---
## Description

class [Layer](/classes/3.0/Layer)

Create a new 2D layer (used to represents backgrounds and/or foregrounds)

## Constructor

## new [Layer](/classes/3.0/Layer)(name, imgUrl, scene, isBackground, color)

The [Layer](/classes/3.0/Layer) constructor

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string |      The layer name
 | imgUrl | string |      The texture URL to display for this layer
 | scene | [Scene](/classes/3.0/Scene) |      The scene linked to this layer
optional | isBackground | boolean |      If set to true, then this layer will be displayed as a background
## Members

### name : string

The layer name

### texture : [Texture](/classes/3.0/Texture)

The texture to display for this layer

### isBackground : boolean

If set to true, then this layer will be displayed as a background.

### color : [Color4](/classes/3.0/Color4)

The color of this layer

### scale : [Vector2](/classes/3.0/Vector2)



### offset : [Vector2](/classes/3.0/Vector2)



### alphaBlendingMode : number



### alphaTest : boolean



### layerMask : number

The layer mask

@default 0xFFFFFFFF

### onDisposeObservable : [Observable](/classes/3.0/Observable)&lt;[Layer](/classes/3.0/Layer)&gt;

An event triggered when the layer is disposed.

@type {BABYLON.[Observable](/classes/3.0/Observable)}

### onDispose : () =&gt; void

Dispose

### onBeforeRenderObservable : [Observable](/classes/3.0/Observable)&lt;[Layer](/classes/3.0/Layer)&gt;

An event triggered before rendering the scene

@type {BABYLON.[Observable](/classes/3.0/Observable)}

### onBeforeRender : () =&gt; void



### onAfterRenderObservable : [Observable](/classes/3.0/Observable)&lt;[Layer](/classes/3.0/Layer)&gt;

An event triggered after rendering the scene

@type {BABYLON.[Observable](/classes/3.0/Observable)}

### onAfterRender : () =&gt; void



## Methods

### render() &rarr; void

Function used to render this layer
### dispose() &rarr; void


