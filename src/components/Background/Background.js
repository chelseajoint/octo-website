// Background.js
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import BackgroundDesktop from './BackgroundDesktop/BackgroundDesktop'; 
import BackgroundMobile from './BackgoundMobile/BackgroundMobile';

import './Background.scss';

const Background = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  
    return (
      <div className='background'>
        {isMobile ? (
          <BackgroundMobile color01='#474e21' color02='#d2abe4' color03='#e4ebc4' color04='#bec789' />
        ) : (
          <>
            <BackgroundDesktop color01='#e4ebc4' color02='#dce5a3' color03='#bec789' useImage={false} />
            <div className='backgroundBox'>
              <BackgroundDesktop className='front' color01='#474e21' color02='#d2abe4' color03='#e4ebc4' color04='#ffffff' color05='#e4eac3' color06='#d2abe4' useImage={true} />
            </div>
          </>
        )}
      </div>
    );
  };
  

export default Background;
