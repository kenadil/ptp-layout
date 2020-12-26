import React from "react";
import ContactButtons from "../Buttons/Contact/Contact";
import Logo from "../Logo/Logo";
import "./Header.css";

const Header = () => {
  return (
    <div className="header" id="start">
      <Logo />
      <ContactButtons />
    </div>
  );
};

export default Header;
