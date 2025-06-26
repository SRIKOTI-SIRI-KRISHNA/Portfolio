import * as THREE from 'three'   //This line means * (everything) import as three js
const canvas=document.getElementById("canvas")
// 1.create a scene
const scene=new THREE.Scene();
// create a camera
const camera=new THREE.PerspectiveCamera(75,window.innerWidth,window.innerHeight, 0.1,1000)  //near=0.1 and far=1000
// camera.position.set(0,0,canvas.width,canvas.height)
camera.position.z=5
// add object in space
const geometry =new THREE.DodecahedronGeometry()
const material=new THREE.MeshBasicMaterial({color:"#468585"})
const dodecahedron=new THREE.Mesh(geometry, material)

const boxgeometry=new THREE.BoxGeometry(2,0.1,1) //2 for width 0.1 for height 1 for depth
const boxMaterial=new THREE.MeshBasicMaterial({color:"#B4B4B4"})
const box=new THREE.Box(boxgeometry,boxMaterial)
box.position.y=-1.5
scene.add(dodecahedron)