import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState(''); // New state for nickname
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registering:', { email, password, nickname });
    setIsSubmitted(true); // Set the form as submitted
  };

  if (isSubmitted) {
    return (
      <div className="registrationForm_thankYouMessage">
        <h2>{t('registration.thankYou', { nickname })}</h2>
        <p>{t('registration.successMessage')}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{t('registration.title')}</h2>
      <form onSubmit={handleRegister} className="registrationForm_form">
        <input
          type="text"
          placeholder={t('registration.nicknamePlaceholder')}
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder={t('registration.emailPlaceholder')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder={t('registration.passwordPlaceholder')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="registrationForm_registerButton">
          {t('registration.registerButton')}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
