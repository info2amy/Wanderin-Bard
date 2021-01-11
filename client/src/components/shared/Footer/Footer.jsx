import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram, GrPinterest, GrMailOption } from "react-icons/gr";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="https://twitter.com/" target="_blank" rel="noreferrer">
        <AiFillTwitterCircle size="1.8em" color="black" />
      </a>
      <a href="https://facebook.com/" target="_blank" rel="noreferrer">
        <FaFacebook size="1.7em" color="black" />
      </a>
      <a href="https://instagram.com/" target="_blank" rel="noreferrer">
        <GrInstagram size="1.6em" color="black" />
      </a>
      <a href="https://pinterest.com/" target="_blank" rel="noreferrer">
        <GrPinterest size="1.6em" color="black" />
      </a>
      <GrMailOption size="1.7em" color="black" />
    </footer>
  );
};

export default Footer;
