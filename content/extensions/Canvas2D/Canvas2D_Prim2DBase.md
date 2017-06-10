# Base Primitive type overview

You won't deal with this type directly, but every class in the Canvas2D Feature extends this type (at the exception of Brushes), so it's good to know about the features it offers.

As these feature are pretty important, most of them have dedicated documentation page.

### Identifier
When creating a primitive you can set the `id` field in the `settings` object, the id is a string and will be stored in the primitive, so it can be omitted at creation. From a given primitive you can look for a child primitive from its id using the `findById` method.

The default value is null, so there's no value set.
The id is considered to be immutable, you can only set it at creation time and can't change it afterward.

### Object graph, hierarchy

You will find more info on the [position, transformation and hierarchy](http://doc.babylonjs.com/overviews/Canvas2D_PosTransHierarchy) page.

To summarize, a Base Primitive have the following properties:

- `owner`, which points to the owner Canvas.
- `parent` which points to the direct parent that owns it.
- `children` an array of the direct children Primitives.
- `hierarchyDepth` a number given the depth in the hierarchy tree of the Primitive. The Canvas being 0, its direct children being 1, their children 2, and so on.
- `zOrder`, enables to override the default Z behavior. See this [page](http://doc.babylonjs.com/overviews/Canvas2D_ZOrder) for more information.

### Transformation properties

You will find more info on the [position, transformation and hierarchy](http://doc.babylonjs.com/overviews/Canvas2D_PosTransHierarchy) page.

To summarize, a Base Primitive have the following properties:

 - `position`, a 2D Vector which give the position of the primitive bottom/left corner, relative from its parent's bottom/left corner.
 - `x`, which is a shortcut to `position.x`, use it instead of changing the `x` of `position` in order to trigger value change.
 - `y`, which is a shortcut to `position.y`, same remark as above.
 - `rotation`, a angle in radian of the primitive's rotation around the Z axis.
 - `scale`, a number which represent the uniform scale to apply on the primitive.
 - `actuaPosition` the 'final' position, after layout and positioning engines were processed. Will be equal to `position` if no layout/positioning are used.
 - `actualX`, which is a shortcut to `actualPosition.x`. use it instead of changing the `x` of `actualPostition` in order to trigger value change.
 - `actualY`, which is a shortcut to `actualPosition.y`, same remark as above.
 - `globalTransform`, `invGlobalTransform` and `localTransform` are all Matrix typed properties.

Rotation and Scaling properties behave in regard of the origin property set for the Primitive. See the [origin page](http://doc.babylonjs.com/overviews/Canvas2D_Origin) for more information.

### Visibility

More information can be found in the [Visibility](http://doc.babylonjs.com/overviews/Canvas2D_Visibility) page.

To summarize:

 - `levelVisible` is get/set property to define the visibility at the primitive's level. Default being `true`, but it won't necessarily means the primitive is visible, if one of its parent is hidden the primitive will be hidden.
 - `isVisible` is a get only property, it defines if the primitive is actually visible or not, based on the `levelVisible` of this primitive **and its parents**.

### Layout and Positioning

 More information can be found in the [dedicated page](http://doc.babylonjs.com/overviews/Canvas2D_Prim_Positioning)

### ActualSize, BoundingInfo properties.

The `ActualSize` property of type `Size` gives the actual bounding size of the property formed by an axis-aligned bounding rectangle. 

the `levelBoundingInfo` property give as its name suggest the bounding information of the primitive **without** considering its children, it's about the primitive itself, that's all.

The `boundingInfo` property gives bounding information of the primitive **and its children**.
The bounding info is defined by:

 - A center position
 - A radius, to define the bounding circle
 - And extent, to define an Axis-Aligned Bounding Box (AABB)

### Interaction properties

You will find more information in the [dedicated page](http://doc.babylonjs.com/overviews/Canvas2D_Interaction).

To summarize:

 - `isPickable`, defines if the primitive can be picked/selected or not.
 - `pointerEventObservable` is the main [Observable](https://doc.babylonjs.com/overviews/Observables) to subscribe for all interaction related events.

### Listen to changes

You can subscribe to the `propertyChanged` [observable](https://doc.babylonjs.com/overviews/Observables) to be notified each time a property (defined with a @xxxLevelProperty decorator) has its value changing.