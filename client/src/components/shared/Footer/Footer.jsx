import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaUserCircle } from "react-icons/fa";
import { GrInstagram, GrPinterest, GrMailOption } from "react-icons/gr";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <AiFillTwitterCircle size="1.8em" color="black" />
      <FaFacebook size="1.7em" color="black" />
      <GrInstagram size="1.6em" color="black" />
      <GrPinterest size="1.6em" color="black" />
      <GrMailOption size="1.7em" color="black" />
    </footer>
  );
};

export default Footer;
