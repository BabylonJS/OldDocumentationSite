---
TAGS:
---
## Description

class [InstancingAttributeInfo](/classes/2.5/InstancingAttributeInfo)



## Members

### index : number

Index/offset of the attribute in the vertex shader

### attributeSize : number

size of the attribute, 1, 2, 3 or 4

### attribyteType : number

type of the attribute, gl.BYTE, gl.UNSIGNED_BYTE, gl.SHORT, gl.UNSIGNED_SHORT, gl.FIXED, gl.FLOAT.

default is FLOAT

### normalized : boolean

normalization of fixed-point data. behavior unclear, use FALSE, default is FALSE

### offset : number

Offset of the data in the Vertex [Buffer](/classes/2.5/Buffer) acting as the instancing buffer

### attributeName : string

Name of the GLSL attribute, for debugging purpose only

