---
ID_PAGE: 25140
PG_TITLE: Light
PG_VERSION: 2.1
TAGS:
    - Node
    - Light
---
## Description

class [Light](/classes/3.1/Light) extends [Node](/classes/3.1/Node)



## Constructor

## new [Light](/classes/3.1/Light)(name, scene)

Creates a [Light](/classes/3.1/Light) object in the scene.

Documentation : http://doc.babylonjs.com/tutorials/lights

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 
 | scene | [Scene](/classes/3.1/Scene) | 
## Members

### static LIGHTMAP_DEFAULT : number

If every light affecting the material is in this lightmapMode,

material.lightmapTexture adds or multiplies

(depends on material.useLightmapAsShadowmap)

after every other light calculations.

### static LIGHTMAP_SPECULAR : number

material.lightmapTexture as only diffuse lighting from this light

adds pnly specular lighting from this light

adds dynamic shadows

### static LIGHTMAP_SHADOWSONLY : number

material.lightmapTexture as only lighting

no light calculation from this light

only adds dynamic shadows from this light

### static INTENSITYMODE_AUTOMATIC : number

Each light type uses the default quantity according to its type:

     point/spot lights use luminous intensity

     directional lights use illuminance

### static INTENSITYMODE_LUMINOUSPOWER : number

lumen (lm)

### static INTENSITYMODE_LUMINOUSINTENSITY : number

candela (lm/sr)

### static INTENSITYMODE_ILLUMINANCE : number

lux (lm/m^2)

### static INTENSITYMODE_LUMINANCE : number

nit (cd/m^2)

### static LIGHTTYPEID_POINTLIGHT : number

[Light](/classes/3.1/Light) type const id of the point light.

### static LIGHTTYPEID_DIRECTIONALLIGHT : number

[Light](/classes/3.1/Light) type const id of the directional light.

### static LIGHTTYPEID_SPOTLIGHT : number

[Light](/classes/3.1/Light) type const id of the spot light.

### static LIGHTTYPEID_HEMISPHERICLIGHT : number

[Light](/classes/3.1/Light) type const id of the hemispheric light.

### diffuse : [Color3](/classes/3.1/Color3)



### specular : [Color3](/classes/3.1/Color3)



### intensity : number



### range : number



### intensityMode : number

Gets the photometric scale used to interpret the intensity.

This is only relevant with PBR Materials where the light intensity can be defined in a physical way.

Sets the photometric scale used to interpret the intensity.

This is only relevant with PBR Materials where the light intensity can be defined in a physical way.

### radius : number

Gets the light radius used by PBR Materials to simulate soft area lights.

sets the light radius used by PBR Materials to simulate soft area lights.

### renderPriority : number



### shadowEnabled : boolean

Defines wether or not the shadows are enabled for this light. This can help turning off/on shadow without detaching

the current shadow generator.

### includedOnlyMeshes : [AbstractMesh](/classes/3.1/AbstractMesh)[]



### excludedMeshes : [AbstractMesh](/classes/3.1/AbstractMesh)[]



### excludeWithLayerMask : number



### includeOnlyWithLayerMask : number



### lightmapMode : number



## Methods

### getClassName() &rarr; string

Returns the string "[Light](/classes/3.1/Light)".
### toString(fullDetails) &rarr; string



#### Parameters
 | Name | Type | Description
---|---|---|---
optional | fullDetails | boolean | 

### setEnabled(value) &rarr; void

Set the enabled state of this node.

@see isEnabled

#### Parameters
 | Name | Type | Description
---|---|---|---
 | value | boolean | 

### getShadowGenerator() &rarr; Nullable&lt;IShadowGenerator&gt;

Returns the [Light](/classes/3.1/Light) associated shadow generator.
### getAbsolutePosition() &rarr; [Vector3](/classes/3.1/Vector3)

Returns a [Vector3](/classes/3.1/Vector3), the absolute light position in the World.
### transferToEffect(effect, lightIndex) &rarr; void



#### Parameters
 | Name | Type | Description
---|---|---|---
 | effect | [Effect](/classes/3.1/Effect) | 
 | lightIndex | string | 
### canAffectMesh(mesh) &rarr; boolean

Boolean : True if the light will affect the passed mesh.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | mesh | [AbstractMesh](/classes/3.1/AbstractMesh) | 

### getWorldMatrix() &rarr; [Matrix](/classes/3.1/Matrix)

Returns the light World matrix.
### static compareLightsPriority(a, b) &rarr; number

Sort function to order lights for rendering.

@return -1 to reduce's a's index relative to be, 0 for no change, 1 to increase a's index relative to b.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | a | [Light](/classes/3.1/Light) |  First [Light](/classes/3.1/Light) object to compare to second.
 | b | [Light](/classes/3.1/Light) |  Second [Light](/classes/3.1/Light) object to compare first.
### dispose() &rarr; void

Disposes the light.
### getTypeID() &rarr; number

Returns the light type ID (integer).
### getScaledIntensity() &rarr; number

Returns the intensity scaled by the Photometric Scale according to the light type and intensity mode.
### clone(name) &rarr; Nullable&lt;[Light](/classes/3.1/Light)&gt;

Returns a new [Light](/classes/3.1/Light) object, named "name", from the current one.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | name | string | 

### serialize() &rarr; any

Serializes the current light into a Serialization object.

Returns the serialized object.
### static GetConstructorFromName(type, name, scene) &rarr; Nullable&lt;() =&gt; [Light](/classes/3.1/Light)&gt;

Creates a new typed light from the passed type (integer) : point light = 0, directional light = 1, spot light = 2, hemispheric light = 3.

This new light is named "name" and added to the passed scene.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | type | number | 
 | name | string | 
 | scene | [Scene](/classes/3.1/Scene) | 
### static Parse(parsedLight, scene) &rarr; Nullable&lt;[Light](/classes/3.1/Light)&gt;

Parses the passed "parsedLight" and returns a new instanced [Light](/classes/3.1/Light) from this parsing.

#### Parameters
 | Name | Type | Description
---|---|---|---
 | parsedLight | any | 
 | scene | [Scene](/classes/3.1/Scene) | 
