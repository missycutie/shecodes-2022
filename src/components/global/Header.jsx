import React from 'react';
import { Link, Navigate, NavLink, Routes } from 'react-router-dom';
import Logo from '../../assets/svg/Logo';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='header-wrapper'>
          <div className='header-logo'>
            <Link to='/'>
              <Logo />
              <span className='logo-name'>Onee Care</span>
            </Link>
          </div>
          <nav>
            <Link to='/new-feed'>
              News Feed
            </Link>
          </nav>

          <div className='header-user'>Login</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
