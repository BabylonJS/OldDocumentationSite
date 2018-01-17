---
ID_PAGE: 22121
PG_TITLE: 14. Particles
---
# Particles

This tutorial is going to talk about the particle system in BabylonJS. Particles are often small sprites used to simulate hard-to-reproduce phenomena like fire, smoke, water, or abstract visual effects like magic glitter and faery dust.
Particles can take different shapes while emitted like box, sphere, cone or you can write your custom function.

![Particles](/img/how_to/Particles/12.png)

A picture of [the playground's ParticleSystem demo]( https://www.babylonjs-playground.com/?12)

## How Can I Create Particles ?

To perform this magic trick, the first thing to do is to create a new object, which will be the particle emitter. In our case, a box will be our emitting object, representing a particle fountain.

```javascript
var fountain = BABYLON.Mesh.CreateBox("fountain", 1.0, scene);
```

The emitter acts as the source of the particles, and its location in 3D space determines where they are generated and how they move. So pay attention to the location/rotation of this object.
In our case, the emitter is our fountain, but if you wish, you can use only a vector (BABYLON.Vector3) as an emitter.

Now, we must create a new (not-rendered) ParticleSystem object:
```javascript
var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene, customEffect);
```

Simple. The first parameter is the name, he second parameter is the maximum number of particles, the third parameter is the scene, and the optional fourth parameter is a reference to a shader effect for the particles, overriding the default shader. I will talk about the fourth parameter further below.


An important part is to define the texture of each particle. Each one will have the same pattern, so choose carefully which one you want. But keep in mind that a single scene can contain multiple particleSystems, and each one can emit particles with unique texture patterns. Also keep in mind that multiple particle systems can use the same emitter object. 
Our particle texture is going to be this one:

![Flare](/img/how_to/Particles/Flare.png)

To define the particle’s texture, add a line like this:
```javascript
particleSystem.particleTexture = new BABYLON.Texture("Flare.png", scene);
```

(in the playground demo, we used /textures/flare.png)


For this texture, you can use an optional mask to filter some colors, or filter a part of the alpha channel.
```javascript
particleSystem.textureMask = new BABYLON.Color4(0.1, 0.8, 0.8, 1.0);
```

This is the output of this configuration:

![TextureMask](/img/how_to/Particles/12-1.png)

The last main thing to do is to define our emitter that we talked about earlier:
```javascript
// Where the particles comes from
particleSystem.emitter = fountain; // the starting object, the emitter, a box in this case.
```

Now you should see your particle system working. But it might not be our final result. We can refine some parameters:
* Box around our emitter. Our emitter is the center of particles source, but if you want your particles to emit from more than one point, then you can tell it to do so:
```javascript
particleSystem.minEmitBox = new BABYLON.Vector3(-1, 0, 0); // Starting all From
    particleSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 0); // To...
```

  As you can see, particles are emitted from different positions along the X-axis:

  ![EmitBox](/img/how_to/Particles/12-2.png)

* Now you can give some colors to your particles. Color one and two are combined, and “colorDead” is the color that the particle takes-on just before it disappears.
```javascript
// Colors of all particles (splited in 2 + specific color before dispose)
particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);
```

* Size of particles:
```javascript
// Size of each particle (random between...)
particleSystem.minSize = 0.1;
particleSystem.maxSize = 0.5;
```

* LifeTime of particles:
```javascript
// Life time of each particle (random between...)
particleSystem.minLifeTime = 0.3;
particleSystem.maxLifeTime = 1.5;
```

* Emit rate. This is the density of particles, the rate of particle flow:
```javascript
particleSystem.emitRate = 1000;
```

![emitRate](/img/how_to/Particles/12-3.png)

  If you want to launch only a few particles at once, that can be done, as well. For example, if you want to emit only 300 particles:
  ```javascript
  particleSystem.manualEmitCount = 300;
  ```
  Be aware that the stream is no longer continuous. This is a one-shot particle emission, so this function overrides the previous “emitRate” parameter.

* The selected mode for particles. You can choose between “BLENDMODE_ONEONE” (default choice: source color is added to the destination color without alpha affecting the result), and “BLENDMODE_STANDARD” (to blend current color and particle color using particle’s alpha).
```javascript
particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
```

* Gravity. You can use gravity if you want to give an orientation to your particles (e.g.: fire particles travel upward on the Y-axis)
```javascript
//Set the gravity of all particles (not necessarily down)
particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
```

* Direction. Random direction of each particle after it has been emitted, between direction1 and direction2 vectors.
  ```javascript
  particleSystem.direction1 = new BABYLON.Vector3(-7, 8, 3);
  particleSystem.direction2 = new BABYLON.Vector3(7, 8, -3);
  ```

![emitRate](/img/how_to/Particles/12-4.png)

* AngularSpeed. You can define a Z-axis rotation for each particle (in radian):
```javascript
particleSystem.minAngularSpeed = 0;
particleSystem.maxAngularSpeed = Math.PI;
```

* Speed/Strength. You can define the power of emitting particles, and the overall motion speed (0.01 is default update speed, faster updates = faster animation).
  ```javascript
  particleSystem.minEmitPower = 1;
  particleSystem.maxEmitPower = 3;
  particleSystem.updateSpeed = 0.005;
  ```

* Duration. You can set the amount of time the particle system is running (depends of the overall speed above).
```javascript
particleSystem.targetStopDuration = 5;
```

* Dispose. Disposes (or not) the particle system on stop (very useful if you want to create a one shot particle system with a specific targetStopDuration):
```javascript
particleSystem.disposeOnStop = true;
```

Finally, you can start this particle system whenever you want in your code with:
```javascript
particleSystem.start();
```

And naturally stop it:
```javascript
particleSystem.stop();
```

Feel free to play with this scene... [**at our online playground**]( https://www.babylonjs-playground.com/?12).

### customEffect (the fourth parameter in the constructor)

_var ps = new BABYLON.ParticleSystem("particles", 2000, scene, **customEffect**);_

The customEffect is a type of BABYLON.Effect used to target a valid shader program.

The primary author of Babylon.js was kind enough to make us [a fantastic playground demo of a particle system using a fragment shader effect](https://www.babylonjs-playground.com/#1ASENS#43)
Visit that link, and you can see a fragment shader program that has been stored in a shader store. Notice the line:

```javascript
BABYLON.Effect.ShadersStore["myParticleFragmentShader"] = [...]
```

A bit below that, you will see:
```javascript
var effect = engine.createEffectForParticles("myParticle", ["time"]);
```

_.createEffectForParticles_ accepts the following parameters:
- fragment name (can be in the shaders store or the id of a DOM element)
- array of additional parameters (uniforms)
- array of additional samplers (for additional textures!)


The particle Effect Object is a slightly-modified [Babylon Effect Object](/classes/3.0/Effect). Also notice that the ShadersStore is a namespace upon this special [Effect Object](/classes/3.0/Effect). 

The Effect Object has many 'setter' methods on it, one of which is _.setFloat_. Notice how it is used in the registerBeforeRender function. This causes the speed of the effect to cycle across about a 20 second time span. We are (the demo author is) varying the time parameter of the fragment shader program... from within the scene's render loop! WE LOVE IT!

Here is a short comment from Deltakosh... regarding that playground demo linked above:

> By default Babylon.js will give you a vUV and a vColor varying parameter. It will also transmit you the particle texture. But you can feel free to add any new parameter, like I did, with 'time'.

This section of the tutorial is under construction. We will have much more to say, soon.

## Custom Functions
You can get even more control over particles by using custom functions:
```startDirectionFunction: (emitPower: number, worldMatrix: Matrix, directionToUpdate: Vector3)```: This function can be defined to specify initial direction for every new particle. By default, this function is defined with the following code:

    startDirectionFunction = (emitPower: number, worldMatrix: Matrix, directionToUpdate: Vector3): void => {
        var randX = randomNumber(this.direction1.x, this.direction2.x);
        var randY = randomNumber(this.direction1.y, this.direction2.y);
        var randZ = randomNumber(this.direction1.z, this.direction2.z);
    
        Vector3.TransformNormalFromFloatsToRef(randX * emitPower, randY * emitPower, randZ * emitPower, worldMatrix, directionToUpdate);
    }


```startPositionFunction = (worldMatrix: Matrix, positionToUpdate: Vector3)```: This function can be defined to specify initial position for every new particle. By default, this function is defined with the following code:

    startPositionFunction = (worldMatrix: Matrix, positionToUpdate: Vector3): void => {
        var randX = randomNumber(this.minEmitBox.x, this.maxEmitBox.x);
        var randY = randomNumber(this.minEmitBox.y, this.maxEmitBox.y);
        var randZ = randomNumber(this.minEmitBox.z, this.maxEmitBox.z);
    
        Vector3.TransformCoordinatesFromFloatsToRef(randX, randY, randZ, worldMatrix, positionToUpdate);
    }


```updateFunction: (particles: Particle[])```: This function can be defined to provide custom update for active particles. This function will be called instead of regular update (age, position, color, etc.). Do not forget that this function will be called on every frame so try to keep it simple and fast :). By default the following code is used:

    updateFunction = function(particles) {
         for (var index = 0; index < particles.length; index++) {
               var particle = particles[index];
               particle.age += this._scaledUpdateSpeed;
            
               if (particle.age >= particle.lifeTime) { // Recycle
                    particles.splice(index, 1);
                    this._stockParticles.push(particle);
                    index--;
                    continue;
               }
               else {
                    particle.colorStep.scaleToRef(this._scaledUpdateSpeed, this._scaledColorStep);
                    particle.color.addInPlace(this._scaledColorStep);
    
                    if (particle.color.a < 0)
                                 particle.color.a = 0;
    
                    particle.angle += particle.angularSpeed * this._scaledUpdateSpeed;
    
                    particle.direction.scaleToRef(this._scaledUpdateSpeed, this._scaledDirection);
                    particle.position.addInPlace(this._scaledDirection);
    
                    this.gravity.scaleToRef(this._scaledUpdateSpeed, this._scaledGravity);
                    particle.direction.addInPlace(this._scaledGravity);
               }
         } 
    }

## Particle Animation
Starting from Babylon.js v3.1 particle system will allow particle animation using animation sheet.
[Sample Demo](http://www.babylonjs-playground.com/#CLN02N#3)
To enable particle animation in `ParticleSystem` you pass a true parameter in the `ParticleSystem` constructor, the default value for is false then assign the `particleTexture`

```javascript
var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene, null, true);
particleSystem.particleTexture = new BABYLON.Texture("textures/player.png", scene, true,
                    false, BABYLON.Texture.TRILINEAR_SAMPLINGMODE);
```

After that you need to set some details the `ParticleSystem` will use to do the animation, the first properties are `spriteCellHeight` and `spriteCellWidth` which are the cell width and height for each sprite in the animation sheet. then you can choose which is the starting and ending cell for your sheet using properties `startSpriteCellID` and `endSpriteCellID`.

Here comes the tricky part regarding the number of loops the particle will make before it gets disposed from the scene, if you enable `spriteCellLoop` by set the property to true and property `spriteCellChangeSpeed` to the speed you want, the system will loop the animation sheet from `startSpriteCellID` till `endSpriteCellID` then loop again till the sheet get disposed. if `spriteCellLoop` is false then once the sheet reachs `endSpriteCellID` the particle will use this cell till it get disposed from the scene.

```javascript
var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene, null, true);
particleSystem.particleTexture = new BABYLON.Texture("textures/player.png", scene, true,
                    false, BABYLON.Texture.TRILINEAR_SAMPLINGMODE);

particleSystem.startSpriteCellID = 0;
particleSystem.endSpriteCellID = 44;
particleSystem.spriteCellHeight = 64;
particleSystem.spriteCellWidth = 64;
particleSystem.spriteCellLoop = true;
particleSystem.spriteCellChangeSpeed = 4; // default is zero
```

If you want your particle animation to match the life time of the particle set property `spriteCellChangeSpeed` to zero (default) after that the `ParticleSystem` will calculate how to sync between the animation sheet and particle life time so the first sprite will `startSpriteCellID` and the last will be `endSpriteCellID`.

```javascript
var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene, null, true);
particleSystem.particleTexture = new BABYLON.Texture("textures/player.png", scene, true,
                    false, BABYLON.Texture.TRILINEAR_SAMPLINGMODE);

particleSystem.startSpriteCellID = 0;
particleSystem.endSpriteCellID = 44;
particleSystem.spriteCellHeight = 64;
particleSystem.spriteCellWidth = 64;
```

## Particles Shapes

Start from Babylonjs 3.2 you will be able to use different shapes for the emitted particles.

1)Box Emitter.

2)Sphere Emitter.

3)Cone Emitter.

