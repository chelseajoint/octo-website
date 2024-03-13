import React, { useEffect, useState } from 'react';
import ApiService from './services/ApiService';
import DOMPurify from 'dompurify';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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

  return (
    <div className="container">
      <Header navItems={navItems}/>
      <div className="content">
      {isSafeHtml(homeData['header-title']) ? (
          <h1 dangerouslySetInnerHTML={{ __html: homeData['header-title'] }} />
        ) : (
          <h1>No se puede mostrar el contenido de forma segura.</h1>
        )}
      <button>{homeData['header-cta']}</button>
      </div>
      <Footer />
    </div>
  );
};

export default App;
