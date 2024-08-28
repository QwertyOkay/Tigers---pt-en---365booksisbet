import React from 'react';
import './Footer2.css'; // You can keep the same CSS file

const Footer3 = () => {

  return (
    <footer className="footer_footer">
      <div className="footer_linksContainer">
        <div className="footer_category">
          <h3>Obsługa Klienta</h3>
          <a href="/privacy.html" className="footer_footerLink">Política de privacidade</a>
           <a href="/terms.html" className="footer_footerLink">Termos e condições</a>
        </div>
        <div className="footer_category">
          <h3>Linki</h3>
          <a href="/en" className="footer_footerLink">Página inicial</a>
           <a href="./contact.html" className="footer_footerLink">Contato</a>
        </div>
      </div>
 
      <div className="footer_footerCopyright">
      365booksisbet.com &copy; 2024<br /> Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer3;
