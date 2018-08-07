---
PG_TITLE: How To Use Babylon 3D Charting foundation
---

# How To Use Babylon 3D Charting foundation

The Babylon.js 3D charting library is an extension you can use to generate 3D interactive charts. It is part of the GUI module. You can see it as a foundation for 3D charts that you could built on top.

The latest version can be found here: https://github.com/BabylonJS/Babylon.js/tree/master/dist/preview%20release/gui.

And the source code is available on the main Babylon.js repo: https://github.com/BabylonJS/Babylon.js/tree/master/gui/src/3D/charting.

## Data Series

The `DataSeries` object is used to define the data source for charts. It is defined by the following properties:

- `label`: Gets or sets the label of the series (ie. its name)
- `color`: Defines the main color used to represent this data. Charts will use it to render
- `dimensions`: Defines an array of strings. One per dimension which are used to filter data
- `data`: Gets or sets the list of values (data to display)

The data array must containing a list of objects with at least a `value` property alongside a property for each dimension.

Here is an example of how to create a DataSeries:

```
var series = new DataSeries();
series.label = "Product #1";
series.color = new Color3(1.0, 0, 0);

series.dimensions = ["Year", "Country"];

series.data = [
    {
        "Year": 2014,
        "Country": "France",
        "value": 10
    }, 
    {
        "Year": 2014,
        "Country": "USA",
        "value": 200
    }, 
    {
        "Year": 2014,
        "Country": "India",
        "value": 400
    },
    {
        "Year": 2014,
        "Country": "UK",
        "value": 180
    },
    {
        "Year": 2014,
        "Country": "Germany",
        "value": 400
    }, 
    {
        "Year": 2014,
        "Country": "Australia",
        "value": 24
    }, 
    {
        "Year": 2014,
        "Country": "China",
        "value": 540
    }, 
    {
        "Year": 2014,
        "Country": "Japan",
        "value": 150
    },
    {
        "Year": 2015,
        "Country": "France",
        "value": 12
    }, 
    {
        "Year": 2015,
        "Country": "USA",
        "value": 120
    }, 
    {
        "Year": 2015,
        "Country": "India",
        "value": 480
    }, 
    {
        "Year": 2015,
        "Country": "UK",
        "value": 10
    },
    {
        "Year": 2015,
        "Country": "Germany",
        "value": 80
    }, 
    {
        "Year": 2015,
        "Country": "Australia",
        "value": 230
    }, 
    {
        "Year": 2015,
        "Country": "China",
        "value": 490
    }, 
    {
        "Year": 2015,
        "Country": "Japan",
        "value": 120
    }
];
```

This DataSeries can also be retrieved directly with `BABYLON.GUI.DataSeries.CreateFakeData();`.

## Spatial data series

A spatial data series is like a regular data series except that you have two additional properties per element: `latitude` and `longitutde`:

```
series.data = [
    {
        "Year": 2014,
        "Country": "France",
        "value": 10,
        "latitude": 46.63728,
        "longitude": 2.338262
    }, 
    {
        "Year": 2014,
        "Country": "USA",
        "value": 200,
        "latitude": 39.83333,
        "longitude": -98.58334
    }
];
```

A testing purpose spatial data series can be retrieved with `BABYLON.GUI.DataSeries.CreateFakeSpatialData();`.
            

## Charts

Charts are classes that use a DataSeries to build a set of meshes to represent the given data.

All charts offer the following properties:

- `name`: Gets or sets the name of the chart
- `rootNode`: Gets the root node (TransformNode) associated with the chart
- `position`: Gets or sets the position of the entire chart
- `rotation`: Gets or sets the rotation of the entire chart 
- `scaling`: Gets or sets the scaling of the entire chart
- `dataSource`: Defines the DataSeries to use as source
- `blockRefresh`: Gets or sets a value indicating if refresh function should be executed (useful when multiple changes will happen and you want to run refresh only at the end)
- `displayLabels`: Gets or sets a boolean indicating if labels must be displayed
- `elementWidth`: Gets or sets the width of each element
- `labelDimension`: Gets or sets the dimension (from the data source) used for the labels
- `defaultMaterial`: Gets or sets the material used by element meshes
- `glowHover`: Gets or sets a boolean indicating if glow should be used to highlight element hovering
- `dataFilters`: Gets or sets the filters applied to data source

