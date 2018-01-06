
**Note:** The scene exporter panel is the primary toolkit interface. It must be opened or docked to enable the toolkit features during project development.


# Scene Exporter

![Scene Exporter](/img/exporters/unity/exporter.jpg)

## Global Export Options

* Project Bin Path        - Specifies the exported project binary path.

* Project Build Path      - Specifies the exported project build path.

* Project Scene Path      - Specifies the exported project scene path.

* Project Script Path     - Specifies the exported project script path.

* Project Index Page      - Specifies the exported project index page.


## Default Engine Options

![Engine Options](/img/exporters/unity/engine.jpg)

* Enable Engine Antialias - Enables or disables the engine anti alias option.

* Adapt To Device Ratio   - Sets the engine to adapt to device ratio.

* Enable Physics Engine   - Enables or disables the built-in physics engine.

* Default Physics Engine  - Specifies the default physics engine for the project.

* Default Image Encoding  - Enables or disables default image encoding options.

* Default Texture Format  - Specifies the default image encoding format.

* Default Texture Quality - Sets the default texture image quality.

* Camera Distance Factor  - Set the level of detail camera distance factor.

* Static Mesh Vertex Limit - Enables or disables the static mesh vertex limit (65000).


## Terrain Builder Options

![Terrain Options](/img/exporters/unity/terrain.jpg)

* Terrain Scale Factor    - Sets the shader texture scale factor for all terrain splatmaps.

* Terrain Atlas Size      - Sets the terrain splatmap texture atlas maximum size.

* Terrain Image Max       - Sets the maximum texture image splat for each tile in atlas. Default 0 for no maximum.

* Terrain Image Scaling   - Sets the mode when scaling tile images to point or bilinear.

* Terrain Mesh Colliders  - Sets the number of mesh colliders to use for the terrain surface. Set to mesh for no colliders.

* Terrain Lightmap Index  - Sets the lightmap index channel. Must be 0 or 1.

* Terrain Receive Shadows - Enable terrain surface to receive dynamic shadows.


## Collision System Options

![Collision Options](/img/exporters/unity/collision.jpg)

* Enable Collisions       - Enable built-in collision mesh system.

* Generate Colliders      - Auto generate collision meshes for each collider component.

* Collision Visibilty     - Sets the default collision mesh visibilty level for debugging.

* Show Debug Colliders    - Show all collider component collision meshes for debugging.

* Show Debug Sockets      - Show all socket component collision meshes for debugging.

* Socket Collider Size    - Sets the size of the socket component collision mesh for debugging.

* Proxy Worker Threads    - Enable seperate worker threads for built-in collision system.

* Default Collider Detail - Set the collision mesh goemetry detail level for all generated mesh colliders.


## Lightmap Baking Options

![Lightmap Options](/img/exporters/unity/lightmap.jpg)

* Enable Lightmaps        - Enable built-in shadow lightmap baking system.

* Bake Iterative Maps     - Enable built-in final lightmap gather and bake option.

* Coordinates Index       - Sets the default texture coordinate index for lightmaps.

* Shadow Map Factor       - Set default the shadow map factor for shadow map light generators.

* Use Material Instance   - Enables or disables material instances for shared material lightmaps.


## Project Compiler Options

![Compiler Options](/img/exporters/unity/compilers.jpg)

* Build Javascript Files  - Enables or disables the javascript build option.

* Build Typescript Files  - Enables or disables optional runtime script compiler.

* Typescript Compiler     - Specifies the default TypeScript compiler location.

* Node Runtime System     - Specifies the default Node runtime system location.

* Github Update Version   - Specifies the github library version for updates.


## Toolkit Exporter Options

![Export Options](/img/exporters/unity/export.jpg)

* Scene Packing Type      - Sets the default exported scene file packing type to json or binary.

* Host Preview Server     - Toggle internal and external web server hosting options for project.

* Default Server Port     - Specifies the default web server host port for previewing scene.

* Remote Server Path      - Specifies the remote server host address for external server option.

* Attach Unity Editor     - Enables the built-in toolkit play to build and preview features.

* Export Http Module      - Enables the web server http scene content management module.

* Show Debug Controls     - Enables or disables the debugging html user interface controls.

* Export Unity Metadata   - Enables or disables the default scene object metadata information.

* Minify Project Scripts  - Enables or disables the exported script minification option.

* Precompress Contents    - Enables or disables the exported precompressed content option.

* Debug Exporter Output   - Enables or disables pretty print json and compiler source maps.


## Scene Builder Options

![Builder Options](/img/exporters/unity/builder.jpg)

* Export Scene            - Exports scene only content with no scripts or previewing.

* Build And Preview       - Exports a full scene build with optional previewing.

* Rebuild Web Server      - Rebuilds the native web server project code.

* Launch Preview Window   - Launches the current preview build in browser.


# Output Window

![Output Window](/img/exporters/unity/output.jpg)

The output window traces the toolkit export progress for every build. Any exported camera, light or mesh detail information will appear in this window. The output window can be docked to the editor during game development for easy access.


# Update Libraries

![Update Libraries](/img/exporters/unity/update.jpg)

The update libraries option allows you to change your toolkit engine version. If you are on the bleeding edge, you can update to the current preview release version to try new features. You can select the stable release version to always fallback to the currently supported toolkit engine version.
