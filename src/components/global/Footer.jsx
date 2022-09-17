import React from "react";
import { Link, Navigate, NavLink, Routes } from "react-router-dom";
import "./Footer.scss";
import LogoHeader from "../../assets/svg/LogoHeader";
import LanguageSwitch from "./LanguageSwitch";

const Footer = () => {
  return (
    <footer className="bg-green-100">
      <div className="container">
        <div className="flex justify-between py-5">
          <div className="header-logo">
            <Link to="/">
              <LogoHeader />
              <span className="text-[#1C6758] text-2xl font-bold">
                Onee Care
              </span>
            </Link>
          </div>
          <div className="self-start flex-none">
            <LanguageSwitch />
          </div>
        </div>
        <div className="flex flex-col">
          <hr className="my-4 h-2 text-neutral-15" />
          <div className="space-y-1">
            <p className="text-sm font-semibold text-neutral-700 text-center">
              @Copyright Onee-chan 2022
            </p>
            <p className="text-sm font-semibold text-neutral-700 text-center">
              Shecodes 2022
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
