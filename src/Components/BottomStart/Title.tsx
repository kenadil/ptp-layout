import React from "react";
import "./Title.css";

const description = "Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.";

const Title = () => {
  return (
    <div className="proj-container">
      <p className="checkout proj-checkout">Make it easier</p>
      <h1 className="proj-title">Get started now</h1>
      <p className="title-description">{description}</p>
    </div>
  );
};

export default Title;
