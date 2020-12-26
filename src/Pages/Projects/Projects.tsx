import React, { useEffect, useState } from "react";
import Card from "../../Components/Cards/Card";
import Title from "../../Components/Project/Title";
import "./Projects.css";
import one from "../../Services/Card/Rectangle 28.png";
import two from "../../Services/Card/Rectangle 28 (1).png";
import three from "../../Services/Card/Rectangle 28 (2).png";

const Projects = () => {
  const [cards, setCards] = useState<any[]>([]);
  useEffect(() => {
    const card = [
      {
        title: "Jaxart: Hackathon",
        image: <img src={one} alt="alt" className="proj-img"/>,
        description: "In this case, the role of the health laboratory is very important to do a disease detection...",
      },
      {
        title: "Biotech",
        image: <img src={two} alt="alt" className="proj-img"/>,
        description: "Herbal medicine is very widely used at this time because of its very good for your health...",
      },
      {
        title: "To infinity and beyond",
        image: <img src={three} alt="alt" className="proj-img"/>,
        description: "A healthy lifestyle should start from now and also for your skin health. There are some...",
      },
    ];
    setCards(card);
  }, []);
  return (
    <div className="proj-background">
      <div className="projects">
        <Title />
        <div className="card-container">
          {cards.map((e, index) => (
            <Card image={e.image} title={e.title} key={index} description={e.description}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
