# THREE.JS TEXT
[![npm version](https://badge.fury.io/js/three.text.svg)](https://badge.fury.io/js/three.text)
> easy way to create text meshes in 3d and 2d for TRHEE.js based on BufferGeometry and ExtrudeBufferGeometry.

# Install

```sh
 npm install three.text --save
```

*note: is possible change the text dinamically without remove and create the text mesh again*

### Example
[play with me](http://jsfiddle.net/ktmpjLjf/14/)
# How to use
Include script

```sh
 <script src="node_modules/three.text/src/THREE.text.js"></script>
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
or 3d:
```sh
    var textMesh = new THREE.Text({
        text: "hello world",
        _3d:true
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
- **_3d** : Build Mesh in 3d
- **extrudeSettings** : Object settings for buid 3d Mesh (reference  [ExtrudeBufferGeometry](https://threejs.org/docs/#api/geometries/ExtrudeBufferGeometry))

**Additional Method Mesh**
- **setColor** : For set color of Mesh , use color.setHex() method of material;
- **setMaterial** : Change Material of Mesh
- **setFont** : Change font of Mesh, need a THREE.FontLoader.
- **setText** : Change text of Mesh
- **setSize** : Change size text
- **transform3d** : Transform Mesh to 2d to 3d
- **transform2d** : Transform Mesh to 3d to 2d
- **setExtrudeSettings** : Change Object settings for build 3d Mesh: (reference  [ExtrudeBufferGeometry](https://threejs.org/docs/#api/geometries/ExtrudeBufferGeometry))


### Author
Alex Marcos Gutierrez
### License
MIT


