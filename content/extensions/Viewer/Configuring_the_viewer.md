---
PG_TITLE: Configuring the viewer
---

# Configuring the viewer

(Almost) every aspect of the viewer can be configured. The configuration is expressed using a TypeScript interface that is a JSON-like object describing the data that can be provided.

## The default configuration

The viewer currently defines two types of configurations:

1. The default configuration (`default`), including HTML templates for a navigation bar, layouts for help and error pages, a skybox, ground, shadows, and more. It is defined at [https://github.com/BabylonJS/Babylon.js/blob/master/Viewer/src/configuration/types/default.ts](https://github.com/BabylonJS/Babylon.js/blob/master/Viewer/src/configuration/types/default.ts)
2. The minimal configuration (`minimal`), with only the basics needed to show a model. It is defined at [https://github.com/BabylonJS/Babylon.js/blob/master/Viewer/src/configuration/types/minimal.ts](https://github.com/BabylonJS/Babylon.js/blob/master/Viewer/src/configuration/types/minimal.ts)

The default configuration will be loaded per default, unless other configuration type will be forced on the viewer by the developer. To force a different type of configuration, add the DOM attribute `extends` to the HTML element. For example:

```html
<babylon extends="minimal" model="https://playground.babylonjs.com/scenes/Rabbit.babylon"></babylon>
```

## Extending and changing the default configurations

The default configuration types can be overwritten using many methods described below. As the configuration object never contains Array, any attribute in it can be references using a string, and can therefore be overwritten. 

The order in which the configuration is loaded is :

1. The DOM configuration
1. The `extends` configuration (for example `default` or `minimal`). This is being merged with the DOM configuration, giving the DOM configuration priority
1. (optional) The extra configuration file provided using the `configuration` keyword.

To explain this further, let's look at a simple example:

```html
<babylon extends="minimal" scene.debug="true" engine.antialiasing="false" model="https://playground.babylonjs.com/scenes/Rabbit.babylon" configuration="http://example.com/viewerConfig.json"></babylon>
```

At first, the configuration of the DOM element will be read (represented as JSON for better understanding):

```javascript
{
    extends: "minimal",
    scene: {
        debug: true
    },
    engine: {
        antialiasing: false
    },
    model: "https://playground.babylonjs.com/scenes/Rabbit.babylon",
    configuration="http://example.com/viewerConfig.json"
}
```

Next, the `minimal`configuration will be loaded and appended to the existing configuration:

```javascript
{
    extends: "minimal",
    scene: {
        debug: true
    },
    engine: {
        antialiasing: false 
    },
    model: "https://playground.babylonjs.com/scenes/Rabbit.babylon",
    configuration="http://example.com/viewerConfig.json",
    version: "0.1",
    templates: {
        main: {
            html: "<div>.........</div>"
        },
        loadingScreen: {
            html: "<div>.........</div>",
            params: {
                backgroundColor: "#000000",
                loadingImage: "data:image/png;base64....."
            }
        },
        viewer: {
            html: "<div>.........</div>",
        },
        overlay: {
            html: "<div>.........</div>",
            params: {
                closeImage: "data:image/png;base64.....",
                closeText: 'Close'
            }
        },
        error: {
            html: "<div>.........</div>"
        }

    },
}
```

Notice that thou the minimal configuration define antialiasing to be `true`, the configuration provided by the user will be used. It is only extending and not overwriting.

Next, the configuration object will be inspected. If it contains a configuration URL, it will be loaded. In our case, the (non-existing) <http://example.com/viewerConfig.json> will be downloaded and appended to the configuration already provided. Notice that this configuration object will overwrite definitions in the current configuration object. So if the JSON file looks like this:

```javascript
{
    scene: {
        debug: false
    }
}
```

The `scene.debug` in the configuration object that will be provided to the viewer will have debug set to false.

### Configuring using the DOM element

The viewer will read each attribute on the `<babylon>` DOM element(s) provided and will create a JSON element out of them.
So, if the DOM element looks like this:

```html
<babylon scene.debug="true" camera.behaviors.auto-rotate="0" model.url="https://playground.babylonjs.com/scenes/Rabbit.babylon" configuration="http://example.com/viewerConfig.json"></babylon>
```

The configuration will look like this:

```javascript
{
    scene: {
        debug: true
    },
    camera: {
        behaviors: {
            autoRotate: 0
        }
    },
    model: {
        url: "https://playground.babylonjs.com/scenes/Rabbit.babylon"
    }
}
```

A few things to notice:

#### camel-case vs. kebab case

DOM attributes are usually written in kebab-case ('looks-like-this`), mainly since some browsers convert attributes to lower-case. Those attributes will be automatically converted to camelCase ('looksLikeThis').

#### Value conversions

Attribute-values are converted to their corresponding types in JSON. If the value can be converted to a number ("1" for example), it will be converted to a number. If the value is "true" or "false", it will be converted to a boolean.

#### Nested attributes

Nested attributes can be separated using ".". So `scene.debug="true"` will nest `debug` into `scene` and set its value to true.

#### Unidirectional definition

The DOM is read once, and is not being continuously processed, Changing a value of an attribute after the viewer was initialized will nto influence the viewer.
*this behavior will be changed in future versions of the viewer.*

### Configuring using nested DOM elements

Another way of using the DOM to configure the viewer is to use nester DOM elements inside the main element. A basic example:

```html
<babylon extends="minimal">
    <model url="https://ugcorigin.s-microsoft.com/12/2e77b8e3-0000-0000-7a48-6505db2f0ef9/952/1508427934473.gltf">
    </model>
    <camera>
        <behaviors>
            <auto-rotate type="0"></auto-rotate>
        </behaviors>
    </camera>
    <lights>
        <light1 type="1" shadow-enabled="true">
        </light1>
    </lights>
</babylon>
```

This is more human-readable and is easier for web-developers to understand. This example is technically the same as:

```html
<babylon extends="minimal" model.url="https://ugcorigin.s-microsoft.com/12/2e77b8e3-0000-0000-7a48-6505db2f0ef9/952/1508427934473.gltf" camera.behaviors.auto-rotate.type="0" lights.light1.type="2" lights.light1.shadow-enabled="true"></babylon>
```

A few things to consider:

#### Extending and using the DOM element configuration

Everything written regarding the DOM element configuration is extended here. The values are converted, kebab-case should be used, and nested attributes will still be correctly read. For example, this is also a valid configuration (notice the `<camera>` HTML tag):

```html
<babylon extends="minimal">
    <model url="https://ugcorigin.s-microsoft.com/12/2e77b8e3-0000-0000-7a48-6505db2f0ef9/952/1508427934473.gltf">
    </model>
    <camera behaviors.auto-rotate.type="0">
    </camera>
    <lights>
        <light1 type="1" shadow-enabled="true">
        </light1>
    </lights>
</babylon>
```

And it is the same as the example above.

### Configuring using external JSON

As previously explained, the viewer configuration has a `configurarion` member, that can contain an external JSON file that will be loaded and merged with the selected configuration.

If the following is defined:

```html
<babylon scene.debug="true" camera.behaviors.auto-rotate="0" model.url="https://playground.babylonjs.com/scenes/Rabbit.babylon" configuration="http://example.com/viewerConfig.json"></babylon>
```

the file <http://example.com/viewerConfig.json> will be loaded into the configuration object. This is a great way of creating a general / global configuration  for a website, while providing the details model data using HTML.

### Configuring using JavaScript

Further discussed in `Advanced Usage`, JavaScript can be used to initialize a viewer. When initializing a viewer using JavaScript, you can provide the initial configuration that will be used with this viewer:

```javascript

let domElement = document.getElementById('my-amazing-element');

let viewer = new BabylonViewer.DefaultViewer(domElement, {
    scene: {
        debug: true
    },
    camera: {
        behaviors: {
            autoRotate: 0
        }
    },
    model: {
        url: "https://playground.babylonjs.com/scenes/Rabbit.babylon"
    }
});

```

In this case, the HTML attributes will be ignored(!) and the DOM element will simply serve as the container of the Babylon scene.

## The full configuration interface

The configuration interfaces pasted are from version `0.2.0` of the viewer. To see the latest options see [https://github.com/BabylonJS/Babylon.js/blob/master/Viewer/src/configuration/configuration.ts](https://github.com/BabylonJS/Babylon.js/blob/master/Viewer/src/configuration/configuration.ts)

```javascript
interface ViewerConfiguration {

    version?: string; // configuration version
    extends?: string; // is this configuration extending an existing configuration?

    pageUrl?: string; // will be used for sharing and other fun stuff. This is the page showing the model (not the model's url!)

    configuration?: string | {
        url: string;
        mapper?: string; // json (default), html, yaml, xml, etc'. if not provided, file extension will be used.
    };

    // names of functions in the window context.
    observers?: {
        onEngineInit?: string;
        onSceneInit?: string;
        onModelLoaded?: string;
    }

    canvasElement?: string; // if there is a need to override the standard implementation - ID of HTMLCanvasElement

    model?: {
        url?: string;
        loader?: string; // obj, gltf?
        position?: { x: number, y: number, z: number };
        rotation?: { x: number, y: number, z: number, w: number };
        scaling?: { x: number, y: number, z: number };
        parentObjectIndex?: number; // the index of the parent object of the model in the loaded meshes array.

        title: string;
        subtitle?: string;
        thumbnail?: string; // URL or data-url

        [propName: string]: any; // further configuration values
    } | string;

    scene?: {
        debug?: boolean;
        autoRotate?: boolean;
        rotationSpeed?: number;
        defaultCamera?: boolean;
        defaultLight?: boolean;
        clearColor?: { r: number, g: number, b: number, a: number };
        imageProcessingConfiguration?: IImageProcessingConfiguration;
    };

    camera?: {
        position?: { x: number, y: number, z: number };
        rotation?: { x: number, y: number, z: number, w: number };
        fov?: number;
        fovMode?: number;
        minZ?: number;
        maxZ?: number;
        inertia?: number;
        behaviors?: {
            [name: string]: number | {
                type: number;
                [propName: string]: any;
            };
        };

        [propName: string]: any;
    };

    skybox?: {
        cubeTexture: {
            noMipMap?: boolean;
            gammaSpace?: boolean;
            url: string | Array<string>;
        };
        pbr?: boolean;
        scale?: number;
        blur?: number;
        material?: {
            imageProcessingConfiguration?: IImageProcessingConfiguration;
        };
        infiniteDIstance?: boolean;
    };

    ground?: boolean | {
        size?: number;
        receiveShadows?: boolean;
        shadowOnly?: boolean;
        material?: {
            [propName: string]: any;
        }
    };

    lights?: {
        [name: string]: {
            type: number;
            name?: string;
            disabled?: boolean;
            position?: { x: number, y: number, z: number };
            target?: { x: number, y: number, z: number };
            direction?: { x: number, y: number, z: number };
            diffuse?: { r: number, g: number, b: number };
            specular?: { r: number, g: number, b: number };
            intensity?: number;
            radius?: number;
            shadownEnabled?: boolean; // only on specific lights!
            shadowConfig?: {
                useBlurExponentialShadowMap?: boolean;
                useKernelBlur?: boolean;
                blurKernel?: number;
                blurScale?: number;
                [propName: string]: any;
            }
            [propName: string]: any;

            // no behaviors for light at the moment, but allowing configuration for future reference.
            behaviors?: {
                [name: string]: number | {
                    type: number;
                    [propName: string]: any;
                };
            };
        }
    },
    // engine configuration. optional!
    engine?: {
        antialiasing?: boolean;
    },
    //templateStructure?: ITemplateStructure,
    templates?: {
        main: ITemplateConfiguration,
        [key: string]: ITemplateConfiguration
    };
}

interface IImageProcessingConfiguration {
    colorGradingEnabled?: boolean;
    colorCurvesEnabled?: boolean;
    colorCurves?: {
        globalHue?: number;
        globalDensity?: number;
        globalSaturation?: number;
        globalExposure?: number;
        highlightsHue?: number;
        highlightsDensity?: number;
        highlightsSaturation?: number;
        highlightsExposure?: number;
        midtonesHue?: number;
        midtonesDensity?: number;
        midtonesSaturation?: number;
        midtonesExposure?: number;
        shadowsHue?: number;
        shadowsDensity?: number;
        shadowsSaturation?: number;
        shadowsExposure?: number;
    };
    colorGradingWithGreenDepth?: boolean;
    colorGradingBGR?: boolean;
    exposure?: number;
    toneMappingEnabled?: boolean;
    contrast?: number;
    vignetteEnabled?: boolean;
    vignetteStretch?: number;
    vignetteCentreX?: number;
    vignetteCentreY?: number;
    vignetteWeight?: number;
    vignetteColor?: { r: number, g: number, b: number, a?: number };
    vignetteCameraFov?: number;
    vignetteBlendMode?: number;
    vignetteM?: boolean;
    applyByPostProcess?: boolean;

}
```
