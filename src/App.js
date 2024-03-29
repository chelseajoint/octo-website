import React, { useEffect, useState } from 'react';
import ApiService from './services/ApiService';
import DOMPurify from 'dompurify';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Button from './components/Button/Button';
import Background from './components/Background/Background';

import './App.scss';

const App = () => {
  const [navItems, setNavItems] = useState([]);
  const [homeData, setHomeData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiService.getData();
        console.log(response)
        setNavItems(response.nav);
        setHomeData(response.home);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const isSafeHtml = (htmlString) => {
    const cleanedHtml = DOMPurify.sanitize(htmlString);
    return cleanedHtml === htmlString;
  };

  const handleCta = () => {
    console.log('handleCta')
  };

  return (
    <div className='app'>
      <Background />
      <div className="container">
      <Header navItems={navItems}/>
      <div className="content">
      {isSafeHtml(homeData['header-title']) ? (
          <h1 dangerouslySetInnerHTML={{ __html: homeData['header-title'] }} />
        ) : (
          <h1>No se puede mostrar el contenido de forma segura.</h1>
        )}
      <div className='offert'>
        <h3 className='coin'>$</h3>
        <h3>$10.99 / month</h3>
        <h2>500k <span className='title-accent'>covered</span></h2>
      </div>
      <Button name="cta" title={homeData['header-cta']} onClick={handleCta} />
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default App;
