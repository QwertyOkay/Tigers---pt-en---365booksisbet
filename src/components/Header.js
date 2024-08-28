import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Header.css';
import cartIcon from '../assets/cart.png';
import registerIcon from '../assets/register.png';
import { useSite } from '../context/SiteContext';
import Cart from './Cart';
import Modal from './Modal';
import RegistrationForm from './RegistrationForm';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const { cart } = useSite();
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleRegister = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

  const changeLanguage = (lng) => {
    const currentPath = location.pathname;

    let newPath;
    if (lng === 'en') {
      newPath = `/en${currentPath === '/' ? '' : currentPath}`;
    } else {
      newPath = currentPath.startsWith('/en') ? currentPath.replace('/en', '') || '/' : currentPath;
    }

    i18n.changeLanguage(lng);
    navigate(newPath);
  };

  return (
    <header className="header_header">
      <div className="header_leftContainer">

        <button onClick={toggleRegister} className="header_iconButton">
        <img src={registerIcon} alt='Reg'></img> 
        </button>
        <button onClick={toggleCart} className="header_cartButton">
          <img src={cartIcon} alt='Cart'></img> <span className="header_cartCount">{totalItems}</span>
        </button>

        

      </div>

      <div className="header_logoContainer">
        <Link to="/" className="header_logo">
         365booksisbet
        </Link>
      </div>

      <div className="header_rightContainer">

        <div className="header_langSwitcher">
          <button onClick={() => changeLanguage('cs')}>PT</button>
          <button onClick={() => changeLanguage('en')}>EN</button>
        </div>

      </div>

      {isCartOpen && <Cart onClose={toggleCart} />}
      {isRegisterOpen && (
        <Modal isOpen={isRegisterOpen} onClose={toggleRegister}>
          <RegistrationForm />
        </Modal>
      )}
    </header>
  );
};

export default Header;