---
PG_TITLE: The Debug Layer
---

# How to Display and Use The Debug Layer

## Calling

You can display the debug layer by calling:

```javascript
scene.debugLayer.show();
```

## Loading

**Provided** your project is running on a **server** the debug layer is automatically loaded from the BabylonJS server **when** it is called as above. 

By default, this url is : `https://preview.babylonjs.com/inspector/babylon.inspector.bundle.js`

You can update this URL by setting the variable:

```javascript
BABYLON.DebugLayer.InspectorURL = 'http://myurl/babylon.inspector.bundle.js';
```

To use the debug layer when your project is stored and run **locally** with an **internet connection** then you need to load the debug layer directly

```html
<script src=https://preview.babylonjs.com/inspector/babylon.inspector.bundle.js`></script>
```

To use the debug layer **locally** with no internet connection you will need to obtain a copy of the file from

https://github.com/BabylonJS/Babylon.js/blob/master/dist/inspector/babylon.inspector.bundle.js


## Control

A `config` object can be given to the `show` method in order to control the following parameters of the debug layer : 
* `popup` : boolean - Should the debug layer open by default in popup mode ? False by default
* `initialTab` : number - The first tab displayed by default - 0 by default (corresponding to the Scene tab)
* `parentElement` : HTMLElement - The HTML element where the debug layer should be created - nul by default (will be created along the canvas)
* `newColors` : An object containing new CSS colors for the inspector. This object should contain the property `backgroundColor`, `backgroundColorLighter`,`backgroundColorLighter2`,`backgroundColorLighter3`, `color`,`colorBot`,`colorTop`, where color is the text color, color top and bottom are two colors used to display data (properties, mouse hover, tooltip...)

Example:
```javascript
scene.debugLayer.show({
    popup:true, 
    initialTab : 2, 
    parentElement:document.getElementById('#mydiv'),
    newColors: {
        backgroundColor: '#eee',
        backgroundColorLighter: '#fff',
        backgroundColorLighter2: '#fff',
        backgroundColorLighter3: '#fff',
        color: '#333',
        colorTop:'red', 
        colorBottom:'blue'
    }
});
```

# Further Reading

[The Debug Layer Features](/features/playground_debuglayer)  
[How To Customize the Debug Layer](/How_To/customize_debug_layer)  