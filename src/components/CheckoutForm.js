import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const { t, i18n } = useTranslation(); // Import the translation hook
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    
    const redirectTo = i18n.language === 'en' ? '/en/thankyou.html' : '/thankyou.html';
    window.location.href = redirectTo; // Redirect to the appropriate static HTML file
  };

  return (
    <div className="checkoutForm_container">
      <h2>{t('checkout.completeYourOrder')}</h2>
      <form onSubmit={handleSubmit} className="checkoutForm_form">
        <label htmlFor="email">{t('checkout.email')}:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="checkoutForm_submitButton">
          {t('checkout.submit')}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
