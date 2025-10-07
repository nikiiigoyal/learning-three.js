import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

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
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  200
);

// const aspectRation = window.innerWidth / innerHeight;
// const camera = new THREE.OrthographicCamera(
//   -1 * aspectRation,
//   1 * aspectRation,
//   1,
//   -1,
//   0.1,
//   200
// );
// position the camrra
camera.position.z = 5;

// initailze the render
const canvas = document.querySelector("canvas.threejs");

const renderer = new THREE.WebGLRenderer({ canvas: canvas });

// 3d controls
// initialize controls
const controls = new OrbitControls(camera, canvas);

controls.enableDamping = true;
controls.autoRotate = true;
// When the browser window resizes, the camera's Aspect Ratio changes. If we don't call camera.updateProjectionMatrix(), the camera doesn't know its viewing box has changed,  cube will look stretched. This function forces it to recalculate the view box.
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / innerHeight;
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.updateProjectionMatrix();
  console.log("resized");
});

const renderLoop = () => {
  // is requires when enabledumping and auto rotate is true
  controls.update();
  console.log(renderLoop);
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderLoop);
};

renderLoop();
