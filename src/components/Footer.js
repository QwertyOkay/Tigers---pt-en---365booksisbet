import React from 'react';
import './Footer2.css';
// import SubscriptionForm from './SubscriptionForm';
import { useSite } from '../context/SiteContext';

import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const { siteName } = useSite();
  const currentYear = new Date().getFullYear();

  const isEnglish = i18n.language === 'en';

  // Adjust paths based on language
  const getLocalizedPath = (path) => {
    if (isEnglish && path === '/') {
      return '/en'; // Redirect to /en if English and the path is '/'
    }
    return isEnglish ? `/en${path}` : path;
  };

  return (
    <footer className="footer_footer">
       {/* <div id="subscribe-section">
      <SubscriptionForm />
      </div> */}
      <div className="footer_linksContainer">
        
        <div className="footer_category">
          
          <h3>{t('footer.customerService')}</h3>
          <a href={getLocalizedPath('/privacy.html')} className="footer_footerLink">
            {t('footer.privacy')}
          </a>
          <a href={getLocalizedPath('/terms.html')} className="footer_footerLink">
            {t('footer.terms')}
          </a>
        </div>
        <div className="footer_category">
          <h3>{t('footer.links')}</h3>
          <a href={getLocalizedPath('/')} className="footer_footerLink">
            {t('footer.home')}
          </a>
          <a href={getLocalizedPath('/contact')} className="footer_footerLink">
            {t('footer.contact')}
          </a>
        </div>
      </div>
     
     
      <div className="footer_footerCopyright">
        {siteName} &copy; {currentYear} <br /> {t('footer.rightsReserved')}
      </div>
    </footer>
  );
};

export default Footer;
