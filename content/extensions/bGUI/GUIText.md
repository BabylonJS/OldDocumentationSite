---
ID_PAGE: 25105
PG_TITLE: GUIText
---
##new [GUIText](http://doc.babylonjs.com/page.php?p=25105)(name, width, height, options, guiSystem) - extends [GUIPanel](http://doc.babylonjs.com/page.php?p=25107)

Creates a new GUIText. Extends from a GUIPanel with a dynamic texture.

####Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | The name of the panel
 | width | number | The width of the texture. If not power-of-two, will be updated to the nearest greater power-of-two number
 | height | number | The height of the texture. If not power-of-two, will be updated to the nearest greater power-of-two number
 | options | Object | Object containing all options linked to the text. Described below
 | guiSystem | [GUISystem](http://doc.babylonjs.com/page.php?p=25103) | The GUI system
---
The text is drawn on a canvas2D context, as described [here](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
The *options* parameter can be composed of following attributes : 

 | Name | Type | Description
---|---|---|---
| font | string | the text font. No default value.
| textBaseline | string | Baseline alignment setting. Possible values: top, hanging, middle, alphabetic, ideographic, bottom. Default value : middle
| textAlign | string | Text alignment setting. Possible values: start, end, left, right or center. Default value is start.
| direction | string | Directionality. Possible values: ltr, rtl, inherit.. Default value is inherit.
| fillStyle | string | Text color (hexadecimal value). Default value #ffffff
---


##Members
###update(string) → void
Update the text displayed.