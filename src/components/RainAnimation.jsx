// RainAnimation.jsx
import React, { useEffect, useRef } from 'react';

const RainAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class RainDrop {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 20 + 10;
        this.speed = Math.random() * 2 + 2;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      fall() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = 0 - this.length;
          this.x = Math.random() * canvas.width;
          this.speed = Math.random() * 2 + 2;
          this.opacity = Math.random() * 0.5 + 0.2;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.strokeStyle = `rgba(173, 216, 230, ${this.opacity})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    const rainDrops = [];
    for (let i = 0; i < 300; i++) {
      rainDrops.push(new RainDrop());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rainDrops.forEach(drop => {
        drop.fall();
        drop.draw();
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full bg-black z-0"
    />
  );
};

export default RainAnimation;
