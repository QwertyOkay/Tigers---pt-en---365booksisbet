import React from 'react';
import './ThankYou.css'; // Assuming you have a CSS file for styling
import thankYouImage from '../assets/thank-you-image.png'; // Replace with your actual image path
import Footer2 from '../components/Footer2';

const ThankYouEn = () => {
  return (<>
    <div className="thankYou_container">
      <h1>Thank You for Your Purchase!</h1>
      <p>Your order has been successfully placed. We appreciate your business and hope you enjoy your purchase!</p>
      <img src={thankYouImage} alt="Thank You" className="thankYou_image" />
      <a href="/" className="thankYou_backButton">
        Back to Shopping
      </a>
     
    </div>
    <Footer2/>
    </>
  );
};

export default ThankYouEn;
