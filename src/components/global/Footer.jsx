import React from "react";
import { Link, Navigate, NavLink, Routes } from "react-router-dom";
import "./Footer.scss";
import LogoHeader from "../../assets/svg/LogoHeader";
import LanguageSwitch from "./LanguageSwitch";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="flex justify-between">
          <div className="header-logo">
            <Link to="/">
              <LogoHeader />
              <span className="text-[#1C6758] text-2xl font-bold">
                Onee Care
              </span>
            </Link>
          </div>
          {/* <LanguageSwitch /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
