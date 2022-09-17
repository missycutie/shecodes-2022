import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
  return (
    <>
    <Header />
    <div className="main">
      <div className="container">
    {props.children}

      </div> 
    </div>
    <Footer />
    </>
  );
};

export default Layout;