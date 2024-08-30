import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    
    <div className="footer-container">
      <div className="logo">
        <img src="../../assets/logo-regular.png" />
      </div>
      <div>
        <ul>
          <li>Links</li>
          <li>Story</li>
          <li>Contact</li>
          <li>Track Order</li>
          <li>Help</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Bedroom</li>
          <li>Decor</li>
          <li>Living Room</li>
          <li>Office</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>Subscribe</li>
          <li>
            <input type="email" placeholder="Your email address"></input>
          </li>
          <li>
            <button className="subscribe-btn">SUBSCRIBE</button>
          </li>
        </ul>
      </div>
    </div>
    
  );
};

export default Footer;
