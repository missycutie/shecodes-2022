import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className='container'>
        Header
        <nav>
          <a href='/new-feed'>New feed</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
