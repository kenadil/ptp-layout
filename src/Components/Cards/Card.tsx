import React from "react";
import "./Card.css";

const Card = (props: any) => {
  return (
    <div className="card">
      {props.image}
      <div className="card-text">
        <h1 className="card-title">{props.title}</h1>
        <p className="card-description">{props.description}</p>
        <a className="more" href="https://www.youtube.com/watch?v=eFsK43Dx4oI" target="_blank">Read more →</a>
      </div>
    </div>
  );
};

export default Card;
