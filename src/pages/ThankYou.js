import React from 'react';
import './ThankYou.css'; // Assuming you have a CSS file for styling
import thankYouImage from '../assets/thank-you-image.png'; // Replace with your actual image path
import Footer3 from '../components/Footer3';

const ThankYou = () => {
  return (
    <>
      <div className="thankYou_container">
        <h1>Obrigado pela sua compra!</h1>
        <p>Seu pedido foi realizado com sucesso. Agradecemos pela sua transação e desejamos boas compras!</p>
        <img src={thankYouImage} alt="Obrigado" className="thankYou_image" />
        <a href="/" className="thankYou_backButton">
          Voltar às compras
        </a>
      </div>
      <Footer3 />
    </>
  );
};

export default ThankYou;
