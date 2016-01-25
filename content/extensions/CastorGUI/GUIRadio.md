##new [GUIRadio](#)(id, options, guimanager, callback, append)
Creates a new GUIRadio

####Parameters
Name | Type | Description
---|---|---
**id** | string | The id and name element
**options** | json | Options of element
**guimanager** | GUIManager | The gui manager
**callback** | function | Trigger function by click (optional)
**append** | bool | is added to the &lt;body&gt;. =&gt; True by default (optional)
---

##Options

* **x**: position left of radio button (in pixel)
* **y**: position top of radio button (in pixel)
* **size**: size of radio button (float) =&gt; "1.0" by default
* **zIndex**: depth of the element (int) =&gt; 1 by default
* **className**: css class to customize the element =&gt; null by default

##Methods

###setVisible(bool, fade) → void
Set this GUI element to visible or invisible

###isVisible() → void
Returns element if is visible or no

###dispose() → void
Dispose the GUIRadio, and delete element.
