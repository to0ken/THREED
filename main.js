import * as THREE from 'three';
//import { color } from 'three/src/nodes/tsl/TSLCore.js';

const scene = new THREE.Scene();
console.log("hi")
const rendrer = new THREE.WebGLRenderer()

// камера 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

rendrer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(rendrer.domElement) // добавление канваса

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(15,15,15);
scene.add(light);
scene.add(camera);
camera.position.z =25


const geometry = new THREE.BoxGeometry(5,5,5)
const material = new THREE.MeshStandardMaterial(0xffffff)
const cube = new THREE.Mesh(geometry,material)

scene.add(cube);

function animate(){
    requestAnimationFrame(animate)
    cube.rotation.x += 0.8
    cube.rotation.y += 0.8
    rendrer.render(scene, camera)
}
animate();
