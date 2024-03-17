// BagroundDraw.js
import React, { useEffect, useRef } from 'react';

const BackgroundDraw = ({ color01, color02, color03 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const canvasWidth = window.innerWidth * .01 * 100;
    const canvasHeight = window.innerWidth * .01 * 75;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // 01
    ctx.fillStyle = color01;
    
    ctx.beginPath();
    ctx.moveTo(0, 0);

    ctx.lineTo(canvasWidth * 0.7, 0);
    ctx.lineTo(canvasWidth * .5, canvasHeight * .2);
    ctx.lineTo(canvasWidth * .5, canvasHeight * .8);
    ctx.lineTo(0, canvasHeight * .8);
    ctx.closePath();

    ctx.fill();
    
    // 02
    ctx.fillStyle = color02;
    
    ctx.beginPath();
    ctx.moveTo(canvasWidth * .7, 0);

    ctx.lineTo(canvasWidth * .5, canvasHeight * .2);
    ctx.lineTo(canvasWidth * .5, canvasHeight * .8);
    ctx.lineTo(canvasWidth * .7, canvasHeight * 1);
    ctx.lineTo(canvasWidth * 1, canvasHeight * 1);
    ctx.lineTo(canvasWidth * 1, 0);

    ctx.closePath();

    ctx.fill();

    // 03
    ctx.fillStyle = color03;
    
    ctx.beginPath();
    ctx.moveTo(0, canvasHeight * .8);

    ctx.lineTo(canvasWidth * .5, canvasHeight * .8);
    ctx.lineTo(canvasWidth * .7, canvasHeight * 1);
    ctx.lineTo(0, canvasHeight * 1);
    ctx.closePath();

    ctx.fill();

  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default BackgroundDraw;
