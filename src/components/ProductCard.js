import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { t } = useTranslation();

  // Format the price with 'PLN' instead of the symbol 'zł'
  const formatPrice = (price) => {
    return `${Number(price).toFixed(2)} PLN`; // Convert to number and format as "XX.XX PLN"
  };

  return (
    <div className="productCard_card">
      {/* Render the badge if it exists */}
      {product.badge && (
        <div className="productCard_badge">{t(`badge.${product.badge}`, product.badge)}</div>
      )}
      <div className="productCard_image-container">
        <img src={product.image} alt={product.name} className="productCard_image" />
      </div>
      <div className="productCard_details">
        <h2 className="productCard_name">{product.name}</h2>
        <p className="productCard_price">{formatPrice(product.price)}</p>
        <Link to={`/product/${product.id}`} className="productCard_button">
          {t('product.viewProduct')}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
