import { useEffect } from "react";

function ClickParticles() {
  useEffect(() => {
    const createParticles = (x, y) => {
      const colors = ["#cd5ff8", "#7b2fff", "#00e0ff", "#e89fff", "#ffffff"];
      const particleCount = 12;

      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 8 + 4;
        const angle = (i / particleCount) * 360;
        const velocity = Math.random() * 80 + 40;
        const rad = (angle * Math.PI) / 180;

        particle.style.cssText = `
          position: fixed;
          width: ${size}px;
          height: ${size}px;
          background: ${color};
          border-radius: 50%;
          pointer-events: none;
          z-index: 999999;
          left: ${x}px;
          top: ${y}px;
          box-shadow: 0 0 ${size * 2}px ${color};
          transform: translate(-50%, -50%);
        `;

        document.body.appendChild(particle);

        const destX = x + Math.cos(rad) * velocity;
        const destY = y + Math.sin(rad) * velocity;

        particle.animate(
          [
            {
              transform: "translate(-50%, -50%) scale(1)",
              opacity: 1,
              left: `${x}px`,
              top: `${y}px`,
            },
            {
              transform: "translate(-50%, -50%) scale(0)",
              opacity: 0,
              left: `${destX}px`,
              top: `${destY}px`,
            },
          ],
          {
            duration: Math.random() * 400 + 400,
            easing: "cubic-bezier(0, .9, .57, 1)",
            fill: "forwards",
          }
        ).onfinish = () => particle.remove();
      }
    };

    const onClick = (e) => createParticles(e.clientX, e.clientY);
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return null;
}

export default ClickParticles;