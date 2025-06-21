import React, { useEffect, useRef } from "react";
import { WaveGradient } from "wave-gradient";

const AnimatedGradient: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;

    const grad = new WaveGradient(canvasEl, {
      colors: ["#dca8d8", "#a3d3f9", "#7038ff", "#ffba27"],
      amplitude: 320,
      speed: 1.25,
      density: [0.06, 0.16],
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ display: "block" }}
    />
  );
};

export default AnimatedGradient;


// const AnimatedGradient: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let width = canvas.width = window.innerWidth;
//     let height = canvas.height = window.innerHeight;

//     const colors = ["#8ec5fc", "#e0c3fc", "#d9afd9"];
//     let frame = 0;

//     const draw = () => {
//       frame += 0.02;
//       const gradient = ctx.createRadialGradient(
//         width / 2,
//         height / 2,
//         200 + Math.sin(frame) * 100,
//         width / 2,
//         height / 2,
//         700
//       );

//       colors.forEach((color, i) => {
//         gradient.addColorStop(i / (colors.length - 1), color);
//       });

//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, width, height);

//       requestAnimationFrame(draw);
//     };

//     draw();

//     const handleResize = () => {
//       width = canvas.width = window.innerWidth;
//       height = canvas.height = window.innerHeight;
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="absolute inset-0 w-full h-full z-0"
//       style={{ display: "block" }}
//     />
//   );
// };

// export default AnimatedGradient;




