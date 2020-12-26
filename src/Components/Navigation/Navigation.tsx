import React, { useEffect, useState } from "react";
import { useScrollDirection } from "../../Scripts/GoingUp/GoingUp";
import "./Navigation.css";

const Navigation = () => {
  const [navs, setNavs] = useState<any[]>([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive("1");
    const nav = [
      {
        title: "How it works?",
        href: "#how",
        key: "2",
      },
      {
        title: "About us",
        href: "#about",
        key: "3",
      },
      {
        title: "Projects",
        href: "#projects",
        key: "4",
      },
      {
        title: "Start",
        href: "#start",
        key: "1",
      },
    ];
    setNavs(nav);
  }, []);

  const scrollY = useScrollDirection();

  useEffect(() => {
    if (scrollY < 900)
      setActive("1");
    else if (scrollY >= 900 && scrollY < 2000) 
      setActive("2");
    else if (scrollY >= 2000 && scrollY < 2600)
      setActive("3");
    else if (scrollY >= 2600)
      setActive("4")
  }, [scrollY]);
  return (
    <ul className="navigation">
      {navs.map((e) => (
        <li className="nav-tab" key={e.key}>
          <a
            className={`nav-link ${active === e.key ? "active" : ""}`}
            href={e.href}
            onClick={() => setActive(e.key)}
          >
            {e.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
