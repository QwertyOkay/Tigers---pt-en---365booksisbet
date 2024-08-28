import React, { useState } from 'react';
import Modal from './Modal';
import './SubscriptionForm.css';
import { useTranslation } from 'react-i18next';

const SubscriptionForm = () => {
  // const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation(); // Initialize translation hook

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (email) {
  //     setIsModalOpen(true);
  //     setEmail('');
  //   }
  // };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="subscriptionForm_subscriptionForm">
      {/* <form onSubmit={handleSubmit} className="subscriptionForm_form">
        <input
          type="email"
          placeholder={t('subscription.placeholder')} // Translated placeholder
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="subscriptionForm_emailInput"
          required
        />
        <button type="submit" className="subscriptionForm_subscribeButton">
          {t('subscription.button')} 
        </button>
      </form> */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>{t('subscription.modalTitle')}</h2> {/* Translated modal title */}
        {t('subscription.modalMessage')} {/* Translated modal message */}
      </Modal>
    </div>
  );
};

export default SubscriptionForm;
