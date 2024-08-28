import React from 'react';
import './ThankYou.css'; // Assuming you have a CSS file for styling
import thankYouImage from '../assets/thank-you-image.png'; // Replace with your actual image path
import Footer3 from '../components/Footer3';

const ThankYou = () => {
  return (
    <>
      <div className="thankYou_container">
        <h1>Dziękujemy za zakup!</h1>
        <p>Twoje zamówienie zostało pomyślnie złożone. Dziękujemy za Twoją transakcję i życzymy udanych zakupów!</p>
        <img src={thankYouImage} alt="Dziękujemy" className="thankYou_image" />
        <a href="/" className="thankYou_backButton">
          Wróć do zakupów
        </a>
      </div>
      <Footer3 />
    </>
  );
};

export default ThankYou;
