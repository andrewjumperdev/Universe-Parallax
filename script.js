document.addEventListener('DOMContentLoaded', () => {
    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene);

    window.addEventListener('deviceorientation', (e) => {
      const { gamma, beta } = e;

      const intensity = 10;

      scene.style.transform = `rotateX(${beta / intensity}deg) rotateY(${gamma / intensity}deg)`;
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const cometContainer = document.getElementById('comet-container');
  
    function createComet() {

      const comet = document.createElement('div');
      comet.classList.add('comet');
  
      const startX = Math.random() * window.innerWidth; 
      const startY = Math.random() * window.innerHeight * 0.2; 
      comet.style.left = `${startX}px`;
      comet.style.top = `${startY}px`;

      const size = Math.random() * 15 + 10;
      comet.style.width = `${size}px`;
      comet.style.height = `${size}px`;
  
      comet.style.zIndex = Math.floor(Math.random() * 10) + 1;
  
      comet.style.boxShadow = `0 0 15px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.3), 0 0 50px rgba(255, 255, 255, 0.1)`;

      cometContainer.appendChild(comet);
  
      setTimeout(() => {
        comet.remove();
      }, 5000);
    }

    setInterval(createComet, 300);
  });
  
  