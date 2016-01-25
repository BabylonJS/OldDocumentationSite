##new [GUIProgress](#)(id, options, guimanager, callback, append)
Creates a new GUIProgress

####Parameters
Name | Type | Description
---|---|---
**id** | string | The id and name element
**options** | json | Options of element
**guimanager** | GUIManager | The gui manager
**callback** | function | Trigger function by change (optional)
**append** | bool | is added to the &lt;body&gt;. =&gt; True by default (optional)
---

##Options

* **w**: width of progress bar (in pixel)
* **h**: height of progress bar (in pixel)
* **x**: position left of progress bar (in pixel)
* **y**: position top of progress bar (in pixel)
* **min**: min value progress bar =&gt; 0 by default (optional)
* **max**: max value progress bar =&gt; 100 by default (optional)
* **value**: Current value of the progress bar =&gt; 0 by default (optional)
* **border**: border of element =&gt; 0 by default (optional)
* **borderRadius**: radius border of element =&gt; 5 by default (optional)
* **background**: background progress bar  =&gt; "rgba(0, 0, 0, 0.2)" by default (optional)
* **backgroundValue**:  background value progress bar  =&gt; "#0f4fff" by default (optional)
* **orient**: orientation of the progress bar =&gt; "horizontal" by default (optional)
* **zIndex**: depth of the element (int) =&gt; 1 by default
* **className**: css class to customize the element =&gt; null by default

##Methods

###updateValue(int) → void
Set this progress value GUI element 

###getValue(int) → void
Get value progress GUI element

###setVisible(bool, fade) → void
Set this GUI element to visible or invisible

###isVisible() → void
Returns element if is visible or no

###dispose() → void
Dispose the GUIProgress, and delete element.
