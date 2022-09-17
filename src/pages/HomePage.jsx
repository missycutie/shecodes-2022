import React from 'react';
import Layout from '../components/global/Layout';
import ChooseCategory from '../components/home-page/ChooseCategory';
import HomeIllustrate from '../assets/img/home-illustrate.png';
import '../components/home-page/HomePage.scss';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
      <div className='home-page'>
        <div className="home-page-inner">
          <img src={HomeIllustrate} alt="" className="home-img" />
          <div className="home-col-right">
          <ChooseCategory />
            <div className="home-cta-register">
              <p>
              Bạn chưa có tài khoản?
              </p>
              <p>
                <Link to='/'>
                  Đăng ký ngay
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HomePage;
