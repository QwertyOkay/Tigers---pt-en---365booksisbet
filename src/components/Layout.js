import React, {useEffect} from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import CookieBar from './CookieBar';
import { SiteProvider, useSite } from '../context/SiteContext';

const Layout = () => {

  return (
    <SiteProvider>
    <div >
      <Header />
    
      <main style={{paddingTop: '13vh'}}>
        <Outlet />
      </main>
      <Footer />
      <CookieBar/>
    </div>
    </SiteProvider>
  );
};

export default Layout;
