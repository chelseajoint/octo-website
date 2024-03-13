// Footer.js
import React from 'react';
import techcrunch from '../../resource/techcrunch.svg';
import forbes from '../../resource/forbes.svg';
import wsj from '../../resource/wsj.svg';

const Footer = () => {
  return (
    <footer>
      <img src='/resource/' alt='as seen on'/>
      <div className='logos'>
        <img src={techcrunch} alt='logo techcrunch'/>
        <img src={forbes} alt='logo forbs'/>
        <img src={wsj} alt='logo wsj'/>
      </div>
    </footer>
  );
};

export default Footer;
