import React from "react";
import "./Paragraph.css";

const Paragraph = (props: any) => {
  return (
    <div className="paragraph">
      <h1 className="title">{props.title}</h1>
      <p className="par-description">{props.description}</p>
    </div>
  );
};

export default Paragraph;
