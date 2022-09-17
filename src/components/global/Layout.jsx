import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="root-wrapper">
      <Header />
      <div className="flex-1 px-5 mt-[85px]">
        <div className="container">{props.children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
