# Z-Order overview

Each Primitive has a Z Position, which is determined automatically by the Canvas2D Engine and can be overridden if needed.

The actual Z Position can be retrieve by calling the `getActualZOffset` method which return a number between 0 and 1.

- 1 means below everything.
- 0 means on the top of everything.

## Default behavior

A primitive will be drawn on the top of its parent, its previous sibling and their parents.

Which means if you have the following hierarchy of primitives:

- Canvas
    - PrimA
       - PrimA-Child1
       - PrimA-Child2
       - PrimA-Child3
    - PrimB
       - PrimB-Child1
       - PrimB-Child2
       - PrimB-Child3
    - PrimC
       - PrimC-Child1
            - PrimC-Child1-SubChild1
       - PrimA-Child2

It means:

 - PrimB will be over the Canvas, PrimA and PrimA's children (PrimA-Child1/2/3).
 - PrimB-Child1 will be over PrimB (and also over what PrimB is over).
 - PrimB-Child2 will be over PrimB-Child1 (and also over what PrimB-Child1 is over).
 - And so on, you get the idea.

### Changing the order between siblings
For example if you need to move PrimB-Child1 over the top of PrimB-Child2 & PrimB-Child3 all you have to do is call the Prim2DBase.moveChild method like this:
```
PrimB.moveChild(PrimB-Child1, PrimB-Child3);
```
This call will reorder the list of children to put Child1 after Child3, ensuring a rendering on the top of both Child 2 and 3.

## Overriding the Z-Order

The `zOrder` property can be set to override the default value computed using the place of the Primitive in the hierarchy. When set the `getActualZOffset` method will return its value.
