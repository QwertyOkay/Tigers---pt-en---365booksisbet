import React from 'react';
import './Contact.css'; // Assuming you have a CSS module for styling
import Footer3 from '../components/Footer3';

const Contact = () => {
  return (
    <>
      <div className="contact_contactInfo"> 
    <h1>Fale Conosco</h1>
    <p>Se você tiver qualquer dúvida, não hesite em nos contatar!</p>
    
    <h2>Endereço</h2>
    <p>365booksisbet.com<br />Av. Paulista, 1500<br />01310-100 São Paulo, Brasil</p>
    
    <h2>Telefone</h2>
    <p>+55 11 91234-5678</p>
    
    <h2>Email</h2>
    <p><a href="mailto:info@365booksisbet.com">info@365booksisbet.com</a></p>
    
    <h2>Nossa Localização</h2>
    <p>Estamos localizados no coração de São Paulo, na Avenida Paulista, facilmente acessível por transporte público.</p>

    <iframe
      title="Nossa Localização"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.242143916506!2d-46.65878578442507!3d-23.56483296707186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b74caa3db3%3A0x1f7e7a5e18a9fd8!2sAv.%20Paulista%2C%201500%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100%2C%20Brazil!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
      width="600"
      height="450"
      className='contact_mapContainer'
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"></iframe>
    
    {/* Palavras-chave ocultas para SEO */}
    <div style={{ visibility: 'hidden' }}>
      betnacional, bet nacional, pix bet, betpix365, betnacio
    </div>
      </div>

      <Footer3/>
    </>
  );
};

export default Contact;
