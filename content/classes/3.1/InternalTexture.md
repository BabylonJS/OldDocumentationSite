---
TAGS:
---
## Description

class [InternalTexture](/classes/3.1/InternalTexture)



## Constructor

## new [InternalTexture](/classes/3.1/InternalTexture)(engine, dataSource)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](/classes/3.1/Engine) | 
 | dataSource | number | 
## Members

### static DATASOURCE_UNKNOWN : number



### static DATASOURCE_URL : number



### static DATASOURCE_TEMP : number



### static DATASOURCE_RAW : number



### static DATASOURCE_DYNAMIC : number



### static DATASOURCE_RENDERTARGET : number



### static DATASOURCE_MULTIRENDERTARGET : number



### static DATASOURCE_CUBE : number



### static DATASOURCE_CUBERAW : number



### static DATASOURCE_CUBEPREFILTERED : number



### isReady : boolean



### isCube : boolean



### url : string



### samplingMode : number



### generateMipMaps : boolean



### samples : number



### type : number



### format : number



### onLoadedObservable : [Observable](/classes/3.1/Observable)&lt;[InternalTexture](/classes/3.1/InternalTexture)&gt;



### width : number



### height : number



### baseWidth : number



### baseHeight : number



### invertY : boolean



### HTMLImageElement : undefined



### dataSource : number



## Methods

### incrementReferences() &rarr; void


### updateSize(width, height) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | width | number | 
 | height | number | 
### dispose() &rarr; void


