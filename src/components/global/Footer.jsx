import React from "react";
import { Link, Navigate, NavLink, Routes } from "react-router-dom";
import LogoHeader from "../../assets/svg/LogoHeader";
import LanguageSwitch from "./LanguageSwitch";

const Footer = () => {
  return (
    <footer className="bg-green-100">
      <div className="container">
        <div className="flex items-center justify-between pt-[10px]">
          <div className="header-logo">
            <Link to="/">
              <LogoHeader />
              <span className="text-[#1C6758] text-2xl font-bold">
                Onee Care
              </span>
            </Link>
          </div>
          <div className="flex-none">
            <LanguageSwitch />
          </div>
        </div>
        <div className="flex flex-col mb-3">
          <hr className="my-2 h-2 text-neutral-15" />
            <p className="text-sm font-semibold text-neutral-700 text-center">
              @Copyright Onee-chan 2022
            </p>
            <p className="text-sm font-semibold text-neutral-700 text-center">
              Shecodes 2022
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
