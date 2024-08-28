import React, { useState } from 'react';
import './Cart.css';
import { useSite } from '../context/SiteContext';
import { useTranslation } from 'react-i18next';
import CheckoutForm from './CheckoutForm';
import productsEn from '../data/products-en'; // English products data
import productsCs from '../data/products'; // Czech products data

const Cart = ({ onClose }) => {
  const { cart, removeFromCart, resetCart, getCartTotal } = useSite();
  const { t, i18n } = useTranslation();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  // Determine the current language and load the corresponding product data
  const products = i18n.language === 'cs' ? productsCs : productsEn;

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleCheckout = () => {
    setShowCheckoutForm(true);
  };

  const getProduct = (id) => {
    return products.find(product => product.id === id);
  };

  return (
    <div className="cart_cartOverlay">
      <div className="cart_cartContainer">
        <button className="cart_closeButton" onClick={onClose}>×</button>
        <h2>{t('cart.title')}</h2>
        {cart.length === 0 ? (
          <p>{t('cart.empty')}</p>
        ) : (
          <>
            {!showCheckoutForm ? (
              <>
                <ul className="cart_cartItems">
                  {cart.map(item => {
                    const product = getProduct(item.id);
                    return (
                      <li key={item.id} className="cart_cartItem">
                        <img src={product.image} alt={product.name} className="cart_cartItemImage" />
                        <div className="cart_cartItemDetails">
                          <h3>{product.name}</h3>
                          <p>{product.description}</p>
                          <p>{t('cart.price')}: {item.price} BRL</p>
                          <p>{t('cart.quantity')}: {item.quantity}</p>
                          <button onClick={() => handleRemove(item.id)} className="cart_removeButton">
                            {t('cart.remove')}
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="cart_cartSummary">
                  <p>{t('cart.subtotal')}: {getCartTotal()} BRL</p>
                  <button className="cart_checkoutButton" onClick={handleCheckout}>
                    {t('cart.checkout')}
                  </button>
                  <button onClick={resetCart} className="cart_resetButton">
                    {t('cart.reset')}
                  </button>
                </div>
              </>
            ) : (
              <CheckoutForm />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
