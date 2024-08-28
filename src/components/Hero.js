import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Hero.css'; // Non-modular CSS file
import backgroundImage from '../assets/hero-background.webp'; // Ensure you have a background image
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation(); // Get the translation function

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -calculateFixedHeaderHeight(); // Adjust for fixed header height
      const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  };

  const calculateFixedHeaderHeight = () => {
    const headerHeight = 0.13 * window.innerHeight; // 13vh equivalent in pixels
    return headerHeight;
  };

  const handleButtonClick = (id, path) => {
    if (location.pathname === path) {
      scrollToSection(id);
    } else {
      navigate(path, { state: { scrollToSection: id } });
    }
  };

  React.useEffect(() => {
    if (location.state?.scrollToSection) {
      scrollToSection(location.state.scrollToSection);
    }
  }, [location]);

  return (
    <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay"></div>
      <div className="content">
        <h1 className="slogan">{t('hero.slogan')}</h1>
        <p className="description">{t('hero.info')}</p>
        <div className="buttons">
          <button
            onClick={() => handleButtonClick('products-section', '/')}
            className="orderButton"
          >
            {t('hero.orderNow')}
          </button>
      
          <button
            onClick={() => handleButtonClick('subscribe-section', '/')}
            className="orderButton"
          >
            {t('hero.subscribeNow')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
