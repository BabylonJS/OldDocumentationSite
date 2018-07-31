---
PG_TITLE: How To Use Babylon 3D Charting
---

# How To Use Babylon 3D Charting

The Babylon.js 3D Charting library is an extension you can use to generate 3D interactive charts. It is part of the GUI module.

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
- `dataFilters`: Gets or sets the filters applied to data source

Filters can be used to get a specific subset of the data source:

```
chart.dataSource = data;
var filters= {};
filters["Year"] = 2014;

chart.dataFilters = filters;
```

Charts also offer a list of observables:
- `onElementCreatedObservable`: Observable raised when a new element is created
- `onPickedPointChangedObservable`: Observable raised when the point picked by the pointer events changed
- `onElementEnterObservable`: Observable raised when the pointer enters an element of the chart
- `onElementOutObservable`: Observable raised when the pointer leaves an element of the chart

### BarGraph

The BarGraph chart will represent data using a list of bars.

![BarGraph](/img/how_to/gui/barGraph.jpg)

You can set up a BarGraph with the following properties:
- `displayBackground`: Gets or sets a boolean indicating if the background must be displayed
- `displayLabels`: Gets or sets a boolean indicating if labels must be displayed
- `margin`: Gets or sets the margin (distance) between bars
- `barWidth`: Gets or sets the width of each bar
- `maxBarHeight`: Gets or sets the maximum height of a bar
- `labelDimension`: Gets or sets the dimension used for the labels
- `defaultMaterial`: Gets or sets the material used by bar meshes

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

## Further reading

* [How To Use Babylon GUI](Gui.md)
* [How To Use Babylon GUI3D](Gui3D.md)
