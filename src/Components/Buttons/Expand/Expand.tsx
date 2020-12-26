import React from "react";
import "./Expand.css";

const Expand = () => {
  return (
    <button type="button" className="expand" onClick={() => alert("В разработке")}>
      View all
    </button>
  );
};

export default Expand;