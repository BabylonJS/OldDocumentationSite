##new [GUIWindow](#)(id, imageUrl, options, guimanager)
Creates a new GUIWindow

####Parameters
Name | Type | Description
---|---|---
**id** | string | The id and name element
**imageUrl** | string | The image with path
**options** | json | Options of element
**guimanager** | GUIManager | The gui manager
---

##Options

* **w**: width of image (in pixel)
* **h**: height of image (in pixel)
* **x**: position left of image (in pixel)
* **y**: position top of image (in pixel)
* **backgroundColor**: color background of window (string) =&gt; "rgba(0, 0, 0, 0.5)" by default
* **backgroundImage**: image background of window (string) =&gt; "null" by default
* **colorContent**: color background of content window (string) =&gt; "rgba(0.5, 0.5, 0.5, 0.1)" by default
* **imageContent**: image background of content window (string) =&gt; "null" by default
* **borderWindow**: border of window (string) =&gt; "2px solid black" by default 
* **borderContent**: border of window (string) =&gt; "0" by default
* **borderTitle**: border of window (string) =&gt; "1px solid black" by default
* **radiusWindow**: radius border of dialog (int)  =&gt; 8 by default
* **colorTitle**: color background title window (string) =&gt; "rgba(0, 0, 0, 0.4)" by default
* **imageTitle**: image background title window (string) =&gt; "null" by default
* **heightTitle**: height the title element (int) =&gt; 30 by default
* **titleTextAlign**: allignment of the title text (string) =&gt; "center" by default
* **titleColor**: color of the title text (string) =&gt; "white" by default
* **textTitle**: Text of title (string)  =&gt; true by default
* **draggable**: window draggable (bool)
* **zIndex**: depth of the element (int) =&gt; 1 by default
* **className**: css class to customize the element =&gt; null by default

##Methods

###add(element) → void
add element in the GUIWindow

###setVisible(bool, fade) → void
Set this GUI element to visible or invisible (false by default)

###isVisible() → void
Returns element if is visible or no

###dispose() → void
Dispose the GUIWindow, and delete element.
