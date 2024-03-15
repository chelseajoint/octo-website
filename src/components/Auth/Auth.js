// Auth.js
import React from 'react';
import Button from '../Button/Button';

import './Auth.scss';

const Auth = () => {
  const handleLogin = () => {
    console.log('handleLogin')
  };

  const handleQuote = () => {
    console.log('handleQuote')
  };

  return (
    <div className="auth">
      <Button name="logIn" title="Log in" onClick={handleLogin} />
      <Button name="get" title="Get a quote" onClick={handleQuote} />
    </div>
  );
};

export default Auth;
