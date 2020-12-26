import React from "react";
import Header from "../../Components/Header/Header";
import About from "../About/About";
import HowWorks from "../HowItWorks/Questioning";
import Projects from "../Projects/Projects";
import Start from "../Start/Start";

const Landing = () => {
  return (
    <>
      <Header />
      <Start />
      <HowWorks />
      <About />
      <Projects />
    </>
  );
};

export default Landing;
