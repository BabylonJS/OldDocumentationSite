---
ID_PAGE: 25335
PG_TITLE: Tools
PG_VERSION: 2.1
TAGS:
    - Tools
---
## Description

class [Tools](/classes/3.1/Tools)



## Members

### static BaseUrl : string


### static CorsBehavior : string

Default behaviour for cors in the application.

It can be a string if the expected behavior is identical in the entire app.

Or a callback to be able to set it per url or on a group of them (in case of Video source for instance)
### static UseFallbackTexture : boolean


### static RegisteredExternalClasses : { [key: string]: Object }

Use this object to register external classes like custom textures or material

to allow the laoders to instantiate them
### static fallbackTexture : string


## Methods

### static Mix(a, b, alpha) &rarr; number

Interpolates between a and b via alpha

@return The mixed value

#### Parameters
 | Name | Type | Description
---|---|---|---
 | a | number |  The lower value (returned when alpha = 0)
 | b | number |  The upper value (returned when alpha = 1)
 | alpha | number |  The interpolation-factor
### static Instantiate(className) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | className | string | 

### static SetImmediate(action) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | action |  | 

### static IsExponentOfTwo(value) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | number | 

### static CeilingPOT(x) &rarr; number

Find the next highest power of two.

@return Next highest power of two.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |  Number to start search from.

### static FloorPOT(x) &rarr; number

Find the next lowest power of two.

@return Next lowest power of two.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |  Number to start search from.

### static NearestPOT(x) &rarr; number

Find the nearest power of two.

@return Next nearest power of two.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | x | number |  Number to start search from.

### static GetExponentOfTwo(value, max, mode) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | number | 
 | max | number | 
optional | mode | number | 
### static GetFilename(path) &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
 | path | string | 

### static GetFolderPath(uri) &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
 | uri | string | 

### static GetDOMTextContent(element) &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | 

### static ToDegrees(angle) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number | 

### static ToRadians(angle) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number | 

### static EncodeArrayBufferTobase64(buffer) &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
 | buffer | ArrayBuffer | 

### static ExtractMinAndMaxIndexed(positions, indices, indexStart, indexCount, bias) &rarr; { minimum: [Vector3](/classes/3.1/Vector3),  maximum: [Vector3](/classes/3.1/Vector3) }



#### Parameters
 | Name | Type | Description
---|---|---|---
 | positions | FloatArray | 
 | indices | IndicesArray | 
 | indexStart | number | 
 | indexCount | number | 
### static ExtractMinAndMax(positions, start, count, bias, stride) &rarr; { minimum: [Vector3](/classes/3.1/Vector3),  maximum: [Vector3](/classes/3.1/Vector3) }



#### Parameters
 | Name | Type | Description
---|---|---|---
 | positions | FloatArray | 
 | start | number | 
 | count | number | 
optional | bias | Nullable&lt;[Vector2](/classes/3.1/Vector2)&gt; | 
### static Vector2ArrayFeeder(array, Float32Array) &rarr; (i: number) =&gt; Nullable&lt;[Vector2](/classes/3.1/Vector2)&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | Array&lt;[Vector2](/classes/3.1/Vector2)&gt; or Float32Array | 
### static ExtractMinAndMaxVector2(feeder, bias) &rarr; { minimum: [Vector2](/classes/3.1/Vector2),  maximum: [Vector2](/classes/3.1/Vector2) }



#### Parameters
 | Name | Type | Description
---|---|---|---
 | feeder |  | index | number | 

 | 
### static MakeArray(obj, allowsNullUndefined) &rarr; Nullable&lt;Array&lt;any&gt;&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any | 
optional | allowsNullUndefined | boolean | 
### static GetPointerPrefix() &rarr; string


### static QueueNewFrame(func, requester) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | func |  |  - the function to be called
optional | requester | any |  - the object that will request the next frame. Falls back to window.
### static RequestFullscreen(element) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement | 

### static ExitFullscreen() &rarr; void


### static SetCorsBehavior(url, string, element) &rarr; (url, string, element)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string or string | 
 | element | { crossOrigin: string } | 
