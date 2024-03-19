// BagroundMobile.js
import React, { useEffect, useRef, useState } from 'react';

import backgroundImage from '../../../resource/img.png';

const BackgroundMobile = ({ color01, color02, color03, color04 }) => {
  const canvasRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const canvasWidth = window.innerWidth * .01 * 100;
    const canvasHeight = window.innerWidth * .01 * 180;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    const image = new Image();
    image.src = backgroundImage;
    image.onload = () => {
      setImageLoaded(true);
    };

    const drawBackground = () => {
      // 01
      ctx.fillStyle = color01;
      ctx.beginPath();
      ctx.rect(0, 0, canvasWidth, canvasHeight);
      ctx.fill();
      
      // 02
      ctx.fillStyle = color02;
      
      ctx.beginPath();
      ctx.moveTo(0, canvasHeight * .6);
  
      ctx.lineTo(canvasWidth * .35, canvasHeight * .6);
      ctx.lineTo(canvasWidth * .7, canvasHeight * .8);
      ctx.lineTo(canvasWidth * .7, canvasHeight);
      ctx.lineTo(0, canvasHeight);
      ctx.closePath();
  
      ctx.fill();
  
      // 03
      if (imageLoaded) {
        ctx.drawImage(image, canvasWidth * .35, canvasHeight * .5, canvasWidth * .65, canvasHeight * .42);
      }
  
      // 04
      ctx.fillStyle = color03;
      
      ctx.beginPath();
      ctx.moveTo(0, canvasHeight * .8);
  
      ctx.lineTo(canvasWidth * .35, canvasHeight * .8);
      ctx.lineTo(canvasWidth * .7, canvasHeight);
      ctx.lineTo(0, canvasHeight);
      ctx.closePath();
  
      ctx.fill();
  
      // 05
      ctx.fillStyle = color04;
      ctx.beginPath();
      ctx.rect(0, canvasHeight * .9, canvasWidth, canvasHeight * .1);
      ctx.fill();
    };

    drawBackground();

  }, [color01, color02, color03, color04, imageLoaded]);

  return <canvas ref={canvasRef}></canvas>;
};

export default BackgroundMobile;
