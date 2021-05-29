let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 100);
camera.position.set(0, 0, 25); 
var renderer = new THREE.WebGLRenderer({
  antialias: true,
}); 
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); 
window.addEventListener('mousemove',(e) => {
  mouseX = e.pageX - window.innerWidth / 2;
  mouseY = e.pageY - window.innerHeight / 2;
  tissue.rotation.y = mouseX * 0.0008;
  tissue.rotation.x = mouseY * 0.001;  
})

const ambientLight = new THREE.AmbientLight('#ffffff', .5);
const spotLight = new THREE.SpotLight('#ffffff', .9);
const spotLight2 = new THREE.SpotLight('#ffffff', .7);
scene.add(ambientLight);
scene.add(spotLight);
scene.add(spotLight2);
spotLight.position.set(10,-8,16);
spotLight.castShadow = true;
spotLight.shadow.mapSize.height = 1800;
spotLight.shadow.mapSize.width = 1800;
spotLight.target.position.set(0, 0, 0);
spotLight2.position.set(-5,15,18);
spotLight2.castShadow = true;
spotLight2.shadow.mapSize.height = 1800;
spotLight2.shadow.mapSize.width = 1800;
spotLight2.target.position.set(0, 0, 0);
// const cameraHelper = new THREE.CameraHelper(spotLight2.shadow.camera);
// scene.add(cameraHelper);

// const cameraHelper2 = new THREE.CameraHelper(spotLight.shadow.camera);
// scene.add(cameraHelper2);

const tissue = new THREE.Group();
scene.add(tissue);

// const groundGeometry = new THREE.PlaneGeometry(115, 115, 12);
// const groundMaterial = new THREE.MeshPhongMaterial({
//   color: '#221122'
// });
// const ground = new THREE.Mesh(groundGeometry,groundMaterial);
// scene.add(ground);
// ground.position.z = -8;
// ground.receiveShadow = true;

for (let i = 0; i < 140; i++) {
  
  const arcShape = new THREE.Shape(); 
  const r = 0.2 + i * 0.2;
  const thickness = 0.2;
  arcShape.absarc( 0, 0, r, 0, Math.PI * 2, false ); 
  const holePath = new THREE.Path(); 
  holePath.absarc( 0, 0, r - thickness, 0, Math.PI * 2, true );
  arcShape.holes.push( holePath );

  const extrudeGeom = new THREE.ExtrudeBufferGeometry(arcShape, {depth: 2, curveSegments: 128, bevelEnabled: false});

  const skin = new THREE.Mesh(extrudeGeom, new THREE.MeshPhongMaterial({color: `rgb(${i % 2 * Math.floor(255 - Math.random() * 80) + Math.floor(Math.random() * 15)},${i % 2 * Math.floor(55 - Math.random() * 20) + Math.floor(Math.random() * 15)},${i % 2 * Math.floor(255 - Math.random() * 180)})`}));
  skin.receiveShadow = true;
  skin.castShadow = true;
  tissue.add(skin);
}
tissue.rotation.y = -.35;
tissue.rotation.x = 0.1;

renderer.setAnimationLoop(() => { renderer.render(scene, camera); });

requestAnimationFrame(render);

function render(now) {
  tissue.children.forEach((skin, i) => {
    skin.scale.set(1, 1, Math.sin((now + i * 60) * 0.002) * (1.5 + i * 0.04));
    skin.position.set(0, 0, Math.abs(Math.sin((now + i * 60) * 0.002)) * (2 + i * 0.04));
  })
  requestAnimationFrame(render);
}