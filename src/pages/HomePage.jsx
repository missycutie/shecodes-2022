import React from 'react';
import Layout from '../components/global/Layout';
import ChooseCategory from '../components/home-page/ChooseCategory';
import HomeIllustrate from '../assets/img/home-illustrate.png';
import '../components/home-page/HomePage.scss';

const HomePage = () => {
  return (
      <div className='home-page'>
        <div className="home-page-inner">
          <img src={HomeIllustrate} alt="" className="home-img" />
          <ChooseCategory />
        </div>
      </div>
  );
};

export default HomePage;
