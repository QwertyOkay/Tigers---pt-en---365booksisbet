import React from 'react';
import './Contact.css'; // Assuming you have a CSS module for styling
import Footer3 from '../components/Footer3';

const Contact = () => {
  return (
    <>
      <div className="contact_contactInfo">
        <h1>Skontaktuj się z nami</h1>
        <p>Jeśli masz jakiekolwiek pytania, nie wahaj się z nami skontaktować!</p>
        
        <h2>Adres</h2>
        <p>TotalClothesOnline.com<br />ul. Nowy Świat 22<br />00-001 Warszawa, Polska</p>
        
        <h2>Telefon</h2>
        <p>+48 22 827 73 82</p>
        
        <h2>Email</h2>
        <p><a href="mailto:info@totalclothesonline.com">info@totalclothesonline.com</a></p>
        
        <h2>Nasza lokalizacja</h2>
        <p>Znajdujemy się w centrum Warszawy na ulicy Nowy Świat, łatwo dostępnej dzięki komunikacji miejskiej.</p>

        <iframe
          title="Nasza lokalizacja"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.6158294886197!2d21.017532615797476!3d52.23192317976054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc6c1d3b7f17%3A0xa691f4f3bba5e176!2sNowy%20%C5%9Awiat%2022%2C%2000-001%20Warszawa%2C%20Poland!5e0!3m2!1sen!2spl!4v1690000000000!5m2!1sen!2spl"
          width="600"
          height="450"
          className='contact_mapContainer'
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        
        {/* Hidden keywords for SEO */}
        <div style={{ display: 'none' }}>
          gg, spin, toto, nitro, slot, play
        </div>
      </div>
      <Footer3/>
    </>
  );
};

export default Contact;
