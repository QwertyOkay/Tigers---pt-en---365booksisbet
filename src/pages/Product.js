import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsDefault from '../data/products'; // Default language products (Polish)
import productsEn from '../data/products-en'; // English language products
import './Product.css';
import { useSite } from '../context/SiteContext';
import { useTranslation } from 'react-i18next';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // Start with a default quantity of 1
  const { addToCart } = useSite();
  const { i18n } = useTranslation();

  // Determine which product data to use based on the current language
  const products = i18n.language === 'en' ? productsEn : productsDefault;

  useEffect(() => {
    const productData = products.find(product => product.id === parseInt(id, 10));
    setProduct(productData);
  }, [id, products]);

  const handleQuantityChange = (amount) => {
    const newQuantity = Math.max(0, quantity + amount); // Allow setting quantity to 0
    setQuantity(newQuantity);
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (quantity > 0 && product) {
      addToCart({ ...product, quantity });
      setQuantity(0); // Reset the quantity to 0 after adding to cart
    }
  };

  if (!product) {
    return <div>{i18n.language === 'en' ? 'Loading...' : 'Ładowanie...'}</div>;
  }

  return (
    <div className="product_productContainer">
      <h1>{i18n.language === 'en' ? 'THANK YOU FOR YOUR INTEREST' : 'OBRIGADO PELO SEU INTERESSE'}</h1>
      <div className="product_productDetails">
        <div className="product_productImage">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product_productInfo">
          <h2>{product.name}</h2>
          <p className="product_price">
            {i18n.language === 'en' ? 'BRL' : 'BRL'} {product.price}
          </p>
          <p className="product_description">{product.description}</p>

        
          <div className="product_quantitySelector">
            <button 
              className="product_quantityButton" 
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 0}
            >
              -
            </button>
            <span className="product_quantity">{quantity}</span>
            <button 
              className="product_quantityButton" 
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
          </div>

          <form className="product_orderForm" onSubmit={handleAddToCart}>
            <button type="submit" disabled={quantity === 0} className="product_addToCartButton">
              {i18n.language === 'en' ? 'Add to Cart' : 'Adicionar ao carrinho'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Product;
