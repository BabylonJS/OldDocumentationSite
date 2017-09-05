---
ID_PAGE: 24821
PG_TITLE: Installing  the Babylon Exporter
---
### Loading Babylon Exporter addon into Blender ###

**A. Getting the files**

1. Download and unzip the Babylon.js files from [https://github.com/BabylonJS/Babylon.js](https://github.com/BabylonJS/Babylon.js). You can unzip the files to any suitable drive or directory.
2. Browse through the unzipped files and directories to find the Blender exporter and the latest version of Babylon.js. In the case of the exporter you are looking for a file named : *io\_export\_babylon.py*
3. Note where the two files are and as a precaution make backup copies somewhere else on your hard drive. 

**B. Installing the exporter into Blender**
 
1. Open Blender and go to *File->User Preferences->Addons Tab*
2. At the bottom of the little panel that opens you will see an *Install Button* (1 in image below).
3. Click this button, then navigate to the hard drive and directory where you have stored the file *io\_export\_babylon.py* (either where you unzipped Babylon.js or where you made a backup copy. 
4. Once the installation is complete, click on the *Import/Export* button (2 in image below) and browse through the list of addons until you find the now installed Babylon exporter. Click on the check box (3 in image below) for the Babylon Exporter to activate the addon, then click on the *Save Settings*  button (4 in image below) in order not to have to repeat the activation process next time you open Blender.

![](https://dl.dropboxusercontent.com/u/70260871/blender/install1.png)

**C. Some things you should know**

1. If all you needed from the gitHub download was the latest versions of the exporter and Babylon.js, if you have made a backup copy, then you can delete the zip file and all the unzipped files.
2. Blender has made a copy of *io\_export\_babylon.py* in a directory on your C drive:
 
> *C:\Documents and Settings\UserName\Application Data\Blender Foundation\Blender\2.7x\scripts\addons*. 

Unfortunately this directory is usually hidden from view unless you set Windows Explorer so show hidden directories.

Using the above procedure is simpler and faster than trying to install the addon by dropping the right file in the right directory in Blender  - and less prone to mistakes.
