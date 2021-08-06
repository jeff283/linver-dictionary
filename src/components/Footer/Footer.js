import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <hr style={{ width: "90%", marginTop: 20 }} />
      <span className="name">
        Made by{" "}
        <a href="https://github.com/jeff283" target="__blank">
          Jeff Njoroge
        </a>
      </span>
      <div className="iconContainer">
        <a href="https://www.instagram.com/____pipinstall___/" target="__blank">
          <i className="fab fa-instagram-square fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/jeff-njoroge-222a79211/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCnP1eCPAS42SSa1HtBQC7RQ" target="__blank">
          <i className="fab fa-youtube fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
