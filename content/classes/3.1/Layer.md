---
ID_PAGE: 25207
PG_TITLE: Layer
PG_VERSION: 2.1
---
## Description

class [Layer](/classes/3.1/Layer)



## Constructor

## new [Layer](/classes/3.1/Layer)(name, imgUrl, scene, isBackground, color)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | imgUrl | string | 
 | scene | [Scene](/classes/3.1/Scene) | 
optional | isBackground | boolean | 
## Members

### name : string


### texture : Nullable&lt;[Texture](/classes/3.1/Texture)&gt;


### isBackground : boolean


### color : [Color4](/classes/3.1/Color4)


### scale : [Vector2](/classes/3.1/Vector2)


### offset : [Vector2](/classes/3.1/Vector2)


### alphaBlendingMode : number


### alphaTest : boolean


### layerMask : number


### onDisposeObservable : [Observable](/classes/3.1/Observable)&lt;[Layer](/classes/3.1/Layer)&gt;

An event triggered when the layer is disposed.

@type {BABYLON.[Observable](/classes/3.1/Observable)}
### onDispose : () =&gt; void


### onBeforeRenderObservable : [Observable](/classes/3.1/Observable)&lt;[Layer](/classes/3.1/Layer)&gt;

An event triggered before rendering the scene

@type {BABYLON.[Observable](/classes/3.1/Observable)}
### onBeforeRender : () =&gt; void


### onAfterRenderObservable : [Observable](/classes/3.1/Observable)&lt;[Layer](/classes/3.1/Layer)&gt;

An event triggered after rendering the scene

@type {BABYLON.[Observable](/classes/3.1/Observable)}
### onAfterRender : () =&gt; void


## Methods

### render() &rarr; void


### dispose() &rarr; void


