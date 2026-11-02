import { useEffect, useRef } from "react";

export default function RenderBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const starCount = 100;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.5,
      baseAlpha: Math.random() * 0.5 + 0.2,
      alpha: Math.random(),
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      drift: Math.random() * 0.1 + 0.05,
    }));

    const render = () => {
      const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
      bgGradient.addColorStop(0, "#020617");
      bgGradient.addColorStop(0.5, "#0f172a");
      bgGradient.addColorStop(1, "#1e1b4b");

      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      stars.forEach((star) => {
        star.alpha += star.twinkleSpeed;

        if (star.alpha > 1 || star.alpha < 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        star.y -= star.drift * 0.2;
        star.x -= star.drift * 0.1;

        if (star.y < 0) star.y = height;
        if (star.x < 0) star.x = width;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(224, 242, 256, ${star.alpha})`;

        if (star.size > 1.8) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = "#38bdf8";
        } else {
          ctx.shadowBlur = 0;
        }
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        display: "block",
      }}
    />
  );
}