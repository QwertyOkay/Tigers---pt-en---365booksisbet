import React from 'react';
import { useTranslation } from 'react-i18next';
import ProductCard from '../components/ProductCard';
import productsDefault from '../data/products'; // Default language products
import productsEn from '../data/products-en'; // English language products
import './Home.css';
import Hero from '../components/Hero';

const Home = () => {
  const { t, i18n } = useTranslation();

  // Determine which product data to use based on the current language
  const products = i18n.language === 'en' ? productsEn : productsDefault;

  return (
    <>
      <Hero />
      <div id="products-section" className="home_container">
        <h1 className="home_heading">{t('home.products')}</h1>
        <div className="home_grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
