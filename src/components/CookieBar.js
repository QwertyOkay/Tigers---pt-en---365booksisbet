import React, { useState, useEffect } from 'react';
import './CookieBar.css';
import { useTranslation } from 'react-i18next';

const CookieBar = () => {
  const { t, i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (hasAcceptedCookies) {
      setIsVisible(false);
    }
  }, []);

  const handleConfirm = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  // Adjust paths based on language
  const getLocalizedPath = (path) => {
    return i18n.language === 'en' ? `/en${path}` : path;
  };

  return (
    isVisible && (
      <div className="cookieBar_cookieBar">
        <p>
          {t('cookieBar.message')}{' '}
          <a href={getLocalizedPath('/privacy.html')}>{t('cookieBar.learnMore')}</a>
        </p>
        <button onClick={handleConfirm} className="cookieBar_confirmButton">
          {t('cookieBar.confirm')}
        </button>
      </div>
    )
  );
};

export default CookieBar;
