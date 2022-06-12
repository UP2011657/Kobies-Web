import * as THREE from 'three';
import logo from '../Images/Three/UOP.png';
import ThreeStyle from '../styling/threePage.scss';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';
import { HalftonePass } from 'three/examples/jsm/postprocessing/HalftonePass.js';

import song from '../Audio/oldMusic.mp3'



//sets up scene and camera
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0C1164);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


//sets up renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



//sets up cube
const loader = new THREE.TextureLoader();
const textureCube = loader.load(logo);


const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xffffff, map: textureCube } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//sets up plane
const planeGeometry = new THREE.PlaneGeometry(10,10);
const planeMaterial = new THREE.MeshBasicMaterial({color: 0x410C64});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.position.y = -1;
plane.rotation.x = -Math.PI/2;
scene.add(plane);

//positions camera
camera.position.z = 1.7;

//Post processing
const composer = new EffectComposer( renderer );
const renderPass = new RenderPass( scene, camera );
composer.addPass( renderPass );
/*
const glitchPass = new GlitchPass();
composer.addPass( glitchPass );
*/
const pass = new HalftonePass();
composer.addPass( pass );


function Animate(){
        requestAnimationFrame( Animate );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.rotation.z -= 0.01;

        composer.render();
}

function AudioSetup(){
    const audio = new Audio(song);
    audio.loop = true;
    audio.play();
  }

function App() {
    return(
        <div>
            {AudioSetup()}
            <h1  className='Title'>University of Portsmouth</h1>
            <h2  className='Subtitle'>Broadcasting will resume shortly</h2>
		    <Animate/>
        </div>
    )
}

export default App;