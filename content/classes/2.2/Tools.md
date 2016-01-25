---
ID_PAGE: 25335
PG_TITLE: Tools
PG_VERSION: 2.1
TAGS:
    - Tools
---
##Description

class [Tools](/classes/2.2/Tools)



##Members

###static BaseUrl : string



###static errorsCount : number



###static OnNewCacheEntry : (entry: string) =&gt; void



###static NoneLogLevel : number



###static MessageLogLevel : number



###static WarningLogLevel : number



###static ErrorLogLevel : number



###static AllLogLevel : number



###static Log : (message: string) =&gt; void



###static Warn : (message: string) =&gt; void



###static Error : (message: string) =&gt; void



###static LogCache : string



###static LogLevels : number



###static PerformanceNoneLogLevel : number



###static PerformanceUserMarkLogLevel : number



###static PerformanceConsoleLogLevel : number



###static PerformanceLogLevel : number



###static StartPerformanceCounter : (counterName: string, condition: boolean) =&gt; void



###static EndPerformanceCounter : (counterName: string, condition: boolean) =&gt; void



###static Now : number



##Methods

###static ToHex(i) &rarr; string



####Parameters
 | Name | Type | Description
---|---|---|---
 | i | number | 

###static SetImmediate(action) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | action | () =&gt; void |  

###static IsExponantOfTwo(value) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
 | value | number |  

###static GetExponantOfTwo(value, max) &rarr; number



####Parameters
 | Name | Type | Description
---|---|---|---
 | value | number |  
 | max | number |  @param max
###static GetFilename(path) &rarr; string

Gets the filename from a complete path name

####Parameters
 | Name | Type | Description
---|---|---|---
 | path | string |  @param path

###static GetDOMTextContent(element) &rarr; string

Returns the DOM text content of the given element

####Parameters
 | Name | Type | Description
---|---|---|---
 | element | HTMLElement |  @param element

###static ToDegrees(angle) &rarr; number

Converts an angle in radian to degrees

####Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number |  The angle to convert

###static ToRadians(angle) &rarr; number

Converts an angle in degrees to radian

####Parameters
 | Name | Type | Description
---|---|---|---
 | angle | number |  The angle to convert

###static ExtractMinAndMaxIndexed(positions, indices, indexStart, indexCount) &rarr; { minimum: [Vector3](/classes/2.2/Vector3),  maximum: [Vector3](/classes/2.2/Vector3) }



####Parameters
 | Name | Type | Description
---|---|---|---
 | positions | number[] |  A 1-dimension array containing the position to extract. Each position should have 3 coordinates
 | indices | number[] |  The indices
 | indexStart | number |  The start index
###static ExtractMinAndMax(positions, start, count) &rarr; { minimum: [Vector3](/classes/2.2/Vector3),  maximum: [Vector3](/classes/2.2/Vector3) }



####Parameters
 | Name | Type | Description
---|---|---|---
 | positions | number[] |  A 1-dimension array containing the position to extract. Each position should have 3 coordinates
 | start | number |  The start index
 | count | number |  The number of position to browse.
###static MakeArray(obj, allowsNullUndefined) &rarr; Array&lt;any&gt;

Make an array

####Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any |  @param obj
optional | allowsNullUndefined | boolean |  @param allowsNullUndefined
###static GetPointerPrefix() &rarr; string

Returns the pointer prefix Checks if hand.js is referenced in this project or if the browser natively supports pointer events.
###static QueueNewFrame(func) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | func | any |  @param func

###static RequestFullscreen(element) &rarr; void

Request to get the fullscreen

####Parameters
 | Name | Type | Description
---|---|---|---
 | element | any |  @param element

###static ExitFullscreen() &rarr; void

Exit fullscreen
###static CleanUrl(url) &rarr; string

Execute regex, and replace &quot;#&quot; to &quot;%23&quot; and return the new url.

####Parameters
 | Name | Type | Description
---|---|---|---
 | url | string |  The url of this file

###static LoadImage(url, onload, onerror, database) &rarr; HTMLImageElement

Load the image described by its URL. Check first if this image is in the indexeDB if the parameter {database} is specified.

####Parameters
 | Name | Type | Description
