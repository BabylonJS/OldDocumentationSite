---
ID_PAGE: 24441
PG_TITLE: Cheetah3D
---
## Cheetah2Babylon

[Cheetah 3D](http://www.cheetah3d.com/) exporter for [Babylon.JS](http://babylonjs.com/) .babylon scene files. Currently supports the following :

- mesh export with functional transform, naming and parenting
- multicamera export (only perspective, no support for orthogonal right now)
- light export with all babylon type managed :
&nbsp;&nbsp; &nbsp;- Cheetah3D spot light is a babylon spot (duh)
&nbsp;&nbsp; &nbsp;- Cheetah3D distant light is a babylon directional light
&nbsp;&nbsp; &nbsp;- Cheetah3D ambiant light is a babylon hemispheric light
&nbsp;&nbsp; &nbsp;- every other type is a babylon point light
&nbsp;&nbsp; &nbsp;- supports diffuse and specular color
&nbsp;&nbsp; &nbsp;- rotations must be on the -Y axis

- materials export:
&nbsp;&nbsp; &nbsp;- supports diffuse, emissive and specular color (plus specular power as "shininess")
&nbsp;&nbsp; &nbsp;- supports only diffuse textures, Cheetah3D api is realy sparse on that

More info on [my blog](http://cubeslam.net/).

### Install

Put js script in this folder :

/Users/YOUR_USER/Library/Application Support/Cheetah3D/Scripts/Macro/

### Usage

Just load your scene and go to Tools/Scripts/Macro/Babylon file export. Choose a destination, and load your scene inside Babylon.JS!

### License

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

0. You just DO WHAT THE FUCK YOU WANT TO.