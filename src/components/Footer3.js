import React from 'react';
import './Footer2.css'; // You can keep the same CSS file

const Footer3 = () => {

  return (
    <footer className="footer_footer">
      <div className="footer_linksContainer">
        <div className="footer_category">
          <h3>Obsługa Klienta</h3>
          <a href="/terms.html" className="footer_footerLink">Regulamin</a>
          <a href="/privacy.html" className="footer_footerLink">Polityka prywatności</a>
        </div>
        <div className="footer_category">
          <h3>Linki</h3>
          <a href="./contact.html" className="footer_footerLink">Kontakt</a>
          <a href="/en" className="footer_footerLink">Strona główna</a>
        </div>
      </div>
 
      <div className="footer_footerCopyright">
      TotalClothesOnline 2024<br /> Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
};

export default Footer3;
