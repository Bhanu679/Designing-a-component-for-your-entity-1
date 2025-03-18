// write the component code here
// write the component code here
// write the component code here
import React from "react";
import "./usercard.css"; // Optional: You can create this file for custom styling

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://i.pinimg.com/736x/7a/1e/91/7a1e91371531eaf05ccf9ca6b79de38c.jpg"; 
  const name = "bhanusree";
  const email = "bhanusree13@gmail.com";
  const phoneNumber = "9584649857";
  const address = "chittor,ap";

  return (
    <div className="usercard">
      <img src={profilePhoto} alt="Profile" className="usercard-photo" />
      <h2 className="usercard-name">{name}</h2>
      <p className="usercard-email">Email: {email}</p>
      <p className="usercard-phone">Phone: {phoneNumber}</p>
      <p className="usercard-address">Address: {address}</p>
    </div>
  );
};

export default Usercard;
