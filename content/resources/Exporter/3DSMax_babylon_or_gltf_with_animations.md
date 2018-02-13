

Steps to export any 3D model with animation to .babylon / .gltf format

1.Install 3ds Max 2017

2.Add Babylon plugin to 3ds MAX 2017 
        https://doc.babylonjs.com/resources/3dsmax
        
3.Open FBX / DAE or any other 3D model with animations in 3ds Max

4.Check / Apply texture to model

5.Go to “Time Configuration” window and change “Start Time:”, “End Time” under “Animation” section properly.

![3ds Time Configuration Window](/public/html/img/exporters/3DSMax/time_configuration_window.jpg)

6.Right click on the imported 3D model. Navigate “Babylon... > Babylon Properties” and open the “Babylon.js Object Properties” window as below.

![3ds Babylon Plugin Properties Window](/public/html/img/exporters/3DSMax/3ds_babylon_plugin_properties_window.jpg)

7.Update the “From:”, “To:” fields under “Animations” section with expected animation frames to be exported

8.Open “Babylon Exporter” window from menu “Babylon > Babylon File Exporter ...” as below.

![3ds Babylon Exporter](/public/html/img/exporters/3DSMax/babylon_exporter.jpg)

9.Select checkbox ”Copy textures to output” and export.

10.Check the exported model with BabylonJS sandbox http://sandbox.babylonjs.com/, animations and model will get exported properly.
