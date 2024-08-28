import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const { t } = useTranslation();

  const [cart, setCart] = useState(() => {
    // Initialize the cart from localStorage if available
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    // Save the cart to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => 
      prevCart.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            return [...acc, { ...item, quantity: item.quantity - 1 }];
          }
          return acc;
        }
        return [...acc, item];
      }, [])
    );
  };

  const resetCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getItemQuantity = (productId) => {
    const product = cart.find(item => item.id === productId);
    return product ? product.quantity : 0;
  };

  const siteInfo = {
    siteName: "365booksisbet.com",
    slogan: t('site.slogan', 'Moda na każdą okazję'), // Translated slogan
    info: t('site.info', 'Twój ulubiony sklep z odzieżą online oferujący najnowsze trendy każdego dnia.'), // Translated info
    thankYouProduct: t('site.thankYouProduct', 'Dziękujemy za dodanie tego produktu do koszyka!'), // Translated thank you product message
    thankYouSubscription: t('site.thankYouSubscription', 'Dziękujemy za zapisanie się do naszego newslettera!'), // Translated thank you subscription message
    thankYouOrder: t('site.thankYouOrder', 'Dziękujemy za zamówienie! Wkrótce dostarczymy Twoje zakupy.'), // Translated thank you order message
    address: t('site.address', '123 Ulica Mody, Modne Miasto, Polska'), // Translated address
    phone: t('site.phone', '+48-123-456-789'), // Phone number (usually not translated)
    email: t('site.email', 'support@365booksisbet.com'), // Email (usually not translated)
    mapIframe: "<iframe src='https://www.google.com/maps/embed?...'></iframe>", // Replace with your actual map iframe code
    cart,
    addToCart,
    removeFromCart,
    resetCart,
    getCartTotal,
    getItemQuantity,
  };

  return (
    <SiteContext.Provider value={siteInfo}>
      {children}
    </SiteContext.Provider>
  );
};

// Create a custom hook to use the SiteContext
export const useSite = () => {
  return useContext(SiteContext);
};
