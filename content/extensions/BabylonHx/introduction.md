#BabylonHx
##Cross-Platform 3D Engine

![logo](/img/extensions/BabylonHx/babylonhx.png)

![logo](/img/extensions/BabylonHx/platforms.png)

###WHAT ?

BabylonHx is an ultra-portable lightweight 3D engine.
It is a port of the excellent BabylonJs 3D engine to the Haxe programming language.

It brings Babylon3D to all mainstream platforms in form of native app.

Being compatible with three Haxe libraries/frameworks for cross-platform development: Lime/OpenFl, NME and Snow,
it allows you to easily create 3D games and applications for almost every platform - all from a single code base.
Some of the platforms you can build games and applications for are: Windows, Mac, Linux, iOS, Android, BlackBerry, FirefoxOS, Tizen, HTML5...


BabylonHx is especially flexible when it comes to building for the web.There are three ways to build for web:
Use it in Lime/OpenFl or Snow project and build for JS/HTML5 just like for any other target supported by this libraries.
When targeting the web only, BabylonHx can work with no dependency on external libraries at all.
Simply create Haxe JS project and build it by passing "purejs" parameter to Haxe compiler.
Finally, you can compile BabylonHx engine to JS file and then use it from JavaScript in exactly the same way you would use the original BabylonJS engine. In fact, you can simply replace the original babylon.js file in existing BabylonJS javascript project with the babylon.js file compiled from BabylonHx and everything will work the same.


###WHY ?


Primary reason for doing this port was a practical need for a cross-platform 3D engine. A true 'code once run everywhere' solution - which I finaly got with this port.

Another reason was was curiosity. Not to see if it can be done but too see how far I can go with Haxe. It turns out that I can go as far as I wish.
With Haxe, there are no limits!

BabylonHx is WIP, its not 'feature complete' (compared to the original JS version) but its very close to that. It covers my current needs but some stuff is still missing (or needs to be fixed), especialy on C++ targets.

This project is also a sort of my 'give back' to Haxe from which I have benefited a lot in the last few years. Hopefully, it will help in bringing more attention to this amazing programming language and to the technologies built on top of it.



###HOW ?

See the [official website](http://babylonhx.gamestudiohx.com/)