import React from "react";
import "./Contact.css";

const ContactButtons = () => {
  return (
    <div className="flex-buttons">
      <a href="#" className="contact-button">
        Contact us
      </a>
      <button type="button" className="join-button">
        Join
      </button>
    </div>
  );
};

export default ContactButtons;
