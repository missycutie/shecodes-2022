import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='header-wrapper'>
          <div className='header-logo'>Logo</div>
          <nav>
            <a href='/new-feed'>New feed</a>
          </nav>

          <div className="header-user">
            Login
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