Filters can be used to get a specific subset of the data source:

```
chart.dataSource = data;
var filters= {};
filters["Year"] = 2014;

chart.dataFilters = filters;
```

Charts also offer a list of observables:
- `onRefreshObservable`: Observable raised when a refresh was done
- `onElementCreatedObservable`: Observable raised when a new element is created
- `onPickedPointChangedObservable`: Observable raised when the point picked by the pointer events changed
- `onElementEnterObservable`: Observable raised when the pointer enters an element of the chart
- `onElementOutObservable`: Observable raised when the pointer leaves an element of the chart

## Custom charts

To create your own chart, you have to inherit from the BABYLON.GUI.Chart class and then at least provide the following functions:

- `refresh()`: This is the main function used to create the element meshes ([see examples below](#examples))
- `_clean()`: This could be required to clean your custom data

## Examples
Here are some implementation examples that you can use to learn how to create your own chart controls.

### BarGraph

The BarGraph chart will represent data using a list of bars.

![BarGraph](/img/how_to/gui/barGraph.jpg)

Code can be found here: https://github.com/BabylonJS/Babylon.js/blob/master/gui/src/3D/charting/barGraph.ts

You can set up a BarGraph with the following properties:
- `displayBackground`: Gets or sets a boolean indicating if the background must be displayed
- `margin`: Gets or sets the margin (distance) between bars
- `maxBarHeight`: Gets or sets the maximum height of a bar

To create and use a BarGraph, you can run this code:

```
var data = BABYLON.GUI.DataSeries.CreateFakeData();
var barGraph = new BABYLON.GUI.BarGraph();

barGraph.dataSource = data;
var filters= {};
filters["Year"] = 2014;

barGraph.dataFilters = filters;
barGraph.position.y = 0.5;
barGraph.labelDimension = "Country";
```

You can find an example of the BarGraph class here: https://www.babylonjs-playground.com/#NUMA1E

### MapGraph

The MapGraph chart will represent spatial data on a [mercator](https://en.wikipedia.org/wiki/Mercator_projection) map.

![MapGraph](/img/how_to/gui/mapGraph.jpg)

Code can be found here: https://github.com/BabylonJS/Babylon.js/blob/master/gui/src/3D/charting/mapGraph.ts

You can set up a MapGraph with the following properties:
- `xOffset`: Gets or sets the offset (in world unit) on X axis to apply to all elements
- `yOffset`: Gets or sets the offset (in world unit) on Y axis to apply to all elements
- `cylinderTesselation`: Gets or sets the tesselation used to build the cylinders
- `maxCylinderHeight`: Gets or sets the maximum height of a cylinder
- `worldMapSize`: Gets or sets the size of the world map (this will define the width of the supporting plane)
- `worldMapMaterial`: Gets the material used to render the world map
- `worldMapUrl`: Sets the texture url to use for the world map

To create and use a MapGraph, you can run this code:

```
var data = BABYLON.GUI.DataSeries.CreateFakeSpatialData();
var mapGraph = new BABYLON.GUI.MapGraph("WorldMap", "/textures/mercator.jpg");

mapGraph.dataSource = data;

var filters= {};
filters["Year"] = 2014;

mapGraph.dataFilters = filters;    
mapGraph.labelDimension = "Country";
```

You can find an example of the MapGraph class here: https://www.babylonjs-playground.com/#72L6VG

## Controlling labels

Each chart will create labels for title and value (when hovering). You can control the look and feel of the labels with the following properties:

- `updateHoverLabel(meshLabel)`: User defined callback used to apply specific setup to hover labels (defined by the meshLabel parameter)
- `labelCreationFunction(label, width, includeBackground)`: User defined callback used to create labels
  - `label` defines the text of the label
  - `width` defines the expected width (height is supposed to be 1)
  - `includeBackground` defines if a background rectangle must be added (default is true)
  
You can find a demo of custom labels here: https://www.babylonjs-playground.com/#72L6VG#1

## Further reading

* [How To Use Babylon GUI](http://doc.babylonjs.com/how_to/gui)
* [How To Use Babylon GUI3D](http://doc.babylonjs.com/how_to/gui3d)
