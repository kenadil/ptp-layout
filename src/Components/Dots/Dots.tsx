import React, { useEffect, useState } from "react";
import { act } from "react-dom/test-utils";
import "./Dots.css";

const Dots = () => {
  const [active, setActive] = useState("1");
  const [pages, setPages] = useState<any[]>([]);

  useEffect(() => {
    const dots = [
      {
        key: "1",
      },
      {
        key: "2",
      },
      {
        key: "3",
      },
      {
        key: "4",
      },
    ];
    setPages(dots);
  });
  return (
    <div className="dots-container">
      {pages.map((e) => (
        <span
          className={active === e.key ? "dot active-dot" : "dot"}
          key={e.key}
          onClick={() => setActive(e.key)}
        ></span>
      ))}
    </div>
  );
};

export default Dots;
