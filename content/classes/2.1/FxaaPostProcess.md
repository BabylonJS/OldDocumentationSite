---
ID_PAGE: 25286
PG_TITLE: FxaaPostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---

Builtin postprocess applying a full screen antialiasing filter
##new [FxaaPostProcess](/classes/FxaaPostProcess)(name, ratio, camera, samplingMode, engine, reusable)




The Postprocess constructor






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The postprocess name
 | ratio | number | The size of the postprocess (0.5 means that your postprocess will have a width = canvas.width * 0.5 and a height = canvas.height * 0.5)
 | camera | [Camera](/classes/Camera) | The scene camera linked to this post process
optional | samplingMode | number | [Texture](/classes/Texture).NEAREST_SAMPLINGMODE, [Texture](/classes/Texture).BILINEAR_SAMPLINGMODE or [Texture](/classes/Texture).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](/classes/Engine) | The engine to attach the postprocess.
optional | reusable | boolean | Indicates if the postprocess can be reused multiple times on the same camera
---

##Extends
 [PostProcess](/classes/PostProcess)
##Members

###texelWidth : number





Width of the texture element




###texelHeight : number




##Methods
