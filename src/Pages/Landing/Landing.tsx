import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import About from "../About/About";
import HowWorks from "../HowItWorks/Questioning";
import Projects from "../Projects/Projects";
import BottomStart from "../Start/BottomStart/BottomStart";
import Start from "../Start/Start";

const Landing = () => {
  return (
    <>
      <Header />
      <Start />
      <HowWorks />
      <About />
      <Projects />
      <BottomStart />
      <Footer />
    </>
  );
};

export default Landing;
