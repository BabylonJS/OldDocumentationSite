##new [GUITextarea](#)(id, options, guimanager, append)
Creates a new GUITextarea

####Parameters
Name | Type | Description
---|---|---
**id** | string | The id and name element
**options** | json | Options of element
**guimanager** | GUIManager | The gui manager
**append** | bool | is added to the &lt;body&gt;. =&gt; True by default (optional)
---

##Options
* **w**: width of textarea (in pixel)
* **h**: height of textarea (in pixel)
* **x**: position left of textarea (in pixel)
* **y**: position top of textarea (in pixel)
* **value**: value of textarea (string)
* **background**: background of textarea (int) =&gt; "white" by default (optional)
* **color**: color the textarea (string) =&gt; "black" by default (optional)
* **zIndex**: depth of the element (int) =&gt; 1 by default
* **className**: css class to customize the element =&gt; null by default

##Methods

###setVisible(bool, fade) → void
Set this GUI element to visible or invisible

###isVisible() → void
Returns element if is visible or no

###dispose() → void
Dispose the GUITextarea, and delete element.
