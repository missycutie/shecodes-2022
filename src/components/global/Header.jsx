import React from "react";
import { Link, Navigate, NavLink, Routes } from "react-router-dom";
import CoinIcon from "../../assets/svg/CoinIcon";
import LogoHeader from "../../assets/svg/LogoHeader";
import UserIcon from "../../assets/svg/UserIcon";
import Button from "../home-page/Button";
import "./Header.scss";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white  shadow-lg py-3 h-[85px]">
      <div className="container ">
        <div className="flex justify-between">
          <div className="header-logo">
            <Link to="/">
              <LogoHeader />
              <span className="text-[#1C6758] text-2xl font-bold">
                Onee Care
              </span>
            </Link>
          </div>
          <nav className="flex items-center">
            <Link to="/new-feed">
              <p className="text-base font-semibold text-black focus-visible:outline-none active:text-green-700 lg:hover:text-green-500 mr-5">
                Cộng đồng
              </p>
            </Link>
            <Link to="/new-feed">
              <p className="text-base font-semibold text-black focus-visible:outline-none active:text-green-700 lg:hover:text-green-500">
                Hướng dẫn sử dụng
              </p>
            </Link>
          </nav>
          <div className="flex items-center ml-12 cursor-pointer">
            <CoinIcon />
            <span className="ml-2">100</span>
          </div>
          <div className="flex items-center ml-5 cursor-pointer">
            <UserIcon />
            <span className="ml-2 font-bold">Tina Châu</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
