import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Product from './pages/Product';
import './App.css';
import Privacy from './pages/PrivacyEn';
import Terms from './pages/TermsEn';
import ScrollToTop from './components/ScrollToTop'; 
import Contact from './pages/ContactEn';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <Router basename={isEnglish ? '/en' : '/'}>
      <ScrollToTop />
      <Routes>
        {/* Czech Routes (Root) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* English Routes (/en) */}
        <Route path="/en" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Redirect /en to /en/ if accessed directly */}
        <Route path="/en" element={<Navigate to="/en/" replace />} />

        {/* Redirect any unknown paths */}
        <Route path="*" element={<Navigate to={isEnglish ? '/en/' : '/'} replace />} />
      </Routes>
    </Router>
  );
};

export default App;
