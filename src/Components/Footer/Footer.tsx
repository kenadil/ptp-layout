import React, { useEffect, useState } from "react";
import ContactUs from "../ContactUs/ContactUs";
import Logo from "../Logo/Logo";
import { nav } from "../Navigation/Navigation";
import Social from "../Social/Social";
import "./Footer.css";

const Footer = () => {
  const [navs, setNavs] = useState<any[]>([]);
  useEffect(() => {
    const navList: any[] = [];
    nav.map((e) => {
      if (e.key !== "1") navList.push(e);
    });
    setNavs(navList);
  }, []);
  return (
    <div className="footer">
      <Logo />
      <div className="lists">
        <ul className="footer-list">
          {navs.map((e) => (
            <li key={e.key} className="footer-link">
              <a href={e.href}>{e.title}</a>
            </li>
          ))}
        </ul>
        <Social />
      </div>
      <ContactUs />
    </div>
  );
};

export default Footer;
