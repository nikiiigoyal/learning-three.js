import * as THREE from "three";

// creating scene
const scene = new THREE.Scene();
// creating mesh takes two arguments

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

console.log(cubeMesh);

scene.add(cubeMesh);
console.log(scene);

// Add camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  30
);

// position the camrra
camera.position.z = 5;

// initailze the render
const canvas = document.querySelector("canvas.threejs");

const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.render(scene, camera);
