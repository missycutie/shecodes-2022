import React from 'react';

const Layout = (props) => {
  return (
    <div className="max-w-[400px] min-h-[700px] m-auto bg-white p-5">
      {props.children}
    </div>
  );
};

export default Layout;