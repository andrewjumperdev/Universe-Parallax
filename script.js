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
      // Crear el cometa
      const comet = document.createElement('div');
      comet.classList.add('comet');
  
      // Posición aleatoria de inicio
      const startX = Math.random() * window.innerWidth; // Posición horizontal aleatoria
      const startY = Math.random() * window.innerHeight * 0.2; // Posición vertical aleatoria (cerca de la parte superior)
      comet.style.left = `${startX}px`;
      comet.style.top = `${startY}px`;
  
      // Tamaño aleatorio entre 10px y 30px
      const size = Math.random() * 15 + 10;
      comet.style.width = `${size}px`;
      comet.style.height = `${size}px`;
  
      // Asignar un z-index aleatorio
      comet.style.zIndex = Math.floor(Math.random() * 10) + 1; // z-index aleatorio entre 1 y 10
  
      // Cola difusa y efecto estela
      comet.style.boxShadow = `0 0 15px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.3), 0 0 50px rgba(255, 255, 255, 0.1)`;
  
      // Agregar el cometa al contenedor
      cometContainer.appendChild(comet);
  
      setTimeout(() => {
        comet.remove();
      }, 5000);
    }

    setInterval(createComet, 300);
  });
  
  