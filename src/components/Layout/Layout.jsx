import React from 'react';
import Header from '../Header/Header';  // Ensure Header is correctly imported
import Routers from '../../router/Routers';
import Footer from '../Footer/Footer';  // Ensure Footer is correctly imported

const Layout = () => {
  return (
    <div>
      <Header />
      <Routers />
      <Footer />
    </div>
  );
};

export default Layout;