---|---|---|---
 | url | string |  The url of this file
 | onload | any |  Callback function to execute when the image is loaded
 | onerror | any |  Callback function to execute when the image is on error
###static LoadFile(url, callback, progressCallBack, database, useArrayBuffer, onError) &rarr; void

Load the file given by its URL. Check first if this file is in the indexeDB if the parameter {database} is specified.
This file is loaded via an ajax call otherwise.

####Parameters
 | Name | Type | Description
---|---|---|---
 | url | string |  The url of this file
 | callback | (data: any) =&gt; void |  Callback function called after the reading
optional | progressCallBack | () =&gt; void |  Callback function called during the reading
optional | database | any |  An indexeDB database.
optional | useArrayBuffer | boolean |  @param useArrayBuffer
###static ReadFileAsDataURL(fileToLoad, callback, progressCallback) &rarr; void

Read the given file as data url

####Parameters
 | Name | Type | Description
---|---|---|---
 | fileToLoad | any |  The given file
 | callback | any |  Callback function called after the reading
 | progressCallback | any |  Callback function during after the reading
###static ReadFile(fileToLoad, callback, progressCallBack, useArrayBuffer) &rarr; void

Read the given file

####Parameters
 | Name | Type | Description
---|---|---|---
 | fileToLoad | any |  The given file
 | callback | any |  Callback function called after the reading
 | progressCallBack | any |  Callback function called during the reading
###static Clamp(value, min, max) &rarr; number



####Parameters
 | Name | Type | Description
---|---|---|---
 | value | number |  
optional | min | number |  @param min
optional | max | number |  @param max
###static Sign(value) &rarr; number



####Parameters
 | Name | Type | Description
---|---|---|---
 | value | number |  

###static Format(value, decimals) &rarr; string



####Parameters
 | Name | Type | Description
---|---|---|---
 | value | number |  
optional | decimals | number |  
###static CheckExtends(v, min, max) &rarr; void

Check extends

####Parameters
 | Name | Type | Description
---|---|---|---
 | v | [Vector3](/classes/2.2/Vector3) |  @param v
 | min | [Vector3](/classes/2.2/Vector3) |  @param min
 | max | [Vector3](/classes/2.2/Vector3) |  @param max
###static WithinEpsilon(a, b, epsilon) &rarr; boolean

Returns true if the difference between the two parameter is within epsilon.
If yes, the two parameters can be considered equals.

####Parameters
 | Name | Type | Description
---|---|---|---
 | a | number |  @param a
 | b | number |  @param b
optional | epsilon | number |  
###static DeepCopy(source, destination, doNotCopyList, mustCopyList) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | source | any |  @param source
 | destination | any |  @param destination
optional | doNotCopyList | string[] |  @param doNotCopyList
###static IsEmpty(obj) &rarr; boolean

Returns true if the given array is empty, false otherwise

####Parameters
 | Name | Type | Description
---|---|---|---
 | obj | any |  @param obj

###static RegisterTopRootEvents(events) &rarr; void

;

####Parameters
 | Name | Type | Description
---|---|---|---
 | events | { name: string,  handler: EventListener }[] |  @param events

###static UnregisterTopRootEvents(events) &rarr; void

;

####Parameters
 | Name | Type | Description
---|---|---|---
 | events | { name: string,  handler: EventListener }[] |  @param events

###static DumpFramebuffer(width, height, engine, successCallback) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | width | number |  
 | height | number |  
 | engine | [Engine](/classes/2.2/Engine) |  The engine
###static CreateScreenshot(engine, camera, size, successCallback) &rarr; void



####Parameters
 | Name | Type | Description
---|---|---|---
 | engine | [Engine](/classes/2.2/Engine) |  The engine
 | camera | [Camera](/classes/2.2/Camera) |  The camera
 | size | any |  The size of the screenshot
###static ValidateXHRData(xhr, dataType) &rarr; boolean



####Parameters
 | Name | Type | Description
---|---|---|---
 | xhr | XMLHttpRequest |  The given xhr data
optional | dataType | number |  @param dataType
###static ClearLogCache() &rarr; void


###static GetFps() &rarr; number


