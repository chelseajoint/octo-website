// Footer.js
import React from 'react';
import techcrunch from '../../resource/techcrunch.svg';
import forbes from '../../resource/forbes.svg';
import wsj from '../../resource/wsj.svg';

import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <p>As seen on!</p>
      <div className='logos'>
        <img src={techcrunch} alt='logo techcrunch'/>
        <img src={forbes} alt='logo forbs'/>
        <img src={wsj} alt='logo wsj'/>
      </div>
    </footer>
  );
};

export default Footer;
