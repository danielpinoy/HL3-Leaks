import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeJsBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.03); // Reduced fog density

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight * 0.7);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Add more lights for better distribution of glow
    const ambientLight = new THREE.AmbientLight(0xff7400, 0.1); // Subtle orange ambient light
    scene.add(ambientLight);

    // Add multiple point lights positioned strategically
    const pointLight1 = new THREE.PointLight(0xff7400, 0.8, 15);
    pointLight1.position.set(0, 3, 3); // Top center
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff7400, 0.6, 10);
    pointLight2.position.set(0, -2, 3); // Bottom center
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xff7400, 0.4, 12);
    pointLight3.position.set(-3, 0, 4); // Left
    scene.add(pointLight3);

    const pointLight4 = new THREE.PointLight(0xff7400, 0.4, 12);
    pointLight4.position.set(3, 0, 4); // Right
    scene.add(pointLight4);

    // Particles - increased count and better distribution
    const particleCount = 200; // More particles
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    // Create a wider, more even distribution of particles
    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position in a wider area with more at the top
      positions[i] = (Math.random() - 0.5) * 20; // X position

      // Bias more particles towards the top half of the screen
      const topBias = Math.random() < 0.6; // 60% of particles in top half
      if (topBias) {
        positions[i + 1] = Math.random() * 10; // Y position (top half)
      } else {
        positions[i + 1] = Math.random() * 10 - 10; // Y position (bottom half)
      }

      positions[i + 2] = (Math.random() - 0.5) * 10 - 5; // Z position (mostly behind text)

      // Velocity - slower for more subtle movement
      velocities.push({
        x: (Math.random() - 0.5) * 0.008,
        y: (Math.random() - 0.5) * 0.008,
        z: (Math.random() - 0.5) * 0.005,
      });
    }

    particles.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xff7400,
      size: 0.08,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending, // For brighter particles
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    // Add connecting lines between particles for light web effect
    const lineGeometry = new THREE.BufferGeometry();
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xff7400,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
    });
    const linePositions = new Float32Array(particleCount * 6); // For possible lines
    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Render loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update particle positions
      const positions = particles.attributes.position.array;
      let lineIndex = 0;

      for (let i = 0; i < particleCount * 3; i += 3) {
        const idx = i / 3;

        positions[i] += velocities[idx].x;
        positions[i + 1] += velocities[idx].y;
        positions[i + 2] += velocities[idx].z;

        // Boundary check and reverse direction
        if (Math.abs(positions[i]) > 10) velocities[idx].x *= -1;
        if (Math.abs(positions[i + 1]) > 10) velocities[idx].y *= -1;
        if (Math.abs(positions[i + 2]) > 10) velocities[idx].z *= -1;
      }

      particles.attributes.position.needsUpdate = true;

      // Draw connecting lines (for glowing web effect)
      lineIndex = 0;
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          // Only process every 10th particle pair for performance
          if ((i * j) % 10 !== 0) continue;

          const i3 = i * 3;
          const j3 = j * 3;

          const dx = positions[i3] - positions[j3];
          const dy = positions[i3 + 1] - positions[j3 + 1];
          const dz = positions[i3 + 2] - positions[j3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          // Only connect close particles
          if (dist < 2.5 && lineIndex < linePositions.length - 6) {
            linePositions[lineIndex++] = positions[i3];
            linePositions[lineIndex++] = positions[i3 + 1];
            linePositions[lineIndex++] = positions[i3 + 2];

            linePositions[lineIndex++] = positions[j3];
            linePositions[lineIndex++] = positions[j3 + 1];
            linePositions[lineIndex++] = positions[j3 + 2];
          }
        }
      }

      // Clear unused line segments
      for (let i = lineIndex; i < linePositions.length; i++) {
        linePositions[i] = 0;
      }

      lineGeometry.attributes.position.needsUpdate = true;

      // Move camera slightly to create subtle motion
      camera.position.x = Math.sin(Date.now() * 0.0002) * 0.5;
      camera.position.y = Math.cos(Date.now() * 0.0001) * 0.5;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight * 0.7;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      // Dispose of resources
      particles.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute top-0 left-0 w-full h-full z-0"
    ></div>
  );
};

export default ThreeJsBackground;
