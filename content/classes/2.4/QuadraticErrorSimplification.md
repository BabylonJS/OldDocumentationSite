---
ID_PAGE: 25268
PG_TITLE: QuadraticErrorSimplification
PG_VERSION: 2.1
---
## Description

class [QuadraticErrorSimplification](/classes/2.4/QuadraticErrorSimplification)

An implementation of the Quadratic Error simplification algorithm.

Original paper : http://www1.cs.columbia.edu/~cs4162/html05s/garland97.pdf

Ported mostly from QSlim and http://voxels.blogspot.de/2014/05/quadric-mesh-simplification-with-source.html to babylon JS

@author RaananW

## Constructor

## new [QuadraticErrorSimplification](/classes/2.4/QuadraticErrorSimplification)(_mesh)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | _mesh | [Mesh](/classes/2.4/Mesh) |    

## Members

### syncIterations : number



### aggressiveness : number



### decimationIterations : number



### boundingBoxEpsilon : number



## Methods

### simplify(settings, successCallback) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | settings | ISimplificationSettings |    
 | successCallback | (simplifiedMesh: [Mesh](/classes/2.4/Mesh)) =&gt; void |    
