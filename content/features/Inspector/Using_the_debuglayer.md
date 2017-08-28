# Using the Debug Layer

# What is the debug layer ?

Before babylon.js version 3.0, the debug layer was a very simple HTML interface helping the developer to retrieve some basic data about his project : mesh list, mesh names, logs, stats...

From version 3.0, this debug layer has been replaced by an complete inspector, that can be used to browser a lot of data:
* Scene attributes
* Statistics about performances
* Mesh list and attributes
* Material list
* ... and much more

![debug layer overview](/img/overviews/debuglayer/debuglayer.jpg)

Each feature is represented on a tab: 
* Mesh tab
* Scene tab
* Material tab
* ...

# How to use it ?

You can display the debug layer by calling:

```javascript
scene.debugLayer.show();
```

## Dynamically loaded
As the new debug layer contains a lot of new classes and css rules, **by default** this function will dynamically load an **external** script (located on babylon.js website), and thus need an internet connection.
By default, this url is : `http://www.babylonjs.com/babylon.inspector.bundle.js`

You can update this URL by setting the variable:

```javascript
BABYLON.DebugLayer.InspectorURL = 'http://myurl/babylon.inspector.bundle.js';
```
If the inspector script is not present locally, it is loaded dynamically.

## Locally loaded
You can also load the file `babylon.inspector.bundle.js` in your HTML file. In that case, no need of internet connection: Babylon will use the local file.

```html
<script src='babylon.inspector.bundle.js />
```

# Control the debug layer

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