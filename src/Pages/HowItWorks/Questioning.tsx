import React from "react";
import List from "../../Components/List/List";
import Description from "../../Components/Question/Question";
import "./Questioning.css";

const HowWorks = () => {
  return (
    <div className="background">
      <div className="how-works">
        <Description />
        <List />
      </div>
    </div>
  );
};

export default HowWorks;
