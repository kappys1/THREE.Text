// Simple three.js example

var mesh, renderer, scene, camera, controls;
var meshOption;

init();
animate();

function FizzyText () {
    this.message = 'hello world';
    this.size = 1;
    this.color = "#ff0000"
    this._3d = false;
    this._3dOptions = {
        steps: 16,
        amount: 1,
        curveSegments: 12,
        bevelEnabled: false,
        bevelThickness: 1,
        bevelSize: 1,
        bevelSegments: 5
    }
};
function init() {

    // renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( 0xffffff );
    document.body.appendChild( renderer.domElement );

    // scene
    scene = new THREE.Scene();
    
    // camera
    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.set( -50, 10, 30 );
    scene.add( camera ); // required, since adding light as child of camera

    // controls
    controls = new THREE.OrbitControls( camera ,renderer.domElement);
    controls.enableZoom = true;
    controls.enablePan = true;
    controls.maxPolarAngle = Math.PI / 2;
    
    // ambient
    scene.add( new THREE.AmbientLight( 0x444444 ) );
    
    // light
    var light = new THREE.PointLight( 0xffffff, 0.8 );
    camera.add( light );
    
    meshOption = new FizzyText();
    
    mesh = new THREE.Text({
        text: meshOption.message,
        size: meshOption.size,
       	color: meshOption.color.replace('#','0x'),
        "3d": meshOption._3d,
        "extrudeSettings" : meshOption._3dOptions
    }); 
   
 	scene.add( mesh );
	var gui = new dat.GUI();
  	var menu = gui.addFolder('folder');
    menu.add(meshOption, 'message').onChange(function(){changeText()});
    menu.add(meshOption, 'size', -4, 4).onChange(function(){changeSize()});
    menu.addColor(meshOption, 'color').onChange(function(){changeColor()});
    menu.add(meshOption, '_3d').onChange(function(){changeDimension()});
    
    var options3d = gui.addFolder('3d Options');
    options3d.add(meshOption._3dOptions, 'steps').onChange(function(){setExtrudeSettings()});
    options3d.add(meshOption._3dOptions, 'amount',0,50).onChange(function(){setExtrudeSettings()});
    options3d.add(meshOption._3dOptions, 'bevelEnabled').onChange(function(){setExtrudeSettings()});
    options3d.add(meshOption._3dOptions, 'bevelThickness',0,50).onChange(function(){setExtrudeSettings()});
    options3d.add(meshOption._3dOptions, 'bevelSize',0,50).onChange(function(){setExtrudeSettings()});
    options3d.add(meshOption._3dOptions, 'bevelSegments',0,50).onChange(function(){setExtrudeSettings()});
    options3d.add(meshOption._3dOptions, 'curveSegments',0,50).onChange(function(){setExtrudeSettings()});
}

function changeText(){
	mesh.setText(meshOption.message);
}
function changeSize(){
	mesh.setSize(meshOption.size);
}
function changeColor(){
	mesh.setColor(meshOption.color.replace('#','0x'));
}
function changeDimension(){
    meshOption._3d? mesh.transform3d() : mesh.transform2d();
}
function setExtrudeSettings(){
    mesh.setExtrudeSettings(meshOption._3dOptions)
}
function animate() {

    requestAnimationFrame( animate );
    
    //controls.update();

    renderer.render( scene, camera );

}
