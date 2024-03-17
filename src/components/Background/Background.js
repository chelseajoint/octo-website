// Background.js
import React from 'react';
import BackgroundDraw from './BackgroundDraw/BackgroundDraw'; 

import './Background.scss';

const Background = () => {
  return (
    <div className='background'>
      <BackgroundDraw color01="yellow" color02="green" color03="pink" />
      <div className='backgroundBox'>
        <BackgroundDraw className='front' color01="blue" color02="orange" color03="gray" />
      </div>
    </div>
  );
};

export default Background;
