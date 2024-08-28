import React from 'react';
import './Footer2.css';

const Footer2 = () => {

  return (
    <footer className="footer_footer">
      <div className="footer_linksContainer">
        <div className="footer_category">
          <h3>Customer Service</h3>
          <a href="./terms.html" className="footer_footerLink">Terms & Conditions</a>
          <a href="./privacy.html" className="footer_footerLink">Privacy Policy</a>
         
        </div>
        <div className="footer_category">
          <h3>Links</h3>
          <a href="./contact.html" className="footer_footerLink">Contact Us</a>
          <a href="/" className="footer_footerLink">Home</a>
          
        </div>
      </div>
 
      <div className="footer_footerCopyright">
      365booksisbet.com 2024<br /> All rights reserved.
      </div>
    </footer>
  );
};

export default Footer2;
