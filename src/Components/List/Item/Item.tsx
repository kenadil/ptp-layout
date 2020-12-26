import React from "react";
import "./Item.css";

const Item = (props: any) => {
  return props.isOdd ? (
    <li
      key={props.key}
      className="item"
    >
      {props.image}
      <p className="li-description">{props.text}</p>
    </li>
  ) : (
    <li
      key={props.key}
      className="item left-right"
    >
      <p className="li-description">{props.text}</p>
      {props.image}
    </li>
  )
};

export default Item;
