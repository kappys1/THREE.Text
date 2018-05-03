# THREE.JS TEXT
[![npm version](https://badge.fury.io/js/three.text.svg)](https://badge.fury.io/js/three.text)
> easy way to create 2d text meshes for TRHEE.js based on BufferGeometry.

# Install

```sh
 npm install three.text --save
```

*note: is possible change the text dinamically without remove and create the text mesh again*

### Example
[play with me](http://jsfiddle.net/ktmpjLjf/9/)
# How to use
Include script

```sh
 <script src="THREE.Text.js"></script>
```
If you need include THREE.js in script 
```sh
 var THREE = require( 'three' );
```

Create mesh 
```sh
    var textMesh = new THREE.Text({
        text: "hello world"
    }); 
```

Add to scene or group:
```sh
    scene.add( textMesh );
```
**options**
- **text** : Text to show
- **font** : Font family of text (default : helvetik)
- **divisions** : Divisions of shape ( default : 2)
- **size** : Size of text (default : 20)
- **color** : Text color (default : red - 0xff0000)
- **Material** : Mesh Material ( default : MeshBasicMaterial)

**Additional Method Mesh**
- **setColor** : For set color of Mesh , use color.setHex() method of material;
- **setMaterial** : Change Material of Mesh
- **setFont** : Change font of Mesh, need a THREE.FontLoader.
- **setText** : Change text of Mesh
- **setSize** : Change size of Text

### Author
Alex Marcos Gutierrez
### License
MIT


