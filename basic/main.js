// three js package
import * as THREE from "three";
// list of steps to be performed to show something in screen
// 1.create the scene

const scene = new THREE.Scene();
scene.background = new THREE.Color("#FFFFFF");

// 2.add the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;
// 3.create and add a cube object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({
  color: "#468585",
  emissive: "#468585",
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
// 4.add lighting
const light = new THREE.DirectionalLight(0x9cdba6, 10); //INTENSITY IS 10 and color is 0x9CDBA6
light.position.set(1, 1, 1); // 1,1,1 is for coordinates x,y,z
scene.add(light); // Add it to the scence

// 5.set up the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // set the size of render so it knows what it has to do acc to given parameters it runs on full size in window
document.body.appendChild(renderer.domElement);

// 6.animate the scene
// function animate()
// {
//     requestAnimationFrame(animate)

// }
function animate() {
  requestAnimationFrame(animate); //Request for animation
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
renderer.render(scene, camera);
}
animate();
