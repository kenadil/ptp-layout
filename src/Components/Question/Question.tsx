import React from "react";
import { description } from "../../Pages/Start/Start";
import "./Question.css";

const title = "How it works?";

const Description = () => {
  return (
    <>
      <h1 className="q-title">{title}</h1>
      <p className="q-description">{description}</p>
    </>
  );
};

export default Description;
