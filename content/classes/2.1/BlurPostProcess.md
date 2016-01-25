---
ID_PAGE: 25281
PG_TITLE: BlurPostProcess
PG_VERSION: 2.1
TAGS:
    - PostProcess
---

Builtin postprocess applying a directional blur
##new [BlurPostProcess](/classes/BlurPostProcess)(name, direction, blurWidth, ratio, camera, samplingMode, engine, reusable)




The Postprocess constructor






####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The postprocess name
 | direction | [Vector2](/classes/Vector2) | The direction of the blur
 | blurWidth | number | The width of the blur
 | ratio | number | The size of the postprocess (0.5 means that your postprocess will have a width = canvas.width * 0.5 and a height = canvas.height * 0.5)
 | camera | [Camera](/classes/Camera) | The scene camera linked to this post process
optional | samplingMode | number | [Texture](/classes/Texture).NEAREST_SAMPLINGMODE, [Texture](/classes/Texture).BILINEAR_SAMPLINGMODE or [Texture](/classes/Texture).TRILINEAR_SAMPLINGMODE
optional | engine | [Engine](/classes/Engine) | The engine to attach the postprocess.
optional | reusable | boolean | Indicates if the postprocess can be reused multiple times on the same camera
---

##Extends
 [PostProcess](/classes/PostProcess)
##Members

###direction : [Vector2](/classes/Vector2)





The direction of the blur




###blurWidth : number




##Methods
