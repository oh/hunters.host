/* 
  Author:      Hunter Webb
  Last Edited: 12/21/2022
  Description: This file contains the code for the client side of the website.
*/


// Meteor imports
import { Template } from 'meteor/templating';

// Blaze imports
import './main.html';

// Three.js imports
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';

/* Begin Home */

Template.home.onRendered(function homeOnRendered() {
  // Three.js variables
  let camera, scene, renderer, composer;
  let object, light;

  let glitchPass;

  // Initialize Three.js
  function init() {
    // WebGL Renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Camera
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 400;

    // Scene
    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 1, 1000);

    // Object
    object = new THREE.Object3D();  
    scene.add(object);

    // Geometry
    const geometry = new THREE.SphereGeometry(1, 4, 4);

    // Add 100 spheres to the object
    for (let i = 0; i < 100; i ++) {
      // Set the color of the sphere to a random color
      const material = new THREE.MeshPhongMaterial({ color: 0xffffff * Math.random(), flatShading: true });

      // Set the position, rotation, and scale of the sphere to random values
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
      mesh.position.multiplyScalar(Math.random() * 400);
      mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
      mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 50;

      // Add the sphere to the object
      object.add(mesh);
    }

    // Lighting
    scene.add(new THREE.AmbientLight(0x222222));

    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(1, 1, 1);
    scene.add(light);

    // Postprocessing
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    glitchPass = new GlitchPass();
    composer.addPass(glitchPass);

    // Resize event listener
    window.addEventListener('resize', onWindowResize);
  }

  function onWindowResize() {
    // Update camera aspect ratio
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    // Update renderer and composer size
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
  }

  // Animation loop
  function animate() {
    // Request next animation frame
    requestAnimationFrame(animate);

    // Return if the user is not on the home page or the window is not in focus
    if (!document.hasFocus()) return;

    // Update object rotation
    object.rotation.x += 0.005;
    object.rotation.y += 0.01;

    // Render the scene
    composer.render();
  }

  // Start Three.js
  init();
  animate();
});

/* End Home */



/* Begin Nav */

// Global buttonScroll variable
let buttonScroll = false;

Template.nav.onCreated(function navOnCreated() {
  // Add scroll event listener to window
  window.addEventListener('scroll', () => {
    // If button scroll, return
    if (buttonScroll) return;

    // Check what div is in the center of the screen
    const divs = window.document.getElementById('layout').children;
    let div, j;
    for (let i = 0; i < divs.length; i++) {
      if (divs[i].className === 'nav') continue;
      const rect = divs[i].getBoundingClientRect();
      if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
        div = divs[i];
        j = i;
        break;
      }
    }

    // Remove active from all nav-buttons 
    const navButtons = document.getElementsByClassName('nav-button');
    for (let i = 0; i < navButtons.length; i++)
      navButtons[i].classList.remove('active');

    // Add active to the nav-button with the same id as the div
    const navButton = document.getElementById(`${div.id}-button`);
    navButton.classList.add('active');

    // Check what direction the user is scrolling
    const scrollDirection = window.scrollY > this.scrollY ? 'down' : 'up';
    this.scrollY = window.scrollY;

    // If the user is scrolling down and the middle of the div is off the screen, scroll to the next div
    if (scrollDirection === 'down' && div.getBoundingClientRect().bottom % window.innerHeight < window.innerHeight / 2)
      div.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // If the user is scrolling up and the middle of the div is off the screen, scroll to the previous div
    if (scrollDirection === 'up' && divs[j].getBoundingClientRect().bottom % window.innerHeight > window.innerHeight / 2)
      div.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

Template.nav.events({
  'click'(event, instance) {
    // Check if element clicked is of class nav-button
    if (!event.target.classList.contains('nav-button')) return;

    // Get the id of the element clicked
    const id = event.target.id;

    // Remove -button from id
    const idNoButton = id.slice(0, -7);

    // Remove active from all nav-buttons
    const navButtons = document.getElementsByClassName('nav-button');
    for (let i = 0; i < navButtons.length; i++) {
      navButtons[i].classList.remove('active');
    }

    // Add active to the clicked nav-button
    event.target.classList.add('active');

    // Move the div with the same class as id to the center of the screen
    const div = document.getElementById(idNoButton);
    buttonScroll = true;
    div.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => { buttonScroll = false; }, 600);
  },
});

/* End Nav */
