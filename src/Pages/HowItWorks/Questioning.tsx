import React from "react";
import List from "../../Components/List/List";
import Description from "../../Components/Question/Question";
import "./Questioning.css";
import Rocket from "../../Components/Rocket/Rocket";

const HowWorks = () => {
  return (
    <div className="background" id="how">
      <div className="how-works">
        <Description />
        <List />
        <Rocket />
      </div>
    </div>
  );
};

export default HowWorks;
