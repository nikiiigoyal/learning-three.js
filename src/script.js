import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// creating scene
const scene = new THREE.Scene();
// creating mesh takes two arguments

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: "red",
  wireframe: true,
});
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

// cubeMesh.position.y = 1;
// cubeMesh.position.x = 1;
// cubeMesh.scale.setScalar(0.5);
// const cubeMesh2 = new THREE.Mesh(cubeGeometry, cubeMaterial);
// cubeMesh2.position.x = 2;

// const cubeMesh3 = new THREE.Mesh(cubeGeometry, cubeMaterial);
// cubeMesh3.position.x = -2;

// const group = new THREE.Group();
// group.add(cubeMesh);
// group.add(cubeMesh2);
// group.add(cubeMesh3);
// // scaling grop
// group.position.y = 2;
// group.scale.setScalar(2);
// scene.add(group);

// console.log(cubeMesh);
// cubeMesh.scale.set(2, 2, 1);

scene.add(cubeMesh);
// cubeMesh.rotation.x = THREE.MathUtils.degToRad(45);
// cubeMesh.rotation.y = THREE.MathUtils.degToRad(90);
// console.log(scene);
// const tempVector = new THREE.Vector3(0, 1, 0);
// cubeMesh.position.copy(tempVector);
// cubeMesh.position.x = 1;
// const axesHelper = new THREE.AxesHelper(2);
// cubeMesh.add(axesHelper);

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

const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, innerHeight);
const maxPixelRatio = Math.min(window.devicePixelRatio, 2);
renderer.setPixelRatio(maxPixelRatio);

// 3d controls
// initialize controls
const controls = new OrbitControls(camera, canvas);

controls.enableDamping = true;

// controls.autoRotate = true;

// When the browser window resizes, the camera's Aspect Ratio changes. If we don't call camera.updateProjectionMatrix(), the camera doesn't know its viewing box has changed,  cube will look stretched. This function forces it to recalculate the view box.
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
// initialze the clock
const clock = new THREE.Clock();
let previousTime = 0;

const renderLoop = () => {
  const currentTime = clock.getElapsedTime();
  const delta = currentTime - previousTime;
  previousTime = currentTime;

  cubeMesh.rotation.y += THREE.MathUtils.degToRad(1) * delta * 20;
  cubeMesh.scale.x = Math.sin(currentTime) * 20 + 2;
  cubeMesh.position.x = Math.sin(currentTime) + 2;

  // is requires when enabledumping and auto rotate is true
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(renderLoop);
};

renderLoop();
