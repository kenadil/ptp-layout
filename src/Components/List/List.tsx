import React, { useEffect, useState } from "react";
import "./List.css";
import sign from "../../Services/Items/SignUp.svg";
import verify from "../../Services/Items/Verify.svg";
import share from "../../Services/Items/Share.svg";
import Item from "./Item/Item";

const List = () => {
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => {
    const i = [
      {
        text: "Sign up to join our community",
        image: <img src={sign} alt="sign-in" />,
      },
      {
        text: "Complete your profile and describe in details your profile",
        image: <img src={verify} alt="verify" />,
      },
      {
        text: "Share your ideas and find companions or join an idea that interests you",
        image: <img src={share} alt="sign-in" />,
      },
    ];
    setItems(i);
    console.log(items);
  }, []);
  return (
    <ul className="q-list">
      {items.map((e, index) => (
        <Item
          text={e.text}
          image={e.image}
          isOdd={index % 2 === 0}
          key={index}
        />
      ))}
    </ul>
  );
};

export default List;
