import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaUserCircle } from "react-icons/fa";
import { GrInstagram, GrPinterest, GrMailOption } from "react-icons/gr";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="https://twitter.com/" target="_blank" rel="nonreferrer">
        <AiFillTwitterCircle size="1.8em" color="black" />
      </a>
      <a href="https://facebook.com/" target="_blank" rel="nonreferrer">
        <FaFacebook size="1.7em" color="black" />
      </a>
      <a href="https://instagram.com/" target="_blank" rel="nonreferrer">
        <GrInstagram size="1.6em" color="black" />
      </a>
      <a href="https://pinterest.com/" target="_blank" rel="nonreferrer">
        <GrPinterest size="1.6em" color="black" />
      </a>
      <GrMailOption size="1.7em" color="black" />
    </footer>
  );
};

export default Footer;
