# How visibility works

The Canvas is made of a graph of objects, each object (a Primitive) has one direct parent and a list of children ([more info](http://doc.babylonjs.com/overviews/Canvas2D_PosTransHierarchy)).

The visibility status of a given primitive is defined by its `levelVisible` property and **the one of all its parents** (direct and indirect).

If a given Primitive has its `levelVisible` set to `false` it and its children will be hidden (regardless of the `levelVisibile` property of the children, the hidden status takes precedence).

The properties:

 - `levelVisible` is get/set property to define the visibility at the primitive's level. Default being `true`.
 - `isVisible` is a get only property, it defines if the primitive is actually visible or not, based on the `levelVisible` of this primitive **and its parents**.

[Visibility demo](http://babylonjs-playground.com/#BDQQX#2)