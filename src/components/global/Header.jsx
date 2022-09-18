import React from "react";
import { Link, Navigate, NavLink, Routes } from "react-router-dom";
import LogoHeader from "../../assets/svg/LogoHeader";
import Button from "../home-page/Button";
import "./Header.scss";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white  shadow-lg py-3 h-[85px]">
      <div className="container max-w-[1320px] mx-auto">
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
              <p className="text-base font-semibold text-black focus-visible:outline-none active:text-green-700 lg:hover:text-green-500">
                New Feed
              </p>
            </Link>
          </nav>
          <Button
            data="Đăng kí"
            className="rounded ml-4 min-w-[120px] bg-neutral-500"
            href="/choose-ingredient"
          />
          <Button
            data="Đăng nhập"
            className="rounded ml-8 min-w-[120px]"
            href="/choose-ingredient"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