### New property particleEmitterType

Start from babylonjs 3.2 we introduced in the particle system new property `particleEmitterType` of type IParticleEmitterType. this interface has 2 methods startDirectionFunction and startPositionFunction, startPositionFunction is responsible for drawing the particles at the start and startDirectionFunction is responsible for the direction.

You can create your own ParticleEmitterType by extending IParticleEmitterType and assign it to `particleEmitterType`. This new way will override directly overriding those method in the particleSystem directly like what described in the custom functions (old way) section in this article.

### Box Emitter

There are 2 ways to do the box emitter the old way which is covered at the top and the new way which we will discuss below.

To create a box emitter you can use call method createBoxEmitter
```javascript

    var boxEmitter = particleSystem.createBoxEmitter(new BABYLON.Vector3(-7, 8, 3), new BABYLON.Vector3(7, 8, -3), new BABYLON.Vector3(-1, 0, 0), new BABYLON.Vector3(1, 0, 0));

```
this method takes 4 parameters (direction1: Vector3, direction2: Vector3, minEmitBox: Vector3, maxEmitBox: Vector3) and returns the box emitter object which you change his properties (direction1,direction2,minEmitBox,maxEmitBox) to achieve what you want.

Check the playground [Sample Demo](https://www.babylonjs-playground.com/#6P6U4G)

### Sphere Emitter

You can create a sphere emitter using:

```javascript

    particleSystem.createSphereEmitter(1.2);

```

The first parameter is the radius of the emission sphere. The particles will be emitted alongside the radius direction.

Check the playground [Sample Demo](https://www.babylonjs-playground.com/#6P6U4G#1)

If you prefer to chose the emission direction, you can create a directed sphere emitter:

```javascript

    particleSystem.createDirectedSphereEmitter(1.2, new BABYLON.Vector3(1, 1, 1), new BABYLON.Vector3(2, 8, 2));

```

The first parameter is the radius the second is direction1 and third is direction2. (The direction will be generated randomly between direction1 and direction2)

Check the the playground [Sample Demo](https://www.babylonjs-playground.com/#6P6U4G#2)

### Cone Emitter

To create a cone emitter just call method createConeEmitter and this method takes the radius of the cone at the bottom and the angle (In radian) which the particles will be emitted toward and this angle is calculated from the Y axis. \\_/

```javascript

    var coneEmitter = particleSystem.createConeEmitter(2, Math.PI / 3);

```

Check the playground [Sample Demo](https://www.babylonjs-playground.com/#6P6U4G#3)

## Next step
ParticleSystems are very powerful and versatile tools that can help bring realness and movement to your scenes. Don’t hesitate to use them as they are not resource-intensive.

Stay with us, because we are going to learn a new, very interesting thing: [Configuring your environment](/babylon101/Environment).

# Further Reading

## Basic - L1

[Mesh Overview](/features/Shapes)  
[Solid Particle System](/How_To/Solid_Particle_System)

