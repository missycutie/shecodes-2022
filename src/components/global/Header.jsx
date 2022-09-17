import React from 'react';
import { Link, Navigate, NavLink, Routes } from 'react-router-dom';
import LogoHeader from '../../assets/svg/LogoHeader';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='header-wrapper'>
          <div className='header-logo'>
            <Link to='/'>
              <LogoHeader />
              <span className='logo-name'>Onee Care</span>
            </Link>
          </div>
          <nav>
            <Link to='/new-feed'>
              New Feed
            </Link>
          </nav>

          <div className='header-user'>Login</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
