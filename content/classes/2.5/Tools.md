---
ID_PAGE: 25335
PG_TITLE: Tools
PG_VERSION: 2.1
TAGS:
    - Tools
---
## Description

class [Tools](/classes/2.5/Tools)



## Members

### static BaseUrl : string



### static CorsBehavior : any



### static UseFallbackTexture : boolean



### static errorsCount : number



### static OnNewCacheEntry : (entry: string) =&gt; void



### static NoneLogLevel : number



### static MessageLogLevel : number



### static WarningLogLevel : number



### static ErrorLogLevel : number



### static AllLogLevel : number



### static Log : (message: string) =&gt; void



### static Warn : (message: string) =&gt; void



### static Error : (message: string) =&gt; void



### static LogCache : string



### static LogLevels : number



### static PerformanceNoneLogLevel : number



### static PerformanceUserMarkLogLevel : number



### static PerformanceConsoleLogLevel : number



### static PerformanceLogLevel : number



### static StartPerformanceCounter : (counterName: string, condition: boolean) =&gt; void



### static EndPerformanceCounter : (counterName: string, condition: boolean) =&gt; void



### static Now : number



## Methods

### static Instantiate(className) &rarr; any



#### Parameters
 | Name | Type | Description
---|---|---|---
 | className | string |   

### static SetImmediate(action) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | action | () =&gt; void |     

### static IsExponentOfTwo(value) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | number |     

### static GetExponentOfTwo(value, max) &rarr; number



#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | number |     
 | max | number |     @param max
### static GetFilename(path) &rarr; string

Gets the filename from a complete path name

#### Parameters
 | Name | Type | Description
---|---|---|---
 | path | string |     @param path

### static GetDOMTextContent(element) &rarr; string

Returns the DOM text content of the given element

#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement |     @param element

### static ToDegrees(angle) &rarr; number

Converts an angle in radian to degrees

#### Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number |     The angle to convert

### static ToRadians(angle) &rarr; number

Converts an angle in degrees to radian

#### Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number |     The angle to convert

### static EncodeArrayBufferTobase64(buffer) &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
 | buffer | ArrayBuffer |   

### static ExtractMinAndMaxIndexed(positions, indices, indexStart, indexCount, bias) &rarr; { minimum: [Vector3](/classes/2.5/Vector3),  maximum: [Vector3](/classes/2.5/Vector3) }



#### Parameters
 | Name | Type | Description
---|---|---|---
 | positions | number[] |     A 1-dimension array containing the position to extract. Each position should have 3 coordinates
 | indices | number[] |     The indices
 | indexStart | number |     The start index
 | indexCount | number |  
### static ExtractMinAndMax(positions, start, count, bias, stride) &rarr; { minimum: [Vector3](/classes/2.5/Vector3),  maximum: [Vector3](/classes/2.5/Vector3) }



#### Parameters
 | Name | Type | Description
---|---|---|---
 | positions | number[] |     A 1-dimension array containing the position to extract. Each position should have 3 coordinates
 | start | number |     The start index
 | count | number |     The number of position to browse.
optional | bias | [Vector2](/classes/2.5/Vector2) |  
### static Vector2ArrayFeeder(array) &rarr; (i: undefined) =&gt; [Vector2](/classes/2.5/Vector2)



#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | Array&lt;[Vector2](/classes/2.5/Vector2)&gt; |  

### static ExtractMinAndMaxVector2(feeder, bias) &rarr; { minimum: [Vector2](/classes/2.5/Vector2),  maximum: [Vector2](/classes/2.5/Vector2) }



#### Parameters
 | Name | Type | Description
---|---|---|---
 | feeder | (index: number) =&gt; [Vector2](/classes/2.5/Vector2) |   a callback that will be called until it returns null, each valid returned values will be used to compute the hash code.
optional | bias | [Vector2](/classes/2.5/Vector2) |  
### static MakeArray(obj, allowsNullUndefined) &rarr; Array&lt;any&gt;

Make an array

#### Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any |     @param obj
optional | allowsNullUndefined | boolean |     @param allowsNullUndefined
### static GetPointerPrefix() &rarr; string

Returns the pointer prefix Checks if hand.js is referenced in this project or if the browser natively supports pointer events.
### static QueueNewFrame(func, requester) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | func | any |  - the function to be called    @param func
optional | requester | any |  - the object that will request the next frame. Falls back to window.
### static RequestFullscreen(element) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | element | any |     @param element

### static ExitFullscreen() &rarr; void

Exit fullscreen
### static SetCorsBehavior(url, img) &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string |     The url of this file
 | img | HTMLImageElement | 
### static CleanUrl(url) &rarr; string

Execute regex, and replace &quot;#&quot; to &quot;%23&quot; and return the new url.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string |     The url of this file

### static LoadImage(url, onload, onerror, database) &rarr; HTMLImageElement

Load the image described by its URL. Check first if this image is in the indexeDB if the parameter {database} is specified.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | any |     The url of this file
 | onload | any |     Callback function to execute when the image is loaded
 | onerror | any |     Callback function to execute when the image is on error
