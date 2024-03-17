// Background.js
import React from 'react';
import BackgroundDraw from './BackgroundDesktop/Desktop'; 

import './Background.scss';

const Background = () => {
  return (
    <div className='background'>
      <BackgroundDraw color01='#e4eac3' color02='#dce5a3' color03='#bec789' />
      <div className='backgroundBox'>
        <BackgroundDraw className='front' color01='#474e21' color02='#d2abe4' color03='#e4eac3' />
      </div>
    </div>
  );
};

export default Background;
