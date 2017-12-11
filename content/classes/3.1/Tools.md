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


### static CorsBehavior : any


### static UseFallbackTexture : boolean


### static RegisteredExternalClasses : { [key: string]: Object }

Use this object to register external classes like custom textures or material

to allow the laoders to instantiate them
### static PreprocessUrl : (url: string) =&gt; string



#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string | 

### static errorsCount : number


### static OnNewCacheEntry : (entry: string) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | entry | string | 

### static NoneLogLevel : number


### static MessageLogLevel : number


### static WarningLogLevel : number


### static ErrorLogLevel : number


### static AllLogLevel : number


### static Log : (message: string) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | message | string | 

### static Warn : (message: string) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | message | string | 

### static Error : (message: string) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | message | string | 

### static LogCache : string


### static LogLevels : number


### static PerformanceNoneLogLevel : number


### static PerformanceUserMarkLogLevel : number


### static PerformanceConsoleLogLevel : number


### static PerformanceLogLevel : number


### static StartPerformanceCounter : (counterName: string, condition: boolean) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | counterName | string | 
optional | condition | boolean | 
### static EndPerformanceCounter : (counterName: string, condition: boolean) =&gt; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | counterName | string | 
optional | condition | boolean | 
### static Now : number


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

### static ExtractMinAndMaxIndexed(positions, Float32Array, indices, indexStart, indexCount, bias) &rarr; { minimum: [Vector3](/classes/3.1/Vector3),  maximum: [Vector3](/classes/3.1/Vector3) }



#### Parameters
 | Name | Type | Description
---|---|---|---
 | positions | number[] or Float32Array | 
 | indices | IndicesArray | 
 | indexStart | number | 
 | indexCount | number | 
### static ExtractMinAndMax(positions, Float32Array, start, count, bias, stride) &rarr; { minimum: [Vector3](/classes/3.1/Vector3),  maximum: [Vector3](/classes/3.1/Vector3) }



#### Parameters
 | Name | Type | Description
---|---|---|---
 | positions | number[] or Float32Array | 
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


### static SetCorsBehavior(url, img) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string | 
 | img | HTMLImageElement | 
### static CleanUrl(url) &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string | 

### static LoadImage(url, onLoad, onError, database) &rarr; HTMLImageElement



#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | any | 
 | onLoad |  | img | HTMLImageElement | 

 | 
 | onError | optional | message | string | 
optional | exception | any | 
### static LoadFile(url, callback, progressCallBack, database, useArrayBuffer, onError) &rarr; XMLHttpRequest



#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string | 
 | callback |  | data | any | 

 | 
optional | progressCallBack |  | data | any | 
optional | database | [Database](/classes/3.1/Database) | 
optional | useArrayBuffer | boolean | 
optional | onError | optional | request | XMLHttpRequest | 
### static LoadScript(scriptUrl, onSuccess, onError) &rarr; void

Load a script (identified by an url). When the url returns, the

content of this file is added into a new script element, attached to the DOM (body element)

#### Parameters
 | Name | Type | Description
---|---|---|---
 | scriptUrl | string | 
 | onSuccess |  | 
optional | onError | optional | message | string | 
optional | exception | any | 

### static ReadFileAsDataURL(fileToLoad, callback, progressCallback, MSBaseReader, ev) &rarr; (fileToLoad, callback, progressCallback, MSBaseReader, ev)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | fileToLoad | Blob | 
 | callback |  | data | any | 

 | 
 | progressCallback |  or MSBaseReader | 
### static ReadFile(fileToLoad, callback, progressCallBack, MSBaseReader, ev) &rarr; (fileToLoad, callback, progressCallBack, MSBaseReader, ev)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | fileToLoad | File | 
 | callback |  | data | any | 

 | 
optional | progressCallBack |  or MSBaseReader | 
### static FileAsURL(content) &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
 | content | string | 

### static Format(value, decimals) &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | number | 
optional | decimals | number | 
### static CheckExtends(v, min, max) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | v | [Vector3](/classes/3.1/Vector3) | 
 | min | [Vector3](/classes/3.1/Vector3) | 
 | max | [Vector3](/classes/3.1/Vector3) | 
### static DeepCopy(source, destination, doNotCopyList, mustCopyList) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | any | 
 | destination | any | 
optional | doNotCopyList | string[] | 
### static IsEmpty(obj) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any | 

### static RegisterTopRootEvents(events) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | events | { name: string,  handler: EventListener }[] | 

### static UnregisterTopRootEvents(events) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | events | { name: string,  handler: EventListener }[] | 

### static DumpFramebuffer(width, height, engine, successCallback, mimeType) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | width | number | 
 | height | number | 
 | engine | [Engine](/classes/3.1/Engine) | 
optional | successCallback |  | data | string | 

 | 
### static EncodeScreenshotCanvasData(successCallback, mimeType) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | successCallback |  | data | string | 

 | 
### static CreateScreenshot(engine, camera, size, successCallback, mimeType) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](/classes/3.1/Engine) | 
 | camera | [Camera](/classes/3.1/Camera) | 
 | size | any | 
optional | successCallback |  | data | string | 

 | 
### static CreateScreenshotUsingRenderTarget(engine, camera, size, successCallback, mimeType, samples) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](/classes/3.1/Engine) | 
 | camera | [Camera](/classes/3.1/Camera) | 
 | size | any | 
optional | successCallback |  | data | string | 

 | 
optional | mimeType | string | 
### static ValidateXHRData(xhr, dataType) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | xhr | XMLHttpRequest | 
optional | dataType | number | 
### static RandomId() &rarr; string

Implementation from http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#answer-2117523

Be aware Math.random() could cause collisions, but:

"All but 6 of the 128 bits of the ID are randomly generated, which means that for any two ids, there's a 1 in 2^^122 (or 5.3x10^^36) chance they'll collide"
### static ClearLogCache() &rarr; void


### static IsWindowObjectExist() &rarr; boolean


### static GetClassName(object, isType) &rarr; string

This method will return the name of the class used to create the instance of the given object.

It will works only on Javascript basic data types (number, string, ...) and instance of class declared with the @className decorator.

@return the name of the class, will be "object" for a custom data type not using the @className decorator

#### Parameters
 | Name | Type | Description
---|---|---|---
 | object | any |  the object to get the class name from
optional | isType | boolean | 
### static First(array, predicate) &rarr; Nullable&lt;T&gt;



#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | Array&lt;T&gt; | 
 | predicate |  | item | T | 

### static getFullClassName(object, isType) &rarr; Nullable&lt;string&gt;

This method will return the name of the full name of the class, including its owning module (if any).

It will works only on Javascript basic data types (number, string, ...) and instance of class declared with the @className decorator or implementing a method getClassName():string (in which case the module won't be specified).

@return a string that can have two forms: "moduleName.className" if module was specified when the class' Name was registered or "className" if there was not module specified.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | object | any |  the object to get the class name from
optional | isType | boolean | 
### static arrayOrStringFeeder(array) &rarr; (i: number) =&gt; number

This method can be used with hashCodeFromStream when your input is an array of values that are either: number, string, boolean or custom type implementing the getHashCode():number method.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | any | 

### static hashCodeFromStream(feeder) &rarr; number

Compute the hashCode of a stream of number

To compute the HashCode on a string or an Array of data types implementing the getHashCode() method, use the arrayOrStringFeeder method.

@return the hash code computed

#### Parameters
 | Name | Type | Description
---|---|---|---
 | feeder |  | index | number | 

 |  a callback that will be called until it returns null, each valid returned values will be used to compute the hash code.
