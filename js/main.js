document.addEventListener('DOMContentLoaded', () => {
  // Interactive background effects
  const isIntroPage = document.querySelector('.intro-container') !== null;
  const bgAnimation = document.querySelector('.bg-animation');

  // Mouse/touch movement tracking
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  // Handle mouse movement
  document.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth) * 100;
    mouseY = (e.clientY / window.innerHeight) * 100;
  });

  // Handle touch movement
  document.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    mouseX = (touch.clientX / window.innerWidth) * 100;
    mouseY = (touch.clientY / window.innerHeight) * 100;
  });

  // Smooth animation function
  function animate() {
  // Smooth transition for cursor tracking
  targetX += (mouseX - targetX) * 0.1;
  targetY += (mouseY - targetY) * 0.1;

  if (bgAnimation) {
    // Calculate distance from center for intensity
    const dx = (targetX - 50) * 0.5;
    const dy = (targetY - 50) * 0.5;
    
    // Special effect for intro page
    if (isIntroPage) {
      bgAnimation.style.background = `
        radial-gradient(circle at ${targetX}% ${targetY}%, 
          rgba(0, 255, 242, 0.15),
          rgba(41, 41, 97, 0.1),
          rgba(0, 255, 242, 0.05)
        ),
        linear-gradient(
          ${45 + dx}deg,
          rgba(0, 255, 242, 0.1),
          rgba(41, 41, 97, 0.2),
          rgba(0, 255, 242, 0.1)
        )
      `;
    } else {
      // Subtle effect for other pages
      bgAnimation.style.background = `
        radial-gradient(circle at ${targetX}% ${targetY}%, 
          rgba(0, 255, 242, 0.05),
          rgba(41, 41, 97, 0.05),
          transparent
        )
      `;
    }
    
    // Dynamic transform based on mouse position
    bgAnimation.style.transform = `
      translate(-50%, -50%) 
      rotate(${dx * 0.1}deg)
      scale(${1 + Math.abs(dx + dy) * 0.001})
    `;
  }

  requestAnimationFrame(animate);
}

// Start the animation
animate();
  let y = touch.clientY / window.innerHeight;
  document.body.style.background = `radial-gradient(circle at ${x*100}% ${y*100}%, #0a0f29, #000, #001133)`;
});