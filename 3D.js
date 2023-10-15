let screensaverActive = false;
  let interactionTimeout;

  // Function to show the screensaver with 3D content
  function showScreensaver() {
    const screensaverContainer = document.getElementById('screensaver-container');
    screensaverContainer.style.display = 'block';

    // Initialize a Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    screensaverContainer.appendChild(renderer.domElement);

    // Create a geometric shape using a mathematical equation
    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const knot = new THREE.Mesh(geometry, material);
    scene.add(knot);

    camera.position.z = 30;

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the 3D shape
      knot.rotation.x += 0.01;
      knot.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    screensaverActive = true;
  }

  // Function to hide the screensaver
  function hideScreensaver() {
    const screensaverContainer = document.getElementById('screensaver-container');
    screensaverContainer.style.display = 'none';

    // Remove the 3D content
    screensaverContainer.innerHTML = '';

    screensaverActive = false;
  }

  // Function to reset the interaction timer
  function resetInteractionTimer() {
    if (interactionTimeout) {
      clearTimeout(interactionTimeout);
    }
    interactionTimeout = setTimeout(showScreensaver, 60000); // 1 min of inactivity
  }

  // Add event listeners to detect user interaction
  document.addEventListener('mousemove', () => {
    if (screensaverActive) {
      hideScreensaver();
      resetInteractionTimer();
    } else {
      resetInteractionTimeout();
    }
  });

  document.addEventListener('keydown', () => {
    if (screensaverActive) {
      hideScreensaver();
      resetInteractionTimer();
    } else {
      resetInteractionTimer();
    }
  });

  // Initialize the screensaver timer
  resetInteractionTimer();