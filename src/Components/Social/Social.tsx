import React from "react";
import "./Social.css";
import facebook from "../../Services/Social/facebook.svg";
import telegram from "../../Services/Social/telegram.svg";
import twitter from "../../Services/Social/twitter.svg";

const Social = () => {
  return (
    <li className="social">
      <ul>
        <a href="#">
          <img src={facebook} alt="facebook" />
        </a>
      </ul>
      <ul>
        <a href="#">
          <img src={telegram} alt="telegram" />
        </a>
      </ul>
      <ul>
        <a href="#">
          <img src={twitter} alt="twitter" />
        </a>
      </ul>
    </li>
  );
};

export default Social;
