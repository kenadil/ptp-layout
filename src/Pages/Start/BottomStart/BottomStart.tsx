import React from "react";
import Title from "../../../Components/BottomStart/Title";
import "./BottomStart.css";
import clouds from "../../../Services/BottomStart/BottomStart.svg";
import SignButtons from "../../../Components/Buttons/SIgn/Sign";

const BottomStart = () => {
  return (
    <div
      className="bottom-background"
      style={{ backgroundImage: `url(${clouds})` }}
    >
      <div className="bottom-start">
        <Title />
      </div>
      <div className="bottom-buttons">
        <SignButtons />
      </div>
    </div>
  );
};

export default BottomStart;
