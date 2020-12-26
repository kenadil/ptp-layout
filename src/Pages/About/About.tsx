import React, { useEffect, useState } from "react";
import Paragraph from "../../Components/Paragraph/Paragraph";
import "./About.css";
import about from "../../Services/About/About.svg";

const About = () => {
  const [paragraphs, setParagraphs] = useState<any[]>([]);

  useEffect(() => {
    const about = [
      {
        title: "About us",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        title: "Our goals and mission",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
      {
        title: "Why this platform can be useful for you",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      },
    ];
    setParagraphs(about);
  }, []);
  return (
    <div className="a-background" style={{ backgroundImage: `url(${about})` }}>
      <div className="about" id="about">
        {paragraphs.map((e) => (
          <Paragraph title={e.title} description={e.description} />
        ))}
      </div>
    </div>
  );
};

export default About;
