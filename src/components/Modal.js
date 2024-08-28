import React, { useEffect } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {

  // Handle closing the modal when the Esc key is pressed
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  // Handle closing the modal when clicking outside of it
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal_modalOverlay" onClick={handleOverlayClick} aria-modal="true" role="dialog">
      <div className="modal_modal">
        <button className="modal_closeButton" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        <div className="modal_modalContent">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
