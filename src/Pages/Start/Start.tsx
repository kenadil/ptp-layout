import React from "react";
import SignButtons from "../../Components/Buttons/SIgn/Sign";
import "./Start.css";
import Sign from "../../Services/Sign/Sign.svg";

const title = "Your startup starts here";
export const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const Start = () => {
  return (
    <div className="start-page">
      <h1 className="start-title">{title}</h1>
      <p className="start-description">
          {description}
      </p>
      <SignButtons />
      <img src={Sign} alt="desc-pic" className="desc-pic" />
    </div>
  );
};

export default Start;