### static LoadFile(url, callback, progressCallBack, database, useArrayBuffer, onError) &rarr; void

Load the file given by its URL. Check first if this file is in the indexeDB if the parameter {database} is specified.
This file is loaded via an ajax call otherwise.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | url | string |     The url of this file
 | callback | (data: any) =&gt; void |     Callback function called after the reading
optional | progressCallBack | () =&gt; void |     Callback function called during the reading
optional | database | any |     An indexeDB database.
optional | useArrayBuffer | boolean |     @param useArrayBuffer
### static ReadFileAsDataURL(fileToLoad, callback, progressCallback) &rarr; void

Read the given file as data url

#### Parameters
 | Name | Type | Description
---|---|---|---
 | fileToLoad | any |     The given file
 | callback | any |     Callback function called after the reading
 | progressCallback | any |     Callback function during after the reading
### static ReadFile(fileToLoad, callback, progressCallBack, useArrayBuffer) &rarr; void

Read the given file

#### Parameters
 | Name | Type | Description
---|---|---|---
 | fileToLoad | any |     The given file
 | callback | any |     Callback function called after the reading
 | progressCallBack | any |     Callback function called during the reading
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

Check extends

#### Parameters
 | Name | Type | Description
---|---|---|---
 | v | [Vector3](/classes/2.5/Vector3) |     @param v
 | min | [Vector3](/classes/2.5/Vector3) |     @param min
 | max | [Vector3](/classes/2.5/Vector3) |     @param max
### static DeepCopy(source, destination, doNotCopyList, mustCopyList) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | source | any |     @param source
 | destination | any |     @param destination
optional | doNotCopyList | string[] |     @param doNotCopyList
### static IsEmpty(obj) &rarr; boolean

Returns true if the given array is empty, false otherwise

#### Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any |     @param obj

### static RegisterTopRootEvents(events) &rarr; void

;

#### Parameters
 | Name | Type | Description
---|---|---|---
 | events | { name: string,  handler: EventListener }[] |     @param events

### static UnregisterTopRootEvents(events) &rarr; void

;

#### Parameters
 | Name | Type | Description
---|---|---|---
 | events | { name: string,  handler: EventListener }[] |     @param events

### static DumpFramebuffer(width, height, engine, successCallback, mimeType) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | width | number |     
 | height | number |     
 | engine | [Engine](/classes/2.5/Engine) |     The engine
optional | successCallback | (data: string) =&gt; void | 
### static EncodeScreenshotCanvasData(successCallback, mimeType) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | successCallback | (data: string) =&gt; void | 
optional | mimeType | string | 
### static CreateScreenshot(engine, camera, size, successCallback, mimeType) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](/classes/2.5/Engine) |     The engine
 | camera | [Camera](/classes/2.5/Camera) |     The camera
 | size | any |     The size of the screenshot
optional | successCallback | (data: string) =&gt; void | 
### static CreateScreenshotUsingRenderTarget(engine, camera, size, successCallback, mimeType) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](/classes/2.5/Engine) |     The engine
 | camera | [Camera](/classes/2.5/Camera) |     The camera
 | size | any |     The size of the screenshot
optional | successCallback | (data: string) =&gt; void | 
### static ValidateXHRData(xhr, dataType) &rarr; boolean



#### Parameters
 | Name | Type | Description
---|---|---|---
 | xhr | XMLHttpRequest |     The given xhr data
optional | dataType | number |     @param dataType
### static RandomId() &rarr; string

Implementation from http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/2117523#answer-2117523

Be aware Math.random() could cause collisions, but:

"All but 6 of the 128 bits of the ID are randomly generated, which means that for any two ids, there's a 1 in 2^^122 (or 5.3x10^^36) chance they'll collide"
### static ClearLogCache() &rarr; void


### static getClassName(object, isType) &rarr; string

This method will return the name of the class used to create the instance of the given object.

It will works only on Javascript basic data types (number, string, ...) and instance of class declared with the @className decorator.

@return the name of the class, will be "object" for a custom data type not using the @className decorator

#### Parameters
 | Name | Type | Description
---|---|---|---
 | object | any |  the object to get the class name from  the object to get the class name from
optional | isType | boolean |  
### static first(array, predicate) &rarr; T



#### Parameters
 | Name | Type | Description
---|---|---|---
 | array | Array&lt;T&gt; |  
 | predicate | (item: undefined) =&gt; boolean |  
### static getFullClassName(object, isType) &rarr; string

This method will return the name of the full name of the class, including its owning module (if any).

It will works only on Javascript basic data types (number, string, ...) and instance of class declared with the @className decorator or implementing a method getClassName():string (in which case the module won't be specified).

@return a string that can have two forms: "moduleName.className" if module was specified when the class' Name was registered or "className" if there was not module specified.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | object | any |  the object to get the class name from  the object to get the class name from
optional | isType | boolean |  
### static arrayOrStringFeeder(array) &rarr; (i: undefined) =&gt; number

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
 | feeder | (index: number) =&gt; number |  a callback that will be called until it returns null, each valid returned values will be used to compute the hash code.  a callback that will be called until it returns null, each valid returned values will be used to compute the hash code.

