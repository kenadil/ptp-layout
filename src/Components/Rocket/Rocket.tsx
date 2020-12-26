import React from "react";
import "./Rocket.css";
import rocket from "../../Services/Rocket/Rocket.svg";

const rDescription =
  "Finally! You can participate in our events and get the opportunity to turn your idea into reality!";

const Rocket = () => {
  return (
    <div className="rocket" style={{ backgroundImage: `url(${rocket})` }}>
      <div className="rocket-container">
        <p className="r-description">{rDescription}</p>
        <button type="button" className="join-button">
          Let me try!
        </button>
      </div>
    </div>
  );
};

export default Rocket;
